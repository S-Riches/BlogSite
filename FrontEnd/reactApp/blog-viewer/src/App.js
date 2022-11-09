import "./App.css";
import Navbar from "./Navbar";
// import Card from "./Card";
import CardList from "./CardList";

function App() {
    // test data for the top two blogs.
    const blogs = [
        {
            title: "Hello",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates accusantium nihil corporis harum distinctio culpa dolores vel ipsa, quaerat, esse amet quis possimus beatae similique. Eos adipisci nemo praesentium asperiores magnam labore iure a beatae necessitatibus consequatur. Molestias, quisquam velit ducimus quis exercitationem ex perferendis doloremque quasi aut quo quaerat!",
        },
        {
            title: "Henlo",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates accusantium nihil corporis harum distinctio culpa dolores vel ipsa, quaerat, esse amet quis possimus beatae similique. Eos adipisci nemo praesentium asperiores magnam labore iure a beatae necessitatibus consequatur. Molestias, quisquam velit ducimus quis exercitationem ex perferendis doloremque quasi aut quo quaerat!",
        },
    ];
    const blogList = [
        {
            title: "Hello",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates accusantium nihil corporis harum distinctio culpa dolores vel ipsa, quaerat, esse amet quis possimus beatae similique. Eos adipisci nemo praesentium asperiores magnam labore iure a beatae necessitatibus consequatur. Molestias, quisquam velit ducimus quis exercitationem ex perferendis doloremque quasi aut quo quaerat!",
        },
        {
            title: "Henlo",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates accusantium nihil corporis harum distinctio culpa dolores vel ipsa, quaerat, esse amet quis possimus beatae similique. Eos adipisci nemo praesentium asperiores magnam labore iure a beatae necessitatibus consequatur. Molestias, quisquam velit ducimus quis exercitationem ex perferendis doloremque quasi aut quo quaerat!",
        },
        {
            title: "Hello",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates accusantium nihil corporis harum distinctio culpa dolores vel ipsa, quaerat, esse amet quis possimus beatae similique. Eos adipisci nemo praesentium asperiores magnam labore iure a beatae necessitatibus consequatur. Molestias, quisquam velit ducimus quis exercitationem ex perferendis doloremque quasi aut quo quaerat!",
        },
        {
            title: "Hello",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates accusantium nihil corporis harum distinctio culpa dolores vel ipsa, quaerat, esse amet quis possimus beatae similique. Eos adipisci nemo praesentium asperiores magnam labore iure a beatae necessitatibus consequatur. Molestias, quisquam velit ducimus quis exercitationem ex perferendis doloremque quasi aut quo quaerat!",
        },
        {
            title: "Hello",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates accusantium nihil corporis harum distinctio culpa dolores vel ipsa, quaerat, esse amet quis possimus beatae similique. Eos adipisci nemo praesentium asperiores magnam labore iure a beatae necessitatibus consequatur. Molestias, quisquam velit ducimus quis exercitationem ex perferendis doloremque quasi aut quo quaerat!",
        },
        {
            title: "Hello",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates accusantium nihil corporis harum distinctio culpa dolores vel ipsa, quaerat, esse amet quis possimus beatae similique. Eos adipisci nemo praesentium asperiores magnam labore iure a beatae necessitatibus consequatur. Molestias, quisquam velit ducimus quis exercitationem ex perferendis doloremque quasi aut quo quaerat!",
        },
        {
            title: "Hello",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates accusantium nihil corporis harum distinctio culpa dolores vel ipsa, quaerat, esse amet quis possimus beatae similique. Eos adipisci nemo praesentium asperiores magnam labore iure a beatae necessitatibus consequatur. Molestias, quisquam velit ducimus quis exercitationem ex perferendis doloremque quasi aut quo quaerat!",
        },
    ];

    return (
        <div className="App">
            <Navbar />
            <h1>Newest Blogs</h1>
            <div className="cardHolderTop">
                {/* Newest blog placeholder */}
                {/* second newest blog placeholder */}
                <CardList blogs={blogs} />
            </div>
            <h2>All Blogs</h2>
            <div className="allBlogs">
                <CardList blogs={blogList} />
            </div>
        </div>
    );
}

export default App;
