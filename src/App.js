import React from "react";
import {Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Message from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Musics from "./components/Musics/Musics";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

import "./App.css";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="content">
                <Routes>
                    <Route path='/profile' element={<Profile state={props.state} />}/>
                    <Route path='/dialogs/*' element={<Message state={props.state} />}/>
                    <Route path='/friends' element={<Friends/>} />
                    <Route path='/news' element={<News/>} />
                    <Route path='/musics' element={<Musics/>} />
                    <Route path='/settings' element={<Settings/>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
