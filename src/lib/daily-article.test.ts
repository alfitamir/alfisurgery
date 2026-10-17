import { test } from "node:test";
import { strict as assert } from "node:assert";
import { dailyArticleSelection } from "./daily-article";

const articles = [{ id: 9005 }, { id: 9001 }, { id: 9002 }];
test("starts with the gallstone article on 17 October 2026", () => {
  assert.equal(dailyArticleSelection(articles, new Date("2026-10-17T08:34:00Z"))?.article.id, 9005);
});
test("keeps the same article throughout a Riyadh calendar day", () => {
  assert.equal(dailyArticleSelection(articles, new Date("2026-10-17T20:59:59Z"))?.article.id, 9005);
});
test("switches article and color at midnight in Riyadh", () => {
  assert.deepEqual(dailyArticleSelection(articles, new Date("2026-10-17T21:00:00Z")), { article: { id: 9001 }, tone: 1 });
});
test("cycles existing articles without running out", () => {
  assert.equal(dailyArticleSelection(articles, new Date("2026-10-20T08:00:00Z"))?.article.id, 9005);
});
test("only chooses from the supplied language edition", () => {
  assert.equal(dailyArticleSelection([{ id: 228 }], new Date("2026-10-18T08:00:00Z"))?.article.id, 228);
});
test("empty editions have no featured article", () => {
  assert.equal(dailyArticleSelection([], new Date("2026-10-17T08:00:00Z")), undefined);
});