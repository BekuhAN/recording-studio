import { FormEvent, ReactElement, useRef, useState } from "react";
import styles from "./form.module.scss";
import { Alert, Snackbar } from "@mui/material";
import emailjs from "@emailjs/browser";
import clsx from "clsx";

export default function Form(): ReactElement {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    // kelagahi@lyricslrc.com
    emailjs
      .sendForm("service_zyqeuyo", "template_9cgfj9m", formRef.current || "", {
        publicKey: "MxxC1nPAfoXxJWd5q",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
          formRef.current?.reset();
          setTimeout(() => {
            setSuccess(false);
          }, 6000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setErrorText(error.text);
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 6000);
        }
      );
  };

  return (
    <>
      <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
        <input
          type="text"
          required
          className={styles.form__item}
          name="send_name"
          placeholder="Имя"
        />
        <input
          type="email"
          required
          className={styles.form__item}
          name="send_email"
          placeholder="Почта"
        />
        <textarea
          required
          className={styles.form__item}
          name="send_text"
          placeholder="Сообщение"
        ></textarea>
        <button className={clsx("btn dark", styles.form__btn)} type="submit">
          Отправить
        </button>
      </form>
      <Snackbar open={isSuccess} autoHideDuration={6000}>
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Успешно!
        </Alert>
      </Snackbar>
      <Snackbar open={isError} autoHideDuration={6000}>
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          Ошибка... {errorText}
        </Alert>
      </Snackbar>
    </>
  );
}
