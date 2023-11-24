import { useNavigate } from 'react-router-dom';
import {
  authInstance,
  googleAuthProvider,
  githubAuthProvider,
} from '../../services/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useAuthContext } from '../../context/AuthContext';
import { handleAccountLinking } from '../../services/authService';
import GoogleIcon from '../../assets/GoogleIcon.svg';
import GithubIcon from '../../assets/GithubIcon.png';

const SignIn = () => {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleSignupWithGoogle = async () => {
    try {
      const result = await signInWithPopup(authInstance, googleAuthProvider);
      setUser(result.user);
      navigate('/');
    } catch (error) {
      handleAccountLinking(error, githubAuthProvider, setUser, navigate);
    }
  };

  const handleSignupWithGithub = async () => {
    try {
      const result = await signInWithPopup(authInstance, githubAuthProvider);
      setUser(result.user);
      navigate('/');
    } catch (error) {
      handleAccountLinking(error, googleAuthProvider, setUser, navigate);
    }
  };

  return (
    <div className='mt-24 w-full mx-auto max-w-lg p-4 border rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700 space-y-10'>
      <h5 className='text-3xl font-medium text-white text-center'>
        Sign In
      </h5>
      <button
        onClick={handleSignupWithGoogle}
        className='flex items-center bg-white text-center mx-auto rounded-lg shadow-md px-6 py-3 text-sm font-bold text-gray-800 hover:bg-gray-400 transition-all duration-300 ease-in-out'>
        <img src={GoogleIcon} alt='google' className='w-6 h-6 mr-4' />
        <span>Continue with Google</span>
      </button>
      <button
        onClick={handleSignupWithGithub}
        className='flex items-center bg-white text-center mx-auto rounded-lg shadow-md px-6 py-3 text-sm font-bold text-gray-800 hover:bg-gray-400 transition-all duration-300 ease-in-out'>
        <img src={GithubIcon} alt='google' className='w-6 h-6 mr-4' />
        <span>Continue with Github</span>
      </button>
    </div>
  );
};

export default SignIn;
