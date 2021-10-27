import { useEffect, useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/auth';
import axios from 'axios';

const Signup = () => {
  
 /*test auth-user */
    const { signup, isLoggedIn } = useAuth();
    const history = useHistory();
    const location = useLocation();
    
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [nom_entreprise, setNomEntreprise] = useState('');
    const [secteuractiviteId, setsecteuractiviteId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailConfirme, setEmailConfirme] = useState('');
    const [passwordConfirme, setPasswordConfirme] = useState('');
  
    const [codeMaile, setCodeMaile] = useState('');
    const [newslettre, setNewslettre] = useState('');
    const [promotions, setPromotions] = useState('');
    const [jconditions, setJconditions] = useState('');  
     /*redirection page login */   
    const [redirectToLogin, toggleRedirect] = useState(false);
    /*la from inscription */
    const { from } = location.state || { from: { pathname: '/' } };
   
    const [secteuractivites, setSecteuractivites] = useState([]);
     /* refresh liste secteurActivites */
    const [refresh] = useState(0);
    useEffect(() => {
        fetchSecteuractivites();
    }, [refresh]);

     /*remplir la liste secteurActivites */
    const fetchSecteuractivites = async () => {
        try { 
        const { data } = await axios.get('/api/secteuractivites');
        setSecteuractivites(data);
        console.log(data);
        } catch (err) {
        // Handle Error Here
        console.error(err);
        }
        };

    /* boutton inscription */
    const handleSubmit = event => {
        event.preventDefault();
        let errors = {};
        let isValid = true;
          if (!"password") {
           isValid = false; 
            errors["password"] = "S'il vous plait entrez votre mot de passe."; 
            alert("S'il vous plait entrez votre mot de passe.");
          }
          if (!"passwordConfirme") {    
            isValid = false;
            errors["passwordConfirme"] = "Veuillez entrer votre mot de passe de confirmation.";
          /* alert("Veuillez entrer votre mot de passe de confirmation.");   */
          } 
          /*if (typeof "password" !== "undefined" && typeof "passwordConfirme" !== "undefined") { */
            if ("password" != "passwordConfirme") { 
              isValid = false; 
              errors["password"] = "Les mots de passe ne correspondent pas."; 
             /* alert("Les mots de passe ne correspondent pas.");*/
            } 
        /* }    */
           /* faire appel a la fonction d'inscription */ 

            signup(email, password, nom, prenom, nom_entreprise,newslettre, promotions, jconditions ,
                secteuractiviteId).then(res => {
                history.replace(from);
            });         
    };
/* test s'il est déjà connecter */ 
    if (isLoggedIn()) {
        return <Redirect to={location.state || '/'} />;
    }

    if (redirectToLogin) {
        return <Redirect to={{
            pathname: '/login',
            state: { from: from }
        }}
        />;
    }

    return (
        
    <div className="container">
        <div className="row">
            <p className="ident bordure">
                Mes informations
            </p>
        <div className="col-md-12 mt-12">

            <form onSubmit={handleSubmit} >

            <div className="form-group esp " >
                <input 
                    name='nom'
                    placeholder='Nom *'
                    type='text'
                    autoComplete='nom'
                    value={nom}
                    onChange={event => setNom(event.target.value)}
                    
                /> 
                 <input 
                    name='Prnom'
                    placeholder='Prénom *'
                    type='text'
                    autoComplete='prenom'
                    value={prenom}
                    onChange={event => setPrenom(event.target.value)}
                    style={{marginLeft: '15px'}}
                />
                </div>
                <div className="form-group esp">
                <input 
                    name='nom_entreprise'
                    placeholder='Entreprise *'
                    type='text'
                    autoComplete='nom_entreprise'
                    value={nom_entreprise}
                    onChange={event => setNomEntreprise(event.target.value)}
                    
                /> 
				
                 <select 
                    name='secteuractiviteId'
                    autoComplete='secteuractiviteId'
                    style={{marginLeft: '15px', width:'20%'}}
                    onChange={event => setsecteuractiviteId(event.target.value)}
                 >
                     <option selected>Secteur Activité * </option>
                    {secteuractivites.map(secteuractivite => { 
                     return ( 
                     <option  value={secteuractivite.id}>{secteuractivite.title}</option>
                     );
                    })}
                    </select>
                </div>
                <div className="form-group esp">
                <input 
                    name='email'
                    placeholder='Adress e-mail *'
                    type='email'
                    autoComplete='username'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <input 
                    name='emailConfirme'
                    placeholder='Confirmer votre adress e-mail *'
                    type='email'
                    autoComplete='email2'
                    value={emailConfirme}
                    onChange={event => setEmailConfirme(event.target.value)}
                    style={{marginLeft: '15px'}}
                />
                </div>
              
                <div className="form-group esp">
                    <input 
                        name='password'
                        placeholder='Mot de passe *'
                        type='password'
                        autoComplete='password'
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <input 
                        name='passwordConfirme'
                        placeholder='Confirmer votre mot de passe *'
                        type='password'
                        autoComplete='passwordConfirme'
                        value={passwordConfirme}
                        onChange={event => setPasswordConfirme(event.target.value)}
                        style={{marginLeft: '15px'}}
                    />
                   
                </div>
                <div className="form-group esp ">
                    <button type="submit"  style={{width: '20%'}}  className="btn1 btn-primar btn-circle">Verifier mon adress email</button>
                    <input 
                        name='codeMaile'
                        placeholder='Entrer le code reçu par mail'
                        type='text'
                        autoComplete='codeMaile'
                        value={codeMaile}
                        onChange={event => setCodeMaile(event.target.value)}
                        style={{marginLeft: '15px'}}
                    />
                 </div>
                 <div className="form-group esp ">                 
                    <input 
                        name='newslettre'
                        type='checkbox'
                        autoComplete='newslettre'
                        value={true}
                        onChange={event => setNewslettre(event.target.value)}
                        style={{marginLeft: '15px'}}
                    />
                    <label htmlFor="huey">&nbsp;Je souhaite recevoir les Newslettre EasyAO</label>
                    <br/>
                      <input 
                        name='promotions'
                        type='checkbox'
                        autoComplete='promotions'
                        value={true}
                        onChange={event => setPromotions(event.target.value)}
                        style={{marginLeft: '15px'}}
                    />
                    <label htmlFor="huey">&nbsp;Je souhaite recevoir des promotions de EasyAO et ou de ses partenaires</label>
                    <br/>
                      <input 
                        name='jconditions'
                        type='checkbox'
                        autoComplete='jconditions'
                        value={true}
                        onChange={event => setJconditions(event.target.value)}
                        style={{marginLeft: '15px'}}
                    />
                    <label htmlFor="huey">&nbsp;J'accepte des conditions générales d'utilisation de EasyAO </label>
                 </div>
                 <div className="form-group esp ">
                    <button type="submit"  className="btn1 btn-primar btn-circle">Je m'nscris</button>                 
                 </div>             
            </form>
            <p>
            Vous avez déjà un compte? <button onClick={() => toggleRedirect(true)}>Connectez-vous ici</button>
            </p>
            </div>
        </div>
        </div>
    );
};

export default Signup;