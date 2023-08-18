import React from "react";
import Head from "next/head";
import { SidebarNavigation } from "../sidebar-navigation";
import styles from "./page-container.module.css";

type PageContainerProps = {
  children: React.ReactNode;
  title: string;
  info: string;
};

export function PageContainer({ children, title, info }: PageContainerProps) {
  // combine title in a single string to prevent below warning
  // "Warning: A title element received an array with more than 1 element as children."
  const documentTitle = `ProLog - ${title}`;
  return (
    <div className={`${styles.container} ${styles.containerDesktop}`}>
      <Head>
        <title>{documentTitle}</title>
        <meta name="description" content="Error monitoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SidebarNavigation />
      <main className={styles.main}>
        <div
          className={`${styles.contentContainer} ${styles.contentContainerDesktop}`}
        >
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.info}>{info}</div>
          {children}
        </div>
      </main>
    </div>
  );
}
