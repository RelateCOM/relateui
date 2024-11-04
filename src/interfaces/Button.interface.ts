import Colors from "../variables/colors";
import Size from "../variables/sizes";
import ButtonType from "../variables/types/Button";

export interface IButtonProps {
  /**
   * Button type (button, submit, reset)
   */
  type?: ButtonType;
  /**
   * Button text
   */
  label?: string;
  /**
   * Function called when the button is clicked
   */
  onClick?: () => void;
  /**
   * Button color setttings with predefined values for text background and hovered colors
   */
  color?: Colors;
  /**
   * Button size
   */
  size?: Size;
  /**
   * Flag indicating that the button is disabled
   */
  disabled?: boolean;
  /**
   * Additional class for the button
   */
  className?: string;
  /**
   * Button style
   */
  style?: React.CSSProperties;
  /**
   * Child elements of the button
   */
  children?: React.ReactNode;
}
