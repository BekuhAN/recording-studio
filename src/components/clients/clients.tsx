import { ReactElement } from "react";
import styles from "./clients.module.scss";
import SectionTitle from "../section-title/section-title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useClients } from "../../data-access/clients/use-clients";

export default function Clients(): ReactElement {
  const clientsList = useClients();
  return (
    <section className={styles.clients}>
      <div className="container">
        <SectionTitle
          title="Артисты доверяющие нам"
          subtitle="Клиенты"
          theme="light"
        />
        <div className={styles.clients__inner}>
          <Swiper
            slidesPerView={4}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {clientsList.length > 0 &&
              clientsList.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={styles.clients__item}>
                    <div className={styles.clients__item__image}>
                      <img src={`/assets/${item.img}`} />
                    </div>
                    <div className={styles.clients__item__name}>
                      {item.name}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
