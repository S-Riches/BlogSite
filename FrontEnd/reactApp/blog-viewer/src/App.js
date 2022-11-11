import "./App.css";
import Navbar from "./Navbar";
import CardList from "./CardList";
import Page from "./Page";

function App() {
    // test data for the top two blogs.
    const blogs = [
        {
            title: "Hello",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates accusantium nihil corporis harum distinctio culpa dolores vel ipsa, quaerat, esse amet quis possimus beatae similique. Eos adipisci nemo praesentium asperiores magnam labore iure a beatae necessitatibus consequatur. Molestias, quisquam velit ducimus quis exercitationem ex perferendis doloremque quasi aut quo quaerat!",
        },
        {
            title: "Hello",
            content: "Lorem ipsum dolor sit amet",
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
    const title = "Hello";
    const content =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, vel!";

    return (
        <div className="App">
            <Navbar />
            <h1>Newest Blogs</h1>
            {/* shows two big blogs boxes */}
            <div className="cardHolderTop">
                <CardList blogs={blogs} />
            </div>
            <h2>All Blogs</h2>
            {/* shows all blogs, or atleast a lot of them in a list. */}
            <div className="allBlogs">
                <CardList blogs={blogList} />
            </div>
            <Page title={title} content={content} />
        </div>
    );
}

export default App;
