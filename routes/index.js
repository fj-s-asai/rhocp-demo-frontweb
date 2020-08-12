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
	
	let totalrr = {};
	totalrr.backweb1 = {};
	totalrr.backweb2 = {};
  
  
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
      totalrr.backweb1.status = 200;
      totalrr.backweb1.body = obj1;
      
      
      
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
      
      
      totalrr.backweb2.status = 200;
      totalrr.backweb2.body = obj2;
      
      response.render('top',{ 
				title:'UG Style',
				content1: totalrr.backweb1.body,
				content2: totalrr.backweb2.body});
      
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
      
      totalrr.backweb1.status = 200;
      totalrr.backweb1.body = obj1;
      
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
      
      
      totalrr.backweb2.status = 200;
      totalrr.backweb2.body = obj2;
      
      response.render('top',{ 
				title:'UG Style',
				content1: totalrr.backweb1.body,
				content2: totalrr.backweb2.body});
      
    }
  
  
  
	/*	---------------------------------------------------------------------/
 	 *	main
	 *	--------------------------------------------------------------------*/
    //debug1(request,response);
    debug2(request,response);
    //serial();
	//parallel();
	
	/*	---------------------------------------------------------------------/
 	 *	promise : serial
	 *	--------------------------------------------------------------------*/
	function serial () {
		let promise = Promise.resolve();
		promise
			.then(call_backweb1.bind(this,totalrr))
			/*
			.then((result) => {
				return new Promise(function(resolve, reject){
					totalrr.backweb1 = result;
					resolve(1);
				});
			})
			.catch((error) => {
				console.log("backweb1:" + error.message);
				totalrr.backweb1 = error.result;
			})
			*/

			.then(call_backweb2.bind(this,totalrr))
			/*
			.then((result) => {
				return new Promise(function(resolve, reject){
					totalrr.backweb2 = result;
					resolve(2);
				});
			})
			.catch((error) => {
				console.log("backweb2:" + error.message);
				totalrr.backweb2 = error.result;
			})
			*/

			.then(render_page);
	}

	
	/*	---------------------------------------------------------------------/
 	 *	promise : parallel
	 *	--------------------------------------------------------------------*/
	function parallel () {
		let promise = Promise.resolve();
		
		function pp() {
			return Promise.all([
				call_backweb1(totalrr),
				call_backweb2(totalrr)
			]);
		}
		
		promise
			.then(pp)
			.then(render_page);
	}
	
	
	
	
	/*	---------------------------------------------------------------------/
 	 *	promise:function():call_backweb1
	 *	--------------------------------------------------------------------*/
	function call_backweb1(totalrr) {
		return new Promise((resolve,reject) => {
			let options = {
				protocol: "http:",
				host: "backweb1",
				port: 8080,
				path: "/back1",
				method: "GET"
			};
			let rr = {};  
			rr.status = ''; 
			rr.body = 'Service backweb1 Unavailable';
			totalrr.backweb1 = rr;
			catll_backweb(resolve,reject,options,rr);
		});
	}
	
	/*	---------------------------------------------------------------------/
 	 *	promise:function():call_backweb2
	 *	--------------------------------------------------------------------*/
	function call_backweb2(totalrr) {
		return new Promise((resolve,reject) => {
			var options = {
				protocol: "http:",
				host: "backweb2",
				port: 8080,
				path: "/back2",
				method: "GET"
			};
			let rr = {};  
			rr.status = ''; 
			rr.body =  'Service backweb1 Unavailable';
			totalrr.backweb2 = rr;
			catll_backweb(resolve,reject,options,rr);
		});
	}
	
	/*	---------------------------------------------------------------------/
 	 *	promise:function():render_page
	 *	--------------------------------------------------------------------*/
	function render_page () {
		return new Promise((resolve,reject) => {
			response.render('top',{ 
				title:'UG Style',
				content1: totalrr.backweb1.body,
				content2: totalrr.backweb2.body});
			resolve("render complete");
		});
	}
	
	
	/*	---------------------------------------------------------------------/
 	 *	common:function():http get
	 *	--------------------------------------------------------------------*/
	function catll_backweb(resolve,reject,options,rr) {
		const req = http.request(options,(res)=>{
			let body = '';
			rr.status = res.statusCode;
			res.setEncoding("utf-8");
			res.on("data",(chunk) => {
				body += chunk;
			});
			res.on("end",(chunk)=>{
				rr.body = body;
				resolve(rr);
			});
		});
		req.on('error',(error) => {
			console.log(error.message)
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


