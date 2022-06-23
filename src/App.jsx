import Apartados from './componentes/header/encabezado'
import Inicio from './componentes/inicio/Inicio'
import React from 'react';
import Pokemon from './componentes/body/pokemon';
import {BrowserRouter as Router, Switch, Route,Link,Routes} from "react-router-dom";
import Pokedex from './componentes/body/pokemones';

const Home = () => 
<div>Home</div>;
const About = () => 
<div>About</div>;
const User = () => 
<div>User</div>;

function App() {
  return (
  
    <div className="App">
<header style={{backgroundColor:"rgb(64, 56, 74)"}}>
      <Apartados/>
    </header>
    <main>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/Pokemones" element={<Pokemon/>}/>

        
        {/*<Route exact path="/user" element={<User />} /> */}
      </Routes>
    </main>
  <footer>
{/*     <Footer />
 */}  </footer>
</div>
    );
}

export default App;
