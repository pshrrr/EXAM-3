import Link from "next/link";
import { useRouter } from "next/router";
import logosvart from "../../public/images/logosvart.png";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <nav>
        <li className={router.pathname == "/" ? "active" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname == "/projects" ? "active" : ""}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={router.pathname == "/contact" ? "active" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={router.pathname == "/login" ? "active" : ""}>
          <Link href="/login">Admin</Link>
        </li>
      </nav>

      <div className="logo">
        <a href="/">
          <Image src={logosvart} alt="Our logo in black colors" />
        </a>
      </div>
      <div className="burger">
        <div className="line1">
          {" "}
          <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">Home</Link>
          </li>
        </div>
        <div className="line2">
          {" "}
          <li className={router.pathname == "/projects" ? "active" : ""}>
            <Link href="/projects">Projects</Link>
          </li>
        </div>
        <div className="line3">
          <li className={router.pathname == "/contact" ? "active" : ""}>
            <Link href="/contact">Contact</Link>
          </li>
        </div>
        <div className="line4">
          {" "}
          <li className={router.pathname == "/login" ? "active" : ""}>
            <Link href="/login">Admin</Link>
          </li>
        </div>
      </div>
    </>
  );
}
