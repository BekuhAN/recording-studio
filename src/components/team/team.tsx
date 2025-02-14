import { ReactElement } from "react";
import styles from "./team.module.scss";
import SectionTitle from "../section-title/section-title";
import { useTeam } from "../../data-access/team/use-team";

export default function Team(): ReactElement {
  const teamList = useTeam();

  return (
    <section className={styles.team}>
      <div className="container">
        <SectionTitle
          title="Творцы музыкального волшебства"
          subtitle="Команда"
          theme="dark"
        />
        <div className={styles.team__inner}>
          {teamList.length > 0 &&
            teamList.map((item) => (
              <div className={styles.team__item}>
                <div className={styles.team__item__image}>
                  <img src={`./assets/${item.img}`} />
                </div>
                <div className={styles.team__item__content}>
                  <div className={styles.team__item__name}>{item.name}</div>
                  <div className={styles.team__item__position}>
                    {item.position}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
