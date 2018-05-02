// page/pages/index/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: {
      horace: {
        title: 'Horace',
        content: [
          { image: '../../../assets/images/sjl.jpg' },
          { text: 'Horace院长' },
          { text: '中国农工党党员' },
          { text: '希望美术教育联合创始人' },
          { text: '北京希望师资学院院长' },
          { text: '灵感少儿美术教育研究院院长' },
          { text: '中国少儿造型艺术学会理事' },
          { text: '中国教育培训联盟少儿美术分盟秘书长' },
          { text: '新华网“2016年度最具教育影响力人物”' },
          { text: '新浪2017年度中国教育行业杰出贡献人物' },
          { text: '“中华好少年”全国优秀传统文化传播总展演专家评委' },
          { text: '中国书画家联谊会公益爱心人民艺术家' },
          { text: '山东美术家协会少儿艺委会副会长' },
          { text: '《少儿美术》特邀编辑' },
          { text: '少儿美术教育管理教学体系研发导师' }
        ]
      },
      xfh: {
        title: '徐凤华',
        content: [
          { image: '../../../assets/images/xfh.jpg' },
          { text: '希望美术教育 常务副总裁' },
          { text: '北京希望师资学院 高级讲师' },
          { text: '教育培训行业金牌管理专家' },
          { text: '教育培训行业金牌管理实战专家' },
          { text: '教育培训行业人力资源规划师' }
        ]
      },
      dll: {
        title: '杜蕾',
        content: [
          { image: '../../../assets/images/dll.jpg' },
          { text: '希望美术教育 副总裁' },
          { text: '希望美术教育 教学总监' },
          { text: '北京希望师资学院 高级研发总监' },
          { text: '灵感少儿美术教育研究院培训导师' },
          { text: '中国教育培训联盟少儿美术分盟副秘书长' },
          { text: '艺术教育培训行业金牌续费专家级讲师' },
          { text: '艺术教育培训行业金牌教学管理实战专家' }
        ]
      },
      dwy: {
        title: '刁望隐',
        content: [
          { image: '../../../assets/images/dwy.jpg' },
          { text: '希望美术教育 副总裁' },
          { text: '希望美术教育 市场总监' },
          { text: '北京希望师资学院 高级讲师' },
          { text: '教育培训行业高级品牌营销专家' },
          { text: '教育培训行业高级市场运作专家' },
          { text: '教育培训行业销售冠军团队训练师' }
        ]
      },
      yd: {
        title: '杨东',
        content: [
          { image: '../../../assets/images/yd.jpg' },
          { text: '希望美术教育 行政副总监' },
          { text:'北京希望师资学院 高级讲师'},
          { text:'灵感少儿美术教育研究院培训导师'},
          { text:'艺术教育培训行业管理实战导师'},
          { text:'教育培训行业项目评估分析顾问'}
        ]
      }
    },
    current: {},
    title: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      current: this.data.list[this.options.q]
    })
    wx.setNavigationBarTitle({
      title: this.data.current.title
    })
    console.log(this.options.q)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})