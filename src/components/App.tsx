import React from 'react';
import '../styles/App.scss';
import Header from "./header_components/Header";
import Main from "./main_components/Main";
import Footer from "./footer_components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
