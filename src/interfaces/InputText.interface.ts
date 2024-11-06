/**
 * Importing color and size variables.
 */
import { InputHTMLAttributes } from "react";
import Colors from "../variables/colors";
import Size from "../variables/sizes";

/**
 * Interface for input text component properties.
 */
export interface IInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The current value of the input field.
   * @type {string}
   * @default undefined
   */
  Value?: string;

  /**
   * Color settings for the input field, including predefined values for text and background colors.
   * @type {Colors}
   * @default undefined
   */
  Color?: Colors;

  /**
   * Size of the input field.
   * @type {Size}
   * @default undefined
   */
  Size?: Size;

  /**
   * Function to be called when the input field value changes.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event object.
   * @type {(event: React.ChangeEvent<HTMLInputElement>) => void}
   * @default undefined
   */
  OnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Additional CSS class to be applied to the input field.
   * @type {string}
   * @default undefined
   */
  ClassName?: string;

  /**
   * Custom styles to be applied to the input field.
   * @type {React.CSSProperties}
   * @default undefined
   */
  Style?: React.CSSProperties;

  /**
   * Flag indicating whether the input field is disabled.
   * @type {boolean}
   * @default false
   */
  Disabled?: boolean;

  /**
   * Placeholder text to be displayed in the input field when it is empty.
   * @type {string}
   * @default undefined
   */
  Placeholder?: string;
}