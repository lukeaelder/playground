import path from 'path';

const commandTypes: any = {
    0: { name: 'MOVE_TO', args: 2, command: 'mM' },
    1: { name: 'CURVE_TO', args: 6, command: 'cC' },
};

const isWhiteSpace = (c: string) => {
    return ' ' === c || '\t' === c || '\r' === c || '\n' === c;
};

const isDigit = (c: string) => {
    return c.charCodeAt(0) >= '0'.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0);
};

const humanizeDigit = (num: number) => {
    return +num.toFixed(3).replace(/\.?0*$/, '');
};

/*
    Takes in an SVG path string and return an object containing all the commands
    Rules:
        - Contains only 1 move command followed by curve commands
        - Must begin at 0 and end at 1 on the X axis
        - The path must only move in the positive X direction
    Example:
        Input: M0 0 C0 0 0 0 1 1 -> Linear line
        Output: [
            { type: 0, x: 0, y: 0 },
            { type: 1, x1: 0, y1: 0, x2: 0, y2: 0, x: 1, y: 1 },
        ]
*/

const generatePathData = (curPath: string) => {
    const path = curPath + ' ';
    const commands: any = [];
    const curArgs = [];

    let curCommandType = -1;
    let curNum = '';
    let curNumHasDecimal = false;
    let curNumHasExponential = false;
    let curNumHasExponentialDigits = false;
    let canBeCommaOrCommand = true;

    let isRelative = false;
    let curCords = { x: 0, y: 0 };

    const pushCommand = (command: any) => {
        commands.push({ ...command, type: curCommandType });
        curArgs.length = 0;
        canBeCommaOrCommand = true;
        curCords = { x: command.x, y: command.y };
    };

    for (let i = 0; i < path.length; i++) {
        const c = path[i];

        // Build number string
        const isEndingDigit = isDigit(c) && c === '0' && curNum === '0';
        if (isDigit(c) && !isEndingDigit) {
            curNum += c;
            curNumHasExponentialDigits = curNumHasExponential;
            continue;
        }
        if (c === 'e' || c === 'E') {
            curNum += c;
            curNumHasExponential = true;
            continue;
        }
        if ((c === '-' || c === '+') && curNumHasExponential && !curNumHasExponentialDigits) {
            curNum += c;
            continue;
        }
        if (c === '.' && !curNumHasDecimal && !curNumHasExponential) {
            curNum += c;
            curNumHasDecimal = true;
            continue;
        }

        // Check for complete new number
        if (curNum && curCommandType !== -1) {
            const val = Number(curNum);
            if (isNaN(val)) {
                throw new Error(`Invalid number ending at ${i}`);
            }
            curArgs.push(val);

            if (curArgs.length === commandTypes[curCommandType].args) {
                // Convert relative to absolute
                if (!isRelative) {
                    curCords = {
                        x: curCommandType === 0 ? curArgs[0] : curArgs[4],
                        y: curCommandType === 0 ? curArgs[1] : curArgs[5],
                    };
                } else {
                    if (curCommandType === 0) {
                    } else {
                    }
                }
                // Push final command to commands
                if (curCommandType === 0) {
                    if (i === 0 && curArgs[0] !== 0) {
                        throw new Error(`Starting X cordinate must be 0`);
                    }

                    pushCommand({
                        x: curArgs[0],
                        y: curArgs[1],
                    });
                } else if (curCommandType === 1) {
                    if (isRelative) {
                        // Add current cords to all points and fix to 3 decimal places
                        curArgs[0] = humanizeDigit(curArgs[0] + curCords.x);
                        curArgs[1] = humanizeDigit(curArgs[1] + curCords.y);
                        curArgs[2] = humanizeDigit(curArgs[2] + curCords.x);
                        curArgs[3] = humanizeDigit(curArgs[3] + curCords.y);
                        curArgs[4] = humanizeDigit(curArgs[4] + curCords.x);
                        curArgs[5] = humanizeDigit(curArgs[5] + curCords.y);
                    }
                    pushCommand({
                        x1: curArgs[0],
                        y1: curArgs[1],
                        x2: curArgs[2],
                        y2: curArgs[3],
                        x: curArgs[4],
                        y: curArgs[5],
                    });
                }
            }

            curNum = '';
            curNumHasDecimal = false;
            curNumHasExponential = false;
            curNumHasExponentialDigits = false;
            canBeCommaOrCommand = true;
        }

        // If space, sign, comma, or 0 continue
        if (isWhiteSpace(c)) {
            continue;
        }
        // EX: M0,0,C is not valid
        if (c === ',' && canBeCommaOrCommand) {
            canBeCommaOrCommand = false;
            continue;
        }
        if (c === '-' || c === '+' || c === '.') {
            curNum = c;
            curNumHasDecimal = c === '.';
            continue;
        }
        if (isEndingDigit) {
            curNum = c;
            curNumHasDecimal = false;
            continue;
        }

        // Check for uncomplete / extra commands and commas
        if (curArgs.length !== 0) {
            throw new Error(`Unterminated command at index ${i}`);
        }
        if (!canBeCommaOrCommand) {
            throw new Error(`Unexpected character at index ${i}. Command cannot follow comma`);
        }

        // Set new command and relative
        canBeCommaOrCommand = false;
        if (c === 'c' || c === 'C') {
            curCommandType = 1;
            isRelative = c === 'c';
            continue;
        } else if (c === 'm' || c === 'M') {
            if (i !== 0) {
                throw new Error(
                    `MoveTo command must be at the beginning of the path at index ${i}`
                );
            }
            curCommandType = 0;
            isRelative = c === 'm';
            continue;
        } else {
            throw new Error(`Unexpected character at index ${i}`);
        }
    }

    if (curArgs.length !== 0 || !canBeCommaOrCommand) {
        throw new Error(`Unterminated command at end`);
    }

    const finalCommand = commands[commands.length - 1];
    if (finalCommand.x !== 1) {
        throw new Error(`Final X cordinate must be 1`);
    }

    return commands;
};

// Generates path string from commands array
const generatePath = (pathData: any, offset: number = 0) => {
    let res = '';
    for (let i = 0; i < pathData.length; i++) {
        const cur = pathData[i];
        const addCommand = () => {
            res += commandTypes[cur.type].command[1];
        };
        if (cur.type === 0) {
            addCommand();
            res += `${cur.x + offset} ${cur.y + offset} `;
        } else if (cur.type === 1) {
            addCommand();
            res += `${cur.x1 + offset} ${cur.y1 + offset} ${cur.x2 + offset} ${cur.y2 + offset} ${
                cur.x + offset
            } ${cur.y + offset} `;
        } else {
            throw new Error(`Invalid type ${cur.type} at index ${i}`);
        }
    }

    return res;
};

// Turn commands array into css animation
const generateAnimation = (pathData: any, properties: any = []) => {
    let res = `@keyframes animation {`;
    const prevCords = { x: 0, y: 0 };
    const easings = [];

    // Loop through commands generating the bezier curve for each keyframe
    for (let i = 0; i < pathData.length; i++) {
        // Get bounding box of command and scale
        const scale = [
            Math.abs(pathData[i].x - prevCords.x),
            Math.abs(pathData[i].y - prevCords.y),
        ];
        if (scale[0] === 0) scale[0] = 0.001;
        if (scale[1] === 0) scale[1] = 0.001;
        [scale[0], scale[1]] = [1 / scale[0], 1 / scale[1]];
        // Difference between [P0 and P1] and [P2 and P3] on x and y axis
        const diffs = [
            [Math.abs(prevCords.x - pathData[i].x1), Math.abs(prevCords.y - pathData[i].y1)],
            [Math.abs(pathData[i].x - pathData[i].x2), Math.abs(pathData[i].y - pathData[i].y2)],
        ];
        if (i !== 0)
            easings.push([
                humanizeDigit(0 + scale[0] * diffs[0][0]),
                humanizeDigit(0 + scale[1] * diffs[0][1]),
                humanizeDigit(1 - scale[0] * diffs[1][0]),
                humanizeDigit(1 - scale[1] * diffs[1][1]),
            ]);
        [prevCords.x, prevCords.y] = [pathData[i].x, pathData[i].y];
    }

    // Generate keyframes
    for (let i = 0; i < pathData.length; i++) {
        res += `${humanizeDigit(pathData[i].x * 100)}% {
            transform: translateY(-${humanizeDigit(pathData[i].y * 400)}px);
            ${
                i !== pathData.length - 1
                    ? 'animation-timing-function: cubic-bezier(' + easings[i] + ');'
                    : ''
            }
        }`;
    }

    res += '}';
    return res;
};

export { generatePathData, generatePath, generateAnimation };
