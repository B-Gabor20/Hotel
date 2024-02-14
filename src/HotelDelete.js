import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
export function HotelDelete()
{
    const params = useParams();
    const id = params.HotelId;
    const navigate = useNavigate();
    const [Hotel, setHotel] = useState([]);

    useEffect(() => {
        (async() => {
            try {
        const res = await fetch(`https://nodejs.sulla.hu/data/${id}`)
        const Hotel2 = await res.json();
        setHotel(Hotel2);
            } catch(error) {
                console.log(error);
            }
    })();
}, [id]);
return (
    <div className="p-5 text-center content bg-whitesmoke">
            <h2>Hotel módosítása</h2>
            <form
            onSubmit={(e) => {
                e.persist();
                e.preventDefault();
                fetch(`https://nodejs.sulla.hu/data/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then(() => {
                    navigate("/");
                })
                .catch(console.log);
            }}
            >
            <div>
                <button type="submit" class="btn btn-danger">Törlés</button>
                <NavLink to={`/Hotel/${Hotel.id}`}>
                    <button className="btn btn-secondary">Vissza</button>
                </NavLink>
            </div>
            </form>
    </div>
);
}
