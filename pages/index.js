import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Header } from "../components/Header";
import { Service } from "../components/Service";
import { About } from "../components/About";
import { Project } from "../components/Project";
import { Experience } from "../components/Experience";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Service />
      <About />
      <div className=" bg-gray-100">
        <Project />
        <Experience />
      </div>
    </div>
  );
}
