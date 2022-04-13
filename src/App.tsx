import React from 'react';
import './App.css';
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {RemoteWork} from "./remote/Remote";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {Routes, Route} from 'react-router-dom';
import s from "./main/Main.module.css";
import {Nav} from "./header/navigation/Nav";


function App() {
    return (
        <div className="App">
            <div className="appBlockElement"/>
            <div className="appContent">
                <Routes>
                    <Route path={"/*"} element={<Main/>}/>
                    <Route path={"home"} element={<Main/>}/>
                    <Route path={"about"} element={<Skills/>}/>
                    <Route path={"portfolio"} element={<Works/>}/>
                    <Route path={"contact"} element={<Contacts/>}/>
                </Routes>
            </div>

            <Nav />
            {/*/!*<RemoteWork />*!/*/}
            {/*/!*<Footer />*!/*/}
        </div>
    );
}

export default App;