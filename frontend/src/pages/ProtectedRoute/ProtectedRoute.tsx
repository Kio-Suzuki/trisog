import { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export function Protected({ children }: { children: React.ReactNode }) {
  const context = useContext(Context);
  const navigate = useNavigate();

  if (!context) {
    throw new Error("Protected component must be used within an AuthProvider");
  }

  const { user } = context;

  useEffect(() => {
    if (!user) {
      toast.warning("You must be logged in to access this page");
      navigate(-1);
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return <>{children}</>;
}
