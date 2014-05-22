'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var inf = require('inflection');

var SubmoduleGenerator = yeoman.generators.Base.extend({
  init: function () {

  },

  askFor: function () {
    var done = this.async(),
        prompts;

    if (this.options.targetDir) {
        this.targetDir = this.options.targetDir + '/';
        this.moduleName = this.options.moduleName;
        this.parentModule = this.options.parentModule;
        done();
    } else {
        prompts = [
        {
          type: 'list',
          name: 'moduleType',
          message: 'What type of Module is this?',
          choices: ["SubModule", "Component", "Entity"],
          default: 0
        },{
          type: 'input',
          name: 'moduleName',
          message: 'What\'s the name of your module?',
          default: 'exampleModule'
        }, {
          type: 'confirm',
          name: 'createInCurrentDir',
          message: 'Create the module/components folder in this directory?',
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
        }, {
            type: 'confirm',
            name: 'isStandalone',
            message: 'Is this a Standalone Module? (do not nest under parent, ie: Example.SubModule)',
            default: true

        }, {
            type: 'input',
            name: 'parentModule',
            message: 'Ok, what\'s the parent Module\'s name?',
            when: function (answers) {
                if (answers.isStandalone === false) {
                  return true;
                } else {
                  return false;
                }
            }
        }];

        this.prompt(prompts, function (props) {
            if (props.targetDir) {
                this.targetDir = props.targetDir + '/';
            } else {
                this.targetDir = './';
            }

            this.parentModule = props.parentModule;
            this.moduleName = props.moduleName;
            this.moduleType = props.moduleType;

          done();
        }.bind(this));
    }
  },

  app: function () {
    var subModDir;

    this.inf = inf;

    if(this.moduleType === 'Component') {
        subModDir = this.targetDir + 'components/' + this.moduleName;
    } else {
        subModDir = this.targetDir + this.moduleName;
    }

    this.moduleBaseClass = inf.classify(this.moduleName);

    if(this.parentModule) {
        this.moduleClass = inf.classify(this.parentModule) + '.' + inf.classify(this.moduleName);
        this.templatePath = inf.dasherize(this.parentModule) + '/' + inf.dasherize(this.moduleName);
    } else {
        this.moduleClass = inf.classify(this.moduleName);
        this.templatePath =  inf.dasherize(this.moduleName);
    }

    switch(this.moduleType) {
      case 'Entity':
        this.template('_submodule.entity.js', this.targetDir + this.moduleName + '.js'); 
        break;
      default:
        this.mkdir(subModDir);
        this.template('_submodule.controller.js', subModDir + '/' + this.moduleName + '.controller.js');    
        this.template('_submodule.view.js', subModDir + '/' + this.moduleName + '.view.js');    
    }


  }
});

module.exports = SubmoduleGenerator;