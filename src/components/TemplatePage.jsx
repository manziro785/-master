import React from 'react';
import {Header} from "./header/header.jsx";
import Footer from "./footer/footer.jsx";

const TemplatePage = ({children}) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default TemplatePage;