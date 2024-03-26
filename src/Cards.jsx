import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './card.css'

const BASE_URL = "http://localhost:3005/teams";

function Cards() {
    const [team1, setTeam1] = useState(null);
    const [team2, setTeam2] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          
            const response = await axios.get(BASE_URL);
            console.log('Response:', response.data); 
            const teamsData = response.data;
            console.log('Teams Data:', teamsData);
        
           
              const randomIndex1 = Math.floor(Math.random() * 174);
              const randomIndex2 = Math.floor(Math.random() * 174);
              
        
              console.log('Random Index 1:', randomIndex1); 
              console.log('Random Index 2:', randomIndex2); 
              if(randomIndex1 != randomIndex2){
                setTeam1(teamsData[randomIndex1]);
                setTeam2(teamsData[randomIndex2]);
              }
              else{
                randomIndex1 = 3
                randomIndex2 = 7
              }
              
            
    
        };
      
        fetchData();
      }, []);

    return (
        <div>
            {team1 && team2 && (
                <div className='container'>
                    <div className='teamname' key={team1.id}>{team1.name} - {team2.name}</div>
                    <hr />
        
                </div>
            )}
        </div>
    );
}

export default Cards;
