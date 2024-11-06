/**
 * Importing color, size, and button type variables.
 */
import { ButtonHTMLAttributes } from 'react';
import Colors from '../variables/colors';
import Size from '../variables/sizes';
import ButtonType from '../variables/types/Button';

/**
 * Interface for button component properties.
 */
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Type of the button (e.g. button, submit, reset).
   * @type {ButtonType}
   * @default undefined
   */
  Type?: ButtonType;

  /**
   * Text to be displayed on the button.
   * @type {string}
   * @default undefined
   */
  Label?: string;

  /**
   * Function to be called when the button is clicked.
   * @type {() => void}
   * @default undefined
   */
  OnClick?: () => void;

  /**
   * Color settings for the button, including predefined values for text, background, and hovered colors.
   * @type {Colors}
   * @default undefined
   */
  Color?: Colors;

  /**
   * Size of the button.
   * @type {Size}
   * @default undefined
   */
  Size?: Size;

  /**
   * Flag indicating whether the button is disabled.
   * @type {boolean}
   * @default false
   */
  Disabled?: boolean;

  /**
   * Additional CSS class to be applied to the button.
   * @type {string}
   * @default undefined
   */
  ClassName?: string;

  /**
   * Custom styles to be applied to the button.
   * @type {React.CSSProperties}
   * @default undefined
   */
  Style?: React.CSSProperties;

  /**
   * Child elements of the button.
   * @type {React.ReactNode}
   * @default undefined
   */
  children?: React.ReactNode;
}