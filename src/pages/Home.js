import Header from "./../components/header/Header";
const Home = () => {
    return (
        <>
            <Header />
            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Education</h2>
                            <p>Saint-Petersburg State University, Russia
                                <br /> Applied Mathematics and Control Processes</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend skills</h2>
                            <p>HTML5, CSS3, SCSS, SASS
                                <br /> JavaScript, JQuery, Bootstrap, BEM, Gulp, React JS </p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Other skills</h2>
                            <p>Git, GitHub, Figma, Rest API</p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
}

export default Home;