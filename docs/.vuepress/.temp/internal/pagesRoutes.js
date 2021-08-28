import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-568d3b89","/JavaScript/","",["/JavaScript/index.html","/JavaScript/README.md"]],
  ["v-743faa02","/Vue/","",["/Vue/index.html","/Vue/README.md"]],
  ["v-408e5f5f","/Vue/Vue-vant.html","Vue.js",["/Vue/Vue-vant","/Vue/Vue-vant.md"]],
  ["v-f0e51ef6","/Vue/Vuex.html","",["/Vue/Vuex","/Vue/Vuex.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
