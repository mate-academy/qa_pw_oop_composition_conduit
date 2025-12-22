import { BaseViewArticlePage } from './BaseViewArticlePage';

export class ExternalViewArticlePage extends BaseViewArticlePage {
  constructor(page, userId = 0) {
    super(page, userId);
    // korzysta z articleContent z BaseViewArticlePage
  }

  // jeśli potrzebujesz dodatkowych metod specyficznych dla nie-autora,
  // np. assertArticleVisible, możesz je tu dodać
}
