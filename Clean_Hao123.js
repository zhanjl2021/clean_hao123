// ==UserScript==
// @name         Clean_Hao123
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  净化hao123主页
// @author       babaloveyou
// @match        https://www.hao123.com/*
// @grant        none
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js

// ==/UserScript==

(function() {
    'use strict';
    var nodeIdArray = new Array("notice","noticeLink","pageMenu","hao123-govsite","layout-side","shortcut-box","box-famoussite","layout-hlbar","hao123-bottom");
    var nodeClassArray = new Array("coolsites-wrapper","g-ib layout-right","common-sites","g-ib layout-left","login__item--vip","hotsearchCon");
    for(var i=0;i<nodeIdArray.length;i++){
        var node = document.getElementById(nodeIdArray[i]);
        if(node!==null){
            node.parentNode.removeChild(node);
        }
    }
    for(var k=0;k<nodeClassArray.length;k++){
        var nodes = document.getElementsByClassName(nodeClassArray[k]);
        for(var j=0;j<nodes.length;j++){
            var node = nodes[j];
            if(node!==null){
                node.parentNode.removeChild(node);
            }
        }
    }
    document.getElementById("layout-content").setAttribute("class", "page-width");
    document.getElementsByClassName('js_bd site-bd site-hd0')[0].style.width="102%";
    document.getElementById('layout-content').style.width='102%';

    $(".header__inner").children().each(function(){
        if($(this).attr("class")!=="header__item--fr login-pan-mobile header--r1"){
            $(this).hide();
        }
    });
    $(".login__pop").css("height","350px");
    $(".hao123-search").css("padding-top",0);
})();
