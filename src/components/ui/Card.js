import React from 'react';

export default function Card({ children, className = '', hover = false }) {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden ${
        hover ? 'transition-all hover:shadow-lg hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}