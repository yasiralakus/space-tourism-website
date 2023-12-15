import { useState } from "react"
import Nav from "./Nav"

export default function Technology() {

    let technologyItems = [
        {
            title: 'LAUNCH VEHICLE',
            desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            img: '/img/launch-vehicle.png'
        },

        {
            title: 'SPACEPORT',
            desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            img: '/img/spaceport.png'
        },

        {
            title: 'SPACE CAPSULE',
            desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            img: '/img/capsule.png'
        },

        
    ]
    
    const [technoIndex, setTechnoIndex] = useState(0)
    
    return (

        <div className="technology-container">

            <div className="header">
                    
                <img src="/img/logo.svg" alt="" />

                <Nav />

            </div>

            <main className="technology-main">

                <header>
                    <span>03</span> SPACE LAUNCH 101
                </header>
                
                <div className="technology-box">

                    <div className="box-content">

                        <div className="order">

                            <button onClick={function(e) {
                                setTechnoIndex(0);
                                e.target.classList.add('technoActiveBtn')
                            }} className={technoIndex === 0 ? 'technoActiveBtn' : ''}>1</button>
                            <button onClick={function(e) {
                                setTechnoIndex(1);
                                e.target.classList.add('technoActiveBtn')
                            }} className={technoIndex === 1 ? 'technoActiveBtn' : ''}>2</button>
                            <button onClick={function(e) {
                                setTechnoIndex(2);
                                e.target.classList.add('technoActiveBtn')
                            }} className={technoIndex === 2 ? 'technoActiveBtn' : ''}>3</button>

                        </div>

                        <div className="content-text">

                            <h4>THE TERMINOLOGY…</h4>
                            <h1>{technologyItems[technoIndex].title}</h1>
                            <p>{technologyItems[technoIndex].desc}</p>

                        </div>

                    </div>

                    <img src={technologyItems[technoIndex].img} alt="" />

                </div>

            </main>

        </div>
    )
}