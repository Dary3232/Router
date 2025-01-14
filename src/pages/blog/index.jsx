import React from "react";
import { Link } from "react-router-dom";

export const Blog = () => {

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

    return <div>
        Это страница блога
        {pictures.map((picture) => <div key={picture.id}>
            <Link to={`/blog/${picture.id}`}>
                {picture.title}
            </Link>
        </div>)}
    </div>

}