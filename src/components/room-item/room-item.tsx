import { ReactElement, useState } from "react";
import styles from "./room-item.module.scss";
import { Room } from "../../interfaces/room";
import clsx from "clsx";
import { Box, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface RoomProps {
  item: Room;
}

export default function RoomItem({ item }: RoomProps): ReactElement {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "50vw",
    transform: "translate(-50%, -50%)",
    bgcolor: "#f0f0f3",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div className={styles.room}>
        <div className={styles.room__image}>
          <img src={`/assets/${item.img}`} />
        </div>
        <div className={styles.room__content}>
          <h3 className={styles.room__content__title}>{item.name}</h3>
          <p className={styles.room__content__description}>
            {item.description}
          </p>
          <div className={styles.room__content__price}>
            <span>
              {item.price}
              <sup>₽</sup>
            </span>
            /час
          </div>
          <button
            onClick={handleOpen}
            className={clsx(styles.room__content__btn, "btn dark")}
          >
            Подробнее
          </button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <div className={styles.room__modal}>
            <button
              className={clsx(styles.room__modal__close, "btn dark")}
              onClick={handleClose}
            >
              <CloseIcon />
            </button>
            <div className={styles.room__modal__title}>{item.name}</div>
            <div className={styles.room__modal__wrapper}>
              <div className={styles.room__modal__image}>
                <img src={`/assets/${item.img}`} alt="" />
              </div>
              <div className={styles.room__modal__description}>
                {item.description}
              </div>
              <div className={styles.room__modal__equipment}>
                <div className={styles.room__modal__equipment__title}>
                  Оборудование:
                </div>
                {item.equipment.length > 0 && (
                  <ul className={styles.room__modal__equipment__list}>
                    {item.equipment.map((item) => (
                      <li className={styles.room__modal__equipment__item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
