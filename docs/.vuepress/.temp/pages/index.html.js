export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "lang": "zh-CN",
    "heroText": "一个记录",
    "actionText": "开始 →",
    "features": [
      {
        "title": "前端",
        "details": "记录日常所学。"
      },
      {
        "title": "对于我",
        "details": "从零开始，学习成长。"
      },
      {
        "title": "未来"
      }
    ]
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
