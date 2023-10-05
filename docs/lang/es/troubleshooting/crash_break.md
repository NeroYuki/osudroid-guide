{% include other_lang.md %}

#### El juego crashea cuando empieza una espera significativamente larga dentro de un mapa

Esto ocurre en versiones anteriores a la version 1.6.8, por lo que deberia arreglarse simplemente actualizando el juego a la ultima version disponible.

Sin embargo, si te interesa:
<!--Explaining why happened and how to fix the problem on older versions just as a fun fact-->
Si estabas usando una skin, yendo a la carpeta de la misma y eliminando los archivos de sonido de "sectionPass" y "sectionFail" podia arreglar este problema, debido a que cualquier archivo de audio de 0 bytes o 44 bytes de tamaño podian crashear el juego en determinadas circunstancias, por lo tanto era recomendado eliminar cualquier archivo de audio con esos tamaños en una skin.

<!-- Don't touch this part thank you -->
{% include bottom_nav.md %}