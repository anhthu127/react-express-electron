export const electron = window.require('electron');
const electronImport = packageName => electron.remote.require(packageName);

module.exports = electronImport

