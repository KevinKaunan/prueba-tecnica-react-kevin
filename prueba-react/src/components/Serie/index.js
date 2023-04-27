import React from "react";
import { Link } from "wouter";

export default function Serie({ title, url }) {
  return (
    <div>
      <Link to={`/series/${url}`}>
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </Link>
    </div>
  );
}
