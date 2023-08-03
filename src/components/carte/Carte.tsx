import React from 'react'
import './Carte.css'

export interface CarteProps {
    id: number;
    name: string;
    image: string;
    civil: string;
    age: number;
    ville: string;

}



const Carte: React.FC<CarteProps> = ({ id, name, image, civil, age, ville }: CarteProps) => {
    return (
        <div className="card" key={id}>
            <div>
                <img className='card__avatar' src={image} alt="avatar" />

            </div>
            <div className='card__body'>
                <h1>{name}</h1>
                <div>civil: {civil}</div>
                <div>Age: {age}</div>
                <div>Ville: {ville}</div>
            </div>


        </div>
    )
}

export default Carte