// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    // host: 'https://iabeta.njia.org.cn',
    host: 'https://ia.njia.org.cn',
    // host: 'http://58.240.75.5:9527',
    // host: 'http://58.240.75.4:9527',
    // userid: '',
    // username: '',
    // userrole: '',
    loginResult: null,
    token: null,
    routername:[],
    reportInterval: 0,

    newsContent:'',
    newsTitle:'',
    newsPublishTime:'',
    newnotice:'',
    flyplanId:'',
    fpProcess:'0',
    deviceId:'',
    dvProcess:'0',
    pilotId:'',
    ptProcess:'0',
    
  }
})
