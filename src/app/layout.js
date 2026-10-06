import "./globals.css";

export const metadata = {
  title: {
    default: "Confesso",
    template: "%s | Confesso",
  },

  description:
    "Confesso is a place to anonymously share your thoughts, secrets, stories, and confessions.",

  keywords: [
    "Confesso",
    "anonymous confessions",
    "confessions",
    "anonymous sharing",
    "share secrets",
    "anonymous stories",
  ],

  authors: [
    {
      name: "Confesso",
    },
  ],

  creator: "Confesso",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Confesso",
    description:
      "Share your thoughts, secrets, stories, and confessions anonymously on Confesso.",
    url: "https://devtoria-confesso.vercel.app",
    siteName: "Confesso",
    images: [
      {
        url: "https://devtoria-confesso.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Confesso - Anonymous Confessions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Confesso",
    description:
      "Share your thoughts, secrets, stories, and confessions anonymously on Confesso.",
    images: ["https://devtoria-confesso.vercel.app/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="  min-h-screen  ">
          
          {children}
        </div>
      </body>
    </html>
  );
}
