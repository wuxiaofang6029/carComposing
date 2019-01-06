import Vue from 'vue'
import Router from 'vue-router'
import Comment from '@/components/comment'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Comment',
        component: Comment
    }, {
        path: '/comment',
        name: 'Comment',
        component: Comment
    }]
})