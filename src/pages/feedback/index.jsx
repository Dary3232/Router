import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Feedback = () => {
    const [values, setValues] = useState({
        name: '',
        email: ''
    })

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get('test'))
    const isTest = searchParams.get('test') === 'true'

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const onSend = () => {
        setTimeout(() => navigate('/'), 1000)
    }

    return (
        <form>
            <input type="text" name="name" placeholder="Имя" onChange={onChange} />
            <br />
            <br />
            <input type="email" placeholder="Email" onChange={onChange} />
            <br />
            <br />
            {isTest &&
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis 
                    omnis ratione nulla molestiae nemo ipsam quis quibusdam porro, iusto molestias voluptatem 
                    tempora dolorum ducimus vero aut sed eaque reiciendis.
                </div>

            }
            <button type="button" onClick={onSend}>Отправить</button>
        </form>
    )
}

