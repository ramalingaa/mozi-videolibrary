import "./App.css";
import { Navbar, Home, Login, Signup, ForgotPassword, FooterNavbar, VideoListing, SingleVideo, PlayList, SinglePlaylistVideoCard, LikedVideo, History, WatchLater, ErrorPage } from "./frontend/components/index-components";
import { Routes , Route, Navigate} from "react-router-dom"
import { useAuthContext } from "./frontend/context/index-context"
import MockAPI from "./MockMan"
function App() {
  const { jwtToken, theme } = useAuthContext()
  return (
    <div className={theme}>
      <Navbar />
      <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/login" element = {jwtToken ? <Navigate to = "/videos" /> :<Login />} />
          <Route path = "/signup" element = {jwtToken ? <Navigate to = "/videos" /> :<Signup />} />
          <Route path = "/ForgotPassword" element = { jwtToken ? <Navigate to = "/videos" /> :<ForgotPassword/> }/> 
          <Route path = "/videos" element = { <VideoListing/> }/> 
          <Route path = "/videos/:videoId" element = { <SingleVideo/> }/> 
          <Route path = "/Playlist" element = {jwtToken ? <PlayList /> : <Navigate to = "/login" />} />
          <Route path = "/SinglePlaylist" element = {jwtToken ? <SinglePlaylistVideoCard /> : <Navigate to = "/login" />} />
          <Route path = "/LikedVideo" element = {jwtToken ? <LikedVideo /> : <Navigate to = "/login" />} />
          <Route path = "/History" element = {jwtToken ? <History /> : <Navigate to = "/login" />} />
          <Route path = "/WatchLater" element = {jwtToken ? <WatchLater /> : <Navigate to = "/login" />} />
          <Route path = "/Mockman" element = {<MockAPI />} />
          <Route path = "*" index element = {<ErrorPage />} />



      </Routes>
      <FooterNavbar/>
    </div>
  );
}

export default App;
