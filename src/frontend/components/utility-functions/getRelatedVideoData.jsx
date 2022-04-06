export function getRelatedVideoData(videoData, singleVideoData, setRelatedVideo) {
    const relatedVideoData = videoData.filter((ele) => ele._id !== singleVideoData._id);
    setRelatedVideo(() => relatedVideoData);
}
