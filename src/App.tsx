import React from 'react';
import './App.css';
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {RemoteWork} from "./remote/Remote";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {Routes, Route} from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/*" element={<Main/>}/>
                    <Route path="skills"  element={<Skills/>}/>
                    <Route path="works" element={<Works/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                {/*</Route>*/}
            </Routes>
            {/*/!*<Main/>*!/*/}
            {/*<Skills />*/}
            {/*<Works />*/}
            {/*/!*<RemoteWork />*!/*/}
            {/*<Contacts />*/}
            {/*/!*<Footer />*!/*/}
        </div>
    );
}

export default App;