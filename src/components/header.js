function Header({ section }) {
    switch (section) {
        case 'home':
            return <h1 id="title">All Football</h1>;
        case 'latest-news':
            return <h1>Latest News</h1>;
        case 'matches':
            return <h1>Matches</h1>;
        case 'players':
            return <h1>Players</h1>;
        case 'clubs':
            return <h1>Clubs</h1>;
        case 'login':
            return <h1>Login</h1>;
        case 'register':
            return <h1>Register</h1>;
    }
}
export default Header;