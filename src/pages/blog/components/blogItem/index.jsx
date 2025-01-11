import React from "react";
import { useParams } from "react-router-dom";

export const BlogItem = () => {
    const { pictureId } = useParams();

    const pictures = [
        {
            id: 1,
            title: 'Первая картинка',
            imageUrl: 'https://i.pinimg.com/1200x/03/77/74/0377745d3e1e39a79937aa6a235fc5c6.jpg'
        },
        {
            id: 2,
            title: 'Вторая картинка',
            imageUrl: 'https://i.pinimg.com/736x/24/15/21/24152197af38deb718eb730992d441d0.jpg'
        },
        {
            id: 3,
            title: 'Третья картинка',
            imageUrl: 'https://s00.yaplakal.com/pics/pics_original/9/6/9/19542969.jpg'
        },
    ];

    const picture = pictures.find(picture => picture.id === parseInt(pictureId));

    return (
        <div>
            <h1>{picture.title}</h1>
            <img src={picture.imageUrl} alt={picture.title} style={{ MaxWidth: '400px', height: '300px'}} />
        </div>
    );
};
