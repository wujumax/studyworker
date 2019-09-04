const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexSelect: 0,
    indexSelecttwo: 0,
    topics: [{
      id: 0,
      title: "运营"
    }, {
      id: 1,
      title: "行业"
    }, {
      id: 2,
      title: "基础"
    }],
    topicstwo: [{
      em: 0,
      title: "运营"
    }, {
      em: 1,
      title: "行业"
    }, {
      em: 2,
      title: "基础"
    }, {
      em: 3,
      title: "行业"
    }, {
      em: 4,
      title: "基础"
    }],
    topicsthree: [{
      em: 0,
      title: "运营"
    }, {
      em: 1,
      title: "行业"
    }, {
      em: 2,
      title: "基础"
    }, {
      em: 3,
      title: "行业"
    }, {
      em: 4,
      title: "基础"
    }],
    topicsfour: [{
      em: 0,
      title: "运营"
    }, {
      em: 1,
      title: "行业"
    }, {
      em: 2,
      title: "基础"
    }, {
      em: 3,
      title: "行业"
    }, {
      em: 4,
      title: "基础"
    }]
  },
  
  clickTopItem: function(res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.yjs;
    //把index换成id
    this.setData({
      indexSelect: id
    });
  },
  clickTopItemtwo: function (res) {
    //获得传递过来的数据
    let em = res.currentTarget.dataset.yjsa;
    //把index换成em
    this.setData({
      indexSelecttwo: em
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  }
})