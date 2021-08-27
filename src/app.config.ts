export default {
  pages: [
    'pages/index/index',
    'pages/person_center/person_center'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#cdcdcd',
    selectedColor: '#169891',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'static/images/tabbar/home.png',
        selectedIconPath: 'static/images/tabbar/home_selected.png'
      },
      {
        pagePath: 'pages/person_center/person_center',
        text: '我的',
        iconPath: 'static/images/tabbar/person_center.png',
        selectedIconPath: 'static/images/tabbar/person_center_selected.png'
      }
    ]
  }
}
