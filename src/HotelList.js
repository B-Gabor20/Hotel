import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import admin from './login';
export function HotelList()
{
    const [Hotels,setHotels] = useState([]);
    const [isFetchPending,setFetchPending] = useState(false);
    
    useEffect(() => {
        setFetchPending(true);
        fetch("https://nodejs.sulla.hu/data")
          .then((res) => res.json())
          .then((Hotel) => setHotels(Hotel))
          .catch(console.log)  
          .finally(() => {
            setFetchPending(false);
          });
        }, []);
    return (
        <div className='p-5 m-auto text-center content bg-ivory'>
            
                {isFetchPending ? (<div className="spinner-border"></div>):(
                    <div className='d-flex flex-wrap '>
                        {Hotels.map((Hotel)=>(
                        <div className='card flex-fill m-1 p-2 col-xs-6 col-md-4 col-xl-3 d-flex flex-wrap'>
                            <div className='text-center'>
                            <NavLink key={`/Hotel/${Hotel.id}`} to={`/Hotel/${Hotel.id}`} style={{ textDecoration: 'none' }}>
                            <div className="card-body">
                                <h1 className='card-title text-muted'>{Hotel.name}</h1>
                                <h5 className='text-muted'>Hostname: {Hotel.hostname}</h5>
                                <h5 className='text-muted'>Helyszín: {Hotel.location}</h5>
                                <h5 className='text-muted'>Ár: {Hotel.price} Ft/Éj</h5>
                                <h5 className='text-muted'>Minimum eltölthető éjszakák: {Hotel.minimum_nights}</h5>
                            </div>
                           </NavLink>
                           </div>
                        </div>
                        ))}
                    </div>
                )}
        </div>
    )
}
/*
<img className="img-thumbnail img-fluid img-responsive" 
                                    style={{ height: 200, maxWidth: 200, objectFit: 'cover' }}
                                    src={Hotel.kepURL ? Hotel.kepURL : 'https://via.placeholder.com/400x800'}/>
*/