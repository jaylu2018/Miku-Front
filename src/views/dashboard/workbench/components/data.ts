interface GroupItem {
  title: string
  icon: string
  color: string
  desc: string
  date: string
  group: string
}
interface LinkItem {
  title: string
  icon: string
  color: string
  desc: string
  link_st: string
  link_uat?: string
  link_sz?: string
  link_fy?: string
}

interface NavItem {
  title: string
  icon: string
  color: string
}

export const navItems: NavItem[] = [
  {
    title: '首页',
    icon: 'ion:home-outline',
    color: '#1fdaca'
  },
  {
    title: '仪表盘',
    icon: 'ion:grid-outline',
    color: '#bf0c2c'
  },
  {
    title: '组件',
    icon: 'ion:layers-outline',
    color: '#e18525'
  },
  {
    title: '系统管理',
    icon: 'ion:settings-outline',
    color: '#3fb27f'
  },
  {
    title: '权限管理',
    icon: 'ion:key-outline',
    color: '#4daf1bc9'
  },
  {
    title: '图表',
    icon: 'ion:bar-chart-outline',
    color: '#00d8ff'
  }
]

export const groupItems: GroupItem[] = [
  {
    title: 'Github',
    icon: 'carbon:logo-github',
    color: '',
    desc: '不要等待机会，而要创造机会。',
    group: '开源组',
    date: '2021-04-01'
  },
  {
    title: 'Vue',
    icon: 'ion:logo-vue',
    color: '#3fb27f',
    desc: '现在的你决定将来的你。',
    group: '算法组',
    date: '2021-04-01'
  },
  {
    title: 'Html5',
    icon: 'ion:logo-html5',
    color: '#e18525',
    desc: '没有什么才能比努力更重要。',
    group: '上班摸鱼',
    date: '2021-04-01'
  },
  {
    title: 'Angular',
    icon: 'ion:logo-angular',
    color: '#bf0c2c',
    desc: '热情和欲望可以突破一切难关。',
    group: 'UI',
    date: '2021-04-01'
  },
  {
    title: 'React',
    icon: 'bx:bxl-react',
    color: '#00d8ff',
    desc: '健康的身体是实目标的基石。',
    group: '技术牛',
    date: '2021-04-01'
  },
  {
    title: 'Js',
    icon: 'ion:logo-javascript',
    color: '#4daf1bc9',
    desc: '路是走出来的，而不是空想出来的。',
    group: '架构组',
    date: '2021-04-01'
  }
]

export const linkItems: LinkItem[] = [
  {
    title: '银通管理站',
    icon: 'carbon:logo-github',
    color: '',
    desc: '银通管理站',
    link_st: 'https://test.lianlianpay-inc.com/YINTONG_MNG/sysFrame.action',
    link_uat: 'https://uat-mng.lianlianpay.com/sysFrame.action',
    link_sz: 'https://mng.lianlianpay.com/sysFrame.action',
    link_fy: 'https://mng.lianlianpay.com/sysFrame.action'
  },
  {
    title: '银通商户站',
    icon: 'ion:logo-vue',
    color: '#3fb27f',
    desc: '银通商户站。',
    link_st: 'https://test.lianlianpay-inc.com/merchant//trader/index.htm',
    link_uat: 'https://uat-b.lianlianpay.com/ipConfig/ipConfigApply.htm',
    link_sz: 'https://b.lianlianpay.com/trader/login.htm',
    link_fy: 'https://b.lianlianpay.com/trader/login.htm'
  },
  {
    title: 'ESJob',
    icon: 'ion:logo-html5',
    color: '#e18525',
    desc: 'ESJob',
    link_st: 'http://192.168.110.113:8899/#',
    link_uat: '',
    link_sz: 'http://192.168.30.109:8025/#',
    link_fy: 'http://192.168.30.109:8025/#'
  },
  {
    title: 'Angular',
    icon: 'ion:logo-angular',
    color: '#bf0c2c',
    desc: '热情和欲望可以突破一切难关。',
    link_st: '2021-04-01'
  }
]
