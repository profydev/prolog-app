import styles from "./loader.module.scss";

export function Loader() {
  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.loader}
        src={"/icons/loading-circle.svg"}
        alt="loading"
      />
    </div>
  );
}
