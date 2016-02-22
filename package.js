Package.describe({
  name: 'hexsprite:retina',
  version: '0.0.6',
  summary: 'Simple retina (@2x) solution (reactive on template rendering)',
  git: 'https://github.com/hexsprite/meteor-retina.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('underscore');
  api.use('templating');
  api.use('aldeed:template-extension@4.0.0');
  api.use('visudare:retinajs@1.0.0');
  api.export('Retina');
  api.versionsFrom('1.1.0.2');
  api.addFiles('retina.js');
});

Package.onTest(function(api) {});
