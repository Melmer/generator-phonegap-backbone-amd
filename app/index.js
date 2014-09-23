'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var phonegap = require('phonegap');
var path = require('path');
var fs = require('fs');
var extfs = require('extended-fs');

var PhonegapGenerator = module.exports = function PhonegapGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  // setup the test-framework property, Gruntfile template will need this
  this.testFramework = options['test-framework'] || 'mocha';

  // for hooks to resolve on mocha by default
  if (!options['test-framework']) {
    options['test-framework'] = 'mocha';
  }

  // resolved to mocha by default (could be switched to jasmine for instance)
  this.hookFor('test-framework', { as: 'app' });

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(PhonegapGenerator, yeoman.generators.Base);

PhonegapGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
      name: 'projectName',
      message: 'fooWhat is the name of your PhoneGap project?',
      default: 'Hello World'
    },
    { name: 'appPackage',
      message: 'What is your application package',
      default: 'com.phonegap.helloworld'
    },
    {
      type: 'checkbox',
      name: 'features',
      message: 'What platform builds would you like?',
      choices: [{
        name: 'Android',
        value: 'android',
        checked: false
      }, {
        name: 'iOS',
        value: 'ios',
        checked: false
      }, {
        name: 'WP8',
        value: 'wp8',
        checked: false
      }]
    },
    {
      type: 'checkbox',
      name: 'layout',
      message: 'What layouts would you like?',
      choices: [{
        name: 'Landscape',
        value: 'landscape',
        checked: false
      }, {
        name: 'Portrait',
        value: 'portrait',
        checked: false
      }]
    }
  ];

  this.prompt(prompts, function (answers) {
    var features = answers.features;
    var layout = answers.layout;

    this.projectName = answers.projectName;
    this.appPackage = answers.appPackage;

    function hasFeature(feat) { return features.indexOf(feat) !== -1; }
    function hasLayout(layout) { return layout.indexOf(layout) !== -1; }

    // manually deal with the response, get back and store the results.
    // we change a bit this way of doing to automatically do this in the self.prompt() method.
    this.compassBootstrap = hasFeature('compassBootstrap');
    this.includeRequireJS = hasFeature('includeRequireJS');
    this.includeModernizr = hasFeature('includeModernizr');
    this.scriptsFolderStructure = hasFeature('scriptsFoldertructure');

    this.isForiOS = hasFeature('ios');
    this.isForAndroid = hasFeature('android');
    this.isForWP8 = hasFeature('wp8');

    this.landscape = hasLayout('landscape');
    this.portrait = hasLayout('portrait');

  	var builds = []
    var layouts = []

    this.launchImages = {}

  	if(this.isForiOS){
        builds.push('\'ios\'');

        this.launchImages['ios'] = {
                  splash: 'splash.png',
                  splashx2: 'splash@2x.png',
                  splash568x2: 'splash-568h@2x.png'
                }
    } 

  	if(this.isForAndroid){
        builds.push('\'android\'');


        this.launchImages['android'] = {
                ldpi: 'screen-ldpi.png',
                mdpi: 'screen-mdpi.png',
                hdpi: 'screen-hdpi.png',
                xhdpi: 'screen-xhdpi.png'
            }
    } 

  	if(this.isForWP8){
        builds.push('\'wp8\'');
    }

    this.landscape?layouts.push('\'landscape\''):null;
    this.portrait?layouts.push('\'portrait\''):null;

  	
    this.buildForPlatforms = "[" + builds.join(", ") + "]";
    this.buildForLayouts = "[" + layouts.join(", ") + "]"; 

    console.log(this.buildForPlatforms);
    console.log(this.launchImages);

//    return;
  
    cb();
  }.bind(this));
};

PhonegapGenerator.prototype.gruntfile = function gruntfile() {
  this.template('Gruntfile.js');
};

PhonegapGenerator.prototype.packageJSON = function packageJSON() {
  this.template('_package.json', 'package.json');
};

PhonegapGenerator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');
};

PhonegapGenerator.prototype.bower = function bower() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('_bower.json', 'bower.json');
};

PhonegapGenerator.prototype.jshint = function jshint() {
  this.copy('jshintrc', '.jshintrc');
};

PhonegapGenerator.prototype.editorConfig = function editorConfig() {
  this.copy('editorconfig', '.editorconfig');
};

PhonegapGenerator.prototype.mainStylesheet = function mainStylesheet() {
  this.copy('main.css', 'app/styles/main.css');
};

PhonegapGenerator.prototype.createFolderStructure = function folderStructure(){

  this.mkdir('app/scripts/adapters');
  this.mkdir('app/scripts/collections');
  this.mkdir('app/scripts/models');
  this.mkdir('app/scripts/subrouters');
  this.mkdir('app/scripts/templates');
  this.mkdir('app/scripts/vendor');
  this.mkdir('app/scripts/views');
  
  this.mkdir('app/icons');
  this.mkdir('app/fonts');
  this.mkdir('app/images');
  this.mkdir('app/sass');
  this.mkdir('app/svg');

};

// TODO(mklabs): to be put in a subgenerator like rjs:app
PhonegapGenerator.prototype.requirejs = function requirejs() {

  this.indexFile = this.appendScripts(this.indexFile, 'app/scripts/main.js', ['bower_components/requirejs/require.js'], {
    'data-main': 'scripts/main'
  });

  // add a basic amd module
  this.copy('app.js', 'app/scripts/app.js');
  //this.copy('main.js', 'app/scripts/main.js');
  this.copy('phonegap.js', 'app/scripts/phonegap.js');
  this.copy('router.js', 'app/scripts/router.js');


  this.template('require_main.js', 'app/scripts/main.js');
};

PhonegapGenerator.prototype.createSass = function createSass(){
  this.copy('main.scss', 'app/sass/main.scss');
  this.copy('_variables.scss', 'app/sass/_variables.scss');
};


PhonegapGenerator.prototype.app = function app() {
  this.write('app/index.html', this.indexFile);
  
  /*if (!this.includeRequireJS) {
  	this.copy('index.js', 'app/scripts/index.js');
  }*/
};

PhonegapGenerator.prototype.phonegapSetup = function phonegapSetup() {
	var self = this;
	phonegap.create({path:path.resolve('phonegap'), name: this.projectName, id: this.appPackage}, function(e) { self.log.create('Initialized PhoneGap project'); });
	//fs.rename(path.resolve('www/index.html'), path.resolve('www/index_old.html'), function() {self.log.info('Renamed Phonegap provided index.html -> index_old.html') });
	
	extfs.copyDirSync(path.resolve('phonegap/.cordova'), path.resolve('.cordova'), function(e) {self.log.create("Copied .cordova configuration") });
	//extfs.copyDirSync(path.resolve('phonegap/www/res'), path.resolve('app/res'), function(e) {self.log.create("moved app resources (splash screens etc) to app/res") });
	//extfs.copyDirSync(path.resolve('phonegap/www/img'), path.resolve('app/images'), function(e) {self.log.create("moved app images") });
	this.template('_config.xml', 'config.xml');
};
