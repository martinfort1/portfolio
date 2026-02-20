import "./globals.css";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Martin Fort | website",
  description: "Fullstack web developer portfolio",
  // icons: {
  //   icon: [
  //     { url: "/favicon.32x32.png", sizes: "32x32", type: "image/png" },
  //     { url: "/favicon.16x16.png", sizes: "16x16", type: "image/png" },
  //   ]  
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 `}>
        <div
          className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[9rem] sm:w-[68.75rem] dark:bg-[#946263]"
        ></div>

        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] 
          h-[31.25rem] w-[50rem] rounded-full blur-[9rem] 
          sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"
        ></div>
        <Toaster position="bottom-center" toastOptions={{ duration: 4000 }} />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
