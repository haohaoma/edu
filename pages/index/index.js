Page({
  data: {
    list:[
      {
        title: '林中的小鸟',
        image: '../../assets/images/zuopin/xiaoniao.jpg',
        query: 'xiaoniao'
      },
      {
        title: '玩偶小熊',
        image: '../../assets/images/zuopin/xiaoxiong.jpg',
        query: 'xiaoxiong'
      },
      {
        title: '鹰',
        image: '../../assets/images/zuopin/ying.jpg',
        query: 'ying'
      },
      {
        title: '巨嘴鸟',
        image: '../../assets/images/zuopin/jzn.jpg',
        query: 'jzn'
      },
      {
        title: '百合',
        image: '../../assets/images/zuopin/baihe.jpg',
        query: 'baihe'
      }
    ],
    imgUrls: [
      '../../assets/images/banner1.jpg',
      '../../assets/images/banner2.jpg',
      '../../assets/images/banner3.jpg'
    ],
    iconSize: [
      {
        text: '集团简介',
        icon: 'fa fa-laptop',
        color: 'one',
        query: 'jtjj'
      },
      {
        text: '教育理念',
        icon: 'fa fa-book',
        color: 'two',
        query: 'jyln'
      }, {
        text: '教育特色',
        icon: 'fa fa-paint-brush',
        color: 'three',
        query: 'jyts'
      },
      {
        text: '课程体系',
        icon: 'fa fa-cubes',
        color: 'four',
        query: 'sdys'
      },
      {
        text: '联系我们',
        icon: 'fa fa-commenting',
        color: 'five',
        query: 'lxwm'
      },
      {
        text: '领导致辞',
        icon: 'fa fa-podcast',
        color: 'six',
        query: 'ldzc'
      },
      {
        text: '师资列表',
        icon: 'fa fa-users',
        color: 'eight',
        query: 'szlb'
      },
      {
        text: '家长须知',
        icon: 'fa fa-address-card-o',
        color: 'seven',
        query: 'zpda'
      }
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    src: '../../assets/images/banner1.jpg'
  },
  attached: function () {
    console.log(123)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '18613842966'
    })
  },
  openLocation: function () {
    wx.openLocation({
      latitude: 39.4363670099,
      longitude: 116.3098096848,
      scale: 18,
      name: '希望美术教育固安校区',
      address: '固安县惠文东街京南绿洲底商129号希望美术教育'
    })  
  }
})