import { ReactElement } from "react";
import styles from "./services.module.scss";
import SectionTitle from "../section-title/section-title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useServices } from "../../data-access/services/use-services";
import ServicesItem from "../services-item/services-item";

export default function Services(): ReactElement {
  const servicesList = useServices();

  return (
    <section className={styles.services}>
      <div className="container">
        <SectionTitle
          title="Студийные услуги"
          subtitle="Что мы делаем"
          theme="dark"
        />
        <div className={styles.services__list}></div>
        <Swiper
          slidesPerView={3}
          spaceBetween={35}
          className={styles.services__list__inner}
        >
          {servicesList.length > 0 &&
            servicesList.map((item) => (
              <SwiperSlide key={item.id}>
                <ServicesItem item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
