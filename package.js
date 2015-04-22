Package.describe({
  name: 'visudare:retina',
  version: '0.0.1',
  summary: 'Simple retina (@2x) solution (reactive on template rendering)',
  git: 'https://github.com/Visudare/meteor-retina.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('templating');
  api.use('aldeed:template-extension@3.4.3');
  api.use('visudare:retinajs@1.0.0');
  api.versionsFrom('1.1.0.2');
  api.addFiles('retina.js');
});

Package.onTest(function(api) {});
