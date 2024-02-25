import React from "react";
// import animateRain from "./extentions/UI/rainDrops";
import logo from "./extentions/img/logo.svg";
import layer_1 from "./extentions/img/layer_1.jpg";
import layer_2 from "./extentions/img/layer_2.png";
import layer_5 from "./extentions/img/layer_5.png";
import layer_6 from "./extentions/img/layer_6.png";


const MainPage: React.FC = () => {
    return (
        <>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <section className="layers">
                <div className="layers__container">
                    <div className="layers__items layer-1">
                        <img src={layer_1} alt="layer_1" />
                    </div>
                    <div className="layers__items layer-2">
                        <img src={layer_2} alt="layer_2" />
                    </div>
                    <div className="layers__items layer-3">
                        <div className="hero-content">
                            <h1>Natural forest <br/> <span>HTML / CSS</span></h1>
                        </div>
                    </div>
                    <div className="layers__items layer-4"></div>
                    <div className="layers__items layer-5">
                        <img src={layer_5} alt="layer_5" />
                    </div>
                    <div className="layers__items layer-6">
                        <img src={layer_6} alt="layer_6" />
                    </div>
                </div>
            </section>
        </>

    );
};

export default MainPage;
