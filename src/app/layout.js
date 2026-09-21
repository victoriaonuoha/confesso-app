import "./globals.css";

export const metadata = {
  title: "Confesso :)",
  description: "An anonymous confession app.",
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
