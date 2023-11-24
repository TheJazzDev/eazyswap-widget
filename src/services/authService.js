import { linkWithCredential, signInWithPopup } from 'firebase/auth';
import { authInstance } from './firebase';

export const handleAccountLinking = async (
  error,
  authProvider,
  setUser,
  navigate
) => {
  if (error.code === 'auth/account-exists-with-different-credential') {
    const credential = error.credential;

    try {
      const authResult = await signInWithPopup(authInstance, authProvider);
      await linkWithCredential(authResult.user, credential);
      setUser(authResult.user);
      navigate('/');
    } catch (linkError) {
      console.error('Error linking accounts:', linkError);
    }
  } else {
    console.error('GitHub Signup Error:', error);
  }
};
