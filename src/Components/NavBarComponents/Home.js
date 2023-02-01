
import CardDisplayA from '../CardComponents/CardDisplayA'
// import data from '../CardComponents/data'
import { React, useEffect, useState } from 'react'


function Home() {

    const [packs, setPack] = useState([]);

    useEffect(() => {
        fetch("https://localhost:44303/MainCat")
            .then(res => res.json())
            .then((result) => { setPack(result); }
            );
    }, []);

    return (
        <div>
            <CardDisplayA details={packs} />
        </div>
    )
}

export default Home;