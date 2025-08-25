import { CreateArticlePage } from '../../pages/article/CreateArticlePage';
import { ExternalViewArticlePage } from '../../pages/article/viewArticle/ExternalViewArticlePage';
import { testStep } from '../../../common/helpers/pw';
import { BasePage } from '../../pages/BasePage';

export async function createArticle(page, article, userId = 0) {
  article['url'] = await testStep(
    `Create an article`,
    async () => {
      const createArticlePage = new CreateArticlePage(page, userId);
      const basePage = new BasePage(page, userId);
      const externalViewArticlePage = new ExternalViewArticlePage(page, userId);

      await createArticlePage.open();
      await createArticlePage.submitCreateArticleForm(article);
      await externalViewArticlePage.articleContentExternal.assertArticleTitleIsVisible(article.title);

      return basePage.getCurrentPageUrl();
    },
    userId,
  );

  return article;
}
