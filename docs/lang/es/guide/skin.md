---
title: Customizando como se ve osu!droid
description: Una guia para customizar como se ve la interfaz (y el gameplay) de osu!droid
---

{% include other_lang.md %}

### 0. Opciones gráficas básicas explicadas y recomendaciones

- **Calidad de fondo:** Haz que el fondo sea un desastre borroso en el juego para una mejora de rendimiento casi insignificante.
- **Brillo de fondo:** Exactamente lo opuesto de fondo oscuro en osu! PC, donde 0 es negro absoluto y 100 es el brillo total de fondo.
- **Seleccionar skin:** Ver la siguiente parte.
- **Mantener la relación de aspecto del fondo:** Hace lo que dice, en lugar de extender el fondo para llenar la pantalla.
- **Medidor de error de golpe:** Esta barra muestra cuán preciso eres en el tiempo al golpear notas en el juego; la barra debería ser autoexplicativa (espero).
- **Estilo de spinner:** Por favor, usa ~~moderno~~ clásico.
    - *Nota:* La forma en que funciona el tipo de spinner en el juego es un poco extraña. Pero en general, el spinner moderno permite al jugador girar ANTES de que el spinner clásico lo haga. En teoría, puedes puntuar más puntos de spinner de esta manera. Sin embargo, debido a que todas las demás hit circles (y sliders) no se pueden golpear durante el spinner, habrá casos en los que será literalmente imposible golpear notas antes de un spinner si se usa el spinner moderno. Así que, por tu propia seguridad, usa el clásico.
- **Forzar mostrar el primer círculo de aproximación:** Hace lo que dice, solo en el modo Hidden.
- **Ocultar el cartel de repetición, Ocultar UI de juego:** Hace lo que dice.
- **Skins de beatmap:** Los beatmaps pueden tener elementos de skin específicos adjuntos a ellos; habilitar esta opción cargará estos elementos de skin si están disponibles. Se recomienda desactivarlo a menos que el beatmap insista en activarlo.
- **Combo burst:** Muestra *anime* si el jugador alcanza un cierto conteo de combo. Se recomienda desactivarlo (TODO: añadir qué elemento es responsable de la gráfica).
- **FPS:** Muestra FPS, actívalo para ver cuán mal está funcionando el juego. ADICIONALMENTE, también muestra el desplazamiento promedio de tu golpe a todas las notas en el beatmap hasta ahora (ten en cuenta que esto difiere de osu! PC cuando el número en ms es el tiempo de fotograma).
- **Efecto complejo:** Se recomienda desactivarlo por razones de rendimiento.
- **Usar serpenteo en sliders:** Se recomienda activarlo para ayudar a la legibilidad en beatmaps con sliders pesados.
- **No cambiar el nivel de atenuación del fondo durante el descanso:** Hace lo que dice, se puede desactivar si eres sensible a la transición de fondo brillante.
- **Cursor:** Muestra el cursor en el juego.
    - *Nota:* El principal problema de mostrar el cursor en el juego es que el cursor tiene que ser dibujado en la pantalla y, por lo tanto, está limitado por la tasa de fotogramas del juego Y la tasa de refresco de la pantalla del dispositivo. Mientras que el juego ya maneja la entrada en un hilo de entrada separado que debería tener un tiempo de respuesta significativamente mejor. El cursor dibujado en la pantalla puede parecer retrasado respecto a donde debería estar.
- **Tamaño del cursor:** Ajusta lo que dice. Recomiendo un valor ligeramente más bajo que el predeterminado de 100 (yo uso 70).
- **Efecto de explosión:** Hace lo que dice (TODO: añadir qué elemento es responsable de la gráfica de explosión), se recomienda desactivarlo por razones de rendimiento y si eres sensible a luces y colores divertidos.
- **Efectos de partículas:** Básicamente para el rastro del cursor, pero no exactamente al efecto de osu! PC, impacto en el rendimiento insignificante, así que siéntete libre de tenerlo activado o desactivado.
- **Dither:** No hace nada.
    - *Nota:* Solía hacer lo que decía, a costa del rendimiento, por lo que siempre se recomendó desactivarlo. Pero cierta actualización rompió la configuración y ahora no hace nada.
- **Animación de triángulo de UI:** Hace lo que dice, solo en el menú, así que lo que prefieras realmente.
- **Color de combo:** Sobrescribir el color de combo predeterminado.
    - *Nota sobre el color de combo:* El color de combo en el juego es una opción heredada que solo reemplaza el color de combo predeterminado en el juego. Si el jugador habilita la opción de skins de beatmap anteriormente y el beatmap tiene un color de combo personalizado, esta opción será sobrescrita. Además, si `OverrideComboColors` en skin.json es verdadero, el color especificado en skin.json sobrescribirá TANTO el color de combo específico del beatmap como el color de combo predeterminado.
    
### 1. Como cargar una skin ya existente en el juego

Las skins en osu!droid son basicamente un conjunto de archivos quepueden cambiar la apariencia de osu!droid cambiando los assets graficos y de audio assets y a su vez con parametros especificos en un archivo llamado skin.json

Si ya jugaste osu! en PC, Buenas noticias! Las skins de pc son mayormente compatible con droid. Malas noticias! Algunos elementos pueden no funcionar. Tenlo en cuenta para cuando importes alguna skin del osu! de pc. O puedes usar un sitio como [https://tsukushi.site](https://tsukushi.site) (NO FUNCIONA LOL) para conseguir skins compatibles con osu!droid o hechas por jugadores de droid :D

Para importar una skin, la descargas del sitio que te guste. Puede estar en la extension .osk o .zip. Si esta en .zip (o .osk.zip porque aparentemente). Extrae el .zip usando algun explorador de archivos medio decente (mi recomendacion es ZArchiver). De otra forma renombra el .osk a .zip y haz exactamente lo mismo. Despues mueve la carpeta que has extraido a tu carpeta de skins de osu!droid, la estructura de archivos de tu carpeta de skins de osu!droid deberia estar de esta forma:

```
<Carpeta de skins (Por defecto se encuentra en osu!droid/Skin)>
  |-- <Skin 1>
  | |-- approachcircle.png
  | |-- approachcirlce@2x.png
  | |-- ...
  |-- <Skin 2>
    |-- approachcircle.png
    |-- approachcirlce@2x.png
    |-- ...
```

Perfecto, ya casi terminamos. Lo unico que queda es abrir el juego. Ve a Option > Graphics > Select Skin y selecciona la skin que has importado, deberia de tener el nombre de la carpeta que has importado.

### 2. Como crear una skin (Assets)

Usa un sitio como [osuskinner](https://osuskinner.com/) para que se te haga mas facil empezar a crear las skins seleccionando los elementos. Usa cualquier editor de imagenes que quieras (Por ejemplo: Photoshop, GIMP, Paint.NET en PC, __inserte apps de android aca__) para editar elementos y a su vez crear nuevos elementos

### 3. Como crear una skin (Skin.json y Skin.ini)

~~Echale un vistazo a la [guia de skin.json aca](https://github.com/EdrowsLuo/osudroidstrings/blob/master/wiki/how%20to%20use%20skin.json/en.md)~~ [DESACTUALIZADO Y EN INGLES]

Echale un vistazo al editor online de Skin.json hecho por Rian8337 [here](https://rian8337.github.io/skin-json-editor/) (que include una explicacion (en ingles) que explica lo que hace cada parametro)

*Nota:* El archivo [Skin.ini](https://osu.ppy.sh/wiki/en/Skinning/skin.ini) de osu! pc se puede usar pero se tratará de convertir al equivalente de skin.json.

{% include bottom_nav.md %}
    
