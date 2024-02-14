import {useEffect, useState} from 'react';
import { NavLink , useNavigate} from 'react-router-dom';
export function HotelCreate()
{
    const navigate = useNavigate();
    return (
        <div className='p-2 m-2 justify-content-center bg-whitesmoke text-center card w-50'>
            <form
            onSubmit={(e) => {
                e.persist();
                e.preventDefault();
                fetch(`https://nodejs.sulla.hu/data`, {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({
                        name: e.target.elements.name.value,
                        hostname: e.target.elements.hostname.value,
                        location: e.target.elements.location.value,
                        price: e.target.elements.price.value,
                        minimum_nights: e.target.elements.minimum_nights.value
                    }),
            })
            .then(() => {
                navigate(`/`);
            })
            .catch(console.log)
            }}>
                <div className='form-group row pb-3'>
                    <label className='col-form-label'>Hotel Név: </label>
                    <div>
                        <input type='text' name='name' className='form-control' required></input>
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label className='col-sm-3 col-form-label'>Host Név: </label>
                    <div>
                        <input type='text' name='hostname' className='form-control' required/>
                    </div>
                </div>
                
                <div className='form-group row pb-3'>
                    <label className='col-sm-3 col-form-label'>Helyszín: </label>
                    <div>
                        <input type='text' name='location' className='form-control' required/>
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label className='col-sm-3 col-form-label'>Ára: </label>
                    <div>
                        <input type='number' name='price' className='form-control' required/>
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label className='col-sm-3 col-form-label'>Minimum éjszaka: </label>
                    <div>
                        <input type='text' name='minimum_nights' className='form-control' required/>
                    </div>
                </div>
                <button type='submit' className='btn btn-success'>
                    Kuldes
                </button>
            </form>
        </div>
    );
}