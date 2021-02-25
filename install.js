// The nodert bindings are in optional dependencies so that noble install works on every OS
// but will be checked here to make them compulsory for windows
if (require('os').platform() === 'win32') {
  const importPrefix = '@nodert-win10-cu/';
  // Note the load order here is important for cross-namespace dependencies.
  require(importPrefix + 'Windows.Foundation');
  require(importPrefix + 'Windows.Storage.Streams');
  require(importPrefix + 'Windows.Devices.Enumeration');
  require(importPrefix + 'Windows.Devices.Bluetooth.GenericAttributeProfile');
  require(importPrefix + 'Windows.Devices.Bluetooth');
  require(importPrefix + 'Windows.Devices.Bluetooth.Advertisement');
  require(importPrefix + 'Windows.Devices.Radios');
}