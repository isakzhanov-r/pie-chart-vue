window.axios = require('axios');

try {
    window._ = require('lodash');
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
    require('materialize-css')
} catch (e) {
    console.log(e);
}
