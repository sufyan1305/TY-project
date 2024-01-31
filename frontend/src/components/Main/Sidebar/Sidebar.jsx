import React from 'react'

function Sidebar() {

    const hide_sidebar = () => {
        document.querySelector('.sidebar').style.display = "none";
        document.querySelector('.hamburger').style.display = "block";
        // document.querySelector('.sidebar').classList.add("animate-sidebar");
    }
    
    const show_sidebar = () => {
        document.querySelector('.sidebar').style.display = "block";
        // document.querySelector('.sidebar').classList.add("animate-sidebar");
        document.querySelector('.hamburger').style.display = "none";
    }

    return (
        <>
            <aside>
                <div className="sidebar">
                    <div className="cross d-flex justify-content-end">
                        <button className='btn-close' onClick={hide_sidebar}>

                            <i className="fa-solid fa-xmark fa-xl text-white"></i>
                        </button>
                    </div>

                    <div className="lists text-light">
                        <ul className='list_text m-4'>
                            <li className=''>Dashboard</li>
                            <li>Dashboard</li>
                            <li>Dashboard</li>
                            <li>Dashboard</li>
                            <li>Dashboard</li>
                            <li>Dashboard</li>
                            <li>Dashboard</li>
                        </ul>
                    </div>
                </div>
                <div className="hamburger display-none mt-1 position-absolute bg-dark " onClick={show_sidebar}>
                    <button className='btn text-white'>

                        <i className="fa-solid fa-bars fa-xl"></i>
                    </button>
                </div>

            </aside>
        </>
    )
}

export default Sidebar
