import { Button } from "./styles";

function DefaultButton({ children, theme, ...props }) {
  return <Button {...props} theme={theme}>{children}</Button>;
}

export default DefaultButton;

/*
DefaultButton.prototype = {
  children: PropTypes.node.isRequired
}
*/
