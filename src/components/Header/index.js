import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/">The Team</Link>
        </button>
        <button>
          <Link to="/">Events</Link>
        </button>
      </nav>
    </div>
  );
}
