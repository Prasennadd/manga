// import React from 'react';   
import React, { useState,useEffect } from 'react';
import './fun.css';
// import './new1.html';
function Fun()
{
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data => {
            setAnimeList(data);
        })
        .catch(error => {
            console.error('Error fetching anime:', error);
        });
    }, []);
    const rectangles = [];
    for(let i = 0; i < animeList.length; i++) {
        rectangles.push(
            <div key={i} className="cont" style={{
                width: '100%',
                maxWidth: '200px',
                textAlign:'center',
                height: '300px',
                backgroundColor: 'skyblue',
                margin: '10px',
                borderRadius:'10px',
                // border: '2px solid #333',
                marginBottom: '100px',
                // marginLeft:'10px',
                marginRight:'80px',
                border:'solid 2px red',
                boxSizing: 'border-box'
            }}  onClick={() => window.location.href = `/viewM.html?message=${encodeURIComponent(animeList[i])}`}>{animeList[i]}
            </div>
        );
    }
    return(
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginTop:'200px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            border:'solid 2px red'
        }}>
            {rectangles}
        </div>
    );
}
export default Fun