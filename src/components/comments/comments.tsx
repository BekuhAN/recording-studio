import { ReactElement } from "react";
import SectionTitle from "../section-title/section-title";
import styles from "./comments.module.scss";
import { useComments } from "../../data-access/comments/use-comments";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function Comments(): ReactElement {
  const commentsList = useComments();

  return (
    <section className={styles.comments}>
      <div className="container">
        <SectionTitle title="Клиенты о нас" subtitle="Отзывы" theme="dark" />
        <div className={styles.comments__inner}>
          {commentsList.length > 0 &&
            commentsList.map((item) => (
              <div className={styles.comments__item}>
                <div className={styles.comments__item__icon}>
                  <FormatQuoteIcon />
                </div>
                <div className={styles.comments__item__text}>
                  {item.text}
                </div>
                <div className={styles.comments__item__author}>
                  {item.author}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
