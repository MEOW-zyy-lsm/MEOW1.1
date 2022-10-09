// pages/income/income.js

//要引用全局变量要加上这一句
var app = getApp()
//data里先把info的数据复制一份过来，不能直接用全局变量，要用个函数传递一下，具体函数看onshow，里面把所有变量都加上就好
//最好global和每个页面js里的变量一一对应

Page({

    /**
     * 页面的初始数据
     */


    data:{
        num:0
    },
    /**
     * 生命周期函数--监听页面加载
     */
    

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.setData({
            num : app.globalData.globalnum
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})