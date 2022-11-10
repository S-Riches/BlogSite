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
    // function to shorten large amount of text to prompt the user to go and read the article.
    const shortenText = (content) => {
        if (String(content).length > 75) {
            let returnText = String(content).substring(0, 75);
            returnText += "...";
            return returnText;
        } else {
            return content;
        }
    };
    return (
        <div className="card">
            {/* need to find a way to make this smooth */}
            <div
                className="cardBox"
                onMouseEnter={growCard}
                onMouseLeave={growCard}
            >
                {/* format this into a link to generate the blog page when clicked. */}
                <h3>{article.title}</h3>
                {/* this only renders if the condition within is met */}
                {isShown && (
                    <div className="textBlock">
                        <p>{shortenText(article.content)}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
