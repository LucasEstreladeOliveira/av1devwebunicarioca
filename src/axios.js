import axios from "axios";

const url = "http://localhost:8080/av2desenvolvimento/auth";

class PostService {
  //Get Usuários
  static getGifs() {
    //eslint-disable-next-line
    return new Promise (async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(gif => ({
            ...gif,
            createdAt: new Date(gif.createdAt)
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }
  //Create Usuários
  static login(user) {
    return axios.post(url, {
      user
    });
  }
  //Delete Usuários
  static deleteGif(id) {
    return axios.delete(`${url}${id}`);
  }
  //Update Usuários
  static updateGif(id, gif) {
    return axios.post(`${url}${id}`, {
      gif
    });
  }
}

export default PostService;
