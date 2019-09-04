const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexSelect: 0,
    topics: [{
      id: 0,
      title: "运营"
    }, {
      id: 1,
      title: "行业"
      }, {
        id: 2,
        title: "基础"
      }]
  },
   clickTopItem: function (res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.yjs;
    //把index换成id
    this.setData({
      indexSelect: id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})