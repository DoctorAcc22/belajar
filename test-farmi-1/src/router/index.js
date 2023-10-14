import { createRouter, createWebHistory } from 'vue-router'
import HomeOneView from '../components/HomeOneView.vue'
import HomeTwoView from '../components/HomeTwoView.vue'
import HomeThreeView from '../components/HomeThreeView.vue'
import AboutUsView from '../components/AboutUsView.vue'
import ServicesView from '../components/ServicesView.vue'
import TeamView from '../components/TeamView.vue'
import ContactView from '../components/ContactView.vue'
import NotFoundView from '../components/NotFoundView.vue'
import GalleryView from '../components/GalleryView.vue'
import BlogStandardView from '../components/BlogStandardView.vue'
import BlogWithSidebarView from '../components/BlogWithSidebarView.vue'
import Blog2ColumnView from '../components/Blog2ColumnView.vue'
import Blog3ColumnView from '../components/Blog3ColumnView.vue'
import BlogSingleView from '../components/BlogSingleView.vue'
import BlogSingleWithSidebarView from '../components/BlogSingleWithSidebarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-one',
      component: HomeOneView
    },
    {
      path: '/home-two',
      name: 'home-two',
      component: HomeTwoView
    },
    {
      path: '/home-three',
      name: 'home-three',
      component: HomeThreeView
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUsView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/blog-standard',
      name: 'blog-standard',
      component: BlogStandardView
    },
    {
      path: '/blog-with-sidebar',
      name: 'blog-with-sidebar',
      component: BlogWithSidebarView
    },
    {
      path: '/blog-2-column',
      name: 'blog-2-column',
      component: Blog2ColumnView
    },
    {
      path: '/blog-3-column',
      name: 'blog-3-column',
      component: Blog3ColumnView
    },
    {
      path: '/blog-single',
      name: 'blog-single',
      component: BlogSingleView
    },
    {
      path: '/blog-single-with-sidebar',
      name: 'blog-single-with-sidebar',
      component: BlogSingleWithSidebarView
    }
  ]
})

export default router
