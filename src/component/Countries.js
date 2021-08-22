import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    const  [data, setData] = useState([]);
    const [sortedData, setSortedData] =  useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(40);
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Africa", "America", "Europe", "Ocaenia", "Asia"];

    useEffect(() =>{

        //the if statement will execute the data only once
        if (playOnce){
            axios.get('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag')
            .then((res) =>{
                setData(res.data);
                setPlayOnce(false);
            });
        }
        


     //transform the array in object
        const sortedCountry= () => {
            const countryObj = Object.keys(data).map((i) => data[i]);
            const sortedArray = countryObj.sort((a,b) =>{
                return b.population - a.population
                //this return sorts the population number in a decreasing order
                // note that it used to sort any array
            });
           sortedArray.length = rangeValue;
           setSortedData(sortedArray);
        }
        sortedCountry();
        //the array will be empty cz we sorted 'data' before requiesting(javascript is async)
        
    }, [data,rangeValue, playOnce]);
    //by putting data in the array, for each time the data will evolve, the useEffect will be replayed infinitly
    // except when a boolean (true) is used in useEffect with a if condition
     

    return (
        <div className="countries">
            <div className='sort-countainer'>
                <input type="range" min="1" max="250" value={rangeValue} 
                onChange ={(e) => setRangeValue(e.target.value)} />

                <ul>
                    {radios.map((radio) =>{
                        return(
                            <li key={radio}>
                                <input type="radio" value={radio} id={radio} 
                                checked={radio === selectedRadio}
                                onChange ={(e) => setSelectedRadio(e.target.value)}/>
                                <label htmlFor={radio}>{radio}</label>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="cancel">

                {/* this line means that if selectedRadio is true, it shows the h5 */}
                {selectedRadio && <h5 onClick = {() => setSelectedRadio("")}>Cancel</h5>}
                
            </div>
            <ul className="countries-list">
 {/* to map the sortedData will sort only the first 30th countries with the most population */}
                {sortedData
                    .filter((country) => country.region.includes(selectedRadio))
                    .map((country) => (
                    <Card country={country} key={country.name}/>
                ))}
            </ul>
            
        </div>
    );
};

export default Countries;