import React from 'react'
import Data from '../../data/Data'
import Carte from '../carte/Carte';
import { CarteProps } from '../carte/Carte';
import './cartes.css'

const Cartes = () => {
  const cartes:CarteProps[] = new Data().getAll();
  
    return(
        <div className='cartes'>
        {
            cartes.map(carte =>
            (
                <Carte id={carte.id} name={carte.name} civil={carte.civil} age={carte.age} image={carte.image} ville={carte.ville} />
            )
            
        )}
        </div>
    );
}

export default Cartes