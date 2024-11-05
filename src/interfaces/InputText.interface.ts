import Colors from "../variables/colors";
import Size from "../variables/sizes";

export interface IInputTextProps {
  value?: string;
  color?: Colors;
  size?: Size;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  placeholder?: string;
}
