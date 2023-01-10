import React from "react";
import { Helmet } from "react-helmet";

interface SeoProps {
  title: string;
}

const Seo = ({ title }: SeoProps) => {
  const metaDescription = "K-Software Empowerment BootCamp";
  const defaultTitle = "K-Software Empowerment BootCamp";

  return (
    <Helmet
      htmlAttributes={{
        lang: "ko",
      }}
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  );
};

export default Seo;
