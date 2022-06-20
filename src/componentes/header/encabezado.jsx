
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
      <Button style={{backgroundColor:"rgb(18, 36, 64)",border:"none"}}  class="navbar-brand" variant="primary" onClick={handleShow}>
      <img width={'100px'} height={'100px'}  src='https://pngimg.com/uploads/pokeball/pokeball_PNG7.png'  alt="" />        

      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Usuario</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
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