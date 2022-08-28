export default sidebar = {

    '/en/': [
        {
            text: 'Project',
            collapsible: true,
            items: [{ text: 'Introduction', link: '/en/guide/' },]
        },
        {
            text: 'Game',
            collapsible: true,
            items: [
                { text: 'Game Intro', link: '/en/guide/game/' },
                { text: 'Getting Started', link: '/en/guide/game/getting-started' },
                { text: 'Authlib Yggdrasil', link: '/en/guide/game/authlib' },
            ]
        },
        {
            text: 'Server',
            collapsible: true,
            items: [
                { text: 'Get Ready', link: '/guide/server/' },
            ]
        },
    ],

    '/': [
        {
            text: '项目',
            collapsible: true,
            items: [{ text: '项目简介', link: '/guide/' },]
        },
        {
            text: '游戏相关',
            collapsible: true,
            items: [
                { text: '游戏简介', link: '/guide/game/' },
                { text: '快速开始', link: '/guide/game/getting-started' },
                { text: '接入第三方皮肤站', link: '/guide/game/authlib' },
            ]
        },
        {
            text: '服务器相关',
            collapsible: true,
            items: [
                { text: '准备步骤', link: '/guide/server/' },
            ]
        },
    ],

}