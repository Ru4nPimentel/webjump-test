import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Link from "next/link";
import "./styles.scss";

const Pagination = () => {
  return (
    <nav className="pagination">
      <Link href="#">
        <GrFormPrevious />
      </Link>
      <Link href="#">
        <span>2</span>
      </Link>
      <Link href="#">
        <span>3</span>
      </Link>
      <Link href="#" className="active">
        <span>4</span>
      </Link>
      <Link href="#">
        <span>5</span>
      </Link>
      <Link href="#">
        <span>6</span>
      </Link>
      <Link href="#">
        <GrFormNext />
      </Link>
    </nav>
  );
};

export default Pagination;
