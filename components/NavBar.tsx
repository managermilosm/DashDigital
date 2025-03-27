import {
  NavBarLink,
  AnimatedButton,
  AnimatedLink,
  CustomButtonAn,
  ButtonWithArrow,
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
      <AnimatedButton title="SMD" color="blue" />
      <AnimatedLink />

      <CustomButtonAn></CustomButtonAn>
      <ButtonWithArrow />
    </>
  );
};

export default NavBar;
