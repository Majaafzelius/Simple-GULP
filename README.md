## Moment 1 tom 4
av Maja Afzelius

Denna processens syfte är at underlätta utvecklandet av en webbsida genom att automatisera olika processer. Exempelvis att konkatinera och minimera filer och att förbereda filer för att publiceras på en webbserver. <br>

Jag har till denna uppgift använt Vs-code för kodning och följande gulp-paket: 
<ul>
    <li>Gulp Concat</li>
    <li>Gulp Uglify</li>
    <li>browser-sync</li>
    <li>Gulp sass</li>
    <li>Node sass</li>
</ul>

För att starta och köra programmet skrivs kommandot gulp i terminalen. <br>
browsersync körs automatiskt när koden startas vilket innebär att en liveserver öppnas i den föredragna browsern direkt.

De Tasks som körs i detta program är CopyHTML, JsTask, sassTask, picTask och WatchTask. Dessa ansvarar alla för att olika filer hanteras på rätt sätt. CopyHTML Hämtar alla html-filer och för över de till mappen pub, redo att publiceras. <br> 
JsTask slår ihop alla Js-filer till en main-fil och använder uglify för att pressa ihop koden så mycket som möjligt för att göra koden mer svårläslig. Tillslut flyttas main-filen till mappen js i publiceringsmappen. <br>
Sass-task gör om alla scss filer till css-filer. Sedan konkatineras de till en main.css fil och skickas till rätt map i publiceringsmappen.<br>
Pictask för enbart över jpg-filer till en pic-mapp i publiceringsmappen.<br>
Watchtasken kollar efter ändringar i filer för att se om ändringar behöver ske i publiceringsmappen eller om browsern behöver laddas om. <br>
Slutligen körs exports.default, i denna körs all funktioner och avslutas med watchtasken. Denna blir aldrig klar utan den är igång och håller koll på ändringar tills man stänger av gulp.