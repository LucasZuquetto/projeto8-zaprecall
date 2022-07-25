import Home from "./Home/Home"
import InGameScreen from './InGameScreen/InGameScreen'
import Questions from './Questions/Questions'
import React from "react";

export default function App(){
    const [startApp, setstartApp] = React.useState(true);

    return(
        <>
            {startApp ? (
                <Home startApp={startApp} setstartApp={setstartApp} />
            ) : (
                <>
                    <InGameScreen />
                    <Questions />
                </>
            )}
        </>
    )
}