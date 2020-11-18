# Kunskapskontroll2-Galina-Miteva
Ett simple weather app som använder information från APIn https://openweathermap.org. 

I  HTML filen finns två huvudsakliga element: en search-box med input och submit button samt container som innehåller 
alla viktig information om  deskription, väderikon, temperatur med temperatur icon, vindhastighet och luftfuktighet.
CSS filen  innehåler all information om stylen och appen är med responsiv disain.

1. JS filen börjar med två variabler, som är nödvändiga. Den första funktionen searchWeather använder fetch och catch . Responsen från APIn används från 3 olika funktioner, medan catch svarar på information om det finns något fel. Om finns fel i namnet som användaren anger dukar upp kort meddelande som informerar om felet.

2. Funktionen INTO använder information från APIn och genom switch cases byter backgrounden på bodyn i samband med weather-icon. Den här funktionen sätter också allt information i weathers containaren (deskription , väderikon, temperatur med temperatur icon ,vindhastighet och luftfuktighet)

3. Det nästa funktionen setPositionForWeather sätter dynamisk positionen på weathers container , eftersom i början , när innehållet är tomt, containaren är hidden. Funktionen kalkylerar positionen i centern och lite uppåt. 

4. Funktionen addTemperatureIcon sätter en simpel temperatur icon, som bytts i samband med information från APIn för temperaturen. 

5. Funktionen changeColor byter background color på submitbuttonen  i samband med information från APIn för temperaturen (från dark blå till оrangegult ).

6. I sista steg satte jag eventListener på submitbuttonen och funktionen in kollar på användarens input-value

