import nav from './configs/navbar'
import sidebar from './configs/sidebar'
import head from './configs/head'

export default {
    // 全站配置
    lastUpdated: true,
    cleanUrls: 'without-subfolders',

    // 主题配置
    themeConfig: {
        // 页脚配置
        footer: {
            message: 'Released under the GPL License.',
            copyright: 'Copyright © 2022 iYuan Ltd.'
        },

        // Logo
        logo: '/assets/img/logo.svg',

        // 社交链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/iYuanLtd/mc-docs' },
        ],

        // 语言选择
        localeLinks: {
            text: 'Language',
            items: [
                { text: 'English', link: '/en/' },
                { text: '简体中文', link: '/' },
            ],
        },

        // 导航栏配置
        nav,

        // 编辑链接
        editLink: {
            pattern: 'https://github.com/iYuanLtd/mc-docs/edit/main/docs/:path',
        },

        // 侧边栏配置
        sidebar,
    },

    locales: {
        '/': {
            title: 'MC 指南',
            description: 'Minecraft 指南.',
            lang: 'zh-CN',
            themeConfig: {
                // 汉化相关
                lastUpdatedText: '最后更新于',
                docFooter: {
                    prev: '上一篇',
                    next: '下一篇',
                },
                editLink: {
                    text: '编辑此页面',
                }
            }
        },

        '/en/': {
            title: 'MC Guide',
            description: 'Minecraft Guide.',
            lang: 'en-US',
        }
    },
}
