import { ReactElement } from "react";
import styles from "./advantages.module.scss";
import SectionTitle from "../section-title/section-title";
import Advantages1 from "../../assets/advantage-1.png";
import Advantages2 from "../../assets/advantage-2.png";
import Advantages3 from "../../assets/advantage-3.png";
import Advantages4 from "../../assets/advantage-4.png";
import Advantages5 from "../../assets/advantage-5.png";
import Advantages6 from "../../assets/advantage-6.png";
import Back from "../../assets/about-waves.png";
import Front from "../../assets/about-monitors.png";
import { Link } from "react-router-dom";

export default function Advantages(): ReactElement {
  return (
    <section className={styles.advantages}>
      <div className="container">
        <SectionTitle title="О нас" subtitle="Наши приемущества" theme="dark" />
        <div className={styles.advantages__inner}>
          <div className={styles.advantages__list}>
            <div className={styles.advantages__list__item}>
              <div className={styles.advantages__list__item__img}>
                <img src={Advantages1} />
              </div>
              <div className={styles.advantages__list__item__content}>
                <h3 className={styles.advantages__list__item__title}>
                  Живые инструменты
                </h3>
                <p className={styles.advantages__list__item__text}>
                  Запись и аранжировка с участием профессиональных музыкантов
                  для естественного и насыщенного звучания
                </p>
              </div>
            </div>
            <div className={styles.advantages__list__item}>
              <div className={styles.advantages__list__item__img}>
                <img src={Advantages2} />
              </div>
              <div className={styles.advantages__list__item__content}>
                <h3 className={styles.advantages__list__item__title}>
                  Несколько студий
                </h3>
                <p className={styles.advantages__list__item__text}>
                  Выбирайте удобное пространство для записи в разных локациях с
                  идеальной акустикой
                </p>
              </div>
            </div>
            <div className={styles.advantages__list__item}>
              <div className={styles.advantages__list__item__img}>
                <img src={Advantages3} />
              </div>
              <div className={styles.advantages__list__item__content}>
                <h3 className={styles.advantages__list__item__title}>
                  Профессиональное оборудование
                </h3>
                <p className={styles.advantages__list__item__text}>
                  Используем только топовую технику и софт для кристально
                  чистого звука
                </p>
              </div>
            </div>
          </div>
          <div className={styles.advantages__image}>
            <div className={styles.advantages__image__back}>
              <img src={Back} />
            </div>
            <div className={styles.advantages__image__front}>
              <img src={Front} />
            </div>
          </div>
          <div className={styles.advantages__list}>
            <div className={styles.advantages__list__item}>
              <div className={styles.advantages__list__item__img}>
                <img src={Advantages4} />
              </div>
              <div className={styles.advantages__list__item__content}>
                <h3 className={styles.advantages__list__item__title}>
                  Собственные аранжировки
                </h3>
                <p className={styles.advantages__list__item__text}>
                  Создаём эксклюзивные музыкальные решения, подчёркивающие
                  уникальность каждого трека
                </p>
              </div>
            </div>
            <div className={styles.advantages__list__item}>
              <div className={styles.advantages__list__item__img}>
                <img src={Advantages5} />
              </div>
              <div className={styles.advantages__list__item__content}>
                <h3 className={styles.advantages__list__item__title}>
                  Высокое качество звука
                </h3>
                <p className={styles.advantages__list__item__text}>
                  Детализированная обработка и сведение для студийного звучания
                  на уровне мировых стандартов
                </p>
              </div>
            </div>
            <div className={styles.advantages__list__item}>
              <div className={styles.advantages__list__item__img}>
                <img src={Advantages6} />
              </div>
              <div className={styles.advantages__list__item__content}>
                <h3 className={styles.advantages__list__item__title}>
                  Защита прав
                </h3>
                <p className={styles.advantages__list__item__text}>
                  Обеспечиваем юридическое оформление авторских прав на ваши
                  музыкальные произведения
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.advantages__btn}>
          <Link to="/about" className={"btn dark"}>
            Подробнее о нас
          </Link>
        </div>
      </div>
    </section>
  );
}
