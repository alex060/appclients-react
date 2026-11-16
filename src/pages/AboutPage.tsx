import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mt-4 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          {/* Tarjeta de descripción */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-dark text-white">
              <h3 className="mb-0">Acerca del Proyecto: AppClients React</h3>
            </div>
            <div className="card-body p-4">
              <h5 className="card-title text-primary fw-bold">
                Módulo: Desarrollo de Interfaces (2º DAM)
              </h5>
              <p className="card-text text-secondary mt-3">
                <strong>AppClients React</strong> es una aplicación web y móvil moderna desarrollada
                con el ecosistema <strong>Ionic Framework</strong> y <strong>React</strong>, tipada
                con <strong>TypeScript</strong> y estilizada mediante <strong>Bootstrap 5</strong>.
              </p>
              <p className="card-text text-secondary">
                La capa de persistencia se apoya en la plataforma en la nube <strong>Supabase</strong>,
                aprovechando su base de datos relacional <strong>PostgreSQL</strong> mediante operaciones
                asíncronas seguras y arquitectura desacoplada basada en servicios y variables de entorno.
              </p>

              <div className="row mt-4">
                <div className="col-md-6 mb-3">
                  <div className="p-3 bg-light rounded border">
                    <h6 className="fw-bold text-dark">Frontend</h6>
                    <ul className="mb-0 text-muted ps-3">
                      <li>React 19 & TypeScript</li>
                      <li>Ionic React Router (v6)</li>
                      <li>Bootstrap 5 (estilos utilitarios)</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="p-3 bg-light rounded border">
                    <h6 className="fw-bold text-dark">Backend & Despliegue</h6>
                    <ul className="mb-0 text-muted ps-3">
                      <li>Supabase SDK (@supabase/supabase-js)</li>
                      <li>PostgreSQL Cloud Database</li>
                      <li>Vercel Platform Deployment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección Imagen WebP */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-light">
              <h5 className="mb-0 text-secondary">Arquitectura e Identidad Visual (Imagen .webp)</h5>
            </div>
            <div className="card-body text-center p-3">
              <img
                src="/about.webp"
                alt="Diagrama e Identidad AppClients React"
                className="img-fluid rounded border shadow-sm"
                style={{ maxHeight: '350px', width: '100%', objectFit: 'cover' }}
              />
              <p className="small text-muted mt-2 mb-0">
                Formato WebP optimizado de alta compresión y rendimiento para la web.
              </p>
            </div>
          </div>

          {/* Sección Vídeo de YouTube */}
          <div className="card shadow-sm">
            <div className="card-header bg-light">
              <h5 className="mb-0 text-secondary">Demostración Multimedia (Vídeo YouTube)</h5>
            </div>
            <div className="card-body p-3">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/bMknfKXIFA8"
                  title="Tutorial React y Supabase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="small text-muted mt-2 mb-0 text-center">
                Vídeo explicativo integrado en la aplicación mediante contenedor responsive de Bootstrap.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
