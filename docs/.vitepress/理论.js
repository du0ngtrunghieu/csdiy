export default function () {
    return [
        {
            text: '简介',
            collapsible: true,
            items: [
                { text: '关于本项目', link: '/theory/intro' },
                { text: '如何使用该模板', link: '/theory/how-to-use' },
            ]
        },
        {
            text: 'JavaScript',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '学习指南', link: '/theory/js/intro' },
            ]
        },
    ]
}
