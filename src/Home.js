import { useState } from 'react';

const Home = () => {

    const [pageStateText, setPageStateText] = useState("Hello, this is the default page state.");

    const handleClick = () => {
        console.log("Button clicked...");
    }
    const handleClick2 = () => {
        setPageStateText("Hello, this is the modified page state.");
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ pageStateText }</p>
            <button onClick={ handleClick }>Button</button>
            <button onClick={ handleClick2 }>Change Page State</button>
        </div>
    );
}
 
export default Home;