const app= getApp()
const db = wx.cloud.database()
const _ = db.command;
var that = null;
var t = null;

Page({
  data:{
    place:'',
    comments:'',
  },

  onLoad(){
    that = this;
    that.setData(app.globalData.currentPhoto);
  },

  getcomments: function(e){
    that.setData({
      comments:e.detail.value
    });
    console.log(e.detail.value)
  },

  getplace: function(e){
    that.setData({
      place:e.detail.value
    });
    console.log(e.detail.value)
  },

  // 预览图片大图
  previewImage: function() {
    wx.previewImage({
        urls: [that.data.fileID]
    })
  },

  // 保存评论数据至数据库
  saveComment: function(){
    //TODO 照片评论功能
    db.collection('user').doc(app.globalData.id).update({
      data:{
        photo:_.pull({
            fileID:that.data.fileID,
        })
      }
    }).then(result=>{
      db.collection('user').doc(app.globalData.id).update({
        data:{
          photo:_.push({
              fileID:that.data.fileID,
              comments:that.data.comments,
              place:that.data.place,
              checkValue:'未处理'
          })
        }
      }).then(res=>{
        console.log(result);
        wx.showToast({
          title: '保存成功'
        });
      })
    })
  },

  //单选框
  radio: function (e) {
    var index = e.currentTarget.dataset.index;//获取当前点击的下标
    var checkboxArr = this.data.checkboxArr;//选项集合
    if (checkboxArr[index].checked) return;//如果点击的当前已选中则返回
      checkboxArr.forEach(item => {
      item.checked = false
    })
    checkboxArr[index].checked = true;//改变当前选中的checked值
    this.setData({
      checkboxArr: checkboxArr
    });
  },
  radioChange: function (e) {
    var checkValue = e.detail.value;
    this.setData({
      checkValue: checkValue
    });
  },
})