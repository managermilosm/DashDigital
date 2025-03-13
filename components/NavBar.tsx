import { NavBarLink, AnimatedButton } from "@/components";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row gap-[32px]">
        <NavBarLink title="Home" />
        <NavBarLink title="Projects" />
        <NavBarLink title="Services" />
        <NavBarLink title="Blog" />
        <NavBarLink title="About" />
        <NavBarLink title="Contact" />
      </div>
      <AnimatedButton title="UX/UI" color="magenta" />
    </>
  );
};

export default NavBar;
