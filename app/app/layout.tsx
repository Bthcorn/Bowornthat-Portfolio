import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');
</style>;

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Bowornthat's Portfolio",
  description: "Bowornthat's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth md:scroll-auto"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.io" sizes="48x48" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className={`min-h-dvh bg-background ${lexend.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
