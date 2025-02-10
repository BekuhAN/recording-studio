import { ReactElement } from "react";
import { Services } from "../../interfaces/services";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from "./services-item.module.scss";
import clsx from "clsx";

interface ServicesItemProps {
  item: Services;
}

export default function ServicesItem({
  item,
}: ServicesItemProps): ReactElement {
  return (
    <Card variant="outlined">
      <CardContent>
        <div className={styles.services_item}>
          <div className={styles.services_item__img}>
            <img src={`/assets/${item.img}`} />
          </div>
          <div className={styles.services_item__content}>
            <h3 className={styles.services_item__content__title}>
              {item.name}
            </h3>
            <p className={styles.services_item__content__text}>
              {item.description}
            </p>
            <button className={clsx("btn", styles.services_item__content__btn)}>
              Подробнее
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
