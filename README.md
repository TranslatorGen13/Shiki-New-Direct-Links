## Функционал
Добавляет прямые ссылки для просмотра аниме в раздел «На других сайтах» на странице аниме shikimori.
Текущий список ссылок:
- **Animelib** — ссылки ведут на рабочие страницы в большинстве случаев, однако если на сайт аниме добавлено вручную, а не получены с shikimori;
- **ReYohoho** — работает лучше официального расширения, т.к. для генерации старается использовать id Кинопоиска, ссылаясь на более полные страницы;
- Приложение **ReYohoho** — работает только при наличии ссылки на Кинопоиск, аналог кнопки «Открыть в приложении» на оригинальных сайте;
В дальнейшем список возможно пополнится
## Установка
1. Установите [Tampermonkey](https://www.tampermonkey.net/index.php) (магазины расширений [Chrome](https://chromewebstore.google.com/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/), [Firefox Mobile](https://addons.mozilla.org/ru/android/addon/tampermonkey/), [Opera и Яндекс Браузер](https://addons.opera.com/en/extensions/details/tampermonkey-beta/), [Edge](https://microsoftedge.microsoft.com/addons/detail/iikmkjmpaadaobahmlepeloendndfphd)(для мобильной версии Edge следует перейти в `Расширения > Tampermonkey > Получить` ) )
2. Нажмите на иконку расширения Tampermonkey или дождитесь открытия сайта `www.tampermonkey.net`
3. [Установить скрипт](https://raw.githubusercontent.com/TranslatorGen13/Shiki-New-Direct-Links/refs/heads/main/Shiki%20New%20Direct%20Links%20(Animelib-ReYohoho-ReYohoho%20App).user.js) – должно открыться окно установки скрипта в Tampermonkey, а не загрузка файла на компьютер. Если окно не открывается, выполните пункт 2.
4. Если вы используете десктопный браузер на движке [Chrome](https://www.tampermonkey.net/faq.php#Q209) (например Яндекс Браузер, Opera, Eagle), потребуется включить **режим разработчика** в меню расширений. Для этого вставьте в адресную строку `chrome://extensions/` и переключите переключатель **«Режим разработчика»** (в правом верхнем углу или в левом нижнем для Edge).

Скрипт основан на **[Shiki New Anime Links (Ruracker-MangaLib-Nyaa-Other)](https://openuserjs.org/scripts/Chortowod/Shiki_New_Anime_Links_(RurackerMangaLibNyaaOther))**, написанный Chortowod и может использоваться совместно с ним. Также для настроек используется  скрипт [chtw_settings](https://gist.github.com/Chortowod/814b010c68fc97e5f900df47bf79059c) 
