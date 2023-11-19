import Link from "next/link";
import React from "react";

const Hello = () => {
  return (
    <div>
      <h1>Main page</h1>

      <Link href="/sites">Go to sites</Link>
    </div>
  );
};

export default Hello;
