import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import MainBar from "../Components/MainBar";

const Main = () => {


    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                    <Sidebar/>
                    </div>
                    <div className="col-sm-8">
                    <MainBar/>
                    </div>
                    <div className="col-sm-2">Third!</div>
                </div>
            </div>
        </>
    )
}

export default Main



