// ==UserScript==
// @name         Shiki New Direct Links (Animelib|ReYohoho|ReYohoho App)
// @description:Ru Добавляет прямые ссылки в список "На других сайтах" на сайте Shikimory
// @author       TranslatorGen13
// @namespace    http://shikimori.me/
// @version      0.0.1
// @match        *://shikimori.org/*
// @match        *://shikimori.one/*
// @match        *://shikimori.me/*
// @icon         https://www.google.com/s2/favicons?domain=shikimori.me
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shikimori.one
// @license      MIT
// @copyright    2025, TranslatorGen13
// @require      https://gist.githubusercontent.com/Chortowod/814b010c68fc97e5f900df47bf79059c/raw/chtw_settings.js

// ==/UserScript==
let settings = new ChtwSettings('Gen13NewDirectLinks', "Прямые ссылки на аниме")

function extractRegEx(string, regex) {
    const match = string.match(regex);
    return match ? match : null;
}

function initSettings() {
    settings.createOption('animeLibDL', 'AnimeLib (прямая ссылка)');
    settings.createOption('reyohohoDL', 'ReYohoho');
    settings.createOption('reyohohoApp', 'Запуск приложения ReYohoho');
}

function newLinks() {
    if (!location.href.includes("/animes/")) return false;
    if (!document.querySelector(".subheadline.m8") || !document.querySelector("meta[itemprop='alternativeHeadline']")) return false;

    //Переменные для сокращения
    let animeLibDL = 'https://v3.animelib.org/ru/anime/';
    let reYohohoDL = 'https://reyohoho-gitlab.vercel.app/';

    let bckgrSize = 'background-size: 19px 19px; -webkit-background-size: 19px 19px;';
    let style_anime_dl =`
    .b-external_link.official_site a:before { background-size: cover !important; }
    #reyohohoDL.b-link:before { background: url(https://reyohoho-gitlab.vercel.app/favicon.ico) no-repeat; }
    #reyohohoApp.b-link:before { background: url(https://reyohoho-gitlab.vercel.app/favicon.ico) no-repeat; }
    #animeLibDL.b-link:before { background: url(https://anilib.me//images/logo/al/favicon.ico) no-repeat; }

    #reyohohoDL.b-link:before,#reyohohoApp.b-link:before,#animeLibDL.b-link:before { ${bckgrSize}}
    `
    let title = document.querySelector("meta[property='og:title']").getAttribute('content');
    let titleRu = document.querySelector("meta[itemprop='alternativeHeadline']").getAttribute('content');
    let parent = document.querySelector(".subheadline.m8").parentElement;
    let baseNode = parent.childNodes[1];
    const shikiId = extractRegEx(window.location.pathname, /^\/animes\/[a-z]*(\d+)-/)[1];
    //Парсинг страницы в поисках ссылки на Кинопоиск
    let kinopoiskElem = document.getElementsByClassName('kinopoisk')[0]
    const kinopoiskId = (kinopoiskElem) ? (extractRegEx(kinopoiskElem.children[0].href, /\d+/)[0]): null;

    //Генератор части ссылки для Анимелиба
    let titleLink = title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
            .replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    //Вставка аниме в список
    if (location.href.includes("/animes/")){
        if (settings.getOption('animeLibDL') && !document.getElementById("animeLibDL")) {
            let animeLibDirectLink = baseNode.cloneNode(true);
            animeLibDirectLink.children[0].href = (animeLibDL + titleLink + '-anime').replace("--", '-');
            animeLibDirectLink.children[0].target = "_blank";
            animeLibDirectLink.children[0].id = "animeLibDL";
            animeLibDirectLink.children[0].textContent = "Animelib (прямая ссылка)";
            parent.insertBefore(animeLibDirectLink, parent.childNodes[1]);
        }
        if (settings.getOption('reyohohoApp') && !document.getElementById("reyohohoApp") && kinopoiskId){
            let reyohohoApp = baseNode.cloneNode(true);
            reyohohoApp.children[0].href ='reyohoho://#' + kinopoiskId;
            reyohohoApp.children[0].target = "_blank";
            reyohohoApp.children[0].id = "reyohohoApp";
            reyohohoApp.children[0].textContent = "Запустить приложение Reyohoho";
            parent.insertBefore(reyohohoApp, parent.childNodes[1]);
        }
        if (settings.getOption('reyohohoDL') && !document.getElementById("reyohohoDL")) {
            let reyohohoDL = baseNode.cloneNode(true);
            let link = reYohohoDL + (kinopoiskId ? ("movie/" + kinopoiskId) : ("shiki/shiki" + shikiId));
            reyohohoDL.children[0].href = link;
            reyohohoDL.children[0].target = "_blank";
            reyohohoDL.children[0].id = "reyohohoDL";
            reyohohoDL.children[0].textContent = "ReYohoho";
            parent.insertBefore(reyohohoDL, parent.childNodes[1]);
        }
        settings.addStyle(style_anime_dl);
    }

}
//Запуск после загрузки страницы
function ready(fn) {
    document.addEventListener('page:load', fn);
    document.addEventListener('turbolinks:load', fn);
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") fn();
    else document.addEventListener('DOMContentLoaded', fn);
}
ready(initSettings);
ready(newLinks);
