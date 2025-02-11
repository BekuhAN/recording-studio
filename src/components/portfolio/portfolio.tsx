import { ReactElement } from "react";
import styles from "./portfolio.module.scss";
import SectionTitle from "../section-title/section-title";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Portfolio1 from "../../assets/portfolio-1.mp3";
import Portfolio2 from "../../assets/portfolio-2.mp3";
import Portfolio3 from "../../assets/portfolio-3.mp3";
import Portfolio4 from "../../assets/portfolio-4.mp3";
import Portfolio5 from "../../assets/portfolio-5.mp3";

export default function Portfolio(): ReactElement {
  return (
    <section className={styles.portfolio}>
      <div className="container">
        <SectionTitle
          title="Последние записи"
          subtitle="Портфолио"
          theme="dark"
        />
        <div className={styles.portfolio__inner}>
          <div className={styles.portfolio__item}>
            <div className={styles.portfolio__item__info}>
              <div className={styles.portfolio__item__info__title}>
                Лондонские ритмы
              </div>
              <div className={styles.portfolio__item__info__author}>
                Неон Войд
              </div>
            </div>
            <AudioPlayer
              src={Portfolio1}
              layout="horizontal"
              showFilledProgress={false}
              showJumpControls={false}
              onPlay={() => console.log("onPlay")}
            />
          </div>
          <div className={styles.portfolio__item}>
            <div className={styles.portfolio__item__info}>
              <div className={styles.portfolio__item__info__title}>
                Идеальная любовь
              </div>
              <div className={styles.portfolio__item__info__author}>
                ГромЗвук
              </div>
            </div>
            <AudioPlayer
              src={Portfolio2}
              layout="horizontal"
              showFilledProgress={false}
              showJumpControls={false}
              onPlay={() => console.log("onPlay")}
            />
          </div>
          <div className={styles.portfolio__item}>
            <div className={styles.portfolio__item__info}>
              <div className={styles.portfolio__item__info__title}>
                Мэтт Дамисерн
              </div>
              <div className={styles.portfolio__item__info__author}>
                Луна Мортис
              </div>
            </div>
            <AudioPlayer
              src={Portfolio3}
              layout="horizontal"
              showFilledProgress={false}
              showJumpControls={false}
              onPlay={() => console.log("onPlay")}
            />
          </div>
          <div className={styles.portfolio__item}>
            <div className={styles.portfolio__item__info}>
              <div className={styles.portfolio__item__info__title}>Африка</div>
              <div className={styles.portfolio__item__info__author}>
                Солярис Вайб
              </div>
            </div>
            <AudioPlayer
              src={Portfolio4}
              layout="horizontal"
              showFilledProgress={false}
              showJumpControls={false}
              onPlay={() => console.log("onPlay")}
            />
          </div>
          <div className={styles.portfolio__item}>
            <div className={styles.portfolio__item__info}>
              <div className={styles.portfolio__item__info__title}>
                Гармония Ритм
              </div>
              <div className={styles.portfolio__item__info__author}>
                Тень Квартала
              </div>
            </div>
            <AudioPlayer
              src={Portfolio5}
              layout="horizontal"
              showFilledProgress={false}
              showJumpControls={false}
              onPlay={() => console.log("onPlay")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
