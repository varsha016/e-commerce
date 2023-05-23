import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export default function Carousel_mui(props) {
    var items = [
        {
            name: "Damaka Offers",
            description: "Probably the most random thing you have ever seen!",
            images: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e5683f109352921.Y3JvcCwxMDgwLDg0NCwwLDExNA.jpeg"
        },
        {
            name: "Your Offers",
            description: "Hello EveryOne!",
            images: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/6163af136380733.Y3JvcCwyNTQwLDE5ODYsMCw2NjA.jpg",

        },
        {
            name: "food sel",
            description: "Hello !",
            images: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/82b9ff105697315.Y3JvcCwyNDc3LDE5MzcsMTMxOCwyNA.jpg",

        },
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <img src={props.item.images} alt="offers" />

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}