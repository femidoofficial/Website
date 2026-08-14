import "./globals.css";

export const metadata = {
  title: "Femido",
  description: "Femido website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
