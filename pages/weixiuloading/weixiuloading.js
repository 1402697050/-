// miniprogram/pages/weixiuloading/weixiuloading.js
Page({

  _handlerAutoLogin:function(evt){  
    if(evt.detail.value.length>0){
      this.setData({
        rememberPwd:true
      })
    }
  },
  _handlerRememberPwd:function(evt){
    if(evt.detail.value.length===0){
      this.setData({
        autoLogin:false
      })
    }
  },
  _handlerPwdInput:function(evt){
    let passwordV=evt.detail.value;
    this.setData({
      passwordV:passwordV,
      canLogin:passwordV.length>=6 && this.data.isGood
    })
  },

  _handlerAccountInput:function(evt){
    let accountV=evt.detail.value;
    this.setData({
      accountV:accountV,
      isGood:accountV.length>=3,
      canLogin:this.data.passwordV.length>=6 && accountV.length>=3
    })
  },

  _handlerSubmit:function(evt){
    console.log(evt)
  },
  /**
   * 页面的初始数据
   */
  data: {
    passwordV:"1234",
    accountV:"qqqqqq",
    isGood:false,
    canLogin:false,
    autoLogin:false,
    rememberPwd:false,
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