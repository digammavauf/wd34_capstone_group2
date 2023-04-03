import axios from 'axios';
import { Link } from 'react-router-dom';

const TaxDeclaration = (data) => {
    const _CREATE = 1;
    const _READ = 2;
    const _UPDATE = 3;
    const _DELETE = 4;

    const payTax = (e) => {
        e.preventDefault();
        let getData = new FormData();
        getData.append('tdn', e.currentTarget.title);
        getData.append('mode', _UPDATE);
        axios({
            method: 'POST',
            url: 'http://localhost/wd34-php/WD34_Capstone_Group2_Db.php',
            data: getData
        }).then((response) => {
            alert(response.data);
        });
    }

    return (
        <div className="col-xxl-3 col-lg-4 col-md-6 col-8 mb-2">
            <div className="card h-100 text-light">
                <div className="card-header">
                    <h4 className="card-title">{data.owner}</h4>
                    <h6 className="card-subtitle">Tax Declaration No. {data.id}</h6>
                </div>
                <div className="card-body">
                    <p className="card-text mb-0">Land Area: {Number(data.total_land_area).toLocaleString("en-US")} ha(s)</p>
                    <p className="card-text mb-0">Market Value: {Number(data.total_market_value).toLocaleString("en-US")}</p>
                    <p className="card-text mb-0">Assessed Value: {Number(data.total_assessed_value).toLocaleString("en-US")}</p>
                </div>
                <div className="card-footer">
                    <div className="row d-flex justify-content-between align-items-stretch">
                        <div className="col-8">
                            <h5>Tax Due: {Number(data.total_assessed_value*0.02).toLocaleString("en-US")}</h5>
                        </div>
                        <div className="col-4">
                            {data.mobile ? (
                                <h5 className="text-success">REGISTERED!</h5>
                            ) : (
                                <Link to="/register" className="btn btn-warning py-1 px-2">Register</Link>
                            )}
                            {data.paid ? (
                                <h5 className="text-success">PAID!</h5>
                            ) : (
                                <button className="btn btn-success py-1 px-2" type="submit" onClick={payTax}>Pay Tax</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default TaxDeclaration;