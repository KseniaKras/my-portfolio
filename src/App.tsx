import React from 'react';
import './App.scss';
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {Contacts} from "./contacts/Contacts";
import {Routes, Route} from 'react-router-dom';
import {Nav} from "./header/navigation/Nav";


function App() {
    return (
        <div className="App">
            <div className="appBlockElement"/>
            <div className="appContent">
                <Routes>
                    <Route path={"/"} element={<Main/>}/>
                    <Route path={"/about"} element={<Skills/>}/>
                    <Route path={"/portfolio"} element={<Works/>}/>
                    <Route path={"/contact"} element={<Contacts/>}/>
                </Routes>
            </div>
            <Nav />
            {/*/!*<Footer />*!/*/}
        </div>
    );
}

export default App;