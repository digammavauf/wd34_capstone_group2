import React from 'react';
import { useState } from "react";
import axios from 'axios';

const Payment = () => {
    const [cardNo, setCardNo] = useState();
    const [expirity, setExpirity] = useState();
    const [cvv, setCvv] = useState();

    const completePayment = (e) => {
        e.preventDefault();
        const mobile = '639970917861';
        var msg = 'Payment successfully charged to '+cardNo+'.';
        var url ='https://www.isms.com.my/isms_send_all_id.php?un=digammavauf&pwd=Jan9tin7t$&dstno='+mobile+'&msg='+encodeURIComponent(msg)+'&type=1&sendid=DigammaVauF&agreedterm=YES';
        axios(url).then((response) => {
            console.log(response.data);
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
                    <h1 class="display-5 fw-bold">Credit/Debit Card Payment</h1>
                    <div className="col-6">
                        <div className="input-group mb-2 w-50">
                            <label htmlFor="search" className="input-group-text">Card No.</label>
                            <input type="text" name="cardNo" onChange={(e)=>setCardNo(e.target.value)} className="form-control" placeholder="0000-0000-0000-0000-0000"/>
                        </div>
                        <div className="input-group mb-2 w-25">
                            <label htmlFor="search" className="input-group-text">Expirity
                            </label>
                            <input type="text" name="expirity" onChange={(e)=>setExpirity(e.target.value)} className="form-control" placeholder="00/00"/>
                        </div>
                        <div className="input-group mb-2 w-25">
                            <label htmlFor="search" className="input-group-text">CVV
                            </label>
                            <input type="text" name="cvv" onChange={(e)=>setCvv(e.target.value)} className="form-control" placeholder="000"/>
                        </div>
                        <button className="btn btn-warning py-1 px-2" type="submit" onClick={completePayment}>Complete Payment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Payment;