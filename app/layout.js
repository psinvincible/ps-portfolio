import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import "./tailwind.css";


export const outfit = Outfit({
  subsets: ["latin"], weight: ['400', '500', '600', '700']
});

export const ovo = Ovo({
  subsets: ["latin"], weight: ['400']
});

 const metadata = {
  title: "Portfolio - Prince Prajapati",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth night" >
      <body
        className={`antialiased leading-8 overflow-x-hidden bg-theme text-theme`}
      >
        {children}
      </body>
    </html>
  );
}
