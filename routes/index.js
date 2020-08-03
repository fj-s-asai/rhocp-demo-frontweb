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

// デフォルトルーティング
router.get('/top', function (request, response) {
	
	
	let totalrr = {};
	totalrr.backweb1 = {};
	totalrr.backweb1.body = '';
	totalrr.backweb1.status = '';
	
	totalrr.backweb2 = {};
	totalrr.backweb2.body = 'backweb2dayo';
	totalrr.backweb2.status = '';
	
	let promise = Promise.resolve();
	promise
		.then(call_backweb1)
		.then((result) => {
			return new Promise(function(resolve, reject){
				console.log("1.status code : " + result.status);
				totalrr.backweb1 = result;
            	resolve(1);
			});
		})
		.then(call_backweb2)
		.then((result) => {
			return new Promise(function(resolve, reject){
				console.log("1.status code : " + result.status);
				totalrr.backweb2 = result;
            	resolve(2);
			});
		})
	
		.then(render_page)
		.then((result) => {
			return new Promise(function(resolve, reject){
				resolve(3);
			});
		});
	
	
	function call_backweb1() {
		return new Promise((resolve,reject) => {
			var options = {
				protocol: "http:",
				host: "localhost",
				port: 8080,
				path: "/back1",
				method: "GET"
			};
			const req = http.request(options,(res)=>{
				let rr = {};
				var body = '';
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
			req.end();
		});
	}
	
	
	function call_backweb2() {
		return new Promise((resolve,reject) => {
			var options = {
				protocol: "http:",
				host: "localhost",
				port: 8080,
				path: "/back2",
				method: "GET"
			};
			const req = http.request(options,(res)=>{
				let rr = {};
				var body = '';
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
			req.end();
		});
	}
	
	
	
	
	
	
	function render_page () {
		return new Promise((resolve,reject) => {
			response.render('page',{ 
				title:'page title',
				back1: totalrr.backweb1.body,
				back2: totalrr.backweb2.body});
			resolve("render complete");
		});
	}

});

		
		

router.get('/back1', function (request, response) {
	console.log("back11111111");
	response.send('{"back-1-key01:value01,key02:value02}');
});

router.get('/back2', function (request, response) {
	console.log("back222222");
	response.send('{"back-2-key01:value01,key02:value02}');
});



module.exports = router;


