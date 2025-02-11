import { ReactElement } from "react";
import styles from "./room-item.module.scss";
import { Room } from "../../interfaces/room";
import clsx from "clsx";

interface RoomProps {
  item: Room;
}

export default function RoomItem({ item }: RoomProps): ReactElement {
  return (
    <div className={styles.room}>
      <div className={styles.room__image}>
        <img src={`/assets/${item.img}`} />
      </div>
      <div className={styles.room__content}>
        <h3 className={styles.room__content__title}>{item.name}</h3>
        <p className={styles.room__content__description}>{item.description}</p>
        <div className={styles.room__content__price}>
          <span>
            {item.price}
            <sup>₽</sup>
          </span>
          /час
        </div>
        <button className={clsx(styles.room__content__btn, "btn dark")}>
          Подробнее
        </button>
      </div>
    </div>
  );
}
