// import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './card.css';






const CardData = (props) => {
    const [packs, setPack] = useState([]);

    useEffect(() => {
        fetch("https://localhost:44303/MainCat")
            .then(res => res.json())
            .then((result) => { setPack(result); }
            );
    }, []);

    return (
        <div >
            {packs}
        </div>

    );
}

export default CardData;