// automatically generated blog page, just puts the data onto the screen.
const Page = (props) => {
    let article = props.article;
    return (
        <div className="page">
            <h3>{article.title}</h3>
            <p>Body</p>
        </div>
    );
};

export default Page;
