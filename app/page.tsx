import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <img src="/html.svg" alt="HTML icon" width={72} height={72} />
        <img src="/css.svg" alt="CSS icon" width={72} height={72} />
        <img
          src="/javascript.svg"
          alt="JavaScript icon"
          width={72}
          height={72}
        />
        <img src="/react.svg" alt="React icon" width={72} height={72} />
        <img src="/next.svg" alt="Next.js icon" width={72} height={72} />
        <img
          src="/typescript.svg"
          alt="TypeScript icon"
          width={72}
          height={72}
        />
        <img src="/bootstrap.svg" alt="Bootstrap icon" width={72} height={72} />
        <img src="/java.svg" alt="Java icon" width={72} height={72} />
        <img src="/python.svg" alt="Python icon" width={72} height={72} />
        <img
          src="/material-ui.svg"
          alt="Material-UI icon"
          width={72}
          height={72}
        />
        <img src="/mongodb.svg" alt="MongoDB icon" width={72} height={72} />
        <img src="/mysql2.svg" alt="MySQL icon" width={72} height={72} />
        <img src="/nodejs.svg" alt="Node.js icon" width={72} height={72} />

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
