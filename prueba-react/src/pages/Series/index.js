import React from "react";
import styles from "./styles.module.css";
import Link from "wouter";
import Serie from "components/Serie";
import jsonPath from "data/sample.json";
export default function Series({ data, url }) {
  data = jsonPath.entries;

  return (
    <div className={styles.listOfSeries}>
      {data.map(({ title }) => (
        <div>
          <Link to={`/series`}>
            <Serie
              className={styles.listOfSeries_item}
              loading='lazy'
              title={title}
              url={url}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
