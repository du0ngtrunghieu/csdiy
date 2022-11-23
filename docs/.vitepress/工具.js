export default function () {
    return [
        {
            items: [
                { text: 'Markdown', link: '/tool/markdown' },
                { text: '翻墙', link: '/tool/gfw' },
                { text: 'SSH', link: '/tool/ssh' },
            ]
        },
        {
            text: 'English',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '英语二小作文', link: '/tool/en/2a' },
                { text: '英语二大作文', link: '/tool/en/2b' },
            ]
        },
        {
            text: 'Git',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '入门', link: '/tool/git/intro' },
            ]
        },
        {
            text: 'LaTeX',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '配置', link: '/tool/latex/config' },
            ]
        },
        {
            text: 'Docker',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '入门', link: '/tool/docker/intro' },
            ]
        },
        {
            text: 'Make',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '入门', link: '/tool/make/intro' },
            ]
        },
        {
            text: 'CMake',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '入门', link: '/tool/cmake/intro' },
            ]
        },
    ]
}
