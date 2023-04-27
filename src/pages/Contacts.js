const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Limassol, Cyprus</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:Email">tatiana.chernova.work@gmail.com</a></p>
                
                    </li> 
                    {/* <li className="content-list__item">
                        <h2 className="title-2">LinkedIn page</h2>
                        <p><a href="https://www.linkedin.com/in/tatiana-chernova-work">Link</a></p>
                    </li>          */}
                </ul>
            </div>
        </main>
    );
}
 
export default Contacts;