import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

const Register = () => {
    const [tdn, setTdn] = useState();
    const [mobile, setMobile] = useState();

    const registerTdn = (e) => {
        e.preventDefault();
        var msg = 'Property with Tdn '+tdn+' successfully registered.';
        var url ='https://www.isms.com.my/isms_send_all_id.php?un=digammavauf&pwd=Jan9tin7t$&dstno='+mobile+'&msg='+encodeURIComponent(msg)+'&type=1&sendid=DigammaVauF&agreedterm=YES';
        axios(url).then((response) => {
            alert(response.data);
        }).catch((error) => {
            console.log(error.message);
        }).finally(() => {
            alert(msg);
        });
    }
    return (
        <div>
            <div className="p-5 mb-4 bg-dark rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Register Your Real Property</h1>
                    <p class="col-md-8 fs-4">Before you can use this Kiosk, you have to link your real property's tax declaration number with your mobile number.</p>
                    <div className="col-6">
                    <div className="input-group mb-2">
                            <label htmlFor="search" className="input-group-text">Tax Declaration No.</label>
                            <input type="text" name="tdn" onChange={(e)=>setTdn(e.target.value)} className="form-control" placeholder="type in the tax declaration no..."/>
                        </div>
                        <div className="input-group mb-2">
                            <label htmlFor="search" className="input-group-text">Mobile No.</label>
                            <input type="text" name="mobile" onChange={(e)=>setMobile(e.target.value)} className="form-control" placeholder="type in the mobile no..."/>
                        </div>
                        <button className="btn btn-warning" type="submit" onClick={registerTdn}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Register;