import React from "react";
// import animateRain from "../extentions/UI/rainDrops";
import { NavLink } from "react-router-dom";
import logo from "../extentions/img/logo.svg";
import layer_1 from "../extentions/img/layer_1.jpg";
import layer_2 from "../extentions/img/layer_2.png";
import layer_5 from "../extentions/img/layer_5.png";
import layer_6 from "../extentions/img/layer_6.png";

const MainPage: React.FC = () => {
    // добавляем свойство style для корневого элемента HTML (весь экран)
    // этим способом мы динамически передаем в CSS файл данные о положении
    // мыши на экране. Для этого полученные переменные вставим в CSS в
    // .layers__item в поле transform: rotateX(var(--move-x)) rotateY(var(--move-y));
    // самым мы привяжем изменение координат к изменению CSS свойств
    document.addEventListener("mousemove", e => {
        Object.assign(document.documentElement, {
            style: `
                --move-x: ${(e.clientX - (window.innerWidth / 2)) * 0.005}deg;
                --move-y: ${(e.clientY - (window.innerHeight / 2)) * -0.01}deg;
            `
        });
    });
    // console.log("animateRain()", animateRain);
    return (
        <>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <section className="layers">
                <div className="layers__container">
                    <div className="layers__item layer-1">
                        <img src={layer_1} alt="layer_1" />
                    </div>
                    <div className="layers__item layer-2">
                        <img src={layer_2} alt="layer_2" />
                    </div>
                    <div className="layers__item layer-3">
                        <div className="hero-content">
                            <h1>Natural forest <br/> <span>HTML / CSS</span></h1>
                            <div className="hero-content__p">
                                Creating a beautiful 3D website with a lens effect
                            </div>
                            <NavLink className="nav-link text-light" to="/about">
                                <button className="button-start">Start learning</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="layers__item layer-4">
                        <canvas className="rain"></canvas>
                    </div>
                    <div className="layers__item layer-5">
                        <img src={layer_5} alt="layer_5" />
                    </div>
                    <div className="layers__item layer-6">
                        <img src={layer_6} alt="layer_6" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainPage;
