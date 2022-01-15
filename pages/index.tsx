import { Topbar } from "@/components";
import type { NextPage } from "next";

import styles from "@/styles/Index.module.css";

const Index: NextPage = () => {
  return (
    <div className={styles.root}>
      <Topbar />
    </div>
  );
};

export default Index;
