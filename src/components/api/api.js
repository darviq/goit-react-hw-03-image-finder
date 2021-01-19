import axios from "axios";

const findPictures = (value, page = 1) => {
    const key = "19499543-c5c990c94d79b3fdb7962cf6a";
    return axios.get(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${value}&page=${page}&per_page=12&key=${key}`).then(response => response.data.hits);
};

export default findPictures;
