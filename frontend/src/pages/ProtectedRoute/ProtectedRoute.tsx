import { useEffect, useContext, useRef } from 'react';
import { Context } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export function Protected({ children }: { children: React.ReactNode }) {
  const context = useContext(Context);
  const navigate = useNavigate();
  const showToast = useRef(false);

  if (!context) {
    throw new Error("Protected component must be used within an AuthProvider");
  }

  const { user } = context;

  useEffect(() => {
    if (!user) {
      navigate('/login');
      if (!showToast.current) {
        setTimeout(() => {
          toast.error('You must be logged in to access Tours Pages', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }, 1000);
        showToast.current = true;
      }
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return <>{children}</>;
}
