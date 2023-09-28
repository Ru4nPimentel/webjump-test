import Link from "next/link";

import "./styles.scss";

const BreadCrumbs = ({ text }: { text: string }) => {
  return (
    <div className="breadCrumbs" role="navigation">
      <Link href="/">Página inicial</Link> {" > "} <Link href="#">{text}</Link>
    </div>
  );
};

export default BreadCrumbs;
