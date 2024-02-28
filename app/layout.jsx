import { inter } from "./ui/fonts";
import "@styles/globals.css";

export const metadata = {
  title: "Social Links Profile",
  description: "Frontend Mentor challenge to build a Social Links Profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-clr-secondary-black grid  h-svh place-items-center md:h-screen">
        <main className={`${inter.className} max-w-[90rem] px-6 antialiased`}>
          {children}
        </main>
      </body>
    </html>
  );
}
