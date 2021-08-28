// ==UserScript==
// @name         tumblerCTAremover
// @namespace    jgfdcdjfgkhvjfvgjasda
// @version      2.0
// @description  Removes Tumblr's "Never miss a post from" "Download the App" Reminder
// @author       Lutofisk
// @match        http://*.tumblr.com/*
// @match        https://*.tumblr.com/*
// @match        http://www.tumblr.com/*
// @match        https://www.tumblr.com/*
// @grant        none
// ==/UserScript==

document.getElementsByClassName('tmblr-iframe tmblr-iframe--app-cta-button tmblr-iframe--loaded')[0].remove(); 
