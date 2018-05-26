import http from '@/scripts/http'

const wx = window.wx

const defaultOption = {
  shareTitle: 'PURE FITNESS',
  shareLink: 'http://pure.51xzxz.com/fitness',
  shareImgUrl: 'http://pure.51xzxz.com/fitness/static/img/share.jpg',
  shareDesc: 'PURE FITNESS DES',
  successFunc: function (type, sta) {
    console.log(type, sta)
    if (type === '朋友圈' && sta === 1) {
      console.log('分享朋友圈成功')
    } else if (type === '朋友' && sta === 1) {
      console.log('分享朋友成功')
    } else {
      console.log('share')
    }
  },
  failFunc: function () {
    // alert('fail')
  }
}

function getTicket (shareOption) {
  // var url = encodeURIComponent(location.href.split('#')[0])
  var url = location.href.split('#')[0]
  var ticketUrl = 'http://pure.51xzxz.com/InterFace/Service.ashx?action=getjssdk&url=' + url;
  console.log(ticketUrl)
  http.fetchGet(ticketUrl, {
    responseType: 'json'
  }).then(function (res) {
    if (res) {
      console.log(res)
      wx.config({
        debug: true,
        appId: res.appId,
        timestamp: res.timestamp,
        nonceStr: res.nonceStr,
        signature: res.signature,
        jsApiList: [
          'checkJsApi',
          'onMenuShareTimeline',
          'onMenuShareAppMessage'
          // 所有要调用的 API 都要加到这个列表中
        ]
      })
      wx.error(function (res) {
        // alert(JSON.stringify(res))
      })
    }
  })
}

function initShare (shareOption) {
  shareOption = Object.assign({}, defaultOption, shareOption)
  return wx.ready(function () {
    wx.checkJsApi({
      jsApiList: ['checkJsApi', 'onMenuShareAppMessage', 'onMenuShareTimeline'],
      success: function (res) {}
    })
    wx.onMenuShareTimeline({
      title: shareOption.shareTitle, // 分享标题
      link: shareOption.shareLink, // 分享链接
      imgUrl: shareOption.shareImgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
        shareOption.successFunc('朋友圈', 1)
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
        shareOption.failFunc()
      }
    })
    wx.onMenuShareAppMessage({
      title: shareOption.shareTitle, // 分享标题
      desc: shareOption.shareDesc, // 分享描述
      link: shareOption.shareLink, // 分享链接
      imgUrl: shareOption.shareImgUrl, // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
        shareOption.successFunc('朋友', 1)
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
        shareOption.failFunc()
      }
    })
  })
}

const [getWXTicket] = [getTicket, initShare]

export default {
  getWXTicket
}
