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
 	 *	main
	 *	--------------------------------------------------------------------*/
	serial();
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
			response.render('page',{ 
				title:'page title',
				back1: totalrr.backweb1.body,
				back2: totalrr.backweb2.body});
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



module.exports = router;


