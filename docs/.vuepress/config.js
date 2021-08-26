module.exports = {
    lang: 'zh-CN',
    title: 'iYuan',
    description: 'iYuan 指南',
  
    themeConfig: {
      
      logo: 'https://cdn.jsdelivr.net/gh/yuanzhidao/cdn@main/img/2021/08/20210815102947.png',

      //导航栏
      navbar: [
        {
          text: 'MC指南',
          link: '/guide/mc/',
        },
      ],

      //侧边栏
      sidebar: {
        '/guide/mc/': [
          {
            text: 'MC指南',
            children: ['/guide/mc/README.md', '/guide/mc/getting-started.md', '/guide/mc/authlib.md'],
          },
        ],
      },




    },
}