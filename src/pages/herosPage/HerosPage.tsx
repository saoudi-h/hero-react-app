import React from 'react'
import HerosLists from '../../components/herosLists/HerosLists';
import { Heros } from '../../components/carte/Carte';
import Data from '../../data/Data';
import './HerosPage.css';

const HerosPage = () => {
    const allHeros: Heros[] = new Data().getAll();
    return (
        <>
            <h1>My Heros :</h1>
            {/* <Carte id={1} name='fatigman' civil='hakim' age={32} image='https://avatars.githubusercontent.com/u/68503582?v=4' ville='Oyonnax' /> */}
            {/* <Cartes /> */}
            <HerosLists allHeros={allHeros} />
        </>
    )
}

export default HerosPage