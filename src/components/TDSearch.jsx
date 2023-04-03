import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import TaxDeclaration from './TaxDeclaration';

const TDSearch = () => {
    const _CREATE = 1;
    const _READ = 2;
    const _UPDATE = 3;
    const _DELETE = 4;

    const [tdn, setTdn] = useState();
    const [assessmentRoll, setAssessmentRoll] = useState([]);

    const searchTdn = (e) => {
        e.preventDefault();
        axios('http://localhost/wd34-php/WD34_Capstone_Group2_Db.php?tdn='+tdn).then((response) => {
            setAssessmentRoll(response.data);
        });
    }

    /* useEffect(()=>{
        const url = "http://localhost/wd34-php/WD34_Capstone_Group2_Db.php";
        axios.get(url).then((response) => {
            setAssessmentRoll(response.data);
        });
    }); */

    return (
        <div className="container mt-4">
            <h3 className="text-center mb-0">Real Property Tax Payment</h3>
            <h1 className="text-light text-center mb-4">Self-Service Kiosk</h1>
            <div className="input-group">
                <label htmlFor="search" className="input-group-text">Tax Declaration No.</label>
                <input type="text" name="tdn" onChange={(e)=>setTdn(e.target.value)} className="form-control" placeholder="type in the tax declaration no..."/>
                <button className="btn btn-warning" type="submit" name="mode" value={_READ} onClick={searchTdn}>Search</button>
            </div>
            <hr/>
            <div className="row d-flex justify-content-center align-items-stretch">
                    {
                        assessmentRoll.map((val) => {
                            return (
                                <TaxDeclaration id={val.tdn} owner={val.owner} total_land_area={val.total_land_area} total_market_value={val.total_market_value} total_assessed_value={val.total_assessed_value} paid={val.paid} mobile={val.mobile} />
                            )
                        })
                    }
            </div>
        </div>
    );
}
 
export default TDSearch;