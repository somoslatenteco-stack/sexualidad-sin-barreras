# Sexualidad Sin Barreras — versión 3.4

Aplicación educativa accesible sobre información, autonomía y derechos sexuales y reproductivos.

## Mejoras de la versión 3.4
- La infografía anatómica ilustrada se presenta en la pestaña Vista general.
- La sección Anatomía permite seleccionar y consultar información de los sistemas reproductores femenino y masculino.
- Las tarjetas de Autocuidado (Higiene personal, Bienestar y Controles de salud) son interactivas y muestran contenido específico.
- Las tarjetas de Salud sexual (Anatomía reproductiva, Prevención y Decisiones informadas) son interactivas y muestran contenido específico.
- Se añadieron estados seleccionados y foco visible para navegación con teclado.

## Desarrollo
Requisitos: Node.js y npm.

```bash
npm install
npm run dev
```

Para compilar: `npm run build`.

La información es educativa y no sustituye una consulta individual con profesionales de salud.


## Versión 3.5 – Biblioteca anatómica por imágenes independientes
- Se separaron las ilustraciones de cuerpo general, sistema reproductor femenino y sistema reproductor masculino en archivos PNG independientes dentro de `public/`.
- En Vista general y Anatomía, cada ilustración tiene una tarjeta seleccionable y muestra su propia imagen y explicación.
- Se mantiene la navegación y el contenido de Autocuidado y Salud sexual.
