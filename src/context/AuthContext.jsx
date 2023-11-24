import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { authInstance } from '../services/firebase';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authInstance, async (user) => {
      try {
        if (user) {
          const idToken = await user.getIdToken();
          localStorage.setItem('authUser', JSON.stringify(user));
          localStorage.setItem('token', idToken);
        } else {
          localStorage.removeItem('authUser');
          localStorage.removeItem('token');
        }
        setUser(user);
        setLoading(false);
      } catch (error) {
        console.error('Error in onAuthStateChanged:', error);
      }
    });

    return unsubscribe;
  }, []);

  const logout = async () => {
    try {
      localStorage.removeItem('authUser');
      localStorage.removeItem('token');
      navigate('/signin');
      await signOut(authInstance);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const value = { user, logout, loading, setUser };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
