export default function () {
    return [
        { text: '计算机', link: '/cs/intro' },
        { text: '编程语言', link: '/lang/c/intro' },
        { text: '数学', link: '/math/intro' },
        { text: '工具', link: '/tool/markdown' },
        {
            text: '关于',
            activeMatch: '/timeline',
            items: [
                { text: '我', link: 'https://hrh.icu' },
                { text: '时间轴', link: '/timeline' },
                {
                    items: [
                        { text: '小作文', link: '/en/2a' },
                        { text: '大作文', link: '/en/2b' },
                    ]
                }
            ]
        }
    ]
}