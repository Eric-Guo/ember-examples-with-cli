# Ember Examples with CLI
[![Travis CI tests](https://travis-ci.org/Eric-Guo/ember-examples-with-cli.png)](https://travis-ci.org/Eric-Guo/ember-examples-with-cli)


Ember web app with CLI usually need quite a lot of hard drive and time to running `npm install && bower install` before you can acturally running small example, so if you just want to do some quickly testing based on some example, it takes long time.

So this repository just combine all the smaller Ember.js example into one and what you need is just switch between branch by running `git checkout ch3-example1 && ember s`.

All ch* example just copy from Suchit Puri's [Ember.js Web Development with Ember CLI book](https://www.packtpub.com/web-development/emberjs-web-development-ember-cli) and that's why we need GPL v3 license.

Todo-mvc example copy from [brownie3003](https://github.com/brownie3003/ember-cli-todo-mvc).

Tom Dale's blog example copy from [balupton](https://github.com/balupton/ember-cli-blog).

Ember News example copy from [oskarrough](https://github.com/oskarrough/ember-news).

Ember CRM is from Vic Ramon's [Ember Tutorial](http://ember.vicramon.com/), [Original](https://github.com/Eric-Guo/ember-crm-js) code is based on ember-rails gems, but now only [backend on Rails API](https://github.com/Eric-Guo/ember-crm-backend).

wge-examples is from Mike North [speach](http://confreaks.tv/videos/wickedgoodember2015-compose-all-the-things) [original repository](https://github.com/truenorth/wge-examples), [PPT](http://www.slideshare.net/mikelnorth/compose-all-the-things) also available.

# Tips for Windows Developer

Rember always open the terminal with [admin privileges](http://www.ember-cli.com/#windows) and install & use [ember-cli-windows-addon](https://github.com/felixrieseberg/ember-cli-windows)

## Contributing

Any new example in PR is welcome, *but please do not* change Ember.js/Ember Data version in package.json/bower.json, because it will be maintain at master branch, so by that, we can see only diff in ember example apps. Usually we only interested in that.

Because ember.js rapid release cycle, master branch will also using new ember.js release after, so it will invalid version problem for all example branch latter.

So *except* master branch, all other branch can be rebased to the master branch without notice, but I will merge all PR first to do that and it won't happen often, usually 6 weeks, same as ember.js release cycle.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone git@github.com:Eric-Guo/ember-examples-with-cli.git` this repository
* `git checkout ch5-example1` change into any example branch you want to check
* `npm install & bower install`

## Running / Development

* `git branch` to list all example available
* `git checkout <example-branch-name>`
* `npm install & bower install` only need at first time and such example change the package.json/bower.json
* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

