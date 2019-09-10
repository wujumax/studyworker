const app = getApp()
Page({
  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {
    let that=this;
    //获得后台服务的数据
    wx.request({
      url: 'http://192.168.3.200:8888/index',
      success: function (res) {
        console.log(res);
        if (res.statusCode == 200) {
          let courses = res.data.courses;
          let topicstwo = res.data.topicstwo;
          let topicsthree = res.data.topicsthree;
          let topicsfour = res.data.topicsfour;
          let box01 = res.data.box01;
          that.setData({ topics: courses, topicstwo: topicstwo, topicsthree: topicsthree, topicsfour: topicsfour,box01:box01});
        }
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    indexSelect: 0,
    indexSelecttwo: 0,
    indexSelectthree: 0,
    indexSelectfour: 0,
    topics: [],
    topicstwo: [],
    topicsthree: [],
    topicsfour: [],
    box01:[]
  },

  clickTopItem: function(res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.yjs;
    //把index换成id
    this.setData({
      indexSelect: id
    });
  },
  clickTopItemtwo: function(res) {
    //获得传递过来的数据
    let em = res.currentTarget.dataset.yjsa;
    //把index换成em
    this.setData({
      indexSelecttwo: em
    });
  },
  clickTopItemthree: function(res) {
    //获得传递过来的数据
    let em = res.currentTarget.dataset.yjsa;
    //把index换成em
    this.setData({
      indexSelectthree: em
    });
  },
  clickTopItemfour: function(res) {
    //获得传递过来的数据
    let em = res.currentTarget.dataset.yjsa;
    //把index换成em
    this.setData({
      indexSelectfour: em
    });
  }
})