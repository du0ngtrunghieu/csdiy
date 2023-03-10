import 计算机 from './计算机'
import 编程语言 from './编程语言'
import 数学 from './数学'
import 工具 from './工具'
import 导航栏 from './导航栏'

export default {
    title: 'Mancuoj',
    description: '我的计算机自学之路',
    lang: 'zh-CN',
    lastUpdated: true,
    cleanUrls: 'without-subfolders',

    head: [
        ['link', { rel: 'icon', href: '/logo.svg' }],
        ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css' }],
        ['meta', { name: 'keywords', content: 'Mancuoj, 计算机, 数学, 笔记, 编程语言, 公开课' }],
    ],

    markdown: {
        // lineNumbers: true,
        theme: {
            light: 'github-light',
            dark: 'github-dark'
        },
        config: (md) => {
            md.use(require('markdown-it-task-list-plus'), { activeStyle: { 'vertical-align': 'baseline', 'background': '#9499ff', "border-color": "#9499ff", 'border-radius': '1px' } })
                .use(require('markdown-it-imsize'))
                .use(require('markdown-it-mark'))
                .use(require('markdown-it-smartarrows'))
                .use(require('markdown-it-texmath'), { engine: require('katex'), delimiters: 'dollars', katexOptions: { macros: { "\\RR": "\\mathbb{R}" } } })
        }
    },

    themeConfig: {
        // logo: '/logo.svg',
        outlineTitle: '大纲',
        nav: 导航栏(),
        sidebar: {
            '/cs/': 计算机(),
            '/lang/': 编程语言(),
            '/math/': 数学(),
            '/tool/': 工具(),
        },

        algolia: {
            appId: 'HXD7HKZWV7',
            apiKey: '8abc20cdb36302bd6622683ba0241626',
            indexName: 'csdiy',
            // placeholder: '请输入关键词',
            // buttonText: '搜索',
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/mancuoj' },
            { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="28" viewBox="0 0 36 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z"/></svg>' }, link: 'https://juejin.cn/user/3466105460624760' },
            { icon: { svg: '<svg t="1668510009545" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3502" width="200" height="200"><path d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 1 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.157333 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z" p-id="3503"></path></svg>' }, link: 'https://space.bilibili.com/44805047' },
            { icon: { svg: '<svg t="1668510152920" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3805" width="200" height="200"><path d="M544.949 561.422s0-71.387-34.779-75.050c-34.779-3.663-142.775 0-142.775 0v-219.654h161.078s-1.83-73.219-32.949-73.219h-261.755l43.93-117.148s-65.897 3.663-89.692 45.761-98.844 252.604-98.844 252.604 25.627 10.983 67.726-20.134c42.101-31.116 56.743-86.033 56.743-86.033l76.879-3.663 1.83 223.316s-133.621-1.83-161.078 0c-27.457 1.83-42.101 75.050-42.101 75.050h203.182s-18.307 124.47-69.557 214.164c-53.085 89.692-151.929 161.078-151.929 161.078s71.387 29.287 140.947-10.983c69.557-42.101 120.811-223.316 120.811-223.316l162.912 203.182s14.643-97.013-1.83-124.47c-18.307-27.457-113.49-137.283-113.49-137.283l-42.101 36.607 29.287-120.811h177.552zM587.050 188.010l-1.83 660.793h65.897l23.795 82.37 115.321-82.37h162.912v-660.793h-366.091zM879.92 775.584h-76.879l-97.013 75.050-21.965-75.050h-20.134v-512.527h215.991v512.527z" fill="" p-id="3806"></path></svg>' }, link: 'https://www.zhihu.com/people/clown-95-18' },
            { icon: 'twitter', link: 'https://twitter.com/humancuoj' },
        ],

        editLink: {
            pattern: 'https://github.com/mancuoj/csdiy/edit/main/docs/:path',
            text: '在 GitHub 上修改此页'
        },

        lastUpdatedText: '上次更新时间',

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        footer: {
            message: 'Released under the MIT License',
            copyright: 'Copyright © 2022-present Mancuoj'
        },
    }
}

