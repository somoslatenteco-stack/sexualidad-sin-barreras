# Sexualidad sin barreras — versión 1.2

Aplicación educativa interactiva para personas adultas con discapacidad física.

## Funciones nuevas
- Lectura en voz alta de los módulos (voz disponible en el navegador), pausa y detener.
- Tres situaciones interactivas con decisiones y retroalimentación.
- Seguimiento local del avance de módulos y situaciones, sin cuenta.
- Indicador de progreso.
- Controles de tamaño de texto y alto contraste.
- Cuestionario de seis preguntas.
- Diseño adaptable y navegación accesible básica.

## Desarrollo
Requiere Node.js 18 o superior:
```bash
npm install
npm run dev
npm run build
```
En Vercel: preset Vite, build `npm run build`, output `dist`.

## Persistencia
El progreso se guarda en el almacenamiento local del navegador del dispositivo. No se sincroniza entre dispositivos ni constituye un registro académico.

## Nota
La lectura en voz alta depende de Speech Synthesis disponible en el navegador y el sistema operativo. Se recomienda probar con usuarios reales y tecnologías de asistencia antes de presentar el recurso como plenamente accesible.
