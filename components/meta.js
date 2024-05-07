import Head from "next/head"
import { siteMeta } from 'lib/constant'
import { useRouter } from "next/router";
import siteImg from 'images/ogp.png'

const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta;

export default function Meta({ pageTitle, pageDesc, pageImage, pageImageW, pageImageH }) {
   const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
   const desc = pageDesc ?? siteDesc;

   const router = useRouter();
   const url = `${siteUrl}${router.asPath}`

   const img = pageImage || siteImg.src;
   const imgW = pageImageW || siteImg.width;
   const imgH = pageImageH || siteImg.height;
   const imgUrl = img.startsWith('https') ? img : `${siteUrl}${img}`

   return (
      <Head>
         <title>
            {title}
         </title>
         <meta property="og:title" content={title} />

         <meta name="description" content={desc} />
         <meta property="og:description" content={desc} />

         <link rel="canonical" href={url} />
         <meta property="og:url" content={url} />

         <meta property="og:site_name" content={siteTitle} />
         <meta property="og:type" content={siteType} />
         <meta property="og:locale" content={siteLocale} />

         <link rel="icon" href={siteIcon} />
         <link rel="apple-touch-icon" href={siteIcon} />

         <meta property="og:image" content={imgUrl} />
         <meta property="og:image:width" content={imgW} />
         <meta property="og:image:height" content={imgH} />
         <meta name="twitter:card" content="summary_large_image" />
      </Head>
   )
}