import React from 'react';

const App = () => {
    const headerStyle = {
        marginTop: "4rem",
        fontFamily: "sans-serif",
        fontSize: 48,
        textAlign: "center"
    };
    const paragraphStyle = {
        fontFamily: "sans-serif",
        fontSize: 18,
        textAlign: "center"
    };
    return (
        <>
            <h1 style={headerStyle}>Hello, World!</h1>
            <p style={paragraphStyle}>Welcome to the fullstack application!</p>
        </>
    );
};

export default App;
