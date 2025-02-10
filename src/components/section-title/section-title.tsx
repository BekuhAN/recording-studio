import { ReactElement } from "react";
import styles from "./section-title.module.scss";
import clsx from "clsx";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  theme: string;
}

export default function SectionTitle({
  title,
  subtitle,
  theme,
}: SectionTitleProps): ReactElement {
  return (
    <div className={styles.section_title}>
      <h3 className={styles.section_title__sub}>{subtitle}</h3>
      <h2
        className={clsx(
          styles.section_title__main,
          theme === "light" ? styles.light : styles.dark
        )}
      >
        {title}
      </h2>
    </div>
  );
}
