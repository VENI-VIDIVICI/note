module.exports = {
  themeConfig: {
    navbar: [
      // NavbarItem
      {
        text: 'JavaScript',
        link: '/JavaScript/',
      },
      // NavbarGroup
      {
        text: 'vue',
        children: [{
					text:'vant',
					link:'/vue/Vue-vant.md'
				}],
      },
      // 字符串 - 页面文件路径
    ],
		sidebar:[
			{
        text: 'JavaScript',
        link: '/JavaScript/',
      },
      // NavbarGroup
      {
        text: 'vue',
        children: [{
					text:'vant',
					link:'/vue/Vue-vant.md'
				}],
      },
		]
  },
}