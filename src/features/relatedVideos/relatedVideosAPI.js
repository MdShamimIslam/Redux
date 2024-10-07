import axios from "../../utils/axios";

export const getRelatedVideos = async ({ id, tags }) => {
  const limit = 5;
  const res = await axios.get(`/videos?id_ne=${id}&_limit=${limit}`);
  
  const filteredVideos = res.data.filter(video => 
    video.tags.some(tag => tags.includes(tag))
  );
  
  return filteredVideos;
};

