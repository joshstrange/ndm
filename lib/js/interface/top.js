/*global require*/
import angular from 'angular';
const moduleName = 'npm-ui.top-menu'
  , dialog = require('electron').remote.dialog;

angular.module(moduleName, [])
.controller('TopMenuController', /*@ngInject*/ function TopMenuController($rootScope, $log, npm) {

  const unregisterLeftBarSelectProjectListener = $rootScope.$on('left-bar:select-project', (eventInformation, payload) => {

    if (payload &&
      payload.path) {

      this.projectPath = payload.path;
    }
  });

  this.installPackage = (packageName, packageKind) => {

    this.showPackageInstallPrompt = false;
    npm.npmInFolder(this.projectPath)
      .catch(error => dialog.showErrorBox(`Configuring npm for installing ${packageName}...`, error))
      .then(npmInFolder =>
        npmInFolder.install({
          'name': packageName,
          'kind': packageKind
        })
        .then(() => $rootScope.$emit('left-bar:select-project', {
          'path': this.projectPath
        }))
        .catch(error => dialog.showErrorBox(`Installing ${packageName}...`, error)));
  };

  this.updatePackage = currentSelectedPackage => {

    npm.npmInFolder(this.projectPath)
      .catch(error => dialog.showErrorBox(`Configuring npm for updating ${currentSelectedPackage.name}...`, error))
      .then(npmInFolder =>
        npmInFolder.update(currentSelectedPackage)
        .then(() => $rootScope.$emit('left-bar:select-project', {
          'path': this.projectPath
        }))
        .catch(error => dialog.showErrorBox(`Updating ${currentSelectedPackage.name}...`, error)));
  };

  this.installLatest = currentSelectedPackage => {

    npm.npmInFolder(this.projectPath)
      .catch(error => dialog.showErrorBox(`Configuring npm for installing latest ${currentSelectedPackage.name}...`, error))
      .then(npmInFolder =>
        npmInFolder.installLatest(currentSelectedPackage)
        .then(() => $rootScope.$emit('left-bar:select-project', {
          'path': this.projectPath
        }))
        .catch(error => dialog.showErrorBox(`Installing latest ${currentSelectedPackage.name}...`, error)));
  };

  this.installVersionPackage = (currentSelectedPackage, specificVersion) => {

    this.showSpecificVersionPrompt = false;
    npm.npmInFolder(this.projectPath)
      .catch(error => dialog.showErrorBox(`Configuring npm for installing ${currentSelectedPackage.name}...`, error))
      .then(npmInFolder =>
        npmInFolder.install(currentSelectedPackage, specificVersion)
        .then(() => $rootScope.$emit('left-bar:select-project', {
          'path': this.projectPath
        }))
        .catch(error => dialog.showErrorBox(`Installing ${currentSelectedPackage.name}...`, error)));
  };

  this.uninstallPackage = currentSelectedPackage => {

    npm.npmInFolder(this.projectPath)
      .catch(error => dialog.showErrorBox(`Configuring npm for uninstalling ${currentSelectedPackage.name}...`, error))
      .then(npmInFolder =>
        npmInFolder.rm(currentSelectedPackage)
        .then(() => $rootScope.$emit('left-bar:select-project', {
          'path': this.projectPath
        }))
        .catch(error => dialog.showErrorBox(`Uninstalling ${currentSelectedPackage.name}...`, error)));
  };

  $rootScope.$on('$destroy', () => {

    unregisterLeftBarSelectProjectListener();
  });
});

export default moduleName;