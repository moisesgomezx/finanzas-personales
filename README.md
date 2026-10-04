# 💰 Finanzas Personales

Aplicación web sencilla para registrar y controlar ingresos y gastos personales.

## 📌 Descripción

**Finanzas Personales** es una aplicación desarrollada como proyecto académico. Su objetivo es facilitar el control básico del dinero disponible mediante el registro de ingresos y gastos.

La aplicación calcula automáticamente el saldo actual y muestra un resumen de los movimientos registrados.

## 🚀 Funcionalidades

- Registrar ingresos.
- Registrar gastos.
- Calcular automáticamente el saldo.
- Mostrar el total de ingresos.
- Mostrar el total de gastos.
- Mostrar la cantidad de movimientos.
- Eliminar movimientos individuales.
- Eliminar todos los movimientos.
- Guardar la información automáticamente en el navegador mediante `localStorage`.
- Diseño adaptable para computador, tablet y celular.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage del navegador

## 📂 Estructura del proyecto

```text
finanzas-personales/
├── index.html
├── style.css
├── script.js
└── README.md
```

## ▶️ Cómo ejecutar la aplicación

No es necesario instalar dependencias.

1. Descarga o clona este repositorio.
2. Abre la carpeta del proyecto.
3. Abre el archivo `index.html` en un navegador.
4. Registra tus ingresos y gastos.

También puede ejecutarse utilizando una extensión como **Live Server** en Visual Studio Code.

## 💡 Cómo funciona

Cuando el usuario registra un movimiento, la aplicación guarda:

- Descripción.
- Valor.
- Tipo de movimiento.
- Fecha.

Los datos se almacenan en `localStorage`, por lo que permanecen disponibles al volver a abrir la aplicación en el mismo navegador.

El saldo se calcula con la siguiente fórmula:

**Saldo = Total de ingresos - Total de gastos**

## 👨‍💻 Proyecto académico

Proyecto desarrollado para demostrar el uso de tecnologías web básicas y el manejo de información mediante JavaScript.

## 📄 Licencia

Este proyecto fue creado con fines educativos.
