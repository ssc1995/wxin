Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '遇见',
    author: '孙燕姿',           src:'http://m10.music.126.net/20200415080023/5ad4baad167d732f15bfc5b54975ca97/ymusic/f189/538f/29a0/aa78032d24c11eb57283eb577a26a6dd.mp3',
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(30)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})