

import "./globals.css";




export const metadata = {
  title: "Nexgent - Webflow HTML Website Template",
  description: "Premium tech landing page built with Next.js",
   icons: {
    icon: "/nexgent.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` cn("h-full antialiased scroll-smooth", "font-sans",)`}
    >
      <body className="min-h-full flex flex-col bg-[#0C1F0F] overflow-x-hidden">{children}</body>
    </html>
  );
}
