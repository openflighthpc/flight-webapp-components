import React from 'react'

export default function SignedOut({ onClick }) {
  return (
    <a
      className="button link"
      type="submit"
      onClick={onClick}
    >
      LOG IN
    </a>
  );
}
