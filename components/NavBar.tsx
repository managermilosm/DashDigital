import {
  NavBarLink,
  AnimatedButton,
  AnimatedLink,
  AnimatedLinkArrow,
  CustomButtonAn,
} from "@/components";

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
      <AnimatedButton title="UX/UI" color="purple" />
      <AnimatedButton title="Development" color="blue" />
      <AnimatedButton title="Branding" color="orange" />
      <AnimatedLink />
      <AnimatedLinkArrow title="Find Out More"></AnimatedLinkArrow>
      <CustomButtonAn></CustomButtonAn>
    </>
  );
};

export default NavBar;
