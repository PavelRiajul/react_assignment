

const Header = () => {
    const result =true;
    
    return (
        <div>
            
            {result === true? <h1>Login</h1> : <h1>Logout</h1>}

            <h1>I am Raijul islam</h1>
            <p>This is Header component</p>
            <hr />
        </div>
    );
};

export default Header;