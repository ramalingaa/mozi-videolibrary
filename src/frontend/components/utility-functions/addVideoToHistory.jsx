import axios from 'axios';

export function addVideoToHistory(historyData, singleVideoData, jwtToken, dispatch) {
    const isDuplicate = historyData.find((ele) => ele._id === singleVideoData._id);
    if (!isDuplicate) {

        (async () => {
            try {
                const response = await axios.post("/api/user/history", { video: singleVideoData }, { headers: { authorization: jwtToken } });
                dispatch({ type: "SET_HISTORY_DATA", payload: response.data.history });


            } catch (e) {
                console.log(e);
            }
        })();
    }
}
