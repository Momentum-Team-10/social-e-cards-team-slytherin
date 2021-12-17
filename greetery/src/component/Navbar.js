


const Navbar = () => {
    return (
        <nav>
            <div className="greetery_navbar">
                <h2>GREETERY</h2>
                <h2 className='fas fa-sleigh'> </h2>
            </div>
            <a href="/">MY GALLERY</a>
            <a href="/addcard">CREATE NEW CARD</a>
            <div className="home_profile_navbar">
                <a href="/" className="fas fa-home"> </a>
                <a href="/"className="fas fa-user"> </a>
            </div>
        </nav>
    )
}

export default Navbar