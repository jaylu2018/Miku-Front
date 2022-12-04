import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const project: AppRouteModule = {
  path: '/project',
  name: 'project',
  component: LAYOUT,
  redirect: '/project/manage',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.demo.project.manage')
  },
  children: [
    {
      path: 'manage',
      name: 'ProjectManage',
      meta: {
        title: t('routes.demo.project.manage'),
        ignoreKeepAlive: false
      },
      component: () => import('/@/views/demo/project/manage/index.vue')
    },
    {
      path: 'project_detail/:id',
      name: 'ProjectDetail',
      meta: {
        hideMenu: true,
        title: t('routes.demo.project.project_detail'),
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/project/project'
      },
      component: () => import('/@/views/demo/project/project/ProjectDetail.vue')
    },
    {
      path: 'menu',
      name: 'menuManage',
      meta: {
        title: t('routes.demo.project.manage'),
        ignoreKeepAlive: false
      },
      component: () => import('/@/views/demo/project/menu/index.vue')
    },
    {
      path: 'role',
      name: 'RoleManage',
      meta: {
        title: '角色管理',
        ignoreKeepAlive: false
      },
      component: () => import('/@/views/demo/project/role/index.vue')
    }
  ]
}

export default project
