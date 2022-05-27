import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, googleUser, googleLoading] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (googleUser || githubUser) {
        navigate(from, { replace: true })
    }
    if (googleLoading || githubLoading) {
        <Loading />
    }
    
    return (

        <div>
            <div className="divider my-2">OR</div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline border-fuchsia-400  w-full max-w-xs my-2">
                <div><img className='w-50 mx-2' src="https://i.ibb.co/JqhBJYJ/google.png" alt="" /></div>
                Login with Google
            </button>
            <button
                onClick={() => signInWithGithub()}
                className="btn btn-outline border-fuchsia-400 w-full max-w-xs my-2">
                <div><img className='w-50 mx-2' src="https://i.ibb.co/3Wjh3wv/github.png" alt="" /></div>
                Login with Github
            </button>
        </div>
    );
};

export default SocialLogin;