import { ReactElement } from "react";
import styles from "./partners.module.scss";

export default function Partners(): ReactElement {
  const partnersList = [
    "partner-1.png",
    "partner-2.png",
    "partner-3.png",
    "partner-4.png",
    "partner-5.png",
    "partner-6.png",
  ];
  return (
    <section className={styles.partners}>
      <div className="container">
        <div className={styles.partners__inner}>
          {partnersList.map((item) => (
            <div className={styles.partners__item}>
              <img src={`./assets/${item}`} />
              <img src={`./assets/${item}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
