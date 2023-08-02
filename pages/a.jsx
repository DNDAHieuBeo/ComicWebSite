import * as React from "react";
import Link from "next/link";

const A = () => {
  return (
    <div> a
      hello

      <Link href="/B">click</Link>
    </div>
  );
};

export default A;