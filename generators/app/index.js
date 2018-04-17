'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the well-made ${chalk.red('generator-weapp')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'please input your project name',
        default: 'wechat-default-app'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('common/'),
      this.destinationPath(`${this.props.name}/`),
      { name: this.props.name }
    );
  }

  install() {
    this.installDependencies();
  }
};
