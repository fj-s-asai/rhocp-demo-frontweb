/*	--------------------------------------------------------------------------/
*	author		: 
*	module		：
*											COPYRIGHT 
*	-------------------------------------------------------------------------*/


/*	--------------------------------------------------------------------------/
*	index.js
*	-------------------------------------------------------------------------*/	

const express = require('express');
const http = require("http");
const router = express.Router();

/*	--------------------------------------------------------------------------/
*	ルーティング：/top
*	-------------------------------------------------------------------------*/
router.get('/top', function (request, response) {

  let totalmeta = {};
  totalmeta.title = "UG-STYLE";
  totalmeta.cds = process.env.CDS_HOME;
  let totalrr = {};
  totalrr.title = {};
  totalrr.contents = {};


  /*	---------------------------------------------------------------------/
   *	debug#1 summer
   *	--------------------------------------------------------------------*/
  function debug1(request,response) {
    let obj1 = {};
    obj1.result = "success";
    let tmp11={},tmp12={},tmp13 = {};
    obj1.json =[tmp11,tmp12,tmp13];
    tmp11.id = "11";
    tmp11.image = "beautiful-2576840_1920.jpg";
    tmp11.headline = "アウトドアをもっと手軽・快適に";
    tmp11.sub_headline = "気軽にエレガント　気軽に洗える";

    tmp12.id = "12";
    tmp12.image = "casual-1836613_1920.jpg";
    tmp12.headline = "カジュアルスタイルでグランピング";
    tmp12.sub_headline = "夏の思い出をUGと共に";

    tmp13.id = "13";
    tmp13.image = "fashion-2766734_1920.jpg";
    tmp13.headline = "そのまま街へでかけよう";
    tmp13.sub_headline = "夏のスタイルは思いのままに";
    totalrr.title.status = 200;
    totalrr.title.body = obj1;



    let obj2 = {};
    obj2.result = "success";
    let tmp21={},tmp22={},tmp23 = {},tmp24 = {};
    obj2.json = [tmp21,tmp22,tmp23,tmp24];
    tmp21.id = "21";
    tmp21.image = "blue-2564660_1920.jpg";
    tmp21.headline = "アウトドアスタイル";
    tmp21.sub_headline = "日常でも快適に着られるアウトドアスタイルファッション";

    tmp22.id = "22";
    tmp22.image = "people-2563491_1920.jpg";
    tmp22.headline = "UGスタイル";
    tmp22.sub_headline = "UGで自分らしく自由なスタイルを";

    tmp23.id = "23";
    tmp23.image = "hip-hop-1209499_1920.jpg";
    tmp23.headline = "街角スタイル";
    tmp23.sub_headline = "街へでかけよう、ファッションを楽しもう";

    tmp24.id = "24";
    tmp24.image = "sunset-1282282_1920.jpg";
    tmp24.headline = "夏の特別コレクション";
    tmp24.sub_headline = "より快適に、より心地よいライフスタイルを";


    totalrr.contents.status = 200;
    totalrr.contents.body = obj2;

    response.render('top',{ 
              meta:totalmeta,
              content1: totalrr.title.body,
              content2: totalrr.contents.body});

  }

  /*	---------------------------------------------------------------------/
   *	debug#1 winter
   *	--------------------------------------------------------------------*/
  function debug2(request,response) {
    let obj1 = {};
    obj1.result = "success";
    let tmp11={},tmp12={};
    obj1.json =[tmp11,tmp12];
    tmp11.id = "11";
    tmp11.image = "cold-1284029_1920.jpg";
    tmp11.headline = "冬の空でも快適に";
    tmp11.sub_headline = "気軽なダウン、UGスタイル";

    tmp12.id = "12";
    tmp12.image = "cold-1284028_1920.jpg";
    tmp12.headline = "子供たちの冬休みは？";
    tmp12.sub_headline = "雪山でも暖かく、UGスタイル";

    totalrr.title.status = 200;
    totalrr.title.body = obj1;

    let obj2 = {};
    obj2.result = "success";
    let tmp21={},tmp22={},tmp23 = {};
    obj2.json = [tmp21,tmp22,tmp23];
    tmp21.id = "21";
    tmp21.image = "fog-3914967_1920.jpg";
    tmp21.headline = "冬の朝";
    tmp21.sub_headline = "厳寒の中でも快適で暖かいスタイルファッション";

    tmp22.id = "22";
    tmp22.image = "fashion-1063100_1920.jpg";
    tmp22.headline = "UGスタイル";
    tmp22.sub_headline = "UGで自分らしく自由なスタイルを";

    tmp23.id = "23";
    tmp23.image = "covering-face-1149200_1920.jpg";
    tmp23.headline = "雪山スタイル";
    tmp23.sub_headline = "雪山へでかけよう、ファッションを楽しもう";


    totalrr.contents.status = 200;
    totalrr.contents.body = obj2;

    response.render('top',{ 
              meta:totalmeta,
              content1: totalrr.title.body,
              content2: totalrr.contents.body});

  }



  /*	---------------------------------------------------------------------/
   *	main
   *	--------------------------------------------------------------------*/
  //debug1(request,response);
  //debug2(request,response);
  serial();
  //parallel();

  /*	---------------------------------------------------------------------/
   *	promise : serial
   *	--------------------------------------------------------------------*/
  function serial () {
      let promise = Promise.resolve();
      promise
          .then(call_title.bind(this,totalrr))
          .then(call_contents.bind(this,totalrr))
          .then(render_page);
  }

  /*	---------------------------------------------------------------------/
   *	promise : parallel
   *	--------------------------------------------------------------------*/
  function parallel () {
      let promise = Promise.resolve();

      function pp() {
          return Promise.all([
              call_title(totalrr),
              call_contents(totalrr)
          ]);
      }

      promise
          .then(pp)
          .then(render_page);
  }




  /*	---------------------------------------------------------------------/
   *	promise:function():call_title
   *	--------------------------------------------------------------------*/
  function call_title(totalrr) {
      return new Promise((resolve,reject) => {
          let options = {
              protocol: "http:",
              host: "backweb1",
              port: 8080,
              path: "/back1_title",
              method: "GET"
          };
          let rr = {};  
          rr.status = ''; 
          rr.body = 'Service backweb1 Unavailable';
          totalrr.title = rr;
          _call_backweb(resolve,reject,options,rr);
      });
  }

  /*	---------------------------------------------------------------------/
   *	promise:function():call_contents
   *	--------------------------------------------------------------------*/
  function call_contents(totalrr) {
      return new Promise((resolve,reject) => {
          var options = {
              protocol: "http:",
              host: "backweb1",
              port: 8080,
              path: "/back1_contents",
              method: "GET"
          };
          let rr = {};  
          rr.status = ''; 
          rr.body =  'Service backweb1 Unavailable';
          totalrr.contents = rr;
          _call_backweb(resolve,reject,options,rr);
      });
  }

  /*	---------------------------------------------------------------------/
   *	promise:function():render_page
   *	--------------------------------------------------------------------*/
  function render_page () {
      console.log("title:" + totalrr.title.body);
      console.log("contents:" + totalrr.contents.body);
      return new Promise((resolve,reject) => {
          response.render('top',{ 
              meta:totalmeta,
              content1: totalrr.title.body,
              content2: totalrr.contents.body});
          resolve("render complete");
      });
  }


  /*	---------------------------------------------------------------------/
   *	common:function():http get
   *	--------------------------------------------------------------------*/
  function _call_backweb(resolve,reject,options,rr) {
      const req = http.request(options,(res)=>{
          let body = '';
          rr.status = res.statusCode;
          res.setEncoding("utf-8");
          res.on("data",(chunk) => {
              body += chunk;
          });
          res.on("end",(chunk)=>{
              console.log(body);
              try {
                rr.body = JSON.parse(body);
              } catch(error) {
                let obj ={};obj.json=[];
                rr.body = obj;
              }
              resolve(rr);
          });
      });
      req.on('error',(error) => {
        console.log(error.message);
        let obj ={};obj.json=[];
        rr.body = obj;
        resolve(rr);
      });
      req.end();
  }

});



/*	--------------------------------------------------------------------------/
*	ルーティング：デバッグ用
*	-------------------------------------------------------------------------*/
router.get('/back1', function (request, response) {
  console.log("back11111111");
  response.send('{"back-1-key01:value01,key02:value02}');
});

router.get('/back2', function (request, response) {
  console.log("back222222");
  response.send('{"back-2-key01:value01,key02:value02}');
});

router.get('/boot', function (request, response) {
  response.render('boot',{});
});

router.get('/boot2', function (request, response) {
  response.render('boot2',{});
});

module.exports = router;


