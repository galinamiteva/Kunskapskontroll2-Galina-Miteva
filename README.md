# Kunskapskontroll2-Galina-Miteva
Ett simple weather app som använder information från APIn https://openweathermap.org. 

I  HTML filen finns två huvudsakliga element: en search-box med Input och submit button och container som innehåller alla viktig information om  deskription, väderikon, temperatur med temperatur icon ,vindhastighet och luftfuktighet
1. JS filen börjar med några variabler, som är nödvändig. Den första funktionen  getSearchMethod definierar submit metoden: är det på namn eller på ZIP code . Jag kunde inte söka något bra funktion som kan kolla på ZIPen  - det här är lite simple. Den här funktionen används i den andra funktionen. 
2. Den andra funktionen searchWeather använder fetch och catch . Responsen från APIn används från 3 olika funktioner, medan catch svarar på information om det finns något fel i namnet som användaren anger. Om finns något fel dukar upp kort meddelande som informerar om felet
3. Funktionen INTO använder information från APIn och genom switch cases byter backgrounden på bodyn i samband med weather-icon. Den här funktionen sätter också allt information i weathers containaren (deskription , väderikon, temperatur med temperatur icon ,vindhastighet och luftfuktighet)

4. Det nästa funktionen setPositionForWeather sätter dynamisk positionen på weathers container , eftersom i början , när innehållet är tomt, containaren är hidden. Funktionen kalkylerar positionen i centern och lite uppåt. 

5. Funktionen addTemperatureIcon sätter en simpel temperatur icon, som bytts i samband med information från APIn för temperaturen. 
6. Funktionen changeColor bytar background color på submitbuttonen  i samband med information från APIn för temperaturen (från dark blå till оrangegult )
7. I sista steg satte jag eventListener på submitbuttonen och funktionen in kollar på användarens input-value

