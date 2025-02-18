import { ReactElement, useEffect, useState } from "react";
import styles from "./header.module.scss";
import { useNavigate } from "../../data-access/navigate/use-navigate";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import clsx from "clsx";

interface Active {
  isActive: boolean;
}

export default function Header(): ReactElement {
  const list = useNavigate();
  const [isScroll, setIsScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={clsx(isScroll && styles.scroll, styles.header)}>
      <div className={clsx("container", styles.header__inner)}>
        <Link to={"/"} className={styles.header__logo}>
          <img src={Logo} alt="logo" />
        </Link>
        <ul className={styles.header__list}>
          {list.map((item) => (
            <li key={item.id}>
              <NavLink
                className={({ isActive }: Active) =>
                  clsx(
                    styles.header__list__link,
                    isActive && styles.header__list__link_active
                  )
                }
                to={item.url}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
