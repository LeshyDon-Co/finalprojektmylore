import React from "react";
import styles from "./page.module.css";

function About() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        Hier gibt es Informationen über das Projekt und das Team, welches
        dahinter steht
      </div>
    </div>
  );
}

export default About;
