# 🎵 YT Music Desktop Wrapper  

Aplicación de escritorio creada con [Electron](https://www.electronjs.org/) que permite usar **YouTube Music** en una ventana nativa para PC.  
Este proyecto **no es oficial** ni está afiliado a Google o YouTube.  

---

## 🚀 Características  
- Reproduce música de YouTube Music en una app de escritorio.  
- Ventana dedicada sin distracciones del navegador.  
- Compatible con Windows (se puede empaquetar en `.exe`).  
- Fácil de modificar y extender con Electron.  

---

## 📦 Instalación  
Clona este repositorio y entra a la carpeta:  

```bash
git clone https://github.com/tuusuario/yt-music-desktop-wrapper.git
cd yt-music-desktop-wrapper
```

Instala las dependencias:  
```bash
npm install
```

Ejecuta en modo desarrollo:  
```bash
npm start
```

Empaqueta en modo portable:  
```bash
npm run package
```

Crea un instalador (`.exe` en Windows):  
```bash
npm run make
```

---

## 🛠️ Personalización  
- El ícono de la app se encuentra en `assets/icon.ico`.  
- Puedes modificar la ventana editando `main.js`.  
- En `package.json` puedes cambiar nombre, versión y configuración de la app.  

---

## ⚠️ Descargo de responsabilidad  
Este proyecto es un **wrapper no oficial** de YouTube Music creado únicamente con fines **educativos y personales**.  
- No está afiliado, asociado, autorizado, respaldado ni mantenido por Google LLC o YouTube.  
- Todo el contenido mostrado dentro de la aplicación proviene directamente de [YouTube Music](https://music.youtube.com/).  
- El código aquí publicado está bajo licencia [MIT](./LICENSE), pero **YouTube Music pertenece a Google LLC**.  

---

## 📜 Licencia  
Este proyecto está bajo licencia [MIT](./LICENSE).  
Puedes usar, modificar y distribuir este código libremente, respetando siempre los términos de YouTube Music.  
