import "@/styles/globals.css";
import Layout from "@/components/Layout";
import localFont from 'next/font/local'
import Script from "next/script"; 

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
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QF8VZ70KH8"
        strategy="afterInteractive"
      />

      {/* Initialize GA4 with your config */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-QF8VZ70KH8');
  `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
