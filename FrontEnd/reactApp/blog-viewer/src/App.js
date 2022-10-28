import "./App.css";
import Navbar from "./Navbar";
import Card from "./Card";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="cardHolder">
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default App;
