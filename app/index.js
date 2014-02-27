'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var _ = require('underscore.string');


var BbmoduleGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));
  },

  askFor: function () {
    var done = this.async();

    // replace it with a short and sweet description of your generator
    console.log(chalk.magenta('You\'re using the fantabulous Backbone module generator.'));

    var prompts = [{
      type: 'input',
      name: 'moduleName',
      message: 'What\'s the name of your module?',
      default: 'exampleModule'
    },
    {
      type: 'confirm',
      name: 'baseSubmodule',
      message: 'Include a base Submodule as well?',
      default: false
    }, {
      type: 'input',
      name: 'baseSubModuleName',
      message: 'What should the base Submodule be called?',
      default: 'base',
      when: function (answers) {
        if (answers.baseSubmodule === false) {
          return false;
        } else {
          return true;
        }
      }
    }, {
      type: 'confirm',
      name: 'createInCurrentDir',
      message: 'Create the module folder in this directory?',
      default: true
    }, {
      type: 'input',
      name: 'targetDir',
      message: 'Ok, which directory should we create the module? (Relative to the directory you are currently in)?',
      when: function (answers) {
        if (answers.createInCurrentDir === false) {
          return true;
        } else {
          return false;
        }
      }
    }
    ];

    this.prompt(prompts, function (props) {
      if (props.targetDir) {
        this.targetDir = props.targetDir + '/';
      } else {
        this.targetDir = '';
      }

      this.moduleName = props.moduleName;
      this.moduleClass = _.classify(this.moduleName);
      this.baseSubmodule = props.baseSubmodule;

      if (this.baseSubmodule) {
        this.baseSubModuleName = props.baseSubModuleName;
      }

      done();
    }.bind(this));
  },

  app: function () {
    var self = this,
        moduleDir;

    if (!this.moduleName) {
      return;
    } 

    moduleDir = this.targetDir + this.moduleName;

    this.mkdir(moduleDir);
    this.template('_app.js', moduleDir + '/' + this.moduleName + '.app.js');

    if (this.baseSubmodule === true) {
      this.invoke('bbmodule:submodule', {
        options: {
          moduleName: this.baseSubModuleName,
          parentModule: this.moduleName,
          targetDir: moduleDir
        }
      }, function () {
        console.log('Your new module is at: ' + moduleDir + '/' + self.moduleName + '. Enjoy! :)');
      });
    } else {
      console.log('Your new module is at: ' + moduleDir + '/' + self.moduleName + '. Enjoy! :)');
    }
    


  }
});

module.exports = BbmoduleGenerator;