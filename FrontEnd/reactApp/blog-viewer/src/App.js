import "./App.css";
import Navbar from "./Navbar";
import Card from "./Card";

function App() {
    // test data for the props
    const blogs = ["Foo", "bar", "yee", "har"];
    return (
        <div className="App">
            <Navbar />
            <div className="cardHolder">
                {/* can pass down values into components via props. useful for reusing code. */}
                <Card
                    article={blogs[Math.floor(Math.random() * blogs.length)]}
                />
                <Card
                    article={blogs[Math.floor(Math.random() * blogs.length)]}
                />
                <Card
                    article={blogs[Math.floor(Math.random() * blogs.length)]}
                />
            </div>
        </div>
    );
}

export default App;
