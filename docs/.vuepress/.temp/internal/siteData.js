export const siteData = {
  "base": "/tutorial/",
  "lang": "en-US",
  "title": "TUTORIAL",
  "description": "W.J. Zhang教程教程网站，张雯瑾教程网站，emloxe",
  "head": [],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
