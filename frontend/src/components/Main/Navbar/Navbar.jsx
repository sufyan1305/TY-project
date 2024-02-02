// import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import dev from '../../../assets/dev_icon.jpeg'
import axios from 'axios'

function Navbar() {

    // const [data, setdata] = useState({})
    // useEffect(() => {
    //   axios.get("http://localhost:3000/api")
    //   .then((res)=> setdata(res.data))
    // }, [])


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg_clr" data-bs-theme="dark" style={{backgroundColor:"#5A595E"}} >
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-4" to="/dashboard">ThekaCoffee
                        {/* {data.message} */}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                        <i className="fa-solid fa-bell fa-xl me-3  cursor-pointer " style={{ color: "white" }}></i>
                        <div className="">
                            <form role="search" method="get" className="search-form" action="">
                                <label>
                                    <i className="fa-solid fa-magnifying-glass cursor-pointer fa-xl icn " style={{ color: "white" }}
                                    ></i>
                                    <input type="text" className="search-field" placeholder="Search …" name="s" title="Search for:" />
                                </label>
                                <input type="submit" className="search-submit" value="Search" />
                            </form>
                        </div>

                        <div className="dropdown d-flex justify-content-center " >
                            <Link className="btn btn-secondary dropdown-toggle me-3 ms-3 border border-3 text-black bg-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={dev} alt="" height={30} width={40} className='dev_round' />
                                Dropdown link
                            </Link>

                            <ul className="dropdown-menu" >
                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                <li><Link className="dropdown-item" to="#">Log out</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
