import Logo from "@/components/Logo";
import Link from "next/link";
import ButtonMobile from "@/components/ButtonMobile";
import NavCategories from "@/patterns/NavCategories";

import "./styles.scss";
import Search from "@/components/Search";

function Header() {
  return (
    <header>
      <div className="box_login">
        <nav>
          <Link href="#">Acesse sua conta</Link>
          <span>ou</span>
          <Link href="#">Cadastre-se</Link>
        </nav>
      </div>
      <div className="box_middle">
        <ButtonMobile />
        <Logo className="img_logo" />
        <Search />
      </div>
      <NavCategories className="nav_header" isMenu={true} isMobile={true} />
    </header>
  );
}

export default Header;
