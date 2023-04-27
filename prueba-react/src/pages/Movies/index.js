import React from "react";
import styles from "./styles.module.css";
import Link from "wouter";
import Movie from "components/Movie";
import jsonPath from "data/sample.json";

export default function Movies({ data, url }) {
  data = jsonPath.entries;

  return (
    <div className={styles.listOfMovies}>
      {data.map(({ title }) => (
        <div>
          <Link to={`/movies`}>
            <Movie
              className={styles.listOfMovies_item}
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
