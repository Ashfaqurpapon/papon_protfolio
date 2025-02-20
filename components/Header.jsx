import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8  text-white xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            AR.Papon<span className="text-accent">.</span>
          </h1>
        </Link>

        {/*desktop nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>

        <div className="hidden  items-center gap-8 xl:flex">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
