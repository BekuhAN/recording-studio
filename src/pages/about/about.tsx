import { ReactElement } from "react";
import styles from "./about.module.scss";
import PageTitle from "../../components/page-title/page-title";

export default function About(): ReactElement {
  return (
    <main className={styles.about}>
      <PageTitle title="О нас" link="/about" />
    </main>
  );
}
