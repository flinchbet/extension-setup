// ==UserScript==
// @name Flinch Bet
// @namespace #flinchbet
// @version 1.0.1
// @description Adds a script to twitch which allows you to bet on live streaming.
// @copyright 2017+, Flinch Bet <admin@flinchbet.com> (https://github.com/flinchbet), http://flinchbet.com
// @author flinchbet <dev@flinchbet.com> (https://github.com/flinchbet)
// @icon https://raw.githubusercontent.com/flinchbet/extension-setup/master/icon.png
// @license MIT; http://opensource.org/licenses/MIT
// @updateURL https://github.com/flinchbet/extension-setup/raw/master/flinch-bet.user.js
// @homepageURL http://flinchbet.com/
// @supportURL https://flinchbet.com/admin/support
// @contributionURL https://github.com/flinchbet/extension-setup
// @grant none
// @include http://*.twitch.tv/*
// @include https://flinch.bet/*
// @include https://*.twitch.tv/*
// @exclude http://api.twitch.tv/*
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

window.FlinchExtension = {version: 1}

setTimeout(function () {

    var script = window.document.createElement('script');
    script.src = 'https://app.flinch.bet/app.js';
    script.id = 'flinchbet-script';

    if (!window.document.getElementById('flinchbet-script')) {
        window.document.body.appendChild(script);
    }

});
