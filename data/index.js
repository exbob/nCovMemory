var path = require('path');
var fs = require('fs-extra');
require.extensions['.csv'] = function(module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8');
};
const DATA = require('./data.csv');
const MEDIA_TRANSLATION = require('./media_translation.json');

module.exports = {
  DATA: {
    data: DATA,
    fetch_url:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQnlR_cNBel5NefYdsLtxdiro6KEl_SI9MyKDE_3pgBLHgfuySTZCFHeVufAZAkU-2MfaMO-ZyVtTxr/pub?gid=1097066541&single=true&output=csv'
  },
  MEDIA_TRANSLATION
};
