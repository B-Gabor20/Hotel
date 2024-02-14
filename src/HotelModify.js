import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export function HotelModify()
{
    const navigate = useNavigate();
    const param = useParams();
    const id = param.id;
    const [HotelData, setHotel] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);
    
    useEffect(() => {
        setFetchPending(true);
        (async() => {
            try{
            const res = await fetch(`https://nodejs.sulla.hu/data/${id}`);
            const Hotel = await res.json();
            setHotel(Hotel);
        } 
        catch(error){
            console.log(error);
        }
        finally{
            setFetchPending(false);
        }
        })();
    },[id]);

    return(
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Hotel módosítása</h2>
            <form onSubmit={
                (event) => {
                    event.persist();
                    event.preventDefault();
                    console.log(JSON.stringify({
                        name: event.target.name.value,
                        hostname: event.target.hostname.value,
                        location: event.target.location.value,
                        price: event.target.price.value,
                        minimum_nights: event.target.minimum_nights.value,
                    }))
                    fetch(`https://nodejs.sulla.hu/data/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: event.target.name.value,
                        hostname: event.target.hostname.value,
                        location: event.target.location.value,
                        price: event.target.price.value,
                        minimum_nights: event.target.minimum_nights.value,
                })
            })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
            }
        }>
            <div className='form-group row pb-3'>
                    <label className='col-form-label'>Hotel Név: </label>
                    <div>
                        <input type='text' name='name' className='form-control' placeholder={HotelData.name} required></input>
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label className='col-sm-3 col-form-label'>Host Név: </label>
                    <div>
                        <input type='text' name='hostname' className='form-control' placeholder={HotelData.hostname} required/>
                    </div>
                </div>
                
                <div className='form-group row pb-3'>
                    <label className='col-sm-3 col-form-label'>Helyszín: </label>
                    <div>
                        <input type='text' name='location' className='form-control' placeholder={HotelData.location} required/>
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label className='col-sm-3 col-form-label'>Ára: </label>
                    <div>
                        <input type='number' name='price' className='form-control' placeholder={HotelData.price} required/>
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label className='col-sm-3 col-form-label'>Minimum éjszaka: </label>
                    <div>
                        <input type='text' name='minimum_nights' className='form-control' placeholder={HotelData.minimum_nights} required/>
                    </div>
                </div>
                
            <div className="d-flex justify-content-between">
                    <div className="w-50">
                    <NavLink to={`/`}>
                        <button type="submit" className="btn btn-primary">Mentés</button>
                    </NavLink> 
                    </div>
                    <div className="w-50">
                        <NavLink to={`/Hotel/${HotelData.id}`}>
                                <button className="btn btn-secondary">Vissza</button>
                        </NavLink>
                    </div>
                </div>
        </form>
        </div>
    )
}