import styles from "../styles/Home.module.scss";

export function Quote({ quote, quoteAuthor }) {
  return (
    quote && (
      <blockquote className={styles.blockquote}>
        <p>"{quote}"</p>
        {quoteAuthor && <footer>- ({quoteAuthor})</footer>}
      </blockquote>
    )
  );
}
