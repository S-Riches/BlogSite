import { useState } from "react";

const Card = (props) => {
    // want to pass in text from the database.
    const article = props.article;
    // a state is being used here to determine whether it has been clicked
    const [isShown, setIsShown] = useState(false);
    const growCard = () => {
        // within this arrow function we change the variable val meaning the the current value to the opposite of what it was
        setIsShown((val) => !val);
    };
    return (
        <div className="card" onClick={growCard}>
            <div className="cardBox">
                <h3>{article.title}</h3>
                {/* this only renders if the condition within is met */}
                {isShown && (
                    <div className="textBlock">
                        {/* gonna need to figure out how to populate the card through the params. */}
                        <p>{article.content}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
