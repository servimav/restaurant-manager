/**
 * Image Interface
 */
export interface IImage {
  id: number;
  title: string;
  path: string;
}
/**
 * Declare object with image
 */
export interface IWithImage {
  image_id: number;
  image?: IImage; // Opcional
}
