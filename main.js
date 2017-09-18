
/*
Date: 2017-09-18
Modified Date: 2017-09-18
Author: Chinatsu Kawakami
Description: This is the javascript file for calculator for division
*/

(function(){
	'use strict';

	var priceForm=document.getElementById('price');
    var numForm=document.getElementById('num');
    var btn =document.getElementById('btn');
    var result=document.getElementById('result');

    priceForm.addEventListener('click',function(){
       
       this.select();
         
       });

    numForm.addEventListener('click',function(){
       this.select();
    });
})();