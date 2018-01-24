Zonemaster-gui-2
==========

### Purpose
This module is the Web Interface part of the Zonemaster project. 

### Prerequisites
Before you install the Zonemaster GUI module, you need the
Zonemaster Engine test framework installed. Please see the
[Zonemaster Engine installation instructions](https://github.com/dotse/zonemaster-engine/blob/master/docs/Installation.md)

And also the the zonemaster-backend module installed. Please see the [Zonemaster
Backend installation](https://github.com/dotse/zonemaster-backend/blob/master/docs/Installation.md)

### Installation

Follow the detailed [installation instructions](docs/Installation.md).

### Configuration 

Text for configuring the backend are found in the [installation
instructions](docs/Installation.md).

### Development
##### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

##### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

##### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


#### WEB EXT
Run `web-ext run --source-dir ./dist-webextension` and `ng build --app 2  --sourcemap=false --outt-hashing=none` to test the webextension



### Documentation

Basically, the GUI has two major parts. One part is the Perl modules that hold
most of the application logic, and the other part is the HTML template files,
CSS files, Javascript files and so on that the application logic needs.

Other than the installation file, the [docs directory](docs/), contains how to
configure the starman and a translation guide for the GUI

#### Acknowledge
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

License
=======

The software is released under the 2-clause BSD license. See separate
[LICENSE](LICENSE) file.



