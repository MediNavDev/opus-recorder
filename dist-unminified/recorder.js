(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Recorder"] = factory();
	else
		root["Recorder"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/recorder.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1JlY29yZGVyLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcz9jZDAwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/global.js\n");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, homepage, author, keywords, license, main, files, repository, bugs, scripts, devDependencies, dependencies, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"opus-recorder\\\",\\\"version\\\":\\\"8.0.0\\\",\\\"description\\\":\\\"A library for recording opus encoded audio\\\",\\\"homepage\\\":\\\"https://github.com/chris-rudmin/opus-recorder\\\",\\\"author\\\":\\\"Chris Rudmin\\\",\\\"keywords\\\":[\\\"Ogg\\\",\\\"Opus\\\",\\\"PCM\\\",\\\"Decoder\\\",\\\"Resampler\\\",\\\"Streamer\\\",\\\"Audio\\\",\\\"Microphone\\\",\\\"Recorder\\\",\\\"Wav\\\",\\\"Wave\\\",\\\"WebAssembly\\\"],\\\"license\\\":\\\"MIT\\\",\\\"main\\\":\\\"dist/recorder.min.js\\\",\\\"files\\\":[\\\"dist/\\\"],\\\"repository\\\":{\\\"type\\\":\\\"git\\\",\\\"url\\\":\\\"git://github.com/chris-rudmin/opus-recorder.git\\\"},\\\"bugs\\\":{\\\"url\\\":\\\"https://github.com/chris-rudmin/opus-recorder/issues\\\",\\\"email\\\":\\\"chris.rudmin@gmail.com\\\"},\\\"scripts\\\":{\\\"make\\\":\\\"make\\\",\\\"test\\\":\\\"make test\\\",\\\"webpack\\\":\\\"webpack\\\"},\\\"devDependencies\\\":{\\\"chai\\\":\\\"^4.2.0\\\",\\\"mocha\\\":\\\"^8.0.1\\\",\\\"promise\\\":\\\"^8.1.0\\\",\\\"require-uncached\\\":\\\"^2.0.0\\\",\\\"sinon\\\":\\\"^9.0.2\\\",\\\"sinon-chai\\\":\\\"^3.5.0\\\",\\\"webpack\\\":\\\"^4.43.0\\\",\\\"webpack-cli\\\":\\\"^3.3.12\\\"},\\\"dependencies\\\":{}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlLmpzb24uanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./package.json\n");

/***/ }),

/***/ "./src/recorder.js":
/*!*************************!*\
  !*** ./src/recorder.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nconst { version } = __webpack_require__(/*! ../package.json */ \"./package.json\");\n\nvar AudioContext = global.AudioContext || global.webkitAudioContext;\n\n\n// Constructor\nvar Recorder = function( config = {} ){\n\n  if ( !Recorder.isRecordingSupported() ) {\n    throw new Error(\"Recording is not supported in this browser\");\n  }\n\n  this.state = \"inactive\";\n  this.config = Object.assign({\n    bufferLength: 4096,\n    encoderApplication: 2049,\n    encoderFrameSize: 20,\n    encoderPath: 'encoderWorker.min.js',\n    encoderSampleRate: 48000,\n    maxFramesPerPage: 40,\n    mediaTrackConstraints: true,\n    monitorGain: 0,\n    numberOfChannels: 1,\n    recordingGain: 1,\n    resampleQuality: 3,\n    streamPages: false,\n    wavBitDepth: 16,\n    sourceNode: { context: null },\n  }, config );\n\n  this.encodedSamplePosition = 0;\n  this.initAudioContext();\n  this.initialize = this.initWorklet().then(() => this.initEncoder());\n};\n\n\n// Static Methods\nRecorder.isRecordingSupported = function(){\n  const getUserMediaSupported = global.navigator && global.navigator.mediaDevices && global.navigator.mediaDevices.getUserMedia;\n  return AudioContext && getUserMediaSupported && global.WebAssembly;\n};\n\nRecorder.version = version;\n\n\n// Instance Methods\nRecorder.prototype.clearStream = function(){\n  if ( this.stream ){\n\n    if ( this.stream.getTracks ) {\n      this.stream.getTracks().forEach(track => track.stop());\n    }\n\n    else {\n      this.stream.stop();\n    }\n\n    delete this.stream;\n  }\n};\n\nRecorder.prototype.close = function() {\n  this.clearStream();\n  if (this.encoder) {\n    this.encoder.postMessage({ command: \"close\" });\n  }\n\n  if ( !this.config.sourceNode.context ){\n    return this.audioContext.close();\n  }\n\n  return Promise.resolve();\n}\n\nRecorder.prototype.encodeBuffers = function( inputBuffer ){\n  if ( this.state === \"recording\" ) {\n    var buffers = [];\n    for ( var i = 0; i < inputBuffer.numberOfChannels; i++ ) {\n      buffers[i] = inputBuffer.getChannelData(i);\n    }\n\n    this.encoder.postMessage({\n      command: \"encode\",\n      buffers: buffers\n    });\n  }\n};\n\nRecorder.prototype.initAudioContext = function(){\n  this.audioContext = this.config.sourceNode.context ? this.config.sourceNode.context : new AudioContext();\n\n  this.monitorGainNode = this.audioContext.createGain();\n  this.setMonitorGain( this.config.monitorGain );\n\n  this.recordingGainNode = this.audioContext.createGain();\n  this.setRecordingGain( this.config.recordingGain );\n};\n\nRecorder.prototype.initEncoder = function() {\n\n  if (this.audioContext.audioWorklet) {\n    this.encoderNode = new AudioWorkletNode(this.audioContext, 'encoder-worklet', { numberOfOutputs: 0 });\n    this.encoder = this.encoderNode.port;\n  }\n\n  else {\n    console.log('audioWorklet support not detected. Falling back to scriptProcessor');\n\n    // Skip the first buffer\n    this.encodeBuffers = () => delete this.encodeBuffers;\n\n    this.encoderNode = this.audioContext.createScriptProcessor( this.config.bufferLength, this.config.numberOfChannels, this.config.numberOfChannels );\n    this.encoderNode.onaudioprocess = ({ inputBuffer }) => this.encodeBuffers( inputBuffer );\n    this.encoder = new global.Worker(this.config.encoderPath);\n  }\n\n};\n\nRecorder.prototype.initSourceNode = function(){\n  if ( this.config.sourceNode.context ) {\n    return global.Promise.resolve( this.config.sourceNode );\n  }\n\n  return global.navigator.mediaDevices.getUserMedia({ audio : this.config.mediaTrackConstraints }).then( ( stream ) => {\n    this.stream = stream;\n    return this.audioContext.createMediaStreamSource( stream );\n  });\n\n};\n\nRecorder.prototype.initWorker = function(){\n  var onPage = (this.config.streamPages ? this.streamPage : this.storePage).bind(this);\n\n  this.recordedPages = [];\n  this.totalLength = 0;\n\n  return new Promise(resolve => {\n    var callback = ({ data }) => {\n      switch( data['message'] ){\n        case 'ready':\n          resolve();\n          break;\n        case 'page':\n          this.encodedSamplePosition = data['samplePosition'];\n          onPage(data['page']);\n          break;\n        case 'done':\n          this.encoder.removeEventListener( \"message\", callback );\n          this.finish();\n          break;\n      }\n    };\n\n    this.encoder.addEventListener( \"message\", callback );\n\n    // must call start for messagePort messages\n    if( this.encoder.start ) {\n      this.encoder.start()\n    }\n\n    this.encoder.postMessage( Object.assign({\n      command: 'init',\n      originalSampleRate: this.audioContext.sampleRate,\n      wavSampleRate: this.audioContext.sampleRate\n    }, this.config));\n  });\n};\n\nRecorder.prototype.initWorklet = function() {\n  if (this.audioContext.audioWorklet) {\n    return this.audioContext.audioWorklet.addModule(this.config.encoderPath);\n  }\n\n  return Promise.resolve();\n}\n\nRecorder.prototype.pause = function( flush ) {\n  if ( this.state === \"recording\" ) {\n\n    this.state = \"paused\";\n    this.recordingGainNode.disconnect();\n\n    if ( flush && this.config.streamPages ) {\n      return new Promise(resolve => {\n\n        var callback = ({ data }) => {\n          if ( data[\"message\"] === 'flushed' ) {\n            this.encoder.removeEventListener( \"message\", callback );\n            this.onpause();\n            resolve();\n          }\n        };\n        this.encoder.addEventListener( \"message\", callback );\n\n        // must call start for messagePort messages\n        if ( this.encoder.start ) {\n          this.encoder.start()\n        }\n\n        this.encoder.postMessage( { command: \"flush\" } );\n      });\n    }\n    this.onpause();\n    return Promise.resolve();\n  }\n};\n\nRecorder.prototype.resume = function() {\n  if ( this.state === \"paused\" ) {\n    this.state = \"recording\";\n    this.recordingGainNode.connect(this.encoderNode);\n    this.onresume();\n  }\n};\n\nRecorder.prototype.setRecordingGain = function( gain ){\n  this.config.recordingGain = gain;\n\n  if ( this.recordingGainNode && this.audioContext ) {\n    this.recordingGainNode.gain.setTargetAtTime(gain, this.audioContext.currentTime, 0.01);\n  }\n};\n\nRecorder.prototype.setMonitorGain = function( gain ){\n  this.config.monitorGain = gain;\n\n  if ( this.monitorGainNode && this.audioContext ) {\n    this.monitorGainNode.gain.setTargetAtTime(gain, this.audioContext.currentTime, 0.01);\n  }\n};\n\nRecorder.prototype.start = function(){\n  if ( this.state === \"inactive\" ) {\n    this.encodedSamplePosition = 0;\n\n    return this.initialize\n      .then(() => Promise.all([this.initSourceNode(), this.initWorker()]))\n      .then(([sourceNode]) => {\n        this.state = \"recording\";\n        this.encoder.postMessage({ command: 'getHeaderPages' });\n\n        this.sourceNode = sourceNode;\n        this.sourceNode.connect( this.monitorGainNode );\n        this.sourceNode.connect( this.recordingGainNode );\n        this.monitorGainNode.connect( this.audioContext.destination );\n        this.recordingGainNode.connect( this.encoderNode );\n\n        // scriptProcessor requires connection to the destination\n        if (!this.audioContext.audioWorklet) {\n          this.encoderNode.connect( this.audioContext.destination );\n        }\n\n        this.onstart();\n      });\n  }\n  return Promise.resolve();\n};\n\nRecorder.prototype.stop = function(){\n  if ( this.state !== \"inactive\" ) {\n    this.state = \"inactive\";\n    this.monitorGainNode.disconnect();\n    this.encoderNode.disconnect();\n    this.recordingGainNode.disconnect();\n    this.sourceNode.disconnect();\n    this.clearStream();\n\n    return new Promise(resolve => {\n      var callback = ({ data }) => {\n        if ( data[\"message\"] === 'done' ) {\n          this.encoder.removeEventListener( \"message\", callback );\n          resolve();\n        }\n      };\n\n      this.encoder.addEventListener( \"message\", callback );\n\n      // must call start for messagePort messages\n      if( this.encoder.start ) {\n        this.encoder.start()\n      }\n\n      this.encoder.postMessage({ command: \"done\" });\n    });\n  }\n  return Promise.resolve();\n};\n\nRecorder.prototype.storePage = function( page ) {\n  this.recordedPages.push( page );\n  this.totalLength += page.length;\n};\n\nRecorder.prototype.streamPage = function( page ) {\n  this.ondataavailable( page );\n};\n\nRecorder.prototype.finish = function() {\n  if( !this.config.streamPages ) {\n    var outputData = new Uint8Array( this.totalLength );\n    this.recordedPages.reduce( function( offset, page ){\n      outputData.set( page, offset );\n      return offset + page.length;\n    }, 0);\n\n    this.ondataavailable( outputData );\n  }\n  this.onstop();\n};\n\n\n// Callback Handlers\nRecorder.prototype.ondataavailable = function(){};\nRecorder.prototype.onpause = function(){};\nRecorder.prototype.onresume = function(){};\nRecorder.prototype.onstart = function(){};\nRecorder.prototype.onstop = function(){};\n\n\nmodule.exports = Recorder;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVjb3JkZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZWNvcmRlci8uL3NyYy9yZWNvcmRlci5qcz8wNTZmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB7IHZlcnNpb24gfSA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpO1xuXG52YXIgQXVkaW9Db250ZXh0ID0gZ2xvYmFsLkF1ZGlvQ29udGV4dCB8fCBnbG9iYWwud2Via2l0QXVkaW9Db250ZXh0O1xuXG5cbi8vIENvbnN0cnVjdG9yXG52YXIgUmVjb3JkZXIgPSBmdW5jdGlvbiggY29uZmlnID0ge30gKXtcblxuICBpZiAoICFSZWNvcmRlci5pc1JlY29yZGluZ1N1cHBvcnRlZCgpICkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlJlY29yZGluZyBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbiAgfVxuXG4gIHRoaXMuc3RhdGUgPSBcImluYWN0aXZlXCI7XG4gIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgYnVmZmVyTGVuZ3RoOiA0MDk2LFxuICAgIGVuY29kZXJBcHBsaWNhdGlvbjogMjA0OSxcbiAgICBlbmNvZGVyRnJhbWVTaXplOiAyMCxcbiAgICBlbmNvZGVyUGF0aDogJ2VuY29kZXJXb3JrZXIubWluLmpzJyxcbiAgICBlbmNvZGVyU2FtcGxlUmF0ZTogNDgwMDAsXG4gICAgbWF4RnJhbWVzUGVyUGFnZTogNDAsXG4gICAgbWVkaWFUcmFja0NvbnN0cmFpbnRzOiB0cnVlLFxuICAgIG1vbml0b3JHYWluOiAwLFxuICAgIG51bWJlck9mQ2hhbm5lbHM6IDEsXG4gICAgcmVjb3JkaW5nR2FpbjogMSxcbiAgICByZXNhbXBsZVF1YWxpdHk6IDMsXG4gICAgc3RyZWFtUGFnZXM6IGZhbHNlLFxuICAgIHdhdkJpdERlcHRoOiAxNixcbiAgICBzb3VyY2VOb2RlOiB7IGNvbnRleHQ6IG51bGwgfSxcbiAgfSwgY29uZmlnICk7XG5cbiAgdGhpcy5lbmNvZGVkU2FtcGxlUG9zaXRpb24gPSAwO1xuICB0aGlzLmluaXRBdWRpb0NvbnRleHQoKTtcbiAgdGhpcy5pbml0aWFsaXplID0gdGhpcy5pbml0V29ya2xldCgpLnRoZW4oKCkgPT4gdGhpcy5pbml0RW5jb2RlcigpKTtcbn07XG5cblxuLy8gU3RhdGljIE1ldGhvZHNcblJlY29yZGVyLmlzUmVjb3JkaW5nU3VwcG9ydGVkID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgZ2V0VXNlck1lZGlhU3VwcG9ydGVkID0gZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiBnbG9iYWwubmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWE7XG4gIHJldHVybiBBdWRpb0NvbnRleHQgJiYgZ2V0VXNlck1lZGlhU3VwcG9ydGVkICYmIGdsb2JhbC5XZWJBc3NlbWJseTtcbn07XG5cblJlY29yZGVyLnZlcnNpb24gPSB2ZXJzaW9uO1xuXG5cbi8vIEluc3RhbmNlIE1ldGhvZHNcblJlY29yZGVyLnByb3RvdHlwZS5jbGVhclN0cmVhbSA9IGZ1bmN0aW9uKCl7XG4gIGlmICggdGhpcy5zdHJlYW0gKXtcblxuICAgIGlmICggdGhpcy5zdHJlYW0uZ2V0VHJhY2tzICkge1xuICAgICAgdGhpcy5zdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zdHJlYW0uc3RvcCgpO1xuICAgIH1cblxuICAgIGRlbGV0ZSB0aGlzLnN0cmVhbTtcbiAgfVxufTtcblxuUmVjb3JkZXIucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY2xlYXJTdHJlYW0oKTtcbiAgaWYgKHRoaXMuZW5jb2Rlcikge1xuICAgIHRoaXMuZW5jb2Rlci5wb3N0TWVzc2FnZSh7IGNvbW1hbmQ6IFwiY2xvc2VcIiB9KTtcbiAgfVxuXG4gIGlmICggIXRoaXMuY29uZmlnLnNvdXJjZU5vZGUuY29udGV4dCApe1xuICAgIHJldHVybiB0aGlzLmF1ZGlvQ29udGV4dC5jbG9zZSgpO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufVxuXG5SZWNvcmRlci5wcm90b3R5cGUuZW5jb2RlQnVmZmVycyA9IGZ1bmN0aW9uKCBpbnB1dEJ1ZmZlciApe1xuICBpZiAoIHRoaXMuc3RhdGUgPT09IFwicmVjb3JkaW5nXCIgKSB7XG4gICAgdmFyIGJ1ZmZlcnMgPSBbXTtcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBpbnB1dEJ1ZmZlci5udW1iZXJPZkNoYW5uZWxzOyBpKysgKSB7XG4gICAgICBidWZmZXJzW2ldID0gaW5wdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoaSk7XG4gICAgfVxuXG4gICAgdGhpcy5lbmNvZGVyLnBvc3RNZXNzYWdlKHtcbiAgICAgIGNvbW1hbmQ6IFwiZW5jb2RlXCIsXG4gICAgICBidWZmZXJzOiBidWZmZXJzXG4gICAgfSk7XG4gIH1cbn07XG5cblJlY29yZGVyLnByb3RvdHlwZS5pbml0QXVkaW9Db250ZXh0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5hdWRpb0NvbnRleHQgPSB0aGlzLmNvbmZpZy5zb3VyY2VOb2RlLmNvbnRleHQgPyB0aGlzLmNvbmZpZy5zb3VyY2VOb2RlLmNvbnRleHQgOiBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbiAgdGhpcy5tb25pdG9yR2Fpbk5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gIHRoaXMuc2V0TW9uaXRvckdhaW4oIHRoaXMuY29uZmlnLm1vbml0b3JHYWluICk7XG5cbiAgdGhpcy5yZWNvcmRpbmdHYWluTm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgdGhpcy5zZXRSZWNvcmRpbmdHYWluKCB0aGlzLmNvbmZpZy5yZWNvcmRpbmdHYWluICk7XG59O1xuXG5SZWNvcmRlci5wcm90b3R5cGUuaW5pdEVuY29kZXIgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5hdWRpb0NvbnRleHQuYXVkaW9Xb3JrbGV0KSB7XG4gICAgdGhpcy5lbmNvZGVyTm9kZSA9IG5ldyBBdWRpb1dvcmtsZXROb2RlKHRoaXMuYXVkaW9Db250ZXh0LCAnZW5jb2Rlci13b3JrbGV0JywgeyBudW1iZXJPZk91dHB1dHM6IDAgfSk7XG4gICAgdGhpcy5lbmNvZGVyID0gdGhpcy5lbmNvZGVyTm9kZS5wb3J0O1xuICB9XG5cbiAgZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ2F1ZGlvV29ya2xldCBzdXBwb3J0IG5vdCBkZXRlY3RlZC4gRmFsbGluZyBiYWNrIHRvIHNjcmlwdFByb2Nlc3NvcicpO1xuXG4gICAgLy8gU2tpcCB0aGUgZmlyc3QgYnVmZmVyXG4gICAgdGhpcy5lbmNvZGVCdWZmZXJzID0gKCkgPT4gZGVsZXRlIHRoaXMuZW5jb2RlQnVmZmVycztcblxuICAgIHRoaXMuZW5jb2Rlck5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoIHRoaXMuY29uZmlnLmJ1ZmZlckxlbmd0aCwgdGhpcy5jb25maWcubnVtYmVyT2ZDaGFubmVscywgdGhpcy5jb25maWcubnVtYmVyT2ZDaGFubmVscyApO1xuICAgIHRoaXMuZW5jb2Rlck5vZGUub25hdWRpb3Byb2Nlc3MgPSAoeyBpbnB1dEJ1ZmZlciB9KSA9PiB0aGlzLmVuY29kZUJ1ZmZlcnMoIGlucHV0QnVmZmVyICk7XG4gICAgdGhpcy5lbmNvZGVyID0gbmV3IGdsb2JhbC5Xb3JrZXIodGhpcy5jb25maWcuZW5jb2RlclBhdGgpO1xuICB9XG5cbn07XG5cblJlY29yZGVyLnByb3RvdHlwZS5pbml0U291cmNlTm9kZSA9IGZ1bmN0aW9uKCl7XG4gIGlmICggdGhpcy5jb25maWcuc291cmNlTm9kZS5jb250ZXh0ICkge1xuICAgIHJldHVybiBnbG9iYWwuUHJvbWlzZS5yZXNvbHZlKCB0aGlzLmNvbmZpZy5zb3VyY2VOb2RlICk7XG4gIH1cblxuICByZXR1cm4gZ2xvYmFsLm5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgYXVkaW8gOiB0aGlzLmNvbmZpZy5tZWRpYVRyYWNrQ29uc3RyYWludHMgfSkudGhlbiggKCBzdHJlYW0gKSA9PiB7XG4gICAgdGhpcy5zdHJlYW0gPSBzdHJlYW07XG4gICAgcmV0dXJuIHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKCBzdHJlYW0gKTtcbiAgfSk7XG5cbn07XG5cblJlY29yZGVyLnByb3RvdHlwZS5pbml0V29ya2VyID0gZnVuY3Rpb24oKXtcbiAgdmFyIG9uUGFnZSA9ICh0aGlzLmNvbmZpZy5zdHJlYW1QYWdlcyA/IHRoaXMuc3RyZWFtUGFnZSA6IHRoaXMuc3RvcmVQYWdlKS5iaW5kKHRoaXMpO1xuXG4gIHRoaXMucmVjb3JkZWRQYWdlcyA9IFtdO1xuICB0aGlzLnRvdGFsTGVuZ3RoID0gMDtcblxuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgdmFyIGNhbGxiYWNrID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgICBzd2l0Y2goIGRhdGFbJ21lc3NhZ2UnXSApe1xuICAgICAgICBjYXNlICdyZWFkeSc6XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYWdlJzpcbiAgICAgICAgICB0aGlzLmVuY29kZWRTYW1wbGVQb3NpdGlvbiA9IGRhdGFbJ3NhbXBsZVBvc2l0aW9uJ107XG4gICAgICAgICAgb25QYWdlKGRhdGFbJ3BhZ2UnXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RvbmUnOlxuICAgICAgICAgIHRoaXMuZW5jb2Rlci5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1lc3NhZ2VcIiwgY2FsbGJhY2sgKTtcbiAgICAgICAgICB0aGlzLmZpbmlzaCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmVuY29kZXIuYWRkRXZlbnRMaXN0ZW5lciggXCJtZXNzYWdlXCIsIGNhbGxiYWNrICk7XG5cbiAgICAvLyBtdXN0IGNhbGwgc3RhcnQgZm9yIG1lc3NhZ2VQb3J0IG1lc3NhZ2VzXG4gICAgaWYoIHRoaXMuZW5jb2Rlci5zdGFydCApIHtcbiAgICAgIHRoaXMuZW5jb2Rlci5zdGFydCgpXG4gICAgfVxuXG4gICAgdGhpcy5lbmNvZGVyLnBvc3RNZXNzYWdlKCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbW1hbmQ6ICdpbml0JyxcbiAgICAgIG9yaWdpbmFsU2FtcGxlUmF0ZTogdGhpcy5hdWRpb0NvbnRleHQuc2FtcGxlUmF0ZSxcbiAgICAgIHdhdlNhbXBsZVJhdGU6IHRoaXMuYXVkaW9Db250ZXh0LnNhbXBsZVJhdGVcbiAgICB9LCB0aGlzLmNvbmZpZykpO1xuICB9KTtcbn07XG5cblJlY29yZGVyLnByb3RvdHlwZS5pbml0V29ya2xldCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5hdWRpb0NvbnRleHQuYXVkaW9Xb3JrbGV0KSB7XG4gICAgcmV0dXJuIHRoaXMuYXVkaW9Db250ZXh0LmF1ZGlvV29ya2xldC5hZGRNb2R1bGUodGhpcy5jb25maWcuZW5jb2RlclBhdGgpO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufVxuXG5SZWNvcmRlci5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiggZmx1c2ggKSB7XG4gIGlmICggdGhpcy5zdGF0ZSA9PT0gXCJyZWNvcmRpbmdcIiApIHtcblxuICAgIHRoaXMuc3RhdGUgPSBcInBhdXNlZFwiO1xuICAgIHRoaXMucmVjb3JkaW5nR2Fpbk5vZGUuZGlzY29ubmVjdCgpO1xuXG4gICAgaWYgKCBmbHVzaCAmJiB0aGlzLmNvbmZpZy5zdHJlYW1QYWdlcyApIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblxuICAgICAgICB2YXIgY2FsbGJhY2sgPSAoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICBpZiAoIGRhdGFbXCJtZXNzYWdlXCJdID09PSAnZmx1c2hlZCcgKSB7XG4gICAgICAgICAgICB0aGlzLmVuY29kZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtZXNzYWdlXCIsIGNhbGxiYWNrICk7XG4gICAgICAgICAgICB0aGlzLm9ucGF1c2UoKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZW5jb2Rlci5hZGRFdmVudExpc3RlbmVyKCBcIm1lc3NhZ2VcIiwgY2FsbGJhY2sgKTtcblxuICAgICAgICAvLyBtdXN0IGNhbGwgc3RhcnQgZm9yIG1lc3NhZ2VQb3J0IG1lc3NhZ2VzXG4gICAgICAgIGlmICggdGhpcy5lbmNvZGVyLnN0YXJ0ICkge1xuICAgICAgICAgIHRoaXMuZW5jb2Rlci5zdGFydCgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVuY29kZXIucG9zdE1lc3NhZ2UoIHsgY29tbWFuZDogXCJmbHVzaFwiIH0gKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLm9ucGF1c2UoKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn07XG5cblJlY29yZGVyLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLnN0YXRlID09PSBcInBhdXNlZFwiICkge1xuICAgIHRoaXMuc3RhdGUgPSBcInJlY29yZGluZ1wiO1xuICAgIHRoaXMucmVjb3JkaW5nR2Fpbk5vZGUuY29ubmVjdCh0aGlzLmVuY29kZXJOb2RlKTtcbiAgICB0aGlzLm9ucmVzdW1lKCk7XG4gIH1cbn07XG5cblJlY29yZGVyLnByb3RvdHlwZS5zZXRSZWNvcmRpbmdHYWluID0gZnVuY3Rpb24oIGdhaW4gKXtcbiAgdGhpcy5jb25maWcucmVjb3JkaW5nR2FpbiA9IGdhaW47XG5cbiAgaWYgKCB0aGlzLnJlY29yZGluZ0dhaW5Ob2RlICYmIHRoaXMuYXVkaW9Db250ZXh0ICkge1xuICAgIHRoaXMucmVjb3JkaW5nR2Fpbk5vZGUuZ2Fpbi5zZXRUYXJnZXRBdFRpbWUoZ2FpbiwgdGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUsIDAuMDEpO1xuICB9XG59O1xuXG5SZWNvcmRlci5wcm90b3R5cGUuc2V0TW9uaXRvckdhaW4gPSBmdW5jdGlvbiggZ2FpbiApe1xuICB0aGlzLmNvbmZpZy5tb25pdG9yR2FpbiA9IGdhaW47XG5cbiAgaWYgKCB0aGlzLm1vbml0b3JHYWluTm9kZSAmJiB0aGlzLmF1ZGlvQ29udGV4dCApIHtcbiAgICB0aGlzLm1vbml0b3JHYWluTm9kZS5nYWluLnNldFRhcmdldEF0VGltZShnYWluLCB0aGlzLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZSwgMC4wMSk7XG4gIH1cbn07XG5cblJlY29yZGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCl7XG4gIGlmICggdGhpcy5zdGF0ZSA9PT0gXCJpbmFjdGl2ZVwiICkge1xuICAgIHRoaXMuZW5jb2RlZFNhbXBsZVBvc2l0aW9uID0gMDtcblxuICAgIHJldHVybiB0aGlzLmluaXRpYWxpemVcbiAgICAgIC50aGVuKCgpID0+IFByb21pc2UuYWxsKFt0aGlzLmluaXRTb3VyY2VOb2RlKCksIHRoaXMuaW5pdFdvcmtlcigpXSkpXG4gICAgICAudGhlbigoW3NvdXJjZU5vZGVdKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBcInJlY29yZGluZ1wiO1xuICAgICAgICB0aGlzLmVuY29kZXIucG9zdE1lc3NhZ2UoeyBjb21tYW5kOiAnZ2V0SGVhZGVyUGFnZXMnIH0pO1xuXG4gICAgICAgIHRoaXMuc291cmNlTm9kZSA9IHNvdXJjZU5vZGU7XG4gICAgICAgIHRoaXMuc291cmNlTm9kZS5jb25uZWN0KCB0aGlzLm1vbml0b3JHYWluTm9kZSApO1xuICAgICAgICB0aGlzLnNvdXJjZU5vZGUuY29ubmVjdCggdGhpcy5yZWNvcmRpbmdHYWluTm9kZSApO1xuICAgICAgICB0aGlzLm1vbml0b3JHYWluTm9kZS5jb25uZWN0KCB0aGlzLmF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbiApO1xuICAgICAgICB0aGlzLnJlY29yZGluZ0dhaW5Ob2RlLmNvbm5lY3QoIHRoaXMuZW5jb2Rlck5vZGUgKTtcblxuICAgICAgICAvLyBzY3JpcHRQcm9jZXNzb3IgcmVxdWlyZXMgY29ubmVjdGlvbiB0byB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgaWYgKCF0aGlzLmF1ZGlvQ29udGV4dC5hdWRpb1dvcmtsZXQpIHtcbiAgICAgICAgICB0aGlzLmVuY29kZXJOb2RlLmNvbm5lY3QoIHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uICk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uc3RhcnQoKTtcbiAgICAgIH0pO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbn07XG5cblJlY29yZGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKXtcbiAgaWYgKCB0aGlzLnN0YXRlICE9PSBcImluYWN0aXZlXCIgKSB7XG4gICAgdGhpcy5zdGF0ZSA9IFwiaW5hY3RpdmVcIjtcbiAgICB0aGlzLm1vbml0b3JHYWluTm9kZS5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5lbmNvZGVyTm9kZS5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5yZWNvcmRpbmdHYWluTm9kZS5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5zb3VyY2VOb2RlLmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLmNsZWFyU3RyZWFtKCk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB2YXIgY2FsbGJhY2sgPSAoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgaWYgKCBkYXRhW1wibWVzc2FnZVwiXSA9PT0gJ2RvbmUnICkge1xuICAgICAgICAgIHRoaXMuZW5jb2Rlci5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1lc3NhZ2VcIiwgY2FsbGJhY2sgKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuZW5jb2Rlci5hZGRFdmVudExpc3RlbmVyKCBcIm1lc3NhZ2VcIiwgY2FsbGJhY2sgKTtcblxuICAgICAgLy8gbXVzdCBjYWxsIHN0YXJ0IGZvciBtZXNzYWdlUG9ydCBtZXNzYWdlc1xuICAgICAgaWYoIHRoaXMuZW5jb2Rlci5zdGFydCApIHtcbiAgICAgICAgdGhpcy5lbmNvZGVyLnN0YXJ0KClcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbmNvZGVyLnBvc3RNZXNzYWdlKHsgY29tbWFuZDogXCJkb25lXCIgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufTtcblxuUmVjb3JkZXIucHJvdG90eXBlLnN0b3JlUGFnZSA9IGZ1bmN0aW9uKCBwYWdlICkge1xuICB0aGlzLnJlY29yZGVkUGFnZXMucHVzaCggcGFnZSApO1xuICB0aGlzLnRvdGFsTGVuZ3RoICs9IHBhZ2UubGVuZ3RoO1xufTtcblxuUmVjb3JkZXIucHJvdG90eXBlLnN0cmVhbVBhZ2UgPSBmdW5jdGlvbiggcGFnZSApIHtcbiAgdGhpcy5vbmRhdGFhdmFpbGFibGUoIHBhZ2UgKTtcbn07XG5cblJlY29yZGVyLnByb3RvdHlwZS5maW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgaWYoICF0aGlzLmNvbmZpZy5zdHJlYW1QYWdlcyApIHtcbiAgICB2YXIgb3V0cHV0RGF0YSA9IG5ldyBVaW50OEFycmF5KCB0aGlzLnRvdGFsTGVuZ3RoICk7XG4gICAgdGhpcy5yZWNvcmRlZFBhZ2VzLnJlZHVjZSggZnVuY3Rpb24oIG9mZnNldCwgcGFnZSApe1xuICAgICAgb3V0cHV0RGF0YS5zZXQoIHBhZ2UsIG9mZnNldCApO1xuICAgICAgcmV0dXJuIG9mZnNldCArIHBhZ2UubGVuZ3RoO1xuICAgIH0sIDApO1xuXG4gICAgdGhpcy5vbmRhdGFhdmFpbGFibGUoIG91dHB1dERhdGEgKTtcbiAgfVxuICB0aGlzLm9uc3RvcCgpO1xufTtcblxuXG4vLyBDYWxsYmFjayBIYW5kbGVyc1xuUmVjb3JkZXIucHJvdG90eXBlLm9uZGF0YWF2YWlsYWJsZSA9IGZ1bmN0aW9uKCl7fTtcblJlY29yZGVyLnByb3RvdHlwZS5vbnBhdXNlID0gZnVuY3Rpb24oKXt9O1xuUmVjb3JkZXIucHJvdG90eXBlLm9ucmVzdW1lID0gZnVuY3Rpb24oKXt9O1xuUmVjb3JkZXIucHJvdG90eXBlLm9uc3RhcnQgPSBmdW5jdGlvbigpe307XG5SZWNvcmRlci5wcm90b3R5cGUub25zdG9wID0gZnVuY3Rpb24oKXt9O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gUmVjb3JkZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/recorder.js\n");

/***/ })

/******/ });
});