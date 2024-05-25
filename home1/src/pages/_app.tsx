// src/pages/_app.tsx

import "@/styles/globals.css";

import type { AppProps } from 'next/app';
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: 'Pretendard-Regular';
          src: url('/fonts/PretendardVariable.ttf') format('woff');
          font-weight: 400;
          font-style: normal;
        }

        /* 다른 전역 스타일들 */
        /* ... */
      `}</style>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
