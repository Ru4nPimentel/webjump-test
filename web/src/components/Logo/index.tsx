import LogoIMG from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ className }: React.ComponentProps<"img">) => {
  return (
    <Link href="/">
      <Image
        className={className}
        src={LogoIMG}
        alt="Logo WebJump"
        width={186}
        height={85}
        priority={true}
      />
    </Link>
  );
};

export default Logo;
