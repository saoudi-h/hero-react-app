import React, { useState } from 'react'
import './compteur.css'
const Compteur = () => {
    const [compteur, setCompteur] = useState(0);
    const increment = () => {
        setCompteur(e => e + 1);
    }
    const decrement = () => {
        setCompteur(e => e - 1);
    }
    return (
        <div className='compteur'>
            <h2>Compteur</h2>
            <div>Le compteur est actuellement à : {compteur}</div>
            <button type="button" onClick={increment} className="compteur__btn">Incrementer</button>
            <button type="button" onClick={decrement} className="compteur__btn">Decrementer</button>
        </div>

    )
}

export default Compteur