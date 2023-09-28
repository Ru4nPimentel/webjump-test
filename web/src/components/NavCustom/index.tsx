"use strict";
import { IListProps } from "@/types";
import Link from "next/link";

type NavProps = React.ComponentProps<"nav"> & {
  list: IListProps[];
  initialLi?: { name: string; path: string };
  lastlLi?: { name: string; path: string };
};

const NavCustom = ({
  list,
  className,
  initialLi,
  lastlLi,
  ...pros
}: NavProps) => {
  return (
    <nav className={className} {...pros}>
      <menu role="navigation">
        {initialLi && (
          <li>
            <Link href={`${initialLi.path}`}>
              <span>{initialLi.name}</span>
            </Link>
          </li>
        )}
        {list.map(({ id, name, path }, index) => {
          return (
            <li key={id}>
              <Link href={`/product/${path}`}>
                <span>{name}</span>
              </Link>
            </li>
          );
        })}
        {lastlLi && (
          <li>
            <Link href={`${lastlLi.path}`}>
              <span>{lastlLi.name}</span>
            </Link>
          </li>
        )}
      </menu>
    </nav>
  );
};

export default NavCustom;
