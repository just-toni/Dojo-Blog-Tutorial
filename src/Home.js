const Home = () => {
    const handleClick = () => {
        console.log("Hello, ninjas");
    }

    const handleClickAgain = (name) => {
        console.log('hello, ' + name)
    }

    return ( 
        <div className="home">
            <h1>Homepage</h1>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={handleClickAgain("toni")}>Click Me Again</button>
        </div>
    );
}
 
export default Home;