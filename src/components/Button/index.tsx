import { IButtonProps } from '../../interfaces/Button.interface';
import Merger from '../../../utils/Merger/index';
import { FC } from 'react';
import { cva } from 'class-variance-authority';

/**
 * Button Variants.
 * @typedef {Object} ButtonVariants
 * @property {string} color - Button color.
 * @property {string} size - Button size.
 */
const ButtonVariants = cva('btn', {
  variants: {
    /**
     * Button color.
     * @typedef {Object} ButtonVariants~color
     * @property {string} '' - Default button color.
     * @property {string} primary - Primary button color.
     * @property {string} secondary - Secondary button color.
     * @property {string} accent - Accent button color.
     * @property {string} neutral - Neutral button color.
     * @property {string} 'base-100' - Base button color.
     * @property {string} 'base-200' - Base button color.
     * @property {string} 'base-300' - Base button color.
     * @property {string} success - Success button color.
     * @property {string} warning - Warning button color.
     * @property {string} info - Info button color.
     * @property {string} error - Error button color.
     */
    Color: {
      '': '',
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      accent: 'btn-accent',
      neutral: 'btn-neutral',
      'base-100': 'btn-neutral',
      'base-200': 'btn-neutral',
      'base-300': 'btn-neutral',
      success: 'btn-success',
      warning: 'btn-warning',
      info: 'btn-info',
      error: 'btn-error',
    },
    /**
     * Button size.
     * @typedef {Object} ButtonVariants~size
     * @property {string} sm - Small button size.
     * @property {string} md - Medium button size.
     * @property {string} lg - Large button size.
     * @property {string} xl - Extra large button size.
     * @property {string} '2xl' - Extra extra large button size.
     */
    Size: {
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
      xl: 'btn-lg',
      '2xl': 'btn-lg',
    },
  },
});

/**
 * Button component.
 * @param {IButtonProps} props - Button props.
 * @type {React.FC} Button component.
 */
const Button: FC<IButtonProps> = ({
  /**
   * Button type.
   * @type {string}
   * @default 'button'
   */
  Type = 'button',
  /**
   * Button text.
   * @type {string}
   */
  Label,
  /**
   * Function to be called when button is clicked.
   * @type {function}
   */
  OnClick,
  /**
   * Button Color.
   * @type {Color}
   * @default 'primary'
   */
  Color = 'primary',
  /**
   * Button Size.
   * @type {Size}
   * @default 'md'
   */
  Size = 'md',
  /**
   * Flag indicating whether button should be disabled.
   * @type {boolean}
   * @default false
   */
  Disabled = false,
  /**
   * Additional classes to be added to the button.
   * @type {string}
   * @default ''
   */
  ClassName = '',
  /**
   * React.CSSProperties with additional styles to be added to the button.
   * @type {React.CSSProperties}
   * @default {}
   */
  Style = {},
  /**
   * Additional content to be displayed on the button.
   * @type {React.ReactNode}
   */
  children,
}) => {
  /**
   * Merges button classes and adds additional classes.
   * @type {string}
   */
  const buttonClasses: string = Merger(
    ButtonVariants({ Color, Size }),
    Disabled && 'btn-disabled',
    ClassName
  );

  return (
    <button
      /**
       * Button type.
       * @type {string}
       */
      type={Type}
      /**
       * Button classes.
       * @type {string}
       */
      className={buttonClasses}
      /**
       * Function to be called when button is clicked.
       * @type {function}
       */
      onClick={OnClick}
      /**
       * Flag indicating whether button should be disabled.
       * @type {boolean}
       */
      disabled={Disabled}
      /**
       * Object with additional styles to be added to the button.
       * @type {Object}
       */
      style={Style}
    >
      {Label || children}
    </button>
  );
};

export default Button;
