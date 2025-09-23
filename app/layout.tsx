import '@/app/global.css';

import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import DefaultSearchDialog from '@/components/search';

const inter = Inter({
  subsets: ['latin'],
});

const baseURL = "https://docs.ritual.codes"

export const metadata: Metadata = {
  title: "Ritual Docs",
  description: "Documentation for Ritual Developers.",
  openGraph: {
    title: "Ritual Docs",
    description: "Documentation for Ritual Developers.",
    images: [
      {
        url: `${baseURL}/og-image.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon-180x180.png"
  },
};
export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            enabled: true,
            SearchDialog: DefaultSearchDialog,
          }}>{children}</RootProvider>
      </body>
    </html>
  );
}
