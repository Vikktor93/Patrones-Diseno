# Patrones de Diseño - Taller de Programación Aplicada

Este repositorio contiene material práctico para la asignatura de **Taller de Programación Aplicada** de la carrera de Ingeniería Civil en Informática, ULagos.

El objetivo es aplicar soluciones probadas y reutilizables a problemas comunes de diseño de software, construyendo sobre los fundamentos de la Programación Orientada a Objetos.

## Tecnologías Utilizadas
- **Lenguaje de Programación:** [TypeScript](https://www.typescriptlang.org/)
- **Runtime:** [Deno](https://deno.land/)
- **Editor:** [Visual Studio Code](https://code.visualstudio.com/) o [Firebase Studio](https://studio.firebase.google.com/)

## Estructura del Material
Cada patrón de diseño se organiza en su propia subcarpeta con:
1. `ejemplo.ts`: Un ejemplo comentado que explica el propósito y la mecánica del patrón.
2. `tarea.ts`: Una actividad práctica donde deberás completar o implementar el patrón según un requerimiento específico.

## Cómo ejecutar los ejemplos
Asegúrate de tener instalado Deno y la extensión de Deno en VS Code. Para ejecutar un ejemplo, usa el siguiente comando en tu terminal:

```bash
deno run nombre_del_archivo.ts
```

## Contenidos
- **Creacionales:** Mecanismos de creación de objetos que aumentan la flexibilidad y la reutilización del código.

- **Estructurales:** Cómo ensamblar objetos y clases en estructuras más grandes.

- **De Comportamiento:** Comunicación efectiva y asignación de responsabilidades entre objetos.

## Estructura del Repositorio

```
/patrones-diseno
├── Creacionales/           # Patrones de creación (Builder, Singleton, Factory Method, etc.)
│   ├── builder/
│   │   ├── example.ts      # Código del ejemplo explicado
│   │   └── task.ts         # Tarea para el estudiante
├── Estructurales/          # Patrones de estructura (Adapter, Decorator, Facade, etc.)
├── De-comportamiento/      # Patrones de comportamiento (Strategy, Observer, Command, etc.)
├── README.md               # Guía general del repositorio
└── deno.json               # Configuración del runtime Deno
```