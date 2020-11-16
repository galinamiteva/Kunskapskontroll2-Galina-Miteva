# Kunskapskontroll2-Galina-Miteva
Ett simple weather app som använder information från APIn https://openweathermap.org. 

I  HTML filen finns två huvudsakliga elementer: en search-box med Input och submit buttong och container som innehåller alla viktig information om  description
väderikon, temperatur med temperatur icon ,vindhastighet och luftfuktighet
1. JS filen börjar med några variable, som är nödvändlig. Den första functionen  getSearchMethod definierar submit metoden: är det på namn eller på ZIP code . Jag kunde inte söka något bra function som kan kolla på ZIPen  - det här är lite simple. Den här functoinen används i den andra functionen. 
2. Den andra functionen searchWeather använder fetch och catch . Responsen från APIn använs från 3 olika functioner, medan catch svarar på information om det finns något fel i namnet som användaren anger. Om finns någåt fel dukar upp kort meddelande som informerar om felet
3. Functionen INTO använder information från APIn och genom switch cases bytar backgrounden på bodyn i samband med weather-icon. Den här functionen sätter också allt information i weathers containaren (description , väderikon, temperatur med temperatur icon ,vindhastighet och luftfuktighet)

4. Det nästa functionen setPositionForWeather sätter dinamisk positionen på weathers containar , eftersom i början , när innehålet är tomt, containaren är hidden. Functionen kalkulerar positionen i centern och lite uppåt. 

5. Functionen addTemperatureIcon sätter en simple temperature icon, som bytts i samband med information från APIn för temperaturen. 
6. Functionen changeColor bytar background color på submitbuttongen  i samband med information från APIn för temperaturen (från dark blå till оrangegult )
7. I sista steg satte jag eventListener på submitbuttongen och functionen in kollar på användarens input-value

