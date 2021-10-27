import { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/auth';
import '../css/login.css';

const Login = () => {
    const { login, isLoggedIn } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToSignup, toggleRedirect] = useState(false);
    const { from } = location.state || { from: { pathname: '/' } };
    
    const handleSubmit = event => {
        event.preventDefault();
        login(email, password).then(res => {
            history.replace(from);
        });
    };

    if (isLoggedIn()) {
        return <Redirect to={location.state || '/'} />;
    }

    if (redirectToSignup) {
        return <Redirect to={{

            pathname: '/signup',
            state: { from: from }
        }}
        />;
    }

    return (
        <div className="row"> 
        <br/><br/><br/><br/><br/>
        <p className="ident bordure">
            Identification
            </p>
        <div className="col-md-12 mt-12">
            
            <form onSubmit={handleSubmit}>
            <div className="form-group esp">
                <input 
                    name='email'
                    placeholder='Identifiant'
                    type='email'
                    autoComplete='username'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                </div>
                <div className="form-group esp">
                    <input 
                        name='password'
                        placeholder='Mot de passe'
                        type='password'
                        autoComplete='password'
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <a className="bordure left" href="#">Mot de passe oublié</a>
                </div>
                <div className="form-group esp">          
                    <a className="bordure" onClick={() => toggleRedirect(true)}>Je n'ai pas de compte</a>
                </div>
                <div className="form-group ">
                    <button type="submit" className="btn1 btn-primar btn-circle">Connexion</button>
                 </div>
            </form>
            
            </div>
            </div>     
    );
};

export default Login;