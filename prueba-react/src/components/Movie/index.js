import React from "react";
import { Link } from "wouter";

export default function Movie({ title, url }) {
  return (
    <div>
      <Link to={`/movies/${url}`}>
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </Link>
    </div>
  );
}
