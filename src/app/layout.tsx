import './globals.css';
import { Inter } from 'next/font/google';
import { LanguageWrapper } from './i18n';
import { LanguageToggle } from './components/language-toggle';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageWrapper>
          <header className="w-full max-w-5xl items-center justify-between font-mono">
            <h1 className="text-3xl flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
              Restaurant app
            </h1>
            <LanguageToggle />
          </header>
          <main className="ml-2">{children}</main>
        </LanguageWrapper>
      </body>
    </html>
  );
}
