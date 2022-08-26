export default {
    title: 'MC 指南',
    description: 'Minecraft 指南.',
    algolia: {
        appId: 'SFUY9XHV1W',
        apiKey: '9bd129c31064bed280402cc8bb6989c7',
        indexName: 'vitepress'
    },
    themeConfig: {
        footer: {
            message: 'Released under the GPL License.',
            copyright: 'Copyright © 2022 iYuan Ltd.'
        },
        logo: '/assets/img/logo.svg',
        nav: [
            {
                text: '指南',
                items: [
                    { text: '快速开始', link: '/item-1' },
                ]
            }
        ],
        editLink: {
            pattern: 'https://github.com/iYuanLtd/mc-docs/edit/main/docs/:path'
        },
        sidebar: [
            {
                text: '项目',
                collapsible: true,
                items: [{ text: '项目简介', link: '/guide/' },]
            },
            {
                text: '游戏相关',
                collapsible: true,
                items: [
                    { text: '游戏简介', link: '/guide/mc/' },
                    { text: '快速开始', link: '/guide/mc/getting-started' },
                    { text: '接入第三方皮肤站', link: '/guide/mc/authlib' },
                ]
            }
        ]
    }
}