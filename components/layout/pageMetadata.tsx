import Head from 'next/head';

export default function PageMetadata() {
  const siteTitle =
    'Web Developer | Clayton Faria | JavaScript | React.js | Next.js | Node.js';

  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{siteTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Web Developer | Clayton Faria | JavaScript | React.js | Next.js"
      />
      <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          siteTitle
        )}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
