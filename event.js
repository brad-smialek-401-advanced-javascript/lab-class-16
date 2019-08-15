'use strict';

// what is 'events ??  singleton   one instance that is shared to all apps
const Ievent = require('events');

const event = new Ievent();

module.exports = event;