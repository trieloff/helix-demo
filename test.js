const pipeline = require('./.hlx/build/foo_html.js').main;
pipeline({owner: 'trieloff', repo: 'helix-demo', ref: 'master', path: 'index.md'}).then(console.log);