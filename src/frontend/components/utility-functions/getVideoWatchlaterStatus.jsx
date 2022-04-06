export function getVideoWatchlaterStatus(watchLaterData, singleVideoData, setIsWatchLaterAdded) {
    const isWatchLater = watchLaterData.find((ele) => ele._id === singleVideoData._id);
    if (isWatchLater) {
        setIsWatchLaterAdded(() => true);
    } else {
        setIsWatchLaterAdded(() => false);
    }
}
