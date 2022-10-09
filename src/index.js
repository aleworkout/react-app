import React from "react"
import ReactDOM from "react-dom"
import Footer from "./components/Footer";
import MainContent from "./components/MainContent"
import Header from "./components/Header"

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    );
}


ReactDOM.render(<Page />, document.getElementById("root"))