(function () {
  'use strict';

  angular
    .module('needs')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Needs',
      state: 'needs',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'needs', {
      title: 'List Needs',
      state: 'needs.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'needs', {
      title: 'Create Need',
      state: 'needs.create',
      roles: ['user']
    });
  }
}());
