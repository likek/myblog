interface ISaveBlogConfigInput {
  BlogTitle?: string;
  BlogBgImag?: string;
  BlogBgColor?: string;
  // ...
}

export interface IBlogConfigService {
  // 加载用户配置信息
  loadBlogConfig(userID: number): IResultInfo;
  // 保存用户配置信息(修改)
  saveBlogConfig(userID: number, blogConfig: ISaveBlogConfigInput);
}
