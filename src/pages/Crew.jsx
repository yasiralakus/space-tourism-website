import { useState } from "react"
import Nav from "./Nav"

export default function Crew() {

    let crewPersonal = [
        {
            title: 'COMMANDER',
            name: 'DOUGLAS HURLEY',
            desc: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
            img: '/img/d-hurley.png'
        },

        {
            title: 'MISSION SPECIALIST',
            name: 'MARK SHUTTLEWORTH',
            desc: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
            img: '/img/m-shuttleworth.png'
        },

        {
            title: 'PILOT',
            name: 'VICTOR GLOVER',
            desc: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
            img: '/img/v-glover.png'
        },

        {
            title: 'FLIGHT ENGINEER',
            name: 'ANOUSHEH ANSARI',
            desc: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
            img: '/img/a-ansari.png'
        },

        
    ]
    
    const [crewIndex, setCrewIndex] = useState(0)

    return (

        <div className="crew-container">

            <div className="header">
                    
                <img src="/img/logo.svg" alt="" />

                <Nav />

            </div>

            <main className="crew-main">

                <header>
                    <span>02</span> MEET YOUR CREW
                </header>

                <div className="crew-block">

                    <div className="meetCrew">

                        <h3>{crewPersonal[crewIndex].title}</h3>

                        <h2>{crewPersonal[crewIndex].name}</h2>

                        <p>{crewPersonal[crewIndex].desc}</p>

                        <div className="crew-btns">

                            <button onClick={function(e) {
                                setCrewIndex(0);
                                e.target.classList.add('active-button');
                            } } className={crewIndex === 0 ? 'active-button' : ''}></button>
                            
                            <button onClick={function(e) {
                                setCrewIndex(1);
                                e.target.classList.add('active-button');
                            } } className={crewIndex === 1 ? 'active-button' : ''}></button>

                            <button onClick={function(e) {
                                setCrewIndex(2);
                                e.target.classList.add('active-button');
                            } } className={crewIndex === 2 ? 'active-button' : ''}></button>

                            <button onClick={function(e) {
                                setCrewIndex(3);
                                e.target.classList.add('active-button');
                            } } className={crewIndex === 3 ? 'active-button' : ''}></button>
                            
                        </div>

                    </div>

                    <img src={crewPersonal[crewIndex].img} alt="" />



                </div>
                

            </main>

        </div>
    )
}