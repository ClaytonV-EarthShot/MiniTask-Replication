import styles from "../Stylesheets/ProblemStatement.module.css";

export default function ProblemStatementButton({ shade }) {
  return (
    <>
      <div className={styles.buttonContainer}>
        {shade === "light" && (
          <a
            href="/problem-statement/1"
            className={`${styles.button} ${styles.light}`}
          >
            Problem Statement
          </a>
        )}
        {shade === "dark" && (
          <a
            href="/problem-statement/1"
            className={`${styles.button} ${styles.dark}`}
          >
            Problem Statement
          </a>
        )}
      </div>
    </>
  );
}
