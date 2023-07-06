import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Image alt="menma logo" src="/logo.png" width={100} height={100} /> */}
      <h1 className={styles.title}>
        your <span className={styles.focus}>men</span>tal{" "}
        <span className={styles.focus}>ma</span>th companion
      </h1>
      <p className={styles.subcopy}>
        train your mind to solve simple problems much faster
      </p>
      <div className={styles.equation}>
        <p>
          <span className={styles.first_number}>x</span>
          <span className={styles.operator}>+</span>
          <span className={styles.second_number}>y</span>
        </p>
      </div>
      <input className={styles.answer} maxLength={6} inputMode="numeric"></input>
      <button className={styles.submit}>submit</button>
    </main>
  );
}
