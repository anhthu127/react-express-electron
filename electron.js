const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url')
const isDev = require('electron-is-dev');
// var portscanner = require('portscanner')

// require('../src/server/index.js');
let mainWindow;

function createWindow() {
  // portscanner.checkPortStatus(5984, '127.0.0.1', function (error, status) {
  //   // Status is 'open' if currently in use or 'closed' if available
  //   if (status === "open") {
  //     console.log("port is in use " + status)
  //   } else {
  //     console.log("port is in use " + status)
  //   }
  // })
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    nodeIntegration: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    },
    icon: './logo.png'
  });
  console.log(isDev);
  console.log(`${path.join(__dirname, 'public', 'index.html')}`);
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);


  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}
app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
