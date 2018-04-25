Page({
  data: {
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
        text: '作品档案',
        icon: 'fa fa-address-card-o',
        color: 'seven',
        query: 'zpda'
      },
      {
        text: '师资列表',
        icon: 'fa fa-users',
        color: 'eight',
        query: 'szlb'
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
      latitude: 23.362490,
      longitude: 116.715790,
      scale: 18,
      name: '华乾大厦',
      address: '金平区长平路93号'
    })  
  }
})