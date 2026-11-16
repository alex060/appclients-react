import { supabase } from '../config/supabase';
import { Client } from '../interfaces/Client';

export class ClientsService {
  // Obtener todos los clientes
  static async getClients(): Promise<Client[]> {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      console.error('Error al obtener clientes:', error);
      throw error;
    }
    return data || [];
  }

  // Obtener un cliente por ID
  static async getClient(id: number): Promise<Client | null> {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error(`Error al obtener cliente ${id}:`, error);
      throw error;
    }
    return data;
  }

  // Insertar un nuevo cliente
  static async addClient(client: Omit<Client, 'id'>): Promise<void> {
    const { error } = await supabase
      .from('clients')
      .insert([client]);

    if (error) {
      console.error('Error al insertar cliente:', error);
      throw error;
    }
  }

  // Eliminar un cliente por ID
  static async deleteClient(id: number): Promise<void> {
    const { error } = await supabase
      .from('clients')
      .delete()
      .eq('id', id);

    if (error) {
      console.error(`Error al eliminar cliente ${id}:`, error);
      throw error;
    }
  }
}
