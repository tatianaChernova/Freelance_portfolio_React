import "./styles.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Tatiana</em></strong><br />
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating</p>
                </div>
                <a href="https://drive.google.com/file/d/1UxuD3zmKoQN_8szJajd5VEF-DFyFc3TI/view?usp=drive_link" className="btn">Download CV</a>
            </div>
        </header>
    );
}

export default Header;