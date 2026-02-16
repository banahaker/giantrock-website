import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  canonical = '',
  ogImage,
  ogType = 'website'
}) => {
  const siteTitle = '巨磐資安培訓學院 | GiantRock Cybersecurity Academy';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  const defaultDescription = '專為台灣中小企業打造的實戰型資安培訓學院。提供網路釣魚防護、勒索軟體應變、供應鏈資安等課程。500+企業客戶，10,000+培訓人次的信賴選擇。';

  const siteUrl = 'https://www.giantrocktw.com';
  const defaultImage = `${siteUrl}/logo_blue_full.png`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={`${siteUrl}${canonical}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:locale" content="zh_TW" />
      <meta property="og:site_name" content="巨磐資安培訓學院" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || defaultImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="Traditional Chinese" />
      <meta name="author" content="巨磐資安培訓學院" />
    </Helmet>
  );
};

export default SEO;
