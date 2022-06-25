import { FunctionComponent } from "react";
import IconViewerProps from "./IconViewerProps";
import Logo from "./Icons/Logo";

const IconViewer: FunctionComponent<IconViewerProps> = (props) => {
  const { name, className } = props;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "logo":
        return <Logo />;
      default:
        return null;
    }
  };

  return <div className={className}>{renderIcon(name)}</div>;
};

export default IconViewer;
