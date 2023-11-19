import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>Site list</h1>
      <p>
        Hello, you're seeing this page because `redirect()` call was successful
      </p>

      <Link href="/sites/new">Create a new site</Link>
      <hr />
      <h1>Form below (assume its a modal)</h1>
      <p>
        Form should disappear once submitted as its redirecting back to /sites
      </p>
    </div>
  );
};

export default Page;
