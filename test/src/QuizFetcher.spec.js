// 「test/src/QuizFetcher.spec.js」内で、QuizFetcher.fetch メソッドで取得するデータとデータ形式をテストする
//  results プロパティを持つ
//  results プロパティはは10件データをもつ配列である
//  results プロパティの配列の中身は全てオブジェクトで、次のプロパティを持つ
//  category プロパティ : 文字列型
//  type プロパティ : 文字列型
//  difficulty プロパティ : 文字列型
//  question プロパティ : 文字列型
//  correct_answer プロパティ : 文字列型
//  incorrect_answers プロパティ : 3件の文字列を含む配列
//  typeof を使って、書くプロパティ値の型をテストする

const assert = require("power-assert");
const QuizFetcher = require("../../src/QuizFetcher");

describe("QuizFetcherのクラス", () => {
  describe("fetchメソッドの挙動確認", () => {
    it("fetchメソッドという名前のクラスメソッドを持つ", () => {
      assert.strictEqual(typeof QuizFetcher.fetch, "function");
    });

    it("[async/await版]fetchメソッドの戻り値の型チェック", async () => {
      const data = await QuizFetcher.fetch();
      const results = data.results;

      assert.strictEqual(Array.isArray(results), true);
      assert.strictEqual(results.length, 10);

      results.forEach(quiz => {
        assert.strictEqual(typeof quiz.category, "string");
        assert.strictEqual(typeof quiz.type, "string");
        assert.strictEqual(typeof quiz.difficulty, "string");
        assert.strictEqual(typeof quiz.question, "string");
        assert.strictEqual(typeof quiz.correct_answer, "string");

        const incorrect_answers = quiz.incorrect_answers;
        assert.strictEqual(Array.isArray(incorrect_answers), true);
        incorrect_answers.forEach(answer => {
          assert.strictEqual(typeof answer, "string");
        });
      });
    });

    it("[Promise版]fetchメソッドの戻り値の型チェック", () => {
      return QuizFetcher.fetch().then(data => {
        const results = data.results;
        assert.strictEqual(Array.isArray(results), true);
        assert.strictEqual(results.length, 10);

        results.forEach(quiz => {
          assert.strictEqual(typeof quiz.category, "string");
          assert.strictEqual(typeof quiz.type, "string");
          assert.strictEqual(typeof quiz.difficulty, "string");
          assert.strictEqual(typeof quiz.question, "string");
          assert.strictEqual(typeof quiz.correct_answer, "string");

          const incorrect_answers = quiz.incorrect_answers;
          assert.strictEqual(Array.isArray(incorrect_answers), true);
          incorrect_answers.forEach(answer => {
            assert.strictEqual(typeof answer, "string");
          });
        });
      });
    });

    it("[コールバック(done)版]fetchメソッドの戻り値の型チェック", done => {
      QuizFetcher.fetch().then(data => {
        const results = data.results;
        assert.strictEqual(Array.isArray(results), true);
        assert.strictEqual(results.length, 10);

        results.forEach(quiz => {
          assert.strictEqual(typeof quiz.category, "string");
          assert.strictEqual(typeof quiz.type, "string");
          assert.strictEqual(typeof quiz.difficulty, "string");
          assert.strictEqual(typeof quiz.question, "string");
          assert.strictEqual(typeof quiz.correct_answer, "string");

          const incorrect_answers = quiz.incorrect_answers;
          assert.strictEqual(Array.isArray(incorrect_answers), true);
          incorrect_answers.forEach(answer => {
            assert.strictEqual(typeof answer, "string");
          });
        });
      });
      done();
    });
  });
});
