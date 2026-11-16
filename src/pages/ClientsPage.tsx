import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ClientsService } from '../services/ClientsService';
import { Client } from '../interfaces/Client';

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadClients = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ClientsService.getClients();
      setClients(data);
    } catch (err: any) {
      setError('Error al conectar con Supabase o cargar la lista de clientes.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id?: number) => {
    if (!id) return;
    const confirmDelete = window.confirm('¿Seguro que deseas eliminar este cliente?');
    if (confirmDelete) {
      try {
        await ClientsService.deleteClient(id);
        loadClients();
      } catch (err) {
        alert('No se pudo eliminar el cliente.');
      }
    }
  };

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Listado de Clientes</h2>
        <Link to="/new-client" className="btn btn-primary">
          + Añadir cliente
        </Link>
      </div>

      {loading && (
        <div className="text-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando clientes...</span>
          </div>
          <p className="mt-2 text-muted">Cargando datos desde Supabase...</p>
        </div>
      )}

      {error && (
        <div className="alert alert-warning" role="alert">
          <strong>Aviso:</strong> {error}
        </div>
      )}

      {!loading && clients.length === 0 && !error && (
        <div className="alert alert-info">
          No hay clientes registrados en la tabla <code>clients</code> de Supabase.
        </div>
      )}

      {!loading && clients.length > 0 && (
        <div className="table-responsive shadow-sm rounded">
          <table className="table table-striped table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th scope="col" style={{ width: '80px' }}>ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Teléfono</th>
                <th scope="col" style={{ width: '120px' }} className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c) => (
                <tr key={c.id}>
                  <td><strong>#{c.id}</strong></td>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDelete(c.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
