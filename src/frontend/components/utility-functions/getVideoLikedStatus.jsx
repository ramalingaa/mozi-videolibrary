export function getVideoLikedStatus(likedData, singleVideoData, setNotesDisplay, setIsLiked) {
    const isItLiked = likedData.find((ele) => ele._id === singleVideoData._id);
    setNotesDisplay(() => false);
    if (isItLiked) {
        setIsLiked(true);
    } else {
        setIsLiked(false);
    }
}
