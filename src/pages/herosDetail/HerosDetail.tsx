import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import HerosRepository from '../../data/HerosRepository';
const HerosDetail = () => {
    let params = useParams();
    const [herosDetail, setHerosDetail] = useState<any | null>(null);

    const fetchHeroById = async (id: number) => {
        const repository = new HerosRepository();
        const heroData = await repository.getHerosById(id);
        if (heroData) {
            setHerosDetail(heroData);
        }
    };

    useEffect(() => {
        const requestId = parseInt(params.id || '');
        fetchHeroById(requestId);
    }, []);

    return (
        <div className="card" key={herosDetail?.id}>
            <div>
                <img className='card__avatar' src={herosDetail?.image} alt="avatar" />

            </div>
            <div className='card__body'>
                <h1>{herosDetail?.name}</h1>
                <div>civil: {herosDetail?.civil}</div>
                <div>Age: {herosDetail?.age}</div>
                <div>Ville: {herosDetail?.ville}</div>
            </div>
        </div>
    )
}

export default HerosDetail