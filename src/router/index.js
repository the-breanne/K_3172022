import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../components/UserCreate')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../components/UserList')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/UserEdit')
  },
  {
    path: '/meeting',
    name: 'meeting',
    component: () => import('../components/Meeting')
  },
  {
    path: '/meetinglist',
    name: 'meetinglist',
    component: () => import('../components/MeetingList')
  },
  {
    path: '/meetingedit/:id',
    name: 'meetingedit',
    component: () => import('../components/MeetingEdit')
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import('../components/Feedback')
  },
  {
    path: '/feedbacklist',
    name: 'feedbacklist',
    component: () => import('../components/FeedbackList')
  },
  {
    path: '/feedbackedit/:id',
    name: 'feedbackedit',
    component: () => import('../components/FeedbackEdit')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/About')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/Dashboard'),
    meta: {
      authRequired: true,
    },
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
      if (firebase.auth().currentUser) {
          next()
      } else {
          alert('You must be logged in to see this page')
          next({
              path: '/',
          })
      }
  } else {
      next()
  }
})

export default router