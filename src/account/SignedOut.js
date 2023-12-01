import React from 'react'

export default function SignedOut({ onClick }) {
  return (
    <li className="nav-item">
      <a
        className="button link mx-4"
        type="submit"
        onClick={onClick}
      >
        LOG IN
      </a>
    </li>
  );
}
