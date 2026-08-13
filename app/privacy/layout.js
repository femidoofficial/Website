import "./globals.css";

export const metadata = {
  title: "SheGo",
  description: "SheGo website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
