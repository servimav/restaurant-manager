import { IImage, IWithImage } from './images';

/**
 * Application Interface
 */
export interface IApplication extends IWithImage {
  id: number;
  title: string;
  description: string;
  logo_id: number;
  logo?: IImage;
  active: boolean;
  settings: IApplicationSettings; // Ajustes
  created_at: Date | string;
  updated_at: Date | string;
}

/**
 * Application Settings Interface
 */
export interface IApplicationSettings {
  [key: string]: string;
}
