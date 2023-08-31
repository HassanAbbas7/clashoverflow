import React from "react";



const Sidebar = () => {

    return (
        <>
            <div className="container mt-5">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <div className="nav-item-text">
                            <a className="nav-link active hover-effects" href="#">
                                Active
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-item-text">
                            <a className="nav-link hover-effects" href="#">
                                Link
                            </a>
                        </div>

                    </li>
                    <li className="nav-item">
                        <div className="nav-item-text">
                            <a className="nav-link hover-effects" href="#">
                                Link
                            </a>
                        </div>

                    </li>
                    <li className="nav-item">
                        <div className="nav-item-text">
                            <a className="nav-link disabled" href="#">
                                Disabled
                            </a>
                        </div>

                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;