import { FunctionComponent } from "react";
import LogoIcon from "assets/icons/logo.svg";
import IconProps from "../IconProps";

const Logo: FunctionComponent<IconProps> = (props) => {
  return <LogoIcon className={props.className} />;
};

export default Logo;
