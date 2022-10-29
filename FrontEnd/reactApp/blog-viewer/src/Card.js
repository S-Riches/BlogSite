const Card = (props) => {
    const article = props.article;
    // want to pass in text from the database.
    return (
        <div className="card">
            <div className="cardBox">
                <h3>Title</h3>
                {/* gonna need to figure out how to populate the card through the params. */}
                <p>{article}</p>
            </div>
        </div>
    );
};

export default Card;
