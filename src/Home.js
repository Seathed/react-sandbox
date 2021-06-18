const Home = () => {
    const handleClick = () => {
        console.log("Button clicked...");
    }
    const handleArgumentButtonClick = (name) => {
        console.log("Hello, " + name);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Button</button>
            <button onClick={() => {handleArgumentButtonClick('Larry')}}>Button with Arguments</button>
        </div>
    );
}
 
export default Home;