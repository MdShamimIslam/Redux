
import axios from "../../utils/axios";

export const getVideos = async (tags, search) => {
  // Fetch all videos first (no q)
  const res = await axios.get(`/videos`);
  let videos = res.data;

   // Apply tags filtering after the search results
   if (tags.length > 0) {
    videos = videos.filter(video =>
      tags.every(tag => video.tags.includes(tag))
    );
  }

  // Apply search filter on title and description locally
  if (search) {
    videos = videos.filter(video =>
      video.title.toLowerCase().includes(search.toLowerCase()) ||
      video.description.toLowerCase().includes(search.toLowerCase())
    );
  }

 

  return videos;
};
