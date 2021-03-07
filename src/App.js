import {useState} from 'react';
import './App.css';
import Header from "./components/header/index";
import Sidebar from "./components/sideBar/index";
import FilesView from "./components/filesView/filesView";
import SideBarIcons from "./components/sideIcons";
import GDriveLogo from "./media/google-drive-logo.png"
import {auth, provider} from "./firebase";

function App() {

    const [user, setUser] = useState({
        displayName: "Shivang Garg",
        email: "shivang10garg@gmail.com",
        emailVerified: true,
        phoneNumber: null,
        photoURL: "https://lh6.googleusercontent.com/-KyLTWqvDIHQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclcWGWqkt6YUAan32YO4CSR07Y2jw/s96-c/photo.jpg"
    });

    const handleLogin = () => {
        if (!user) {
            auth.signInWithPopup(provider).then((result) => {
                setUser(result.user)
                console.log(result.user)
            }).catch((error) => {
                alert(error.message);
            });
        } else if (user) {
            auth.signOut().then(() => {
                setUser(null)
            }).catch((err) => alert(err.message))
        }
    }
    return (
        <div className="app">
            {
                user ? (
                    <>
                        <Header userPhoto={user.photoURL}/>
                        <div className="app__main">
                            <Sidebar/>
                            <FilesView/>
                            <SideBarIcons/>
                        </div>
                    </>
                ) : (
                    <div className='app__login'>
                        <img src={GDriveLogo} alt="Google Drive"/>
                        <button onClick={handleLogin}>Log in to Google Drive</button>
                    </div>
                )
            }
        </div>
    );
}

export default App;