import Head from "next/head";
export default function Meta({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta name="description" content={description}></meta>
    </Head>
  );
}
