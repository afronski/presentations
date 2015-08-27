'use strict';

var bespoke = require('bespoke'),
    keys = require('bespoke-keys'),
    touch = require('bespoke-touch'),
    pdf = require('bespoke-pdf'),
    bullets = require('bespoke-bullets'),
    backdrop = require('bespoke-backdrop'),
    scale = require('bespoke-scale'),
    hash = require('bespoke-hash'),
    progress = require('bespoke-progress'),
    nebula = require('bespoke-theme-nebula'),
    ga = require('bespoke-ga'),
    analytics = require('bespoke-analytics');

bespoke.from('article', [
    nebula(),
    keys(),
    touch(),
    pdf(),
    bullets('li, .bullet'),
    backdrop(),
    scale(),
    hash(),
    progress(),
    ga({ trackingId: '' }),
    analytics(),
]);

require('prism');
