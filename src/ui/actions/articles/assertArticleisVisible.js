export async function assertArticleIsVisible(articleToAssert, createdArticle, username) {
  await articleToAssert.assertArticleTitleIsVisible(createdArticle.title);
  await articleToAssert.assertArticleDescriptionIsVisible(
    createdArticle.title,
    createdArticle.description,
  );
  await articleToAssert.assertArticleAuthorNameIsVisible(
    createdArticle.title,
    username,
  );
  await articleToAssert.assertArticleTagsAreVisible(
    createdArticle.title,
    createdArticle.tags,
  );
}