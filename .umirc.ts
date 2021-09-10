import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },

  //tên component hay path viết hoá hay thuong đều được
  //component nôi dung là đường dẫn đên file đó,chứ không phải tên component
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/Capital/nEws', component: '@/pages/Capital/News' },
    {
      path: '/news/covid',
      component: '@/pages/news/covid',
      wrappers: ['@/wrappers/auth'],
    },
    { path: '/news/kenh14', component: '@/pages/news/kenh14' },
    { path: '/student/:id', component: '@/pages/student/[id]' },
    { path: '/:dynamic?/dollar', component: '@/pages/[dynamic$]/dollar' },
    { component: '@/pages/404' },
  ],
  fastRefresh: {},
  ssr: {},
  //phải bất ssr lên ms xài dc getInitialProps
  title: 'hi',
});
