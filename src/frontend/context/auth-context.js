import { createContext, useContext, useState } from "react";

const AuthContext = createContext()
const useAuthContext = () => useContext(AuthContext)
const AuthProvider = ({children}) => {
    const token = localStorage.getItem("JWT_TOKEN_MOZI")
    const userData = localStorage.getItem("USER_PROFILE_MOZI")
    const [ userProfileData, setUserProfileData] = useState(() =>{
        if(userData){
            return (userData);
        }else {
            return {}
        }
    })
    const [jwtToken, setJwtToken] = useState(() => {
        if(token){
            return token 
        }
        return ""
    })
    const [playlistId, setPlaylistId] = useState("")

    return (
        <AuthContext.Provider value = {{jwtToken, setJwtToken, userProfileData, setUserProfileData, playlistId, setPlaylistId}}>
            {children}
        </AuthContext.Provider>
    )
}
export { useAuthContext, AuthProvider}