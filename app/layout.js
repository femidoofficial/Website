import "./globals.css";

export const metadata = {
  title: "SheGo | Women Driving Women Forward",
  description:
    "Indore’s dedicated ride community connecting verified female drivers with women commuters.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
