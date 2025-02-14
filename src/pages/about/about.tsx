import { ReactElement } from "react";
import styles from "./about.module.scss";
import PageTitle from "../../components/page-title/page-title";
import Comments from "../../components/comments/comments";
import Team from "../../components/team/team";

export default function About(): ReactElement {
  return (
    <main className={styles.about}>
      <PageTitle title="О нас" />
      <Comments />
      <Team />
    </main>
  );
}
