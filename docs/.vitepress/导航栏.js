export default function () {
    return [
        { text: '计算机', link: '/cs/intro', activeMatch: '/cs/' },
        { text: '编程语言', link: '/lang/c/intro', activeMatch: '/lang/' },
        { text: '数学', link: '/math/intro', activeMatch: '/math/' },
        { text: '工具', link: '/tool/markdown', activeMatch: '/tool/' },
        {
            text: '关于',
            items: [
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