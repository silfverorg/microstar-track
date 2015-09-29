module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _trackModuleTrackLibraryJs = __webpack_require__(1);

	var _trackModuleTrackLibraryJs2 = _interopRequireDefault(_trackModuleTrackLibraryJs);

	exports['default'] = _trackModuleTrackLibraryJs2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _ramda = __webpack_require__(2);

	var _ramda2 = _interopRequireDefault(_ramda);

	var _q = __webpack_require__(3);

	var _q2 = _interopRequireDefault(_q);

	var _databaseModuleDatabaseLibrary = __webpack_require__(4);

	var _databaseModuleDatabaseLibrary2 = _interopRequireDefault(_databaseModuleDatabaseLibrary);

	var config = {
	    host: 'localhost',
	    port: 32775
	};

	var databaseModule = new _databaseModuleDatabaseLibrary2['default'](config);

	var TrackLibrary = (function () {
	    function TrackLibrary() {
	        _classCallCheck(this, TrackLibrary);
	    }

	    _createClass(TrackLibrary, [{
	        key: 'track',
	        value: function track(event, data) {
	            return _q2['default'].Promise(function (resolve, reject) {
	                if (!event) {
	                    resolve({
	                        status: 400
	                    });
	                } else {
	                    databaseModule.createEntry({
	                        event: event,
	                        data: data
	                    }).then(function (res) {
	                        resolve({
	                            status: 200
	                        });
	                    })['catch'](function (err) {
	                        resolve({
	                            status: 500,
	                            error: err
	                        });
	                    });
	                }
	            });
	        }
	    }]);

	    return TrackLibrary;
	})();

	exports['default'] = new TrackLibrary();
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	//  Ramda v0.17.1
	//  https://github.com/ramda/ramda
	//  (c) 2013-2015 Scott Sauyet, Michael Hurley, and David Chambers
	//  Ramda may be freely distributed under the MIT license.

	;(function() {

	  'use strict';

	  /**
	     * A special placeholder value used to specify "gaps" within curried functions,
	     * allowing partial application of any combination of arguments,
	     * regardless of their positions.
	     *
	     * If `g` is a curried ternary function and `_` is `R.__`, the following are equivalent:
	     *
	     *   - `g(1, 2, 3)`
	     *   - `g(_, 2, 3)(1)`
	     *   - `g(_, _, 3)(1)(2)`
	     *   - `g(_, _, 3)(1, 2)`
	     *   - `g(_, 2, _)(1, 3)`
	     *   - `g(_, 2)(1)(3)`
	     *   - `g(_, 2)(1, 3)`
	     *   - `g(_, 2)(_, 3)(1)`
	     *
	     * @constant
	     * @memberOf R
	     * @category Function
	     * @example
	     *
	     *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
	     *      greet('Alice'); //=> 'Hello, Alice!'
	     */
	    var __ = { '@@functional/placeholder': true };

	    // jshint unused:vars
	    var _arity = function _arity(n, fn) {
	        // jshint unused:vars
	        switch (n) {
	        case 0:
	            return function () {
	                return fn.apply(this, arguments);
	            };
	        case 1:
	            return function (a0) {
	                return fn.apply(this, arguments);
	            };
	        case 2:
	            return function (a0, a1) {
	                return fn.apply(this, arguments);
	            };
	        case 3:
	            return function (a0, a1, a2) {
	                return fn.apply(this, arguments);
	            };
	        case 4:
	            return function (a0, a1, a2, a3) {
	                return fn.apply(this, arguments);
	            };
	        case 5:
	            return function (a0, a1, a2, a3, a4) {
	                return fn.apply(this, arguments);
	            };
	        case 6:
	            return function (a0, a1, a2, a3, a4, a5) {
	                return fn.apply(this, arguments);
	            };
	        case 7:
	            return function (a0, a1, a2, a3, a4, a5, a6) {
	                return fn.apply(this, arguments);
	            };
	        case 8:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7) {
	                return fn.apply(this, arguments);
	            };
	        case 9:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
	                return fn.apply(this, arguments);
	            };
	        case 10:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	                return fn.apply(this, arguments);
	            };
	        default:
	            throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
	        }
	    };

	    var _cloneRegExp = function _cloneRegExp(pattern) {
	        return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
	    };

	    var _complement = function _complement(f) {
	        return function () {
	            return !f.apply(this, arguments);
	        };
	    };

	    /**
	     * Private `concat` function to merge two array-like objects.
	     *
	     * @private
	     * @param {Array|Arguments} [set1=[]] An array-like object.
	     * @param {Array|Arguments} [set2=[]] An array-like object.
	     * @return {Array} A new, merged array.
	     * @example
	     *
	     *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
	     */
	    var _concat = function _concat(set1, set2) {
	        set1 = set1 || [];
	        set2 = set2 || [];
	        var idx;
	        var len1 = set1.length;
	        var len2 = set2.length;
	        var result = [];
	        idx = 0;
	        while (idx < len1) {
	            result[result.length] = set1[idx];
	            idx += 1;
	        }
	        idx = 0;
	        while (idx < len2) {
	            result[result.length] = set2[idx];
	            idx += 1;
	        }
	        return result;
	    };

	    var _containsWith = function _containsWith(pred, x, list) {
	        var idx = 0, len = list.length;
	        while (idx < len) {
	            if (pred(x, list[idx])) {
	                return true;
	            }
	            idx += 1;
	        }
	        return false;
	    };

	    /**
	     * Optimized internal two-arity curry function.
	     *
	     * @private
	     * @category Function
	     * @param {Function} fn The function to curry.
	     * @return {Function} The curried function.
	     */
	    var _curry1 = function _curry1(fn) {
	        return function f1(a) {
	            if (arguments.length === 0) {
	                return f1;
	            } else if (a != null && a['@@functional/placeholder'] === true) {
	                return f1;
	            } else {
	                return fn.apply(this, arguments);
	            }
	        };
	    };

	    /**
	     * Optimized internal two-arity curry function.
	     *
	     * @private
	     * @category Function
	     * @param {Function} fn The function to curry.
	     * @return {Function} The curried function.
	     */
	    var _curry2 = function _curry2(fn) {
	        return function f2(a, b) {
	            var n = arguments.length;
	            if (n === 0) {
	                return f2;
	            } else if (n === 1 && a != null && a['@@functional/placeholder'] === true) {
	                return f2;
	            } else if (n === 1) {
	                return _curry1(function (b) {
	                    return fn(a, b);
	                });
	            } else if (n === 2 && a != null && a['@@functional/placeholder'] === true && b != null && b['@@functional/placeholder'] === true) {
	                return f2;
	            } else if (n === 2 && a != null && a['@@functional/placeholder'] === true) {
	                return _curry1(function (a) {
	                    return fn(a, b);
	                });
	            } else if (n === 2 && b != null && b['@@functional/placeholder'] === true) {
	                return _curry1(function (b) {
	                    return fn(a, b);
	                });
	            } else {
	                return fn(a, b);
	            }
	        };
	    };

	    /**
	     * Optimized internal three-arity curry function.
	     *
	     * @private
	     * @category Function
	     * @param {Function} fn The function to curry.
	     * @return {Function} The curried function.
	     */
	    var _curry3 = function _curry3(fn) {
	        return function f3(a, b, c) {
	            var n = arguments.length;
	            if (n === 0) {
	                return f3;
	            } else if (n === 1 && a != null && a['@@functional/placeholder'] === true) {
	                return f3;
	            } else if (n === 1) {
	                return _curry2(function (b, c) {
	                    return fn(a, b, c);
	                });
	            } else if (n === 2 && a != null && a['@@functional/placeholder'] === true && b != null && b['@@functional/placeholder'] === true) {
	                return f3;
	            } else if (n === 2 && a != null && a['@@functional/placeholder'] === true) {
	                return _curry2(function (a, c) {
	                    return fn(a, b, c);
	                });
	            } else if (n === 2 && b != null && b['@@functional/placeholder'] === true) {
	                return _curry2(function (b, c) {
	                    return fn(a, b, c);
	                });
	            } else if (n === 2) {
	                return _curry1(function (c) {
	                    return fn(a, b, c);
	                });
	            } else if (n === 3 && a != null && a['@@functional/placeholder'] === true && b != null && b['@@functional/placeholder'] === true && c != null && c['@@functional/placeholder'] === true) {
	                return f3;
	            } else if (n === 3 && a != null && a['@@functional/placeholder'] === true && b != null && b['@@functional/placeholder'] === true) {
	                return _curry2(function (a, b) {
	                    return fn(a, b, c);
	                });
	            } else if (n === 3 && a != null && a['@@functional/placeholder'] === true && c != null && c['@@functional/placeholder'] === true) {
	                return _curry2(function (a, c) {
	                    return fn(a, b, c);
	                });
	            } else if (n === 3 && b != null && b['@@functional/placeholder'] === true && c != null && c['@@functional/placeholder'] === true) {
	                return _curry2(function (b, c) {
	                    return fn(a, b, c);
	                });
	            } else if (n === 3 && a != null && a['@@functional/placeholder'] === true) {
	                return _curry1(function (a) {
	                    return fn(a, b, c);
	                });
	            } else if (n === 3 && b != null && b['@@functional/placeholder'] === true) {
	                return _curry1(function (b) {
	                    return fn(a, b, c);
	                });
	            } else if (n === 3 && c != null && c['@@functional/placeholder'] === true) {
	                return _curry1(function (c) {
	                    return fn(a, b, c);
	                });
	            } else {
	                return fn(a, b, c);
	            }
	        };
	    };

	    /**
	     * Internal curryN function.
	     *
	     * @private
	     * @category Function
	     * @param {Number} length The arity of the curried function.
	     * @return {array} An array of arguments received thus far.
	     * @param {Function} fn The function to curry.
	     */
	    var _curryN = function _curryN(length, received, fn) {
	        return function () {
	            var combined = [];
	            var argsIdx = 0;
	            var left = length;
	            var combinedIdx = 0;
	            while (combinedIdx < received.length || argsIdx < arguments.length) {
	                var result;
	                if (combinedIdx < received.length && (received[combinedIdx] == null || received[combinedIdx]['@@functional/placeholder'] !== true || argsIdx >= arguments.length)) {
	                    result = received[combinedIdx];
	                } else {
	                    result = arguments[argsIdx];
	                    argsIdx += 1;
	                }
	                combined[combinedIdx] = result;
	                if (result == null || result['@@functional/placeholder'] !== true) {
	                    left -= 1;
	                }
	                combinedIdx += 1;
	            }
	            return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
	        };
	    };

	    var _filter = function _filter(fn, list) {
	        var idx = 0, len = list.length, result = [];
	        while (idx < len) {
	            if (fn(list[idx])) {
	                result[result.length] = list[idx];
	            }
	            idx += 1;
	        }
	        return result;
	    };

	    var _forceReduced = function _forceReduced(x) {
	        return {
	            '@@transducer/value': x,
	            '@@transducer/reduced': true
	        };
	    };

	    /**
	     * @private
	     * @param {Function} fn The strategy for extracting function names from an object
	     * @return {Function} A function that takes an object and returns an array of function names.
	     */
	    var _functionsWith = function _functionsWith(fn) {
	        return function (obj) {
	            return _filter(function (key) {
	                return typeof obj[key] === 'function';
	            }, fn(obj));
	        };
	    };

	    var _has = function _has(prop, obj) {
	        return Object.prototype.hasOwnProperty.call(obj, prop);
	    };

	    var _identity = function _identity(x) {
	        return x;
	    };

	    /**
	     * Tests whether or not an object is an array.
	     *
	     * @private
	     * @param {*} val The object to test.
	     * @return {Boolean} `true` if `val` is an array, `false` otherwise.
	     * @example
	     *
	     *      _isArray([]); //=> true
	     *      _isArray(null); //=> false
	     *      _isArray({}); //=> false
	     */
	    var _isArray = Array.isArray || function _isArray(val) {
	        return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
	    };

	    /**
	     * Determine if the passed argument is an integer.
	     *
	     * @private
	     * @param {*} n
	     * @category Type
	     * @return {Boolean}
	     */
	    var _isInteger = Number.isInteger || function _isInteger(n) {
	        return n << 0 === n;
	    };

	    var _isNumber = function _isNumber(x) {
	        return Object.prototype.toString.call(x) === '[object Number]';
	    };

	    var _isString = function _isString(x) {
	        return Object.prototype.toString.call(x) === '[object String]';
	    };

	    var _isTransformer = function _isTransformer(obj) {
	        return typeof obj['@@transducer/step'] === 'function';
	    };

	    var _map = function _map(fn, list) {
	        var idx = 0, len = list.length, result = Array(len);
	        while (idx < len) {
	            result[idx] = fn(list[idx]);
	            idx += 1;
	        }
	        return result;
	    };

	    var _pipe = function _pipe(f, g) {
	        return function () {
	            return g.call(this, f.apply(this, arguments));
	        };
	    };

	    var _pipeP = function _pipeP(f, g) {
	        return function () {
	            var ctx = this;
	            return f.apply(ctx, arguments).then(function (x) {
	                return g.call(ctx, x);
	            });
	        };
	    };

	    var _quote = function _quote(s) {
	        return '"' + s.replace(/"/g, '\\"') + '"';
	    };

	    var _reduced = function _reduced(x) {
	        return x && x['@@transducer/reduced'] ? x : {
	            '@@transducer/value': x,
	            '@@transducer/reduced': true
	        };
	    };

	    /**
	     * An optimized, private array `slice` implementation.
	     *
	     * @private
	     * @param {Arguments|Array} args The array or arguments object to consider.
	     * @param {Number} [from=0] The array index to slice from, inclusive.
	     * @param {Number} [to=args.length] The array index to slice to, exclusive.
	     * @return {Array} A new, sliced array.
	     * @example
	     *
	     *      _slice([1, 2, 3, 4, 5], 1, 3); //=> [2, 3]
	     *
	     *      var firstThreeArgs = function(a, b, c, d) {
	     *        return _slice(arguments, 0, 3);
	     *      };
	     *      firstThreeArgs(1, 2, 3, 4); //=> [1, 2, 3]
	     */
	    var _slice = function _slice(args, from, to) {
	        switch (arguments.length) {
	        case 1:
	            return _slice(args, 0, args.length);
	        case 2:
	            return _slice(args, from, args.length);
	        default:
	            var list = [];
	            var idx = 0;
	            var len = Math.max(0, Math.min(args.length, to) - from);
	            while (idx < len) {
	                list[idx] = args[from + idx];
	                idx += 1;
	            }
	            return list;
	        }
	    };

	    /**
	     * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
	     */
	    var _toISOString = function () {
	        var pad = function pad(n) {
	            return (n < 10 ? '0' : '') + n;
	        };
	        return typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
	            return d.toISOString();
	        } : function _toISOString(d) {
	            return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
	        };
	    }();

	    var _xdropRepeatsWith = function () {
	        function XDropRepeatsWith(pred, xf) {
	            this.xf = xf;
	            this.pred = pred;
	            this.lastValue = undefined;
	            this.seenFirstValue = false;
	        }
	        XDropRepeatsWith.prototype['@@transducer/init'] = function () {
	            return this.xf['@@transducer/init']();
	        };
	        XDropRepeatsWith.prototype['@@transducer/result'] = function (result) {
	            return this.xf['@@transducer/result'](result);
	        };
	        XDropRepeatsWith.prototype['@@transducer/step'] = function (result, input) {
	            var sameAsLast = false;
	            if (!this.seenFirstValue) {
	                this.seenFirstValue = true;
	            } else if (this.pred(this.lastValue, input)) {
	                sameAsLast = true;
	            }
	            this.lastValue = input;
	            return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
	        };
	        return _curry2(function _xdropRepeatsWith(pred, xf) {
	            return new XDropRepeatsWith(pred, xf);
	        });
	    }();

	    var _xfBase = {
	        init: function () {
	            return this.xf['@@transducer/init']();
	        },
	        result: function (result) {
	            return this.xf['@@transducer/result'](result);
	        }
	    };

	    var _xfilter = function () {
	        function XFilter(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XFilter.prototype['@@transducer/init'] = _xfBase.init;
	        XFilter.prototype['@@transducer/result'] = _xfBase.result;
	        XFilter.prototype['@@transducer/step'] = function (result, input) {
	            return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
	        };
	        return _curry2(function _xfilter(f, xf) {
	            return new XFilter(f, xf);
	        });
	    }();

	    var _xfind = function () {
	        function XFind(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.found = false;
	        }
	        XFind.prototype['@@transducer/init'] = _xfBase.init;
	        XFind.prototype['@@transducer/result'] = function (result) {
	            if (!this.found) {
	                result = this.xf['@@transducer/step'](result, void 0);
	            }
	            return this.xf['@@transducer/result'](result);
	        };
	        XFind.prototype['@@transducer/step'] = function (result, input) {
	            if (this.f(input)) {
	                this.found = true;
	                result = _reduced(this.xf['@@transducer/step'](result, input));
	            }
	            return result;
	        };
	        return _curry2(function _xfind(f, xf) {
	            return new XFind(f, xf);
	        });
	    }();

	    var _xfindIndex = function () {
	        function XFindIndex(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.idx = -1;
	            this.found = false;
	        }
	        XFindIndex.prototype['@@transducer/init'] = _xfBase.init;
	        XFindIndex.prototype['@@transducer/result'] = function (result) {
	            if (!this.found) {
	                result = this.xf['@@transducer/step'](result, -1);
	            }
	            return this.xf['@@transducer/result'](result);
	        };
	        XFindIndex.prototype['@@transducer/step'] = function (result, input) {
	            this.idx += 1;
	            if (this.f(input)) {
	                this.found = true;
	                result = _reduced(this.xf['@@transducer/step'](result, this.idx));
	            }
	            return result;
	        };
	        return _curry2(function _xfindIndex(f, xf) {
	            return new XFindIndex(f, xf);
	        });
	    }();

	    var _xfindLast = function () {
	        function XFindLast(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XFindLast.prototype['@@transducer/init'] = _xfBase.init;
	        XFindLast.prototype['@@transducer/result'] = function (result) {
	            return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
	        };
	        XFindLast.prototype['@@transducer/step'] = function (result, input) {
	            if (this.f(input)) {
	                this.last = input;
	            }
	            return result;
	        };
	        return _curry2(function _xfindLast(f, xf) {
	            return new XFindLast(f, xf);
	        });
	    }();

	    var _xfindLastIndex = function () {
	        function XFindLastIndex(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.idx = -1;
	            this.lastIdx = -1;
	        }
	        XFindLastIndex.prototype['@@transducer/init'] = _xfBase.init;
	        XFindLastIndex.prototype['@@transducer/result'] = function (result) {
	            return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
	        };
	        XFindLastIndex.prototype['@@transducer/step'] = function (result, input) {
	            this.idx += 1;
	            if (this.f(input)) {
	                this.lastIdx = this.idx;
	            }
	            return result;
	        };
	        return _curry2(function _xfindLastIndex(f, xf) {
	            return new XFindLastIndex(f, xf);
	        });
	    }();

	    var _xmap = function () {
	        function XMap(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XMap.prototype['@@transducer/init'] = _xfBase.init;
	        XMap.prototype['@@transducer/result'] = _xfBase.result;
	        XMap.prototype['@@transducer/step'] = function (result, input) {
	            return this.xf['@@transducer/step'](result, this.f(input));
	        };
	        return _curry2(function _xmap(f, xf) {
	            return new XMap(f, xf);
	        });
	    }();

	    var _xtake = function () {
	        function XTake(n, xf) {
	            this.xf = xf;
	            this.n = n;
	        }
	        XTake.prototype['@@transducer/init'] = _xfBase.init;
	        XTake.prototype['@@transducer/result'] = _xfBase.result;
	        XTake.prototype['@@transducer/step'] = function (result, input) {
	            if (this.n === 0) {
	                return _reduced(result);
	            } else {
	                this.n -= 1;
	                return this.xf['@@transducer/step'](result, input);
	            }
	        };
	        return _curry2(function _xtake(n, xf) {
	            return new XTake(n, xf);
	        });
	    }();

	    var _xtakeWhile = function () {
	        function XTakeWhile(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
	        XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;
	        XTakeWhile.prototype['@@transducer/step'] = function (result, input) {
	            return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
	        };
	        return _curry2(function _xtakeWhile(f, xf) {
	            return new XTakeWhile(f, xf);
	        });
	    }();

	    var _xwrap = function () {
	        function XWrap(fn) {
	            this.f = fn;
	        }
	        XWrap.prototype['@@transducer/init'] = function () {
	            throw new Error('init not implemented on XWrap');
	        };
	        XWrap.prototype['@@transducer/result'] = function (acc) {
	            return acc;
	        };
	        XWrap.prototype['@@transducer/step'] = function (acc, x) {
	            return this.f(acc, x);
	        };
	        return function _xwrap(fn) {
	            return new XWrap(fn);
	        };
	    }();

	    /**
	     * Adds two numbers. Equivalent to `a + b` but curried.
	     *
	     * @func
	     * @memberOf R
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a
	     * @param {Number} b
	     * @return {Number}
	     * @see R.subtract
	     * @example
	     *
	     *      R.add(2, 3);       //=>  5
	     *      R.add(7)(10);      //=> 17
	     */
	    var add = _curry2(function add(a, b) {
	        return a + b;
	    });

	    /**
	     * Applies a function to the value at the given index of an array,
	     * returning a new copy of the array with the element at the given
	     * index replaced with the result of the function application.
	     * @see R.update
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> a) -> Number -> [a] -> [a]
	     * @param {Function} fn The function to apply.
	     * @param {Number} idx The index.
	     * @param {Array|Arguments} list An array-like object whose value
	     *        at the supplied index will be replaced.
	     * @return {Array} A copy of the supplied array-like object with
	     *         the element at index `idx` replaced with the value
	     *         returned by applying `fn` to the existing element.
	     * @example
	     *
	     *      R.adjust(R.add(10), 1, [0, 1, 2]);     //=> [0, 11, 2]
	     *      R.adjust(R.add(10))(1)([0, 1, 2]);     //=> [0, 11, 2]
	     */
	    var adjust = _curry3(function adjust(fn, idx, list) {
	        if (idx >= list.length || idx < -list.length) {
	            return list;
	        }
	        var start = idx < 0 ? list.length : 0;
	        var _idx = start + idx;
	        var _list = _concat(list);
	        _list[_idx] = fn(list[_idx]);
	        return _list;
	    });

	    /**
	     * Returns a function that always returns the given value. Note that for
	     * non-primitives the value returned is a reference to the original value.
	     *
	     * This function is known as `const`, `constant`, or `K` (for K combinator)
	     * in other languages and libraries.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig a -> (* -> a)
	     * @param {*} val The value to wrap in a function
	     * @return {Function} A Function :: * -> val.
	     * @example
	     *
	     *      var t = R.always('Tee');
	     *      t(); //=> 'Tee'
	     */
	    var always = _curry1(function always(val) {
	        return function () {
	            return val;
	        };
	    });

	    /**
	     * Returns a new list, composed of n-tuples of consecutive elements
	     * If `n` is greater than the length of the list, an empty list is returned.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig Number -> [a] -> [[a]]
	     * @param {Number} n The size of the tuples to create
	     * @param {Array} list The list to split into `n`-tuples
	     * @return {Array} The new list.
	     * @example
	     *
	     *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
	     *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
	     *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
	     */
	    var aperture = _curry2(function aperture(n, list) {
	        var idx = 0;
	        var limit = list.length - (n - 1);
	        var acc = new Array(limit >= 0 ? limit : 0);
	        while (idx < limit) {
	            acc[idx] = _slice(list, idx, idx + n);
	            idx += 1;
	        }
	        return acc;
	    });

	    /**
	     * Returns a new list containing the contents of the given list, followed by the given
	     * element.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig a -> [a] -> [a]
	     * @param {*} el The element to add to the end of the new list.
	     * @param {Array} list The list whose contents will be added to the beginning of the output
	     *        list.
	     * @return {Array} A new list containing the contents of the old list followed by `el`.
	     * @see R.prepend
	     * @example
	     *
	     *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
	     *      R.append('tests', []); //=> ['tests']
	     *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
	     */
	    var append = _curry2(function append(el, list) {
	        return _concat(list, [el]);
	    });

	    /**
	     * Applies function `fn` to the argument list `args`. This is useful for
	     * creating a fixed-arity function from a variadic function. `fn` should
	     * be a bound function if context is significant.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig (*... -> a) -> [*] -> a
	     * @param {Function} fn
	     * @param {Array} args
	     * @return {*}
	     * @see R.call, R.unapply
	     * @example
	     *
	     *      var nums = [1, 2, 3, -99, 42, 6, 7];
	     *      R.apply(Math.max, nums); //=> 42
	     */
	    var apply = _curry2(function apply(fn, args) {
	        return fn.apply(this, args);
	    });

	    /**
	     * Makes a shallow clone of an object, setting or overriding the specified
	     * property with the given value.  Note that this copies and flattens
	     * prototype properties onto the new object as well.  All non-primitive
	     * properties are copied by reference.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig String -> a -> {k: v} -> {k: v}
	     * @param {String} prop the property name to set
	     * @param {*} val the new value
	     * @param {Object} obj the object to clone
	     * @return {Object} a new object similar to the original except for the specified property.
	     * @see R.dissoc
	     * @example
	     *
	     *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
	     */
	    var assoc = _curry3(function assoc(prop, val, obj) {
	        var result = {};
	        for (var p in obj) {
	            result[p] = obj[p];
	        }
	        result[prop] = val;
	        return result;
	    });

	    /**
	     * Makes a shallow clone of an object, setting or overriding the nodes
	     * required to create the given path, and placing the specific value at the
	     * tail end of that path.  Note that this copies and flattens prototype
	     * properties onto the new object as well.  All non-primitive properties
	     * are copied by reference.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig [String] -> a -> {k: v} -> {k: v}
	     * @param {Array} path the path to set
	     * @param {*} val the new value
	     * @param {Object} obj the object to clone
	     * @return {Object} a new object similar to the original except along the specified path.
	     * @see R.dissocPath
	     * @example
	     *
	     *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
	     */
	    var assocPath = _curry3(function assocPath(path, val, obj) {
	        switch (path.length) {
	        case 0:
	            return obj;
	        case 1:
	            return assoc(path[0], val, obj);
	        default:
	            return assoc(path[0], assocPath(_slice(path, 1), val, Object(obj[path[0]])), obj);
	        }
	    });

	    /**
	     * Creates a function that is bound to a context.
	     * Note: `R.bind` does not provide the additional argument-binding capabilities of
	     * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @category Object
	     * @see R.partial
	     * @sig (* -> *) -> {*} -> (* -> *)
	     * @param {Function} fn The function to bind to context
	     * @param {Object} thisObj The context to bind `fn` to
	     * @return {Function} A function that will execute in the context of `thisObj`.
	     */
	    var bind = _curry2(function bind(fn, thisObj) {
	        return _arity(fn.length, function () {
	            return fn.apply(thisObj, arguments);
	        });
	    });

	    /**
	     * A function wrapping calls to the two functions in an `&&` operation, returning the result of the first
	     * function if it is false-y and the result of the second function otherwise.  Note that this is
	     * short-circuited, meaning that the second function will not be invoked if the first returns a false-y
	     * value.
	     *
	     * @func
	     * @memberOf R
	     * @category Logic
	     * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
	     * @param {Function} f a predicate
	     * @param {Function} g another predicate
	     * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
	     * @see R.and
	     * @example
	     *
	     *      var gt10 = function(x) { return x > 10; };
	     *      var even = function(x) { return x % 2 === 0 };
	     *      var f = R.both(gt10, even);
	     *      f(100); //=> true
	     *      f(101); //=> false
	     */
	    var both = _curry2(function both(f, g) {
	        return function _both() {
	            return f.apply(this, arguments) && g.apply(this, arguments);
	        };
	    });

	    /**
	     * Makes a comparator function out of a function that reports whether the first element is less than the second.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig (a, b -> Boolean) -> (a, b -> Number)
	     * @param {Function} pred A predicate function of arity two.
	     * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`.
	     * @example
	     *
	     *      var cmp = R.comparator(function(a, b) {
	     *        return a.age < b.age;
	     *      });
	     *      var people = [
	     *        // ...
	     *      ];
	     *      R.sort(cmp, people);
	     */
	    var comparator = _curry1(function comparator(pred) {
	        return function (a, b) {
	            return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
	        };
	    });

	    /**
	     * Takes a function `f` and returns a function `g` such that:
	     *
	     *   - applying `g` to zero or more arguments will give __true__ if applying
	     *     the same arguments to `f` gives a logical __false__ value; and
	     *
	     *   - applying `g` to zero or more arguments will give __false__ if applying
	     *     the same arguments to `f` gives a logical __true__ value.
	     *
	     * @func
	     * @memberOf R
	     * @category Logic
	     * @sig (*... -> *) -> (*... -> Boolean)
	     * @param {Function} f
	     * @return {Function}
	     * @see R.not
	     * @example
	     *
	     *      var isEven = function(n) { return n % 2 === 0; };
	     *      var isOdd = R.complement(isEven);
	     *      isOdd(21); //=> true
	     *      isOdd(42); //=> false
	     */
	    var complement = _curry1(_complement);

	    /**
	     * Returns a function, `fn`, which encapsulates if/else-if/else logic.
	     * `R.cond` takes a list of [predicate, transform] pairs. All of the
	     * arguments to `fn` are applied to each of the predicates in turn
	     * until one returns a "truthy" value, at which point `fn` returns the
	     * result of applying its arguments to the corresponding transformer.
	     * If none of the predicates matches, `fn` returns undefined.
	     *
	     * @func
	     * @memberOf R
	     * @category Logic
	     * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
	     * @param {Array} pairs
	     * @return {Function}
	     * @example
	     *
	     *      var fn = R.cond([
	     *        [R.equals(0),   R.always('water freezes at 0°C')],
	     *        [R.equals(100), R.always('water boils at 100°C')],
	     *        [R.T,           function(temp) { return 'nothing special happens at ' + temp + '°C'; }]
	     *      ]);
	     *      fn(0); //=> 'water freezes at 0°C'
	     *      fn(50); //=> 'nothing special happens at 50°C'
	     *      fn(100); //=> 'water boils at 100°C'
	     */
	    var cond = _curry1(function cond(pairs) {
	        return function () {
	            var idx = 0;
	            while (idx < pairs.length) {
	                if (pairs[idx][0].apply(this, arguments)) {
	                    return pairs[idx][1].apply(this, arguments);
	                }
	                idx += 1;
	            }
	        };
	    });

	    /**
	     * Returns `true` if the `x` is found in the `list`, using `pred` as an
	     * equality predicate for `x`.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a, a -> Boolean) -> a -> [a] -> Boolean
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {*} x The item to find
	     * @param {Array} list The list to iterate over
	     * @return {Boolean} `true` if `x` is in `list`, else `false`.
	     * @example
	     *
	     *      var xs = [{x: 12}, {x: 11}, {x: 10}];
	     *      R.containsWith(function(a, b) { return a.x === b.x; }, {x: 10}, xs); //=> true
	     *      R.containsWith(function(a, b) { return a.x === b.x; }, {x: 1}, xs); //=> false
	     */
	    var containsWith = _curry3(_containsWith);

	    /**
	     * Counts the elements of a list according to how many match each value
	     * of a key generated by the supplied function. Returns an object
	     * mapping the keys produced by `fn` to the number of occurrences in
	     * the list. Note that all keys are coerced to strings because of how
	     * JavaScript objects work.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig (a -> String) -> [a] -> {*}
	     * @param {Function} fn The function used to map values to keys.
	     * @param {Array} list The list to count elements from.
	     * @return {Object} An object mapping keys to number of occurrences in the list.
	     * @example
	     *
	     *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
	     *      var letters = R.split('', 'abcABCaaaBBc');
	     *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
	     *      R.countBy(R.toLower)(letters);   //=> {'a': 5, 'b': 4, 'c': 3}
	     */
	    var countBy = _curry2(function countBy(fn, list) {
	        var counts = {};
	        var len = list.length;
	        var idx = 0;
	        while (idx < len) {
	            var key = fn(list[idx]);
	            counts[key] = (_has(key, counts) ? counts[key] : 0) + 1;
	            idx += 1;
	        }
	        return counts;
	    });

	    /**
	     * Creates an object containing a single key:value pair.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig String -> a -> {String:a}
	     * @param {String} key
	     * @param {*} val
	     * @return {Object}
	     * @example
	     *
	     *      var matchPhrases = R.compose(
	     *        R.createMapEntry('must'),
	     *        R.map(R.createMapEntry('match_phrase'))
	     *      );
	     *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
	     */
	    var createMapEntry = _curry2(function createMapEntry(key, val) {
	        var obj = {};
	        obj[key] = val;
	        return obj;
	    });

	    /**
	     * Returns a curried equivalent of the provided function, with the
	     * specified arity. The curried function has two unusual capabilities.
	     * First, its arguments needn't be provided one at a time. If `g` is
	     * `R.curryN(3, f)`, the following are equivalent:
	     *
	     *   - `g(1)(2)(3)`
	     *   - `g(1)(2, 3)`
	     *   - `g(1, 2)(3)`
	     *   - `g(1, 2, 3)`
	     *
	     * Secondly, the special placeholder value `R.__` may be used to specify
	     * "gaps", allowing partial application of any combination of arguments,
	     * regardless of their positions. If `g` is as above and `_` is `R.__`,
	     * the following are equivalent:
	     *
	     *   - `g(1, 2, 3)`
	     *   - `g(_, 2, 3)(1)`
	     *   - `g(_, _, 3)(1)(2)`
	     *   - `g(_, _, 3)(1, 2)`
	     *   - `g(_, 2)(1)(3)`
	     *   - `g(_, 2)(1, 3)`
	     *   - `g(_, 2)(_, 3)(1)`
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig Number -> (* -> a) -> (* -> a)
	     * @param {Number} length The arity for the returned function.
	     * @param {Function} fn The function to curry.
	     * @return {Function} A new, curried function.
	     * @see R.curry
	     * @example
	     *
	     *      var addFourNumbers = function() {
	     *        return R.sum([].slice.call(arguments, 0, 4));
	     *      };
	     *
	     *      var curriedAddFourNumbers = R.curryN(4, addFourNumbers);
	     *      var f = curriedAddFourNumbers(1, 2);
	     *      var g = f(3);
	     *      g(4); //=> 10
	     */
	    var curryN = _curry2(function curryN(length, fn) {
	        if (length === 1) {
	            return _curry1(fn);
	        }
	        return _arity(length, _curryN(length, [], fn));
	    });

	    /**
	     * Decrements its argument.
	     *
	     * @func
	     * @memberOf R
	     * @category Math
	     * @sig Number -> Number
	     * @param {Number} n
	     * @return {Number}
	     * @see R.inc
	     * @example
	     *
	     *      R.dec(42); //=> 41
	     */
	    var dec = add(-1);

	    /**
	     * Returns the second argument if it is not null or undefined. If it is null
	     * or undefined, the first (default) argument is returned.
	     *
	     * @func
	     * @memberOf R
	     * @category Logic
	     * @sig a -> b -> a | b
	     * @param {a} val The default value.
	     * @param {b} val The value to return if it is not null or undefined
	     * @return {*} The the second value or the default value
	     * @example
	     *
	     *      var defaultTo42 = defaultTo(42);
	     *
	     *      defaultTo42(null);  //=> 42
	     *      defaultTo42(undefined);  //=> 42
	     *      defaultTo42('Ramda');  //=> 'Ramda'
	     */
	    var defaultTo = _curry2(function defaultTo(d, v) {
	        return v == null ? d : v;
	    });

	    /**
	     * Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list.
	     * Duplication is determined according to the value returned by applying the supplied predicate to two list
	     * elements.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig (a,a -> Boolean) -> [a] -> [a] -> [a]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @see R.difference
	     * @return {Array} The elements in `list1` that are not in `list2`.
	     * @example
	     *
	     *      function cmp(x, y) { return x.a === y.a; }
	     *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
	     *      var l2 = [{a: 3}, {a: 4}];
	     *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
	     */
	    var differenceWith = _curry3(function differenceWith(pred, first, second) {
	        var out = [];
	        var idx = 0;
	        var firstLen = first.length;
	        var containsPred = containsWith(pred);
	        while (idx < firstLen) {
	            if (!containsPred(first[idx], second) && !containsPred(first[idx], out)) {
	                out[out.length] = first[idx];
	            }
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns a new object that does not contain a `prop` property.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig String -> {k: v} -> {k: v}
	     * @param {String} prop the name of the property to dissociate
	     * @param {Object} obj the object to clone
	     * @return {Object} a new object similar to the original but without the specified property
	     * @see R.assoc
	     * @example
	     *
	     *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
	     */
	    var dissoc = _curry2(function dissoc(prop, obj) {
	        var result = {};
	        for (var p in obj) {
	            if (p !== prop) {
	                result[p] = obj[p];
	            }
	        }
	        return result;
	    });

	    /**
	     * Makes a shallow clone of an object, omitting the property at the
	     * given path. Note that this copies and flattens prototype properties
	     * onto the new object as well.  All non-primitive properties are copied
	     * by reference.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig [String] -> {k: v} -> {k: v}
	     * @param {Array} path the path to set
	     * @param {Object} obj the object to clone
	     * @return {Object} a new object without the property at path
	     * @see R.assocPath
	     * @example
	     *
	     *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
	     */
	    var dissocPath = _curry2(function dissocPath(path, obj) {
	        switch (path.length) {
	        case 0:
	            return obj;
	        case 1:
	            return dissoc(path[0], obj);
	        default:
	            var head = path[0];
	            var tail = _slice(path, 1);
	            return obj[head] == null ? obj : assoc(head, dissocPath(tail, obj[head]), obj);
	        }
	    });

	    /**
	     * Divides two numbers. Equivalent to `a / b`.
	     *
	     * @func
	     * @memberOf R
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a The first value.
	     * @param {Number} b The second value.
	     * @return {Number} The result of `a / b`.
	     * @see R.multiply
	     * @example
	     *
	     *      R.divide(71, 100); //=> 0.71
	     *
	     *      var half = R.divide(R.__, 2);
	     *      half(42); //=> 21
	     *
	     *      var reciprocal = R.divide(1);
	     *      reciprocal(4);   //=> 0.25
	     */
	    var divide = _curry2(function divide(a, b) {
	        return a / b;
	    });

	    /**
	     * Returns a new list containing all but last the`n` elements of a given list,
	     * passing each value from the right to the supplied predicate function, skipping
	     * elements while the predicate function returns `true`. The predicate function
	     * is passed one argument: (value)*.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [a]
	     * @param {Function} fn The function called per iteration.
	     * @param {Array} list The collection to iterate over.
	     * @return {Array} A new array.
	     * @see R.takeLastWhile
	     * @example
	     *
	     *      var lteThree = function(x) {
	     *        return x <= 3;
	     *      };
	     *
	     *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2]
	     */
	    var dropLastWhile = _curry2(function dropLastWhile(pred, list) {
	        var idx = list.length - 1;
	        while (idx >= 0 && pred(list[idx])) {
	            idx -= 1;
	        }
	        return _slice(list, 0, idx + 1);
	    });

	    /**
	     * A function wrapping calls to the two functions in an `||` operation, returning the result of the first
	     * function if it is truth-y and the result of the second function otherwise.  Note that this is
	     * short-circuited, meaning that the second function will not be invoked if the first returns a truth-y
	     * value.
	     *
	     * @func
	     * @memberOf R
	     * @category Logic
	     * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
	     * @param {Function} f a predicate
	     * @param {Function} g another predicate
	     * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
	     * @see R.or
	     * @example
	     *
	     *      var gt10 = function(x) { return x > 10; };
	     *      var even = function(x) { return x % 2 === 0 };
	     *      var f = R.either(gt10, even);
	     *      f(101); //=> true
	     *      f(8); //=> true
	     */
	    var either = _curry2(function either(f, g) {
	        return function _either() {
	            return f.apply(this, arguments) || g.apply(this, arguments);
	        };
	    });

	    /**
	     * Returns the empty value of its argument's type. Ramda defines the empty
	     * value of Array (`[]`), Object (`{}`), and String (`''`). Other types are
	     * supported if they define `<Type>.empty` and/or `<Type>.prototype.empty`.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig a -> a
	     * @param {*} x
	     * @return {*}
	     * @example
	     *
	     *      R.empty(Just(42));      //=> Nothing()
	     *      R.empty([1, 2, 3]);     //=> []
	     *      R.empty('unicorns');    //=> ''
	     *      R.empty({x: 1, y: 2});  //=> {}
	     */
	    var empty = _curry1(function empty(x) {
	        if (x != null && typeof x.empty === 'function') {
	            return x.empty();
	        } else if (x != null && typeof x.constructor != null && typeof x.constructor.empty === 'function') {
	            return x.constructor.empty();
	        } else {
	            switch (Object.prototype.toString.call(x)) {
	            case '[object Array]':
	                return [];
	            case '[object Object]':
	                return {};
	            case '[object String]':
	                return '';
	            }
	        }
	    });

	    /**
	     * Creates a new object by recursively evolving a shallow copy of `object`, according to the
	     * `transformation` functions. All non-primitive properties are copied by reference.
	     *
	     * A `tranformation` function will not be invoked if its corresponding key does not exist in
	     * the evolved object.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig {k: (v -> v)} -> {k: v} -> {k: v}
	     * @param {Object} transformations The object specifying transformation functions to apply
	     *        to the object.
	     * @param {Object} object The object to be transformed.
	     * @return {Object} The transformed object.
	     * @example
	     *
	     *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
	     *      var transformations = {
	     *        firstName: R.trim,
	     *        lastName: R.trim, // Will not get invoked.
	     *        data: {elapsed: R.add(1), remaining: R.add(-1)}
	     *      };
	     *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
	     */
	    var evolve = _curry2(function evolve(transformations, object) {
	        var transformation, key, type, result = {};
	        for (key in object) {
	            transformation = transformations[key];
	            type = typeof transformation;
	            result[key] = type === 'function' ? transformation(object[key]) : type === 'object' ? evolve(transformations[key], object[key]) : object[key];
	        }
	        return result;
	    });

	    /**
	     * Creates a new object out of a list key-value pairs.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig [[k,v]] -> {k: v}
	     * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
	     * @return {Object} The object made by pairing up `keys` and `values`.
	     * @see R.toPairs
	     * @example
	     *
	     *      R.fromPairs([['a', 1], ['b', 2],  ['c', 3]]); //=> {a: 1, b: 2, c: 3}
	     */
	    var fromPairs = _curry1(function fromPairs(pairs) {
	        var idx = 0, len = pairs.length, out = {};
	        while (idx < len) {
	            if (_isArray(pairs[idx]) && pairs[idx].length) {
	                out[pairs[idx][0]] = pairs[idx][1];
	            }
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns `true` if the first argument is greater than the second;
	     * `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig Ord a => a -> a -> Boolean
	     * @param {*} a
	     * @param {*} b
	     * @return {Boolean}
	     * @see R.lt
	     * @example
	     *
	     *      R.gt(2, 1); //=> true
	     *      R.gt(2, 2); //=> false
	     *      R.gt(2, 3); //=> false
	     *      R.gt('a', 'z'); //=> false
	     *      R.gt('z', 'a'); //=> true
	     */
	    var gt = _curry2(function gt(a, b) {
	        return a > b;
	    });

	    /**
	     * Returns `true` if the first argument is greater than or equal to the second;
	     * `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig Ord a => a -> a -> Boolean
	     * @param {Number} a
	     * @param {Number} b
	     * @return {Boolean}
	     * @see R.lte
	     * @example
	     *
	     *      R.gte(2, 1); //=> true
	     *      R.gte(2, 2); //=> true
	     *      R.gte(2, 3); //=> false
	     *      R.gte('a', 'z'); //=> false
	     *      R.gte('z', 'a'); //=> true
	     */
	    var gte = _curry2(function gte(a, b) {
	        return a >= b;
	    });

	    /**
	     * Returns whether or not an object has an own property with
	     * the specified name
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig s -> {s: x} -> Boolean
	     * @param {String} prop The name of the property to check for.
	     * @param {Object} obj The object to query.
	     * @return {Boolean} Whether the property exists.
	     * @example
	     *
	     *      var hasName = R.has('name');
	     *      hasName({name: 'alice'});   //=> true
	     *      hasName({name: 'bob'});     //=> true
	     *      hasName({});                //=> false
	     *
	     *      var point = {x: 0, y: 0};
	     *      var pointHas = R.has(R.__, point);
	     *      pointHas('x');  //=> true
	     *      pointHas('y');  //=> true
	     *      pointHas('z');  //=> false
	     */
	    var has = _curry2(_has);

	    /**
	     * Returns whether or not an object or its prototype chain has
	     * a property with the specified name
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig s -> {s: x} -> Boolean
	     * @param {String} prop The name of the property to check for.
	     * @param {Object} obj The object to query.
	     * @return {Boolean} Whether the property exists.
	     * @example
	     *
	     *      function Rectangle(width, height) {
	     *        this.width = width;
	     *        this.height = height;
	     *      }
	     *      Rectangle.prototype.area = function() {
	     *        return this.width * this.height;
	     *      };
	     *
	     *      var square = new Rectangle(2, 2);
	     *      R.hasIn('width', square);  //=> true
	     *      R.hasIn('area', square);  //=> true
	     */
	    var hasIn = _curry2(function hasIn(prop, obj) {
	        return prop in obj;
	    });

	    /**
	     * Returns true if its arguments are identical, false otherwise. Values are
	     * identical if they reference the same memory. `NaN` is identical to `NaN`;
	     * `0` and `-0` are not identical.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig a -> a -> Boolean
	     * @param {*} a
	     * @param {*} b
	     * @return {Boolean}
	     * @example
	     *
	     *      var o = {};
	     *      R.identical(o, o); //=> true
	     *      R.identical(1, 1); //=> true
	     *      R.identical(1, '1'); //=> false
	     *      R.identical([], []); //=> false
	     *      R.identical(0, -0); //=> false
	     *      R.identical(NaN, NaN); //=> true
	     */
	    // SameValue algorithm
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Step 6.a: NaN == NaN
	    var identical = _curry2(function identical(a, b) {
	        // SameValue algorithm
	        if (a === b) {
	            // Steps 1-5, 7-10
	            // Steps 6.b-6.e: +0 != -0
	            return a !== 0 || 1 / a === 1 / b;
	        } else {
	            // Step 6.a: NaN == NaN
	            return a !== a && b !== b;
	        }
	    });

	    /**
	     * A function that does nothing but return the parameter supplied to it. Good as a default
	     * or placeholder function.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig a -> a
	     * @param {*} x The value to return.
	     * @return {*} The input value, `x`.
	     * @example
	     *
	     *      R.identity(1); //=> 1
	     *
	     *      var obj = {};
	     *      R.identity(obj) === obj; //=> true
	     */
	    var identity = _curry1(_identity);

	    /**
	     * Creates a function that will process either the `onTrue` or the `onFalse` function depending
	     * upon the result of the `condition` predicate.
	     *
	     * @func
	     * @memberOf R
	     * @category Logic
	     * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
	     * @param {Function} condition A predicate function
	     * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
	     * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
	     * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
	     *                    function depending upon the result of the `condition` predicate.
	     * @example
	     *
	     *      // Flatten all arrays in the list but leave other values alone.
	     *      var flattenArrays = R.map(R.ifElse(Array.isArray, R.flatten, R.identity));
	     *
	     *      flattenArrays([[0], [[10], [8]], 1234, {}]); //=> [[0], [10, 8], 1234, {}]
	     *      flattenArrays([[[10], 123], [8, [10]], "hello"]); //=> [[10, 123], [8, 10], "hello"]
	     */
	    var ifElse = _curry3(function ifElse(condition, onTrue, onFalse) {
	        return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
	            return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
	        });
	    });

	    /**
	     * Increments its argument.
	     *
	     * @func
	     * @memberOf R
	     * @category Math
	     * @sig Number -> Number
	     * @param {Number} n
	     * @return {Number}
	     * @see R.dec
	     * @example
	     *
	     *      R.inc(42); //=> 43
	     */
	    var inc = add(1);

	    /**
	     * Inserts the supplied element into the list, at index `index`.  _Note
	     * that this is not destructive_: it returns a copy of the list with the changes.
	     * <small>No lists have been harmed in the application of this function.</small>
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig Number -> a -> [a] -> [a]
	     * @param {Number} index The position to insert the element
	     * @param {*} elt The element to insert into the Array
	     * @param {Array} list The list to insert into
	     * @return {Array} A new Array with `elt` inserted at `index`.
	     * @example
	     *
	     *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
	     */
	    var insert = _curry3(function insert(idx, elt, list) {
	        idx = idx < list.length && idx >= 0 ? idx : list.length;
	        var result = _slice(list);
	        result.splice(idx, 0, elt);
	        return result;
	    });

	    /**
	     * Inserts the sub-list into the list, at index `index`.  _Note  that this
	     * is not destructive_: it returns a copy of the list with the changes.
	     * <small>No lists have been harmed in the application of this function.</small>
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig Number -> [a] -> [a] -> [a]
	     * @param {Number} index The position to insert the sub-list
	     * @param {Array} elts The sub-list to insert into the Array
	     * @param {Array} list The list to insert the sub-list into
	     * @return {Array} A new Array with `elts` inserted starting at `index`.
	     * @example
	     *
	     *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
	     */
	    var insertAll = _curry3(function insertAll(idx, elts, list) {
	        idx = idx < list.length && idx >= 0 ? idx : list.length;
	        return _concat(_concat(_slice(list, 0, idx), elts), _slice(list, idx));
	    });

	    /**
	     * See if an object (`val`) is an instance of the supplied constructor.
	     * This function will check up the inheritance chain, if any.
	     *
	     * @func
	     * @memberOf R
	     * @category Type
	     * @sig (* -> {*}) -> a -> Boolean
	     * @param {Object} ctor A constructor
	     * @param {*} val The value to test
	     * @return {Boolean}
	     * @example
	     *
	     *      R.is(Object, {}); //=> true
	     *      R.is(Number, 1); //=> true
	     *      R.is(Object, 1); //=> false
	     *      R.is(String, 's'); //=> true
	     *      R.is(String, new String('')); //=> true
	     *      R.is(Object, new String('')); //=> true
	     *      R.is(Object, 's'); //=> false
	     *      R.is(Number, {}); //=> false
	     */
	    var is = _curry2(function is(Ctor, val) {
	        return val != null && val.constructor === Ctor || val instanceof Ctor;
	    });

	    /**
	     * Tests whether or not an object is similar to an array.
	     *
	     * @func
	     * @memberOf R
	     * @category Type
	     * @category List
	     * @sig * -> Boolean
	     * @param {*} x The object to test.
	     * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
	     * @example
	     *
	     *      R.isArrayLike([]); //=> true
	     *      R.isArrayLike(true); //=> false
	     *      R.isArrayLike({}); //=> false
	     *      R.isArrayLike({length: 10}); //=> false
	     *      R.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
	     */
	    var isArrayLike = _curry1(function isArrayLike(x) {
	        if (_isArray(x)) {
	            return true;
	        }
	        if (!x) {
	            return false;
	        }
	        if (typeof x !== 'object') {
	            return false;
	        }
	        if (x instanceof String) {
	            return false;
	        }
	        if (x.nodeType === 1) {
	            return !!x.length;
	        }
	        if (x.length === 0) {
	            return true;
	        }
	        if (x.length > 0) {
	            return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
	        }
	        return false;
	    });

	    /**
	     * Reports whether the list has zero elements.
	     *
	     * @func
	     * @memberOf R
	     * @category Logic
	     * @sig [a] -> Boolean
	     * @param {Array} list
	     * @return {Boolean}
	     * @example
	     *
	     *      R.isEmpty([1, 2, 3]);   //=> false
	     *      R.isEmpty([]);          //=> true
	     *      R.isEmpty('');          //=> true
	     *      R.isEmpty(null);        //=> false
	     *      R.isEmpty(R.keys({}));  //=> true
	     *      R.isEmpty({});          //=> false ({} does not have a length property)
	     *      R.isEmpty({length: 0}); //=> true
	     */
	    var isEmpty = _curry1(function isEmpty(list) {
	        return Object(list).length === 0;
	    });

	    /**
	     * Checks if the input value is `null` or `undefined`.
	     *
	     * @func
	     * @memberOf R
	     * @category Type
	     * @sig * -> Boolean
	     * @param {*} x The value to test.
	     * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
	     * @example
	     *
	     *      R.isNil(null); //=> true
	     *      R.isNil(undefined); //=> true
	     *      R.isNil(0); //=> false
	     *      R.isNil([]); //=> false
	     */
	    var isNil = _curry1(function isNil(x) {
	        return x == null;
	    });

	    /**
	     * Returns a list containing the names of all the enumerable own
	     * properties of the supplied object.
	     * Note that the order of the output array is not guaranteed to be
	     * consistent across different JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig {k: v} -> [k]
	     * @param {Object} obj The object to extract properties from
	     * @return {Array} An array of the object's own properties.
	     * @example
	     *
	     *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
	     */
	    // cover IE < 9 keys issues
	    var keys = function () {
	        // cover IE < 9 keys issues
	        var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
	        var nonEnumerableProps = [
	            'constructor',
	            'valueOf',
	            'isPrototypeOf',
	            'toString',
	            'propertyIsEnumerable',
	            'hasOwnProperty',
	            'toLocaleString'
	        ];
	        var contains = function contains(list, item) {
	            var idx = 0;
	            while (idx < list.length) {
	                if (list[idx] === item) {
	                    return true;
	                }
	                idx += 1;
	            }
	            return false;
	        };
	        return typeof Object.keys === 'function' ? _curry1(function keys(obj) {
	            return Object(obj) !== obj ? [] : Object.keys(obj);
	        }) : _curry1(function keys(obj) {
	            if (Object(obj) !== obj) {
	                return [];
	            }
	            var prop, ks = [], nIdx;
	            for (prop in obj) {
	                if (_has(prop, obj)) {
	                    ks[ks.length] = prop;
	                }
	            }
	            if (hasEnumBug) {
	                nIdx = nonEnumerableProps.length - 1;
	                while (nIdx >= 0) {
	                    prop = nonEnumerableProps[nIdx];
	                    if (_has(prop, obj) && !contains(ks, prop)) {
	                        ks[ks.length] = prop;
	                    }
	                    nIdx -= 1;
	                }
	            }
	            return ks;
	        });
	    }();

	    /**
	     * Returns a list containing the names of all the
	     * properties of the supplied object, including prototype properties.
	     * Note that the order of the output array is not guaranteed to be
	     * consistent across different JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig {k: v} -> [k]
	     * @param {Object} obj The object to extract properties from
	     * @return {Array} An array of the object's own and prototype properties.
	     * @example
	     *
	     *      var F = function() { this.x = 'X'; };
	     *      F.prototype.y = 'Y';
	     *      var f = new F();
	     *      R.keysIn(f); //=> ['x', 'y']
	     */
	    var keysIn = _curry1(function keysIn(obj) {
	        var prop, ks = [];
	        for (prop in obj) {
	            ks[ks.length] = prop;
	        }
	        return ks;
	    });

	    /**
	     * Returns the number of elements in the array by returning `list.length`.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig [a] -> Number
	     * @param {Array} list The array to inspect.
	     * @return {Number} The length of the array.
	     * @example
	     *
	     *      R.length([]); //=> 0
	     *      R.length([1, 2, 3]); //=> 3
	     */
	    var length = _curry1(function length(list) {
	        return list != null && is(Number, list.length) ? list.length : NaN;
	    });

	    /**
	     * Returns `true` if the first argument is less than the second;
	     * `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig Ord a => a -> a -> Boolean
	     * @param {*} a
	     * @param {*} b
	     * @return {Boolean}
	     * @see R.gt
	     * @example
	     *
	     *      R.lt(2, 1); //=> false
	     *      R.lt(2, 2); //=> false
	     *      R.lt(2, 3); //=> true
	     *      R.lt('a', 'z'); //=> true
	     *      R.lt('z', 'a'); //=> false
	     */
	    var lt = _curry2(function lt(a, b) {
	        return a < b;
	    });

	    /**
	     * Returns `true` if the first argument is less than or equal to the second;
	     * `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig Ord a => a -> a -> Boolean
	     * @param {Number} a
	     * @param {Number} b
	     * @return {Boolean}
	     * @see R.gte
	     * @example
	     *
	     *      R.lte(2, 1); //=> false
	     *      R.lte(2, 2); //=> true
	     *      R.lte(2, 3); //=> true
	     *      R.lte('a', 'z'); //=> true
	     *      R.lte('z', 'a'); //=> false
	     */
	    var lte = _curry2(function lte(a, b) {
	        return a <= b;
	    });

	    /**
	     * The mapAccum function behaves like a combination of map and reduce; it applies a
	     * function to each element of a list, passing an accumulating parameter from left to
	     * right, and returning a final value of this accumulator together with the new list.
	     *
	     * The iterator function receives two arguments, *acc* and *value*, and should return
	     * a tuple *[acc, value]*.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
	     * @param {Function} fn The function to be called on every element of the input `list`.
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @example
	     *
	     *      var digits = ['1', '2', '3', '4'];
	     *      var append = function(a, b) {
	     *        return [a + b, a + b];
	     *      }
	     *
	     *      R.mapAccum(append, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
	     */
	    var mapAccum = _curry3(function mapAccum(fn, acc, list) {
	        var idx = 0, len = list.length, result = [], tuple = [acc];
	        while (idx < len) {
	            tuple = fn(tuple[0], list[idx]);
	            result[idx] = tuple[1];
	            idx += 1;
	        }
	        return [
	            tuple[0],
	            result
	        ];
	    });

	    /**
	     * The mapAccumRight function behaves like a combination of map and reduce; it applies a
	     * function to each element of a list, passing an accumulating parameter from right
	     * to left, and returning a final value of this accumulator together with the new list.
	     *
	     * Similar to `mapAccum`, except moves through the input list from the right to the
	     * left.
	     *
	     * The iterator function receives two arguments, *acc* and *value*, and should return
	     * a tuple *[acc, value]*.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
	     * @param {Function} fn The function to be called on every element of the input `list`.
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @example
	     *
	     *      var digits = ['1', '2', '3', '4'];
	     *      var append = function(a, b) {
	     *        return [a + b, a + b];
	     *      }
	     *
	     *      R.mapAccumRight(append, 0, digits); //=> ['04321', ['04321', '0432', '043', '04']]
	     */
	    var mapAccumRight = _curry3(function mapAccumRight(fn, acc, list) {
	        var idx = list.length - 1, result = [], tuple = [acc];
	        while (idx >= 0) {
	            tuple = fn(tuple[0], list[idx]);
	            result[idx] = tuple[1];
	            idx -= 1;
	        }
	        return [
	            tuple[0],
	            result
	        ];
	    });

	    /**
	     * Tests a regular expression against a String. Note that this function
	     * will return an empty array when there are no matches. This differs
	     * from [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
	     * which returns `null` when there are no matches.
	     *
	     * @func
	     * @memberOf R
	     * @see R.test
	     * @category String
	     * @sig RegExp -> String -> [String | Undefined]
	     * @param {RegExp} rx A regular expression.
	     * @param {String} str The string to match against
	     * @return {Array} The list of matches or empty array.
	     * @example
	     *
	     *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
	     *      R.match(/a/, 'b'); //=> []
	     *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
	     */
	    var match = _curry2(function match(rx, str) {
	        return str.match(rx) || [];
	    });

	    /**
	     * mathMod behaves like the modulo operator should mathematically, unlike the `%`
	     * operator (and by extension, R.modulo). So while "-17 % 5" is -2,
	     * mathMod(-17, 5) is 3. mathMod requires Integer arguments, and returns NaN
	     * when the modulus is zero or negative.
	     *
	     * @func
	     * @memberOf R
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} m The dividend.
	     * @param {Number} p the modulus.
	     * @return {Number} The result of `b mod a`.
	     * @example
	     *
	     *      R.mathMod(-17, 5);  //=> 3
	     *      R.mathMod(17, 5);   //=> 2
	     *      R.mathMod(17, -5);  //=> NaN
	     *      R.mathMod(17, 0);   //=> NaN
	     *      R.mathMod(17.2, 5); //=> NaN
	     *      R.mathMod(17, 5.3); //=> NaN
	     *
	     *      var clock = R.mathMod(R.__, 12);
	     *      clock(15); //=> 3
	     *      clock(24); //=> 0
	     *
	     *      var seventeenMod = R.mathMod(17);
	     *      seventeenMod(3);  //=> 2
	     *      seventeenMod(4);  //=> 1
	     *      seventeenMod(10); //=> 7
	     */
	    var mathMod = _curry2(function mathMod(m, p) {
	        if (!_isInteger(m)) {
	            return NaN;
	        }
	        if (!_isInteger(p) || p < 1) {
	            return NaN;
	        }
	        return (m % p + p) % p;
	    });

	    /**
	     * Returns the larger of its two arguments.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig Ord a => a -> a -> a
	     * @param {*} a
	     * @param {*} b
	     * @return {*}
	     * @see R.maxBy, R.min
	     * @example
	     *
	     *      R.max(789, 123); //=> 789
	     *      R.max('a', 'b'); //=> 'b'
	     */
	    var max = _curry2(function max(a, b) {
	        return b > a ? b : a;
	    });

	    /**
	     * Takes a function and two values, and returns whichever value produces
	     * the larger result when passed to the provided function.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig Ord b => (a -> b) -> a -> a -> a
	     * @param {Function} f
	     * @param {*} a
	     * @param {*} b
	     * @return {*}
	     * @see R.max, R.minBy
	     * @example
	     *
	     *      R.maxBy(function(n) { return n * n; }, -3, 2); //=> -3
	     */
	    var maxBy = _curry3(function maxBy(f, a, b) {
	        return f(b) > f(a) ? b : a;
	    });

	    /**
	     * Create a new object with the own properties of `a`
	     * merged with the own properties of object `b`.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig {k: v} -> {k: v} -> {k: v}
	     * @param {Object} a
	     * @param {Object} b
	     * @return {Object}
	     * @example
	     *
	     *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
	     *      //=> { 'name': 'fred', 'age': 40 }
	     *
	     *      var resetToDefault = R.merge(R.__, {x: 0});
	     *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
	     */
	    var merge = _curry2(function merge(a, b) {
	        var result = {};
	        var ks = keys(a);
	        var idx = 0;
	        while (idx < ks.length) {
	            result[ks[idx]] = a[ks[idx]];
	            idx += 1;
	        }
	        ks = keys(b);
	        idx = 0;
	        while (idx < ks.length) {
	            result[ks[idx]] = b[ks[idx]];
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Returns the smaller of its two arguments.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig Ord a => a -> a -> a
	     * @param {*} a
	     * @param {*} b
	     * @return {*}
	     * @see R.minBy, R.max
	     * @example
	     *
	     *      R.min(789, 123); //=> 123
	     *      R.min('a', 'b'); //=> 'a'
	     */
	    var min = _curry2(function min(a, b) {
	        return b < a ? b : a;
	    });

	    /**
	     * Takes a function and two values, and returns whichever value produces
	     * the smaller result when passed to the provided function.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig Ord b => (a -> b) -> a -> a -> a
	     * @param {Function} f
	     * @param {*} a
	     * @param {*} b
	     * @return {*}
	     * @see R.min, R.maxBy
	     * @example
	     *
	     *      R.minBy(function(n) { return n * n; }, -3, 2); //=> 2
	     */
	    var minBy = _curry3(function minBy(f, a, b) {
	        return f(b) < f(a) ? b : a;
	    });

	    /**
	     * Divides the second parameter by the first and returns the remainder.
	     * Note that this functions preserves the JavaScript-style behavior for
	     * modulo. For mathematical modulo see `mathMod`
	     *
	     * @func
	     * @memberOf R
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a The value to the divide.
	     * @param {Number} b The pseudo-modulus
	     * @return {Number} The result of `b % a`.
	     * @see R.mathMod
	     * @example
	     *
	     *      R.modulo(17, 3); //=> 2
	     *      // JS behavior:
	     *      R.modulo(-17, 3); //=> -2
	     *      R.modulo(17, -3); //=> 2
	     *
	     *      var isOdd = R.modulo(R.__, 2);
	     *      isOdd(42); //=> 0
	     *      isOdd(21); //=> 1
	     */
	    var modulo = _curry2(function modulo(a, b) {
	        return a % b;
	    });

	    /**
	     * Multiplies two numbers. Equivalent to `a * b` but curried.
	     *
	     * @func
	     * @memberOf R
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a The first value.
	     * @param {Number} b The second value.
	     * @return {Number} The result of `a * b`.
	     * @see R.divide
	     * @example
	     *
	     *      var double = R.multiply(2);
	     *      var triple = R.multiply(3);
	     *      double(3);       //=>  6
	     *      triple(4);       //=> 12
	     *      R.multiply(2, 5);  //=> 10
	     */
	    var multiply = _curry2(function multiply(a, b) {
	        return a * b;
	    });

	    /**
	     * Wraps a function of any arity (including nullary) in a function that accepts exactly `n`
	     * parameters. Any extraneous parameters will not be passed to the supplied function.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig Number -> (* -> a) -> (* -> a)
	     * @param {Number} n The desired arity of the new function.
	     * @param {Function} fn The function to wrap.
	     * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
	     *         arity `n`.
	     * @example
	     *
	     *      var takesTwoArgs = function(a, b) {
	     *        return [a, b];
	     *      };
	     *      takesTwoArgs.length; //=> 2
	     *      takesTwoArgs(1, 2); //=> [1, 2]
	     *
	     *      var takesOneArg = R.nAry(1, takesTwoArgs);
	     *      takesOneArg.length; //=> 1
	     *      // Only `n` arguments are passed to the wrapped function
	     *      takesOneArg(1, 2); //=> [1, undefined]
	     */
	    var nAry = _curry2(function nAry(n, fn) {
	        switch (n) {
	        case 0:
	            return function () {
	                return fn.call(this);
	            };
	        case 1:
	            return function (a0) {
	                return fn.call(this, a0);
	            };
	        case 2:
	            return function (a0, a1) {
	                return fn.call(this, a0, a1);
	            };
	        case 3:
	            return function (a0, a1, a2) {
	                return fn.call(this, a0, a1, a2);
	            };
	        case 4:
	            return function (a0, a1, a2, a3) {
	                return fn.call(this, a0, a1, a2, a3);
	            };
	        case 5:
	            return function (a0, a1, a2, a3, a4) {
	                return fn.call(this, a0, a1, a2, a3, a4);
	            };
	        case 6:
	            return function (a0, a1, a2, a3, a4, a5) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5);
	            };
	        case 7:
	            return function (a0, a1, a2, a3, a4, a5, a6) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
	            };
	        case 8:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
	            };
	        case 9:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
	            };
	        case 10:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
	            };
	        default:
	            throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
	        }
	    });

	    /**
	     * Negates its argument.
	     *
	     * @func
	     * @memberOf R
	     * @category Math
	     * @sig Number -> Number
	     * @param {Number} n
	     * @return {Number}
	     * @example
	     *
	     *      R.negate(42); //=> -42
	     */
	    var negate = _curry1(function negate(n) {
	        return -n;
	    });

	    /**
	     * A function that returns the `!` of its argument. It will return `true` when
	     * passed false-y value, and `false` when passed a truth-y one.
	     *
	     * @func
	     * @memberOf R
	     * @category Logic
	     * @sig * -> Boolean
	     * @param {*} a any value
	     * @return {Boolean} the logical inverse of passed argument.
	     * @see R.complement
	     * @example
	     *
	     *      R.not(true); //=> false
	     *      R.not(false); //=> true
	     *      R.not(0); => true
	     *      R.not(1); => false
	     */
	    var not = _curry1(function not(a) {
	        return !a;
	    });

	    /**
	     * Returns the nth element of the given list or string.
	     * If n is negative the element at index length + n is returned.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig Number -> [a] -> a | Undefined
	     * @sig Number -> String -> String
	     * @param {Number} offset
	     * @param {*} list
	     * @return {*}
	     * @example
	     *
	     *      var list = ['foo', 'bar', 'baz', 'quux'];
	     *      R.nth(1, list); //=> 'bar'
	     *      R.nth(-1, list); //=> 'quux'
	     *      R.nth(-99, list); //=> undefined
	     *
	     *      R.nth('abc', 2); //=> 'c'
	     *      R.nth('abc', 3); //=> ''
	     */
	    var nth = _curry2(function nth(offset, list) {
	        var idx = offset < 0 ? list.length + offset : offset;
	        return _isString(list) ? list.charAt(idx) : list[idx];
	    });

	    /**
	     * Returns a function which returns its nth argument.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig Number -> *... -> *
	     * @param {Number} n
	     * @return {Function}
	     * @example
	     *
	     *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
	     *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
	     */
	    var nthArg = _curry1(function nthArg(n) {
	        return function () {
	            return nth(n, arguments);
	        };
	    });

	    /**
	     * Returns the nth character of the given string.
	     *
	     * @func
	     * @memberOf R
	     * @category String
	     * @sig Number -> String -> String
	     * @param {Number} n
	     * @param {String} str
	     * @return {String}
	     * @deprecated since v0.16.0
	     * @example
	     *
	     *      R.nthChar(2, 'Ramda'); //=> 'm'
	     *      R.nthChar(-2, 'Ramda'); //=> 'd'
	     */
	    var nthChar = _curry2(function nthChar(n, str) {
	        return str.charAt(n < 0 ? str.length + n : n);
	    });

	    /**
	     * Returns the character code of the nth character of the given string.
	     *
	     * @func
	     * @memberOf R
	     * @category String
	     * @sig Number -> String -> Number
	     * @param {Number} n
	     * @param {String} str
	     * @return {Number}
	     * @deprecated since v0.16.0
	     * @example
	     *
	     *      R.nthCharCode(2, 'Ramda'); //=> 'm'.charCodeAt(0)
	     *      R.nthCharCode(-2, 'Ramda'); //=> 'd'.charCodeAt(0)
	     */
	    var nthCharCode = _curry2(function nthCharCode(n, str) {
	        return str.charCodeAt(n < 0 ? str.length + n : n);
	    });

	    /**
	     * Returns a singleton array containing the value provided.
	     *
	     * Note this `of` is different from the ES6 `of`; See
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig a -> [a]
	     * @param {*} x any value
	     * @return {Array} An array wrapping `x`.
	     * @example
	     *
	     *      R.of(null); //=> [null]
	     *      R.of([42]); //=> [[42]]
	     */
	    var of = _curry1(function of(x) {
	        return [x];
	    });

	    /**
	     * Accepts a function `fn` and returns a function that guards invocation of `fn` such that
	     * `fn` can only ever be called once, no matter how many times the returned function is
	     * invoked.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig (a... -> b) -> (a... -> b)
	     * @param {Function} fn The function to wrap in a call-only-once wrapper.
	     * @return {Function} The wrapped function.
	     * @example
	     *
	     *      var addOneOnce = R.once(function(x){ return x + 1; });
	     *      addOneOnce(10); //=> 11
	     *      addOneOnce(addOneOnce(50)); //=> 11
	     */
	    var once = _curry1(function once(fn) {
	        var called = false, result;
	        return function () {
	            if (called) {
	                return result;
	            }
	            called = true;
	            result = fn.apply(this, arguments);
	            return result;
	        };
	    });

	    /**
	     * Returns the result of "setting" the portion of the given data structure
	     * focused by the given lens to the given value.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @typedef Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig Lens s a -> (a -> a) -> s -> s
	     * @param {Lens} lens
	     * @param {*} v
	     * @param {*} x
	     * @return {*}
	     * @see R.prop, R.lensIndex, R.lensProp
	     * @example
	     *
	     *      var headLens = R.lensIndex(0);
	     *
	     *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
	     */
	    var over = function () {
	        var Identity = function (x) {
	            return {
	                value: x,
	                map: function (f) {
	                    return Identity(f(x));
	                }
	            };
	        };
	        return _curry3(function over(lens, f, x) {
	            return lens(function (y) {
	                return Identity(f(y));
	            })(x).value;
	        });
	    }();

	    /**
	     * Retrieve the value at a given path.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig [String] -> {k: v} -> v | Undefined
	     * @param {Array} path The path to use.
	     * @return {*} The data at `path`.
	     * @example
	     *
	     *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
	     *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
	     */
	    var path = _curry2(function path(paths, obj) {
	        if (obj == null) {
	            return;
	        } else {
	            var val = obj;
	            for (var idx = 0, len = paths.length; idx < len && val != null; idx += 1) {
	                val = val[paths[idx]];
	            }
	            return val;
	        }
	    });

	    /**
	     * Returns a partial copy of an object containing only the keys specified.  If the key does not exist, the
	     * property is ignored.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig [k] -> {k: v} -> {k: v}
	     * @param {Array} names an array of String property names to copy onto a new object
	     * @param {Object} obj The object to copy from
	     * @return {Object} A new object with only properties from `names` on it.
	     * @see R.omit
	     * @example
	     *
	     *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
	     *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
	     */
	    var pick = _curry2(function pick(names, obj) {
	        var result = {};
	        var idx = 0;
	        while (idx < names.length) {
	            if (names[idx] in obj) {
	                result[names[idx]] = obj[names[idx]];
	            }
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Similar to `pick` except that this one includes a `key: undefined` pair for properties that don't exist.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig [k] -> {k: v} -> {k: v}
	     * @param {Array} names an array of String property names to copy onto a new object
	     * @param {Object} obj The object to copy from
	     * @return {Object} A new object with only properties from `names` on it.
	     * @see R.pick
	     * @example
	     *
	     *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
	     *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
	     */
	    var pickAll = _curry2(function pickAll(names, obj) {
	        var result = {};
	        var idx = 0;
	        var len = names.length;
	        while (idx < len) {
	            var name = names[idx];
	            result[name] = obj[name];
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Returns a partial copy of an object containing only the keys that
	     * satisfy the supplied predicate.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig (v, k -> Boolean) -> {k: v} -> {k: v}
	     * @param {Function} pred A predicate to determine whether or not a key
	     *        should be included on the output object.
	     * @param {Object} obj The object to copy from
	     * @return {Object} A new object with only properties that satisfy `pred`
	     *         on it.
	     * @see R.pick
	     * @example
	     *
	     *      var isUpperCase = function(val, key) { return key.toUpperCase() === key; }
	     *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
	     */
	    var pickBy = _curry2(function pickBy(test, obj) {
	        var result = {};
	        for (var prop in obj) {
	            if (test(obj[prop], prop, obj)) {
	                result[prop] = obj[prop];
	            }
	        }
	        return result;
	    });

	    /**
	     * Returns a new list with the given element at the front, followed by the contents of the
	     * list.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig a -> [a] -> [a]
	     * @param {*} el The item to add to the head of the output list.
	     * @param {Array} list The array to add to the tail of the output list.
	     * @return {Array} A new array.
	     * @see R.append
	     * @example
	     *
	     *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
	     */
	    var prepend = _curry2(function prepend(el, list) {
	        return _concat([el], list);
	    });

	    /**
	     * Returns a function that when supplied an object returns the indicated property of that object, if it exists.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig s -> {s: a} -> a | Undefined
	     * @param {String} p The property name
	     * @param {Object} obj The object to query
	     * @return {*} The value at `obj.p`.
	     * @example
	     *
	     *      R.prop('x', {x: 100}); //=> 100
	     *      R.prop('x', {}); //=> undefined
	     */
	    var prop = _curry2(function prop(p, obj) {
	        return obj[p];
	    });

	    /**
	     * If the given, non-null object has an own property with the specified name,
	     * returns the value of that property.
	     * Otherwise returns the provided default value.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig a -> String -> Object -> a
	     * @param {*} val The default value.
	     * @param {String} p The name of the property to return.
	     * @param {Object} obj The object to query.
	     * @return {*} The value of given property of the supplied object or the default value.
	     * @example
	     *
	     *      var alice = {
	     *        name: 'ALICE',
	     *        age: 101
	     *      };
	     *      var favorite = R.prop('favoriteLibrary');
	     *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
	     *
	     *      favorite(alice);  //=> undefined
	     *      favoriteWithDefault(alice);  //=> 'Ramda'
	     */
	    var propOr = _curry3(function propOr(val, p, obj) {
	        return obj != null && _has(p, obj) ? obj[p] : val;
	    });

	    /**
	     * Returns `true` if the specified object property satisfies the given
	     * predicate; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @category Logic
	     * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
	     * @param {Function} pred
	     * @param {String} name
	     * @param {*} obj
	     * @return {Boolean}
	     * @see R.propEq
	     * @see R.propIs
	     * @example
	     *
	     *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
	     */
	    var propSatisfies = _curry3(function propSatisfies(pred, name, obj) {
	        return pred(obj[name]);
	    });

	    /**
	     * Acts as multiple `prop`: array of keys in, array of values out. Preserves order.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig [k] -> {k: v} -> [v]
	     * @param {Array} ps The property names to fetch
	     * @param {Object} obj The object to query
	     * @return {Array} The corresponding values or partially applied function.
	     * @example
	     *
	     *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
	     *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
	     *
	     *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
	     *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
	     */
	    var props = _curry2(function props(ps, obj) {
	        var len = ps.length;
	        var out = [];
	        var idx = 0;
	        while (idx < len) {
	            out[idx] = obj[ps[idx]];
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns a list of numbers from `from` (inclusive) to `to`
	     * (exclusive).
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig Number -> Number -> [Number]
	     * @param {Number} from The first number in the list.
	     * @param {Number} to One more than the last number in the list.
	     * @return {Array} The list of numbers in tthe set `[a, b)`.
	     * @example
	     *
	     *      R.range(1, 5);    //=> [1, 2, 3, 4]
	     *      R.range(50, 53);  //=> [50, 51, 52]
	     */
	    var range = _curry2(function range(from, to) {
	        if (!(_isNumber(from) && _isNumber(to))) {
	            throw new TypeError('Both arguments to range must be numbers');
	        }
	        var result = [];
	        var n = from;
	        while (n < to) {
	            result.push(n);
	            n += 1;
	        }
	        return result;
	    });

	    /**
	     * Returns a single item by iterating through the list, successively calling the iterator
	     * function and passing it an accumulator value and the current value from the array, and
	     * then passing the result to the next call.
	     *
	     * Similar to `reduce`, except moves through the input list from the right to the left.
	     *
	     * The iterator function receives two values: *(acc, value)*
	     *
	     * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse arrays), unlike
	     * the native `Array.prototype.reduce` method. For more details on this behavior, see:
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a,b -> a) -> a -> [b] -> a
	     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	     *        current element from the array.
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @example
	     *
	     *      var pairs = [ ['a', 1], ['b', 2], ['c', 3] ];
	     *      var flattenPairs = function(acc, pair) {
	     *        return acc.concat(pair);
	     *      };
	     *
	     *      R.reduceRight(flattenPairs, [], pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
	     */
	    var reduceRight = _curry3(function reduceRight(fn, acc, list) {
	        var idx = list.length - 1;
	        while (idx >= 0) {
	            acc = fn(acc, list[idx]);
	            idx -= 1;
	        }
	        return acc;
	    });

	    /**
	     * Returns a value wrapped to indicate that it is the final value of the
	     * reduce and transduce functions.  The returned value
	     * should be considered a black box: the internal structure is not
	     * guaranteed to be stable.
	     *
	     * Note: this optimization is unavailable to functions not explicitly listed
	     * above.  For instance, it is not currently supported by reduceIndexed,
	     * reduceRight, or reduceRightIndexed.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @see R.reduce, R.transduce
	     * @sig a -> *
	     * @param {*} x The final value of the reduce.
	     * @return {*} The wrapped value.
	     * @example
	     *
	     *      R.reduce(
	     *        R.pipe(R.add, R.ifElse(R.lte(10), R.reduced, R.identity)),
	     *        0,
	     *        [1, 2, 3, 4, 5]) // 10
	     */
	    var reduced = _curry1(_reduced);

	    /**
	     * Removes the sub-list of `list` starting at index `start` and containing
	     * `count` elements.  _Note that this is not destructive_: it returns a
	     * copy of the list with the changes.
	     * <small>No lists have been harmed in the application of this function.</small>
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig Number -> Number -> [a] -> [a]
	     * @param {Number} start The position to start removing elements
	     * @param {Number} count The number of elements to remove
	     * @param {Array} list The list to remove from
	     * @return {Array} A new Array with `count` elements from `start` removed.
	     * @example
	     *
	     *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
	     */
	    var remove = _curry3(function remove(start, count, list) {
	        return _concat(_slice(list, 0, Math.min(start, list.length)), _slice(list, Math.min(list.length, start + count)));
	    });

	    /**
	     * Replace a substring or regex match in a string with a replacement.
	     *
	     * @func
	     * @memberOf R
	     * @category String
	     * @sig RegExp|String -> String -> String -> String
	     * @param {RegExp|String} pattern A regular expression or a substring to match.
	     * @param {String} replacement The string to replace the matches with.
	     * @param {String} str The String to do the search and replacement in.
	     * @return {String} The result.
	     * @example
	     *
	     *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
	     *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
	     *
	     *      // Use the "g" (global) flag to replace all occurrences:
	     *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
	     */
	    var replace = _curry3(function replace(regex, replacement, str) {
	        return str.replace(regex, replacement);
	    });

	    /**
	     * Returns a new list with the same elements as the original list, just
	     * in the reverse order.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig [a] -> [a]
	     * @param {Array} list The list to reverse.
	     * @return {Array} A copy of the list in reverse order.
	     * @example
	     *
	     *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
	     *      R.reverse([1, 2]);     //=> [2, 1]
	     *      R.reverse([1]);        //=> [1]
	     *      R.reverse([]);         //=> []
	     */
	    var reverse = _curry1(function reverse(list) {
	        return _slice(list).reverse();
	    });

	    /**
	     * Scan is similar to reduce, but returns a list of successively reduced values from the left
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a,b -> a) -> a -> [b] -> [a]
	     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	     *        current element from the array
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {Array} A list of all intermediately reduced values.
	     * @example
	     *
	     *      var numbers = [1, 2, 3, 4];
	     *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
	     */
	    var scan = _curry3(function scan(fn, acc, list) {
	        var idx = 0, len = list.length, result = [acc];
	        while (idx < len) {
	            acc = fn(acc, list[idx]);
	            result[idx + 1] = acc;
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Returns the result of "setting" the portion of the given data structure
	     * focused by the given lens to the given value.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @typedef Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig Lens s a -> a -> s -> s
	     * @param {Lens} lens
	     * @param {*} v
	     * @param {*} x
	     * @return {*}
	     * @see R.prop, R.lensIndex, R.lensProp
	     * @example
	     *
	     *      var xLens = R.lensProp('x');
	     *
	     *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
	     *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
	     */
	    var set = _curry3(function set(lens, v, x) {
	        return over(lens, always(v), x);
	    });

	    /**
	     * Returns a copy of the list, sorted according to the comparator function, which should accept two values at a
	     * time and return a negative number if the first value is smaller, a positive number if it's larger, and zero
	     * if they are equal.  Please note that this is a **copy** of the list.  It does not modify the original.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a,a -> Number) -> [a] -> [a]
	     * @param {Function} comparator A sorting function :: a -> b -> Int
	     * @param {Array} list The list to sort
	     * @return {Array} a new array with its elements sorted by the comparator function.
	     * @example
	     *
	     *      var diff = function(a, b) { return a - b; };
	     *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
	     */
	    var sort = _curry2(function sort(comparator, list) {
	        return _slice(list).sort(comparator);
	    });

	    /**
	     * Sorts the list according to the supplied function.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig Ord b => (a -> b) -> [a] -> [a]
	     * @param {Function} fn
	     * @param {Array} list The list to sort.
	     * @return {Array} A new list sorted by the keys generated by `fn`.
	     * @example
	     *
	     *      var sortByFirstItem = R.sortBy(prop(0));
	     *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
	     *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
	     *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
	     *      var alice = {
	     *        name: 'ALICE',
	     *        age: 101
	     *      };
	     *      var bob = {
	     *        name: 'Bob',
	     *        age: -10
	     *      };
	     *      var clara = {
	     *        name: 'clara',
	     *        age: 314.159
	     *      };
	     *      var people = [clara, bob, alice];
	     *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
	     */
	    var sortBy = _curry2(function sortBy(fn, list) {
	        return _slice(list).sort(function (a, b) {
	            var aa = fn(a);
	            var bb = fn(b);
	            return aa < bb ? -1 : aa > bb ? 1 : 0;
	        });
	    });

	    /**
	     * Subtracts two numbers. Equivalent to `a - b` but curried.
	     *
	     * @func
	     * @memberOf R
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a The first value.
	     * @param {Number} b The second value.
	     * @return {Number} The result of `a - b`.
	     * @see R.add
	     * @example
	     *
	     *      R.subtract(10, 8); //=> 2
	     *
	     *      var minus5 = R.subtract(R.__, 5);
	     *      minus5(17); //=> 12
	     *
	     *      var complementaryAngle = R.subtract(90);
	     *      complementaryAngle(30); //=> 60
	     *      complementaryAngle(72); //=> 18
	     */
	    var subtract = _curry2(function subtract(a, b) {
	        return a - b;
	    });

	    /**
	     * Returns a new list containing the last `n` elements of a given list, passing each value
	     * to the supplied predicate function, and terminating when the predicate function returns
	     * `false`. Excludes the element that caused the predicate function to fail. The predicate
	     * function is passed one argument: *(value)*.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [a]
	     * @param {Function} fn The function called per iteration.
	     * @param {Array} list The collection to iterate over.
	     * @return {Array} A new array.
	     * @see R.dropLastWhile
	     * @example
	     *
	     *      var isNotOne = function(x) {
	     *        return !(x === 1);
	     *      };
	     *
	     *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
	     */
	    var takeLastWhile = _curry2(function takeLastWhile(fn, list) {
	        var idx = list.length - 1;
	        while (idx >= 0 && fn(list[idx])) {
	            idx -= 1;
	        }
	        return _slice(list, idx + 1, Infinity);
	    });

	    /**
	     * Runs the given function with the supplied object, then returns the object.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig (a -> *) -> a -> a
	     * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
	     * @param {*} x
	     * @return {*} `x`.
	     * @example
	     *
	     *      var sayX = function(x) { console.log('x is ' + x); };
	     *      R.tap(sayX, 100); //=> 100
	     *      //-> 'x is 100'
	     */
	    var tap = _curry2(function tap(fn, x) {
	        fn(x);
	        return x;
	    });

	    /**
	     * Determines whether a given string matches a given regular expression.
	     *
	     * @func
	     * @memberOf R
	     * @see R.match
	     * @category String
	     * @sig RegExp -> String -> Boolean
	     * @param {RegExp} pattern
	     * @param {String} str
	     * @return {Boolean}
	     * @example
	     *
	     *      R.test(/^x/, 'xyz'); //=> true
	     *      R.test(/^y/, 'xyz'); //=> false
	     */
	    var test = _curry2(function test(pattern, str) {
	        return _cloneRegExp(pattern).test(str);
	    });

	    /**
	     * Calls an input function `n` times, returning an array containing the results of those
	     * function calls.
	     *
	     * `fn` is passed one argument: The current value of `n`, which begins at `0` and is
	     * gradually incremented to `n - 1`.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (i -> a) -> i -> [a]
	     * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
	     * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
	     * @return {Array} An array containing the return values of all calls to `fn`.
	     * @example
	     *
	     *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
	     */
	    var times = _curry2(function times(fn, n) {
	        var len = Number(n);
	        var list = new Array(len);
	        var idx = 0;
	        while (idx < len) {
	            list[idx] = fn(idx);
	            idx += 1;
	        }
	        return list;
	    });

	    /**
	     * Converts an object into an array of key, value arrays.
	     * Only the object's own properties are used.
	     * Note that the order of the output array is not guaranteed to be
	     * consistent across different JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig {String: *} -> [[String,*]]
	     * @param {Object} obj The object to extract from
	     * @return {Array} An array of key, value arrays from the object's own properties.
	     * @see R.fromPairs
	     * @example
	     *
	     *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
	     */
	    var toPairs = _curry1(function toPairs(obj) {
	        var pairs = [];
	        for (var prop in obj) {
	            if (_has(prop, obj)) {
	                pairs[pairs.length] = [
	                    prop,
	                    obj[prop]
	                ];
	            }
	        }
	        return pairs;
	    });

	    /**
	     * Converts an object into an array of key, value arrays.
	     * The object's own properties and prototype properties are used.
	     * Note that the order of the output array is not guaranteed to be
	     * consistent across different JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig {String: *} -> [[String,*]]
	     * @param {Object} obj The object to extract from
	     * @return {Array} An array of key, value arrays from the object's own
	     *         and prototype properties.
	     * @example
	     *
	     *      var F = function() { this.x = 'X'; };
	     *      F.prototype.y = 'Y';
	     *      var f = new F();
	     *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
	     */
	    var toPairsIn = _curry1(function toPairsIn(obj) {
	        var pairs = [];
	        for (var prop in obj) {
	            pairs[pairs.length] = [
	                prop,
	                obj[prop]
	            ];
	        }
	        return pairs;
	    });

	    /**
	     * Removes (strips) whitespace from both ends of the string.
	     *
	     * @func
	     * @memberOf R
	     * @category String
	     * @sig String -> String
	     * @param {String} str The string to trim.
	     * @return {String} Trimmed version of `str`.
	     * @example
	     *
	     *      R.trim('   xyz  '); //=> 'xyz'
	     *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
	     */
	    var trim = function () {
	        var ws = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
	        var zeroWidth = '\u200B';
	        var hasProtoTrim = typeof String.prototype.trim === 'function';
	        if (!hasProtoTrim || (ws.trim() || !zeroWidth.trim())) {
	            return _curry1(function trim(str) {
	                var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
	                var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
	                return str.replace(beginRx, '').replace(endRx, '');
	            });
	        } else {
	            return _curry1(function trim(str) {
	                return str.trim();
	            });
	        }
	    }();

	    /**
	     * Gives a single-word string description of the (native) type of a value, returning such
	     * answers as 'Object', 'Number', 'Array', or 'Null'.  Does not attempt to distinguish user
	     * Object types any further, reporting them all as 'Object'.
	     *
	     * @func
	     * @memberOf R
	     * @category Type
	     * @sig (* -> {*}) -> String
	     * @param {*} val The value to test
	     * @return {String}
	     * @example
	     *
	     *      R.type({}); //=> "Object"
	     *      R.type(1); //=> "Number"
	     *      R.type(false); //=> "Boolean"
	     *      R.type('s'); //=> "String"
	     *      R.type(null); //=> "Null"
	     *      R.type([]); //=> "Array"
	     *      R.type(/[A-z]/); //=> "RegExp"
	     */
	    var type = _curry1(function type(val) {
	        return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
	    });

	    /**
	     * Takes a function `fn`, which takes a single array argument, and returns
	     * a function which:
	     *
	     *   - takes any number of positional arguments;
	     *   - passes these arguments to `fn` as an array; and
	     *   - returns the result.
	     *
	     * In other words, R.unapply derives a variadic function from a function
	     * which takes an array. R.unapply is the inverse of R.apply.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig ([*...] -> a) -> (*... -> a)
	     * @param {Function} fn
	     * @return {Function}
	     * @see R.apply
	     * @example
	     *
	     *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
	     */
	    var unapply = _curry1(function unapply(fn) {
	        return function () {
	            return fn(_slice(arguments));
	        };
	    });

	    /**
	     * Wraps a function of any arity (including nullary) in a function that accepts exactly 1
	     * parameter. Any extraneous parameters will not be passed to the supplied function.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig (* -> b) -> (a -> b)
	     * @param {Function} fn The function to wrap.
	     * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
	     *         arity 1.
	     * @example
	     *
	     *      var takesTwoArgs = function(a, b) {
	     *        return [a, b];
	     *      };
	     *      takesTwoArgs.length; //=> 2
	     *      takesTwoArgs(1, 2); //=> [1, 2]
	     *
	     *      var takesOneArg = R.unary(takesTwoArgs);
	     *      takesOneArg.length; //=> 1
	     *      // Only 1 argument is passed to the wrapped function
	     *      takesOneArg(1, 2); //=> [1, undefined]
	     */
	    var unary = _curry1(function unary(fn) {
	        return nAry(1, fn);
	    });

	    /**
	     * Returns a function of arity `n` from a (manually) curried function.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig Number -> (a -> b) -> (a -> c)
	     * @param {Number} length The arity for the returned function.
	     * @param {Function} fn The function to uncurry.
	     * @return {Function} A new function.
	     * @see R.curry
	     * @example
	     *
	     *      var addFour = function(a) {
	     *        return function(b) {
	     *          return function(c) {
	     *            return function(d) {
	     *              return a + b + c + d;
	     *            };
	     *          };
	     *        };
	     *      };
	     *
	     *      var uncurriedAddFour = R.uncurryN(4, addFour);
	     *      curriedAddFour(1, 2, 3, 4); //=> 10
	     */
	    var uncurryN = _curry2(function uncurryN(depth, fn) {
	        return curryN(depth, function () {
	            var currentDepth = 1;
	            var value = fn;
	            var idx = 0;
	            var endIdx;
	            while (currentDepth <= depth && typeof value === 'function') {
	                endIdx = currentDepth === depth ? arguments.length : idx + value.length;
	                value = value.apply(this, _slice(arguments, idx, endIdx));
	                currentDepth += 1;
	                idx = endIdx;
	            }
	            return value;
	        });
	    });

	    /**
	     * Builds a list from a seed value. Accepts an iterator function, which returns either false
	     * to stop iteration or an array of length 2 containing the value to add to the resulting
	     * list and the seed to be used in the next call to the iterator function.
	     *
	     * The iterator function receives one argument: *(seed)*.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> [b]) -> * -> [b]
	     * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
	     *        either false to quit iteration or an array of length two to proceed. The element
	     *        at index 0 of this array will be added to the resulting array, and the element
	     *        at index 1 will be passed to the next call to `fn`.
	     * @param {*} seed The seed value.
	     * @return {Array} The final list.
	     * @example
	     *
	     *      var f = function(n) { return n > 50 ? false : [-n, n + 10] };
	     *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
	     */
	    var unfold = _curry2(function unfold(fn, seed) {
	        var pair = fn(seed);
	        var result = [];
	        while (pair && pair.length) {
	            result[result.length] = pair[0];
	            pair = fn(pair[1]);
	        }
	        return result;
	    });

	    /**
	     * Returns a new list containing only one copy of each element in the original list, based
	     * upon the value returned by applying the supplied predicate to two list elements. Prefers
	     * the first item if two items compare equal based on the predicate.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a, a -> Boolean) -> [a] -> [a]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list The array to consider.
	     * @return {Array} The list of unique items.
	     * @example
	     *
	     *      var strEq = function(a, b) { return String(a) === String(b); };
	     *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
	     *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
	     *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
	     *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
	     */
	    var uniqWith = _curry2(function uniqWith(pred, list) {
	        var idx = 0, len = list.length;
	        var result = [], item;
	        while (idx < len) {
	            item = list[idx];
	            if (!_containsWith(pred, item, result)) {
	                result[result.length] = item;
	            }
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Returns a new copy of the array with the element at the
	     * provided index replaced with the given value.
	     * @see R.adjust
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig Number -> a -> [a] -> [a]
	     * @param {Number} idx The index to update.
	     * @param {*} x The value to exist at the given index of the returned array.
	     * @param {Array|Arguments} list The source array-like object to be updated.
	     * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
	     * @example
	     *
	     *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
	     *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
	     */
	    var update = _curry3(function update(idx, x, list) {
	        return adjust(always(x), idx, list);
	    });

	    /**
	     * Returns a list of all the enumerable own properties of the supplied object.
	     * Note that the order of the output array is not guaranteed across
	     * different JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig {k: v} -> [v]
	     * @param {Object} obj The object to extract values from
	     * @return {Array} An array of the values of the object's own properties.
	     * @example
	     *
	     *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
	     */
	    var values = _curry1(function values(obj) {
	        var props = keys(obj);
	        var len = props.length;
	        var vals = [];
	        var idx = 0;
	        while (idx < len) {
	            vals[idx] = obj[props[idx]];
	            idx += 1;
	        }
	        return vals;
	    });

	    /**
	     * Returns a list of all the properties, including prototype properties,
	     * of the supplied object.
	     * Note that the order of the output array is not guaranteed to be
	     * consistent across different JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig {k: v} -> [v]
	     * @param {Object} obj The object to extract values from
	     * @return {Array} An array of the values of the object's own and prototype properties.
	     * @example
	     *
	     *      var F = function() { this.x = 'X'; };
	     *      F.prototype.y = 'Y';
	     *      var f = new F();
	     *      R.valuesIn(f); //=> ['X', 'Y']
	     */
	    var valuesIn = _curry1(function valuesIn(obj) {
	        var prop, vs = [];
	        for (prop in obj) {
	            vs[vs.length] = obj[prop];
	        }
	        return vs;
	    });

	    /**
	     * Returns a "view" of the given data structure, determined by the given lens.
	     * The lens's focus determines which portion of the data structure is visible.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @typedef Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig Lens s a -> s -> a
	     * @param {Lens} lens
	     * @param {*} x
	     * @return {*}
	     * @see R.prop, R.lensIndex, R.lensProp
	     * @example
	     *
	     *      var xLens = R.lensProp('x');
	     *
	     *      R.view(xLens, {x: 1, y: 2});  //=> 1
	     *      R.view(xLens, {x: 4, y: 2});  //=> 4
	     */
	    var view = function () {
	        var Const = function (x) {
	            return {
	                value: x,
	                map: function () {
	                    return this;
	                }
	            };
	        };
	        return _curry2(function view(lens, x) {
	            return lens(Const)(x).value;
	        });
	    }();

	    /**
	     * Takes a spec object and a test object; returns true if the test satisfies
	     * the spec. Each of the spec's own properties must be a predicate function.
	     * Each predicate is applied to the value of the corresponding property of
	     * the test object. `where` returns true if all the predicates return true,
	     * false otherwise.
	     *
	     * `where` is well suited to declaratively expressing constraints for other
	     * functions such as `filter` and `find`.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
	     * @param {Object} spec
	     * @param {Object} testObj
	     * @return {Boolean}
	     * @example
	     *
	     *      // pred :: Object -> Boolean
	     *      var pred = R.where({
	     *        a: R.equals('foo'),
	     *        b: R.complement(R.equals('bar')),
	     *        x: R.gt(_, 10),
	     *        y: R.lt(_, 20)
	     *      });
	     *
	     *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
	     *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
	     *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
	     *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
	     *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
	     */
	    var where = _curry2(function where(spec, testObj) {
	        for (var prop in spec) {
	            if (_has(prop, spec) && !spec[prop](testObj[prop])) {
	                return false;
	            }
	        }
	        return true;
	    });

	    /**
	     * Wrap a function inside another to allow you to make adjustments to the parameters, or do
	     * other processing either before the internal function is called or with its results.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig (a... -> b) -> ((a... -> b) -> a... -> c) -> (a... -> c)
	     * @param {Function} fn The function to wrap.
	     * @param {Function} wrapper The wrapper function.
	     * @return {Function} The wrapped function.
	     * @example
	     *
	     *      var greet = function(name) {return 'Hello ' + name;};
	     *
	     *      var shoutedGreet = R.wrap(greet, function(gr, name) {
	     *        return gr(name).toUpperCase();
	     *      });
	     *      shoutedGreet("Kathy"); //=> "HELLO KATHY"
	     *
	     *      var shortenedGreet = R.wrap(greet, function(gr, name) {
	     *        return gr(name.substring(0, 3));
	     *      });
	     *      shortenedGreet("Robert"); //=> "Hello Rob"
	     */
	    var wrap = _curry2(function wrap(fn, wrapper) {
	        return curryN(fn.length, function () {
	            return wrapper.apply(this, _concat([fn], arguments));
	        });
	    });

	    /**
	     * Creates a new list out of the two supplied by creating each possible
	     * pair from the lists.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig [a] -> [b] -> [[a,b]]
	     * @param {Array} as The first list.
	     * @param {Array} bs The second list.
	     * @return {Array} The list made by combining each possible pair from
	     *         `as` and `bs` into pairs (`[a, b]`).
	     * @example
	     *
	     *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
	     */
	    // = xprodWith(prepend); (takes about 3 times as long...)
	    var xprod = _curry2(function xprod(a, b) {
	        // = xprodWith(prepend); (takes about 3 times as long...)
	        var idx = 0;
	        var ilen = a.length;
	        var j;
	        var jlen = b.length;
	        var result = [];
	        while (idx < ilen) {
	            j = 0;
	            while (j < jlen) {
	                result[result.length] = [
	                    a[idx],
	                    b[j]
	                ];
	                j += 1;
	            }
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Creates a new list out of the two supplied by pairing up
	     * equally-positioned items from both lists.  The returned list is
	     * truncated to the length of the shorter of the two input lists.
	     * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig [a] -> [b] -> [[a,b]]
	     * @param {Array} list1 The first array to consider.
	     * @param {Array} list2 The second array to consider.
	     * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
	     * @example
	     *
	     *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
	     */
	    var zip = _curry2(function zip(a, b) {
	        var rv = [];
	        var idx = 0;
	        var len = Math.min(a.length, b.length);
	        while (idx < len) {
	            rv[idx] = [
	                a[idx],
	                b[idx]
	            ];
	            idx += 1;
	        }
	        return rv;
	    });

	    /**
	     * Creates a new object out of a list of keys and a list of values.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig [String] -> [*] -> {String: *}
	     * @param {Array} keys The array that will be properties on the output object.
	     * @param {Array} values The list of values on the output object.
	     * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
	     * @example
	     *
	     *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
	     */
	    var zipObj = _curry2(function zipObj(keys, values) {
	        var idx = 0, len = keys.length, out = {};
	        while (idx < len) {
	            out[keys[idx]] = values[idx];
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Creates a new list out of the two supplied by applying the function to
	     * each equally-positioned pair in the lists. The returned list is
	     * truncated to the length of the shorter of the two input lists.
	     *
	     * @function
	     * @memberOf R
	     * @category List
	     * @sig (a,b -> c) -> [a] -> [b] -> [c]
	     * @param {Function} fn The function used to combine the two elements into one value.
	     * @param {Array} list1 The first array to consider.
	     * @param {Array} list2 The second array to consider.
	     * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
	     *         using `fn`.
	     * @example
	     *
	     *      var f = function(x, y) {
	     *        // ...
	     *      };
	     *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
	     *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
	     */
	    var zipWith = _curry3(function zipWith(fn, a, b) {
	        var rv = [], idx = 0, len = Math.min(a.length, b.length);
	        while (idx < len) {
	            rv[idx] = fn(a[idx], b[idx]);
	            idx += 1;
	        }
	        return rv;
	    });

	    /**
	     * A function that always returns `false`. Any passed in parameters are ignored.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig * -> false
	     * @return {Boolean} false
	     * @see R.always, R.T
	     * @example
	     *
	     *      R.F(); //=> false
	     */
	    var F = always(false);

	    /**
	     * A function that always returns `true`. Any passed in parameters are ignored.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig * -> true
	     * @return {Boolean} `true`.
	     * @see R.always, R.F
	     * @example
	     *
	     *      R.T(); //=> true
	     */
	    var T = always(true);

	    /**
	     * Similar to hasMethod, this checks whether a function has a [methodname]
	     * function. If it isn't an array it will execute that function otherwise it will
	     * default to the ramda implementation.
	     *
	     * @private
	     * @param {Function} fn ramda implemtation
	     * @param {String} methodname property to check for a custom implementation
	     * @return {Object} Whatever the return value of the method is.
	     */
	    var _checkForMethod = function _checkForMethod(methodname, fn) {
	        return function () {
	            var length = arguments.length;
	            if (length === 0) {
	                return fn();
	            }
	            var obj = arguments[length - 1];
	            return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, _slice(arguments, 0, length - 1));
	        };
	    };

	    /**
	     * Copies an object.
	     *
	     * @private
	     * @param {*} value The value to be copied
	     * @param {Array} refFrom Array containing the source references
	     * @param {Array} refTo Array containing the copied source references
	     * @return {*} The copied value.
	     */
	    var _clone = function _clone(value, refFrom, refTo) {
	        var copy = function copy(copiedValue) {
	            var len = refFrom.length;
	            var idx = 0;
	            while (idx < len) {
	                if (value === refFrom[idx]) {
	                    return refTo[idx];
	                }
	                idx += 1;
	            }
	            refFrom[idx + 1] = value;
	            refTo[idx + 1] = copiedValue;
	            for (var key in value) {
	                copiedValue[key] = _clone(value[key], refFrom, refTo);
	            }
	            return copiedValue;
	        };
	        switch (type(value)) {
	        case 'Object':
	            return copy({});
	        case 'Array':
	            return copy([]);
	        case 'Date':
	            return new Date(value);
	        case 'RegExp':
	            return _cloneRegExp(value);
	        default:
	            return value;
	        }
	    };

	    var _createPartialApplicator = function _createPartialApplicator(concat) {
	        return function (fn) {
	            var args = _slice(arguments, 1);
	            return _arity(Math.max(0, fn.length - args.length), function () {
	                return fn.apply(this, concat(args, arguments));
	            });
	        };
	    };

	    /**
	     * Returns a function that dispatches with different strategies based on the
	     * object in list position (last argument). If it is an array, executes [fn].
	     * Otherwise, if it has a  function with [methodname], it will execute that
	     * function (functor case). Otherwise, if it is a transformer, uses transducer
	     * [xf] to return a new transformer (transducer case). Otherwise, it will
	     * default to executing [fn].
	     *
	     * @private
	     * @param {String} methodname property to check for a custom implementation
	     * @param {Function} xf transducer to initialize if object is transformer
	     * @param {Function} fn default ramda implementation
	     * @return {Function} A function that dispatches on object in list position
	     */
	    var _dispatchable = function _dispatchable(methodname, xf, fn) {
	        return function () {
	            var length = arguments.length;
	            if (length === 0) {
	                return fn();
	            }
	            var obj = arguments[length - 1];
	            if (!_isArray(obj)) {
	                var args = _slice(arguments, 0, length - 1);
	                if (typeof obj[methodname] === 'function') {
	                    return obj[methodname].apply(obj, args);
	                }
	                if (_isTransformer(obj)) {
	                    var transducer = xf.apply(null, args);
	                    return transducer(obj);
	                }
	            }
	            return fn.apply(this, arguments);
	        };
	    };

	    // The algorithm used to handle cyclic structures is
	    // inspired by underscore's isEqual
	    // RegExp equality algorithm: http://stackoverflow.com/a/10776635
	    var _equals = function _equals(a, b, stackA, stackB) {
	        var typeA = type(a);
	        if (typeA !== type(b)) {
	            return false;
	        }
	        if (typeA === 'Boolean' || typeA === 'Number' || typeA === 'String') {
	            return typeof a === 'object' ? typeof b === 'object' && identical(a.valueOf(), b.valueOf()) : identical(a, b);
	        }
	        if (identical(a, b)) {
	            return true;
	        }
	        if (typeA === 'RegExp') {
	            // RegExp equality algorithm: http://stackoverflow.com/a/10776635
	            return a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode;
	        }
	        if (Object(a) === a) {
	            if (typeA === 'Date' && a.getTime() !== b.getTime()) {
	                return false;
	            }
	            var keysA = keys(a);
	            if (keysA.length !== keys(b).length) {
	                return false;
	            }
	            var idx = stackA.length - 1;
	            while (idx >= 0) {
	                if (stackA[idx] === a) {
	                    return stackB[idx] === b;
	                }
	                idx -= 1;
	            }
	            stackA[stackA.length] = a;
	            stackB[stackB.length] = b;
	            idx = keysA.length - 1;
	            while (idx >= 0) {
	                var key = keysA[idx];
	                if (!_has(key, b) || !_equals(b[key], a[key], stackA, stackB)) {
	                    return false;
	                }
	                idx -= 1;
	            }
	            stackA.pop();
	            stackB.pop();
	            return true;
	        }
	        return false;
	    };

	    /**
	     * Private function that determines whether or not a provided object has a given method.
	     * Does not ignore methods stored on the object's prototype chain. Used for dynamically
	     * dispatching Ramda methods to non-Array objects.
	     *
	     * @private
	     * @param {String} methodName The name of the method to check for.
	     * @param {Object} obj The object to test.
	     * @return {Boolean} `true` has a given method, `false` otherwise.
	     * @example
	     *
	     *      var person = { name: 'John' };
	     *      person.shout = function() { alert(this.name); };
	     *
	     *      _hasMethod('shout', person); //=> true
	     *      _hasMethod('foo', person); //=> false
	     */
	    var _hasMethod = function _hasMethod(methodName, obj) {
	        return obj != null && !_isArray(obj) && typeof obj[methodName] === 'function';
	    };

	    /**
	     * `_makeFlat` is a helper function that returns a one-level or fully recursive function
	     * based on the flag passed in.
	     *
	     * @private
	     */
	    var _makeFlat = function _makeFlat(recursive) {
	        return function flatt(list) {
	            var value, result = [], idx = 0, j, ilen = list.length, jlen;
	            while (idx < ilen) {
	                if (isArrayLike(list[idx])) {
	                    value = recursive ? flatt(list[idx]) : list[idx];
	                    j = 0;
	                    jlen = value.length;
	                    while (j < jlen) {
	                        result[result.length] = value[j];
	                        j += 1;
	                    }
	                } else {
	                    result[result.length] = list[idx];
	                }
	                idx += 1;
	            }
	            return result;
	        };
	    };

	    var _reduce = function () {
	        function _arrayReduce(xf, acc, list) {
	            var idx = 0, len = list.length;
	            while (idx < len) {
	                acc = xf['@@transducer/step'](acc, list[idx]);
	                if (acc && acc['@@transducer/reduced']) {
	                    acc = acc['@@transducer/value'];
	                    break;
	                }
	                idx += 1;
	            }
	            return xf['@@transducer/result'](acc);
	        }
	        function _iterableReduce(xf, acc, iter) {
	            var step = iter.next();
	            while (!step.done) {
	                acc = xf['@@transducer/step'](acc, step.value);
	                if (acc && acc['@@transducer/reduced']) {
	                    acc = acc['@@transducer/value'];
	                    break;
	                }
	                step = iter.next();
	            }
	            return xf['@@transducer/result'](acc);
	        }
	        function _methodReduce(xf, acc, obj) {
	            return xf['@@transducer/result'](obj.reduce(bind(xf['@@transducer/step'], xf), acc));
	        }
	        var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
	        return function _reduce(fn, acc, list) {
	            if (typeof fn === 'function') {
	                fn = _xwrap(fn);
	            }
	            if (isArrayLike(list)) {
	                return _arrayReduce(fn, acc, list);
	            }
	            if (typeof list.reduce === 'function') {
	                return _methodReduce(fn, acc, list);
	            }
	            if (list[symIterator] != null) {
	                return _iterableReduce(fn, acc, list[symIterator]());
	            }
	            if (typeof list.next === 'function') {
	                return _iterableReduce(fn, acc, list);
	            }
	            throw new TypeError('reduce: list must be array or iterable');
	        };
	    }();

	    var _stepCat = function () {
	        var _stepCatArray = {
	            '@@transducer/init': Array,
	            '@@transducer/step': function (xs, x) {
	                return _concat(xs, [x]);
	            },
	            '@@transducer/result': _identity
	        };
	        var _stepCatString = {
	            '@@transducer/init': String,
	            '@@transducer/step': function (a, b) {
	                return a + b;
	            },
	            '@@transducer/result': _identity
	        };
	        var _stepCatObject = {
	            '@@transducer/init': Object,
	            '@@transducer/step': function (result, input) {
	                return merge(result, isArrayLike(input) ? createMapEntry(input[0], input[1]) : input);
	            },
	            '@@transducer/result': _identity
	        };
	        return function _stepCat(obj) {
	            if (_isTransformer(obj)) {
	                return obj;
	            }
	            if (isArrayLike(obj)) {
	                return _stepCatArray;
	            }
	            if (typeof obj === 'string') {
	                return _stepCatString;
	            }
	            if (typeof obj === 'object') {
	                return _stepCatObject;
	            }
	            throw new Error('Cannot create transformer for ' + obj);
	        };
	    }();

	    var _xall = function () {
	        function XAll(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.all = true;
	        }
	        XAll.prototype['@@transducer/init'] = _xfBase.init;
	        XAll.prototype['@@transducer/result'] = function (result) {
	            if (this.all) {
	                result = this.xf['@@transducer/step'](result, true);
	            }
	            return this.xf['@@transducer/result'](result);
	        };
	        XAll.prototype['@@transducer/step'] = function (result, input) {
	            if (!this.f(input)) {
	                this.all = false;
	                result = _reduced(this.xf['@@transducer/step'](result, false));
	            }
	            return result;
	        };
	        return _curry2(function _xall(f, xf) {
	            return new XAll(f, xf);
	        });
	    }();

	    var _xany = function () {
	        function XAny(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.any = false;
	        }
	        XAny.prototype['@@transducer/init'] = _xfBase.init;
	        XAny.prototype['@@transducer/result'] = function (result) {
	            if (!this.any) {
	                result = this.xf['@@transducer/step'](result, false);
	            }
	            return this.xf['@@transducer/result'](result);
	        };
	        XAny.prototype['@@transducer/step'] = function (result, input) {
	            if (this.f(input)) {
	                this.any = true;
	                result = _reduced(this.xf['@@transducer/step'](result, true));
	            }
	            return result;
	        };
	        return _curry2(function _xany(f, xf) {
	            return new XAny(f, xf);
	        });
	    }();

	    var _xdrop = function () {
	        function XDrop(n, xf) {
	            this.xf = xf;
	            this.n = n;
	        }
	        XDrop.prototype['@@transducer/init'] = _xfBase.init;
	        XDrop.prototype['@@transducer/result'] = _xfBase.result;
	        XDrop.prototype['@@transducer/step'] = function (result, input) {
	            if (this.n > 0) {
	                this.n -= 1;
	                return result;
	            }
	            return this.xf['@@transducer/step'](result, input);
	        };
	        return _curry2(function _xdrop(n, xf) {
	            return new XDrop(n, xf);
	        });
	    }();

	    var _xdropWhile = function () {
	        function XDropWhile(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XDropWhile.prototype['@@transducer/init'] = _xfBase.init;
	        XDropWhile.prototype['@@transducer/result'] = _xfBase.result;
	        XDropWhile.prototype['@@transducer/step'] = function (result, input) {
	            if (this.f) {
	                if (this.f(input)) {
	                    return result;
	                }
	                this.f = null;
	            }
	            return this.xf['@@transducer/step'](result, input);
	        };
	        return _curry2(function _xdropWhile(f, xf) {
	            return new XDropWhile(f, xf);
	        });
	    }();

	    var _xgroupBy = function () {
	        function XGroupBy(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.inputs = {};
	        }
	        XGroupBy.prototype['@@transducer/init'] = _xfBase.init;
	        XGroupBy.prototype['@@transducer/result'] = function (result) {
	            var key;
	            for (key in this.inputs) {
	                if (_has(key, this.inputs)) {
	                    result = this.xf['@@transducer/step'](result, this.inputs[key]);
	                    if (result['@@transducer/reduced']) {
	                        result = result['@@transducer/value'];
	                        break;
	                    }
	                }
	            }
	            return this.xf['@@transducer/result'](result);
	        };
	        XGroupBy.prototype['@@transducer/step'] = function (result, input) {
	            var key = this.f(input);
	            this.inputs[key] = this.inputs[key] || [
	                key,
	                []
	            ];
	            this.inputs[key][1] = append(input, this.inputs[key][1]);
	            return result;
	        };
	        return _curry2(function _xgroupBy(f, xf) {
	            return new XGroupBy(f, xf);
	        });
	    }();

	    /**
	     * Creates a new list iteration function from an existing one by adding two new parameters
	     * to its callback function: the current index, and the entire list.
	     *
	     * This would turn, for instance, Ramda's simple `map` function into one that more closely
	     * resembles `Array.prototype.map`.  Note that this will only work for functions in which
	     * the iteration callback function is the first parameter, and where the list is the last
	     * parameter.  (This latter might be unimportant if the list parameter is not used.)
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @category List
	     * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
	     * @param {Function} fn A list iteration function that does not pass index or list to its callback
	     * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
	     * @example
	     *
	     *      var mapIndexed = R.addIndex(R.map);
	     *      mapIndexed(function(val, idx) {return idx + '-' + val;}, ['f', 'o', 'o', 'b', 'a', 'r']);
	     *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
	     */
	    var addIndex = _curry1(function addIndex(fn) {
	        return curryN(fn.length, function () {
	            var idx = 0;
	            var origFn = arguments[0];
	            var list = arguments[arguments.length - 1];
	            var args = _slice(arguments);
	            args[0] = function () {
	                var result = origFn.apply(this, _concat(arguments, [
	                    idx,
	                    list
	                ]));
	                idx += 1;
	                return result;
	            };
	            return fn.apply(this, args);
	        });
	    });

	    /**
	     * Returns `true` if all elements of the list match the predicate, `false` if there are any
	     * that don't.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     * @see R.transduce
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Boolean
	     * @param {Function} fn The predicate function.
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
	     *         otherwise.
	     * @see R.any, R.none
	     * @example
	     *
	     *      var lessThan2 = R.flip(R.lt)(2);
	     *      var lessThan3 = R.flip(R.lt)(3);
	     *      R.all(lessThan2)([1, 2]); //=> false
	     *      R.all(lessThan3)([1, 2]); //=> true
	     */
	    var all = _curry2(_dispatchable('all', _xall, function all(fn, list) {
	        var idx = 0;
	        while (idx < list.length) {
	            if (!fn(list[idx])) {
	                return false;
	            }
	            idx += 1;
	        }
	        return true;
	    }));

	    /**
	     * A function that returns the first argument if it's falsy otherwise the second
	     * argument. Note that this is NOT short-circuited, meaning that if expressions
	     * are passed they are both evaluated.
	     *
	     * Dispatches to the `and` method of the first argument if applicable.
	     *
	     * @func
	     * @memberOf R
	     * @category Logic
	     * @sig * -> * -> *
	     * @param {*} a any value
	     * @param {*} b any other value
	     * @return {*} the first argument if falsy otherwise the second argument.
	     * @see R.both
	     * @example
	     *
	     *      R.and(false, true); //=> false
	     *      R.and(0, []); //=> 0
	     *      R.and(null, ''); => null
	     */
	    var and = _curry2(function and(a, b) {
	        return _hasMethod('and', a) ? a.and(b) : a && b;
	    });

	    /**
	     * Returns `true` if at least one of elements of the list match the predicate, `false`
	     * otherwise.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     * @see R.transduce
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Boolean
	     * @param {Function} fn The predicate function.
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
	     *         otherwise.
	     * @see R.all, R.none
	     * @example
	     *
	     *      var lessThan0 = R.flip(R.lt)(0);
	     *      var lessThan2 = R.flip(R.lt)(2);
	     *      R.any(lessThan0)([1, 2]); //=> false
	     *      R.any(lessThan2)([1, 2]); //=> true
	     */
	    var any = _curry2(_dispatchable('any', _xany, function any(fn, list) {
	        var idx = 0;
	        while (idx < list.length) {
	            if (fn(list[idx])) {
	                return true;
	            }
	            idx += 1;
	        }
	        return false;
	    }));

	    /**
	     * Wraps a function of any arity (including nullary) in a function that accepts exactly 2
	     * parameters. Any extraneous parameters will not be passed to the supplied function.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig (* -> c) -> (a, b -> c)
	     * @param {Function} fn The function to wrap.
	     * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
	     *         arity 2.
	     * @example
	     *
	     *      var takesThreeArgs = function(a, b, c) {
	     *        return [a, b, c];
	     *      };
	     *      takesThreeArgs.length; //=> 3
	     *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
	     *
	     *      var takesTwoArgs = R.binary(takesThreeArgs);
	     *      takesTwoArgs.length; //=> 2
	     *      // Only 2 arguments are passed to the wrapped function
	     *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
	     */
	    var binary = _curry1(function binary(fn) {
	        return nAry(2, fn);
	    });

	    /**
	     * Creates a deep copy of the value which may contain (nested) `Array`s and
	     * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
	     * not copied, but assigned by their reference.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig {*} -> {*}
	     * @param {*} value The object or array to clone
	     * @return {*} A new object or array.
	     * @example
	     *
	     *      var objects = [{}, {}, {}];
	     *      var objectsClone = R.clone(objects);
	     *      objects[0] === objectsClone[0]; //=> false
	     */
	    var clone = _curry1(function clone(value) {
	        return _clone(value, [], []);
	    });

	    /**
	     * Returns a new list consisting of the elements of the first list followed by the elements
	     * of the second.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig [a] -> [a] -> [a]
	     * @param {Array} list1 The first list to merge.
	     * @param {Array} list2 The second set to merge.
	     * @return {Array} A new array consisting of the contents of `list1` followed by the
	     *         contents of `list2`. If, instead of an Array for `list1`, you pass an
	     *         object with a `concat` method on it, `concat` will call `list1.concat`
	     *         and pass it the value of `list2`.
	     *
	     * @example
	     *
	     *      R.concat([], []); //=> []
	     *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
	     *      R.concat('ABC', 'DEF'); // 'ABCDEF'
	     */
	    var concat = _curry2(function concat(set1, set2) {
	        if (_isArray(set2)) {
	            return _concat(set1, set2);
	        } else if (_hasMethod('concat', set1)) {
	            return set1.concat(set2);
	        } else {
	            throw new TypeError('can\'t concat ' + typeof set1);
	        }
	    });

	    /**
	     * Returns a curried equivalent of the provided function. The curried
	     * function has two unusual capabilities. First, its arguments needn't
	     * be provided one at a time. If `f` is a ternary function and `g` is
	     * `R.curry(f)`, the following are equivalent:
	     *
	     *   - `g(1)(2)(3)`
	     *   - `g(1)(2, 3)`
	     *   - `g(1, 2)(3)`
	     *   - `g(1, 2, 3)`
	     *
	     * Secondly, the special placeholder value `R.__` may be used to specify
	     * "gaps", allowing partial application of any combination of arguments,
	     * regardless of their positions. If `g` is as above and `_` is `R.__`,
	     * the following are equivalent:
	     *
	     *   - `g(1, 2, 3)`
	     *   - `g(_, 2, 3)(1)`
	     *   - `g(_, _, 3)(1)(2)`
	     *   - `g(_, _, 3)(1, 2)`
	     *   - `g(_, 2)(1)(3)`
	     *   - `g(_, 2)(1, 3)`
	     *   - `g(_, 2)(_, 3)(1)`
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig (* -> a) -> (* -> a)
	     * @param {Function} fn The function to curry.
	     * @return {Function} A new, curried function.
	     * @see R.curryN
	     * @example
	     *
	     *      var addFourNumbers = function(a, b, c, d) {
	     *        return a + b + c + d;
	     *      };
	     *
	     *      var curriedAddFourNumbers = R.curry(addFourNumbers);
	     *      var f = curriedAddFourNumbers(1, 2);
	     *      var g = f(3);
	     *      g(4); //=> 10
	     */
	    var curry = _curry1(function curry(fn) {
	        return curryN(fn.length, fn);
	    });

	    /**
	     * Returns a new list containing the last `n` elements of a given list, passing each value
	     * to the supplied predicate function, skipping elements while the predicate function returns
	     * `true`. The predicate function is passed one argument: *(value)*.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     * @see R.transduce
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [a]
	     * @param {Function} fn The function called per iteration.
	     * @param {Array} list The collection to iterate over.
	     * @return {Array} A new array.
	     * @see R.takeWhile
	     * @example
	     *
	     *      var lteTwo = function(x) {
	     *        return x <= 2;
	     *      };
	     *
	     *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
	     */
	    var dropWhile = _curry2(_dispatchable('dropWhile', _xdropWhile, function dropWhile(pred, list) {
	        var idx = 0, len = list.length;
	        while (idx < len && pred(list[idx])) {
	            idx += 1;
	        }
	        return _slice(list, idx);
	    }));

	    /**
	     * Returns `true` if its arguments are equivalent, `false` otherwise.
	     * Dispatches to an `equals` method if present. Handles cyclical data
	     * structures.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig a -> b -> Boolean
	     * @param {*} a
	     * @param {*} b
	     * @return {Boolean}
	     * @example
	     *
	     *      R.equals(1, 1); //=> true
	     *      R.equals(1, '1'); //=> false
	     *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
	     *
	     *      var a = {}; a.v = a;
	     *      var b = {}; b.v = b;
	     *      R.equals(a, b); //=> true
	     */
	    var equals = _curry2(function equals(a, b) {
	        return _hasMethod('equals', a) ? a.equals(b) : _hasMethod('equals', b) ? b.equals(a) : _equals(a, b, [], []);
	    });

	    /**
	     * Returns a new list containing only those items that match a given predicate function.
	     * The predicate function is passed one argument: *(value)*.
	     *
	     * Note that `R.filter` does not skip deleted or unassigned indices, unlike the native
	     * `Array.prototype.filter` method. For more details on this behavior, see:
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Description
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     * @see R.transduce
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [a]
	     * @param {Function} fn The function called per iteration.
	     * @param {Array} list The collection to iterate over.
	     * @return {Array} The new filtered array.
	     * @see R.reject
	     * @example
	     *
	     *      var isEven = function(n) {
	     *        return n % 2 === 0;
	     *      };
	     *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
	     */
	    var filter = _curry2(_dispatchable('filter', _xfilter, _filter));

	    /**
	     * Returns the first element of the list which matches the predicate, or `undefined` if no
	     * element matches.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     * @see R.transduce
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> a | undefined
	     * @param {Function} fn The predicate function used to determine if the element is the
	     *        desired one.
	     * @param {Array} list The array to consider.
	     * @return {Object} The element found, or `undefined`.
	     * @example
	     *
	     *      var xs = [{a: 1}, {a: 2}, {a: 3}];
	     *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
	     *      R.find(R.propEq('a', 4))(xs); //=> undefined
	     */
	    var find = _curry2(_dispatchable('find', _xfind, function find(fn, list) {
	        var idx = 0;
	        var len = list.length;
	        while (idx < len) {
	            if (fn(list[idx])) {
	                return list[idx];
	            }
	            idx += 1;
	        }
	    }));

	    /**
	     * Returns the index of the first element of the list which matches the predicate, or `-1`
	     * if no element matches.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     * @see R.transduce
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Number
	     * @param {Function} fn The predicate function used to determine if the element is the
	     * desired one.
	     * @param {Array} list The array to consider.
	     * @return {Number} The index of the element found, or `-1`.
	     * @example
	     *
	     *      var xs = [{a: 1}, {a: 2}, {a: 3}];
	     *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
	     *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
	     */
	    var findIndex = _curry2(_dispatchable('findIndex', _xfindIndex, function findIndex(fn, list) {
	        var idx = 0;
	        var len = list.length;
	        while (idx < len) {
	            if (fn(list[idx])) {
	                return idx;
	            }
	            idx += 1;
	        }
	        return -1;
	    }));

	    /**
	     * Returns the last element of the list which matches the predicate, or `undefined` if no
	     * element matches.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     * @see R.transduce
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> a | undefined
	     * @param {Function} fn The predicate function used to determine if the element is the
	     * desired one.
	     * @param {Array} list The array to consider.
	     * @return {Object} The element found, or `undefined`.
	     * @example
	     *
	     *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
	     *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
	     *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
	     */
	    var findLast = _curry2(_dispatchable('findLast', _xfindLast, function findLast(fn, list) {
	        var idx = list.length - 1;
	        while (idx >= 0) {
	            if (fn(list[idx])) {
	                return list[idx];
	            }
	            idx -= 1;
	        }
	    }));

	    /**
	     * Returns the index of the last element of the list which matches the predicate, or
	     * `-1` if no element matches.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     * @see R.transduce
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Number
	     * @param {Function} fn The predicate function used to determine if the element is the
	     * desired one.
	     * @param {Array} list The array to consider.
	     * @return {Number} The index of the element found, or `-1`.
	     * @example
	     *
	     *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
	     *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
	     *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
	     */
	    var findLastIndex = _curry2(_dispatchable('findLastIndex', _xfindLastIndex, function findLastIndex(fn, list) {
	        var idx = list.length - 1;
	        while (idx >= 0) {
	            if (fn(list[idx])) {
	                return idx;
	            }
	            idx -= 1;
	        }
	        return -1;
	    }));

	    /**
	     * Returns a new list by pulling every item out of it (and all its sub-arrays) and putting
	     * them in a new array, depth-first.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig [a] -> [b]
	     * @param {Array} list The array to consider.
	     * @return {Array} The flattened list.
	     * @see R.unnest
	     * @example
	     *
	     *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
	     *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	     */
	    var flatten = _curry1(_makeFlat(true));

	    /**
	     * Returns a new function much like the supplied one, except that the first two arguments'
	     * order is reversed.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig (a -> b -> c -> ... -> z) -> (b -> a -> c -> ... -> z)
	     * @param {Function} fn The function to invoke with its first two parameters reversed.
	     * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
	     * @example
	     *
	     *      var mergeThree = function(a, b, c) {
	     *        return ([]).concat(a, b, c);
	     *      };
	     *
	     *      mergeThree(1, 2, 3); //=> [1, 2, 3]
	     *
	     *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
	     */
	    var flip = _curry1(function flip(fn) {
	        return curry(function (a, b) {
	            var args = _slice(arguments);
	            args[0] = b;
	            args[1] = a;
	            return fn.apply(this, args);
	        });
	    });

	    /**
	     * Iterate over an input `list`, calling a provided function `fn` for each element in the
	     * list.
	     *
	     * `fn` receives one argument: *(value)*.
	     *
	     * Note: `R.forEach` does not skip deleted or unassigned indices (sparse arrays), unlike
	     * the native `Array.prototype.forEach` method. For more details on this behavior, see:
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
	     *
	     * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns the original
	     * array. In some libraries this function is named `each`.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> *) -> [a] -> [a]
	     * @param {Function} fn The function to invoke. Receives one argument, `value`.
	     * @param {Array} list The list to iterate over.
	     * @return {Array} The original list.
	     * @example
	     *
	     *      var printXPlusFive = function(x) { console.log(x + 5); };
	     *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
	     *      //-> 6
	     *      //-> 7
	     *      //-> 8
	     */
	    var forEach = _curry2(_checkForMethod('forEach', function forEach(fn, list) {
	        var len = list.length;
	        var idx = 0;
	        while (idx < len) {
	            fn(list[idx]);
	            idx += 1;
	        }
	        return list;
	    }));

	    /**
	     * Returns a list of function names of object's own functions
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig {*} -> [String]
	     * @param {Object} obj The objects with functions in it
	     * @return {Array} A list of the object's own properties that map to functions.
	     * @example
	     *
	     *      R.functions(R); // returns list of ramda's own function names
	     *
	     *      var F = function() { this.x = function(){}; this.y = 1; }
	     *      F.prototype.z = function() {};
	     *      F.prototype.a = 100;
	     *      R.functions(new F()); //=> ["x"]
	     */
	    var functions = _curry1(_functionsWith(keys));

	    /**
	     * Returns a list of function names of object's own and prototype functions
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig {*} -> [String]
	     * @param {Object} obj The objects with functions in it
	     * @return {Array} A list of the object's own properties and prototype
	     *         properties that map to functions.
	     * @example
	     *
	     *      R.functionsIn(R); // returns list of ramda's own and prototype function names
	     *
	     *      var F = function() { this.x = function(){}; this.y = 1; }
	     *      F.prototype.z = function() {};
	     *      F.prototype.a = 100;
	     *      R.functionsIn(new F()); //=> ["x", "z"]
	     */
	    var functionsIn = _curry1(_functionsWith(keysIn));

	    /**
	     * Splits a list into sub-lists stored in an object, based on the result of calling a String-returning function
	     * on each element, and grouping the results according to values returned.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     * @see R.transduce
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> String) -> [a] -> {String: [a]}
	     * @param {Function} fn Function :: a -> String
	     * @param {Array} list The array to group
	     * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
	     *         that produced that key when passed to `fn`.
	     * @example
	     *
	     *      var byGrade = R.groupBy(function(student) {
	     *        var score = student.score;
	     *        return score < 65 ? 'F' :
	     *               score < 70 ? 'D' :
	     *               score < 80 ? 'C' :
	     *               score < 90 ? 'B' : 'A';
	     *      });
	     *      var students = [{name: 'Abby', score: 84},
	     *                      {name: 'Eddy', score: 58},
	     *                      // ...
	     *                      {name: 'Jack', score: 69}];
	     *      byGrade(students);
	     *      // {
	     *      //   'A': [{name: 'Dianne', score: 99}],
	     *      //   'B': [{name: 'Abby', score: 84}]
	     *      //   // ...,
	     *      //   'F': [{name: 'Eddy', score: 58}]
	     *      // }
	     */
	    var groupBy = _curry2(_dispatchable('groupBy', _xgroupBy, function groupBy(fn, list) {
	        return _reduce(function (acc, elt) {
	            var key = fn(elt);
	            acc[key] = append(elt, acc[key] || (acc[key] = []));
	            return acc;
	        }, {}, list);
	    }));

	    /**
	     * Returns the first element of the given list or string. In some libraries
	     * this function is named `first`.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @see R.tail, R.init, R.last
	     * @sig [a] -> a | Undefined
	     * @sig String -> String
	     * @param {*} list
	     * @return {*}
	     * @example
	     *
	     *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
	     *      R.head([]); //=> undefined
	     *
	     *      R.head('abc'); //=> 'a'
	     *      R.head(''); //=> ''
	     */
	    var head = nth(0);

	    /**
	     * Combines two lists into a set (i.e. no duplicates) composed of those
	     * elements common to both lists.  Duplication is determined according
	     * to the value returned by applying the supplied predicate to two list
	     * elements.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig (a,a -> Boolean) -> [a] -> [a] -> [a]
	     * @param {Function} pred A predicate function that determines whether
	     *        the two supplied elements are equal.
	     * @param {Array} list1 One list of items to compare
	     * @param {Array} list2 A second list of items to compare
	     * @see R.intersection
	     * @return {Array} A new list containing those elements common to both lists.
	     * @example
	     *
	     *      var buffaloSpringfield = [
	     *        {id: 824, name: 'Richie Furay'},
	     *        {id: 956, name: 'Dewey Martin'},
	     *        {id: 313, name: 'Bruce Palmer'},
	     *        {id: 456, name: 'Stephen Stills'},
	     *        {id: 177, name: 'Neil Young'}
	     *      ];
	     *      var csny = [
	     *        {id: 204, name: 'David Crosby'},
	     *        {id: 456, name: 'Stephen Stills'},
	     *        {id: 539, name: 'Graham Nash'},
	     *        {id: 177, name: 'Neil Young'}
	     *      ];
	     *
	     *      var sameId = function(o1, o2) {return o1.id === o2.id;};
	     *
	     *      R.intersectionWith(sameId, buffaloSpringfield, csny);
	     *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
	     */
	    var intersectionWith = _curry3(function intersectionWith(pred, list1, list2) {
	        var results = [], idx = 0;
	        while (idx < list1.length) {
	            if (_containsWith(pred, list1[idx], list2)) {
	                results[results.length] = list1[idx];
	            }
	            idx += 1;
	        }
	        return uniqWith(pred, results);
	    });

	    /**
	     * Creates a new list with the separator interposed between elements.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig a -> [a] -> [a]
	     * @param {*} separator The element to add to the list.
	     * @param {Array} list The list to be interposed.
	     * @return {Array} The new list.
	     * @example
	     *
	     *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
	     */
	    var intersperse = _curry2(_checkForMethod('intersperse', function intersperse(separator, list) {
	        var out = [];
	        var idx = 0;
	        var length = list.length;
	        while (idx < length) {
	            if (idx === length - 1) {
	                out.push(list[idx]);
	            } else {
	                out.push(list[idx], separator);
	            }
	            idx += 1;
	        }
	        return out;
	    }));

	    /**
	     * Transforms the items of the list with the transducer and appends the transformed items to
	     * the accumulator using an appropriate iterator function based on the accumulator type.
	     *
	     * The accumulator can be an array, string, object or a transformer. Iterated items will
	     * be appended to arrays and concatenated to strings. Objects will be merged directly or 2-item
	     * arrays will be merged as key, value pairs.
	     *
	     * The accumulator can also be a transformer object that provides a 2-arity reducing iterator
	     * function, step, 0-arity initial value function, init, and 1-arity result extraction function
	     * result. The step function is used as the iterator function in reduce. The result function is
	     * used to convert the final accumulator into the return type and in most cases is R.identity.
	     * The init function is used to provide the initial accumulator.
	     *
	     * The iteration is performed with R.reduce after initializing the transducer.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig a -> (b -> b) -> [c] -> a
	     * @param {*} acc The initial accumulator value.
	     * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @example
	     *
	     *      var numbers = [1, 2, 3, 4];
	     *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
	     *
	     *      R.into([], transducer, numbers); //=> [2, 3]
	     *
	     *      var intoArray = R.into([]);
	     *      intoArray(transducer, numbers); //=> [2, 3]
	     */
	    var into = _curry3(function into(acc, xf, list) {
	        return _isTransformer(acc) ? _reduce(xf(acc), acc['@@transducer/init'](), list) : _reduce(xf(_stepCat(acc)), acc, list);
	    });

	    /**
	     * Same as R.invertObj, however this accounts for objects
	     * with duplicate values by putting the values into an
	     * array.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig {s: x} -> {x: [ s, ... ]}
	     * @param {Object} obj The object or array to invert
	     * @return {Object} out A new object with keys
	     * in an array.
	     * @example
	     *
	     *      var raceResultsByFirstName = {
	     *        first: 'alice',
	     *        second: 'jake',
	     *        third: 'alice',
	     *      };
	     *      R.invert(raceResultsByFirstName);
	     *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
	     */
	    var invert = _curry1(function invert(obj) {
	        var props = keys(obj);
	        var len = props.length;
	        var idx = 0;
	        var out = {};
	        while (idx < len) {
	            var key = props[idx];
	            var val = obj[key];
	            var list = _has(val, out) ? out[val] : out[val] = [];
	            list[list.length] = key;
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns a new object with the keys of the given object
	     * as values, and the values of the given object as keys.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig {s: x} -> {x: s}
	     * @param {Object} obj The object or array to invert
	     * @return {Object} out A new object
	     * @example
	     *
	     *      var raceResults = {
	     *        first: 'alice',
	     *        second: 'jake'
	     *      };
	     *      R.invertObj(raceResults);
	     *      //=> { 'alice': 'first', 'jake':'second' }
	     *
	     *      // Alternatively:
	     *      var raceResults = ['alice', 'jake'];
	     *      R.invertObj(raceResults);
	     *      //=> { 'alice': '0', 'jake':'1' }
	     */
	    var invertObj = _curry1(function invertObj(obj) {
	        var props = keys(obj);
	        var len = props.length;
	        var idx = 0;
	        var out = {};
	        while (idx < len) {
	            var key = props[idx];
	            out[obj[key]] = key;
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns the last element of the given list or string.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @see R.init, R.head, R.tail
	     * @sig [a] -> a | Undefined
	     * @sig String -> String
	     * @param {*} list
	     * @return {*}
	     * @example
	     *
	     *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
	     *      R.last([]); //=> undefined
	     *
	     *      R.last('abc'); //=> 'c'
	     *      R.last(''); //=> ''
	     */
	    var last = nth(-1);

	    /**
	     * Returns the position of the last occurrence of an item in
	     * an array, or -1 if the item is not included in the array.
	     * `R.equals` is used to determine equality.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig a -> [a] -> Number
	     * @param {*} target The item to find.
	     * @param {Array} xs The array to search in.
	     * @return {Number} the index of the target, or -1 if the target is not found.
	     * @see R.indexOf
	     * @example
	     *
	     *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
	     *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
	     */
	    var lastIndexOf = _curry2(function lastIndexOf(target, xs) {
	        if (_hasMethod('lastIndexOf', xs)) {
	            return xs.lastIndexOf(target);
	        } else {
	            var idx = xs.length - 1;
	            while (idx >= 0) {
	                if (equals(xs[idx], target)) {
	                    return idx;
	                }
	                idx -= 1;
	            }
	            return -1;
	        }
	    });

	    /**
	     * Returns a new list, constructed by applying the supplied function to every element of the
	     * supplied list.
	     *
	     * Note: `R.map` does not skip deleted or unassigned indices (sparse arrays), unlike the
	     * native `Array.prototype.map` method. For more details on this behavior, see:
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Description
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     * @see R.transduce
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> b) -> [a] -> [b]
	     * @param {Function} fn The function to be called on every element of the input `list`.
	     * @param {Array} list The list to be iterated over.
	     * @return {Array} The new list.
	     * @example
	     *
	     *      var double = function(x) {
	     *        return x * 2;
	     *      };
	     *
	     *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
	     */
	    var map = _curry2(_dispatchable('map', _xmap, _map));

	    /**
	     * Map, but for objects. Creates an object with the same keys as `obj` and values
	     * generated by running each property of `obj` through `fn`. `fn` is passed one argument:
	     * *(value)*.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig (v -> v) -> {k: v} -> {k: v}
	     * @param {Function} fn A function called for each property in `obj`. Its return value will
	     * become a new property on the return object.
	     * @param {Object} obj The object to iterate over.
	     * @return {Object} A new object with the same keys as `obj` and values that are the result
	     *         of running each property through `fn`.
	     * @example
	     *
	     *      var values = { x: 1, y: 2, z: 3 };
	     *      var double = function(num) {
	     *        return num * 2;
	     *      };
	     *
	     *      R.mapObj(double, values); //=> { x: 2, y: 4, z: 6 }
	     */
	    var mapObj = _curry2(function mapObj(fn, obj) {
	        return _reduce(function (acc, key) {
	            acc[key] = fn(obj[key]);
	            return acc;
	        }, {}, keys(obj));
	    });

	    /**
	     * Like `mapObj`, but but passes additional arguments to the predicate function. The
	     * predicate function is passed three arguments: *(value, key, obj)*.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig (v, k, {k: v} -> v) -> {k: v} -> {k: v}
	     * @param {Function} fn A function called for each property in `obj`. Its return value will
	     *        become a new property on the return object.
	     * @param {Object} obj The object to iterate over.
	     * @return {Object} A new object with the same keys as `obj` and values that are the result
	     *         of running each property through `fn`.
	     * @example
	     *
	     *      var values = { x: 1, y: 2, z: 3 };
	     *      var prependKeyAndDouble = function(num, key, obj) {
	     *        return key + (num * 2);
	     *      };
	     *
	     *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
	     */
	    var mapObjIndexed = _curry2(function mapObjIndexed(fn, obj) {
	        return _reduce(function (acc, key) {
	            acc[key] = fn(obj[key], key, obj);
	            return acc;
	        }, {}, keys(obj));
	    });

	    /**
	     * Returns `true` if no elements of the list match the predicate,
	     * `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Boolean
	     * @param {Function} fn The predicate function.
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
	     * @see R.all, R.any
	     * @example
	     *
	     *      R.none(R.isNaN, [1, 2, 3]); //=> true
	     *      R.none(R.isNaN, [1, 2, 3, NaN]); //=> false
	     */
	    var none = _curry2(_complement(_dispatchable('any', _xany, any)));

	    /**
	     * A function that returns the first truthy of two arguments otherwise the
	     * last argument. Note that this is NOT short-circuited, meaning that if
	     * expressions are passed they are both evaluated.
	     *
	     * Dispatches to the `or` method of the first argument if applicable.
	     *
	     * @func
	     * @memberOf R
	     * @category Logic
	     * @sig * -> * -> *
	     * @param {*} a any value
	     * @param {*} b any other value
	     * @return {*} the first truthy argument, otherwise the last argument.
	     * @see R.either
	     * @example
	     *
	     *      R.or(false, true); //=> true
	     *      R.or(0, []); //=> []
	     *      R.or(null, ''); => ''
	     */
	    var or = _curry2(function or(a, b) {
	        return _hasMethod('or', a) ? a.or(b) : a || b;
	    });

	    /**
	     * Accepts as its arguments a function and any number of values and returns a function that,
	     * when invoked, calls the original function with all of the values prepended to the
	     * original function's arguments list. In some libraries this function is named `applyLeft`.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig (a -> b -> ... -> i -> j -> ... -> m -> n) -> a -> b-> ... -> i -> (j -> ... -> m -> n)
	     * @param {Function} fn The function to invoke.
	     * @param {...*} [args] Arguments to prepend to `fn` when the returned function is invoked.
	     * @return {Function} A new function wrapping `fn`. When invoked, it will call `fn`
	     *         with `args` prepended to `fn`'s arguments list.
	     * @example
	     *
	     *      var multiply = function(a, b) { return a * b; };
	     *      var double = R.partial(multiply, 2);
	     *      double(2); //=> 4
	     *
	     *      var greet = function(salutation, title, firstName, lastName) {
	     *        return salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
	     *      };
	     *      var sayHello = R.partial(greet, 'Hello');
	     *      var sayHelloToMs = R.partial(sayHello, 'Ms.');
	     *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
	     */
	    var partial = curry(_createPartialApplicator(_concat));

	    /**
	     * Accepts as its arguments a function and any number of values and returns a function that,
	     * when invoked, calls the original function with all of the values appended to the original
	     * function's arguments list.
	     *
	     * Note that `partialRight` is the opposite of `partial`: `partialRight` fills `fn`'s arguments
	     * from the right to the left.  In some libraries this function is named `applyRight`.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig (a -> b-> ... -> i -> j -> ... -> m -> n) -> j -> ... -> m -> n -> (a -> b-> ... -> i)
	     * @param {Function} fn The function to invoke.
	     * @param {...*} [args] Arguments to append to `fn` when the returned function is invoked.
	     * @return {Function} A new function wrapping `fn`. When invoked, it will call `fn` with
	     *         `args` appended to `fn`'s arguments list.
	     * @example
	     *
	     *      var greet = function(salutation, title, firstName, lastName) {
	     *        return salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
	     *      };
	     *      var greetMsJaneJones = R.partialRight(greet, 'Ms.', 'Jane', 'Jones');
	     *
	     *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
	     */
	    var partialRight = curry(_createPartialApplicator(flip(_concat)));

	    /**
	     * Takes a predicate and a list and returns the pair of lists of
	     * elements which do and do not satisfy the predicate, respectively.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [[a],[a]]
	     * @param {Function} pred A predicate to determine which array the element belongs to.
	     * @param {Array} list The array to partition.
	     * @return {Array} A nested array, containing first an array of elements that satisfied the predicate,
	     *         and second an array of elements that did not satisfy.
	     * @example
	     *
	     *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
	     *      //=> [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
	     */
	    var partition = _curry2(function partition(pred, list) {
	        return _reduce(function (acc, elt) {
	            var xs = acc[pred(elt) ? 0 : 1];
	            xs[xs.length] = elt;
	            return acc;
	        }, [
	            [],
	            []
	        ], list);
	    });

	    /**
	     * Determines whether a nested path on an object has a specific value,
	     * in `R.equals` terms. Most likely used to filter a list.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig [String] -> * -> {String: *} -> Boolean
	     * @param {Array} path The path of the nested property to use
	     * @param {*} val The value to compare the nested property with
	     * @param {Object} obj The object to check the nested property in
	     * @return {Boolean} `true` if the value equals the nested object property,
	     *         `false` otherwise.
	     * @example
	     *
	     *      var user1 = { address: { zipCode: 90210 } };
	     *      var user2 = { address: { zipCode: 55555 } };
	     *      var user3 = { name: 'Bob' };
	     *      var users = [ user1, user2, user3 ];
	     *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
	     *      R.filter(isFamous, users); //=> [ user1 ]
	     */
	    var pathEq = _curry3(function pathEq(_path, val, obj) {
	        return equals(path(_path, obj), val);
	    });

	    /**
	     * Returns a new list by plucking the same named property off all objects in the list supplied.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig k -> [{k: v}] -> [v]
	     * @param {Number|String} key The key name to pluck off of each object.
	     * @param {Array} list The array to consider.
	     * @return {Array} The list of values for the given key.
	     * @example
	     *
	     *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
	     *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
	     */
	    var pluck = _curry2(function pluck(p, list) {
	        return map(prop(p), list);
	    });

	    /**
	     * Returns `true` if the specified object property is equal, in `R.equals`
	     * terms, to the given value; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig String -> a -> Object -> Boolean
	     * @param {String} name
	     * @param {*} val
	     * @param {*} obj
	     * @return {Boolean}
	     * @see R.equals, R.propSatisfies
	     * @example
	     *
	     *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
	     *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
	     *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
	     *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
	     *      var kids = [abby, fred, rusty, alois];
	     *      var hasBrownHair = R.propEq('hair', 'brown');
	     *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
	     */
	    var propEq = _curry3(function propEq(name, val, obj) {
	        return propSatisfies(equals(val), name, obj);
	    });

	    /**
	     * Returns `true` if the specified object property is of the given type;
	     * `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @category Type
	     * @sig Type -> String -> Object -> Boolean
	     * @param {Function} type
	     * @param {String} name
	     * @param {*} obj
	     * @return {Boolean}
	     * @see R.is
	     * @see R.propSatisfies
	     * @example
	     *
	     *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
	     *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
	     *      R.propIs(Number, 'x', {});            //=> false
	     */
	    var propIs = _curry3(function propIs(type, name, obj) {
	        return propSatisfies(is(type), name, obj);
	    });

	    /**
	     * Returns a single item by iterating through the list, successively calling the iterator
	     * function and passing it an accumulator value and the current value from the array, and
	     * then passing the result to the next call.
	     *
	     * The iterator function receives two values: *(acc, value)*.  It may use `R.reduced` to
	     * shortcut the iteration.
	     *
	     * Note: `R.reduce` does not skip deleted or unassigned indices (sparse arrays), unlike
	     * the native `Array.prototype.reduce` method. For more details on this behavior, see:
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
	     * @see R.reduced
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a,b -> a) -> a -> [b] -> a
	     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	     *        current element from the array.
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @example
	     *
	     *      var numbers = [1, 2, 3];
	     *      var add = function(a, b) {
	     *        return a + b;
	     *      };
	     *
	     *      R.reduce(add, 10, numbers); //=> 16
	     */
	    var reduce = _curry3(_reduce);

	    /**
	     * Similar to `filter`, except that it keeps only values for which the given predicate
	     * function returns falsy. The predicate function is passed one argument: *(value)*.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     * @see R.transduce
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [a]
	     * @param {Function} fn The function called per iteration.
	     * @param {Array} list The collection to iterate over.
	     * @return {Array} The new filtered array.
	     * @see R.filter
	     * @example
	     *
	     *      var isOdd = function(n) {
	     *        return n % 2 === 1;
	     *      };
	     *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
	     */
	    var reject = _curry2(function reject(fn, list) {
	        return filter(_complement(fn), list);
	    });

	    /**
	     * Returns a fixed list of size `n` containing a specified identical value.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig a -> n -> [a]
	     * @param {*} value The value to repeat.
	     * @param {Number} n The desired size of the output list.
	     * @return {Array} A new array containing `n` `value`s.
	     * @example
	     *
	     *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
	     *
	     *      var obj = {};
	     *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
	     *      repeatedObjs[0] === repeatedObjs[1]; //=> true
	     */
	    var repeat = _curry2(function repeat(value, n) {
	        return times(always(value), n);
	    });

	    /**
	     * Returns the elements of the given list or string (or object with a `slice`
	     * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig Number -> Number -> [a] -> [a]
	     * @sig Number -> Number -> String -> String
	     * @param {Number} fromIndex The start index (inclusive).
	     * @param {Number} toIndex The end index (exclusive).
	     * @param {*} list
	     * @return {*}
	     * @example
	     *
	     *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
	     *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
	     *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
	     *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
	     *      R.slice(0, 3, 'ramda');                     //=> 'ram'
	     */
	    var slice = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
	        return Array.prototype.slice.call(list, fromIndex, toIndex);
	    }));

	    /**
	     * Splits a collection into slices of the specified length.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig Number -> [a] -> [[a]]
	     * @sig Number -> String -> [String]
	     * @param {Number} n
	     * @param {Array} list
	     * @return {Array}
	     * @example
	     *
	     *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
	     *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
	     */
	    var splitEvery = _curry2(function splitEvery(n, list) {
	        if (n <= 0) {
	            throw new Error('First argument to splitEvery must be a positive integer');
	        }
	        var result = [];
	        var idx = 0;
	        while (idx < list.length) {
	            result.push(slice(idx, idx += n, list));
	        }
	        return result;
	    });

	    /**
	     * Adds together all the elements of a list.
	     *
	     * @func
	     * @memberOf R
	     * @category Math
	     * @sig [Number] -> Number
	     * @param {Array} list An array of numbers
	     * @return {Number} The sum of all the numbers in the list.
	     * @see R.reduce
	     * @example
	     *
	     *      R.sum([2,4,6,8,100,1]); //=> 121
	     */
	    var sum = reduce(add, 0);

	    /**
	     * Returns all but the first element of the given list or string (or object
	     * with a `tail` method).
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @see R.head, R.init, R.last
	     * @sig [a] -> [a]
	     * @sig String -> String
	     * @param {*} list
	     * @return {*}
	     * @example
	     *
	     *      R.tail([1, 2, 3]);  //=> [2, 3]
	     *      R.tail([1, 2]);     //=> [2]
	     *      R.tail([1]);        //=> []
	     *      R.tail([]);         //=> []
	     *
	     *      R.tail('abc');  //=> 'bc'
	     *      R.tail('ab');   //=> 'b'
	     *      R.tail('a');    //=> ''
	     *      R.tail('');     //=> ''
	     */
	    var tail = _checkForMethod('tail', slice(1, Infinity));

	    /**
	     * Returns the first `n` elements of the given list, string, or
	     * transducer/transformer (or object with a `take` method).
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig Number -> [a] -> [a]
	     * @sig Number -> String -> String
	     * @param {Number} n
	     * @param {*} list
	     * @return {*}
	     * @see R.drop
	     * @example
	     *
	     *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
	     *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
	     *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	     *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	     *      R.take(3, 'ramda');               //=> 'ram'
	     *
	     *      var personnel = [
	     *        'Dave Brubeck',
	     *        'Paul Desmond',
	     *        'Eugene Wright',
	     *        'Joe Morello',
	     *        'Gerry Mulligan',
	     *        'Bob Bates',
	     *        'Joe Dodge',
	     *        'Ron Crotty'
	     *      ];
	     *
	     *      var takeFive = R.take(5);
	     *      takeFive(personnel);
	     *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
	     */
	    var take = _curry2(_dispatchable('take', _xtake, function take(n, xs) {
	        return slice(0, n < 0 ? Infinity : n, xs);
	    }));

	    /**
	     * Returns a new list containing the first `n` elements of a given list, passing each value
	     * to the supplied predicate function, and terminating when the predicate function returns
	     * `false`. Excludes the element that caused the predicate function to fail. The predicate
	     * function is passed one argument: *(value)*.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     * @see R.transduce
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [a]
	     * @param {Function} fn The function called per iteration.
	     * @param {Array} list The collection to iterate over.
	     * @return {Array} A new array.
	     * @see R.dropWhile
	     * @example
	     *
	     *      var isNotFour = function(x) {
	     *        return !(x === 4);
	     *      };
	     *
	     *      R.takeWhile(isNotFour, [1, 2, 3, 4]); //=> [1, 2, 3]
	     */
	    var takeWhile = _curry2(_dispatchable('takeWhile', _xtakeWhile, function takeWhile(fn, list) {
	        var idx = 0, len = list.length;
	        while (idx < len && fn(list[idx])) {
	            idx += 1;
	        }
	        return _slice(list, 0, idx);
	    }));

	    /**
	     * Initializes a transducer using supplied iterator function. Returns a single item by
	     * iterating through the list, successively calling the transformed iterator function and
	     * passing it an accumulator value and the current value from the array, and then passing
	     * the result to the next call.
	     *
	     * The iterator function receives two values: *(acc, value)*. It will be wrapped as a
	     * transformer to initialize the transducer. A transformer can be passed directly in place
	     * of an iterator function.  In both cases, iteration may be stopped early with the
	     * `R.reduced` function.
	     *
	     * A transducer is a function that accepts a transformer and returns a transformer and can
	     * be composed directly.
	     *
	     * A transformer is an an object that provides a 2-arity reducing iterator function, step,
	     * 0-arity initial value function, init, and 1-arity result extraction function, result.
	     * The step function is used as the iterator function in reduce. The result function is used
	     * to convert the final accumulator into the return type and in most cases is R.identity.
	     * The init function can be used to provide an initial accumulator, but is ignored by transduce.
	     *
	     * The iteration is performed with R.reduce after initializing the transducer.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @see R.reduce, R.reduced, R.into
	     * @sig (c -> c) -> (a,b -> a) -> a -> [b] -> a
	     * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
	     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	     *        current element from the array. Wrapped as transformer, if necessary, and used to
	     *        initialize the transducer
	     * @param {*} acc The initial accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @example
	     *
	     *      var numbers = [1, 2, 3, 4];
	     *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
	     *
	     *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
	     */
	    var transduce = curryN(4, function transduce(xf, fn, acc, list) {
	        return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
	    });

	    /**
	     * Combines two lists into a set (i.e. no duplicates) composed of the elements of each list.  Duplication is
	     * determined according to the value returned by applying the supplied predicate to two list elements.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig (a,a -> Boolean) -> [a] -> [a] -> [a]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The first and second lists concatenated, with
	     *         duplicates removed.
	     * @see R.union
	     * @example
	     *
	     *      function cmp(x, y) { return x.a === y.a; }
	     *      var l1 = [{a: 1}, {a: 2}];
	     *      var l2 = [{a: 1}, {a: 4}];
	     *      R.unionWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
	     */
	    var unionWith = _curry3(function unionWith(pred, list1, list2) {
	        return uniqWith(pred, _concat(list1, list2));
	    });

	    /**
	     * Returns a new list containing only one copy of each element in the original list.
	     * `R.equals` is used to determine equality.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig [a] -> [a]
	     * @param {Array} list The array to consider.
	     * @return {Array} The list of unique items.
	     * @example
	     *
	     *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
	     *      R.uniq([1, '1']);     //=> [1, '1']
	     *      R.uniq([[42], [42]]); //=> [[42]]
	     */
	    var uniq = uniqWith(equals);

	    /**
	     * Returns a new list by pulling every item at the first level of nesting out, and putting
	     * them in a new array.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig [a] -> [b]
	     * @param {Array} list The array to consider.
	     * @return {Array} The flattened list.
	     * @see R.flatten
	     * @example
	     *
	     *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
	     *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
	     */
	    var unnest = _curry1(_makeFlat(false));

	    /**
	     * Accepts a function `fn` and any number of transformer functions and returns a new
	     * function. When the new function is invoked, it calls the function `fn` with parameters
	     * consisting of the result of calling each supplied handler on successive arguments to the
	     * new function.
	     *
	     * If more arguments are passed to the returned function than transformer functions, those
	     * arguments are passed directly to `fn` as additional parameters. If you expect additional
	     * arguments that don't need to be transformed, although you can ignore them, it's best to
	     * pass an identity function so that the new function reports the correct arity.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig (x1 -> x2 -> ... -> z) -> ((a -> x1), (b -> x2), ...) -> (a -> b -> ... -> z)
	     * @param {Function} fn The function to wrap.
	     * @param {...Function} transformers A variable number of transformer functions
	     * @return {Function} The wrapped function.
	     * @example
	     *
	     *      var double = function(y) { return y * 2; };
	     *      var square = function(x) { return x * x; };
	     *      var add = function(a, b) { return a + b; };
	     *      // Adds any number of arguments together
	     *      var addAll = function() {
	     *        return R.reduce(add, 0, arguments);
	     *      };
	     *
	     *      // Basic example
	     *      var addDoubleAndSquare = R.useWith(addAll, double, square);
	     *
	     *      //≅ addAll(double(10), square(5));
	     *      addDoubleAndSquare(10, 5); //=> 45
	     *
	     *      // Example of passing more arguments than transformers
	     *      //≅ addAll(double(10), square(5), 100);
	     *      addDoubleAndSquare(10, 5, 100); //=> 145
	     *
	     *      // If there are extra _expected_ arguments that don't need to be transformed, although
	     *      // you can ignore them, it might be best to pass in the identity function so that the new
	     *      // function correctly reports arity.
	     *      var addDoubleAndSquareWithExtraParams = R.useWith(addAll, double, square, R.identity);
	     *      // addDoubleAndSquareWithExtraParams.length //=> 3
	     *      //≅ addAll(double(10), square(5), R.identity(100));
	     *      addDoubleAndSquare(10, 5, 100); //=> 145
	     */
	    /*, transformers */
	    var useWith = curry(function useWith(fn) {
	        var transformers = _slice(arguments, 1);
	        var tlen = transformers.length;
	        return curry(_arity(tlen, function () {
	            var args = [], idx = 0;
	            while (idx < tlen) {
	                args[idx] = transformers[idx](arguments[idx]);
	                idx += 1;
	            }
	            return fn.apply(this, args.concat(_slice(arguments, tlen)));
	        }));
	    });

	    /**
	     * Takes a spec object and a test object; returns true if the test satisfies
	     * the spec, false otherwise. An object satisfies the spec if, for each of the
	     * spec's own properties, accessing that property of the object gives the same
	     * value (in `R.equals` terms) as accessing that property of the spec.
	     *
	     * `whereEq` is a specialization of [`where`](#where).
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig {String: *} -> {String: *} -> Boolean
	     * @param {Object} spec
	     * @param {Object} testObj
	     * @return {Boolean}
	     * @see R.where
	     * @example
	     *
	     *      // pred :: Object -> Boolean
	     *      var pred = R.whereEq({a: 1, b: 2});
	     *
	     *      pred({a: 1});              //=> false
	     *      pred({a: 1, b: 2});        //=> true
	     *      pred({a: 1, b: 2, c: 3});  //=> true
	     *      pred({a: 1, b: 1});        //=> false
	     */
	    var whereEq = _curry2(function whereEq(spec, testObj) {
	        return where(mapObj(equals, spec), testObj);
	    });

	    var _flatCat = function () {
	        var preservingReduced = function (xf) {
	            return {
	                '@@transducer/init': _xfBase.init,
	                '@@transducer/result': function (result) {
	                    return xf['@@transducer/result'](result);
	                },
	                '@@transducer/step': function (result, input) {
	                    var ret = xf['@@transducer/step'](result, input);
	                    return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
	                }
	            };
	        };
	        return function _xcat(xf) {
	            var rxf = preservingReduced(xf);
	            return {
	                '@@transducer/init': _xfBase.init,
	                '@@transducer/result': function (result) {
	                    return rxf['@@transducer/result'](result);
	                },
	                '@@transducer/step': function (result, input) {
	                    return !isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
	                }
	            };
	        };
	    }();

	    var _indexOf = function _indexOf(list, item, from) {
	        var idx = from;
	        while (idx < list.length) {
	            if (equals(list[idx], item)) {
	                return idx;
	            }
	            idx += 1;
	        }
	        return -1;
	    };

	    /**
	     * Create a predicate wrapper which will call a pick function (all/any) for each predicate
	     *
	     * @private
	     * @see R.all
	     * @see R.any
	     */
	    // Call function immediately if given arguments
	    // Return a function which will call the predicates with the provided arguments
	    var _predicateWrap = function _predicateWrap(predPicker) {
	        return function (preds) {
	            var predIterator = function () {
	                var args = arguments;
	                return predPicker(function (predicate) {
	                    return predicate.apply(null, args);
	                }, preds);
	            };
	            return arguments.length > 1 ? // Call function immediately if given arguments
	            predIterator.apply(null, _slice(arguments, 1)) : // Return a function which will call the predicates with the provided arguments
	            _arity(Math.max.apply(Math, pluck('length', preds)), predIterator);
	        };
	    };

	    var _xchain = _curry2(function _xchain(f, xf) {
	        return map(f, _flatCat(xf));
	    });

	    /**
	     * Given a list of predicates, returns a new predicate that will be true exactly when all of them are.
	     *
	     * @func
	     * @memberOf R
	     * @category Logic
	     * @sig [(*... -> Boolean)] -> (*... -> Boolean)
	     * @param {Array} list An array of predicate functions
	     * @param {*} optional Any arguments to pass into the predicates
	     * @return {Function} a function that applies its arguments to each of
	     *         the predicates, returning `true` if all are satisfied.
	     * @see R.anyPass
	     * @example
	     *
	     *      var gt10 = function(x) { return x > 10; };
	     *      var even = function(x) { return x % 2 === 0};
	     *      var f = R.allPass([gt10, even]);
	     *      f(11); //=> false
	     *      f(12); //=> true
	     */
	    var allPass = _curry1(_predicateWrap(all));

	    /**
	     * Given a list of predicates returns a new predicate that will be true exactly when any one of them is.
	     *
	     * @func
	     * @memberOf R
	     * @category Logic
	     * @sig [(*... -> Boolean)] -> (*... -> Boolean)
	     * @param {Array} list An array of predicate functions
	     * @param {*} optional Any arguments to pass into the predicates
	     * @return {Function} A function that applies its arguments to each of the predicates, returning
	     *         `true` if all are satisfied.
	     * @see R.allPass
	     * @example
	     *
	     *      var gt10 = function(x) { return x > 10; };
	     *      var even = function(x) { return x % 2 === 0};
	     *      var f = R.anyPass([gt10, even]);
	     *      f(11); //=> true
	     *      f(8); //=> true
	     *      f(9); //=> false
	     */
	    var anyPass = _curry1(_predicateWrap(any));

	    /**
	     * ap applies a list of functions to a list of values.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig [f] -> [a] -> [f a]
	     * @param {Array} fns An array of functions
	     * @param {Array} vs An array of values
	     * @return {Array} An array of results of applying each of `fns` to all of `vs` in turn.
	     * @example
	     *
	     *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
	     */
	    var ap = _curry2(function ap(fns, vs) {
	        return _hasMethod('ap', fns) ? fns.ap(vs) : _reduce(function (acc, fn) {
	            return _concat(acc, map(fn, vs));
	        }, [], fns);
	    });

	    /**
	     * Returns the result of calling its first argument with the remaining
	     * arguments. This is occasionally useful as a converging function for
	     * `R.converge`: the left branch can produce a function while the right
	     * branch produces a value to be passed to that function as an argument.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig (*... -> a),*... -> a
	     * @param {Function} fn The function to apply to the remaining arguments.
	     * @param {...*} args Any number of positional arguments.
	     * @return {*}
	     * @see R.apply
	     * @example
	     *
	     *      var indentN = R.pipe(R.times(R.always(' ')),
	     *                           R.join(''),
	     *                           R.replace(/^(?!$)/gm));
	     *
	     *      var format = R.converge(R.call,
	     *                              R.pipe(R.prop('indent'), indentN),
	     *                              R.prop('value'));
	     *
	     *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
	     */
	    var call = curry(function call(fn) {
	        return fn.apply(this, _slice(arguments, 1));
	    });

	    /**
	     * `chain` maps a function over a list and concatenates the results.
	     * This implementation is compatible with the
	     * Fantasy-land Chain spec, and will work with types that implement that spec.
	     * `chain` is also known as `flatMap` in some libraries
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> [b]) -> [a] -> [b]
	     * @param {Function} fn
	     * @param {Array} list
	     * @return {Array}
	     * @example
	     *
	     *      var duplicate = function(n) {
	     *        return [n, n];
	     *      };
	     *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
	     */
	    var chain = _curry2(_dispatchable('chain', _xchain, function chain(fn, list) {
	        return unnest(map(fn, list));
	    }));

	    /**
	     * Turns a list of Functors into a Functor of a list, applying
	     * a mapping function to the elements of the list along the way.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @see R.commute
	     * @sig Functor f => (f a -> f b) -> (x -> f x) -> [f a] -> f [b]
	     * @param {Function} fn The transformation function
	     * @param {Function} of A function that returns the data type to return
	     * @param {Array} list An array of functors of the same type
	     * @return {*}
	     * @example
	     *
	     *      R.commuteMap(R.map(R.add(10)), R.of, [[1], [2, 3]]);   //=> [[11, 12], [11, 13]]
	     *      R.commuteMap(R.map(R.add(10)), R.of, [[1, 2], [3]]);   //=> [[11, 13], [12, 13]]
	     *      R.commuteMap(R.map(R.add(10)), R.of, [[1], [2], [3]]); //=> [[11, 12, 13]]
	     *      R.commuteMap(R.map(R.add(10)), Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([11, 12, 13])
	     *      R.commuteMap(R.map(R.add(10)), Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
	     */
	    var commuteMap = _curry3(function commuteMap(fn, of, list) {
	        function consF(acc, ftor) {
	            return ap(map(append, fn(ftor)), acc);
	        }
	        return _reduce(consF, of([]), list);
	    });

	    /**
	     * Wraps a constructor function inside a curried function that can be called with the same
	     * arguments and returns the same type. The arity of the function returned is specified
	     * to allow using variadic constructor functions.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig Number -> (* -> {*}) -> (* -> {*})
	     * @param {Number} n The arity of the constructor function.
	     * @param {Function} Fn The constructor function to wrap.
	     * @return {Function} A wrapped, curried constructor function.
	     * @example
	     *
	     *      // Variadic constructor function
	     *      var Widget = function() {
	     *        this.children = Array.prototype.slice.call(arguments);
	     *        // ...
	     *      };
	     *      Widget.prototype = {
	     *        // ...
	     *      };
	     *      var allConfigs = [
	     *        // ...
	     *      ];
	     *      R.map(R.constructN(1, Widget), allConfigs); // a list of Widgets
	     */
	    var constructN = _curry2(function constructN(n, Fn) {
	        if (n > 10) {
	            throw new Error('Constructor with greater than ten arguments');
	        }
	        if (n === 0) {
	            return function () {
	                return new Fn();
	            };
	        }
	        return curry(nAry(n, function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
	            switch (arguments.length) {
	            case 1:
	                return new Fn($0);
	            case 2:
	                return new Fn($0, $1);
	            case 3:
	                return new Fn($0, $1, $2);
	            case 4:
	                return new Fn($0, $1, $2, $3);
	            case 5:
	                return new Fn($0, $1, $2, $3, $4);
	            case 6:
	                return new Fn($0, $1, $2, $3, $4, $5);
	            case 7:
	                return new Fn($0, $1, $2, $3, $4, $5, $6);
	            case 8:
	                return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
	            case 9:
	                return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
	            case 10:
	                return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
	            }
	        }));
	    });

	    /**
	     * Accepts at least three functions and returns a new function. When invoked, this new
	     * function will invoke the first function, `after`, passing as its arguments the
	     * results of invoking the subsequent functions with whatever arguments are passed to
	     * the new function.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig (x1 -> x2 -> ... -> z) -> ((a -> b -> ... -> x1), (a -> b -> ... -> x2), ...) -> (a -> b -> ... -> z)
	     * @param {Function} after A function. `after` will be invoked with the return values of
	     *        `fn1` and `fn2` as its arguments.
	     * @param {...Function} functions A variable number of functions.
	     * @return {Function} A new function.
	     * @example
	     *
	     *      var add = function(a, b) { return a + b; };
	     *      var multiply = function(a, b) { return a * b; };
	     *      var subtract = function(a, b) { return a - b; };
	     *
	     *      //≅ multiply( add(1, 2), subtract(1, 2) );
	     *      R.converge(multiply, add, subtract)(1, 2); //=> -3
	     *
	     *      var add3 = function(a, b, c) { return a + b + c; };
	     *      R.converge(add3, multiply, add, subtract)(1, 2); //=> 4
	     */
	    var converge = curryN(3, function converge(after) {
	        var fns = _slice(arguments, 1);
	        return curryN(Math.max.apply(Math, pluck('length', fns)), function () {
	            var args = arguments;
	            var context = this;
	            return after.apply(context, _map(function (fn) {
	                return fn.apply(context, args);
	            }, fns));
	        });
	    });

	    /**
	     * Returns all but the first `n` elements of the given list, string, or
	     * transducer/transformer (or object with a `drop` method).
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @see R.transduce
	     * @sig Number -> [a] -> [a]
	     * @sig Number -> String -> String
	     * @param {Number} n
	     * @param {*} list
	     * @return {*}
	     * @see R.take
	     * @example
	     *
	     *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
	     *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
	     *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
	     *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
	     *      R.drop(3, 'ramda');               //=> 'da'
	     */
	    var drop = _curry2(_dispatchable('drop', _xdrop, function drop(n, xs) {
	        return slice(Math.max(0, n), Infinity, xs);
	    }));

	    /**
	     * Returns a list containing all but the last `n` elements of the given `list`.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig Number -> [a] -> [a]
	     * @sig Number -> String -> String
	     * @param {Number} n The number of elements of `xs` to skip.
	     * @param {Array} xs The collection to consider.
	     * @return {Array}
	     * @see R.takeLast
	     * @example
	     *
	     *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
	     *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
	     *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
	     *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
	     *      R.dropLast(3, 'ramda');               //=> 'ra'
	     */
	    var dropLast = _curry2(function dropLast(n, xs) {
	        return take(n < xs.length ? xs.length - n : 0, xs);
	    });

	    /**
	     * Returns a new list without any consecutively repeating elements. Equality is
	     * determined by applying the supplied predicate two consecutive elements.
	     * The first element in a series of equal element is the one being preserved.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     * @see R.transduce
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a, a -> Boolean) -> [a] -> [a]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list The array to consider.
	     * @return {Array} `list` without repeating elements.
	     * @example
	     *
	     *      function lengthEq(x, y) { return Math.abs(x) === Math.abs(y); };
	     *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
	     *      R.dropRepeatsWith(lengthEq, l); //=> [1, 3, 4, -5, 3]
	     */
	    var dropRepeatsWith = _curry2(_dispatchable('dropRepeatsWith', _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
	        var result = [];
	        var idx = 1;
	        var len = list.length;
	        if (len !== 0) {
	            result[0] = list[0];
	            while (idx < len) {
	                if (!pred(last(result), list[idx])) {
	                    result[result.length] = list[idx];
	                }
	                idx += 1;
	            }
	        }
	        return result;
	    }));

	    /**
	     * Reports whether two objects have the same value, in `R.equals` terms,
	     * for the specified property. Useful as a curried predicate.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig k -> {k: v} -> {k: v} -> Boolean
	     * @param {String} prop The name of the property to compare
	     * @param {Object} obj1
	     * @param {Object} obj2
	     * @return {Boolean}
	     *
	     * @example
	     *
	     *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
	     *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
	     *      R.eqProps('a', o1, o2); //=> false
	     *      R.eqProps('c', o1, o2); //=> true
	     */
	    var eqProps = _curry3(function eqProps(prop, obj1, obj2) {
	        return equals(obj1[prop], obj2[prop]);
	    });

	    /**
	     * Returns the position of the first occurrence of an item in an array,
	     * or -1 if the item is not included in the array. `R.equals` is used to
	     * determine equality.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig a -> [a] -> Number
	     * @param {*} target The item to find.
	     * @param {Array} xs The array to search in.
	     * @return {Number} the index of the target, or -1 if the target is not found.
	     * @see R.lastIndexOf
	     * @example
	     *
	     *      R.indexOf(3, [1,2,3,4]); //=> 2
	     *      R.indexOf(10, [1,2,3,4]); //=> -1
	     */
	    var indexOf = _curry2(function indexOf(target, xs) {
	        return _hasMethod('indexOf', xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
	    });

	    /**
	     * Returns all but the last element of the given list or string.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @see R.last, R.head, R.tail
	     * @sig [a] -> [a]
	     * @sig String -> String
	     * @param {*} list
	     * @return {*}
	     * @example
	     *
	     *      R.init([1, 2, 3]);  //=> [1, 2]
	     *      R.init([1, 2]);     //=> [1]
	     *      R.init([1]);        //=> []
	     *      R.init([]);         //=> []
	     *
	     *      R.init('abc');  //=> 'ab'
	     *      R.init('ab');   //=> 'a'
	     *      R.init('a');    //=> ''
	     *      R.init('');     //=> ''
	     */
	    var init = slice(0, -1);

	    /**
	     * Returns `true` if all elements are unique, in `R.equals` terms,
	     * otherwise `false`.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig [a] -> Boolean
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if all elements are unique, else `false`.
	     * @example
	     *
	     *      R.isSet(['1', 1]); //=> true
	     *      R.isSet([1, 1]);   //=> false
	     *      R.isSet([[42], [42]]); //=> false
	     */
	    var isSet = _curry1(function isSet(list) {
	        var len = list.length;
	        var idx = 0;
	        while (idx < len) {
	            if (_indexOf(list, list[idx], idx + 1) >= 0) {
	                return false;
	            }
	            idx += 1;
	        }
	        return true;
	    });

	    /**
	     * Returns a lens for the given getter and setter functions. The getter "gets"
	     * the value of the focus; the setter "sets" the value of the focus. The setter
	     * should not mutate the data structure.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @typedef Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
	     * @param {Function} getter
	     * @param {Function} setter
	     * @return {Lens}
	     * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
	     * @example
	     *
	     *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
	     *
	     *      R.view(xLens, {x: 1, y: 2});            //=> 1
	     *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
	     *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
	     */
	    var lens = _curry2(function lens(getter, setter) {
	        return function (f) {
	            return function (s) {
	                return map(function (v) {
	                    return setter(v, s);
	                }, f(getter(s)));
	            };
	        };
	    });

	    /**
	     * Returns a lens whose focus is the specified index.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @typedef Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig Number -> Lens s a
	     * @param {Number} n
	     * @return {Lens}
	     * @see R.view, R.set, R.over
	     * @example
	     *
	     *      var headLens = R.lensIndex(0);
	     *
	     *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
	     *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
	     *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
	     */
	    var lensIndex = _curry1(function lensIndex(n) {
	        return lens(nth(n), update(n));
	    });

	    /**
	     * Returns a lens whose focus is the specified property.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @typedef Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig String -> Lens s a
	     * @param {String} k
	     * @return {Lens}
	     * @see R.view, R.set, R.over
	     * @example
	     *
	     *      var xLens = R.lensProp('x');
	     *
	     *      R.view(xLens, {x: 1, y: 2});            //=> 1
	     *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
	     *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
	     */
	    var lensProp = _curry1(function lensProp(k) {
	        return lens(prop(k), assoc(k));
	    });

	    /**
	     * "lifts" a function to be the specified arity, so that it may "map over" that many
	     * lists (or other Functors).
	     *
	     * @func
	     * @memberOf R
	     * @see R.lift
	     * @category Function
	     * @sig Number -> (*... -> *) -> ([*]... -> [*])
	     * @param {Function} fn The function to lift into higher context
	     * @return {Function} The function `fn` applicable to mappable objects.
	     * @example
	     *
	     *      var madd3 = R.liftN(3, R.curryN(3, function() {
	     *        return R.reduce(R.add, 0, arguments);
	     *      }));
	     *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
	     */
	    var liftN = _curry2(function liftN(arity, fn) {
	        var lifted = curryN(arity, fn);
	        return curryN(arity, function () {
	            return _reduce(ap, map(lifted, arguments[0]), _slice(arguments, 1));
	        });
	    });

	    /**
	     * Returns the mean of the given list of numbers.
	     *
	     * @func
	     * @memberOf R
	     * @category Math
	     * @sig [Number] -> Number
	     * @param {Array} list
	     * @return {Number}
	     * @example
	     *
	     *      R.mean([2, 7, 9]); //=> 6
	     *      R.mean([]); //=> NaN
	     */
	    var mean = _curry1(function mean(list) {
	        return sum(list) / list.length;
	    });

	    /**
	     * Returns the median of the given list of numbers.
	     *
	     * @func
	     * @memberOf R
	     * @category Math
	     * @sig [Number] -> Number
	     * @param {Array} list
	     * @return {Number}
	     * @example
	     *
	     *      R.median([2, 9, 7]); //=> 7
	     *      R.median([7, 2, 10, 9]); //=> 8
	     *      R.median([]); //=> NaN
	     */
	    var median = _curry1(function median(list) {
	        var len = list.length;
	        if (len === 0) {
	            return NaN;
	        }
	        var width = 2 - len % 2;
	        var idx = (len - width) / 2;
	        return mean(_slice(list).sort(function (a, b) {
	            return a < b ? -1 : a > b ? 1 : 0;
	        }).slice(idx, idx + width));
	    });

	    /**
	     * Merges a list of objects together into one object.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig [{k: v}] -> {k: v}
	     * @param {Array} list An array of objects
	     * @return {Object} A merged object.
	     * @see R.reduce
	     * @example
	     *
	     *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
	     *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
	     */
	    var mergeAll = _curry1(function mergeAll(list) {
	        return reduce(merge, {}, list);
	    });

	    /**
	     * Performs left-to-right function composition. The leftmost function may have
	     * any arity; the remaining functions must be unary.
	     *
	     * In some libraries this function is named `sequence`.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> (a -> b -> ... -> n -> z)
	     * @param {...Function} functions
	     * @return {Function}
	     * @see R.compose
	     * @example
	     *
	     *      var f = R.pipe(Math.pow, R.negate, R.inc);
	     *
	     *      f(3, 4); // -(3^4) + 1
	     */
	    var pipe = function pipe() {
	        if (arguments.length === 0) {
	            throw new Error('pipe requires at least one argument');
	        }
	        return curryN(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
	    };

	    /**
	     * Performs left-to-right composition of one or more Promise-returning
	     * functions. The leftmost function may have any arity; the remaining
	     * functions must be unary.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
	     * @param {...Function} functions
	     * @return {Function}
	     * @see R.composeP
	     * @example
	     *
	     *      //  followersForUser :: String -> Promise [User]
	     *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
	     */
	    var pipeP = function pipeP() {
	        if (arguments.length === 0) {
	            throw new Error('pipeP requires at least one argument');
	        }
	        return curryN(arguments[0].length, reduce(_pipeP, arguments[0], tail(arguments)));
	    };

	    /**
	     * Multiplies together all the elements of a list.
	     *
	     * @func
	     * @memberOf R
	     * @category Math
	     * @sig [Number] -> Number
	     * @param {Array} list An array of numbers
	     * @return {Number} The product of all the numbers in the list.
	     * @see R.reduce
	     * @example
	     *
	     *      R.product([2,4,6,8,100,1]); //=> 38400
	     */
	    var product = reduce(multiply, 1);

	    /**
	     * Reasonable analog to SQL `select` statement.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @category Relation
	     * @sig [k] -> [{k: v}] -> [{k: v}]
	     * @param {Array} props The property names to project
	     * @param {Array} objs The objects to query
	     * @return {Array} An array of objects with just the `props` properties.
	     * @example
	     *
	     *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
	     *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
	     *      var kids = [abby, fred];
	     *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
	     */
	    // passing `identity` gives correct arity
	    var project = useWith(_map, pickAll, identity);

	    /**
	     * Returns a new list containing the last `n` elements of the given list.
	     * If `n > list.length`, returns a list of `list.length` elements.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig Number -> [a] -> [a]
	     * @sig Number -> String -> String
	     * @param {Number} n The number of elements to return.
	     * @param {Array} xs The collection to consider.
	     * @return {Array}
	     * @see R.dropLast
	     * @example
	     *
	     *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
	     *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['for', 'baz']
	     *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	     *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	     *      R.takeLast(3, 'ramda');               //=> 'mda'
	     */
	    var takeLast = _curry2(function takeLast(n, xs) {
	        return drop(n >= 0 ? xs.length - n : 0, xs);
	    });

	    var _contains = function _contains(a, list) {
	        return _indexOf(list, a, 0) >= 0;
	    };

	    //  mapPairs :: (Object, [String]) -> [String]
	    // Function, RegExp, user-defined types
	    var _toString = function _toString(x, seen) {
	        var recur = function recur(y) {
	            var xs = seen.concat([x]);
	            return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
	        };
	        //  mapPairs :: (Object, [String]) -> [String]
	        var mapPairs = function (obj, keys) {
	            return _map(function (k) {
	                return _quote(k) + ': ' + recur(obj[k]);
	            }, keys.slice().sort());
	        };
	        switch (Object.prototype.toString.call(x)) {
	        case '[object Arguments]':
	            return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
	        case '[object Array]':
	            return '[' + _map(recur, x).concat(mapPairs(x, reject(test(/^\d+$/), keys(x)))).join(', ') + ']';
	        case '[object Boolean]':
	            return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
	        case '[object Date]':
	            return 'new Date(' + _quote(_toISOString(x)) + ')';
	        case '[object Null]':
	            return 'null';
	        case '[object Number]':
	            return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
	        case '[object String]':
	            return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
	        case '[object Undefined]':
	            return 'undefined';
	        default:
	            return typeof x.constructor === 'function' && x.constructor.name !== 'Object' && typeof x.toString === 'function' && x.toString() !== '[object Object]' ? x.toString() : // Function, RegExp, user-defined types
	            '{' + mapPairs(x, keys(x)).join(', ') + '}';
	        }
	    };

	    /**
	     * Turns a list of Functors into a Functor of a list.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @see R.commuteMap
	     * @sig Functor f => (x -> f x) -> [f a] -> f [a]
	     * @param {Function} of A function that returns the data type to return
	     * @param {Array} list An array of functors of the same type
	     * @return {*}
	     * @example
	     *
	     *      R.commute(R.of, [[1], [2, 3]]);   //=> [[1, 2], [1, 3]]
	     *      R.commute(R.of, [[1, 2], [3]]);   //=> [[1, 3], [2, 3]]
	     *      R.commute(R.of, [[1], [2], [3]]); //=> [[1, 2, 3]]
	     *      R.commute(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
	     *      R.commute(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
	     */
	    var commute = commuteMap(identity);

	    /**
	     * Performs right-to-left function composition. The rightmost function may have
	     * any arity; the remaining functions must be unary.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> (a -> b -> ... -> n -> z)
	     * @param {...Function} functions
	     * @return {Function}
	     * @see R.pipe
	     * @example
	     *
	     *      var f = R.compose(R.inc, R.negate, Math.pow);
	     *
	     *      f(3, 4); // -(3^4) + 1
	     */
	    var compose = function compose() {
	        if (arguments.length === 0) {
	            throw new Error('compose requires at least one argument');
	        }
	        return pipe.apply(this, reverse(arguments));
	    };

	    /**
	     * Returns the right-to-left Kleisli composition of the provided functions,
	     * each of which must return a value of a type supported by [`chain`](#chain).
	     *
	     * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), R.chain(f))`.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @see R.pipeK
	     * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (m a -> m z)
	     * @param {...Function}
	     * @return {Function}
	     * @example
	     *
	     *      //  parseJson :: String -> Maybe *
	     *      //  get :: String -> Object -> Maybe *
	     *
	     *      //  getStateCode :: Maybe String -> Maybe String
	     *      var getStateCode = R.composeK(
	     *        R.compose(Maybe.of, R.toUpper),
	     *        get('state'),
	     *        get('address'),
	     *        get('user'),
	     *        parseJson
	     *      );
	     *
	     *      getStateCode(Maybe.of('{"user":{"address":{"state":"ny"}}}'));
	     *      //=> Just('NY')
	     *      getStateCode(Maybe.of('[Invalid JSON]'));
	     *      //=> Nothing()
	     */
	    var composeK = function composeK() {
	        return arguments.length === 0 ? identity : compose.apply(this, map(chain, arguments));
	    };

	    /**
	     * Performs right-to-left composition of one or more Promise-returning
	     * functions. The rightmost function may have any arity; the remaining
	     * functions must be unary.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
	     * @param {...Function} functions
	     * @return {Function}
	     * @see R.pipeP
	     * @example
	     *
	     *      //  followersForUser :: String -> Promise [User]
	     *      var followersForUser = R.composeP(db.getFollowers, db.getUserById);
	     */
	    var composeP = function composeP() {
	        if (arguments.length === 0) {
	            throw new Error('composeP requires at least one argument');
	        }
	        return pipeP.apply(this, reverse(arguments));
	    };

	    /**
	     * Wraps a constructor function inside a curried function that can be called with the same
	     * arguments and returns the same type.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig (* -> {*}) -> (* -> {*})
	     * @param {Function} Fn The constructor function to wrap.
	     * @return {Function} A wrapped, curried constructor function.
	     * @example
	     *
	     *      // Constructor function
	     *      var Widget = function(config) {
	     *        // ...
	     *      };
	     *      Widget.prototype = {
	     *        // ...
	     *      };
	     *      var allConfigs = [
	     *        // ...
	     *      ];
	     *      R.map(R.construct(Widget), allConfigs); // a list of Widgets
	     */
	    var construct = _curry1(function construct(Fn) {
	        return constructN(Fn.length, Fn);
	    });

	    /**
	     * Returns `true` if the specified value is equal, in `R.equals` terms,
	     * to at least one element of the given list; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig a -> [a] -> Boolean
	     * @param {Object} a The item to compare against.
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if the item is in the list, `false` otherwise.
	     *
	     * @example
	     *
	     *      R.contains(3, [1, 2, 3]); //=> true
	     *      R.contains(4, [1, 2, 3]); //=> false
	     *      R.contains([42], [[42]]); //=> true
	     */
	    var contains = _curry2(_contains);

	    /**
	     * Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig [a] -> [a] -> [a]
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The elements in `list1` that are not in `list2`.
	     * @see R.differenceWith
	     * @example
	     *
	     *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
	     *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
	     */
	    var difference = _curry2(function difference(first, second) {
	        var out = [];
	        var idx = 0;
	        var firstLen = first.length;
	        while (idx < firstLen) {
	            if (!_contains(first[idx], second) && !_contains(first[idx], out)) {
	                out[out.length] = first[idx];
	            }
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns a new list without any consecutively repeating elements.
	     * `R.equals` is used to determine equality.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     * @see R.transduce
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig [a] -> [a]
	     * @param {Array} list The array to consider.
	     * @return {Array} `list` without repeating elements.
	     * @example
	     *
	     *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
	     */
	    var dropRepeats = _curry1(_dispatchable('dropRepeats', _xdropRepeatsWith(equals), dropRepeatsWith(equals)));

	    /**
	     * Combines two lists into a set (i.e. no duplicates) composed of those elements common to both lists.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig [a] -> [a] -> [a]
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @see R.intersectionWith
	     * @return {Array} The list of elements found in both `list1` and `list2`.
	     * @example
	     *
	     *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
	     */
	    var intersection = _curry2(function intersection(list1, list2) {
	        return uniq(_filter(flip(_contains)(list1), list2));
	    });

	    /**
	     * "lifts" a function of arity > 1 so that it may "map over" an Array or
	     * other Functor.
	     *
	     * @func
	     * @memberOf R
	     * @see R.liftN
	     * @category Function
	     * @sig (*... -> *) -> ([*]... -> [*])
	     * @param {Function} fn The function to lift into higher context
	     * @return {Function} The function `fn` applicable to mappable objects.
	     * @example
	     *
	     *      var madd3 = R.lift(R.curry(function(a, b, c) {
	     *        return a + b + c;
	     *      }));
	     *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
	     *
	     *      var madd5 = R.lift(R.curry(function(a, b, c, d, e) {
	     *        return a + b + c + d + e;
	     *      }));
	     *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
	     */
	    var lift = _curry1(function lift(fn) {
	        return liftN(fn.length, fn);
	    });

	    /**
	     * Returns a partial copy of an object omitting the keys specified.
	     *
	     * @func
	     * @memberOf R
	     * @category Object
	     * @sig [String] -> {String: *} -> {String: *}
	     * @param {Array} names an array of String property names to omit from the new object
	     * @param {Object} obj The object to copy from
	     * @return {Object} A new object with properties from `names` not on it.
	     * @see R.pick
	     * @example
	     *
	     *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
	     */
	    var omit = _curry2(function omit(names, obj) {
	        var result = {};
	        for (var prop in obj) {
	            if (!_contains(prop, names)) {
	                result[prop] = obj[prop];
	            }
	        }
	        return result;
	    });

	    /**
	     * Returns the left-to-right Kleisli composition of the provided functions,
	     * each of which must return a value of a type supported by [`chain`](#chain).
	     *
	     * `R.pipeK(f, g, h)` is equivalent to `R.pipe(R.chain(f), R.chain(g), R.chain(h))`.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @see R.composeK
	     * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (m a -> m z)
	     * @param {...Function}
	     * @return {Function}
	     * @example
	     *
	     *      //  parseJson :: String -> Maybe *
	     *      //  get :: String -> Object -> Maybe *
	     *
	     *      //  getStateCode :: Maybe String -> Maybe String
	     *      var getStateCode = R.pipeK(
	     *        parseJson,
	     *        get('user'),
	     *        get('address'),
	     *        get('state'),
	     *        R.compose(Maybe.of, R.toUpper)
	     *      );
	     *
	     *      getStateCode(Maybe.of('{"user":{"address":{"state":"ny"}}}'));
	     *      //=> Just('NY')
	     *      getStateCode(Maybe.of('[Invalid JSON]'));
	     *      //=> Nothing()
	     */
	    var pipeK = function pipeK() {
	        return composeK.apply(this, reverse(arguments));
	    };

	    /**
	     * Returns the string representation of the given value. `eval`'ing the output
	     * should result in a value equivalent to the input value. Many of the built-in
	     * `toString` methods do not satisfy this requirement.
	     *
	     * If the given value is an `[object Object]` with a `toString` method other
	     * than `Object.prototype.toString`, this method is invoked with no arguments
	     * to produce the return value. This means user-defined constructor functions
	     * can provide a suitable `toString` method. For example:
	     *
	     *     function Point(x, y) {
	     *       this.x = x;
	     *       this.y = y;
	     *     }
	     *
	     *     Point.prototype.toString = function() {
	     *       return 'new Point(' + this.x + ', ' + this.y + ')';
	     *     };
	     *
	     *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
	     *
	     * @func
	     * @memberOf R
	     * @category String
	     * @sig * -> String
	     * @param {*} val
	     * @return {String}
	     * @example
	     *
	     *      R.toString(42); //=> '42'
	     *      R.toString('abc'); //=> '"abc"'
	     *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
	     *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
	     *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
	     */
	    var toString = _curry1(function toString(val) {
	        return _toString(val, []);
	    });

	    /**
	     * Combines two lists into a set (i.e. no duplicates) composed of the
	     * elements of each list.
	     *
	     * @func
	     * @memberOf R
	     * @category Relation
	     * @sig [a] -> [a] -> [a]
	     * @param {Array} as The first list.
	     * @param {Array} bs The second list.
	     * @return {Array} The first and second lists concatenated, with
	     *         duplicates removed.
	     * @example
	     *
	     *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
	     */
	    var union = _curry2(compose(uniq, _concat));

	    /**
	     * Returns a new list containing only one copy of each element in the
	     * original list, based upon the value returned by applying the supplied
	     * function to each list element. Prefers the first item if the supplied
	     * function produces the same value on two items. `R.equals` is used for
	     * comparison.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig (a -> b) -> [a] -> [a]
	     * @param {Function} fn A function used to produce a value to use during comparisons.
	     * @param {Array} list The array to consider.
	     * @return {Array} The list of unique items.
	     * @example
	     *
	     *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
	     */
	    var uniqBy = _curry2(function uniqBy(fn, list) {
	        var idx = 0, applied = [], result = [], appliedItem, item;
	        while (idx < list.length) {
	            item = list[idx];
	            appliedItem = fn(item);
	            if (!_contains(appliedItem, applied)) {
	                result.push(item);
	                applied.push(appliedItem);
	            }
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Turns a named method with a specified arity into a function
	     * that can be called directly supplied with arguments and a target object.
	     *
	     * The returned function is curried and accepts `arity + 1` parameters where
	     * the final parameter is the target object.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
	     * @param {Number} arity Number of arguments the returned function should take
	     *        before the target object.
	     * @param {Function} method Name of the method to call.
	     * @return {Function} A new curried function.
	     * @example
	     *
	     *      var sliceFrom = R.invoker(1, 'slice');
	     *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
	     *      var sliceFrom6 = R.invoker(2, 'slice')(6);
	     *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
	     */
	    var invoker = _curry2(function invoker(arity, method) {
	        return curryN(arity + 1, function () {
	            var target = arguments[arity];
	            if (target != null && is(Function, target[method])) {
	                return target[method].apply(target, _slice(arguments, 0, arity));
	            }
	            throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
	        });
	    });

	    /**
	     * Returns a string made by inserting the `separator` between each
	     * element and concatenating all the elements into a single string.
	     *
	     * @func
	     * @memberOf R
	     * @category List
	     * @sig String -> [a] -> String
	     * @param {Number|String} separator The string used to separate the elements.
	     * @param {Array} xs The elements to join into a string.
	     * @return {String} str The string made by concatenating `xs` with `separator`.
	     * @see R.split
	     * @example
	     *
	     *      var spacer = R.join(' ');
	     *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
	     *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
	     */
	    var join = invoker(1, 'join');

	    /**
	     * Creates a new function that, when invoked, caches the result of calling `fn` for a given
	     * argument set and returns the result. Subsequent calls to the memoized `fn` with the same
	     * argument set will not result in an additional call to `fn`; instead, the cached result
	     * for that set of arguments will be returned.
	     *
	     * @func
	     * @memberOf R
	     * @category Function
	     * @sig (*... -> a) -> (*... -> a)
	     * @param {Function} fn The function to memoize.
	     * @return {Function} Memoized version of `fn`.
	     * @example
	     *
	     *      var count = 0;
	     *      var factorial = R.memoize(function(n) {
	     *        count += 1;
	     *        return R.product(R.range(1, n + 1));
	     *      });
	     *      factorial(5); //=> 120
	     *      factorial(5); //=> 120
	     *      factorial(5); //=> 120
	     *      count; //=> 1
	     */
	    var memoize = _curry1(function memoize(fn) {
	        var cache = {};
	        return function () {
	            var key = toString(arguments);
	            if (!_has(key, cache)) {
	                cache[key] = fn.apply(this, arguments);
	            }
	            return cache[key];
	        };
	    });

	    /**
	     * Splits a string into an array of strings based on the given
	     * separator.
	     *
	     * @func
	     * @memberOf R
	     * @category String
	     * @sig String -> String -> [String]
	     * @param {String} sep The separator string.
	     * @param {String} str The string to separate into an array.
	     * @return {Array} The array of strings from `str` separated by `str`.
	     * @see R.join
	     * @example
	     *
	     *      var pathComponents = R.split('/');
	     *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
	     *
	     *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
	     */
	    var split = invoker(1, 'split');

	    /**
	     * The lower case version of a string.
	     *
	     * @func
	     * @memberOf R
	     * @category String
	     * @sig String -> String
	     * @param {String} str The string to lower case.
	     * @return {String} The lower case version of `str`.
	     * @see R.toUpper
	     * @example
	     *
	     *      R.toLower('XYZ'); //=> 'xyz'
	     */
	    var toLower = invoker(0, 'toLowerCase');

	    /**
	     * The upper case version of a string.
	     *
	     * @func
	     * @memberOf R
	     * @category String
	     * @sig String -> String
	     * @param {String} str The string to upper case.
	     * @return {String} The upper case version of `str`.
	     * @see R.toLower
	     * @example
	     *
	     *      R.toUpper('abc'); //=> 'ABC'
	     */
	    var toUpper = invoker(0, 'toUpperCase');

	    var R = {
	        F: F,
	        T: T,
	        __: __,
	        add: add,
	        addIndex: addIndex,
	        adjust: adjust,
	        all: all,
	        allPass: allPass,
	        always: always,
	        and: and,
	        any: any,
	        anyPass: anyPass,
	        ap: ap,
	        aperture: aperture,
	        append: append,
	        apply: apply,
	        assoc: assoc,
	        assocPath: assocPath,
	        binary: binary,
	        bind: bind,
	        both: both,
	        call: call,
	        chain: chain,
	        clone: clone,
	        commute: commute,
	        commuteMap: commuteMap,
	        comparator: comparator,
	        complement: complement,
	        compose: compose,
	        composeK: composeK,
	        composeP: composeP,
	        concat: concat,
	        cond: cond,
	        construct: construct,
	        constructN: constructN,
	        contains: contains,
	        containsWith: containsWith,
	        converge: converge,
	        countBy: countBy,
	        createMapEntry: createMapEntry,
	        curry: curry,
	        curryN: curryN,
	        dec: dec,
	        defaultTo: defaultTo,
	        difference: difference,
	        differenceWith: differenceWith,
	        dissoc: dissoc,
	        dissocPath: dissocPath,
	        divide: divide,
	        drop: drop,
	        dropLast: dropLast,
	        dropLastWhile: dropLastWhile,
	        dropRepeats: dropRepeats,
	        dropRepeatsWith: dropRepeatsWith,
	        dropWhile: dropWhile,
	        either: either,
	        empty: empty,
	        eqProps: eqProps,
	        equals: equals,
	        evolve: evolve,
	        filter: filter,
	        find: find,
	        findIndex: findIndex,
	        findLast: findLast,
	        findLastIndex: findLastIndex,
	        flatten: flatten,
	        flip: flip,
	        forEach: forEach,
	        fromPairs: fromPairs,
	        functions: functions,
	        functionsIn: functionsIn,
	        groupBy: groupBy,
	        gt: gt,
	        gte: gte,
	        has: has,
	        hasIn: hasIn,
	        head: head,
	        identical: identical,
	        identity: identity,
	        ifElse: ifElse,
	        inc: inc,
	        indexOf: indexOf,
	        init: init,
	        insert: insert,
	        insertAll: insertAll,
	        intersection: intersection,
	        intersectionWith: intersectionWith,
	        intersperse: intersperse,
	        into: into,
	        invert: invert,
	        invertObj: invertObj,
	        invoker: invoker,
	        is: is,
	        isArrayLike: isArrayLike,
	        isEmpty: isEmpty,
	        isNil: isNil,
	        isSet: isSet,
	        join: join,
	        keys: keys,
	        keysIn: keysIn,
	        last: last,
	        lastIndexOf: lastIndexOf,
	        length: length,
	        lens: lens,
	        lensIndex: lensIndex,
	        lensProp: lensProp,
	        lift: lift,
	        liftN: liftN,
	        lt: lt,
	        lte: lte,
	        map: map,
	        mapAccum: mapAccum,
	        mapAccumRight: mapAccumRight,
	        mapObj: mapObj,
	        mapObjIndexed: mapObjIndexed,
	        match: match,
	        mathMod: mathMod,
	        max: max,
	        maxBy: maxBy,
	        mean: mean,
	        median: median,
	        memoize: memoize,
	        merge: merge,
	        mergeAll: mergeAll,
	        min: min,
	        minBy: minBy,
	        modulo: modulo,
	        multiply: multiply,
	        nAry: nAry,
	        negate: negate,
	        none: none,
	        not: not,
	        nth: nth,
	        nthArg: nthArg,
	        nthChar: nthChar,
	        nthCharCode: nthCharCode,
	        of: of,
	        omit: omit,
	        once: once,
	        or: or,
	        over: over,
	        partial: partial,
	        partialRight: partialRight,
	        partition: partition,
	        path: path,
	        pathEq: pathEq,
	        pick: pick,
	        pickAll: pickAll,
	        pickBy: pickBy,
	        pipe: pipe,
	        pipeK: pipeK,
	        pipeP: pipeP,
	        pluck: pluck,
	        prepend: prepend,
	        product: product,
	        project: project,
	        prop: prop,
	        propEq: propEq,
	        propIs: propIs,
	        propOr: propOr,
	        propSatisfies: propSatisfies,
	        props: props,
	        range: range,
	        reduce: reduce,
	        reduceRight: reduceRight,
	        reduced: reduced,
	        reject: reject,
	        remove: remove,
	        repeat: repeat,
	        replace: replace,
	        reverse: reverse,
	        scan: scan,
	        set: set,
	        slice: slice,
	        sort: sort,
	        sortBy: sortBy,
	        split: split,
	        splitEvery: splitEvery,
	        subtract: subtract,
	        sum: sum,
	        tail: tail,
	        take: take,
	        takeLast: takeLast,
	        takeLastWhile: takeLastWhile,
	        takeWhile: takeWhile,
	        tap: tap,
	        test: test,
	        times: times,
	        toLower: toLower,
	        toPairs: toPairs,
	        toPairsIn: toPairsIn,
	        toString: toString,
	        toUpper: toUpper,
	        transduce: transduce,
	        trim: trim,
	        type: type,
	        unapply: unapply,
	        unary: unary,
	        uncurryN: uncurryN,
	        unfold: unfold,
	        union: union,
	        unionWith: unionWith,
	        uniq: uniq,
	        uniqBy: uniqBy,
	        uniqWith: uniqWith,
	        unnest: unnest,
	        update: update,
	        useWith: useWith,
	        values: values,
	        valuesIn: valuesIn,
	        view: view,
	        where: where,
	        whereEq: whereEq,
	        wrap: wrap,
	        xprod: xprod,
	        zip: zip,
	        zipObj: zipObj,
	        zipWith: zipWith
	    };

	  /* TEST_ENTRY_POINT */

	  if (true) {
	    module.exports = R;
	  } else if (typeof define === 'function' && define.amd) {
	    define(function() { return R; });
	  } else {
	    this.R = R;
	  }

	}.call(this));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// vim:ts=4:sts=4:sw=4:
	/*!
	 *
	 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
	 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
	 *
	 * With parts by Tyler Close
	 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
	 * at http://www.opensource.org/licenses/mit-license.html
	 * Forked at ref_send.js version: 2009-05-11
	 *
	 * With parts by Mark Miller
	 * Copyright (C) 2011 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */

	(function (definition) {
	    "use strict";

	    // This file will function properly as a <script> tag, or a module
	    // using CommonJS and NodeJS or RequireJS module formats.  In
	    // Common/Node/RequireJS, the module exports the Q API and when
	    // executed as a simple <script>, it creates a Q global instead.

	    // Montage Require
	    if (typeof bootstrap === "function") {
	        bootstrap("promise", definition);

	    // CommonJS
	    } else if (true) {
	        module.exports = definition();

	    // RequireJS
	    } else if (typeof define === "function" && define.amd) {
	        define(definition);

	    // SES (Secure EcmaScript)
	    } else if (typeof ses !== "undefined") {
	        if (!ses.ok()) {
	            return;
	        } else {
	            ses.makeQ = definition;
	        }

	    // <script>
	    } else if (typeof window !== "undefined" || typeof self !== "undefined") {
	        // Prefer window over self for add-on scripts. Use self for
	        // non-windowed contexts.
	        var global = typeof window !== "undefined" ? window : self;

	        // Get the `window` object, save the previous Q global
	        // and initialize Q as a global.
	        var previousQ = global.Q;
	        global.Q = definition();

	        // Add a noConflict function so Q can be removed from the
	        // global namespace.
	        global.Q.noConflict = function () {
	            global.Q = previousQ;
	            return this;
	        };

	    } else {
	        throw new Error("This environment was not anticipated by Q. Please file a bug.");
	    }

	})(function () {
	"use strict";

	var hasStacks = false;
	try {
	    throw new Error();
	} catch (e) {
	    hasStacks = !!e.stack;
	}

	// All code after this point will be filtered from stack traces reported
	// by Q.
	var qStartingLine = captureLine();
	var qFileName;

	// shims

	// used for fallback in "allResolved"
	var noop = function () {};

	// Use the fastest possible means to execute a task in a future turn
	// of the event loop.
	var nextTick =(function () {
	    // linked list of tasks (single, with head node)
	    var head = {task: void 0, next: null};
	    var tail = head;
	    var flushing = false;
	    var requestTick = void 0;
	    var isNodeJS = false;
	    // queue for late tasks, used by unhandled rejection tracking
	    var laterQueue = [];

	    function flush() {
	        /* jshint loopfunc: true */
	        var task, domain;

	        while (head.next) {
	            head = head.next;
	            task = head.task;
	            head.task = void 0;
	            domain = head.domain;

	            if (domain) {
	                head.domain = void 0;
	                domain.enter();
	            }
	            runSingle(task, domain);

	        }
	        while (laterQueue.length) {
	            task = laterQueue.pop();
	            runSingle(task);
	        }
	        flushing = false;
	    }
	    // runs a single function in the async queue
	    function runSingle(task, domain) {
	        try {
	            task();

	        } catch (e) {
	            if (isNodeJS) {
	                // In node, uncaught exceptions are considered fatal errors.
	                // Re-throw them synchronously to interrupt flushing!

	                // Ensure continuation if the uncaught exception is suppressed
	                // listening "uncaughtException" events (as domains does).
	                // Continue in next event to avoid tick recursion.
	                if (domain) {
	                    domain.exit();
	                }
	                setTimeout(flush, 0);
	                if (domain) {
	                    domain.enter();
	                }

	                throw e;

	            } else {
	                // In browsers, uncaught exceptions are not fatal.
	                // Re-throw them asynchronously to avoid slow-downs.
	                setTimeout(function () {
	                    throw e;
	                }, 0);
	            }
	        }

	        if (domain) {
	            domain.exit();
	        }
	    }

	    nextTick = function (task) {
	        tail = tail.next = {
	            task: task,
	            domain: isNodeJS && process.domain,
	            next: null
	        };

	        if (!flushing) {
	            flushing = true;
	            requestTick();
	        }
	    };

	    if (typeof process === "object" &&
	        process.toString() === "[object process]" && process.nextTick) {
	        // Ensure Q is in a real Node environment, with a `process.nextTick`.
	        // To see through fake Node environments:
	        // * Mocha test runner - exposes a `process` global without a `nextTick`
	        // * Browserify - exposes a `process.nexTick` function that uses
	        //   `setTimeout`. In this case `setImmediate` is preferred because
	        //    it is faster. Browserify's `process.toString()` yields
	        //   "[object Object]", while in a real Node environment
	        //   `process.nextTick()` yields "[object process]".
	        isNodeJS = true;

	        requestTick = function () {
	            process.nextTick(flush);
	        };

	    } else if (typeof setImmediate === "function") {
	        // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
	        if (typeof window !== "undefined") {
	            requestTick = setImmediate.bind(window, flush);
	        } else {
	            requestTick = function () {
	                setImmediate(flush);
	            };
	        }

	    } else if (typeof MessageChannel !== "undefined") {
	        // modern browsers
	        // http://www.nonblocking.io/2011/06/windownexttick.html
	        var channel = new MessageChannel();
	        // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
	        // working message ports the first time a page loads.
	        channel.port1.onmessage = function () {
	            requestTick = requestPortTick;
	            channel.port1.onmessage = flush;
	            flush();
	        };
	        var requestPortTick = function () {
	            // Opera requires us to provide a message payload, regardless of
	            // whether we use it.
	            channel.port2.postMessage(0);
	        };
	        requestTick = function () {
	            setTimeout(flush, 0);
	            requestPortTick();
	        };

	    } else {
	        // old browsers
	        requestTick = function () {
	            setTimeout(flush, 0);
	        };
	    }
	    // runs a task after all other tasks have been run
	    // this is useful for unhandled rejection tracking that needs to happen
	    // after all `then`d tasks have been run.
	    nextTick.runAfter = function (task) {
	        laterQueue.push(task);
	        if (!flushing) {
	            flushing = true;
	            requestTick();
	        }
	    };
	    return nextTick;
	})();

	// Attempt to make generics safe in the face of downstream
	// modifications.
	// There is no situation where this is necessary.
	// If you need a security guarantee, these primordials need to be
	// deeply frozen anyway, and if you don’t need a security guarantee,
	// this is just plain paranoid.
	// However, this **might** have the nice side-effect of reducing the size of
	// the minified code by reducing x.call() to merely x()
	// See Mark Miller’s explanation of what this does.
	// http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
	var call = Function.call;
	function uncurryThis(f) {
	    return function () {
	        return call.apply(f, arguments);
	    };
	}
	// This is equivalent, but slower:
	// uncurryThis = Function_bind.bind(Function_bind.call);
	// http://jsperf.com/uncurrythis

	var array_slice = uncurryThis(Array.prototype.slice);

	var array_reduce = uncurryThis(
	    Array.prototype.reduce || function (callback, basis) {
	        var index = 0,
	            length = this.length;
	        // concerning the initial value, if one is not provided
	        if (arguments.length === 1) {
	            // seek to the first value in the array, accounting
	            // for the possibility that is is a sparse array
	            do {
	                if (index in this) {
	                    basis = this[index++];
	                    break;
	                }
	                if (++index >= length) {
	                    throw new TypeError();
	                }
	            } while (1);
	        }
	        // reduce
	        for (; index < length; index++) {
	            // account for the possibility that the array is sparse
	            if (index in this) {
	                basis = callback(basis, this[index], index);
	            }
	        }
	        return basis;
	    }
	);

	var array_indexOf = uncurryThis(
	    Array.prototype.indexOf || function (value) {
	        // not a very good shim, but good enough for our one use of it
	        for (var i = 0; i < this.length; i++) {
	            if (this[i] === value) {
	                return i;
	            }
	        }
	        return -1;
	    }
	);

	var array_map = uncurryThis(
	    Array.prototype.map || function (callback, thisp) {
	        var self = this;
	        var collect = [];
	        array_reduce(self, function (undefined, value, index) {
	            collect.push(callback.call(thisp, value, index, self));
	        }, void 0);
	        return collect;
	    }
	);

	var object_create = Object.create || function (prototype) {
	    function Type() { }
	    Type.prototype = prototype;
	    return new Type();
	};

	var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

	var object_keys = Object.keys || function (object) {
	    var keys = [];
	    for (var key in object) {
	        if (object_hasOwnProperty(object, key)) {
	            keys.push(key);
	        }
	    }
	    return keys;
	};

	var object_toString = uncurryThis(Object.prototype.toString);

	function isObject(value) {
	    return value === Object(value);
	}

	// generator related shims

	// FIXME: Remove this function once ES6 generators are in SpiderMonkey.
	function isStopIteration(exception) {
	    return (
	        object_toString(exception) === "[object StopIteration]" ||
	        exception instanceof QReturnValue
	    );
	}

	// FIXME: Remove this helper and Q.return once ES6 generators are in
	// SpiderMonkey.
	var QReturnValue;
	if (typeof ReturnValue !== "undefined") {
	    QReturnValue = ReturnValue;
	} else {
	    QReturnValue = function (value) {
	        this.value = value;
	    };
	}

	// long stack traces

	var STACK_JUMP_SEPARATOR = "From previous event:";

	function makeStackTraceLong(error, promise) {
	    // If possible, transform the error stack trace by removing Node and Q
	    // cruft, then concatenating with the stack trace of `promise`. See #57.
	    if (hasStacks &&
	        promise.stack &&
	        typeof error === "object" &&
	        error !== null &&
	        error.stack &&
	        error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1
	    ) {
	        var stacks = [];
	        for (var p = promise; !!p; p = p.source) {
	            if (p.stack) {
	                stacks.unshift(p.stack);
	            }
	        }
	        stacks.unshift(error.stack);

	        var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
	        error.stack = filterStackString(concatedStacks);
	    }
	}

	function filterStackString(stackString) {
	    var lines = stackString.split("\n");
	    var desiredLines = [];
	    for (var i = 0; i < lines.length; ++i) {
	        var line = lines[i];

	        if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
	            desiredLines.push(line);
	        }
	    }
	    return desiredLines.join("\n");
	}

	function isNodeFrame(stackLine) {
	    return stackLine.indexOf("(module.js:") !== -1 ||
	           stackLine.indexOf("(node.js:") !== -1;
	}

	function getFileNameAndLineNumber(stackLine) {
	    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
	    // In IE10 function name can have spaces ("Anonymous function") O_o
	    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
	    if (attempt1) {
	        return [attempt1[1], Number(attempt1[2])];
	    }

	    // Anonymous functions: "at filename:lineNumber:columnNumber"
	    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
	    if (attempt2) {
	        return [attempt2[1], Number(attempt2[2])];
	    }

	    // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
	    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
	    if (attempt3) {
	        return [attempt3[1], Number(attempt3[2])];
	    }
	}

	function isInternalFrame(stackLine) {
	    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

	    if (!fileNameAndLineNumber) {
	        return false;
	    }

	    var fileName = fileNameAndLineNumber[0];
	    var lineNumber = fileNameAndLineNumber[1];

	    return fileName === qFileName &&
	        lineNumber >= qStartingLine &&
	        lineNumber <= qEndingLine;
	}

	// discover own file name and line number range for filtering stack
	// traces
	function captureLine() {
	    if (!hasStacks) {
	        return;
	    }

	    try {
	        throw new Error();
	    } catch (e) {
	        var lines = e.stack.split("\n");
	        var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
	        var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
	        if (!fileNameAndLineNumber) {
	            return;
	        }

	        qFileName = fileNameAndLineNumber[0];
	        return fileNameAndLineNumber[1];
	    }
	}

	function deprecate(callback, name, alternative) {
	    return function () {
	        if (typeof console !== "undefined" &&
	            typeof console.warn === "function") {
	            console.warn(name + " is deprecated, use " + alternative +
	                         " instead.", new Error("").stack);
	        }
	        return callback.apply(callback, arguments);
	    };
	}

	// end of shims
	// beginning of real work

	/**
	 * Constructs a promise for an immediate reference, passes promises through, or
	 * coerces promises from different systems.
	 * @param value immediate reference or promise
	 */
	function Q(value) {
	    // If the object is already a Promise, return it directly.  This enables
	    // the resolve function to both be used to created references from objects,
	    // but to tolerably coerce non-promises to promises.
	    if (value instanceof Promise) {
	        return value;
	    }

	    // assimilate thenables
	    if (isPromiseAlike(value)) {
	        return coerce(value);
	    } else {
	        return fulfill(value);
	    }
	}
	Q.resolve = Q;

	/**
	 * Performs a task in a future turn of the event loop.
	 * @param {Function} task
	 */
	Q.nextTick = nextTick;

	/**
	 * Controls whether or not long stack traces will be on
	 */
	Q.longStackSupport = false;

	// enable long stacks if Q_DEBUG is set
	if (typeof process === "object" && process && process.env && process.env.Q_DEBUG) {
	    Q.longStackSupport = true;
	}

	/**
	 * Constructs a {promise, resolve, reject} object.
	 *
	 * `resolve` is a callback to invoke with a more resolved value for the
	 * promise. To fulfill the promise, invoke `resolve` with any value that is
	 * not a thenable. To reject the promise, invoke `resolve` with a rejected
	 * thenable, or invoke `reject` with the reason directly. To resolve the
	 * promise to another thenable, thus putting it in the same state, invoke
	 * `resolve` with that other thenable.
	 */
	Q.defer = defer;
	function defer() {
	    // if "messages" is an "Array", that indicates that the promise has not yet
	    // been resolved.  If it is "undefined", it has been resolved.  Each
	    // element of the messages array is itself an array of complete arguments to
	    // forward to the resolved promise.  We coerce the resolution value to a
	    // promise using the `resolve` function because it handles both fully
	    // non-thenable values and other thenables gracefully.
	    var messages = [], progressListeners = [], resolvedPromise;

	    var deferred = object_create(defer.prototype);
	    var promise = object_create(Promise.prototype);

	    promise.promiseDispatch = function (resolve, op, operands) {
	        var args = array_slice(arguments);
	        if (messages) {
	            messages.push(args);
	            if (op === "when" && operands[1]) { // progress operand
	                progressListeners.push(operands[1]);
	            }
	        } else {
	            Q.nextTick(function () {
	                resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
	            });
	        }
	    };

	    // XXX deprecated
	    promise.valueOf = function () {
	        if (messages) {
	            return promise;
	        }
	        var nearerValue = nearer(resolvedPromise);
	        if (isPromise(nearerValue)) {
	            resolvedPromise = nearerValue; // shorten chain
	        }
	        return nearerValue;
	    };

	    promise.inspect = function () {
	        if (!resolvedPromise) {
	            return { state: "pending" };
	        }
	        return resolvedPromise.inspect();
	    };

	    if (Q.longStackSupport && hasStacks) {
	        try {
	            throw new Error();
	        } catch (e) {
	            // NOTE: don't try to use `Error.captureStackTrace` or transfer the
	            // accessor around; that causes memory leaks as per GH-111. Just
	            // reify the stack trace as a string ASAP.
	            //
	            // At the same time, cut off the first line; it's always just
	            // "[object Promise]\n", as per the `toString`.
	            promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
	        }
	    }

	    // NOTE: we do the checks for `resolvedPromise` in each method, instead of
	    // consolidating them into `become`, since otherwise we'd create new
	    // promises with the lines `become(whatever(value))`. See e.g. GH-252.

	    function become(newPromise) {
	        resolvedPromise = newPromise;
	        promise.source = newPromise;

	        array_reduce(messages, function (undefined, message) {
	            Q.nextTick(function () {
	                newPromise.promiseDispatch.apply(newPromise, message);
	            });
	        }, void 0);

	        messages = void 0;
	        progressListeners = void 0;
	    }

	    deferred.promise = promise;
	    deferred.resolve = function (value) {
	        if (resolvedPromise) {
	            return;
	        }

	        become(Q(value));
	    };

	    deferred.fulfill = function (value) {
	        if (resolvedPromise) {
	            return;
	        }

	        become(fulfill(value));
	    };
	    deferred.reject = function (reason) {
	        if (resolvedPromise) {
	            return;
	        }

	        become(reject(reason));
	    };
	    deferred.notify = function (progress) {
	        if (resolvedPromise) {
	            return;
	        }

	        array_reduce(progressListeners, function (undefined, progressListener) {
	            Q.nextTick(function () {
	                progressListener(progress);
	            });
	        }, void 0);
	    };

	    return deferred;
	}

	/**
	 * Creates a Node-style callback that will resolve or reject the deferred
	 * promise.
	 * @returns a nodeback
	 */
	defer.prototype.makeNodeResolver = function () {
	    var self = this;
	    return function (error, value) {
	        if (error) {
	            self.reject(error);
	        } else if (arguments.length > 2) {
	            self.resolve(array_slice(arguments, 1));
	        } else {
	            self.resolve(value);
	        }
	    };
	};

	/**
	 * @param resolver {Function} a function that returns nothing and accepts
	 * the resolve, reject, and notify functions for a deferred.
	 * @returns a promise that may be resolved with the given resolve and reject
	 * functions, or rejected by a thrown exception in resolver
	 */
	Q.Promise = promise; // ES6
	Q.promise = promise;
	function promise(resolver) {
	    if (typeof resolver !== "function") {
	        throw new TypeError("resolver must be a function.");
	    }
	    var deferred = defer();
	    try {
	        resolver(deferred.resolve, deferred.reject, deferred.notify);
	    } catch (reason) {
	        deferred.reject(reason);
	    }
	    return deferred.promise;
	}

	promise.race = race; // ES6
	promise.all = all; // ES6
	promise.reject = reject; // ES6
	promise.resolve = Q; // ES6

	// XXX experimental.  This method is a way to denote that a local value is
	// serializable and should be immediately dispatched to a remote upon request,
	// instead of passing a reference.
	Q.passByCopy = function (object) {
	    //freeze(object);
	    //passByCopies.set(object, true);
	    return object;
	};

	Promise.prototype.passByCopy = function () {
	    //freeze(object);
	    //passByCopies.set(object, true);
	    return this;
	};

	/**
	 * If two promises eventually fulfill to the same value, promises that value,
	 * but otherwise rejects.
	 * @param x {Any*}
	 * @param y {Any*}
	 * @returns {Any*} a promise for x and y if they are the same, but a rejection
	 * otherwise.
	 *
	 */
	Q.join = function (x, y) {
	    return Q(x).join(y);
	};

	Promise.prototype.join = function (that) {
	    return Q([this, that]).spread(function (x, y) {
	        if (x === y) {
	            // TODO: "===" should be Object.is or equiv
	            return x;
	        } else {
	            throw new Error("Can't join: not the same: " + x + " " + y);
	        }
	    });
	};

	/**
	 * Returns a promise for the first of an array of promises to become settled.
	 * @param answers {Array[Any*]} promises to race
	 * @returns {Any*} the first promise to be settled
	 */
	Q.race = race;
	function race(answerPs) {
	    return promise(function (resolve, reject) {
	        // Switch to this once we can assume at least ES5
	        // answerPs.forEach(function (answerP) {
	        //     Q(answerP).then(resolve, reject);
	        // });
	        // Use this in the meantime
	        for (var i = 0, len = answerPs.length; i < len; i++) {
	            Q(answerPs[i]).then(resolve, reject);
	        }
	    });
	}

	Promise.prototype.race = function () {
	    return this.then(Q.race);
	};

	/**
	 * Constructs a Promise with a promise descriptor object and optional fallback
	 * function.  The descriptor contains methods like when(rejected), get(name),
	 * set(name, value), post(name, args), and delete(name), which all
	 * return either a value, a promise for a value, or a rejection.  The fallback
	 * accepts the operation name, a resolver, and any further arguments that would
	 * have been forwarded to the appropriate method above had a method been
	 * provided with the proper name.  The API makes no guarantees about the nature
	 * of the returned object, apart from that it is usable whereever promises are
	 * bought and sold.
	 */
	Q.makePromise = Promise;
	function Promise(descriptor, fallback, inspect) {
	    if (fallback === void 0) {
	        fallback = function (op) {
	            return reject(new Error(
	                "Promise does not support operation: " + op
	            ));
	        };
	    }
	    if (inspect === void 0) {
	        inspect = function () {
	            return {state: "unknown"};
	        };
	    }

	    var promise = object_create(Promise.prototype);

	    promise.promiseDispatch = function (resolve, op, args) {
	        var result;
	        try {
	            if (descriptor[op]) {
	                result = descriptor[op].apply(promise, args);
	            } else {
	                result = fallback.call(promise, op, args);
	            }
	        } catch (exception) {
	            result = reject(exception);
	        }
	        if (resolve) {
	            resolve(result);
	        }
	    };

	    promise.inspect = inspect;

	    // XXX deprecated `valueOf` and `exception` support
	    if (inspect) {
	        var inspected = inspect();
	        if (inspected.state === "rejected") {
	            promise.exception = inspected.reason;
	        }

	        promise.valueOf = function () {
	            var inspected = inspect();
	            if (inspected.state === "pending" ||
	                inspected.state === "rejected") {
	                return promise;
	            }
	            return inspected.value;
	        };
	    }

	    return promise;
	}

	Promise.prototype.toString = function () {
	    return "[object Promise]";
	};

	Promise.prototype.then = function (fulfilled, rejected, progressed) {
	    var self = this;
	    var deferred = defer();
	    var done = false;   // ensure the untrusted promise makes at most a
	                        // single call to one of the callbacks

	    function _fulfilled(value) {
	        try {
	            return typeof fulfilled === "function" ? fulfilled(value) : value;
	        } catch (exception) {
	            return reject(exception);
	        }
	    }

	    function _rejected(exception) {
	        if (typeof rejected === "function") {
	            makeStackTraceLong(exception, self);
	            try {
	                return rejected(exception);
	            } catch (newException) {
	                return reject(newException);
	            }
	        }
	        return reject(exception);
	    }

	    function _progressed(value) {
	        return typeof progressed === "function" ? progressed(value) : value;
	    }

	    Q.nextTick(function () {
	        self.promiseDispatch(function (value) {
	            if (done) {
	                return;
	            }
	            done = true;

	            deferred.resolve(_fulfilled(value));
	        }, "when", [function (exception) {
	            if (done) {
	                return;
	            }
	            done = true;

	            deferred.resolve(_rejected(exception));
	        }]);
	    });

	    // Progress propagator need to be attached in the current tick.
	    self.promiseDispatch(void 0, "when", [void 0, function (value) {
	        var newValue;
	        var threw = false;
	        try {
	            newValue = _progressed(value);
	        } catch (e) {
	            threw = true;
	            if (Q.onerror) {
	                Q.onerror(e);
	            } else {
	                throw e;
	            }
	        }

	        if (!threw) {
	            deferred.notify(newValue);
	        }
	    }]);

	    return deferred.promise;
	};

	Q.tap = function (promise, callback) {
	    return Q(promise).tap(callback);
	};

	/**
	 * Works almost like "finally", but not called for rejections.
	 * Original resolution value is passed through callback unaffected.
	 * Callback may return a promise that will be awaited for.
	 * @param {Function} callback
	 * @returns {Q.Promise}
	 * @example
	 * doSomething()
	 *   .then(...)
	 *   .tap(console.log)
	 *   .then(...);
	 */
	Promise.prototype.tap = function (callback) {
	    callback = Q(callback);

	    return this.then(function (value) {
	        return callback.fcall(value).thenResolve(value);
	    });
	};

	/**
	 * Registers an observer on a promise.
	 *
	 * Guarantees:
	 *
	 * 1. that fulfilled and rejected will be called only once.
	 * 2. that either the fulfilled callback or the rejected callback will be
	 *    called, but not both.
	 * 3. that fulfilled and rejected will not be called in this turn.
	 *
	 * @param value      promise or immediate reference to observe
	 * @param fulfilled  function to be called with the fulfilled value
	 * @param rejected   function to be called with the rejection exception
	 * @param progressed function to be called on any progress notifications
	 * @return promise for the return value from the invoked callback
	 */
	Q.when = when;
	function when(value, fulfilled, rejected, progressed) {
	    return Q(value).then(fulfilled, rejected, progressed);
	}

	Promise.prototype.thenResolve = function (value) {
	    return this.then(function () { return value; });
	};

	Q.thenResolve = function (promise, value) {
	    return Q(promise).thenResolve(value);
	};

	Promise.prototype.thenReject = function (reason) {
	    return this.then(function () { throw reason; });
	};

	Q.thenReject = function (promise, reason) {
	    return Q(promise).thenReject(reason);
	};

	/**
	 * If an object is not a promise, it is as "near" as possible.
	 * If a promise is rejected, it is as "near" as possible too.
	 * If it’s a fulfilled promise, the fulfillment value is nearer.
	 * If it’s a deferred promise and the deferred has been resolved, the
	 * resolution is "nearer".
	 * @param object
	 * @returns most resolved (nearest) form of the object
	 */

	// XXX should we re-do this?
	Q.nearer = nearer;
	function nearer(value) {
	    if (isPromise(value)) {
	        var inspected = value.inspect();
	        if (inspected.state === "fulfilled") {
	            return inspected.value;
	        }
	    }
	    return value;
	}

	/**
	 * @returns whether the given object is a promise.
	 * Otherwise it is a fulfilled value.
	 */
	Q.isPromise = isPromise;
	function isPromise(object) {
	    return object instanceof Promise;
	}

	Q.isPromiseAlike = isPromiseAlike;
	function isPromiseAlike(object) {
	    return isObject(object) && typeof object.then === "function";
	}

	/**
	 * @returns whether the given object is a pending promise, meaning not
	 * fulfilled or rejected.
	 */
	Q.isPending = isPending;
	function isPending(object) {
	    return isPromise(object) && object.inspect().state === "pending";
	}

	Promise.prototype.isPending = function () {
	    return this.inspect().state === "pending";
	};

	/**
	 * @returns whether the given object is a value or fulfilled
	 * promise.
	 */
	Q.isFulfilled = isFulfilled;
	function isFulfilled(object) {
	    return !isPromise(object) || object.inspect().state === "fulfilled";
	}

	Promise.prototype.isFulfilled = function () {
	    return this.inspect().state === "fulfilled";
	};

	/**
	 * @returns whether the given object is a rejected promise.
	 */
	Q.isRejected = isRejected;
	function isRejected(object) {
	    return isPromise(object) && object.inspect().state === "rejected";
	}

	Promise.prototype.isRejected = function () {
	    return this.inspect().state === "rejected";
	};

	//// BEGIN UNHANDLED REJECTION TRACKING

	// This promise library consumes exceptions thrown in handlers so they can be
	// handled by a subsequent promise.  The exceptions get added to this array when
	// they are created, and removed when they are handled.  Note that in ES6 or
	// shimmed environments, this would naturally be a `Set`.
	var unhandledReasons = [];
	var unhandledRejections = [];
	var reportedUnhandledRejections = [];
	var trackUnhandledRejections = true;

	function resetUnhandledRejections() {
	    unhandledReasons.length = 0;
	    unhandledRejections.length = 0;

	    if (!trackUnhandledRejections) {
	        trackUnhandledRejections = true;
	    }
	}

	function trackRejection(promise, reason) {
	    if (!trackUnhandledRejections) {
	        return;
	    }
	    if (typeof process === "object" && typeof process.emit === "function") {
	        Q.nextTick.runAfter(function () {
	            if (array_indexOf(unhandledRejections, promise) !== -1) {
	                process.emit("unhandledRejection", reason, promise);
	                reportedUnhandledRejections.push(promise);
	            }
	        });
	    }

	    unhandledRejections.push(promise);
	    if (reason && typeof reason.stack !== "undefined") {
	        unhandledReasons.push(reason.stack);
	    } else {
	        unhandledReasons.push("(no stack) " + reason);
	    }
	}

	function untrackRejection(promise) {
	    if (!trackUnhandledRejections) {
	        return;
	    }

	    var at = array_indexOf(unhandledRejections, promise);
	    if (at !== -1) {
	        if (typeof process === "object" && typeof process.emit === "function") {
	            Q.nextTick.runAfter(function () {
	                var atReport = array_indexOf(reportedUnhandledRejections, promise);
	                if (atReport !== -1) {
	                    process.emit("rejectionHandled", unhandledReasons[at], promise);
	                    reportedUnhandledRejections.splice(atReport, 1);
	                }
	            });
	        }
	        unhandledRejections.splice(at, 1);
	        unhandledReasons.splice(at, 1);
	    }
	}

	Q.resetUnhandledRejections = resetUnhandledRejections;

	Q.getUnhandledReasons = function () {
	    // Make a copy so that consumers can't interfere with our internal state.
	    return unhandledReasons.slice();
	};

	Q.stopUnhandledRejectionTracking = function () {
	    resetUnhandledRejections();
	    trackUnhandledRejections = false;
	};

	resetUnhandledRejections();

	//// END UNHANDLED REJECTION TRACKING

	/**
	 * Constructs a rejected promise.
	 * @param reason value describing the failure
	 */
	Q.reject = reject;
	function reject(reason) {
	    var rejection = Promise({
	        "when": function (rejected) {
	            // note that the error has been handled
	            if (rejected) {
	                untrackRejection(this);
	            }
	            return rejected ? rejected(reason) : this;
	        }
	    }, function fallback() {
	        return this;
	    }, function inspect() {
	        return { state: "rejected", reason: reason };
	    });

	    // Note that the reason has not been handled.
	    trackRejection(rejection, reason);

	    return rejection;
	}

	/**
	 * Constructs a fulfilled promise for an immediate reference.
	 * @param value immediate reference
	 */
	Q.fulfill = fulfill;
	function fulfill(value) {
	    return Promise({
	        "when": function () {
	            return value;
	        },
	        "get": function (name) {
	            return value[name];
	        },
	        "set": function (name, rhs) {
	            value[name] = rhs;
	        },
	        "delete": function (name) {
	            delete value[name];
	        },
	        "post": function (name, args) {
	            // Mark Miller proposes that post with no name should apply a
	            // promised function.
	            if (name === null || name === void 0) {
	                return value.apply(void 0, args);
	            } else {
	                return value[name].apply(value, args);
	            }
	        },
	        "apply": function (thisp, args) {
	            return value.apply(thisp, args);
	        },
	        "keys": function () {
	            return object_keys(value);
	        }
	    }, void 0, function inspect() {
	        return { state: "fulfilled", value: value };
	    });
	}

	/**
	 * Converts thenables to Q promises.
	 * @param promise thenable promise
	 * @returns a Q promise
	 */
	function coerce(promise) {
	    var deferred = defer();
	    Q.nextTick(function () {
	        try {
	            promise.then(deferred.resolve, deferred.reject, deferred.notify);
	        } catch (exception) {
	            deferred.reject(exception);
	        }
	    });
	    return deferred.promise;
	}

	/**
	 * Annotates an object such that it will never be
	 * transferred away from this process over any promise
	 * communication channel.
	 * @param object
	 * @returns promise a wrapping of that object that
	 * additionally responds to the "isDef" message
	 * without a rejection.
	 */
	Q.master = master;
	function master(object) {
	    return Promise({
	        "isDef": function () {}
	    }, function fallback(op, args) {
	        return dispatch(object, op, args);
	    }, function () {
	        return Q(object).inspect();
	    });
	}

	/**
	 * Spreads the values of a promised array of arguments into the
	 * fulfillment callback.
	 * @param fulfilled callback that receives variadic arguments from the
	 * promised array
	 * @param rejected callback that receives the exception if the promise
	 * is rejected.
	 * @returns a promise for the return value or thrown exception of
	 * either callback.
	 */
	Q.spread = spread;
	function spread(value, fulfilled, rejected) {
	    return Q(value).spread(fulfilled, rejected);
	}

	Promise.prototype.spread = function (fulfilled, rejected) {
	    return this.all().then(function (array) {
	        return fulfilled.apply(void 0, array);
	    }, rejected);
	};

	/**
	 * The async function is a decorator for generator functions, turning
	 * them into asynchronous generators.  Although generators are only part
	 * of the newest ECMAScript 6 drafts, this code does not cause syntax
	 * errors in older engines.  This code should continue to work and will
	 * in fact improve over time as the language improves.
	 *
	 * ES6 generators are currently part of V8 version 3.19 with the
	 * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
	 * for longer, but under an older Python-inspired form.  This function
	 * works on both kinds of generators.
	 *
	 * Decorates a generator function such that:
	 *  - it may yield promises
	 *  - execution will continue when that promise is fulfilled
	 *  - the value of the yield expression will be the fulfilled value
	 *  - it returns a promise for the return value (when the generator
	 *    stops iterating)
	 *  - the decorated function returns a promise for the return value
	 *    of the generator or the first rejected promise among those
	 *    yielded.
	 *  - if an error is thrown in the generator, it propagates through
	 *    every following yield until it is caught, or until it escapes
	 *    the generator function altogether, and is translated into a
	 *    rejection for the promise returned by the decorated generator.
	 */
	Q.async = async;
	function async(makeGenerator) {
	    return function () {
	        // when verb is "send", arg is a value
	        // when verb is "throw", arg is an exception
	        function continuer(verb, arg) {
	            var result;

	            // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
	            // engine that has a deployed base of browsers that support generators.
	            // However, SM's generators use the Python-inspired semantics of
	            // outdated ES6 drafts.  We would like to support ES6, but we'd also
	            // like to make it possible to use generators in deployed browsers, so
	            // we also support Python-style generators.  At some point we can remove
	            // this block.

	            if (typeof StopIteration === "undefined") {
	                // ES6 Generators
	                try {
	                    result = generator[verb](arg);
	                } catch (exception) {
	                    return reject(exception);
	                }
	                if (result.done) {
	                    return Q(result.value);
	                } else {
	                    return when(result.value, callback, errback);
	                }
	            } else {
	                // SpiderMonkey Generators
	                // FIXME: Remove this case when SM does ES6 generators.
	                try {
	                    result = generator[verb](arg);
	                } catch (exception) {
	                    if (isStopIteration(exception)) {
	                        return Q(exception.value);
	                    } else {
	                        return reject(exception);
	                    }
	                }
	                return when(result, callback, errback);
	            }
	        }
	        var generator = makeGenerator.apply(this, arguments);
	        var callback = continuer.bind(continuer, "next");
	        var errback = continuer.bind(continuer, "throw");
	        return callback();
	    };
	}

	/**
	 * The spawn function is a small wrapper around async that immediately
	 * calls the generator and also ends the promise chain, so that any
	 * unhandled errors are thrown instead of forwarded to the error
	 * handler. This is useful because it's extremely common to run
	 * generators at the top-level to work with libraries.
	 */
	Q.spawn = spawn;
	function spawn(makeGenerator) {
	    Q.done(Q.async(makeGenerator)());
	}

	// FIXME: Remove this interface once ES6 generators are in SpiderMonkey.
	/**
	 * Throws a ReturnValue exception to stop an asynchronous generator.
	 *
	 * This interface is a stop-gap measure to support generator return
	 * values in older Firefox/SpiderMonkey.  In browsers that support ES6
	 * generators like Chromium 29, just use "return" in your generator
	 * functions.
	 *
	 * @param value the return value for the surrounding generator
	 * @throws ReturnValue exception with the value.
	 * @example
	 * // ES6 style
	 * Q.async(function* () {
	 *      var foo = yield getFooPromise();
	 *      var bar = yield getBarPromise();
	 *      return foo + bar;
	 * })
	 * // Older SpiderMonkey style
	 * Q.async(function () {
	 *      var foo = yield getFooPromise();
	 *      var bar = yield getBarPromise();
	 *      Q.return(foo + bar);
	 * })
	 */
	Q["return"] = _return;
	function _return(value) {
	    throw new QReturnValue(value);
	}

	/**
	 * The promised function decorator ensures that any promise arguments
	 * are settled and passed as values (`this` is also settled and passed
	 * as a value).  It will also ensure that the result of a function is
	 * always a promise.
	 *
	 * @example
	 * var add = Q.promised(function (a, b) {
	 *     return a + b;
	 * });
	 * add(Q(a), Q(B));
	 *
	 * @param {function} callback The function to decorate
	 * @returns {function} a function that has been decorated.
	 */
	Q.promised = promised;
	function promised(callback) {
	    return function () {
	        return spread([this, all(arguments)], function (self, args) {
	            return callback.apply(self, args);
	        });
	    };
	}

	/**
	 * sends a message to a value in a future turn
	 * @param object* the recipient
	 * @param op the name of the message operation, e.g., "when",
	 * @param args further arguments to be forwarded to the operation
	 * @returns result {Promise} a promise for the result of the operation
	 */
	Q.dispatch = dispatch;
	function dispatch(object, op, args) {
	    return Q(object).dispatch(op, args);
	}

	Promise.prototype.dispatch = function (op, args) {
	    var self = this;
	    var deferred = defer();
	    Q.nextTick(function () {
	        self.promiseDispatch(deferred.resolve, op, args);
	    });
	    return deferred.promise;
	};

	/**
	 * Gets the value of a property in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @param name      name of property to get
	 * @return promise for the property value
	 */
	Q.get = function (object, key) {
	    return Q(object).dispatch("get", [key]);
	};

	Promise.prototype.get = function (key) {
	    return this.dispatch("get", [key]);
	};

	/**
	 * Sets the value of a property in a future turn.
	 * @param object    promise or immediate reference for object object
	 * @param name      name of property to set
	 * @param value     new value of property
	 * @return promise for the return value
	 */
	Q.set = function (object, key, value) {
	    return Q(object).dispatch("set", [key, value]);
	};

	Promise.prototype.set = function (key, value) {
	    return this.dispatch("set", [key, value]);
	};

	/**
	 * Deletes a property in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @param name      name of property to delete
	 * @return promise for the return value
	 */
	Q.del = // XXX legacy
	Q["delete"] = function (object, key) {
	    return Q(object).dispatch("delete", [key]);
	};

	Promise.prototype.del = // XXX legacy
	Promise.prototype["delete"] = function (key) {
	    return this.dispatch("delete", [key]);
	};

	/**
	 * Invokes a method in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @param name      name of method to invoke
	 * @param value     a value to post, typically an array of
	 *                  invocation arguments for promises that
	 *                  are ultimately backed with `resolve` values,
	 *                  as opposed to those backed with URLs
	 *                  wherein the posted value can be any
	 *                  JSON serializable object.
	 * @return promise for the return value
	 */
	// bound locally because it is used by other methods
	Q.mapply = // XXX As proposed by "Redsandro"
	Q.post = function (object, name, args) {
	    return Q(object).dispatch("post", [name, args]);
	};

	Promise.prototype.mapply = // XXX As proposed by "Redsandro"
	Promise.prototype.post = function (name, args) {
	    return this.dispatch("post", [name, args]);
	};

	/**
	 * Invokes a method in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @param name      name of method to invoke
	 * @param ...args   array of invocation arguments
	 * @return promise for the return value
	 */
	Q.send = // XXX Mark Miller's proposed parlance
	Q.mcall = // XXX As proposed by "Redsandro"
	Q.invoke = function (object, name /*...args*/) {
	    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
	};

	Promise.prototype.send = // XXX Mark Miller's proposed parlance
	Promise.prototype.mcall = // XXX As proposed by "Redsandro"
	Promise.prototype.invoke = function (name /*...args*/) {
	    return this.dispatch("post", [name, array_slice(arguments, 1)]);
	};

	/**
	 * Applies the promised function in a future turn.
	 * @param object    promise or immediate reference for target function
	 * @param args      array of application arguments
	 */
	Q.fapply = function (object, args) {
	    return Q(object).dispatch("apply", [void 0, args]);
	};

	Promise.prototype.fapply = function (args) {
	    return this.dispatch("apply", [void 0, args]);
	};

	/**
	 * Calls the promised function in a future turn.
	 * @param object    promise or immediate reference for target function
	 * @param ...args   array of application arguments
	 */
	Q["try"] =
	Q.fcall = function (object /* ...args*/) {
	    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
	};

	Promise.prototype.fcall = function (/*...args*/) {
	    return this.dispatch("apply", [void 0, array_slice(arguments)]);
	};

	/**
	 * Binds the promised function, transforming return values into a fulfilled
	 * promise and thrown errors into a rejected one.
	 * @param object    promise or immediate reference for target function
	 * @param ...args   array of application arguments
	 */
	Q.fbind = function (object /*...args*/) {
	    var promise = Q(object);
	    var args = array_slice(arguments, 1);
	    return function fbound() {
	        return promise.dispatch("apply", [
	            this,
	            args.concat(array_slice(arguments))
	        ]);
	    };
	};
	Promise.prototype.fbind = function (/*...args*/) {
	    var promise = this;
	    var args = array_slice(arguments);
	    return function fbound() {
	        return promise.dispatch("apply", [
	            this,
	            args.concat(array_slice(arguments))
	        ]);
	    };
	};

	/**
	 * Requests the names of the owned properties of a promised
	 * object in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @return promise for the keys of the eventually settled object
	 */
	Q.keys = function (object) {
	    return Q(object).dispatch("keys", []);
	};

	Promise.prototype.keys = function () {
	    return this.dispatch("keys", []);
	};

	/**
	 * Turns an array of promises into a promise for an array.  If any of
	 * the promises gets rejected, the whole array is rejected immediately.
	 * @param {Array*} an array (or promise for an array) of values (or
	 * promises for values)
	 * @returns a promise for an array of the corresponding values
	 */
	// By Mark Miller
	// http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
	Q.all = all;
	function all(promises) {
	    return when(promises, function (promises) {
	        var pendingCount = 0;
	        var deferred = defer();
	        array_reduce(promises, function (undefined, promise, index) {
	            var snapshot;
	            if (
	                isPromise(promise) &&
	                (snapshot = promise.inspect()).state === "fulfilled"
	            ) {
	                promises[index] = snapshot.value;
	            } else {
	                ++pendingCount;
	                when(
	                    promise,
	                    function (value) {
	                        promises[index] = value;
	                        if (--pendingCount === 0) {
	                            deferred.resolve(promises);
	                        }
	                    },
	                    deferred.reject,
	                    function (progress) {
	                        deferred.notify({ index: index, value: progress });
	                    }
	                );
	            }
	        }, void 0);
	        if (pendingCount === 0) {
	            deferred.resolve(promises);
	        }
	        return deferred.promise;
	    });
	}

	Promise.prototype.all = function () {
	    return all(this);
	};

	/**
	 * Returns the first resolved promise of an array. Prior rejected promises are
	 * ignored.  Rejects only if all promises are rejected.
	 * @param {Array*} an array containing values or promises for values
	 * @returns a promise fulfilled with the value of the first resolved promise,
	 * or a rejected promise if all promises are rejected.
	 */
	Q.any = any;

	function any(promises) {
	    if (promises.length === 0) {
	        return Q.resolve();
	    }

	    var deferred = Q.defer();
	    var pendingCount = 0;
	    array_reduce(promises, function (prev, current, index) {
	        var promise = promises[index];

	        pendingCount++;

	        when(promise, onFulfilled, onRejected, onProgress);
	        function onFulfilled(result) {
	            deferred.resolve(result);
	        }
	        function onRejected() {
	            pendingCount--;
	            if (pendingCount === 0) {
	                deferred.reject(new Error(
	                    "Can't get fulfillment value from any promise, all " +
	                    "promises were rejected."
	                ));
	            }
	        }
	        function onProgress(progress) {
	            deferred.notify({
	                index: index,
	                value: progress
	            });
	        }
	    }, undefined);

	    return deferred.promise;
	}

	Promise.prototype.any = function () {
	    return any(this);
	};

	/**
	 * Waits for all promises to be settled, either fulfilled or
	 * rejected.  This is distinct from `all` since that would stop
	 * waiting at the first rejection.  The promise returned by
	 * `allResolved` will never be rejected.
	 * @param promises a promise for an array (or an array) of promises
	 * (or values)
	 * @return a promise for an array of promises
	 */
	Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
	function allResolved(promises) {
	    return when(promises, function (promises) {
	        promises = array_map(promises, Q);
	        return when(all(array_map(promises, function (promise) {
	            return when(promise, noop, noop);
	        })), function () {
	            return promises;
	        });
	    });
	}

	Promise.prototype.allResolved = function () {
	    return allResolved(this);
	};

	/**
	 * @see Promise#allSettled
	 */
	Q.allSettled = allSettled;
	function allSettled(promises) {
	    return Q(promises).allSettled();
	}

	/**
	 * Turns an array of promises into a promise for an array of their states (as
	 * returned by `inspect`) when they have all settled.
	 * @param {Array[Any*]} values an array (or promise for an array) of values (or
	 * promises for values)
	 * @returns {Array[State]} an array of states for the respective values.
	 */
	Promise.prototype.allSettled = function () {
	    return this.then(function (promises) {
	        return all(array_map(promises, function (promise) {
	            promise = Q(promise);
	            function regardless() {
	                return promise.inspect();
	            }
	            return promise.then(regardless, regardless);
	        }));
	    });
	};

	/**
	 * Captures the failure of a promise, giving an oportunity to recover
	 * with a callback.  If the given promise is fulfilled, the returned
	 * promise is fulfilled.
	 * @param {Any*} promise for something
	 * @param {Function} callback to fulfill the returned promise if the
	 * given promise is rejected
	 * @returns a promise for the return value of the callback
	 */
	Q.fail = // XXX legacy
	Q["catch"] = function (object, rejected) {
	    return Q(object).then(void 0, rejected);
	};

	Promise.prototype.fail = // XXX legacy
	Promise.prototype["catch"] = function (rejected) {
	    return this.then(void 0, rejected);
	};

	/**
	 * Attaches a listener that can respond to progress notifications from a
	 * promise's originating deferred. This listener receives the exact arguments
	 * passed to ``deferred.notify``.
	 * @param {Any*} promise for something
	 * @param {Function} callback to receive any progress notifications
	 * @returns the given promise, unchanged
	 */
	Q.progress = progress;
	function progress(object, progressed) {
	    return Q(object).then(void 0, void 0, progressed);
	}

	Promise.prototype.progress = function (progressed) {
	    return this.then(void 0, void 0, progressed);
	};

	/**
	 * Provides an opportunity to observe the settling of a promise,
	 * regardless of whether the promise is fulfilled or rejected.  Forwards
	 * the resolution to the returned promise when the callback is done.
	 * The callback can return a promise to defer completion.
	 * @param {Any*} promise
	 * @param {Function} callback to observe the resolution of the given
	 * promise, takes no arguments.
	 * @returns a promise for the resolution of the given promise when
	 * ``fin`` is done.
	 */
	Q.fin = // XXX legacy
	Q["finally"] = function (object, callback) {
	    return Q(object)["finally"](callback);
	};

	Promise.prototype.fin = // XXX legacy
	Promise.prototype["finally"] = function (callback) {
	    callback = Q(callback);
	    return this.then(function (value) {
	        return callback.fcall().then(function () {
	            return value;
	        });
	    }, function (reason) {
	        // TODO attempt to recycle the rejection with "this".
	        return callback.fcall().then(function () {
	            throw reason;
	        });
	    });
	};

	/**
	 * Terminates a chain of promises, forcing rejections to be
	 * thrown as exceptions.
	 * @param {Any*} promise at the end of a chain of promises
	 * @returns nothing
	 */
	Q.done = function (object, fulfilled, rejected, progress) {
	    return Q(object).done(fulfilled, rejected, progress);
	};

	Promise.prototype.done = function (fulfilled, rejected, progress) {
	    var onUnhandledError = function (error) {
	        // forward to a future turn so that ``when``
	        // does not catch it and turn it into a rejection.
	        Q.nextTick(function () {
	            makeStackTraceLong(error, promise);
	            if (Q.onerror) {
	                Q.onerror(error);
	            } else {
	                throw error;
	            }
	        });
	    };

	    // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
	    var promise = fulfilled || rejected || progress ?
	        this.then(fulfilled, rejected, progress) :
	        this;

	    if (typeof process === "object" && process && process.domain) {
	        onUnhandledError = process.domain.bind(onUnhandledError);
	    }

	    promise.then(void 0, onUnhandledError);
	};

	/**
	 * Causes a promise to be rejected if it does not get fulfilled before
	 * some milliseconds time out.
	 * @param {Any*} promise
	 * @param {Number} milliseconds timeout
	 * @param {Any*} custom error message or Error object (optional)
	 * @returns a promise for the resolution of the given promise if it is
	 * fulfilled before the timeout, otherwise rejected.
	 */
	Q.timeout = function (object, ms, error) {
	    return Q(object).timeout(ms, error);
	};

	Promise.prototype.timeout = function (ms, error) {
	    var deferred = defer();
	    var timeoutId = setTimeout(function () {
	        if (!error || "string" === typeof error) {
	            error = new Error(error || "Timed out after " + ms + " ms");
	            error.code = "ETIMEDOUT";
	        }
	        deferred.reject(error);
	    }, ms);

	    this.then(function (value) {
	        clearTimeout(timeoutId);
	        deferred.resolve(value);
	    }, function (exception) {
	        clearTimeout(timeoutId);
	        deferred.reject(exception);
	    }, deferred.notify);

	    return deferred.promise;
	};

	/**
	 * Returns a promise for the given value (or promised value), some
	 * milliseconds after it resolved. Passes rejections immediately.
	 * @param {Any*} promise
	 * @param {Number} milliseconds
	 * @returns a promise for the resolution of the given promise after milliseconds
	 * time has elapsed since the resolution of the given promise.
	 * If the given promise rejects, that is passed immediately.
	 */
	Q.delay = function (object, timeout) {
	    if (timeout === void 0) {
	        timeout = object;
	        object = void 0;
	    }
	    return Q(object).delay(timeout);
	};

	Promise.prototype.delay = function (timeout) {
	    return this.then(function (value) {
	        var deferred = defer();
	        setTimeout(function () {
	            deferred.resolve(value);
	        }, timeout);
	        return deferred.promise;
	    });
	};

	/**
	 * Passes a continuation to a Node function, which is called with the given
	 * arguments provided as an array, and returns a promise.
	 *
	 *      Q.nfapply(FS.readFile, [__filename])
	 *      .then(function (content) {
	 *      })
	 *
	 */
	Q.nfapply = function (callback, args) {
	    return Q(callback).nfapply(args);
	};

	Promise.prototype.nfapply = function (args) {
	    var deferred = defer();
	    var nodeArgs = array_slice(args);
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.fapply(nodeArgs).fail(deferred.reject);
	    return deferred.promise;
	};

	/**
	 * Passes a continuation to a Node function, which is called with the given
	 * arguments provided individually, and returns a promise.
	 * @example
	 * Q.nfcall(FS.readFile, __filename)
	 * .then(function (content) {
	 * })
	 *
	 */
	Q.nfcall = function (callback /*...args*/) {
	    var args = array_slice(arguments, 1);
	    return Q(callback).nfapply(args);
	};

	Promise.prototype.nfcall = function (/*...args*/) {
	    var nodeArgs = array_slice(arguments);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.fapply(nodeArgs).fail(deferred.reject);
	    return deferred.promise;
	};

	/**
	 * Wraps a NodeJS continuation passing function and returns an equivalent
	 * version that returns a promise.
	 * @example
	 * Q.nfbind(FS.readFile, __filename)("utf-8")
	 * .then(console.log)
	 * .done()
	 */
	Q.nfbind =
	Q.denodeify = function (callback /*...args*/) {
	    var baseArgs = array_slice(arguments, 1);
	    return function () {
	        var nodeArgs = baseArgs.concat(array_slice(arguments));
	        var deferred = defer();
	        nodeArgs.push(deferred.makeNodeResolver());
	        Q(callback).fapply(nodeArgs).fail(deferred.reject);
	        return deferred.promise;
	    };
	};

	Promise.prototype.nfbind =
	Promise.prototype.denodeify = function (/*...args*/) {
	    var args = array_slice(arguments);
	    args.unshift(this);
	    return Q.denodeify.apply(void 0, args);
	};

	Q.nbind = function (callback, thisp /*...args*/) {
	    var baseArgs = array_slice(arguments, 2);
	    return function () {
	        var nodeArgs = baseArgs.concat(array_slice(arguments));
	        var deferred = defer();
	        nodeArgs.push(deferred.makeNodeResolver());
	        function bound() {
	            return callback.apply(thisp, arguments);
	        }
	        Q(bound).fapply(nodeArgs).fail(deferred.reject);
	        return deferred.promise;
	    };
	};

	Promise.prototype.nbind = function (/*thisp, ...args*/) {
	    var args = array_slice(arguments, 0);
	    args.unshift(this);
	    return Q.nbind.apply(void 0, args);
	};

	/**
	 * Calls a method of a Node-style object that accepts a Node-style
	 * callback with a given array of arguments, plus a provided callback.
	 * @param object an object that has the named method
	 * @param {String} name name of the method of object
	 * @param {Array} args arguments to pass to the method; the callback
	 * will be provided by Q and appended to these arguments.
	 * @returns a promise for the value or error
	 */
	Q.nmapply = // XXX As proposed by "Redsandro"
	Q.npost = function (object, name, args) {
	    return Q(object).npost(name, args);
	};

	Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
	Promise.prototype.npost = function (name, args) {
	    var nodeArgs = array_slice(args || []);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
	    return deferred.promise;
	};

	/**
	 * Calls a method of a Node-style object that accepts a Node-style
	 * callback, forwarding the given variadic arguments, plus a provided
	 * callback argument.
	 * @param object an object that has the named method
	 * @param {String} name name of the method of object
	 * @param ...args arguments to pass to the method; the callback will
	 * be provided by Q and appended to these arguments.
	 * @returns a promise for the value or error
	 */
	Q.nsend = // XXX Based on Mark Miller's proposed "send"
	Q.nmcall = // XXX Based on "Redsandro's" proposal
	Q.ninvoke = function (object, name /*...args*/) {
	    var nodeArgs = array_slice(arguments, 2);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
	    return deferred.promise;
	};

	Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
	Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
	Promise.prototype.ninvoke = function (name /*...args*/) {
	    var nodeArgs = array_slice(arguments, 1);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
	    return deferred.promise;
	};

	/**
	 * If a function would like to support both Node continuation-passing-style and
	 * promise-returning-style, it can end its internal promise chain with
	 * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
	 * elects to use a nodeback, the result will be sent there.  If they do not
	 * pass a nodeback, they will receive the result promise.
	 * @param object a result (or a promise for a result)
	 * @param {Function} nodeback a Node.js-style callback
	 * @returns either the promise or nothing
	 */
	Q.nodeify = nodeify;
	function nodeify(object, nodeback) {
	    return Q(object).nodeify(nodeback);
	}

	Promise.prototype.nodeify = function (nodeback) {
	    if (nodeback) {
	        this.then(function (value) {
	            Q.nextTick(function () {
	                nodeback(null, value);
	            });
	        }, function (error) {
	            Q.nextTick(function () {
	                nodeback(error);
	            });
	        });
	    } else {
	        return this;
	    }
	};

	Q.noConflict = function() {
	    throw new Error("Q.noConflict only works when Q is used as a global");
	};

	// All code before this point will be filtered from stack traces.
	var qEndingLine = captureLine();

	return Q;

	});


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _q = __webpack_require__(3);

	var _q2 = _interopRequireDefault(_q);

	var _rethinkdb = __webpack_require__(5);

	var _rethinkdb2 = _interopRequireDefault(_rethinkdb);

	var databaseLibrary = (function () {
	    function databaseLibrary(config) {
	        _classCallCheck(this, databaseLibrary);

	        this.connection = null;
	        this.config = config;
	    }

	    _createClass(databaseLibrary, [{
	        key: '_getConnection',
	        value: function _getConnection() {
	            var _this = this;

	            return _q2['default'].Promise(function (resolve, reject) {
	                if (_this.connection) return resolve(_this.connection);

	                _rethinkdb2['default'].connect(_this.config, function (err, conn) {
	                    if (err) return reject(err);
	                    _this.connection = conn;
	                    resolve(_this.connection);
	                });
	            });
	        }
	    }, {
	        key: 'createEntry',
	        value: function createEntry(payload) {
	            var defer = _q2['default'].defer();

	            this._getConnection().then(function (conn) {
	                _rethinkdb2['default'].db('microstar').table('events').insert([payload]).run(conn, function (err, result) {
	                    if (err) return defer.reject(err);
	                    defer.resolve(result);
	                });
	            });

	            return defer.promise;
	        }
	    }]);

	    return databaseLibrary;
	})();

	exports['default'] = databaseLibrary;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.0
	var error, net, rethinkdb;

	net = __webpack_require__(6);

	rethinkdb = __webpack_require__(52);

	error = __webpack_require__(11);

	rethinkdb.connect = net.connect;

	rethinkdb.Error = error;

	module.exports = rethinkdb;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.0
	var Connection, HANDSHAKE_AUTHFAIL, HANDSHAKE_SUCCESS, HttpConnection, Promise, TcpConnection, ar, aropt, cursors, err, events, mkAtom, mkErr, net, protoProtocol, protoQueryType, protoResponseType, protoVersion, protodef, r, tls, util, varar,
	  __hasProp = {}.hasOwnProperty,
	  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	net = __webpack_require__(7);

	tls = __webpack_require__(8);

	events = __webpack_require__(9);

	util = __webpack_require__(10);

	err = __webpack_require__(11);

	cursors = __webpack_require__(13);

	protodef = __webpack_require__(12);

	protoVersion = protodef.VersionDummy.Version.V0_4;

	protoProtocol = protodef.VersionDummy.Protocol.JSON;

	protoQueryType = protodef.Query.QueryType;

	protoResponseType = protodef.Response.ResponseType;

	r = __webpack_require__(52);

	Promise = __webpack_require__(14);

	ar = util.ar;

	varar = util.varar;

	aropt = util.aropt;

	mkAtom = util.mkAtom;

	mkErr = util.mkErr;

	HANDSHAKE_SUCCESS = "SUCCESS";

	HANDSHAKE_AUTHFAIL = "ERROR: Incorrect authorization key.\n";

	Connection = (function(_super) {
	  __extends(Connection, _super);

	  Connection.prototype.DEFAULT_HOST = 'localhost';

	  Connection.prototype.DEFAULT_PORT = 28015;

	  Connection.prototype.DEFAULT_AUTH_KEY = '';

	  Connection.prototype.DEFAULT_TIMEOUT = 20;

	  function Connection(host, callback) {
	    var conCallback, errCallback;
	    if (typeof host === 'undefined') {
	      host = {};
	    } else if (typeof host === 'string') {
	      host = {
	        host: host
	      };
	    }
	    this.host = host.host || this.DEFAULT_HOST;
	    this.port = host.port || this.DEFAULT_PORT;
	    this.db = host.db;
	    this.authKey = host.authKey || this.DEFAULT_AUTH_KEY;
	    this.timeout = host.timeout || this.DEFAULT_TIMEOUT;
	    if (typeof host.ssl === 'boolean' && host.ssl) {
	      this.ssl = {};
	    } else if (typeof host.ssl === 'object') {
	      this.ssl = host.ssl;
	    } else {
	      this.ssl = false;
	    }
	    this.outstandingCallbacks = {};
	    this.nextToken = 1;
	    this.open = false;
	    this.closing = false;
	    this.buffer = new Buffer(0);
	    this._events = this._events || {};
	    errCallback = (function(_this) {
	      return function(e) {
	        _this.removeListener('connect', conCallback);
	        if (e instanceof err.ReqlError) {
	          return callback(e);
	        } else {
	          return callback(new err.ReqlDriverError("Could not connect to " + _this.host + ":" + _this.port + ".\n" + e.message));
	        }
	      };
	    })(this);
	    this.once('error', errCallback);
	    conCallback = (function(_this) {
	      return function() {
	        _this.removeListener('error', errCallback);
	        _this.open = true;
	        return callback(null, _this);
	      };
	    })(this);
	    this.once('connect', conCallback);
	    this._closePromise = null;
	  }

	  Connection.prototype._data = function(buf) {
	    var response, responseBuffer, responseLength, token, _results;
	    this.buffer = Buffer.concat([this.buffer, buf]);
	    _results = [];
	    while (this.buffer.length >= 12) {
	      token = this.buffer.readUInt32LE(0) + 0x100000000 * this.buffer.readUInt32LE(4);
	      responseLength = this.buffer.readUInt32LE(8);
	      if (!(this.buffer.length >= (12 + responseLength))) {
	        break;
	      }
	      responseBuffer = this.buffer.slice(12, responseLength + 12);
	      response = JSON.parse(responseBuffer);
	      this._processResponse(response, token);
	      _results.push(this.buffer = this.buffer.slice(12 + responseLength));
	    }
	    return _results;
	  };

	  Connection.prototype._delQuery = function(token) {
	    return delete this.outstandingCallbacks[token];
	  };

	  Connection.prototype._processResponse = function(response, token) {
	    var cb, cursor, errType, feed, note, opts, profile, root, _i, _len, _ref, _ref1;
	    profile = response.p;
	    if (this.outstandingCallbacks[token] != null) {
	      _ref = this.outstandingCallbacks[token], cb = _ref.cb, root = _ref.root, cursor = _ref.cursor, opts = _ref.opts, feed = _ref.feed;
	      if (cursor != null) {
	        cursor._addResponse(response);
	        if (cursor._endFlag && cursor._outstandingRequests === 0) {
	          return this._delQuery(token);
	        }
	      } else if (cb != null) {
	        switch (response.t) {
	          case protoResponseType.COMPILE_ERROR:
	            cb(mkErr(err.ReqlCompileError, response, root));
	            return this._delQuery(token);
	          case protoResponseType.CLIENT_ERROR:
	            cb(mkErr(err.ReqlDriverError, response, root));
	            return this._delQuery(token);
	          case protoResponseType.RUNTIME_ERROR:
	            errType = util.errorClass(response.e);
	            cb(mkErr(errType, response, root));
	            return this._delQuery(token);
	          case protoResponseType.SUCCESS_ATOM:
	            response = mkAtom(response, opts);
	            if (Array.isArray(response)) {
	              response = cursors.makeIterable(response);
	            }
	            if (profile != null) {
	              response = {
	                profile: profile,
	                value: response
	              };
	            }
	            cb(null, response);
	            return this._delQuery(token);
	          case protoResponseType.SUCCESS_PARTIAL:
	            cursor = null;
	            _ref1 = response.n;
	            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	              note = _ref1[_i];
	              switch (note) {
	                case protodef.Response.ResponseNote.SEQUENCE_FEED:
	                  if (cursor == null) {
	                    cursor = new cursors.Feed(this, token, opts, root);
	                  }
	                  break;
	                case protodef.Response.ResponseNote.UNIONED_FEED:
	                  if (cursor == null) {
	                    cursor = new cursors.UnionedFeed(this, token, opts, root);
	                  }
	                  break;
	                case protodef.Response.ResponseNote.ATOM_FEED:
	                  if (cursor == null) {
	                    cursor = new cursors.AtomFeed(this, token, opts, root);
	                  }
	                  break;
	                case protodef.Response.ResponseNote.ORDER_BY_LIMIT_FEED:
	                  if (cursor == null) {
	                    cursor = new cursors.OrderByLimitFeed(this, token, opts, root);
	                  }
	              }
	            }
	            if (cursor == null) {
	              cursor = new cursors.Cursor(this, token, opts, root);
	            }
	            this.outstandingCallbacks[token].cursor = cursor;
	            if (profile != null) {
	              return cb(null, {
	                profile: profile,
	                value: cursor._addResponse(response)
	              });
	            } else {
	              return cb(null, cursor._addResponse(response));
	            }
	            break;
	          case protoResponseType.SUCCESS_SEQUENCE:
	            cursor = new cursors.Cursor(this, token, opts, root);
	            this._delQuery(token);
	            if (profile != null) {
	              return cb(null, {
	                profile: profile,
	                value: cursor._addResponse(response)
	              });
	            } else {
	              return cb(null, cursor._addResponse(response));
	            }
	            break;
	          case protoResponseType.WAIT_COMPLETE:
	            this._delQuery(token);
	            return cb(null, null);
	          default:
	            return cb(new err.ReqlDriverError("Unknown response type"));
	        }
	      }
	    } else {

	    }
	  };

	  Connection.prototype.close = varar(0, 2, function(optsOrCallback, callback) {
	    var cb, key, noreplyWait, opts;
	    if (callback != null) {
	      opts = optsOrCallback;
	      if (Object.prototype.toString.call(opts) !== '[object Object]') {
	        throw new err.ReqlDriverError("First argument to two-argument `close` must be an object.");
	      }
	      cb = callback;
	    } else if (Object.prototype.toString.call(optsOrCallback) === '[object Object]') {
	      opts = optsOrCallback;
	      cb = null;
	    } else if (typeof optsOrCallback === 'function') {
	      opts = {};
	      cb = optsOrCallback;
	    } else {
	      opts = optsOrCallback;
	      cb = null;
	    }
	    for (key in opts) {
	      if (!__hasProp.call(opts, key)) continue;
	      if (key !== 'noreplyWait') {
	        throw new err.ReqlDriverError("First argument to two-argument `close` must be { noreplyWait: <bool> }.");
	      }
	    }
	    if (this._closePromise != null) {
	      return this._closePromise.nodeify(cb);
	    }
	    this.closing = true;
	    noreplyWait = ((opts.noreplyWait == null) || opts.noreplyWait) && this.open;
	    return this._closePromise = new Promise((function(_this) {
	      return function(resolve, reject) {
	        var wrappedCb;
	        wrappedCb = function(err, result) {
	          _this.open = false;
	          _this.closing = false;
	          _this.cancel();
	          if (err != null) {
	            return reject(err);
	          } else {
	            return resolve(result);
	          }
	        };
	        if (noreplyWait) {
	          return _this.noreplyWait(wrappedCb);
	        } else {
	          return wrappedCb();
	        }
	      };
	    })(this)).nodeify(cb);
	  });

	  Connection.prototype.noreplyWait = varar(0, 1, function(callback) {
	    var query, token;
	    if (!this.open) {
	      return new Promise(function(resolve, reject) {
	        return reject(new err.ReqlDriverError("Connection is closed."));
	      }).nodeify(callback);
	    }
	    token = this.nextToken++;
	    query = {};
	    query.type = protoQueryType.NOREPLY_WAIT;
	    query.token = token;
	    return new Promise((function(_this) {
	      return function(resolve, reject) {
	        var wrappedCb;
	        wrappedCb = function(err, result) {
	          if (err) {
	            return reject(err);
	          } else {
	            return resolve(result);
	          }
	        };
	        _this.outstandingCallbacks[token] = {
	          cb: wrappedCb,
	          root: null,
	          opts: null
	        };
	        return _this._sendQuery(query);
	      };
	    })(this)).nodeify(callback);
	  });

	  Connection.prototype.cancel = ar(function() {
	    var key, response, value, _ref;
	    response = {
	      t: protoResponseType.RUNTIME_ERROR,
	      r: ["Connection is closed."],
	      b: []
	    };
	    _ref = this.outstandingCallbacks;
	    for (key in _ref) {
	      if (!__hasProp.call(_ref, key)) continue;
	      value = _ref[key];
	      if (value.cursor != null) {
	        value.cursor._addResponse(response);
	      } else if (value.cb != null) {
	        value.cb(mkErr(util.errorClass(response.e), response, value.root));
	      }
	    }
	    return this.outstandingCallbacks = {};
	  });

	  Connection.prototype.reconnect = varar(0, 2, function(optsOrCallback, callback) {
	    var cb, opts;
	    if (callback != null) {
	      opts = optsOrCallback;
	      cb = callback;
	    } else if (typeof optsOrCallback === "function") {
	      opts = {};
	      cb = optsOrCallback;
	    } else {
	      if (optsOrCallback != null) {
	        opts = optsOrCallback;
	      } else {
	        opts = {};
	      }
	      cb = callback;
	    }
	    return new Promise((function(_this) {
	      return function(resolve, reject) {
	        var closeCb;
	        closeCb = function(err) {
	          return _this.constructor.call(_this, {
	            host: _this.host,
	            port: _this.port,
	            timeout: _this.timeout,
	            authKey: _this.authKey
	          }, function(err, conn) {
	            if (err != null) {
	              return reject(err);
	            } else {
	              return resolve(conn);
	            }
	          });
	        };
	        return _this.close(opts, closeCb);
	      };
	    })(this)).nodeify(cb);
	  });

	  Connection.prototype.use = ar(function(db) {
	    return this.db = db;
	  });

	  Connection.prototype.isOpen = function() {
	    return this.open && !this.closing;
	  };

	  Connection.prototype._start = function(term, cb, opts) {
	    var key, query, token, value;
	    if (!this.open) {
	      throw new err.ReqlDriverError("Connection is closed.");
	    }
	    token = this.nextToken++;
	    query = {};
	    query.global_optargs = {};
	    query.type = protoQueryType.START;
	    query.query = term.build();
	    query.token = token;
	    for (key in opts) {
	      if (!__hasProp.call(opts, key)) continue;
	      value = opts[key];
	      query.global_optargs[util.fromCamelCase(key)] = r.expr(value).build();
	    }
	    if ((opts.db != null) || (this.db != null)) {
	      query.global_optargs.db = r.db(opts.db || this.db).build();
	    }
	    if (opts.noreply != null) {
	      query.global_optargs['noreply'] = r.expr(!!opts.noreply).build();
	    }
	    if (opts.profile != null) {
	      query.global_optargs['profile'] = r.expr(!!opts.profile).build();
	    }
	    if ((opts.noreply == null) || !opts.noreply) {
	      this.outstandingCallbacks[token] = {
	        cb: cb,
	        root: term,
	        opts: opts
	      };
	    }
	    this._sendQuery(query);
	    if ((opts.noreply != null) && opts.noreply && typeof cb === 'function') {
	      return cb(null);
	    }
	  };

	  Connection.prototype._continueQuery = function(token) {
	    var query;
	    if (!this.open) {
	      throw new err.ReqlDriverError("Connection is closed.");
	    }
	    query = {
	      type: protoQueryType.CONTINUE,
	      token: token
	    };
	    return this._sendQuery(query);
	  };

	  Connection.prototype._endQuery = function(token) {
	    var query;
	    if (!this.open) {
	      throw new err.ReqlDriverError("Connection is closed.");
	    }
	    query = {
	      type: protoQueryType.STOP,
	      token: token
	    };
	    return this._sendQuery(query);
	  };

	  Connection.prototype._sendQuery = function(query) {
	    var data;
	    data = [query.type];
	    if (!(query.query === void 0)) {
	      data.push(query.query);
	      if ((query.global_optargs != null) && Object.keys(query.global_optargs).length > 0) {
	        data.push(query.global_optargs);
	      }
	    }
	    return this._writeQuery(query.token, JSON.stringify(data));
	  };

	  return Connection;

	})(events.EventEmitter);

	TcpConnection = (function(_super) {
	  __extends(TcpConnection, _super);

	  TcpConnection.isAvailable = function() {
	    return !process.browser;
	  };

	  function TcpConnection(host, callback) {
	    var timeout;
	    if (!TcpConnection.isAvailable()) {
	      throw new err.ReqlDriverError("TCP sockets are not available in this environment");
	    }
	    TcpConnection.__super__.constructor.call(this, host, callback);
	    if (this.ssl) {
	      this.ssl.host = this.host;
	      this.ssl.port = this.port;
	      this.rawSocket = tls.connect(this.ssl);
	    } else {
	      this.rawSocket = net.connect(this.port, this.host);
	    }
	    this.rawSocket.setNoDelay();
	    this.rawSocket.setKeepAlive(true);
	    timeout = setTimeout(((function(_this) {
	      return function() {
	        _this.rawSocket.destroy();
	        return _this.emit('error', new err.ReqlTimeoutError("Could not connect to " + _this.host + ":" + _this.port + ", operation timed out."));
	      };
	    })(this)), this.timeout * 1000);
	    this.rawSocket.once('error', (function(_this) {
	      return function() {
	        return clearTimeout(timeout);
	      };
	    })(this));
	    this.rawSocket.once('connect', (function(_this) {
	      return function() {
	        var auth_buffer, auth_length, handshake_callback, protocol, version;
	        version = new Buffer(4);
	        version.writeUInt32LE(protoVersion, 0);
	        auth_buffer = new Buffer(_this.authKey, 'ascii');
	        auth_length = new Buffer(4);
	        auth_length.writeUInt32LE(auth_buffer.length, 0);
	        protocol = new Buffer(4);
	        protocol.writeUInt32LE(protoProtocol, 0);
	        _this.rawSocket.write(Buffer.concat([version, auth_length, auth_buffer, protocol]));
	        handshake_callback = function(buf) {
	          var b, i, status_buf, status_str, _i, _len, _ref;
	          _this.buffer = Buffer.concat([_this.buffer, buf]);
	          _ref = _this.buffer;
	          for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
	            b = _ref[i];
	            if (b === 0) {
	              _this.rawSocket.removeListener('data', handshake_callback);
	              status_buf = _this.buffer.slice(0, i);
	              _this.buffer = _this.buffer.slice(i + 1);
	              status_str = status_buf.toString();
	              clearTimeout(timeout);
	              if (status_str === HANDSHAKE_SUCCESS) {
	                _this.rawSocket.on('data', function(buf) {
	                  return _this._data(buf);
	                });
	                _this.emit('connect');
	                return;
	              } else if (status_str === HANDSHAKE_AUTHFAIL) {
	                _this.emit('error', new err.ReqlAuthError("Could not connect to " + _this.host + ":" + _this.port + ", incorrect authentication key."));
	              } else {
	                _this.emit('error', new err.ReqlDriverError("Server dropped connection with message: \"" + status_str.trim() + "\""));
	                return;
	              }
	            }
	          }
	        };
	        return _this.rawSocket.on('data', handshake_callback);
	      };
	    })(this));
	    this.rawSocket.on('error', (function(_this) {
	      return function(err) {
	        return _this.emit('error', err);
	      };
	    })(this));
	    this.rawSocket.on('close', (function(_this) {
	      return function() {
	        if (_this.isOpen()) {
	          _this.close({
	            noreplyWait: false
	          });
	        }
	        return _this.emit('close');
	      };
	    })(this));
	    this.rawSocket.on('timeout', (function(_this) {
	      return function() {
	        _this.open = false;
	        return _this.emit('timeout');
	      };
	    })(this));
	  }

	  TcpConnection.prototype.close = varar(0, 2, function(optsOrCallback, callback) {
	    var cb, opts;
	    if (callback != null) {
	      opts = optsOrCallback;
	      cb = callback;
	    } else if (Object.prototype.toString.call(optsOrCallback) === '[object Object]') {
	      opts = optsOrCallback;
	      cb = null;
	    } else if (typeof optsOrCallback === "function") {
	      opts = {};
	      cb = optsOrCallback;
	    } else {
	      opts = {};
	    }
	    return new Promise((function(_this) {
	      return function(resolve, reject) {
	        var wrappedCb;
	        wrappedCb = function(error, result) {
	          var cleanupSocket, closeCb, _ref;
	          closeCb = function() {
	            if (error != null) {
	              return reject(error);
	            } else {
	              return resolve(result);
	            }
	          };
	          cleanupSocket = function() {
	            var _ref;
	            closeCb();
	            if ((_ref = _this.rawSocket) != null) {
	              _ref.removeAllListeners();
	            }
	            _this.rawSocket = null;
	            return _this.emit("close");
	          };
	          if (_this.rawSocket != null) {
	            if (_this.rawSocket.readyState === 'closed') {
	              return cleanupSocket();
	            } else {
	              if ((_ref = _this.rawSocket) != null) {
	                _ref.once("close", cleanupSocket);
	              }
	              return _this.rawSocket.end();
	            }
	          } else {
	            return process.nextTick(closeCb);
	          }
	        };
	        return TcpConnection.__super__.close.call(_this, opts, wrappedCb);
	      };
	    })(this)).nodeify(cb);
	  });

	  TcpConnection.prototype.cancel = function() {
	    this.rawSocket.destroy();
	    return TcpConnection.__super__.cancel.call(this);
	  };

	  TcpConnection.prototype._writeQuery = function(token, data) {
	    var tokenBuf;
	    tokenBuf = new Buffer(8);
	    tokenBuf.writeUInt32LE(token & 0xFFFFFFFF, 0);
	    tokenBuf.writeUInt32LE(Math.floor(token / 0xFFFFFFFF), 4);
	    this.rawSocket.write(tokenBuf);
	    return this.write(new Buffer(data));
	  };

	  TcpConnection.prototype.write = function(chunk) {
	    var lengthBuffer;
	    lengthBuffer = new Buffer(4);
	    lengthBuffer.writeUInt32LE(chunk.length, 0);
	    this.rawSocket.write(lengthBuffer);
	    return this.rawSocket.write(chunk);
	  };

	  return TcpConnection;

	})(Connection);

	HttpConnection = (function(_super) {
	  __extends(HttpConnection, _super);

	  HttpConnection.prototype.DEFAULT_PROTOCOL = 'http';

	  HttpConnection.isAvailable = function() {
	    return typeof XMLHttpRequest !== "undefined";
	  };

	  function HttpConnection(host, callback) {
	    var protocol, url, xhr;
	    if (!HttpConnection.isAvailable()) {
	      throw new err.ReqlDriverError("XMLHttpRequest is not available in this environment");
	    }
	    HttpConnection.__super__.constructor.call(this, host, callback);
	    protocol = host.protocol === 'https' ? 'https' : this.DEFAULT_PROTOCOL;
	    url = "" + protocol + "://" + this.host + ":" + this.port + host.pathname + "ajax/reql/";
	    xhr = new XMLHttpRequest;
	    xhr.open("POST", url + ("open-new-connection?cacheBuster=" + (Math.random())), true);
	    xhr.responseType = "text";
	    xhr.onreadystatechange = (function(_this) {
	      return function(e) {
	        if (xhr.readyState === 4) {
	          if (xhr.status === 200) {
	            _this._url = url;
	            _this._connId = xhr.response;
	            return _this.emit('connect');
	          } else {
	            return _this.emit('error', new err.ReqlDriverError("XHR error, http status " + xhr.status + "."));
	          }
	        }
	      };
	    })(this);
	    xhr.send();
	    this.xhr = xhr;
	  }

	  HttpConnection.prototype.cancel = function() {
	    var xhr;
	    if (this._connId != null) {
	      this.xhr.abort();
	      xhr = new XMLHttpRequest;
	      xhr.open("POST", "" + this._url + "close-connection?conn_id=" + this._connId, true);
	      xhr.responseType = "arraybuffer";
	      xhr.send();
	      this._url = null;
	      this._connId = null;
	      return HttpConnection.__super__.cancel.call(this);
	    }
	  };

	  HttpConnection.prototype.close = varar(0, 2, function(optsOrCallback, callback) {
	    var cb, opts;
	    if (callback != null) {
	      opts = optsOrCallback;
	      cb = callback;
	    } else if (Object.prototype.toString.call(optsOrCallback) === '[object Object]') {
	      opts = optsOrCallback;
	      cb = null;
	    } else {
	      opts = {};
	      cb = optsOrCallback;
	    }
	    if (!((cb == null) || typeof cb === 'function')) {
	      throw new err.ReqlDriverError("Final argument to `close` must be a callback function or object.");
	    }
	    return HttpConnection.__super__.close.call(this, opts, cb);
	  });

	  HttpConnection.prototype._writeQuery = function(token, data) {
	    var buf;
	    buf = new Buffer(encodeURI(data).split(/%..|./).length - 1 + 8);
	    buf.writeUInt32LE(token & 0xFFFFFFFF, 0);
	    buf.writeUInt32LE(Math.floor(token / 0xFFFFFFFF), 4);
	    buf.write(data, 8);
	    return this.write(buf, token);
	  };

	  HttpConnection.prototype.write = function(chunk, token) {
	    var i, view, xhr;
	    xhr = new XMLHttpRequest;
	    xhr.open("POST", "" + this._url + "?conn_id=" + this._connId, true);
	    xhr.responseType = "arraybuffer";
	    xhr.onreadystatechange = (function(_this) {
	      return function(e) {
	        var b, buf;
	        if (xhr.readyState === 4 && xhr.status === 200) {
	          buf = new Buffer((function() {
	            var _i, _len, _ref, _results;
	            _ref = new Uint8Array(xhr.response);
	            _results = [];
	            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	              b = _ref[_i];
	              _results.push(b);
	            }
	            return _results;
	          })());
	          return _this._data(buf);
	        }
	      };
	    })(this);
	    xhr.onerror = (function(_this) {
	      return function(e) {
	        return _this.outstandingCallbacks[token].cb(new Error("This HTTP connection is not open"));
	      };
	    })(this);
	    view = new Uint8Array(chunk.length);
	    i = 0;
	    while (i < chunk.length) {
	      view[i] = chunk[i];
	      i++;
	    }
	    xhr.send(view);
	    return this.xhr = xhr;
	  };

	  return HttpConnection;

	})(Connection);

	module.exports.isConnection = function(connection) {
	  return connection instanceof Connection;
	};

	module.exports.connect = varar(0, 2, function(hostOrCallback, callback) {
	  var host;
	  if (typeof hostOrCallback === 'function') {
	    host = {};
	    callback = hostOrCallback;
	  } else {
	    host = hostOrCallback;
	  }
	  return new Promise(function(resolve, reject) {
	    var create_connection, wrappedCb;
	    create_connection = (function(_this) {
	      return function(host, callback) {
	        if (TcpConnection.isAvailable()) {
	          return new TcpConnection(host, callback);
	        } else if (HttpConnection.isAvailable()) {
	          return new HttpConnection(host, callback);
	        } else {
	          throw new err.ReqlDriverError("Neither TCP nor HTTP avaiable in this environment");
	        }
	      };
	    })(this);
	    wrappedCb = function(err, result) {
	      if (err) {
	        return reject(err);
	      } else {
	        return resolve(result);
	      }
	    };
	    return create_connection(host, wrappedCb);
	  }).nodeify(callback);
	});


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("net");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("tls");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("events");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.0
	var convertPseudotype, err, errorClass, mkAtom, mkErr, mkSeq, plural, protoErrorType, protodef, recursivelyConvertPseudotype,
	  __slice = [].slice;

	err = __webpack_require__(11);

	protodef = __webpack_require__(12);

	protoErrorType = protodef.Response.ErrorType;

	plural = function(number) {
	  if (number === 1) {
	    return "";
	  } else {
	    return "s";
	  }
	};

	module.exports.ar = function(fun) {
	  return function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    if (args.length !== fun.length) {
	      throw new err.ReqlDriverError("Expected " + fun.length + " argument" + (plural(fun.length)) + " but found " + args.length + ".");
	    }
	    return fun.apply(this, args);
	  };
	};

	module.exports.varar = function(min, max, fun) {
	  return function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    if (((min != null) && args.length < min) || ((max != null) && args.length > max)) {
	      if ((min != null) && (max == null)) {
	        throw new err.ReqlDriverError("Expected " + min + " or more arguments but found " + args.length + ".");
	      }
	      if ((max != null) && (min == null)) {
	        throw new err.ReqlDriverError("Expected " + max + " or fewer arguments but found " + args.length + ".");
	      }
	      throw new err.ReqlDriverError("Expected between " + min + " and " + max + " arguments but found " + args.length + ".");
	    }
	    return fun.apply(this, args);
	  };
	};

	module.exports.aropt = function(fun) {
	  return function() {
	    var args, expectedPosArgs, numPosArgs, perhapsOptDict;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    expectedPosArgs = fun.length - 1;
	    perhapsOptDict = args[expectedPosArgs];
	    if ((perhapsOptDict != null) && (Object.prototype.toString.call(perhapsOptDict) !== '[object Object]')) {
	      perhapsOptDict = null;
	    }
	    numPosArgs = args.length - (perhapsOptDict != null ? 1 : 0);
	    if (expectedPosArgs !== numPosArgs) {
	      if (expectedPosArgs !== 1) {
	        throw new err.ReqlDriverError("Expected " + expectedPosArgs + " arguments (not including options) but found " + numPosArgs + ".");
	      } else {
	        throw new err.ReqlDriverError("Expected " + expectedPosArgs + " argument (not including options) but found " + numPosArgs + ".");
	      }
	    }
	    return fun.apply(this, args);
	  };
	};

	module.exports.toArrayBuffer = function(node_buffer) {
	  var arr, i, value, _i, _len;
	  arr = new Uint8Array(new ArrayBuffer(node_buffer.length));
	  for (i = _i = 0, _len = node_buffer.length; _i < _len; i = ++_i) {
	    value = node_buffer[i];
	    arr[i] = value;
	  }
	  return arr.buffer;
	};

	module.exports.fromCamelCase = function(token) {
	  return token.replace(/[A-Z]/g, (function(_this) {
	    return function(match) {
	      return "_" + match.toLowerCase();
	    };
	  })(this));
	};

	module.exports.toCamelCase = function(token) {
	  return token.replace(/_[a-z]/g, (function(_this) {
	    return function(match) {
	      return match[1].toUpperCase();
	    };
	  })(this));
	};

	convertPseudotype = function(obj, opts) {
	  var i, _i, _len, _ref, _results;
	  switch (obj['$reql_type$']) {
	    case 'TIME':
	      switch (opts.timeFormat) {
	        case 'native':
	        case void 0:
	          if (obj['epoch_time'] == null) {
	            throw new err.ReqlDriverError("pseudo-type TIME " + obj + " object missing expected field 'epoch_time'.");
	          }
	          return new Date(obj['epoch_time'] * 1000);
	        case 'raw':
	          return obj;
	        default:
	          throw new err.ReqlDriverError("Unknown timeFormat run option " + opts.timeFormat + ".");
	      }
	      break;
	    case 'GROUPED_DATA':
	      switch (opts.groupFormat) {
	        case 'native':
	        case void 0:
	          _ref = obj['data'];
	          _results = [];
	          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	            i = _ref[_i];
	            _results.push({
	              group: i[0],
	              reduction: i[1]
	            });
	          }
	          return _results;
	          break;
	        case 'raw':
	          return obj;
	        default:
	          throw new err.ReqlDriverError("Unknown groupFormat run option " + opts.groupFormat + ".");
	      }
	      break;
	    case 'BINARY':
	      switch (opts.binaryFormat) {
	        case 'native':
	        case void 0:
	          if (obj['data'] == null) {
	            throw new err.ReqlDriverError("pseudo-type BINARY object missing expected field 'data'.");
	          }
	          return new Buffer(obj['data'], 'base64');
	        case 'raw':
	          return obj;
	        default:
	          throw new err.ReqlDriverError("Unknown binaryFormat run option " + opts.binaryFormat + ".");
	      }
	      break;
	    default:
	      return obj;
	  }
	};

	recursivelyConvertPseudotype = function(obj, opts) {
	  var i, key, value, _i, _len;
	  if (Array.isArray(obj)) {
	    for (i = _i = 0, _len = obj.length; _i < _len; i = ++_i) {
	      value = obj[i];
	      obj[i] = recursivelyConvertPseudotype(value, opts);
	    }
	  } else if (obj && typeof obj === 'object') {
	    for (key in obj) {
	      value = obj[key];
	      obj[key] = recursivelyConvertPseudotype(value, opts);
	    }
	    obj = convertPseudotype(obj, opts);
	  }
	  return obj;
	};

	mkAtom = function(response, opts) {
	  return recursivelyConvertPseudotype(response.r[0], opts);
	};

	mkSeq = function(response, opts) {
	  return recursivelyConvertPseudotype(response.r, opts);
	};

	mkErr = function(ErrClass, response, root) {
	  return new ErrClass(mkAtom(response), root, response.b);
	};

	errorClass = (function(_this) {
	  return function(errorType) {
	    switch (errorType) {
	      case protoErrorType.QUERY_LOGIC:
	        return err.ReqlQueryLogicError;
	      case protoErrorType.NON_EXISTENCE:
	        return err.ReqlNonExistenceError;
	      case protoErrorType.RESOURCE_LIMIT:
	        return err.ReqlResourceLimitError;
	      case protoErrorType.USER:
	        return err.ReqlUserError;
	      case protoErrorType.INTERNAL:
	        return err.ReqlInternalError;
	      case protoErrorType.OP_FAILED:
	        return err.ReqlOpFailedError;
	      case protoErrorType.OP_INDETERMINATE:
	        return err.ReqlOpIndeterminateError;
	      default:
	        return err.ReqlRuntimeError;
	    }
	  };
	})(this);

	module.exports.recursivelyConvertPseudotype = recursivelyConvertPseudotype;

	module.exports.mkAtom = mkAtom;

	module.exports.mkSeq = mkSeq;

	module.exports.mkErr = mkErr;

	module.exports.errorClass = errorClass;


/***/ },
/* 11 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.7.0
	var ReqlAuthError, ReqlAvailabilityError, ReqlCompileError, ReqlDriverError, ReqlError, ReqlInternalError, ReqlNonExistenceError, ReqlOpFailedError, ReqlOpIndeterminateError, ReqlQueryLogicError, ReqlQueryPrinter, ReqlResourceLimitError, ReqlRuntimeError, ReqlTimeoutError, ReqlUserError,
	  __hasProp = {}.hasOwnProperty,
	  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	ReqlError = (function(_super) {
	  __extends(ReqlError, _super);

	  function ReqlError(msg) {
	    this.name = this.constructor.name;
	    this.msg = msg;
	    this.message = msg;
	    if (Error.captureStackTrace != null) {
	      Error.captureStackTrace(this, this);
	    }
	  }

	  return ReqlError;

	})(Error);

	ReqlCompileError = (function(_super) {
	  __extends(ReqlCompileError, _super);

	  function ReqlCompileError() {
	    return ReqlCompileError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlCompileError;

	})(ReqlError);

	ReqlDriverError = (function(_super) {
	  __extends(ReqlDriverError, _super);

	  function ReqlDriverError() {
	    return ReqlDriverError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlDriverError;

	})(ReqlError);

	ReqlAuthError = (function(_super) {
	  __extends(ReqlAuthError, _super);

	  function ReqlAuthError() {
	    return ReqlAuthError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlAuthError;

	})(ReqlDriverError);

	ReqlRuntimeError = (function(_super) {
	  __extends(ReqlRuntimeError, _super);

	  function ReqlRuntimeError(msg, term, frames) {
	    this.name = this.constructor.name;
	    this.msg = msg;
	    this.frames = frames.slice(0);
	    if (term != null) {
	      if (msg[msg.length - 1] === '.') {
	        this.message = "" + (msg.slice(0, msg.length - 1)) + " in:\n" + (ReqlQueryPrinter.prototype.printQuery(term)) + "\n" + (ReqlQueryPrinter.prototype.printCarrots(term, frames));
	      } else {
	        this.message = "" + msg + " in:\n" + (ReqlQueryPrinter.prototype.printQuery(term)) + "\n" + (ReqlQueryPrinter.prototype.printCarrots(term, frames));
	      }
	    } else {
	      this.message = "" + msg;
	    }
	    if (Error.captureStackTrace != null) {
	      Error.captureStackTrace(this, this);
	    }
	  }

	  return ReqlRuntimeError;

	})(ReqlError);

	ReqlQueryLogicError = (function(_super) {
	  __extends(ReqlQueryLogicError, _super);

	  function ReqlQueryLogicError() {
	    return ReqlQueryLogicError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlQueryLogicError;

	})(ReqlRuntimeError);

	ReqlNonExistenceError = (function(_super) {
	  __extends(ReqlNonExistenceError, _super);

	  function ReqlNonExistenceError() {
	    return ReqlNonExistenceError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlNonExistenceError;

	})(ReqlQueryLogicError);

	ReqlResourceLimitError = (function(_super) {
	  __extends(ReqlResourceLimitError, _super);

	  function ReqlResourceLimitError() {
	    return ReqlResourceLimitError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlResourceLimitError;

	})(ReqlRuntimeError);

	ReqlUserError = (function(_super) {
	  __extends(ReqlUserError, _super);

	  function ReqlUserError() {
	    return ReqlUserError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlUserError;

	})(ReqlRuntimeError);

	ReqlInternalError = (function(_super) {
	  __extends(ReqlInternalError, _super);

	  function ReqlInternalError() {
	    return ReqlInternalError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlInternalError;

	})(ReqlRuntimeError);

	ReqlTimeoutError = (function(_super) {
	  __extends(ReqlTimeoutError, _super);

	  function ReqlTimeoutError() {
	    return ReqlTimeoutError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlTimeoutError;

	})(ReqlError);

	ReqlAvailabilityError = (function(_super) {
	  __extends(ReqlAvailabilityError, _super);

	  function ReqlAvailabilityError() {
	    return ReqlAvailabilityError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlAvailabilityError;

	})(ReqlRuntimeError);

	ReqlOpFailedError = (function(_super) {
	  __extends(ReqlOpFailedError, _super);

	  function ReqlOpFailedError() {
	    return ReqlOpFailedError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlOpFailedError;

	})(ReqlAvailabilityError);

	ReqlOpIndeterminateError = (function(_super) {
	  __extends(ReqlOpIndeterminateError, _super);

	  function ReqlOpIndeterminateError() {
	    return ReqlOpIndeterminateError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlOpIndeterminateError;

	})(ReqlAvailabilityError);

	ReqlQueryPrinter = (function() {
	  var carrotMarker, carrotify, composeCarrots, composeTerm, joinTree;

	  function ReqlQueryPrinter() {}

	  ReqlQueryPrinter.prototype.printQuery = function(term) {
	    var tree;
	    tree = composeTerm(term);
	    return joinTree(tree);
	  };

	  composeTerm = function(term) {
	    var arg, args, key, optargs, _ref;
	    args = (function() {
	      var _i, _len, _ref, _results;
	      _ref = term.args;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        arg = _ref[_i];
	        _results.push(composeTerm(arg));
	      }
	      return _results;
	    })();
	    optargs = {};
	    _ref = term.optargs;
	    for (key in _ref) {
	      if (!__hasProp.call(_ref, key)) continue;
	      arg = _ref[key];
	      optargs[key] = composeTerm(arg);
	    }
	    return term.compose(args, optargs);
	  };

	  ReqlQueryPrinter.prototype.printCarrots = function(term, frames) {
	    var tree;
	    if (frames.length === 0) {
	      tree = [carrotify(composeTerm(term))];
	    } else {
	      tree = composeCarrots(term, frames);
	    }
	    return (joinTree(tree)).replace(/[^\^]/g, ' ');
	  };

	  composeCarrots = function(term, frames) {
	    var arg, args, frame, i, key, optargs, _ref;
	    frame = frames.shift();
	    args = (function() {
	      var _i, _len, _ref, _results;
	      _ref = term.args;
	      _results = [];
	      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
	        arg = _ref[i];
	        if (frame === i) {
	          _results.push(composeCarrots(arg, frames));
	        } else {
	          _results.push(composeTerm(arg));
	        }
	      }
	      return _results;
	    })();
	    optargs = {};
	    _ref = term.optargs;
	    for (key in _ref) {
	      if (!__hasProp.call(_ref, key)) continue;
	      arg = _ref[key];
	      if (frame === key) {
	        optargs[key] = composeCarrots(arg, frames);
	      } else {
	        optargs[key] = composeTerm(arg);
	      }
	    }
	    if (frame != null) {
	      return term.compose(args, optargs);
	    } else {
	      return carrotify(term.compose(args, optargs));
	    }
	  };

	  carrotMarker = {};

	  carrotify = function(tree) {
	    return [carrotMarker, tree];
	  };

	  joinTree = function(tree) {
	    var str, term, _i, _len;
	    str = '';
	    for (_i = 0, _len = tree.length; _i < _len; _i++) {
	      term = tree[_i];
	      if (Array.isArray(term)) {
	        if (term.length === 2 && term[0] === carrotMarker) {
	          str += (joinTree(term[1])).replace(/./g, '^');
	        } else {
	          str += joinTree(term);
	        }
	      } else {
	        str += term;
	      }
	    }
	    return str;
	  };

	  return ReqlQueryPrinter;

	})();

	module.exports = {
	  ReqlError: ReqlError,
	  ReqlCompileError: ReqlCompileError,
	  RqlCompileError: ReqlCompileError,
	  RqlClientError: ReqlDriverError,
	  ReqlRuntimeError: ReqlRuntimeError,
	  RqlRuntimeError: ReqlRuntimeError,
	  RqlServerError: ReqlRuntimeError,
	  ReqlQueryLogicError: ReqlQueryLogicError,
	  ReqlNonExistenceError: ReqlNonExistenceError,
	  ReqlResourceLimitError: ReqlResourceLimitError,
	  ReqlUserError: ReqlUserError,
	  ReqlInternalError: ReqlInternalError,
	  ReqlTimeoutError: ReqlTimeoutError,
	  ReqlAvailabilityError: ReqlAvailabilityError,
	  ReqlOpFailedError: ReqlOpFailedError,
	  ReqlOpIndeterminateError: ReqlOpIndeterminateError,
	  ReqlDriverError: ReqlDriverError,
	  RqlDriverError: ReqlDriverError,
	  ReqlAuthError: ReqlAuthError,
	  printQuery: ReqlQueryPrinter.prototype.printQuery
	};


/***/ },
/* 12 */
/***/ function(module, exports) {

	// DO NOT EDIT
	// Autogenerated by convert_protofile

	module.exports = {
		VersionDummy: {
			Version: {
				V0_1: 1063369270,
				V0_2: 1915781601,
				V0_3: 1601562686,
				V0_4: 1074539808
			},
			
			Protocol: {
				PROTOBUF: 656407617,
				JSON: 2120839367
			}
		},
		
		Query: {
			QueryType: {
				START: 1,
				CONTINUE: 2,
				STOP: 3,
				NOREPLY_WAIT: 4
			},
			
			AssocPair: {}
		},
		
		Frame: {
			FrameType: {
				POS: 1,
				OPT: 2
			}
		},
		
		Backtrace: {},
		
		Response: {
			ResponseType: {
				SUCCESS_ATOM: 1,
				SUCCESS_SEQUENCE: 2,
				SUCCESS_PARTIAL: 3,
				WAIT_COMPLETE: 4,
				CLIENT_ERROR: 16,
				COMPILE_ERROR: 17,
				RUNTIME_ERROR: 18
			},
			
			ErrorType: {
				INTERNAL: 1000000,
				RESOURCE_LIMIT: 2000000,
				QUERY_LOGIC: 3000000,
				NON_EXISTENCE: 3100000,
				OP_FAILED: 4100000,
				OP_INDETERMINATE: 4200000,
				USER: 5000000
			},
			
			ResponseNote: {
				SEQUENCE_FEED: 1,
				ATOM_FEED: 2,
				ORDER_BY_LIMIT_FEED: 3,
				UNIONED_FEED: 4,
				INCLUDES_STATES: 5
			}
		},
		
		Datum: {
			DatumType: {
				R_NULL: 1,
				R_BOOL: 2,
				R_NUM: 3,
				R_STR: 4,
				R_ARRAY: 5,
				R_OBJECT: 6,
				R_JSON: 7
			},
			
			AssocPair: {}
		},
		
		Term: {
			TermType: {
				DATUM: 1,
				MAKE_ARRAY: 2,
				MAKE_OBJ: 3,
				VAR: 10,
				JAVASCRIPT: 11,
				UUID: 169,
				HTTP: 153,
				ERROR: 12,
				IMPLICIT_VAR: 13,
				DB: 14,
				TABLE: 15,
				GET: 16,
				GET_ALL: 78,
				EQ: 17,
				NE: 18,
				LT: 19,
				LE: 20,
				GT: 21,
				GE: 22,
				NOT: 23,
				ADD: 24,
				SUB: 25,
				MUL: 26,
				DIV: 27,
				MOD: 28,
				FLOOR: 183,
				CEIL: 184,
				ROUND: 185,
				APPEND: 29,
				PREPEND: 80,
				DIFFERENCE: 95,
				SET_INSERT: 88,
				SET_INTERSECTION: 89,
				SET_UNION: 90,
				SET_DIFFERENCE: 91,
				SLICE: 30,
				SKIP: 70,
				LIMIT: 71,
				OFFSETS_OF: 87,
				CONTAINS: 93,
				GET_FIELD: 31,
				KEYS: 94,
				OBJECT: 143,
				HAS_FIELDS: 32,
				WITH_FIELDS: 96,
				PLUCK: 33,
				WITHOUT: 34,
				MERGE: 35,
				BETWEEN_DEPRECATED: 36,
				BETWEEN: 182,
				REDUCE: 37,
				MAP: 38,
				FILTER: 39,
				CONCAT_MAP: 40,
				ORDER_BY: 41,
				DISTINCT: 42,
				COUNT: 43,
				IS_EMPTY: 86,
				UNION: 44,
				NTH: 45,
				BRACKET: 170,
				INNER_JOIN: 48,
				OUTER_JOIN: 49,
				EQ_JOIN: 50,
				ZIP: 72,
				RANGE: 173,
				INSERT_AT: 82,
				DELETE_AT: 83,
				CHANGE_AT: 84,
				SPLICE_AT: 85,
				COERCE_TO: 51,
				TYPE_OF: 52,
				UPDATE: 53,
				DELETE: 54,
				REPLACE: 55,
				INSERT: 56,
				DB_CREATE: 57,
				DB_DROP: 58,
				DB_LIST: 59,
				TABLE_CREATE: 60,
				TABLE_DROP: 61,
				TABLE_LIST: 62,
				CONFIG: 174,
				STATUS: 175,
				WAIT: 177,
				RECONFIGURE: 176,
				REBALANCE: 179,
				SYNC: 138,
				INDEX_CREATE: 75,
				INDEX_DROP: 76,
				INDEX_LIST: 77,
				INDEX_STATUS: 139,
				INDEX_WAIT: 140,
				INDEX_RENAME: 156,
				FUNCALL: 64,
				BRANCH: 65,
				OR: 66,
				AND: 67,
				FOR_EACH: 68,
				FUNC: 69,
				ASC: 73,
				DESC: 74,
				INFO: 79,
				MATCH: 97,
				UPCASE: 141,
				DOWNCASE: 142,
				SAMPLE: 81,
				DEFAULT: 92,
				JSON: 98,
				TO_JSON_STRING: 172,
				ISO8601: 99,
				TO_ISO8601: 100,
				EPOCH_TIME: 101,
				TO_EPOCH_TIME: 102,
				NOW: 103,
				IN_TIMEZONE: 104,
				DURING: 105,
				DATE: 106,
				TIME_OF_DAY: 126,
				TIMEZONE: 127,
				YEAR: 128,
				MONTH: 129,
				DAY: 130,
				DAY_OF_WEEK: 131,
				DAY_OF_YEAR: 132,
				HOURS: 133,
				MINUTES: 134,
				SECONDS: 135,
				TIME: 136,
				MONDAY: 107,
				TUESDAY: 108,
				WEDNESDAY: 109,
				THURSDAY: 110,
				FRIDAY: 111,
				SATURDAY: 112,
				SUNDAY: 113,
				JANUARY: 114,
				FEBRUARY: 115,
				MARCH: 116,
				APRIL: 117,
				MAY: 118,
				JUNE: 119,
				JULY: 120,
				AUGUST: 121,
				SEPTEMBER: 122,
				OCTOBER: 123,
				NOVEMBER: 124,
				DECEMBER: 125,
				LITERAL: 137,
				GROUP: 144,
				SUM: 145,
				AVG: 146,
				MIN: 147,
				MAX: 148,
				SPLIT: 149,
				UNGROUP: 150,
				RANDOM: 151,
				CHANGES: 152,
				ARGS: 154,
				BINARY: 155,
				GEOJSON: 157,
				TO_GEOJSON: 158,
				POINT: 159,
				LINE: 160,
				POLYGON: 161,
				DISTANCE: 162,
				INTERSECTS: 163,
				INCLUDES: 164,
				CIRCLE: 165,
				GET_INTERSECTING: 166,
				FILL: 167,
				GET_NEAREST: 168,
				POLYGON_SUB: 171,
				MINVAL: 180,
				MAXVAL: 181
			},
			
			AssocPair: {}
		}
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.0
	var ArrayResult, AtomFeed, Cursor, EventEmitter, Feed, IterableResult, OrderByLimitFeed, Promise, UnionedFeed, ar, aropt, err, mkErr, protoResponseType, setImmediate, util, varar,
	  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  __slice = [].slice,
	  __hasProp = {}.hasOwnProperty,
	  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	err = __webpack_require__(11);

	util = __webpack_require__(10);

	protoResponseType = __webpack_require__(12).Response.ResponseType;

	Promise = __webpack_require__(14);

	EventEmitter = __webpack_require__(9).EventEmitter;

	ar = util.ar;

	varar = util.varar;

	aropt = util.aropt;

	mkErr = util.mkErr;

	if (typeof setImmediate === "undefined" || setImmediate === null) {
	  setImmediate = function(cb) {
	    return setTimeout(cb, 0);
	  };
	}

	IterableResult = (function() {
	  IterableResult.prototype.stackSize = 100;

	  function IterableResult(conn, token, opts, root) {
	    this._eachCb = __bind(this._eachCb, this);
	    this._conn = conn;
	    this._token = token;
	    this._opts = opts;
	    this._root = root;
	    this._responses = [];
	    this._responseIndex = 0;
	    this._outstandingRequests = 1;
	    this._iterations = 0;
	    this._endFlag = false;
	    this._contFlag = false;
	    this._closeAsap = false;
	    this._cont = null;
	    this._cbQueue = [];
	    this._closeCb = null;
	    this._closeCbPromise = null;
	    this.next = this._next;
	    this.each = this._each;
	  }

	  IterableResult.prototype._addResponse = function(response) {
	    if (response.t === this._type || response.t === protoResponseType.SUCCESS_SEQUENCE) {
	      if (response.r.length > 0) {
	        this._responses.push(response);
	      }
	    } else {
	      this._responses.push(response);
	    }
	    this._outstandingRequests -= 1;
	    if (response.t !== this._type) {
	      this._endFlag = true;
	      if (this._closeCb != null) {
	        switch (response.t) {
	          case protoResponseType.COMPILE_ERROR:
	            this._closeCb(mkErr(err.ReqlCompileError, response, this._root));
	            break;
	          case protoResponseType.CLIENT_ERROR:
	            this._closeCb(mkErr(err.ReqlClientError, response, this._root));
	            break;
	          case protoResponseType.RUNTIME_ERROR:
	            this._closeCb(mkErr(util.errorClass(response.e), response, this._root));
	            break;
	          default:
	            this._closeCb();
	        }
	      }
	    }
	    this._contFlag = false;
	    if (this._closeAsap === false) {
	      this._promptNext();
	    } else {
	      this.close(this._closeCb);
	    }
	    return this;
	  };

	  IterableResult.prototype._getCallback = function() {
	    var cb, immediateCb;
	    this._iterations += 1;
	    cb = this._cbQueue.shift();
	    if (this._iterations % this.stackSize === this.stackSize - 1) {
	      immediateCb = (function(err, row) {
	        return setImmediate(function() {
	          return cb(err, row);
	        });
	      });
	      return immediateCb;
	    } else {
	      return cb;
	    }
	  };

	  IterableResult.prototype._handleRow = function() {
	    var cb, response, row;
	    response = this._responses[0];
	    row = util.recursivelyConvertPseudotype(response.r[this._responseIndex], this._opts);
	    cb = this._getCallback();
	    this._responseIndex += 1;
	    if (this._responseIndex === response.r.length) {
	      this._responses.shift();
	      this._responseIndex = 0;
	    }
	    return cb(null, row);
	  };

	  IterableResult.prototype.bufferEmpty = function() {
	    return this._responses.length === 0 || this._responses[0].r.length <= this._responseIndex;
	  };

	  IterableResult.prototype._promptNext = function() {
	    var cb, errType, response;
	    while (this._cbQueue[0] != null) {
	      if (this.bufferEmpty() === true) {
	        if (this._endFlag === true) {
	          cb = this._getCallback();
	          cb(new err.ReqlDriverError("No more rows in the cursor."));
	        } else if (this._responses.length <= 1) {
	          this._promptCont();
	        }
	        return;
	      } else {
	        response = this._responses[0];
	        if (this._responses.length === 1) {
	          this._promptCont();
	        }
	        switch (response.t) {
	          case protoResponseType.SUCCESS_PARTIAL:
	            this._handleRow();
	            break;
	          case protoResponseType.SUCCESS_SEQUENCE:
	            if (response.r.length === 0) {
	              this._responses.shift();
	            } else {
	              this._handleRow();
	            }
	            break;
	          case protoResponseType.COMPILE_ERROR:
	            this._responses.shift();
	            cb = this._getCallback();
	            cb(mkErr(err.ReqlCompileError, response, this._root));
	            break;
	          case protoResponseType.CLIENT_ERROR:
	            this._responses.shift();
	            cb = this._getCallback();
	            cb(mkErr(err.ReqlClientError, response, this._root));
	            break;
	          case protoResponseType.RUNTIME_ERROR:
	            this._responses.shift();
	            cb = this._getCallback();
	            errType = util.errorClass(response.e);
	            cb(mkErr(errType, response, this._root));
	            break;
	          default:
	            this._responses.shift();
	            cb = this._getCallback();
	            cb(new err.ReqlDriverError("Unknown response type for cursor"));
	        }
	      }
	    }
	  };

	  IterableResult.prototype._promptCont = function() {
	    if ((!this._contFlag) && (!this._endFlag) && this._conn.isOpen()) {
	      this._contFlag = true;
	      this._outstandingRequests += 1;
	      return this._conn._continueQuery(this._token);
	    }
	  };

	  IterableResult.prototype.hasNext = function() {
	    throw new err.ReqlDriverError("The `hasNext` command has been removed since 1.13. Use `next` instead.");
	  };

	  IterableResult.prototype._next = varar(0, 1, function(cb) {
	    var fn, p;
	    fn = (function(_this) {
	      return function(cb) {
	        _this._cbQueue.push(cb);
	        return _this._promptNext();
	      };
	    })(this);
	    if (typeof cb === "function") {
	      return fn(cb);
	    } else if (cb === void 0) {
	      p = new Promise(function(resolve, reject) {
	        cb = function(err, result) {
	          if (err) {
	            return reject(err);
	          } else {
	            return resolve(result);
	          }
	        };
	        return fn(cb);
	      });
	      return p;
	    } else {
	      throw new err.ReqlDriverError("First argument to `next` must be a function or undefined.");
	    }
	  });

	  IterableResult.prototype.close = varar(0, 1, function(cb) {
	    if (this._closeCbPromise != null) {
	      if (this._closeCbPromise.isPending()) {
	        this._closeCbPromise = this._closeCbPromise.nodeify(cb);
	      } else {
	        this._closeCbPromise = Promise.resolve().nodeify(cb);
	      }
	    } else {
	      if (this._endFlag) {
	        this._closeCbPromise = Promise.resolve().nodeify(cb);
	      } else {
	        this._closeCbPromise = new Promise((function(_this) {
	          return function(resolve, reject) {
	            _this._closeCb = function(err) {
	              while (_this._cbQueue.length > 0) {
	                _this._cbQueue.shift();
	              }
	              _this._outstandingRequests = 0;
	              if (err) {
	                return reject(err);
	              } else {
	                return resolve();
	              }
	            };
	            _this._closeAsap = true;
	            _this._outstandingRequests += 1;
	            return _this._conn._endQuery(_this._token);
	          };
	        })(this)).nodeify(cb);
	      }
	    }
	    return this._closeCbPromise;
	  });

	  IterableResult.prototype._each = varar(1, 2, function(cb, onFinished) {
	    var nextCb, self, stopFlag;
	    if (typeof cb !== 'function') {
	      throw new err.ReqlDriverError("First argument to each must be a function.");
	    }
	    if ((onFinished != null) && typeof onFinished !== 'function') {
	      throw new err.ReqlDriverError("Optional second argument to each must be a function.");
	    }
	    stopFlag = false;
	    self = this;
	    nextCb = (function(_this) {
	      return function(err, data) {
	        if (stopFlag !== true) {
	          if (err != null) {
	            if (err.message === 'No more rows in the cursor.') {
	              if (onFinished != null) {
	                return onFinished();
	              }
	            } else {
	              return cb(err);
	            }
	          } else {
	            stopFlag = cb(null, data) === false;
	            return _this._next(nextCb);
	          }
	        } else if (onFinished != null) {
	          return onFinished();
	        }
	      };
	    })(this);
	    return this._next(nextCb);
	  });

	  IterableResult.prototype.toArray = varar(0, 1, function(cb) {
	    var fn;
	    fn = (function(_this) {
	      return function(cb) {
	        var arr, eachCb, onFinish;
	        arr = [];
	        eachCb = function(err, row) {
	          if (err != null) {
	            return cb(err);
	          } else {
	            return arr.push(row);
	          }
	        };
	        onFinish = function(err, ar) {
	          return cb(null, arr);
	        };
	        return _this.each(eachCb, onFinish);
	      };
	    })(this);
	    if ((cb != null) && typeof cb !== 'function') {
	      throw new err.ReqlDriverError("First argument to `toArray` must be a function or undefined.");
	    }
	    return new Promise((function(_this) {
	      return function(resolve, reject) {
	        var toArrayCb;
	        toArrayCb = function(err, result) {
	          if (err != null) {
	            return reject(err);
	          } else {
	            return resolve(result);
	          }
	        };
	        return fn(toArrayCb);
	      };
	    })(this)).nodeify(cb);
	  });

	  IterableResult.prototype._makeEmitter = function() {
	    this.emitter = new EventEmitter;
	    this.each = function() {
	      throw new err.ReqlDriverError("You cannot use the cursor interface and the EventEmitter interface at the same time.");
	    };
	    return this.next = function() {
	      throw new err.ReqlDriverError("You cannot use the cursor interface and the EventEmitter interface at the same time.");
	    };
	  };

	  IterableResult.prototype.addListener = function(event, listener) {
	    if (this.emitter == null) {
	      this._makeEmitter();
	      setImmediate((function(_this) {
	        return function() {
	          return _this._each(_this._eachCb);
	        };
	      })(this));
	    }
	    return this.emitter.addListener(event, listener);
	  };

	  IterableResult.prototype.on = function(event, listener) {
	    if (this.emitter == null) {
	      this._makeEmitter();
	      setImmediate((function(_this) {
	        return function() {
	          return _this._each(_this._eachCb);
	        };
	      })(this));
	    }
	    return this.emitter.on(event, listener);
	  };

	  IterableResult.prototype.once = function(event, listener) {
	    if (this.emitter == null) {
	      this._makeEmitter();
	      setImmediate((function(_this) {
	        return function() {
	          return _this._each(_this._eachCb);
	        };
	      })(this));
	    }
	    return this.emitter.once(event, listener);
	  };

	  IterableResult.prototype.removeListener = function(event, listener) {
	    if (this.emitter == null) {
	      this._makeEmitter();
	      setImmediate((function(_this) {
	        return function() {
	          return _this._each(_this._eachCb);
	        };
	      })(this));
	    }
	    return this.emitter.removeListener(event, listener);
	  };

	  IterableResult.prototype.removeAllListeners = function(event) {
	    if (this.emitter == null) {
	      this._makeEmitter();
	      setImmediate((function(_this) {
	        return function() {
	          return _this._each(_this._eachCb);
	        };
	      })(this));
	    }
	    return this.emitter.removeAllListeners(event);
	  };

	  IterableResult.prototype.setMaxListeners = function(n) {
	    if (this.emitter == null) {
	      this._makeEmitter();
	      setImmediate((function(_this) {
	        return function() {
	          return _this._each(_this._eachCb);
	        };
	      })(this));
	    }
	    return this.emitter.setMaxListeners(n);
	  };

	  IterableResult.prototype.listeners = function(event) {
	    if (this.emitter == null) {
	      this._makeEmitter();
	      setImmediate((function(_this) {
	        return function() {
	          return _this._each(_this._eachCb);
	        };
	      })(this));
	    }
	    return this.emitter.listeners(event);
	  };

	  IterableResult.prototype.emit = function() {
	    var args, _ref;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    if (this.emitter == null) {
	      this._makeEmitter();
	      setImmediate((function(_this) {
	        return function() {
	          return _this._each(_this._eachCb);
	        };
	      })(this));
	    }
	    return (_ref = this.emitter).emit.apply(_ref, args);
	  };

	  IterableResult.prototype._eachCb = function(err, data) {
	    if (err != null) {
	      return this.emitter.emit('error', err);
	    } else {
	      return this.emitter.emit('data', data);
	    }
	  };

	  return IterableResult;

	})();

	Cursor = (function(_super) {
	  __extends(Cursor, _super);

	  function Cursor() {
	    this._type = protoResponseType.SUCCESS_PARTIAL;
	    Cursor.__super__.constructor.apply(this, arguments);
	  }

	  Cursor.prototype.toString = ar(function() {
	    return "[object Cursor]";
	  });

	  return Cursor;

	})(IterableResult);

	Feed = (function(_super) {
	  __extends(Feed, _super);

	  function Feed() {
	    this._type = protoResponseType.SUCCESS_PARTIAL;
	    Feed.__super__.constructor.apply(this, arguments);
	  }

	  Feed.prototype.hasNext = function() {
	    throw new err.ReqlDriverError("`hasNext` is not available for feeds.");
	  };

	  Feed.prototype.toArray = function() {
	    throw new err.ReqlDriverError("`toArray` is not available for feeds.");
	  };

	  Feed.prototype.toString = ar(function() {
	    return "[object Feed]";
	  });

	  return Feed;

	})(IterableResult);

	UnionedFeed = (function(_super) {
	  __extends(UnionedFeed, _super);

	  function UnionedFeed() {
	    this._type = protoResponseType.SUCCESS_PARTIAL;
	    UnionedFeed.__super__.constructor.apply(this, arguments);
	  }

	  UnionedFeed.prototype.hasNext = function() {
	    throw new err.ReqlDriverError("`hasNext` is not available for feeds.");
	  };

	  UnionedFeed.prototype.toArray = function() {
	    throw new err.ReqlDriverError("`toArray` is not available for feeds.");
	  };

	  UnionedFeed.prototype.toString = ar(function() {
	    return "[object UnionedFeed]";
	  });

	  return UnionedFeed;

	})(IterableResult);

	AtomFeed = (function(_super) {
	  __extends(AtomFeed, _super);

	  function AtomFeed() {
	    this._type = protoResponseType.SUCCESS_PARTIAL;
	    AtomFeed.__super__.constructor.apply(this, arguments);
	  }

	  AtomFeed.prototype.hasNext = function() {
	    throw new err.ReqlDriverError("`hasNext` is not available for feeds.");
	  };

	  AtomFeed.prototype.toArray = function() {
	    throw new err.ReqlDriverError("`toArray` is not available for feeds.");
	  };

	  AtomFeed.prototype.toString = ar(function() {
	    return "[object AtomFeed]";
	  });

	  return AtomFeed;

	})(IterableResult);

	OrderByLimitFeed = (function(_super) {
	  __extends(OrderByLimitFeed, _super);

	  function OrderByLimitFeed() {
	    this._type = protoResponseType.SUCCESS_PARTIAL;
	    OrderByLimitFeed.__super__.constructor.apply(this, arguments);
	  }

	  OrderByLimitFeed.prototype.hasNext = function() {
	    throw new err.ReqlDriverError("`hasNext` is not available for feeds.");
	  };

	  OrderByLimitFeed.prototype.toArray = function() {
	    throw new err.ReqlDriverError("`toArray` is not available for feeds.");
	  };

	  OrderByLimitFeed.prototype.toString = ar(function() {
	    return "[object OrderByLimitFeed]";
	  });

	  return OrderByLimitFeed;

	})(IterableResult);

	ArrayResult = (function(_super) {
	  __extends(ArrayResult, _super);

	  function ArrayResult() {
	    return ArrayResult.__super__.constructor.apply(this, arguments);
	  }

	  ArrayResult.prototype._hasNext = ar(function() {
	    if (this.__index == null) {
	      this.__index = 0;
	    }
	    return this.__index < this.length;
	  });

	  ArrayResult.prototype._next = varar(0, 1, function(cb) {
	    var fn;
	    fn = (function(_this) {
	      return function(cb) {
	        var self;
	        if (_this._hasNext() === true) {
	          self = _this;
	          if (self.__index % _this.stackSize === _this.stackSize - 1) {
	            return setImmediate(function() {
	              return cb(null, self[self.__index++]);
	            });
	          } else {
	            return cb(null, self[self.__index++]);
	          }
	        } else {
	          return cb(new err.ReqlDriverError("No more rows in the cursor."));
	        }
	      };
	    })(this);
	    return new Promise(function(resolve, reject) {
	      var nextCb;
	      nextCb = function(err, result) {
	        if (err) {
	          return reject(err);
	        } else {
	          return resolve(result);
	        }
	      };
	      return fn(nextCb);
	    }).nodeify(cb);
	  });

	  ArrayResult.prototype.toArray = varar(0, 1, function(cb) {
	    var fn;
	    fn = (function(_this) {
	      return function(cb) {
	        if (_this.__index != null) {
	          return cb(null, _this.slice(_this.__index, _this.length));
	        } else {
	          return cb(null, _this);
	        }
	      };
	    })(this);
	    return new Promise(function(resolve, reject) {
	      var toArrayCb;
	      toArrayCb = function(err, result) {
	        if (err) {
	          return reject(err);
	        } else {
	          return resolve(result);
	        }
	      };
	      return fn(toArrayCb);
	    }).nodeify(cb);
	  });

	  ArrayResult.prototype.close = function() {
	    return this;
	  };

	  ArrayResult.prototype.makeIterable = function(response) {
	    var method, name, _ref;
	    response.__proto__ = {};
	    _ref = ArrayResult.prototype;
	    for (name in _ref) {
	      method = _ref[name];
	      if (name !== 'constructor') {
	        if (name === '_each') {
	          response.__proto__['each'] = method;
	          response.__proto__['_each'] = method;
	        } else if (name === '_next') {
	          response.__proto__['next'] = method;
	          response.__proto__['_next'] = method;
	        } else {
	          response.__proto__[name] = method;
	        }
	      }
	    }
	    response.__proto__.__proto__ = [].__proto__;
	    return response;
	  };

	  return ArrayResult;

	})(IterableResult);

	module.exports.Cursor = Cursor;

	module.exports.Feed = Feed;

	module.exports.AtomFeed = AtomFeed;

	module.exports.OrderByLimitFeed = OrderByLimitFeed;

	module.exports.makeIterable = ArrayResult.prototype.makeIterable;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var old;
	if (typeof Promise !== "undefined") old = Promise;
	function noConflict() {
	    try { if (Promise === bluebird) Promise = old; }
	    catch (e) {}
	    return bluebird;
	}
	var bluebird = __webpack_require__(15)();
	bluebird.noConflict = noConflict;
	module.exports = bluebird;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function() {
	var makeSelfResolutionError = function () {
	    return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/LhFpo0\u000a");
	};
	var reflect = function() {
	    return new Promise.PromiseInspection(this._target());
	};
	var apiRejection = function(msg) {
	    return Promise.reject(new TypeError(msg));
	};

	var util = __webpack_require__(16);

	var getDomain;
	if (util.isNode) {
	    getDomain = function() {
	        var ret = process.domain;
	        if (ret === undefined) ret = null;
	        return ret;
	    };
	} else {
	    getDomain = function() {
	        return null;
	    };
	}
	util.notEnumerableProp(Promise, "_getDomain", getDomain);

	var UNDEFINED_BINDING = {};
	var async = __webpack_require__(18);
	var errors = __webpack_require__(21);
	var TypeError = Promise.TypeError = errors.TypeError;
	Promise.RangeError = errors.RangeError;
	Promise.CancellationError = errors.CancellationError;
	Promise.TimeoutError = errors.TimeoutError;
	Promise.OperationalError = errors.OperationalError;
	Promise.RejectionError = errors.OperationalError;
	Promise.AggregateError = errors.AggregateError;
	var INTERNAL = function(){};
	var APPLY = {};
	var NEXT_FILTER = {e: null};
	var tryConvertToPromise = __webpack_require__(22)(Promise, INTERNAL);
	var PromiseArray =
	    __webpack_require__(23)(Promise, INTERNAL,
	                                    tryConvertToPromise, apiRejection);
	var CapturedTrace = __webpack_require__(24)();
	var isDebugging = __webpack_require__(25)(Promise, CapturedTrace);
	 /*jshint unused:false*/
	var createContext =
	    __webpack_require__(26)(Promise, CapturedTrace, isDebugging);
	var CatchFilter = __webpack_require__(27)(NEXT_FILTER);
	var PromiseResolver = __webpack_require__(28);
	var nodebackForPromise = PromiseResolver._nodebackForPromise;
	var errorObj = util.errorObj;
	var tryCatch = util.tryCatch;
	function Promise(resolver) {
	    if (typeof resolver !== "function") {
	        throw new TypeError("the promise constructor requires a resolver function\u000a\u000a    See http://goo.gl/EC22Yn\u000a");
	    }
	    if (this.constructor !== Promise) {
	        throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/KsIlge\u000a");
	    }
	    this._bitField = 0;
	    this._fulfillmentHandler0 = undefined;
	    this._rejectionHandler0 = undefined;
	    this._progressHandler0 = undefined;
	    this._promise0 = undefined;
	    this._receiver0 = undefined;
	    this._settledValue = undefined;
	    if (resolver !== INTERNAL) this._resolveFromResolver(resolver);
	}

	Promise.prototype.toString = function () {
	    return "[object Promise]";
	};

	Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
	    var len = arguments.length;
	    if (len > 1) {
	        var catchInstances = new Array(len - 1),
	            j = 0, i;
	        for (i = 0; i < len - 1; ++i) {
	            var item = arguments[i];
	            if (typeof item === "function") {
	                catchInstances[j++] = item;
	            } else {
	                return Promise.reject(
	                    new TypeError("Catch filter must inherit from Error or be a simple predicate function\u000a\u000a    See http://goo.gl/o84o68\u000a"));
	            }
	        }
	        catchInstances.length = j;
	        fn = arguments[i];
	        var catchFilter = new CatchFilter(catchInstances, fn, this);
	        return this._then(undefined, catchFilter.doFilter, undefined,
	            catchFilter, undefined);
	    }
	    return this._then(undefined, fn, undefined, undefined, undefined);
	};

	Promise.prototype.reflect = function () {
	    return this._then(reflect, reflect, undefined, this, undefined);
	};

	Promise.prototype.then = function (didFulfill, didReject, didProgress) {
	    if (isDebugging() && arguments.length > 0 &&
	        typeof didFulfill !== "function" &&
	        typeof didReject !== "function") {
	        var msg = ".then() only accepts functions but was passed: " +
	                util.classString(didFulfill);
	        if (arguments.length > 1) {
	            msg += ", " + util.classString(didReject);
	        }
	        this._warn(msg);
	    }
	    return this._then(didFulfill, didReject, didProgress,
	        undefined, undefined);
	};

	Promise.prototype.done = function (didFulfill, didReject, didProgress) {
	    var promise = this._then(didFulfill, didReject, didProgress,
	        undefined, undefined);
	    promise._setIsFinal();
	};

	Promise.prototype.spread = function (didFulfill, didReject) {
	    return this.all()._then(didFulfill, didReject, undefined, APPLY, undefined);
	};

	Promise.prototype.isCancellable = function () {
	    return !this.isResolved() &&
	        this._cancellable();
	};

	Promise.prototype.toJSON = function () {
	    var ret = {
	        isFulfilled: false,
	        isRejected: false,
	        fulfillmentValue: undefined,
	        rejectionReason: undefined
	    };
	    if (this.isFulfilled()) {
	        ret.fulfillmentValue = this.value();
	        ret.isFulfilled = true;
	    } else if (this.isRejected()) {
	        ret.rejectionReason = this.reason();
	        ret.isRejected = true;
	    }
	    return ret;
	};

	Promise.prototype.all = function () {
	    return new PromiseArray(this).promise();
	};

	Promise.prototype.error = function (fn) {
	    return this.caught(util.originatesFromRejection, fn);
	};

	Promise.is = function (val) {
	    return val instanceof Promise;
	};

	Promise.fromNode = function(fn) {
	    var ret = new Promise(INTERNAL);
	    var result = tryCatch(fn)(nodebackForPromise(ret));
	    if (result === errorObj) {
	        ret._rejectCallback(result.e, true, true);
	    }
	    return ret;
	};

	Promise.all = function (promises) {
	    return new PromiseArray(promises).promise();
	};

	Promise.defer = Promise.pending = function () {
	    var promise = new Promise(INTERNAL);
	    return new PromiseResolver(promise);
	};

	Promise.cast = function (obj) {
	    var ret = tryConvertToPromise(obj);
	    if (!(ret instanceof Promise)) {
	        var val = ret;
	        ret = new Promise(INTERNAL);
	        ret._fulfillUnchecked(val);
	    }
	    return ret;
	};

	Promise.resolve = Promise.fulfilled = Promise.cast;

	Promise.reject = Promise.rejected = function (reason) {
	    var ret = new Promise(INTERNAL);
	    ret._captureStackTrace();
	    ret._rejectCallback(reason, true);
	    return ret;
	};

	Promise.setScheduler = function(fn) {
	    if (typeof fn !== "function") throw new TypeError("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
	    var prev = async._schedule;
	    async._schedule = fn;
	    return prev;
	};

	Promise.prototype._then = function (
	    didFulfill,
	    didReject,
	    didProgress,
	    receiver,
	    internalData
	) {
	    var haveInternalData = internalData !== undefined;
	    var ret = haveInternalData ? internalData : new Promise(INTERNAL);

	    if (!haveInternalData) {
	        ret._propagateFrom(this, 4 | 1);
	        ret._captureStackTrace();
	    }

	    var target = this._target();
	    if (target !== this) {
	        if (receiver === undefined) receiver = this._boundTo;
	        if (!haveInternalData) ret._setIsMigrated();
	    }

	    var callbackIndex = target._addCallbacks(didFulfill,
	                                             didReject,
	                                             didProgress,
	                                             ret,
	                                             receiver,
	                                             getDomain());

	    if (target._isResolved() && !target._isSettlePromisesQueued()) {
	        async.invoke(
	            target._settlePromiseAtPostResolution, target, callbackIndex);
	    }

	    return ret;
	};

	Promise.prototype._settlePromiseAtPostResolution = function (index) {
	    if (this._isRejectionUnhandled()) this._unsetRejectionIsUnhandled();
	    this._settlePromiseAt(index);
	};

	Promise.prototype._length = function () {
	    return this._bitField & 131071;
	};

	Promise.prototype._isFollowingOrFulfilledOrRejected = function () {
	    return (this._bitField & 939524096) > 0;
	};

	Promise.prototype._isFollowing = function () {
	    return (this._bitField & 536870912) === 536870912;
	};

	Promise.prototype._setLength = function (len) {
	    this._bitField = (this._bitField & -131072) |
	        (len & 131071);
	};

	Promise.prototype._setFulfilled = function () {
	    this._bitField = this._bitField | 268435456;
	};

	Promise.prototype._setRejected = function () {
	    this._bitField = this._bitField | 134217728;
	};

	Promise.prototype._setFollowing = function () {
	    this._bitField = this._bitField | 536870912;
	};

	Promise.prototype._setIsFinal = function () {
	    this._bitField = this._bitField | 33554432;
	};

	Promise.prototype._isFinal = function () {
	    return (this._bitField & 33554432) > 0;
	};

	Promise.prototype._cancellable = function () {
	    return (this._bitField & 67108864) > 0;
	};

	Promise.prototype._setCancellable = function () {
	    this._bitField = this._bitField | 67108864;
	};

	Promise.prototype._unsetCancellable = function () {
	    this._bitField = this._bitField & (~67108864);
	};

	Promise.prototype._setIsMigrated = function () {
	    this._bitField = this._bitField | 4194304;
	};

	Promise.prototype._unsetIsMigrated = function () {
	    this._bitField = this._bitField & (~4194304);
	};

	Promise.prototype._isMigrated = function () {
	    return (this._bitField & 4194304) > 0;
	};

	Promise.prototype._receiverAt = function (index) {
	    var ret = index === 0
	        ? this._receiver0
	        : this[
	            index * 5 - 5 + 4];
	    if (ret === UNDEFINED_BINDING) {
	        return undefined;
	    } else if (ret === undefined && this._isBound()) {
	        return this._boundValue();
	    }
	    return ret;
	};

	Promise.prototype._promiseAt = function (index) {
	    return index === 0
	        ? this._promise0
	        : this[index * 5 - 5 + 3];
	};

	Promise.prototype._fulfillmentHandlerAt = function (index) {
	    return index === 0
	        ? this._fulfillmentHandler0
	        : this[index * 5 - 5 + 0];
	};

	Promise.prototype._rejectionHandlerAt = function (index) {
	    return index === 0
	        ? this._rejectionHandler0
	        : this[index * 5 - 5 + 1];
	};

	Promise.prototype._boundValue = function() {
	    var ret = this._boundTo;
	    if (ret !== undefined) {
	        if (ret instanceof Promise) {
	            if (ret.isFulfilled()) {
	                return ret.value();
	            } else {
	                return undefined;
	            }
	        }
	    }
	    return ret;
	};

	Promise.prototype._migrateCallbacks = function (follower, index) {
	    var fulfill = follower._fulfillmentHandlerAt(index);
	    var reject = follower._rejectionHandlerAt(index);
	    var progress = follower._progressHandlerAt(index);
	    var promise = follower._promiseAt(index);
	    var receiver = follower._receiverAt(index);
	    if (promise instanceof Promise) promise._setIsMigrated();
	    if (receiver === undefined) receiver = UNDEFINED_BINDING;
	    this._addCallbacks(fulfill, reject, progress, promise, receiver, null);
	};

	Promise.prototype._addCallbacks = function (
	    fulfill,
	    reject,
	    progress,
	    promise,
	    receiver,
	    domain
	) {
	    var index = this._length();

	    if (index >= 131071 - 5) {
	        index = 0;
	        this._setLength(0);
	    }

	    if (index === 0) {
	        this._promise0 = promise;
	        if (receiver !== undefined) this._receiver0 = receiver;
	        if (typeof fulfill === "function" && !this._isCarryingStackTrace()) {
	            this._fulfillmentHandler0 =
	                domain === null ? fulfill : domain.bind(fulfill);
	        }
	        if (typeof reject === "function") {
	            this._rejectionHandler0 =
	                domain === null ? reject : domain.bind(reject);
	        }
	        if (typeof progress === "function") {
	            this._progressHandler0 =
	                domain === null ? progress : domain.bind(progress);
	        }
	    } else {
	        var base = index * 5 - 5;
	        this[base + 3] = promise;
	        this[base + 4] = receiver;
	        if (typeof fulfill === "function") {
	            this[base + 0] =
	                domain === null ? fulfill : domain.bind(fulfill);
	        }
	        if (typeof reject === "function") {
	            this[base + 1] =
	                domain === null ? reject : domain.bind(reject);
	        }
	        if (typeof progress === "function") {
	            this[base + 2] =
	                domain === null ? progress : domain.bind(progress);
	        }
	    }
	    this._setLength(index + 1);
	    return index;
	};

	Promise.prototype._setProxyHandlers = function (receiver, promiseSlotValue) {
	    var index = this._length();

	    if (index >= 131071 - 5) {
	        index = 0;
	        this._setLength(0);
	    }
	    if (index === 0) {
	        this._promise0 = promiseSlotValue;
	        this._receiver0 = receiver;
	    } else {
	        var base = index * 5 - 5;
	        this[base + 3] = promiseSlotValue;
	        this[base + 4] = receiver;
	    }
	    this._setLength(index + 1);
	};

	Promise.prototype._proxyPromiseArray = function (promiseArray, index) {
	    this._setProxyHandlers(promiseArray, index);
	};

	Promise.prototype._resolveCallback = function(value, shouldBind) {
	    if (this._isFollowingOrFulfilledOrRejected()) return;
	    if (value === this)
	        return this._rejectCallback(makeSelfResolutionError(), false, true);
	    var maybePromise = tryConvertToPromise(value, this);
	    if (!(maybePromise instanceof Promise)) return this._fulfill(value);

	    var propagationFlags = 1 | (shouldBind ? 4 : 0);
	    this._propagateFrom(maybePromise, propagationFlags);
	    var promise = maybePromise._target();
	    if (promise._isPending()) {
	        var len = this._length();
	        for (var i = 0; i < len; ++i) {
	            promise._migrateCallbacks(this, i);
	        }
	        this._setFollowing();
	        this._setLength(0);
	        this._setFollowee(promise);
	    } else if (promise._isFulfilled()) {
	        this._fulfillUnchecked(promise._value());
	    } else {
	        this._rejectUnchecked(promise._reason(),
	            promise._getCarriedStackTrace());
	    }
	};

	Promise.prototype._rejectCallback =
	function(reason, synchronous, shouldNotMarkOriginatingFromRejection) {
	    if (!shouldNotMarkOriginatingFromRejection) {
	        util.markAsOriginatingFromRejection(reason);
	    }
	    var trace = util.ensureErrorObject(reason);
	    var hasStack = trace === reason;
	    this._attachExtraTrace(trace, synchronous ? hasStack : false);
	    this._reject(reason, hasStack ? undefined : trace);
	};

	Promise.prototype._resolveFromResolver = function (resolver) {
	    var promise = this;
	    this._captureStackTrace();
	    this._pushContext();
	    var synchronous = true;
	    var r = tryCatch(resolver)(function(value) {
	        if (promise === null) return;
	        promise._resolveCallback(value);
	        promise = null;
	    }, function (reason) {
	        if (promise === null) return;
	        promise._rejectCallback(reason, synchronous);
	        promise = null;
	    });
	    synchronous = false;
	    this._popContext();

	    if (r !== undefined && r === errorObj && promise !== null) {
	        promise._rejectCallback(r.e, true, true);
	        promise = null;
	    }
	};

	Promise.prototype._settlePromiseFromHandler = function (
	    handler, receiver, value, promise
	) {
	    if (promise._isRejected()) return;
	    promise._pushContext();
	    var x;
	    if (receiver === APPLY && !this._isRejected()) {
	        x = tryCatch(handler).apply(this._boundValue(), value);
	    } else {
	        x = tryCatch(handler).call(receiver, value);
	    }
	    promise._popContext();

	    if (x === errorObj || x === promise || x === NEXT_FILTER) {
	        var err = x === promise ? makeSelfResolutionError() : x.e;
	        promise._rejectCallback(err, false, true);
	    } else {
	        promise._resolveCallback(x);
	    }
	};

	Promise.prototype._target = function() {
	    var ret = this;
	    while (ret._isFollowing()) ret = ret._followee();
	    return ret;
	};

	Promise.prototype._followee = function() {
	    return this._rejectionHandler0;
	};

	Promise.prototype._setFollowee = function(promise) {
	    this._rejectionHandler0 = promise;
	};

	Promise.prototype._cleanValues = function () {
	    if (this._cancellable()) {
	        this._cancellationParent = undefined;
	    }
	};

	Promise.prototype._propagateFrom = function (parent, flags) {
	    if ((flags & 1) > 0 && parent._cancellable()) {
	        this._setCancellable();
	        this._cancellationParent = parent;
	    }
	    if ((flags & 4) > 0 && parent._isBound()) {
	        this._setBoundTo(parent._boundTo);
	    }
	};

	Promise.prototype._fulfill = function (value) {
	    if (this._isFollowingOrFulfilledOrRejected()) return;
	    this._fulfillUnchecked(value);
	};

	Promise.prototype._reject = function (reason, carriedStackTrace) {
	    if (this._isFollowingOrFulfilledOrRejected()) return;
	    this._rejectUnchecked(reason, carriedStackTrace);
	};

	Promise.prototype._settlePromiseAt = function (index) {
	    var promise = this._promiseAt(index);
	    var isPromise = promise instanceof Promise;

	    if (isPromise && promise._isMigrated()) {
	        promise._unsetIsMigrated();
	        return async.invoke(this._settlePromiseAt, this, index);
	    }
	    var handler = this._isFulfilled()
	        ? this._fulfillmentHandlerAt(index)
	        : this._rejectionHandlerAt(index);

	    var carriedStackTrace =
	        this._isCarryingStackTrace() ? this._getCarriedStackTrace() : undefined;
	    var value = this._settledValue;
	    var receiver = this._receiverAt(index);
	    this._clearCallbackDataAtIndex(index);

	    if (typeof handler === "function") {
	        if (!isPromise) {
	            handler.call(receiver, value, promise);
	        } else {
	            this._settlePromiseFromHandler(handler, receiver, value, promise);
	        }
	    } else if (receiver instanceof PromiseArray) {
	        if (!receiver._isResolved()) {
	            if (this._isFulfilled()) {
	                receiver._promiseFulfilled(value, promise);
	            }
	            else {
	                receiver._promiseRejected(value, promise);
	            }
	        }
	    } else if (isPromise) {
	        if (this._isFulfilled()) {
	            promise._fulfill(value);
	        } else {
	            promise._reject(value, carriedStackTrace);
	        }
	    }

	    if (index >= 4 && (index & 31) === 4)
	        async.invokeLater(this._setLength, this, 0);
	};

	Promise.prototype._clearCallbackDataAtIndex = function(index) {
	    if (index === 0) {
	        if (!this._isCarryingStackTrace()) {
	            this._fulfillmentHandler0 = undefined;
	        }
	        this._rejectionHandler0 =
	        this._progressHandler0 =
	        this._receiver0 =
	        this._promise0 = undefined;
	    } else {
	        var base = index * 5 - 5;
	        this[base + 3] =
	        this[base + 4] =
	        this[base + 0] =
	        this[base + 1] =
	        this[base + 2] = undefined;
	    }
	};

	Promise.prototype._isSettlePromisesQueued = function () {
	    return (this._bitField &
	            -1073741824) === -1073741824;
	};

	Promise.prototype._setSettlePromisesQueued = function () {
	    this._bitField = this._bitField | -1073741824;
	};

	Promise.prototype._unsetSettlePromisesQueued = function () {
	    this._bitField = this._bitField & (~-1073741824);
	};

	Promise.prototype._queueSettlePromises = function() {
	    async.settlePromises(this);
	    this._setSettlePromisesQueued();
	};

	Promise.prototype._fulfillUnchecked = function (value) {
	    if (value === this) {
	        var err = makeSelfResolutionError();
	        this._attachExtraTrace(err);
	        return this._rejectUnchecked(err, undefined);
	    }
	    this._setFulfilled();
	    this._settledValue = value;
	    this._cleanValues();

	    if (this._length() > 0) {
	        this._queueSettlePromises();
	    }
	};

	Promise.prototype._rejectUncheckedCheckError = function (reason) {
	    var trace = util.ensureErrorObject(reason);
	    this._rejectUnchecked(reason, trace === reason ? undefined : trace);
	};

	Promise.prototype._rejectUnchecked = function (reason, trace) {
	    if (reason === this) {
	        var err = makeSelfResolutionError();
	        this._attachExtraTrace(err);
	        return this._rejectUnchecked(err);
	    }
	    this._setRejected();
	    this._settledValue = reason;
	    this._cleanValues();

	    if (this._isFinal()) {
	        async.throwLater(function(e) {
	            if ("stack" in e) {
	                async.invokeFirst(
	                    CapturedTrace.unhandledRejection, undefined, e);
	            }
	            throw e;
	        }, trace === undefined ? reason : trace);
	        return;
	    }

	    if (trace !== undefined && trace !== reason) {
	        this._setCarriedStackTrace(trace);
	    }

	    if (this._length() > 0) {
	        this._queueSettlePromises();
	    } else {
	        this._ensurePossibleRejectionHandled();
	    }
	};

	Promise.prototype._settlePromises = function () {
	    this._unsetSettlePromisesQueued();
	    var len = this._length();
	    for (var i = 0; i < len; i++) {
	        this._settlePromiseAt(i);
	    }
	};

	util.notEnumerableProp(Promise,
	                       "_makeSelfResolutionError",
	                       makeSelfResolutionError);

	__webpack_require__(29)(Promise, PromiseArray);
	__webpack_require__(30)(Promise, INTERNAL, tryConvertToPromise, apiRejection);
	__webpack_require__(31)(Promise, INTERNAL, tryConvertToPromise);
	__webpack_require__(32)(Promise, NEXT_FILTER, tryConvertToPromise);
	__webpack_require__(33)(Promise);
	__webpack_require__(34)(Promise);
	__webpack_require__(35)(Promise, PromiseArray, tryConvertToPromise, INTERNAL);
	Promise.Promise = Promise;
	__webpack_require__(36)(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL);
	__webpack_require__(37)(Promise);
	__webpack_require__(38)(Promise, apiRejection, tryConvertToPromise, createContext);
	__webpack_require__(39)(Promise, apiRejection, INTERNAL, tryConvertToPromise);
	__webpack_require__(40)(Promise);
	__webpack_require__(41)(Promise);
	__webpack_require__(42)(Promise, PromiseArray, tryConvertToPromise, apiRejection);
	__webpack_require__(43)(Promise, INTERNAL, tryConvertToPromise, apiRejection);
	__webpack_require__(44)(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL);
	__webpack_require__(45)(Promise, PromiseArray);
	__webpack_require__(46)(Promise, PromiseArray, apiRejection);
	__webpack_require__(47)(Promise, INTERNAL);
	__webpack_require__(48)(Promise);
	__webpack_require__(49)(Promise, INTERNAL);
	__webpack_require__(50)(Promise, INTERNAL);
	__webpack_require__(51)(Promise, INTERNAL);
	                                                         
	    util.toFastProperties(Promise);                                          
	    util.toFastProperties(Promise.prototype);                                
	    function fillTypes(value) {                                              
	        var p = new Promise(INTERNAL);                                       
	        p._fulfillmentHandler0 = value;                                      
	        p._rejectionHandler0 = value;                                        
	        p._progressHandler0 = value;                                         
	        p._promise0 = value;                                                 
	        p._receiver0 = value;                                                
	        p._settledValue = value;                                             
	    }                                                                        
	    // Complete slack tracking, opt out of field-type tracking and           
	    // stabilize map                                                         
	    fillTypes({a: 1});                                                       
	    fillTypes({b: 2});                                                       
	    fillTypes({c: 3});                                                       
	    fillTypes(1);                                                            
	    fillTypes(function(){});                                                 
	    fillTypes(undefined);                                                    
	    fillTypes(false);                                                        
	    fillTypes(new Promise(INTERNAL));                                        
	    CapturedTrace.setBounds(async.firstLineError, util.lastLineError);       
	    return Promise;                                                          

	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var es5 = __webpack_require__(17);
	var canEvaluate = typeof navigator == "undefined";
	var haveGetters = (function(){
	    try {
	        var o = {};
	        es5.defineProperty(o, "f", {
	            get: function () {
	                return 3;
	            }
	        });
	        return o.f === 3;
	    }
	    catch (e) {
	        return false;
	    }

	})();

	var errorObj = {e: {}};
	var tryCatchTarget;
	function tryCatcher() {
	    try {
	        var target = tryCatchTarget;
	        tryCatchTarget = null;
	        return target.apply(this, arguments);
	    } catch (e) {
	        errorObj.e = e;
	        return errorObj;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}

	var inherits = function(Child, Parent) {
	    var hasProp = {}.hasOwnProperty;

	    function T() {
	        this.constructor = Child;
	        this.constructor$ = Parent;
	        for (var propertyName in Parent.prototype) {
	            if (hasProp.call(Parent.prototype, propertyName) &&
	                propertyName.charAt(propertyName.length-1) !== "$"
	           ) {
	                this[propertyName + "$"] = Parent.prototype[propertyName];
	            }
	        }
	    }
	    T.prototype = Parent.prototype;
	    Child.prototype = new T();
	    return Child.prototype;
	};


	function isPrimitive(val) {
	    return val == null || val === true || val === false ||
	        typeof val === "string" || typeof val === "number";

	}

	function isObject(value) {
	    return !isPrimitive(value);
	}

	function maybeWrapAsError(maybeError) {
	    if (!isPrimitive(maybeError)) return maybeError;

	    return new Error(safeToString(maybeError));
	}

	function withAppended(target, appendee) {
	    var len = target.length;
	    var ret = new Array(len + 1);
	    var i;
	    for (i = 0; i < len; ++i) {
	        ret[i] = target[i];
	    }
	    ret[i] = appendee;
	    return ret;
	}

	function getDataPropertyOrDefault(obj, key, defaultValue) {
	    if (es5.isES5) {
	        var desc = Object.getOwnPropertyDescriptor(obj, key);

	        if (desc != null) {
	            return desc.get == null && desc.set == null
	                    ? desc.value
	                    : defaultValue;
	        }
	    } else {
	        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
	    }
	}

	function notEnumerableProp(obj, name, value) {
	    if (isPrimitive(obj)) return obj;
	    var descriptor = {
	        value: value,
	        configurable: true,
	        enumerable: false,
	        writable: true
	    };
	    es5.defineProperty(obj, name, descriptor);
	    return obj;
	}

	function thrower(r) {
	    throw r;
	}

	var inheritedDataKeys = (function() {
	    var excludedPrototypes = [
	        Array.prototype,
	        Object.prototype,
	        Function.prototype
	    ];

	    var isExcludedProto = function(val) {
	        for (var i = 0; i < excludedPrototypes.length; ++i) {
	            if (excludedPrototypes[i] === val) {
	                return true;
	            }
	        }
	        return false;
	    };

	    if (es5.isES5) {
	        var getKeys = Object.getOwnPropertyNames;
	        return function(obj) {
	            var ret = [];
	            var visitedKeys = Object.create(null);
	            while (obj != null && !isExcludedProto(obj)) {
	                var keys;
	                try {
	                    keys = getKeys(obj);
	                } catch (e) {
	                    return ret;
	                }
	                for (var i = 0; i < keys.length; ++i) {
	                    var key = keys[i];
	                    if (visitedKeys[key]) continue;
	                    visitedKeys[key] = true;
	                    var desc = Object.getOwnPropertyDescriptor(obj, key);
	                    if (desc != null && desc.get == null && desc.set == null) {
	                        ret.push(key);
	                    }
	                }
	                obj = es5.getPrototypeOf(obj);
	            }
	            return ret;
	        };
	    } else {
	        var hasProp = {}.hasOwnProperty;
	        return function(obj) {
	            if (isExcludedProto(obj)) return [];
	            var ret = [];

	            /*jshint forin:false */
	            enumeration: for (var key in obj) {
	                if (hasProp.call(obj, key)) {
	                    ret.push(key);
	                } else {
	                    for (var i = 0; i < excludedPrototypes.length; ++i) {
	                        if (hasProp.call(excludedPrototypes[i], key)) {
	                            continue enumeration;
	                        }
	                    }
	                    ret.push(key);
	                }
	            }
	            return ret;
	        };
	    }

	})();

	var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
	function isClass(fn) {
	    try {
	        if (typeof fn === "function") {
	            var keys = es5.names(fn.prototype);

	            var hasMethods = es5.isES5 && keys.length > 1;
	            var hasMethodsOtherThanConstructor = keys.length > 0 &&
	                !(keys.length === 1 && keys[0] === "constructor");
	            var hasThisAssignmentAndStaticMethods =
	                thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

	            if (hasMethods || hasMethodsOtherThanConstructor ||
	                hasThisAssignmentAndStaticMethods) {
	                return true;
	            }
	        }
	        return false;
	    } catch (e) {
	        return false;
	    }
	}

	function toFastProperties(obj) {
	    /*jshint -W027,-W055,-W031*/
	    function f() {}
	    f.prototype = obj;
	    var l = 8;
	    while (l--) new f();
	    return obj;
	    eval(obj);
	}

	var rident = /^[a-z$_][a-z$_0-9]*$/i;
	function isIdentifier(str) {
	    return rident.test(str);
	}

	function filledRange(count, prefix, suffix) {
	    var ret = new Array(count);
	    for(var i = 0; i < count; ++i) {
	        ret[i] = prefix + i + suffix;
	    }
	    return ret;
	}

	function safeToString(obj) {
	    try {
	        return obj + "";
	    } catch (e) {
	        return "[no string representation]";
	    }
	}

	function markAsOriginatingFromRejection(e) {
	    try {
	        notEnumerableProp(e, "isOperational", true);
	    }
	    catch(ignore) {}
	}

	function originatesFromRejection(e) {
	    if (e == null) return false;
	    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
	        e["isOperational"] === true);
	}

	function canAttachTrace(obj) {
	    return obj instanceof Error && es5.propertyIsWritable(obj, "stack");
	}

	var ensureErrorObject = (function() {
	    if (!("stack" in new Error())) {
	        return function(value) {
	            if (canAttachTrace(value)) return value;
	            try {throw new Error(safeToString(value));}
	            catch(err) {return err;}
	        };
	    } else {
	        return function(value) {
	            if (canAttachTrace(value)) return value;
	            return new Error(safeToString(value));
	        };
	    }
	})();

	function classString(obj) {
	    return {}.toString.call(obj);
	}

	function copyDescriptors(from, to, filter) {
	    var keys = es5.names(from);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        if (filter(key)) {
	            try {
	                es5.defineProperty(to, key, es5.getDescriptor(from, key));
	            } catch (ignore) {}
	        }
	    }
	}

	var ret = {
	    isClass: isClass,
	    isIdentifier: isIdentifier,
	    inheritedDataKeys: inheritedDataKeys,
	    getDataPropertyOrDefault: getDataPropertyOrDefault,
	    thrower: thrower,
	    isArray: es5.isArray,
	    haveGetters: haveGetters,
	    notEnumerableProp: notEnumerableProp,
	    isPrimitive: isPrimitive,
	    isObject: isObject,
	    canEvaluate: canEvaluate,
	    errorObj: errorObj,
	    tryCatch: tryCatch,
	    inherits: inherits,
	    withAppended: withAppended,
	    maybeWrapAsError: maybeWrapAsError,
	    toFastProperties: toFastProperties,
	    filledRange: filledRange,
	    toString: safeToString,
	    canAttachTrace: canAttachTrace,
	    ensureErrorObject: ensureErrorObject,
	    originatesFromRejection: originatesFromRejection,
	    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
	    classString: classString,
	    copyDescriptors: copyDescriptors,
	    hasDevTools: typeof chrome !== "undefined" && chrome &&
	                 typeof chrome.loadTimes === "function",
	    isNode: typeof process !== "undefined" &&
	        classString(process).toLowerCase() === "[object process]"
	};
	ret.isRecentNode = ret.isNode && (function() {
	    var version = process.versions.node.split(".").map(Number);
	    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
	})();

	if (ret.isNode) ret.toFastProperties(process);

	try {throw new Error(); } catch (e) {ret.lastLineError = e;}
	module.exports = ret;


/***/ },
/* 17 */
/***/ function(module, exports) {

	var isES5 = (function(){
	    "use strict";
	    return this === undefined;
	})();

	if (isES5) {
	    module.exports = {
	        freeze: Object.freeze,
	        defineProperty: Object.defineProperty,
	        getDescriptor: Object.getOwnPropertyDescriptor,
	        keys: Object.keys,
	        names: Object.getOwnPropertyNames,
	        getPrototypeOf: Object.getPrototypeOf,
	        isArray: Array.isArray,
	        isES5: isES5,
	        propertyIsWritable: function(obj, prop) {
	            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
	            return !!(!descriptor || descriptor.writable || descriptor.set);
	        }
	    };
	} else {
	    var has = {}.hasOwnProperty;
	    var str = {}.toString;
	    var proto = {}.constructor.prototype;

	    var ObjectKeys = function (o) {
	        var ret = [];
	        for (var key in o) {
	            if (has.call(o, key)) {
	                ret.push(key);
	            }
	        }
	        return ret;
	    };

	    var ObjectGetDescriptor = function(o, key) {
	        return {value: o[key]};
	    };

	    var ObjectDefineProperty = function (o, key, desc) {
	        o[key] = desc.value;
	        return o;
	    };

	    var ObjectFreeze = function (obj) {
	        return obj;
	    };

	    var ObjectGetPrototypeOf = function (obj) {
	        try {
	            return Object(obj).constructor.prototype;
	        }
	        catch (e) {
	            return proto;
	        }
	    };

	    var ArrayIsArray = function (obj) {
	        try {
	            return str.call(obj) === "[object Array]";
	        }
	        catch(e) {
	            return false;
	        }
	    };

	    module.exports = {
	        isArray: ArrayIsArray,
	        keys: ObjectKeys,
	        names: ObjectKeys,
	        defineProperty: ObjectDefineProperty,
	        getDescriptor: ObjectGetDescriptor,
	        freeze: ObjectFreeze,
	        getPrototypeOf: ObjectGetPrototypeOf,
	        isES5: isES5,
	        propertyIsWritable: function() {
	            return true;
	        }
	    };
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var firstLineError;
	try {throw new Error(); } catch (e) {firstLineError = e;}
	var schedule = __webpack_require__(19);
	var Queue = __webpack_require__(20);
	var util = __webpack_require__(16);

	function Async() {
	    this._isTickUsed = false;
	    this._lateQueue = new Queue(16);
	    this._normalQueue = new Queue(16);
	    this._trampolineEnabled = true;
	    var self = this;
	    this.drainQueues = function () {
	        self._drainQueues();
	    };
	    this._schedule =
	        schedule.isStatic ? schedule(this.drainQueues) : schedule;
	}

	Async.prototype.disableTrampolineIfNecessary = function() {
	    if (util.hasDevTools) {
	        this._trampolineEnabled = false;
	    }
	};

	Async.prototype.enableTrampoline = function() {
	    if (!this._trampolineEnabled) {
	        this._trampolineEnabled = true;
	        this._schedule = function(fn) {
	            setTimeout(fn, 0);
	        };
	    }
	};

	Async.prototype.haveItemsQueued = function () {
	    return this._normalQueue.length() > 0;
	};

	Async.prototype.throwLater = function(fn, arg) {
	    if (arguments.length === 1) {
	        arg = fn;
	        fn = function () { throw arg; };
	    }
	    if (typeof setTimeout !== "undefined") {
	        setTimeout(function() {
	            fn(arg);
	        }, 0);
	    } else try {
	        this._schedule(function() {
	            fn(arg);
	        });
	    } catch (e) {
	        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/m3OTXk\u000a");
	    }
	};

	function AsyncInvokeLater(fn, receiver, arg) {
	    this._lateQueue.push(fn, receiver, arg);
	    this._queueTick();
	}

	function AsyncInvoke(fn, receiver, arg) {
	    this._normalQueue.push(fn, receiver, arg);
	    this._queueTick();
	}

	function AsyncSettlePromises(promise) {
	    this._normalQueue._pushOne(promise);
	    this._queueTick();
	}

	if (!util.hasDevTools) {
	    Async.prototype.invokeLater = AsyncInvokeLater;
	    Async.prototype.invoke = AsyncInvoke;
	    Async.prototype.settlePromises = AsyncSettlePromises;
	} else {
	    if (schedule.isStatic) {
	        schedule = function(fn) { setTimeout(fn, 0); };
	    }
	    Async.prototype.invokeLater = function (fn, receiver, arg) {
	        if (this._trampolineEnabled) {
	            AsyncInvokeLater.call(this, fn, receiver, arg);
	        } else {
	            this._schedule(function() {
	                setTimeout(function() {
	                    fn.call(receiver, arg);
	                }, 100);
	            });
	        }
	    };

	    Async.prototype.invoke = function (fn, receiver, arg) {
	        if (this._trampolineEnabled) {
	            AsyncInvoke.call(this, fn, receiver, arg);
	        } else {
	            this._schedule(function() {
	                fn.call(receiver, arg);
	            });
	        }
	    };

	    Async.prototype.settlePromises = function(promise) {
	        if (this._trampolineEnabled) {
	            AsyncSettlePromises.call(this, promise);
	        } else {
	            this._schedule(function() {
	                promise._settlePromises();
	            });
	        }
	    };
	}

	Async.prototype.invokeFirst = function (fn, receiver, arg) {
	    this._normalQueue.unshift(fn, receiver, arg);
	    this._queueTick();
	};

	Async.prototype._drainQueue = function(queue) {
	    while (queue.length() > 0) {
	        var fn = queue.shift();
	        if (typeof fn !== "function") {
	            fn._settlePromises();
	            continue;
	        }
	        var receiver = queue.shift();
	        var arg = queue.shift();
	        fn.call(receiver, arg);
	    }
	};

	Async.prototype._drainQueues = function () {
	    this._drainQueue(this._normalQueue);
	    this._reset();
	    this._drainQueue(this._lateQueue);
	};

	Async.prototype._queueTick = function () {
	    if (!this._isTickUsed) {
	        this._isTickUsed = true;
	        this._schedule(this.drainQueues);
	    }
	};

	Async.prototype._reset = function () {
	    this._isTickUsed = false;
	};

	module.exports = new Async();
	module.exports.firstLineError = firstLineError;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var schedule;
	var util = __webpack_require__(16);
	var noAsyncScheduler = function() {
	    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/m3OTXk\u000a");
	};
	if (util.isNode && typeof MutationObserver === "undefined") {
	    var GlobalSetImmediate = global.setImmediate;
	    var ProcessNextTick = process.nextTick;
	    schedule = util.isRecentNode
	                ? function(fn) { GlobalSetImmediate.call(global, fn); }
	                : function(fn) { ProcessNextTick.call(process, fn); };
	} else if ((typeof MutationObserver !== "undefined") &&
	          !(typeof window !== "undefined" &&
	            window.navigator &&
	            window.navigator.standalone)) {
	    schedule = function(fn) {
	        var div = document.createElement("div");
	        var observer = new MutationObserver(fn);
	        observer.observe(div, {attributes: true});
	        return function() { div.classList.toggle("foo"); };
	    };
	    schedule.isStatic = true;
	} else if (typeof setImmediate !== "undefined") {
	    schedule = function (fn) {
	        setImmediate(fn);
	    };
	} else if (typeof setTimeout !== "undefined") {
	    schedule = function (fn) {
	        setTimeout(fn, 0);
	    };
	} else {
	    schedule = noAsyncScheduler;
	}
	module.exports = schedule;


/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	function arrayMove(src, srcIndex, dst, dstIndex, len) {
	    for (var j = 0; j < len; ++j) {
	        dst[j + dstIndex] = src[j + srcIndex];
	        src[j + srcIndex] = void 0;
	    }
	}

	function Queue(capacity) {
	    this._capacity = capacity;
	    this._length = 0;
	    this._front = 0;
	}

	Queue.prototype._willBeOverCapacity = function (size) {
	    return this._capacity < size;
	};

	Queue.prototype._pushOne = function (arg) {
	    var length = this.length();
	    this._checkCapacity(length + 1);
	    var i = (this._front + length) & (this._capacity - 1);
	    this[i] = arg;
	    this._length = length + 1;
	};

	Queue.prototype._unshiftOne = function(value) {
	    var capacity = this._capacity;
	    this._checkCapacity(this.length() + 1);
	    var front = this._front;
	    var i = (((( front - 1 ) &
	                    ( capacity - 1) ) ^ capacity ) - capacity );
	    this[i] = value;
	    this._front = i;
	    this._length = this.length() + 1;
	};

	Queue.prototype.unshift = function(fn, receiver, arg) {
	    this._unshiftOne(arg);
	    this._unshiftOne(receiver);
	    this._unshiftOne(fn);
	};

	Queue.prototype.push = function (fn, receiver, arg) {
	    var length = this.length() + 3;
	    if (this._willBeOverCapacity(length)) {
	        this._pushOne(fn);
	        this._pushOne(receiver);
	        this._pushOne(arg);
	        return;
	    }
	    var j = this._front + length - 3;
	    this._checkCapacity(length);
	    var wrapMask = this._capacity - 1;
	    this[(j + 0) & wrapMask] = fn;
	    this[(j + 1) & wrapMask] = receiver;
	    this[(j + 2) & wrapMask] = arg;
	    this._length = length;
	};

	Queue.prototype.shift = function () {
	    var front = this._front,
	        ret = this[front];

	    this[front] = undefined;
	    this._front = (front + 1) & (this._capacity - 1);
	    this._length--;
	    return ret;
	};

	Queue.prototype.length = function () {
	    return this._length;
	};

	Queue.prototype._checkCapacity = function (size) {
	    if (this._capacity < size) {
	        this._resizeTo(this._capacity << 1);
	    }
	};

	Queue.prototype._resizeTo = function (capacity) {
	    var oldCapacity = this._capacity;
	    this._capacity = capacity;
	    var front = this._front;
	    var length = this._length;
	    var moveItemsCount = (front + length) & (oldCapacity - 1);
	    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
	};

	module.exports = Queue;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var es5 = __webpack_require__(17);
	var Objectfreeze = es5.freeze;
	var util = __webpack_require__(16);
	var inherits = util.inherits;
	var notEnumerableProp = util.notEnumerableProp;

	function subError(nameProperty, defaultMessage) {
	    function SubError(message) {
	        if (!(this instanceof SubError)) return new SubError(message);
	        notEnumerableProp(this, "message",
	            typeof message === "string" ? message : defaultMessage);
	        notEnumerableProp(this, "name", nameProperty);
	        if (Error.captureStackTrace) {
	            Error.captureStackTrace(this, this.constructor);
	        } else {
	            Error.call(this);
	        }
	    }
	    inherits(SubError, Error);
	    return SubError;
	}

	var _TypeError, _RangeError;
	var Warning = subError("Warning", "warning");
	var CancellationError = subError("CancellationError", "cancellation error");
	var TimeoutError = subError("TimeoutError", "timeout error");
	var AggregateError = subError("AggregateError", "aggregate error");
	try {
	    _TypeError = TypeError;
	    _RangeError = RangeError;
	} catch(e) {
	    _TypeError = subError("TypeError", "type error");
	    _RangeError = subError("RangeError", "range error");
	}

	var methods = ("join pop push shift unshift slice filter forEach some " +
	    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

	for (var i = 0; i < methods.length; ++i) {
	    if (typeof Array.prototype[methods[i]] === "function") {
	        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
	    }
	}

	es5.defineProperty(AggregateError.prototype, "length", {
	    value: 0,
	    configurable: false,
	    writable: true,
	    enumerable: true
	});
	AggregateError.prototype["isOperational"] = true;
	var level = 0;
	AggregateError.prototype.toString = function() {
	    var indent = Array(level * 4 + 1).join(" ");
	    var ret = "\n" + indent + "AggregateError of:" + "\n";
	    level++;
	    indent = Array(level * 4 + 1).join(" ");
	    for (var i = 0; i < this.length; ++i) {
	        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
	        var lines = str.split("\n");
	        for (var j = 0; j < lines.length; ++j) {
	            lines[j] = indent + lines[j];
	        }
	        str = lines.join("\n");
	        ret += str + "\n";
	    }
	    level--;
	    return ret;
	};

	function OperationalError(message) {
	    if (!(this instanceof OperationalError))
	        return new OperationalError(message);
	    notEnumerableProp(this, "name", "OperationalError");
	    notEnumerableProp(this, "message", message);
	    this.cause = message;
	    this["isOperational"] = true;

	    if (message instanceof Error) {
	        notEnumerableProp(this, "message", message.message);
	        notEnumerableProp(this, "stack", message.stack);
	    } else if (Error.captureStackTrace) {
	        Error.captureStackTrace(this, this.constructor);
	    }

	}
	inherits(OperationalError, Error);

	var errorTypes = Error["__BluebirdErrorTypes__"];
	if (!errorTypes) {
	    errorTypes = Objectfreeze({
	        CancellationError: CancellationError,
	        TimeoutError: TimeoutError,
	        OperationalError: OperationalError,
	        RejectionError: OperationalError,
	        AggregateError: AggregateError
	    });
	    notEnumerableProp(Error, "__BluebirdErrorTypes__", errorTypes);
	}

	module.exports = {
	    Error: Error,
	    TypeError: _TypeError,
	    RangeError: _RangeError,
	    CancellationError: errorTypes.CancellationError,
	    OperationalError: errorTypes.OperationalError,
	    TimeoutError: errorTypes.TimeoutError,
	    AggregateError: errorTypes.AggregateError,
	    Warning: Warning
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var util = __webpack_require__(16);
	var errorObj = util.errorObj;
	var isObject = util.isObject;

	function tryConvertToPromise(obj, context) {
	    if (isObject(obj)) {
	        if (obj instanceof Promise) {
	            return obj;
	        }
	        else if (isAnyBluebirdPromise(obj)) {
	            var ret = new Promise(INTERNAL);
	            obj._then(
	                ret._fulfillUnchecked,
	                ret._rejectUncheckedCheckError,
	                ret._progressUnchecked,
	                ret,
	                null
	            );
	            return ret;
	        }
	        var then = util.tryCatch(getThen)(obj);
	        if (then === errorObj) {
	            if (context) context._pushContext();
	            var ret = Promise.reject(then.e);
	            if (context) context._popContext();
	            return ret;
	        } else if (typeof then === "function") {
	            return doThenable(obj, then, context);
	        }
	    }
	    return obj;
	}

	function getThen(obj) {
	    return obj.then;
	}

	var hasProp = {}.hasOwnProperty;
	function isAnyBluebirdPromise(obj) {
	    return hasProp.call(obj, "_promise0");
	}

	function doThenable(x, then, context) {
	    var promise = new Promise(INTERNAL);
	    var ret = promise;
	    if (context) context._pushContext();
	    promise._captureStackTrace();
	    if (context) context._popContext();
	    var synchronous = true;
	    var result = util.tryCatch(then).call(x,
	                                        resolveFromThenable,
	                                        rejectFromThenable,
	                                        progressFromThenable);
	    synchronous = false;
	    if (promise && result === errorObj) {
	        promise._rejectCallback(result.e, true, true);
	        promise = null;
	    }

	    function resolveFromThenable(value) {
	        if (!promise) return;
	        promise._resolveCallback(value);
	        promise = null;
	    }

	    function rejectFromThenable(reason) {
	        if (!promise) return;
	        promise._rejectCallback(reason, synchronous, true);
	        promise = null;
	    }

	    function progressFromThenable(value) {
	        if (!promise) return;
	        if (typeof promise._progress === "function") {
	            promise._progress(value);
	        }
	    }
	    return ret;
	}

	return tryConvertToPromise;
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, INTERNAL, tryConvertToPromise,
	    apiRejection) {
	var util = __webpack_require__(16);
	var isArray = util.isArray;

	function toResolutionValue(val) {
	    switch(val) {
	    case -2: return [];
	    case -3: return {};
	    }
	}

	function PromiseArray(values) {
	    var promise = this._promise = new Promise(INTERNAL);
	    var parent;
	    if (values instanceof Promise) {
	        parent = values;
	        promise._propagateFrom(parent, 1 | 4);
	    }
	    this._values = values;
	    this._length = 0;
	    this._totalResolved = 0;
	    this._init(undefined, -2);
	}
	PromiseArray.prototype.length = function () {
	    return this._length;
	};

	PromiseArray.prototype.promise = function () {
	    return this._promise;
	};

	PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
	    var values = tryConvertToPromise(this._values, this._promise);
	    if (values instanceof Promise) {
	        values = values._target();
	        this._values = values;
	        if (values._isFulfilled()) {
	            values = values._value();
	            if (!isArray(values)) {
	                var err = new Promise.TypeError("expecting an array, a promise or a thenable\u000a\u000a    See http://goo.gl/s8MMhc\u000a");
	                this.__hardReject__(err);
	                return;
	            }
	        } else if (values._isPending()) {
	            values._then(
	                init,
	                this._reject,
	                undefined,
	                this,
	                resolveValueIfEmpty
	           );
	            return;
	        } else {
	            this._reject(values._reason());
	            return;
	        }
	    } else if (!isArray(values)) {
	        this._promise._reject(apiRejection("expecting an array, a promise or a thenable\u000a\u000a    See http://goo.gl/s8MMhc\u000a")._reason());
	        return;
	    }

	    if (values.length === 0) {
	        if (resolveValueIfEmpty === -5) {
	            this._resolveEmptyArray();
	        }
	        else {
	            this._resolve(toResolutionValue(resolveValueIfEmpty));
	        }
	        return;
	    }
	    var len = this.getActualLength(values.length);
	    this._length = len;
	    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
	    var promise = this._promise;
	    for (var i = 0; i < len; ++i) {
	        var isResolved = this._isResolved();
	        var maybePromise = tryConvertToPromise(values[i], promise);
	        if (maybePromise instanceof Promise) {
	            maybePromise = maybePromise._target();
	            if (isResolved) {
	                maybePromise._ignoreRejections();
	            } else if (maybePromise._isPending()) {
	                maybePromise._proxyPromiseArray(this, i);
	            } else if (maybePromise._isFulfilled()) {
	                this._promiseFulfilled(maybePromise._value(), i);
	            } else {
	                this._promiseRejected(maybePromise._reason(), i);
	            }
	        } else if (!isResolved) {
	            this._promiseFulfilled(maybePromise, i);
	        }
	    }
	};

	PromiseArray.prototype._isResolved = function () {
	    return this._values === null;
	};

	PromiseArray.prototype._resolve = function (value) {
	    this._values = null;
	    this._promise._fulfill(value);
	};

	PromiseArray.prototype.__hardReject__ =
	PromiseArray.prototype._reject = function (reason) {
	    this._values = null;
	    this._promise._rejectCallback(reason, false, true);
	};

	PromiseArray.prototype._promiseProgressed = function (progressValue, index) {
	    this._promise._progress({
	        index: index,
	        value: progressValue
	    });
	};


	PromiseArray.prototype._promiseFulfilled = function (value, index) {
	    this._values[index] = value;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        this._resolve(this._values);
	    }
	};

	PromiseArray.prototype._promiseRejected = function (reason, index) {
	    this._totalResolved++;
	    this._reject(reason);
	};

	PromiseArray.prototype.shouldCopyValues = function () {
	    return true;
	};

	PromiseArray.prototype.getActualLength = function (len) {
	    return len;
	};

	return PromiseArray;
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function() {
	var async = __webpack_require__(18);
	var util = __webpack_require__(16);
	var bluebirdFramePattern =
	    /[\\\/]bluebird[\\\/]js[\\\/](main|debug|zalgo|instrumented)/;
	var stackFramePattern = null;
	var formatStack = null;
	var indentStackFrames = false;
	var warn;

	function CapturedTrace(parent) {
	    this._parent = parent;
	    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
	    captureStackTrace(this, CapturedTrace);
	    if (length > 32) this.uncycle();
	}
	util.inherits(CapturedTrace, Error);

	CapturedTrace.prototype.uncycle = function() {
	    var length = this._length;
	    if (length < 2) return;
	    var nodes = [];
	    var stackToIndex = {};

	    for (var i = 0, node = this; node !== undefined; ++i) {
	        nodes.push(node);
	        node = node._parent;
	    }
	    length = this._length = i;
	    for (var i = length - 1; i >= 0; --i) {
	        var stack = nodes[i].stack;
	        if (stackToIndex[stack] === undefined) {
	            stackToIndex[stack] = i;
	        }
	    }
	    for (var i = 0; i < length; ++i) {
	        var currentStack = nodes[i].stack;
	        var index = stackToIndex[currentStack];
	        if (index !== undefined && index !== i) {
	            if (index > 0) {
	                nodes[index - 1]._parent = undefined;
	                nodes[index - 1]._length = 1;
	            }
	            nodes[i]._parent = undefined;
	            nodes[i]._length = 1;
	            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

	            if (index < length - 1) {
	                cycleEdgeNode._parent = nodes[index + 1];
	                cycleEdgeNode._parent.uncycle();
	                cycleEdgeNode._length =
	                    cycleEdgeNode._parent._length + 1;
	            } else {
	                cycleEdgeNode._parent = undefined;
	                cycleEdgeNode._length = 1;
	            }
	            var currentChildLength = cycleEdgeNode._length + 1;
	            for (var j = i - 2; j >= 0; --j) {
	                nodes[j]._length = currentChildLength;
	                currentChildLength++;
	            }
	            return;
	        }
	    }
	};

	CapturedTrace.prototype.parent = function() {
	    return this._parent;
	};

	CapturedTrace.prototype.hasParent = function() {
	    return this._parent !== undefined;
	};

	CapturedTrace.prototype.attachExtraTrace = function(error) {
	    if (error.__stackCleaned__) return;
	    this.uncycle();
	    var parsed = CapturedTrace.parseStackAndMessage(error);
	    var message = parsed.message;
	    var stacks = [parsed.stack];

	    var trace = this;
	    while (trace !== undefined) {
	        stacks.push(cleanStack(trace.stack.split("\n")));
	        trace = trace._parent;
	    }
	    removeCommonRoots(stacks);
	    removeDuplicateOrEmptyJumps(stacks);
	    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
	    util.notEnumerableProp(error, "__stackCleaned__", true);
	};

	function reconstructStack(message, stacks) {
	    for (var i = 0; i < stacks.length - 1; ++i) {
	        stacks[i].push("From previous event:");
	        stacks[i] = stacks[i].join("\n");
	    }
	    if (i < stacks.length) {
	        stacks[i] = stacks[i].join("\n");
	    }
	    return message + "\n" + stacks.join("\n");
	}

	function removeDuplicateOrEmptyJumps(stacks) {
	    for (var i = 0; i < stacks.length; ++i) {
	        if (stacks[i].length === 0 ||
	            ((i + 1 < stacks.length) && stacks[i][0] === stacks[i+1][0])) {
	            stacks.splice(i, 1);
	            i--;
	        }
	    }
	}

	function removeCommonRoots(stacks) {
	    var current = stacks[0];
	    for (var i = 1; i < stacks.length; ++i) {
	        var prev = stacks[i];
	        var currentLastIndex = current.length - 1;
	        var currentLastLine = current[currentLastIndex];
	        var commonRootMeetPoint = -1;

	        for (var j = prev.length - 1; j >= 0; --j) {
	            if (prev[j] === currentLastLine) {
	                commonRootMeetPoint = j;
	                break;
	            }
	        }

	        for (var j = commonRootMeetPoint; j >= 0; --j) {
	            var line = prev[j];
	            if (current[currentLastIndex] === line) {
	                current.pop();
	                currentLastIndex--;
	            } else {
	                break;
	            }
	        }
	        current = prev;
	    }
	}

	function cleanStack(stack) {
	    var ret = [];
	    for (var i = 0; i < stack.length; ++i) {
	        var line = stack[i];
	        var isTraceLine = stackFramePattern.test(line) ||
	            "    (No stack trace)" === line;
	        var isInternalFrame = isTraceLine && shouldIgnore(line);
	        if (isTraceLine && !isInternalFrame) {
	            if (indentStackFrames && line.charAt(0) !== " ") {
	                line = "    " + line;
	            }
	            ret.push(line);
	        }
	    }
	    return ret;
	}

	function stackFramesAsArray(error) {
	    var stack = error.stack.replace(/\s+$/g, "").split("\n");
	    for (var i = 0; i < stack.length; ++i) {
	        var line = stack[i];
	        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
	            break;
	        }
	    }
	    if (i > 0) {
	        stack = stack.slice(i);
	    }
	    return stack;
	}

	CapturedTrace.parseStackAndMessage = function(error) {
	    var stack = error.stack;
	    var message = error.toString();
	    stack = typeof stack === "string" && stack.length > 0
	                ? stackFramesAsArray(error) : ["    (No stack trace)"];
	    return {
	        message: message,
	        stack: cleanStack(stack)
	    };
	};

	CapturedTrace.formatAndLogError = function(error, title) {
	    if (typeof console !== "undefined") {
	        var message;
	        if (typeof error === "object" || typeof error === "function") {
	            var stack = error.stack;
	            message = title + formatStack(stack, error);
	        } else {
	            message = title + String(error);
	        }
	        if (typeof warn === "function") {
	            warn(message);
	        } else if (typeof console.log === "function" ||
	            typeof console.log === "object") {
	            console.log(message);
	        }
	    }
	};

	CapturedTrace.unhandledRejection = function (reason) {
	    CapturedTrace.formatAndLogError(reason, "^--- With additional stack trace: ");
	};

	CapturedTrace.isSupported = function () {
	    return typeof captureStackTrace === "function";
	};

	CapturedTrace.fireRejectionEvent =
	function(name, localHandler, reason, promise) {
	    var localEventFired = false;
	    try {
	        if (typeof localHandler === "function") {
	            localEventFired = true;
	            if (name === "rejectionHandled") {
	                localHandler(promise);
	            } else {
	                localHandler(reason, promise);
	            }
	        }
	    } catch (e) {
	        async.throwLater(e);
	    }

	    var globalEventFired = false;
	    try {
	        globalEventFired = fireGlobalEvent(name, reason, promise);
	    } catch (e) {
	        globalEventFired = true;
	        async.throwLater(e);
	    }

	    var domEventFired = false;
	    if (fireDomEvent) {
	        try {
	            domEventFired = fireDomEvent(name.toLowerCase(), {
	                reason: reason,
	                promise: promise
	            });
	        } catch (e) {
	            domEventFired = true;
	            async.throwLater(e);
	        }
	    }

	    if (!globalEventFired && !localEventFired && !domEventFired &&
	        name === "unhandledRejection") {
	        CapturedTrace.formatAndLogError(reason, "Unhandled rejection ");
	    }
	};

	function formatNonError(obj) {
	    var str;
	    if (typeof obj === "function") {
	        str = "[function " +
	            (obj.name || "anonymous") +
	            "]";
	    } else {
	        str = obj.toString();
	        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
	        if (ruselessToString.test(str)) {
	            try {
	                var newStr = JSON.stringify(obj);
	                str = newStr;
	            }
	            catch(e) {

	            }
	        }
	        if (str.length === 0) {
	            str = "(empty array)";
	        }
	    }
	    return ("(<" + snip(str) + ">, no stack trace)");
	}

	function snip(str) {
	    var maxChars = 41;
	    if (str.length < maxChars) {
	        return str;
	    }
	    return str.substr(0, maxChars - 3) + "...";
	}

	var shouldIgnore = function() { return false; };
	var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
	function parseLineInfo(line) {
	    var matches = line.match(parseLineInfoRegex);
	    if (matches) {
	        return {
	            fileName: matches[1],
	            line: parseInt(matches[2], 10)
	        };
	    }
	}
	CapturedTrace.setBounds = function(firstLineError, lastLineError) {
	    if (!CapturedTrace.isSupported()) return;
	    var firstStackLines = firstLineError.stack.split("\n");
	    var lastStackLines = lastLineError.stack.split("\n");
	    var firstIndex = -1;
	    var lastIndex = -1;
	    var firstFileName;
	    var lastFileName;
	    for (var i = 0; i < firstStackLines.length; ++i) {
	        var result = parseLineInfo(firstStackLines[i]);
	        if (result) {
	            firstFileName = result.fileName;
	            firstIndex = result.line;
	            break;
	        }
	    }
	    for (var i = 0; i < lastStackLines.length; ++i) {
	        var result = parseLineInfo(lastStackLines[i]);
	        if (result) {
	            lastFileName = result.fileName;
	            lastIndex = result.line;
	            break;
	        }
	    }
	    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
	        firstFileName !== lastFileName || firstIndex >= lastIndex) {
	        return;
	    }

	    shouldIgnore = function(line) {
	        if (bluebirdFramePattern.test(line)) return true;
	        var info = parseLineInfo(line);
	        if (info) {
	            if (info.fileName === firstFileName &&
	                (firstIndex <= info.line && info.line <= lastIndex)) {
	                return true;
	            }
	        }
	        return false;
	    };
	};

	var captureStackTrace = (function stackDetection() {
	    var v8stackFramePattern = /^\s*at\s*/;
	    var v8stackFormatter = function(stack, error) {
	        if (typeof stack === "string") return stack;

	        if (error.name !== undefined &&
	            error.message !== undefined) {
	            return error.toString();
	        }
	        return formatNonError(error);
	    };

	    if (typeof Error.stackTraceLimit === "number" &&
	        typeof Error.captureStackTrace === "function") {
	        Error.stackTraceLimit = Error.stackTraceLimit + 6;
	        stackFramePattern = v8stackFramePattern;
	        formatStack = v8stackFormatter;
	        var captureStackTrace = Error.captureStackTrace;

	        shouldIgnore = function(line) {
	            return bluebirdFramePattern.test(line);
	        };
	        return function(receiver, ignoreUntil) {
	            Error.stackTraceLimit = Error.stackTraceLimit + 6;
	            captureStackTrace(receiver, ignoreUntil);
	            Error.stackTraceLimit = Error.stackTraceLimit - 6;
	        };
	    }
	    var err = new Error();

	    if (typeof err.stack === "string" &&
	        err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
	        stackFramePattern = /@/;
	        formatStack = v8stackFormatter;
	        indentStackFrames = true;
	        return function captureStackTrace(o) {
	            o.stack = new Error().stack;
	        };
	    }

	    var hasStackAfterThrow;
	    try { throw new Error(); }
	    catch(e) {
	        hasStackAfterThrow = ("stack" in e);
	    }
	    if (!("stack" in err) && hasStackAfterThrow &&
	        typeof Error.stackTraceLimit === "number") {
	        stackFramePattern = v8stackFramePattern;
	        formatStack = v8stackFormatter;
	        return function captureStackTrace(o) {
	            Error.stackTraceLimit = Error.stackTraceLimit + 6;
	            try { throw new Error(); }
	            catch(e) { o.stack = e.stack; }
	            Error.stackTraceLimit = Error.stackTraceLimit - 6;
	        };
	    }

	    formatStack = function(stack, error) {
	        if (typeof stack === "string") return stack;

	        if ((typeof error === "object" ||
	            typeof error === "function") &&
	            error.name !== undefined &&
	            error.message !== undefined) {
	            return error.toString();
	        }
	        return formatNonError(error);
	    };

	    return null;

	})([]);

	var fireDomEvent;
	var fireGlobalEvent = (function() {
	    if (util.isNode) {
	        return function(name, reason, promise) {
	            if (name === "rejectionHandled") {
	                return process.emit(name, promise);
	            } else {
	                return process.emit(name, reason, promise);
	            }
	        };
	    } else {
	        var customEventWorks = false;
	        var anyEventWorks = true;
	        try {
	            var ev = new self.CustomEvent("test");
	            customEventWorks = ev instanceof CustomEvent;
	        } catch (e) {}
	        if (!customEventWorks) {
	            try {
	                var event = document.createEvent("CustomEvent");
	                event.initCustomEvent("testingtheevent", false, true, {});
	                self.dispatchEvent(event);
	            } catch (e) {
	                anyEventWorks = false;
	            }
	        }
	        if (anyEventWorks) {
	            fireDomEvent = function(type, detail) {
	                var event;
	                if (customEventWorks) {
	                    event = new self.CustomEvent(type, {
	                        detail: detail,
	                        bubbles: false,
	                        cancelable: true
	                    });
	                } else if (self.dispatchEvent) {
	                    event = document.createEvent("CustomEvent");
	                    event.initCustomEvent(type, false, true, detail);
	                }

	                return event ? !self.dispatchEvent(event) : false;
	            };
	        }

	        var toWindowMethodNameMap = {};
	        toWindowMethodNameMap["unhandledRejection"] = ("on" +
	            "unhandledRejection").toLowerCase();
	        toWindowMethodNameMap["rejectionHandled"] = ("on" +
	            "rejectionHandled").toLowerCase();

	        return function(name, reason, promise) {
	            var methodName = toWindowMethodNameMap[name];
	            var method = self[methodName];
	            if (!method) return false;
	            if (name === "rejectionHandled") {
	                method.call(self, promise);
	            } else {
	                method.call(self, reason, promise);
	            }
	            return true;
	        };
	    }
	})();

	if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
	    warn = function (message) {
	        console.warn(message);
	    };
	    if (util.isNode && process.stderr.isTTY) {
	        warn = function(message) {
	            process.stderr.write("\u001b[31m" + message + "\u001b[39m\n");
	        };
	    } else if (!util.isNode && typeof (new Error().stack) === "string") {
	        warn = function(message) {
	            console.warn("%c" + message, "color: red");
	        };
	    }
	}

	return CapturedTrace;
	};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, CapturedTrace) {
	var getDomain = Promise._getDomain;
	var async = __webpack_require__(18);
	var Warning = __webpack_require__(21).Warning;
	var util = __webpack_require__(16);
	var canAttachTrace = util.canAttachTrace;
	var unhandledRejectionHandled;
	var possiblyUnhandledRejection;
	var debugging = false || (util.isNode &&
	                    (!!process.env["BLUEBIRD_DEBUG"] ||
	                     process.env["NODE_ENV"] === "development"));

	if (util.isNode && process.env["BLUEBIRD_DEBUG"] == 0) debugging = false;

	if (debugging) {
	    async.disableTrampolineIfNecessary();
	}

	Promise.prototype._ignoreRejections = function() {
	    this._unsetRejectionIsUnhandled();
	    this._bitField = this._bitField | 16777216;
	};

	Promise.prototype._ensurePossibleRejectionHandled = function () {
	    if ((this._bitField & 16777216) !== 0) return;
	    this._setRejectionIsUnhandled();
	    async.invokeLater(this._notifyUnhandledRejection, this, undefined);
	};

	Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
	    CapturedTrace.fireRejectionEvent("rejectionHandled",
	                                  unhandledRejectionHandled, undefined, this);
	};

	Promise.prototype._notifyUnhandledRejection = function () {
	    if (this._isRejectionUnhandled()) {
	        var reason = this._getCarriedStackTrace() || this._settledValue;
	        this._setUnhandledRejectionIsNotified();
	        CapturedTrace.fireRejectionEvent("unhandledRejection",
	                                      possiblyUnhandledRejection, reason, this);
	    }
	};

	Promise.prototype._setUnhandledRejectionIsNotified = function () {
	    this._bitField = this._bitField | 524288;
	};

	Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
	    this._bitField = this._bitField & (~524288);
	};

	Promise.prototype._isUnhandledRejectionNotified = function () {
	    return (this._bitField & 524288) > 0;
	};

	Promise.prototype._setRejectionIsUnhandled = function () {
	    this._bitField = this._bitField | 2097152;
	};

	Promise.prototype._unsetRejectionIsUnhandled = function () {
	    this._bitField = this._bitField & (~2097152);
	    if (this._isUnhandledRejectionNotified()) {
	        this._unsetUnhandledRejectionIsNotified();
	        this._notifyUnhandledRejectionIsHandled();
	    }
	};

	Promise.prototype._isRejectionUnhandled = function () {
	    return (this._bitField & 2097152) > 0;
	};

	Promise.prototype._setCarriedStackTrace = function (capturedTrace) {
	    this._bitField = this._bitField | 1048576;
	    this._fulfillmentHandler0 = capturedTrace;
	};

	Promise.prototype._isCarryingStackTrace = function () {
	    return (this._bitField & 1048576) > 0;
	};

	Promise.prototype._getCarriedStackTrace = function () {
	    return this._isCarryingStackTrace()
	        ? this._fulfillmentHandler0
	        : undefined;
	};

	Promise.prototype._captureStackTrace = function () {
	    if (debugging) {
	        this._trace = new CapturedTrace(this._peekContext());
	    }
	    return this;
	};

	Promise.prototype._attachExtraTrace = function (error, ignoreSelf) {
	    if (debugging && canAttachTrace(error)) {
	        var trace = this._trace;
	        if (trace !== undefined) {
	            if (ignoreSelf) trace = trace._parent;
	        }
	        if (trace !== undefined) {
	            trace.attachExtraTrace(error);
	        } else if (!error.__stackCleaned__) {
	            var parsed = CapturedTrace.parseStackAndMessage(error);
	            util.notEnumerableProp(error, "stack",
	                parsed.message + "\n" + parsed.stack.join("\n"));
	            util.notEnumerableProp(error, "__stackCleaned__", true);
	        }
	    }
	};

	Promise.prototype._warn = function(message) {
	    var warning = new Warning(message);
	    var ctx = this._peekContext();
	    if (ctx) {
	        ctx.attachExtraTrace(warning);
	    } else {
	        var parsed = CapturedTrace.parseStackAndMessage(warning);
	        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
	    }
	    CapturedTrace.formatAndLogError(warning, "");
	};

	Promise.onPossiblyUnhandledRejection = function (fn) {
	    var domain = getDomain();
	    possiblyUnhandledRejection =
	        typeof fn === "function" ? (domain === null ? fn : domain.bind(fn))
	                                 : undefined;
	};

	Promise.onUnhandledRejectionHandled = function (fn) {
	    var domain = getDomain();
	    unhandledRejectionHandled =
	        typeof fn === "function" ? (domain === null ? fn : domain.bind(fn))
	                                 : undefined;
	};

	Promise.longStackTraces = function () {
	    if (async.haveItemsQueued() &&
	        debugging === false
	   ) {
	        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/DT1qyG\u000a");
	    }
	    debugging = CapturedTrace.isSupported();
	    if (debugging) {
	        async.disableTrampolineIfNecessary();
	    }
	};

	Promise.hasLongStackTraces = function () {
	    return debugging && CapturedTrace.isSupported();
	};

	if (!CapturedTrace.isSupported()) {
	    Promise.longStackTraces = function(){};
	    debugging = false;
	}

	return function() {
	    return debugging;
	};
	};


/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	module.exports = function(Promise, CapturedTrace, isDebugging) {
	var contextStack = [];
	function Context() {
	    this._trace = new CapturedTrace(peekContext());
	}
	Context.prototype._pushContext = function () {
	    if (!isDebugging()) return;
	    if (this._trace !== undefined) {
	        contextStack.push(this._trace);
	    }
	};

	Context.prototype._popContext = function () {
	    if (!isDebugging()) return;
	    if (this._trace !== undefined) {
	        contextStack.pop();
	    }
	};

	function createContext() {
	    if (isDebugging()) return new Context();
	}

	function peekContext() {
	    var lastIndex = contextStack.length - 1;
	    if (lastIndex >= 0) {
	        return contextStack[lastIndex];
	    }
	    return undefined;
	}

	Promise.prototype._peekContext = peekContext;
	Promise.prototype._pushContext = Context.prototype._pushContext;
	Promise.prototype._popContext = Context.prototype._popContext;

	return createContext;
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(NEXT_FILTER) {
	var util = __webpack_require__(16);
	var errors = __webpack_require__(21);
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	var keys = __webpack_require__(17).keys;
	var TypeError = errors.TypeError;

	function CatchFilter(instances, callback, promise) {
	    this._instances = instances;
	    this._callback = callback;
	    this._promise = promise;
	}

	function safePredicate(predicate, e) {
	    var safeObject = {};
	    var retfilter = tryCatch(predicate).call(safeObject, e);

	    if (retfilter === errorObj) return retfilter;

	    var safeKeys = keys(safeObject);
	    if (safeKeys.length) {
	        errorObj.e = new TypeError("Catch filter must inherit from Error or be a simple predicate function\u000a\u000a    See http://goo.gl/o84o68\u000a");
	        return errorObj;
	    }
	    return retfilter;
	}

	CatchFilter.prototype.doFilter = function (e) {
	    var cb = this._callback;
	    var promise = this._promise;
	    var boundTo = promise._boundValue();
	    for (var i = 0, len = this._instances.length; i < len; ++i) {
	        var item = this._instances[i];
	        var itemIsErrorType = item === Error ||
	            (item != null && item.prototype instanceof Error);

	        if (itemIsErrorType && e instanceof item) {
	            var ret = tryCatch(cb).call(boundTo, e);
	            if (ret === errorObj) {
	                NEXT_FILTER.e = ret.e;
	                return NEXT_FILTER;
	            }
	            return ret;
	        } else if (typeof item === "function" && !itemIsErrorType) {
	            var shouldHandle = safePredicate(item, e);
	            if (shouldHandle === errorObj) {
	                e = errorObj.e;
	                break;
	            } else if (shouldHandle) {
	                var ret = tryCatch(cb).call(boundTo, e);
	                if (ret === errorObj) {
	                    NEXT_FILTER.e = ret.e;
	                    return NEXT_FILTER;
	                }
	                return ret;
	            }
	        }
	    }
	    NEXT_FILTER.e = e;
	    return NEXT_FILTER;
	};

	return CatchFilter;
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var util = __webpack_require__(16);
	var maybeWrapAsError = util.maybeWrapAsError;
	var errors = __webpack_require__(21);
	var TimeoutError = errors.TimeoutError;
	var OperationalError = errors.OperationalError;
	var haveGetters = util.haveGetters;
	var es5 = __webpack_require__(17);

	function isUntypedError(obj) {
	    return obj instanceof Error &&
	        es5.getPrototypeOf(obj) === Error.prototype;
	}

	var rErrorKey = /^(?:name|message|stack|cause)$/;
	function wrapAsOperationalError(obj) {
	    var ret;
	    if (isUntypedError(obj)) {
	        ret = new OperationalError(obj);
	        ret.name = obj.name;
	        ret.message = obj.message;
	        ret.stack = obj.stack;
	        var keys = es5.keys(obj);
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!rErrorKey.test(key)) {
	                ret[key] = obj[key];
	            }
	        }
	        return ret;
	    }
	    util.markAsOriginatingFromRejection(obj);
	    return obj;
	}

	function nodebackForPromise(promise) {
	    return function(err, value) {
	        if (promise === null) return;

	        if (err) {
	            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
	            promise._attachExtraTrace(wrapped);
	            promise._reject(wrapped);
	        } else if (arguments.length > 2) {
	            var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
	            promise._fulfill(args);
	        } else {
	            promise._fulfill(value);
	        }

	        promise = null;
	    };
	}


	var PromiseResolver;
	if (!haveGetters) {
	    PromiseResolver = function (promise) {
	        this.promise = promise;
	        this.asCallback = nodebackForPromise(promise);
	        this.callback = this.asCallback;
	    };
	}
	else {
	    PromiseResolver = function (promise) {
	        this.promise = promise;
	    };
	}
	if (haveGetters) {
	    var prop = {
	        get: function() {
	            return nodebackForPromise(this.promise);
	        }
	    };
	    es5.defineProperty(PromiseResolver.prototype, "asCallback", prop);
	    es5.defineProperty(PromiseResolver.prototype, "callback", prop);
	}

	PromiseResolver._nodebackForPromise = nodebackForPromise;

	PromiseResolver.prototype.toString = function () {
	    return "[object PromiseResolver]";
	};

	PromiseResolver.prototype.resolve =
	PromiseResolver.prototype.fulfill = function (value) {
	    if (!(this instanceof PromiseResolver)) {
	        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\u000a\u000a    See http://goo.gl/sdkXL9\u000a");
	    }
	    this.promise._resolveCallback(value);
	};

	PromiseResolver.prototype.reject = function (reason) {
	    if (!(this instanceof PromiseResolver)) {
	        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\u000a\u000a    See http://goo.gl/sdkXL9\u000a");
	    }
	    this.promise._rejectCallback(reason);
	};

	PromiseResolver.prototype.progress = function (value) {
	    if (!(this instanceof PromiseResolver)) {
	        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\u000a\u000a    See http://goo.gl/sdkXL9\u000a");
	    }
	    this.promise._progress(value);
	};

	PromiseResolver.prototype.cancel = function (err) {
	    this.promise.cancel(err);
	};

	PromiseResolver.prototype.timeout = function () {
	    this.reject(new TimeoutError("timeout"));
	};

	PromiseResolver.prototype.isResolved = function () {
	    return this.promise.isResolved();
	};

	PromiseResolver.prototype.toJSON = function () {
	    return this.promise.toJSON();
	};

	module.exports = PromiseResolver;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, PromiseArray) {
	var util = __webpack_require__(16);
	var async = __webpack_require__(18);
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;

	Promise.prototype.progressed = function (handler) {
	    return this._then(undefined, undefined, handler, undefined, undefined);
	};

	Promise.prototype._progress = function (progressValue) {
	    if (this._isFollowingOrFulfilledOrRejected()) return;
	    this._target()._progressUnchecked(progressValue);

	};

	Promise.prototype._progressHandlerAt = function (index) {
	    return index === 0
	        ? this._progressHandler0
	        : this[(index << 2) + index - 5 + 2];
	};

	Promise.prototype._doProgressWith = function (progression) {
	    var progressValue = progression.value;
	    var handler = progression.handler;
	    var promise = progression.promise;
	    var receiver = progression.receiver;

	    var ret = tryCatch(handler).call(receiver, progressValue);
	    if (ret === errorObj) {
	        if (ret.e != null &&
	            ret.e.name !== "StopProgressPropagation") {
	            var trace = util.canAttachTrace(ret.e)
	                ? ret.e : new Error(util.toString(ret.e));
	            promise._attachExtraTrace(trace);
	            promise._progress(ret.e);
	        }
	    } else if (ret instanceof Promise) {
	        ret._then(promise._progress, null, null, promise, undefined);
	    } else {
	        promise._progress(ret);
	    }
	};


	Promise.prototype._progressUnchecked = function (progressValue) {
	    var len = this._length();
	    var progress = this._progress;
	    for (var i = 0; i < len; i++) {
	        var handler = this._progressHandlerAt(i);
	        var promise = this._promiseAt(i);
	        if (!(promise instanceof Promise)) {
	            var receiver = this._receiverAt(i);
	            if (typeof handler === "function") {
	                handler.call(receiver, progressValue, promise);
	            } else if (receiver instanceof PromiseArray &&
	                       !receiver._isResolved()) {
	                receiver._promiseProgressed(progressValue, promise);
	            }
	            continue;
	        }

	        if (typeof handler === "function") {
	            async.invoke(this._doProgressWith, this, {
	                handler: handler,
	                promise: promise,
	                receiver: this._receiverAt(i),
	                value: progressValue
	            });
	        } else {
	            async.invoke(progress, promise, progressValue);
	        }
	    }
	};
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports =
	function(Promise, INTERNAL, tryConvertToPromise, apiRejection) {
	var util = __webpack_require__(16);
	var tryCatch = util.tryCatch;

	Promise.method = function (fn) {
	    if (typeof fn !== "function") {
	        throw new Promise.TypeError("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
	    }
	    return function () {
	        var ret = new Promise(INTERNAL);
	        ret._captureStackTrace();
	        ret._pushContext();
	        var value = tryCatch(fn).apply(this, arguments);
	        ret._popContext();
	        ret._resolveFromSyncValue(value);
	        return ret;
	    };
	};

	Promise.attempt = Promise["try"] = function (fn, args, ctx) {
	    if (typeof fn !== "function") {
	        return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
	    }
	    var ret = new Promise(INTERNAL);
	    ret._captureStackTrace();
	    ret._pushContext();
	    var value = util.isArray(args)
	        ? tryCatch(fn).apply(ctx, args)
	        : tryCatch(fn).call(ctx, args);
	    ret._popContext();
	    ret._resolveFromSyncValue(value);
	    return ret;
	};

	Promise.prototype._resolveFromSyncValue = function (value) {
	    if (value === util.errorObj) {
	        this._rejectCallback(value.e, false, true);
	    } else {
	        this._resolveCallback(value, true);
	    }
	};
	};


/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	module.exports = function(Promise, INTERNAL, tryConvertToPromise) {
	var rejectThis = function(_, e) {
	    this._reject(e);
	};

	var targetRejected = function(e, context) {
	    context.promiseRejectionQueued = true;
	    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
	};

	var bindingResolved = function(thisArg, context) {
	    if (this._isPending()) {
	        this._resolveCallback(context.target);
	    }
	};

	var bindingRejected = function(e, context) {
	    if (!context.promiseRejectionQueued) this._reject(e);
	};

	Promise.prototype.bind = function (thisArg) {
	    var maybePromise = tryConvertToPromise(thisArg);
	    var ret = new Promise(INTERNAL);
	    ret._propagateFrom(this, 1);
	    var target = this._target();

	    ret._setBoundTo(maybePromise);
	    if (maybePromise instanceof Promise) {
	        var context = {
	            promiseRejectionQueued: false,
	            promise: ret,
	            target: target,
	            bindingPromise: maybePromise
	        };
	        target._then(INTERNAL, targetRejected, ret._progress, ret, context);
	        maybePromise._then(
	            bindingResolved, bindingRejected, ret._progress, ret, context);
	    } else {
	        ret._resolveCallback(target);
	    }
	    return ret;
	};

	Promise.prototype._setBoundTo = function (obj) {
	    if (obj !== undefined) {
	        this._bitField = this._bitField | 131072;
	        this._boundTo = obj;
	    } else {
	        this._bitField = this._bitField & (~131072);
	    }
	};

	Promise.prototype._isBound = function () {
	    return (this._bitField & 131072) === 131072;
	};

	Promise.bind = function (thisArg, value) {
	    var maybePromise = tryConvertToPromise(thisArg);
	    var ret = new Promise(INTERNAL);

	    ret._setBoundTo(maybePromise);
	    if (maybePromise instanceof Promise) {
	        maybePromise._then(function() {
	            ret._resolveCallback(value);
	        }, ret._reject, ret._progress, ret, null);
	    } else {
	        ret._resolveCallback(value);
	    }
	    return ret;
	};
	};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, NEXT_FILTER, tryConvertToPromise) {
	var util = __webpack_require__(16);
	var isPrimitive = util.isPrimitive;
	var thrower = util.thrower;

	function returnThis() {
	    return this;
	}
	function throwThis() {
	    throw this;
	}
	function return$(r) {
	    return function() {
	        return r;
	    };
	}
	function throw$(r) {
	    return function() {
	        throw r;
	    };
	}
	function promisedFinally(ret, reasonOrValue, isFulfilled) {
	    var then;
	    if (isPrimitive(reasonOrValue)) {
	        then = isFulfilled ? return$(reasonOrValue) : throw$(reasonOrValue);
	    } else {
	        then = isFulfilled ? returnThis : throwThis;
	    }
	    return ret._then(then, thrower, undefined, reasonOrValue, undefined);
	}

	function finallyHandler(reasonOrValue) {
	    var promise = this.promise;
	    var handler = this.handler;

	    var ret = promise._isBound()
	                    ? handler.call(promise._boundValue())
	                    : handler();

	    if (ret !== undefined) {
	        var maybePromise = tryConvertToPromise(ret, promise);
	        if (maybePromise instanceof Promise) {
	            maybePromise = maybePromise._target();
	            return promisedFinally(maybePromise, reasonOrValue,
	                                    promise.isFulfilled());
	        }
	    }

	    if (promise.isRejected()) {
	        NEXT_FILTER.e = reasonOrValue;
	        return NEXT_FILTER;
	    } else {
	        return reasonOrValue;
	    }
	}

	function tapHandler(value) {
	    var promise = this.promise;
	    var handler = this.handler;

	    var ret = promise._isBound()
	                    ? handler.call(promise._boundValue(), value)
	                    : handler(value);

	    if (ret !== undefined) {
	        var maybePromise = tryConvertToPromise(ret, promise);
	        if (maybePromise instanceof Promise) {
	            maybePromise = maybePromise._target();
	            return promisedFinally(maybePromise, value, true);
	        }
	    }
	    return value;
	}

	Promise.prototype._passThroughHandler = function (handler, isFinally) {
	    if (typeof handler !== "function") return this.then();

	    var promiseAndHandler = {
	        promise: this,
	        handler: handler
	    };

	    return this._then(
	            isFinally ? finallyHandler : tapHandler,
	            isFinally ? finallyHandler : undefined, undefined,
	            promiseAndHandler, undefined);
	};

	Promise.prototype.lastly =
	Promise.prototype["finally"] = function (handler) {
	    return this._passThroughHandler(handler, true);
	};

	Promise.prototype.tap = function (handler) {
	    return this._passThroughHandler(handler, false);
	};
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var util = __webpack_require__(16);
	var isPrimitive = util.isPrimitive;

	module.exports = function(Promise) {
	var returner = function () {
	    return this;
	};
	var thrower = function () {
	    throw this;
	};
	var returnUndefined = function() {};
	var throwUndefined = function() {
	    throw undefined;
	};

	var wrapper = function (value, action) {
	    if (action === 1) {
	        return function () {
	            throw value;
	        };
	    } else if (action === 2) {
	        return function () {
	            return value;
	        };
	    }
	};


	Promise.prototype["return"] =
	Promise.prototype.thenReturn = function (value) {
	    if (value === undefined) return this.then(returnUndefined);

	    if (isPrimitive(value)) {
	        return this._then(
	            wrapper(value, 2),
	            undefined,
	            undefined,
	            undefined,
	            undefined
	       );
	    } else if (value instanceof Promise) {
	        value._ignoreRejections();
	    }
	    return this._then(returner, undefined, undefined, value, undefined);
	};

	Promise.prototype["throw"] =
	Promise.prototype.thenThrow = function (reason) {
	    if (reason === undefined) return this.then(throwUndefined);

	    if (isPrimitive(reason)) {
	        return this._then(
	            wrapper(reason, 1),
	            undefined,
	            undefined,
	            undefined,
	            undefined
	       );
	    }
	    return this._then(thrower, undefined, undefined, reason, undefined);
	};
	};


/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	module.exports = function(Promise) {
	function PromiseInspection(promise) {
	    if (promise !== undefined) {
	        promise = promise._target();
	        this._bitField = promise._bitField;
	        this._settledValue = promise._settledValue;
	    }
	    else {
	        this._bitField = 0;
	        this._settledValue = undefined;
	    }
	}

	PromiseInspection.prototype.value = function () {
	    if (!this.isFulfilled()) {
	        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/hc1DLj\u000a");
	    }
	    return this._settledValue;
	};

	PromiseInspection.prototype.error =
	PromiseInspection.prototype.reason = function () {
	    if (!this.isRejected()) {
	        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/hPuiwB\u000a");
	    }
	    return this._settledValue;
	};

	PromiseInspection.prototype.isFulfilled =
	Promise.prototype._isFulfilled = function () {
	    return (this._bitField & 268435456) > 0;
	};

	PromiseInspection.prototype.isRejected =
	Promise.prototype._isRejected = function () {
	    return (this._bitField & 134217728) > 0;
	};

	PromiseInspection.prototype.isPending =
	Promise.prototype._isPending = function () {
	    return (this._bitField & 402653184) === 0;
	};

	PromiseInspection.prototype.isResolved =
	Promise.prototype._isResolved = function () {
	    return (this._bitField & 402653184) > 0;
	};

	Promise.prototype.isPending = function() {
	    return this._target()._isPending();
	};

	Promise.prototype.isRejected = function() {
	    return this._target()._isRejected();
	};

	Promise.prototype.isFulfilled = function() {
	    return this._target()._isFulfilled();
	};

	Promise.prototype.isResolved = function() {
	    return this._target()._isResolved();
	};

	Promise.prototype._value = function() {
	    return this._settledValue;
	};

	Promise.prototype._reason = function() {
	    this._unsetRejectionIsUnhandled();
	    return this._settledValue;
	};

	Promise.prototype.value = function() {
	    var target = this._target();
	    if (!target.isFulfilled()) {
	        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/hc1DLj\u000a");
	    }
	    return target._settledValue;
	};

	Promise.prototype.reason = function() {
	    var target = this._target();
	    if (!target.isRejected()) {
	        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/hPuiwB\u000a");
	    }
	    target._unsetRejectionIsUnhandled();
	    return target._settledValue;
	};


	Promise.PromiseInspection = PromiseInspection;
	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports =
	function(Promise, PromiseArray, tryConvertToPromise, INTERNAL) {
	var util = __webpack_require__(16);
	var canEvaluate = util.canEvaluate;
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	var reject;

	if (true) {
	if (canEvaluate) {
	    var thenCallback = function(i) {
	        return new Function("value", "holder", "                             \n\
	            'use strict';                                                    \n\
	            holder.pIndex = value;                                           \n\
	            holder.checkFulfillment(this);                                   \n\
	            ".replace(/Index/g, i));
	    };

	    var caller = function(count) {
	        var values = [];
	        for (var i = 1; i <= count; ++i) values.push("holder.p" + i);
	        return new Function("holder", "                                      \n\
	            'use strict';                                                    \n\
	            var callback = holder.fn;                                        \n\
	            return callback(values);                                         \n\
	            ".replace(/values/g, values.join(", ")));
	    };
	    var thenCallbacks = [];
	    var callers = [undefined];
	    for (var i = 1; i <= 5; ++i) {
	        thenCallbacks.push(thenCallback(i));
	        callers.push(caller(i));
	    }

	    var Holder = function(total, fn) {
	        this.p1 = this.p2 = this.p3 = this.p4 = this.p5 = null;
	        this.fn = fn;
	        this.total = total;
	        this.now = 0;
	    };

	    Holder.prototype.callers = callers;
	    Holder.prototype.checkFulfillment = function(promise) {
	        var now = this.now;
	        now++;
	        var total = this.total;
	        if (now >= total) {
	            var handler = this.callers[total];
	            promise._pushContext();
	            var ret = tryCatch(handler)(this);
	            promise._popContext();
	            if (ret === errorObj) {
	                promise._rejectCallback(ret.e, false, true);
	            } else {
	                promise._resolveCallback(ret);
	            }
	        } else {
	            this.now = now;
	        }
	    };

	    var reject = function (reason) {
	        this._reject(reason);
	    };
	}
	}

	Promise.join = function () {
	    var last = arguments.length - 1;
	    var fn;
	    if (last > 0 && typeof arguments[last] === "function") {
	        fn = arguments[last];
	        if (true) {
	            if (last < 6 && canEvaluate) {
	                var ret = new Promise(INTERNAL);
	                ret._captureStackTrace();
	                var holder = new Holder(last, fn);
	                var callbacks = thenCallbacks;
	                for (var i = 0; i < last; ++i) {
	                    var maybePromise = tryConvertToPromise(arguments[i], ret);
	                    if (maybePromise instanceof Promise) {
	                        maybePromise = maybePromise._target();
	                        if (maybePromise._isPending()) {
	                            maybePromise._then(callbacks[i], reject,
	                                               undefined, ret, holder);
	                        } else if (maybePromise._isFulfilled()) {
	                            callbacks[i].call(ret,
	                                              maybePromise._value(), holder);
	                        } else {
	                            ret._reject(maybePromise._reason());
	                        }
	                    } else {
	                        callbacks[i].call(ret, maybePromise, holder);
	                    }
	                }
	                return ret;
	            }
	        }
	    }
	    var $_len = arguments.length;var args = new Array($_len); for(var $_i = 0; $_i < $_len; ++$_i) {args[$_i] = arguments[$_i];}
	    if (fn) args.pop();
	    var ret = new PromiseArray(args).promise();
	    return fn !== undefined ? ret.spread(fn) : ret;
	};

	};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise,
	                          PromiseArray,
	                          apiRejection,
	                          tryConvertToPromise,
	                          INTERNAL) {
	var getDomain = Promise._getDomain;
	var async = __webpack_require__(18);
	var util = __webpack_require__(16);
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	var PENDING = {};
	var EMPTY_ARRAY = [];

	function MappingPromiseArray(promises, fn, limit, _filter) {
	    this.constructor$(promises);
	    this._promise._captureStackTrace();
	    var domain = getDomain();
	    this._callback = domain === null ? fn : domain.bind(fn);
	    this._preservedValues = _filter === INTERNAL
	        ? new Array(this.length())
	        : null;
	    this._limit = limit;
	    this._inFlight = 0;
	    this._queue = limit >= 1 ? [] : EMPTY_ARRAY;
	    async.invoke(init, this, undefined);
	}
	util.inherits(MappingPromiseArray, PromiseArray);
	function init() {this._init$(undefined, -2);}

	MappingPromiseArray.prototype._init = function () {};

	MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    var values = this._values;
	    var length = this.length();
	    var preservedValues = this._preservedValues;
	    var limit = this._limit;
	    if (values[index] === PENDING) {
	        values[index] = value;
	        if (limit >= 1) {
	            this._inFlight--;
	            this._drainQueue();
	            if (this._isResolved()) return;
	        }
	    } else {
	        if (limit >= 1 && this._inFlight >= limit) {
	            values[index] = value;
	            this._queue.push(index);
	            return;
	        }
	        if (preservedValues !== null) preservedValues[index] = value;

	        var callback = this._callback;
	        var receiver = this._promise._boundValue();
	        this._promise._pushContext();
	        var ret = tryCatch(callback).call(receiver, value, index, length);
	        this._promise._popContext();
	        if (ret === errorObj) return this._reject(ret.e);

	        var maybePromise = tryConvertToPromise(ret, this._promise);
	        if (maybePromise instanceof Promise) {
	            maybePromise = maybePromise._target();
	            if (maybePromise._isPending()) {
	                if (limit >= 1) this._inFlight++;
	                values[index] = PENDING;
	                return maybePromise._proxyPromiseArray(this, index);
	            } else if (maybePromise._isFulfilled()) {
	                ret = maybePromise._value();
	            } else {
	                return this._reject(maybePromise._reason());
	            }
	        }
	        values[index] = ret;
	    }
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= length) {
	        if (preservedValues !== null) {
	            this._filter(values, preservedValues);
	        } else {
	            this._resolve(values);
	        }

	    }
	};

	MappingPromiseArray.prototype._drainQueue = function () {
	    var queue = this._queue;
	    var limit = this._limit;
	    var values = this._values;
	    while (queue.length > 0 && this._inFlight < limit) {
	        if (this._isResolved()) return;
	        var index = queue.pop();
	        this._promiseFulfilled(values[index], index);
	    }
	};

	MappingPromiseArray.prototype._filter = function (booleans, values) {
	    var len = values.length;
	    var ret = new Array(len);
	    var j = 0;
	    for (var i = 0; i < len; ++i) {
	        if (booleans[i]) ret[j++] = values[i];
	    }
	    ret.length = j;
	    this._resolve(ret);
	};

	MappingPromiseArray.prototype.preservedValues = function () {
	    return this._preservedValues;
	};

	function map(promises, fn, options, _filter) {
	    var limit = typeof options === "object" && options !== null
	        ? options.concurrency
	        : 0;
	    limit = typeof limit === "number" &&
	        isFinite(limit) && limit >= 1 ? limit : 0;
	    return new MappingPromiseArray(promises, fn, limit, _filter);
	}

	Promise.prototype.map = function (fn, options) {
	    if (typeof fn !== "function") return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");

	    return map(this, fn, options, null).promise();
	};

	Promise.map = function (promises, fn, options, _filter) {
	    if (typeof fn !== "function") return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
	    return map(promises, fn, options, _filter).promise();
	};


	};


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise) {
	var errors = __webpack_require__(21);
	var async = __webpack_require__(18);
	var CancellationError = errors.CancellationError;

	Promise.prototype._cancel = function (reason) {
	    if (!this.isCancellable()) return this;
	    var parent;
	    var promiseToReject = this;
	    while ((parent = promiseToReject._cancellationParent) !== undefined &&
	        parent.isCancellable()) {
	        promiseToReject = parent;
	    }
	    this._unsetCancellable();
	    promiseToReject._target()._rejectCallback(reason, false, true);
	};

	Promise.prototype.cancel = function (reason) {
	    if (!this.isCancellable()) return this;
	    if (reason === undefined) reason = new CancellationError();
	    async.invokeLater(this._cancel, this, reason);
	    return this;
	};

	Promise.prototype.cancellable = function () {
	    if (this._cancellable()) return this;
	    async.enableTrampoline();
	    this._setCancellable();
	    this._cancellationParent = undefined;
	    return this;
	};

	Promise.prototype.uncancellable = function () {
	    var ret = this.then();
	    ret._unsetCancellable();
	    return ret;
	};

	Promise.prototype.fork = function (didFulfill, didReject, didProgress) {
	    var ret = this._then(didFulfill, didReject, didProgress,
	                         undefined, undefined);

	    ret._setCancellable();
	    ret._cancellationParent = undefined;
	    return ret;
	};
	};


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function (Promise, apiRejection, tryConvertToPromise,
	    createContext) {
	    var TypeError = __webpack_require__(21).TypeError;
	    var inherits = __webpack_require__(16).inherits;
	    var PromiseInspection = Promise.PromiseInspection;

	    function inspectionMapper(inspections) {
	        var len = inspections.length;
	        for (var i = 0; i < len; ++i) {
	            var inspection = inspections[i];
	            if (inspection.isRejected()) {
	                return Promise.reject(inspection.error());
	            }
	            inspections[i] = inspection._settledValue;
	        }
	        return inspections;
	    }

	    function thrower(e) {
	        setTimeout(function(){throw e;}, 0);
	    }

	    function castPreservingDisposable(thenable) {
	        var maybePromise = tryConvertToPromise(thenable);
	        if (maybePromise !== thenable &&
	            typeof thenable._isDisposable === "function" &&
	            typeof thenable._getDisposer === "function" &&
	            thenable._isDisposable()) {
	            maybePromise._setDisposable(thenable._getDisposer());
	        }
	        return maybePromise;
	    }
	    function dispose(resources, inspection) {
	        var i = 0;
	        var len = resources.length;
	        var ret = Promise.defer();
	        function iterator() {
	            if (i >= len) return ret.resolve();
	            var maybePromise = castPreservingDisposable(resources[i++]);
	            if (maybePromise instanceof Promise &&
	                maybePromise._isDisposable()) {
	                try {
	                    maybePromise = tryConvertToPromise(
	                        maybePromise._getDisposer().tryDispose(inspection),
	                        resources.promise);
	                } catch (e) {
	                    return thrower(e);
	                }
	                if (maybePromise instanceof Promise) {
	                    return maybePromise._then(iterator, thrower,
	                                              null, null, null);
	                }
	            }
	            iterator();
	        }
	        iterator();
	        return ret.promise;
	    }

	    function disposerSuccess(value) {
	        var inspection = new PromiseInspection();
	        inspection._settledValue = value;
	        inspection._bitField = 268435456;
	        return dispose(this, inspection).thenReturn(value);
	    }

	    function disposerFail(reason) {
	        var inspection = new PromiseInspection();
	        inspection._settledValue = reason;
	        inspection._bitField = 134217728;
	        return dispose(this, inspection).thenThrow(reason);
	    }

	    function Disposer(data, promise, context) {
	        this._data = data;
	        this._promise = promise;
	        this._context = context;
	    }

	    Disposer.prototype.data = function () {
	        return this._data;
	    };

	    Disposer.prototype.promise = function () {
	        return this._promise;
	    };

	    Disposer.prototype.resource = function () {
	        if (this.promise().isFulfilled()) {
	            return this.promise().value();
	        }
	        return null;
	    };

	    Disposer.prototype.tryDispose = function(inspection) {
	        var resource = this.resource();
	        var context = this._context;
	        if (context !== undefined) context._pushContext();
	        var ret = resource !== null
	            ? this.doDispose(resource, inspection) : null;
	        if (context !== undefined) context._popContext();
	        this._promise._unsetDisposable();
	        this._data = null;
	        return ret;
	    };

	    Disposer.isDisposer = function (d) {
	        return (d != null &&
	                typeof d.resource === "function" &&
	                typeof d.tryDispose === "function");
	    };

	    function FunctionDisposer(fn, promise, context) {
	        this.constructor$(fn, promise, context);
	    }
	    inherits(FunctionDisposer, Disposer);

	    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
	        var fn = this.data();
	        return fn.call(resource, resource, inspection);
	    };

	    function maybeUnwrapDisposer(value) {
	        if (Disposer.isDisposer(value)) {
	            this.resources[this.index]._setDisposable(value);
	            return value.promise();
	        }
	        return value;
	    }

	    Promise.using = function () {
	        var len = arguments.length;
	        if (len < 2) return apiRejection(
	                        "you must pass at least 2 arguments to Promise.using");
	        var fn = arguments[len - 1];
	        if (typeof fn !== "function") return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");

	        var input;
	        var spreadArgs = true;
	        if (len === 2 && Array.isArray(arguments[0])) {
	            input = arguments[0];
	            len = input.length;
	            spreadArgs = false;
	        } else {
	            input = arguments;
	            len--;
	        }
	        var resources = new Array(len);
	        for (var i = 0; i < len; ++i) {
	            var resource = input[i];
	            if (Disposer.isDisposer(resource)) {
	                var disposer = resource;
	                resource = resource.promise();
	                resource._setDisposable(disposer);
	            } else {
	                var maybePromise = tryConvertToPromise(resource);
	                if (maybePromise instanceof Promise) {
	                    resource =
	                        maybePromise._then(maybeUnwrapDisposer, null, null, {
	                            resources: resources,
	                            index: i
	                    }, undefined);
	                }
	            }
	            resources[i] = resource;
	        }

	        var promise = Promise.settle(resources)
	            .then(inspectionMapper)
	            .then(function(vals) {
	                promise._pushContext();
	                var ret;
	                try {
	                    ret = spreadArgs
	                        ? fn.apply(undefined, vals) : fn.call(undefined,  vals);
	                } finally {
	                    promise._popContext();
	                }
	                return ret;
	            })
	            ._then(
	                disposerSuccess, disposerFail, undefined, resources, undefined);
	        resources.promise = promise;
	        return promise;
	    };

	    Promise.prototype._setDisposable = function (disposer) {
	        this._bitField = this._bitField | 262144;
	        this._disposer = disposer;
	    };

	    Promise.prototype._isDisposable = function () {
	        return (this._bitField & 262144) > 0;
	    };

	    Promise.prototype._getDisposer = function () {
	        return this._disposer;
	    };

	    Promise.prototype._unsetDisposable = function () {
	        this._bitField = this._bitField & (~262144);
	        this._disposer = undefined;
	    };

	    Promise.prototype.disposer = function (fn) {
	        if (typeof fn === "function") {
	            return new FunctionDisposer(fn, this, createContext());
	        }
	        throw new TypeError();
	    };

	};


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise,
	                          apiRejection,
	                          INTERNAL,
	                          tryConvertToPromise) {
	var errors = __webpack_require__(21);
	var TypeError = errors.TypeError;
	var util = __webpack_require__(16);
	var errorObj = util.errorObj;
	var tryCatch = util.tryCatch;
	var yieldHandlers = [];

	function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
	    for (var i = 0; i < yieldHandlers.length; ++i) {
	        traceParent._pushContext();
	        var result = tryCatch(yieldHandlers[i])(value);
	        traceParent._popContext();
	        if (result === errorObj) {
	            traceParent._pushContext();
	            var ret = Promise.reject(errorObj.e);
	            traceParent._popContext();
	            return ret;
	        }
	        var maybePromise = tryConvertToPromise(result, traceParent);
	        if (maybePromise instanceof Promise) return maybePromise;
	    }
	    return null;
	}

	function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
	    var promise = this._promise = new Promise(INTERNAL);
	    promise._captureStackTrace();
	    this._stack = stack;
	    this._generatorFunction = generatorFunction;
	    this._receiver = receiver;
	    this._generator = undefined;
	    this._yieldHandlers = typeof yieldHandler === "function"
	        ? [yieldHandler].concat(yieldHandlers)
	        : yieldHandlers;
	}

	PromiseSpawn.prototype.promise = function () {
	    return this._promise;
	};

	PromiseSpawn.prototype._run = function () {
	    this._generator = this._generatorFunction.call(this._receiver);
	    this._receiver =
	        this._generatorFunction = undefined;
	    this._next(undefined);
	};

	PromiseSpawn.prototype._continue = function (result) {
	    if (result === errorObj) {
	        return this._promise._rejectCallback(result.e, false, true);
	    }

	    var value = result.value;
	    if (result.done === true) {
	        this._promise._resolveCallback(value);
	    } else {
	        var maybePromise = tryConvertToPromise(value, this._promise);
	        if (!(maybePromise instanceof Promise)) {
	            maybePromise =
	                promiseFromYieldHandler(maybePromise,
	                                        this._yieldHandlers,
	                                        this._promise);
	            if (maybePromise === null) {
	                this._throw(
	                    new TypeError(
	                        "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/4Y4pDk\u000a\u000a".replace("%s", value) +
	                        "From coroutine:\u000a" +
	                        this._stack.split("\n").slice(1, -7).join("\n")
	                    )
	                );
	                return;
	            }
	        }
	        maybePromise._then(
	            this._next,
	            this._throw,
	            undefined,
	            this,
	            null
	       );
	    }
	};

	PromiseSpawn.prototype._throw = function (reason) {
	    this._promise._attachExtraTrace(reason);
	    this._promise._pushContext();
	    var result = tryCatch(this._generator["throw"])
	        .call(this._generator, reason);
	    this._promise._popContext();
	    this._continue(result);
	};

	PromiseSpawn.prototype._next = function (value) {
	    this._promise._pushContext();
	    var result = tryCatch(this._generator.next).call(this._generator, value);
	    this._promise._popContext();
	    this._continue(result);
	};

	Promise.coroutine = function (generatorFunction, options) {
	    if (typeof generatorFunction !== "function") {
	        throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/6Vqhm0\u000a");
	    }
	    var yieldHandler = Object(options).yieldHandler;
	    var PromiseSpawn$ = PromiseSpawn;
	    var stack = new Error().stack;
	    return function () {
	        var generator = generatorFunction.apply(this, arguments);
	        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler,
	                                      stack);
	        spawn._generator = generator;
	        spawn._next(undefined);
	        return spawn.promise();
	    };
	};

	Promise.coroutine.addYieldHandler = function(fn) {
	    if (typeof fn !== "function") throw new TypeError("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
	    yieldHandlers.push(fn);
	};

	Promise.spawn = function (generatorFunction) {
	    if (typeof generatorFunction !== "function") {
	        return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/6Vqhm0\u000a");
	    }
	    var spawn = new PromiseSpawn(generatorFunction, this);
	    var ret = spawn.promise();
	    spawn._run(Promise.spawn);
	    return ret;
	};
	};


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise) {
	var util = __webpack_require__(16);
	var async = __webpack_require__(18);
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;

	function spreadAdapter(val, nodeback) {
	    var promise = this;
	    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
	    var ret =
	        tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
	    if (ret === errorObj) {
	        async.throwLater(ret.e);
	    }
	}

	function successAdapter(val, nodeback) {
	    var promise = this;
	    var receiver = promise._boundValue();
	    var ret = val === undefined
	        ? tryCatch(nodeback).call(receiver, null)
	        : tryCatch(nodeback).call(receiver, null, val);
	    if (ret === errorObj) {
	        async.throwLater(ret.e);
	    }
	}
	function errorAdapter(reason, nodeback) {
	    var promise = this;
	    if (!reason) {
	        var target = promise._target();
	        var newReason = target._getCarriedStackTrace();
	        newReason.cause = reason;
	        reason = newReason;
	    }
	    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
	    if (ret === errorObj) {
	        async.throwLater(ret.e);
	    }
	}

	Promise.prototype.asCallback =
	Promise.prototype.nodeify = function (nodeback, options) {
	    if (typeof nodeback == "function") {
	        var adapter = successAdapter;
	        if (options !== undefined && Object(options).spread) {
	            adapter = spreadAdapter;
	        }
	        this._then(
	            adapter,
	            errorAdapter,
	            undefined,
	            this,
	            nodeback
	        );
	    }
	    return this;
	};
	};


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var cr = Object.create;
	if (cr) {
	    var callerCache = cr(null);
	    var getterCache = cr(null);
	    callerCache[" size"] = getterCache[" size"] = 0;
	}

	module.exports = function(Promise) {
	var util = __webpack_require__(16);
	var canEvaluate = util.canEvaluate;
	var isIdentifier = util.isIdentifier;

	var getMethodCaller;
	var getGetter;
	if (true) {
	var makeMethodCaller = function (methodName) {
	    return new Function("ensureMethod", "                                    \n\
	        return function(obj) {                                               \n\
	            'use strict'                                                     \n\
	            var len = this.length;                                           \n\
	            ensureMethod(obj, 'methodName');                                 \n\
	            switch(len) {                                                    \n\
	                case 1: return obj.methodName(this[0]);                      \n\
	                case 2: return obj.methodName(this[0], this[1]);             \n\
	                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
	                case 0: return obj.methodName();                             \n\
	                default:                                                     \n\
	                    return obj.methodName.apply(obj, this);                  \n\
	            }                                                                \n\
	        };                                                                   \n\
	        ".replace(/methodName/g, methodName))(ensureMethod);
	};

	var makeGetter = function (propertyName) {
	    return new Function("obj", "                                             \n\
	        'use strict';                                                        \n\
	        return obj.propertyName;                                             \n\
	        ".replace("propertyName", propertyName));
	};

	var getCompiled = function(name, compiler, cache) {
	    var ret = cache[name];
	    if (typeof ret !== "function") {
	        if (!isIdentifier(name)) {
	            return null;
	        }
	        ret = compiler(name);
	        cache[name] = ret;
	        cache[" size"]++;
	        if (cache[" size"] > 512) {
	            var keys = Object.keys(cache);
	            for (var i = 0; i < 256; ++i) delete cache[keys[i]];
	            cache[" size"] = keys.length - 256;
	        }
	    }
	    return ret;
	};

	getMethodCaller = function(name) {
	    return getCompiled(name, makeMethodCaller, callerCache);
	};

	getGetter = function(name) {
	    return getCompiled(name, makeGetter, getterCache);
	};
	}

	function ensureMethod(obj, methodName) {
	    var fn;
	    if (obj != null) fn = obj[methodName];
	    if (typeof fn !== "function") {
	        var message = "Object " + util.classString(obj) + " has no method '" +
	            util.toString(methodName) + "'";
	        throw new Promise.TypeError(message);
	    }
	    return fn;
	}

	function caller(obj) {
	    var methodName = this.pop();
	    var fn = ensureMethod(obj, methodName);
	    return fn.apply(obj, this);
	}
	Promise.prototype.call = function (methodName) {
	    var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
	    if (true) {
	        if (canEvaluate) {
	            var maybeCaller = getMethodCaller(methodName);
	            if (maybeCaller !== null) {
	                return this._then(
	                    maybeCaller, undefined, undefined, args, undefined);
	            }
	        }
	    }
	    args.push(methodName);
	    return this._then(caller, undefined, undefined, args, undefined);
	};

	function namedGetter(obj) {
	    return obj[this];
	}
	function indexedGetter(obj) {
	    var index = +this;
	    if (index < 0) index = Math.max(0, index + obj.length);
	    return obj[index];
	}
	Promise.prototype.get = function (propertyName) {
	    var isIndex = (typeof propertyName === "number");
	    var getter;
	    if (!isIndex) {
	        if (canEvaluate) {
	            var maybeGetter = getGetter(propertyName);
	            getter = maybeGetter !== null ? maybeGetter : namedGetter;
	        } else {
	            getter = namedGetter;
	        }
	    } else {
	        getter = indexedGetter;
	    }
	    return this._then(getter, undefined, undefined, propertyName, undefined);
	};
	};


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(
	    Promise, PromiseArray, tryConvertToPromise, apiRejection) {
	var util = __webpack_require__(16);
	var isObject = util.isObject;
	var es5 = __webpack_require__(17);

	function PropertiesPromiseArray(obj) {
	    var keys = es5.keys(obj);
	    var len = keys.length;
	    var values = new Array(len * 2);
	    for (var i = 0; i < len; ++i) {
	        var key = keys[i];
	        values[i] = obj[key];
	        values[i + len] = key;
	    }
	    this.constructor$(values);
	}
	util.inherits(PropertiesPromiseArray, PromiseArray);

	PropertiesPromiseArray.prototype._init = function () {
	    this._init$(undefined, -3) ;
	};

	PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    this._values[index] = value;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        var val = {};
	        var keyOffset = this.length();
	        for (var i = 0, len = this.length(); i < len; ++i) {
	            val[this._values[i + keyOffset]] = this._values[i];
	        }
	        this._resolve(val);
	    }
	};

	PropertiesPromiseArray.prototype._promiseProgressed = function (value, index) {
	    this._promise._progress({
	        key: this._values[index + this.length()],
	        value: value
	    });
	};

	PropertiesPromiseArray.prototype.shouldCopyValues = function () {
	    return false;
	};

	PropertiesPromiseArray.prototype.getActualLength = function (len) {
	    return len >> 1;
	};

	function props(promises) {
	    var ret;
	    var castValue = tryConvertToPromise(promises);

	    if (!isObject(castValue)) {
	        return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/OsFKC8\u000a");
	    } else if (castValue instanceof Promise) {
	        ret = castValue._then(
	            Promise.props, undefined, undefined, undefined, undefined);
	    } else {
	        ret = new PropertiesPromiseArray(castValue).promise();
	    }

	    if (castValue instanceof Promise) {
	        ret._propagateFrom(castValue, 4);
	    }
	    return ret;
	}

	Promise.prototype.props = function () {
	    return props(this);
	};

	Promise.props = function (promises) {
	    return props(promises);
	};
	};


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(
	    Promise, INTERNAL, tryConvertToPromise, apiRejection) {
	var isArray = __webpack_require__(16).isArray;

	var raceLater = function (promise) {
	    return promise.then(function(array) {
	        return race(array, promise);
	    });
	};

	function race(promises, parent) {
	    var maybePromise = tryConvertToPromise(promises);

	    if (maybePromise instanceof Promise) {
	        return raceLater(maybePromise);
	    } else if (!isArray(promises)) {
	        return apiRejection("expecting an array, a promise or a thenable\u000a\u000a    See http://goo.gl/s8MMhc\u000a");
	    }

	    var ret = new Promise(INTERNAL);
	    if (parent !== undefined) {
	        ret._propagateFrom(parent, 4 | 1);
	    }
	    var fulfill = ret._fulfill;
	    var reject = ret._reject;
	    for (var i = 0, len = promises.length; i < len; ++i) {
	        var val = promises[i];

	        if (val === undefined && !(i in promises)) {
	            continue;
	        }

	        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
	    }
	    return ret;
	}

	Promise.race = function (promises) {
	    return race(promises, undefined);
	};

	Promise.prototype.race = function () {
	    return race(this, undefined);
	};

	};


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise,
	                          PromiseArray,
	                          apiRejection,
	                          tryConvertToPromise,
	                          INTERNAL) {
	var getDomain = Promise._getDomain;
	var async = __webpack_require__(18);
	var util = __webpack_require__(16);
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	function ReductionPromiseArray(promises, fn, accum, _each) {
	    this.constructor$(promises);
	    this._promise._captureStackTrace();
	    this._preservedValues = _each === INTERNAL ? [] : null;
	    this._zerothIsAccum = (accum === undefined);
	    this._gotAccum = false;
	    this._reducingIndex = (this._zerothIsAccum ? 1 : 0);
	    this._valuesPhase = undefined;
	    var maybePromise = tryConvertToPromise(accum, this._promise);
	    var rejected = false;
	    var isPromise = maybePromise instanceof Promise;
	    if (isPromise) {
	        maybePromise = maybePromise._target();
	        if (maybePromise._isPending()) {
	            maybePromise._proxyPromiseArray(this, -1);
	        } else if (maybePromise._isFulfilled()) {
	            accum = maybePromise._value();
	            this._gotAccum = true;
	        } else {
	            this._reject(maybePromise._reason());
	            rejected = true;
	        }
	    }
	    if (!(isPromise || this._zerothIsAccum)) this._gotAccum = true;
	    var domain = getDomain();
	    this._callback = domain === null ? fn : domain.bind(fn);
	    this._accum = accum;
	    if (!rejected) async.invoke(init, this, undefined);
	}
	function init() {
	    this._init$(undefined, -5);
	}
	util.inherits(ReductionPromiseArray, PromiseArray);

	ReductionPromiseArray.prototype._init = function () {};

	ReductionPromiseArray.prototype._resolveEmptyArray = function () {
	    if (this._gotAccum || this._zerothIsAccum) {
	        this._resolve(this._preservedValues !== null
	                        ? [] : this._accum);
	    }
	};

	ReductionPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    var values = this._values;
	    values[index] = value;
	    var length = this.length();
	    var preservedValues = this._preservedValues;
	    var isEach = preservedValues !== null;
	    var gotAccum = this._gotAccum;
	    var valuesPhase = this._valuesPhase;
	    var valuesPhaseIndex;
	    if (!valuesPhase) {
	        valuesPhase = this._valuesPhase = new Array(length);
	        for (valuesPhaseIndex=0; valuesPhaseIndex<length; ++valuesPhaseIndex) {
	            valuesPhase[valuesPhaseIndex] = 0;
	        }
	    }
	    valuesPhaseIndex = valuesPhase[index];

	    if (index === 0 && this._zerothIsAccum) {
	        this._accum = value;
	        this._gotAccum = gotAccum = true;
	        valuesPhase[index] = ((valuesPhaseIndex === 0)
	            ? 1 : 2);
	    } else if (index === -1) {
	        this._accum = value;
	        this._gotAccum = gotAccum = true;
	    } else {
	        if (valuesPhaseIndex === 0) {
	            valuesPhase[index] = 1;
	        } else {
	            valuesPhase[index] = 2;
	            this._accum = value;
	        }
	    }
	    if (!gotAccum) return;

	    var callback = this._callback;
	    var receiver = this._promise._boundValue();
	    var ret;

	    for (var i = this._reducingIndex; i < length; ++i) {
	        valuesPhaseIndex = valuesPhase[i];
	        if (valuesPhaseIndex === 2) {
	            this._reducingIndex = i + 1;
	            continue;
	        }
	        if (valuesPhaseIndex !== 1) return;
	        value = values[i];
	        this._promise._pushContext();
	        if (isEach) {
	            preservedValues.push(value);
	            ret = tryCatch(callback).call(receiver, value, i, length);
	        }
	        else {
	            ret = tryCatch(callback)
	                .call(receiver, this._accum, value, i, length);
	        }
	        this._promise._popContext();

	        if (ret === errorObj) return this._reject(ret.e);

	        var maybePromise = tryConvertToPromise(ret, this._promise);
	        if (maybePromise instanceof Promise) {
	            maybePromise = maybePromise._target();
	            if (maybePromise._isPending()) {
	                valuesPhase[i] = 4;
	                return maybePromise._proxyPromiseArray(this, i);
	            } else if (maybePromise._isFulfilled()) {
	                ret = maybePromise._value();
	            } else {
	                return this._reject(maybePromise._reason());
	            }
	        }

	        this._reducingIndex = i + 1;
	        this._accum = ret;
	    }

	    this._resolve(isEach ? preservedValues : this._accum);
	};

	function reduce(promises, fn, initialValue, _each) {
	    if (typeof fn !== "function") return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
	    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
	    return array.promise();
	}

	Promise.prototype.reduce = function (fn, initialValue) {
	    return reduce(this, fn, initialValue, null);
	};

	Promise.reduce = function (promises, fn, initialValue, _each) {
	    return reduce(promises, fn, initialValue, _each);
	};
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports =
	    function(Promise, PromiseArray) {
	var PromiseInspection = Promise.PromiseInspection;
	var util = __webpack_require__(16);

	function SettledPromiseArray(values) {
	    this.constructor$(values);
	}
	util.inherits(SettledPromiseArray, PromiseArray);

	SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
	    this._values[index] = inspection;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        this._resolve(this._values);
	    }
	};

	SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    var ret = new PromiseInspection();
	    ret._bitField = 268435456;
	    ret._settledValue = value;
	    this._promiseResolved(index, ret);
	};
	SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
	    var ret = new PromiseInspection();
	    ret._bitField = 134217728;
	    ret._settledValue = reason;
	    this._promiseResolved(index, ret);
	};

	Promise.settle = function (promises) {
	    return new SettledPromiseArray(promises).promise();
	};

	Promise.prototype.settle = function () {
	    return new SettledPromiseArray(this).promise();
	};
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports =
	function(Promise, PromiseArray, apiRejection) {
	var util = __webpack_require__(16);
	var RangeError = __webpack_require__(21).RangeError;
	var AggregateError = __webpack_require__(21).AggregateError;
	var isArray = util.isArray;


	function SomePromiseArray(values) {
	    this.constructor$(values);
	    this._howMany = 0;
	    this._unwrap = false;
	    this._initialized = false;
	}
	util.inherits(SomePromiseArray, PromiseArray);

	SomePromiseArray.prototype._init = function () {
	    if (!this._initialized) {
	        return;
	    }
	    if (this._howMany === 0) {
	        this._resolve([]);
	        return;
	    }
	    this._init$(undefined, -5);
	    var isArrayResolved = isArray(this._values);
	    if (!this._isResolved() &&
	        isArrayResolved &&
	        this._howMany > this._canPossiblyFulfill()) {
	        this._reject(this._getRangeError(this.length()));
	    }
	};

	SomePromiseArray.prototype.init = function () {
	    this._initialized = true;
	    this._init();
	};

	SomePromiseArray.prototype.setUnwrap = function () {
	    this._unwrap = true;
	};

	SomePromiseArray.prototype.howMany = function () {
	    return this._howMany;
	};

	SomePromiseArray.prototype.setHowMany = function (count) {
	    this._howMany = count;
	};

	SomePromiseArray.prototype._promiseFulfilled = function (value) {
	    this._addFulfilled(value);
	    if (this._fulfilled() === this.howMany()) {
	        this._values.length = this.howMany();
	        if (this.howMany() === 1 && this._unwrap) {
	            this._resolve(this._values[0]);
	        } else {
	            this._resolve(this._values);
	        }
	    }

	};
	SomePromiseArray.prototype._promiseRejected = function (reason) {
	    this._addRejected(reason);
	    if (this.howMany() > this._canPossiblyFulfill()) {
	        var e = new AggregateError();
	        for (var i = this.length(); i < this._values.length; ++i) {
	            e.push(this._values[i]);
	        }
	        this._reject(e);
	    }
	};

	SomePromiseArray.prototype._fulfilled = function () {
	    return this._totalResolved;
	};

	SomePromiseArray.prototype._rejected = function () {
	    return this._values.length - this.length();
	};

	SomePromiseArray.prototype._addRejected = function (reason) {
	    this._values.push(reason);
	};

	SomePromiseArray.prototype._addFulfilled = function (value) {
	    this._values[this._totalResolved++] = value;
	};

	SomePromiseArray.prototype._canPossiblyFulfill = function () {
	    return this.length() - this._rejected();
	};

	SomePromiseArray.prototype._getRangeError = function (count) {
	    var message = "Input array must contain at least " +
	            this._howMany + " items but contains only " + count + " items";
	    return new RangeError(message);
	};

	SomePromiseArray.prototype._resolveEmptyArray = function () {
	    this._reject(this._getRangeError(0));
	};

	function some(promises, howMany) {
	    if ((howMany | 0) !== howMany || howMany < 0) {
	        return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/1wAmHx\u000a");
	    }
	    var ret = new SomePromiseArray(promises);
	    var promise = ret.promise();
	    ret.setHowMany(howMany);
	    ret.init();
	    return promise;
	}

	Promise.some = function (promises, howMany) {
	    return some(promises, howMany);
	};

	Promise.prototype.some = function (howMany) {
	    return some(this, howMany);
	};

	Promise._SomePromiseArray = SomePromiseArray;
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var THIS = {};
	var util = __webpack_require__(16);
	var nodebackForPromise = __webpack_require__(28)
	    ._nodebackForPromise;
	var withAppended = util.withAppended;
	var maybeWrapAsError = util.maybeWrapAsError;
	var canEvaluate = util.canEvaluate;
	var TypeError = __webpack_require__(21).TypeError;
	var defaultSuffix = "Async";
	var defaultPromisified = {__isPromisified__: true};
	var noCopyProps = [
	    "arity",    "length",
	    "name",
	    "arguments",
	    "caller",
	    "callee",
	    "prototype",
	    "__isPromisified__"
	];
	var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

	var defaultFilter = function(name) {
	    return util.isIdentifier(name) &&
	        name.charAt(0) !== "_" &&
	        name !== "constructor";
	};

	function propsFilter(key) {
	    return !noCopyPropsPattern.test(key);
	}

	function isPromisified(fn) {
	    try {
	        return fn.__isPromisified__ === true;
	    }
	    catch (e) {
	        return false;
	    }
	}

	function hasPromisified(obj, key, suffix) {
	    var val = util.getDataPropertyOrDefault(obj, key + suffix,
	                                            defaultPromisified);
	    return val ? isPromisified(val) : false;
	}
	function checkValid(ret, suffix, suffixRegexp) {
	    for (var i = 0; i < ret.length; i += 2) {
	        var key = ret[i];
	        if (suffixRegexp.test(key)) {
	            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
	            for (var j = 0; j < ret.length; j += 2) {
	                if (ret[j] === keyWithoutAsyncSuffix) {
	                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/iWrZbw\u000a"
	                        .replace("%s", suffix));
	                }
	            }
	        }
	    }
	}

	function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
	    var keys = util.inheritedDataKeys(obj);
	    var ret = [];
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var value = obj[key];
	        var passesDefaultFilter = filter === defaultFilter
	            ? true : defaultFilter(key, value, obj);
	        if (typeof value === "function" &&
	            !isPromisified(value) &&
	            !hasPromisified(obj, key, suffix) &&
	            filter(key, value, obj, passesDefaultFilter)) {
	            ret.push(key, value);
	        }
	    }
	    checkValid(ret, suffix, suffixRegexp);
	    return ret;
	}

	var escapeIdentRegex = function(str) {
	    return str.replace(/([$])/, "\\$");
	};

	var makeNodePromisifiedEval;
	if (true) {
	var switchCaseArgumentOrder = function(likelyArgumentCount) {
	    var ret = [likelyArgumentCount];
	    var min = Math.max(0, likelyArgumentCount - 1 - 3);
	    for(var i = likelyArgumentCount - 1; i >= min; --i) {
	        ret.push(i);
	    }
	    for(var i = likelyArgumentCount + 1; i <= 3; ++i) {
	        ret.push(i);
	    }
	    return ret;
	};

	var argumentSequence = function(argumentCount) {
	    return util.filledRange(argumentCount, "_arg", "");
	};

	var parameterDeclaration = function(parameterCount) {
	    return util.filledRange(
	        Math.max(parameterCount, 3), "_arg", "");
	};

	var parameterCount = function(fn) {
	    if (typeof fn.length === "number") {
	        return Math.max(Math.min(fn.length, 1023 + 1), 0);
	    }
	    return 0;
	};

	makeNodePromisifiedEval =
	function(callback, receiver, originalName, fn) {
	    var newParameterCount = Math.max(0, parameterCount(fn) - 1);
	    var argumentOrder = switchCaseArgumentOrder(newParameterCount);
	    var shouldProxyThis = typeof callback === "string" || receiver === THIS;

	    function generateCallForArgumentCount(count) {
	        var args = argumentSequence(count).join(", ");
	        var comma = count > 0 ? ", " : "";
	        var ret;
	        if (shouldProxyThis) {
	            ret = "ret = callback.call(this, {{args}}, nodeback); break;\n";
	        } else {
	            ret = receiver === undefined
	                ? "ret = callback({{args}}, nodeback); break;\n"
	                : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
	        }
	        return ret.replace("{{args}}", args).replace(", ", comma);
	    }

	    function generateArgumentSwitchCase() {
	        var ret = "";
	        for (var i = 0; i < argumentOrder.length; ++i) {
	            ret += "case " + argumentOrder[i] +":" +
	                generateCallForArgumentCount(argumentOrder[i]);
	        }

	        ret += "                                                             \n\
	        default:                                                             \n\
	            var args = new Array(len + 1);                                   \n\
	            var i = 0;                                                       \n\
	            for (var i = 0; i < len; ++i) {                                  \n\
	               args[i] = arguments[i];                                       \n\
	            }                                                                \n\
	            args[i] = nodeback;                                              \n\
	            [CodeForCall]                                                    \n\
	            break;                                                           \n\
	        ".replace("[CodeForCall]", (shouldProxyThis
	                                ? "ret = callback.apply(this, args);\n"
	                                : "ret = callback.apply(receiver, args);\n"));
	        return ret;
	    }

	    var getFunctionCode = typeof callback === "string"
	                                ? ("this != null ? this['"+callback+"'] : fn")
	                                : "fn";

	    return new Function("Promise",
	                        "fn",
	                        "receiver",
	                        "withAppended",
	                        "maybeWrapAsError",
	                        "nodebackForPromise",
	                        "tryCatch",
	                        "errorObj",
	                        "notEnumerableProp",
	                        "INTERNAL","'use strict';                            \n\
	        var ret = function (Parameters) {                                    \n\
	            'use strict';                                                    \n\
	            var len = arguments.length;                                      \n\
	            var promise = new Promise(INTERNAL);                             \n\
	            promise._captureStackTrace();                                    \n\
	            var nodeback = nodebackForPromise(promise);                      \n\
	            var ret;                                                         \n\
	            var callback = tryCatch([GetFunctionCode]);                      \n\
	            switch(len) {                                                    \n\
	                [CodeForSwitchCase]                                          \n\
	            }                                                                \n\
	            if (ret === errorObj) {                                          \n\
	                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
	            }                                                                \n\
	            return promise;                                                  \n\
	        };                                                                   \n\
	        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
	        return ret;                                                          \n\
	        "
	        .replace("Parameters", parameterDeclaration(newParameterCount))
	        .replace("[CodeForSwitchCase]", generateArgumentSwitchCase())
	        .replace("[GetFunctionCode]", getFunctionCode))(
	            Promise,
	            fn,
	            receiver,
	            withAppended,
	            maybeWrapAsError,
	            nodebackForPromise,
	            util.tryCatch,
	            util.errorObj,
	            util.notEnumerableProp,
	            INTERNAL
	        );
	};
	}

	function makeNodePromisifiedClosure(callback, receiver, _, fn) {
	    var defaultThis = (function() {return this;})();
	    var method = callback;
	    if (typeof method === "string") {
	        callback = fn;
	    }
	    function promisified() {
	        var _receiver = receiver;
	        if (receiver === THIS) _receiver = this;
	        var promise = new Promise(INTERNAL);
	        promise._captureStackTrace();
	        var cb = typeof method === "string" && this !== defaultThis
	            ? this[method] : callback;
	        var fn = nodebackForPromise(promise);
	        try {
	            cb.apply(_receiver, withAppended(arguments, fn));
	        } catch(e) {
	            promise._rejectCallback(maybeWrapAsError(e), true, true);
	        }
	        return promise;
	    }
	    util.notEnumerableProp(promisified, "__isPromisified__", true);
	    return promisified;
	}

	var makeNodePromisified = canEvaluate
	    ? makeNodePromisifiedEval
	    : makeNodePromisifiedClosure;

	function promisifyAll(obj, suffix, filter, promisifier) {
	    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
	    var methods =
	        promisifiableMethods(obj, suffix, suffixRegexp, filter);

	    for (var i = 0, len = methods.length; i < len; i+= 2) {
	        var key = methods[i];
	        var fn = methods[i+1];
	        var promisifiedKey = key + suffix;
	        if (promisifier === makeNodePromisified) {
	            obj[promisifiedKey] =
	                makeNodePromisified(key, THIS, key, fn, suffix);
	        } else {
	            var promisified = promisifier(fn, function() {
	                return makeNodePromisified(key, THIS, key, fn, suffix);
	            });
	            util.notEnumerableProp(promisified, "__isPromisified__", true);
	            obj[promisifiedKey] = promisified;
	        }
	    }
	    util.toFastProperties(obj);
	    return obj;
	}

	function promisify(callback, receiver) {
	    return makeNodePromisified(callback, receiver, undefined, callback);
	}

	Promise.promisify = function (fn, receiver) {
	    if (typeof fn !== "function") {
	        throw new TypeError("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
	    }
	    if (isPromisified(fn)) {
	        return fn;
	    }
	    var ret = promisify(fn, arguments.length < 2 ? THIS : receiver);
	    util.copyDescriptors(fn, ret, propsFilter);
	    return ret;
	};

	Promise.promisifyAll = function (target, options) {
	    if (typeof target !== "function" && typeof target !== "object") {
	        throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/9ITlV0\u000a");
	    }
	    options = Object(options);
	    var suffix = options.suffix;
	    if (typeof suffix !== "string") suffix = defaultSuffix;
	    var filter = options.filter;
	    if (typeof filter !== "function") filter = defaultFilter;
	    var promisifier = options.promisifier;
	    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

	    if (!util.isIdentifier(suffix)) {
	        throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/8FZo5V\u000a");
	    }

	    var keys = util.inheritedDataKeys(target);
	    for (var i = 0; i < keys.length; ++i) {
	        var value = target[keys[i]];
	        if (keys[i] !== "constructor" &&
	            util.isClass(value)) {
	            promisifyAll(value.prototype, suffix, filter, promisifier);
	            promisifyAll(value, suffix, filter, promisifier);
	        }
	    }

	    return promisifyAll(target, suffix, filter, promisifier);
	};
	};



/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	module.exports = function(Promise) {
	var SomePromiseArray = Promise._SomePromiseArray;
	function any(promises) {
	    var ret = new SomePromiseArray(promises);
	    var promise = ret.promise();
	    ret.setHowMany(1);
	    ret.setUnwrap();
	    ret.init();
	    return promise;
	}

	Promise.any = function (promises) {
	    return any(promises);
	};

	Promise.prototype.any = function () {
	    return any(this);
	};

	};


/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var PromiseReduce = Promise.reduce;

	Promise.prototype.each = function (fn) {
	    return PromiseReduce(this, fn, null, INTERNAL);
	};

	Promise.each = function (promises, fn) {
	    return PromiseReduce(promises, fn, null, INTERNAL);
	};
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var util = __webpack_require__(16);
	var TimeoutError = Promise.TimeoutError;

	var afterTimeout = function (promise, message) {
	    if (!promise.isPending()) return;
	    if (typeof message !== "string") {
	        message = "operation timed out";
	    }
	    var err = new TimeoutError(message);
	    util.markAsOriginatingFromRejection(err);
	    promise._attachExtraTrace(err);
	    promise._cancel(err);
	};

	var afterValue = function(value) { return delay(+this).thenReturn(value); };
	var delay = Promise.delay = function (value, ms) {
	    if (ms === undefined) {
	        ms = value;
	        value = undefined;
	        var ret = new Promise(INTERNAL);
	        setTimeout(function() { ret._fulfill(); }, ms);
	        return ret;
	    }
	    ms = +ms;
	    return Promise.resolve(value)._then(afterValue, null, null, ms, undefined);
	};

	Promise.prototype.delay = function (ms) {
	    return delay(this, ms);
	};

	function successClear(value) {
	    var handle = this;
	    if (handle instanceof Number) handle = +handle;
	    clearTimeout(handle);
	    return value;
	}

	function failureClear(reason) {
	    var handle = this;
	    if (handle instanceof Number) handle = +handle;
	    clearTimeout(handle);
	    throw reason;
	}

	Promise.prototype.timeout = function (ms, message) {
	    ms = +ms;
	    var ret = this.then().cancellable();
	    ret._cancellationParent = this;
	    var handle = setTimeout(function timeoutTimeout() {
	        afterTimeout(ret, message);
	    }, ms);
	    return ret._then(successClear, failureClear, undefined, handle, undefined);
	};

	};


/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var PromiseMap = Promise.map;

	Promise.prototype.filter = function (fn, options) {
	    return PromiseMap(this, fn, options, INTERNAL);
	};

	Promise.filter = function (promises, fn, options) {
	    return PromiseMap(promises, fn, options, INTERNAL);
	};
	};


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.0
	var Add, And, Append, Args, Asc, Avg, Between, Binary, Bracket, Branch, Ceil, ChangeAt, Changes, Circle, CoerceTo, ConcatMap, Config, Contains, Count, DatumTerm, Day, DayOfWeek, DayOfYear, Db, DbCreate, DbDrop, DbList, Default, Delete, DeleteAt, Desc, Difference, Distance, Distinct, Div, Downcase, During, EpochTime, Eq, EqJoin, Fill, Filter, Floor, ForEach, FunCall, Func, Ge, Geojson, Get, GetAll, GetField, GetIntersecting, GetNearest, Group, Gt, HasFields, Hours, Http, ISO8601, ImplicitVar, InTimezone, Includes, IndexCreate, IndexDrop, IndexList, IndexRename, IndexStatus, IndexWait, Info, InnerJoin, Insert, InsertAt, Intersects, IsEmpty, JavaScript, Json, Keys, Le, Limit, Line, Literal, Lt, MakeArray, MakeObject, Map, Match, Max, Merge, Min, Minutes, Mod, Month, Mul, Ne, Not, Now, Nth, Object_, OffsetsOf, Or, OrderBy, OuterJoin, Pluck, Point, Polygon, PolygonSub, Prepend, Promise, RDBConstant, RDBOp, RDBVal, RQLDate, Random, Range, Rebalance, Reconfigure, Reduce, Replace, Round, Sample, Seconds, SetDifference, SetInsert, SetIntersection, SetUnion, Skip, Slice, SpliceAt, Split, Status, Sub, Sum, Sync, Table, TableCreate, TableDrop, TableList, TermBase, Time, TimeOfDay, Timezone, ToEpochTime, ToGeojson, ToISO8601, ToJsonString, TypeOf, UUID, Ungroup, Union, Upcase, Update, UserError, Var, Wait, WithFields, Without, Year, Zip, ar, aropt, err, funcWrap, hasImplicit, intsp, intspallargs, kved, net, protoTermType, rethinkdb, shouldWrap, translateBackOptargs, translateOptargs, util, varar,
	  __slice = [].slice,
	  __hasProp = {}.hasOwnProperty,
	  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	util = __webpack_require__(10);

	err = __webpack_require__(11);

	net = __webpack_require__(6);

	protoTermType = __webpack_require__(12).Term.TermType;

	Promise = __webpack_require__(14);

	ar = util.ar;

	varar = util.varar;

	aropt = util.aropt;

	rethinkdb = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return rethinkdb.expr.apply(rethinkdb, args);
	};

	funcWrap = function(val) {
	  var ivarScan;
	  if (val === void 0) {
	    return val;
	  }
	  val = rethinkdb.expr(val);
	  ivarScan = function(node) {
	    var k, v;
	    if (!(node instanceof TermBase)) {
	      return false;
	    }
	    if (node instanceof ImplicitVar) {
	      return true;
	    }
	    if ((node.args.map(ivarScan)).some(function(a) {
	      return a;
	    })) {
	      return true;
	    }
	    if (((function() {
	      var _ref, _results;
	      _ref = node.optargs;
	      _results = [];
	      for (k in _ref) {
	        if (!__hasProp.call(_ref, k)) continue;
	        v = _ref[k];
	        _results.push(v);
	      }
	      return _results;
	    })()).map(ivarScan).some(function(a) {
	      return a;
	    })) {
	      return true;
	    }
	    return false;
	  };
	  if (ivarScan(val)) {
	    return new Func({}, function(x) {
	      return val;
	    });
	  }
	  return val;
	};

	hasImplicit = function(args) {
	  var arg, _i, _len;
	  if (Array.isArray(args)) {
	    for (_i = 0, _len = args.length; _i < _len; _i++) {
	      arg = args[_i];
	      if (hasImplicit(arg) === true) {
	        return true;
	      }
	    }
	  } else if (args === 'r.row') {
	    return true;
	  }
	  return false;
	};

	TermBase = (function() {
	  TermBase.prototype.showRunWarning = true;

	  function TermBase() {
	    var self;
	    self = ar(function(field) {
	      return self.bracket(field);
	    });
	    self.__proto__ = this.__proto__;
	    return self;
	  }

	  TermBase.prototype.run = function(connection, options, callback) {
	    if (net.isConnection(connection) === true) {
	      if (typeof options === "function") {
	        if (callback === void 0) {
	          callback = options;
	          options = {};
	        } else {
	          return Promise.reject(new err.ReqlDriverError("Second argument to `run` cannot be a function if a third argument is provided.")).nodeify(options);
	        }
	      }
	    } else if ((connection != null ? connection.constructor : void 0) === Object) {
	      if (this.showRunWarning === true) {
	        if (typeof process !== "undefined" && process !== null) {
	          process.stderr.write("RethinkDB warning: This syntax is deprecated. Please use `run(connection[, options], callback)`.");
	        }
	        this.showRunWarning = false;
	      }
	      callback = options;
	      options = connection;
	      connection = connection.connection;
	      delete options["connection"];
	    }
	    if (options == null) {
	      options = {};
	    }
	    if ((callback != null) && typeof callback !== 'function') {
	      return Promise.reject(new err.ReqlDriverError("If provided, the callback must be a function. Please use `run(connection[, options][, callback])"));
	    }
	    if (net.isConnection(connection) === false) {
	      return Promise.reject(new err.ReqlDriverError("First argument to `run` must be an open connection.")).nodeify(callback);
	    }
	    return new Promise((function(_this) {
	      return function(resolve, reject) {
	        var e, wrappedCb;
	        wrappedCb = function(err, result) {
	          if (err != null) {
	            return reject(err);
	          } else {
	            return resolve(result);
	          }
	        };
	        try {
	          return connection._start(_this, wrappedCb, options);
	        } catch (_error) {
	          e = _error;
	          return wrappedCb(e);
	        }
	      };
	    })(this)).nodeify(callback);
	  };

	  TermBase.prototype.toString = function() {
	    return err.printQuery(this);
	  };

	  return TermBase;

	})();

	RDBVal = (function(_super) {
	  __extends(RDBVal, _super);

	  function RDBVal() {
	    return RDBVal.__super__.constructor.apply(this, arguments);
	  }

	  RDBVal.prototype.eq = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Eq, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.ne = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Ne, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.lt = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Lt, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.le = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Le, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.gt = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Gt, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.ge = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Ge, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.not = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Not, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.add = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Add, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.sub = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Sub, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.mul = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Mul, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.div = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Div, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.mod = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Mod, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.floor = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Floor, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.ceil = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Ceil, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.round = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Round, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.append = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Append, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.prepend = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Prepend, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.difference = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Difference, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.setInsert = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(SetInsert, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.setUnion = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(SetUnion, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.setIntersection = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(SetIntersection, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.setDifference = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(SetDifference, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.slice = varar(1, 3, function(left, right_or_opts, opts) {
	    if (opts != null) {
	      return new Slice(opts, this, left, right_or_opts);
	    } else if (typeof right_or_opts !== 'undefined') {
	      if ((Object.prototype.toString.call(right_or_opts) === '[object Object]') && !(right_or_opts instanceof TermBase)) {
	        return new Slice(right_or_opts, this, left);
	      } else {
	        return new Slice({}, this, left, right_or_opts);
	      }
	    } else {
	      return new Slice({}, this, left);
	    }
	  });

	  RDBVal.prototype.skip = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Skip, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.limit = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Limit, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.getField = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(GetField, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.contains = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Contains, [{}, this].concat(__slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.insertAt = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(InsertAt, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.spliceAt = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(SpliceAt, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.deleteAt = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(DeleteAt, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.changeAt = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(ChangeAt, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.offsetsOf = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(OffsetsOf, [{}, this].concat(__slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.hasFields = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(HasFields, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.withFields = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(WithFields, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.keys = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Keys, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.changes = aropt(function(opts) {
	    return new Changes(opts, this);
	  });

	  RDBVal.prototype.pluck = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Pluck, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.without = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Without, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.merge = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Merge, [{}, this].concat(__slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.between = aropt(function(left, right, opts) {
	    return new Between(opts, this, left, right);
	  });

	  RDBVal.prototype.reduce = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Reduce, [{}, this].concat(__slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.map = varar(1, null, function() {
	    var args, funcArg, _i;
	    args = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), funcArg = arguments[_i++];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Map, [{}, this].concat(__slice.call(args), [funcWrap(funcArg)]), function(){});
	  });

	  RDBVal.prototype.filter = aropt(function(predicate, opts) {
	    return new Filter(opts, this, funcWrap(predicate));
	  });

	  RDBVal.prototype.concatMap = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(ConcatMap, [{}, this].concat(__slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.distinct = aropt(function(opts) {
	    return new Distinct(opts, this);
	  });

	  RDBVal.prototype.count = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Count, [{}, this].concat(__slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.union = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Union, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.nth = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Nth, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.bracket = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Bracket, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.toJSON = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(ToJsonString, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.toJsonString = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(ToJsonString, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.match = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Match, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.split = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Split, [{}, this].concat(__slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.upcase = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Upcase, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.downcase = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Downcase, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.isEmpty = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(IsEmpty, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.innerJoin = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(InnerJoin, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.outerJoin = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(OuterJoin, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.eqJoin = aropt(function(left_attr, right, opts) {
	    return new EqJoin(opts, this, funcWrap(left_attr), right);
	  });

	  RDBVal.prototype.zip = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Zip, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.coerceTo = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(CoerceTo, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.ungroup = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Ungroup, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.typeOf = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(TypeOf, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.update = aropt(function(func, opts) {
	    return new Update(opts, this, funcWrap(func));
	  });

	  RDBVal.prototype["delete"] = aropt(function(opts) {
	    return new Delete(opts, this);
	  });

	  RDBVal.prototype.replace = aropt(function(func, opts) {
	    return new Replace(opts, this, funcWrap(func));
	  });

	  RDBVal.prototype["do"] = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(FunCall, [{}, funcWrap(args.slice(-1)[0]), this].concat(__slice.call(args.slice(0, -1))), function(){});
	  };

	  RDBVal.prototype["default"] = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Default, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.or = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Or, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.and = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(And, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.branch = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Branch, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.forEach = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(ForEach, [{}, this].concat(__slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.sum = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Sum, [{}, this].concat(__slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.avg = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Avg, [{}, this].concat(__slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.info = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Info, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.sample = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Sample, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.group = function() {
	    var fields, fieldsAndOpts, opts, perhapsOptDict;
	    fieldsAndOpts = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    opts = {};
	    fields = fieldsAndOpts;
	    if (fieldsAndOpts.length > 0) {
	      perhapsOptDict = fieldsAndOpts[fieldsAndOpts.length - 1];
	      if (perhapsOptDict && (Object.prototype.toString.call(perhapsOptDict) === '[object Object]') && !(perhapsOptDict instanceof TermBase)) {
	        opts = perhapsOptDict;
	        fields = fieldsAndOpts.slice(0, fieldsAndOpts.length - 1);
	      }
	    }
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Group, [opts, this].concat(__slice.call(fields.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.orderBy = function() {
	    var attr, attrs, attrsAndOpts, opts, perhapsOptDict;
	    attrsAndOpts = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    opts = {};
	    attrs = attrsAndOpts;
	    perhapsOptDict = attrsAndOpts[attrsAndOpts.length - 1];
	    if (perhapsOptDict && (Object.prototype.toString.call(perhapsOptDict) === '[object Object]') && !(perhapsOptDict instanceof TermBase)) {
	      opts = perhapsOptDict;
	      attrs = attrsAndOpts.slice(0, attrsAndOpts.length - 1);
	    }
	    attrs = (function() {
	      var _i, _len, _results;
	      _results = [];
	      for (_i = 0, _len = attrs.length; _i < _len; _i++) {
	        attr = attrs[_i];
	        if (attr instanceof Asc || attr instanceof Desc) {
	          _results.push(attr);
	        } else {
	          _results.push(funcWrap(attr));
	        }
	      }
	      return _results;
	    })();
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(OrderBy, [opts, this].concat(__slice.call(attrs)), function(){});
	  };

	  RDBVal.prototype.toGeojson = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(ToGeojson, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.distance = aropt(function(g, opts) {
	    return new Distance(opts, this, g);
	  });

	  RDBVal.prototype.intersects = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Intersects, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.includes = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Includes, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.fill = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Fill, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.polygonSub = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(PolygonSub, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.tableCreate = aropt(function(tblName, opts) {
	    return new TableCreate(opts, this, tblName);
	  });

	  RDBVal.prototype.tableDrop = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(TableDrop, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.tableList = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(TableList, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.config = function() {
	    return new Config({}, this);
	  };

	  RDBVal.prototype.status = function() {
	    return new Status({}, this);
	  };

	  RDBVal.prototype.wait = aropt(function(opts) {
	    return new Wait(opts, this);
	  });

	  RDBVal.prototype.table = aropt(function(tblName, opts) {
	    return new Table(opts, this, tblName);
	  });

	  RDBVal.prototype.get = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Get, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.getAll = function() {
	    var keys, keysAndOpts, opts, perhapsOptDict;
	    keysAndOpts = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    opts = {};
	    keys = keysAndOpts;
	    if (keysAndOpts.length > 1) {
	      perhapsOptDict = keysAndOpts[keysAndOpts.length - 1];
	      if (perhapsOptDict && ((Object.prototype.toString.call(perhapsOptDict) === '[object Object]') && !(perhapsOptDict instanceof TermBase))) {
	        opts = perhapsOptDict;
	        keys = keysAndOpts.slice(0, keysAndOpts.length - 1);
	      }
	    }
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(GetAll, [opts, this].concat(__slice.call(keys)), function(){});
	  };

	  RDBVal.prototype.min = function() {
	    var keys, keysAndOpts, opts, perhapsOptDict;
	    keysAndOpts = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    opts = {};
	    keys = keysAndOpts;
	    if (keysAndOpts.length === 1) {
	      perhapsOptDict = keysAndOpts[0];
	      if (perhapsOptDict && ((Object.prototype.toString.call(perhapsOptDict) === '[object Object]') && !(perhapsOptDict instanceof TermBase))) {
	        opts = perhapsOptDict;
	        keys = [];
	      }
	    }
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Min, [opts, this].concat(__slice.call(keys.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.max = function() {
	    var keys, keysAndOpts, opts, perhapsOptDict;
	    keysAndOpts = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    opts = {};
	    keys = keysAndOpts;
	    if (keysAndOpts.length === 1) {
	      perhapsOptDict = keysAndOpts[0];
	      if (perhapsOptDict && ((Object.prototype.toString.call(perhapsOptDict) === '[object Object]') && !(perhapsOptDict instanceof TermBase))) {
	        opts = perhapsOptDict;
	        keys = [];
	      }
	    }
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Max, [opts, this].concat(__slice.call(keys.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.insert = aropt(function(doc, opts) {
	    return new Insert(opts, this, rethinkdb.expr(doc));
	  });

	  RDBVal.prototype.indexCreate = varar(1, 3, function(name, defun_or_opts, opts) {
	    if (opts != null) {
	      return new IndexCreate(opts, this, name, funcWrap(defun_or_opts));
	    } else if (defun_or_opts != null) {
	      if ((Object.prototype.toString.call(defun_or_opts) === '[object Object]') && !(typeof defun_or_opts === 'function') && !(defun_or_opts instanceof TermBase)) {
	        return new IndexCreate(defun_or_opts, this, name);
	      } else {
	        return new IndexCreate({}, this, name, funcWrap(defun_or_opts));
	      }
	    } else {
	      return new IndexCreate({}, this, name);
	    }
	  });

	  RDBVal.prototype.indexDrop = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(IndexDrop, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.indexList = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(IndexList, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.indexStatus = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(IndexStatus, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.indexWait = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(IndexWait, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.indexRename = aropt(function(old_name, new_name, opts) {
	    return new IndexRename(opts, this, old_name, new_name);
	  });

	  RDBVal.prototype.reconfigure = function(opts) {
	    return new Reconfigure(opts, this);
	  };

	  RDBVal.prototype.rebalance = function() {
	    return new Rebalance({}, this);
	  };

	  RDBVal.prototype.sync = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Sync, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.toISO8601 = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(ToISO8601, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.toEpochTime = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(ToEpochTime, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.inTimezone = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(InTimezone, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.during = aropt(function(t2, t3, opts) {
	    return new During(opts, this, t2, t3);
	  });

	  RDBVal.prototype.date = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(RQLDate, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.timeOfDay = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(TimeOfDay, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.timezone = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Timezone, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.year = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Year, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.month = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Month, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.day = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Day, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.dayOfWeek = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(DayOfWeek, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.dayOfYear = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(DayOfYear, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.hours = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Hours, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.minutes = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Minutes, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.seconds = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Seconds, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.uuid = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(UUID, [{}, this].concat(__slice.call(args)), function(){});
	  };

	  RDBVal.prototype.getIntersecting = aropt(function(g, opts) {
	    return new GetIntersecting(opts, this, g);
	  });

	  RDBVal.prototype.getNearest = aropt(function(g, opts) {
	    return new GetNearest(opts, this, g);
	  });

	  return RDBVal;

	})(TermBase);

	DatumTerm = (function(_super) {
	  __extends(DatumTerm, _super);

	  DatumTerm.prototype.args = [];

	  DatumTerm.prototype.optargs = {};

	  function DatumTerm(val) {
	    var self;
	    self = DatumTerm.__super__.constructor.call(this);
	    self.data = val;
	    return self;
	  }

	  DatumTerm.prototype.compose = function() {
	    switch (typeof this.data) {
	      case 'string':
	        return '"' + this.data + '"';
	      default:
	        return '' + this.data;
	    }
	  };

	  DatumTerm.prototype.build = function() {
	    if (typeof this.data === 'number') {
	      if (!isFinite(this.data)) {
	        throw new TypeError("Illegal non-finite number `" + this.data.toString() + "`.");
	      }
	    }
	    return this.data;
	  };

	  return DatumTerm;

	})(RDBVal);

	translateBackOptargs = function(optargs) {
	  var key, result, val;
	  result = {};
	  for (key in optargs) {
	    if (!__hasProp.call(optargs, key)) continue;
	    val = optargs[key];
	    result[util.toCamelCase(key)] = val;
	  }
	  return result;
	};

	translateOptargs = function(optargs) {
	  var key, result, val;
	  result = {};
	  for (key in optargs) {
	    if (!__hasProp.call(optargs, key)) continue;
	    val = optargs[key];
	    if (key === void 0 || val === void 0) {
	      continue;
	    }
	    result[util.fromCamelCase(key)] = rethinkdb.expr(val);
	  }
	  return result;
	};

	RDBOp = (function(_super) {
	  __extends(RDBOp, _super);

	  function RDBOp() {
	    var arg, args, i, optargs, self;
	    optargs = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
	    self = RDBOp.__super__.constructor.call(this);
	    self.args = (function() {
	      var _i, _len, _results;
	      _results = [];
	      for (i = _i = 0, _len = args.length; _i < _len; i = ++_i) {
	        arg = args[i];
	        if (arg !== void 0) {
	          _results.push(rethinkdb.expr(arg));
	        } else {
	          throw new err.ReqlDriverError("Argument " + i + " to " + (this.st || this.mt) + " may not be `undefined`.");
	        }
	      }
	      return _results;
	    }).call(this);
	    self.optargs = translateOptargs(optargs);
	    return self;
	  }

	  RDBOp.prototype.build = function() {
	    var add_opts, arg, key, opts, res, val, _i, _len, _ref, _ref1;
	    res = [this.tt, []];
	    _ref = this.args;
	    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	      arg = _ref[_i];
	      res[1].push(arg.build());
	    }
	    opts = {};
	    add_opts = false;
	    _ref1 = this.optargs;
	    for (key in _ref1) {
	      if (!__hasProp.call(_ref1, key)) continue;
	      val = _ref1[key];
	      add_opts = true;
	      opts[key] = val.build();
	    }
	    if (add_opts) {
	      res.push(opts);
	    }
	    return res;
	  };

	  RDBOp.prototype.compose = function(args, optargs) {
	    if (this.st) {
	      return ['r.', this.st, '(', intspallargs(args, optargs), ')'];
	    } else {
	      if (shouldWrap(this.args[0])) {
	        args[0] = ['r(', args[0], ')'];
	      }
	      return [args[0], '.', this.mt, '(', intspallargs(args.slice(1), optargs), ')'];
	    }
	  };

	  return RDBOp;

	})(RDBVal);

	RDBConstant = (function(_super) {
	  __extends(RDBConstant, _super);

	  function RDBConstant() {
	    return RDBConstant.__super__.constructor.apply(this, arguments);
	  }

	  RDBConstant.prototype.compose = function(args, optargs) {
	    return ['r.', this.st];
	  };

	  return RDBConstant;

	})(RDBOp);

	intsp = function(seq) {
	  var e, res, _i, _len, _ref;
	  if (seq[0] == null) {
	    return [];
	  }
	  res = [seq[0]];
	  _ref = seq.slice(1);
	  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	    e = _ref[_i];
	    res.push(', ', e);
	  }
	  return res;
	};

	kved = function(optargs) {
	  var k, v;
	  return [
	    '{', intsp((function() {
	      var _results;
	      _results = [];
	      for (k in optargs) {
	        if (!__hasProp.call(optargs, k)) continue;
	        v = optargs[k];
	        _results.push([k, ': ', v]);
	      }
	      return _results;
	    })()), '}'
	  ];
	};

	intspallargs = function(args, optargs) {
	  var argrepr;
	  argrepr = [];
	  if (args.length > 0) {
	    argrepr.push(intsp(args));
	  }
	  if (Object.keys(optargs).length > 0) {
	    if (argrepr.length > 0) {
	      argrepr.push(', ');
	    }
	    argrepr.push(kved(translateBackOptargs(optargs)));
	  }
	  return argrepr;
	};

	shouldWrap = function(arg) {
	  return arg instanceof DatumTerm || arg instanceof MakeArray || arg instanceof MakeObject;
	};

	MakeArray = (function(_super) {
	  __extends(MakeArray, _super);

	  function MakeArray() {
	    return MakeArray.__super__.constructor.apply(this, arguments);
	  }

	  MakeArray.prototype.tt = protoTermType.MAKE_ARRAY;

	  MakeArray.prototype.st = '[...]';

	  MakeArray.prototype.compose = function(args) {
	    return ['[', intsp(args), ']'];
	  };

	  return MakeArray;

	})(RDBOp);

	MakeObject = (function(_super) {
	  __extends(MakeObject, _super);

	  MakeObject.prototype.tt = protoTermType.MAKE_OBJECT;

	  MakeObject.prototype.st = '{...}';

	  function MakeObject(obj, nestingDepth) {
	    var key, self, val;
	    if (nestingDepth == null) {
	      nestingDepth = 20;
	    }
	    self = MakeObject.__super__.constructor.call(this, {});
	    self.optargs = {};
	    for (key in obj) {
	      if (!__hasProp.call(obj, key)) continue;
	      val = obj[key];
	      if (typeof val === 'undefined') {
	        throw new err.ReqlDriverError("Object field '" + key + "' may not be undefined");
	      }
	      self.optargs[key] = rethinkdb.expr(val, nestingDepth - 1);
	    }
	    return self;
	  }

	  MakeObject.prototype.compose = function(args, optargs) {
	    return kved(optargs);
	  };

	  MakeObject.prototype.build = function() {
	    var key, res, val, _ref;
	    res = {};
	    _ref = this.optargs;
	    for (key in _ref) {
	      if (!__hasProp.call(_ref, key)) continue;
	      val = _ref[key];
	      res[key] = val.build();
	    }
	    return res;
	  };

	  return MakeObject;

	})(RDBOp);

	Var = (function(_super) {
	  __extends(Var, _super);

	  function Var() {
	    return Var.__super__.constructor.apply(this, arguments);
	  }

	  Var.prototype.tt = protoTermType.VAR;

	  Var.prototype.compose = function(args) {
	    return ['var_' + args];
	  };

	  return Var;

	})(RDBOp);

	JavaScript = (function(_super) {
	  __extends(JavaScript, _super);

	  function JavaScript() {
	    return JavaScript.__super__.constructor.apply(this, arguments);
	  }

	  JavaScript.prototype.tt = protoTermType.JAVASCRIPT;

	  JavaScript.prototype.st = 'js';

	  return JavaScript;

	})(RDBOp);

	Http = (function(_super) {
	  __extends(Http, _super);

	  function Http() {
	    return Http.__super__.constructor.apply(this, arguments);
	  }

	  Http.prototype.tt = protoTermType.HTTP;

	  Http.prototype.st = 'http';

	  return Http;

	})(RDBOp);

	Json = (function(_super) {
	  __extends(Json, _super);

	  function Json() {
	    return Json.__super__.constructor.apply(this, arguments);
	  }

	  Json.prototype.tt = protoTermType.JSON;

	  Json.prototype.st = 'json';

	  return Json;

	})(RDBOp);

	Binary = (function(_super) {
	  __extends(Binary, _super);

	  Binary.prototype.tt = protoTermType.BINARY;

	  Binary.prototype.st = 'binary';

	  function Binary(data) {
	    var self;
	    if (data instanceof TermBase) {
	      self = Binary.__super__.constructor.call(this, {}, data);
	    } else if (data instanceof Buffer) {
	      self = Binary.__super__.constructor.call(this);
	      self.base64_data = data.toString("base64");
	    } else {
	      throw new TypeError("Parameter to `r.binary` must be a Buffer object or RQL query.");
	    }
	    return self;
	  }

	  Binary.prototype.compose = function() {
	    if (this.args.length === 0) {
	      return 'r.binary(<data>)';
	    } else {
	      return Binary.__super__.compose.apply(this, arguments);
	    }
	  };

	  Binary.prototype.build = function() {
	    if (this.args.length === 0) {
	      return {
	        '$reql_type$': 'BINARY',
	        'data': this.base64_data
	      };
	    } else {
	      return Binary.__super__.build.apply(this, arguments);
	    }
	  };

	  return Binary;

	})(RDBOp);

	Args = (function(_super) {
	  __extends(Args, _super);

	  function Args() {
	    return Args.__super__.constructor.apply(this, arguments);
	  }

	  Args.prototype.tt = protoTermType.ARGS;

	  Args.prototype.st = 'args';

	  return Args;

	})(RDBOp);

	UserError = (function(_super) {
	  __extends(UserError, _super);

	  function UserError() {
	    return UserError.__super__.constructor.apply(this, arguments);
	  }

	  UserError.prototype.tt = protoTermType.ERROR;

	  UserError.prototype.st = 'error';

	  return UserError;

	})(RDBOp);

	Random = (function(_super) {
	  __extends(Random, _super);

	  function Random() {
	    return Random.__super__.constructor.apply(this, arguments);
	  }

	  Random.prototype.tt = protoTermType.RANDOM;

	  Random.prototype.st = 'random';

	  return Random;

	})(RDBOp);

	ImplicitVar = (function(_super) {
	  __extends(ImplicitVar, _super);

	  function ImplicitVar() {
	    return ImplicitVar.__super__.constructor.apply(this, arguments);
	  }

	  ImplicitVar.prototype.tt = protoTermType.IMPLICIT_VAR;

	  ImplicitVar.prototype.compose = function() {
	    return ['r.row'];
	  };

	  return ImplicitVar;

	})(RDBOp);

	Db = (function(_super) {
	  __extends(Db, _super);

	  function Db() {
	    return Db.__super__.constructor.apply(this, arguments);
	  }

	  Db.prototype.tt = protoTermType.DB;

	  Db.prototype.st = 'db';

	  return Db;

	})(RDBOp);

	Table = (function(_super) {
	  __extends(Table, _super);

	  function Table() {
	    return Table.__super__.constructor.apply(this, arguments);
	  }

	  Table.prototype.tt = protoTermType.TABLE;

	  Table.prototype.st = 'table';

	  Table.prototype.compose = function(args, optargs) {
	    if (this.args[0] instanceof Db) {
	      return [args[0], '.table(', intspallargs(args.slice(1), optargs), ')'];
	    } else {
	      return ['r.table(', intspallargs(args, optargs), ')'];
	    }
	  };

	  return Table;

	})(RDBOp);

	Get = (function(_super) {
	  __extends(Get, _super);

	  function Get() {
	    return Get.__super__.constructor.apply(this, arguments);
	  }

	  Get.prototype.tt = protoTermType.GET;

	  Get.prototype.mt = 'get';

	  return Get;

	})(RDBOp);

	GetAll = (function(_super) {
	  __extends(GetAll, _super);

	  function GetAll() {
	    return GetAll.__super__.constructor.apply(this, arguments);
	  }

	  GetAll.prototype.tt = protoTermType.GET_ALL;

	  GetAll.prototype.mt = 'getAll';

	  return GetAll;

	})(RDBOp);

	Eq = (function(_super) {
	  __extends(Eq, _super);

	  function Eq() {
	    return Eq.__super__.constructor.apply(this, arguments);
	  }

	  Eq.prototype.tt = protoTermType.EQ;

	  Eq.prototype.mt = 'eq';

	  return Eq;

	})(RDBOp);

	Ne = (function(_super) {
	  __extends(Ne, _super);

	  function Ne() {
	    return Ne.__super__.constructor.apply(this, arguments);
	  }

	  Ne.prototype.tt = protoTermType.NE;

	  Ne.prototype.mt = 'ne';

	  return Ne;

	})(RDBOp);

	Lt = (function(_super) {
	  __extends(Lt, _super);

	  function Lt() {
	    return Lt.__super__.constructor.apply(this, arguments);
	  }

	  Lt.prototype.tt = protoTermType.LT;

	  Lt.prototype.mt = 'lt';

	  return Lt;

	})(RDBOp);

	Le = (function(_super) {
	  __extends(Le, _super);

	  function Le() {
	    return Le.__super__.constructor.apply(this, arguments);
	  }

	  Le.prototype.tt = protoTermType.LE;

	  Le.prototype.mt = 'le';

	  return Le;

	})(RDBOp);

	Gt = (function(_super) {
	  __extends(Gt, _super);

	  function Gt() {
	    return Gt.__super__.constructor.apply(this, arguments);
	  }

	  Gt.prototype.tt = protoTermType.GT;

	  Gt.prototype.mt = 'gt';

	  return Gt;

	})(RDBOp);

	Ge = (function(_super) {
	  __extends(Ge, _super);

	  function Ge() {
	    return Ge.__super__.constructor.apply(this, arguments);
	  }

	  Ge.prototype.tt = protoTermType.GE;

	  Ge.prototype.mt = 'ge';

	  return Ge;

	})(RDBOp);

	Not = (function(_super) {
	  __extends(Not, _super);

	  function Not() {
	    return Not.__super__.constructor.apply(this, arguments);
	  }

	  Not.prototype.tt = protoTermType.NOT;

	  Not.prototype.mt = 'not';

	  return Not;

	})(RDBOp);

	Add = (function(_super) {
	  __extends(Add, _super);

	  function Add() {
	    return Add.__super__.constructor.apply(this, arguments);
	  }

	  Add.prototype.tt = protoTermType.ADD;

	  Add.prototype.mt = 'add';

	  return Add;

	})(RDBOp);

	Sub = (function(_super) {
	  __extends(Sub, _super);

	  function Sub() {
	    return Sub.__super__.constructor.apply(this, arguments);
	  }

	  Sub.prototype.tt = protoTermType.SUB;

	  Sub.prototype.mt = 'sub';

	  return Sub;

	})(RDBOp);

	Mul = (function(_super) {
	  __extends(Mul, _super);

	  function Mul() {
	    return Mul.__super__.constructor.apply(this, arguments);
	  }

	  Mul.prototype.tt = protoTermType.MUL;

	  Mul.prototype.mt = 'mul';

	  return Mul;

	})(RDBOp);

	Div = (function(_super) {
	  __extends(Div, _super);

	  function Div() {
	    return Div.__super__.constructor.apply(this, arguments);
	  }

	  Div.prototype.tt = protoTermType.DIV;

	  Div.prototype.mt = 'div';

	  return Div;

	})(RDBOp);

	Mod = (function(_super) {
	  __extends(Mod, _super);

	  function Mod() {
	    return Mod.__super__.constructor.apply(this, arguments);
	  }

	  Mod.prototype.tt = protoTermType.MOD;

	  Mod.prototype.mt = 'mod';

	  return Mod;

	})(RDBOp);

	Floor = (function(_super) {
	  __extends(Floor, _super);

	  function Floor() {
	    return Floor.__super__.constructor.apply(this, arguments);
	  }

	  Floor.prototype.tt = protoTermType.FLOOR;

	  Floor.prototype.mt = 'floor';

	  return Floor;

	})(RDBOp);

	Ceil = (function(_super) {
	  __extends(Ceil, _super);

	  function Ceil() {
	    return Ceil.__super__.constructor.apply(this, arguments);
	  }

	  Ceil.prototype.tt = protoTermType.CEIL;

	  Ceil.prototype.mt = 'ceil';

	  return Ceil;

	})(RDBOp);

	Round = (function(_super) {
	  __extends(Round, _super);

	  function Round() {
	    return Round.__super__.constructor.apply(this, arguments);
	  }

	  Round.prototype.tt = protoTermType.ROUND;

	  Round.prototype.mt = 'round';

	  return Round;

	})(RDBOp);

	Append = (function(_super) {
	  __extends(Append, _super);

	  function Append() {
	    return Append.__super__.constructor.apply(this, arguments);
	  }

	  Append.prototype.tt = protoTermType.APPEND;

	  Append.prototype.mt = 'append';

	  return Append;

	})(RDBOp);

	Prepend = (function(_super) {
	  __extends(Prepend, _super);

	  function Prepend() {
	    return Prepend.__super__.constructor.apply(this, arguments);
	  }

	  Prepend.prototype.tt = protoTermType.PREPEND;

	  Prepend.prototype.mt = 'prepend';

	  return Prepend;

	})(RDBOp);

	Difference = (function(_super) {
	  __extends(Difference, _super);

	  function Difference() {
	    return Difference.__super__.constructor.apply(this, arguments);
	  }

	  Difference.prototype.tt = protoTermType.DIFFERENCE;

	  Difference.prototype.mt = 'difference';

	  return Difference;

	})(RDBOp);

	SetInsert = (function(_super) {
	  __extends(SetInsert, _super);

	  function SetInsert() {
	    return SetInsert.__super__.constructor.apply(this, arguments);
	  }

	  SetInsert.prototype.tt = protoTermType.SET_INSERT;

	  SetInsert.prototype.mt = 'setInsert';

	  return SetInsert;

	})(RDBOp);

	SetUnion = (function(_super) {
	  __extends(SetUnion, _super);

	  function SetUnion() {
	    return SetUnion.__super__.constructor.apply(this, arguments);
	  }

	  SetUnion.prototype.tt = protoTermType.SET_UNION;

	  SetUnion.prototype.mt = 'setUnion';

	  return SetUnion;

	})(RDBOp);

	SetIntersection = (function(_super) {
	  __extends(SetIntersection, _super);

	  function SetIntersection() {
	    return SetIntersection.__super__.constructor.apply(this, arguments);
	  }

	  SetIntersection.prototype.tt = protoTermType.SET_INTERSECTION;

	  SetIntersection.prototype.mt = 'setIntersection';

	  return SetIntersection;

	})(RDBOp);

	SetDifference = (function(_super) {
	  __extends(SetDifference, _super);

	  function SetDifference() {
	    return SetDifference.__super__.constructor.apply(this, arguments);
	  }

	  SetDifference.prototype.tt = protoTermType.SET_DIFFERENCE;

	  SetDifference.prototype.mt = 'setDifference';

	  return SetDifference;

	})(RDBOp);

	Slice = (function(_super) {
	  __extends(Slice, _super);

	  function Slice() {
	    return Slice.__super__.constructor.apply(this, arguments);
	  }

	  Slice.prototype.tt = protoTermType.SLICE;

	  Slice.prototype.mt = 'slice';

	  return Slice;

	})(RDBOp);

	Skip = (function(_super) {
	  __extends(Skip, _super);

	  function Skip() {
	    return Skip.__super__.constructor.apply(this, arguments);
	  }

	  Skip.prototype.tt = protoTermType.SKIP;

	  Skip.prototype.mt = 'skip';

	  return Skip;

	})(RDBOp);

	Limit = (function(_super) {
	  __extends(Limit, _super);

	  function Limit() {
	    return Limit.__super__.constructor.apply(this, arguments);
	  }

	  Limit.prototype.tt = protoTermType.LIMIT;

	  Limit.prototype.mt = 'limit';

	  return Limit;

	})(RDBOp);

	GetField = (function(_super) {
	  __extends(GetField, _super);

	  function GetField() {
	    return GetField.__super__.constructor.apply(this, arguments);
	  }

	  GetField.prototype.tt = protoTermType.GET_FIELD;

	  GetField.prototype.mt = 'getField';

	  return GetField;

	})(RDBOp);

	Bracket = (function(_super) {
	  __extends(Bracket, _super);

	  function Bracket() {
	    return Bracket.__super__.constructor.apply(this, arguments);
	  }

	  Bracket.prototype.tt = protoTermType.BRACKET;

	  Bracket.prototype.st = '(...)';

	  Bracket.prototype.compose = function(args) {
	    return [args[0], '(', args[1], ')'];
	  };

	  return Bracket;

	})(RDBOp);

	Contains = (function(_super) {
	  __extends(Contains, _super);

	  function Contains() {
	    return Contains.__super__.constructor.apply(this, arguments);
	  }

	  Contains.prototype.tt = protoTermType.CONTAINS;

	  Contains.prototype.mt = 'contains';

	  return Contains;

	})(RDBOp);

	InsertAt = (function(_super) {
	  __extends(InsertAt, _super);

	  function InsertAt() {
	    return InsertAt.__super__.constructor.apply(this, arguments);
	  }

	  InsertAt.prototype.tt = protoTermType.INSERT_AT;

	  InsertAt.prototype.mt = 'insertAt';

	  return InsertAt;

	})(RDBOp);

	SpliceAt = (function(_super) {
	  __extends(SpliceAt, _super);

	  function SpliceAt() {
	    return SpliceAt.__super__.constructor.apply(this, arguments);
	  }

	  SpliceAt.prototype.tt = protoTermType.SPLICE_AT;

	  SpliceAt.prototype.mt = 'spliceAt';

	  return SpliceAt;

	})(RDBOp);

	DeleteAt = (function(_super) {
	  __extends(DeleteAt, _super);

	  function DeleteAt() {
	    return DeleteAt.__super__.constructor.apply(this, arguments);
	  }

	  DeleteAt.prototype.tt = protoTermType.DELETE_AT;

	  DeleteAt.prototype.mt = 'deleteAt';

	  return DeleteAt;

	})(RDBOp);

	ChangeAt = (function(_super) {
	  __extends(ChangeAt, _super);

	  function ChangeAt() {
	    return ChangeAt.__super__.constructor.apply(this, arguments);
	  }

	  ChangeAt.prototype.tt = protoTermType.CHANGE_AT;

	  ChangeAt.prototype.mt = 'changeAt';

	  return ChangeAt;

	})(RDBOp);

	HasFields = (function(_super) {
	  __extends(HasFields, _super);

	  function HasFields() {
	    return HasFields.__super__.constructor.apply(this, arguments);
	  }

	  HasFields.prototype.tt = protoTermType.HAS_FIELDS;

	  HasFields.prototype.mt = 'hasFields';

	  return HasFields;

	})(RDBOp);

	WithFields = (function(_super) {
	  __extends(WithFields, _super);

	  function WithFields() {
	    return WithFields.__super__.constructor.apply(this, arguments);
	  }

	  WithFields.prototype.tt = protoTermType.WITH_FIELDS;

	  WithFields.prototype.mt = 'withFields';

	  return WithFields;

	})(RDBOp);

	Keys = (function(_super) {
	  __extends(Keys, _super);

	  function Keys() {
	    return Keys.__super__.constructor.apply(this, arguments);
	  }

	  Keys.prototype.tt = protoTermType.KEYS;

	  Keys.prototype.mt = 'keys';

	  return Keys;

	})(RDBOp);

	Changes = (function(_super) {
	  __extends(Changes, _super);

	  function Changes() {
	    return Changes.__super__.constructor.apply(this, arguments);
	  }

	  Changes.prototype.tt = protoTermType.CHANGES;

	  Changes.prototype.mt = 'changes';

	  return Changes;

	})(RDBOp);

	Object_ = (function(_super) {
	  __extends(Object_, _super);

	  function Object_() {
	    return Object_.__super__.constructor.apply(this, arguments);
	  }

	  Object_.prototype.tt = protoTermType.OBJECT;

	  Object_.prototype.mt = 'object';

	  return Object_;

	})(RDBOp);

	Pluck = (function(_super) {
	  __extends(Pluck, _super);

	  function Pluck() {
	    return Pluck.__super__.constructor.apply(this, arguments);
	  }

	  Pluck.prototype.tt = protoTermType.PLUCK;

	  Pluck.prototype.mt = 'pluck';

	  return Pluck;

	})(RDBOp);

	OffsetsOf = (function(_super) {
	  __extends(OffsetsOf, _super);

	  function OffsetsOf() {
	    return OffsetsOf.__super__.constructor.apply(this, arguments);
	  }

	  OffsetsOf.prototype.tt = protoTermType.OFFSETS_OF;

	  OffsetsOf.prototype.mt = 'offsetsOf';

	  return OffsetsOf;

	})(RDBOp);

	Without = (function(_super) {
	  __extends(Without, _super);

	  function Without() {
	    return Without.__super__.constructor.apply(this, arguments);
	  }

	  Without.prototype.tt = protoTermType.WITHOUT;

	  Without.prototype.mt = 'without';

	  return Without;

	})(RDBOp);

	Merge = (function(_super) {
	  __extends(Merge, _super);

	  function Merge() {
	    return Merge.__super__.constructor.apply(this, arguments);
	  }

	  Merge.prototype.tt = protoTermType.MERGE;

	  Merge.prototype.mt = 'merge';

	  return Merge;

	})(RDBOp);

	Between = (function(_super) {
	  __extends(Between, _super);

	  function Between() {
	    return Between.__super__.constructor.apply(this, arguments);
	  }

	  Between.prototype.tt = protoTermType.BETWEEN;

	  Between.prototype.mt = 'between';

	  return Between;

	})(RDBOp);

	Reduce = (function(_super) {
	  __extends(Reduce, _super);

	  function Reduce() {
	    return Reduce.__super__.constructor.apply(this, arguments);
	  }

	  Reduce.prototype.tt = protoTermType.REDUCE;

	  Reduce.prototype.mt = 'reduce';

	  return Reduce;

	})(RDBOp);

	Map = (function(_super) {
	  __extends(Map, _super);

	  function Map() {
	    return Map.__super__.constructor.apply(this, arguments);
	  }

	  Map.prototype.tt = protoTermType.MAP;

	  Map.prototype.mt = 'map';

	  return Map;

	})(RDBOp);

	Filter = (function(_super) {
	  __extends(Filter, _super);

	  function Filter() {
	    return Filter.__super__.constructor.apply(this, arguments);
	  }

	  Filter.prototype.tt = protoTermType.FILTER;

	  Filter.prototype.mt = 'filter';

	  return Filter;

	})(RDBOp);

	ConcatMap = (function(_super) {
	  __extends(ConcatMap, _super);

	  function ConcatMap() {
	    return ConcatMap.__super__.constructor.apply(this, arguments);
	  }

	  ConcatMap.prototype.tt = protoTermType.CONCAT_MAP;

	  ConcatMap.prototype.mt = 'concatMap';

	  return ConcatMap;

	})(RDBOp);

	OrderBy = (function(_super) {
	  __extends(OrderBy, _super);

	  function OrderBy() {
	    return OrderBy.__super__.constructor.apply(this, arguments);
	  }

	  OrderBy.prototype.tt = protoTermType.ORDER_BY;

	  OrderBy.prototype.mt = 'orderBy';

	  return OrderBy;

	})(RDBOp);

	Distinct = (function(_super) {
	  __extends(Distinct, _super);

	  function Distinct() {
	    return Distinct.__super__.constructor.apply(this, arguments);
	  }

	  Distinct.prototype.tt = protoTermType.DISTINCT;

	  Distinct.prototype.mt = 'distinct';

	  return Distinct;

	})(RDBOp);

	Count = (function(_super) {
	  __extends(Count, _super);

	  function Count() {
	    return Count.__super__.constructor.apply(this, arguments);
	  }

	  Count.prototype.tt = protoTermType.COUNT;

	  Count.prototype.mt = 'count';

	  return Count;

	})(RDBOp);

	Union = (function(_super) {
	  __extends(Union, _super);

	  function Union() {
	    return Union.__super__.constructor.apply(this, arguments);
	  }

	  Union.prototype.tt = protoTermType.UNION;

	  Union.prototype.mt = 'union';

	  return Union;

	})(RDBOp);

	Nth = (function(_super) {
	  __extends(Nth, _super);

	  function Nth() {
	    return Nth.__super__.constructor.apply(this, arguments);
	  }

	  Nth.prototype.tt = protoTermType.NTH;

	  Nth.prototype.mt = 'nth';

	  return Nth;

	})(RDBOp);

	ToJsonString = (function(_super) {
	  __extends(ToJsonString, _super);

	  function ToJsonString() {
	    return ToJsonString.__super__.constructor.apply(this, arguments);
	  }

	  ToJsonString.prototype.tt = protoTermType.TO_JSON_STRING;

	  ToJsonString.prototype.mt = 'toJsonString';

	  return ToJsonString;

	})(RDBOp);

	Match = (function(_super) {
	  __extends(Match, _super);

	  function Match() {
	    return Match.__super__.constructor.apply(this, arguments);
	  }

	  Match.prototype.tt = protoTermType.MATCH;

	  Match.prototype.mt = 'match';

	  return Match;

	})(RDBOp);

	Split = (function(_super) {
	  __extends(Split, _super);

	  function Split() {
	    return Split.__super__.constructor.apply(this, arguments);
	  }

	  Split.prototype.tt = protoTermType.SPLIT;

	  Split.prototype.mt = 'split';

	  return Split;

	})(RDBOp);

	Upcase = (function(_super) {
	  __extends(Upcase, _super);

	  function Upcase() {
	    return Upcase.__super__.constructor.apply(this, arguments);
	  }

	  Upcase.prototype.tt = protoTermType.UPCASE;

	  Upcase.prototype.mt = 'upcase';

	  return Upcase;

	})(RDBOp);

	Downcase = (function(_super) {
	  __extends(Downcase, _super);

	  function Downcase() {
	    return Downcase.__super__.constructor.apply(this, arguments);
	  }

	  Downcase.prototype.tt = protoTermType.DOWNCASE;

	  Downcase.prototype.mt = 'downcase';

	  return Downcase;

	})(RDBOp);

	IsEmpty = (function(_super) {
	  __extends(IsEmpty, _super);

	  function IsEmpty() {
	    return IsEmpty.__super__.constructor.apply(this, arguments);
	  }

	  IsEmpty.prototype.tt = protoTermType.IS_EMPTY;

	  IsEmpty.prototype.mt = 'isEmpty';

	  return IsEmpty;

	})(RDBOp);

	Group = (function(_super) {
	  __extends(Group, _super);

	  function Group() {
	    return Group.__super__.constructor.apply(this, arguments);
	  }

	  Group.prototype.tt = protoTermType.GROUP;

	  Group.prototype.mt = 'group';

	  return Group;

	})(RDBOp);

	Sum = (function(_super) {
	  __extends(Sum, _super);

	  function Sum() {
	    return Sum.__super__.constructor.apply(this, arguments);
	  }

	  Sum.prototype.tt = protoTermType.SUM;

	  Sum.prototype.mt = 'sum';

	  return Sum;

	})(RDBOp);

	Avg = (function(_super) {
	  __extends(Avg, _super);

	  function Avg() {
	    return Avg.__super__.constructor.apply(this, arguments);
	  }

	  Avg.prototype.tt = protoTermType.AVG;

	  Avg.prototype.mt = 'avg';

	  return Avg;

	})(RDBOp);

	Min = (function(_super) {
	  __extends(Min, _super);

	  function Min() {
	    return Min.__super__.constructor.apply(this, arguments);
	  }

	  Min.prototype.tt = protoTermType.MIN;

	  Min.prototype.mt = 'min';

	  return Min;

	})(RDBOp);

	Max = (function(_super) {
	  __extends(Max, _super);

	  function Max() {
	    return Max.__super__.constructor.apply(this, arguments);
	  }

	  Max.prototype.tt = protoTermType.MAX;

	  Max.prototype.mt = 'max';

	  return Max;

	})(RDBOp);

	InnerJoin = (function(_super) {
	  __extends(InnerJoin, _super);

	  function InnerJoin() {
	    return InnerJoin.__super__.constructor.apply(this, arguments);
	  }

	  InnerJoin.prototype.tt = protoTermType.INNER_JOIN;

	  InnerJoin.prototype.mt = 'innerJoin';

	  return InnerJoin;

	})(RDBOp);

	OuterJoin = (function(_super) {
	  __extends(OuterJoin, _super);

	  function OuterJoin() {
	    return OuterJoin.__super__.constructor.apply(this, arguments);
	  }

	  OuterJoin.prototype.tt = protoTermType.OUTER_JOIN;

	  OuterJoin.prototype.mt = 'outerJoin';

	  return OuterJoin;

	})(RDBOp);

	EqJoin = (function(_super) {
	  __extends(EqJoin, _super);

	  function EqJoin() {
	    return EqJoin.__super__.constructor.apply(this, arguments);
	  }

	  EqJoin.prototype.tt = protoTermType.EQ_JOIN;

	  EqJoin.prototype.mt = 'eqJoin';

	  return EqJoin;

	})(RDBOp);

	Zip = (function(_super) {
	  __extends(Zip, _super);

	  function Zip() {
	    return Zip.__super__.constructor.apply(this, arguments);
	  }

	  Zip.prototype.tt = protoTermType.ZIP;

	  Zip.prototype.mt = 'zip';

	  return Zip;

	})(RDBOp);

	Range = (function(_super) {
	  __extends(Range, _super);

	  function Range() {
	    return Range.__super__.constructor.apply(this, arguments);
	  }

	  Range.prototype.tt = protoTermType.RANGE;

	  Range.prototype.st = 'range';

	  return Range;

	})(RDBOp);

	CoerceTo = (function(_super) {
	  __extends(CoerceTo, _super);

	  function CoerceTo() {
	    return CoerceTo.__super__.constructor.apply(this, arguments);
	  }

	  CoerceTo.prototype.tt = protoTermType.COERCE_TO;

	  CoerceTo.prototype.mt = 'coerceTo';

	  return CoerceTo;

	})(RDBOp);

	Ungroup = (function(_super) {
	  __extends(Ungroup, _super);

	  function Ungroup() {
	    return Ungroup.__super__.constructor.apply(this, arguments);
	  }

	  Ungroup.prototype.tt = protoTermType.UNGROUP;

	  Ungroup.prototype.mt = 'ungroup';

	  return Ungroup;

	})(RDBOp);

	TypeOf = (function(_super) {
	  __extends(TypeOf, _super);

	  function TypeOf() {
	    return TypeOf.__super__.constructor.apply(this, arguments);
	  }

	  TypeOf.prototype.tt = protoTermType.TYPE_OF;

	  TypeOf.prototype.mt = 'typeOf';

	  return TypeOf;

	})(RDBOp);

	Info = (function(_super) {
	  __extends(Info, _super);

	  function Info() {
	    return Info.__super__.constructor.apply(this, arguments);
	  }

	  Info.prototype.tt = protoTermType.INFO;

	  Info.prototype.mt = 'info';

	  return Info;

	})(RDBOp);

	Sample = (function(_super) {
	  __extends(Sample, _super);

	  function Sample() {
	    return Sample.__super__.constructor.apply(this, arguments);
	  }

	  Sample.prototype.tt = protoTermType.SAMPLE;

	  Sample.prototype.mt = 'sample';

	  return Sample;

	})(RDBOp);

	Update = (function(_super) {
	  __extends(Update, _super);

	  function Update() {
	    return Update.__super__.constructor.apply(this, arguments);
	  }

	  Update.prototype.tt = protoTermType.UPDATE;

	  Update.prototype.mt = 'update';

	  return Update;

	})(RDBOp);

	Delete = (function(_super) {
	  __extends(Delete, _super);

	  function Delete() {
	    return Delete.__super__.constructor.apply(this, arguments);
	  }

	  Delete.prototype.tt = protoTermType.DELETE;

	  Delete.prototype.mt = 'delete';

	  return Delete;

	})(RDBOp);

	Replace = (function(_super) {
	  __extends(Replace, _super);

	  function Replace() {
	    return Replace.__super__.constructor.apply(this, arguments);
	  }

	  Replace.prototype.tt = protoTermType.REPLACE;

	  Replace.prototype.mt = 'replace';

	  return Replace;

	})(RDBOp);

	Insert = (function(_super) {
	  __extends(Insert, _super);

	  function Insert() {
	    return Insert.__super__.constructor.apply(this, arguments);
	  }

	  Insert.prototype.tt = protoTermType.INSERT;

	  Insert.prototype.mt = 'insert';

	  return Insert;

	})(RDBOp);

	DbCreate = (function(_super) {
	  __extends(DbCreate, _super);

	  function DbCreate() {
	    return DbCreate.__super__.constructor.apply(this, arguments);
	  }

	  DbCreate.prototype.tt = protoTermType.DB_CREATE;

	  DbCreate.prototype.st = 'dbCreate';

	  return DbCreate;

	})(RDBOp);

	DbDrop = (function(_super) {
	  __extends(DbDrop, _super);

	  function DbDrop() {
	    return DbDrop.__super__.constructor.apply(this, arguments);
	  }

	  DbDrop.prototype.tt = protoTermType.DB_DROP;

	  DbDrop.prototype.st = 'dbDrop';

	  return DbDrop;

	})(RDBOp);

	DbList = (function(_super) {
	  __extends(DbList, _super);

	  function DbList() {
	    return DbList.__super__.constructor.apply(this, arguments);
	  }

	  DbList.prototype.tt = protoTermType.DB_LIST;

	  DbList.prototype.st = 'dbList';

	  return DbList;

	})(RDBOp);

	TableCreate = (function(_super) {
	  __extends(TableCreate, _super);

	  function TableCreate() {
	    return TableCreate.__super__.constructor.apply(this, arguments);
	  }

	  TableCreate.prototype.tt = protoTermType.TABLE_CREATE;

	  TableCreate.prototype.mt = 'tableCreate';

	  return TableCreate;

	})(RDBOp);

	TableDrop = (function(_super) {
	  __extends(TableDrop, _super);

	  function TableDrop() {
	    return TableDrop.__super__.constructor.apply(this, arguments);
	  }

	  TableDrop.prototype.tt = protoTermType.TABLE_DROP;

	  TableDrop.prototype.mt = 'tableDrop';

	  return TableDrop;

	})(RDBOp);

	TableList = (function(_super) {
	  __extends(TableList, _super);

	  function TableList() {
	    return TableList.__super__.constructor.apply(this, arguments);
	  }

	  TableList.prototype.tt = protoTermType.TABLE_LIST;

	  TableList.prototype.mt = 'tableList';

	  return TableList;

	})(RDBOp);

	IndexCreate = (function(_super) {
	  __extends(IndexCreate, _super);

	  function IndexCreate() {
	    return IndexCreate.__super__.constructor.apply(this, arguments);
	  }

	  IndexCreate.prototype.tt = protoTermType.INDEX_CREATE;

	  IndexCreate.prototype.mt = 'indexCreate';

	  return IndexCreate;

	})(RDBOp);

	IndexDrop = (function(_super) {
	  __extends(IndexDrop, _super);

	  function IndexDrop() {
	    return IndexDrop.__super__.constructor.apply(this, arguments);
	  }

	  IndexDrop.prototype.tt = protoTermType.INDEX_DROP;

	  IndexDrop.prototype.mt = 'indexDrop';

	  return IndexDrop;

	})(RDBOp);

	IndexRename = (function(_super) {
	  __extends(IndexRename, _super);

	  function IndexRename() {
	    return IndexRename.__super__.constructor.apply(this, arguments);
	  }

	  IndexRename.prototype.tt = protoTermType.INDEX_RENAME;

	  IndexRename.prototype.mt = 'indexRename';

	  return IndexRename;

	})(RDBOp);

	IndexList = (function(_super) {
	  __extends(IndexList, _super);

	  function IndexList() {
	    return IndexList.__super__.constructor.apply(this, arguments);
	  }

	  IndexList.prototype.tt = protoTermType.INDEX_LIST;

	  IndexList.prototype.mt = 'indexList';

	  return IndexList;

	})(RDBOp);

	IndexStatus = (function(_super) {
	  __extends(IndexStatus, _super);

	  function IndexStatus() {
	    return IndexStatus.__super__.constructor.apply(this, arguments);
	  }

	  IndexStatus.prototype.tt = protoTermType.INDEX_STATUS;

	  IndexStatus.prototype.mt = 'indexStatus';

	  return IndexStatus;

	})(RDBOp);

	IndexWait = (function(_super) {
	  __extends(IndexWait, _super);

	  function IndexWait() {
	    return IndexWait.__super__.constructor.apply(this, arguments);
	  }

	  IndexWait.prototype.tt = protoTermType.INDEX_WAIT;

	  IndexWait.prototype.mt = 'indexWait';

	  return IndexWait;

	})(RDBOp);

	Config = (function(_super) {
	  __extends(Config, _super);

	  function Config() {
	    return Config.__super__.constructor.apply(this, arguments);
	  }

	  Config.prototype.tt = protoTermType.CONFIG;

	  Config.prototype.mt = 'config';

	  return Config;

	})(RDBOp);

	Status = (function(_super) {
	  __extends(Status, _super);

	  function Status() {
	    return Status.__super__.constructor.apply(this, arguments);
	  }

	  Status.prototype.tt = protoTermType.STATUS;

	  Status.prototype.mt = 'status';

	  return Status;

	})(RDBOp);

	Wait = (function(_super) {
	  __extends(Wait, _super);

	  function Wait() {
	    return Wait.__super__.constructor.apply(this, arguments);
	  }

	  Wait.prototype.tt = protoTermType.WAIT;

	  Wait.prototype.mt = 'wait';

	  return Wait;

	})(RDBOp);

	Reconfigure = (function(_super) {
	  __extends(Reconfigure, _super);

	  function Reconfigure() {
	    return Reconfigure.__super__.constructor.apply(this, arguments);
	  }

	  Reconfigure.prototype.tt = protoTermType.RECONFIGURE;

	  Reconfigure.prototype.mt = 'reconfigure';

	  return Reconfigure;

	})(RDBOp);

	Rebalance = (function(_super) {
	  __extends(Rebalance, _super);

	  function Rebalance() {
	    return Rebalance.__super__.constructor.apply(this, arguments);
	  }

	  Rebalance.prototype.tt = protoTermType.REBALANCE;

	  Rebalance.prototype.mt = 'rebalance';

	  return Rebalance;

	})(RDBOp);

	Sync = (function(_super) {
	  __extends(Sync, _super);

	  function Sync() {
	    return Sync.__super__.constructor.apply(this, arguments);
	  }

	  Sync.prototype.tt = protoTermType.SYNC;

	  Sync.prototype.mt = 'sync';

	  return Sync;

	})(RDBOp);

	FunCall = (function(_super) {
	  __extends(FunCall, _super);

	  function FunCall() {
	    return FunCall.__super__.constructor.apply(this, arguments);
	  }

	  FunCall.prototype.tt = protoTermType.FUNCALL;

	  FunCall.prototype.st = 'do';

	  FunCall.prototype.compose = function(args) {
	    if (args.length > 2) {
	      return ['r.do(', intsp(args.slice(1)), ', ', args[0], ')'];
	    } else {
	      if (shouldWrap(this.args[1])) {
	        args[1] = ['r(', args[1], ')'];
	      }
	      return [args[1], '.do(', args[0], ')'];
	    }
	  };

	  return FunCall;

	})(RDBOp);

	Default = (function(_super) {
	  __extends(Default, _super);

	  function Default() {
	    return Default.__super__.constructor.apply(this, arguments);
	  }

	  Default.prototype.tt = protoTermType.DEFAULT;

	  Default.prototype.mt = 'default';

	  return Default;

	})(RDBOp);

	Branch = (function(_super) {
	  __extends(Branch, _super);

	  function Branch() {
	    return Branch.__super__.constructor.apply(this, arguments);
	  }

	  Branch.prototype.tt = protoTermType.BRANCH;

	  Branch.prototype.st = 'branch';

	  return Branch;

	})(RDBOp);

	Or = (function(_super) {
	  __extends(Or, _super);

	  function Or() {
	    return Or.__super__.constructor.apply(this, arguments);
	  }

	  Or.prototype.tt = protoTermType.OR;

	  Or.prototype.mt = 'or';

	  return Or;

	})(RDBOp);

	And = (function(_super) {
	  __extends(And, _super);

	  function And() {
	    return And.__super__.constructor.apply(this, arguments);
	  }

	  And.prototype.tt = protoTermType.AND;

	  And.prototype.mt = 'and';

	  return And;

	})(RDBOp);

	ForEach = (function(_super) {
	  __extends(ForEach, _super);

	  function ForEach() {
	    return ForEach.__super__.constructor.apply(this, arguments);
	  }

	  ForEach.prototype.tt = protoTermType.FOR_EACH;

	  ForEach.prototype.mt = 'forEach';

	  return ForEach;

	})(RDBOp);

	Func = (function(_super) {
	  __extends(Func, _super);

	  Func.prototype.tt = protoTermType.FUNC;

	  Func.nextVarId = 0;

	  function Func(optargs, func) {
	    var argNums, args, argsArr, body, i;
	    args = [];
	    argNums = [];
	    i = 0;
	    while (i < func.length) {
	      argNums.push(Func.nextVarId);
	      args.push(new Var({}, Func.nextVarId));
	      Func.nextVarId++;
	      i++;
	    }
	    body = func.apply(null, args);
	    if (body === void 0) {
	      throw new err.ReqlDriverError("Anonymous function returned `undefined`. Did you forget a `return`?");
	    }
	    argsArr = (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(MakeArray, [{}].concat(__slice.call(argNums)), function(){});
	    return Func.__super__.constructor.call(this, optargs, argsArr, body);
	  }

	  Func.prototype.compose = function(args) {
	    var arg, i, varStr, _i, _len, _ref;
	    if (hasImplicit(args[1]) === true) {
	      return [args[1]];
	    } else {
	      varStr = "";
	      _ref = args[0][1];
	      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
	        arg = _ref[i];
	        if (i % 2 === 0) {
	          varStr += Var.prototype.compose(arg);
	        } else {
	          varStr += arg;
	        }
	      }
	      return ['function(', varStr, ') { return ', args[1], '; }'];
	    }
	  };

	  return Func;

	})(RDBOp);

	Asc = (function(_super) {
	  __extends(Asc, _super);

	  function Asc() {
	    return Asc.__super__.constructor.apply(this, arguments);
	  }

	  Asc.prototype.tt = protoTermType.ASC;

	  Asc.prototype.st = 'asc';

	  return Asc;

	})(RDBOp);

	Desc = (function(_super) {
	  __extends(Desc, _super);

	  function Desc() {
	    return Desc.__super__.constructor.apply(this, arguments);
	  }

	  Desc.prototype.tt = protoTermType.DESC;

	  Desc.prototype.st = 'desc';

	  return Desc;

	})(RDBOp);

	Literal = (function(_super) {
	  __extends(Literal, _super);

	  function Literal() {
	    return Literal.__super__.constructor.apply(this, arguments);
	  }

	  Literal.prototype.tt = protoTermType.LITERAL;

	  Literal.prototype.st = 'literal';

	  return Literal;

	})(RDBOp);

	ISO8601 = (function(_super) {
	  __extends(ISO8601, _super);

	  function ISO8601() {
	    return ISO8601.__super__.constructor.apply(this, arguments);
	  }

	  ISO8601.prototype.tt = protoTermType.ISO8601;

	  ISO8601.prototype.st = 'ISO8601';

	  return ISO8601;

	})(RDBOp);

	ToISO8601 = (function(_super) {
	  __extends(ToISO8601, _super);

	  function ToISO8601() {
	    return ToISO8601.__super__.constructor.apply(this, arguments);
	  }

	  ToISO8601.prototype.tt = protoTermType.TO_ISO8601;

	  ToISO8601.prototype.mt = 'toISO8601';

	  return ToISO8601;

	})(RDBOp);

	EpochTime = (function(_super) {
	  __extends(EpochTime, _super);

	  function EpochTime() {
	    return EpochTime.__super__.constructor.apply(this, arguments);
	  }

	  EpochTime.prototype.tt = protoTermType.EPOCH_TIME;

	  EpochTime.prototype.st = 'epochTime';

	  return EpochTime;

	})(RDBOp);

	ToEpochTime = (function(_super) {
	  __extends(ToEpochTime, _super);

	  function ToEpochTime() {
	    return ToEpochTime.__super__.constructor.apply(this, arguments);
	  }

	  ToEpochTime.prototype.tt = protoTermType.TO_EPOCH_TIME;

	  ToEpochTime.prototype.mt = 'toEpochTime';

	  return ToEpochTime;

	})(RDBOp);

	Now = (function(_super) {
	  __extends(Now, _super);

	  function Now() {
	    return Now.__super__.constructor.apply(this, arguments);
	  }

	  Now.prototype.tt = protoTermType.NOW;

	  Now.prototype.st = 'now';

	  return Now;

	})(RDBOp);

	InTimezone = (function(_super) {
	  __extends(InTimezone, _super);

	  function InTimezone() {
	    return InTimezone.__super__.constructor.apply(this, arguments);
	  }

	  InTimezone.prototype.tt = protoTermType.IN_TIMEZONE;

	  InTimezone.prototype.mt = 'inTimezone';

	  return InTimezone;

	})(RDBOp);

	During = (function(_super) {
	  __extends(During, _super);

	  function During() {
	    return During.__super__.constructor.apply(this, arguments);
	  }

	  During.prototype.tt = protoTermType.DURING;

	  During.prototype.mt = 'during';

	  return During;

	})(RDBOp);

	RQLDate = (function(_super) {
	  __extends(RQLDate, _super);

	  function RQLDate() {
	    return RQLDate.__super__.constructor.apply(this, arguments);
	  }

	  RQLDate.prototype.tt = protoTermType.DATE;

	  RQLDate.prototype.mt = 'date';

	  return RQLDate;

	})(RDBOp);

	TimeOfDay = (function(_super) {
	  __extends(TimeOfDay, _super);

	  function TimeOfDay() {
	    return TimeOfDay.__super__.constructor.apply(this, arguments);
	  }

	  TimeOfDay.prototype.tt = protoTermType.TIME_OF_DAY;

	  TimeOfDay.prototype.mt = 'timeOfDay';

	  return TimeOfDay;

	})(RDBOp);

	Timezone = (function(_super) {
	  __extends(Timezone, _super);

	  function Timezone() {
	    return Timezone.__super__.constructor.apply(this, arguments);
	  }

	  Timezone.prototype.tt = protoTermType.TIMEZONE;

	  Timezone.prototype.mt = 'timezone';

	  return Timezone;

	})(RDBOp);

	Year = (function(_super) {
	  __extends(Year, _super);

	  function Year() {
	    return Year.__super__.constructor.apply(this, arguments);
	  }

	  Year.prototype.tt = protoTermType.YEAR;

	  Year.prototype.mt = 'year';

	  return Year;

	})(RDBOp);

	Month = (function(_super) {
	  __extends(Month, _super);

	  function Month() {
	    return Month.__super__.constructor.apply(this, arguments);
	  }

	  Month.prototype.tt = protoTermType.MONTH;

	  Month.prototype.mt = 'month';

	  return Month;

	})(RDBOp);

	Day = (function(_super) {
	  __extends(Day, _super);

	  function Day() {
	    return Day.__super__.constructor.apply(this, arguments);
	  }

	  Day.prototype.tt = protoTermType.DAY;

	  Day.prototype.mt = 'day';

	  return Day;

	})(RDBOp);

	DayOfWeek = (function(_super) {
	  __extends(DayOfWeek, _super);

	  function DayOfWeek() {
	    return DayOfWeek.__super__.constructor.apply(this, arguments);
	  }

	  DayOfWeek.prototype.tt = protoTermType.DAY_OF_WEEK;

	  DayOfWeek.prototype.mt = 'dayOfWeek';

	  return DayOfWeek;

	})(RDBOp);

	DayOfYear = (function(_super) {
	  __extends(DayOfYear, _super);

	  function DayOfYear() {
	    return DayOfYear.__super__.constructor.apply(this, arguments);
	  }

	  DayOfYear.prototype.tt = protoTermType.DAY_OF_YEAR;

	  DayOfYear.prototype.mt = 'dayOfYear';

	  return DayOfYear;

	})(RDBOp);

	Hours = (function(_super) {
	  __extends(Hours, _super);

	  function Hours() {
	    return Hours.__super__.constructor.apply(this, arguments);
	  }

	  Hours.prototype.tt = protoTermType.HOURS;

	  Hours.prototype.mt = 'hours';

	  return Hours;

	})(RDBOp);

	Minutes = (function(_super) {
	  __extends(Minutes, _super);

	  function Minutes() {
	    return Minutes.__super__.constructor.apply(this, arguments);
	  }

	  Minutes.prototype.tt = protoTermType.MINUTES;

	  Minutes.prototype.mt = 'minutes';

	  return Minutes;

	})(RDBOp);

	Seconds = (function(_super) {
	  __extends(Seconds, _super);

	  function Seconds() {
	    return Seconds.__super__.constructor.apply(this, arguments);
	  }

	  Seconds.prototype.tt = protoTermType.SECONDS;

	  Seconds.prototype.mt = 'seconds';

	  return Seconds;

	})(RDBOp);

	Time = (function(_super) {
	  __extends(Time, _super);

	  function Time() {
	    return Time.__super__.constructor.apply(this, arguments);
	  }

	  Time.prototype.tt = protoTermType.TIME;

	  Time.prototype.st = 'time';

	  return Time;

	})(RDBOp);

	Geojson = (function(_super) {
	  __extends(Geojson, _super);

	  function Geojson() {
	    return Geojson.__super__.constructor.apply(this, arguments);
	  }

	  Geojson.prototype.tt = protoTermType.GEOJSON;

	  Geojson.prototype.st = 'geojson';

	  return Geojson;

	})(RDBOp);

	ToGeojson = (function(_super) {
	  __extends(ToGeojson, _super);

	  function ToGeojson() {
	    return ToGeojson.__super__.constructor.apply(this, arguments);
	  }

	  ToGeojson.prototype.tt = protoTermType.TO_GEOJSON;

	  ToGeojson.prototype.mt = 'toGeojson';

	  return ToGeojson;

	})(RDBOp);

	Point = (function(_super) {
	  __extends(Point, _super);

	  function Point() {
	    return Point.__super__.constructor.apply(this, arguments);
	  }

	  Point.prototype.tt = protoTermType.POINT;

	  Point.prototype.st = 'point';

	  return Point;

	})(RDBOp);

	Line = (function(_super) {
	  __extends(Line, _super);

	  function Line() {
	    return Line.__super__.constructor.apply(this, arguments);
	  }

	  Line.prototype.tt = protoTermType.LINE;

	  Line.prototype.st = 'line';

	  return Line;

	})(RDBOp);

	Polygon = (function(_super) {
	  __extends(Polygon, _super);

	  function Polygon() {
	    return Polygon.__super__.constructor.apply(this, arguments);
	  }

	  Polygon.prototype.tt = protoTermType.POLYGON;

	  Polygon.prototype.st = 'polygon';

	  return Polygon;

	})(RDBOp);

	Distance = (function(_super) {
	  __extends(Distance, _super);

	  function Distance() {
	    return Distance.__super__.constructor.apply(this, arguments);
	  }

	  Distance.prototype.tt = protoTermType.DISTANCE;

	  Distance.prototype.mt = 'distance';

	  return Distance;

	})(RDBOp);

	Intersects = (function(_super) {
	  __extends(Intersects, _super);

	  function Intersects() {
	    return Intersects.__super__.constructor.apply(this, arguments);
	  }

	  Intersects.prototype.tt = protoTermType.INTERSECTS;

	  Intersects.prototype.mt = 'intersects';

	  return Intersects;

	})(RDBOp);

	Includes = (function(_super) {
	  __extends(Includes, _super);

	  function Includes() {
	    return Includes.__super__.constructor.apply(this, arguments);
	  }

	  Includes.prototype.tt = protoTermType.INCLUDES;

	  Includes.prototype.mt = 'includes';

	  return Includes;

	})(RDBOp);

	Circle = (function(_super) {
	  __extends(Circle, _super);

	  function Circle() {
	    return Circle.__super__.constructor.apply(this, arguments);
	  }

	  Circle.prototype.tt = protoTermType.CIRCLE;

	  Circle.prototype.st = 'circle';

	  return Circle;

	})(RDBOp);

	GetIntersecting = (function(_super) {
	  __extends(GetIntersecting, _super);

	  function GetIntersecting() {
	    return GetIntersecting.__super__.constructor.apply(this, arguments);
	  }

	  GetIntersecting.prototype.tt = protoTermType.GET_INTERSECTING;

	  GetIntersecting.prototype.mt = 'getIntersecting';

	  return GetIntersecting;

	})(RDBOp);

	GetNearest = (function(_super) {
	  __extends(GetNearest, _super);

	  function GetNearest() {
	    return GetNearest.__super__.constructor.apply(this, arguments);
	  }

	  GetNearest.prototype.tt = protoTermType.GET_NEAREST;

	  GetNearest.prototype.mt = 'getNearest';

	  return GetNearest;

	})(RDBOp);

	Fill = (function(_super) {
	  __extends(Fill, _super);

	  function Fill() {
	    return Fill.__super__.constructor.apply(this, arguments);
	  }

	  Fill.prototype.tt = protoTermType.FILL;

	  Fill.prototype.mt = 'fill';

	  return Fill;

	})(RDBOp);

	PolygonSub = (function(_super) {
	  __extends(PolygonSub, _super);

	  function PolygonSub() {
	    return PolygonSub.__super__.constructor.apply(this, arguments);
	  }

	  PolygonSub.prototype.tt = protoTermType.POLYGON_SUB;

	  PolygonSub.prototype.mt = 'polygonSub';

	  return PolygonSub;

	})(RDBOp);

	UUID = (function(_super) {
	  __extends(UUID, _super);

	  function UUID() {
	    return UUID.__super__.constructor.apply(this, arguments);
	  }

	  UUID.prototype.tt = protoTermType.UUID;

	  UUID.prototype.st = 'uuid';

	  return UUID;

	})(RDBOp);

	rethinkdb.expr = varar(1, 2, function(val, nestingDepth) {
	  var v;
	  if (nestingDepth == null) {
	    nestingDepth = 20;
	  }
	  if (val === void 0) {
	    throw new err.ReqlDriverError("Cannot wrap undefined with r.expr().");
	  }
	  if (nestingDepth <= 0) {
	    throw new err.ReqlDriverError("Nesting depth limit exceeded");
	  }
	  if (typeof nestingDepth !== "number" || isNaN(nestingDepth)) {
	    throw new err.ReqlDriverError("Second argument to `r.expr` must be a number or undefined.");
	  } else if (val instanceof TermBase) {
	    return val;
	  } else if (typeof val === 'function') {
	    return new Func({}, val);
	  } else if (val instanceof Date) {
	    return new ISO8601({}, val.toISOString());
	  } else if (val instanceof Buffer) {
	    return new Binary(val);
	  } else if (Array.isArray(val)) {
	    val = (function() {
	      var _i, _len, _results;
	      _results = [];
	      for (_i = 0, _len = val.length; _i < _len; _i++) {
	        v = val[_i];
	        _results.push(rethinkdb.expr(v, nestingDepth - 1));
	      }
	      return _results;
	    })();
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(MakeArray, [{}].concat(__slice.call(val)), function(){});
	  } else if (typeof val === 'number') {
	    return new DatumTerm(val);
	  } else if (Object.prototype.toString.call(val) === '[object Object]') {
	    return new MakeObject(val, nestingDepth);
	  } else {
	    return new DatumTerm(val);
	  }
	});

	rethinkdb.js = aropt(function(jssrc, opts) {
	  return new JavaScript(opts, jssrc);
	});

	rethinkdb.http = aropt(function(url, opts) {
	  return new Http(opts, url);
	});

	rethinkdb.json = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Json, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.error = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(UserError, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.random = function() {
	  var limits, limitsAndOpts, opts, perhapsOptDict;
	  limitsAndOpts = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  opts = {};
	  limits = limitsAndOpts;
	  perhapsOptDict = limitsAndOpts[limitsAndOpts.length - 1];
	  if (perhapsOptDict && ((Object.prototype.toString.call(perhapsOptDict) === '[object Object]') && !(perhapsOptDict instanceof TermBase))) {
	    opts = perhapsOptDict;
	    limits = limitsAndOpts.slice(0, limitsAndOpts.length - 1);
	  }
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Random, [opts].concat(__slice.call(limits)), function(){});
	};

	rethinkdb.binary = ar(function(data) {
	  return new Binary(data);
	});

	rethinkdb.row = new ImplicitVar({});

	rethinkdb.table = aropt(function(tblName, opts) {
	  return new Table(opts, tblName);
	});

	rethinkdb.db = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Db, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.dbCreate = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(DbCreate, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.dbDrop = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(DbDrop, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.dbList = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(DbList, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.tableCreate = aropt(function(tblName, opts) {
	  return new TableCreate(opts, tblName);
	});

	rethinkdb.tableDrop = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(TableDrop, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.tableList = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(TableList, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.wait = aropt(function(opts) {
	  return new Wait(opts);
	});

	rethinkdb.reconfigure = function(opts) {
	  return new Reconfigure(opts);
	};

	rethinkdb.rebalance = function() {
	  return new Rebalance({});
	};

	rethinkdb["do"] = varar(1, null, function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(FunCall, [{}, funcWrap(args.slice(-1)[0])].concat(__slice.call(args.slice(0, -1))), function(){});
	});

	rethinkdb.branch = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Branch, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.map = varar(1, null, function() {
	  var args, funcArg, _i;
	  args = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), funcArg = arguments[_i++];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Map, [{}].concat(__slice.call(args), [funcWrap(funcArg)]), function(){});
	});

	rethinkdb.asc = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Asc, [{}].concat(__slice.call(args.map(funcWrap))), function(){});
	};

	rethinkdb.desc = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Desc, [{}].concat(__slice.call(args.map(funcWrap))), function(){});
	};

	rethinkdb.eq = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Eq, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.ne = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Ne, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.lt = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Lt, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.le = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Le, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.gt = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Gt, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.ge = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Ge, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.or = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Or, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.and = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(And, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.not = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Not, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.add = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Add, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.sub = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Sub, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.div = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Div, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.mul = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Mul, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.mod = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Mod, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.floor = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Floor, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.ceil = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Ceil, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.round = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Round, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.typeOf = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(TypeOf, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.info = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Info, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.literal = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Literal, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.ISO8601 = aropt(function(str, opts) {
	  return new ISO8601(opts, str);
	});

	rethinkdb.epochTime = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(EpochTime, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.now = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Now, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.time = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Time, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.monday = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.MONDAY;

	  _Class.prototype.st = 'monday';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.tuesday = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.TUESDAY;

	  _Class.prototype.st = 'tuesday';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.wednesday = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.WEDNESDAY;

	  _Class.prototype.st = 'wednesday';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.thursday = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.THURSDAY;

	  _Class.prototype.st = 'thursday';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.friday = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.FRIDAY;

	  _Class.prototype.st = 'friday';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.saturday = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.SATURDAY;

	  _Class.prototype.st = 'saturday';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.sunday = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.SUNDAY;

	  _Class.prototype.st = 'sunday';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.january = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.JANUARY;

	  _Class.prototype.st = 'january';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.february = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.FEBRUARY;

	  _Class.prototype.st = 'february';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.march = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.MARCH;

	  _Class.prototype.st = 'march';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.april = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.APRIL;

	  _Class.prototype.st = 'april';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.may = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.MAY;

	  _Class.prototype.st = 'may';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.june = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.JUNE;

	  _Class.prototype.st = 'june';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.july = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.JULY;

	  _Class.prototype.st = 'july';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.august = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.AUGUST;

	  _Class.prototype.st = 'august';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.september = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.SEPTEMBER;

	  _Class.prototype.st = 'september';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.october = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.OCTOBER;

	  _Class.prototype.st = 'october';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.november = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.NOVEMBER;

	  _Class.prototype.st = 'november';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.december = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.DECEMBER;

	  _Class.prototype.st = 'december';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.minval = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.MINVAL;

	  _Class.prototype.st = 'minval';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.maxval = new ((function(_super) {
	  __extends(_Class, _super);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.MAXVAL;

	  _Class.prototype.st = 'maxval';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.object = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Object_, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.args = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Args, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.geojson = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Geojson, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.point = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Point, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.line = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Line, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.polygon = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Polygon, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.intersects = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Intersects, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.distance = aropt(function(g1, g2, opts) {
	  return new Distance(opts, g1, g2);
	});

	rethinkdb.circle = aropt(function(cen, rad, opts) {
	  return new Circle(opts, cen, rad);
	});

	rethinkdb.uuid = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(UUID, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.range = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Range, [{}].concat(__slice.call(args)), function(){});
	};

	rethinkdb.union = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Union, [{}].concat(__slice.call(args)), function(){});
	};

	module.exports = rethinkdb;


/***/ }
/******/ ]);