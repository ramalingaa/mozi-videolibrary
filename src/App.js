import "./App.css";
import { Navbar, Home, Login, Signup, ForgotPassword, FooterNavbar, VideoListing, SingleVideo, PlayList, SinglePlaylistVideoCard, LikedVideo, History, WatchLater } from "./frontend/components/index-components";
import { Routes , Route} from "react-router-dom"
import { useAuthContext } from "./frontend/context/index-context"
import MockAPI from "./MockMan"
function App() {
  const { jwtToken, theme } = useAuthContext()
  return (
    <div className={theme}>
      <Navbar />
      <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/signup" element = {<Signup />} />
          <Route path = "/ForgotPassword" element = { <ForgotPassword/> }/> 
          <Route path = "/videos" element = { <VideoListing/> }/> 
          <Route path = "/videos/:videoId" element = { <SingleVideo/> }/> 
          <Route path = "/Playlist" element = {jwtToken ? <PlayList /> : <Login />} />
          <Route path = "/SinglePlaylist" element = {jwtToken ? <SinglePlaylistVideoCard /> : <Login />} />
          <Route path = "/LikedVideo" element = {jwtToken ? <LikedVideo /> : <Login />} />
          <Route path = "/History" element = {jwtToken ? <History /> : <Login />} />
          <Route path = "/WatchLater" element = {jwtToken ? <WatchLater /> : <Login />} />
          <Route path = "/Mockman" element = {<MockAPI />} />



      </Routes>
      <FooterNavbar/>
    </div>
  );
}

export default App;
