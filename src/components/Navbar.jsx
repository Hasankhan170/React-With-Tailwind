

function Navbar(){
    return (
        <>
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'lightgray',
            padding: '10px',
            flexWrap: 'wrap'
        }}>
            <div className="first">
                <h2>React Components</h2>
            </div>
            <div>
                <ul style={{
                    listStyleType: 'none',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '18px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    flexWrap : 'wrap'
                }}>
                    <li>
                        <a style={{
                        textDecoration: 'none',
                        color: 'black',
                    }} href="#">Home</a>
                    </li>
                    <li><a style={{
                        textDecoration: 'none',
                        color: 'black',
                    }} href="#">About</a>
                    </li>

                    <li>
                        <a style={{
                        textDecoration: 'none',
                        color: 'black',
                    }} href="#">Services</a>
                    </li>
                    <li>
                        <a style={{
                        textDecoration: 'none',
                        color: 'black',
                    }} href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </header>
        </>
    )
}

export default Navbar;