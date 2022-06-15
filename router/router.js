//引入依赖
const express = require('express');
const axios = require('axios');

//开启路由
const router = express.Router();

//路由配置，代理服务
router.get('/getDiscList', (req, res) => {
  //获取歌单列表相关数据
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  })
    .then((response) => {
      res.jsonp(response.data)
    })
    .catch((err) => {
      return res.status(500).jsonp('Not Data Found...');
    })
})

router.get('/getTopBanner', (req, res) => {
  // 获取焦点图数据
  const url = 'https://u.y.qq.com/cgi-bin/musics.fcg';
  const params = Object.assign({}, req.query);
  delete params.callback;
  axios.get(url, {
    params
  })
    .then((response) => {
      res.jsonp(response.data);
    })
    .catch((err) => {
      return res.status(500).jsonp('Not Data Found...');
    })
})

router.get('/getSingerList', (req, res) => {
  //获取歌手列表相关数据
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg';
  axios.get(url, {
    params: req.query
  })
    .then((response) => {
      res.jsonp(response.data)
    })
    .catch((err) => {
      return res.status(500).jsonp('Not Data Found...');
    })
})

router.get('/getSingerDetail', (req, res) => {
  // 获取歌手歌曲详情列表
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg';
  const params = Object.assign({}, req.query);
  delete params.callback;
  axios.get(url, {
    params
  })
    .then((response) => {
      res.jsonp(response.data)
    })
    .catch((err) => {
      return res.status(500).jsonp('Not Data Found...');
    })
})

router.get('/getPlayAddress', (req, res) => {
  //获取歌曲播放地址相关数据
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg';
  const params = Object.assign({}, req.query);
  delete params.callback;
  axios.get(url, {
    params
  })
    .then((response) => {
      res.jsonp(response.data)
    })
    .catch((err) => {
      return res.status(500).jsonp('Not Data Found...');
    })
})

router.get('/getLyric', (req, res) => {
  //获取歌词内容信息
  const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg';
  axios.get(url, {
    headers: {
      referer: 'https://y.qq.com/portal/player.html'
    },
    params: req.query
  })
    .then((response) => {
      res.jsonp(response.data)
    })
    .catch((err) => {
      return res.status(500).jsonp('Not Data Found...');
    })
})

//导出路由
module.exports = router;
