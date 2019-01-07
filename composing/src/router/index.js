import Vue from 'vue'
import Router from 'vue-router'
import Comment from '@/components/comment'
import Tread from '@/components/tread'
import Study from '@/components/study'

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
    }, {
        path: '/tread',
        name: 'Tread',
        component: Tread
    }, {
        path: '/study',
        name: 'Study',
        component: Study
    }]
})