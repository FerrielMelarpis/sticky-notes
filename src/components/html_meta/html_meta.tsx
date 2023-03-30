import Head from 'next/head';
import React from 'react';

type HtmlMetaProps = {
  title?: string;
  description?: string;
};

export const HtmlMeta: React.FC<HtmlMetaProps> = (props) => {
  const { title, description } = props;

  return (
    <Head>
      {title ? <title key="title">{title}</title> : null}
      {description
        ? <meta key="description" name="description" content={description} />
        : null}
    </Head>
  );
};
