import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// A dedicated KIPLANNotary portal doesn't exist yet. Rather than
// dead-ending here, this route sends visitors to the Notarial Services
// content that's already built and live on this same site.
export function KiplanNotary() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/services/notary', { replace: true });
  }, [navigate]);

  return null;
}