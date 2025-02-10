import { ReactElement } from "react";
import styles from "./preview.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Preview(): ReactElement {
  return (
    <section className={styles.preview}>
      <div className={styles.preview__content}>
        <div className="container">
          <h1 className={styles.preview__title}>
            <span>Студия</span> <br />
            Звукозаписи
          </h1>
          <p className={styles.preview__text}>
            Профессиональная студия звукозаписи для создания качественного
            звука: от записи вокала и инструментов до микширования и мастеринга.
            Помогаем артистам, подкастерам и бизнесу добиться идеального
            звучания!
          </p>
          <Link className={clsx(styles.preview__link, "btn light")} to="/about">
            Подробнее о нас
          </Link>
        </div>
      </div>
    </section>
  );
}
