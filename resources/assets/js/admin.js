try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {}

// Admin scripts
require('./admin/index');