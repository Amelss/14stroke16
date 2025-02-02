import "@/styles/globals.css";
import Layout from "@/components/Layout";
import localFont from 'next/font/local'

const einaFont = localFont({
  src: [
    {
      path: "../public/fonts/Eina01-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Eina01-BoldItalic.ttf", 
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Eina01-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/Eina01-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Eina01-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Eina01-RegularItalic.ttf", 
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Eina01-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/Eina01-SemiboldItalic.ttf", 
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-einaFont",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${einaFont.variable} font-sans bg-ivoryWhite`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
