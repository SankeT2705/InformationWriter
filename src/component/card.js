import React, { useState } from 'react'
import axios from 'axios';

const Card = ({ key, title, domain }) => {
    const [image, setImage] = useState('');
    const [imageKey, setKey] = useState('');

    let searchkey = title + " " + domain;
    const getImage = async () => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: searchkey },
            headers: {
                Authorization: 'Client-ID mXdn56XRoZQ4rQE4P1SY373OC3KEAOW39-j5Ffj7qow'
            }
        });
        setImage(response.data.results[0].urls.regular)
        setKey(response.data.results[0].id)

    }

    getImage()

    return (

        <div class="col" >
            <div class="card hover shadow-sm">
                <img class="bd-placeholder-img card-img-top" key={imageKey} width="100%" height="225" src={image} alt="thumblin" />
                <div class="card-body text-center">
                    <h5 class="card-title">{title}</h5>
                </div>
            </div>
        </div>

    )
}

export default Card