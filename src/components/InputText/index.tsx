import { FC } from 'react';
import { IInputTextProps } from '../../interfaces/InputText.interface';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';

/**
 * Input text variants.
 * @typedef {Object} InputTextVariants
 * @property {string} Color - Input Color.
 * @property {string} Size - Input Size.
 */
const InputTextVariants = cva('input', {
  variants: {
    /**
     * Input Color.
     * @typedef {Object} InputTextVariants~Color
     * @property {string} '' - Default input Color.
     * @property {string} primary - Primary input Color.
     * @property {string} secondary - Secondary input Color.
     * @property {string} accent - Accent input Color.
     * @property {string} neutral - Neutral input Color.
     * @property {string} 'base-100' - Base input Color.
     * @property {string} 'base-200' - Base input Color.
     * @property {string} 'base-300' - Base input Color.
     * @property {string} success - Success input Color.
     * @property {string} warning - Warning input Color.
     * @property {string} info - Info input Color.
     * @property {string} error - Error input Color.
     */
    Color: {
      '': '',
      primary: 'input-primary',
      secondary: 'input-secondary',
      accent: 'input-accent',
      neutral: 'input-neutral',
      'base-100': 'input-neutral',
      'base-200': 'input-neutral',
      'base-300': 'input-neutral',
      success: 'input-success',
      warning: 'input-warning',
      info: 'input-info',
      error: 'input-error',
    },
    /**
     * Input Size.
     * @typedef {Object} InputTextVariants~Size
     * @property {string} sm - Small input Size.
     * @property {string} md - Medium input Size.
     * @property {string} lg - Large input Size.
     * @property {string} xl - Extra large input Size.
     * @property {string} '2xl' - Extra extra large input Size.
     */
    Size: {
      sm: 'input-sm',
      md: 'input-md',
      lg: 'input-lg',
      xl: 'input-lg',
      '2xl': 'input-lg',
    },
  },
});

/**
 * Input text component.
 * @param {IInputTextProps} props - Input text props.
 * @type {React.FC} Inputtext component.
 */
const InputText: FC<IInputTextProps> = ({
  /**
   * Input Value.
   * @type {string}
   */
  Value,
  /**
   * Input Color.
   * @type {Color}
   * @default ''
   */
  Color = '',
  /**
   * Input Size.
   * @type {Size}
   * @default 'md'
   */
  Size = 'md',
  /**
   * Function called when the input Value changes.
   * @type {function}
   */
  OnChange,
  /**
   * Additional class for the input.
   * @type {string}
   * @default ''
   */
  ClassName = '',
  /**
   * Input Style.
   * @type {React.CSSProperties}
   * @default {}
   */
  Style = {},
  /**
   * Flag indicating that the input is Disabled.
   * @type {boolean}
   * @default false
   */
  Disabled = false,
  /**
   * Input Placeholder text.
   * @type {string}
   * @default ''
   */
  Placeholder = '',
  ...props
}) => {
  /**
   * Merges input classes and adds additional classes.
   * @type {string}
   */
  const inputClasses: string = twMerge(
    InputTextVariants({ Color, Size }),
    Disabled && 'input-Disabled',
    ClassName
  );

  return (
    <input
      /**
       * Input classes.
       * @type {string}
       */
      className={inputClasses}
      /**
       * Input type.
       * @type {string}
       */
      type="text"
      /**
       * Input Value.
       * @type {string}
       */
      value={Value}
      /**
       * Function called when the input Value changes.
       * @type {function}
       */
      onChange={OnChange}
      /**
       * Flag indicating that the input is Disabled.
       * @type {boolean}
       */
      disabled={Disabled}
      /**
       * Input Placeholder text.
       * @type {string}
       */
      placeholder={Placeholder}
      /**
       * Input Style.
       * @type {Object}
       */
      style={Style}
      {...props}
    />
  );
};

export default InputText;
