import { CreateArticlePage } from '../../pages/article/CreateArticlePage';
import { InternalViewArticlePage } from '../../pages/article/viewArticle/InternalViewArticlePage';
import { testStep } from '../../../common/helpers/pw';

export async function createArticle(page, article, userId = 0) {
  article['url'] = await testStep(
    `Create an article`,
    async () => {
      const createArticlePage = new CreateArticlePage(page, userId);
      const internalViewArticlePage = new InternalViewArticlePage(page, userId);

      await createArticlePage.open();
      await createArticlePage.submitCreateArticleForm(article);
      await internalViewArticlePage.internalViewArticleBlock.assertArticleTitleIsVisible(
        article.title,
      );

      return internalViewArticlePage.getCurrentPageUrl();
    },
    userId,
  );

  return article;
}
