export default function () {
    return [
        {
            items: [
                { text: '学习路线', link: '/cs/intro' },
                { text: '时间轴', link: '/cs/timeline' },
            ]
        },
        {
            text: 'CS50x',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '简介', link: '/cs/cs50x/intro' },
            ]
        },
        {
            text: 'CS61A',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '简介', link: '/cs/cs61a/intro' },
            ]
        },
        {
            text: 'Nand2Tetris',
            collapsible: true,
            collapsed: true,
            items: [
                { text: '简介', link: '/cs/nand2tetris/intro' },
            ]
        }
    ]
}
