import {useState} from 'react';
import './App.css';
import Header from "./components/header/index"

function App() {

    const [user, setUser] = useState({
        displayName: "Shivang Garg",
        email: "shivang10garg@gmail.com",
        emailVerified: true,
        phoneNumber: null,
        photoURL: "https://lh6.googleusercontent.com/-KyLTWqvDIHQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclcWGWqkt6YUAan32YO4CSR07Y2jw/s96-c/photo.jpg"
    })
    return (
        <div className="App">
            <Header userPhoto={user.photoURL}/>
        </div>
    );
}

export default App;