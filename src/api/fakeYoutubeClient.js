import axios from "axios";

export default class FakeYoutube {
  async search({ params }) {
    return axios.get(
      `/videos/${params.relatedToVideoId ? `related` : `search`}.json`
    );
  }
  async videos() {
    return axios.get(`/videos/popular.json`);
  }
  async channels() {
    return axios.get(`/videos/channel.json`);
  }
}
