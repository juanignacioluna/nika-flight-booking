
import './New.css';
import {Link} from 'react-router-dom';
import { DateTimePicker, Select, CounterInput } from 'react-rainbow-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function New() {

    const [departureTime, setDepartureTime] = useState(new Date('2023-01-01 00:00'));

    const [arrivalTime, setArrivalTime] = useState(new Date('2023-01-01 00:00'));

    const [passengers, setPassengers] = useState(1);

    const [flightClass,setFlightClass] = useState('Economy');

    const [flightType,setFlightType] = useState('One Way');

    const [departureCity,setDepartureCity] = useState('');

    const [arrivalCity,setArrivalCity] = useState('');

    const axios = require('axios');

    const navigate = useNavigate();


    const options = [
        { label: 'Economy', value: 'economy' },
        { label: 'Business', value: 'business' },
        { label: 'First', value: 'first' },
    ];

    let letsFly = (e) => {

        axios.post('http://localhost:8000/api/new/', {
                dcity: departureCity,
                acity: arrivalCity,
                ddate: departureTime ,
                adate: arrivalTime ,
                passengers: passengers ,
                ftype: flightType ,
                fclass: flightClass 

        })
        .then(function (response) {
            console.log(response);
            navigate('/');
        })
        .catch(function (error) {
            console.log(error);
        });
        

    }

  return (
    <div className="New">
        <h1 className="titulo">new booking!</h1>

        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-10">

                    <div class="card">
                        <div class="card-header">
                            <Link to="/">
                                <button type="button" className="btn btn-dark">
                                    <i class="fa-solid fa-arrow-left"></i>
                                </button>   
                            </Link>
                        </div>
                        <div class="card-body">

                            <div class="container-fluid">
                                <div class="row justify-content-center">
                                    <div class="col-6">
                                        <div class="form-check form-check-inline">
                                            <input onChange={
                                                (e)=>{
                                                    setFlightType(e.target.value)
                                                }
                                            } class="form-check-input" 
                                            type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Round trip" />
                                            <label class="form-check-label" for="inlineRadio1">Round trip</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-check form-check-inline">
                                            <input onChange={
                                                (e)=>{
                                                    setFlightType(e.target.value)
                                                }
                                            } class="form-check-input" 
                                            type="radio" name="inlineRadioOptions" id="inlineRadio2" value="One way" />
                                            <label class="form-check-label" for="inlineRadio2">One way</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center ciudades">
                                    <div class="col-6">
                                        <input value={departureCity} onChange={
                                            (e) => {
                                                setDepartureCity(e.target.value)
                                            }
                                        } placeholder="From" 
                                        type="text" class="form-control" />
                                    </div>
                                    <div class="col-6">
                                        <input value={arrivalCity} onChange={
                                            (e) => {
                                                setArrivalCity(e.target.value)
                                            }
                                        } placeholder="To" 
                                        type="text" class="form-control" />
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-6">
                                        <DateTimePicker
                                            id="datePickerDeparture"
                                            value={departureTime}
                                            onChange={value => {setDepartureTime(value)}}
                                            formatStyle="large"
                                            locale='en-US'
                                            okLabel='OK'
                                            cancelLabel='CANCEL'
                                        />
                                    </div>
                                    <div class="col-6">
                                        <DateTimePicker
                                            id="datePickerArrival"
                                            value={arrivalTime}
                                            onChange={value => {setArrivalTime(value)}}
                                            formatStyle="large"
                                            locale='en-US'
                                            okLabel='OK'
                                            cancelLabel='CANCEL'
                                        />
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-6">
                                        <CounterInput
                                                    label="Passengers"
                                                    placeholder="Only numbers"
                                                    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                                                    labelAlignment="flex-start"
                                                    value={passengers}
                                                    onChange={setPassengers}
                                                    min={1}
                                        />
                                    </div>
                                    <div class="col-6">
                                        <Select
                                            label="Flight Class"
                                            onChange={
                                                (e)=>{
                                                    setFlightClass(e.target.value)
                                                }
                                            }
                                            options={options}
                                            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                                        />
                                    </div>
                                </div>

                            </div>

                            <button onClick={letsFly} type="button" class="btn btn-dark">let's fly!</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  );
}

export default New;
