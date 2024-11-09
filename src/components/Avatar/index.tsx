/**
 * Import required dependencies.
 */
import { FC } from 'react';
import { IAvatar } from '../../interfaces/Avatar.interface';
import { cva } from 'class-variance-authority';
import Merger from '../../../utils/Merger';

/**
 * Define avatar variants using Class Variance Authority (CVA).
 * 
 * @type {cva}
 */
const AvatarVariants = cva('', {
  /**
   * Define color variants for the avatar.
   */
  variants: {
    Color: {
      /**
       * Default color variant.
       */
      '': '',
      /**
       * Primary color variant.
       */
      primary: 'ring-primary ring-offset-base-100 ring ring-offset-2',
      /**
       * Secondary color variant.
       */
      secondary: 'ring-secondary ring-offset-base-100 ring ring-offset-2',
      /**
       * Accent color variant.
       */
      accent: 'ring-accent ring-offset-base-100 ring ring-offset-2',
      /**
       * Neutral color variant.
       */
      neutral: 'ring-neutral ring-offset-base-100 ring ring-offset-2',
      /**
       * Base-100 color variant.
       */
      'base-100': 'ring-neutral ring-offset-base-100 ring ring-offset-2',
      /**
       * Base-200 color variant.
       */
      'base-200': 'ring-neutral ring-offset-base-100 ring ring-offset-2',
      /**
       * Base-300 color variant.
       */
      'base-300': 'ring-neutral ring-offset-base-100 ring ring-offset-2',
      /**
       * Success color variant.
       */
      success: 'ring-success ring-offset-base-100 ring ring-offset-2',
      /**
       * Warning color variant.
       */
      warning: 'ring-warning ring-offset-base-100 ring ring-offset-2',
      /**
       * Info color variant.
       */
      info: 'ring-info ring-offset-base-100 ring ring-offset-2',
      /**
       * Error color variant.
       */
      error: 'ring-error ring-offset-base-100 ring ring-offset-2',
    },
    /**
     * Define size variants for the avatar.
     */
    Size: {
      /**
       * Small size variant.
       */
      sm: 'w-4 h-4',
      /**
       * Medium size variant.
       */
      md: 'w-8 h-8',
      /**
       * Large size variant.
       */
      lg: 'w-12 h-12',
      /**
       * Extra large size variant.
       */
      xl: 'w-16 h-16',
      /**
       * 2xl size variant.
       */
      '2xl': 'w-20 h-20',
      /**
       * 3xl size variant.
       */
      '3xl': 'w-24 h-24',
    },
  },
});

/**
 * Avatar component.
 * 
 * @param {IAvatar} props - Component props.
 * @returns {JSX.Element} Avatar component.
 */
const Avatar: FC<IAvatar> = ({
  /**
   * Optional size of the avatar (default: 'md').
   */
  Size = 'md',
  /**
   * Optional color of the avatar (default: 'primary').
   */
  Color = 'primary',
  /**
   * Optional additional class names for the avatar.
   */
  ClassNames = '',
  /**
   * Optional image source for the avatar.
   */
  Image,
  /**
   * Optional alt text for the avatar image.
   */
  Alt,
}) => {
  /**
   * Merge avatar variants with additional class names.
   */
  const AvatarClassNames = Merger(AvatarVariants({ Size, Color }), ClassNames);
  return (
    <div className="avatar">
      <div className={AvatarClassNames}>
        <img src={Image} alt={Alt} />
      </div>
    </div>
  );
};

/**
 * Export the Avatar component.
 */
export default Avatar;