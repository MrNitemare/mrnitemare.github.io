"use strict";
/*global $, jQuery*/
/*
    Brian de Raad
    bderaad1@my.smccd.edu
    CIS 128 OLH
    homework1a - animate.js
    Add a small piece of jQuery in your page that you delivered for Homework 1
    2024-02-12
*/
$(document).ready(function() {
    $("#animate").click(function() {
        $("header h1").css("color", "#f37736");
        $("main img").css({border: '8px solid #f37736'});
        $("header h1").animate({"font-size": "250%", left: "+=200"}, 4000);
        $("header h1").animate({"font-size": "170%", left: "-=200"}, 3000);
    }); // end click()
}); // end ready()