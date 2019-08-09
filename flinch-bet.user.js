// ==UserScript==
// @name Flinch Bet
// @namespace #flinchbet
// @version 1.0.3
// @description Adds a script to twitch which allows you to bet on live streaming.
// @copyright 2017+, Flinch Bet <admin@flinch.bet> (https://github.com/flinchbet), https://flinch.bet
// @author flinchbet <dev@flinch.bet> (https://github.com/flinchbet)
// @icon https://raw.githubusercontent.com/flinchbet/extension-setup/master/icon.png
// @license MIT; http://opensource.org/licenses/MIT
// @updateURL https://github.com/flinchbet/extension-setup/raw/master/flinch-bet.user.js
// @downloadURL https://github.com/flinchbet/extension-setup/raw/master/flinch-bet.user.js
// @homepageURL https://flinch.bet/
// @supportURL https://flinch.bet/f/support
// @contributionURL https://github.com/flinchbet/extension-setup
// @grant none
// @include http://*.twitch.tv/*
// @include https://*.twitch.tv/*
// @include https://staging.flinch.bet/*
// @exclude http://staging.api.twitch.tv/*
// @exclude https://api.twitch.tv/*
// @exclude http://tmi.twitch.tv/*
// @exclude https://tmi.twitch.tv/*
// @exclude http://*.twitch.tv/*/dashboard
// @exclude https://*.twitch.tv/*/dashboard
// @exclude http://chatdepot.twitch.tv/*
// @exclude https://chatdepot.twitch.tv/*
// @exclude http://player.twitch.tv/*
// @exclude https://player.twitch.tv/*
// @exclude http://im.twitch.tv/*
// @exclude https://im.twitch.tv/*
// @exclude http://platform.twitter.com/*
// @exclude https://platform.twitter.com/*
// ==/UserScript==

window.FlinchExtension = {version: '1.0.4'};

setTimeout(function () {

    var script = window.document.createElement('script');
    script.src = 'https://app.staging.flinch.bet/app.js';
    script.id = 'flinchbet-script';

    if (!window.document.getElementById('flinchbet-script')) {
        window.document.body.appendChild(script);
    }

});
