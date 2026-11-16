import React, { useEffect } from 'react';
import { IonApp, setupIonicReact } from '@ionic/react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

/* Componentes y Páginas */
import { Navbar } from './components/Navbar';
import ClientsPage from './pages/ClientsPage';
import NewClientPage from './pages/NewClientPage';
import AboutPage from './pages/AboutPage';

/* Cliente Supabase */
import { supabase } from './config/supabase';

/* Estilos de Ionic */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import './theme/variables.css';

/* Bootstrap 5 */
import 'bootstrap/dist/css/bootstrap.min.css';

setupIonicReact();

const App: React.FC = () => {
  useEffect(() => {
    // Reto 1: Comprobación de conexión con Supabase e impresión en consola
    const verifyConnection = async () => {
      try {
        const { data, error } = await supabase.from('clients').select('*');
        if (error) {
          console.error('Error al conectar con Supabase:', error.message);
        } else {
          console.log('conexión correcta', data);
        }
      } catch (err) {
        console.error('Fallo en la llamada a Supabase:', err);
      }
    };

    verifyConnection();
  }, []);

  return (
    <IonApp>
      <BrowserRouter>
        <Navbar />
        <main className="pb-4">
          <Routes>
            <Route path="/" element={<Navigate to="/clients" replace />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/new-client" element={<NewClientPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/clients" replace />} />
          </Routes>
        </main>
      </BrowserRouter>
    </IonApp>
  );
};

export default App;
