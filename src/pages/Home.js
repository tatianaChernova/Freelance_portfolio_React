import Header from "./../components/header/Header";
const Home = () => {
    return (
        <>
            <Header />       
            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>HTML5, CSS3, SCSS, SASS
                                <br /> JavaScript, JQuery, Bootstrap, BEM, React</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Others</h2>
                            <p>Git, GitHub, Figma, Gulp</p>
                        </li>
                    </ul>
                </div>
            </main> 
        </>
     );
}
 
export default Home;