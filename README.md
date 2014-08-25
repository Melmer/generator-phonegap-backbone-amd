# generator-phonegap-backbone-amd

## in progress

Yeoman generator for an automated PhoneGap project with a Backbone.js AMD structure and build. Uses [grunt-phonegap](https://npmjs.org/package/grunt-phonegap) to automate platform builds and performs basic optimization tasks relevant for phonegap projects. 

## Installation

### Yeoman

To use the generator you need to have yeoman installed. If you don't already, then:

```
$ npm install -g yo
```

### Generator

To install generator-phonegap from npm, run:

```
$ npm install -g generator-phonegap
```

Create a folder for your phonegap project and move to that folder:

```
$ mkdir my-phonegap-project && cd $_
```

Initiate the generator:

```
$ yo phonegap
```

It will prompt you for project name, package and the mobile platforms you want to build your project by default. 


### Project structure

	config.xml											Phonegap configuration file
	bower.json											
	Gruntfile.js										
	.gitignore
	.bowerrc
	app/												Application sources
		index.html										Auto-generated application entry html
		styles/											
		scripts/
		images/
		res/										
	dist/												Processed source data from the app folder
	phonegap/											A project structure generated by [phonegap CLI](https://npmjs.org/package/phonegap)
		www/											
		platforms/										Final output folder for platform specific builds
	test/												


### Working on your app

After generating your project, you can generate a full build for your desired platforms by issuing:

```
grunt platform-build
```

For the sample project this will automatically minify your source files and run platform builds as per your configuration. After the build has completed, you can find your appropriate platform specific code under the folder phonegap/platforms. 

To perform a build without generating platform specific code, simply use:

```
grunt
```
This is faster if you are developing your app in a browser or ripple, as you can simply point a browser to dist/ with all the relevant html/js/css sources.


### Upcoming features

Open for suggestions on what features would be desirable.

## License

[BSD License](http://en.wikipedia.org/wiki/BSD_License)
