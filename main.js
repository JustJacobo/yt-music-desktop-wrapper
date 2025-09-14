// Proyecto no oficial - Wrapper para YouTube Music en escritorio
// Creado solo con fines educativos
const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: false
    }
  });

  // Carga YouTube Music
  win.loadURL("https://music.youtube.com/");
}

app.whenReady().then(createWindow);

// Para cerrar la app en Mac/Windows correctamente
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
