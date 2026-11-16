import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ClientsService } from '../services/ClientsService';

export default function NewClientPage() {
  const navigate = useNavigate();
  const [client, setClient] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [saving, setSaving] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!client.name.trim() || !client.email.trim()) {
      setError('Por favor, completa al menos el nombre y el correo.');
      return;
    }

    try {
      setSaving(true);
      setError(null);
      await ClientsService.addClient(client);
      navigate('/clients');
    } catch (err: any) {
      setError('Error al registrar el cliente en Supabase. Verifica la conexión.');
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Añadir Nuevo Cliente</h4>
            </div>
            <div className="card-body p-4">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Ej. Juan Pérez"
                    value={client.name}
                    onChange={(e) => setClient({ ...client, name: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Ej. juan@test.com"
                    value={client.email}
                    onChange={(e) => setClient({ ...client, email: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="form-label fw-bold">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="text"
                    className="form-control"
                    placeholder="Ej. 600111222"
                    value={client.phone}
                    onChange={(e) => setClient({ ...client, phone: e.target.value })}
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/clients" className="btn btn-outline-secondary">
                    Cancelar
                  </Link>
                  <button
                    type="submit"
                    className="btn btn-success px-4"
                    disabled={saving}
                  >
                    {saving ? 'Guardando...' : 'Guardar Cliente'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
