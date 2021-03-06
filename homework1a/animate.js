"use strict";
/*global $, jQuery*/
/*
    Brian de Raad
    bderaad1@my.smccd.edu
    CIS 128 OLH
    homework1a - animate.js
    Add a small piece of jQuery in your page that you delivered for Homework 1
    2020-02-17
*/
$(document).ready(function() {
    $("#animate").click(function() {
        $("header h1").animate(
            {"font-size": "250%", left: "+=200"}, 4000,
            function() {
                $("header h1").css("color", "#f37736");
                $("main img").css({border: '8px solid #f37736'});
            } // end callback()
        ); // end animate()
        $("header h1").animate(
            {"font-size": "170%", left: "-=200"}, 3000,
            function() {
                $("header h1").css("color", "#800000");
                $("main img").css({border: 'none'});
            } // end callback()
        ); // end animate()      
    }); // end click()
}); // end ready()