import { ReactElement } from "react";
import styles from "./contacts.module.scss";
import PageTitle from "../../components/page-title/page-title";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import Image from "../../assets/contacts-img.jpg";
import Form from "../../components/form/form";

export default function Contacts(): ReactElement {
  return (
    <main className={styles.contacts}>
      <PageTitle title="Контакты" />
      <div className={clsx("container", styles.contacts__inner)}>
        <div className={styles.contacts__content}>
          <div className={styles.contacts__content__wrapper}>
            <div className={styles.contacts__content__column}>
              <h2 className={styles.contacts__content__title}>
                Связаться с нами
              </h2>
              <p className={styles.contacts__content__text}>
                Свяжитесь с нами удобным для вас способом — мы всегда готовы
                помочь и ответить на ваши вопросы. Оставьте заявку, и наша
                команда свяжется с вами в ближайшее время!
              </p>
              <ul className={styles.contacts__content__list}>
                <li className={styles.contacts__content__item}>
                  <div className={styles.contacts__content__item__icon}>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div className={styles.contacts__content__item__text}>
                    <h4 className={styles.contacts__content__item__title}>
                      Адрес
                    </h4>
                    <p className={styles.contacts__content__item__description}>
                      Россия, Краснодар, Северная улица, 320
                    </p>
                  </div>
                  <div className={styles.contacts__content__item__icon}>
                    <FontAwesomeIcon icon={faMobileScreenButton} />
                  </div>
                  <div className={styles.contacts__content__item__text}>
                    <h4 className={styles.contacts__content__item__title}>
                      Телефон:
                    </h4>
                    <p className={styles.contacts__content__item__description}>
                      <a href="tel:+79999999999">+7 (999) 999-99-99</a>
                    </p>
                  </div>
                  <div className={styles.contacts__content__item__icon}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className={styles.contacts__content__item__text}>
                    <h4 className={styles.contacts__content__item__title}>
                      Электронная почта:
                    </h4>
                    <p className={styles.contacts__content__item__description}>
                      <a href="mailto:info@planeta.ru">info@planeta.ru</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className={clsx(
                styles.contacts__content__image,
                styles.contacts__content__column
              )}
            >
              <img src={Image} />
            </div>
            <div className={styles.contacts__content__column}>
              <h2 className={styles.contacts__content__title}>Режим работы</h2>
              <ul className={styles.contacts__content__hours}>
                <li className={styles.contacts__content__hours__item}>
                  <span>Понедельник:</span>
                  <span>9:00 - 19:00</span>
                </li>
                <li className={styles.contacts__content__hours__item}>
                  <span>Вторник:</span>
                  <span>9:00 - 19:00</span>
                </li>
                <li className={styles.contacts__content__hours__item}>
                  <span>Среда:</span>
                  <span>9:00 - 19:00</span>
                </li>
                <li className={styles.contacts__content__hours__item}>
                  <span>Четверг:</span>
                  <span>9:00 - 19:00</span>
                </li>
                <li className={styles.contacts__content__hours__item}>
                  <span>Пятница:</span>
                  <span>9:00 - 19:00</span>
                </li>
                <li className={styles.contacts__content__hours__item}>
                  <span>Суббота:</span>
                  <span>11:00 - 16:00</span>
                </li>
                <li className={styles.contacts__content__hours__item}>
                  <span>Воскресенье:</span>
                  <span>Закрыты</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.contacts__form}>
        <h2 className={styles.contacts__form__title}>
          Отправьте нам сообщение
        </h2>
        <Form />
      </section>

      <section className={styles.contacts__map}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A4299f4d299468bd63c5475c7c34bcc7566989075a8e46e2bc1e160359d59bdcb&amp;source=constructor"
          width="100%"
          height="400"
          frameborder="0"
        ></iframe>
      </section>
    </main>
  );
}
