// automatically generated blog page, just puts the data onto the screen.
const Page = (props) => {
    return (
        <div className="page">
            <main>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </main>
            <aside>{/* placeholder for the bloglist */}</aside>
        </div>
    );
};

export default Page;
