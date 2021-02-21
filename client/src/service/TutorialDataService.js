import http from "../http-common";
class TutorialDataService {
    getAll() {
      return http.get("/sellerRegis");
    }
}
export default new TutorialDataService();