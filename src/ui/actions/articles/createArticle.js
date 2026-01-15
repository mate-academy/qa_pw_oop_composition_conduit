import { CreateArticlePage } from '../../pages/article/CreateArticlePage';
import { BaseViewArticlePage } from '../../pages/article/BaseViewArticlePage';
import { testStep } from '../../../common/helpers/pw';

export async function createArticle(page, article, userId = 0) {
  article['url'] = await testStep(
    `Create an article`,
    async () => {
      const createArticlePage = new CreateArticlePage(page, userId);
      const baseViewArticlePage = new BaseViewArticlePage(page, userId);

      await createArticlePage.open();
      await createArticlePage.submitCreateArticleForm(article);
      await baseViewArticlePage.assertArticleTitleIsVisible(article.title);

      return baseViewArticlePage.getCurrentPageUrl();
    },
    userId,
  );

  return article;
}
