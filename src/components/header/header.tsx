import { ReactElement } from "react";
import styles from "./header.module.scss";
import { useNavigate } from "../../data-access/navigate/use-navigate";
import { Link } from "react-router-dom";

export default function Header(): ReactElement {
  const list = useNavigate();
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__logo}></div>
        <ul className={styles.header__list}>
          {list.map((item) => (
            <li key={item.id}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
