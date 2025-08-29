import React from "react";

export default function Page({ url, children }) {
  return (
    <a className="pagination-nav__link" href={url}>
      <div className="pagination-nav__sublabel">View Page</div>
      <div className="pagination-nav__label">{children}</div>
    </a>
  );
}