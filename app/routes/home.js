'use strict';

import Route from '@ember/routing/route';

var itemsList = [
  'item 1',
  'item 2',
  'item 3'
];
window.console.info('>> itemsList >>>', itemsList);

export default Route.extend({
  model() {
    return {
      itemsList
    };
  },
  actions: {
    addItem(index) {
      itemsList.push(`item ${index}`);
      this.refresh();
    }
  }
});
