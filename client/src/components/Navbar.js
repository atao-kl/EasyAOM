import { Link } from 'react-router-dom';
import useAuth from '../hooks/auth';
import React from 'react';
import logo from '../images/logo.png';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AiFillShop, AiOutlineShoppingCart, AiOutlineSearch, AiTwotoneHome, AiOutlineStar } from "react-icons/ai";
import { FaUserCircle, FaUserCheck } from "react-icons/fa";



const Navbar = () => {
    const { isLoggedIn, logout, getProfile } = useAuth();
    return (
        <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="logo">
            <Link className="nav-link" to={"/"}>
              <img src={logo} alt={"logo"} width="100" height="50" />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto nav-right">
              <li className="nav-item"> 
                  <Link className="nav-link" to={"/"}> 
                  <AiTwotoneHome fontSize="24px"  color="#F39200" backgroundColor="#F39200" /> <br/> 
                   Présentation</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to={"/recherche"}> 
                  <AiOutlineSearch fontSize="24px"  color="#F39200" backgroundColor="#F39200" /> <br/>
                  Recherche</Link>
              </li>
                {isLoggedIn() ?
                 <>
              <li className="nav-item">
                  <Link className="nav-link" to={"/mesFavoris"}> 
                  <AiOutlineStar fontSize="24px"  color="#F39200" backgroundColor="#F39200" /> 
                  <br/> Mes Favoris</Link>
              </li>
                </>
                 :
                 <>
                 </>
                 }
              <li className="nav-item">
                  <Link className="nav-link" to={"/nosOffres"}>
                  <AiFillShop fontSize="24px"  color="#F39200" backgroundColor="#F39200" /> <br/>
                      Nos offres</Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/#"}>
                  <AiOutlineShoppingCart fontSize="24px"  color="#F39200" backgroundColor="#F39200" />
                      <br/>
                      Panier</Link>
              </li>
                {isLoggedIn() ?
                 <>
              <li>
                  <Link className="nav-link" onClick={() => logout()} to='/'>
                  <FaUserCheck fontSize="24px"  color="#F39200" backgroundColor="#F39200" />
                  <br />
                     Déconnecter</Link>
              </li>
                 </>
                 :
                 <>
              <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                  <FaUserCircle fontSize="24px"  color="#F39200" backgroundColor="#F39200" />
                  <br /> Login</Link>
              </li>
                </>
                      }   
              </ul>
            </div>  
        </nav>
        </div>
       
        
    );
};

export default Navbar;