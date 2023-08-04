import React from 'react'
import Data from '../../data/Data'
import { Heros } from '../../components/carte/Carte';
import { useParams } from 'react-router-dom';
const HerosDetail = () => {
    let params = useParams();
    const requestId = parseInt(params.id || '');
    const herosDetail: Heros | undefined = new Data().getCarteById(requestId);
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