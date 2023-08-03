import React, { useEffect, useState } from 'react'
import Carte, { Heros } from '../carte/Carte';
import './HerosList.css'

interface HerosListProps {
    allHeros: Heros[];
}
const HerosLists: React.FC<HerosListProps> = ({ allHeros }) => {
    const [herosList, setHerosList] = useState<Heros[]>([]);
    useEffect(() => {
        setHerosList(allHeros);
    }, [allHeros])

    return (
        <div className='heroslist'>
            {
                herosList.map(carte =>
                (
                    <Carte key={carte.id} id={carte.id} name={carte.name} civil={carte.civil} age={carte.age} image={carte.image} ville={carte.ville} />
                )

                )}
        </div>
    )
}

export default HerosLists