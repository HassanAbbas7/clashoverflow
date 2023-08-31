import React from "react";
import Header from "../Components/Header";
import "../index.css"


const Home = ()=>{


    return(
        <>
        <div id="homeDiv">
        <Header/>
        <div className="container" style={{backgroundColor: "rgb(128, 128, 128, 0.3", fontFamily: "'Black Ops One', sans-serif"}}>
      <div className="row mt-5">
        <div className="col-md-4">
          <img src="https://play-lh.googleusercontent.com/cla_4m7mPjHRGSMAuOZa5Ua5sqs84sW_TihTHc9bLoaO7NbyKoYjsC5Twv2ZpGg4LwM=w526-h296-rw" alt="Banner" 
          height={"400px"}
          width={"400px"}
          className="" />
        </div>
        <div className="col-md-6" style={{margin:"auto"}}>
          <h1 className="display-4">Unleash Your Strategies!</h1>
          <p className="lead">
            Share and explore battle-winning strategies in Clash of Clans.
          </p>
          <button className="btn btn-primary btn-lg">Get Started</button>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-md-4">
          <h3>Upload Your Strategy</h3>
          <p>Share your game-changing attack tactics with the community.</p>
          <img src="https://img.freepik.com/free-vector/flat-blue-design-image-upload-landing-pages_23-2148274066.jpg?size=626&ext=jpg&ga=GA1.1.140312627.1689056433&semt=ais" alt="strategy picture"
          className="img-fluid" />
        </div>
        <div className="col-md-4">
          <h3>Rate and Comment</h3>
          <p>Rate and discuss strategies uploaded by fellow players.</p>
          <img src="https://img.freepik.com/free-vector/star-rating-with-black-background_1017-6189.jpg?size=626&ext=jpg&ga=GA1.1.140312627.1689056433&semt=sph" alt="rating picture"
          className="img-fluid"
          style={{width:"77%", marginLeft:"20px"}} />
        </div>
        <div className="col-md-4">
          <h3>Build Your Profile</h3>
          <p>Show off your strategic prowess with your unique user profile.</p>
          <img src="https://img.freepik.com/free-vector/set-avatar-silhouettes_23-2147674173.jpg?size=626&ext=jpg&ga=GA1.1.140312627.1689056433&semt=sph" alt="profile picture"
          style={{width:"77%"}} />
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-md-12">
          <h2>How It Works</h2>
          {/* Add step-by-step visuals or animations here */}
          <p>One</p>
        </div>
      </div>
      
      <div className="row mt-5">
        {/* Display popular strategies with preview images and titles */}
        <p>Two</p>
      </div>
      
      <div className="row mt-5">
        {/* Showcase user testimonials with profile images and comments */}
        <p>Three</p>
      </div>
      
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <h3>Ready to Dominate?</h3>
          <button className="btn btn-primary btn-lg">Start Sharing</button>
        </div>
      </div>
      
    </div>
    </div>
        </>
    )
}

export default Home