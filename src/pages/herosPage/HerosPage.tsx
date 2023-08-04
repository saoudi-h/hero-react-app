import React, { useEffect, useState } from 'react'
import Carte, { Heros } from '../../components/carte/Carte';
import './HerosPage.css'
import { Link } from 'react-router-dom';
import HerosRepository from '../../data/HerosRepository';



const HerosPage: React.FC = () => {

    const [herosList, setHerosList] = useState<Heros[]>([]);
    const fetchHeros = async () => {
        const repository = new HerosRepository();
        const herosData = await repository.getAll();
        if (herosData) {
            setHerosList(herosData);
        }
    };

    useEffect(() => {
        fetchHeros();
    }, []);

    return (

        <div className='herospage'>
            {
                herosList.map(carte =>
                (
                    <Link to={"/heros/profile/" + carte.id} key={carte.id}>
                        <Carte key={carte.id} id={carte.id} name={carte.name} civil={carte.civil} age={carte.age} image={carte.image} ville={carte.ville} />
                    </Link>
                )

                )}
        </div>
    )
}

export default HerosPage