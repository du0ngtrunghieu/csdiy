export default function () {
    return [
        {
            items: [
                { text: 'Markdown', link: '/tool/markdown' },
                { text: 'GFW', link: '/tool/gfw' },
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
            text: 'Makefile',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '入门', link: '/tool/makefile/intro' },
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
