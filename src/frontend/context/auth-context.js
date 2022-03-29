import { createContext, useContext, useState } from "react";

const AuthContext = createContext()
const useAuthContext = () => useContext(AuthContext)
const AuthProvider = ({children}) => {
    const token = JSON.parse(localStorage.getItem("mozi"))
    const [ userProfileData, setUserProfileData] = useState(token?.USER_PROFILE_MOZI)
    const [jwtToken, setJwtToken] = useState(token?.JWT_TOKEN_MOZI)
    const [playlistId, setPlaylistId] = useState("")

    return (
        <AuthContext.Provider value = {{jwtToken, setJwtToken, userProfileData, setUserProfileData, playlistId, setPlaylistId}}>
            {children}
        </AuthContext.Provider>
    )
}
export { useAuthContext, AuthProvider}