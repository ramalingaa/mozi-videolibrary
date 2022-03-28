import "./App.css";
import { Navbar, Home, Login, Signup, ForgotPassword, FooterNavbar, VideoListing, SingleVideo } from "./frontend/components/index-components";
import { Routes , Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/signup" element = {<Signup />} />
          <Route path = "/ForgotPassword" element = { <ForgotPassword/> }/> 
          <Route path = "/videos" element = { <VideoListing/> }/> 
          <Route path = "/videos/:videoId" element = { <SingleVideo/> }/> 
      </Routes>
      <FooterNavbar/>
    </div>
  );
}

export default App;
