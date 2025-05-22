# OOP & Composition for Conduit test project

## Table of contents

- [Description](#description)
- [Preparation](#preparation)
- [Main Task](#main-task)
- [Task Reporting](#task-reporting)

## Description


In this task, you will get more practice creating reusable components and using OOP. 
You will create components for the Conduit `ExternalHomePage`:

![external home page](https://github.com/mate-academy/qa_pw_oop_composition_conduit/blob/main/ExternalHome.png) 

and for the `InternalHomePage`:

![internal home page](https://github.com/mate-academy/qa_pw_oop_composition_conduit/blob/main/InternalHome.png) 

Also for the `ExternalViewArticlePage`:

![external view article page](https://github.com/mate-academy/qa_pw_oop_composition_conduit/blob/main/ExternalViewArticlePage.png) 

and the `InternalViewArticlePage`:

![internal view article page](https://github.com/mate-academy/qa_pw_oop_composition_conduit/blob/main/InternalViewArticlePage.png) 


## Preparation

1. Open the forked repo in VSCode.
2. Create a new branch by running `git checkout -b task_solution`.
3. Run the installation commands:

    - `npm ci`
    - `npx playwright install`


## Main Task

1. Write new tests for the [Conduit](https://conduit.mate.academy/) site: 
- *Logged-in user can view own article in the Global Feed section*;
- *Logged-in user can find own article by Tag from the Popular tags section and view in the Tag' Feed*;
- *Not logged in user can view the article created by other user in the Global Feed section*;
- *Not logged in user can open the article page created by other user from the Global Feed section*;

2. To write these tests work with the components and base pages:
* 2.1 
- create component `PopularTags`;
- initialize component  `PopularTags` in the `BaseHomePage` class;
* 2.2 
- create component `ArticleListItem`;
- initialize the `ArticleListItem` in the `Your Feeds` class;
- initialize the `ArticleListItem` in the `Global Feeds` class;
* 2.3
- create component `TagFeedTab`;
- initialize `TagFeedTab` in the `ExternalHomePage`;
- initialize `TagFeedTab` in the `InternalHomePage`;
* 2.4
- create page `BaseViewArticlePage`;
- extend `ExternalViewArticlePage` and `InternalViewArticlePage` pages from the `BaseViewArticlePage`;
* 2.5
- create the `BaseViewArticleBlock` component;
- extend the `ExternalViewArticleBlock` and `InternalViewArticleBlock` from the `BaseViewArticleBlock` component  
- initialize `InternalViewArticleBlock` component within the `InternalViewArticlePage` constructor;
- initialize `ExternalViewArticleBlock` component within the `ExternalViewArticlePage` constructor;
3. Run all the tests and make sure they are passing.

## Task Reporting

1. Add and commit all your updates.
2. Push the code to the origin.
3. Create a PR for your changes.
4. Keep implementing suggestions from code review until your PR is approved.
