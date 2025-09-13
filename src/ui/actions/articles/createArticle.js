import { CreateArticlePage } from '../../pages/article/CreateArticlePage';
import { InternalViewArticlePage } from '../../pages/article/InternalViewArticlePage';
import { testStep } from '../../../common/helpers/pw';

export async function createArticle(page, article, userId = 0) {
  article.url = await testStep(
    `Create an article`,
    async () => {
      const createArticlePage = new CreateArticlePage(page, userId);
      const viewArticlePage = new InternalViewArticlePage(page, userId);

      await createArticlePage.open();
      await createArticlePage.submitCreateArticleForm(article);
      await viewArticlePage.article.assertTitleIsVisible(article.title);

      return viewArticlePage.getCurrentPageUrl();
    },
    userId,
  );

  return article;
}