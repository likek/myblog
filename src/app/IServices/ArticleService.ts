export interface ArticleService {
  // 保存文章(包括新增和修改)
  saveArticle(idetity: Identity, json: Article): ResultInfo;
  // 删除文章
  deleteArticle(idetity: Identity, articleID: number): ResultInfo;
  // 加载文章
  loadArticle(articleID: number): ResultInfo;
  // 查询用户所有文章
  searchArticle(userCode: number, pageInfo: PageInfo): ResultInfo;
}
