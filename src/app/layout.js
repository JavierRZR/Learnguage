import { montserrat } from './ui/fonts';
import { usePathname } from 'next/navigation';
// Locales
// import es from '../../public/locale/es';
// import en from '../../public/locale/en';
// const pathname = usePathname();
// const { locale } = router;
// const t = locale === 'es' ? es : en;

import "./globals.css"
import Navbar from './ui/components/navbar';

import { connectDB } from './lib/db-connect'
import { Suspense } from 'react';
// await connectDB()
export const metadata = {
  title: 'Learnguage - Practica multitud de lenguas de la mejor manera, hablandolas!',
  description: `Learnguage, una herramienta con la cual practicar los idiomas que quieras en comunidad,
  con gente de todo el mundo con el mismo objetivo. Aprender hablando, chat, camara, interacciones reales, "cara a cara".`
}

export default async function RootLayout({ children }) {



  return (
    <html lang="en">

      <body className={`${montserrat.className} antialiased bg-neutral-850 w-full h-full flex flex-col items-center justify-start`}>
        <Suspense fallback={<h1>Loading...</h1>}><Navbar /></Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
