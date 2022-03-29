import axios from 'axios';

export function updateLikeFunction(jwtToken, isLiked, vInfo, dispatch, setIsLiked, likedData, navigate) {
    return () => {
        if (jwtToken) {
            if (!isLiked) {
                (async () => {
                    try {
                        const response = await axios.post("/api/user/likes", { video: vInfo }, { headers: { authorization: jwtToken } });
                        dispatch({type:"SET_LIKED_DATA", payload:response.data.likes})

                        setIsLiked((prev) => !prev);
                    } catch (e) {
                        console.log(e);
                    }
                })();
            }
            else {
                (async () => {
                    try {
                        const likedItem = likedData.find((ele) => ele._id === vInfo._id);
                        const response = await axios.delete(`/api/user/likes/${likedItem._id}`, { headers: { authorization: jwtToken } });
                        console.log(response);
                        dispatch({type:"SET_LIKED_DATA", payload:response.data.likes})
                        setIsLiked((prev) => !prev);
                    } catch (e) {
                        console.log(e);
                    }
                })();
            }
        } else {
            navigate("/Login");
        }
    };
}
