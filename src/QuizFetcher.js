const axios = require("axios");

// 定数の場合は大文字でアンダーバーで記載するのが通例
const API_URL = "https://opentdb.com/api.php?amount=10&type=multiple";

class QuizFetcher {
  static async fetch() {
    const response = await axios.get(API_URL);

    return response.data;
  }
}

module.exports = QuizFetcher;
