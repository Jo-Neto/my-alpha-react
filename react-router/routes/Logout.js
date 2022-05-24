import React from 'react';
import { Link } from 'react-router-dom';

const Sobre = () => {
    return (
        <div>
            <div>
                <button>logout</button>
                <Link to="/">retornar a página inicial sem fazer logout</Link>
            </div>
            <div>
                <p>quer mesmo fazer logout?</p>
                <Link to="/">fazer logout e voltar para tela inicial</Link>
            </div>
        </div>
    );
}

export default Sobre;