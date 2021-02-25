import Head from "next/head";
import ContactButton from "../components/ContactButton";
import styles from "../styles/pages/Contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact | Gabriel</title>
      </Head>
      <img src="images/gabriel.jpg" alt="Gabriel" />
      <h1>Contact - Gabriel Silva</h1>
      <div className={styles.buttonsContainer}>
        <ContactButton platform="github">
          <a
            target="_blank"
            rel="external"
            href="Https://github.com/gabriel-silva-devzgabriel"
          >
            <img src="icons/github.svg" alt="Github" />
          </a>
        </ContactButton>
        <ContactButton platform="linkedIn">
          <a
            target="_blank"
            rel="external"
            href="Https://github.com/devzgabriel"
          >
            <img src="icons/linkedIn.svg" alt="linkedIn" />
          </a>
        </ContactButton>
        <ContactButton platform="instagram">
          <a
            target="_blank"
            rel="external"
            href="Https://instagram.com/devzgabriel"
          >
            <img src="icons/instagram.svg" alt="Instagram" />
          </a>
        </ContactButton>
        <ContactButton platform="twiter">
          <a
            target="_blank"
            rel="external"
            href="Https://twiter.com/devzgabriel"
          >
            <img src="icons/twitter.svg" alt="Twitter" />
          </a>
        </ContactButton>
      </div>
    </div>
  );
}
