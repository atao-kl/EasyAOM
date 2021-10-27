
import useAuth from '../hooks/auth';
import { useEffect, useState } from 'react';
import '../css/NosOffres.css';
import axios from 'axios';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Redirect, useLocation } from 'react-router-dom';

  /** Private
  * @NosOffres Fonction qui permet d'afficher les paramètres du contre par type client 
  * @param {table} parametrecomptes - table contient les paramètres liés avec différents types user
  * @isLoggedIn Pour savoir si le client est déjà inscrit
  * @author DEVAO - Khadija Lamsiah
  **/

const NosOffres = () => {
  const [parametrecomptes, setParametrecomptes] = useState([]);
  const [refresh, toggleRefresh] = useState(0);
  const refreshParent = () => {
      toggleRefresh(refresh + 1);
  };

 useEffect(() => {
      fetchParametrecomptes();
  }, [refresh]);

  async function fetchParametrecomptes() {
      const { data } = await axios.get('/api/parametrecomptes');
      setParametrecomptes(data);
      
  }

const { isLoggedIn } = useAuth();
const [redirectToSignup, toggleRedirect] = useState(false);
const location = useLocation();
const { from } = location.state || { from: { pathname: '/' } };

if (redirectToSignup) {
  return <Redirect to={{

      pathname: '/signup',
      state: { from: from }
  }}
  />;
}
    return (
      <div> 
        <form>     
        <table className="table table-hover table-bordered">
          <thead>
            <tr className="active">
                <th style={{background:"#fff"}}><center></center></th>
                <th><center><h3>Version d'essai</h3><h4 className="text-muted text-sm class essai">Gratuit</h4></center></th>
                <th>
               <center>
                      <h3>Offre Découverte</h3><h4 className="text-muted text-sm">Gratuit</h4>
                      {isLoggedIn() ?
                       <>  </>
                      :
                      <>
                      <button type="submit" className="btn1 btn-primar btn-circle" onClick={() => toggleRedirect(true)}>
                        Je m'inscris</button>
                      </>
                      } 
                    </center>
                
                </th>
                <th>
                  <center>
                    <h3>Service Premium</h3><h4 className="text-muted text-sm"><font style={{color: "#F39200"}}>59 &euro;</font>/mois</h4>
                    <button type="submit" className="btn1 btn-primar btn-circle" onClick="#"> Je m'abonne </button>
                  </center>
                </th>
            </tr>      
          </thead>

          <tbody>
          <tr>
          <td>Sourcing</td>
           {parametrecomptes.map(Parametrecompte => 
              
              <td >
              {Parametrecompte.typecompte == 'essai'? <div>{Parametrecompte.sourcing}</div>: 
              Parametrecompte.typecompte == 'decouverte'? <div>{Parametrecompte.sourcing}</div>: 
              Parametrecompte.typecompte == 'Premium'? <div>{Parametrecompte.sourcing}</div>: null
              }

            </td>
            ) }
            </tr>
            <tr>
              <td>Periode de recherche</td>
              {parametrecomptes.map(Parametrecompte => 
              <td>
              {Parametrecompte.typecompte == 'essai'? <div>{Parametrecompte.periodrecherch} mois</div>: 
              Parametrecompte.typecompte == 'decouverte'? <div>{Parametrecompte.periodrecherch} mois</div>: 
              Parametrecompte.typecompte == 'Premium'? <div>{Parametrecompte.periodrecherch} mois</div>:null
              }
              </td>
               ) }
            </tr>
            <tr>
              <td>Recherche dans l'objet du marché</td>
              {parametrecomptes.map(Parametrecompte => 
              <td>
                
              {Parametrecompte.typecompte === 'essai' && Parametrecompte.recherche_objet   ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'decouverte' && Parametrecompte.recherche_objet  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />: 
              Parametrecompte.typecompte === 'Premium' && Parametrecompte.recherche_objet ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
            
              <td>Recherche dans les avis et les marché cloturés</td>
              {parametrecomptes.map(Parametrecompte => 
              <td>
              {Parametrecompte.typecompte === 'essai' && Parametrecompte.recherche_avis_clotures  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'decouverte' &&  Parametrecompte.recherche_avis_clotures  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
             Parametrecompte.typecompte === 'Premium' && Parametrecompte.recherche_avis_clotures ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Recherche dans les avis d'attribution</td>
              {parametrecomptes.map(Parametrecompte => 
              <td>
              {Parametrecompte.typecompte === 'essai' && Parametrecompte.recherche_avis_attribution ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'decouverte' && Parametrecompte.recherche_avis_attribution  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'Premium' && Parametrecompte.recherche_avis_attribution  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Affichage</td>
              {parametrecomptes.map(Parametrecompte => 
              <td>
              {Parametrecompte.typecompte == 'essai'? <div>{Parametrecompte.nbrmaxaoafficher} annonces/recherche</div>: 
              Parametrecompte.typecompte == 'decouverte'? <div>{Parametrecompte.nbrmaxaoafficher} annonces/recherche</div>: 
              Parametrecompte.typecompte == 'Premium'? <div>{Parametrecompte.nbrmaxaoafficher}annonces/recherche</div>:null
              }
              </td>
              ) }
            </tr>
           
            <tr>
              <td>Dédoublonage</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.typecompte === 'essai' && Parametrecompte.dedoublonage ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'decouverte' && Parametrecompte.dedoublonage  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'Premium' && Parametrecompte.dedoublonage  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Sauvgarde des recherches</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.typecompte === 'essai' && Parametrecompte.sauvegarde_recherche ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'decouverte' && Parametrecompte.sauvegarde_recherche  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'Premium' && Parametrecompte.sauvegarde_recherche  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Données essentielles du marché</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.typecompte === 'essai' && Parametrecompte.donnees_essentielle ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'decouverte' && Parametrecompte.donnees_essentielle  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'Premium' && Parametrecompte.donnees_essentielle  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Contacts</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.typecompte === 'essai' && Parametrecompte.contacts ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'decouverte' && Parametrecompte.contacts  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'Premium' && Parametrecompte.contacts  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Département d'éxecution</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.typecompte === 'essai' && Parametrecompte.departement_execution ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'decouverte' && Parametrecompte.departement_execution  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'Premium' && Parametrecompte.departement_execution  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>avis complet et standardisation des annonces</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.typecompte === 'essai' && Parametrecompte.avis_complet ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'decouverte' && Parametrecompte.avis_complet  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'Premium' && Parametrecompte.avis_complet  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Telechargement et outil d'annalyse DCE</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.typecompte === 'essai' && Parametrecompte.nbrdcegratuittelecharger ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'decouverte' && Parametrecompte.nbrdcegratuittelecharger  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'Premium' && Parametrecompte.nbrdcegratuittelecharger  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Partage des annonces</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.typecompte === 'essai' && Parametrecompte.partage_annonces ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'decouverte' && Parametrecompte.partage_annonces  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'Premium' && Parametrecompte.partage_annonces  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Ajout dans l'agenda</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.typecompte === 'essai' && Parametrecompte.ajout_agenda ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'decouverte' && Parametrecompte.ajout_agenda  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'Premium' && Parametrecompte.ajout_agenda  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Gestion des favoris</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.typecompte === 'essai' && Parametrecompte.gestion_favoris ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'decouverte' && Parametrecompte.gestion_favoris  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'Premium' && Parametrecompte.gestion_favoris  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Grille de suivi des appel d'offre</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.typecompte === 'essai' && Parametrecompte.grille_ao ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'decouverte' && Parametrecompte.grille_ao  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:
               Parametrecompte.typecompte === 'Premium' && Parametrecompte.grille_ao  ? <BsFillCheckCircleFill fontSize="24px"  color="#F39200" backgroundColor="#F39200" />:<div> -</div>}
              </td>
              ) }
            </tr>
          </tbody>

        </table>
         </form>  
        </div>  
    );
};


export default NosOffres;

