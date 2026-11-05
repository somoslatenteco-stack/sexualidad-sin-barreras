# Sexualidad Sin Barreras — versión 3.0

Aplicación educativa interactiva sobre información, autonomía y derechos sexuales y reproductivos, dirigida principalmente a personas adultas con discapacidad física, sus familias y personas que acompañan sus procesos.

## Novedades de la versión 3.0

- **Ruta de aprendizaje personalizada:** selección del tema de interés y nivel de acercamiento; genera un recorrido sugerido y flexible.
- **Simulador de situaciones reales:** escenarios de consulta, privacidad y comprensión de información, con respuesta y explicación.
- **Biblioteca visual del cuerpo humano:** recurso esquemático con secciones de anatomía, autocuidado y salud sexual.
- **Guía de consultas médicas accesibles:** lista de preparación, preguntas sugeridas y herramienta para copiar las necesidades y preguntas elegidas.
- **Centro multimedia accesible:** textos de lectura fácil, lectura en voz alta mediante el navegador y transcripciones.

Se conservan los módulos y actividades de la versión anterior. El progreso local continúa guardándose en el navegador mediante localStorage.

## Requisitos

- Node.js 18 o superior.
- npm.

## Instalación y ejecución

```bash
npm install
npm run dev
```

## Compilar para producción

```bash
npm run build
npm run preview
```

## Accesibilidad y alcance

La aplicación mantiene controles de tamaño de texto y alto contraste, navegación por teclado, etiquetas accesibles y alternativas de lectura. La voz depende de las funciones de síntesis de voz del navegador. El centro multimedia de esta entrega incluye audio generado por el navegador y transcripciones; los videos subtitulados, audiodescripción y contenidos en Lengua de Señas Colombiana quedan identificados como una siguiente incorporación, para no presentar materiales inexistentes como disponibles.

El contenido es educativo y no sustituye valoración, diagnóstico ni atención profesional. Los contenidos anatómicos son esquemáticos y no deben utilizarse para autodiagnóstico.


## Versión 3.1 — Biblioteca visual interactiva

- Sustituye la silueta genérica por una biblioteca visual con ilustraciones SVG educativas.
- Incluye vistas de cuerpo general, movimiento, intimidad y bienestar, autocuidado y salud sexual.
- En Anatomía permite cambiar entre cuerpo general y esquemas simplificados de los sistemas reproductores femenino y masculino.
- Los elementos seleccionables actualizan explicaciones en pantalla y cuentan con etiquetas accesibles.
- Los diagramas son esquemáticos, no representan todas las variaciones anatómicas y no sustituyen la orientación profesional.
