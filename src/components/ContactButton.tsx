import styles from "../styles/components/ContactButton.module.css";

export default function ContactButton({ children, platform }) {
  return (
    <button className={`${styles.container} ${styles[platform]}`}>
      {children}
    </button>
  );
}
