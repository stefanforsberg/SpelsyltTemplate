# SpelsyltTemplate

## Vad är det här?
Ett väldigt basic exempel på hur du kan sätta upp ett [phaser](https://phaser.io/)-projekt inför en spelsylt. Du får en hyffsat färdig dev och prod uppsättning och några exempel på grundläggande funktionalitet implementerat i phaser som brukar ingå i ett spelsylt (laddningsskärm, ladda assets, interagera med spelobjekt, styra saker med piltangenter och väldigt basic fysikmotorsaker) och även lite basala instruktioner om hur du laddar upp ditt spel på itch.io.

Ska absolut inte ses som någon form av best practice utan som ett snabbt sätt att komma igång och kanske vara med i sin första spelsylt? 🥳

Här finns ett projekt på itch med själva templateprojektet i detta repo: https://cykelkatalogen.itch.io/spelsylt-template-example

## Vad måste jag ha installerat?
Node.js

## Köra lokalt:
1. Klona projektet
2. Tjonga upp en terminal där du klonade projektet
3. Kör `npm install`
4. Kör `npm start`
5. Surfa till url:en som kommer upp (brukar vara http://localhost:1234). Borde se ut ungefär som bild nedan.

![image](https://github.com/stefanforsberg/SpelsyltTemplate/assets/358570/c28ca0ab-3829-44fa-867f-5a2f43c55be0)

Om du ändrar i filerna i src kommer den (via [parcel](https://parceljs.org/)) bygga om projektet och reloada din browser.

## Bygga till "produktion"
Kör kommandot `npm run build`. Denna kommer bygga i produktionsläge med lite olika optimieringar (minifierar etc etc, kolla mer på parcels dokumentation om du är intresserad eller vill fixa massa detaljer, jag brukar bara köra på default).

Resultatet av ditt bygge hamnar i mappen `prod`.

![image](https://github.com/stefanforsberg/SpelsyltTemplate/assets/358570/83bbd27b-d4c5-49f4-834f-ac92b201461c)

## Ladda upp till itch.io

För att ladda upp ditt projekt till itch.io (där själva spelsylten hålls) måste du först skaffa ett konto där.

1. Väl där kan du från din meny välja att lägga till ett nytt projekt 

![image](https://github.com/stefanforsberg/SpelsyltTemplate/assets/358570/910b8a72-6624-482b-97ee-54763dd01eff)

2. Sedan måste du skapa en zip-fil av filerna i prod mappen (se Bygga till "produktion")
3. Det viktiga i ditt projekt på itch är att se till att välja HTML på "Kind of projekt"
![image](https://github.com/stefanforsberg/SpelsyltTemplate/assets/358570/6bca84ce-1bf9-4789-ae97-d65e20434b1b)
4. Ladda upp din zip-fil och välja att denna ska vara spelbar i browsern
![image](https://github.com/stefanforsberg/SpelsyltTemplate/assets/358570/643a4ccf-3a7d-49a1-99b6-aa077c284e2e)

Ett tips är att inte vänta till sista dagen med att testa att ladda upp sitt projekt till itch för att märka att något inte riktigt fungerar och stressa med det i slutet av sylten. Jag skulle aldrig göra så men hände en kompis. Testa tidigt och ofta! Du kan bara välja att ladda upp nya versioner på liknande sätt som ovan 👍
