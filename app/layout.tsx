import Navbar from '../components/Navbar';
import './globals.css';
import { Providers } from './providers';

export const revalidate = 0;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head />
            <body>
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
