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
    <>
      <div className='mt-12 mb-8 text-[#8a919d] text-center'>
        <h2 className='text-4xl text-center'>Welcome to EazySwap Widget</h2>
        <p className='text-base max-w-xl mx-auto my-4 font-cascadia-italic'>
          To access this widget, please sign in using one of the available
          provider options below
        </p>
      </div>
      <div className='w-full mx-auto max-w-lg p-4 border rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700 space-y-10'>
        <h5 className='text-2xl font-medium text-[#8a919d] text-center'>
          Sign In
        </h5>
        <button
          onClick={handleSignupWithGoogle}
          className='flex items-center bg-white/90 text-center mx-auto rounded-lg shadow-md px-6 py-3 text-sm font-bold text-gray-900 hover:text-slate-100 hover:bg-gray-500 transition-all duration-300 ease-in-out'>
          <img src={GoogleIcon} alt='google' className='w-6 h-6 mr-4' />
          <span className='text-lg'>Continue with Google</span>
        </button>
        <button
          onClick={handleSignupWithGithub}
          className='flex items-center bg-white/90 text-center mx-auto rounded-lg shadow-md px-6 py-3 text-sm font-bold text-gray-900 hover:text-slate-100 hover:bg-gray-500 transition-all duration-300 ease-in-out'>
          <img src={GithubIcon} alt='google' className='w-6 h-6 mr-4' />
          <span className='text-lg'>Continue with Github</span>
        </button>
      </div>
    </>
  );
};

export default SignIn;
