// pages/info/info.js

//要引用全局变量要加上这一句
var app = getApp()
//怎么修改全局变量参考第一个handletap函数，里面有标注


Page({


    data: {
        num:0,
        num2:0,
        num3:0,
        num4:0,
        num5:0,
        num6:0,
        num7:0,
        num8:0,
        num9:0,
        num10:0,
        num11:0,
        num12:0,
        num13:0,
        num14:0,
        num15:0,
        danbai:0,
        zhifang:0,
        gai:0,
        lin:0,
        jia:0,
        niuhuang:0,
        danjian:0,
        vd:0
    },

    /*教学 */
    HandleInput(e){
        this.setData({
            num:e.detail.value
        })
    },
    /*事件绑定+-10*/
    handletap(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num:this.data.num+=operation
        })
        //修改全局变量
        app.globalData.globalnum+=10
    },
    handletap2(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num2:this.data.num2+=operation
        })
    },
    handletap3(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num3:this.data.num3+=operation
        })
    },
    handletap4(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num4:this.data.num4+=operation
        })
    },
    handletap5(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num5:this.data.num5+=operation
        })
    },
    handletap6(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num6:this.data.num6+=operation
        })
    },
    handletap7(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num7:this.data.num7+=operation
        })
    },
    handletap8(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num8:this.data.num8+=operation
        })
    },
    handletap9(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num9:this.data.num9+=operation
        })
    },
    handletap10(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num10:this.data.num10+=operation
        })
    },
    handletap11(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num11:this.data.num11+=operation
        })
    },
    handletap12(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num12:this.data.num12+=operation
        })
    },
    handletap13(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num13:this.data.num13+=operation
        })
    },
    handletap14(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num14:this.data.num14+=operation
        })
    },
    handletap15(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num15:this.data.num15+=operation
        })
    },
     nutrition:function(event){
        var num=parseFloat(this.data.num)
        var num2=parseFloat(this.data.num)
        var num3=parseFloat(this.data.num)
        var num4=parseFloat(this.data.num)
        var num5=parseFloat(this.data.num)
        var num6=parseFloat(this.data.num)
        var num7=parseFloat(this.data.num)
        var num8=parseFloat(this.data.num)
        var num9=parseFloat(this.data.num)
        var num10=parseFloat(this.data.num)
        var num11=parseFloat(this.data.num)
        var num12=parseFloat(this.data.num)
        var num13=parseFloat(this.data.num)
        var num14=parseFloat(this.data.num)
        var num15=parseFloat(this.data.num)
        console.log(danbai)
        console.log(zhifang)
        console.log(gai)
        console.log(lin)
        console.log(jia)
        console.log(niuhuang)
        console.log(vd)
      
         this.setData({
             danbai:num*2
         })
     },
    
     
    
    goToPage1: function () {
        wx.navigateTo({
          url: '/pages/income/income',
        })
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

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