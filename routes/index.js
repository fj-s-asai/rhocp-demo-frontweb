/*	--------------------------------------------------------------------------/
 *	author		: 
 *	module		：
 *											COPYRIGHT 
 *	-------------------------------------------------------------------------*/


/*	--------------------------------------------------------------------------/
 *	index.js
 *	-------------------------------------------------------------------------*/	

const express = require('express');
const router = express.Router();

// デフォルトルーティング
router.get('/page', function (request, response) {
    //response.render('index', { title: 'Sample Node.js', message: 'Hello there!' });
	response.render('page',{ title:'page title'});
});


module.exports = router;


