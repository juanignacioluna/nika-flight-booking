
import './Home.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';



function Home() {

  const [vuelos, setVuelos] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8000/api/lista/")
    .then(res => res.json())
    .then(data => {
        
        let aux = []
 
        JSON.parse(data.data).map(e=>{
          aux.push(e.fields)
        })

        setVuelos(aux)
    })

  }, []);



  return (
    <div className="Home">
      <h1 className="titulo">flight booking</h1>

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-10">

            <Link to="new">
                <button className="btn btn-light">new booking</button>
            </Link>
            
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">departure city</th>
                  <th scope="col">arriving city</th>
                  <th scope="col">departure date</th>
                  <th scope="col">arrival date</th>
                  <th scope="col">passengers count</th>
                  <th scope="col">flight type</th>
                </tr>
              </thead>
              <tbody>
                {
                  vuelos.map((e,i)=>{
                    return(
                      <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{e.departure_city}</td>
                        <td>{e.arrival_city}</td>
                        <td>{e.departure_date}</td>
                        <td>{e.arrival_date}</td>
                        <td>{e.passangers}</td>
                        <td>{e.type}</td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
          </div>    
        </div>
      </div>



    </div>
  );
}

export default Home;
