module.exports = {
  base:'/wow-UI/',
  title: '马赛克 UI',
  description: '一个好用的UI框架',
  home: true,
  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-start/' ]
      },

      {
        title: '组件',
        children: [ '/components/button',
                    '/components/input'
        ]
      },

    ]
  }
}