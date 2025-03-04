import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

// As propriedades são recebidas no Componente como um único parâmetro (props).
//      Através dele é que se acessam as propriedades especificas (props.title)
// props.children => propriedade criada automaticamente e se refere ao conteúdo que é 
//      inserido dentro da tag do componente 
// também é possivel fazer uma desestruturação do props, colocando no parâmetro { title }, por exemplo

import './style.css';

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon () {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            
            history.push('/profile');
        } catch(err){
            alert('Falha no login, tente novamente.');
        }

    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        >    
                    </input>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section> 
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}