import { ReactElement, useState } from "react";
import { Services } from "../../interfaces/services";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from "./services-item.module.scss";
import clsx from "clsx";
import { Box, Drawer, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Form from "../form/form";

interface ServicesItemProps {
  item: Services;
}

export default function ServicesItem({
  item,
}: ServicesItemProps): ReactElement {
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "70vw",
    transform: "translate(-50%, -50%)",
    bgcolor: "#f0f0f3",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
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
              <button
                className={clsx("btn dark", styles.services_item__content__btn)}
                onClick={handleOpen}
              >
                Подробнее
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <div className={styles.services_item__modal}>
            <button
              className={clsx(styles.services_item__modal__close, "btn dark")}
              onClick={handleClose}
            >
              <CloseIcon />
            </button>
            <div className={styles.services_item__modal__title}>
              {item.name}
            </div>
            <div className={styles.services_item__modal__list}>
              {item.info.length > 0 &&
                item.info.map((detail) => (
                  <div className={styles.services_item__modal__list__item}>
                    <div
                      className={styles.services_item__modal__list__item__title}
                    >
                      {detail.name}
                    </div>
                    <div
                      className={styles.services_item__modal__list__item__price}
                    >
                      {detail.price}
                    </div>
                    <ul
                      className={styles.services_item__modal__list__item__list}
                    >
                      {detail.list.length > 0 &&
                        detail.list.map((item) => (
                          <li
                            className={
                              styles.services_item__modal__list__item__list__item
                            }
                          >
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </div>
            <div className={styles.services_item__modal__footer}>
              <button
                className={clsx("btn dark", styles.services_item__modal__btn)}
                onClick={() => setOpenForm(true)}
              >
                Заказать
              </button>
            </div>
          </div>
        </Box>
      </Modal>
      <Drawer
        anchor="right"
        open={openForm}
        onClose={() => setOpenForm(false)}
        sx={{ zIndex: 9999 }}
      >
        <div className={styles.services_item__form}>
          <h3 className={styles.services_item__form__title}>
            Напишите нам, мы с вами свяжемся
          </h3>
          <Form />
        </div>
      </Drawer>
    </>
  );
}
