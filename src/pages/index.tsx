import type { NextPage } from "next";
import Head from "next/head";
import Layout from "components/Layout/Layout";
import styles from "styles/Home.module.scss";
import data from "../data/effects";
import Card from "components/Shared/Card/Card";

const Home: NextPage = () => {
  return (
    <Layout>
      <main className={styles.container}>
        <Head>
          <title>Kami Motion - Carefully crafted Framer Motion effects</title>
          <meta
            name="description"
            content="An open source effects library built using Framer Motion, NextJS and Typescript"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {data.effects.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </main>
    </Layout>
  );
};

export default Home;
