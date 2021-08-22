import React from 'react';

const Card = props => {

    const {country} = props;

    //regex code
    //this line will convert the number x which is the population and then replace after 3 numbers by a space

    const numberFormat = (x) =>{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <div>
            <li className='card'>
                <img src={country.flag} alt="flag"/>

            <div className="data-container">
                <ul>
                    <li>{country.name}</li>
                    <li>{country.capital}</li>
                    <li>Pop. {numberFormat(country.population)}</li>
                </ul>
            </div>
            </li>
        </div>
    );
};

export default Card;