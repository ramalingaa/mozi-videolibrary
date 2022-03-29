import axios from 'axios';

export function updateWatchLaterFunction(jwtToken, isWatchLaterAdded, vInfo, dispatch, setIsWatchLaterAdded, watchLaterData, navigate) {
    return () => {
        if (jwtToken) {
            if (!isWatchLaterAdded) {
                (async () => {
                    try {
                        const response = await axios.post("/api/user/watchLater", { video: vInfo }, { headers: { authorization: jwtToken } });
                        dispatch({type:"SET_WATCHLATER_DATA", payload:response.data.watchLater})
                        setIsWatchLaterAdded((prev) => !prev);
                    } catch (e) {
                        console.log(e);
                    }
                })();
            }
            else {
                (async () => {
                    try {
                        const watchLaterItem = watchLaterData.find((ele) => ele.title === vInfo.title);
                        const response = await axios.delete(`/api/user/watchLater/${watchLaterItem._id}`, { headers: { authorization: jwtToken } });
                        dispatch({type:"SET_WATCHLATER_DATA", payload:response.data.watchLater})
                        setIsWatchLaterAdded((prev) => !prev);
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
