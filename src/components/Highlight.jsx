import React from "react";

export default function Highlight({ children, color }) {
  return (
    <span style={{
        backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.1rem 0.4rem',
    }}>
    {children}
    </span>
  );
}