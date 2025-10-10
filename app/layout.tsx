import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import { headers } from 'next/headers';
import ContextProvider from '@/context';

export const dynamic = 'force-dynamic'; // ✅ add this line

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersObj = await headers();
  const cookies = headersObj.get('cookie');

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
     <title>PushPlay - The Universal On-Chain Game on Push Chain</title>
        <meta
    name="description"
    content="PushPlay is a cross-chain on-chain memory game built on Push Chain. Flip, match, and earn — no chain switching, no gas confusion, just pure universal gameplay."
  />
   <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <ContextProvider cookies={cookies}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
