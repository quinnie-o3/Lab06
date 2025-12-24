import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merriweather.className} style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
