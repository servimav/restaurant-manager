/**
 * Client Interface
 */
export interface IClient {
  id: number;
  name: string;
  ci: string; // Carne de Identidad
  contact: string;
  created_at: Date | string;
  updated_at: Date | string;
}
