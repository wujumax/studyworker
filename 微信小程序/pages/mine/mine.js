// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:'500',

  },

  
  onLoad: function (options) {
    let that=this;
    wx.getSystemInfo({
      success:function(res){
        let buffer = (750 / res.windowWidth) * res.windowHeight;
        that.setData({
          height: buffer
        });
      }
    })
  },

  

 
})