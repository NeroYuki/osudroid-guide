---
title: osu!droid en la Tarjeta SD
description: Una guia sobre como usar tu Tarjeta SD en osu!droid
---

{% include other_lang.md %}

**IMPORTANTE: Debido a cambios recientes en android se esta haciendo mas dificil acceder al almacenamiento externo. El metodo que se describe abajo deberia funcionar hasta al menos Android 12, puede no llegar a funcionar en futuras versiones de Android**

Desde tu Tarjeta SD, porfavor anota su ID (normalmente algo como "xxxx-xxxx" siendo X una letra o numero). Te recomiendo usar ZArchiver para verlo, pero cualquier explorador medio decente deberia de funcionar. Despues, crea una carpeta con el siguiente nombre "ru.nsu.ccfit.zuev.osuplus" dentro de Android/media en la tarjeta SD (Si no existe Android/media crealas, primero crea Android y luego dentro de esa, crea media)

*Recuerda usar exactamente el nombre de carpeta que te hemos dicho aca, si no, puede no funcionar*

.

Desde osu!droid, ve a Options -> Library -> Beatmap location y mete esto /storage/{xxxx-xxxx}/Android/media/ru.nsu.ccfit.zuev.osuplus

*No cambies nada mas de las rutas, solo los mapas pueden ponerse dentro de la Tarjeta SD*

*Si ese directorio no funciona para ti, reemplaza media con data (tanto la carpeta creada como el valor en la opcion dentro del juego, pero con eso, si borras el juego, la carpeta de mapas se borrara por completo)*

{% include bottom_nav.md %}
