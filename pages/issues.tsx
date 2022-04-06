import type { NextPage } from "next";
import Head from "next/head";
import { SidebarNavigation } from "@components/SidebarNavigation";

const Issues: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ProLog</title>
        <meta name="description" content="Error monitoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SidebarNavigation />
      </main>
    </div>
  );
};

export default Issues;
