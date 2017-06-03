// ==UserScript==
// @name Flinch Bet
// @namespace #flinchbet
// @version 1
// @description Adds a script to twitch which allows you to bet on live streaming.
// @copyright 2017+, Flinch Bet <admin@flinchbet.com> (https://github.com/flinchbet), http://flinchbet.com
// @author kevupton <kevin@flinchbet.com> (https://github.com/kevupton)
// @icon https://raw.githubusercontent.com/flinchbet/extension-setup/master/icon.png
// @license MIT; http://opensource.org/licenses/MIT
// @license CC BY-NC-SA 3.0; http://creativecommons.org/licenses/by-nc-sa/3.0/
// @homepageURL http://flinchbet.com/
// @supportURL https://flinchbet.com/admin/support
// @contributionURL https://github.com/flinchbet/extension-setup
// @grant none
// @include http://*.twitch.tv/*
// @include https://*.twitch.tv/*
// @exclude http://api.twitch.tv/*
// @exclude https://api.twitch.tv/*
// @exclude http://tmi.twitch.tv/*
// @exclude https://tmi.twitch.tv/*
// @exclude http://*.twitch.tv/*/dashboard
// @exclude https://*.twitch.tv/*/dashboard
// @exclude http://chatdepot.twitch.tv/*
// @exclude https://chatdepot.twitch.tv/*
// @exclude http://im.twitch.tv/*
// @exclude https://im.twitch.tv/*
// @exclude http://platform.twitter.com/*
// @exclude https://platform.twitter.com/*
// ==/UserScript==

var script = document.createElement('script');

script.src = 'https://s3-ap-southeast-2.amazonaws.com/flinchbet/app.js';
script.id = 'flinchbet';

document.body.appendChild(script);