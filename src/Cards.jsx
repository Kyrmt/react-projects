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
      let score1 = Math.floor(Math.random() * 5)
      let score2 = Math.floor(Math.random() * 5)
      let bet1 = Math.random()* 3 + 1 
      let bet2 = Math.random()* 3 + 1
      let  beteq = Math.random()* 3 + 1
      if(score1 > score2){
        bet2 += score1 - score2
      }
      else{
        bet1 += score2 - score1
      }
      if(bet1 - bet2 < 1 && bet1 - bet2 > 0){
        bet1+= 1
      }
      if(bet2 - bet1 < 1 && bet2 - bet1 > 0){
        bet2+= 1
      }
      if(score1 - score2 >= 3){
        bet1 = 0
        beteq += 2
      }
      if(score2 - score1 >= 3){
        bet2 = 0
        beteq += 2
      }
      if(score1 - score2 >= 2 && bet1 > 2){
        bet1 += -1
      }
      if(score1 == score2){
        beteq += 2
      }
      if(score1>score2 && bet1 >= bet2){
        bet1 += -1
      }
    
       
    return (
        <div>
            {team1 && team2 && (
                <div className='container'>
                    <div key={team1.id}><span className='score'>{score1}-{score2}</span> <span className='teamname'>{team1.name} - {team2.name}</span></div>
      
                    <hr />
                    <div className='btns'><button>1</button> <button>X</button> <button>2</button></div>
                    <div className='rate'><button>{bet1.toFixed(2)}</button> <button>{beteq.toFixed(2)}</button> <button>{bet2.toFixed(2)}</button></div>

                </div>
            )}
        </div>
    );
}

export default Cards;
