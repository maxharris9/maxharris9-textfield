Package.describe({
  summary: "Text field component for Meteor",
  version: "1.0.5",
  git: "https://github.com/maxharris9/maxharris9-textfield.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.3');
  api.use(['tracker', 'templating', 'maxharris9:template-instance-utils'], 'client');

  api.addFiles('maxharris9:textfield.html', 'client');
  api.addFiles('maxharris9:textfield.js', 'client');
  api.export(['textFieldSetup'], 'client');
});

Package.onTest(function(api) {
  api.use(['maxharris9:textfield', 'tinytest', 'test-helpers']);
  api.addFiles('maxharris9:textfield-tests.js', ['client', 'server']);
});