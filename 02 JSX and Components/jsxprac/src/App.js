function App(){
    const name='Mankrit';
    const maxval=10;  
    return (
        <div>
            <h1>Cool Project Incoming by {name}</h1>
            <h1>{new Date().toLocaleTimeString()}</h1> {/*we all use expression directly*/}
            {/*Now we will use checkPropTypes.Props are what attributes are in HTML */}
            <input type="number" min={5} max={maxval}/>
        </div>

    );
}
    export default App;