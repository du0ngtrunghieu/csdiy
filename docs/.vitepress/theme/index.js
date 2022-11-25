import DefaultTheme from 'vitepress/theme'
import Comment from './Comment.vue'
import { createMediumZoomProvider } from './useMediumZoom'
import './custom.css'

export default {
    ...DefaultTheme,
    Layout: Comment,
    enhanceApp( {app, router} ) {
        createMediumZoomProvider(app, router)
    }
}