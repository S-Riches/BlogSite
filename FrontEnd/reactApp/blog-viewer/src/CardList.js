import Card from "./Card";
const CardList = (props) => {
    let blogs = props.blogs;
    // mapping the information from the arrays to each card. going to use this to display multiple cards on the screen.
    return (
        <div className="cardList">
            {blogs.map((blog) => (
                <div className="cards" key={blogs.indexOf(blog)}>
                    <Card article={blog} />
                </div>
            ))}
        </div>
    );
};

export default CardList;
