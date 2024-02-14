import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import admin from "./login";
export function HotelSingle()
{
    const param = useParams();
    const id = param.HotelId;
    const [Hotel, setHotel] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);
    useEffect(() => {
        setFetchPending(true);
        (async() => {
            try{
                const res = await fetch(`https://nodejs.sulla.hu/data/${id}`);
            const Hotel2 = await res.json();
            setHotel(Hotel2);
        } 
        catch(error){
            console.log(error);
        }
        finally{
            setFetchPending(false);
        }
        })();
    },[id]);

    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            {isFetchPending || !Hotel.id ? (<div className="spinner-border"></div>) : (
                    <div className="card p-3 d-flex content-center">
                        <div className="card-body">
                                <h1 className='card-title'>{Hotel.name}</h1>
                                <h5>Hostname: {Hotel.hostname}</h5>
                                <h5>Helyszín: {Hotel.location}</h5>
                                <h5>Ár: {Hotel.price} Ft/Éj</h5>
                                <h5>Minimum eltölthető éjszakák: {Hotel.minimum_nights}</h5>
                        </div>
                        {admin.value ? (
                            <div>
                                <NavLink key="n"to={`/mod-Hotel/${Hotel.id}`}  >
                                <button type="button" class="btn btn-primary m2-">Módosítás</button>
                                </NavLink>
                                <NavLink key="i" to={`/delete-Hotel/${Hotel.id}`}>
                                        <button type="button" class="btn btn-danger m-2">Törlés</button>
                                </NavLink>
                            </div>
                        ) : (<div></div>)}
                            <NavLink to={`/`}>
                                <button className="btn btn-secondary m-2">Vissza</button>
                            </NavLink>
                        <div>
                    </div>
            </div>)}
        </div>
    );
}
/*

*/