import Head from "next/head";
import HomeComponent from "../components/home/home";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Lemarchandi</title>
        <meta
          name="description"
          content="Lemarchandi Dispensary"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
