
import { NavLin,Link } from 'react-router-dom';
import { mdiClipboardListOutline, mdiViewDashboardOutline, } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import pokemon from '../body/pokemon'
import {Button, Offcanvas} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useState} from 'react';
import {render} from 'react';
const Apartados=()=>{
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
return(

<nav class="navbar navbar-light navbar-expand-lg  shadow-sm" >

<div class="container">
{/* 
    <a class="navbar-brand" >
    <img width={'100px'} height={'100px'}  src='https://pngimg.com/uploads/pokeball/pokeball_PNG7.png'  alt="" />        
    </a> */}

  

    <>
      <Button style={{backgroundColor:"rgb(64, 56, 74)",border:"none"}}  class="navbar-brand" variant="primary" onClick={handleShow}>
      <img width={'100px'} height={'100px'}  src='https://pngimg.com/uploads/pokeball/pokeball_PNG7.png'  alt="" />        

      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
                
        
              
        </Offcanvas.Header>
        <Offcanvas.Title ><img src="img/5.png" alt="" style={{marginTop:"50px",marginLeft:"100px"}} />  </Offcanvas.Title>

        <Offcanvas.Body>
       <b style={{textAlign:"center"}}>Alberto</b>
       </Offcanvas.Body>
      </Offcanvas>
    </>
 






    <div className='container'  >
                <ul className="nav nav-pills" style={{color:'white',fontSize:'25px'}}>
                    
  

                            <li className="nav-item" style={{padding:'30px'}}><Link to="/" style={{textDecoration:"none", color:"white"}}>INICIO</Link></li>
                            <li className="nav-item" style={{padding:'30px'}}><Link to="/Pokemones" style={{textDecoration:"none", color:"white"}}>POKEMONES</Link></li>
                            <li className="nav-item" style={{padding:'30px'}}><Link to="/MaestroPokemon" style={{textDecoration:"none", color:"white"}}>MAESTRO POKEMON</Link></li>
                            <li className="nav-item" style={{padding:'30px'}}><Link to="/Misiones" style={{textDecoration:"none", color:"white"}}>MISIONES</Link></li>
                </ul>
            </div>
            </div>
 </nav>

);

}

export default Apartados;