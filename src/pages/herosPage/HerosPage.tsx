import React, { useEffect, useState } from 'react'
import Carte, { Heros } from '../../components/carte/Carte';
import './HerosPage.css'
import Data from '../../data/Data';
import { Link } from 'react-router-dom';


const HerosPage: React.FC = () => {
    const [herosList, setHerosList] = useState<Heros[]>([]);
    useEffect(() => {
        const allHeros = new Data().getAll();
        setHerosList(allHeros);
    }, [])

    return (

        <div className='herospage'>
            {
                herosList.map(carte =>
                (
                    <Link to={"/heros/profile/"+carte.id}>
                        <Carte key={carte.id} id={carte.id} name={carte.name} civil={carte.civil} age={carte.age} image={carte.image} ville={carte.ville} />
                    </Link>
                )

                )}
        </div>
    )
}

export default HerosPage