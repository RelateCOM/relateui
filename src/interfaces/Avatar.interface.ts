/**
 * Import required variables for colors and sizes.
 */
import Colors from '../variables/colors';
import Size from '../variables/sizes';

/**
 * Interface for Avatar component props.
 * 
 * @interface IAvatar
 */
export interface IAvatar {
  /**
   * Optional size of the avatar.
   * 
   * @type {Size}
   */
  Size?: Size;

  /**
   * Optional color of the avatar.
   * 
   * @type {Colors}
   */
  Color?: Colors;

  /**
   * Optional additional class names for the avatar.
   * 
   * @type {string}
   */
  ClassNames?: string;

  /**
   * Optional image source for the avatar.
   * 
   * @type {string}
   */
  Image?: string;

  /**
   * Optional alt text for the avatar image.
   * 
   * @type {string}
   */
  Alt?: string;
}