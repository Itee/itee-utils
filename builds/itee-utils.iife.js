this.Itee = this.Itee || {};
this.Itee.Utils = (function (exports) {
	'use strict';

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/cores/arrays
	 * @description Export the utilities methods about Arrays
	 *
	 */

	function sortBy ( propertyName, ascending = 'asc' ) {

	    const _propertyName = propertyName;
	    let resultSorter    = undefined;

	    if ( ascending === 'asc' ) {

	        resultSorter = ( a, b ) => {

	            if ( a[ _propertyName ] < b[ _propertyName ] ) {
	                return -1
	            }

	            if ( a[ _propertyName ] > b[ _propertyName ] ) {
	                return 1
	            }

	            return 0

	        };

	    } else if ( ascending === 'desc' ) {

	        resultSorter = ( a, b ) => {

	            if ( a[ _propertyName ] > b[ _propertyName ] ) {
	                return -1
	            }

	            if ( a[ _propertyName ] < b[ _propertyName ] ) {
	                return 1
	            }

	            return 0

	        };

	    } else {

	        throw 'Invalid ascending !'

	    }

	    return resultSorter

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/cores/numbers
	 * @description Export the utilities methods about numbers
	 *
	 */

	/**
	 * Returns a random number between min (inclusive) and max (exclusive)
	 */
	function getRandomArbitrary ( min = 0, max = 1 ) {
	    return Math.random() * ( max - min ) + min
	}

	/**
	 * Returns a random integer between min (inclusive) and max (inclusive)
	 * Using Math.round() will give you a non-uniform distribution!
	 */
	function getRandomInt ( min = 0, max = 1 ) {
	    return ( Math.floor( Math.random() * ( max - min + 1 ) ) + min )
	}

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	function getCjsExportFromNamespace (n) {
		return n && n['default'] || n;
	}

	var idbstore = createCommonjsModule(function (module) {
	/*global window:false, self:false, define:false, module:false */

	/**
	 * @license IDBWrapper - A cross-browser wrapper for IndexedDB
	 * Version 1.7.2
	 * Copyright (c) 2011 - 2017 Jens Arps
	 * http://jensarps.de/
	 *
	 * Licensed under the MIT license
	 */

	(function (name, definition, global) {

	    if ( module.exports) {
	        module.exports = definition();
	    } else {
	        global[name] = definition();
	    }
	})('IDBStore', function () {

	    var defaultErrorHandler = function (error) {
	        throw error;
	    };
	    var defaultSuccessHandler = function () {
	    };

	    var defaults = {
	        storeName: 'Store',
	        storePrefix: 'IDBWrapper-',
	        dbVersion: 1,
	        keyPath: 'id',
	        autoIncrement: true,
	        onStoreReady: function () {
	        },
	        onError: defaultErrorHandler,
	        indexes: [],
	        implementationPreference: [
	            'indexedDB',
	            'webkitIndexedDB',
	            'mozIndexedDB',
	            'shimIndexedDB'
	        ]
	    };

	    /**
	     *
	     * The IDBStore constructor
	     *
	     * @constructor
	     * @name IDBStore
	     * @version 1.7.2
	     *
	     * @param {Object} [kwArgs] An options object used to configure the store and
	     *  set callbacks
	     * @param {String} [kwArgs.storeName='Store'] The name of the store
	     * @param {String} [kwArgs.storePrefix='IDBWrapper-'] A prefix that is
	     *  internally used to construct the name of the database, which will be
	     *  kwArgs.storePrefix + kwArgs.storeName
	     * @param {Number} [kwArgs.dbVersion=1] The version of the store
	     * @param {String} [kwArgs.keyPath='id'] The key path to use. If you want to
	     *  setup IDBWrapper to work with out-of-line keys, you need to set this to
	     *  `null`
	     * @param {Boolean} [kwArgs.autoIncrement=true] If set to true, IDBStore will
	     *  automatically make sure a unique keyPath value is present on each object
	     *  that is stored.
	     * @param {Function} [kwArgs.onStoreReady] A callback to be called when the
	     *  store is ready to be used.
	     * @param {Function} [kwArgs.onError=throw] A callback to be called when an
	     *  error occurred during instantiation of the store.
	     * @param {Array} [kwArgs.indexes=[]] An array of indexData objects
	     *  defining the indexes to use with the store. For every index to be used
	     *  one indexData object needs to be passed in the array.
	     *  An indexData object is defined as follows:
	     * @param {Object} [kwArgs.indexes.indexData] An object defining the index to
	     *  use
	     * @param {String} kwArgs.indexes.indexData.name The name of the index
	     * @param {String} [kwArgs.indexes.indexData.keyPath] The key path of the index
	     * @param {Boolean} [kwArgs.indexes.indexData.unique] Whether the index is unique
	     * @param {Boolean} [kwArgs.indexes.indexData.multiEntry] Whether the index is multi entry
	     * @param {Array} [kwArgs.implementationPreference=['indexedDB','webkitIndexedDB','mozIndexedDB','shimIndexedDB']] An array of strings naming implementations to be used, in order or preference
	     * @param {Function} [onStoreReady] A callback to be called when the store
	     * is ready to be used.
	     * @example
	     // create a store for customers with an additional index over the
	     // `lastname` property.
	     var myCustomerStore = new IDBStore({
	         dbVersion: 1,
	         storeName: 'customer-index',
	         keyPath: 'customerid',
	         autoIncrement: true,
	         onStoreReady: populateTable,
	         indexes: [
	             { name: 'lastname', keyPath: 'lastname', unique: false, multiEntry: false }
	         ]
	     });
	     * @example
	     // create a generic store
	     var myCustomerStore = new IDBStore({
	         storeName: 'my-data-store',
	         onStoreReady: function(){
	             // start working with the store.
	         }
	     });
	     */
	    var IDBStore = function (kwArgs, onStoreReady) {

	        if (typeof onStoreReady == 'undefined' && typeof kwArgs == 'function') {
	            onStoreReady = kwArgs;
	        }
	        if (Object.prototype.toString.call(kwArgs) != '[object Object]') {
	            kwArgs = {};
	        }

	        for (var key in defaults) {
	            this[key] = typeof kwArgs[key] != 'undefined' ? kwArgs[key] : defaults[key];
	        }

	        this.dbName = this.storePrefix + this.storeName;
	        this.dbVersion = parseInt(this.dbVersion, 10) || 1;

	        onStoreReady && (this.onStoreReady = onStoreReady);

	        var env = typeof window == 'object' ? window : self;
	        var availableImplementations = this.implementationPreference.filter(function (implName) {
	            return implName in env;
	        });
	        this.implementation = availableImplementations[0];
	        this.idb = env[this.implementation];
	        this.keyRange = env.IDBKeyRange || env.webkitIDBKeyRange || env.mozIDBKeyRange;

	        this.consts = {
	            'READ_ONLY': 'readonly',
	            'READ_WRITE': 'readwrite',
	            'VERSION_CHANGE': 'versionchange',
	            'NEXT': 'next',
	            'NEXT_NO_DUPLICATE': 'nextunique',
	            'PREV': 'prev',
	            'PREV_NO_DUPLICATE': 'prevunique'
	        };

	        this.openDB();
	    };

	    /** @lends IDBStore.prototype */
	    var proto = {

	        /**
	         * A pointer to the IDBStore ctor
	         *
	         * @private
	         * @type {Function}
	         * @constructs
	         */
	        constructor: IDBStore,

	        /**
	         * The version of IDBStore
	         *
	         * @type {String}
	         */
	        version: '1.7.2',

	        /**
	         * A reference to the IndexedDB object
	         *
	         * @type {IDBDatabase}
	         */
	        db: null,

	        /**
	         * The full name of the IndexedDB used by IDBStore, composed of
	         * this.storePrefix + this.storeName
	         *
	         * @type {String}
	         */
	        dbName: null,

	        /**
	         * The version of the IndexedDB used by IDBStore
	         *
	         * @type {Number}
	         */
	        dbVersion: null,

	        /**
	         * A reference to the objectStore used by IDBStore
	         *
	         * @type {IDBObjectStore}
	         */
	        store: null,

	        /**
	         * The store name
	         *
	         * @type {String}
	         */
	        storeName: null,

	        /**
	         * The prefix to prepend to the store name
	         *
	         * @type {String}
	         */
	        storePrefix: null,

	        /**
	         * The key path
	         *
	         * @type {String}
	         */
	        keyPath: null,

	        /**
	         * Whether IDBStore uses autoIncrement
	         *
	         * @type {Boolean}
	         */
	        autoIncrement: null,

	        /**
	         * The indexes used by IDBStore
	         *
	         * @type {Array}
	         */
	        indexes: null,

	        /**
	         * The implemantations to try to use, in order of preference
	         *
	         * @type {Array}
	         */
	        implementationPreference: null,

	        /**
	         * The actual implementation being used
	         *
	         * @type {String}
	         */
	        implementation: '',

	        /**
	         * The callback to be called when the store is ready to be used
	         *
	         * @type {Function}
	         */
	        onStoreReady: null,

	        /**
	         * The callback to be called if an error occurred during instantiation
	         * of the store
	         *
	         * @type {Function}
	         */
	        onError: null,

	        /**
	         * The internal insertID counter
	         *
	         * @type {Number}
	         * @private
	         */
	        _insertIdCount: 0,

	        /**
	         * Opens an IndexedDB; called by the constructor.
	         *
	         * Will check if versions match and compare provided index configuration
	         * with existing ones, and update indexes if necessary.
	         *
	         * Will call this.onStoreReady() if everything went well and the store
	         * is ready to use, and this.onError() is something went wrong.
	         *
	         * @private
	         *
	         */
	        openDB: function () {

	            var openRequest = this.idb.open(this.dbName, this.dbVersion);
	            var preventSuccessCallback = false;

	            openRequest.onerror = function (errorEvent) {

	                if (hasVersionError(errorEvent)) {
	                    this.onError(new Error('The version number provided is lower than the existing one.'));
	                } else {
	                    var error;

	                    if (errorEvent.target.error) {
	                        error = errorEvent.target.error;
	                    } else {
	                        var errorMessage = 'IndexedDB unknown error occurred when opening DB ' + this.dbName + ' version ' + this.dbVersion;
	                        if ('errorCode' in errorEvent.target) {
	                            errorMessage += ' with error code ' + errorEvent.target.errorCode;
	                        }
	                        error = new Error(errorMessage);
	                    }

	                    this.onError(error);
	                }
	            }.bind(this);

	            openRequest.onsuccess = function (event) {

	                if (preventSuccessCallback) {
	                    return;
	                }

	                if (this.db) {
	                    this.onStoreReady();
	                    return;
	                }

	                this.db = event.target.result;

	                if (typeof this.db.version == 'string') {
	                    this.onError(new Error('The IndexedDB implementation in this browser is outdated. Please upgrade your browser.'));
	                    return;
	                }

	                if (!this.db.objectStoreNames.contains(this.storeName)) {
	                    // We should never ever get here.
	                    // Lets notify the user anyway.
	                    this.onError(new Error('Object store couldn\'t be created.'));
	                    return;
	                }

	                var emptyTransaction = this.db.transaction([this.storeName], this.consts.READ_ONLY);
	                this.store = emptyTransaction.objectStore(this.storeName);

	                // check indexes
	                var existingIndexes = Array.prototype.slice.call(this.getIndexList());
	                this.indexes.forEach(function (indexData) {
	                    var indexName = indexData.name;

	                    if (!indexName) {
	                        preventSuccessCallback = true;
	                        this.onError(new Error('Cannot create index: No index name given.'));
	                        return;
	                    }

	                    this.normalizeIndexData(indexData);

	                    if (this.hasIndex(indexName)) {
	                        // check if it complies
	                        var actualIndex = this.store.index(indexName);
	                        var complies = this.indexComplies(actualIndex, indexData);
	                        if (!complies) {
	                            preventSuccessCallback = true;
	                            this.onError(new Error('Cannot modify index "' + indexName + '" for current version. Please bump version number to ' + ( this.dbVersion + 1 ) + '.'));
	                        }

	                        existingIndexes.splice(existingIndexes.indexOf(indexName), 1);
	                    } else {
	                        preventSuccessCallback = true;
	                        this.onError(new Error('Cannot create new index "' + indexName + '" for current version. Please bump version number to ' + ( this.dbVersion + 1 ) + '.'));
	                    }

	                }, this);

	                if (existingIndexes.length) {
	                    preventSuccessCallback = true;
	                    this.onError(new Error('Cannot delete index(es) "' + existingIndexes.toString() + '" for current version. Please bump version number to ' + ( this.dbVersion + 1 ) + '.'));
	                }

	                preventSuccessCallback || this.onStoreReady();
	            }.bind(this);

	            openRequest.onupgradeneeded = function (/* IDBVersionChangeEvent */ event) {

	                this.db = event.target.result;

	                if (this.db.objectStoreNames.contains(this.storeName)) {
	                    this.store = event.target.transaction.objectStore(this.storeName);
	                } else {
	                    var optionalParameters = {autoIncrement: this.autoIncrement};
	                    if (this.keyPath !== null) {
	                        optionalParameters.keyPath = this.keyPath;
	                    }
	                    this.store = this.db.createObjectStore(this.storeName, optionalParameters);
	                }

	                var existingIndexes = Array.prototype.slice.call(this.getIndexList());
	                this.indexes.forEach(function (indexData) {
	                    var indexName = indexData.name;

	                    if (!indexName) {
	                        preventSuccessCallback = true;
	                        this.onError(new Error('Cannot create index: No index name given.'));
	                    }

	                    this.normalizeIndexData(indexData);

	                    if (this.hasIndex(indexName)) {
	                        // check if it complies
	                        var actualIndex = this.store.index(indexName);
	                        var complies = this.indexComplies(actualIndex, indexData);
	                        if (!complies) {
	                            // index differs, need to delete and re-create
	                            this.store.deleteIndex(indexName);
	                            this.store.createIndex(indexName, indexData.keyPath, {
	                                unique: indexData.unique,
	                                multiEntry: indexData.multiEntry
	                            });
	                        }

	                        existingIndexes.splice(existingIndexes.indexOf(indexName), 1);
	                    } else {
	                        this.store.createIndex(indexName, indexData.keyPath, {
	                            unique: indexData.unique,
	                            multiEntry: indexData.multiEntry
	                        });
	                    }

	                }, this);

	                if (existingIndexes.length) {
	                    existingIndexes.forEach(function (_indexName) {
	                        this.store.deleteIndex(_indexName);
	                    }, this);
	                }

	            }.bind(this);
	        },

	        /**
	         * Deletes the database used for this store if the IDB implementations
	         * provides that functionality.
	         *
	         * @param {Function} [onSuccess] A callback that is called if deletion
	         *  was successful.
	         * @param {Function} [onError] A callback that is called if deletion
	         *  failed.
	         */
	        deleteDatabase: function (onSuccess, onError) {
	            if (this.idb.deleteDatabase) {
	                this.db.close();
	                var deleteRequest = this.idb.deleteDatabase(this.dbName);
	                deleteRequest.onsuccess = onSuccess;
	                deleteRequest.onerror = onError;
	            } else {
	                onError(new Error('Browser does not support IndexedDB deleteDatabase!'));
	            }
	        },

	        /*********************
	         * data manipulation *
	         *********************/

	        /**
	         * Puts an object into the store. If an entry with the given id exists,
	         * it will be overwritten. This method has a different signature for inline
	         * keys and out-of-line keys; please see the examples below.
	         *
	         * @param {*} [key] The key to store. This is only needed if IDBWrapper
	         *  is set to use out-of-line keys. For inline keys - the default scenario -
	         *  this can be omitted.
	         * @param {Object} value The data object to store.
	         * @param {Function} [onSuccess] A callback that is called if insertion
	         *  was successful.
	         * @param {Function} [onError] A callback that is called if insertion
	         *  failed.
	         * @returns {IDBTransaction} The transaction used for this operation.
	         * @example
	         // Storing an object, using inline keys (the default scenario):
	         var myCustomer = {
	             customerid: 2346223,
	             lastname: 'Doe',
	             firstname: 'John'
	         };
	         myCustomerStore.put(myCustomer, mySuccessHandler, myErrorHandler);
	         // Note that passing success- and error-handlers is optional.
	         * @example
	         // Storing an object, using out-of-line keys:
	         var myCustomer = {
	             lastname: 'Doe',
	             firstname: 'John'
	         };
	         myCustomerStore.put(2346223, myCustomer, mySuccessHandler, myErrorHandler);
	         // Note that passing success- and error-handlers is optional.
	         */
	        put: function (key, value, onSuccess, onError) {
	            if (this.keyPath !== null) {
	                onError = onSuccess;
	                onSuccess = value;
	                value = key;
	            }
	            onError || (onError = defaultErrorHandler);
	            onSuccess || (onSuccess = defaultSuccessHandler);

	            var hasSuccess = false,
	                result = null,
	                putRequest;

	            var putTransaction = this.db.transaction([this.storeName], this.consts.READ_WRITE);
	            putTransaction.oncomplete = function () {
	                var callback = hasSuccess ? onSuccess : onError;
	                callback(result);
	            };
	            putTransaction.onabort = onError;
	            putTransaction.onerror = onError;

	            if (this.keyPath !== null) { // in-line keys
	                this._addIdPropertyIfNeeded(value);
	                putRequest = putTransaction.objectStore(this.storeName).put(value);
	            } else { // out-of-line keys
	                putRequest = putTransaction.objectStore(this.storeName).put(value, key);
	            }
	            putRequest.onsuccess = function (event) {
	                hasSuccess = true;
	                result = event.target.result;
	            };
	            putRequest.onerror = onError;

	            return putTransaction;
	        },

	        /**
	         * Retrieves an object from the store. If no entry exists with the given id,
	         * the success handler will be called with null as first and only argument.
	         *
	         * @param {*} key The id of the object to fetch.
	         * @param {Function} [onSuccess] A callback that is called if fetching
	         *  was successful. Will receive the object as only argument.
	         * @param {Function} [onError] A callback that will be called if an error
	         *  occurred during the operation.
	         * @returns {IDBTransaction} The transaction used for this operation.
	         */
	        get: function (key, onSuccess, onError) {
	            onError || (onError = defaultErrorHandler);
	            onSuccess || (onSuccess = defaultSuccessHandler);

	            var hasSuccess = false,
	                result = null;

	            var getTransaction = this.db.transaction([this.storeName], this.consts.READ_ONLY);
	            getTransaction.oncomplete = function () {
	                var callback = hasSuccess ? onSuccess : onError;
	                callback(result);
	            };
	            getTransaction.onabort = onError;
	            getTransaction.onerror = onError;
	            var getRequest = getTransaction.objectStore(this.storeName).get(key);
	            getRequest.onsuccess = function (event) {
	                hasSuccess = true;
	                result = event.target.result;
	            };
	            getRequest.onerror = onError;

	            return getTransaction;
	        },

	        /**
	         * Removes an object from the store.
	         *
	         * @param {*} key The id of the object to remove.
	         * @param {Function} [onSuccess] A callback that is called if the removal
	         *  was successful.
	         * @param {Function} [onError] A callback that will be called if an error
	         *  occurred during the operation.
	         * @returns {IDBTransaction} The transaction used for this operation.
	         */
	        remove: function (key, onSuccess, onError) {
	            onError || (onError = defaultErrorHandler);
	            onSuccess || (onSuccess = defaultSuccessHandler);

	            var hasSuccess = false,
	                result = null;

	            var removeTransaction = this.db.transaction([this.storeName], this.consts.READ_WRITE);
	            removeTransaction.oncomplete = function () {
	                var callback = hasSuccess ? onSuccess : onError;
	                callback(result);
	            };
	            removeTransaction.onabort = onError;
	            removeTransaction.onerror = onError;

	            var deleteRequest = removeTransaction.objectStore(this.storeName)['delete'](key);
	            deleteRequest.onsuccess = function (event) {
	                hasSuccess = true;
	                result = event.target.result;
	            };
	            deleteRequest.onerror = onError;

	            return removeTransaction;
	        },

	        /**
	         * Runs a batch of put and/or remove operations on the store.
	         *
	         * @param {Array} dataArray An array of objects containing the operation to run
	         *  and the data object (for put operations).
	         * @param {Function} [onSuccess] A callback that is called if all operations
	         *  were successful.
	         * @param {Function} [onError] A callback that is called if an error
	         *  occurred during one of the operations.
	         * @returns {IDBTransaction} The transaction used for this operation.
	         */
	        batch: function (dataArray, onSuccess, onError) {
	            onError || (onError = defaultErrorHandler);
	            onSuccess || (onSuccess = defaultSuccessHandler);

	            if (Object.prototype.toString.call(dataArray) != '[object Array]') {
	                onError(new Error('dataArray argument must be of type Array.'));
	            } else if (dataArray.length === 0) {
	                return onSuccess(true);
	            }

	            var count = dataArray.length;
	            var called = false;
	            var hasSuccess = false;

	            var batchTransaction = this.db.transaction([this.storeName], this.consts.READ_WRITE);
	            batchTransaction.oncomplete = function () {
	                var callback = hasSuccess ? onSuccess : onError;
	                callback(hasSuccess);
	            };
	            batchTransaction.onabort = onError;
	            batchTransaction.onerror = onError;


	            var onItemSuccess = function () {
	                count--;
	                if (count === 0 && !called) {
	                    called = true;
	                    hasSuccess = true;
	                }
	            };

	            dataArray.forEach(function (operation) {
	                var type = operation.type;
	                var key = operation.key;
	                var value = operation.value;

	                var onItemError = function (err) {
	                    batchTransaction.abort();
	                    if (!called) {
	                        called = true;
	                        onError(err, type, key);
	                    }
	                };

	                if (type == 'remove') {
	                    var deleteRequest = batchTransaction.objectStore(this.storeName)['delete'](key);
	                    deleteRequest.onsuccess = onItemSuccess;
	                    deleteRequest.onerror = onItemError;
	                } else if (type == 'put') {
	                    var putRequest;
	                    if (this.keyPath !== null) { // in-line keys
	                        this._addIdPropertyIfNeeded(value);
	                        putRequest = batchTransaction.objectStore(this.storeName).put(value);
	                    } else { // out-of-line keys
	                        putRequest = batchTransaction.objectStore(this.storeName).put(value, key);
	                    }
	                    putRequest.onsuccess = onItemSuccess;
	                    putRequest.onerror = onItemError;
	                }
	            }, this);

	            return batchTransaction;
	        },

	        /**
	         * Takes an array of objects and stores them in a single transaction.
	         *
	         * @param {Array} dataArray An array of objects to store
	         * @param {Function} [onSuccess] A callback that is called if all operations
	         *  were successful.
	         * @param {Function} [onError] A callback that is called if an error
	         *  occurred during one of the operations.
	         * @returns {IDBTransaction} The transaction used for this operation.
	         */
	        putBatch: function (dataArray, onSuccess, onError) {
	            var batchData = dataArray.map(function (item) {
	                return {type: 'put', value: item};
	            });

	            return this.batch(batchData, onSuccess, onError);
	        },

	        /**
	         * Like putBatch, takes an array of objects and stores them in a single
	         * transaction, but allows processing of the result values.  Returns the
	         * processed records containing the key for newly created records to the
	         * onSuccess calllback instead of only returning true or false for success.
	         * In addition, added the option for the caller to specify a key field that
	         * should be set to the newly created key.
	         *
	         * @param {Array} dataArray An array of objects to store
	         * @param {Object} [options] An object containing optional options
	         * @param {String} [options.keyField=this.keyPath] Specifies a field in the record to update
	         *  with the auto-incrementing key. Defaults to the store's keyPath.
	         * @param {Function} [onSuccess] A callback that is called if all operations
	         *  were successful.
	         * @param {Function} [onError] A callback that is called if an error
	         *  occurred during one of the operations.
	         * @returns {IDBTransaction} The transaction used for this operation.
	         *
	         */
	        upsertBatch: function (dataArray, options, onSuccess, onError) {
	            // handle `dataArray, onSuccess, onError` signature
	            if (typeof options == 'function') {
	                onSuccess = options;
	                onError = onSuccess;
	                options = {};
	            }

	            onError || (onError = defaultErrorHandler);
	            onSuccess || (onSuccess = defaultSuccessHandler);
	            options || (options = {});

	            if (Object.prototype.toString.call(dataArray) != '[object Array]') {
	                onError(new Error('dataArray argument must be of type Array.'));
	            }

	            var keyField = options.keyField || this.keyPath;
	            var count = dataArray.length;
	            var called = false;
	            var hasSuccess = false;
	            var index = 0; // assume success callbacks are executed in order

	            var batchTransaction = this.db.transaction([this.storeName], this.consts.READ_WRITE);
	            batchTransaction.oncomplete = function () {
	                if (hasSuccess) {
	                    onSuccess(dataArray);
	                } else {
	                    onError(false);
	                }
	            };
	            batchTransaction.onabort = onError;
	            batchTransaction.onerror = onError;

	            var onItemSuccess = function (event) {
	                var record = dataArray[index++];
	                record[keyField] = event.target.result;

	                count--;
	                if (count === 0 && !called) {
	                    called = true;
	                    hasSuccess = true;
	                }
	            };

	            dataArray.forEach(function (record) {
	                var key = record.key;

	                var onItemError = function (err) {
	                    batchTransaction.abort();
	                    if (!called) {
	                        called = true;
	                        onError(err);
	                    }
	                };

	                var putRequest;
	                if (this.keyPath !== null) { // in-line keys
	                    this._addIdPropertyIfNeeded(record);
	                    putRequest = batchTransaction.objectStore(this.storeName).put(record);
	                } else { // out-of-line keys
	                    putRequest = batchTransaction.objectStore(this.storeName).put(record, key);
	                }
	                putRequest.onsuccess = onItemSuccess;
	                putRequest.onerror = onItemError;
	            }, this);

	            return batchTransaction;
	        },

	        /**
	         * Takes an array of keys and removes matching objects in a single
	         * transaction.
	         *
	         * @param {Array} keyArray An array of keys to remove
	         * @param {Function} [onSuccess] A callback that is called if all operations
	         *  were successful.
	         * @param {Function} [onError] A callback that is called if an error
	         *  occurred during one of the operations.
	         * @returns {IDBTransaction} The transaction used for this operation.
	         */
	        removeBatch: function (keyArray, onSuccess, onError) {
	            var batchData = keyArray.map(function (key) {
	                return {type: 'remove', key: key};
	            });

	            return this.batch(batchData, onSuccess, onError);
	        },

	        /**
	         * Takes an array of keys and fetches matching objects
	         *
	         * @param {Array} keyArray An array of keys identifying the objects to fetch
	         * @param {Function} [onSuccess] A callback that is called if all operations
	         *  were successful.
	         * @param {Function} [onError] A callback that is called if an error
	         *  occurred during one of the operations.
	         * @param {String} [arrayType='sparse'] The type of array to pass to the
	         *  success handler. May be one of 'sparse', 'dense' or 'skip'. Defaults to
	         *  'sparse'. This parameter specifies how to handle the situation if a get
	         *  operation did not throw an error, but there was no matching object in
	         *  the database. In most cases, 'sparse' provides the most desired
	         *  behavior. See the examples for details.
	         * @returns {IDBTransaction} The transaction used for this operation.
	         * @example
	         // given that there are two objects in the database with the keypath
	         // values 1 and 2, and the call looks like this:
	         myStore.getBatch([1, 5, 2], onError, function (data) { … }, arrayType);

	         // this is what the `data` array will be like:

	         // arrayType == 'sparse':
	         // data is a sparse array containing two entries and having a length of 3:
	         [Object, 2: Object]
	         0: Object
	         2: Object
	         length: 3
	         // calling forEach on data will result in the callback being called two
	         // times, with the index parameter matching the index of the key in the
	         // keyArray.

	         // arrayType == 'dense':
	         // data is a dense array containing three entries and having a length of 3,
	         // where data[1] is of type undefined:
	         [Object, undefined, Object]
	         0: Object
	         1: undefined
	         2: Object
	         length: 3
	         // calling forEach on data will result in the callback being called three
	         // times, with the index parameter matching the index of the key in the
	         // keyArray, but the second call will have undefined as first argument.

	         // arrayType == 'skip':
	         // data is a dense array containing two entries and having a length of 2:
	         [Object, Object]
	         0: Object
	         1: Object
	         length: 2
	         // calling forEach on data will result in the callback being called two
	         // times, with the index parameter not matching the index of the key in the
	         // keyArray.
	         */
	        getBatch: function (keyArray, onSuccess, onError, arrayType) {
	            onError || (onError = defaultErrorHandler);
	            onSuccess || (onSuccess = defaultSuccessHandler);
	            arrayType || (arrayType = 'sparse');

	            if (Object.prototype.toString.call(keyArray) != '[object Array]') {
	                onError(new Error('keyArray argument must be of type Array.'));
	            } else if (keyArray.length === 0) {
	                return onSuccess([]);
	            }

	            var data = [];
	            var count = keyArray.length;
	            var hasSuccess = false;
	            var result = null;

	            var batchTransaction = this.db.transaction([this.storeName], this.consts.READ_ONLY);
	            batchTransaction.oncomplete = function () {
	                var callback = hasSuccess ? onSuccess : onError;
	                callback(result);
	            };
	            batchTransaction.onabort = onError;
	            batchTransaction.onerror = onError;

	            var onItemSuccess = function (event) {
	                if (event.target.result || arrayType == 'dense') {
	                    data.push(event.target.result);
	                } else if (arrayType == 'sparse') {
	                    data.length++;
	                }
	                count--;
	                if (count === 0) {
	                    hasSuccess = true;
	                    result = data;
	                }
	            };

	            keyArray.forEach(function (key) {

	                var onItemError = function (err) {
	                    result = err;
	                    onError(err);
	                    batchTransaction.abort();
	                };

	                var getRequest = batchTransaction.objectStore(this.storeName).get(key);
	                getRequest.onsuccess = onItemSuccess;
	                getRequest.onerror = onItemError;

	            }, this);

	            return batchTransaction;
	        },

	        /**
	         * Fetches all entries in the store.
	         *
	         * @param {Function} [onSuccess] A callback that is called if the operation
	         *  was successful. Will receive an array of objects.
	         * @param {Function} [onError] A callback that will be called if an error
	         *  occurred during the operation.
	         * @returns {IDBTransaction} The transaction used for this operation.
	         */
	        getAll: function (onSuccess, onError) {
	            onError || (onError = defaultErrorHandler);
	            onSuccess || (onSuccess = defaultSuccessHandler);
	            var getAllTransaction = this.db.transaction([this.storeName], this.consts.READ_ONLY);
	            var store = getAllTransaction.objectStore(this.storeName);
	            if (store.getAll) {
	                this._getAllNative(getAllTransaction, store, onSuccess, onError);
	            } else {
	                this._getAllCursor(getAllTransaction, store, onSuccess, onError);
	            }

	            return getAllTransaction;
	        },

	        /**
	         * Implements getAll for IDB implementations that have a non-standard
	         * getAll() method.
	         *
	         * @param {IDBTransaction} getAllTransaction An open READ transaction.
	         * @param {IDBObjectStore} store A reference to the store.
	         * @param {Function} onSuccess A callback that will be called if the
	         *  operation was successful.
	         * @param {Function} onError A callback that will be called if an
	         *  error occurred during the operation.
	         * @private
	         */
	        _getAllNative: function (getAllTransaction, store, onSuccess, onError) {
	            var hasSuccess = false,
	                result = null;

	            getAllTransaction.oncomplete = function () {
	                var callback = hasSuccess ? onSuccess : onError;
	                callback(result);
	            };
	            getAllTransaction.onabort = onError;
	            getAllTransaction.onerror = onError;

	            var getAllRequest = store.getAll();
	            getAllRequest.onsuccess = function (event) {
	                hasSuccess = true;
	                result = event.target.result;
	            };
	            getAllRequest.onerror = onError;
	        },

	        /**
	         * Implements getAll for IDB implementations that do not have a getAll()
	         * method.
	         *
	         * @param {IDBTransaction} getAllTransaction An open READ transaction.
	         * @param {IDBObjectStore} store A reference to the store.
	         * @param {Function} onSuccess A callback that will be called if the
	         *  operation was successful.
	         * @param {Function} onError A callback that will be called if an
	         *  error occurred during the operation.
	         * @private
	         */
	        _getAllCursor: function (getAllTransaction, store, onSuccess, onError) {
	            var all = [],
	                hasSuccess = false,
	                result = null;

	            getAllTransaction.oncomplete = function () {
	                var callback = hasSuccess ? onSuccess : onError;
	                callback(result);
	            };
	            getAllTransaction.onabort = onError;
	            getAllTransaction.onerror = onError;

	            var cursorRequest = store.openCursor();
	            cursorRequest.onsuccess = function (event) {
	                var cursor = event.target.result;
	                if (cursor) {
	                    all.push(cursor.value);
	                    cursor['continue']();
	                }
	                else {
	                    hasSuccess = true;
	                    result = all;
	                }
	            };
	            cursorRequest.onError = onError;
	        },

	        /**
	         * Clears the store, i.e. deletes all entries in the store.
	         *
	         * @param {Function} [onSuccess] A callback that will be called if the
	         *  operation was successful.
	         * @param {Function} [onError] A callback that will be called if an
	         *  error occurred during the operation.
	         * @returns {IDBTransaction} The transaction used for this operation.
	         */
	        clear: function (onSuccess, onError) {
	            onError || (onError = defaultErrorHandler);
	            onSuccess || (onSuccess = defaultSuccessHandler);

	            var hasSuccess = false,
	                result = null;

	            var clearTransaction = this.db.transaction([this.storeName], this.consts.READ_WRITE);
	            clearTransaction.oncomplete = function () {
	                var callback = hasSuccess ? onSuccess : onError;
	                callback(result);
	            };
	            clearTransaction.onabort = onError;
	            clearTransaction.onerror = onError;

	            var clearRequest = clearTransaction.objectStore(this.storeName).clear();
	            clearRequest.onsuccess = function (event) {
	                hasSuccess = true;
	                result = event.target.result;
	            };
	            clearRequest.onerror = onError;

	            return clearTransaction;
	        },

	        /**
	         * Checks if an id property needs to present on a object and adds one if
	         * necessary.
	         *
	         * @param {Object} dataObj The data object that is about to be stored
	         * @private
	         */
	        _addIdPropertyIfNeeded: function (dataObj) {
	            if (typeof dataObj[this.keyPath] == 'undefined') {
	                dataObj[this.keyPath] = this._insertIdCount++ + Date.now();
	            }
	        },

	        /************
	         * indexing *
	         ************/

	        /**
	         * Returns a DOMStringList of index names of the store.
	         *
	         * @return {DOMStringList} The list of index names
	         */
	        getIndexList: function () {
	            return this.store.indexNames;
	        },

	        /**
	         * Checks if an index with the given name exists in the store.
	         *
	         * @param {String} indexName The name of the index to look for
	         * @return {Boolean} Whether the store contains an index with the given name
	         */
	        hasIndex: function (indexName) {
	            return this.store.indexNames.contains(indexName);
	        },

	        /**
	         * Normalizes an object containing index data and assures that all
	         * properties are set.
	         *
	         * @param {Object} indexData The index data object to normalize
	         * @param {String} indexData.name The name of the index
	         * @param {String} [indexData.keyPath] The key path of the index
	         * @param {Boolean} [indexData.unique] Whether the index is unique
	         * @param {Boolean} [indexData.multiEntry] Whether the index is multi entry
	         */
	        normalizeIndexData: function (indexData) {
	            indexData.keyPath = indexData.keyPath || indexData.name;
	            indexData.unique = !!indexData.unique;
	            indexData.multiEntry = !!indexData.multiEntry;
	        },

	        /**
	         * Checks if an actual index complies with an expected index.
	         *
	         * @param {IDBIndex} actual The actual index found in the store
	         * @param {Object} expected An Object describing an expected index
	         * @return {Boolean} Whether both index definitions are identical
	         */
	        indexComplies: function (actual, expected) {
	            var complies = ['keyPath', 'unique', 'multiEntry'].every(function (key) {
	                // IE10 returns undefined for no multiEntry
	                if (key == 'multiEntry' && actual[key] === undefined && expected[key] === false) {
	                    return true;
	                }
	                // Compound keys
	                if (key == 'keyPath' && Object.prototype.toString.call(expected[key]) == '[object Array]') {
	                    var exp = expected.keyPath;
	                    var act = actual.keyPath;

	                    // IE10 can't handle keyPath sequences and stores them as a string.
	                    // The index will be unusable there, but let's still return true if
	                    // the keyPath sequence matches.
	                    if (typeof act == 'string') {
	                        return exp.toString() == act;
	                    }

	                    // Chrome/Opera stores keyPath squences as DOMStringList, Firefox
	                    // as Array
	                    if (!(typeof act.contains == 'function' || typeof act.indexOf == 'function')) {
	                        return false;
	                    }

	                    if (act.length !== exp.length) {
	                        return false;
	                    }

	                    for (var i = 0, m = exp.length; i < m; i++) {
	                        if (!( (act.contains && act.contains(exp[i])) || act.indexOf(exp[i] !== -1) )) {
	                            return false;
	                        }
	                    }
	                    return true;
	                }
	                return expected[key] == actual[key];
	            });
	            return complies;
	        },

	        /**********
	         * cursor *
	         **********/

	        /**
	         * Iterates over the store using the given options and calling onItem
	         * for each entry matching the options.
	         *
	         * @param {Function} onItem A callback to be called for each match
	         * @param {Object} [options] An object defining specific options
	         * @param {String} [options.index=null] A name of an IDBIndex to operate on
	         * @param {String} [options.order=ASC] The order in which to provide the
	         *  results, can be 'DESC' or 'ASC'
	         * @param {Boolean} [options.autoContinue=true] Whether to automatically
	         *  iterate the cursor to the next result
	         * @param {Boolean} [options.filterDuplicates=false] Whether to exclude
	         *  duplicate matches
	         * @param {IDBKeyRange} [options.keyRange=null] An IDBKeyRange to use
	         * @param {Boolean} [options.writeAccess=false] Whether grant write access
	         *  to the store in the onItem callback
	         * @param {Function} [options.onEnd=null] A callback to be called after
	         *  iteration has ended
	         * @param {Function} [options.onError=throw] A callback to be called
	         *  if an error occurred during the operation.
	         * @param {Number} [options.limit=Infinity] Limit the number of returned
	         *  results to this number
	         * @param {Number} [options.offset=0] Skip the provided number of results
	         *  in the resultset
	         * @param {Boolean} [options.allowItemRejection=false] Allows the onItem
	         * function to return a Boolean to accept or reject the current item
	         * @returns {IDBTransaction} The transaction used for this operation.
	         */
	        iterate: function (onItem, options) {
	            options = mixin({
	                index: null,
	                order: 'ASC',
	                autoContinue: true,
	                filterDuplicates: false,
	                keyRange: null,
	                writeAccess: false,
	                onEnd: null,
	                onError: defaultErrorHandler,
	                limit: Infinity,
	                offset: 0,
	                allowItemRejection: false
	            }, options || {});

	            var directionType = options.order.toLowerCase() == 'desc' ? 'PREV' : 'NEXT';
	            if (options.filterDuplicates) {
	                directionType += '_NO_DUPLICATE';
	            }

	            var hasSuccess = false;
	            var cursorTransaction = this.db.transaction([this.storeName], this.consts[options.writeAccess ? 'READ_WRITE' : 'READ_ONLY']);
	            var cursorTarget = cursorTransaction.objectStore(this.storeName);
	            if (options.index) {
	                cursorTarget = cursorTarget.index(options.index);
	            }
	            var recordCount = 0;

	            cursorTransaction.oncomplete = function () {
	                if (!hasSuccess) {
	                    options.onError(null);
	                    return;
	                }
	                if (options.onEnd) {
	                    options.onEnd();
	                } else {
	                    onItem(null);
	                }
	            };
	            cursorTransaction.onabort = options.onError;
	            cursorTransaction.onerror = options.onError;

	            var cursorRequest = cursorTarget.openCursor(options.keyRange, this.consts[directionType]);
	            cursorRequest.onerror = options.onError;
	            cursorRequest.onsuccess = function (event) {
	                var cursor = event.target.result;
	                if (cursor) {
	                    if (options.offset) {
	                        cursor.advance(options.offset);
	                        options.offset = 0;
	                    } else {
	                        var onItemReturn = onItem(cursor.value, cursor, cursorTransaction);
	                        if (!options.allowItemRejection || onItemReturn !== false) {
	                            recordCount++;
	                        }
	                        if (options.autoContinue) {
	                            if (recordCount + options.offset < options.limit) {
	                                cursor['continue']();
	                            } else {
	                                hasSuccess = true;
	                            }
	                        }
	                    }
	                } else {
	                    hasSuccess = true;
	                }
	            };

	            return cursorTransaction;
	        },

	        /**
	         * Runs a query against the store and passes an array containing matched
	         * objects to the success handler.
	         *
	         * @param {Function} onSuccess A callback to be called when the operation
	         *  was successful.
	         * @param {Object} [options] An object defining specific options
	         * @param {String} [options.index=null] A name of an IDBIndex to operate on
	         * @param {String} [options.order=ASC] The order in which to provide the
	         *  results, can be 'DESC' or 'ASC'
	         * @param {Boolean} [options.filterDuplicates=false] Whether to exclude
	         *  duplicate matches
	         * @param {IDBKeyRange} [options.keyRange=null] An IDBKeyRange to use
	         * @param {Function} [options.onError=throw] A callback to be called
	         *  if an error occurred during the operation.
	         * @param {Number} [options.limit=Infinity] Limit the number of returned
	         *  results to this number
	         * @param {Number} [options.offset=0] Skip the provided number of results
	         *  in the resultset
	         * @param {Function} [options.filter=null] A custom filter function to
	         *  apply to query resuts before returning. Must return `false` to reject
	         *  an item. Can be combined with keyRanges.
	         * @returns {IDBTransaction} The transaction used for this operation.
	         */
	        query: function (onSuccess, options) {
	            var result = [],
	                processedItems = 0;
	            options = options || {};
	            options.autoContinue = true;
	            options.writeAccess = false;
	            options.allowItemRejection = !!options.filter;
	            options.onEnd = function () {
	                onSuccess(result, processedItems);
	            };
	            return this.iterate(function (item) {
	                processedItems++;
	                var accept = options.filter ? options.filter(item) : true;
	                if (accept !== false) {
	                    result.push(item);
	                }
	                return accept;
	            }, options);
	        },

	        /**
	         *
	         * Runs a query against the store, but only returns the number of matches
	         * instead of the matches itself.
	         *
	         * @param {Function} onSuccess A callback to be called if the opration
	         *  was successful.
	         * @param {Object} [options] An object defining specific options
	         * @param {String} [options.index=null] A name of an IDBIndex to operate on
	         * @param {IDBKeyRange} [options.keyRange=null] An IDBKeyRange to use
	         * @param {Function} [options.onError=throw] A callback to be called if an error
	         *  occurred during the operation.
	         * @returns {IDBTransaction} The transaction used for this operation.
	         */
	        count: function (onSuccess, options) {

	            options = mixin({
	                index: null,
	                keyRange: null
	            }, options || {});

	            var onError = options.onError || defaultErrorHandler;

	            var hasSuccess = false,
	                result = null;

	            var cursorTransaction = this.db.transaction([this.storeName], this.consts.READ_ONLY);
	            cursorTransaction.oncomplete = function () {
	                var callback = hasSuccess ? onSuccess : onError;
	                callback(result);
	            };
	            cursorTransaction.onabort = onError;
	            cursorTransaction.onerror = onError;

	            var cursorTarget = cursorTransaction.objectStore(this.storeName);
	            if (options.index) {
	                cursorTarget = cursorTarget.index(options.index);
	            }
	            var countRequest = cursorTarget.count(options.keyRange);
	            countRequest.onsuccess = function (evt) {
	                hasSuccess = true;
	                result = evt.target.result;
	            };
	            countRequest.onError = onError;

	            return cursorTransaction;
	        },

	        /**************/
	        /* key ranges */
	        /**************/

	        /**
	         * Creates a key range using specified options. This key range can be
	         * handed over to the count() and iterate() methods.
	         *
	         * Note: You must provide at least one or both of "lower" or "upper" value.
	         *
	         * @param {Object} options The options for the key range to create
	         * @param {*} [options.lower] The lower bound
	         * @param {Boolean} [options.excludeLower] Whether to exclude the lower
	         *  bound passed in options.lower from the key range
	         * @param {*} [options.upper] The upper bound
	         * @param {Boolean} [options.excludeUpper] Whether to exclude the upper
	         *  bound passed in options.upper from the key range
	         * @param {*} [options.only] A single key value. Use this if you need a key
	         *  range that only includes one value for a key. Providing this
	         *  property invalidates all other properties.
	         * @return {IDBKeyRange} The IDBKeyRange representing the specified options
	         */
	        makeKeyRange: function (options) {
	            /*jshint onecase:true */
	            var keyRange,
	                hasLower = typeof options.lower != 'undefined',
	                hasUpper = typeof options.upper != 'undefined',
	                isOnly = typeof options.only != 'undefined';

	            switch (true) {
	                case isOnly:
	                    keyRange = this.keyRange.only(options.only);
	                    break;
	                case hasLower && hasUpper:
	                    keyRange = this.keyRange.bound(options.lower, options.upper, options.excludeLower, options.excludeUpper);
	                    break;
	                case hasLower:
	                    keyRange = this.keyRange.lowerBound(options.lower, options.excludeLower);
	                    break;
	                case hasUpper:
	                    keyRange = this.keyRange.upperBound(options.upper, options.excludeUpper);
	                    break;
	                default:
	                    throw new Error('Cannot create KeyRange. Provide one or both of "lower" or "upper" value, or an "only" value.');
	            }

	            return keyRange;

	        }

	    };

	    /** helpers **/
	    var empty = {};

	    function mixin (target, source) {
	        var name, s;
	        for (name in source) {
	            s = source[name];
	            if (s !== empty[name] && s !== target[name]) {
	                target[name] = s;
	            }
	        }
	        return target;
	    }

	    function hasVersionError(errorEvent) {
	        if ('error' in errorEvent.target) {
	            return errorEvent.target.error.name == 'VersionError';
	        } else if ('errorCode' in errorEvent.target) {
	            return errorEvent.target.errorCode == 12;
	        }
	        return false;
	    }

	    IDBStore.prototype = proto;
	    IDBStore.version = proto.version;

	    return IDBStore;

	}, commonjsGlobal);
	});

	var xtend = extend;

	function extend() {
	    var target = {};

	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i];

	        for (var key in source) {
	            if (source.hasOwnProperty(key)) {
	                target[key] = source[key];
	            }
	        }
	    }

	    return target
	}

	/* Copyright (c) 2013 Rod Vagg, MIT License */

	function AbstractIterator (db) {
	  this.db = db;
	  this._ended = false;
	  this._nexting = false;
	}

	AbstractIterator.prototype.next = function (callback) {
	  var self = this;

	  if (typeof callback != 'function')
	    throw new Error('next() requires a callback argument')

	  if (self._ended)
	    return callback(new Error('cannot call next() after end()'))
	  if (self._nexting)
	    return callback(new Error('cannot call next() before previous next() has completed'))

	  self._nexting = true;
	  if (typeof self._next == 'function') {
	    return self._next(function () {
	      self._nexting = false;
	      callback.apply(null, arguments);
	    })
	  }

	  process.nextTick(function () {
	    self._nexting = false;
	    callback();
	  });
	};

	AbstractIterator.prototype.end = function (callback) {
	  if (typeof callback != 'function')
	    throw new Error('end() requires a callback argument')

	  if (this._ended)
	    return callback(new Error('end() already called on iterator'))

	  this._ended = true;

	  if (typeof this._end == 'function')
	    return this._end(callback)

	  process.nextTick(callback);
	};

	var abstractIterator = AbstractIterator;

	/* Copyright (c) 2013 Rod Vagg, MIT License */

	function AbstractChainedBatch (db) {
	  this._db         = db;
	  this._operations = [];
	  this._written    = false;
	}

	AbstractChainedBatch.prototype._checkWritten = function () {
	  if (this._written)
	    throw new Error('write() already called on this batch')
	};

	AbstractChainedBatch.prototype.put = function (key, value) {
	  this._checkWritten();

	  var err = this._db._checkKeyValue(key, 'key', this._db._isBuffer);
	  if (err) throw err
	  err = this._db._checkKeyValue(value, 'value', this._db._isBuffer);
	  if (err) throw err

	  if (!this._db._isBuffer(key)) key = String(key);
	  if (!this._db._isBuffer(value)) value = String(value);

	  if (typeof this._put == 'function' )
	    this._put(key, value);
	  else
	    this._operations.push({ type: 'put', key: key, value: value });

	  return this
	};

	AbstractChainedBatch.prototype.del = function (key) {
	  this._checkWritten();

	  var err = this._db._checkKeyValue(key, 'key', this._db._isBuffer);
	  if (err) throw err

	  if (!this._db._isBuffer(key)) key = String(key);

	  if (typeof this._del == 'function' )
	    this._del(key);
	  else
	    this._operations.push({ type: 'del', key: key });

	  return this
	};

	AbstractChainedBatch.prototype.clear = function () {
	  this._checkWritten();

	  this._operations = [];

	  if (typeof this._clear == 'function' )
	    this._clear();

	  return this
	};

	AbstractChainedBatch.prototype.write = function (options, callback) {
	  this._checkWritten();

	  if (typeof options == 'function')
	    callback = options;
	  if (typeof callback != 'function')
	    throw new Error('write() requires a callback argument')
	  if (typeof options != 'object')
	    options = {};

	  this._written = true;

	  if (typeof this._write == 'function' )
	    return this._write(callback)

	  if (typeof this._db._batch == 'function')
	    return this._db._batch(this._operations, options, callback)

	  process.nextTick(callback);
	};

	var abstractChainedBatch = AbstractChainedBatch;

	/* Copyright (c) 2013 Rod Vagg, MIT License */



	function AbstractLevelDOWN (location) {
	  if (!arguments.length || location === undefined)
	    throw new Error('constructor requires at least a location argument')

	  if (typeof location != 'string')
	    throw new Error('constructor requires a location string argument')

	  this.location = location;
	}

	AbstractLevelDOWN.prototype.open = function (options, callback) {
	  if (typeof options == 'function')
	    callback = options;

	  if (typeof callback != 'function')
	    throw new Error('open() requires a callback argument')

	  if (typeof options != 'object')
	    options = {};

	  if (typeof this._open == 'function')
	    return this._open(options, callback)

	  process.nextTick(callback);
	};

	AbstractLevelDOWN.prototype.close = function (callback) {
	  if (typeof callback != 'function')
	    throw new Error('close() requires a callback argument')

	  if (typeof this._close == 'function')
	    return this._close(callback)

	  process.nextTick(callback);
	};

	AbstractLevelDOWN.prototype.get = function (key, options, callback) {
	  var err;

	  if (typeof options == 'function')
	    callback = options;

	  if (typeof callback != 'function')
	    throw new Error('get() requires a callback argument')

	  if (err = this._checkKeyValue(key, 'key', this._isBuffer))
	    return callback(err)

	  if (!this._isBuffer(key))
	    key = String(key);

	  if (typeof options != 'object')
	    options = {};

	  if (typeof this._get == 'function')
	    return this._get(key, options, callback)

	  process.nextTick(function () { callback(new Error('NotFound')); });
	};

	AbstractLevelDOWN.prototype.put = function (key, value, options, callback) {
	  var err;

	  if (typeof options == 'function')
	    callback = options;

	  if (typeof callback != 'function')
	    throw new Error('put() requires a callback argument')

	  if (err = this._checkKeyValue(key, 'key', this._isBuffer))
	    return callback(err)

	  if (err = this._checkKeyValue(value, 'value', this._isBuffer))
	    return callback(err)

	  if (!this._isBuffer(key))
	    key = String(key);

	  // coerce value to string in node, don't touch it in browser
	  // (indexeddb can store any JS type)
	  if (!this._isBuffer(value) && !process.browser)
	    value = String(value);

	  if (typeof options != 'object')
	    options = {};

	  if (typeof this._put == 'function')
	    return this._put(key, value, options, callback)

	  process.nextTick(callback);
	};

	AbstractLevelDOWN.prototype.del = function (key, options, callback) {
	  var err;

	  if (typeof options == 'function')
	    callback = options;

	  if (typeof callback != 'function')
	    throw new Error('del() requires a callback argument')

	  if (err = this._checkKeyValue(key, 'key', this._isBuffer))
	    return callback(err)

	  if (!this._isBuffer(key))
	    key = String(key);

	  if (typeof options != 'object')
	    options = {};

	  if (typeof this._del == 'function')
	    return this._del(key, options, callback)

	  process.nextTick(callback);
	};

	AbstractLevelDOWN.prototype.batch = function (array, options, callback) {
	  if (!arguments.length)
	    return this._chainedBatch()

	  if (typeof options == 'function')
	    callback = options;

	  if (typeof callback != 'function')
	    throw new Error('batch(array) requires a callback argument')

	  if (!Array.isArray(array))
	    return callback(new Error('batch(array) requires an array argument'))

	  if (typeof options != 'object')
	    options = {};

	  var i = 0
	    , l = array.length
	    , e
	    , err;

	  for (; i < l; i++) {
	    e = array[i];
	    if (typeof e != 'object')
	      continue

	    if (err = this._checkKeyValue(e.type, 'type', this._isBuffer))
	      return callback(err)

	    if (err = this._checkKeyValue(e.key, 'key', this._isBuffer))
	      return callback(err)

	    if (e.type == 'put') {
	      if (err = this._checkKeyValue(e.value, 'value', this._isBuffer))
	        return callback(err)
	    }
	  }

	  if (typeof this._batch == 'function')
	    return this._batch(array, options, callback)

	  process.nextTick(callback);
	};

	//TODO: remove from here, not a necessary primitive
	AbstractLevelDOWN.prototype.approximateSize = function (start, end, callback) {
	  if (   start == null
	      || end == null
	      || typeof start == 'function'
	      || typeof end == 'function') {
	    throw new Error('approximateSize() requires valid `start`, `end` and `callback` arguments')
	  }

	  if (typeof callback != 'function')
	    throw new Error('approximateSize() requires a callback argument')

	  if (!this._isBuffer(start))
	    start = String(start);

	  if (!this._isBuffer(end))
	    end = String(end);

	  if (typeof this._approximateSize == 'function')
	    return this._approximateSize(start, end, callback)

	  process.nextTick(function () {
	    callback(null, 0);
	  });
	};

	AbstractLevelDOWN.prototype._setupIteratorOptions = function (options) {
	  var self = this;

	  options = xtend(options)

	  ;[ 'start', 'end', 'gt', 'gte', 'lt', 'lte' ].forEach(function (o) {
	    if (options[o] && self._isBuffer(options[o]) && options[o].length === 0)
	      delete options[o];
	  });

	  options.reverse = !!options.reverse;

	  // fix `start` so it takes into account gt, gte, lt, lte as appropriate
	  if (options.reverse && options.lt)
	    options.start = options.lt;
	  if (options.reverse && options.lte)
	    options.start = options.lte;
	  if (!options.reverse && options.gt)
	    options.start = options.gt;
	  if (!options.reverse && options.gte)
	    options.start = options.gte;

	  if ((options.reverse && options.lt && !options.lte)
	    || (!options.reverse && options.gt && !options.gte))
	    options.exclusiveStart = true; // start should *not* include matching key

	  return options
	};

	AbstractLevelDOWN.prototype.iterator = function (options) {
	  if (typeof options != 'object')
	    options = {};

	  options = this._setupIteratorOptions(options);

	  if (typeof this._iterator == 'function')
	    return this._iterator(options)

	  return new abstractIterator(this)
	};

	AbstractLevelDOWN.prototype._chainedBatch = function () {
	  return new abstractChainedBatch(this)
	};

	AbstractLevelDOWN.prototype._isBuffer = function (obj) {
	  return Buffer.isBuffer(obj)
	};

	AbstractLevelDOWN.prototype._checkKeyValue = function (obj, type) {

	  if (obj === null || obj === undefined)
	    return new Error(type + ' cannot be `null` or `undefined`')

	  if (this._isBuffer(obj)) {
	    if (obj.length === 0)
	      return new Error(type + ' cannot be an empty Buffer')
	  } else if (String(obj) === '')
	    return new Error(type + ' cannot be an empty String')
	};

	var AbstractLevelDOWN_1    = AbstractLevelDOWN;
	var AbstractIterator_1     = abstractIterator;
	var AbstractChainedBatch_1 = abstractChainedBatch;

	var abstractLeveldown = {
		AbstractLevelDOWN: AbstractLevelDOWN_1,
		AbstractIterator: AbstractIterator_1,
		AbstractChainedBatch: AbstractChainedBatch_1
	};

	// shim for using process in browser
	// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	var cachedSetTimeout = defaultSetTimout;
	var cachedClearTimeout = defaultClearTimeout;
	if (typeof global.setTimeout === 'function') {
	    cachedSetTimeout = setTimeout;
	}
	if (typeof global.clearTimeout === 'function') {
	    cachedClearTimeout = clearTimeout;
	}

	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	function nextTick(fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	}
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};

	// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
	var performance = global.performance || {};
	var performanceNow =
	  performance.now        ||
	  performance.mozNow     ||
	  performance.msNow      ||
	  performance.oNow       ||
	  performance.webkitNow  ||
	  function(){ return (new Date()).getTime() };

	var inherits;
	if (typeof Object.create === 'function'){
	  inherits = function inherits(ctor, superCtor) {
	    // implementation from standard node.js 'util' module
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  inherits = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    var TempCtor = function () {};
	    TempCtor.prototype = superCtor.prototype;
	    ctor.prototype = new TempCtor();
	    ctor.prototype.constructor = ctor;
	  };
	}
	var inherits$1 = inherits;

	// Copyright Joyent, Inc. and other Node contributors.
	var formatRegExp = /%[sdj%]/g;
	function format(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	}

	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	function deprecate(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	}

	var debugs = {};
	var debugEnviron;
	function debuglog(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron =  '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = 0;
	      debugs[set] = function() {
	        var msg = format.apply(null, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	}

	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    _extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}

	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var length = output.reduce(function(prev, cur) {
	    if (cur.indexOf('\n') >= 0) ;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}

	function isNull(arg) {
	  return arg === null;
	}

	function isNullOrUndefined(arg) {
	  return arg == null;
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isString(arg) {
	  return typeof arg === 'string';
	}

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}

	function isBuffer(maybeBuf) {
	  return Buffer.isBuffer(maybeBuf);
	}

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	function log() {
	  console.log('%s - %s', timestamp(), format.apply(null, arguments));
	}

	function _extend(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	}
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	var util = {
	  inherits: inherits$1,
	  _extend: _extend,
	  log: log,
	  isBuffer: isBuffer,
	  isPrimitive: isPrimitive,
	  isFunction: isFunction,
	  isError: isError,
	  isDate: isDate,
	  isObject: isObject,
	  isRegExp: isRegExp,
	  isUndefined: isUndefined,
	  isSymbol: isSymbol,
	  isString: isString,
	  isNumber: isNumber,
	  isNullOrUndefined: isNullOrUndefined,
	  isNull: isNull,
	  isBoolean: isBoolean,
	  isArray: isArray,
	  inspect: inspect,
	  deprecate: deprecate,
	  format: format,
	  debuglog: debuglog
	};

	var util$1 = /*#__PURE__*/Object.freeze({
		format: format,
		deprecate: deprecate,
		debuglog: debuglog,
		inspect: inspect,
		isArray: isArray,
		isBoolean: isBoolean,
		isNull: isNull,
		isNullOrUndefined: isNullOrUndefined,
		isNumber: isNumber,
		isString: isString,
		isSymbol: isSymbol,
		isUndefined: isUndefined,
		isRegExp: isRegExp,
		isObject: isObject,
		isDate: isDate,
		isError: isError,
		isFunction: isFunction,
		isPrimitive: isPrimitive,
		isBuffer: isBuffer,
		log: log,
		inherits: inherits$1,
		_extend: _extend,
		'default': util
	});

	var ltgt = createCommonjsModule(function (module, exports) {
	exports.compare = function (a, b) {

	  if(Buffer.isBuffer(a)) {
	    var l = Math.min(a.length, b.length);
	    for(var i = 0; i < l; i++) {
	      var cmp = a[i] - b[i];
	      if(cmp) return cmp
	    }
	    return a.length - b.length
	  }

	  return a < b ? -1 : a > b ? 1 : 0
	};

	// to be compatible with the current abstract-leveldown tests
	// nullish or empty strings.
	// I could use !!val but I want to permit numbers and booleans,
	// if possible.

	function isDef (val) {
	  return val !== undefined && val !== ''
	}

	function has (range, name) {
	  return Object.hasOwnProperty.call(range, name)
	}

	function hasKey(range, name) {
	  return Object.hasOwnProperty.call(range, name) && name
	}

	var lowerBoundKey = exports.lowerBoundKey = function (range) {
	    return (
	       hasKey(range, 'gt')
	    || hasKey(range, 'gte')
	    || hasKey(range, 'min')
	    || (range.reverse ? hasKey(range, 'end') : hasKey(range, 'start'))
	    || undefined
	    )
	};

	var lowerBound = exports.lowerBound = function (range, def) {
	  var k = lowerBoundKey(range);
	  return k ? range[k] : def
	};

	var lowerBoundInclusive = exports.lowerBoundInclusive = function (range) {
	  return has(range, 'gt') ? false : true
	};

	var upperBoundInclusive = exports.upperBoundInclusive =
	  function (range) {
	    return (has(range, 'lt') /*&& !range.maxEx*/) ? false : true
	  };

	var lowerBoundExclusive = exports.lowerBoundExclusive =
	  function (range) {
	    return !lowerBoundInclusive(range)
	  };

	var upperBoundExclusive = exports.upperBoundExclusive =
	  function (range) {
	    return !upperBoundInclusive(range)
	  };

	var upperBoundKey = exports.upperBoundKey = function (range) {
	    return (
	       hasKey(range, 'lt')
	    || hasKey(range, 'lte')
	    || hasKey(range, 'max')
	    || (range.reverse ? hasKey(range, 'start') : hasKey(range, 'end'))
	    || undefined
	    )
	};

	var upperBound = exports.upperBound = function (range, def) {
	  var k = upperBoundKey(range);
	  return k ? range[k] : def
	};

	exports.start = function (range, def) {
	  return range.reverse ? upperBound(range, def) : lowerBound(range, def)
	};
	exports.end = function (range, def) {
	  return range.reverse ? lowerBound(range, def) : upperBound(range, def)
	};
	exports.startInclusive = function (range) {
	  return (
	    range.reverse
	  ? upperBoundInclusive(range)
	  : lowerBoundInclusive(range)
	  )
	};
	exports.endInclusive = function (range) {
	  return (
	    range.reverse
	  ? lowerBoundInclusive(range)
	  : upperBoundInclusive(range)
	  )
	};

	function id (e) { return e }

	exports.toLtgt = function (range, _range, map, lower, upper) {
	  _range = _range || {};
	  map = map || id;
	  var defaults = arguments.length > 3;
	  var lb = exports.lowerBoundKey(range);
	  var ub = exports.upperBoundKey(range);
	  if(lb) {
	    if(lb === 'gt') _range.gt = map(range.gt, false);
	    else            _range.gte = map(range[lb], false);
	  }
	  else if(defaults)
	    _range.gte = map(lower, false);

	  if(ub) {
	    if(ub === 'lt') _range.lt = map(range.lt, true);
	    else            _range.lte = map(range[ub], true);
	  }
	  else if(defaults)
	    _range.lte = map(upper, true);

	  if(range.reverse != null)
	    _range.reverse = !!range.reverse;

	  //if range was used mutably
	  //(in level-sublevel it's part of an options object
	  //that has more properties on it.)
	  if(has(_range, 'max'))   delete _range.max;
	  if(has(_range, 'min'))   delete _range.min;
	  if(has(_range, 'start')) delete _range.start;
	  if(has(_range, 'end'))   delete _range.end;

	  return _range
	};

	exports.contains = function (range, key, compare) {
	  compare = compare || exports.compare;

	  var lb = lowerBound(range);
	  if(isDef(lb)) {
	    var cmp = compare(key, lb);
	    if(cmp < 0 || (cmp === 0 && lowerBoundExclusive(range)))
	      return false
	  }

	  var ub = upperBound(range);
	  if(isDef(ub)) {
	    var cmp = compare(key, ub);
	    if(cmp > 0 || (cmp === 0) && upperBoundExclusive(range))
	      return false
	  }

	  return true
	};

	exports.filter = function (range, compare) {
	  return function (key) {
	    return exports.contains(range, key, compare)
	  }
	};
	});
	var ltgt_1 = ltgt.compare;
	var ltgt_2 = ltgt.lowerBoundKey;
	var ltgt_3 = ltgt.lowerBound;
	var ltgt_4 = ltgt.lowerBoundInclusive;
	var ltgt_5 = ltgt.upperBoundInclusive;
	var ltgt_6 = ltgt.lowerBoundExclusive;
	var ltgt_7 = ltgt.upperBoundExclusive;
	var ltgt_8 = ltgt.upperBoundKey;
	var ltgt_9 = ltgt.upperBound;
	var ltgt_10 = ltgt.start;
	var ltgt_11 = ltgt.end;
	var ltgt_12 = ltgt.startInclusive;
	var ltgt_13 = ltgt.endInclusive;
	var ltgt_14 = ltgt.toLtgt;
	var ltgt_15 = ltgt.contains;
	var ltgt_16 = ltgt.filter;

	var debugUtil = getCjsExportFromNamespace(util$1);

	var AbstractIterator$1  = abstractLeveldown.AbstractIterator;


	var iterator = Iterator;

	function Iterator (db, options) {
	  if (!options) options = {};
	  this.options = options;
	  AbstractIterator$1.call(this, db);
	  this._order = options.reverse ? 'DESC': 'ASC';
	  this._limit = options.limit;
	  this._count = 0;
	  this._done  = false;
	  var lower = ltgt.lowerBound(options);
	  var upper = ltgt.upperBound(options);
	  try {
	    this._keyRange = lower || upper ? this.db.makeKeyRange({
	      lower: lower,
	      upper: upper,
	      excludeLower: ltgt.lowerBoundExclusive(options),
	      excludeUpper: ltgt.upperBoundExclusive(options)
	    }) : null;
	  } catch (e) {
	    // The lower key is greater than the upper key.
	    // IndexedDB throws an error, but we'll just return 0 results.
	    this._keyRangeError = true;
	  }
	  this.callback = null;
	}

	debugUtil.inherits(Iterator, AbstractIterator$1);

	Iterator.prototype.createIterator = function() {
	  var self = this;

	  self.iterator = self.db.iterate(function () {
	    self.onItem.apply(self, arguments);
	  }, {
	    keyRange: self._keyRange,
	    autoContinue: false,
	    order: self._order,
	    onError: function(err) { console.log('horrible error', err); },
	  });
	};

	// TODO the limit implementation here just ignores all reads after limit has been reached
	// it should cancel the iterator instead but I don't know how
	Iterator.prototype.onItem = function (value, cursor, cursorTransaction) {
	  if (!cursor && this.callback) {
	    this.callback();
	    this.callback = false;
	    return
	  }
	  var shouldCall = true;

	  if (!!this._limit && this._limit > 0 && this._count++ >= this._limit)
	    shouldCall = false;

	  if (shouldCall) this.callback(false, cursor.key, cursor.value);
	  if (cursor) cursor['continue']();
	};

	Iterator.prototype._next = function (callback) {
	  if (!callback) return new Error('next() requires a callback argument')
	  if (this._keyRangeError) return callback()
	  if (!this._started) {
	    this.createIterator();
	    this._started = true;
	  }
	  this.callback = callback;
	};

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	var inited = false;
	function init () {
	  inited = true;
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i];
	    revLookup[code.charCodeAt(i)] = i;
	  }

	  revLookup['-'.charCodeAt(0)] = 62;
	  revLookup['_'.charCodeAt(0)] = 63;
	}

	function toByteArray (b64) {
	  if (!inited) {
	    init();
	  }
	  var i, j, l, tmp, placeHolders, arr;
	  var len = b64.length;

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

	  // base64 is 4/3 + up to two characters of the original data
	  arr = new Arr(len * 3 / 4 - placeHolders);

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len;

	  var L = 0;

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = (tmp >> 16) & 0xFF;
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  if (!inited) {
	    init();
	  }
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[(tmp << 4) & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
	    output += lookup[tmp >> 10];
	    output += lookup[(tmp >> 4) & 0x3F];
	    output += lookup[(tmp << 2) & 0x3F];
	    output += '=';
	  }

	  parts.push(output);

	  return parts.join('')
	}

	function read (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? (nBytes - 1) : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];

	  i += d;

	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	function write (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
	  var i = isLE ? 0 : (nBytes - 1);
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128;
	}

	var toString = {}.toString;

	var isArray$1 = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */

	var INSPECT_MAX_BYTES = 50;

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer$1.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : true;

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	var _kMaxLength = kMaxLength();

	function kMaxLength () {
	  return Buffer$1.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer$1.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer$1(length);
	    }
	    that.length = length;
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer$1 (arg, encodingOrOffset, length) {
	  if (!Buffer$1.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer$1)) {
	    return new Buffer$1(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer$1.poolSize = 8192; // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer$1._augment = function (arr) {
	  arr.__proto__ = Buffer$1.prototype;
	  return arr
	};

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer$1.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	};

	if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	  Buffer$1.prototype.__proto__ = Uint8Array.prototype;
	  Buffer$1.__proto__ = Uint8Array;
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer$1.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	};

	function allocUnsafe (that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer$1.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer$1.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	};
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer$1.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	};

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }

	  if (!Buffer$1.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);

	  var actual = that.write(string, encoding);

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual);
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }

	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array;
	    that.__proto__ = Buffer$1.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array);
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (internalIsBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len);
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray$1(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0;
	  }
	  return Buffer$1.alloc(+length)
	}
	Buffer$1.isBuffer = isBuffer$1;
	function internalIsBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer$1.compare = function compare (a, b) {
	  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	Buffer$1.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	};

	Buffer$1.concat = function concat (list, length) {
	  if (!isArray$1(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer$1.alloc(0)
	  }

	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }

	  var buffer = Buffer$1.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!internalIsBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer
	};

	function byteLength (string, encoding) {
	  if (internalIsBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }

	  var len = string.length;
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer$1.byteLength = byteLength;

	function slowToString (encoding, start, end) {
	  var loweredCase = false;

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0;
	  start >>>= 0;

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8';

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer$1.prototype._isBuffer = true;

	function swap (b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}

	Buffer$1.prototype.swap16 = function swap16 () {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this
	};

	Buffer$1.prototype.swap32 = function swap32 () {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this
	};

	Buffer$1.prototype.swap64 = function swap64 () {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this
	};

	Buffer$1.prototype.toString = function toString () {
	  var length = this.length | 0;
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	};

	Buffer$1.prototype.equals = function equals (b) {
	  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer$1.compare(this, b) === 0
	};

	Buffer$1.prototype.inspect = function inspect () {
	  var str = '';
	  var max = INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>'
	};

	Buffer$1.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!internalIsBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;

	  if (this === target) return 0

	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);

	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset;  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1);
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer$1.from(val, encoding);
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (internalIsBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF; // Search for a byte value [0-255]
	    if (Buffer$1.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false;
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer$1.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	};

	Buffer$1.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	};

	Buffer$1.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	};

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed;
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer$1.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8';

	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};

	Buffer$1.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	};

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return fromByteArray(buf)
	  } else {
	    return fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];

	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1;

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }

	    res.push(codePoint);
	    i += bytesPerSequence;
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000;

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    );
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length;

	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;

	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res
	}

	Buffer$1.prototype.slice = function slice (start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;

	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }

	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }

	  if (end < start) end = start;

	  var newBuf;
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer$1.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer$1(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }

	  return newBuf
	};

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer$1.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }

	  return val
	};

	Buffer$1.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }

	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }

	  return val
	};

	Buffer$1.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset]
	};

	Buffer$1.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | (this[offset + 1] << 8)
	};

	Buffer$1.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return (this[offset] << 8) | this[offset + 1]
	};

	Buffer$1.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	};

	Buffer$1.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	};

	Buffer$1.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer$1.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer$1.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	};

	Buffer$1.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | (this[offset + 1] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer$1.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | (this[offset] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer$1.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	};

	Buffer$1.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	};

	Buffer$1.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, true, 23, 4)
	};

	Buffer$1.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, false, 23, 4)
	};

	Buffer$1.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, true, 52, 8)
	};

	Buffer$1.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, false, 52, 8)
	};

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer$1.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$1.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$1.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer$1.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8;
	  }
	}

	Buffer$1.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};

	Buffer$1.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
	  }
	}

	Buffer$1.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 1] = (value >>> 8);
	    this[offset] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};

	Buffer$1.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};

	Buffer$1.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$1.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$1.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer$1.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	Buffer$1.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};

	Buffer$1.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};

	Buffer$1.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 3] = (value >>> 24);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};

	Buffer$1.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4);
	  }
	  write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4
	}

	Buffer$1.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	};

	Buffer$1.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	};

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8);
	  }
	  write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8
	}

	Buffer$1.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	};

	Buffer$1.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	};

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer$1.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }

	  var len = end - start;
	  var i;

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer$1.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    );
	  }

	  return len
	};

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer$1.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer$1.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;

	  if (!val) val = 0;

	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = internalIsBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer$1(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }

	  return this
	};

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint;

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }

	    leadSurrogate = null;

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }

	  return byteArray
	}


	function base64ToBytes (str) {
	  return toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i];
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}


	// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	function isBuffer$1(obj) {
	  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
	}

	function isFastBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}

	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
	}

	var bufferEs6 = /*#__PURE__*/Object.freeze({
		INSPECT_MAX_BYTES: INSPECT_MAX_BYTES,
		kMaxLength: _kMaxLength,
		Buffer: Buffer$1,
		SlowBuffer: SlowBuffer,
		isBuffer: isBuffer$1
	});

	var buffer = getCjsExportFromNamespace(bufferEs6);

	var Buffer$2 = buffer.Buffer;

	var isbuffer = isBuffer$2;

	function isBuffer$2 (o) {
	  return Buffer$2.isBuffer(o)
	    || /\[object (.+Array|Array.+)\]/.test(Object.prototype.toString.call(o));
	}

	var hasOwn = Object.prototype.hasOwnProperty;
	var toString$1 = Object.prototype.toString;

	var isFunction$1 = function (fn) {
		var isFunc = (typeof fn === 'function' && !(fn instanceof RegExp)) || toString$1.call(fn) === '[object Function]';
		if (!isFunc && typeof window !== 'undefined') {
			isFunc = fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt;
		}
		return isFunc;
	};

	var foreach = function forEach(obj, fn) {
		if (!isFunction$1(fn)) {
			throw new TypeError('iterator must be a function');
		}
		var i, k,
			isString = typeof obj === 'string',
			l = obj.length,
			context = arguments.length > 2 ? arguments[2] : null;
		if (l === +l) {
			for (i = 0; i < l; i++) {
				if (context === null) {
					fn(isString ? obj.charAt(i) : obj[i], i, obj);
				} else {
					fn.call(context, isString ? obj.charAt(i) : obj[i], i, obj);
				}
			}
		} else {
			for (k in obj) {
				if (hasOwn.call(obj, k)) {
					if (context === null) {
						fn(obj[k], k, obj);
					} else {
						fn.call(context, obj[k], k, obj);
					}
				}
			}
		}
	};

	var toString$2 = Object.prototype.toString;

	var isArguments = function isArguments(value) {
		var str = toString$2.call(value);
		var isArguments = str === '[object Arguments]';
		if (!isArguments) {
			isArguments = str !== '[object Array]'
				&& value !== null
				&& typeof value === 'object'
				&& typeof value.length === 'number'
				&& value.length >= 0
				&& toString$2.call(value.callee) === '[object Function]';
		}
		return isArguments;
	};

	var shim = createCommonjsModule(function (module) {
	(function () {

		// modified from https://github.com/kriskowal/es5-shim
		var has = Object.prototype.hasOwnProperty,
			toString = Object.prototype.toString,
			forEach = foreach,
			isArgs = isArguments,
			hasDontEnumBug = !({'toString': null}).propertyIsEnumerable('toString'),
			hasProtoEnumBug = (function () {}).propertyIsEnumerable('prototype'),
			dontEnums = [
				"toString",
				"toLocaleString",
				"valueOf",
				"hasOwnProperty",
				"isPrototypeOf",
				"propertyIsEnumerable",
				"constructor"
			],
			keysShim;

		keysShim = function keys(object) {
			var isObject = object !== null && typeof object === 'object',
				isFunction = toString.call(object) === '[object Function]',
				isArguments = isArgs(object),
				theKeys = [];

			if (!isObject && !isFunction && !isArguments) {
				throw new TypeError("Object.keys called on a non-object");
			}

			if (isArguments) {
				forEach(object, function (value) {
					theKeys.push(value);
				});
			} else {
				var name,
					skipProto = hasProtoEnumBug && isFunction;

				for (name in object) {
					if (!(skipProto && name === 'prototype') && has.call(object, name)) {
						theKeys.push(name);
					}
				}
			}

			if (hasDontEnumBug) {
				var ctor = object.constructor,
					skipConstructor = ctor && ctor.prototype === object;

				forEach(dontEnums, function (dontEnum) {
					if (!(skipConstructor && dontEnum === 'constructor') && has.call(object, dontEnum)) {
						theKeys.push(dontEnum);
					}
				});
			}
			return theKeys;
		};

		module.exports = keysShim;
	}());
	});

	var objectKeys = Object.keys || shim;

	var hasKeys_1 = hasKeys;

	function hasKeys(source) {
	    return source !== null &&
	        (typeof source === "object" ||
	        typeof source === "function")
	}

	var xtend$1 = extend$1;

	function extend$1() {
	    var target = {};

	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i];

	        if (!hasKeys_1(source)) {
	            continue
	        }

	        var keys = objectKeys(source);

	        for (var j = 0; j < keys.length; j++) {
	            var name = keys[j];
	            target[name] = source[name];
	        }
	    }

	    return target
	}

	/**
	 * Convert a typed array to a Buffer without a copy
	 *
	 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * License:  MIT
	 *
	 * `npm install typedarray-to-buffer`
	 */

	var typedarrayToBuffer = function (arr) {
	  if (typeof Buffer._augment === 'function' && Buffer.TYPED_ARRAY_SUPPORT) {
	    // If `Buffer` is from the `buffer` module and this browser supports typed arrays,
	    // then augment it with all the `Buffer` methods.
	    return Buffer._augment(arr)
	  } else {
	    // Otherwise, fallback to creating a `Buffer` with a copy.
	    return new Buffer(arr)
	  }
	};

	var levelJs = Level;


	var AbstractLevelDOWN$1 = abstractLeveldown.AbstractLevelDOWN;






	function Level(location) {
	  if (!(this instanceof Level)) return new Level(location)
	  if (!location) throw new Error("constructor requires at least a location argument")
	  this.IDBOptions = {};
	  this.location = location;
	}

	debugUtil.inherits(Level, AbstractLevelDOWN$1);

	Level.prototype._open = function(options, callback) {
	  var self = this;
	    
	  var idbOpts = {
	    storeName: this.location,
	    autoIncrement: false,
	    keyPath: null,
	    onStoreReady: function () {
	      callback && callback(null, self.idb);
	    }, 
	    onError: function(err) {
	      callback && callback(err);
	    }
	  };
	  
	  xtend$1(idbOpts, options);
	  this.IDBOptions = idbOpts;
	  this.idb = new idbstore(idbOpts);
	};

	Level.prototype._get = function (key, options, callback) {
	  this.idb.get(key, function (value) {
	    if (value === undefined) {
	      // 'NotFound' error, consistent with LevelDOWN API
	      return callback(new Error('NotFound'))
	    }
	    // by default return buffers, unless explicitly told not to
	    var asBuffer = true;
	    if (options.asBuffer === false) asBuffer = false;
	    if (options.raw) asBuffer = false;
	    if (asBuffer) {
	      if (value instanceof Uint8Array) value = typedarrayToBuffer(value);
	      else value = new Buffer(String(value));
	    }
	    return callback(null, value, key)
	  }, callback);
	};

	Level.prototype._del = function(id, options, callback) {
	  this.idb.remove(id, callback, callback);
	};

	Level.prototype._put = function (key, value, options, callback) {
	  if (value instanceof ArrayBuffer) {
	    value = typedarrayToBuffer(new Uint8Array(value));
	  }
	  var obj = this.convertEncoding(key, value, options);
	  if (Buffer.isBuffer(obj.value)) {
	    if (typeof value.toArrayBuffer === 'function') {
	      obj.value = new Uint8Array(value.toArrayBuffer());
	    } else {
	      obj.value = new Uint8Array(value);
	    }
	  }
	  this.idb.put(obj.key, obj.value, function() { callback(); }, callback);
	};

	Level.prototype.convertEncoding = function(key, value, options) {
	  if (options.raw) return {key: key, value: value}
	  if (value) {
	    var stringed = value.toString();
	    if (stringed === 'NaN') value = 'NaN';
	  }
	  var valEnc = options.valueEncoding;
	  var obj = {key: key, value: value};
	  if (value && (!valEnc || valEnc !== 'binary')) {
	    if (typeof obj.value !== 'object') {
	      obj.value = stringed;
	    }
	  }
	  return obj
	};

	Level.prototype.iterator = function (options) {
	  if (typeof options !== 'object') options = {};
	  return new iterator(this.idb, options)
	};

	Level.prototype._batch = function (array, options, callback) {
	  var i;
	  var k;
	  var copiedOp;
	  var currentOp;
	  var modified = [];
	  
	  if (array.length === 0) return setTimeout(callback, 0)
	  
	  for (i = 0; i < array.length; i++) {
	    copiedOp = {};
	    currentOp = array[i];
	    modified[i] = copiedOp;
	    
	    var converted = this.convertEncoding(currentOp.key, currentOp.value, options);
	    currentOp.key = converted.key;
	    currentOp.value = converted.value;

	    for (k in currentOp) {
	      if (k === 'type' && currentOp[k] == 'del') {
	        copiedOp[k] = 'remove';
	      } else {
	        copiedOp[k] = currentOp[k];
	      }
	    }
	  }

	  return this.idb.batch(modified, function(){ callback(); }, callback)
	};

	Level.prototype._close = function (callback) {
	  this.idb.db.close();
	  callback();
	};

	Level.prototype._approximateSize = function (start, end, callback) {
	  var err = new Error('Not implemented');
	  if (callback)
	    return callback(err)

	  throw err
	};

	Level.prototype._isBuffer = function (obj) {
	  return Buffer.isBuffer(obj)
	};

	Level.destroy = function (db, callback) {
	  if (typeof db === 'object') {
	    var prefix = db.IDBOptions.storePrefix || 'IDBWrapper-';
	    var dbname = db.location;
	  } else {
	    var prefix = 'IDBWrapper-';
	    var dbname = db;
	  }
	  var request = indexedDB.deleteDatabase(prefix + dbname);
	  request.onsuccess = function() {
	    callback();
	  };
	  request.onerror = function(err) {
	    callback(err);
	  };
	};

	var checkKeyValue = Level.prototype._checkKeyValue = function (obj, type) {
	  if (obj === null || obj === undefined)
	    return new Error(type + ' cannot be `null` or `undefined`')
	  if (obj === null || obj === undefined)
	    return new Error(type + ' cannot be `null` or `undefined`')
	  if (isbuffer(obj) && obj.byteLength === 0)
	    return new Error(type + ' cannot be an empty ArrayBuffer')
	  if (String(obj) === '')
	    return new Error(type + ' cannot be an empty String')
	  if (obj.length === 0)
	    return new Error(type + ' cannot be an empty Array')
	};

	var domain;

	// This constructor is used to store event handlers. Instantiating this is
	// faster than explicitly calling `Object.create(null)` to get a "clean" empty
	// object (tested with v8 v4.9).
	function EventHandlers() {}
	EventHandlers.prototype = Object.create(null);

	function EventEmitter() {
	  EventEmitter.init.call(this);
	}

	// nodejs oddity
	// require('events') === require('events').EventEmitter
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.usingDomains = false;

	EventEmitter.prototype.domain = undefined;
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	EventEmitter.init = function() {
	  this.domain = null;
	  if (EventEmitter.usingDomains) {
	    // if there is an active domain, then attach to it.
	    if (domain.active && !(this instanceof domain.Domain)) ;
	  }

	  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
	    this._events = new EventHandlers();
	    this._eventsCount = 0;
	  }

	  this._maxListeners = this._maxListeners || undefined;
	};

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
	  if (typeof n !== 'number' || n < 0 || isNaN(n))
	    throw new TypeError('"n" argument must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	function $getMaxListeners(that) {
	  if (that._maxListeners === undefined)
	    return EventEmitter.defaultMaxListeners;
	  return that._maxListeners;
	}

	EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
	  return $getMaxListeners(this);
	};

	// These standalone emit* functions are used to optimize calling of event
	// handlers for fast cases because emit() itself often has a variable number of
	// arguments and can be deoptimized because of that. These functions always have
	// the same number of arguments and thus do not get deoptimized, so the code
	// inside them can execute faster.
	function emitNone(handler, isFn, self) {
	  if (isFn)
	    handler.call(self);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self);
	  }
	}
	function emitOne(handler, isFn, self, arg1) {
	  if (isFn)
	    handler.call(self, arg1);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1);
	  }
	}
	function emitTwo(handler, isFn, self, arg1, arg2) {
	  if (isFn)
	    handler.call(self, arg1, arg2);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1, arg2);
	  }
	}
	function emitThree(handler, isFn, self, arg1, arg2, arg3) {
	  if (isFn)
	    handler.call(self, arg1, arg2, arg3);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1, arg2, arg3);
	  }
	}

	function emitMany(handler, isFn, self, args) {
	  if (isFn)
	    handler.apply(self, args);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].apply(self, args);
	  }
	}

	EventEmitter.prototype.emit = function emit(type) {
	  var er, handler, len, args, i, events, domain;
	  var doError = (type === 'error');

	  events = this._events;
	  if (events)
	    doError = (doError && events.error == null);
	  else if (!doError)
	    return false;

	  domain = this.domain;

	  // If there is no 'error' event listener then throw.
	  if (doError) {
	    er = arguments[1];
	    if (domain) {
	      if (!er)
	        er = new Error('Uncaught, unspecified "error" event');
	      er.domainEmitter = this;
	      er.domain = domain;
	      er.domainThrown = false;
	      domain.emit('error', er);
	    } else if (er instanceof Error) {
	      throw er; // Unhandled 'error' event
	    } else {
	      // At least give some kind of context to the user
	      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	      err.context = er;
	      throw err;
	    }
	    return false;
	  }

	  handler = events[type];

	  if (!handler)
	    return false;

	  var isFn = typeof handler === 'function';
	  len = arguments.length;
	  switch (len) {
	    // fast cases
	    case 1:
	      emitNone(handler, isFn, this);
	      break;
	    case 2:
	      emitOne(handler, isFn, this, arguments[1]);
	      break;
	    case 3:
	      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
	      break;
	    case 4:
	      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
	      break;
	    // slower
	    default:
	      args = new Array(len - 1);
	      for (i = 1; i < len; i++)
	        args[i - 1] = arguments[i];
	      emitMany(handler, isFn, this, args);
	  }

	  return true;
	};

	function _addListener(target, type, listener, prepend) {
	  var m;
	  var events;
	  var existing;

	  if (typeof listener !== 'function')
	    throw new TypeError('"listener" argument must be a function');

	  events = target._events;
	  if (!events) {
	    events = target._events = new EventHandlers();
	    target._eventsCount = 0;
	  } else {
	    // To avoid recursion in the case that type === "newListener"! Before
	    // adding it to the listeners, first emit "newListener".
	    if (events.newListener) {
	      target.emit('newListener', type,
	                  listener.listener ? listener.listener : listener);

	      // Re-assign `events` because a newListener handler could have caused the
	      // this._events to be assigned to a new object
	      events = target._events;
	    }
	    existing = events[type];
	  }

	  if (!existing) {
	    // Optimize the case of one listener. Don't need the extra array object.
	    existing = events[type] = listener;
	    ++target._eventsCount;
	  } else {
	    if (typeof existing === 'function') {
	      // Adding the second element, need to change to array.
	      existing = events[type] = prepend ? [listener, existing] :
	                                          [existing, listener];
	    } else {
	      // If we've already got an array, just append.
	      if (prepend) {
	        existing.unshift(listener);
	      } else {
	        existing.push(listener);
	      }
	    }

	    // Check for listener leak
	    if (!existing.warned) {
	      m = $getMaxListeners(target);
	      if (m && m > 0 && existing.length > m) {
	        existing.warned = true;
	        var w = new Error('Possible EventEmitter memory leak detected. ' +
	                            existing.length + ' ' + type + ' listeners added. ' +
	                            'Use emitter.setMaxListeners() to increase limit');
	        w.name = 'MaxListenersExceededWarning';
	        w.emitter = target;
	        w.type = type;
	        w.count = existing.length;
	        emitWarning(w);
	      }
	    }
	  }

	  return target;
	}
	function emitWarning(e) {
	  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
	}
	EventEmitter.prototype.addListener = function addListener(type, listener) {
	  return _addListener(this, type, listener, false);
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.prependListener =
	    function prependListener(type, listener) {
	      return _addListener(this, type, listener, true);
	    };

	function _onceWrap(target, type, listener) {
	  var fired = false;
	  function g() {
	    target.removeListener(type, g);
	    if (!fired) {
	      fired = true;
	      listener.apply(target, arguments);
	    }
	  }
	  g.listener = listener;
	  return g;
	}

	EventEmitter.prototype.once = function once(type, listener) {
	  if (typeof listener !== 'function')
	    throw new TypeError('"listener" argument must be a function');
	  this.on(type, _onceWrap(this, type, listener));
	  return this;
	};

	EventEmitter.prototype.prependOnceListener =
	    function prependOnceListener(type, listener) {
	      if (typeof listener !== 'function')
	        throw new TypeError('"listener" argument must be a function');
	      this.prependListener(type, _onceWrap(this, type, listener));
	      return this;
	    };

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener =
	    function removeListener(type, listener) {
	      var list, events, position, i, originalListener;

	      if (typeof listener !== 'function')
	        throw new TypeError('"listener" argument must be a function');

	      events = this._events;
	      if (!events)
	        return this;

	      list = events[type];
	      if (!list)
	        return this;

	      if (list === listener || (list.listener && list.listener === listener)) {
	        if (--this._eventsCount === 0)
	          this._events = new EventHandlers();
	        else {
	          delete events[type];
	          if (events.removeListener)
	            this.emit('removeListener', type, list.listener || listener);
	        }
	      } else if (typeof list !== 'function') {
	        position = -1;

	        for (i = list.length; i-- > 0;) {
	          if (list[i] === listener ||
	              (list[i].listener && list[i].listener === listener)) {
	            originalListener = list[i].listener;
	            position = i;
	            break;
	          }
	        }

	        if (position < 0)
	          return this;

	        if (list.length === 1) {
	          list[0] = undefined;
	          if (--this._eventsCount === 0) {
	            this._events = new EventHandlers();
	            return this;
	          } else {
	            delete events[type];
	          }
	        } else {
	          spliceOne(list, position);
	        }

	        if (events.removeListener)
	          this.emit('removeListener', type, originalListener || listener);
	      }

	      return this;
	    };

	EventEmitter.prototype.removeAllListeners =
	    function removeAllListeners(type) {
	      var listeners, events;

	      events = this._events;
	      if (!events)
	        return this;

	      // not listening for removeListener, no need to emit
	      if (!events.removeListener) {
	        if (arguments.length === 0) {
	          this._events = new EventHandlers();
	          this._eventsCount = 0;
	        } else if (events[type]) {
	          if (--this._eventsCount === 0)
	            this._events = new EventHandlers();
	          else
	            delete events[type];
	        }
	        return this;
	      }

	      // emit removeListener for all listeners on all events
	      if (arguments.length === 0) {
	        var keys = Object.keys(events);
	        for (var i = 0, key; i < keys.length; ++i) {
	          key = keys[i];
	          if (key === 'removeListener') continue;
	          this.removeAllListeners(key);
	        }
	        this.removeAllListeners('removeListener');
	        this._events = new EventHandlers();
	        this._eventsCount = 0;
	        return this;
	      }

	      listeners = events[type];

	      if (typeof listeners === 'function') {
	        this.removeListener(type, listeners);
	      } else if (listeners) {
	        // LIFO order
	        do {
	          this.removeListener(type, listeners[listeners.length - 1]);
	        } while (listeners[0]);
	      }

	      return this;
	    };

	EventEmitter.prototype.listeners = function listeners(type) {
	  var evlistener;
	  var ret;
	  var events = this._events;

	  if (!events)
	    ret = [];
	  else {
	    evlistener = events[type];
	    if (!evlistener)
	      ret = [];
	    else if (typeof evlistener === 'function')
	      ret = [evlistener.listener || evlistener];
	    else
	      ret = unwrapListeners(evlistener);
	  }

	  return ret;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  if (typeof emitter.listenerCount === 'function') {
	    return emitter.listenerCount(type);
	  } else {
	    return listenerCount.call(emitter, type);
	  }
	};

	EventEmitter.prototype.listenerCount = listenerCount;
	function listenerCount(type) {
	  var events = this._events;

	  if (events) {
	    var evlistener = events[type];

	    if (typeof evlistener === 'function') {
	      return 1;
	    } else if (evlistener) {
	      return evlistener.length;
	    }
	  }

	  return 0;
	}

	EventEmitter.prototype.eventNames = function eventNames() {
	  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
	};

	// About 1.5x faster than the two-arg version of Array#splice().
	function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
	    list[i] = list[k];
	  list.pop();
	}

	function arrayClone(arr, i) {
	  var copy = new Array(i);
	  while (i--)
	    copy[i] = arr[i];
	  return copy;
	}

	function unwrapListeners(arr) {
	  var ret = new Array(arr.length);
	  for (var i = 0; i < ret.length; ++i) {
	    ret[i] = arr[i].listener || arr[i];
	  }
	  return ret;
	}

	var events = /*#__PURE__*/Object.freeze({
		'default': EventEmitter,
		EventEmitter: EventEmitter
	});

	var xtend$2 = extend$2;

	function extend$2() {
	    var target = {};

	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i];

	        for (var key in source) {
	            if (source.hasOwnProperty(key)) {
	                target[key] = source[key];
	            }
	        }
	    }

	    return target
	}

	var prr = createCommonjsModule(function (module) {
	/*!
	  * prr
	  * (c) 2013 Rod Vagg <rod@vagg.org>
	  * https://github.com/rvagg/prr
	  * License: MIT
	  */

	(function (name, context, definition) {
	  if ( module.exports)
	    module.exports = definition();
	  else
	    context[name] = definition();
	})('prr', commonjsGlobal, function() {

	  var setProperty = typeof Object.defineProperty == 'function'
	      ? function (obj, key, options) {
	          Object.defineProperty(obj, key, options);
	          return obj
	        }
	      : function (obj, key, options) { // < es5
	          obj[key] = options.value;
	          return obj
	        }

	    , makeOptions = function (value, options) {
	        var oo = typeof options == 'object'
	          , os = !oo && typeof options == 'string'
	          , op = function (p) {
	              return oo
	                ? !!options[p]
	                : os
	                  ? options.indexOf(p[0]) > -1
	                  : false
	            };

	        return {
	            enumerable   : op('enumerable')
	          , configurable : op('configurable')
	          , writable     : op('writable')
	          , value        : value
	        }
	      }

	    , prr = function (obj, key, value, options) {
	        var k;

	        options = makeOptions(value, options);

	        if (typeof key == 'object') {
	          for (k in key) {
	            if (Object.hasOwnProperty.call(key, k)) {
	              options.value = key[k];
	              setProperty(obj, k, options);
	            }
	          }
	          return obj
	        }

	        return setProperty(obj, key, options)
	      };

	  return prr
	});
	});

	var xtend$3 = extend$3;

	function extend$3() {
	    var target = {};

	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i];

	        for (var key in source) {
	            if (source.hasOwnProperty(key)) {
	                target[key] = source[key];
	            }
	        }
	    }

	    return target
	}

	/* Copyright (c) 2013 Rod Vagg, MIT License */

	function AbstractIterator$2 (db) {
	  this.db = db;
	  this._ended = false;
	  this._nexting = false;
	}

	AbstractIterator$2.prototype.next = function (callback) {
	  var self = this;

	  if (typeof callback != 'function')
	    throw new Error('next() requires a callback argument')

	  if (self._ended)
	    return callback(new Error('cannot call next() after end()'))
	  if (self._nexting)
	    return callback(new Error('cannot call next() before previous next() has completed'))

	  self._nexting = true;
	  if (typeof self._next == 'function') {
	    return self._next(function () {
	      self._nexting = false;
	      callback.apply(null, arguments);
	    })
	  }

	  process.nextTick(function () {
	    self._nexting = false;
	    callback();
	  });
	};

	AbstractIterator$2.prototype.end = function (callback) {
	  if (typeof callback != 'function')
	    throw new Error('end() requires a callback argument')

	  if (this._ended)
	    return callback(new Error('end() already called on iterator'))

	  this._ended = true;

	  if (typeof this._end == 'function')
	    return this._end(callback)

	  process.nextTick(callback);
	};

	var abstractIterator$1 = AbstractIterator$2;

	/* Copyright (c) 2013 Rod Vagg, MIT License */

	function AbstractChainedBatch$1 (db) {
	  this._db         = db;
	  this._operations = [];
	  this._written    = false;
	}

	AbstractChainedBatch$1.prototype._checkWritten = function () {
	  if (this._written)
	    throw new Error('write() already called on this batch')
	};

	AbstractChainedBatch$1.prototype.put = function (key, value) {
	  this._checkWritten();

	  var err = this._db._checkKeyValue(key, 'key', this._db._isBuffer);
	  if (err) throw err
	  err = this._db._checkKeyValue(value, 'value', this._db._isBuffer);
	  if (err) throw err

	  if (!this._db._isBuffer(key)) key = String(key);
	  if (!this._db._isBuffer(value)) value = String(value);

	  if (typeof this._put == 'function' )
	    this._put(key, value);
	  else
	    this._operations.push({ type: 'put', key: key, value: value });

	  return this
	};

	AbstractChainedBatch$1.prototype.del = function (key) {
	  this._checkWritten();

	  var err = this._db._checkKeyValue(key, 'key', this._db._isBuffer);
	  if (err) throw err

	  if (!this._db._isBuffer(key)) key = String(key);

	  if (typeof this._del == 'function' )
	    this._del(key);
	  else
	    this._operations.push({ type: 'del', key: key });

	  return this
	};

	AbstractChainedBatch$1.prototype.clear = function () {
	  this._checkWritten();

	  this._operations = [];

	  if (typeof this._clear == 'function' )
	    this._clear();

	  return this
	};

	AbstractChainedBatch$1.prototype.write = function (options, callback) {
	  this._checkWritten();

	  if (typeof options == 'function')
	    callback = options;
	  if (typeof callback != 'function')
	    throw new Error('write() requires a callback argument')
	  if (typeof options != 'object')
	    options = {};

	  this._written = true;

	  if (typeof this._write == 'function' )
	    return this._write(callback)

	  if (typeof this._db._batch == 'function')
	    return this._db._batch(this._operations, options, callback)

	  process.nextTick(callback);
	};

	var abstractChainedBatch$1 = AbstractChainedBatch$1;

	/* Copyright (c) 2013 Rod Vagg, MIT License */



	function AbstractLevelDOWN$2 (location) {
	  if (!arguments.length || location === undefined)
	    throw new Error('constructor requires at least a location argument')

	  if (typeof location != 'string')
	    throw new Error('constructor requires a location string argument')

	  this.location = location;
	}

	AbstractLevelDOWN$2.prototype.open = function (options, callback) {
	  if (typeof options == 'function')
	    callback = options;

	  if (typeof callback != 'function')
	    throw new Error('open() requires a callback argument')

	  if (typeof options != 'object')
	    options = {};

	  if (typeof this._open == 'function')
	    return this._open(options, callback)

	  process.nextTick(callback);
	};

	AbstractLevelDOWN$2.prototype.close = function (callback) {
	  if (typeof callback != 'function')
	    throw new Error('close() requires a callback argument')

	  if (typeof this._close == 'function')
	    return this._close(callback)

	  process.nextTick(callback);
	};

	AbstractLevelDOWN$2.prototype.get = function (key, options, callback) {
	  var err;

	  if (typeof options == 'function')
	    callback = options;

	  if (typeof callback != 'function')
	    throw new Error('get() requires a callback argument')

	  if (err = this._checkKeyValue(key, 'key', this._isBuffer))
	    return callback(err)

	  if (!this._isBuffer(key))
	    key = String(key);

	  if (typeof options != 'object')
	    options = {};

	  if (typeof this._get == 'function')
	    return this._get(key, options, callback)

	  process.nextTick(function () { callback(new Error('NotFound')); });
	};

	AbstractLevelDOWN$2.prototype.put = function (key, value, options, callback) {
	  var err;

	  if (typeof options == 'function')
	    callback = options;

	  if (typeof callback != 'function')
	    throw new Error('put() requires a callback argument')

	  if (err = this._checkKeyValue(key, 'key', this._isBuffer))
	    return callback(err)

	  if (err = this._checkKeyValue(value, 'value', this._isBuffer))
	    return callback(err)

	  if (!this._isBuffer(key))
	    key = String(key);

	  // coerce value to string in node, don't touch it in browser
	  // (indexeddb can store any JS type)
	  if (!this._isBuffer(value) && !process.browser)
	    value = String(value);

	  if (typeof options != 'object')
	    options = {};

	  if (typeof this._put == 'function')
	    return this._put(key, value, options, callback)

	  process.nextTick(callback);
	};

	AbstractLevelDOWN$2.prototype.del = function (key, options, callback) {
	  var err;

	  if (typeof options == 'function')
	    callback = options;

	  if (typeof callback != 'function')
	    throw new Error('del() requires a callback argument')

	  if (err = this._checkKeyValue(key, 'key', this._isBuffer))
	    return callback(err)

	  if (!this._isBuffer(key))
	    key = String(key);

	  if (typeof options != 'object')
	    options = {};

	  if (typeof this._del == 'function')
	    return this._del(key, options, callback)

	  process.nextTick(callback);
	};

	AbstractLevelDOWN$2.prototype.batch = function (array, options, callback) {
	  if (!arguments.length)
	    return this._chainedBatch()

	  if (typeof options == 'function')
	    callback = options;

	  if (typeof callback != 'function')
	    throw new Error('batch(array) requires a callback argument')

	  if (!Array.isArray(array))
	    return callback(new Error('batch(array) requires an array argument'))

	  if (typeof options != 'object')
	    options = {};

	  var i = 0
	    , l = array.length
	    , e
	    , err;

	  for (; i < l; i++) {
	    e = array[i];
	    if (typeof e != 'object')
	      continue

	    if (err = this._checkKeyValue(e.type, 'type', this._isBuffer))
	      return callback(err)

	    if (err = this._checkKeyValue(e.key, 'key', this._isBuffer))
	      return callback(err)

	    if (e.type == 'put') {
	      if (err = this._checkKeyValue(e.value, 'value', this._isBuffer))
	        return callback(err)
	    }
	  }

	  if (typeof this._batch == 'function')
	    return this._batch(array, options, callback)

	  process.nextTick(callback);
	};

	//TODO: remove from here, not a necessary primitive
	AbstractLevelDOWN$2.prototype.approximateSize = function (start, end, callback) {
	  if (   start == null
	      || end == null
	      || typeof start == 'function'
	      || typeof end == 'function') {
	    throw new Error('approximateSize() requires valid `start`, `end` and `callback` arguments')
	  }

	  if (typeof callback != 'function')
	    throw new Error('approximateSize() requires a callback argument')

	  if (!this._isBuffer(start))
	    start = String(start);

	  if (!this._isBuffer(end))
	    end = String(end);

	  if (typeof this._approximateSize == 'function')
	    return this._approximateSize(start, end, callback)

	  process.nextTick(function () {
	    callback(null, 0);
	  });
	};

	AbstractLevelDOWN$2.prototype._setupIteratorOptions = function (options) {
	  var self = this;

	  options = xtend$3(options)

	  ;[ 'start', 'end', 'gt', 'gte', 'lt', 'lte' ].forEach(function (o) {
	    if (options[o] && self._isBuffer(options[o]) && options[o].length === 0)
	      delete options[o];
	  });

	  options.reverse = !!options.reverse;

	  // fix `start` so it takes into account gt, gte, lt, lte as appropriate
	  if (options.reverse && options.lt)
	    options.start = options.lt;
	  if (options.reverse && options.lte)
	    options.start = options.lte;
	  if (!options.reverse && options.gt)
	    options.start = options.gt;
	  if (!options.reverse && options.gte)
	    options.start = options.gte;

	  if ((options.reverse && options.lt && !options.lte)
	    || (!options.reverse && options.gt && !options.gte))
	    options.exclusiveStart = true; // start should *not* include matching key

	  return options
	};

	AbstractLevelDOWN$2.prototype.iterator = function (options) {
	  if (typeof options != 'object')
	    options = {};

	  options = this._setupIteratorOptions(options);

	  if (typeof this._iterator == 'function')
	    return this._iterator(options)

	  return new abstractIterator$1(this)
	};

	AbstractLevelDOWN$2.prototype._chainedBatch = function () {
	  return new abstractChainedBatch$1(this)
	};

	AbstractLevelDOWN$2.prototype._isBuffer = function (obj) {
	  return Buffer.isBuffer(obj)
	};

	AbstractLevelDOWN$2.prototype._checkKeyValue = function (obj, type) {

	  if (obj === null || obj === undefined)
	    return new Error(type + ' cannot be `null` or `undefined`')

	  if (this._isBuffer(obj)) {
	    if (obj.length === 0)
	      return new Error(type + ' cannot be an empty Buffer')
	  } else if (String(obj) === '')
	    return new Error(type + ' cannot be an empty String')
	};

	var AbstractLevelDOWN_1$1    = AbstractLevelDOWN$2;
	var AbstractIterator_1$1     = abstractIterator$1;
	var AbstractChainedBatch_1$1 = abstractChainedBatch$1;

	var abstractLeveldown$1 = {
		AbstractLevelDOWN: AbstractLevelDOWN_1$1,
		AbstractIterator: AbstractIterator_1$1,
		AbstractChainedBatch: AbstractChainedBatch_1$1
	};

	var AbstractLevelDOWN$3 = abstractLeveldown$1.AbstractLevelDOWN;

	function DeferredLevelDOWN (location) {
	  AbstractLevelDOWN$3.call(this, typeof location == 'string' ? location : ''); // optional location, who cares?
	  this._db         = undefined;
	  this._operations = [];
	}

	debugUtil.inherits(DeferredLevelDOWN, AbstractLevelDOWN$3);

	// called by LevelUP when we have a real DB to take its place
	DeferredLevelDOWN.prototype.setDb = function (db) {
	  this._db = db;
	  this._operations.forEach(function (op) {
	    db[op.method].apply(db, op.args);
	  });
	};

	DeferredLevelDOWN.prototype._open = function (options, callback) {
	  return process.nextTick(callback)
	};

	// queue a new deferred operation
	DeferredLevelDOWN.prototype._operation = function (method, args) {
	  if (this._db)
	    return this._db[method].apply(this._db, args)
	  this._operations.push({ method: method, args: args });
	};

	// deferrables
	'put get del batch approximateSize'.split(' ').forEach(function (m) {
	  DeferredLevelDOWN.prototype['_' + m] = function () {
	    this._operation(m, arguments);
	  };
	});

	DeferredLevelDOWN.prototype._isBuffer = function (obj) {
	  return Buffer.isBuffer(obj)
	};

	// don't need to implement this as LevelUP's ReadStream checks for 'ready' state
	DeferredLevelDOWN.prototype._iterator = function () {
	  throw new TypeError('not implemented')
	};

	var deferredLeveldown = DeferredLevelDOWN;

	var prr$1 = createCommonjsModule(function (module) {
	/*!
	  * prr
	  * (c) 2013 Rod Vagg <rod@vagg.org>
	  * https://github.com/rvagg/prr
	  * License: MIT
	  */

	(function (name, context, definition) {
	  if ( module.exports)
	    module.exports = definition();
	  else
	    context[name] = definition();
	})('prr', commonjsGlobal, function() {

	  var setProperty = typeof Object.defineProperty == 'function'
	      ? function (obj, key, options) {
	          Object.defineProperty(obj, key, options);
	          return obj
	        }
	      : function (obj, key, options) { // < es5
	          obj[key] = options.value;
	          return obj
	        }

	    , makeOptions = function (value, options) {
	        var oo = typeof options == 'object'
	          , os = !oo && typeof options == 'string'
	          , op = function (p) {
	              return oo
	                ? !!options[p]
	                : os
	                  ? options.indexOf(p[0]) > -1
	                  : false
	            };

	        return {
	            enumerable   : op('enumerable')
	          , configurable : op('configurable')
	          , writable     : op('writable')
	          , value        : value
	        }
	      }

	    , prr = function (obj, key, value, options) {
	        var k;

	        options = makeOptions(value, options);

	        if (typeof key == 'object') {
	          for (k in key) {
	            if (Object.hasOwnProperty.call(key, k)) {
	              options.value = key[k];
	              setProperty(obj, k, options);
	            }
	          }
	          return obj
	        }

	        return setProperty(obj, key, options)
	      };

	  return prr
	});
	});

	function init$1 (type, message, cause) {
	  if (!!message && typeof message != 'string') {
	    message = message.message || message.name;
	  }
	  prr$1(this, {
	      type    : type
	    , name    : type
	      // can be passed just a 'cause'
	    , cause   : typeof message != 'string' ? message : cause
	    , message : message
	  }, 'ewr');
	}

	// generic prototype, not intended to be actually used - helpful for `instanceof`
	function CustomError (message, cause) {
	  Error.call(this);
	  if (Error.captureStackTrace)
	    Error.captureStackTrace(this, this.constructor);
	  init$1.call(this, 'CustomError', message, cause);
	}

	CustomError.prototype = new Error();

	function createError (errno, type, proto) {
	  var err = function (message, cause) {
	    init$1.call(this, type, message, cause);
	    //TODO: the specificity here is stupid, errno should be available everywhere
	    if (type == 'FilesystemError') {
	      this.code    = this.cause.code;
	      this.path    = this.cause.path;
	      this.errno   = this.cause.errno;
	      this.message =
	        (errno.errno[this.cause.errno]
	          ? errno.errno[this.cause.errno].description
	          : this.cause.message)
	        + (this.cause.path ? ' [' + this.cause.path + ']' : '');
	    }
	    Error.call(this);
	    if (Error.captureStackTrace)
	      Error.captureStackTrace(this, err);
	  };
	  err.prototype = !!proto ? new proto() : new CustomError();
	  return err
	}

	var custom = function (errno) {
	  var ce = function (type, proto) {
	    return createError(errno, type, proto)
	  };
	  return {
	      CustomError     : CustomError
	    , FilesystemError : ce('FilesystemError')
	    , createError     : ce
	  }
	};

	var errno = createCommonjsModule(function (module) {
	var all = module.exports.all = [
	  {
	    errno: -2,
	    code: 'ENOENT',
	    description: 'no such file or directory'
	  },
	  {
	    errno: -1,
	    code: 'UNKNOWN',
	    description: 'unknown error'
	  },
	  {
	    errno: 0,
	    code: 'OK',
	    description: 'success'
	  },
	  {
	    errno: 1,
	    code: 'EOF',
	    description: 'end of file'
	  },
	  {
	    errno: 2,
	    code: 'EADDRINFO',
	    description: 'getaddrinfo error'
	  },
	  {
	    errno: 3,
	    code: 'EACCES',
	    description: 'permission denied'
	  },
	  {
	    errno: 4,
	    code: 'EAGAIN',
	    description: 'resource temporarily unavailable'
	  },
	  {
	    errno: 5,
	    code: 'EADDRINUSE',
	    description: 'address already in use'
	  },
	  {
	    errno: 6,
	    code: 'EADDRNOTAVAIL',
	    description: 'address not available'
	  },
	  {
	    errno: 7,
	    code: 'EAFNOSUPPORT',
	    description: 'address family not supported'
	  },
	  {
	    errno: 8,
	    code: 'EALREADY',
	    description: 'connection already in progress'
	  },
	  {
	    errno: 9,
	    code: 'EBADF',
	    description: 'bad file descriptor'
	  },
	  {
	    errno: 10,
	    code: 'EBUSY',
	    description: 'resource busy or locked'
	  },
	  {
	    errno: 11,
	    code: 'ECONNABORTED',
	    description: 'software caused connection abort'
	  },
	  {
	    errno: 12,
	    code: 'ECONNREFUSED',
	    description: 'connection refused'
	  },
	  {
	    errno: 13,
	    code: 'ECONNRESET',
	    description: 'connection reset by peer'
	  },
	  {
	    errno: 14,
	    code: 'EDESTADDRREQ',
	    description: 'destination address required'
	  },
	  {
	    errno: 15,
	    code: 'EFAULT',
	    description: 'bad address in system call argument'
	  },
	  {
	    errno: 16,
	    code: 'EHOSTUNREACH',
	    description: 'host is unreachable'
	  },
	  {
	    errno: 17,
	    code: 'EINTR',
	    description: 'interrupted system call'
	  },
	  {
	    errno: 18,
	    code: 'EINVAL',
	    description: 'invalid argument'
	  },
	  {
	    errno: 19,
	    code: 'EISCONN',
	    description: 'socket is already connected'
	  },
	  {
	    errno: 20,
	    code: 'EMFILE',
	    description: 'too many open files'
	  },
	  {
	    errno: 21,
	    code: 'EMSGSIZE',
	    description: 'message too long'
	  },
	  {
	    errno: 22,
	    code: 'ENETDOWN',
	    description: 'network is down'
	  },
	  {
	    errno: 23,
	    code: 'ENETUNREACH',
	    description: 'network is unreachable'
	  },
	  {
	    errno: 24,
	    code: 'ENFILE',
	    description: 'file table overflow'
	  },
	  {
	    errno: 25,
	    code: 'ENOBUFS',
	    description: 'no buffer space available'
	  },
	  {
	    errno: 26,
	    code: 'ENOMEM',
	    description: 'not enough memory'
	  },
	  {
	    errno: 27,
	    code: 'ENOTDIR',
	    description: 'not a directory'
	  },
	  {
	    errno: 28,
	    code: 'EISDIR',
	    description: 'illegal operation on a directory'
	  },
	  {
	    errno: 29,
	    code: 'ENONET',
	    description: 'machine is not on the network'
	  },
	  {
	    errno: 31,
	    code: 'ENOTCONN',
	    description: 'socket is not connected'
	  },
	  {
	    errno: 32,
	    code: 'ENOTSOCK',
	    description: 'socket operation on non-socket'
	  },
	  {
	    errno: 33,
	    code: 'ENOTSUP',
	    description: 'operation not supported on socket'
	  },
	  {
	    errno: 34,
	    code: 'ENOENT',
	    description: 'no such file or directory'
	  },
	  {
	    errno: 35,
	    code: 'ENOSYS',
	    description: 'function not implemented'
	  },
	  {
	    errno: 36,
	    code: 'EPIPE',
	    description: 'broken pipe'
	  },
	  {
	    errno: 37,
	    code: 'EPROTO',
	    description: 'protocol error'
	  },
	  {
	    errno: 38,
	    code: 'EPROTONOSUPPORT',
	    description: 'protocol not supported'
	  },
	  {
	    errno: 39,
	    code: 'EPROTOTYPE',
	    description: 'protocol wrong type for socket'
	  },
	  {
	    errno: 40,
	    code: 'ETIMEDOUT',
	    description: 'connection timed out'
	  },
	  {
	    errno: 41,
	    code: 'ECHARSET',
	    description: 'invalid Unicode character'
	  },
	  {
	    errno: 42,
	    code: 'EAIFAMNOSUPPORT',
	    description: 'address family for hostname not supported'
	  },
	  {
	    errno: 44,
	    code: 'EAISERVICE',
	    description: 'servname not supported for ai_socktype'
	  },
	  {
	    errno: 45,
	    code: 'EAISOCKTYPE',
	    description: 'ai_socktype not supported'
	  },
	  {
	    errno: 46,
	    code: 'ESHUTDOWN',
	    description: 'cannot send after transport endpoint shutdown'
	  },
	  {
	    errno: 47,
	    code: 'EEXIST',
	    description: 'file already exists'
	  },
	  {
	    errno: 48,
	    code: 'ESRCH',
	    description: 'no such process'
	  },
	  {
	    errno: 49,
	    code: 'ENAMETOOLONG',
	    description: 'name too long'
	  },
	  {
	    errno: 50,
	    code: 'EPERM',
	    description: 'operation not permitted'
	  },
	  {
	    errno: 51,
	    code: 'ELOOP',
	    description: 'too many symbolic links encountered'
	  },
	  {
	    errno: 52,
	    code: 'EXDEV',
	    description: 'cross-device link not permitted'
	  },
	  {
	    errno: 53,
	    code: 'ENOTEMPTY',
	    description: 'directory not empty'
	  },
	  {
	    errno: 54,
	    code: 'ENOSPC',
	    description: 'no space left on device'
	  },
	  {
	    errno: 55,
	    code: 'EIO',
	    description: 'i/o error'
	  },
	  {
	    errno: 56,
	    code: 'EROFS',
	    description: 'read-only file system'
	  },
	  {
	    errno: 57,
	    code: 'ENODEV',
	    description: 'no such device'
	  },
	  {
	    errno: 58,
	    code: 'ESPIPE',
	    description: 'invalid seek'
	  },
	  {
	    errno: 59,
	    code: 'ECANCELED',
	    description: 'operation canceled'
	  }
	];

	module.exports.errno = {};
	module.exports.code = {};

	all.forEach(function (error) {
	  module.exports.errno[error.errno] = error;
	  module.exports.code[error.code] = error;
	});

	module.exports.custom = custom(module.exports);
	module.exports.create = module.exports.custom.createError;
	});
	var errno_1 = errno.all;
	var errno_2 = errno.errno;
	var errno_3 = errno.code;
	var errno_4 = errno.custom;
	var errno_5 = errno.create;

	/* Copyright (c) 2012-2014 LevelUP contributors
	 * See list at <https://github.com/rvagg/node-levelup#contributing>
	 * MIT License
	 * <https://github.com/rvagg/node-levelup/blob/master/LICENSE.md>
	 */

	var createError$1   = errno.create
	  , LevelUPError  = createError$1('LevelUPError')
	  , NotFoundError = createError$1('NotFoundError', LevelUPError);

	NotFoundError.prototype.notFound = true;
	NotFoundError.prototype.status   = 404;

	var errors = {
	    LevelUPError        : LevelUPError
	  , InitializationError : createError$1('InitializationError', LevelUPError)
	  , OpenError           : createError$1('OpenError', LevelUPError)
	  , ReadError           : createError$1('ReadError', LevelUPError)
	  , WriteError          : createError$1('WriteError', LevelUPError)
	  , NotFoundError       : NotFoundError
	  , EncodingError       : createError$1('EncodingError', LevelUPError)
	};

	function BufferList() {
	  this.head = null;
	  this.tail = null;
	  this.length = 0;
	}

	BufferList.prototype.push = function (v) {
	  var entry = { data: v, next: null };
	  if (this.length > 0) this.tail.next = entry;else this.head = entry;
	  this.tail = entry;
	  ++this.length;
	};

	BufferList.prototype.unshift = function (v) {
	  var entry = { data: v, next: this.head };
	  if (this.length === 0) this.tail = entry;
	  this.head = entry;
	  ++this.length;
	};

	BufferList.prototype.shift = function () {
	  if (this.length === 0) return;
	  var ret = this.head.data;
	  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
	  --this.length;
	  return ret;
	};

	BufferList.prototype.clear = function () {
	  this.head = this.tail = null;
	  this.length = 0;
	};

	BufferList.prototype.join = function (s) {
	  if (this.length === 0) return '';
	  var p = this.head;
	  var ret = '' + p.data;
	  while (p = p.next) {
	    ret += s + p.data;
	  }return ret;
	};

	BufferList.prototype.concat = function (n) {
	  if (this.length === 0) return Buffer$1.alloc(0);
	  if (this.length === 1) return this.head.data;
	  var ret = Buffer$1.allocUnsafe(n >>> 0);
	  var p = this.head;
	  var i = 0;
	  while (p) {
	    p.data.copy(ret, i);
	    i += p.data.length;
	    p = p.next;
	  }
	  return ret;
	};

	// Copyright Joyent, Inc. and other Node contributors.
	var isBufferEncoding = Buffer$1.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     };


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	function StringDecoder(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer$1(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	}

	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}

	Readable.ReadableState = ReadableState;

	var debug = debuglog('stream');
	inherits$1(Readable, EventEmitter);

	function prependListener(emitter, event, fn) {
	  // Sadly this is not cacheable as some libraries bundle their own
	  // event emitter implementation with them.
	  if (typeof emitter.prependListener === 'function') {
	    return emitter.prependListener(event, fn);
	  } else {
	    // This is a hack to make sure that our error handler is attached before any
	    // userland ones.  NEVER DO THIS. This is here only because this code needs
	    // to continue to work with older versions of Node.js that do not include
	    // the prependListener() method. The goal is to eventually remove this hack.
	    if (!emitter._events || !emitter._events[event])
	      emitter.on(event, fn);
	    else if (Array.isArray(emitter._events[event]))
	      emitter._events[event].unshift(fn);
	    else
	      emitter._events[event] = [fn, emitter._events[event]];
	  }
	}
	function listenerCount$1 (emitter, type) {
	  return emitter.listeners(type).length;
	}
	function ReadableState(options, stream) {

	  options = options || {};

	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  // A linked list is used to store data chunks instead of an array because the
	  // linked list can remove elements from the beginning faster than
	  // array.shift()
	  this.buffer = new BufferList();
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;
	  this.resumeScheduled = false;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}
	function Readable(options) {

	  if (!(this instanceof Readable)) return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  if (options && typeof options.read === 'function') this._read = options.read;

	  EventEmitter.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function (chunk, encoding) {
	  var state = this._readableState;

	  if (!state.objectMode && typeof chunk === 'string') {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = Buffer.from(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function (chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	Readable.prototype.isPaused = function () {
	  return this._readableState.flowing === false;
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (chunk === null) {
	    state.reading = false;
	    onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var _e = new Error('stream.unshift() after end event');
	      stream.emit('error', _e);
	    } else {
	      var skipAdd;
	      if (state.decoder && !addToFront && !encoding) {
	        chunk = state.decoder.write(chunk);
	        skipAdd = !state.objectMode && chunk.length === 0;
	      }

	      if (!addToFront) state.reading = false;

	      // Don't add to the buffer if we've decoded to an empty string chunk and
	      // we're not in object mode
	      if (!skipAdd) {
	        // if we want the data now, just emit it.
	        if (state.flowing && state.length === 0 && !state.sync) {
	          stream.emit('data', chunk);
	          stream.read(0);
	        } else {
	          // update the buffer info.
	          state.length += state.objectMode ? 1 : chunk.length;
	          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

	          if (state.needReadable) emitReadable(stream);
	        }
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}

	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function (enc) {
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 8MB
	var MAX_HWM = 0x800000;
	function computeNewHighWaterMark(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2 to prevent increasing hwm excessively in
	    // tiny amounts
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n;
	}

	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function howMuchToRead(n, state) {
	  if (n <= 0 || state.length === 0 && state.ended) return 0;
	  if (state.objectMode) return 1;
	  if (n !== n) {
	    // Only flow one buffer at a time
	    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
	  }
	  // If we're asking for more than the current hwm, then raise the hwm.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
	  if (n <= state.length) return n;
	  // Don't have enough
	  if (!state.ended) {
	    state.needReadable = true;
	    return 0;
	  }
	  return state.length;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function (n) {
	  debug('read', n);
	  n = parseInt(n, 10);
	  var state = this._readableState;
	  var nOrig = n;

	  if (n !== 0) state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  } else if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	    // If _read pushed data synchronously, then `reading` will be false,
	    // and we need to re-evaluate how much data we can return to the user.
	    if (!state.reading) n = howMuchToRead(nOrig, state);
	  }

	  var ret;
	  if (n > 0) ret = fromList(n, state);else ret = null;

	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  } else {
	    state.length -= n;
	  }

	  if (state.length === 0) {
	    // If we have nothing in the buffer, then we want to know
	    // as soon as we *do* get something into the buffer.
	    if (!state.ended) state.needReadable = true;

	    // If we tried to read() past the EOF, then emit end on the next tick.
	    if (nOrig !== n && state.ended) endReadable(this);
	  }

	  if (ret !== null) this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}

	function onEofChunk(stream, state) {
	  if (state.ended) return;
	  if (state.decoder) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync) nextTick(emitReadable_, stream);else emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}

	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    nextTick(maybeReadMore_, stream, state);
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;else len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function (n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable.prototype.pipe = function (dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false);

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted) nextTick(endFn);else src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  var cleanedUp = false;
	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    cleanedUp = true;

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }

	  // If the user pushes more data while we're writing to dest then we'll end up
	  // in ondata again. However, we only want to increase awaitDrain once because
	  // dest will only emit one 'drain' event for the multiple writes.
	  // => Introduce a guard on increasing awaitDrain.
	  var increasedAwaitDrain = false;
	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    increasedAwaitDrain = false;
	    var ret = dest.write(chunk);
	    if (false === ret && !increasedAwaitDrain) {
	      // If the user unpiped during `dest.write()`, it is possible
	      // to get stuck in a permanently paused state if that write
	      // also returned false.
	      // => Check whether `dest` is still a piping destination.
	      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
	        debug('false write response, pause', src._readableState.awaitDrain);
	        src._readableState.awaitDrain++;
	        increasedAwaitDrain = true;
	      }
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (listenerCount$1(dest, 'error') === 0) dest.emit('error', er);
	  }

	  // Make sure our error handler is attached before userland ones.
	  prependListener(dest, 'error', onerror);

	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function () {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain) state.awaitDrain--;
	    if (state.awaitDrain === 0 && src.listeners('data').length) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}

	Readable.prototype.unpipe = function (dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0) return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes) return this;

	    if (!dest) dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest) dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var _i = 0; _i < len; _i++) {
	      dests[_i].emit('unpipe', this);
	    }return this;
	  }

	  // try to find the right one.
	  var i = indexOf(state.pipes, dest);
	  if (i === -1) return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1) state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function (ev, fn) {
	  var res = EventEmitter.prototype.on.call(this, ev, fn);

	  if (ev === 'data') {
	    // Start flowing on next tick if stream isn't explicitly paused
	    if (this._readableState.flowing !== false) this.resume();
	  } else if (ev === 'readable') {
	    var state = this._readableState;
	    if (!state.endEmitted && !state.readableListening) {
	      state.readableListening = state.needReadable = true;
	      state.emittedReadable = false;
	      if (!state.reading) {
	        nextTick(nReadingNextTick, this);
	      } else if (state.length) {
	        emitReadable(this);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	function nReadingNextTick(self) {
	  debug('readable nexttick read 0');
	  self.read(0);
	}

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function () {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    nextTick(resume_, stream, state);
	  }
	}

	function resume_(stream, state) {
	  if (!state.reading) {
	    debug('resume read 0');
	    stream.read(0);
	  }

	  state.resumeScheduled = false;
	  state.awaitDrain = 0;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}

	Readable.prototype.pause = function () {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  while (state.flowing && stream.read() !== null) {}
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function (stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function () {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length) self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function (chunk) {
	    debug('wrapped data');
	    if (state.decoder) chunk = state.decoder.write(chunk);

	    // don't skip over falsy values in objectMode
	    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = function (method) {
	        return function () {
	          return stream[method].apply(stream, arguments);
	        };
	      }(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function (ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function (n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};

	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromList(n, state) {
	  // nothing buffered
	  if (state.length === 0) return null;

	  var ret;
	  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
	    // read it all, truncate the list
	    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
	    state.buffer.clear();
	  } else {
	    // read part of list
	    ret = fromListPartial(n, state.buffer, state.decoder);
	  }

	  return ret;
	}

	// Extracts only enough buffered data to satisfy the amount requested.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromListPartial(n, list, hasStrings) {
	  var ret;
	  if (n < list.head.data.length) {
	    // slice is the same for buffers and strings
	    ret = list.head.data.slice(0, n);
	    list.head.data = list.head.data.slice(n);
	  } else if (n === list.head.data.length) {
	    // first chunk is a perfect match
	    ret = list.shift();
	  } else {
	    // result spans more than one buffer
	    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
	  }
	  return ret;
	}

	// Copies a specified amount of characters from the list of buffered data
	// chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBufferString(n, list) {
	  var p = list.head;
	  var c = 1;
	  var ret = p.data;
	  n -= ret.length;
	  while (p = p.next) {
	    var str = p.data;
	    var nb = n > str.length ? str.length : n;
	    if (nb === str.length) ret += str;else ret += str.slice(0, n);
	    n -= nb;
	    if (n === 0) {
	      if (nb === str.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = str.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}

	// Copies a specified amount of bytes from the list of buffered data chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBuffer(n, list) {
	  var ret = Buffer.allocUnsafe(n);
	  var p = list.head;
	  var c = 1;
	  p.data.copy(ret);
	  n -= p.data.length;
	  while (p = p.next) {
	    var buf = p.data;
	    var nb = n > buf.length ? buf.length : n;
	    buf.copy(ret, ret.length - n, 0, nb);
	    n -= nb;
	    if (n === 0) {
	      if (nb === buf.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = buf.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    nextTick(endReadableNT, state, stream);
	  }
	}

	function endReadableNT(state, stream) {
	  // Check that we didn't get one last unshift.
	  if (!state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.readable = false;
	    stream.emit('end');
	  }
	}

	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf(xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

	// A bit simpler than readable streams.
	Writable.WritableState = WritableState;
	inherits$1(Writable, EventEmitter);

	function nop() {}

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	  this.next = null;
	}

	function WritableState(options, stream) {
	  Object.defineProperty(this, 'buffer', {
	    get: deprecate(function () {
	      return this.getBuffer();
	    }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
	  });
	  options = options || {};

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function (er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.bufferedRequest = null;
	  this.lastBufferedRequest = null;

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;

	  // count buffered requests
	  this.bufferedRequestCount = 0;

	  // allocate the first CorkedRequest, there is always
	  // one allocated and free to use, and we maintain at most two
	  this.corkedRequestsFree = new CorkedRequest(this);
	}

	WritableState.prototype.getBuffer = function writableStateGetBuffer() {
	  var current = this.bufferedRequest;
	  var out = [];
	  while (current) {
	    out.push(current);
	    current = current.next;
	  }
	  return out;
	};
	function Writable(options) {

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;

	    if (typeof options.writev === 'function') this._writev = options.writev;
	  }

	  EventEmitter.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function () {
	  this.emit('error', new Error('Cannot pipe, not readable'));
	};

	function writeAfterEnd(stream, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  nextTick(cb, er);
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  var er = false;
	  // Always throw error if a null is written
	  // if we are not in object mode then throw
	  // if it is not a buffer, string, or undefined.
	  if (chunk === null) {
	    er = new TypeError('May not write null values to stream');
	  } else if (!Buffer$1.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  if (er) {
	    stream.emit('error', er);
	    nextTick(cb, er);
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function (chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (Buffer$1.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

	  if (typeof cb !== 'function') cb = nop;

	  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function () {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function () {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
	  }
	};

	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
	  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
	  this._writableState.defaultEncoding = encoding;
	  return this;
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
	    chunk = Buffer$1.from(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);

	  if (Buffer$1.isBuffer(chunk)) encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;

	  if (state.writing || state.corked) {
	    var last = state.lastBufferedRequest;
	    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
	    if (last) {
	      last.next = state.lastBufferedRequest;
	    } else {
	      state.bufferedRequest = state.lastBufferedRequest;
	    }
	    state.bufferedRequestCount += 1;
	  } else {
	    doWrite(stream, state, false, len, chunk, encoding, cb);
	  }

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  --state.pendingcb;
	  if (sync) nextTick(cb, er);else cb(er);

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er) onwriteError(stream, state, sync, er, cb);else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(state);

	    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      /*<replacement>*/
	        nextTick(afterWrite, stream, state, finished, cb);
	      /*</replacement>*/
	    } else {
	        afterWrite(stream, state, finished, cb);
	      }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished) onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}

	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;
	  var entry = state.bufferedRequest;

	  if (stream._writev && entry && entry.next) {
	    // Fast case, write everything using _writev()
	    var l = state.bufferedRequestCount;
	    var buffer = new Array(l);
	    var holder = state.corkedRequestsFree;
	    holder.entry = entry;

	    var count = 0;
	    while (entry) {
	      buffer[count] = entry;
	      entry = entry.next;
	      count += 1;
	    }

	    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

	    // doWrite is almost always async, defer these to save a bit of time
	    // as the hot path ends with doWrite
	    state.pendingcb++;
	    state.lastBufferedRequest = null;
	    if (holder.next) {
	      state.corkedRequestsFree = holder.next;
	      holder.next = null;
	    } else {
	      state.corkedRequestsFree = new CorkedRequest(state);
	    }
	  } else {
	    // Slow case, write chunks one-by-one
	    while (entry) {
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);
	      entry = entry.next;
	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        break;
	      }
	    }

	    if (entry === null) state.lastBufferedRequest = null;
	  }

	  state.bufferedRequestCount = 0;
	  state.bufferedRequest = entry;
	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function (chunk, encoding, cb) {
	  cb(new Error('not implemented'));
	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function (chunk, encoding, cb) {
	  var state = this._writableState;

	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished) endWritable(this, state, cb);
	};

	function needFinish(state) {
	  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else {
	      prefinish(stream, state);
	    }
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished) nextTick(cb);else stream.once('finish', cb);
	  }
	  state.ended = true;
	  stream.writable = false;
	}

	// It seems a linked list but it is not
	// there will be only 2 of these for each stream
	function CorkedRequest(state) {
	  var _this = this;

	  this.next = null;
	  this.entry = null;

	  this.finish = function (err) {
	    var entry = _this.entry;
	    _this.entry = null;
	    while (entry) {
	      var cb = entry.callback;
	      state.pendingcb--;
	      cb(err);
	      entry = entry.next;
	    }
	    if (state.corkedRequestsFree) {
	      state.corkedRequestsFree.next = _this;
	    } else {
	      state.corkedRequestsFree = _this;
	    }
	  };
	}

	inherits$1(Duplex, Readable);

	var keys = Object.keys(Writable.prototype);
	for (var v = 0; v < keys.length; v++) {
	  var method = keys[v];
	  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	}
	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false) this.readable = false;

	  if (options && options.writable === false) this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended) return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  nextTick(onEndNT, this);
	}

	function onEndNT(self) {
	  self.end();
	}

	// a transform stream is a readable/writable stream where you do
	inherits$1(Transform, Duplex);

	function TransformState(stream) {
	  this.afterTransform = function (er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	  this.writeencoding = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (data !== null && data !== undefined) stream.push(data);

	  cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}
	function Transform(options) {
	  if (!(this instanceof Transform)) return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;

	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }

	  this.once('prefinish', function () {
	    if (typeof this._flush === 'function') this._flush(function (er) {
	      done(stream, er);
	    });else done(stream);
	  });
	}

	Transform.prototype.push = function (chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function (chunk, encoding, cb) {
	  throw new Error('Not implemented');
	};

	Transform.prototype._write = function (chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function (n) {
	  var ts = this._transformState;

	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};

	function done(stream, er) {
	  if (er) return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

	  if (ts.transforming) throw new Error('Calling transform done when still transforming');

	  return stream.push(null);
	}

	inherits$1(PassThrough, Transform);
	function PassThrough(options) {
	  if (!(this instanceof PassThrough)) return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};

	inherits$1(Stream, EventEmitter);
	Stream.Readable = Readable;
	Stream.Writable = Writable;
	Stream.Duplex = Duplex;
	Stream.Transform = Transform;
	Stream.PassThrough = PassThrough;

	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;

	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.

	function Stream() {
	  EventEmitter.call(this);
	}

	Stream.prototype.pipe = function(dest, options) {
	  var source = this;

	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }

	  source.on('data', ondata);

	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }

	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }

	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest.end();
	  }


	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    if (typeof dest.destroy === 'function') dest.destroy();
	  }

	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EventEmitter.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }

	  source.on('error', onerror);
	  dest.on('error', onerror);

	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);

	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);

	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);

	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);

	    dest.removeListener('close', cleanup);
	  }

	  source.on('end', cleanup);
	  source.on('close', cleanup);

	  dest.on('close', cleanup);

	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};

	var stream = /*#__PURE__*/Object.freeze({
		'default': Stream,
		Readable: Readable,
		Writable: Writable,
		Duplex: Duplex,
		Transform: Transform,
		PassThrough: PassThrough,
		Stream: Stream
	});

	var isarray = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.

	function isArray$2(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString$1(arg) === '[object Array]';
	}
	var isArray_1 = isArray$2;

	function isBoolean$1(arg) {
	  return typeof arg === 'boolean';
	}
	var isBoolean_1 = isBoolean$1;

	function isNull$1(arg) {
	  return arg === null;
	}
	var isNull_1 = isNull$1;

	function isNullOrUndefined$1(arg) {
	  return arg == null;
	}
	var isNullOrUndefined_1 = isNullOrUndefined$1;

	function isNumber$1(arg) {
	  return typeof arg === 'number';
	}
	var isNumber_1 = isNumber$1;

	function isString$1(arg) {
	  return typeof arg === 'string';
	}
	var isString_1 = isString$1;

	function isSymbol$1(arg) {
	  return typeof arg === 'symbol';
	}
	var isSymbol_1 = isSymbol$1;

	function isUndefined$1(arg) {
	  return arg === void 0;
	}
	var isUndefined_1 = isUndefined$1;

	function isRegExp$1(re) {
	  return objectToString$1(re) === '[object RegExp]';
	}
	var isRegExp_1 = isRegExp$1;

	function isObject$1(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	var isObject_1 = isObject$1;

	function isDate$1(d) {
	  return objectToString$1(d) === '[object Date]';
	}
	var isDate_1 = isDate$1;

	function isError$1(e) {
	  return (objectToString$1(e) === '[object Error]' || e instanceof Error);
	}
	var isError_1 = isError$1;

	function isFunction$2(arg) {
	  return typeof arg === 'function';
	}
	var isFunction_1 = isFunction$2;

	function isPrimitive$1(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	var isPrimitive_1 = isPrimitive$1;

	var isBuffer$3 = Buffer.isBuffer;

	function objectToString$1(o) {
	  return Object.prototype.toString.call(o);
	}

	var util$2 = {
		isArray: isArray_1,
		isBoolean: isBoolean_1,
		isNull: isNull_1,
		isNullOrUndefined: isNullOrUndefined_1,
		isNumber: isNumber_1,
		isString: isString_1,
		isSymbol: isSymbol_1,
		isUndefined: isUndefined_1,
		isRegExp: isRegExp_1,
		isObject: isObject_1,
		isDate: isDate_1,
		isError: isError_1,
		isFunction: isFunction_1,
		isPrimitive: isPrimitive_1,
		isBuffer: isBuffer$3
	};

	var inherits_browser = createCommonjsModule(function (module) {
	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      ctor.prototype = Object.create(superCtor.prototype, {
	        constructor: {
	          value: ctor,
	          enumerable: false,
	          writable: true,
	          configurable: true
	        }
	      });
	    }
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      var TempCtor = function () {};
	      TempCtor.prototype = superCtor.prototype;
	      ctor.prototype = new TempCtor();
	      ctor.prototype.constructor = ctor;
	    }
	  };
	}
	});

	var inherits$2 = createCommonjsModule(function (module) {
	try {
	  var util = debugUtil;
	  /* istanbul ignore next */
	  if (typeof util.inherits !== 'function') throw '';
	  module.exports = util.inherits;
	} catch (e) {
	  /* istanbul ignore next */
	  module.exports = inherits_browser;
	}
	});

	var string_decoder = createCommonjsModule(function (module, exports) {
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var Buffer = buffer.Buffer;

	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     };


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};


	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}
	});
	var string_decoder_1 = string_decoder.StringDecoder;

	var events$1 = getCjsExportFromNamespace(events);

	var Stream$1 = getCjsExportFromNamespace(stream);

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var _stream_readable = Readable$1;

	/*<replacement>*/

	/*</replacement>*/


	/*<replacement>*/
	var Buffer$3 = buffer.Buffer;
	/*</replacement>*/

	Readable$1.ReadableState = ReadableState$1;

	var EE = events$1.EventEmitter;

	/*<replacement>*/
	if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/



	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/

	var StringDecoder$1;

	util$2.inherits(Readable$1, Stream$1);

	function ReadableState$1(options, stream) {
	  options = options || {};

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.buffer = [];
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = false;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // In streams that never have any data, and do push(null) right away,
	  // the consumer can miss the 'end' event if they do some I/O before
	  // consuming the stream.  So, we don't emit('end') until some reading
	  // happens.
	  this.calledRead = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, becuase any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;


	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder$1)
	      StringDecoder$1 = string_decoder.StringDecoder;
	    this.decoder = new StringDecoder$1(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	function Readable$1(options) {
	  if (!(this instanceof Readable$1))
	    return new Readable$1(options);

	  this._readableState = new ReadableState$1(options, this);

	  // legacy
	  this.readable = true;

	  Stream$1.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable$1.prototype.push = function(chunk, encoding) {
	  var state = this._readableState;

	  if (typeof chunk === 'string' && !state.objectMode) {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = new Buffer$3(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk$1(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable$1.prototype.unshift = function(chunk) {
	  var state = this._readableState;
	  return readableAddChunk$1(this, state, chunk, '', true);
	};

	function readableAddChunk$1(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid$1(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (chunk === null || chunk === undefined) {
	    state.reading = false;
	    if (!state.ended)
	      onEofChunk$1(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var e = new Error('stream.unshift() after end event');
	      stream.emit('error', e);
	    } else {
	      if (state.decoder && !addToFront && !encoding)
	        chunk = state.decoder.write(chunk);

	      // update the buffer info.
	      state.length += state.objectMode ? 1 : chunk.length;
	      if (addToFront) {
	        state.buffer.unshift(chunk);
	      } else {
	        state.reading = false;
	        state.buffer.push(chunk);
	      }

	      if (state.needReadable)
	        emitReadable$1(stream);

	      maybeReadMore$1(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData$1(state);
	}



	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData$1(state) {
	  return !state.ended &&
	         (state.needReadable ||
	          state.length < state.highWaterMark ||
	          state.length === 0);
	}

	// backwards compatibility.
	Readable$1.prototype.setEncoding = function(enc) {
	  if (!StringDecoder$1)
	    StringDecoder$1 = string_decoder.StringDecoder;
	  this._readableState.decoder = new StringDecoder$1(enc);
	  this._readableState.encoding = enc;
	};

	// Don't raise the hwm > 128MB
	var MAX_HWM$1 = 0x800000;
	function roundUpToNextPowerOf2(n) {
	  if (n >= MAX_HWM$1) {
	    n = MAX_HWM$1;
	  } else {
	    // Get the next highest power of 2
	    n--;
	    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
	    n++;
	  }
	  return n;
	}

	function howMuchToRead$1(n, state) {
	  if (state.length === 0 && state.ended)
	    return 0;

	  if (state.objectMode)
	    return n === 0 ? 0 : 1;

	  if (n === null || isNaN(n)) {
	    // only flow one buffer at a time
	    if (state.flowing && state.buffer.length)
	      return state.buffer[0].length;
	    else
	      return state.length;
	  }

	  if (n <= 0)
	    return 0;

	  // If we're asking for more than the target buffer level,
	  // then raise the water mark.  Bump up to the next highest
	  // power of 2, to prevent increasing it excessively in tiny
	  // amounts.
	  if (n > state.highWaterMark)
	    state.highWaterMark = roundUpToNextPowerOf2(n);

	  // don't have that much.  return null, unless we've ended.
	  if (n > state.length) {
	    if (!state.ended) {
	      state.needReadable = true;
	      return 0;
	    } else
	      return state.length;
	  }

	  return n;
	}

	// you can override either this method, or the async _read(n) below.
	Readable$1.prototype.read = function(n) {
	  var state = this._readableState;
	  state.calledRead = true;
	  var nOrig = n;
	  var ret;

	  if (typeof n !== 'number' || n > 0)
	    state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 &&
	      state.needReadable &&
	      (state.length >= state.highWaterMark || state.ended)) {
	    emitReadable$1(this);
	    return null;
	  }

	  n = howMuchToRead$1(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    ret = null;

	    // In cases where the decoder did not receive enough data
	    // to produce a full chunk, then immediately received an
	    // EOF, state.buffer will contain [<Buffer >, <Buffer 00 ...>].
	    // howMuchToRead will see this and coerce the amount to
	    // read to zero (because it's looking at the length of the
	    // first <Buffer > in state.buffer), and we'll end up here.
	    //
	    // This can only happen via state.decoder -- no other venue
	    // exists for pushing a zero-length chunk into state.buffer
	    // and triggering this behavior. In this case, we return our
	    // remaining data and end the stream, if appropriate.
	    if (state.length > 0 && state.decoder) {
	      ret = fromList$1(n, state);
	      state.length -= ret.length;
	    }

	    if (state.length === 0)
	      endReadable$1(this);

	    return ret;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length - n <= state.highWaterMark)
	    doRead = true;

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading)
	    doRead = false;

	  if (doRead) {
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0)
	      state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	  }

	  // If _read called its callback synchronously, then `reading`
	  // will be false, and we need to re-evaluate how much data we
	  // can return to the user.
	  if (doRead && !state.reading)
	    n = howMuchToRead$1(nOrig, state);

	  if (n > 0)
	    ret = fromList$1(n, state);
	  else
	    ret = null;

	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  }

	  state.length -= n;

	  // If we have nothing in the buffer, then we want to know
	  // as soon as we *do* get something into the buffer.
	  if (state.length === 0 && !state.ended)
	    state.needReadable = true;

	  // If we happened to read() exactly the remaining amount in the
	  // buffer, and the EOF has been seen at this point, then make sure
	  // that we emit 'end' on the very next tick.
	  if (state.ended && !state.endEmitted && state.length === 0)
	    endReadable$1(this);

	  return ret;
	};

	function chunkInvalid$1(state, chunk) {
	  var er = null;
	  if (!Buffer$3.isBuffer(chunk) &&
	      'string' !== typeof chunk &&
	      chunk !== null &&
	      chunk !== undefined &&
	      !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}


	function onEofChunk$1(stream, state) {
	  if (state.decoder && !state.ended) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // if we've ended and we have some data left, then emit
	  // 'readable' now to make sure it gets picked up.
	  if (state.length > 0)
	    emitReadable$1(stream);
	  else
	    endReadable$1(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable$1(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (state.emittedReadable)
	    return;

	  state.emittedReadable = true;
	  if (state.sync)
	    process.nextTick(function() {
	      emitReadable_$1(stream);
	    });
	  else
	    emitReadable_$1(stream);
	}

	function emitReadable_$1(stream) {
	  stream.emit('readable');
	}


	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore$1(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    process.nextTick(function() {
	      maybeReadMore_$1(stream, state);
	    });
	  }
	}

	function maybeReadMore_$1(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended &&
	         state.length < state.highWaterMark) {
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;
	    else
	      len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable$1.prototype._read = function(n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable$1.prototype.pipe = function(dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
	              dest !== process.stdout &&
	              dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted)
	    process.nextTick(endFn);
	  else
	    src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    if (readable !== src) return;
	    cleanup();
	  }

	  function onend() {
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain$1(src);
	  dest.on('drain', ondrain);

	  function cleanup() {
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (!dest._writableState || dest._writableState.needDrain)
	      ondrain();
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EE.listenerCount(dest, 'error') === 0)
	      dest.emit('error', er);
	  }
	  // This is a brutally ugly hack to make sure that our error handler
	  // is attached before any userland ones.  NEVER DO THIS.
	  if (!dest._events || !dest._events.error)
	    dest.on('error', onerror);
	  else if (isarray(dest._events.error))
	    dest._events.error.unshift(onerror);
	  else
	    dest._events.error = [onerror, dest._events.error];



	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    // the handler that waits for readable events after all
	    // the data gets sucked out in flow.
	    // This would be easier to follow with a .once() handler
	    // in flow(), but that is too slow.
	    this.on('readable', pipeOnReadable);

	    state.flowing = true;
	    process.nextTick(function() {
	      flow$1(src);
	    });
	  }

	  return dest;
	};

	function pipeOnDrain$1(src) {
	  return function() {
	    var state = src._readableState;
	    state.awaitDrain--;
	    if (state.awaitDrain === 0)
	      flow$1(src);
	  };
	}

	function flow$1(src) {
	  var state = src._readableState;
	  var chunk;
	  state.awaitDrain = 0;

	  function write(dest, i, list) {
	    var written = dest.write(chunk);
	    if (false === written) {
	      state.awaitDrain++;
	    }
	  }

	  while (state.pipesCount && null !== (chunk = src.read())) {

	    if (state.pipesCount === 1)
	      write(state.pipes);
	    else
	      forEach$1(state.pipes, write);

	    src.emit('data', chunk);

	    // if anyone needs a drain, then we have to wait for that.
	    if (state.awaitDrain > 0)
	      return;
	  }

	  // if every destination was unpiped, either before entering this
	  // function, or in the while loop, then stop flowing.
	  //
	  // NB: This is a pretty rare edge case.
	  if (state.pipesCount === 0) {
	    state.flowing = false;

	    // if there were data event listeners added, then switch to old mode.
	    if (EE.listenerCount(src, 'data') > 0)
	      emitDataEvents(src);
	    return;
	  }

	  // at this point, no one needed a drain, so we just ran out of data
	  // on the next readable event, start it over again.
	  state.ranOut = true;
	}

	function pipeOnReadable() {
	  if (this._readableState.ranOut) {
	    this._readableState.ranOut = false;
	    flow$1(this);
	  }
	}


	Readable$1.prototype.unpipe = function(dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0)
	    return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes)
	      return this;

	    if (!dest)
	      dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    this.removeListener('readable', pipeOnReadable);
	    state.flowing = false;
	    if (dest)
	      dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    this.removeListener('readable', pipeOnReadable);
	    state.flowing = false;

	    for (var i = 0; i < len; i++)
	      dests[i].emit('unpipe', this);
	    return this;
	  }

	  // try to find the right one.
	  var i = indexOf$1(state.pipes, dest);
	  if (i === -1)
	    return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1)
	    state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable$1.prototype.on = function(ev, fn) {
	  var res = Stream$1.prototype.on.call(this, ev, fn);

	  if (ev === 'data' && !this._readableState.flowing)
	    emitDataEvents(this);

	  if (ev === 'readable' && this.readable) {
	    var state = this._readableState;
	    if (!state.readableListening) {
	      state.readableListening = true;
	      state.emittedReadable = false;
	      state.needReadable = true;
	      if (!state.reading) {
	        this.read(0);
	      } else if (state.length) {
	        emitReadable$1(this);
	      }
	    }
	  }

	  return res;
	};
	Readable$1.prototype.addListener = Readable$1.prototype.on;

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable$1.prototype.resume = function() {
	  emitDataEvents(this);
	  this.read(0);
	  this.emit('resume');
	};

	Readable$1.prototype.pause = function() {
	  emitDataEvents(this, true);
	  this.emit('pause');
	};

	function emitDataEvents(stream, startPaused) {
	  var state = stream._readableState;

	  if (state.flowing) {
	    // https://github.com/isaacs/readable-stream/issues/16
	    throw new Error('Cannot switch to old mode now.');
	  }

	  var paused = startPaused || false;
	  var readable = false;

	  // convert to an old-style stream.
	  stream.readable = true;
	  stream.pipe = Stream$1.prototype.pipe;
	  stream.on = stream.addListener = Stream$1.prototype.on;

	  stream.on('readable', function() {
	    readable = true;

	    var c;
	    while (!paused && (null !== (c = stream.read())))
	      stream.emit('data', c);

	    if (c === null) {
	      readable = false;
	      stream._readableState.needReadable = true;
	    }
	  });

	  stream.pause = function() {
	    paused = true;
	    this.emit('pause');
	  };

	  stream.resume = function() {
	    paused = false;
	    if (readable)
	      process.nextTick(function() {
	        stream.emit('readable');
	      });
	    else
	      this.read(0);
	    this.emit('resume');
	  };

	  // now make it start, just in case it hadn't already.
	  stream.emit('readable');
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable$1.prototype.wrap = function(stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function() {
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length)
	        self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function(chunk) {
	    if (state.decoder)
	      chunk = state.decoder.write(chunk);

	    // don't skip over falsy values in objectMode
	    //if (state.objectMode && util.isNullOrUndefined(chunk))
	    if (state.objectMode && (chunk === null || chunk === undefined))
	      return;
	    else if (!state.objectMode && (!chunk || !chunk.length))
	      return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (typeof stream[i] === 'function' &&
	        typeof this[i] === 'undefined') {
	      this[i] = function(method) { return function() {
	        return stream[method].apply(stream, arguments);
	      }}(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach$1(events, function(ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function(n) {
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};



	// exposed for testing purposes only.
	Readable$1._fromList = fromList$1;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	function fromList$1(n, state) {
	  var list = state.buffer;
	  var length = state.length;
	  var stringMode = !!state.decoder;
	  var objectMode = !!state.objectMode;
	  var ret;

	  // nothing in the list, definitely empty.
	  if (list.length === 0)
	    return null;

	  if (length === 0)
	    ret = null;
	  else if (objectMode)
	    ret = list.shift();
	  else if (!n || n >= length) {
	    // read it all, truncate the array.
	    if (stringMode)
	      ret = list.join('');
	    else
	      ret = Buffer$3.concat(list, length);
	    list.length = 0;
	  } else {
	    // read just some of it.
	    if (n < list[0].length) {
	      // just take a part of the first list item.
	      // slice is the same for buffers and strings.
	      var buf = list[0];
	      ret = buf.slice(0, n);
	      list[0] = buf.slice(n);
	    } else if (n === list[0].length) {
	      // first list is a perfect match
	      ret = list.shift();
	    } else {
	      // complex case.
	      // we have enough to cover it, but it spans past the first buffer.
	      if (stringMode)
	        ret = '';
	      else
	        ret = new Buffer$3(n);

	      var c = 0;
	      for (var i = 0, l = list.length; i < l && c < n; i++) {
	        var buf = list[0];
	        var cpy = Math.min(n - c, buf.length);

	        if (stringMode)
	          ret += buf.slice(0, cpy);
	        else
	          buf.copy(ret, c, 0, cpy);

	        if (cpy < buf.length)
	          list[0] = buf.slice(cpy);
	        else
	          list.shift();

	        c += cpy;
	      }
	    }
	  }

	  return ret;
	}

	function endReadable$1(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0)
	    throw new Error('endReadable called on non-empty stream');

	  if (!state.endEmitted && state.calledRead) {
	    state.ended = true;
	    process.nextTick(function() {
	      // Check that we didn't get one last unshift.
	      if (!state.endEmitted && state.length === 0) {
	        state.endEmitted = true;
	        stream.readable = false;
	        stream.emit('end');
	      }
	    });
	  }
	}

	function forEach$1 (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf$1 (xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	var _stream_duplex = Duplex$1;

	/*<replacement>*/
	var objectKeys$1 = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	};
	/*</replacement>*/


	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/




	util$2.inherits(Duplex$1, _stream_readable);

	forEach$2(objectKeys$1(_stream_writable.prototype), function(method) {
	  if (!Duplex$1.prototype[method])
	    Duplex$1.prototype[method] = _stream_writable.prototype[method];
	});

	function Duplex$1(options) {
	  if (!(this instanceof Duplex$1))
	    return new Duplex$1(options);

	  _stream_readable.call(this, options);
	  _stream_writable.call(this, options);

	  if (options && options.readable === false)
	    this.readable = false;

	  if (options && options.writable === false)
	    this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false)
	    this.allowHalfOpen = false;

	  this.once('end', onend$1);
	}

	// the no-half-open enforcer
	function onend$1() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended)
	    return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  process.nextTick(this.end.bind(this));
	}

	function forEach$2 (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, cb), and it'll handle all
	// the drain event emission and buffering.

	var _stream_writable = Writable$1;

	/*<replacement>*/
	var Buffer$4 = buffer.Buffer;
	/*</replacement>*/

	Writable$1.WritableState = WritableState$1;


	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/



	util$2.inherits(Writable$1, Stream$1);

	function WriteReq$1(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	}

	function WritableState$1(options, stream) {
	  options = options || {};

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, becuase any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function(er) {
	    onwrite$1(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.buffer = [];

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;
	}

	function Writable$1(options) {
	  var Duplex = _stream_duplex;

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable$1) && !(this instanceof Duplex))
	    return new Writable$1(options);

	  this._writableState = new WritableState$1(options, this);

	  // legacy.
	  this.writable = true;

	  Stream$1.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable$1.prototype.pipe = function() {
	  this.emit('error', new Error('Cannot pipe. Not readable.'));
	};


	function writeAfterEnd$1(stream, state, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  process.nextTick(function() {
	    cb(er);
	  });
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk$1(stream, state, chunk, cb) {
	  var valid = true;
	  if (!Buffer$4.isBuffer(chunk) &&
	      'string' !== typeof chunk &&
	      chunk !== null &&
	      chunk !== undefined &&
	      !state.objectMode) {
	    var er = new TypeError('Invalid non-string/buffer chunk');
	    stream.emit('error', er);
	    process.nextTick(function() {
	      cb(er);
	    });
	    valid = false;
	  }
	  return valid;
	}

	Writable$1.prototype.write = function(chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (Buffer$4.isBuffer(chunk))
	    encoding = 'buffer';
	  else if (!encoding)
	    encoding = state.defaultEncoding;

	  if (typeof cb !== 'function')
	    cb = function() {};

	  if (state.ended)
	    writeAfterEnd$1(this, state, cb);
	  else if (validChunk$1(this, state, chunk, cb))
	    ret = writeOrBuffer$1(this, state, chunk, encoding, cb);

	  return ret;
	};

	function decodeChunk$1(state, chunk, encoding) {
	  if (!state.objectMode &&
	      state.decodeStrings !== false &&
	      typeof chunk === 'string') {
	    chunk = new Buffer$4(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer$1(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk$1(state, chunk, encoding);
	  if (Buffer$4.isBuffer(chunk))
	    encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret)
	    state.needDrain = true;

	  if (state.writing)
	    state.buffer.push(new WriteReq$1(chunk, encoding, cb));
	  else
	    doWrite$1(stream, state, len, chunk, encoding, cb);

	  return ret;
	}

	function doWrite$1(stream, state, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError$1(stream, state, sync, er, cb) {
	  if (sync)
	    process.nextTick(function() {
	      cb(er);
	    });
	  else
	    cb(er);

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate$1(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite$1(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate$1(state);

	  if (er)
	    onwriteError$1(stream, state, sync, er, cb);
	  else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish$1(stream, state);

	    if (!finished && !state.bufferProcessing && state.buffer.length)
	      clearBuffer$1(stream, state);

	    if (sync) {
	      process.nextTick(function() {
	        afterWrite$1(stream, state, finished, cb);
	      });
	    } else {
	      afterWrite$1(stream, state, finished, cb);
	    }
	  }
	}

	function afterWrite$1(stream, state, finished, cb) {
	  if (!finished)
	    onwriteDrain$1(stream, state);
	  cb();
	  if (finished)
	    finishMaybe$1(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain$1(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}


	// if there's something in the buffer waiting, then process it
	function clearBuffer$1(stream, state) {
	  state.bufferProcessing = true;

	  for (var c = 0; c < state.buffer.length; c++) {
	    var entry = state.buffer[c];
	    var chunk = entry.chunk;
	    var encoding = entry.encoding;
	    var cb = entry.callback;
	    var len = state.objectMode ? 1 : chunk.length;

	    doWrite$1(stream, state, len, chunk, encoding, cb);

	    // if we didn't call the onwrite immediately, then
	    // it means that we need to wait until it does.
	    // also, that means that the chunk and cb are currently
	    // being processed, so move the buffer counter past them.
	    if (state.writing) {
	      c++;
	      break;
	    }
	  }

	  state.bufferProcessing = false;
	  if (c < state.buffer.length)
	    state.buffer = state.buffer.slice(c);
	  else
	    state.buffer.length = 0;
	}

	Writable$1.prototype._write = function(chunk, encoding, cb) {
	  cb(new Error('not implemented'));
	};

	Writable$1.prototype.end = function(chunk, encoding, cb) {
	  var state = this._writableState;

	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (typeof chunk !== 'undefined' && chunk !== null)
	    this.write(chunk, encoding);

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished)
	    endWritable$1(this, state, cb);
	};


	function needFinish$1(stream, state) {
	  return (state.ending &&
	          state.length === 0 &&
	          !state.finished &&
	          !state.writing);
	}

	function finishMaybe$1(stream, state) {
	  var need = needFinish$1(stream, state);
	  if (need) {
	    state.finished = true;
	    stream.emit('finish');
	  }
	  return need;
	}

	function endWritable$1(stream, state, cb) {
	  state.ending = true;
	  finishMaybe$1(stream, state);
	  if (cb) {
	    if (state.finished)
	      process.nextTick(cb);
	    else
	      stream.once('finish', cb);
	  }
	  state.ended = true;
	}

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.


	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	var _stream_transform = Transform$1;



	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/

	util$2.inherits(Transform$1, _stream_duplex);


	function TransformState$1(options, stream) {
	  this.afterTransform = function(er, data) {
	    return afterTransform$1(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	}

	function afterTransform$1(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb)
	    return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (data !== null && data !== undefined)
	    stream.push(data);

	  if (cb)
	    cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}


	function Transform$1(options) {
	  if (!(this instanceof Transform$1))
	    return new Transform$1(options);

	  _stream_duplex.call(this, options);

	  var ts = this._transformState = new TransformState$1(options, this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  this.once('finish', function() {
	    if ('function' === typeof this._flush)
	      this._flush(function(er) {
	        done$1(stream, er);
	      });
	    else
	      done$1(stream);
	  });
	}

	Transform$1.prototype.push = function(chunk, encoding) {
	  this._transformState.needTransform = false;
	  return _stream_duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform$1.prototype._transform = function(chunk, encoding, cb) {
	  throw new Error('not implemented');
	};

	Transform$1.prototype._write = function(chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform ||
	        rs.needReadable ||
	        rs.length < rs.highWaterMark)
	      this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform$1.prototype._read = function(n) {
	  var ts = this._transformState;

	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};


	function done$1(stream, er) {
	  if (er)
	    return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var rs = stream._readableState;
	  var ts = stream._transformState;

	  if (ws.length)
	    throw new Error('calling transform done when ws.length != 0');

	  if (ts.transforming)
	    throw new Error('calling transform done when still transforming');

	  return stream.push(null);
	}

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	var _stream_passthrough = PassThrough$1;



	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/

	util$2.inherits(PassThrough$1, _stream_transform);

	function PassThrough$1(options) {
	  if (!(this instanceof PassThrough$1))
	    return new PassThrough$1(options);

	  _stream_transform.call(this, options);
	}

	PassThrough$1.prototype._transform = function(chunk, encoding, cb) {
	  cb(null, chunk);
	};

	var readable = createCommonjsModule(function (module, exports) {
	// hack to fix a circular dependency issue when used with browserify
	exports = module.exports = _stream_readable;
	exports.Stream = Stream$1;
	exports.Readable = exports;
	exports.Writable = _stream_writable;
	exports.Duplex = _stream_duplex;
	exports.Transform = _stream_transform;
	exports.PassThrough = _stream_passthrough;
	if (!process.browser && process.env.READABLE_STREAM === 'disable') {
	  module.exports = Stream$1;
	}
	});
	var readable_1 = readable.Stream;
	var readable_2 = readable.Readable;
	var readable_3 = readable.Writable;
	var readable_4 = readable.Duplex;
	var readable_5 = readable.Transform;
	var readable_6 = readable.PassThrough;

	var _from = "levelup@^0.18.2";
	var _id = "levelup@0.18.6";
	var _inBundle = false;
	var _integrity = "sha1-5qAcsIlhbI7MApHCqb0/DETj5es=";
	var _location = "/levelup";
	var _phantomChildren = {
		"core-util-is": "1.0.2",
		inherits: "2.0.4"
	};
	var _requested = {
		type: "range",
		registry: true,
		raw: "levelup@^0.18.2",
		name: "levelup",
		escapedName: "levelup",
		rawSpec: "^0.18.2",
		saveSpec: null,
		fetchSpec: "^0.18.2"
	};
	var _requiredBy = [
		"/browserify-fs"
	];
	var _resolved = "https://registry.npmjs.org/levelup/-/levelup-0.18.6.tgz";
	var _shasum = "e6a01cb089616c8ecc0291c2a9bd3f0c44e3e5eb";
	var _spec = "levelup@^0.18.2";
	var _where = "C:\\Users\\tvalcke\\Programmation\\IteeUtils\\node_modules\\browserify-fs";
	var browser = {
		leveldown: false,
		"leveldown/package": false,
		semver: false
	};
	var bugs = {
		url: "https://github.com/rvagg/node-levelup/issues"
	};
	var bundleDependencies = false;
	var contributors = [
		{
			name: "Rod Vagg",
			email: "r@va.gg",
			url: "https://github.com/rvagg"
		},
		{
			name: "John Chesley",
			email: "john@chesl.es",
			url: "https://github.com/chesles/"
		},
		{
			name: "Jake Verbaten",
			email: "raynos2@gmail.com",
			url: "https://github.com/raynos"
		},
		{
			name: "Dominic Tarr",
			email: "dominic.tarr@gmail.com",
			url: "https://github.com/dominictarr"
		},
		{
			name: "Max Ogden",
			email: "max@maxogden.com",
			url: "https://github.com/maxogden"
		},
		{
			name: "Lars-Magnus Skog",
			email: "lars.magnus.skog@gmail.com",
			url: "https://github.com/ralphtheninja"
		},
		{
			name: "David Björklund",
			email: "david.bjorklund@gmail.com",
			url: "https://github.com/kesla"
		},
		{
			name: "Julian Gruber",
			email: "julian@juliangruber.com",
			url: "https://github.com/juliangruber"
		},
		{
			name: "Paolo Fragomeni",
			email: "paolo@async.ly",
			url: "https://github.com/hij1nx"
		},
		{
			name: "Anton Whalley",
			email: "anton.whalley@nearform.com",
			url: "https://github.com/No9"
		},
		{
			name: "Matteo Collina",
			email: "matteo.collina@gmail.com",
			url: "https://github.com/mcollina"
		},
		{
			name: "Pedro Teixeira",
			email: "pedro.teixeira@gmail.com",
			url: "https://github.com/pgte"
		},
		{
			name: "James Halliday",
			email: "mail@substack.net",
			url: "https://github.com/substack"
		}
	];
	var dependencies = {
		bl: "~0.8.1",
		"deferred-leveldown": "~0.2.0",
		errno: "~0.1.1",
		prr: "~0.0.0",
		"readable-stream": "~1.0.26",
		semver: "~2.3.1",
		xtend: "~3.0.0"
	};
	var deprecated = false;
	var description = "Fast & simple storage - a Node.js-style LevelDB wrapper";
	var devDependencies = {
		async: "*",
		boganipsum: "*",
		bustermove: "*",
		delayed: "*",
		du: "*",
		fstream: "*",
		leveldown: "~0.10.0",
		memdown: "*",
		mkfiletree: "*",
		"msgpack-js": "*",
		readfiletree: "*",
		referee: "*",
		rimraf: "*",
		"slow-stream": ">=0.0.4",
		tap: "*",
		tar: "*"
	};
	var homepage = "https://github.com/rvagg/node-levelup";
	var keywords = [
		"leveldb",
		"stream",
		"database",
		"db",
		"store",
		"storage",
		"json"
	];
	var license = "MIT";
	var main = "lib/levelup.js";
	var name = "levelup";
	var repository = {
		type: "git",
		url: "git+https://github.com/rvagg/node-levelup.git"
	};
	var scripts = {
		alltests: "npm test && npm run-script functionaltests",
		functionaltests: "node ./test/functional/fstream-test.js && node ./test/functional/binary-data-test.js && node ./test/functional/compat-test.js",
		test: "tap test/*-test.js --stderr"
	};
	var version = "0.18.6";
	var _package = {
		_from: _from,
		_id: _id,
		_inBundle: _inBundle,
		_integrity: _integrity,
		_location: _location,
		_phantomChildren: _phantomChildren,
		_requested: _requested,
		_requiredBy: _requiredBy,
		_resolved: _resolved,
		_shasum: _shasum,
		_spec: _spec,
		_where: _where,
		browser: browser,
		bugs: bugs,
		bundleDependencies: bundleDependencies,
		contributors: contributors,
		dependencies: dependencies,
		deprecated: deprecated,
		description: description,
		devDependencies: devDependencies,
		homepage: homepage,
		keywords: keywords,
		license: license,
		main: main,
		name: name,
		repository: repository,
		scripts: scripts,
		version: version
	};

	var _package$1 = /*#__PURE__*/Object.freeze({
		_from: _from,
		_id: _id,
		_inBundle: _inBundle,
		_integrity: _integrity,
		_location: _location,
		_phantomChildren: _phantomChildren,
		_requested: _requested,
		_requiredBy: _requiredBy,
		_resolved: _resolved,
		_shasum: _shasum,
		_spec: _spec,
		_where: _where,
		browser: browser,
		bugs: bugs,
		bundleDependencies: bundleDependencies,
		contributors: contributors,
		dependencies: dependencies,
		deprecated: deprecated,
		description: description,
		devDependencies: devDependencies,
		homepage: homepage,
		keywords: keywords,
		license: license,
		main: main,
		name: name,
		repository: repository,
		scripts: scripts,
		version: version,
		'default': _package
	});

	var _from$1 = "leveldown@^5.1.1";
	var _id$1 = "leveldown@5.1.1";
	var _inBundle$1 = false;
	var _integrity$1 = "sha512-4n2R/vEA/sssh5TKtFwM9gshW2tirNoURLqekLRUUzuF+eUBLFAufO8UW7bz8lBbG2jw8tQDF3LC+LcUCc12kg==";
	var _location$1 = "/leveldown";
	var _phantomChildren$1 = {
	};
	var _requested$1 = {
		type: "range",
		registry: true,
		raw: "leveldown@^5.1.1",
		name: "leveldown",
		escapedName: "leveldown",
		rawSpec: "^5.1.1",
		saveSpec: null,
		fetchSpec: "^5.1.1"
	};
	var _requiredBy$1 = [
		"#DEV:/",
		"/itee-validators"
	];
	var _resolved$1 = "https://registry.npmjs.org/leveldown/-/leveldown-5.1.1.tgz";
	var _shasum$1 = "5d3a043f0ec76e91e189117ec3627bef0436c0dc";
	var _spec$1 = "leveldown@^5.1.1";
	var _where$1 = "C:\\Users\\tvalcke\\Programmation\\IteeUtils\\node_modules\\itee-validators";
	var bugs$1 = {
		url: "https://github.com/Level/leveldown/issues"
	};
	var bundleDependencies$1 = false;
	var dependencies$1 = {
		"abstract-leveldown": "~6.0.3",
		"napi-macros": "~1.8.1",
		"node-gyp-build": "~4.1.0"
	};
	var deprecated$1 = false;
	var description$1 = "A low-level Node.js LevelDB binding";
	var devDependencies$1 = {
		"async-each": "^1.0.3",
		coveralls: "^3.0.2",
		"cross-env": "^5.2.0",
		delayed: "^2.0.0",
		"dependency-check": "^3.3.0",
		du: "^1.0.0",
		electron: "^5.0.0",
		glob: "^7.1.3",
		hallmark: "^0.1.0",
		"level-community": "^3.0.0",
		"level-concat-iterator": "^2.0.0",
		mkfiletree: "^2.0.0",
		"node-gyp": "^5.0.0",
		nyc: "^14.0.0",
		prebuildify: "^3.0.0",
		"prebuildify-ci": "^1.0.4",
		readfiletree: "^1.0.0",
		rimraf: "^2.6.1",
		standard: "^12.0.0",
		tape: "^4.10.0",
		tempy: "^0.3.0"
	};
	var engines = {
		node: ">=8.6.0"
	};
	var gypfile = true;
	var hallmark = {
		community: "level-community"
	};
	var homepage$1 = "https://github.com/Level/leveldown";
	var keywords$1 = [
		"leveldb",
		"level"
	];
	var license$1 = "MIT";
	var main$1 = "leveldown.js";
	var name$1 = "leveldown";
	var repository$1 = {
		type: "git",
		url: "git+https://github.com/Level/leveldown.git"
	};
	var scripts$1 = {
		coverage: "nyc report --reporter=text-lcov | coveralls",
		"dependency-check": "dependency-check . test/*.js bench/*.js",
		"download-prebuilds": "prebuildify-ci download",
		hallmark: "hallmark --fix",
		install: "node-gyp-build",
		prebuild: "prebuildify -t 8.14.0 --napi --strip",
		"prebuild-alpine": "IMAGE=alpine ./scripts/cross-compile --tag-libc",
		"prebuild-android-arm64": "IMAGE=android-arm64 ./scripts/cross-compile --tag-armv",
		"prebuild-android-armv7": "IMAGE=android-armv7 ./scripts/cross-compile --tag-armv",
		"prebuild-arm": "npm run prebuild-linux-armv7 && npm run prebuild-linux-arm64 && npm run prebuild-android-armv7 && npm run prebuild-android-arm64",
		"prebuild-linux-arm64": "IMAGE=linux-arm64 ./scripts/cross-compile --tag-armv",
		"prebuild-linux-armv7": "IMAGE=linux-armv7 ./scripts/cross-compile --tag-armv",
		prepublishOnly: "npm run dependency-check",
		rebuild: "node-gyp rebuild",
		test: "standard && nyc tape test/*-test.js",
		"test-electron": "electron test/electron.js",
		"test-gc": "npx -n=--expose-gc tape test/{cleanup,iterator-gc,chained-batch-gc}*-test.js",
		"test-prebuild": "cross-env PREBUILDS_ONLY=1 npm t"
	};
	var version$1 = "5.1.1";
	var _package$2 = {
		_from: _from$1,
		_id: _id$1,
		_inBundle: _inBundle$1,
		_integrity: _integrity$1,
		_location: _location$1,
		_phantomChildren: _phantomChildren$1,
		_requested: _requested$1,
		_requiredBy: _requiredBy$1,
		_resolved: _resolved$1,
		_shasum: _shasum$1,
		_spec: _spec$1,
		_where: _where$1,
		bugs: bugs$1,
		bundleDependencies: bundleDependencies$1,
		dependencies: dependencies$1,
		deprecated: deprecated$1,
		description: description$1,
		devDependencies: devDependencies$1,
		engines: engines,
		gypfile: gypfile,
		hallmark: hallmark,
		homepage: homepage$1,
		keywords: keywords$1,
		license: license$1,
		main: main$1,
		name: name$1,
		repository: repository$1,
		scripts: scripts$1,
		version: version$1
	};

	var _package$3 = /*#__PURE__*/Object.freeze({
		_from: _from$1,
		_id: _id$1,
		_inBundle: _inBundle$1,
		_integrity: _integrity$1,
		_location: _location$1,
		_phantomChildren: _phantomChildren$1,
		_requested: _requested$1,
		_requiredBy: _requiredBy$1,
		_resolved: _resolved$1,
		_shasum: _shasum$1,
		_spec: _spec$1,
		_where: _where$1,
		bugs: bugs$1,
		bundleDependencies: bundleDependencies$1,
		dependencies: dependencies$1,
		deprecated: deprecated$1,
		description: description$1,
		devDependencies: devDependencies$1,
		engines: engines,
		gypfile: gypfile,
		hallmark: hallmark,
		homepage: homepage$1,
		keywords: keywords$1,
		license: license$1,
		main: main$1,
		name: name$1,
		repository: repository$1,
		scripts: scripts$1,
		version: version$1,
		'default': _package$2
	});

	var semver = createCommonjsModule(function (module, exports) {
	// export the class if we are in a Node-like system.
	if ( module.exports === exports)
	  exports = module.exports = SemVer;

	// The debug function is excluded entirely from the minified version.
	/* nomin */ var debug;
	/* nomin */ if (typeof process === 'object' &&
	    /* nomin */ process.env &&
	    /* nomin */ process.env.NODE_DEBUG &&
	    /* nomin */ /\bsemver\b/i.test(process.env.NODE_DEBUG))
	  /* nomin */ debug = function() {
	    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
	    /* nomin */ args.unshift('SEMVER');
	    /* nomin */ console.log.apply(console, args);
	    /* nomin */ };
	/* nomin */ else
	  /* nomin */ debug = function() {};

	// Note: this is the semver.org version of the spec that it implements
	// Not necessarily the package version of this code.
	exports.SEMVER_SPEC_VERSION = '2.0.0';

	// The actual regexps go on exports.re
	var re = exports.re = [];
	var src = exports.src = [];
	var R = 0;

	// The following Regular Expressions can be used for tokenizing,
	// validating, and parsing SemVer version strings.

	// ## Numeric Identifier
	// A single `0`, or a non-zero digit followed by zero or more digits.

	var NUMERICIDENTIFIER = R++;
	src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
	var NUMERICIDENTIFIERLOOSE = R++;
	src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


	// ## Non-numeric Identifier
	// Zero or more digits, followed by a letter or hyphen, and then zero or
	// more letters, digits, or hyphens.

	var NONNUMERICIDENTIFIER = R++;
	src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


	// ## Main Version
	// Three dot-separated numeric identifiers.

	var MAINVERSION = R++;
	src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
	                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
	                   '(' + src[NUMERICIDENTIFIER] + ')';

	var MAINVERSIONLOOSE = R++;
	src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
	                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
	                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

	// ## Pre-release Version Identifier
	// A numeric identifier, or a non-numeric identifier.

	var PRERELEASEIDENTIFIER = R++;
	src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
	                            '|' + src[NONNUMERICIDENTIFIER] + ')';

	var PRERELEASEIDENTIFIERLOOSE = R++;
	src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
	                                 '|' + src[NONNUMERICIDENTIFIER] + ')';


	// ## Pre-release Version
	// Hyphen, followed by one or more dot-separated pre-release version
	// identifiers.

	var PRERELEASE = R++;
	src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
	                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

	var PRERELEASELOOSE = R++;
	src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
	                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

	// ## Build Metadata Identifier
	// Any combination of digits, letters, or hyphens.

	var BUILDIDENTIFIER = R++;
	src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

	// ## Build Metadata
	// Plus sign, followed by one or more period-separated build metadata
	// identifiers.

	var BUILD = R++;
	src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
	             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';


	// ## Full Version String
	// A main version, followed optionally by a pre-release version and
	// build metadata.

	// Note that the only major, minor, patch, and pre-release sections of
	// the version string are capturing groups.  The build metadata is not a
	// capturing group, because it should not ever be used in version
	// comparison.

	var FULL = R++;
	var FULLPLAIN = 'v?' + src[MAINVERSION] +
	                src[PRERELEASE] + '?' +
	                src[BUILD] + '?';

	src[FULL] = '^' + FULLPLAIN + '$';

	// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
	// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
	// common in the npm registry.
	var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
	                 src[PRERELEASELOOSE] + '?' +
	                 src[BUILD] + '?';

	var LOOSE = R++;
	src[LOOSE] = '^' + LOOSEPLAIN + '$';

	var GTLT = R++;
	src[GTLT] = '((?:<|>)?=?)';

	// Something like "2.*" or "1.2.x".
	// Note that "x.x" is a valid xRange identifer, meaning "any version"
	// Only the first item is strictly required.
	var XRANGEIDENTIFIERLOOSE = R++;
	src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
	var XRANGEIDENTIFIER = R++;
	src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

	var XRANGEPLAIN = R++;
	src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:(' + src[PRERELEASE] + ')' +
	                   ')?)?)?';

	var XRANGEPLAINLOOSE = R++;
	src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:(' + src[PRERELEASELOOSE] + ')' +
	                        ')?)?)?';

	// >=2.x, for example, means >=2.0.0-0
	// <1.x would be the same as "<1.0.0-0", though.
	var XRANGE = R++;
	src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
	var XRANGELOOSE = R++;
	src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

	// Tilde ranges.
	// Meaning is "reasonably at or greater than"
	var LONETILDE = R++;
	src[LONETILDE] = '(?:~>?)';

	var TILDETRIM = R++;
	src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
	re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
	var tildeTrimReplace = '$1~';

	var TILDE = R++;
	src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
	var TILDELOOSE = R++;
	src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

	// Caret ranges.
	// Meaning is "at least and backwards compatible with"
	var LONECARET = R++;
	src[LONECARET] = '(?:\\^)';

	var CARETTRIM = R++;
	src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
	re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
	var caretTrimReplace = '$1^';

	var CARET = R++;
	src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
	var CARETLOOSE = R++;
	src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

	// A simple gt/lt/eq thing, or just "" to indicate "any version"
	var COMPARATORLOOSE = R++;
	src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
	var COMPARATOR = R++;
	src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';


	// An expression to strip any whitespace between the gtlt and the thing
	// it modifies, so that `> 1.2.3` ==> `>1.2.3`
	var COMPARATORTRIM = R++;
	src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
	                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

	// this one has to use the /g flag
	re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
	var comparatorTrimReplace = '$1$2$3';


	// Something like `1.2.3 - 1.2.4`
	// Note that these all use the loose form, because they'll be
	// checked against either the strict or loose comparator form
	// later.
	var HYPHENRANGE = R++;
	src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
	                   '\\s+-\\s+' +
	                   '(' + src[XRANGEPLAIN] + ')' +
	                   '\\s*$';

	var HYPHENRANGELOOSE = R++;
	src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
	                        '\\s+-\\s+' +
	                        '(' + src[XRANGEPLAINLOOSE] + ')' +
	                        '\\s*$';

	// Star ranges basically just allow anything at all.
	var STAR = R++;
	src[STAR] = '(<|>)?=?\\s*\\*';

	// Compile to actual regexp objects.
	// All are flag-free, unless they were created above with a flag.
	for (var i = 0; i < R; i++) {
	  debug(i, src[i]);
	  if (!re[i])
	    re[i] = new RegExp(src[i]);
	}

	exports.parse = parse;
	function parse(version, loose) {
	  var r = loose ? re[LOOSE] : re[FULL];
	  return (r.test(version)) ? new SemVer(version, loose) : null;
	}

	exports.valid = valid;
	function valid(version, loose) {
	  var v = parse(version, loose);
	  return v ? v.version : null;
	}


	exports.clean = clean;
	function clean(version, loose) {
	  var s = parse(version, loose);
	  return s ? s.version : null;
	}

	exports.SemVer = SemVer;

	function SemVer(version, loose) {
	  if (version instanceof SemVer) {
	    if (version.loose === loose)
	      return version;
	    else
	      version = version.version;
	  } else if (typeof version !== 'string') {
	    throw new TypeError('Invalid Version: ' + version);
	  }

	  if (!(this instanceof SemVer))
	    return new SemVer(version, loose);

	  debug('SemVer', version, loose);
	  this.loose = loose;
	  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

	  if (!m)
	    throw new TypeError('Invalid Version: ' + version);

	  this.raw = version;

	  // these are actually numbers
	  this.major = +m[1];
	  this.minor = +m[2];
	  this.patch = +m[3];

	  // numberify any prerelease numeric ids
	  if (!m[4])
	    this.prerelease = [];
	  else
	    this.prerelease = m[4].split('.').map(function(id) {
	      return (/^[0-9]+$/.test(id)) ? +id : id;
	    });

	  this.build = m[5] ? m[5].split('.') : [];
	  this.format();
	}

	SemVer.prototype.format = function() {
	  this.version = this.major + '.' + this.minor + '.' + this.patch;
	  if (this.prerelease.length)
	    this.version += '-' + this.prerelease.join('.');
	  return this.version;
	};

	SemVer.prototype.inspect = function() {
	  return '<SemVer "' + this + '">';
	};

	SemVer.prototype.toString = function() {
	  return this.version;
	};

	SemVer.prototype.compare = function(other) {
	  debug('SemVer.compare', this.version, this.loose, other);
	  if (!(other instanceof SemVer))
	    other = new SemVer(other, this.loose);

	  return this.compareMain(other) || this.comparePre(other);
	};

	SemVer.prototype.compareMain = function(other) {
	  if (!(other instanceof SemVer))
	    other = new SemVer(other, this.loose);

	  return compareIdentifiers(this.major, other.major) ||
	         compareIdentifiers(this.minor, other.minor) ||
	         compareIdentifiers(this.patch, other.patch);
	};

	SemVer.prototype.comparePre = function(other) {
	  if (!(other instanceof SemVer))
	    other = new SemVer(other, this.loose);

	  // NOT having a prerelease is > having one
	  if (this.prerelease.length && !other.prerelease.length)
	    return -1;
	  else if (!this.prerelease.length && other.prerelease.length)
	    return 1;
	  else if (!this.prerelease.length && !other.prerelease.length)
	    return 0;

	  var i = 0;
	  do {
	    var a = this.prerelease[i];
	    var b = other.prerelease[i];
	    debug('prerelease compare', i, a, b);
	    if (a === undefined && b === undefined)
	      return 0;
	    else if (b === undefined)
	      return 1;
	    else if (a === undefined)
	      return -1;
	    else if (a === b)
	      continue;
	    else
	      return compareIdentifiers(a, b);
	  } while (++i);
	};

	// preminor will bump the version up to the next minor release, and immediately
	// down to pre-release. premajor and prepatch work the same way.
	SemVer.prototype.inc = function(release) {
	  switch (release) {
	    case 'premajor':
	      this.inc('major');
	      this.inc('pre');
	      break;
	    case 'preminor':
	      this.inc('minor');
	      this.inc('pre');
	      break;
	    case 'prepatch':
	      // If this is already a prerelease, it will bump to the next version
	      // drop any prereleases that might already exist, since they are not
	      // relevant at this point.
	      this.prerelease.length = 0;
	      this.inc('patch');
	      this.inc('pre');
	      break;
	    // If the input is a non-prerelease version, this acts the same as
	    // prepatch.
	    case 'prerelease':
	      if (this.prerelease.length === 0)
	        this.inc('patch');
	      this.inc('pre');
	      break;
	    case 'major':
	      this.major++;
	      this.minor = -1;
	    case 'minor':
	      this.minor++;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'patch':
	      // If this is not a pre-release version, it will increment the patch.
	      // If it is a pre-release it will bump up to the same patch version.
	      // 1.2.0-5 patches to 1.2.0
	      // 1.2.0 patches to 1.2.1
	      if (this.prerelease.length === 0)
	        this.patch++;
	      this.prerelease = [];
	      break;
	    // This probably shouldn't be used publically.
	    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
	    case 'pre':
	      if (this.prerelease.length === 0)
	        this.prerelease = [0];
	      else {
	        var i = this.prerelease.length;
	        while (--i >= 0) {
	          if (typeof this.prerelease[i] === 'number') {
	            this.prerelease[i]++;
	            i = -2;
	          }
	        }
	        if (i === -1) // didn't increment anything
	          this.prerelease.push(0);
	      }
	      break;

	    default:
	      throw new Error('invalid increment argument: ' + release);
	  }
	  this.format();
	  return this;
	};

	exports.inc = inc;
	function inc(version, release, loose) {
	  try {
	    return new SemVer(version, loose).inc(release).version;
	  } catch (er) {
	    return null;
	  }
	}

	exports.compareIdentifiers = compareIdentifiers;

	var numeric = /^[0-9]+$/;
	function compareIdentifiers(a, b) {
	  var anum = numeric.test(a);
	  var bnum = numeric.test(b);

	  if (anum && bnum) {
	    a = +a;
	    b = +b;
	  }

	  return (anum && !bnum) ? -1 :
	         (bnum && !anum) ? 1 :
	         a < b ? -1 :
	         a > b ? 1 :
	         0;
	}

	exports.rcompareIdentifiers = rcompareIdentifiers;
	function rcompareIdentifiers(a, b) {
	  return compareIdentifiers(b, a);
	}

	exports.compare = compare;
	function compare(a, b, loose) {
	  return new SemVer(a, loose).compare(b);
	}

	exports.compareLoose = compareLoose;
	function compareLoose(a, b) {
	  return compare(a, b, true);
	}

	exports.rcompare = rcompare;
	function rcompare(a, b, loose) {
	  return compare(b, a, loose);
	}

	exports.sort = sort;
	function sort(list, loose) {
	  return list.sort(function(a, b) {
	    return exports.compare(a, b, loose);
	  });
	}

	exports.rsort = rsort;
	function rsort(list, loose) {
	  return list.sort(function(a, b) {
	    return exports.rcompare(a, b, loose);
	  });
	}

	exports.gt = gt;
	function gt(a, b, loose) {
	  return compare(a, b, loose) > 0;
	}

	exports.lt = lt;
	function lt(a, b, loose) {
	  return compare(a, b, loose) < 0;
	}

	exports.eq = eq;
	function eq(a, b, loose) {
	  return compare(a, b, loose) === 0;
	}

	exports.neq = neq;
	function neq(a, b, loose) {
	  return compare(a, b, loose) !== 0;
	}

	exports.gte = gte;
	function gte(a, b, loose) {
	  return compare(a, b, loose) >= 0;
	}

	exports.lte = lte;
	function lte(a, b, loose) {
	  return compare(a, b, loose) <= 0;
	}

	exports.cmp = cmp;
	function cmp(a, op, b, loose) {
	  var ret;
	  switch (op) {
	    case '===': ret = a === b; break;
	    case '!==': ret = a !== b; break;
	    case '': case '=': case '==': ret = eq(a, b, loose); break;
	    case '!=': ret = neq(a, b, loose); break;
	    case '>': ret = gt(a, b, loose); break;
	    case '>=': ret = gte(a, b, loose); break;
	    case '<': ret = lt(a, b, loose); break;
	    case '<=': ret = lte(a, b, loose); break;
	    default: throw new TypeError('Invalid operator: ' + op);
	  }
	  return ret;
	}

	exports.Comparator = Comparator;
	function Comparator(comp, loose) {
	  if (comp instanceof Comparator) {
	    if (comp.loose === loose)
	      return comp;
	    else
	      comp = comp.value;
	  }

	  if (!(this instanceof Comparator))
	    return new Comparator(comp, loose);

	  debug('comparator', comp, loose);
	  this.loose = loose;
	  this.parse(comp);

	  if (this.semver === ANY)
	    this.value = '';
	  else
	    this.value = this.operator + this.semver.version;
	}

	var ANY = {};
	Comparator.prototype.parse = function(comp) {
	  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var m = comp.match(r);

	  if (!m)
	    throw new TypeError('Invalid comparator: ' + comp);

	  this.operator = m[1];
	  if (this.operator === '=')
	    this.operator = '';

	  // if it literally is just '>' or '' then allow anything.
	  if (!m[2])
	    this.semver = ANY;
	  else {
	    this.semver = new SemVer(m[2], this.loose);

	    // <1.2.3-rc DOES allow 1.2.3-beta (has prerelease)
	    // >=1.2.3 DOES NOT allow 1.2.3-beta
	    // <=1.2.3 DOES allow 1.2.3-beta
	    // However, <1.2.3 does NOT allow 1.2.3-beta,
	    // even though `1.2.3-beta < 1.2.3`
	    // The assumption is that the 1.2.3 version has something you
	    // *don't* want, so we push the prerelease down to the minimum.
	    if (this.operator === '<' && !this.semver.prerelease.length) {
	      this.semver.prerelease = ['0'];
	      this.semver.format();
	    }
	  }
	};

	Comparator.prototype.inspect = function() {
	  return '<SemVer Comparator "' + this + '">';
	};

	Comparator.prototype.toString = function() {
	  return this.value;
	};

	Comparator.prototype.test = function(version) {
	  debug('Comparator.test', version, this.loose);
	  return (this.semver === ANY) ? true :
	         cmp(version, this.operator, this.semver, this.loose);
	};


	exports.Range = Range;
	function Range(range, loose) {
	  if ((range instanceof Range) && range.loose === loose)
	    return range;

	  if (!(this instanceof Range))
	    return new Range(range, loose);

	  this.loose = loose;

	  // First, split based on boolean or ||
	  this.raw = range;
	  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
	    return this.parseRange(range.trim());
	  }, this).filter(function(c) {
	    // throw out any that are not relevant for whatever reason
	    return c.length;
	  });

	  if (!this.set.length) {
	    throw new TypeError('Invalid SemVer Range: ' + range);
	  }

	  this.format();
	}

	Range.prototype.inspect = function() {
	  return '<SemVer Range "' + this.range + '">';
	};

	Range.prototype.format = function() {
	  this.range = this.set.map(function(comps) {
	    return comps.join(' ').trim();
	  }).join('||').trim();
	  return this.range;
	};

	Range.prototype.toString = function() {
	  return this.range;
	};

	Range.prototype.parseRange = function(range) {
	  var loose = this.loose;
	  range = range.trim();
	  debug('range', range, loose);
	  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
	  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
	  range = range.replace(hr, hyphenReplace);
	  debug('hyphen replace', range);
	  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
	  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
	  debug('comparator trim', range, re[COMPARATORTRIM]);

	  // `~ 1.2.3` => `~1.2.3`
	  range = range.replace(re[TILDETRIM], tildeTrimReplace);

	  // `^ 1.2.3` => `^1.2.3`
	  range = range.replace(re[CARETTRIM], caretTrimReplace);

	  // normalize spaces
	  range = range.split(/\s+/).join(' ');

	  // At this point, the range is completely trimmed and
	  // ready to be split into comparators.

	  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var set = range.split(' ').map(function(comp) {
	    return parseComparator(comp, loose);
	  }).join(' ').split(/\s+/);
	  if (this.loose) {
	    // in loose mode, throw out any that are not valid comparators
	    set = set.filter(function(comp) {
	      return !!comp.match(compRe);
	    });
	  }
	  set = set.map(function(comp) {
	    return new Comparator(comp, loose);
	  });

	  return set;
	};

	// Mostly just for testing and legacy API reasons
	exports.toComparators = toComparators;
	function toComparators(range, loose) {
	  return new Range(range, loose).set.map(function(comp) {
	    return comp.map(function(c) {
	      return c.value;
	    }).join(' ').trim().split(' ');
	  });
	}

	// comprised of xranges, tildes, stars, and gtlt's at this point.
	// already replaced the hyphen ranges
	// turn into a set of JUST comparators.
	function parseComparator(comp, loose) {
	  debug('comp', comp);
	  comp = replaceCarets(comp, loose);
	  debug('caret', comp);
	  comp = replaceTildes(comp, loose);
	  debug('tildes', comp);
	  comp = replaceXRanges(comp, loose);
	  debug('xrange', comp);
	  comp = replaceStars(comp, loose);
	  debug('stars', comp);
	  return comp;
	}

	function isX(id) {
	  return !id || id.toLowerCase() === 'x' || id === '*';
	}

	// ~, ~> --> * (any, kinda silly)
	// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
	// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
	// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
	// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
	// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
	function replaceTildes(comp, loose) {
	  return comp.trim().split(/\s+/).map(function(comp) {
	    return replaceTilde(comp, loose);
	  }).join(' ');
	}

	function replaceTilde(comp, loose) {
	  var r = loose ? re[TILDELOOSE] : re[TILDE];
	  return comp.replace(r, function(_, M, m, p, pr) {
	    debug('tilde', comp, _, M, m, p, pr);
	    var ret;

	    if (isX(M))
	      ret = '';
	    else if (isX(m))
	      ret = '>=' + M + '.0.0-0 <' + (+M + 1) + '.0.0-0';
	    else if (isX(p))
	      // ~1.2 == >=1.2.0- <1.3.0-
	      ret = '>=' + M + '.' + m + '.0-0 <' + M + '.' + (+m + 1) + '.0-0';
	    else if (pr) {
	      debug('replaceTilde pr', pr);
	      if (pr.charAt(0) !== '-')
	        pr = '-' + pr;
	      ret = '>=' + M + '.' + m + '.' + p + pr +
	            ' <' + M + '.' + (+m + 1) + '.0-0';
	    } else
	      // ~1.2.3 == >=1.2.3-0 <1.3.0-0
	      ret = '>=' + M + '.' + m + '.' + p + '-0' +
	            ' <' + M + '.' + (+m + 1) + '.0-0';

	    debug('tilde return', ret);
	    return ret;
	  });
	}

	// ^ --> * (any, kinda silly)
	// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
	// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
	// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
	// ^1.2.3 --> >=1.2.3 <2.0.0
	// ^1.2.0 --> >=1.2.0 <2.0.0
	function replaceCarets(comp, loose) {
	  return comp.trim().split(/\s+/).map(function(comp) {
	    return replaceCaret(comp, loose);
	  }).join(' ');
	}

	function replaceCaret(comp, loose) {
	  var r = loose ? re[CARETLOOSE] : re[CARET];
	  return comp.replace(r, function(_, M, m, p, pr) {
	    debug('caret', comp, _, M, m, p, pr);
	    var ret;

	    if (isX(M))
	      ret = '';
	    else if (isX(m))
	      ret = '>=' + M + '.0.0-0 <' + (+M + 1) + '.0.0-0';
	    else if (isX(p)) {
	      if (M === '0')
	        ret = '>=' + M + '.' + m + '.0-0 <' + M + '.' + (+m + 1) + '.0-0';
	      else
	        ret = '>=' + M + '.' + m + '.0-0 <' + (+M + 1) + '.0.0-0';
	    } else if (pr) {
	      debug('replaceCaret pr', pr);
	      if (pr.charAt(0) !== '-')
	        pr = '-' + pr;
	      if (M === '0') {
	        if (m === '0')
	          ret = '=' + M + '.' + m + '.' + p + pr;
	        else
	          ret = '>=' + M + '.' + m + '.' + p + pr +
	                ' <' + M + '.' + (+m + 1) + '.0-0';
	      } else
	        ret = '>=' + M + '.' + m + '.' + p + pr +
	              ' <' + (+M + 1) + '.0.0-0';
	    } else {
	      if (M === '0') {
	        if (m === '0')
	          ret = '=' + M + '.' + m + '.' + p;
	        else
	          ret = '>=' + M + '.' + m + '.' + p + '-0' +
	                ' <' + M + '.' + (+m + 1) + '.0-0';
	      } else
	        ret = '>=' + M + '.' + m + '.' + p + '-0' +
	              ' <' + (+M + 1) + '.0.0-0';
	    }

	    debug('caret return', ret);
	    return ret;
	  });
	}

	function replaceXRanges(comp, loose) {
	  debug('replaceXRanges', comp, loose);
	  return comp.split(/\s+/).map(function(comp) {
	    return replaceXRange(comp, loose);
	  }).join(' ');
	}

	function replaceXRange(comp, loose) {
	  comp = comp.trim();
	  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
	  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
	    debug('xRange', comp, ret, gtlt, M, m, p, pr);
	    var xM = isX(M);
	    var xm = xM || isX(m);
	    var xp = xm || isX(p);
	    var anyX = xp;

	    if (gtlt === '=' && anyX)
	      gtlt = '';

	    if (gtlt && anyX) {
	      // replace X with 0, and then append the -0 min-prerelease
	      if (xM)
	        M = 0;
	      if (xm)
	        m = 0;
	      if (xp)
	        p = 0;

	      if (gtlt === '>') {
	        // >1 => >=2.0.0-0
	        // >1.2 => >=1.3.0-0
	        // >1.2.3 => >= 1.2.4-0
	        gtlt = '>=';
	        if (xM) ; else if (xm) {
	          M = +M + 1;
	          m = 0;
	          p = 0;
	        } else if (xp) {
	          m = +m + 1;
	          p = 0;
	        }
	      }


	      ret = gtlt + M + '.' + m + '.' + p + '-0';
	    } else if (xM) {
	      // allow any
	      ret = '*';
	    } else if (xm) {
	      // append '-0' onto the version, otherwise
	      // '1.x.x' matches '2.0.0-beta', since the tag
	      // *lowers* the version value
	      ret = '>=' + M + '.0.0-0 <' + (+M + 1) + '.0.0-0';
	    } else if (xp) {
	      ret = '>=' + M + '.' + m + '.0-0 <' + M + '.' + (+m + 1) + '.0-0';
	    }

	    debug('xRange return', ret);

	    return ret;
	  });
	}

	// Because * is AND-ed with everything else in the comparator,
	// and '' means "any version", just remove the *s entirely.
	function replaceStars(comp, loose) {
	  debug('replaceStars', comp, loose);
	  // Looseness is ignored here.  star is always as loose as it gets!
	  return comp.trim().replace(re[STAR], '');
	}

	// This function is passed to string.replace(re[HYPHENRANGE])
	// M, m, patch, prerelease, build
	// 1.2 - 3.4.5 => >=1.2.0-0 <=3.4.5
	// 1.2.3 - 3.4 => >=1.2.0-0 <3.5.0-0 Any 3.4.x will do
	// 1.2 - 3.4 => >=1.2.0-0 <3.5.0-0
	function hyphenReplace($0,
	                       from, fM, fm, fp, fpr, fb,
	                       to, tM, tm, tp, tpr, tb) {

	  if (isX(fM))
	    from = '';
	  else if (isX(fm))
	    from = '>=' + fM + '.0.0-0';
	  else if (isX(fp))
	    from = '>=' + fM + '.' + fm + '.0-0';
	  else
	    from = '>=' + from;

	  if (isX(tM))
	    to = '';
	  else if (isX(tm))
	    to = '<' + (+tM + 1) + '.0.0-0';
	  else if (isX(tp))
	    to = '<' + tM + '.' + (+tm + 1) + '.0-0';
	  else if (tpr)
	    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
	  else
	    to = '<=' + to;

	  return (from + ' ' + to).trim();
	}


	// if ANY of the sets match ALL of its comparators, then pass
	Range.prototype.test = function(version) {
	  if (!version)
	    return false;
	  for (var i = 0; i < this.set.length; i++) {
	    if (testSet(this.set[i], version))
	      return true;
	  }
	  return false;
	};

	function testSet(set, version) {
	  for (var i = 0; i < set.length; i++) {
	    if (!set[i].test(version))
	      return false;
	  }
	  return true;
	}

	exports.satisfies = satisfies;
	function satisfies(version, range, loose) {
	  try {
	    range = new Range(range, loose);
	  } catch (er) {
	    return false;
	  }
	  return range.test(version);
	}

	exports.maxSatisfying = maxSatisfying;
	function maxSatisfying(versions, range, loose) {
	  return versions.filter(function(version) {
	    return satisfies(version, range, loose);
	  }).sort(function(a, b) {
	    return rcompare(a, b, loose);
	  })[0] || null;
	}

	exports.validRange = validRange;
	function validRange(range, loose) {
	  try {
	    // Return '*' instead of '' so that truthiness works.
	    // This will throw if it's invalid anyway
	    return new Range(range, loose).range || '*';
	  } catch (er) {
	    return null;
	  }
	}

	// Determine if version is less than all the versions possible in the range
	exports.ltr = ltr;
	function ltr(version, range, loose) {
	  return outside(version, range, '<', loose);
	}

	// Determine if version is greater than all the versions possible in the range.
	exports.gtr = gtr;
	function gtr(version, range, loose) {
	  return outside(version, range, '>', loose);
	}

	exports.outside = outside;
	function outside(version, range, hilo, loose) {
	  version = new SemVer(version, loose);
	  range = new Range(range, loose);

	  var gtfn, ltefn, ltfn, comp, ecomp;
	  switch (hilo) {
	    case '>':
	      gtfn = gt;
	      ltefn = lte;
	      ltfn = lt;
	      comp = '>';
	      ecomp = '>=';
	      break;
	    case '<':
	      gtfn = lt;
	      ltefn = gte;
	      ltfn = gt;
	      comp = '<';
	      ecomp = '<=';
	      break;
	    default:
	      throw new TypeError('Must provide a hilo val of "<" or ">"');
	  }

	  // If it satisifes the range it is not outside
	  if (satisfies(version, range, loose)) {
	    return false;
	  }

	  // From now on, variable terms are as if we're in "gtr" mode.
	  // but note that everything is flipped for the "ltr" function.

	  for (var i = 0; i < range.set.length; ++i) {
	    var comparators = range.set[i];

	    var high = null;
	    var low = null;

	    comparators.forEach(function(comparator) {
	      high = high || comparator;
	      low = low || comparator;
	      if (gtfn(comparator.semver, high.semver, loose)) {
	        high = comparator;
	      } else if (ltfn(comparator.semver, low.semver, loose)) {
	        low = comparator;
	      }
	    });

	    // If the edge version comparator has a operator then our version
	    // isn't outside it
	    if (high.operator === comp || high.operator === ecomp) {
	      return false;
	    }

	    // If the lowest version comparator has an operator and our version
	    // is less than it then it isn't higher than the range
	    if ((!low.operator || low.operator === comp) &&
	        ltefn(version, low.semver)) {
	      return false;
	    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
	      return false;
	    }
	  }
	  return true;
	}
	});
	var semver_1 = semver.SEMVER_SPEC_VERSION;
	var semver_2 = semver.re;
	var semver_3 = semver.src;
	var semver_4 = semver.parse;
	var semver_5 = semver.valid;
	var semver_6 = semver.clean;
	var semver_7 = semver.SemVer;
	var semver_8 = semver.inc;
	var semver_9 = semver.compareIdentifiers;
	var semver_10 = semver.rcompareIdentifiers;
	var semver_11 = semver.compare;
	var semver_12 = semver.compareLoose;
	var semver_13 = semver.rcompare;
	var semver_14 = semver.sort;
	var semver_15 = semver.rsort;
	var semver_16 = semver.gt;
	var semver_17 = semver.lt;
	var semver_18 = semver.eq;
	var semver_19 = semver.neq;
	var semver_20 = semver.gte;
	var semver_21 = semver.lte;
	var semver_22 = semver.cmp;
	var semver_23 = semver.Comparator;
	var semver_24 = semver.Range;
	var semver_25 = semver.toComparators;
	var semver_26 = semver.satisfies;
	var semver_27 = semver.maxSatisfying;
	var semver_28 = semver.validRange;
	var semver_29 = semver.ltr;
	var semver_30 = semver.gtr;
	var semver_31 = semver.outside;

	var immutable = extend$4;

	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

	function extend$4() {
	    var target = {};

	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i];

	        for (var key in source) {
	            if (hasOwnProperty$1.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }

	    return target
	}

	function AbstractIterator$3 (db) {
	  if (typeof db !== 'object' || db === null) {
	    throw new TypeError('First argument must be an abstract-leveldown compliant store')
	  }

	  this.db = db;
	  this._ended = false;
	  this._nexting = false;
	}

	AbstractIterator$3.prototype.next = function (callback) {
	  var self = this;

	  if (typeof callback !== 'function') {
	    throw new Error('next() requires a callback argument')
	  }

	  if (self._ended) {
	    process.nextTick(callback, new Error('cannot call next() after end()'));
	    return self
	  }

	  if (self._nexting) {
	    process.nextTick(callback, new Error('cannot call next() before previous next() has completed'));
	    return self
	  }

	  self._nexting = true;
	  self._next(function () {
	    self._nexting = false;
	    callback.apply(null, arguments);
	  });

	  return self
	};

	AbstractIterator$3.prototype._next = function (callback) {
	  process.nextTick(callback);
	};

	AbstractIterator$3.prototype.seek = function (target) {
	  if (this._ended) {
	    throw new Error('cannot call seek() after end()')
	  }
	  if (this._nexting) {
	    throw new Error('cannot call seek() before next() has completed')
	  }

	  target = this.db._serializeKey(target);
	  this._seek(target);
	};

	AbstractIterator$3.prototype._seek = function (target) {};

	AbstractIterator$3.prototype.end = function (callback) {
	  if (typeof callback !== 'function') {
	    throw new Error('end() requires a callback argument')
	  }

	  if (this._ended) {
	    return process.nextTick(callback, new Error('end() already called on iterator'))
	  }

	  this._ended = true;
	  this._end(callback);
	};

	AbstractIterator$3.prototype._end = function (callback) {
	  process.nextTick(callback);
	};

	var abstractIterator$2 = AbstractIterator$3;

	function AbstractChainedBatch$2 (db) {
	  if (typeof db !== 'object' || db === null) {
	    throw new TypeError('First argument must be an abstract-leveldown compliant store')
	  }

	  this.db = db;
	  this._operations = [];
	  this._written = false;
	}

	AbstractChainedBatch$2.prototype._checkWritten = function () {
	  if (this._written) {
	    throw new Error('write() already called on this batch')
	  }
	};

	AbstractChainedBatch$2.prototype.put = function (key, value) {
	  this._checkWritten();

	  var err = this.db._checkKey(key) || this.db._checkValue(value);
	  if (err) throw err

	  key = this.db._serializeKey(key);
	  value = this.db._serializeValue(value);

	  this._put(key, value);

	  return this
	};

	AbstractChainedBatch$2.prototype._put = function (key, value) {
	  this._operations.push({ type: 'put', key: key, value: value });
	};

	AbstractChainedBatch$2.prototype.del = function (key) {
	  this._checkWritten();

	  var err = this.db._checkKey(key);
	  if (err) throw err

	  key = this.db._serializeKey(key);
	  this._del(key);

	  return this
	};

	AbstractChainedBatch$2.prototype._del = function (key) {
	  this._operations.push({ type: 'del', key: key });
	};

	AbstractChainedBatch$2.prototype.clear = function () {
	  this._checkWritten();
	  this._clear();

	  return this
	};

	AbstractChainedBatch$2.prototype._clear = function () {
	  this._operations = [];
	};

	AbstractChainedBatch$2.prototype.write = function (options, callback) {
	  this._checkWritten();

	  if (typeof options === 'function') { callback = options; }
	  if (typeof callback !== 'function') {
	    throw new Error('write() requires a callback argument')
	  }
	  if (typeof options !== 'object' || options === null) {
	    options = {};
	  }

	  this._written = true;
	  this._write(options, callback);
	};

	AbstractChainedBatch$2.prototype._write = function (options, callback) {
	  this.db._batch(this._operations, options, callback);
	};

	var abstractChainedBatch$2 = AbstractChainedBatch$2;

	var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
	var rangeOptions = 'start end gt gte lt lte'.split(' ');

	function AbstractLevelDOWN$4 () {
	  this.status = 'new';
	}

	AbstractLevelDOWN$4.prototype.open = function (options, callback) {
	  var self = this;
	  var oldStatus = this.status;

	  if (typeof options === 'function') callback = options;

	  if (typeof callback !== 'function') {
	    throw new Error('open() requires a callback argument')
	  }

	  if (typeof options !== 'object' || options === null) options = {};

	  options.createIfMissing = options.createIfMissing !== false;
	  options.errorIfExists = !!options.errorIfExists;

	  this.status = 'opening';
	  this._open(options, function (err) {
	    if (err) {
	      self.status = oldStatus;
	      return callback(err)
	    }
	    self.status = 'open';
	    callback();
	  });
	};

	AbstractLevelDOWN$4.prototype._open = function (options, callback) {
	  process.nextTick(callback);
	};

	AbstractLevelDOWN$4.prototype.close = function (callback) {
	  var self = this;
	  var oldStatus = this.status;

	  if (typeof callback !== 'function') {
	    throw new Error('close() requires a callback argument')
	  }

	  this.status = 'closing';
	  this._close(function (err) {
	    if (err) {
	      self.status = oldStatus;
	      return callback(err)
	    }
	    self.status = 'closed';
	    callback();
	  });
	};

	AbstractLevelDOWN$4.prototype._close = function (callback) {
	  process.nextTick(callback);
	};

	AbstractLevelDOWN$4.prototype.get = function (key, options, callback) {
	  if (typeof options === 'function') callback = options;

	  if (typeof callback !== 'function') {
	    throw new Error('get() requires a callback argument')
	  }

	  var err = this._checkKey(key);
	  if (err) return process.nextTick(callback, err)

	  key = this._serializeKey(key);

	  if (typeof options !== 'object' || options === null) options = {};

	  options.asBuffer = options.asBuffer !== false;

	  this._get(key, options, callback);
	};

	AbstractLevelDOWN$4.prototype._get = function (key, options, callback) {
	  process.nextTick(function () { callback(new Error('NotFound')); });
	};

	AbstractLevelDOWN$4.prototype.put = function (key, value, options, callback) {
	  if (typeof options === 'function') callback = options;

	  if (typeof callback !== 'function') {
	    throw new Error('put() requires a callback argument')
	  }

	  var err = this._checkKey(key) || this._checkValue(value);
	  if (err) return process.nextTick(callback, err)

	  key = this._serializeKey(key);
	  value = this._serializeValue(value);

	  if (typeof options !== 'object' || options === null) options = {};

	  this._put(key, value, options, callback);
	};

	AbstractLevelDOWN$4.prototype._put = function (key, value, options, callback) {
	  process.nextTick(callback);
	};

	AbstractLevelDOWN$4.prototype.del = function (key, options, callback) {
	  if (typeof options === 'function') callback = options;

	  if (typeof callback !== 'function') {
	    throw new Error('del() requires a callback argument')
	  }

	  var err = this._checkKey(key);
	  if (err) return process.nextTick(callback, err)

	  key = this._serializeKey(key);

	  if (typeof options !== 'object' || options === null) options = {};

	  this._del(key, options, callback);
	};

	AbstractLevelDOWN$4.prototype._del = function (key, options, callback) {
	  process.nextTick(callback);
	};

	AbstractLevelDOWN$4.prototype.batch = function (array, options, callback) {
	  if (!arguments.length) return this._chainedBatch()

	  if (typeof options === 'function') callback = options;

	  if (typeof array === 'function') callback = array;

	  if (typeof callback !== 'function') {
	    throw new Error('batch(array) requires a callback argument')
	  }

	  if (!Array.isArray(array)) {
	    return process.nextTick(callback, new Error('batch(array) requires an array argument'))
	  }

	  if (array.length === 0) {
	    return process.nextTick(callback)
	  }

	  if (typeof options !== 'object' || options === null) options = {};

	  var serialized = new Array(array.length);

	  for (var i = 0; i < array.length; i++) {
	    if (typeof array[i] !== 'object' || array[i] === null) {
	      return process.nextTick(callback, new Error('batch(array) element must be an object and not `null`'))
	    }

	    var e = immutable(array[i]);

	    if (e.type !== 'put' && e.type !== 'del') {
	      return process.nextTick(callback, new Error("`type` must be 'put' or 'del'"))
	    }

	    var err = this._checkKey(e.key);
	    if (err) return process.nextTick(callback, err)

	    e.key = this._serializeKey(e.key);

	    if (e.type === 'put') {
	      var valueErr = this._checkValue(e.value);
	      if (valueErr) return process.nextTick(callback, valueErr)

	      e.value = this._serializeValue(e.value);
	    }

	    serialized[i] = e;
	  }

	  this._batch(serialized, options, callback);
	};

	AbstractLevelDOWN$4.prototype._batch = function (array, options, callback) {
	  process.nextTick(callback);
	};

	AbstractLevelDOWN$4.prototype._setupIteratorOptions = function (options) {
	  options = cleanRangeOptions(this, options);

	  options.reverse = !!options.reverse;
	  options.keys = options.keys !== false;
	  options.values = options.values !== false;
	  options.limit = 'limit' in options ? options.limit : -1;
	  options.keyAsBuffer = options.keyAsBuffer !== false;
	  options.valueAsBuffer = options.valueAsBuffer !== false;

	  return options
	};

	function cleanRangeOptions (db, options) {
	  var result = {};

	  for (var k in options) {
	    if (!hasOwnProperty$2.call(options, k)) continue

	    var opt = options[k];

	    if (isRangeOption(k)) {
	      // Note that we don't reject nullish and empty options here. While
	      // those types are invalid as keys, they are valid as range options.
	      opt = db._serializeKey(opt);
	    }

	    result[k] = opt;
	  }

	  return result
	}

	function isRangeOption (k) {
	  return rangeOptions.indexOf(k) !== -1
	}

	AbstractLevelDOWN$4.prototype.iterator = function (options) {
	  if (typeof options !== 'object' || options === null) options = {};
	  options = this._setupIteratorOptions(options);
	  return this._iterator(options)
	};

	AbstractLevelDOWN$4.prototype._iterator = function (options) {
	  return new abstractIterator$2(this)
	};

	AbstractLevelDOWN$4.prototype._chainedBatch = function () {
	  return new abstractChainedBatch$2(this)
	};

	AbstractLevelDOWN$4.prototype._serializeKey = function (key) {
	  return key
	};

	AbstractLevelDOWN$4.prototype._serializeValue = function (value) {
	  return value
	};

	AbstractLevelDOWN$4.prototype._checkKey = function (key) {
	  if (key === null || key === undefined) {
	    return new Error('key cannot be `null` or `undefined`')
	  } else if (Buffer.isBuffer(key) && key.length === 0) {
	    return new Error('key cannot be an empty Buffer')
	  } else if (key === '') {
	    return new Error('key cannot be an empty String')
	  } else if (Array.isArray(key) && key.length === 0) {
	    return new Error('key cannot be an empty Array')
	  }
	};

	AbstractLevelDOWN$4.prototype._checkValue = function (value) {
	  if (value === null || value === undefined) {
	    return new Error('value cannot be `null` or `undefined`')
	  }
	};

	var abstractLeveldown$2 = AbstractLevelDOWN$4;

	var AbstractLevelDOWN$5 = abstractLeveldown$2;
	var AbstractIterator$4 = abstractIterator$2;
	var AbstractChainedBatch$3 = abstractChainedBatch$2;

	var abstractLeveldown$3 = {
		AbstractLevelDOWN: AbstractLevelDOWN$5,
		AbstractIterator: AbstractIterator$4,
		AbstractChainedBatch: AbstractChainedBatch$3
	};

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	function resolve() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : '/';

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	}
	// path.normalize(path)
	// posix version
	function normalize(path) {
	  var isPathAbsolute = isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isPathAbsolute).join('/');

	  if (!path && !isPathAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isPathAbsolute ? '/' : '') + path;
	}
	// posix version
	function isAbsolute(path) {
	  return path.charAt(0) === '/';
	}

	// posix version
	function join() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	}


	// path.relative(from, to)
	// posix version
	function relative(from, to) {
	  from = resolve(from).substr(1);
	  to = resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	}

	var sep = '/';
	var delimiter = ':';

	function dirname(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	}

	function basename(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	}


	function extname(path) {
	  return splitPath(path)[3];
	}
	var path = {
	  extname: extname,
	  basename: basename,
	  dirname: dirname,
	  sep: sep,
	  delimiter: delimiter,
	  relative: relative,
	  join: join,
	  isAbsolute: isAbsolute,
	  normalize: normalize,
	  resolve: resolve
	};
	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b' ?
	    function (str, start, len) { return str.substr(start, len) } :
	    function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	/*
	The MIT License (MIT)

	Copyright (c) 2016 CoderPuppy

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

	*/
	var _endianness;
	function endianness() {
	  if (typeof _endianness === 'undefined') {
	    var a = new ArrayBuffer(2);
	    var b = new Uint8Array(a);
	    var c = new Uint16Array(a);
	    b[0] = 1;
	    b[1] = 2;
	    if (c[0] === 258) {
	      _endianness = 'BE';
	    } else if (c[0] === 513){
	      _endianness = 'LE';
	    } else {
	      throw new Error('unable to figure out endianess');
	    }
	  }
	  return _endianness;
	}

	function hostname() {
	  if (typeof global.location !== 'undefined') {
	    return global.location.hostname
	  } else return '';
	}

	function loadavg() {
	  return [];
	}

	function uptime() {
	  return 0;
	}

	function freemem() {
	  return Number.MAX_VALUE;
	}

	function totalmem() {
	  return Number.MAX_VALUE;
	}

	function cpus() {
	  return [];
	}

	function type() {
	  return 'Browser';
	}

	function release () {
	  if (typeof global.navigator !== 'undefined') {
	    return global.navigator.appVersion;
	  }
	  return '';
	}

	function networkInterfaces(){}
	function getNetworkInterfaces(){}

	function arch() {
	  return 'javascript';
	}

	function platform() {
	  return 'browser';
	}

	function tmpDir() {
	  return '/tmp';
	}
	var tmpdir = tmpDir;

	var EOL = '\n';
	var os = {
	  EOL: EOL,
	  tmpdir: tmpdir,
	  tmpDir: tmpDir,
	  networkInterfaces:networkInterfaces,
	  getNetworkInterfaces: getNetworkInterfaces,
	  release: release,
	  type: type,
	  cpus: cpus,
	  totalmem: totalmem,
	  freemem: freemem,
	  uptime: uptime,
	  loadavg: loadavg,
	  hostname: hostname,
	  endianness: endianness,
	};

	var os$1 = /*#__PURE__*/Object.freeze({
		endianness: endianness,
		hostname: hostname,
		loadavg: loadavg,
		uptime: uptime,
		freemem: freemem,
		totalmem: totalmem,
		cpus: cpus,
		type: type,
		release: release,
		networkInterfaces: networkInterfaces,
		getNetworkInterfaces: getNetworkInterfaces,
		arch: arch,
		platform: platform,
		tmpDir: tmpDir,
		tmpdir: tmpdir,
		EOL: EOL,
		'default': os
	});

	var os$2 = getCjsExportFromNamespace(os$1);

	// Workaround to fix webpack's build warnings: 'the request of a dependency is an expression'
	var runtimeRequire = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : commonjsRequire; // eslint-disable-line

	var prebuildsOnly = !!process.env.PREBUILDS_ONLY;
	var abi = process.versions.modules; // TODO: support old node where this is undef
	var runtime = isElectron() ? 'electron' : 'node';
	var arch$1 = os$2.arch();
	var platform$1 = os$2.platform();
	var libc = process.env.LIBC || (isAlpine(platform$1) ? 'musl' : 'glibc');
	var armv = process.env.ARM_VERSION || (arch$1 === 'arm64' ? '8' : process.config.variables.arm_version) || '';
	var uv = (process.versions.uv || '').split('.')[0];

	var nodeGypBuild = load;

	function load (dir) {
	  return runtimeRequire(load.path(dir))
	}

	load.path = function (dir) {
	  dir = path.resolve(dir || '.');

	  try {
	    var name = runtimeRequire(path.join(dir, 'package.json')).name.toUpperCase().replace(/-/g, '_');
	    if (process.env[name + '_PREBUILD']) dir = process.env[name + '_PREBUILD'];
	  } catch (err) {}

	  if (!prebuildsOnly) {
	    var release = getFirst(path.join(dir, 'build/Release'), matchBuild);
	    if (release) return release

	    var debug = getFirst(path.join(dir, 'build/Debug'), matchBuild);
	    if (debug) return debug
	  }

	  // Find most specific flavor first
	  var prebuilds = path.join(dir, 'prebuilds', platform$1 + '-' + arch$1);
	  var parsed = readdirSync(prebuilds).map(parseTags);
	  var candidates = parsed.filter(matchTags(runtime, abi));
	  var winner = candidates.sort(compareTags(runtime))[0];
	  if (winner) return path.join(prebuilds, winner.file)

	  var target = [
	    'platform=' + platform$1,
	    'arch=' + arch$1,
	    'runtime=' + runtime,
	    'abi=' + abi,
	    'uv=' + uv,
	    armv ? 'armv=' + armv : '',
	    'libc=' + libc
	  ].filter(Boolean).join(' ');

	  throw new Error('No native build was found for ' + target)
	};

	function readdirSync (dir) {
	  try {
	    return browserifyFs.readdirSync(dir)
	  } catch (err) {
	    return []
	  }
	}

	function getFirst (dir, filter) {
	  var files = readdirSync(dir).filter(filter);
	  return files[0] && path.join(dir, files[0])
	}

	function matchBuild (name) {
	  return /\.node$/.test(name)
	}

	function parseTags (file) {
	  var arr = file.split('.');
	  var extension = arr.pop();
	  var tags = { file: file, specificity: 0 };

	  if (extension !== 'node') return

	  for (var i = 0; i < arr.length; i++) {
	    var tag = arr[i];

	    if (tag === 'node' || tag === 'electron' || tag === 'node-webkit') {
	      tags.runtime = tag;
	    } else if (tag === 'napi') {
	      tags.napi = true;
	    } else if (tag.slice(0, 3) === 'abi') {
	      tags.abi = tag.slice(3);
	    } else if (tag.slice(0, 2) === 'uv') {
	      tags.uv = tag.slice(2);
	    } else if (tag.slice(0, 4) === 'armv') {
	      tags.armv = tag.slice(4);
	    } else if (tag === 'glibc' || tag === 'musl') {
	      tags.libc = tag;
	    } else {
	      continue
	    }

	    tags.specificity++;
	  }

	  return tags
	}

	function matchTags (runtime, abi) {
	  return function (tags) {
	    if (tags == null) return false
	    if (tags.runtime !== runtime && !runtimeAgnostic(tags)) return false
	    if (tags.abi !== abi && !tags.napi) return false
	    if (tags.uv && tags.uv !== uv) return false
	    if (tags.armv && tags.armv !== armv) return false
	    if (tags.libc && tags.libc !== libc) return false

	    return true
	  }
	}

	function runtimeAgnostic (tags) {
	  return tags.runtime === 'node' && tags.napi
	}

	function compareTags (runtime) {
	  // Precedence: non-agnostic runtime, abi over napi, then by specificity.
	  return function (a, b) {
	    if (a.runtime !== b.runtime) {
	      return a.runtime === runtime ? -1 : 1
	    } else if (a.abi !== b.abi) {
	      return a.abi ? -1 : 1
	    } else if (a.specificity !== b.specificity) {
	      return a.specificity > b.specificity ? -1 : 1
	    } else {
	      return 0
	    }
	  }
	}

	function isElectron () {
	  if (process.versions && process.versions.electron) return true
	  if (process.env.ELECTRON_RUN_AS_NODE) return true
	  return typeof window !== 'undefined' && window.process && window.process.type === 'renderer'
	}

	function isAlpine (platform) {
	  return platform === 'linux' && browserifyFs.existsSync('/etc/alpine-release')
	}

	// Exposed for unit tests
	// TODO: move to lib
	load.parseTags = parseTags;
	load.matchTags = matchTags;
	load.compareTags = compareTags;

	var binding = nodeGypBuild(__dirname);

	const AbstractChainedBatch$4 = abstractLeveldown$3.AbstractChainedBatch;


	function ChainedBatch (db) {
	  AbstractChainedBatch$4.call(this, db);
	  this.context = binding.batch_init(db.context);
	}

	ChainedBatch.prototype._put = function (key, value) {
	  binding.batch_put(this.context, key, value);
	};

	ChainedBatch.prototype._del = function (key) {
	  binding.batch_del(this.context, key);
	};

	ChainedBatch.prototype._clear = function () {
	  binding.batch_clear(this.context);
	};

	ChainedBatch.prototype._write = function (options, callback) {
	  binding.batch_write(this.context, options, callback);
	};

	debugUtil.inherits(ChainedBatch, AbstractChainedBatch$4);

	var chainedBatch = ChainedBatch;

	const AbstractIterator$5 = abstractLeveldown$3.AbstractIterator;


	function Iterator$1 (db, options) {
	  AbstractIterator$5.call(this, db);

	  this.context = binding.iterator_init(db.context, options);
	  this.cache = null;
	  this.finished = false;
	}

	debugUtil.inherits(Iterator$1, AbstractIterator$5);

	Iterator$1.prototype._seek = function (target) {
	  if (target.length === 0) {
	    throw new Error('cannot seek() to an empty target')
	  }

	  this.cache = null;
	  binding.iterator_seek(this.context, target);
	  this.finished = false;
	};

	Iterator$1.prototype._next = function (callback) {
	  var that = this;

	  if (this.cache && this.cache.length) {
	    process.nextTick(callback, null, this.cache.pop(), this.cache.pop());
	  } else if (this.finished) {
	    process.nextTick(callback);
	  } else {
	    binding.iterator_next(this.context, function (err, array, finished) {
	      if (err) return callback(err)

	      that.cache = array;
	      that.finished = finished;
	      that._next(callback);
	    });
	  }

	  return this
	};

	Iterator$1.prototype._end = function (callback) {
	  delete this.cache;
	  binding.iterator_end(this.context, callback);
	};

	var iterator$1 = Iterator$1;

	const AbstractLevelDOWN$6 = abstractLeveldown$3.AbstractLevelDOWN;




	function LevelDOWN (location) {
	  if (!(this instanceof LevelDOWN)) {
	    return new LevelDOWN(location)
	  }

	  if (typeof location !== 'string') {
	    throw new Error('constructor requires a location string argument')
	  }

	  AbstractLevelDOWN$6.call(this);

	  this.location = location;
	  this.context = binding.db_init();
	}

	debugUtil.inherits(LevelDOWN, AbstractLevelDOWN$6);

	LevelDOWN.prototype._open = function (options, callback) {
	  binding.db_open(this.context, this.location, options, callback);
	};

	LevelDOWN.prototype._close = function (callback) {
	  binding.db_close(this.context, callback);
	};

	LevelDOWN.prototype._serializeKey = function (key) {
	  return Buffer.isBuffer(key) ? key : String(key)
	};

	LevelDOWN.prototype._serializeValue = function (value) {
	  return Buffer.isBuffer(value) ? value : String(value)
	};

	LevelDOWN.prototype._put = function (key, value, options, callback) {
	  binding.db_put(this.context, key, value, options, callback);
	};

	LevelDOWN.prototype._get = function (key, options, callback) {
	  binding.db_get(this.context, key, options, callback);
	};

	LevelDOWN.prototype._del = function (key, options, callback) {
	  binding.db_del(this.context, key, options, callback);
	};

	LevelDOWN.prototype._chainedBatch = function () {
	  return new chainedBatch(this)
	};

	LevelDOWN.prototype._batch = function (operations, options, callback) {
	  binding.batch_do(this.context, operations, options, callback);
	};

	LevelDOWN.prototype.approximateSize = function (start, end, callback) {
	  if (start == null ||
	      end == null ||
	      typeof start === 'function' ||
	      typeof end === 'function') {
	    throw new Error('approximateSize() requires valid `start` and `end` arguments')
	  }

	  if (typeof callback !== 'function') {
	    throw new Error('approximateSize() requires a callback argument')
	  }

	  start = this._serializeKey(start);
	  end = this._serializeKey(end);

	  binding.db_approximate_size(this.context, start, end, callback);
	};

	LevelDOWN.prototype.compactRange = function (start, end, callback) {
	  if (start == null ||
	      end == null ||
	      typeof start === 'function' ||
	      typeof end === 'function') {
	    throw new Error('compactRange() requires valid `start` and `end` arguments')
	  }

	  if (typeof callback !== 'function') {
	    throw new Error('compactRange() requires a callback argument')
	  }

	  start = this._serializeKey(start);
	  end = this._serializeKey(end);

	  binding.db_compact_range(this.context, start, end, callback);
	};

	LevelDOWN.prototype.getProperty = function (property) {
	  if (typeof property !== 'string') {
	    throw new Error('getProperty() requires a valid `property` argument')
	  }

	  return binding.db_get_property(this.context, property)
	};

	LevelDOWN.prototype._iterator = function (options) {
	  if (this.status !== 'open') {
	    // Prevent segfault
	    throw new Error('cannot call iterator() before open()')
	  }

	  return new iterator$1(this, options)
	};

	LevelDOWN.destroy = function (location, callback) {
	  if (arguments.length < 2) {
	    throw new Error('destroy() requires `location` and `callback` arguments')
	  }
	  if (typeof location !== 'string') {
	    throw new Error('destroy() requires a location string argument')
	  }
	  if (typeof callback !== 'function') {
	    throw new Error('destroy() requires a callback function argument')
	  }

	  binding.destroy_db(location, callback);
	};

	LevelDOWN.repair = function (location, callback) {
	  if (arguments.length < 2) {
	    throw new Error('repair() requires `location` and `callback` arguments')
	  }
	  if (typeof location !== 'string') {
	    throw new Error('repair() requires a location string argument')
	  }
	  if (typeof callback !== 'function') {
	    throw new Error('repair() requires a callback function argument')
	  }

	  binding.repair_db(location, callback);
	};

	var leveldown = LevelDOWN.default = LevelDOWN;

	var require$$1 = getCjsExportFromNamespace(_package$1);

	var require$$2 = getCjsExportFromNamespace(_package$3);

	/* Copyright (c) 2012-2014 LevelUP contributors
	 * See list at <https://github.com/rvagg/node-levelup#contributing>
	 * MIT License
	 * <https://github.com/rvagg/node-levelup/blob/master/LICENSE.md>
	 */

	var LevelUPError$1  = errors.LevelUPError

	  , encodingNames = [
	        'hex'
	      , 'utf8'
	      , 'utf-8'
	      , 'ascii'
	      , 'binary'
	      , 'base64'
	      , 'ucs2'
	      , 'ucs-2'
	      , 'utf16le'
	      , 'utf-16le'
	    ]

	  , defaultOptions = {
	        createIfMissing : true
	      , errorIfExists   : false
	      , keyEncoding     : 'utf8'
	      , valueEncoding   : 'utf8'
	      , compression     : true
	    }

	  , leveldown$1

	  , encodings = (function () {
	      function isBinary (data) {
	        return data === undefined || data === null || Buffer.isBuffer(data)
	      }

	      var encodings = {};
	      encodings.utf8 = encodings['utf-8'] = {
	          encode : function (data) {
	            return isBinary(data) ? data : String(data)
	          }
	        , decode : function (data) {
	          return data
	          }
	        , buffer : false
	        , type   : 'utf8'
	      };
	      encodings.json = {
	          encode : JSON.stringify
	        , decode : JSON.parse
	        , buffer : false
	        , type   : 'json'
	      };
	      encodingNames.forEach(function (type) {
	        if (encodings[type])
	          return
	        encodings[type] = {
	            encode : function (data) {
	              return isBinary(data) ? data : new Buffer(data, type)
	            }
	          , decode : function (buffer) {
	              return process.browser ? buffer.toString(type) : buffer;
	            }
	          , buffer : true
	          , type   : type // useful for debugging purposes
	        };
	      });
	      return encodings
	    })()

	  , encodingOpts = (function () {
	      var eo = {};
	      encodingNames.forEach(function (e) {
	        eo[e] = { valueEncoding : e };
	      });
	      return eo
	    }());

	function copy (srcdb, dstdb, callback) {
	  srcdb.readStream()
	    .pipe(dstdb.writeStream())
	    .on('close', callback ? callback : function () {})
	    .on('error', callback ? callback : function (err) { throw err });
	}

	function getOptions (levelup, options) {
	  var s = typeof options == 'string'; // just an encoding
	  if (!s && options && options.encoding && !options.valueEncoding)
	    options.valueEncoding = options.encoding;
	  return xtend$2(
	      (levelup && levelup.options) || {}
	    , s ? encodingOpts[options] || encodingOpts[defaultOptions.valueEncoding]
	        : options
	  )
	}

	function getLevelDOWN () {
	  if (leveldown$1)
	    return leveldown$1

	  var requiredVersion       = require$$1.devDependencies.leveldown
	    , missingLevelDOWNError = 'Could not locate LevelDOWN, try `npm install leveldown`'
	    , leveldownVersion;

	  try {
	    leveldownVersion = require$$2.version;
	  } catch (e) {
	    throw new LevelUPError$1(missingLevelDOWNError)
	  }

	  if (!semver.satisfies(leveldownVersion, requiredVersion)) {
	    throw new LevelUPError$1(
	        'Installed version of LevelDOWN ('
	      + leveldownVersion
	      + ') does not match required version ('
	      + requiredVersion
	      + ')'
	    )
	  }

	  try {
	    return leveldown$1 = leveldown
	  } catch (e) {
	    throw new LevelUPError$1(missingLevelDOWNError)
	  }
	}

	function dispatchError (levelup, error, callback) {
	  return typeof callback == 'function'
	    ? callback(error)
	    : levelup.emit('error', error)
	}

	function getKeyEncoder (options, op) {
	  var type = ((op && op.keyEncoding) || options.keyEncoding) || 'utf8';
	  return encodings[type] || type
	}

	function getValueEncoder (options, op) {
	  var type = (((op && (op.valueEncoding || op.encoding))
	      || options.valueEncoding || options.encoding)) || 'utf8';
	  return encodings[type] || type
	}

	function encodeKey (key, options, op) {
	  return getKeyEncoder(options, op).encode(key)
	}

	function encodeValue (value, options, op) {
	  return getValueEncoder(options, op).encode(value)
	}

	function decodeKey (key, options) {
	  return getKeyEncoder(options).decode(key)
	}

	function decodeValue (value, options) {
	  return getValueEncoder(options).decode(value)
	}

	function isValueAsBuffer (options, op) {
	  return getValueEncoder(options, op).buffer
	}

	function isKeyAsBuffer (options, op) {
	  return getKeyEncoder(options, op).buffer
	}

	var util$3 = {
	    defaultOptions  : defaultOptions
	  , copy            : copy
	  , getOptions      : getOptions
	  , getLevelDOWN    : getLevelDOWN
	  , dispatchError   : dispatchError
	  , encodeKey       : encodeKey
	  , encodeValue     : encodeValue
	  , isValueAsBuffer : isValueAsBuffer
	  , isKeyAsBuffer   : isKeyAsBuffer
	  , decodeValue     : decodeValue
	  , decodeKey       : decodeKey
	};

	/* Copyright (c) 2012-2014 LevelUP contributors
	 * See list at <https://github.com/rvagg/node-levelup#contributing>
	 * MIT License <https://github.com/rvagg/node-levelup/blob/master/LICENSE.md>
	 */

	// NOTE: we are fixed to readable-stream@1.0.x for now
	// for pure Streams2 across Node versions
	var Readable$2      = readable.Readable
	  , inherits$3      = debugUtil.inherits
	  , EncodingError = errors.EncodingError

	  , defaultOptions$1 = { keys: true, values: true }

	  , makeKeyValueData = function (key, value) {
	      return {
	          key: util$3.decodeKey(key, this._options)
	        , value: util$3.decodeValue(value, this._options)
	      }
	    }
	  , makeKeyData = function (key) {
	      return util$3.decodeKey(key, this._options)
	    }
	  , makeValueData = function (_, value) {
	      return util$3.decodeValue(value, this._options)
	    }
	  , makeNoData = function () { return null };

	function ReadStream (options, db, iteratorFactory) {
	  if (!(this instanceof ReadStream))
	    return new ReadStream(options, db, iteratorFactory)

	  Readable$2.call(this, { objectMode: true, highWaterMark: options.highWaterMark });

	  // purely to keep `db` around until we're done so it's not GCed if the user doesn't keep a ref
	  this._db = db;

	  options = this._options = xtend$2(defaultOptions$1, options);

	  this._keyEncoding   = options.keyEncoding   || options.encoding;
	  this._valueEncoding = options.valueEncoding || options.encoding;

	  if (typeof this._options.start != 'undefined')
	    this._options.start = util$3.encodeKey(this._options.start, this._options);
	  if (typeof this._options.end != 'undefined')
	    this._options.end = util$3.encodeKey(this._options.end, this._options);
	  if (typeof this._options.limit != 'number')
	    this._options.limit = -1;

	  this._options.keyAsBuffer   = util$3.isKeyAsBuffer(this._options);

	  this._options.valueAsBuffer = util$3.isValueAsBuffer(this._options);

	  this._makeData = this._options.keys && this._options.values
	    ? makeKeyValueData : this._options.keys
	      ? makeKeyData : this._options.values
	        ? makeValueData : makeNoData;

	  var self = this;
	  if (!this._db.isOpen()) {
	    this._db.once('ready', function () {
	      if (!self._destroyed) {
	        self._iterator = iteratorFactory(self._options);
	      }
	    });
	  } else
	    this._iterator = iteratorFactory(this._options);
	}

	inherits$3(ReadStream, Readable$2);

	ReadStream.prototype._read = function read () {
	  var self = this;
	  if (!self._db.isOpen()) {
	    return self._db.once('ready', function () { read.call(self); })
	  }
	  if (self._destroyed)
	    return
	 
	  self._iterator.next(function(err, key, value) {
	    if (err || (key === undefined && value === undefined)) {
	      if (!err && !self._destroyed)
	        self.push(null);
	      return self._cleanup(err)
	    }

	    try {
	      value = self._makeData(key, value);
	    } catch (e) {
	      return self._cleanup(new EncodingError(e))
	    }
	    if (!self._destroyed)
	      self.push(value);
	  });
	};

	ReadStream.prototype._cleanup = function (err) {
	  if (this._destroyed)
	    return

	  this._destroyed = true;

	  var self = this;
	  if (err)
	    self.emit('error', err);

	  if (self._iterator) {
	    self._iterator.end(function () {
	      self._iterator = null;
	      self.emit('close');
	    });
	  } else {
	    self.emit('close');
	  }
	};

	ReadStream.prototype.destroy = function () {
	  this._cleanup();
	};

	ReadStream.prototype.toString = function () {
	  return 'LevelUP.ReadStream'
	};

	var readStream = ReadStream;

	var isarray$1 = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	var string_decoder$1 = createCommonjsModule(function (module, exports) {
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var Buffer = buffer.Buffer;

	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     };


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};


	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}
	});
	var string_decoder_1$1 = string_decoder$1.StringDecoder;

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var _stream_readable$1 = Readable$3;

	/*<replacement>*/

	/*</replacement>*/


	/*<replacement>*/
	var Buffer$5 = buffer.Buffer;
	/*</replacement>*/

	Readable$3.ReadableState = ReadableState$2;

	var EE$1 = events$1.EventEmitter;

	/*<replacement>*/
	if (!EE$1.listenerCount) EE$1.listenerCount = function(emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/



	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/

	var StringDecoder$2;

	util$2.inherits(Readable$3, Stream$1);

	function ReadableState$2(options, stream) {
	  options = options || {};

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.buffer = [];
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = false;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // In streams that never have any data, and do push(null) right away,
	  // the consumer can miss the 'end' event if they do some I/O before
	  // consuming the stream.  So, we don't emit('end') until some reading
	  // happens.
	  this.calledRead = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, becuase any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;


	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder$2)
	      StringDecoder$2 = string_decoder$1.StringDecoder;
	    this.decoder = new StringDecoder$2(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	function Readable$3(options) {
	  if (!(this instanceof Readable$3))
	    return new Readable$3(options);

	  this._readableState = new ReadableState$2(options, this);

	  // legacy
	  this.readable = true;

	  Stream$1.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable$3.prototype.push = function(chunk, encoding) {
	  var state = this._readableState;

	  if (typeof chunk === 'string' && !state.objectMode) {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = new Buffer$5(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk$2(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable$3.prototype.unshift = function(chunk) {
	  var state = this._readableState;
	  return readableAddChunk$2(this, state, chunk, '', true);
	};

	function readableAddChunk$2(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid$2(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (chunk === null || chunk === undefined) {
	    state.reading = false;
	    if (!state.ended)
	      onEofChunk$2(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var e = new Error('stream.unshift() after end event');
	      stream.emit('error', e);
	    } else {
	      if (state.decoder && !addToFront && !encoding)
	        chunk = state.decoder.write(chunk);

	      // update the buffer info.
	      state.length += state.objectMode ? 1 : chunk.length;
	      if (addToFront) {
	        state.buffer.unshift(chunk);
	      } else {
	        state.reading = false;
	        state.buffer.push(chunk);
	      }

	      if (state.needReadable)
	        emitReadable$2(stream);

	      maybeReadMore$2(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData$2(state);
	}



	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData$2(state) {
	  return !state.ended &&
	         (state.needReadable ||
	          state.length < state.highWaterMark ||
	          state.length === 0);
	}

	// backwards compatibility.
	Readable$3.prototype.setEncoding = function(enc) {
	  if (!StringDecoder$2)
	    StringDecoder$2 = string_decoder$1.StringDecoder;
	  this._readableState.decoder = new StringDecoder$2(enc);
	  this._readableState.encoding = enc;
	};

	// Don't raise the hwm > 128MB
	var MAX_HWM$2 = 0x800000;
	function roundUpToNextPowerOf2$1(n) {
	  if (n >= MAX_HWM$2) {
	    n = MAX_HWM$2;
	  } else {
	    // Get the next highest power of 2
	    n--;
	    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
	    n++;
	  }
	  return n;
	}

	function howMuchToRead$2(n, state) {
	  if (state.length === 0 && state.ended)
	    return 0;

	  if (state.objectMode)
	    return n === 0 ? 0 : 1;

	  if (n === null || isNaN(n)) {
	    // only flow one buffer at a time
	    if (state.flowing && state.buffer.length)
	      return state.buffer[0].length;
	    else
	      return state.length;
	  }

	  if (n <= 0)
	    return 0;

	  // If we're asking for more than the target buffer level,
	  // then raise the water mark.  Bump up to the next highest
	  // power of 2, to prevent increasing it excessively in tiny
	  // amounts.
	  if (n > state.highWaterMark)
	    state.highWaterMark = roundUpToNextPowerOf2$1(n);

	  // don't have that much.  return null, unless we've ended.
	  if (n > state.length) {
	    if (!state.ended) {
	      state.needReadable = true;
	      return 0;
	    } else
	      return state.length;
	  }

	  return n;
	}

	// you can override either this method, or the async _read(n) below.
	Readable$3.prototype.read = function(n) {
	  var state = this._readableState;
	  state.calledRead = true;
	  var nOrig = n;
	  var ret;

	  if (typeof n !== 'number' || n > 0)
	    state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 &&
	      state.needReadable &&
	      (state.length >= state.highWaterMark || state.ended)) {
	    emitReadable$2(this);
	    return null;
	  }

	  n = howMuchToRead$2(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    ret = null;

	    // In cases where the decoder did not receive enough data
	    // to produce a full chunk, then immediately received an
	    // EOF, state.buffer will contain [<Buffer >, <Buffer 00 ...>].
	    // howMuchToRead will see this and coerce the amount to
	    // read to zero (because it's looking at the length of the
	    // first <Buffer > in state.buffer), and we'll end up here.
	    //
	    // This can only happen via state.decoder -- no other venue
	    // exists for pushing a zero-length chunk into state.buffer
	    // and triggering this behavior. In this case, we return our
	    // remaining data and end the stream, if appropriate.
	    if (state.length > 0 && state.decoder) {
	      ret = fromList$2(n, state);
	      state.length -= ret.length;
	    }

	    if (state.length === 0)
	      endReadable$2(this);

	    return ret;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length - n <= state.highWaterMark)
	    doRead = true;

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading)
	    doRead = false;

	  if (doRead) {
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0)
	      state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	  }

	  // If _read called its callback synchronously, then `reading`
	  // will be false, and we need to re-evaluate how much data we
	  // can return to the user.
	  if (doRead && !state.reading)
	    n = howMuchToRead$2(nOrig, state);

	  if (n > 0)
	    ret = fromList$2(n, state);
	  else
	    ret = null;

	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  }

	  state.length -= n;

	  // If we have nothing in the buffer, then we want to know
	  // as soon as we *do* get something into the buffer.
	  if (state.length === 0 && !state.ended)
	    state.needReadable = true;

	  // If we happened to read() exactly the remaining amount in the
	  // buffer, and the EOF has been seen at this point, then make sure
	  // that we emit 'end' on the very next tick.
	  if (state.ended && !state.endEmitted && state.length === 0)
	    endReadable$2(this);

	  return ret;
	};

	function chunkInvalid$2(state, chunk) {
	  var er = null;
	  if (!Buffer$5.isBuffer(chunk) &&
	      'string' !== typeof chunk &&
	      chunk !== null &&
	      chunk !== undefined &&
	      !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}


	function onEofChunk$2(stream, state) {
	  if (state.decoder && !state.ended) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // if we've ended and we have some data left, then emit
	  // 'readable' now to make sure it gets picked up.
	  if (state.length > 0)
	    emitReadable$2(stream);
	  else
	    endReadable$2(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable$2(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (state.emittedReadable)
	    return;

	  state.emittedReadable = true;
	  if (state.sync)
	    process.nextTick(function() {
	      emitReadable_$2(stream);
	    });
	  else
	    emitReadable_$2(stream);
	}

	function emitReadable_$2(stream) {
	  stream.emit('readable');
	}


	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore$2(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    process.nextTick(function() {
	      maybeReadMore_$2(stream, state);
	    });
	  }
	}

	function maybeReadMore_$2(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended &&
	         state.length < state.highWaterMark) {
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;
	    else
	      len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable$3.prototype._read = function(n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable$3.prototype.pipe = function(dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
	              dest !== process.stdout &&
	              dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted)
	    process.nextTick(endFn);
	  else
	    src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    if (readable !== src) return;
	    cleanup();
	  }

	  function onend() {
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain$2(src);
	  dest.on('drain', ondrain);

	  function cleanup() {
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (!dest._writableState || dest._writableState.needDrain)
	      ondrain();
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EE$1.listenerCount(dest, 'error') === 0)
	      dest.emit('error', er);
	  }
	  // This is a brutally ugly hack to make sure that our error handler
	  // is attached before any userland ones.  NEVER DO THIS.
	  if (!dest._events || !dest._events.error)
	    dest.on('error', onerror);
	  else if (isarray$1(dest._events.error))
	    dest._events.error.unshift(onerror);
	  else
	    dest._events.error = [onerror, dest._events.error];



	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    // the handler that waits for readable events after all
	    // the data gets sucked out in flow.
	    // This would be easier to follow with a .once() handler
	    // in flow(), but that is too slow.
	    this.on('readable', pipeOnReadable$1);

	    state.flowing = true;
	    process.nextTick(function() {
	      flow$2(src);
	    });
	  }

	  return dest;
	};

	function pipeOnDrain$2(src) {
	  return function() {
	    var state = src._readableState;
	    state.awaitDrain--;
	    if (state.awaitDrain === 0)
	      flow$2(src);
	  };
	}

	function flow$2(src) {
	  var state = src._readableState;
	  var chunk;
	  state.awaitDrain = 0;

	  function write(dest, i, list) {
	    var written = dest.write(chunk);
	    if (false === written) {
	      state.awaitDrain++;
	    }
	  }

	  while (state.pipesCount && null !== (chunk = src.read())) {

	    if (state.pipesCount === 1)
	      write(state.pipes);
	    else
	      forEach$3(state.pipes, write);

	    src.emit('data', chunk);

	    // if anyone needs a drain, then we have to wait for that.
	    if (state.awaitDrain > 0)
	      return;
	  }

	  // if every destination was unpiped, either before entering this
	  // function, or in the while loop, then stop flowing.
	  //
	  // NB: This is a pretty rare edge case.
	  if (state.pipesCount === 0) {
	    state.flowing = false;

	    // if there were data event listeners added, then switch to old mode.
	    if (EE$1.listenerCount(src, 'data') > 0)
	      emitDataEvents$1(src);
	    return;
	  }

	  // at this point, no one needed a drain, so we just ran out of data
	  // on the next readable event, start it over again.
	  state.ranOut = true;
	}

	function pipeOnReadable$1() {
	  if (this._readableState.ranOut) {
	    this._readableState.ranOut = false;
	    flow$2(this);
	  }
	}


	Readable$3.prototype.unpipe = function(dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0)
	    return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes)
	      return this;

	    if (!dest)
	      dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    this.removeListener('readable', pipeOnReadable$1);
	    state.flowing = false;
	    if (dest)
	      dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    this.removeListener('readable', pipeOnReadable$1);
	    state.flowing = false;

	    for (var i = 0; i < len; i++)
	      dests[i].emit('unpipe', this);
	    return this;
	  }

	  // try to find the right one.
	  var i = indexOf$2(state.pipes, dest);
	  if (i === -1)
	    return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1)
	    state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable$3.prototype.on = function(ev, fn) {
	  var res = Stream$1.prototype.on.call(this, ev, fn);

	  if (ev === 'data' && !this._readableState.flowing)
	    emitDataEvents$1(this);

	  if (ev === 'readable' && this.readable) {
	    var state = this._readableState;
	    if (!state.readableListening) {
	      state.readableListening = true;
	      state.emittedReadable = false;
	      state.needReadable = true;
	      if (!state.reading) {
	        this.read(0);
	      } else if (state.length) {
	        emitReadable$2(this);
	      }
	    }
	  }

	  return res;
	};
	Readable$3.prototype.addListener = Readable$3.prototype.on;

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable$3.prototype.resume = function() {
	  emitDataEvents$1(this);
	  this.read(0);
	  this.emit('resume');
	};

	Readable$3.prototype.pause = function() {
	  emitDataEvents$1(this, true);
	  this.emit('pause');
	};

	function emitDataEvents$1(stream, startPaused) {
	  var state = stream._readableState;

	  if (state.flowing) {
	    // https://github.com/isaacs/readable-stream/issues/16
	    throw new Error('Cannot switch to old mode now.');
	  }

	  var paused = startPaused || false;
	  var readable = false;

	  // convert to an old-style stream.
	  stream.readable = true;
	  stream.pipe = Stream$1.prototype.pipe;
	  stream.on = stream.addListener = Stream$1.prototype.on;

	  stream.on('readable', function() {
	    readable = true;

	    var c;
	    while (!paused && (null !== (c = stream.read())))
	      stream.emit('data', c);

	    if (c === null) {
	      readable = false;
	      stream._readableState.needReadable = true;
	    }
	  });

	  stream.pause = function() {
	    paused = true;
	    this.emit('pause');
	  };

	  stream.resume = function() {
	    paused = false;
	    if (readable)
	      process.nextTick(function() {
	        stream.emit('readable');
	      });
	    else
	      this.read(0);
	    this.emit('resume');
	  };

	  // now make it start, just in case it hadn't already.
	  stream.emit('readable');
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable$3.prototype.wrap = function(stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function() {
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length)
	        self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function(chunk) {
	    if (state.decoder)
	      chunk = state.decoder.write(chunk);

	    // don't skip over falsy values in objectMode
	    //if (state.objectMode && util.isNullOrUndefined(chunk))
	    if (state.objectMode && (chunk === null || chunk === undefined))
	      return;
	    else if (!state.objectMode && (!chunk || !chunk.length))
	      return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (typeof stream[i] === 'function' &&
	        typeof this[i] === 'undefined') {
	      this[i] = function(method) { return function() {
	        return stream[method].apply(stream, arguments);
	      }}(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach$3(events, function(ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function(n) {
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};



	// exposed for testing purposes only.
	Readable$3._fromList = fromList$2;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	function fromList$2(n, state) {
	  var list = state.buffer;
	  var length = state.length;
	  var stringMode = !!state.decoder;
	  var objectMode = !!state.objectMode;
	  var ret;

	  // nothing in the list, definitely empty.
	  if (list.length === 0)
	    return null;

	  if (length === 0)
	    ret = null;
	  else if (objectMode)
	    ret = list.shift();
	  else if (!n || n >= length) {
	    // read it all, truncate the array.
	    if (stringMode)
	      ret = list.join('');
	    else
	      ret = Buffer$5.concat(list, length);
	    list.length = 0;
	  } else {
	    // read just some of it.
	    if (n < list[0].length) {
	      // just take a part of the first list item.
	      // slice is the same for buffers and strings.
	      var buf = list[0];
	      ret = buf.slice(0, n);
	      list[0] = buf.slice(n);
	    } else if (n === list[0].length) {
	      // first list is a perfect match
	      ret = list.shift();
	    } else {
	      // complex case.
	      // we have enough to cover it, but it spans past the first buffer.
	      if (stringMode)
	        ret = '';
	      else
	        ret = new Buffer$5(n);

	      var c = 0;
	      for (var i = 0, l = list.length; i < l && c < n; i++) {
	        var buf = list[0];
	        var cpy = Math.min(n - c, buf.length);

	        if (stringMode)
	          ret += buf.slice(0, cpy);
	        else
	          buf.copy(ret, c, 0, cpy);

	        if (cpy < buf.length)
	          list[0] = buf.slice(cpy);
	        else
	          list.shift();

	        c += cpy;
	      }
	    }
	  }

	  return ret;
	}

	function endReadable$2(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0)
	    throw new Error('endReadable called on non-empty stream');

	  if (!state.endEmitted && state.calledRead) {
	    state.ended = true;
	    process.nextTick(function() {
	      // Check that we didn't get one last unshift.
	      if (!state.endEmitted && state.length === 0) {
	        state.endEmitted = true;
	        stream.readable = false;
	        stream.emit('end');
	      }
	    });
	  }
	}

	function forEach$3 (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf$2 (xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	var _stream_duplex$1 = Duplex$2;

	/*<replacement>*/
	var objectKeys$2 = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	};
	/*</replacement>*/


	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/




	util$2.inherits(Duplex$2, _stream_readable$1);

	forEach$4(objectKeys$2(_stream_writable$1.prototype), function(method) {
	  if (!Duplex$2.prototype[method])
	    Duplex$2.prototype[method] = _stream_writable$1.prototype[method];
	});

	function Duplex$2(options) {
	  if (!(this instanceof Duplex$2))
	    return new Duplex$2(options);

	  _stream_readable$1.call(this, options);
	  _stream_writable$1.call(this, options);

	  if (options && options.readable === false)
	    this.readable = false;

	  if (options && options.writable === false)
	    this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false)
	    this.allowHalfOpen = false;

	  this.once('end', onend$2);
	}

	// the no-half-open enforcer
	function onend$2() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended)
	    return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  process.nextTick(this.end.bind(this));
	}

	function forEach$4 (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, cb), and it'll handle all
	// the drain event emission and buffering.

	var _stream_writable$1 = Writable$2;

	/*<replacement>*/
	var Buffer$6 = buffer.Buffer;
	/*</replacement>*/

	Writable$2.WritableState = WritableState$2;


	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/



	util$2.inherits(Writable$2, Stream$1);

	function WriteReq$2(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	}

	function WritableState$2(options, stream) {
	  options = options || {};

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, becuase any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function(er) {
	    onwrite$2(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.buffer = [];

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;
	}

	function Writable$2(options) {
	  var Duplex = _stream_duplex$1;

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable$2) && !(this instanceof Duplex))
	    return new Writable$2(options);

	  this._writableState = new WritableState$2(options, this);

	  // legacy.
	  this.writable = true;

	  Stream$1.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable$2.prototype.pipe = function() {
	  this.emit('error', new Error('Cannot pipe. Not readable.'));
	};


	function writeAfterEnd$2(stream, state, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  process.nextTick(function() {
	    cb(er);
	  });
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk$2(stream, state, chunk, cb) {
	  var valid = true;
	  if (!Buffer$6.isBuffer(chunk) &&
	      'string' !== typeof chunk &&
	      chunk !== null &&
	      chunk !== undefined &&
	      !state.objectMode) {
	    var er = new TypeError('Invalid non-string/buffer chunk');
	    stream.emit('error', er);
	    process.nextTick(function() {
	      cb(er);
	    });
	    valid = false;
	  }
	  return valid;
	}

	Writable$2.prototype.write = function(chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (Buffer$6.isBuffer(chunk))
	    encoding = 'buffer';
	  else if (!encoding)
	    encoding = state.defaultEncoding;

	  if (typeof cb !== 'function')
	    cb = function() {};

	  if (state.ended)
	    writeAfterEnd$2(this, state, cb);
	  else if (validChunk$2(this, state, chunk, cb))
	    ret = writeOrBuffer$2(this, state, chunk, encoding, cb);

	  return ret;
	};

	function decodeChunk$2(state, chunk, encoding) {
	  if (!state.objectMode &&
	      state.decodeStrings !== false &&
	      typeof chunk === 'string') {
	    chunk = new Buffer$6(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer$2(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk$2(state, chunk, encoding);
	  if (Buffer$6.isBuffer(chunk))
	    encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret)
	    state.needDrain = true;

	  if (state.writing)
	    state.buffer.push(new WriteReq$2(chunk, encoding, cb));
	  else
	    doWrite$2(stream, state, len, chunk, encoding, cb);

	  return ret;
	}

	function doWrite$2(stream, state, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError$2(stream, state, sync, er, cb) {
	  if (sync)
	    process.nextTick(function() {
	      cb(er);
	    });
	  else
	    cb(er);

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate$2(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite$2(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate$2(state);

	  if (er)
	    onwriteError$2(stream, state, sync, er, cb);
	  else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish$2(stream, state);

	    if (!finished && !state.bufferProcessing && state.buffer.length)
	      clearBuffer$2(stream, state);

	    if (sync) {
	      process.nextTick(function() {
	        afterWrite$2(stream, state, finished, cb);
	      });
	    } else {
	      afterWrite$2(stream, state, finished, cb);
	    }
	  }
	}

	function afterWrite$2(stream, state, finished, cb) {
	  if (!finished)
	    onwriteDrain$2(stream, state);
	  cb();
	  if (finished)
	    finishMaybe$2(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain$2(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}


	// if there's something in the buffer waiting, then process it
	function clearBuffer$2(stream, state) {
	  state.bufferProcessing = true;

	  for (var c = 0; c < state.buffer.length; c++) {
	    var entry = state.buffer[c];
	    var chunk = entry.chunk;
	    var encoding = entry.encoding;
	    var cb = entry.callback;
	    var len = state.objectMode ? 1 : chunk.length;

	    doWrite$2(stream, state, len, chunk, encoding, cb);

	    // if we didn't call the onwrite immediately, then
	    // it means that we need to wait until it does.
	    // also, that means that the chunk and cb are currently
	    // being processed, so move the buffer counter past them.
	    if (state.writing) {
	      c++;
	      break;
	    }
	  }

	  state.bufferProcessing = false;
	  if (c < state.buffer.length)
	    state.buffer = state.buffer.slice(c);
	  else
	    state.buffer.length = 0;
	}

	Writable$2.prototype._write = function(chunk, encoding, cb) {
	  cb(new Error('not implemented'));
	};

	Writable$2.prototype.end = function(chunk, encoding, cb) {
	  var state = this._writableState;

	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (typeof chunk !== 'undefined' && chunk !== null)
	    this.write(chunk, encoding);

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished)
	    endWritable$2(this, state, cb);
	};


	function needFinish$2(stream, state) {
	  return (state.ending &&
	          state.length === 0 &&
	          !state.finished &&
	          !state.writing);
	}

	function finishMaybe$2(stream, state) {
	  var need = needFinish$2(stream, state);
	  if (need) {
	    state.finished = true;
	    stream.emit('finish');
	  }
	  return need;
	}

	function endWritable$2(stream, state, cb) {
	  state.ending = true;
	  finishMaybe$2(stream, state);
	  if (cb) {
	    if (state.finished)
	      process.nextTick(cb);
	    else
	      stream.once('finish', cb);
	  }
	  state.ended = true;
	}

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.


	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	var _stream_transform$1 = Transform$2;



	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/

	util$2.inherits(Transform$2, _stream_duplex$1);


	function TransformState$2(options, stream) {
	  this.afterTransform = function(er, data) {
	    return afterTransform$2(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	}

	function afterTransform$2(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb)
	    return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (data !== null && data !== undefined)
	    stream.push(data);

	  if (cb)
	    cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}


	function Transform$2(options) {
	  if (!(this instanceof Transform$2))
	    return new Transform$2(options);

	  _stream_duplex$1.call(this, options);

	  var ts = this._transformState = new TransformState$2(options, this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  this.once('finish', function() {
	    if ('function' === typeof this._flush)
	      this._flush(function(er) {
	        done$2(stream, er);
	      });
	    else
	      done$2(stream);
	  });
	}

	Transform$2.prototype.push = function(chunk, encoding) {
	  this._transformState.needTransform = false;
	  return _stream_duplex$1.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform$2.prototype._transform = function(chunk, encoding, cb) {
	  throw new Error('not implemented');
	};

	Transform$2.prototype._write = function(chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform ||
	        rs.needReadable ||
	        rs.length < rs.highWaterMark)
	      this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform$2.prototype._read = function(n) {
	  var ts = this._transformState;

	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};


	function done$2(stream, er) {
	  if (er)
	    return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var rs = stream._readableState;
	  var ts = stream._transformState;

	  if (ws.length)
	    throw new Error('calling transform done when ws.length != 0');

	  if (ts.transforming)
	    throw new Error('calling transform done when still transforming');

	  return stream.push(null);
	}

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	var _stream_passthrough$1 = PassThrough$2;



	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/

	util$2.inherits(PassThrough$2, _stream_transform$1);

	function PassThrough$2(options) {
	  if (!(this instanceof PassThrough$2))
	    return new PassThrough$2(options);

	  _stream_transform$1.call(this, options);
	}

	PassThrough$2.prototype._transform = function(chunk, encoding, cb) {
	  cb(null, chunk);
	};

	var readable$1 = createCommonjsModule(function (module, exports) {
	// hack to fix a circular dependency issue when used with browserify
	exports = module.exports = _stream_readable$1;
	exports.Stream = Stream$1;
	exports.Readable = exports;
	exports.Writable = _stream_writable$1;
	exports.Duplex = _stream_duplex$1;
	exports.Transform = _stream_transform$1;
	exports.PassThrough = _stream_passthrough$1;
	if (!process.browser && process.env.READABLE_STREAM === 'disable') {
	  module.exports = Stream$1;
	}
	});
	var readable_1$1 = readable$1.Stream;
	var readable_2$1 = readable$1.Readable;
	var readable_3$1 = readable$1.Writable;
	var readable_4$1 = readable$1.Duplex;
	var readable_5$1 = readable$1.Transform;
	var readable_6$1 = readable$1.PassThrough;

	var DuplexStream = readable$1.Duplex;

	function BufferList$1 (callback) {
	  if (!(this instanceof BufferList$1))
	    return new BufferList$1(callback)

	  this._bufs  = [];
	  this.length = 0;

	  if (typeof callback == 'function') {
	    this._callback = callback;

	    var piper = function (err) {
	      if (this._callback) {
	        this._callback(err);
	        this._callback = null;
	      }
	    }.bind(this);

	    this.on('pipe', function (src) {
	      src.on('error', piper);
	    });
	    this.on('unpipe', function (src) {
	      src.removeListener('error', piper);
	    });
	  }
	  else if (Buffer.isBuffer(callback))
	    this.append(callback);
	  else if (Array.isArray(callback)) {
	    callback.forEach(function (b) {
	      Buffer.isBuffer(b) && this.append(b);
	    }.bind(this));
	  }

	  DuplexStream.call(this);
	}

	debugUtil.inherits(BufferList$1, DuplexStream);

	BufferList$1.prototype._offset = function (offset) {
	  var tot = 0, i = 0, _t;
	  for (; i < this._bufs.length; i++) {
	    _t = tot + this._bufs[i].length;
	    if (offset < _t)
	      return [ i, offset - tot ]
	    tot = _t;
	  }
	};

	BufferList$1.prototype.append = function (buf) {
	  this._bufs.push(Buffer.isBuffer(buf) ? buf : new Buffer(buf));
	  this.length += buf.length;
	  return this
	};

	BufferList$1.prototype._write = function (buf, encoding, callback) {
	  this.append(buf);
	  if (callback)
	    callback();
	};

	BufferList$1.prototype._read = function (size) {
	  if (!this.length)
	    return this.push(null)
	  size = Math.min(size, this.length);
	  this.push(this.slice(0, size));
	  this.consume(size);
	};

	BufferList$1.prototype.end = function (chunk) {
	  DuplexStream.prototype.end.call(this, chunk);

	  if (this._callback) {
	    this._callback(null, this.slice());
	    this._callback = null;
	  }
	};

	BufferList$1.prototype.get = function (index) {
	  return this.slice(index, index + 1)[0]
	};

	BufferList$1.prototype.slice = function (start, end) {
	  return this.copy(null, 0, start, end)
	};

	BufferList$1.prototype.copy = function (dst, dstStart, srcStart, srcEnd) {
	  if (typeof srcStart != 'number' || srcStart < 0)
	    srcStart = 0;
	  if (typeof srcEnd != 'number' || srcEnd > this.length)
	    srcEnd = this.length;
	  if (srcStart >= this.length)
	    return dst || new Buffer(0)
	  if (srcEnd <= 0)
	    return dst || new Buffer(0)

	  var copy   = !!dst
	    , off    = this._offset(srcStart)
	    , len    = srcEnd - srcStart
	    , bytes  = len
	    , bufoff = (copy && dstStart) || 0
	    , start  = off[1]
	    , l
	    , i;

	  // copy/slice everything
	  if (srcStart === 0 && srcEnd == this.length) {
	    if (!copy) // slice, just return a full concat
	      return Buffer.concat(this._bufs)

	    // copy, need to copy individual buffers
	    for (i = 0; i < this._bufs.length; i++) {
	      this._bufs[i].copy(dst, bufoff);
	      bufoff += this._bufs[i].length;
	    }

	    return dst
	  }

	  // easy, cheap case where it's a subset of one of the buffers
	  if (bytes <= this._bufs[off[0]].length - start) {
	    return copy
	      ? this._bufs[off[0]].copy(dst, dstStart, start, start + bytes)
	      : this._bufs[off[0]].slice(start, start + bytes)
	  }

	  if (!copy) // a slice, we need something to copy in to
	    dst = new Buffer(len);

	  for (i = off[0]; i < this._bufs.length; i++) {
	    l = this._bufs[i].length - start;

	    if (bytes > l) {
	      this._bufs[i].copy(dst, bufoff, start);
	    } else {
	      this._bufs[i].copy(dst, bufoff, start, start + bytes);
	      break
	    }

	    bufoff += l;
	    bytes -= l;

	    if (start)
	      start = 0;
	  }

	  return dst
	};

	BufferList$1.prototype.toString = function (encoding, start, end) {
	  return this.slice(start, end).toString(encoding)
	};

	BufferList$1.prototype.consume = function (bytes) {
	  while (this._bufs.length) {
	    if (bytes > this._bufs[0].length) {
	      bytes -= this._bufs[0].length;
	      this.length -= this._bufs[0].length;
	      this._bufs.shift();
	    } else {
	      this._bufs[0] = this._bufs[0].slice(bytes);
	      this.length -= bytes;
	      break
	    }
	  }
	  return this
	};

	BufferList$1.prototype.duplicate = function () {
	  var i = 0
	    , copy = new BufferList$1();

	  for (; i < this._bufs.length; i++)
	    copy.append(this._bufs[i]);

	  return copy
	};

	BufferList$1.prototype.destroy = function () {
	  this._bufs.length = 0;
	  this.length = 0;
	  this.push(null);
	}

	;(function () {
	  var methods = {
	      'readDoubleBE' : 8
	    , 'readDoubleLE' : 8
	    , 'readFloatBE'  : 4
	    , 'readFloatLE'  : 4
	    , 'readInt32BE'  : 4
	    , 'readInt32LE'  : 4
	    , 'readUInt32BE' : 4
	    , 'readUInt32LE' : 4
	    , 'readInt16BE'  : 2
	    , 'readInt16LE'  : 2
	    , 'readUInt16BE' : 2
	    , 'readUInt16LE' : 2
	    , 'readInt8'     : 1
	    , 'readUInt8'    : 1
	  };

	  for (var m in methods) {
	    (function (m) {
	      BufferList$1.prototype[m] = function (offset) {
	        return this.slice(offset, offset + methods[m])[m](0)
	      };
	    }(m));
	  }
	}());

	var bl = BufferList$1;

	/* Copyright (c) 2012-2014 LevelUP contributors
	 * See list at <https://github.com/rvagg/node-levelup#contributing>
	 * MIT License
	 * <https://github.com/rvagg/node-levelup/blob/master/LICENSE.md>
	 */

	var Stream$2       = Stream$1.Stream
	  , inherits$4     = debugUtil.inherits

	  , setImmediate$1 = commonjsGlobal.setImmediate || process.nextTick

	  , getOptions$1   = util$3.getOptions

	  , defaultOptions$2 = { type: 'put' };

	function WriteStream (options, db) {
	  if (!(this instanceof WriteStream))
	    return new WriteStream(options, db)

	  Stream$2.call(this);
	  this._options = xtend$2(defaultOptions$2, getOptions$1(db, options));
	  this._db      = db;
	  this._buffer  = [];
	  this._status  = 'init';
	  this._end     = false;
	  this.writable = true;
	  this.readable = false;

	  var self = this
	    , ready = function () {
	        if (!self.writable)
	          return
	        self._status = 'ready';
	        self.emit('ready');
	        self._process();
	      };

	  if (db.isOpen())
	    setImmediate$1(ready);
	  else
	    db.once('ready', ready);
	}

	inherits$4(WriteStream, Stream$2);

	WriteStream.prototype.write = function (data) {
	  if (!this.writable)
	    return false
	  this._buffer.push(data);
	  if (this._status != 'init')
	    this._processDelayed();
	  if (this._options.maxBufferLength &&
	      this._buffer.length > this._options.maxBufferLength) {
	    this._writeBlock = true;
	    return false
	  }
	  return true
	};

	WriteStream.prototype.end = function (data) {
	  var self = this;
	  if (data)
	    this.write(data);
	  setImmediate$1(function () {
	    self._end = true;
	    self._process();
	  });
	};

	WriteStream.prototype.destroy = function () {
	  this.writable = false;
	  this.end();
	};

	WriteStream.prototype.destroySoon = function () {
	  this.end();
	};

	WriteStream.prototype.add = function (entry) {
	  if (!entry.props)
	    return
	  if (entry.props.Directory)
	    entry.pipe(this._db.writeStream(this._options));
	  else if (entry.props.File || entry.File || entry.type == 'File')
	    this._write(entry);
	  return true
	};

	WriteStream.prototype._processDelayed = function () {
	  var self = this;
	  setImmediate$1(function () {
	    self._process();
	  });
	};

	WriteStream.prototype._process = function () {
	  var buffer
	    , self = this

	    , cb = function (err) {
	        if (!self.writable)
	          return
	        if (self._status != 'closed')
	          self._status = 'ready';
	        if (err) {
	          self.writable = false;
	          return self.emit('error', err)
	        }
	        self._process();
	      };

	  if (self._status != 'ready' && self.writable) {
	    if (self._buffer.length && self._status != 'closed')
	      self._processDelayed();
	    return
	  }

	  if (self._buffer.length && self.writable) {
	    self._status = 'writing';
	    buffer       = self._buffer;
	    self._buffer = [];

	    self._db.batch(buffer.map(function (d) {
	      return {
	          type          : d.type || self._options.type
	        , key           : d.key
	        , value         : d.value
	        , keyEncoding   : d.keyEncoding || self._options.keyEncoding
	        , valueEncoding : d.valueEncoding
	            || d.encoding
	            || self._options.valueEncoding
	      }
	    }), cb);

	    if (self._writeBlock) {
	      self._writeBlock = false;
	      self.emit('drain');
	    }

	    // don't allow close until callback has returned
	    return
	  }

	  if (self._end && self._status != 'closed') {
	    self._status  = 'closed';
	    self.writable = false;
	    self.emit('close');
	  }
	};

	WriteStream.prototype._write = function (entry) {
	  var key = entry.path || entry.props.path
	    , self = this;

	  if (!key)
	    return

	  entry.pipe(bl(function (err, data) {
	    if (err) {
	      self.writable = false;
	      return self.emit('error', err)
	    }

	    if (self._options.fstreamRoot &&
	        key.indexOf(self._options.fstreamRoot) > -1)
	      key = key.substr(self._options.fstreamRoot.length + 1);

	    self.write({ key: key, value: data.slice(0) });
	  }));
	};

	WriteStream.prototype.toString = function () {
	  return 'LevelUP.WriteStream'
	};

	var writeStream = WriteStream;

	/* Copyright (c) 2012-2014 LevelUP contributors
	 * See list at <https://github.com/rvagg/node-levelup#contributing>
	 * MIT License
	 * <https://github.com/rvagg/node-levelup/blob/master/LICENSE.md>
	 */

	var WriteError    = errors.WriteError

	  , getOptions$2    = util$3.getOptions
	  , dispatchError$1 = util$3.dispatchError;

	function Batch (levelup) {
	  this._levelup = levelup;
	  this.batch = levelup.db.batch();
	  this.ops = [];
	}

	Batch.prototype.put = function (key_, value_, options) {
	  options = getOptions$2(this._levelup, options);

	  var key   = util$3.encodeKey(key_, options)
	    , value = util$3.encodeValue(value_, options);

	  try {
	    this.batch.put(key, value);
	  } catch (e) {
	    throw new WriteError(e)
	  }
	  this.ops.push({ type : 'put', key : key, value : value });

	  return this
	};

	Batch.prototype.del = function (key_, options) {
	  options = getOptions$2(this._levelup, options);

	  var key = util$3.encodeKey(key_, options);

	  try {
	    this.batch.del(key);
	  } catch (err) {
	    throw new WriteError(err)
	  }
	  this.ops.push({ type : 'del', key : key });

	  return this
	};

	Batch.prototype.clear = function () {
	  try {
	    this.batch.clear();
	  } catch (err) {
	    throw new WriteError(err)
	  }

	  this.ops = [];
	  return this
	};

	Batch.prototype.write = function (callback) {
	  var levelup = this._levelup
	    , ops     = this.ops;

	  try {
	    this.batch.write(function (err) {
	      if (err)
	        return dispatchError$1(levelup, new WriteError(err), callback)
	      levelup.emit('batch', ops);
	      if (callback)
	        callback();
	    });
	  } catch (err) {
	    throw new WriteError(err)
	  }
	};

	var batch = Batch;

	/* Copyright (c) 2012-2014 LevelUP contributors
	 * See list at <https://github.com/rvagg/node-levelup#contributing>
	 * MIT License
	 * <https://github.com/rvagg/node-levelup/blob/master/LICENSE.md>
	 */

	var EventEmitter$1   = events$1.EventEmitter
	  , inherits$5       = debugUtil.inherits

	  , WriteError$1     = errors.WriteError
	  , ReadError      = errors.ReadError
	  , NotFoundError$1  = errors.NotFoundError
	  , OpenError      = errors.OpenError
	  , EncodingError$1  = errors.EncodingError
	  , InitializationError = errors.InitializationError

	  , getOptions$3     = util$3.getOptions
	  , defaultOptions$3 = util$3.defaultOptions
	  , getLevelDOWN$1   = util$3.getLevelDOWN
	  , dispatchError$2  = util$3.dispatchError;

	function getCallback (options, callback) {
	  return typeof options == 'function' ? options : callback
	}

	// Possible LevelUP#_status values:
	//  - 'new'     - newly created, not opened or closed
	//  - 'opening' - waiting for the database to be opened, post open()
	//  - 'open'    - successfully opened the database, available for use
	//  - 'closing' - waiting for the database to be closed, post close()
	//  - 'closed'  - database has been successfully closed, should not be
	//                 used except for another open() operation

	function LevelUP (location, options, callback) {
	  if (!(this instanceof LevelUP))
	    return new LevelUP(location, options, callback)

	  var error;

	  EventEmitter$1.call(this);
	  this.setMaxListeners(Infinity);

	  if (typeof location == 'function') {
	    options = typeof options == 'object' ? options : {};
	    options.db = location;
	    location = null;
	  } else if (typeof location == 'object' && typeof location.db == 'function') {
	    options = location;
	    location = null;
	  }

	  if (typeof options == 'function') {
	    callback = options;
	    options  = {};
	  }

	  if ((!options || typeof options.db != 'function') && typeof location != 'string') {
	    error = new InitializationError(
	        'Must provide a location for the database');
	    if (callback) {
	      return process.nextTick(function () {
	        callback(error);
	      })
	    }
	    throw error
	  }

	  options      = getOptions$3(this, options);
	  this.options = xtend$2(defaultOptions$3, options);
	  this._status = 'new';
	  // set this.location as enumerable but not configurable or writable
	  prr(this, 'location', location, 'e');

	  this.open(callback);
	}

	inherits$5(LevelUP, EventEmitter$1);

	LevelUP.prototype.open = function (callback) {
	  var self = this
	    , dbFactory
	    , db;

	  if (this.isOpen()) {
	    if (callback)
	      process.nextTick(function () { callback(null, self); });
	    return this
	  }

	  if (this._isOpening()) {
	    return callback && this.once(
	        'open'
	      , function () { callback(null, self); }
	    )
	  }

	  this.emit('opening');

	  this._status = 'opening';
	  this.db      = new deferredLeveldown(this.location);
	  dbFactory    = this.options.db || getLevelDOWN$1();
	  db           = dbFactory(this.location);

	  db.open(this.options, function (err) {
	    if (err) {
	      return dispatchError$2(self, new OpenError(err), callback)
	    } else {
	      self.db.setDb(db);
	      self.db = db;
	      self._status = 'open';
	      if (callback)
	        callback(null, self);
	      self.emit('open');
	      self.emit('ready');
	    }
	  });
	};

	LevelUP.prototype.close = function (callback) {
	  var self = this;

	  if (this.isOpen()) {
	    this._status = 'closing';
	    this.db.close(function () {
	      self._status = 'closed';
	      self.emit('closed');
	      if (callback)
	        callback.apply(null, arguments);
	    });
	    this.emit('closing');
	    this.db = null;
	  } else if (this._status == 'closed' && callback) {
	    return process.nextTick(callback)
	  } else if (this._status == 'closing' && callback) {
	    this.once('closed', callback);
	  } else if (this._isOpening()) {
	    this.once('open', function () {
	      self.close(callback);
	    });
	  }
	};

	LevelUP.prototype.isOpen = function () {
	  return this._status == 'open'
	};

	LevelUP.prototype._isOpening = function () {
	  return this._status == 'opening'
	};

	LevelUP.prototype.isClosed = function () {
	  return (/^clos/).test(this._status)
	};

	LevelUP.prototype.get = function (key_, options, callback) {
	  var self = this
	    , key;

	  callback = getCallback(options, callback);

	  if (typeof callback != 'function') {
	    return dispatchError$2(
	        this
	      , new ReadError('get() requires key and callback arguments')
	    )
	  }

	  if (!this._isOpening() && !this.isOpen()) {
	    return dispatchError$2(
	        this
	      , new ReadError('Database is not open')
	      , callback
	    )
	  }

	  options = util$3.getOptions(this, options);
	  key = util$3.encodeKey(key_, options);

	  options.asBuffer = util$3.isValueAsBuffer(options);

	  this.db.get(key, options, function (err, value) {
	    if (err) {
	      if ((/notfound/i).test(err)) {
	        err = new NotFoundError$1(
	            'Key not found in database [' + key_ + ']', err);
	      } else {
	        err = new ReadError(err);
	      }
	      return dispatchError$2(self, err, callback)
	    }
	    if (callback) {
	      try {
	        value = util$3.decodeValue(value, options);
	      } catch (e) {
	        return callback(new EncodingError$1(e))
	      }
	      callback(null, value);
	    }
	  });
	};

	LevelUP.prototype.put = function (key_, value_, options, callback) {
	  var self = this
	    , key
	    , value;

	  callback = getCallback(options, callback);

	  if (key_ === null || key_ === undefined
	        || value_ === null || value_ === undefined) {
	    return dispatchError$2(
	        this
	       , new WriteError$1('put() requires key and value arguments')
	       , callback
	    )
	  }

	  if (!this._isOpening() && !this.isOpen()) {
	    return dispatchError$2(
	        this
	      , new WriteError$1('Database is not open')
	      , callback
	    )
	  }

	  options = getOptions$3(this, options);
	  key     = util$3.encodeKey(key_, options);
	  value   = util$3.encodeValue(value_, options);

	  this.db.put(key, value, options, function (err) {
	    if (err) {
	      return dispatchError$2(self, new WriteError$1(err), callback)
	    } else {
	      self.emit('put', key_, value_);
	      if (callback)
	        callback();
	    }
	  });
	};

	LevelUP.prototype.del = function (key_, options, callback) {
	  var self = this
	    , key;

	  callback = getCallback(options, callback);

	  if (key_ === null || key_ === undefined) {
	    return dispatchError$2(
	        this
	      , new WriteError$1('del() requires a key argument')
	      , callback
	    )
	  }

	  if (!this._isOpening() && !this.isOpen()) {
	    return dispatchError$2(
	        this
	      , new WriteError$1('Database is not open')
	      , callback
	    )
	  }

	  options = getOptions$3(this, options);
	  key     = util$3.encodeKey(key_, options);

	  this.db.del(key, options, function (err) {
	    if (err) {
	      return dispatchError$2(self, new WriteError$1(err), callback)
	    } else {
	      self.emit('del', key_);
	      if (callback)
	        callback();
	    }
	  });
	};

	LevelUP.prototype.batch = function (arr_, options, callback) {
	  var self = this
	    , keyEnc
	    , valueEnc
	    , arr;

	  if (!arguments.length)
	    return new batch(this)

	  callback = getCallback(options, callback);

	  if (!Array.isArray(arr_)) {
	    return dispatchError$2(
	        this
	      , new WriteError$1('batch() requires an array argument')
	      , callback
	    )
	  }

	  if (!this._isOpening() && !this.isOpen()) {
	    return dispatchError$2(
	        this
	      , new WriteError$1('Database is not open')
	      , callback
	    )
	  }

	  options  = getOptions$3(this, options);
	  keyEnc   = options.keyEncoding;
	  valueEnc = options.valueEncoding;

	  arr = arr_.map(function (e) {
	    if (e.type === undefined || e.key === undefined)
	      return {}

	    // inherit encoding
	    var kEnc = e.keyEncoding || keyEnc
	      , vEnc = e.valueEncoding || e.encoding || valueEnc
	      , o;

	    // If we're not dealing with plain utf8 strings or plain
	    // Buffers then we have to do some work on the array to
	    // encode the keys and/or values. This includes JSON types.

	    if (kEnc != 'utf8' && kEnc != 'binary'
	        || vEnc != 'utf8' && vEnc != 'binary') {
	      o = {
	          type: e.type
	        , key: util$3.encodeKey(e.key, options, e)
	      };

	      if (e.value !== undefined)
	        o.value = util$3.encodeValue(e.value, options, e);

	      return o
	    } else {
	      return e
	    }
	  });

	  this.db.batch(arr, options, function (err) {
	    if (err) {
	      return dispatchError$2(self, new WriteError$1(err), callback)
	    } else {
	      self.emit('batch', arr_);
	      if (callback)
	        callback();
	    }
	  });
	};

	// DEPRECATED: prefer accessing LevelDOWN for this: db.db.approximateSize()
	LevelUP.prototype.approximateSize = function (start_, end_, callback) {
	  var self = this
	    , start
	    , end;

	  if (start_ === null || start_ === undefined
	        || end_ === null || end_ === undefined
	        || typeof callback != 'function') {
	    return dispatchError$2(
	        this
	      , new ReadError('approximateSize() requires start, end and callback arguments')
	      , callback
	    )
	  }

	  start = util$3.encodeKey(start_, this.options);
	  end   = util$3.encodeKey(end_, this.options);

	  if (!this._isOpening() && !this.isOpen()) {
	    return dispatchError$2(
	        this
	      , new WriteError$1('Database is not open')
	      , callback
	    )
	  }

	  this.db.approximateSize(start, end, function (err, size) {
	    if (err) {
	      return dispatchError$2(self, new OpenError(err), callback)
	    } else if (callback) {
	      callback(null, size);
	    }
	  });
	};

	LevelUP.prototype.readStream =
	LevelUP.prototype.createReadStream = function (options) {
	  var self = this;
	  options = xtend$2(this.options, options);
	  return new readStream(
	      options
	    , this
	    , function (options) {
	        return self.db.iterator(options)
	      }
	  )
	};

	LevelUP.prototype.keyStream =
	LevelUP.prototype.createKeyStream = function (options) {
	  return this.createReadStream(xtend$2(options, { keys: true, values: false }))
	};

	LevelUP.prototype.valueStream =
	LevelUP.prototype.createValueStream = function (options) {
	  return this.createReadStream(xtend$2(options, { keys: false, values: true }))
	};

	LevelUP.prototype.writeStream =
	LevelUP.prototype.createWriteStream = function (options) {
	  return new writeStream(xtend$2(options), this)
	};

	LevelUP.prototype.toString = function () {
	  return 'LevelUP'
	};

	function utilStatic (name) {
	  return function (location, callback) {
	    getLevelDOWN$1()[name](location, callback || function () {});
	  }
	}

	var levelup         = LevelUP;
	var copy$1    = util$3.copy;
	// DEPRECATED: prefer accessing LevelDOWN for this: require('leveldown').destroy()
	var destroy = utilStatic('destroy');
	// DEPRECATED: prefer accessing LevelDOWN for this: require('leveldown').repair()
	var repair  = utilStatic('repair');
	levelup.copy = copy$1;
	levelup.destroy = destroy;
	levelup.repair = repair;

	var isarray$2 = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	var string_decoder$2 = createCommonjsModule(function (module, exports) {
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var Buffer = buffer.Buffer;

	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     };


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};


	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}
	});
	var string_decoder_1$2 = string_decoder$2.StringDecoder;

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var _stream_readable$2 = Readable$4;

	/*<replacement>*/

	/*</replacement>*/


	/*<replacement>*/
	var Buffer$7 = buffer.Buffer;
	/*</replacement>*/

	Readable$4.ReadableState = ReadableState$3;

	var EE$2 = events$1.EventEmitter;

	/*<replacement>*/
	if (!EE$2.listenerCount) EE$2.listenerCount = function(emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/



	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/

	var StringDecoder$3;

	util$2.inherits(Readable$4, Stream$1);

	function ReadableState$3(options, stream) {
	  options = options || {};

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.buffer = [];
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = false;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // In streams that never have any data, and do push(null) right away,
	  // the consumer can miss the 'end' event if they do some I/O before
	  // consuming the stream.  So, we don't emit('end') until some reading
	  // happens.
	  this.calledRead = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, becuase any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;


	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder$3)
	      StringDecoder$3 = string_decoder$2.StringDecoder;
	    this.decoder = new StringDecoder$3(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	function Readable$4(options) {
	  if (!(this instanceof Readable$4))
	    return new Readable$4(options);

	  this._readableState = new ReadableState$3(options, this);

	  // legacy
	  this.readable = true;

	  Stream$1.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable$4.prototype.push = function(chunk, encoding) {
	  var state = this._readableState;

	  if (typeof chunk === 'string' && !state.objectMode) {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = new Buffer$7(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk$3(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable$4.prototype.unshift = function(chunk) {
	  var state = this._readableState;
	  return readableAddChunk$3(this, state, chunk, '', true);
	};

	function readableAddChunk$3(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid$3(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (chunk === null || chunk === undefined) {
	    state.reading = false;
	    if (!state.ended)
	      onEofChunk$3(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var e = new Error('stream.unshift() after end event');
	      stream.emit('error', e);
	    } else {
	      if (state.decoder && !addToFront && !encoding)
	        chunk = state.decoder.write(chunk);

	      // update the buffer info.
	      state.length += state.objectMode ? 1 : chunk.length;
	      if (addToFront) {
	        state.buffer.unshift(chunk);
	      } else {
	        state.reading = false;
	        state.buffer.push(chunk);
	      }

	      if (state.needReadable)
	        emitReadable$3(stream);

	      maybeReadMore$3(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData$3(state);
	}



	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData$3(state) {
	  return !state.ended &&
	         (state.needReadable ||
	          state.length < state.highWaterMark ||
	          state.length === 0);
	}

	// backwards compatibility.
	Readable$4.prototype.setEncoding = function(enc) {
	  if (!StringDecoder$3)
	    StringDecoder$3 = string_decoder$2.StringDecoder;
	  this._readableState.decoder = new StringDecoder$3(enc);
	  this._readableState.encoding = enc;
	};

	// Don't raise the hwm > 128MB
	var MAX_HWM$3 = 0x800000;
	function roundUpToNextPowerOf2$2(n) {
	  if (n >= MAX_HWM$3) {
	    n = MAX_HWM$3;
	  } else {
	    // Get the next highest power of 2
	    n--;
	    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
	    n++;
	  }
	  return n;
	}

	function howMuchToRead$3(n, state) {
	  if (state.length === 0 && state.ended)
	    return 0;

	  if (state.objectMode)
	    return n === 0 ? 0 : 1;

	  if (n === null || isNaN(n)) {
	    // only flow one buffer at a time
	    if (state.flowing && state.buffer.length)
	      return state.buffer[0].length;
	    else
	      return state.length;
	  }

	  if (n <= 0)
	    return 0;

	  // If we're asking for more than the target buffer level,
	  // then raise the water mark.  Bump up to the next highest
	  // power of 2, to prevent increasing it excessively in tiny
	  // amounts.
	  if (n > state.highWaterMark)
	    state.highWaterMark = roundUpToNextPowerOf2$2(n);

	  // don't have that much.  return null, unless we've ended.
	  if (n > state.length) {
	    if (!state.ended) {
	      state.needReadable = true;
	      return 0;
	    } else
	      return state.length;
	  }

	  return n;
	}

	// you can override either this method, or the async _read(n) below.
	Readable$4.prototype.read = function(n) {
	  var state = this._readableState;
	  state.calledRead = true;
	  var nOrig = n;
	  var ret;

	  if (typeof n !== 'number' || n > 0)
	    state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 &&
	      state.needReadable &&
	      (state.length >= state.highWaterMark || state.ended)) {
	    emitReadable$3(this);
	    return null;
	  }

	  n = howMuchToRead$3(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    ret = null;

	    // In cases where the decoder did not receive enough data
	    // to produce a full chunk, then immediately received an
	    // EOF, state.buffer will contain [<Buffer >, <Buffer 00 ...>].
	    // howMuchToRead will see this and coerce the amount to
	    // read to zero (because it's looking at the length of the
	    // first <Buffer > in state.buffer), and we'll end up here.
	    //
	    // This can only happen via state.decoder -- no other venue
	    // exists for pushing a zero-length chunk into state.buffer
	    // and triggering this behavior. In this case, we return our
	    // remaining data and end the stream, if appropriate.
	    if (state.length > 0 && state.decoder) {
	      ret = fromList$3(n, state);
	      state.length -= ret.length;
	    }

	    if (state.length === 0)
	      endReadable$3(this);

	    return ret;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length - n <= state.highWaterMark)
	    doRead = true;

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading)
	    doRead = false;

	  if (doRead) {
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0)
	      state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	  }

	  // If _read called its callback synchronously, then `reading`
	  // will be false, and we need to re-evaluate how much data we
	  // can return to the user.
	  if (doRead && !state.reading)
	    n = howMuchToRead$3(nOrig, state);

	  if (n > 0)
	    ret = fromList$3(n, state);
	  else
	    ret = null;

	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  }

	  state.length -= n;

	  // If we have nothing in the buffer, then we want to know
	  // as soon as we *do* get something into the buffer.
	  if (state.length === 0 && !state.ended)
	    state.needReadable = true;

	  // If we happened to read() exactly the remaining amount in the
	  // buffer, and the EOF has been seen at this point, then make sure
	  // that we emit 'end' on the very next tick.
	  if (state.ended && !state.endEmitted && state.length === 0)
	    endReadable$3(this);

	  return ret;
	};

	function chunkInvalid$3(state, chunk) {
	  var er = null;
	  if (!Buffer$7.isBuffer(chunk) &&
	      'string' !== typeof chunk &&
	      chunk !== null &&
	      chunk !== undefined &&
	      !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}


	function onEofChunk$3(stream, state) {
	  if (state.decoder && !state.ended) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // if we've ended and we have some data left, then emit
	  // 'readable' now to make sure it gets picked up.
	  if (state.length > 0)
	    emitReadable$3(stream);
	  else
	    endReadable$3(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable$3(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (state.emittedReadable)
	    return;

	  state.emittedReadable = true;
	  if (state.sync)
	    process.nextTick(function() {
	      emitReadable_$3(stream);
	    });
	  else
	    emitReadable_$3(stream);
	}

	function emitReadable_$3(stream) {
	  stream.emit('readable');
	}


	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore$3(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    process.nextTick(function() {
	      maybeReadMore_$3(stream, state);
	    });
	  }
	}

	function maybeReadMore_$3(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended &&
	         state.length < state.highWaterMark) {
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;
	    else
	      len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable$4.prototype._read = function(n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable$4.prototype.pipe = function(dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
	              dest !== process.stdout &&
	              dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted)
	    process.nextTick(endFn);
	  else
	    src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    if (readable !== src) return;
	    cleanup();
	  }

	  function onend() {
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain$3(src);
	  dest.on('drain', ondrain);

	  function cleanup() {
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (!dest._writableState || dest._writableState.needDrain)
	      ondrain();
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EE$2.listenerCount(dest, 'error') === 0)
	      dest.emit('error', er);
	  }
	  // This is a brutally ugly hack to make sure that our error handler
	  // is attached before any userland ones.  NEVER DO THIS.
	  if (!dest._events || !dest._events.error)
	    dest.on('error', onerror);
	  else if (isarray$2(dest._events.error))
	    dest._events.error.unshift(onerror);
	  else
	    dest._events.error = [onerror, dest._events.error];



	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    // the handler that waits for readable events after all
	    // the data gets sucked out in flow.
	    // This would be easier to follow with a .once() handler
	    // in flow(), but that is too slow.
	    this.on('readable', pipeOnReadable$2);

	    state.flowing = true;
	    process.nextTick(function() {
	      flow$3(src);
	    });
	  }

	  return dest;
	};

	function pipeOnDrain$3(src) {
	  return function() {
	    var state = src._readableState;
	    state.awaitDrain--;
	    if (state.awaitDrain === 0)
	      flow$3(src);
	  };
	}

	function flow$3(src) {
	  var state = src._readableState;
	  var chunk;
	  state.awaitDrain = 0;

	  function write(dest, i, list) {
	    var written = dest.write(chunk);
	    if (false === written) {
	      state.awaitDrain++;
	    }
	  }

	  while (state.pipesCount && null !== (chunk = src.read())) {

	    if (state.pipesCount === 1)
	      write(state.pipes);
	    else
	      forEach$5(state.pipes, write);

	    src.emit('data', chunk);

	    // if anyone needs a drain, then we have to wait for that.
	    if (state.awaitDrain > 0)
	      return;
	  }

	  // if every destination was unpiped, either before entering this
	  // function, or in the while loop, then stop flowing.
	  //
	  // NB: This is a pretty rare edge case.
	  if (state.pipesCount === 0) {
	    state.flowing = false;

	    // if there were data event listeners added, then switch to old mode.
	    if (EE$2.listenerCount(src, 'data') > 0)
	      emitDataEvents$2(src);
	    return;
	  }

	  // at this point, no one needed a drain, so we just ran out of data
	  // on the next readable event, start it over again.
	  state.ranOut = true;
	}

	function pipeOnReadable$2() {
	  if (this._readableState.ranOut) {
	    this._readableState.ranOut = false;
	    flow$3(this);
	  }
	}


	Readable$4.prototype.unpipe = function(dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0)
	    return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes)
	      return this;

	    if (!dest)
	      dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    this.removeListener('readable', pipeOnReadable$2);
	    state.flowing = false;
	    if (dest)
	      dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    this.removeListener('readable', pipeOnReadable$2);
	    state.flowing = false;

	    for (var i = 0; i < len; i++)
	      dests[i].emit('unpipe', this);
	    return this;
	  }

	  // try to find the right one.
	  var i = indexOf$3(state.pipes, dest);
	  if (i === -1)
	    return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1)
	    state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable$4.prototype.on = function(ev, fn) {
	  var res = Stream$1.prototype.on.call(this, ev, fn);

	  if (ev === 'data' && !this._readableState.flowing)
	    emitDataEvents$2(this);

	  if (ev === 'readable' && this.readable) {
	    var state = this._readableState;
	    if (!state.readableListening) {
	      state.readableListening = true;
	      state.emittedReadable = false;
	      state.needReadable = true;
	      if (!state.reading) {
	        this.read(0);
	      } else if (state.length) {
	        emitReadable$3(this);
	      }
	    }
	  }

	  return res;
	};
	Readable$4.prototype.addListener = Readable$4.prototype.on;

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable$4.prototype.resume = function() {
	  emitDataEvents$2(this);
	  this.read(0);
	  this.emit('resume');
	};

	Readable$4.prototype.pause = function() {
	  emitDataEvents$2(this, true);
	  this.emit('pause');
	};

	function emitDataEvents$2(stream, startPaused) {
	  var state = stream._readableState;

	  if (state.flowing) {
	    // https://github.com/isaacs/readable-stream/issues/16
	    throw new Error('Cannot switch to old mode now.');
	  }

	  var paused = startPaused || false;
	  var readable = false;

	  // convert to an old-style stream.
	  stream.readable = true;
	  stream.pipe = Stream$1.prototype.pipe;
	  stream.on = stream.addListener = Stream$1.prototype.on;

	  stream.on('readable', function() {
	    readable = true;

	    var c;
	    while (!paused && (null !== (c = stream.read())))
	      stream.emit('data', c);

	    if (c === null) {
	      readable = false;
	      stream._readableState.needReadable = true;
	    }
	  });

	  stream.pause = function() {
	    paused = true;
	    this.emit('pause');
	  };

	  stream.resume = function() {
	    paused = false;
	    if (readable)
	      process.nextTick(function() {
	        stream.emit('readable');
	      });
	    else
	      this.read(0);
	    this.emit('resume');
	  };

	  // now make it start, just in case it hadn't already.
	  stream.emit('readable');
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable$4.prototype.wrap = function(stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function() {
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length)
	        self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function(chunk) {
	    if (state.decoder)
	      chunk = state.decoder.write(chunk);

	    // don't skip over falsy values in objectMode
	    //if (state.objectMode && util.isNullOrUndefined(chunk))
	    if (state.objectMode && (chunk === null || chunk === undefined))
	      return;
	    else if (!state.objectMode && (!chunk || !chunk.length))
	      return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (typeof stream[i] === 'function' &&
	        typeof this[i] === 'undefined') {
	      this[i] = function(method) { return function() {
	        return stream[method].apply(stream, arguments);
	      }}(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach$5(events, function(ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function(n) {
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};



	// exposed for testing purposes only.
	Readable$4._fromList = fromList$3;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	function fromList$3(n, state) {
	  var list = state.buffer;
	  var length = state.length;
	  var stringMode = !!state.decoder;
	  var objectMode = !!state.objectMode;
	  var ret;

	  // nothing in the list, definitely empty.
	  if (list.length === 0)
	    return null;

	  if (length === 0)
	    ret = null;
	  else if (objectMode)
	    ret = list.shift();
	  else if (!n || n >= length) {
	    // read it all, truncate the array.
	    if (stringMode)
	      ret = list.join('');
	    else
	      ret = Buffer$7.concat(list, length);
	    list.length = 0;
	  } else {
	    // read just some of it.
	    if (n < list[0].length) {
	      // just take a part of the first list item.
	      // slice is the same for buffers and strings.
	      var buf = list[0];
	      ret = buf.slice(0, n);
	      list[0] = buf.slice(n);
	    } else if (n === list[0].length) {
	      // first list is a perfect match
	      ret = list.shift();
	    } else {
	      // complex case.
	      // we have enough to cover it, but it spans past the first buffer.
	      if (stringMode)
	        ret = '';
	      else
	        ret = new Buffer$7(n);

	      var c = 0;
	      for (var i = 0, l = list.length; i < l && c < n; i++) {
	        var buf = list[0];
	        var cpy = Math.min(n - c, buf.length);

	        if (stringMode)
	          ret += buf.slice(0, cpy);
	        else
	          buf.copy(ret, c, 0, cpy);

	        if (cpy < buf.length)
	          list[0] = buf.slice(cpy);
	        else
	          list.shift();

	        c += cpy;
	      }
	    }
	  }

	  return ret;
	}

	function endReadable$3(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0)
	    throw new Error('endReadable called on non-empty stream');

	  if (!state.endEmitted && state.calledRead) {
	    state.ended = true;
	    process.nextTick(function() {
	      // Check that we didn't get one last unshift.
	      if (!state.endEmitted && state.length === 0) {
	        state.endEmitted = true;
	        stream.readable = false;
	        stream.emit('end');
	      }
	    });
	  }
	}

	function forEach$5 (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf$3 (xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	var _stream_duplex$2 = Duplex$3;

	/*<replacement>*/
	var objectKeys$3 = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	};
	/*</replacement>*/


	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/




	util$2.inherits(Duplex$3, _stream_readable$2);

	forEach$6(objectKeys$3(_stream_writable$2.prototype), function(method) {
	  if (!Duplex$3.prototype[method])
	    Duplex$3.prototype[method] = _stream_writable$2.prototype[method];
	});

	function Duplex$3(options) {
	  if (!(this instanceof Duplex$3))
	    return new Duplex$3(options);

	  _stream_readable$2.call(this, options);
	  _stream_writable$2.call(this, options);

	  if (options && options.readable === false)
	    this.readable = false;

	  if (options && options.writable === false)
	    this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false)
	    this.allowHalfOpen = false;

	  this.once('end', onend$3);
	}

	// the no-half-open enforcer
	function onend$3() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended)
	    return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  process.nextTick(this.end.bind(this));
	}

	function forEach$6 (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, cb), and it'll handle all
	// the drain event emission and buffering.

	var _stream_writable$2 = Writable$3;

	/*<replacement>*/
	var Buffer$8 = buffer.Buffer;
	/*</replacement>*/

	Writable$3.WritableState = WritableState$3;


	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/



	util$2.inherits(Writable$3, Stream$1);

	function WriteReq$3(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	}

	function WritableState$3(options, stream) {
	  options = options || {};

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, becuase any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function(er) {
	    onwrite$3(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.buffer = [];

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;
	}

	function Writable$3(options) {
	  var Duplex = _stream_duplex$2;

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable$3) && !(this instanceof Duplex))
	    return new Writable$3(options);

	  this._writableState = new WritableState$3(options, this);

	  // legacy.
	  this.writable = true;

	  Stream$1.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable$3.prototype.pipe = function() {
	  this.emit('error', new Error('Cannot pipe. Not readable.'));
	};


	function writeAfterEnd$3(stream, state, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  process.nextTick(function() {
	    cb(er);
	  });
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk$3(stream, state, chunk, cb) {
	  var valid = true;
	  if (!Buffer$8.isBuffer(chunk) &&
	      'string' !== typeof chunk &&
	      chunk !== null &&
	      chunk !== undefined &&
	      !state.objectMode) {
	    var er = new TypeError('Invalid non-string/buffer chunk');
	    stream.emit('error', er);
	    process.nextTick(function() {
	      cb(er);
	    });
	    valid = false;
	  }
	  return valid;
	}

	Writable$3.prototype.write = function(chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (Buffer$8.isBuffer(chunk))
	    encoding = 'buffer';
	  else if (!encoding)
	    encoding = state.defaultEncoding;

	  if (typeof cb !== 'function')
	    cb = function() {};

	  if (state.ended)
	    writeAfterEnd$3(this, state, cb);
	  else if (validChunk$3(this, state, chunk, cb))
	    ret = writeOrBuffer$3(this, state, chunk, encoding, cb);

	  return ret;
	};

	function decodeChunk$3(state, chunk, encoding) {
	  if (!state.objectMode &&
	      state.decodeStrings !== false &&
	      typeof chunk === 'string') {
	    chunk = new Buffer$8(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer$3(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk$3(state, chunk, encoding);
	  if (Buffer$8.isBuffer(chunk))
	    encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret)
	    state.needDrain = true;

	  if (state.writing)
	    state.buffer.push(new WriteReq$3(chunk, encoding, cb));
	  else
	    doWrite$3(stream, state, len, chunk, encoding, cb);

	  return ret;
	}

	function doWrite$3(stream, state, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError$3(stream, state, sync, er, cb) {
	  if (sync)
	    process.nextTick(function() {
	      cb(er);
	    });
	  else
	    cb(er);

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate$3(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite$3(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate$3(state);

	  if (er)
	    onwriteError$3(stream, state, sync, er, cb);
	  else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish$3(stream, state);

	    if (!finished && !state.bufferProcessing && state.buffer.length)
	      clearBuffer$3(stream, state);

	    if (sync) {
	      process.nextTick(function() {
	        afterWrite$3(stream, state, finished, cb);
	      });
	    } else {
	      afterWrite$3(stream, state, finished, cb);
	    }
	  }
	}

	function afterWrite$3(stream, state, finished, cb) {
	  if (!finished)
	    onwriteDrain$3(stream, state);
	  cb();
	  if (finished)
	    finishMaybe$3(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain$3(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}


	// if there's something in the buffer waiting, then process it
	function clearBuffer$3(stream, state) {
	  state.bufferProcessing = true;

	  for (var c = 0; c < state.buffer.length; c++) {
	    var entry = state.buffer[c];
	    var chunk = entry.chunk;
	    var encoding = entry.encoding;
	    var cb = entry.callback;
	    var len = state.objectMode ? 1 : chunk.length;

	    doWrite$3(stream, state, len, chunk, encoding, cb);

	    // if we didn't call the onwrite immediately, then
	    // it means that we need to wait until it does.
	    // also, that means that the chunk and cb are currently
	    // being processed, so move the buffer counter past them.
	    if (state.writing) {
	      c++;
	      break;
	    }
	  }

	  state.bufferProcessing = false;
	  if (c < state.buffer.length)
	    state.buffer = state.buffer.slice(c);
	  else
	    state.buffer.length = 0;
	}

	Writable$3.prototype._write = function(chunk, encoding, cb) {
	  cb(new Error('not implemented'));
	};

	Writable$3.prototype.end = function(chunk, encoding, cb) {
	  var state = this._writableState;

	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (typeof chunk !== 'undefined' && chunk !== null)
	    this.write(chunk, encoding);

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished)
	    endWritable$3(this, state, cb);
	};


	function needFinish$3(stream, state) {
	  return (state.ending &&
	          state.length === 0 &&
	          !state.finished &&
	          !state.writing);
	}

	function finishMaybe$3(stream, state) {
	  var need = needFinish$3(stream, state);
	  if (need) {
	    state.finished = true;
	    stream.emit('finish');
	  }
	  return need;
	}

	function endWritable$3(stream, state, cb) {
	  state.ending = true;
	  finishMaybe$3(stream, state);
	  if (cb) {
	    if (state.finished)
	      process.nextTick(cb);
	    else
	      stream.once('finish', cb);
	  }
	  state.ended = true;
	}

	var writable = _stream_writable$2;

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.


	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	var _stream_transform$2 = Transform$3;



	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/

	util$2.inherits(Transform$3, _stream_duplex$2);


	function TransformState$3(options, stream) {
	  this.afterTransform = function(er, data) {
	    return afterTransform$3(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	}

	function afterTransform$3(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb)
	    return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (data !== null && data !== undefined)
	    stream.push(data);

	  if (cb)
	    cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}


	function Transform$3(options) {
	  if (!(this instanceof Transform$3))
	    return new Transform$3(options);

	  _stream_duplex$2.call(this, options);

	  var ts = this._transformState = new TransformState$3(options, this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  this.once('finish', function() {
	    if ('function' === typeof this._flush)
	      this._flush(function(er) {
	        done$3(stream, er);
	      });
	    else
	      done$3(stream);
	  });
	}

	Transform$3.prototype.push = function(chunk, encoding) {
	  this._transformState.needTransform = false;
	  return _stream_duplex$2.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform$3.prototype._transform = function(chunk, encoding, cb) {
	  throw new Error('not implemented');
	};

	Transform$3.prototype._write = function(chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform ||
	        rs.needReadable ||
	        rs.length < rs.highWaterMark)
	      this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform$3.prototype._read = function(n) {
	  var ts = this._transformState;

	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};


	function done$3(stream, er) {
	  if (er)
	    return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var rs = stream._readableState;
	  var ts = stream._transformState;

	  if (ws.length)
	    throw new Error('calling transform done when ws.length != 0');

	  if (ts.transforming)
	    throw new Error('calling transform done when still transforming');

	  return stream.push(null);
	}

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	var _stream_passthrough$2 = PassThrough$3;



	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/

	util$2.inherits(PassThrough$3, _stream_transform$2);

	function PassThrough$3(options) {
	  if (!(this instanceof PassThrough$3))
	    return new PassThrough$3(options);

	  _stream_transform$2.call(this, options);
	}

	PassThrough$3.prototype._transform = function(chunk, encoding, cb) {
	  cb(null, chunk);
	};

	var readable$2 = createCommonjsModule(function (module, exports) {
	// hack to fix a circular dependency issue when used with browserify
	exports = module.exports = _stream_readable$2;
	exports.Stream = Stream$1;
	exports.Readable = exports;
	exports.Writable = _stream_writable$2;
	exports.Duplex = _stream_duplex$2;
	exports.Transform = _stream_transform$2;
	exports.PassThrough = _stream_passthrough$2;
	if (!process.browser && process.env.READABLE_STREAM === 'disable') {
	  module.exports = Stream$1;
	}
	});
	var readable_1$2 = readable$2.Stream;
	var readable_2$2 = readable$2.Readable;
	var readable_3$2 = readable$2.Writable;
	var readable_4$2 = readable$2.Duplex;
	var readable_5$2 = readable$2.Transform;
	var readable_6$2 = readable$2.PassThrough;

	var duplex = _stream_duplex$2;

	var fwdStream = createCommonjsModule(function (module, exports) {
	var DUMMY = new Buffer(0);
	var noop = function() {};

	var toFunction = function(fn) {
		if (typeof fn === 'function') return fn;
		return function(cb) {
			cb(null, fn);
		};
	};

	var onreadable = function(rs, init) {
		var reading = false;
		var destroyed = false;

		rs._read = function() {
			reading = true;
		};

		rs.destroy = function() {
			destroyed = true;
		};

		init(function(err, source) {
			if (err) return rs.emit('error', err);

			var fwd = function() {
				var data;
				while ((data = source.read()) !== null) {
					reading = false;
					rs.push(data);
				}
			};

			source.on('readable', function() {
				if (reading) fwd();
			});

			source.on('end', function() {
				fwd();
				rs.push(null);
			});

			source.on('error', function(err) {
				rs.emit('error', err);
			});

			source.on('close', function() {
				fwd();
				process.nextTick(function() {
					rs.emit('close');
				});
			});

			rs._read = function() {
				reading = true;
				fwd();
			};

			rs.destroy = function() {
				if (destroyed) return;
				destroyed = true;
				if (source.destroy) source.destroy();
			};

			if (destroyed) {
				destroyed = false;
				rs.destroy();
				return;
			}

			if (reading) fwd();
		});

		return rs;
	};

	var onwritable = function(ws, init) {
		var ready = noop;
		var destroyed = false;

		ws._write = function(data, enc, cb) {
			ready = cb;
		};

		ws.destroy = function() {
			destroyed = true;
		};

		ws.write(DUMMY);

		init(function(err, source) {
			if (err) return ws.emit('error', err);

			source.on('close', function() {
				ws.emit('close');
			});

			source.on('error', function(err) {
				ws.emit('error', err);
			});

			ws._write = function(data, enc, cb) {
				if (data === DUMMY) return cb();
				source.write(data, enc, cb);
			};

			var emit = ws.emit;

			source.on('finish', function() {
				emit.call(ws, 'finish');
			});

			ws.destroy = function() {
				if (destroyed) return;
				destroyed = true;
				if (source.destroy) source.destroy();
			};

			ws.emit = function(name) {
				if (name !== 'finish') return emit.apply(ws, arguments);
				source.end();
			};

			if (destroyed) {
				destroyed = false;
				ws.destroy();
				return;
			}

			ready();
		});

		return ws;
	};

	exports.readable = function(opts, init) {
		if (arguments.length === 1) return exports.readable(null, opts);
		if (!opts) opts = {};
		return onreadable(new readable$2(opts), toFunction(init));
	};

	exports.writable = function(opts, init) {
		if (arguments.length === 1) return exports.writable(null, opts);
		if (!opts) opts = {};
		return onwritable(new writable(opts), toFunction(init));
	};

	exports.duplex = function(opts, initWritable, initReadable) {
		if (arguments.length === 2) return exports.duplex(null, opts, initWritable);
		if (!opts) opts = {};
		var dupl = new duplex(opts);
		onwritable(dupl, toFunction(initWritable));
		onreadable(dupl, toFunction(initReadable));
		return dupl;
	};
	});
	var fwdStream_1 = fwdStream.readable;
	var fwdStream_2 = fwdStream.writable;
	var fwdStream_3 = fwdStream.duplex;

	var stringRange = createCommonjsModule(function (module, exports) {
	//force to a valid range
	var range = exports.range = function (obj) {
	  return null == obj ? {} : 'string' === typeof range ? {
	      min: range, max: range + '\xff'
	    } :  obj
	};

	//turn into a sub range.
	var prefix = exports.prefix = function (range, within, term) {
	  range = exports.range(range);
	  var _range = {};
	  term = term || '\xff';
	  if(range instanceof RegExp || 'function' == typeof range) {
	    _range.min = within;
	    _range.max   = within + term,
	    _range.inner = function (k) {
	      var j = k.substring(within.length);
	      if(range.test)
	        return range.test(j)
	      return range(j)
	    };
	  }
	  else if('object' === typeof range) {
	    _range.min = within + (range.min || range.start || '');
	    _range.max = within + (range.max || range.end   || (term || '~'));
	    _range.reverse = !!range.reverse;
	  }
	  return _range
	};

	//return a function that checks a range
	var checker = exports.checker = function (range) {
	  if(!range) range = {};

	  if ('string' === typeof range)
	    return function (key) {
	      return key.indexOf(range) == 0
	    }
	  else if(range instanceof RegExp)
	    return function (key) {
	      return range.test(key)
	    }
	  else if('object' === typeof range)
	    return function (key) {
	      var min = range.min || range.start;
	      var max = range.max || range.end;

	      // fixes keys passed as ints from sublevels
	      key = String(key);

	      return (
	        !min || key >= min
	      ) && (
	        !max || key <= max
	      ) && (
	        !range.inner || (
	          range.inner.test 
	            ? range.inner.test(key)
	            : range.inner(key)
	        )
	      )
	    }
	  else if('function' === typeof range)
	    return range
	};
	//check if a key is within a range.
	var satifies = exports.satisfies = function (key, range) {
	  return checker(range)(key)
	};
	});
	var stringRange_1 = stringRange.range;
	var stringRange_2 = stringRange.prefix;
	var stringRange_3 = stringRange.checker;
	var stringRange_4 = stringRange.satisfies;

	var clone_1 = createCommonjsModule(function (module) {

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

	// shim for Node's 'util' package
	// DO NOT REMOVE THIS! It is required for compatibility with EnderJS (http://enderjs.com/).
	var util = {
	  isArray: function (ar) {
	    return Array.isArray(ar) || (typeof ar === 'object' && objectToString(ar) === '[object Array]');
	  },
	  isDate: function (d) {
	    return typeof d === 'object' && objectToString(d) === '[object Date]';
	  },
	  isRegExp: function (re) {
	    return typeof re === 'object' && objectToString(re) === '[object RegExp]';
	  },
	  getRegExpFlags: function (re) {
	    var flags = '';
	    re.global && (flags += 'g');
	    re.ignoreCase && (flags += 'i');
	    re.multiline && (flags += 'm');
	    return flags;
	  }
	};


	module.exports = clone;

	/**
	 * Clones (copies) an Object using deep copying.
	 *
	 * This function supports circular references by default, but if you are certain
	 * there are no circular references in your object, you can save some CPU time
	 * by calling clone(obj, false).
	 *
	 * Caution: if `circular` is false and `parent` contains circular references,
	 * your program may enter an infinite loop and crash.
	 *
	 * @param `parent` - the object to be cloned
	 * @param `circular` - set to true if the object to be cloned may contain
	 *    circular references. (optional - true by default)
	 * @param `depth` - set to a number if the object is only to be cloned to
	 *    a particular depth. (optional - defaults to Infinity)
	 * @param `prototype` - sets the prototype to be used when cloning an object.
	 *    (optional - defaults to parent prototype).
	*/

	function clone(parent, circular, depth, prototype) {
	  // maintain two arrays for circular references, where corresponding parents
	  // and children have the same index
	  var allParents = [];
	  var allChildren = [];

	  var useBuffer = typeof Buffer != 'undefined';

	  if (typeof circular == 'undefined')
	    circular = true;

	  if (typeof depth == 'undefined')
	    depth = Infinity;

	  // recurse this function so we don't reset allParents and allChildren
	  function _clone(parent, depth) {
	    // cloning null always returns null
	    if (parent === null)
	      return null;

	    if (depth == 0)
	      return parent;

	    var child;
	    var proto;
	    if (typeof parent != 'object') {
	      return parent;
	    }

	    if (util.isArray(parent)) {
	      child = [];
	    } else if (util.isRegExp(parent)) {
	      child = new RegExp(parent.source, util.getRegExpFlags(parent));
	      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
	    } else if (util.isDate(parent)) {
	      child = new Date(parent.getTime());
	    } else if (useBuffer && Buffer.isBuffer(parent)) {
	      child = new Buffer(parent.length);
	      parent.copy(child);
	      return child;
	    } else {
	      if (typeof prototype == 'undefined') {
	        proto = Object.getPrototypeOf(parent);
	        child = Object.create(proto);
	      }
	      else {
	        child = Object.create(prototype);
	        proto = prototype;
	      }
	    }

	    if (circular) {
	      var index = allParents.indexOf(parent);

	      if (index != -1) {
	        return allChildren[index];
	      }
	      allParents.push(parent);
	      allChildren.push(child);
	    }

	    for (var i in parent) {
	      var attrs;
	      if (proto) {
	        attrs = Object.getOwnPropertyDescriptor(proto, i);
	      }
	      
	      if (attrs && attrs.set == null) {
	        continue;
	      }
	      child[i] = _clone(parent[i], depth - 1);
	    }

	    return child;
	  }

	  return _clone(parent, depth);
	}

	/**
	 * Simple flat clone using prototype, accepts only objects, usefull for property
	 * override on FLAT configuration object (no nested props).
	 *
	 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
	 * works.
	 */
	clone.clonePrototype = function(parent) {
	  if (parent === null)
	    return null;

	  var c = function () {};
	  c.prototype = parent;
	  return new c();
	};
	});

	var levelFixRange = 
	function fixRange(opts) {
	  opts = clone_1(opts);

	  var reverse = opts.reverse;
	  var end     = opts.max || opts.end;
	  var start   = opts.min || opts.start;

	  var range = [start, end];
	  if(start != null && end != null)
	    range.sort();
	  if(reverse)
	    range = range.reverse();

	  opts.start   = range[0];
	  opts.end     = range[1];

	  delete opts.min;
	  delete opts.max;

	  return opts
	};

	var is_1 = createCommonjsModule(function (module) {
	/**!
	 * is
	 * the definitive JavaScript type testing library
	 * 
	 * @copyright 2013 Enrico Marino
	 * @license MIT
	 */

	var objProto = Object.prototype;
	var owns = objProto.hasOwnProperty;
	var toString = objProto.toString;
	var isActualNaN = function (value) {
	  return value !== value;
	};
	var NON_HOST_TYPES = {
	  "boolean": 1,
	  "number": 1,
	  "string": 1,
	  "undefined": 1
	};

	/**
	 * Expose `is`
	 */

	var is = module.exports = {};

	/**
	 * Test general.
	 */

	/**
	 * is.type
	 * Test if `value` is a type of `type`.
	 *
	 * @param {Mixed} value value to test
	 * @param {String} type type
	 * @return {Boolean} true if `value` is a type of `type`, false otherwise
	 * @api public
	 */

	is.a =
	is.type = function (value, type) {
	  return typeof value === type;
	};

	/**
	 * is.defined
	 * Test if `value` is defined.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if 'value' is defined, false otherwise
	 * @api public
	 */

	is.defined = function (value) {
	  return value !== undefined;
	};

	/**
	 * is.empty
	 * Test if `value` is empty.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is empty, false otherwise
	 * @api public
	 */

	is.empty = function (value) {
	  var type = toString.call(value);
	  var key;

	  if ('[object Array]' === type || '[object Arguments]' === type) {
	    return value.length === 0;
	  }

	  if ('[object Object]' === type) {
	    for (key in value) if (owns.call(value, key)) return false;
	    return true;
	  }

	  if ('[object String]' === type) {
	    return '' === value;
	  }

	  return false;
	};

	/**
	 * is.equal
	 * Test if `value` is equal to `other`.
	 *
	 * @param {Mixed} value value to test
	 * @param {Mixed} other value to compare with
	 * @return {Boolean} true if `value` is equal to `other`, false otherwise
	 */

	is.equal = function (value, other) {
	  var type = toString.call(value);
	  var key;

	  if (type !== toString.call(other)) {
	    return false;
	  }

	  if ('[object Object]' === type) {
	    for (key in value) {
	      if (!is.equal(value[key], other[key])) {
	        return false;
	      }
	    }
	    return true;
	  }

	  if ('[object Array]' === type) {
	    key = value.length;
	    if (key !== other.length) {
	      return false;
	    }
	    while (--key) {
	      if (!is.equal(value[key], other[key])) {
	        return false;
	      }
	    }
	    return true;
	  }

	  if ('[object Function]' === type) {
	    return value.prototype === other.prototype;
	  }

	  if ('[object Date]' === type) {
	    return value.getTime() === other.getTime();
	  }

	  return value === other;
	};

	/**
	 * is.hosted
	 * Test if `value` is hosted by `host`.
	 *
	 * @param {Mixed} value to test
	 * @param {Mixed} host host to test with
	 * @return {Boolean} true if `value` is hosted by `host`, false otherwise
	 * @api public
	 */

	is.hosted = function (value, host) {
	  var type = typeof host[value];
	  return type === 'object' ? !!host[value] : !NON_HOST_TYPES[type];
	};

	/**
	 * is.instance
	 * Test if `value` is an instance of `constructor`.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an instance of `constructor`
	 * @api public
	 */

	is.instance = is['instanceof'] = function (value, constructor) {
	  return value instanceof constructor;
	};

	/**
	 * is.null
	 * Test if `value` is null.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is null, false otherwise
	 * @api public
	 */

	is['null'] = function (value) {
	  return value === null;
	};

	/**
	 * is.undefined
	 * Test if `value` is undefined.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is undefined, false otherwise
	 * @api public
	 */

	is.undefined = function (value) {
	  return value === undefined;
	};

	/**
	 * Test arguments.
	 */

	/**
	 * is.arguments
	 * Test if `value` is an arguments object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an arguments object, false otherwise
	 * @api public
	 */

	is.arguments = function (value) {
	  var isStandardArguments = '[object Arguments]' === toString.call(value);
	  var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
	  return isStandardArguments || isOldArguments;
	};

	/**
	 * Test array.
	 */

	/**
	 * is.array
	 * Test if 'value' is an array.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an array, false otherwise
	 * @api public
	 */

	is.array = function (value) {
	  return '[object Array]' === toString.call(value);
	};

	/**
	 * is.arguments.empty
	 * Test if `value` is an empty arguments object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an empty arguments object, false otherwise
	 * @api public
	 */
	is.arguments.empty = function (value) {
	  return is.arguments(value) && value.length === 0;
	};

	/**
	 * is.array.empty
	 * Test if `value` is an empty array.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an empty array, false otherwise
	 * @api public
	 */
	is.array.empty = function (value) {
	  return is.array(value) && value.length === 0;
	};

	/**
	 * is.arraylike
	 * Test if `value` is an arraylike object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an arguments object, false otherwise
	 * @api public
	 */

	is.arraylike = function (value) {
	  return !!value && !is.boolean(value)
	    && owns.call(value, 'length')
	    && isFinite(value.length)
	    && is.number(value.length)
	    && value.length >= 0;
	};

	/**
	 * Test boolean.
	 */

	/**
	 * is.boolean
	 * Test if `value` is a boolean.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a boolean, false otherwise
	 * @api public
	 */

	is.boolean = function (value) {
	  return '[object Boolean]' === toString.call(value);
	};

	/**
	 * is.false
	 * Test if `value` is false.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is false, false otherwise
	 * @api public
	 */

	is['false'] = function (value) {
	  return is.boolean(value) && (value === false || value.valueOf() === false);
	};

	/**
	 * is.true
	 * Test if `value` is true.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is true, false otherwise
	 * @api public
	 */

	is['true'] = function (value) {
	  return is.boolean(value) && (value === true || value.valueOf() === true);
	};

	/**
	 * Test date.
	 */

	/**
	 * is.date
	 * Test if `value` is a date.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a date, false otherwise
	 * @api public
	 */

	is.date = function (value) {
	  return '[object Date]' === toString.call(value);
	};

	/**
	 * Test element.
	 */

	/**
	 * is.element
	 * Test if `value` is an html element.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an HTML Element, false otherwise
	 * @api public
	 */

	is.element = function (value) {
	  return value !== undefined
	    && typeof HTMLElement !== 'undefined'
	    && value instanceof HTMLElement
	    && value.nodeType === 1;
	};

	/**
	 * Test error.
	 */

	/**
	 * is.error
	 * Test if `value` is an error object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an error object, false otherwise
	 * @api public
	 */

	is.error = function (value) {
	  return '[object Error]' === toString.call(value);
	};

	/**
	 * Test function.
	 */

	/**
	 * is.fn / is.function (deprecated)
	 * Test if `value` is a function.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a function, false otherwise
	 * @api public
	 */

	is.fn = is['function'] = function (value) {
	  var isAlert = typeof window !== 'undefined' && value === window.alert;
	  return isAlert || '[object Function]' === toString.call(value);
	};

	/**
	 * Test number.
	 */

	/**
	 * is.number
	 * Test if `value` is a number.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a number, false otherwise
	 * @api public
	 */

	is.number = function (value) {
	  return '[object Number]' === toString.call(value);
	};

	/**
	 * is.infinite
	 * Test if `value` is positive or negative infinity.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
	 * @api public
	 */
	is.infinite = function (value) {
	  return value === Infinity || value === -Infinity;
	};

	/**
	 * is.decimal
	 * Test if `value` is a decimal number.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a decimal number, false otherwise
	 * @api public
	 */

	is.decimal = function (value) {
	  return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0;
	};

	/**
	 * is.divisibleBy
	 * Test if `value` is divisible by `n`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} n dividend
	 * @return {Boolean} true if `value` is divisible by `n`, false otherwise
	 * @api public
	 */

	is.divisibleBy = function (value, n) {
	  var isDividendInfinite = is.infinite(value);
	  var isDivisorInfinite = is.infinite(n);
	  var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
	  return isDividendInfinite || isDivisorInfinite || (isNonZeroNumber && value % n === 0);
	};

	/**
	 * is.int
	 * Test if `value` is an integer.
	 *
	 * @param value to test
	 * @return {Boolean} true if `value` is an integer, false otherwise
	 * @api public
	 */

	is.int = function (value) {
	  return is.number(value) && !isActualNaN(value) && value % 1 === 0;
	};

	/**
	 * is.maximum
	 * Test if `value` is greater than 'others' values.
	 *
	 * @param {Number} value value to test
	 * @param {Array} others values to compare with
	 * @return {Boolean} true if `value` is greater than `others` values
	 * @api public
	 */

	is.maximum = function (value, others) {
	  if (isActualNaN(value)) {
	    throw new TypeError('NaN is not a valid value');
	  } else if (!is.arraylike(others)) {
	    throw new TypeError('second argument must be array-like');
	  }
	  var len = others.length;

	  while (--len >= 0) {
	    if (value < others[len]) {
	      return false;
	    }
	  }

	  return true;
	};

	/**
	 * is.minimum
	 * Test if `value` is less than `others` values.
	 *
	 * @param {Number} value value to test
	 * @param {Array} others values to compare with
	 * @return {Boolean} true if `value` is less than `others` values
	 * @api public
	 */

	is.minimum = function (value, others) {
	  if (isActualNaN(value)) {
	    throw new TypeError('NaN is not a valid value');
	  } else if (!is.arraylike(others)) {
	    throw new TypeError('second argument must be array-like');
	  }
	  var len = others.length;

	  while (--len >= 0) {
	    if (value > others[len]) {
	      return false;
	    }
	  }

	  return true;
	};

	/**
	 * is.nan
	 * Test if `value` is not a number.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is not a number, false otherwise
	 * @api public
	 */

	is.nan = function (value) {
	  return !is.number(value) || value !== value;
	};

	/**
	 * is.even
	 * Test if `value` is an even number.
	 *
	 * @param {Number} value value to test
	 * @return {Boolean} true if `value` is an even number, false otherwise
	 * @api public
	 */

	is.even = function (value) {
	  return is.infinite(value) || (is.number(value) && value === value && value % 2 === 0);
	};

	/**
	 * is.odd
	 * Test if `value` is an odd number.
	 *
	 * @param {Number} value value to test
	 * @return {Boolean} true if `value` is an odd number, false otherwise
	 * @api public
	 */

	is.odd = function (value) {
	  return is.infinite(value) || (is.number(value) && value === value && value % 2 !== 0);
	};

	/**
	 * is.ge
	 * Test if `value` is greater than or equal to `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean}
	 * @api public
	 */

	is.ge = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value >= other;
	};

	/**
	 * is.gt
	 * Test if `value` is greater than `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean}
	 * @api public
	 */

	is.gt = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value > other;
	};

	/**
	 * is.le
	 * Test if `value` is less than or equal to `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean} if 'value' is less than or equal to 'other'
	 * @api public
	 */

	is.le = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value <= other;
	};

	/**
	 * is.lt
	 * Test if `value` is less than `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean} if `value` is less than `other`
	 * @api public
	 */

	is.lt = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value < other;
	};

	/**
	 * is.within
	 * Test if `value` is within `start` and `finish`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} start lower bound
	 * @param {Number} finish upper bound
	 * @return {Boolean} true if 'value' is is within 'start' and 'finish'
	 * @api public
	 */
	is.within = function (value, start, finish) {
	  if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
	    throw new TypeError('NaN is not a valid value');
	  } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
	    throw new TypeError('all arguments must be numbers');
	  }
	  var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
	  return isAnyInfinite || (value >= start && value <= finish);
	};

	/**
	 * Test object.
	 */

	/**
	 * is.object
	 * Test if `value` is an object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an object, false otherwise
	 * @api public
	 */

	is.object = function (value) {
	  return value && '[object Object]' === toString.call(value);
	};

	/**
	 * is.hash
	 * Test if `value` is a hash - a plain object literal.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a hash, false otherwise
	 * @api public
	 */

	is.hash = function (value) {
	  return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
	};

	/**
	 * Test regexp.
	 */

	/**
	 * is.regexp
	 * Test if `value` is a regular expression.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a regexp, false otherwise
	 * @api public
	 */

	is.regexp = function (value) {
	  return '[object RegExp]' === toString.call(value);
	};

	/**
	 * Test string.
	 */

	/**
	 * is.string
	 * Test if `value` is a string.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if 'value' is a string, false otherwise
	 * @api public
	 */

	is.string = function (value) {
	  return '[object String]' === toString.call(value);
	};
	});

	var hasOwn$1 = Object.prototype.hasOwnProperty;
	var toString$3 = Object.prototype.toString;

	var foreach$1 = function forEach (obj, fn, ctx) {
	    if (toString$3.call(fn) !== '[object Function]') {
	        throw new TypeError('iterator must be a function');
	    }
	    var l = obj.length;
	    if (l === +l) {
	        for (var i = 0; i < l; i++) {
	            fn.call(ctx, obj[i], i, obj);
	        }
	    } else {
	        for (var k in obj) {
	            if (hasOwn$1.call(obj, k)) {
	                fn.call(ctx, obj[k], k, obj);
	            }
	        }
	    }
	};

	var shim$1 = createCommonjsModule(function (module) {
	(function () {

		// modified from https://github.com/kriskowal/es5-shim
		var has = Object.prototype.hasOwnProperty,
			is = is_1,
			forEach = foreach$1,
			hasDontEnumBug = !({'toString': null}).propertyIsEnumerable('toString'),
			dontEnums = [
				"toString",
				"toLocaleString",
				"valueOf",
				"hasOwnProperty",
				"isPrototypeOf",
				"propertyIsEnumerable",
				"constructor"
			],
			keysShim;

		keysShim = function keys(object) {
			if (!is.object(object) && !is.array(object)) {
				throw new TypeError("Object.keys called on a non-object");
			}

			var name, theKeys = [];
			for (name in object) {
				if (has.call(object, name)) {
					theKeys.push(name);
				}
			}

			if (hasDontEnumBug) {
				forEach(dontEnums, function (dontEnum) {
					if (has.call(object, dontEnum)) {
						theKeys.push(dontEnum);
					}
				});
			}
			return theKeys;
		};

		module.exports = keysShim;
	}());
	});

	var objectKeys$4 = Object.keys || shim$1;

	var hasKeys_1$1 = hasKeys$1;

	function hasKeys$1(source) {
	    return source !== null &&
	        (typeof source === "object" ||
	        typeof source === "function")
	}

	var xtend$4 = extend$5;

	function extend$5() {
	    var target = {};

	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i];

	        if (!hasKeys_1$1(source)) {
	            continue
	        }

	        var keys = objectKeys$4(source);

	        for (var j = 0; j < keys.length; j++) {
	            var name = keys[j];
	            target[name] = source[name];
	        }
	    }

	    return target
	}

	function addOperation (type, key, value, options) {
	  var operation = {
	    type: type,
	    key: key,
	    value: value,
	    options: options
	  };

	  if (options && options.prefix) {
	    operation.prefix = options.prefix;
	    delete options.prefix;
	  }

	  this._operations.push(operation);

	  return this
	}

	function Batch$1(sdb) {
	  this._operations = [];
	  this._sdb = sdb;

	  this.put = addOperation.bind(this, 'put');
	  this.del = addOperation.bind(this, 'del');
	}

	var B = Batch$1.prototype;


	B.clear = function () {
	  this._operations = [];
	};

	B.write = function (cb) {
	  this._sdb.batch(this._operations, cb);
	};

	var batch$1 = Batch$1;

	var sub = createCommonjsModule(function (module) {
	var EventEmitter = events$1.EventEmitter;
	var inherits     = debugUtil.inherits;





	inherits(SubDB, EventEmitter);

	function SubDB (db, prefix, options) {
	  if('string' === typeof options) {
	    console.error('db.sublevel(name, seperator<string>) is depreciated');
	    console.error('use db.sublevel(name, {sep: separator})) if you must');
	    options = {sep: options};
	  }
	  if(!(this instanceof SubDB)) return new SubDB(db, prefix, options)
	  if(!db)     throw new Error('must provide db')
	  if(!prefix) throw new Error('must provide prefix')

	  options = options || {};
	  options.sep = options.sep || '\xff';

	  this._parent = db;
	  this._options = options;
	  this.options = options;
	  this._prefix = prefix;
	  this._root = root(this);
	  db.sublevels[prefix] = this;
	  this.sublevels = {};
	  this.methods = {};
	  var self = this;
	  this.hooks = {
	    pre: function () {
	      return self.pre.apply(self, arguments)
	    },
	    post: function () {
	      return self.post.apply(self, arguments)
	    }
	  };
	}

	var SDB = SubDB.prototype;

	SDB._key = function (key) {
	  var sep = this._options.sep;
	  return sep
	    + this._prefix
	    + sep
	    + key
	};

	SDB._getOptsAndCb = function (opts, cb) {
	  if (typeof opts == 'function') {
	    cb = opts;
	    opts = {};
	  }
	  return { opts: xtend$4(opts, this._options), cb: cb }
	};

	SDB.sublevel = function (prefix, options) {
	  if(this.sublevels[prefix])
	    return this.sublevels[prefix]
	  return new SubDB(this, prefix, options || this._options)
	};

	SDB.put = function (key, value, opts, cb) {
	  var res = this._getOptsAndCb(opts, cb);
	  this._root.put(this.prefix(key), value, res.opts, res.cb);
	};

	SDB.get = function (key, opts, cb) {
	  var res = this._getOptsAndCb(opts, cb);
	  this._root.get(this.prefix(key), res.opts, res.cb);
	};

	SDB.del = function (key, opts, cb) {
	  var res = this._getOptsAndCb(opts, cb);
	  this._root.del(this.prefix(key), res.opts, res.cb);
	};

	SDB.batch = function (changes, opts, cb) {
	  if(!Array.isArray(changes))
	    return new batch$1(this)
	  var self = this,
	      res = this._getOptsAndCb(opts, cb);
	  changes.forEach(function (ch) {

	    //OH YEAH, WE NEED TO VALIDATE THAT UPDATING THIS KEY/PREFIX IS ALLOWED
	    if('string' === typeof ch.prefix)
	      ch.key = ch.prefix + ch.key;
	    else
	      ch.key = (ch.prefix || self).prefix(ch.key);

	    if(ch.prefix) ch.prefix = null;
	  });
	  this._root.batch(changes, res.opts, res.cb);
	};

	SDB._getKeyEncoding = function () {
	  if(this.options.keyEncoding)
	    return this.options.keyEncoding
	  if(this._parent && this._parent._getKeyEncoding)
	    return this._parent._getKeyEncoding()
	};

	SDB._getValueEncoding = function () {
	  if(this.options.valueEncoding)
	    return this.options.valueEncoding
	  if(this._parent && this._parent._getValueEncoding)
	    return this._parent._getValueEncoding()
	};

	SDB.prefix = function (key) {
	  var sep = this._options.sep;
	  return this._parent.prefix() + sep + this._prefix + sep + (key || '')
	};

	SDB.keyStream =
	SDB.createKeyStream = function (opts) {
	  opts = opts || {};
	  opts.keys = true;
	  opts.values = false;
	  return this.createReadStream(opts)
	};

	SDB.valueStream =
	SDB.createValueStream = function (opts) {
	  opts = opts || {};
	  opts.keys = false;
	  opts.values = true;
	  opts.keys = false;
	  return this.createReadStream(opts)
	};

	function selectivelyMerge(_opts, opts) {
	  [ 'valueEncoding'
	  , 'encoding'
	  , 'keyEncoding'
	  , 'reverse'
	  , 'values'
	  , 'keys'
	  , 'limit'
	  , 'fillCache'
	  ]
	  .forEach(function (k) {
	    if (opts.hasOwnProperty(k)) _opts[k] = opts[k];
	  });
	}

	SDB.readStream =
	SDB.createReadStream = function (opts) {
	  opts = opts || {};
	  var r = root(this);
	  var p = this.prefix();

	  var _opts = stringRange.prefix(opts, p);
	  selectivelyMerge(_opts, xtend$4(opts, this._options));

	  var s = r.createReadStream(_opts);

	  if(_opts.values === false) {
	    var read = s.read;
	    if (read) {
	      s.read = function (size) {
	        var val = read.call(this, size);
	        if (val) val = val.substring(p.length);
	        return val
	      };
	    } else {
	      var emit = s.emit;
	      s.emit = function (event, val) {
	        if(event === 'data') {
	          emit.call(this, 'data', val.substring(p.length));
	        } else
	          emit.call(this, event, val);
	      };
	    }
	    return s
	  } else if(_opts.keys === false)
	    return s
	  else {
	    var read = s.read;
	    if (read) {
	      s.read = function (size) {
	        var d = read.call(this, size);
	        if (d) d.key = d.key.substring(p.length);
	        return d
	      };
	    } else {
	      s.on('data', function (d) {
	        //mutate the prefix!
	        //this doesn't work for createKeyStream admittedly.
	        d.key = d.key.substring(p.length);
	      });
	    }
	    return s
	  }
	};


	SDB.writeStream =
	SDB.createWriteStream = function () {
	  var r = root(this);
	  var p = this.prefix();
	  var ws = r.createWriteStream.apply(r, arguments);
	  var write = ws.write;

	  var encoding = this._options.encoding;
	  var valueEncoding = this._options.valueEncoding;
	  var keyEncoding = this._options.keyEncoding;

	  // slight optimization, if no encoding was specified at all,
	  // which will be the case most times, make write not check at all
	  var nocheck = !encoding && !valueEncoding && !keyEncoding;

	  ws.write = nocheck
	    ? function (data) {
	        data.key = p + data.key;
	        return write.call(ws, data)
	      }
	    : function (data) {
	        data.key = p + data.key;

	        // not merging all options here since this happens on every write and things could get slowed down
	        // at this point we only consider encoding important to propagate
	        if (encoding && typeof data.encoding === 'undefined')
	          data.encoding = encoding;
	        if (valueEncoding && typeof data.valueEncoding === 'undefined')
	          data.valueEncoding = valueEncoding;
	        if (keyEncoding && typeof data.keyEncoding === 'undefined')
	          data.keyEncoding = keyEncoding;

	        return write.call(ws, data)
	      };
	  return ws
	};

	SDB.approximateSize = function () {
	  var r = root(db);
	  return r.approximateSize.apply(r, arguments)
	};

	function root(db) {
	  if(!db._parent) return db
	  return root(db._parent)
	}

	SDB.pre = function (range, hook) {
	  if(!hook) hook = range, range = null;
	  range = stringRange.prefix(range, this.prefix(), this._options.sep);
	  var r = root(this._parent);
	  var p = this.prefix();
	  return r.hooks.pre(levelFixRange(range), function (ch, add, batch) {
	    hook({
	      key: ch.key.substring(p.length),
	      value: ch.value,
	      type: ch.type
	    }, function (ch, _p) {
	      //maybe remove the second add arg now
	      //that op can have prefix?
	      add(ch, ch.prefix ? _p : (_p || p));
	    }, batch);
	  })
	};

	SDB.post = function (range, hook) {
	  if(!hook) hook = range, range = null;
	  var r = root(this._parent);
	  var p = this.prefix();
	  range = stringRange.prefix(range, p, this._options.sep);
	  return r.hooks.post(levelFixRange(range), function (data) {
	    hook({key: data.key.substring(p.length), value: data.value, type: data.type});
	  })
	};

	var exports = module.exports = SubDB;
	});

	var levelHooks = function (db) {

	  if(db.hooks) {
	    return     
	  }

	  var posthooks = [];
	  var prehooks  = [];

	  function getPrefix (p) {
	    return p && (
	        'string' ===   typeof p        ? p
	      : 'string' ===   typeof p.prefix ? p.prefix
	      : 'function' === typeof p.prefix ? p.prefix()
	      :                                  ''
	      )
	  }

	  function getKeyEncoding (db) {
	    if(db && db._getKeyEncoding)
	      return db._getKeyEncoding(db)
	  }

	  function getValueEncoding (db) {
	    if(db && db._getValueEncoding)
	      return db._getValueEncoding(db)
	  }

	  function remover (array, item) {
	    return function () {
	      var i = array.indexOf(item);
	      if(!~i) return false        
	      array.splice(i, 1);
	      return true
	    }
	  }

	  db.hooks = {
	    post: function (prefix, hook) {
	      if(!hook) hook = prefix, prefix = '';
	      var h = {test: stringRange.checker(prefix), hook: hook};
	      posthooks.push(h);
	      return remover(posthooks, h)
	    },
	    pre: function (prefix, hook) {
	      if(!hook) hook = prefix, prefix = '';
	      var h = {
	        test: stringRange.checker(prefix),
	        hook: hook,
	        safe: false !== prefix.safe
	      };
	      prehooks.push(h);
	      return remover(prehooks, h)
	    },
	    posthooks: posthooks,
	    prehooks: prehooks
	  };

	  //POST HOOKS

	  function each (e) {
	    if(e && e.type) {
	      posthooks.forEach(function (h) {
	        if(h.test(e.key)) h.hook(e);
	      });
	    }
	  }

	  db.on('put', function (key, val) {
	    each({type: 'put', key: key, value: val});
	  });
	  db.on('del', function (key, val) {
	    each({type: 'del', key: key, value: val});
	  });
	  db.on('batch', function onBatch (ary) {
	    ary.forEach(each);
	  });

	  //PRE HOOKS

	  var put = db.put;
	  var del = db.del;
	  var batch = db.batch;

	  function callHooks (isBatch, b, opts, cb) {
	    try {
	    b.forEach(function hook(e, i) {
	      prehooks.forEach(function (h) {
	        if(h.test(String(e.key))) {
	          //optimize this?
	          //maybe faster to not create a new object each time?
	          //have one object and expose scope to it?
	          var context = {
	            add: function (ch, db) {
	              if(typeof ch === 'undefined') {
	                return this
	              }
	              if(ch === false)
	                return delete b[i]
	              var prefix = (
	                getPrefix(ch.prefix) || 
	                getPrefix(db) || 
	                h.prefix || ''
	              );  
	              //don't leave a circular json object there incase using multilevel.
	              if(prefix) ch.prefix = prefix;
	              ch.key = prefix + ch.key;
	              if(h.safe && h.test(String(ch.key))) {
	                //this usually means a stack overflow.
	                throw new Error('prehook cannot insert into own range')
	              }
	              var ke = ch.keyEncoding   || getKeyEncoding(ch.prefix);
	              var ve = ch.valueEncoding || getValueEncoding(ch.prefix);
	              if(ke) ch.keyEncoding = ke;
	              if(ve) ch.valueEncoding = ve;

	              b.push(ch);
	              hook(ch, b.length - 1);
	              return this
	            },
	            put: function (ch, db) {
	              if('object' === typeof ch) ch.type = 'put';
	              return this.add(ch, db)
	            },
	            del: function (ch, db) {
	              if('object' === typeof ch) ch.type = 'del';
	              return this.add(ch, db)
	            },
	            veto: function () {
	              return this.add(false)
	            }
	          };
	          h.hook.call(context, e, context.add, b);
	        }
	      });
	    });
	    } catch (err) {
	      return (cb || opts)(err)
	    }
	    b = b.filter(function (e) {
	      return e && e.type //filter out empty items
	    });

	    if(b.length == 1 && !isBatch) {
	      var change = b[0];
	      return change.type == 'put' 
	        ? put.call(db, change.key, change.value, opts, cb) 
	        : del.call(db, change.key, opts, cb)  
	    }
	    return batch.call(db, b, opts, cb)
	  }

	  db.put = function (key, value, opts, cb ) {
	    var batch = [{key: key, value: value, type: 'put'}];
	    return callHooks(false, batch, opts, cb)
	  };

	  db.del = function (key, opts, cb) {
	    var batch = [{key: key, type: 'del'}];
	    return callHooks(false, batch, opts, cb)
	  };

	  db.batch = function (batch, opts, cb) {
	    return callHooks(true, batch, opts, cb)
	  };
	};

	var EventEmitter$2 = events$1.EventEmitter;
	var next         = process.nextTick;






	var levelSublevel   = function (_db, options) {
	  function DB () {}
	  DB.prototype = _db;
	  var db = new DB();

	  if (db.sublevel) return db

	  options = options || {};

	  //use \xff (255) as the seperator,
	  //so that sections of the database will sort after the regular keys
	  var sep = options.sep = options.sep || '\xff';
	  db._options = options;

	  levelHooks(db);

	  db.sublevels = {};

	  db.sublevel = function (prefix, options) {
	    if(db.sublevels[prefix])
	      return db.sublevels[prefix]
	    return new sub(db, prefix, options || this._options)
	  };

	  db.methods = {};

	  db.prefix = function (key) {
	    return '' + (key || '')
	  };

	  db.pre = function (range, hook) {
	    if(!hook)
	      hook = range, range = {
	        max  : sep
	      };
	    return db.hooks.pre(range, hook)
	  };

	  db.post = function (range, hook) {
	    if(!hook)
	      hook = range, range = {
	        max : sep
	      };
	    return db.hooks.post(range, hook)
	  };

	  function safeRange(fun) {
	    return function (opts) {
	      opts = opts || {};
	      opts = levelFixRange(opts);

	      if(opts.reverse) opts.start = opts.start || sep;
	      else             opts.end   = opts.end || sep;

	      return fun.call(db, opts)
	    }
	  }

	  db.readStream =
	  db.createReadStream  = safeRange(db.createReadStream);
	  db.keyStream =
	  db.createKeyStream   = safeRange(db.createKeyStream);
	  db.valuesStream =
	  db.createValueStream = safeRange(db.createValueStream);

	  var batch = db.batch;
	  db.batch = function (changes, opts, cb) {
	    if(!Array.isArray(changes))
	      return new batch$1(db)
	    changes.forEach(function (e) {
	      if(e.prefix) {
	        if('function' === typeof e.prefix.prefix)
	          e.key = e.prefix.prefix(e.key);
	        else if('string'  === typeof e.prefix)
	          e.key = e.prefix + e.key;
	      }
	    });
	    batch.call(db, changes, opts, cb);
	  };
	  return db
	};

	var isarray$3 = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	var string_decoder$3 = createCommonjsModule(function (module, exports) {
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var Buffer = buffer.Buffer;

	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     };


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};


	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}
	});
	var string_decoder_1$3 = string_decoder$3.StringDecoder;

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var _stream_readable$3 = Readable$5;

	/*<replacement>*/

	/*</replacement>*/


	/*<replacement>*/
	var Buffer$9 = buffer.Buffer;
	/*</replacement>*/

	Readable$5.ReadableState = ReadableState$4;

	var EE$3 = events$1.EventEmitter;

	/*<replacement>*/
	if (!EE$3.listenerCount) EE$3.listenerCount = function(emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/



	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/

	var StringDecoder$4;


	/*<replacement>*/
	var debug$1 = debugUtil;
	if (debug$1 && debug$1.debuglog) {
	  debug$1 = debug$1.debuglog('stream');
	} else {
	  debug$1 = function () {};
	}
	/*</replacement>*/


	util$2.inherits(Readable$5, Stream$1);

	function ReadableState$4(options, stream) {
	  var Duplex = _stream_duplex$3;

	  options = options || {};

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.buffer = [];
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;


	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex)
	    this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder$4)
	      StringDecoder$4 = string_decoder$3.StringDecoder;
	    this.decoder = new StringDecoder$4(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	function Readable$5(options) {

	  if (!(this instanceof Readable$5))
	    return new Readable$5(options);

	  this._readableState = new ReadableState$4(options, this);

	  // legacy
	  this.readable = true;

	  Stream$1.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable$5.prototype.push = function(chunk, encoding) {
	  var state = this._readableState;

	  if (util$2.isString(chunk) && !state.objectMode) {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = new Buffer$9(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk$4(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable$5.prototype.unshift = function(chunk) {
	  var state = this._readableState;
	  return readableAddChunk$4(this, state, chunk, '', true);
	};

	function readableAddChunk$4(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid$4(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (util$2.isNullOrUndefined(chunk)) {
	    state.reading = false;
	    if (!state.ended)
	      onEofChunk$4(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var e = new Error('stream.unshift() after end event');
	      stream.emit('error', e);
	    } else {
	      if (state.decoder && !addToFront && !encoding)
	        chunk = state.decoder.write(chunk);

	      if (!addToFront)
	        state.reading = false;

	      // if we want the data now, just emit it.
	      if (state.flowing && state.length === 0 && !state.sync) {
	        stream.emit('data', chunk);
	        stream.read(0);
	      } else {
	        // update the buffer info.
	        state.length += state.objectMode ? 1 : chunk.length;
	        if (addToFront)
	          state.buffer.unshift(chunk);
	        else
	          state.buffer.push(chunk);

	        if (state.needReadable)
	          emitReadable$4(stream);
	      }

	      maybeReadMore$4(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData$4(state);
	}



	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData$4(state) {
	  return !state.ended &&
	         (state.needReadable ||
	          state.length < state.highWaterMark ||
	          state.length === 0);
	}

	// backwards compatibility.
	Readable$5.prototype.setEncoding = function(enc) {
	  if (!StringDecoder$4)
	    StringDecoder$4 = string_decoder$3.StringDecoder;
	  this._readableState.decoder = new StringDecoder$4(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 128MB
	var MAX_HWM$4 = 0x800000;
	function roundUpToNextPowerOf2$3(n) {
	  if (n >= MAX_HWM$4) {
	    n = MAX_HWM$4;
	  } else {
	    // Get the next highest power of 2
	    n--;
	    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
	    n++;
	  }
	  return n;
	}

	function howMuchToRead$4(n, state) {
	  if (state.length === 0 && state.ended)
	    return 0;

	  if (state.objectMode)
	    return n === 0 ? 0 : 1;

	  if (isNaN(n) || util$2.isNull(n)) {
	    // only flow one buffer at a time
	    if (state.flowing && state.buffer.length)
	      return state.buffer[0].length;
	    else
	      return state.length;
	  }

	  if (n <= 0)
	    return 0;

	  // If we're asking for more than the target buffer level,
	  // then raise the water mark.  Bump up to the next highest
	  // power of 2, to prevent increasing it excessively in tiny
	  // amounts.
	  if (n > state.highWaterMark)
	    state.highWaterMark = roundUpToNextPowerOf2$3(n);

	  // don't have that much.  return null, unless we've ended.
	  if (n > state.length) {
	    if (!state.ended) {
	      state.needReadable = true;
	      return 0;
	    } else
	      return state.length;
	  }

	  return n;
	}

	// you can override either this method, or the async _read(n) below.
	Readable$5.prototype.read = function(n) {
	  debug$1('read', n);
	  var state = this._readableState;
	  var nOrig = n;

	  if (!util$2.isNumber(n) || n > 0)
	    state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 &&
	      state.needReadable &&
	      (state.length >= state.highWaterMark || state.ended)) {
	    debug$1('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended)
	      endReadable$4(this);
	    else
	      emitReadable$4(this);
	    return null;
	  }

	  n = howMuchToRead$4(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0)
	      endReadable$4(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug$1('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug$1('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug$1('reading or ended', doRead);
	  }

	  if (doRead) {
	    debug$1('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0)
	      state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	  }

	  // If _read pushed data synchronously, then `reading` will be false,
	  // and we need to re-evaluate how much data we can return to the user.
	  if (doRead && !state.reading)
	    n = howMuchToRead$4(nOrig, state);

	  var ret;
	  if (n > 0)
	    ret = fromList$4(n, state);
	  else
	    ret = null;

	  if (util$2.isNull(ret)) {
	    state.needReadable = true;
	    n = 0;
	  }

	  state.length -= n;

	  // If we have nothing in the buffer, then we want to know
	  // as soon as we *do* get something into the buffer.
	  if (state.length === 0 && !state.ended)
	    state.needReadable = true;

	  // If we tried to read() past the EOF, then emit end on the next tick.
	  if (nOrig !== n && state.ended && state.length === 0)
	    endReadable$4(this);

	  if (!util$2.isNull(ret))
	    this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid$4(state, chunk) {
	  var er = null;
	  if (!util$2.isBuffer(chunk) &&
	      !util$2.isString(chunk) &&
	      !util$2.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}


	function onEofChunk$4(stream, state) {
	  if (state.decoder && !state.ended) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable$4(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable$4(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug$1('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync)
	      process.nextTick(function() {
	        emitReadable_$4(stream);
	      });
	    else
	      emitReadable_$4(stream);
	  }
	}

	function emitReadable_$4(stream) {
	  debug$1('emit readable');
	  stream.emit('readable');
	  flow$4(stream);
	}


	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore$4(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    process.nextTick(function() {
	      maybeReadMore_$4(stream, state);
	    });
	  }
	}

	function maybeReadMore_$4(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended &&
	         state.length < state.highWaterMark) {
	    debug$1('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;
	    else
	      len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable$5.prototype._read = function(n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable$5.prototype.pipe = function(dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug$1('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
	              dest !== process.stdout &&
	              dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted)
	    process.nextTick(endFn);
	  else
	    src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug$1('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug$1('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain$4(src);
	  dest.on('drain', ondrain);

	  function cleanup() {
	    debug$1('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain &&
	        (!dest._writableState || dest._writableState.needDrain))
	      ondrain();
	  }

	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug$1('ondata');
	    var ret = dest.write(chunk);
	    if (false === ret) {
	      debug$1('false write response, pause',
	            src._readableState.awaitDrain);
	      src._readableState.awaitDrain++;
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug$1('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EE$3.listenerCount(dest, 'error') === 0)
	      dest.emit('error', er);
	  }
	  // This is a brutally ugly hack to make sure that our error handler
	  // is attached before any userland ones.  NEVER DO THIS.
	  if (!dest._events || !dest._events.error)
	    dest.on('error', onerror);
	  else if (isarray$3(dest._events.error))
	    dest._events.error.unshift(onerror);
	  else
	    dest._events.error = [onerror, dest._events.error];



	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug$1('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug$1('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug$1('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain$4(src) {
	  return function() {
	    var state = src._readableState;
	    debug$1('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain)
	      state.awaitDrain--;
	    if (state.awaitDrain === 0 && EE$3.listenerCount(src, 'data')) {
	      state.flowing = true;
	      flow$4(src);
	    }
	  };
	}


	Readable$5.prototype.unpipe = function(dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0)
	    return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes)
	      return this;

	    if (!dest)
	      dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest)
	      dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var i = 0; i < len; i++)
	      dests[i].emit('unpipe', this);
	    return this;
	  }

	  // try to find the right one.
	  var i = indexOf$4(state.pipes, dest);
	  if (i === -1)
	    return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1)
	    state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable$5.prototype.on = function(ev, fn) {
	  var res = Stream$1.prototype.on.call(this, ev, fn);

	  // If listening to data, and it has not explicitly been paused,
	  // then call resume to start the flow of data on the next tick.
	  if (ev === 'data' && false !== this._readableState.flowing) {
	    this.resume();
	  }

	  if (ev === 'readable' && this.readable) {
	    var state = this._readableState;
	    if (!state.readableListening) {
	      state.readableListening = true;
	      state.emittedReadable = false;
	      state.needReadable = true;
	      if (!state.reading) {
	        var self = this;
	        process.nextTick(function() {
	          debug$1('readable nexttick read 0');
	          self.read(0);
	        });
	      } else if (state.length) {
	        emitReadable$4(this);
	      }
	    }
	  }

	  return res;
	};
	Readable$5.prototype.addListener = Readable$5.prototype.on;

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable$5.prototype.resume = function() {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug$1('resume');
	    state.flowing = true;
	    if (!state.reading) {
	      debug$1('resume read 0');
	      this.read(0);
	    }
	    resume$1(this, state);
	  }
	  return this;
	};

	function resume$1(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    process.nextTick(function() {
	      resume_$1(stream, state);
	    });
	  }
	}

	function resume_$1(stream, state) {
	  state.resumeScheduled = false;
	  stream.emit('resume');
	  flow$4(stream);
	  if (state.flowing && !state.reading)
	    stream.read(0);
	}

	Readable$5.prototype.pause = function() {
	  debug$1('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug$1('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow$4(stream) {
	  var state = stream._readableState;
	  debug$1('flow', state.flowing);
	  if (state.flowing) {
	    do {
	      var chunk = stream.read();
	    } while (null !== chunk && state.flowing);
	  }
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable$5.prototype.wrap = function(stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function() {
	    debug$1('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length)
	        self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function(chunk) {
	    debug$1('wrapped data');
	    if (state.decoder)
	      chunk = state.decoder.write(chunk);
	    if (!chunk || !state.objectMode && !chunk.length)
	      return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (util$2.isFunction(stream[i]) && util$2.isUndefined(this[i])) {
	      this[i] = function(method) { return function() {
	        return stream[method].apply(stream, arguments);
	      }}(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach$7(events, function(ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function(n) {
	    debug$1('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};



	// exposed for testing purposes only.
	Readable$5._fromList = fromList$4;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	function fromList$4(n, state) {
	  var list = state.buffer;
	  var length = state.length;
	  var stringMode = !!state.decoder;
	  var objectMode = !!state.objectMode;
	  var ret;

	  // nothing in the list, definitely empty.
	  if (list.length === 0)
	    return null;

	  if (length === 0)
	    ret = null;
	  else if (objectMode)
	    ret = list.shift();
	  else if (!n || n >= length) {
	    // read it all, truncate the array.
	    if (stringMode)
	      ret = list.join('');
	    else
	      ret = Buffer$9.concat(list, length);
	    list.length = 0;
	  } else {
	    // read just some of it.
	    if (n < list[0].length) {
	      // just take a part of the first list item.
	      // slice is the same for buffers and strings.
	      var buf = list[0];
	      ret = buf.slice(0, n);
	      list[0] = buf.slice(n);
	    } else if (n === list[0].length) {
	      // first list is a perfect match
	      ret = list.shift();
	    } else {
	      // complex case.
	      // we have enough to cover it, but it spans past the first buffer.
	      if (stringMode)
	        ret = '';
	      else
	        ret = new Buffer$9(n);

	      var c = 0;
	      for (var i = 0, l = list.length; i < l && c < n; i++) {
	        var buf = list[0];
	        var cpy = Math.min(n - c, buf.length);

	        if (stringMode)
	          ret += buf.slice(0, cpy);
	        else
	          buf.copy(ret, c, 0, cpy);

	        if (cpy < buf.length)
	          list[0] = buf.slice(cpy);
	        else
	          list.shift();

	        c += cpy;
	      }
	    }
	  }

	  return ret;
	}

	function endReadable$4(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0)
	    throw new Error('endReadable called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    process.nextTick(function() {
	      // Check that we didn't get one last unshift.
	      if (!state.endEmitted && state.length === 0) {
	        state.endEmitted = true;
	        stream.readable = false;
	        stream.emit('end');
	      }
	    });
	  }
	}

	function forEach$7 (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf$4 (xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	var _stream_duplex$3 = Duplex$4;

	/*<replacement>*/
	var objectKeys$5 = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	};
	/*</replacement>*/


	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/




	util$2.inherits(Duplex$4, _stream_readable$3);

	forEach$8(objectKeys$5(_stream_writable$3.prototype), function(method) {
	  if (!Duplex$4.prototype[method])
	    Duplex$4.prototype[method] = _stream_writable$3.prototype[method];
	});

	function Duplex$4(options) {
	  if (!(this instanceof Duplex$4))
	    return new Duplex$4(options);

	  _stream_readable$3.call(this, options);
	  _stream_writable$3.call(this, options);

	  if (options && options.readable === false)
	    this.readable = false;

	  if (options && options.writable === false)
	    this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false)
	    this.allowHalfOpen = false;

	  this.once('end', onend$4);
	}

	// the no-half-open enforcer
	function onend$4() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended)
	    return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  process.nextTick(this.end.bind(this));
	}

	function forEach$8 (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, cb), and it'll handle all
	// the drain event emission and buffering.

	var _stream_writable$3 = Writable$4;

	/*<replacement>*/
	var Buffer$a = buffer.Buffer;
	/*</replacement>*/

	Writable$4.WritableState = WritableState$4;


	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/



	util$2.inherits(Writable$4, Stream$1);

	function WriteReq$4(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	}

	function WritableState$4(options, stream) {
	  var Duplex = _stream_duplex$3;

	  options = options || {};

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex)
	    this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function(er) {
	    onwrite$4(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.buffer = [];

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;
	}

	function Writable$4(options) {
	  var Duplex = _stream_duplex$3;

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable$4) && !(this instanceof Duplex))
	    return new Writable$4(options);

	  this._writableState = new WritableState$4(options, this);

	  // legacy.
	  this.writable = true;

	  Stream$1.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable$4.prototype.pipe = function() {
	  this.emit('error', new Error('Cannot pipe. Not readable.'));
	};


	function writeAfterEnd$4(stream, state, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  process.nextTick(function() {
	    cb(er);
	  });
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk$4(stream, state, chunk, cb) {
	  var valid = true;
	  if (!util$2.isBuffer(chunk) &&
	      !util$2.isString(chunk) &&
	      !util$2.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    var er = new TypeError('Invalid non-string/buffer chunk');
	    stream.emit('error', er);
	    process.nextTick(function() {
	      cb(er);
	    });
	    valid = false;
	  }
	  return valid;
	}

	Writable$4.prototype.write = function(chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (util$2.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (util$2.isBuffer(chunk))
	    encoding = 'buffer';
	  else if (!encoding)
	    encoding = state.defaultEncoding;

	  if (!util$2.isFunction(cb))
	    cb = function() {};

	  if (state.ended)
	    writeAfterEnd$4(this, state, cb);
	  else if (validChunk$4(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer$4(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable$4.prototype.cork = function() {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable$4.prototype.uncork = function() {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing &&
	        !state.corked &&
	        !state.finished &&
	        !state.bufferProcessing &&
	        state.buffer.length)
	      clearBuffer$4(this, state);
	  }
	};

	function decodeChunk$4(state, chunk, encoding) {
	  if (!state.objectMode &&
	      state.decodeStrings !== false &&
	      util$2.isString(chunk)) {
	    chunk = new Buffer$a(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer$4(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk$4(state, chunk, encoding);
	  if (util$2.isBuffer(chunk))
	    encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret)
	    state.needDrain = true;

	  if (state.writing || state.corked)
	    state.buffer.push(new WriteReq$4(chunk, encoding, cb));
	  else
	    doWrite$4(stream, state, false, len, chunk, encoding, cb);

	  return ret;
	}

	function doWrite$4(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev)
	    stream._writev(chunk, state.onwrite);
	  else
	    stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError$4(stream, state, sync, er, cb) {
	  if (sync)
	    process.nextTick(function() {
	      state.pendingcb--;
	      cb(er);
	    });
	  else {
	    state.pendingcb--;
	    cb(er);
	  }

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate$4(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite$4(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate$4(state);

	  if (er)
	    onwriteError$4(stream, state, sync, er, cb);
	  else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish$4(stream, state);

	    if (!finished &&
	        !state.corked &&
	        !state.bufferProcessing &&
	        state.buffer.length) {
	      clearBuffer$4(stream, state);
	    }

	    if (sync) {
	      process.nextTick(function() {
	        afterWrite$4(stream, state, finished, cb);
	      });
	    } else {
	      afterWrite$4(stream, state, finished, cb);
	    }
	  }
	}

	function afterWrite$4(stream, state, finished, cb) {
	  if (!finished)
	    onwriteDrain$4(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe$4(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain$4(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}


	// if there's something in the buffer waiting, then process it
	function clearBuffer$4(stream, state) {
	  state.bufferProcessing = true;

	  if (stream._writev && state.buffer.length > 1) {
	    // Fast case, write everything using _writev()
	    var cbs = [];
	    for (var c = 0; c < state.buffer.length; c++)
	      cbs.push(state.buffer[c].callback);

	    // count the one we are adding, as well.
	    // TODO(isaacs) clean this up
	    state.pendingcb++;
	    doWrite$4(stream, state, true, state.length, state.buffer, '', function(err) {
	      for (var i = 0; i < cbs.length; i++) {
	        state.pendingcb--;
	        cbs[i](err);
	      }
	    });

	    // Clear buffer
	    state.buffer = [];
	  } else {
	    // Slow case, write chunks one-by-one
	    for (var c = 0; c < state.buffer.length; c++) {
	      var entry = state.buffer[c];
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite$4(stream, state, false, len, chunk, encoding, cb);

	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        c++;
	        break;
	      }
	    }

	    if (c < state.buffer.length)
	      state.buffer = state.buffer.slice(c);
	    else
	      state.buffer.length = 0;
	  }

	  state.bufferProcessing = false;
	}

	Writable$4.prototype._write = function(chunk, encoding, cb) {
	  cb(new Error('not implemented'));

	};

	Writable$4.prototype._writev = null;

	Writable$4.prototype.end = function(chunk, encoding, cb) {
	  var state = this._writableState;

	  if (util$2.isFunction(chunk)) {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (util$2.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (!util$2.isNullOrUndefined(chunk))
	    this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished)
	    endWritable$4(this, state, cb);
	};


	function needFinish$4(stream, state) {
	  return (state.ending &&
	          state.length === 0 &&
	          !state.finished &&
	          !state.writing);
	}

	function prefinish$1(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe$4(stream, state) {
	  var need = needFinish$4(stream, state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish$1(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else
	      prefinish$1(stream, state);
	  }
	  return need;
	}

	function endWritable$4(stream, state, cb) {
	  state.ending = true;
	  finishMaybe$4(stream, state);
	  if (cb) {
	    if (state.finished)
	      process.nextTick(cb);
	    else
	      stream.once('finish', cb);
	  }
	  state.ended = true;
	}

	var writable$1 = _stream_writable$3;

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.


	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	var _stream_transform$3 = Transform$4;



	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/

	util$2.inherits(Transform$4, _stream_duplex$3);


	function TransformState$4(options, stream) {
	  this.afterTransform = function(er, data) {
	    return afterTransform$4(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	}

	function afterTransform$4(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb)
	    return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (!util$2.isNullOrUndefined(data))
	    stream.push(data);

	  if (cb)
	    cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}


	function Transform$4(options) {
	  if (!(this instanceof Transform$4))
	    return new Transform$4(options);

	  _stream_duplex$3.call(this, options);

	  this._transformState = new TransformState$4(options, this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  this.once('prefinish', function() {
	    if (util$2.isFunction(this._flush))
	      this._flush(function(er) {
	        done$4(stream, er);
	      });
	    else
	      done$4(stream);
	  });
	}

	Transform$4.prototype.push = function(chunk, encoding) {
	  this._transformState.needTransform = false;
	  return _stream_duplex$3.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform$4.prototype._transform = function(chunk, encoding, cb) {
	  throw new Error('not implemented');
	};

	Transform$4.prototype._write = function(chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform ||
	        rs.needReadable ||
	        rs.length < rs.highWaterMark)
	      this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform$4.prototype._read = function(n) {
	  var ts = this._transformState;

	  if (!util$2.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};


	function done$4(stream, er) {
	  if (er)
	    return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length)
	    throw new Error('calling transform done when ws.length != 0');

	  if (ts.transforming)
	    throw new Error('calling transform done when still transforming');

	  return stream.push(null);
	}

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	var _stream_passthrough$3 = PassThrough$4;



	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/

	util$2.inherits(PassThrough$4, _stream_transform$3);

	function PassThrough$4(options) {
	  if (!(this instanceof PassThrough$4))
	    return new PassThrough$4(options);

	  _stream_transform$3.call(this, options);
	}

	PassThrough$4.prototype._transform = function(chunk, encoding, cb) {
	  cb(null, chunk);
	};

	var readable$3 = createCommonjsModule(function (module, exports) {
	exports = module.exports = _stream_readable$3;
	exports.Stream = Stream$1;
	exports.Readable = exports;
	exports.Writable = _stream_writable$3;
	exports.Duplex = _stream_duplex$3;
	exports.Transform = _stream_transform$3;
	exports.PassThrough = _stream_passthrough$3;
	if (!process.browser && process.env.READABLE_STREAM === 'disable') {
	  module.exports = Stream$1;
	}
	});
	var readable_1$3 = readable$3.Stream;
	var readable_2$3 = readable$3.Readable;
	var readable_3$3 = readable$3.Writable;
	var readable_4$3 = readable$3.Duplex;
	var readable_5$3 = readable$3.Transform;
	var readable_6$3 = readable$3.PassThrough;

	var levelFixRange$1 = 
	function fixRange(opts) {
	  var reverse = opts.reverse;
	  var end     = opts.end;
	  var start   = opts.start;

	  var range = [start, end];
	  if(start != null && end != null)
	    range.sort();
	  if(reverse)
	    range = range.reverse();

	  opts.start   = range[0];
	  opts.end     = range[1];
	  return opts
	};

	var levelPeek = createCommonjsModule(function (module, exports) {
	//get the first/last record in a range

	exports = module.exports = peek;
	exports.first    = first;
	exports.last     = last;

	function once(emitter, events, listener) {
	  var remove = [];
	  events.forEach(function (e) {
	    function onEvent (arg) {
	      if(listener(e, arg) === false) return
	      remove.forEach(function (r) {
	        r();
	      });
	    }
	    emitter.on(e, onEvent);
	    remove.push(function () {
	      emitter.removeListener(e, onEvent);
	    });
	  });
	  return emitter
	}


	function peek (db, opts, cb) {
	  opts.limit = opts.reverse ? 2 : 1;
	  var stream = once(db.createReadStream(opts), 
	    ['data', 'error', 'end'],
	    function (event, data) {
	      if(opts.reverse && data && opts.start 
	        && (data.key.toString() > opts.start))
	        return false
	      if(event == 'error') cb(data);
	      else if(event == 'end') cb(new Error('range not found'), null, null);
	      else cb(null, data.key, data.value);
	    });
	}

	function first (db, opts, cb) {
	  if (!cb) {
	    cb = opts;
	    opts = {};
	  }
	  opts.reverse = false;
	  return peek(db, levelFixRange$1(opts), cb)  
	}

	//SO, this is pretty horrible,
	//but it's works around an issue here
	//https://github.com/rvagg/node-levelup/issues/110

	function last (db, opts, cb) {
	  if (!cb) {
	    cb = opts;
	    opts = {};
	  }
	  var start = opts.start;
	  opts.reverse = true;
	  return peek(db, levelFixRange$1(opts), function (err, key, value) {
	    if(err) {
	      var _start = opts.start;
	      opts.start = null;
	      peek (db, opts, function (_, key, value) {
	        if(!key) return cb(err, null, null)
	        var _key = key.toString();
	        if(_key <= _start && (!opts.end || _key >= opts.end))
	          cb(_, key, value);
	        else cb(err, null, null);
	      });
	    }
	    else cb(err, key, value);
	  })
	}
	});
	var levelPeek_1 = levelPeek.first;
	var levelPeek_2 = levelPeek.last;

	// Returns a wrapper function that returns a wrapped callback
	// The wrapper function should do some stuff, and return a
	// presumably different callback function.
	// This makes sure that own properties are retained, so that
	// decorations and such are not lost along the way.
	var wrappy_1 = wrappy;
	function wrappy (fn, cb) {
	  if (fn && cb) return wrappy(fn)(cb)

	  if (typeof fn !== 'function')
	    throw new TypeError('need wrapper function')

	  Object.keys(fn).forEach(function (k) {
	    wrapper[k] = fn[k];
	  });

	  return wrapper

	  function wrapper() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    var ret = fn.apply(this, args);
	    var cb = args[args.length-1];
	    if (typeof ret === 'function' && ret !== cb) {
	      Object.keys(cb).forEach(function (k) {
	        ret[k] = cb[k];
	      });
	    }
	    return ret
	  }
	}

	var once_1 = wrappy_1(once);
	var strict = wrappy_1(onceStrict);

	once.proto = once(function () {
	  Object.defineProperty(Function.prototype, 'once', {
	    value: function () {
	      return once(this)
	    },
	    configurable: true
	  });

	  Object.defineProperty(Function.prototype, 'onceStrict', {
	    value: function () {
	      return onceStrict(this)
	    },
	    configurable: true
	  });
	});

	function once (fn) {
	  var f = function () {
	    if (f.called) return f.value
	    f.called = true;
	    return f.value = fn.apply(this, arguments)
	  };
	  f.called = false;
	  return f
	}

	function onceStrict (fn) {
	  var f = function () {
	    if (f.called)
	      throw new Error(f.onceError)
	    f.called = true;
	    return f.value = fn.apply(this, arguments)
	  };
	  var name = fn.name || 'Function wrapped with `once`';
	  f.onceError = name + " shouldn't be called more than once";
	  f.called = false;
	  return f
	}
	once_1.strict = strict;

	var EMPTY = new Buffer(0);
	var ENCODER = {
		encode: function(data) {
			return typeof data === 'string' ? data = new Buffer(data) : data;
		},
		decode: function(data) {
			return Buffer.isBuffer(data) ? data : new Buffer(data);
		},
		buffer: true,
		type: 'raw'
	};

	var noop = function() {};

	var pad$1 = function(n) {
		n = n.toString(16);
		return '00000000'.slice(0, -n.length)+n;
	};

	var expand = function(buf, len) {
		var tmp = new Buffer(len);
		buf.copy(tmp);
		return tmp;
	};

	var levelBlobs = function(db, opts) {
		if (!opts) opts = {};

		var blobs = {};

		var blockSize = opts.blockSize || 65536;
		var maxBatch = opts.batch || 100;
		var blank = new Buffer(blockSize);

		db.put('\x00', 'ignore', noop); // memdown#12 workaround

		var reservations = {};
		var mutateBlock = function(key, offset, block, append, cb) {
			var release = function() {
				if (!--reservations[key].locks) delete reservations[key];
			};

			var onreservation = function(r) {
				r.locks++;

				if (!r.block && !offset) {
					r.block = block;
					cb(null, r.block, release);
					return;
				}

				if (!r.block) r.block = new Buffer(blockSize);
				if (r.block.length < offset + block.length) r.block = expand(r.block, offset + block.length);

				block.copy(r.block, offset);

				if (!append && offset + block.length < r.block.length) r.block = r.block.slice(0, offset+block.length);
				cb(null, r.block, release);
			};

			if (reservations[key]) return onreservation(reservations[key]);

			db.get(key, {valueEncoding:ENCODER}, function(err, block) {
				if (err && !err.notFound) return cb(err);
				if (!reservations[key]) reservations[key] = {locks:0, block:block};
				onreservation(reservations[key]);
			});
		};

		var WriteStream = function(name, opts) {
			if (!(this instanceof WriteStream)) return new WriteStream(name, opts);
			if (!opts) opts = {};

			this.name = name;
			this.blocks = [];
			this.batch = [];
			this.bytesWritten = 0;
			this.truncate = !opts.append;
			this.append = opts.append;

			this._shouldInitAppend = this.append && opts.start === undefined;
			this._destroyed = false;
			this._init(opts.start || 0);

			writable$1.call(this);
		};

		debugUtil.inherits(WriteStream, writable$1);

		WriteStream.prototype._init = function(start) {
			this.blockIndex = (start / blockSize) | 0;
			this.blockOffset = start - this.blockIndex * blockSize;
			this.blockLength = this.blockOffset;
		};

		WriteStream.prototype._flush = function(cb) {
			if (!this.batch.length) return cb();

			var key = this.batch[this.batch.length-1].key;
			var batch = this.batch;
			this.batch = [];

			if (!this.truncate) return db.batch(batch, cb);
			this.truncate = false;
			this._truncate(batch, key, cb);
		};

		WriteStream.prototype._truncate = function(batch, key, cb) {
			cb = once_1(cb);

			var dels = [];
			var keys = db.createKeyStream({
				start: key,
				end: this.name+'\xff\xff'
			});

			keys.on('error', cb);

			keys.on('data', function(key) {
				dels.push({type:'del', key:key});
			});

			keys.on('end', function() {
				dels.push.apply(dels, batch);
				db.batch(dels, cb);
			});
		};

		WriteStream.prototype._writeBlock = function(cb) {
			var block = this.blocks.length === 1 ? this.blocks[0] : Buffer.concat(this.blocks, this.blockLength - this.blockOffset);
			var index = this.blockIndex;
			var offset = this.blockOffset;
			var self = this;

			this.blockOffset = 0;
			this.blockLength = 0;
			this.blockIndex++;
			this.blocks = [];

			var key = this.name+'\xff'+pad$1(index);

			var append = function(block, force, cb) {
				if (block.length) {
					self.batch.push({
						type: 'put',
						key: key,
						value: block,
						valueEncoding: ENCODER
					});
				}

				if (!force && self.batch.length < maxBatch) return cb();
				return self._flush(cb);
			};

			if (!offset && block.length === blockSize) return append(block, false, cb);
			if (!offset && !this.append) return append(block, false, cb);

			// partial write
			mutateBlock(key, offset, block, this.append, function(err, block, release) {
				if (err) return cb(err);
				append(block, true, function(err) {
					release();
					cb(err);
				});
			});
		};

		WriteStream.prototype._initAppend = function(data, enc, cb) {
			var self = this;
			this._shouldInitAppend = false;
			blobs.size(this.name, function(err, size) {
				if (err) return cb(err);
				self._init(size);
				self._write(data, enc, cb);
			});
		};

		WriteStream.prototype._write = function(data, enc, cb) {
			if (!data.length || this._destroyed) return cb();
			if (this._shouldInitAppend) return this._initAppend(data, enc, cb);

			var self = this;
			var overflow;
			var free = blockSize - this.blockLength;

			var done = function(err) {
				if (err) return cb(err);
				if (overflow) return self._write(overflow, enc, cb);
				cb();
			};

			if (data.length > free) {
				overflow = data.slice(free);
				data = data.slice(0, free);
			}

			this.bytesWritten += data.length;
			this.blockLength += data.length;
			this.blocks.push(data);

			if (data.length < free) return done();
			this._writeBlock(done);
		};

		WriteStream.prototype.destroy = function() {
			if (this._destroyed) return;
			this._destroyed = true;
			process.nextTick(this.emit.bind(this, 'close'));
		};

		WriteStream.prototype.end = function(data) {
			var self = this;
			var args = arguments;

			if (data && typeof data !== 'function') {
				this.write(data);
				data = EMPTY;
			}

			this.write(EMPTY, function() {
				self._writeBlock(function(err) {
					if (err) return self.emit('error', err);
					self._flush(function(err) {
						if (err) return self.emit('error', err);
						writable$1.prototype.end.apply(self, args);
					});
				});
			});
		};

		var ReadStream = function(name, opts) {
			if (!opts) opts = {};

			var self = this;

			var start = opts.start || 0;
			var blockIndex = (start / blockSize) | 0;
			var blockOffset = start - blockIndex * blockSize;
			var key = name+'\xff'+pad$1(blockIndex);

			this.name = name;
			this._missing = (typeof opts.end === 'number' ? opts.end : Infinity) - start + 1;
			this._paused = false;
			this._destroyed = false;

			this._reader = db.createReadStream({
				start: key,
				end: name+'\xff\xff',
				valueEncoding: ENCODER
			});

			var onblock = function(val) {
				key = name+'\xff'+pad$1(++blockIndex);

				if (!self._missing) return false;

				if (blockOffset) {
					val = val.slice(blockOffset);
					blockOffset = 0;
					if (!val.length) return true;
				}

				if (val.length > self._missing) val = val.slice(0, self._missing);

				self._missing -= val.length;
				self._pause(!self.push(val));

				return !!self._missing;
			};

			this._reader.on('data', function(data) {
				while (data.key > key) {
					if (!onblock(blank)) return;
				}

				onblock(data.value);
			});

			this._reader.on('error', function(err) {
				self.emit('error', err);
			});

			this._reader.on('end', function() {
				self.push(null);
			});

			readable$3.call(this);
		};

		debugUtil.inherits(ReadStream, readable$3);

		ReadStream.prototype.destroy = function() {
			if (this._destroyed) return;
			this._destroyed = true;
			this._reader.destroy();
			process.nextTick(this.emit.bind(this, 'close'));
		};

		ReadStream.prototype._pause = function(paused) {
			if (this._paused === paused) return;
			this._paused = paused;
			if (this._paused) this._reader.pause();
			else this._reader.resume();
		};

		ReadStream.prototype._read = function() {
			this._pause(false);
		};

		blobs.remove = function(name, cb) {
			cb = once_1(cb || noop);

			var batch = [];
			var keys = db.createKeyStream({
				start: name+'\xff',
				end: name+'\xff\xff'
			});

			keys.on('error', cb);

			keys.on('data', function(key) {
				batch.push({type:'del', key:key});
			});

			keys.on('end', function() {
				db.batch(batch, cb);
			});
		};

		blobs.size = function(name, cb) {
			levelPeek.last(db, {
				start: name+'\xff',
				end: name+'\xff\xff',
				valueEncoding:ENCODER
			}, function(err, latest, val) {
				if (err && err.message === 'range not found') return cb(null, 0);
				if (err) return cb(err);
				if (latest.slice(0, name.length+1) !== name+'\xff') return cb(null, 0);

				cb(null, parseInt(latest.toString().slice(name.length+1), 16) * blockSize + val.length);
			});
		};

		blobs.write = function(name, data, opts, cb) {
			if (typeof opts === 'function') return blobs.write(name, data, null, opts);
			if (!opts) opts = {};
			if (!cb) cb = noop;

			var ws = blobs.createWriteStream(name, opts);

			ws.on('error', cb);
			ws.on('finish', function() {
				cb();
			});

			ws.write(data);
			ws.end();
		};

		blobs.read = function(name, opts, cb) {
			if (typeof opts === 'function') return blobs.read(name, null, opts);
			if (!opts) opts = {};

			var rs = blobs.createReadStream(name, opts);
			var list = [];

			rs.on('error', cb);
			rs.on('data', function(data) {
				list.push(data);
			});
			rs.on('end', function() {
				cb(null, list.length === 1 ? list[0] : Buffer.concat(list));
			});
		};

		blobs.createReadStream = function(name, opts) {
			return new ReadStream(name, opts);
		};

		blobs.createWriteStream = function(name, opts) {
			return new WriteStream(name, opts);
		};

		return blobs;
	};

	var octal = function (num, base) {
	  return parseInt(num.toString(), base || 8)
	};

	var errno_1$1 = createCommonjsModule(function (module, exports) {
	Object.keys(errno.code).forEach(function(code) {
		var e = errno.code[code];

		exports[code] = function(path) {
			var err = new Error(code+', '+e.description+(path ? ' \''+path+'\'' : ''));
			err.errno = e.errno;
			err.code = code;
			err.path = path;
			return err;
		};
	});
	});

	var processNextickArgs = createCommonjsModule(function (module) {

	if (typeof process === 'undefined' ||
	    !process.version ||
	    process.version.indexOf('v0.') === 0 ||
	    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
	  module.exports = { nextTick: nextTick };
	} else {
	  module.exports = process;
	}

	function nextTick(fn, arg1, arg2, arg3) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('"callback" argument must be a function');
	  }
	  var len = arguments.length;
	  var args, i;
	  switch (len) {
	  case 0:
	  case 1:
	    return process.nextTick(fn);
	  case 2:
	    return process.nextTick(function afterTickOne() {
	      fn.call(null, arg1);
	    });
	  case 3:
	    return process.nextTick(function afterTickTwo() {
	      fn.call(null, arg1, arg2);
	    });
	  case 4:
	    return process.nextTick(function afterTickThree() {
	      fn.call(null, arg1, arg2, arg3);
	    });
	  default:
	    args = new Array(len - 1);
	    i = 0;
	    while (i < args.length) {
	      args[i++] = arguments[i];
	    }
	    return process.nextTick(function afterTick() {
	      fn.apply(null, args);
	    });
	  }
	}
	});
	var processNextickArgs_1 = processNextickArgs.nextTick;

	var toString$4 = {}.toString;

	var isarray$4 = Array.isArray || function (arr) {
	  return toString$4.call(arr) == '[object Array]';
	};

	var stream$1 = Stream$1;

	var safeBuffer = createCommonjsModule(function (module, exports) {
	/* eslint-disable node/no-deprecated-api */

	var Buffer = buffer.Buffer;

	// alternative to using Object.keys for old browsers
	function copyProps (src, dst) {
	  for (var key in src) {
	    dst[key] = src[key];
	  }
	}
	if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
	  module.exports = buffer;
	} else {
	  // Copy properties from require('buffer')
	  copyProps(buffer, exports);
	  exports.Buffer = SafeBuffer;
	}

	function SafeBuffer (arg, encodingOrOffset, length) {
	  return Buffer(arg, encodingOrOffset, length)
	}

	// Copy static methods from Buffer
	copyProps(Buffer, SafeBuffer);

	SafeBuffer.from = function (arg, encodingOrOffset, length) {
	  if (typeof arg === 'number') {
	    throw new TypeError('Argument must not be a number')
	  }
	  return Buffer(arg, encodingOrOffset, length)
	};

	SafeBuffer.alloc = function (size, fill, encoding) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  var buf = Buffer(size);
	  if (fill !== undefined) {
	    if (typeof encoding === 'string') {
	      buf.fill(fill, encoding);
	    } else {
	      buf.fill(fill);
	    }
	  } else {
	    buf.fill(0);
	  }
	  return buf
	};

	SafeBuffer.allocUnsafe = function (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  return Buffer(size)
	};

	SafeBuffer.allocUnsafeSlow = function (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  return buffer.SlowBuffer(size)
	};
	});
	var safeBuffer_1 = safeBuffer.Buffer;

	var BufferList$2 = createCommonjsModule(function (module) {

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Buffer = safeBuffer.Buffer;


	function copyBuffer(src, target, offset) {
	  src.copy(target, offset);
	}

	module.exports = function () {
	  function BufferList() {
	    _classCallCheck(this, BufferList);

	    this.head = null;
	    this.tail = null;
	    this.length = 0;
	  }

	  BufferList.prototype.push = function push(v) {
	    var entry = { data: v, next: null };
	    if (this.length > 0) this.tail.next = entry;else this.head = entry;
	    this.tail = entry;
	    ++this.length;
	  };

	  BufferList.prototype.unshift = function unshift(v) {
	    var entry = { data: v, next: this.head };
	    if (this.length === 0) this.tail = entry;
	    this.head = entry;
	    ++this.length;
	  };

	  BufferList.prototype.shift = function shift() {
	    if (this.length === 0) return;
	    var ret = this.head.data;
	    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
	    --this.length;
	    return ret;
	  };

	  BufferList.prototype.clear = function clear() {
	    this.head = this.tail = null;
	    this.length = 0;
	  };

	  BufferList.prototype.join = function join(s) {
	    if (this.length === 0) return '';
	    var p = this.head;
	    var ret = '' + p.data;
	    while (p = p.next) {
	      ret += s + p.data;
	    }return ret;
	  };

	  BufferList.prototype.concat = function concat(n) {
	    if (this.length === 0) return Buffer.alloc(0);
	    if (this.length === 1) return this.head.data;
	    var ret = Buffer.allocUnsafe(n >>> 0);
	    var p = this.head;
	    var i = 0;
	    while (p) {
	      copyBuffer(p.data, ret, i);
	      i += p.data.length;
	      p = p.next;
	    }
	    return ret;
	  };

	  return BufferList;
	}();

	if (debugUtil && debugUtil.inspect && debugUtil.inspect.custom) {
	  module.exports.prototype[debugUtil.inspect.custom] = function () {
	    var obj = debugUtil.inspect({ length: this.length });
	    return this.constructor.name + ' ' + obj;
	  };
	}
	});

	/*<replacement>*/


	/*</replacement>*/

	// undocumented cb() API, needed for core, not for public API
	function destroy$1(err, cb) {
	  var _this = this;

	  var readableDestroyed = this._readableState && this._readableState.destroyed;
	  var writableDestroyed = this._writableState && this._writableState.destroyed;

	  if (readableDestroyed || writableDestroyed) {
	    if (cb) {
	      cb(err);
	    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
	      processNextickArgs.nextTick(emitErrorNT, this, err);
	    }
	    return this;
	  }

	  // we set destroyed to true before firing error callbacks in order
	  // to make it re-entrance safe in case destroy() is called within callbacks

	  if (this._readableState) {
	    this._readableState.destroyed = true;
	  }

	  // if this is a duplex stream mark the writable part as destroyed as well
	  if (this._writableState) {
	    this._writableState.destroyed = true;
	  }

	  this._destroy(err || null, function (err) {
	    if (!cb && err) {
	      processNextickArgs.nextTick(emitErrorNT, _this, err);
	      if (_this._writableState) {
	        _this._writableState.errorEmitted = true;
	      }
	    } else if (cb) {
	      cb(err);
	    }
	  });

	  return this;
	}

	function undestroy() {
	  if (this._readableState) {
	    this._readableState.destroyed = false;
	    this._readableState.reading = false;
	    this._readableState.ended = false;
	    this._readableState.endEmitted = false;
	  }

	  if (this._writableState) {
	    this._writableState.destroyed = false;
	    this._writableState.ended = false;
	    this._writableState.ending = false;
	    this._writableState.finished = false;
	    this._writableState.errorEmitted = false;
	  }
	}

	function emitErrorNT(self, err) {
	  self.emit('error', err);
	}

	var destroy_1 = {
	  destroy: destroy$1,
	  undestroy: undestroy
	};

	/**
	 * For Node.js, simply re-export the core `util.deprecate` function.
	 */

	var node = debugUtil.deprecate;

	/*<replacement>*/


	/*</replacement>*/

	var _stream_writable$4 = Writable$5;

	// It seems a linked list but it is not
	// there will be only 2 of these for each stream
	function CorkedRequest$1(state) {
	  var _this = this;

	  this.next = null;
	  this.entry = null;
	  this.finish = function () {
	    onCorkedFinish(_this, state);
	  };
	}
	/* </replacement> */

	/*<replacement>*/
	var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextickArgs.nextTick;
	/*</replacement>*/

	/*<replacement>*/
	var Duplex$5;
	/*</replacement>*/

	Writable$5.WritableState = WritableState$5;

	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/

	/*<replacement>*/
	var internalUtil = {
	  deprecate: node
	};
	/*</replacement>*/

	/*<replacement>*/

	/*</replacement>*/

	/*<replacement>*/

	var Buffer$b = safeBuffer.Buffer;
	var OurUint8Array = commonjsGlobal.Uint8Array || function () {};
	function _uint8ArrayToBuffer(chunk) {
	  return Buffer$b.from(chunk);
	}
	function _isUint8Array(obj) {
	  return Buffer$b.isBuffer(obj) || obj instanceof OurUint8Array;
	}

	/*</replacement>*/



	util$2.inherits(Writable$5, stream$1);

	function nop$1() {}

	function WritableState$5(options, stream) {
	  Duplex$5 = Duplex$5 || _stream_duplex$4;

	  options = options || {};

	  // Duplex streams are both readable and writable, but share
	  // the same options object.
	  // However, some cases require setting options to different
	  // values for the readable and the writable sides of the duplex stream.
	  // These options can be provided separately as readableXXX and writableXXX.
	  var isDuplex = stream instanceof Duplex$5;

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var writableHwm = options.writableHighWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

	  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;else this.highWaterMark = defaultHwm;

	  // cast to ints.
	  this.highWaterMark = Math.floor(this.highWaterMark);

	  // if _final has been called
	  this.finalCalled = false;

	  // drain event flag.
	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // has it been destroyed
	  this.destroyed = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function (er) {
	    onwrite$5(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.bufferedRequest = null;
	  this.lastBufferedRequest = null;

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;

	  // count buffered requests
	  this.bufferedRequestCount = 0;

	  // allocate the first CorkedRequest, there is always
	  // one allocated and free to use, and we maintain at most two
	  this.corkedRequestsFree = new CorkedRequest$1(this);
	}

	WritableState$5.prototype.getBuffer = function getBuffer() {
	  var current = this.bufferedRequest;
	  var out = [];
	  while (current) {
	    out.push(current);
	    current = current.next;
	  }
	  return out;
	};

	(function () {
	  try {
	    Object.defineProperty(WritableState$5.prototype, 'buffer', {
	      get: internalUtil.deprecate(function () {
	        return this.getBuffer();
	      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
	    });
	  } catch (_) {}
	})();

	// Test _writableState for inheritance to account for Duplex streams,
	// whose prototype chain only points to Readable.
	var realHasInstance;
	if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
	  realHasInstance = Function.prototype[Symbol.hasInstance];
	  Object.defineProperty(Writable$5, Symbol.hasInstance, {
	    value: function (object) {
	      if (realHasInstance.call(this, object)) return true;
	      if (this !== Writable$5) return false;

	      return object && object._writableState instanceof WritableState$5;
	    }
	  });
	} else {
	  realHasInstance = function (object) {
	    return object instanceof this;
	  };
	}

	function Writable$5(options) {
	  Duplex$5 = Duplex$5 || _stream_duplex$4;

	  // Writable ctor is applied to Duplexes, too.
	  // `realHasInstance` is necessary because using plain `instanceof`
	  // would return false, as no `_writableState` property is attached.

	  // Trying to use the custom `instanceof` for Writable here will also break the
	  // Node.js LazyTransform implementation, which has a non-trivial getter for
	  // `_writableState` that would lead to infinite recursion.
	  if (!realHasInstance.call(Writable$5, this) && !(this instanceof Duplex$5)) {
	    return new Writable$5(options);
	  }

	  this._writableState = new WritableState$5(options, this);

	  // legacy.
	  this.writable = true;

	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;

	    if (typeof options.writev === 'function') this._writev = options.writev;

	    if (typeof options.destroy === 'function') this._destroy = options.destroy;

	    if (typeof options.final === 'function') this._final = options.final;
	  }

	  stream$1.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable$5.prototype.pipe = function () {
	  this.emit('error', new Error('Cannot pipe, not readable'));
	};

	function writeAfterEnd$5(stream, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  processNextickArgs.nextTick(cb, er);
	}

	// Checks that a user-supplied chunk is valid, especially for the particular
	// mode the stream is in. Currently this means that `null` is never accepted
	// and undefined/non-string values are only allowed in object mode.
	function validChunk$5(stream, state, chunk, cb) {
	  var valid = true;
	  var er = false;

	  if (chunk === null) {
	    er = new TypeError('May not write null values to stream');
	  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  if (er) {
	    stream.emit('error', er);
	    processNextickArgs.nextTick(cb, er);
	    valid = false;
	  }
	  return valid;
	}

	Writable$5.prototype.write = function (chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;
	  var isBuf = !state.objectMode && _isUint8Array(chunk);

	  if (isBuf && !Buffer$b.isBuffer(chunk)) {
	    chunk = _uint8ArrayToBuffer(chunk);
	  }

	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

	  if (typeof cb !== 'function') cb = nop$1;

	  if (state.ended) writeAfterEnd$5(this, cb);else if (isBuf || validChunk$5(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer$5(this, state, isBuf, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable$5.prototype.cork = function () {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable$5.prototype.uncork = function () {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer$5(this, state);
	  }
	};

	Writable$5.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
	  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
	  this._writableState.defaultEncoding = encoding;
	  return this;
	};

	function decodeChunk$5(state, chunk, encoding) {
	  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
	    chunk = Buffer$b.from(chunk, encoding);
	  }
	  return chunk;
	}

	Object.defineProperty(Writable$5.prototype, 'writableHighWaterMark', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function () {
	    return this._writableState.highWaterMark;
	  }
	});

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer$5(stream, state, isBuf, chunk, encoding, cb) {
	  if (!isBuf) {
	    var newChunk = decodeChunk$5(state, chunk, encoding);
	    if (chunk !== newChunk) {
	      isBuf = true;
	      encoding = 'buffer';
	      chunk = newChunk;
	    }
	  }
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;

	  if (state.writing || state.corked) {
	    var last = state.lastBufferedRequest;
	    state.lastBufferedRequest = {
	      chunk: chunk,
	      encoding: encoding,
	      isBuf: isBuf,
	      callback: cb,
	      next: null
	    };
	    if (last) {
	      last.next = state.lastBufferedRequest;
	    } else {
	      state.bufferedRequest = state.lastBufferedRequest;
	    }
	    state.bufferedRequestCount += 1;
	  } else {
	    doWrite$5(stream, state, false, len, chunk, encoding, cb);
	  }

	  return ret;
	}

	function doWrite$5(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError$5(stream, state, sync, er, cb) {
	  --state.pendingcb;

	  if (sync) {
	    // defer the callback if we are being called synchronously
	    // to avoid piling up things on the stack
	    processNextickArgs.nextTick(cb, er);
	    // this can emit finish, and it will always happen
	    // after error
	    processNextickArgs.nextTick(finishMaybe$5, stream, state);
	    stream._writableState.errorEmitted = true;
	    stream.emit('error', er);
	  } else {
	    // the caller expect this to happen before if
	    // it is async
	    cb(er);
	    stream._writableState.errorEmitted = true;
	    stream.emit('error', er);
	    // this can emit finish, but finish must
	    // always follow error
	    finishMaybe$5(stream, state);
	  }
	}

	function onwriteStateUpdate$5(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite$5(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate$5(state);

	  if (er) onwriteError$5(stream, state, sync, er, cb);else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish$5(state);

	    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
	      clearBuffer$5(stream, state);
	    }

	    if (sync) {
	      /*<replacement>*/
	      asyncWrite(afterWrite$5, stream, state, finished, cb);
	      /*</replacement>*/
	    } else {
	      afterWrite$5(stream, state, finished, cb);
	    }
	  }
	}

	function afterWrite$5(stream, state, finished, cb) {
	  if (!finished) onwriteDrain$5(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe$5(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain$5(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}

	// if there's something in the buffer waiting, then process it
	function clearBuffer$5(stream, state) {
	  state.bufferProcessing = true;
	  var entry = state.bufferedRequest;

	  if (stream._writev && entry && entry.next) {
	    // Fast case, write everything using _writev()
	    var l = state.bufferedRequestCount;
	    var buffer = new Array(l);
	    var holder = state.corkedRequestsFree;
	    holder.entry = entry;

	    var count = 0;
	    var allBuffers = true;
	    while (entry) {
	      buffer[count] = entry;
	      if (!entry.isBuf) allBuffers = false;
	      entry = entry.next;
	      count += 1;
	    }
	    buffer.allBuffers = allBuffers;

	    doWrite$5(stream, state, true, state.length, buffer, '', holder.finish);

	    // doWrite is almost always async, defer these to save a bit of time
	    // as the hot path ends with doWrite
	    state.pendingcb++;
	    state.lastBufferedRequest = null;
	    if (holder.next) {
	      state.corkedRequestsFree = holder.next;
	      holder.next = null;
	    } else {
	      state.corkedRequestsFree = new CorkedRequest$1(state);
	    }
	    state.bufferedRequestCount = 0;
	  } else {
	    // Slow case, write chunks one-by-one
	    while (entry) {
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite$5(stream, state, false, len, chunk, encoding, cb);
	      entry = entry.next;
	      state.bufferedRequestCount--;
	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        break;
	      }
	    }

	    if (entry === null) state.lastBufferedRequest = null;
	  }

	  state.bufferedRequest = entry;
	  state.bufferProcessing = false;
	}

	Writable$5.prototype._write = function (chunk, encoding, cb) {
	  cb(new Error('_write() is not implemented'));
	};

	Writable$5.prototype._writev = null;

	Writable$5.prototype.end = function (chunk, encoding, cb) {
	  var state = this._writableState;

	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished) endWritable$5(this, state, cb);
	};

	function needFinish$5(state) {
	  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}
	function callFinal(stream, state) {
	  stream._final(function (err) {
	    state.pendingcb--;
	    if (err) {
	      stream.emit('error', err);
	    }
	    state.prefinished = true;
	    stream.emit('prefinish');
	    finishMaybe$5(stream, state);
	  });
	}
	function prefinish$2(stream, state) {
	  if (!state.prefinished && !state.finalCalled) {
	    if (typeof stream._final === 'function') {
	      state.pendingcb++;
	      state.finalCalled = true;
	      processNextickArgs.nextTick(callFinal, stream, state);
	    } else {
	      state.prefinished = true;
	      stream.emit('prefinish');
	    }
	  }
	}

	function finishMaybe$5(stream, state) {
	  var need = needFinish$5(state);
	  if (need) {
	    prefinish$2(stream, state);
	    if (state.pendingcb === 0) {
	      state.finished = true;
	      stream.emit('finish');
	    }
	  }
	  return need;
	}

	function endWritable$5(stream, state, cb) {
	  state.ending = true;
	  finishMaybe$5(stream, state);
	  if (cb) {
	    if (state.finished) processNextickArgs.nextTick(cb);else stream.once('finish', cb);
	  }
	  state.ended = true;
	  stream.writable = false;
	}

	function onCorkedFinish(corkReq, state, err) {
	  var entry = corkReq.entry;
	  corkReq.entry = null;
	  while (entry) {
	    var cb = entry.callback;
	    state.pendingcb--;
	    cb(err);
	    entry = entry.next;
	  }
	  if (state.corkedRequestsFree) {
	    state.corkedRequestsFree.next = corkReq;
	  } else {
	    state.corkedRequestsFree = corkReq;
	  }
	}

	Object.defineProperty(Writable$5.prototype, 'destroyed', {
	  get: function () {
	    if (this._writableState === undefined) {
	      return false;
	    }
	    return this._writableState.destroyed;
	  },
	  set: function (value) {
	    // we ignore the value if the stream
	    // has not been initialized yet
	    if (!this._writableState) {
	      return;
	    }

	    // backward compatibility, the user is explicitly
	    // managing destroyed
	    this._writableState.destroyed = value;
	  }
	});

	Writable$5.prototype.destroy = destroy_1.destroy;
	Writable$5.prototype._undestroy = destroy_1.undestroy;
	Writable$5.prototype._destroy = function (err, cb) {
	  this.end();
	  cb(err);
	};

	/*<replacement>*/


	/*</replacement>*/

	/*<replacement>*/
	var objectKeys$6 = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    keys.push(key);
	  }return keys;
	};
	/*</replacement>*/

	var _stream_duplex$4 = Duplex$6;

	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/




	util$2.inherits(Duplex$6, _stream_readable$4);

	{
	  // avoid scope creep, the keys array can then be collected
	  var keys$1 = objectKeys$6(_stream_writable$4.prototype);
	  for (var v$1 = 0; v$1 < keys$1.length; v$1++) {
	    var method$1 = keys$1[v$1];
	    if (!Duplex$6.prototype[method$1]) Duplex$6.prototype[method$1] = _stream_writable$4.prototype[method$1];
	  }
	}

	function Duplex$6(options) {
	  if (!(this instanceof Duplex$6)) return new Duplex$6(options);

	  _stream_readable$4.call(this, options);
	  _stream_writable$4.call(this, options);

	  if (options && options.readable === false) this.readable = false;

	  if (options && options.writable === false) this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

	  this.once('end', onend$5);
	}

	Object.defineProperty(Duplex$6.prototype, 'writableHighWaterMark', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function () {
	    return this._writableState.highWaterMark;
	  }
	});

	// the no-half-open enforcer
	function onend$5() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended) return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  processNextickArgs.nextTick(onEndNT$1, this);
	}

	function onEndNT$1(self) {
	  self.end();
	}

	Object.defineProperty(Duplex$6.prototype, 'destroyed', {
	  get: function () {
	    if (this._readableState === undefined || this._writableState === undefined) {
	      return false;
	    }
	    return this._readableState.destroyed && this._writableState.destroyed;
	  },
	  set: function (value) {
	    // we ignore the value if the stream
	    // has not been initialized yet
	    if (this._readableState === undefined || this._writableState === undefined) {
	      return;
	    }

	    // backward compatibility, the user is explicitly
	    // managing destroyed
	    this._readableState.destroyed = value;
	    this._writableState.destroyed = value;
	  }
	});

	Duplex$6.prototype._destroy = function (err, cb) {
	  this.push(null);
	  this.end();

	  processNextickArgs.nextTick(cb, err);
	};

	/*<replacement>*/

	var Buffer$c = safeBuffer.Buffer;
	/*</replacement>*/

	var isEncoding = Buffer$c.isEncoding || function (encoding) {
	  encoding = '' + encoding;
	  switch (encoding && encoding.toLowerCase()) {
	    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
	      return true;
	    default:
	      return false;
	  }
	};

	function _normalizeEncoding(enc) {
	  if (!enc) return 'utf8';
	  var retried;
	  while (true) {
	    switch (enc) {
	      case 'utf8':
	      case 'utf-8':
	        return 'utf8';
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return 'utf16le';
	      case 'latin1':
	      case 'binary':
	        return 'latin1';
	      case 'base64':
	      case 'ascii':
	      case 'hex':
	        return enc;
	      default:
	        if (retried) return; // undefined
	        enc = ('' + enc).toLowerCase();
	        retried = true;
	    }
	  }
	}
	// Do not cache `Buffer.isEncoding` when checking encoding names as some
	// modules monkey-patch it to support additional encodings
	function normalizeEncoding(enc) {
	  var nenc = _normalizeEncoding(enc);
	  if (typeof nenc !== 'string' && (Buffer$c.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
	  return nenc || enc;
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters.
	var StringDecoder_1 = StringDecoder$5;
	function StringDecoder$5(encoding) {
	  this.encoding = normalizeEncoding(encoding);
	  var nb;
	  switch (this.encoding) {
	    case 'utf16le':
	      this.text = utf16Text;
	      this.end = utf16End;
	      nb = 4;
	      break;
	    case 'utf8':
	      this.fillLast = utf8FillLast;
	      nb = 4;
	      break;
	    case 'base64':
	      this.text = base64Text;
	      this.end = base64End;
	      nb = 3;
	      break;
	    default:
	      this.write = simpleWrite;
	      this.end = simpleEnd;
	      return;
	  }
	  this.lastNeed = 0;
	  this.lastTotal = 0;
	  this.lastChar = Buffer$c.allocUnsafe(nb);
	}

	StringDecoder$5.prototype.write = function (buf) {
	  if (buf.length === 0) return '';
	  var r;
	  var i;
	  if (this.lastNeed) {
	    r = this.fillLast(buf);
	    if (r === undefined) return '';
	    i = this.lastNeed;
	    this.lastNeed = 0;
	  } else {
	    i = 0;
	  }
	  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
	  return r || '';
	};

	StringDecoder$5.prototype.end = utf8End;

	// Returns only complete characters in a Buffer
	StringDecoder$5.prototype.text = utf8Text;

	// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
	StringDecoder$5.prototype.fillLast = function (buf) {
	  if (this.lastNeed <= buf.length) {
	    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
	    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
	  }
	  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
	  this.lastNeed -= buf.length;
	};

	// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
	// continuation byte. If an invalid byte is detected, -2 is returned.
	function utf8CheckByte(byte) {
	  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
	  return byte >> 6 === 0x02 ? -1 : -2;
	}

	// Checks at most 3 bytes at the end of a Buffer in order to detect an
	// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
	// needed to complete the UTF-8 character (if applicable) are returned.
	function utf8CheckIncomplete(self, buf, i) {
	  var j = buf.length - 1;
	  if (j < i) return 0;
	  var nb = utf8CheckByte(buf[j]);
	  if (nb >= 0) {
	    if (nb > 0) self.lastNeed = nb - 1;
	    return nb;
	  }
	  if (--j < i || nb === -2) return 0;
	  nb = utf8CheckByte(buf[j]);
	  if (nb >= 0) {
	    if (nb > 0) self.lastNeed = nb - 2;
	    return nb;
	  }
	  if (--j < i || nb === -2) return 0;
	  nb = utf8CheckByte(buf[j]);
	  if (nb >= 0) {
	    if (nb > 0) {
	      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
	    }
	    return nb;
	  }
	  return 0;
	}

	// Validates as many continuation bytes for a multi-byte UTF-8 character as
	// needed or are available. If we see a non-continuation byte where we expect
	// one, we "replace" the validated continuation bytes we've seen so far with
	// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
	// behavior. The continuation byte check is included three times in the case
	// where all of the continuation bytes for a character exist in the same buffer.
	// It is also done this way as a slight performance increase instead of using a
	// loop.
	function utf8CheckExtraBytes(self, buf, p) {
	  if ((buf[0] & 0xC0) !== 0x80) {
	    self.lastNeed = 0;
	    return '\ufffd';
	  }
	  if (self.lastNeed > 1 && buf.length > 1) {
	    if ((buf[1] & 0xC0) !== 0x80) {
	      self.lastNeed = 1;
	      return '\ufffd';
	    }
	    if (self.lastNeed > 2 && buf.length > 2) {
	      if ((buf[2] & 0xC0) !== 0x80) {
	        self.lastNeed = 2;
	        return '\ufffd';
	      }
	    }
	  }
	}

	// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
	function utf8FillLast(buf) {
	  var p = this.lastTotal - this.lastNeed;
	  var r = utf8CheckExtraBytes(this, buf);
	  if (r !== undefined) return r;
	  if (this.lastNeed <= buf.length) {
	    buf.copy(this.lastChar, p, 0, this.lastNeed);
	    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
	  }
	  buf.copy(this.lastChar, p, 0, buf.length);
	  this.lastNeed -= buf.length;
	}

	// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
	// partial character, the character's bytes are buffered until the required
	// number of bytes are available.
	function utf8Text(buf, i) {
	  var total = utf8CheckIncomplete(this, buf, i);
	  if (!this.lastNeed) return buf.toString('utf8', i);
	  this.lastTotal = total;
	  var end = buf.length - (total - this.lastNeed);
	  buf.copy(this.lastChar, 0, end);
	  return buf.toString('utf8', i, end);
	}

	// For UTF-8, a replacement character is added when ending on a partial
	// character.
	function utf8End(buf) {
	  var r = buf && buf.length ? this.write(buf) : '';
	  if (this.lastNeed) return r + '\ufffd';
	  return r;
	}

	// UTF-16LE typically needs two bytes per character, but even if we have an even
	// number of bytes available, we need to check if we end on a leading/high
	// surrogate. In that case, we need to wait for the next two bytes in order to
	// decode the last character properly.
	function utf16Text(buf, i) {
	  if ((buf.length - i) % 2 === 0) {
	    var r = buf.toString('utf16le', i);
	    if (r) {
	      var c = r.charCodeAt(r.length - 1);
	      if (c >= 0xD800 && c <= 0xDBFF) {
	        this.lastNeed = 2;
	        this.lastTotal = 4;
	        this.lastChar[0] = buf[buf.length - 2];
	        this.lastChar[1] = buf[buf.length - 1];
	        return r.slice(0, -1);
	      }
	    }
	    return r;
	  }
	  this.lastNeed = 1;
	  this.lastTotal = 2;
	  this.lastChar[0] = buf[buf.length - 1];
	  return buf.toString('utf16le', i, buf.length - 1);
	}

	// For UTF-16LE we do not explicitly append special replacement characters if we
	// end on a partial character, we simply let v8 handle that.
	function utf16End(buf) {
	  var r = buf && buf.length ? this.write(buf) : '';
	  if (this.lastNeed) {
	    var end = this.lastTotal - this.lastNeed;
	    return r + this.lastChar.toString('utf16le', 0, end);
	  }
	  return r;
	}

	function base64Text(buf, i) {
	  var n = (buf.length - i) % 3;
	  if (n === 0) return buf.toString('base64', i);
	  this.lastNeed = 3 - n;
	  this.lastTotal = 3;
	  if (n === 1) {
	    this.lastChar[0] = buf[buf.length - 1];
	  } else {
	    this.lastChar[0] = buf[buf.length - 2];
	    this.lastChar[1] = buf[buf.length - 1];
	  }
	  return buf.toString('base64', i, buf.length - n);
	}

	function base64End(buf) {
	  var r = buf && buf.length ? this.write(buf) : '';
	  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
	  return r;
	}

	// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
	function simpleWrite(buf) {
	  return buf.toString(this.encoding);
	}

	function simpleEnd(buf) {
	  return buf && buf.length ? this.write(buf) : '';
	}

	var string_decoder$4 = {
		StringDecoder: StringDecoder_1
	};

	/*<replacement>*/


	/*</replacement>*/

	var _stream_readable$4 = Readable$6;

	/*<replacement>*/

	/*</replacement>*/

	/*<replacement>*/
	var Duplex$7;
	/*</replacement>*/

	Readable$6.ReadableState = ReadableState$5;

	/*<replacement>*/
	var EE$4 = events$1.EventEmitter;

	var EElistenerCount = function (emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/

	/*<replacement>*/

	/*</replacement>*/

	/*<replacement>*/

	var Buffer$d = safeBuffer.Buffer;
	var OurUint8Array$1 = commonjsGlobal.Uint8Array || function () {};
	function _uint8ArrayToBuffer$1(chunk) {
	  return Buffer$d.from(chunk);
	}
	function _isUint8Array$1(obj) {
	  return Buffer$d.isBuffer(obj) || obj instanceof OurUint8Array$1;
	}

	/*</replacement>*/

	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/

	/*<replacement>*/

	var debug$2 = void 0;
	if (debugUtil && debugUtil.debuglog) {
	  debug$2 = debugUtil.debuglog('stream');
	} else {
	  debug$2 = function () {};
	}
	/*</replacement>*/



	var StringDecoder$6;

	util$2.inherits(Readable$6, stream$1);

	var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

	function prependListener$1(emitter, event, fn) {
	  // Sadly this is not cacheable as some libraries bundle their own
	  // event emitter implementation with them.
	  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);

	  // This is a hack to make sure that our error handler is attached before any
	  // userland ones.  NEVER DO THIS. This is here only because this code needs
	  // to continue to work with older versions of Node.js that do not include
	  // the prependListener() method. The goal is to eventually remove this hack.
	  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isarray$4(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
	}

	function ReadableState$5(options, stream) {
	  Duplex$7 = Duplex$7 || _stream_duplex$4;

	  options = options || {};

	  // Duplex streams are both readable and writable, but share
	  // the same options object.
	  // However, some cases require setting options to different
	  // values for the readable and the writable sides of the duplex stream.
	  // These options can be provided separately as readableXXX and writableXXX.
	  var isDuplex = stream instanceof Duplex$7;

	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var readableHwm = options.readableHighWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

	  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;else this.highWaterMark = defaultHwm;

	  // cast to ints.
	  this.highWaterMark = Math.floor(this.highWaterMark);

	  // A linked list is used to store data chunks instead of an array because the
	  // linked list can remove elements from the beginning faster than
	  // array.shift()
	  this.buffer = new BufferList$2();
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the event 'readable'/'data' is emitted
	  // immediately, or on a later tick.  We set this to true at first, because
	  // any actions that shouldn't happen until "later" should generally also
	  // not happen before the first read call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;
	  this.resumeScheduled = false;

	  // has it been destroyed
	  this.destroyed = false;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder$6) StringDecoder$6 = string_decoder$4.StringDecoder;
	    this.decoder = new StringDecoder$6(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	function Readable$6(options) {
	  Duplex$7 = Duplex$7 || _stream_duplex$4;

	  if (!(this instanceof Readable$6)) return new Readable$6(options);

	  this._readableState = new ReadableState$5(options, this);

	  // legacy
	  this.readable = true;

	  if (options) {
	    if (typeof options.read === 'function') this._read = options.read;

	    if (typeof options.destroy === 'function') this._destroy = options.destroy;
	  }

	  stream$1.call(this);
	}

	Object.defineProperty(Readable$6.prototype, 'destroyed', {
	  get: function () {
	    if (this._readableState === undefined) {
	      return false;
	    }
	    return this._readableState.destroyed;
	  },
	  set: function (value) {
	    // we ignore the value if the stream
	    // has not been initialized yet
	    if (!this._readableState) {
	      return;
	    }

	    // backward compatibility, the user is explicitly
	    // managing destroyed
	    this._readableState.destroyed = value;
	  }
	});

	Readable$6.prototype.destroy = destroy_1.destroy;
	Readable$6.prototype._undestroy = destroy_1.undestroy;
	Readable$6.prototype._destroy = function (err, cb) {
	  this.push(null);
	  cb(err);
	};

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable$6.prototype.push = function (chunk, encoding) {
	  var state = this._readableState;
	  var skipChunkCheck;

	  if (!state.objectMode) {
	    if (typeof chunk === 'string') {
	      encoding = encoding || state.defaultEncoding;
	      if (encoding !== state.encoding) {
	        chunk = Buffer$d.from(chunk, encoding);
	        encoding = '';
	      }
	      skipChunkCheck = true;
	    }
	  } else {
	    skipChunkCheck = true;
	  }

	  return readableAddChunk$5(this, chunk, encoding, false, skipChunkCheck);
	};

	// Unshift should *always* be something directly out of read()
	Readable$6.prototype.unshift = function (chunk) {
	  return readableAddChunk$5(this, chunk, null, true, false);
	};

	function readableAddChunk$5(stream, chunk, encoding, addToFront, skipChunkCheck) {
	  var state = stream._readableState;
	  if (chunk === null) {
	    state.reading = false;
	    onEofChunk$5(stream, state);
	  } else {
	    var er;
	    if (!skipChunkCheck) er = chunkInvalid$5(state, chunk);
	    if (er) {
	      stream.emit('error', er);
	    } else if (state.objectMode || chunk && chunk.length > 0) {
	      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer$d.prototype) {
	        chunk = _uint8ArrayToBuffer$1(chunk);
	      }

	      if (addToFront) {
	        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
	      } else if (state.ended) {
	        stream.emit('error', new Error('stream.push() after EOF'));
	      } else {
	        state.reading = false;
	        if (state.decoder && !encoding) {
	          chunk = state.decoder.write(chunk);
	          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore$5(stream, state);
	        } else {
	          addChunk(stream, state, chunk, false);
	        }
	      }
	    } else if (!addToFront) {
	      state.reading = false;
	    }
	  }

	  return needMoreData$5(state);
	}

	function addChunk(stream, state, chunk, addToFront) {
	  if (state.flowing && state.length === 0 && !state.sync) {
	    stream.emit('data', chunk);
	    stream.read(0);
	  } else {
	    // update the buffer info.
	    state.length += state.objectMode ? 1 : chunk.length;
	    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

	    if (state.needReadable) emitReadable$5(stream);
	  }
	  maybeReadMore$5(stream, state);
	}

	function chunkInvalid$5(state, chunk) {
	  var er;
	  if (!_isUint8Array$1(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}

	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData$5(state) {
	  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
	}

	Readable$6.prototype.isPaused = function () {
	  return this._readableState.flowing === false;
	};

	// backwards compatibility.
	Readable$6.prototype.setEncoding = function (enc) {
	  if (!StringDecoder$6) StringDecoder$6 = string_decoder$4.StringDecoder;
	  this._readableState.decoder = new StringDecoder$6(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 8MB
	var MAX_HWM$5 = 0x800000;
	function computeNewHighWaterMark$1(n) {
	  if (n >= MAX_HWM$5) {
	    n = MAX_HWM$5;
	  } else {
	    // Get the next highest power of 2 to prevent increasing hwm excessively in
	    // tiny amounts
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n;
	}

	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function howMuchToRead$5(n, state) {
	  if (n <= 0 || state.length === 0 && state.ended) return 0;
	  if (state.objectMode) return 1;
	  if (n !== n) {
	    // Only flow one buffer at a time
	    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
	  }
	  // If we're asking for more than the current hwm, then raise the hwm.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark$1(n);
	  if (n <= state.length) return n;
	  // Don't have enough
	  if (!state.ended) {
	    state.needReadable = true;
	    return 0;
	  }
	  return state.length;
	}

	// you can override either this method, or the async _read(n) below.
	Readable$6.prototype.read = function (n) {
	  debug$2('read', n);
	  n = parseInt(n, 10);
	  var state = this._readableState;
	  var nOrig = n;

	  if (n !== 0) state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
	    debug$2('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable$5(this);else emitReadable$5(this);
	    return null;
	  }

	  n = howMuchToRead$5(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable$5(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug$2('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug$2('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug$2('reading or ended', doRead);
	  } else if (doRead) {
	    debug$2('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	    // If _read pushed data synchronously, then `reading` will be false,
	    // and we need to re-evaluate how much data we can return to the user.
	    if (!state.reading) n = howMuchToRead$5(nOrig, state);
	  }

	  var ret;
	  if (n > 0) ret = fromList$5(n, state);else ret = null;

	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  } else {
	    state.length -= n;
	  }

	  if (state.length === 0) {
	    // If we have nothing in the buffer, then we want to know
	    // as soon as we *do* get something into the buffer.
	    if (!state.ended) state.needReadable = true;

	    // If we tried to read() past the EOF, then emit end on the next tick.
	    if (nOrig !== n && state.ended) endReadable$5(this);
	  }

	  if (ret !== null) this.emit('data', ret);

	  return ret;
	};

	function onEofChunk$5(stream, state) {
	  if (state.ended) return;
	  if (state.decoder) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable$5(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable$5(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug$2('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync) processNextickArgs.nextTick(emitReadable_$5, stream);else emitReadable_$5(stream);
	  }
	}

	function emitReadable_$5(stream) {
	  debug$2('emit readable');
	  stream.emit('readable');
	  flow$5(stream);
	}

	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore$5(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    processNextickArgs.nextTick(maybeReadMore_$5, stream, state);
	  }
	}

	function maybeReadMore_$5(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
	    debug$2('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;else len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable$6.prototype._read = function (n) {
	  this.emit('error', new Error('_read() is not implemented'));
	};

	Readable$6.prototype.pipe = function (dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug$2('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

	  var endFn = doEnd ? onend : unpipe;
	  if (state.endEmitted) processNextickArgs.nextTick(endFn);else src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable, unpipeInfo) {
	    debug$2('onunpipe');
	    if (readable === src) {
	      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
	        unpipeInfo.hasUnpiped = true;
	        cleanup();
	      }
	    }
	  }

	  function onend() {
	    debug$2('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain$5(src);
	  dest.on('drain', ondrain);

	  var cleanedUp = false;
	  function cleanup() {
	    debug$2('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', unpipe);
	    src.removeListener('data', ondata);

	    cleanedUp = true;

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }

	  // If the user pushes more data while we're writing to dest then we'll end up
	  // in ondata again. However, we only want to increase awaitDrain once because
	  // dest will only emit one 'drain' event for the multiple writes.
	  // => Introduce a guard on increasing awaitDrain.
	  var increasedAwaitDrain = false;
	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug$2('ondata');
	    increasedAwaitDrain = false;
	    var ret = dest.write(chunk);
	    if (false === ret && !increasedAwaitDrain) {
	      // If the user unpiped during `dest.write()`, it is possible
	      // to get stuck in a permanently paused state if that write
	      // also returned false.
	      // => Check whether `dest` is still a piping destination.
	      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf$5(state.pipes, dest) !== -1) && !cleanedUp) {
	        debug$2('false write response, pause', src._readableState.awaitDrain);
	        src._readableState.awaitDrain++;
	        increasedAwaitDrain = true;
	      }
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug$2('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
	  }

	  // Make sure our error handler is attached before userland ones.
	  prependListener$1(dest, 'error', onerror);

	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug$2('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug$2('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug$2('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain$5(src) {
	  return function () {
	    var state = src._readableState;
	    debug$2('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain) state.awaitDrain--;
	    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
	      state.flowing = true;
	      flow$5(src);
	    }
	  };
	}

	Readable$6.prototype.unpipe = function (dest) {
	  var state = this._readableState;
	  var unpipeInfo = { hasUnpiped: false };

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0) return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes) return this;

	    if (!dest) dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest) dest.emit('unpipe', this, unpipeInfo);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var i = 0; i < len; i++) {
	      dests[i].emit('unpipe', this, unpipeInfo);
	    }return this;
	  }

	  // try to find the right one.
	  var index = indexOf$5(state.pipes, dest);
	  if (index === -1) return this;

	  state.pipes.splice(index, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1) state.pipes = state.pipes[0];

	  dest.emit('unpipe', this, unpipeInfo);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable$6.prototype.on = function (ev, fn) {
	  var res = stream$1.prototype.on.call(this, ev, fn);

	  if (ev === 'data') {
	    // Start flowing on next tick if stream isn't explicitly paused
	    if (this._readableState.flowing !== false) this.resume();
	  } else if (ev === 'readable') {
	    var state = this._readableState;
	    if (!state.endEmitted && !state.readableListening) {
	      state.readableListening = state.needReadable = true;
	      state.emittedReadable = false;
	      if (!state.reading) {
	        processNextickArgs.nextTick(nReadingNextTick$1, this);
	      } else if (state.length) {
	        emitReadable$5(this);
	      }
	    }
	  }

	  return res;
	};
	Readable$6.prototype.addListener = Readable$6.prototype.on;

	function nReadingNextTick$1(self) {
	  debug$2('readable nexttick read 0');
	  self.read(0);
	}

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable$6.prototype.resume = function () {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug$2('resume');
	    state.flowing = true;
	    resume$2(this, state);
	  }
	  return this;
	};

	function resume$2(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    processNextickArgs.nextTick(resume_$2, stream, state);
	  }
	}

	function resume_$2(stream, state) {
	  if (!state.reading) {
	    debug$2('resume read 0');
	    stream.read(0);
	  }

	  state.resumeScheduled = false;
	  state.awaitDrain = 0;
	  stream.emit('resume');
	  flow$5(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}

	Readable$6.prototype.pause = function () {
	  debug$2('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug$2('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow$5(stream) {
	  var state = stream._readableState;
	  debug$2('flow', state.flowing);
	  while (state.flowing && stream.read() !== null) {}
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable$6.prototype.wrap = function (stream) {
	  var _this = this;

	  var state = this._readableState;
	  var paused = false;

	  stream.on('end', function () {
	    debug$2('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length) _this.push(chunk);
	    }

	    _this.push(null);
	  });

	  stream.on('data', function (chunk) {
	    debug$2('wrapped data');
	    if (state.decoder) chunk = state.decoder.write(chunk);

	    // don't skip over falsy values in objectMode
	    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

	    var ret = _this.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = function (method) {
	        return function () {
	          return stream[method].apply(stream, arguments);
	        };
	      }(i);
	    }
	  }

	  // proxy certain important events.
	  for (var n = 0; n < kProxyEvents.length; n++) {
	    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
	  }

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  this._read = function (n) {
	    debug$2('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return this;
	};

	Object.defineProperty(Readable$6.prototype, 'readableHighWaterMark', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function () {
	    return this._readableState.highWaterMark;
	  }
	});

	// exposed for testing purposes only.
	Readable$6._fromList = fromList$5;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromList$5(n, state) {
	  // nothing buffered
	  if (state.length === 0) return null;

	  var ret;
	  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
	    // read it all, truncate the list
	    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
	    state.buffer.clear();
	  } else {
	    // read part of list
	    ret = fromListPartial$1(n, state.buffer, state.decoder);
	  }

	  return ret;
	}

	// Extracts only enough buffered data to satisfy the amount requested.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromListPartial$1(n, list, hasStrings) {
	  var ret;
	  if (n < list.head.data.length) {
	    // slice is the same for buffers and strings
	    ret = list.head.data.slice(0, n);
	    list.head.data = list.head.data.slice(n);
	  } else if (n === list.head.data.length) {
	    // first chunk is a perfect match
	    ret = list.shift();
	  } else {
	    // result spans more than one buffer
	    ret = hasStrings ? copyFromBufferString$1(n, list) : copyFromBuffer$1(n, list);
	  }
	  return ret;
	}

	// Copies a specified amount of characters from the list of buffered data
	// chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBufferString$1(n, list) {
	  var p = list.head;
	  var c = 1;
	  var ret = p.data;
	  n -= ret.length;
	  while (p = p.next) {
	    var str = p.data;
	    var nb = n > str.length ? str.length : n;
	    if (nb === str.length) ret += str;else ret += str.slice(0, n);
	    n -= nb;
	    if (n === 0) {
	      if (nb === str.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = str.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}

	// Copies a specified amount of bytes from the list of buffered data chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBuffer$1(n, list) {
	  var ret = Buffer$d.allocUnsafe(n);
	  var p = list.head;
	  var c = 1;
	  p.data.copy(ret);
	  n -= p.data.length;
	  while (p = p.next) {
	    var buf = p.data;
	    var nb = n > buf.length ? buf.length : n;
	    buf.copy(ret, ret.length - n, 0, nb);
	    n -= nb;
	    if (n === 0) {
	      if (nb === buf.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = buf.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}

	function endReadable$5(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    processNextickArgs.nextTick(endReadableNT$1, state, stream);
	  }
	}

	function endReadableNT$1(state, stream) {
	  // Check that we didn't get one last unshift.
	  if (!state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.readable = false;
	    stream.emit('end');
	  }
	}

	function indexOf$5(xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

	var _stream_transform$4 = Transform$5;



	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/

	util$2.inherits(Transform$5, _stream_duplex$4);

	function afterTransform$5(er, data) {
	  var ts = this._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb) {
	    return this.emit('error', new Error('write callback called multiple times'));
	  }

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (data != null) // single equals check for both `null` and `undefined`
	    this.push(data);

	  cb(er);

	  var rs = this._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    this._read(rs.highWaterMark);
	  }
	}

	function Transform$5(options) {
	  if (!(this instanceof Transform$5)) return new Transform$5(options);

	  _stream_duplex$4.call(this, options);

	  this._transformState = {
	    afterTransform: afterTransform$5.bind(this),
	    needTransform: false,
	    transforming: false,
	    writecb: null,
	    writechunk: null,
	    writeencoding: null
	  };

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;

	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }

	  // When the writable side finishes, then flush out anything remaining.
	  this.on('prefinish', prefinish$3);
	}

	function prefinish$3() {
	  var _this = this;

	  if (typeof this._flush === 'function') {
	    this._flush(function (er, data) {
	      done$5(_this, er, data);
	    });
	  } else {
	    done$5(this, null, null);
	  }
	}

	Transform$5.prototype.push = function (chunk, encoding) {
	  this._transformState.needTransform = false;
	  return _stream_duplex$4.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform$5.prototype._transform = function (chunk, encoding, cb) {
	  throw new Error('_transform() is not implemented');
	};

	Transform$5.prototype._write = function (chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform$5.prototype._read = function (n) {
	  var ts = this._transformState;

	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};

	Transform$5.prototype._destroy = function (err, cb) {
	  var _this2 = this;

	  _stream_duplex$4.prototype._destroy.call(this, err, function (err2) {
	    cb(err2);
	    _this2.emit('close');
	  });
	};

	function done$5(stream, er, data) {
	  if (er) return stream.emit('error', er);

	  if (data != null) // single equals check for both `null` and `undefined`
	    stream.push(data);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');

	  if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');

	  return stream.push(null);
	}

	var _stream_passthrough$4 = PassThrough$5;



	/*<replacement>*/

	util$2.inherits = inherits$2;
	/*</replacement>*/

	util$2.inherits(PassThrough$5, _stream_transform$4);

	function PassThrough$5(options) {
	  if (!(this instanceof PassThrough$5)) return new PassThrough$5(options);

	  _stream_transform$4.call(this, options);
	}

	PassThrough$5.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};

	var readable$4 = createCommonjsModule(function (module, exports) {
	if (process.env.READABLE_STREAM === 'disable' && Stream$1) {
	  module.exports = Stream$1;
	  exports = module.exports = Stream$1.Readable;
	  exports.Readable = Stream$1.Readable;
	  exports.Writable = Stream$1.Writable;
	  exports.Duplex = Stream$1.Duplex;
	  exports.Transform = Stream$1.Transform;
	  exports.PassThrough = Stream$1.PassThrough;
	  exports.Stream = Stream$1;
	} else {
	  exports = module.exports = _stream_readable$4;
	  exports.Stream = Stream$1 || exports;
	  exports.Readable = exports;
	  exports.Writable = _stream_writable$4;
	  exports.Duplex = _stream_duplex$4;
	  exports.Transform = _stream_transform$4;
	  exports.PassThrough = _stream_passthrough$4;
	}
	});
	var readable_1$4 = readable$4.Readable;
	var readable_2$4 = readable$4.Writable;
	var readable_3$4 = readable$4.Duplex;
	var readable_4$4 = readable$4.Transform;
	var readable_5$4 = readable$4.PassThrough;
	var readable_6$4 = readable$4.Stream;

	var toString$5 = Object.prototype.toString;

	var isModern = (
	  typeof Buffer.alloc === 'function' &&
	  typeof Buffer.allocUnsafe === 'function' &&
	  typeof Buffer.from === 'function'
	);

	function isArrayBuffer (input) {
	  return toString$5.call(input).slice(8, -1) === 'ArrayBuffer'
	}

	function fromArrayBuffer$1 (obj, byteOffset, length) {
	  byteOffset >>>= 0;

	  var maxLength = obj.byteLength - byteOffset;

	  if (maxLength < 0) {
	    throw new RangeError("'offset' is out of bounds")
	  }

	  if (length === undefined) {
	    length = maxLength;
	  } else {
	    length >>>= 0;

	    if (length > maxLength) {
	      throw new RangeError("'length' is out of bounds")
	    }
	  }

	  return isModern
	    ? Buffer.from(obj.slice(byteOffset, byteOffset + length))
	    : new Buffer(new Uint8Array(obj.slice(byteOffset, byteOffset + length)))
	}

	function fromString$1 (string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  return isModern
	    ? Buffer.from(string, encoding)
	    : new Buffer(string, encoding)
	}

	function bufferFrom (value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (isArrayBuffer(value)) {
	    return fromArrayBuffer$1(value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString$1(value, encodingOrOffset)
	  }

	  return isModern
	    ? Buffer.from(value)
	    : new Buffer(value)
	}

	var bufferFrom_1 = bufferFrom;

	var typedarray = createCommonjsModule(function (module, exports) {
	var undefined$1 = (void 0); // Paranoia

	// Beyond this value, index getters/setters (i.e. array[0], array[1]) are so slow to
	// create, and consume so much memory, that the browser appears frozen.
	var MAX_ARRAY_LENGTH = 1e5;

	// Approximations of internal ECMAScript conversion functions
	var ECMAScript = (function() {
	  // Stash a copy in case other scripts modify these
	  var opts = Object.prototype.toString,
	      ophop = Object.prototype.hasOwnProperty;

	  return {
	    // Class returns internal [[Class]] property, used to avoid cross-frame instanceof issues:
	    Class: function(v) { return opts.call(v).replace(/^\[object *|\]$/g, ''); },
	    HasProperty: function(o, p) { return p in o; },
	    HasOwnProperty: function(o, p) { return ophop.call(o, p); },
	    IsCallable: function(o) { return typeof o === 'function'; },
	    ToInt32: function(v) { return v >> 0; },
	    ToUint32: function(v) { return v >>> 0; }
	  };
	}());

	// Snapshot intrinsics
	var LN2 = Math.LN2,
	    abs = Math.abs,
	    floor = Math.floor,
	    log = Math.log,
	    min = Math.min,
	    pow = Math.pow,
	    round = Math.round;

	// ES5: lock down object properties
	function configureProperties(obj) {
	  if (getOwnPropNames && defineProp) {
	    var props = getOwnPropNames(obj), i;
	    for (i = 0; i < props.length; i += 1) {
	      defineProp(obj, props[i], {
	        value: obj[props[i]],
	        writable: false,
	        enumerable: false,
	        configurable: false
	      });
	    }
	  }
	}

	// emulate ES5 getter/setter API using legacy APIs
	// http://blogs.msdn.com/b/ie/archive/2010/09/07/transitioning-existing-code-to-the-es5-getter-setter-apis.aspx
	// (second clause tests for Object.defineProperty() in IE<9 that only supports extending DOM prototypes, but
	// note that IE<9 does not support __defineGetter__ or __defineSetter__ so it just renders the method harmless)
	var defineProp;
	if (Object.defineProperty && (function() {
	      try {
	        Object.defineProperty({}, 'x', {});
	        return true;
	      } catch (e) {
	        return false;
	      }
	    })()) {
	  defineProp = Object.defineProperty;
	} else {
	  defineProp = function(o, p, desc) {
	    if (!o === Object(o)) throw new TypeError("Object.defineProperty called on non-object");
	    if (ECMAScript.HasProperty(desc, 'get') && Object.prototype.__defineGetter__) { Object.prototype.__defineGetter__.call(o, p, desc.get); }
	    if (ECMAScript.HasProperty(desc, 'set') && Object.prototype.__defineSetter__) { Object.prototype.__defineSetter__.call(o, p, desc.set); }
	    if (ECMAScript.HasProperty(desc, 'value')) { o[p] = desc.value; }
	    return o;
	  };
	}

	var getOwnPropNames = Object.getOwnPropertyNames || function (o) {
	  if (o !== Object(o)) throw new TypeError("Object.getOwnPropertyNames called on non-object");
	  var props = [], p;
	  for (p in o) {
	    if (ECMAScript.HasOwnProperty(o, p)) {
	      props.push(p);
	    }
	  }
	  return props;
	};

	// ES5: Make obj[index] an alias for obj._getter(index)/obj._setter(index, value)
	// for index in 0 ... obj.length
	function makeArrayAccessors(obj) {
	  if (!defineProp) { return; }

	  if (obj.length > MAX_ARRAY_LENGTH) throw new RangeError("Array too large for polyfill");

	  function makeArrayAccessor(index) {
	    defineProp(obj, index, {
	      'get': function() { return obj._getter(index); },
	      'set': function(v) { obj._setter(index, v); },
	      enumerable: true,
	      configurable: false
	    });
	  }

	  var i;
	  for (i = 0; i < obj.length; i += 1) {
	    makeArrayAccessor(i);
	  }
	}

	// Internal conversion functions:
	//    pack<Type>()   - take a number (interpreted as Type), output a byte array
	//    unpack<Type>() - take a byte array, output a Type-like number

	function as_signed(value, bits) { var s = 32 - bits; return (value << s) >> s; }
	function as_unsigned(value, bits) { var s = 32 - bits; return (value << s) >>> s; }

	function packI8(n) { return [n & 0xff]; }
	function unpackI8(bytes) { return as_signed(bytes[0], 8); }

	function packU8(n) { return [n & 0xff]; }
	function unpackU8(bytes) { return as_unsigned(bytes[0], 8); }

	function packU8Clamped(n) { n = round(Number(n)); return [n < 0 ? 0 : n > 0xff ? 0xff : n & 0xff]; }

	function packI16(n) { return [(n >> 8) & 0xff, n & 0xff]; }
	function unpackI16(bytes) { return as_signed(bytes[0] << 8 | bytes[1], 16); }

	function packU16(n) { return [(n >> 8) & 0xff, n & 0xff]; }
	function unpackU16(bytes) { return as_unsigned(bytes[0] << 8 | bytes[1], 16); }

	function packI32(n) { return [(n >> 24) & 0xff, (n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff]; }
	function unpackI32(bytes) { return as_signed(bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], 32); }

	function packU32(n) { return [(n >> 24) & 0xff, (n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff]; }
	function unpackU32(bytes) { return as_unsigned(bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], 32); }

	function packIEEE754(v, ebits, fbits) {

	  var bias = (1 << (ebits - 1)) - 1,
	      s, e, f, i, bits, str, bytes;

	  function roundToEven(n) {
	    var w = floor(n), f = n - w;
	    if (f < 0.5)
	      return w;
	    if (f > 0.5)
	      return w + 1;
	    return w % 2 ? w + 1 : w;
	  }

	  // Compute sign, exponent, fraction
	  if (v !== v) {
	    // NaN
	    // http://dev.w3.org/2006/webapi/WebIDL/#es-type-mapping
	    e = (1 << ebits) - 1; f = pow(2, fbits - 1); s = 0;
	  } else if (v === Infinity || v === -Infinity) {
	    e = (1 << ebits) - 1; f = 0; s = (v < 0) ? 1 : 0;
	  } else if (v === 0) {
	    e = 0; f = 0; s = (1 / v === -Infinity) ? 1 : 0;
	  } else {
	    s = v < 0;
	    v = abs(v);

	    if (v >= pow(2, 1 - bias)) {
	      e = min(floor(log(v) / LN2), 1023);
	      f = roundToEven(v / pow(2, e) * pow(2, fbits));
	      if (f / pow(2, fbits) >= 2) {
	        e = e + 1;
	        f = 1;
	      }
	      if (e > bias) {
	        // Overflow
	        e = (1 << ebits) - 1;
	        f = 0;
	      } else {
	        // Normalized
	        e = e + bias;
	        f = f - pow(2, fbits);
	      }
	    } else {
	      // Denormalized
	      e = 0;
	      f = roundToEven(v / pow(2, 1 - bias - fbits));
	    }
	  }

	  // Pack sign, exponent, fraction
	  bits = [];
	  for (i = fbits; i; i -= 1) { bits.push(f % 2 ? 1 : 0); f = floor(f / 2); }
	  for (i = ebits; i; i -= 1) { bits.push(e % 2 ? 1 : 0); e = floor(e / 2); }
	  bits.push(s ? 1 : 0);
	  bits.reverse();
	  str = bits.join('');

	  // Bits to bytes
	  bytes = [];
	  while (str.length) {
	    bytes.push(parseInt(str.substring(0, 8), 2));
	    str = str.substring(8);
	  }
	  return bytes;
	}

	function unpackIEEE754(bytes, ebits, fbits) {

	  // Bytes to bits
	  var bits = [], i, j, b, str,
	      bias, s, e, f;

	  for (i = bytes.length; i; i -= 1) {
	    b = bytes[i - 1];
	    for (j = 8; j; j -= 1) {
	      bits.push(b % 2 ? 1 : 0); b = b >> 1;
	    }
	  }
	  bits.reverse();
	  str = bits.join('');

	  // Unpack sign, exponent, fraction
	  bias = (1 << (ebits - 1)) - 1;
	  s = parseInt(str.substring(0, 1), 2) ? -1 : 1;
	  e = parseInt(str.substring(1, 1 + ebits), 2);
	  f = parseInt(str.substring(1 + ebits), 2);

	  // Produce number
	  if (e === (1 << ebits) - 1) {
	    return f !== 0 ? NaN : s * Infinity;
	  } else if (e > 0) {
	    // Normalized
	    return s * pow(2, e - bias) * (1 + f / pow(2, fbits));
	  } else if (f !== 0) {
	    // Denormalized
	    return s * pow(2, -(bias - 1)) * (f / pow(2, fbits));
	  } else {
	    return s < 0 ? -0 : 0;
	  }
	}

	function unpackF64(b) { return unpackIEEE754(b, 11, 52); }
	function packF64(v) { return packIEEE754(v, 11, 52); }
	function unpackF32(b) { return unpackIEEE754(b, 8, 23); }
	function packF32(v) { return packIEEE754(v, 8, 23); }


	//
	// 3 The ArrayBuffer Type
	//

	(function() {

	  /** @constructor */
	  var ArrayBuffer = function ArrayBuffer(length) {
	    length = ECMAScript.ToInt32(length);
	    if (length < 0) throw new RangeError('ArrayBuffer size is not a small enough positive integer');

	    this.byteLength = length;
	    this._bytes = [];
	    this._bytes.length = length;

	    var i;
	    for (i = 0; i < this.byteLength; i += 1) {
	      this._bytes[i] = 0;
	    }

	    configureProperties(this);
	  };

	  exports.ArrayBuffer = exports.ArrayBuffer || ArrayBuffer;

	  //
	  // 4 The ArrayBufferView Type
	  //

	  // NOTE: this constructor is not exported
	  /** @constructor */
	  var ArrayBufferView = function ArrayBufferView() {
	    //this.buffer = null;
	    //this.byteOffset = 0;
	    //this.byteLength = 0;
	  };

	  //
	  // 5 The Typed Array View Types
	  //

	  function makeConstructor(bytesPerElement, pack, unpack) {
	    // Each TypedArray type requires a distinct constructor instance with
	    // identical logic, which this produces.

	    var ctor;
	    ctor = function(buffer, byteOffset, length) {
	      var array, sequence, i, s;

	      if (!arguments.length || typeof arguments[0] === 'number') {
	        // Constructor(unsigned long length)
	        this.length = ECMAScript.ToInt32(arguments[0]);
	        if (length < 0) throw new RangeError('ArrayBufferView size is not a small enough positive integer');

	        this.byteLength = this.length * this.BYTES_PER_ELEMENT;
	        this.buffer = new ArrayBuffer(this.byteLength);
	        this.byteOffset = 0;
	      } else if (typeof arguments[0] === 'object' && arguments[0].constructor === ctor) {
	        // Constructor(TypedArray array)
	        array = arguments[0];

	        this.length = array.length;
	        this.byteLength = this.length * this.BYTES_PER_ELEMENT;
	        this.buffer = new ArrayBuffer(this.byteLength);
	        this.byteOffset = 0;

	        for (i = 0; i < this.length; i += 1) {
	          this._setter(i, array._getter(i));
	        }
	      } else if (typeof arguments[0] === 'object' &&
	                 !(arguments[0] instanceof ArrayBuffer || ECMAScript.Class(arguments[0]) === 'ArrayBuffer')) {
	        // Constructor(sequence<type> array)
	        sequence = arguments[0];

	        this.length = ECMAScript.ToUint32(sequence.length);
	        this.byteLength = this.length * this.BYTES_PER_ELEMENT;
	        this.buffer = new ArrayBuffer(this.byteLength);
	        this.byteOffset = 0;

	        for (i = 0; i < this.length; i += 1) {
	          s = sequence[i];
	          this._setter(i, Number(s));
	        }
	      } else if (typeof arguments[0] === 'object' &&
	                 (arguments[0] instanceof ArrayBuffer || ECMAScript.Class(arguments[0]) === 'ArrayBuffer')) {
	        // Constructor(ArrayBuffer buffer,
	        //             optional unsigned long byteOffset, optional unsigned long length)
	        this.buffer = buffer;

	        this.byteOffset = ECMAScript.ToUint32(byteOffset);
	        if (this.byteOffset > this.buffer.byteLength) {
	          throw new RangeError("byteOffset out of range");
	        }

	        if (this.byteOffset % this.BYTES_PER_ELEMENT) {
	          // The given byteOffset must be a multiple of the element
	          // size of the specific type, otherwise an exception is raised.
	          throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");
	        }

	        if (arguments.length < 3) {
	          this.byteLength = this.buffer.byteLength - this.byteOffset;

	          if (this.byteLength % this.BYTES_PER_ELEMENT) {
	            throw new RangeError("length of buffer minus byteOffset not a multiple of the element size");
	          }
	          this.length = this.byteLength / this.BYTES_PER_ELEMENT;
	        } else {
	          this.length = ECMAScript.ToUint32(length);
	          this.byteLength = this.length * this.BYTES_PER_ELEMENT;
	        }

	        if ((this.byteOffset + this.byteLength) > this.buffer.byteLength) {
	          throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
	        }
	      } else {
	        throw new TypeError("Unexpected argument type(s)");
	      }

	      this.constructor = ctor;

	      configureProperties(this);
	      makeArrayAccessors(this);
	    };

	    ctor.prototype = new ArrayBufferView();
	    ctor.prototype.BYTES_PER_ELEMENT = bytesPerElement;
	    ctor.prototype._pack = pack;
	    ctor.prototype._unpack = unpack;
	    ctor.BYTES_PER_ELEMENT = bytesPerElement;

	    // getter type (unsigned long index);
	    ctor.prototype._getter = function(index) {
	      if (arguments.length < 1) throw new SyntaxError("Not enough arguments");

	      index = ECMAScript.ToUint32(index);
	      if (index >= this.length) {
	        return undefined$1;
	      }

	      var bytes = [], i, o;
	      for (i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT;
	           i < this.BYTES_PER_ELEMENT;
	           i += 1, o += 1) {
	        bytes.push(this.buffer._bytes[o]);
	      }
	      return this._unpack(bytes);
	    };

	    // NONSTANDARD: convenience alias for getter: type get(unsigned long index);
	    ctor.prototype.get = ctor.prototype._getter;

	    // setter void (unsigned long index, type value);
	    ctor.prototype._setter = function(index, value) {
	      if (arguments.length < 2) throw new SyntaxError("Not enough arguments");

	      index = ECMAScript.ToUint32(index);
	      if (index >= this.length) {
	        return undefined$1;
	      }

	      var bytes = this._pack(value), i, o;
	      for (i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT;
	           i < this.BYTES_PER_ELEMENT;
	           i += 1, o += 1) {
	        this.buffer._bytes[o] = bytes[i];
	      }
	    };

	    // void set(TypedArray array, optional unsigned long offset);
	    // void set(sequence<type> array, optional unsigned long offset);
	    ctor.prototype.set = function(index, value) {
	      if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
	      var array, sequence, offset, len,
	          i, s, d,
	          byteOffset, byteLength, tmp;

	      if (typeof arguments[0] === 'object' && arguments[0].constructor === this.constructor) {
	        // void set(TypedArray array, optional unsigned long offset);
	        array = arguments[0];
	        offset = ECMAScript.ToUint32(arguments[1]);

	        if (offset + array.length > this.length) {
	          throw new RangeError("Offset plus length of array is out of range");
	        }

	        byteOffset = this.byteOffset + offset * this.BYTES_PER_ELEMENT;
	        byteLength = array.length * this.BYTES_PER_ELEMENT;

	        if (array.buffer === this.buffer) {
	          tmp = [];
	          for (i = 0, s = array.byteOffset; i < byteLength; i += 1, s += 1) {
	            tmp[i] = array.buffer._bytes[s];
	          }
	          for (i = 0, d = byteOffset; i < byteLength; i += 1, d += 1) {
	            this.buffer._bytes[d] = tmp[i];
	          }
	        } else {
	          for (i = 0, s = array.byteOffset, d = byteOffset;
	               i < byteLength; i += 1, s += 1, d += 1) {
	            this.buffer._bytes[d] = array.buffer._bytes[s];
	          }
	        }
	      } else if (typeof arguments[0] === 'object' && typeof arguments[0].length !== 'undefined') {
	        // void set(sequence<type> array, optional unsigned long offset);
	        sequence = arguments[0];
	        len = ECMAScript.ToUint32(sequence.length);
	        offset = ECMAScript.ToUint32(arguments[1]);

	        if (offset + len > this.length) {
	          throw new RangeError("Offset plus length of array is out of range");
	        }

	        for (i = 0; i < len; i += 1) {
	          s = sequence[i];
	          this._setter(offset + i, Number(s));
	        }
	      } else {
	        throw new TypeError("Unexpected argument type(s)");
	      }
	    };

	    // TypedArray subarray(long begin, optional long end);
	    ctor.prototype.subarray = function(start, end) {
	      function clamp(v, min, max) { return v < min ? min : v > max ? max : v; }

	      start = ECMAScript.ToInt32(start);
	      end = ECMAScript.ToInt32(end);

	      if (arguments.length < 1) { start = 0; }
	      if (arguments.length < 2) { end = this.length; }

	      if (start < 0) { start = this.length + start; }
	      if (end < 0) { end = this.length + end; }

	      start = clamp(start, 0, this.length);
	      end = clamp(end, 0, this.length);

	      var len = end - start;
	      if (len < 0) {
	        len = 0;
	      }

	      return new this.constructor(
	        this.buffer, this.byteOffset + start * this.BYTES_PER_ELEMENT, len);
	    };

	    return ctor;
	  }

	  var Int8Array = makeConstructor(1, packI8, unpackI8);
	  var Uint8Array = makeConstructor(1, packU8, unpackU8);
	  var Uint8ClampedArray = makeConstructor(1, packU8Clamped, unpackU8);
	  var Int16Array = makeConstructor(2, packI16, unpackI16);
	  var Uint16Array = makeConstructor(2, packU16, unpackU16);
	  var Int32Array = makeConstructor(4, packI32, unpackI32);
	  var Uint32Array = makeConstructor(4, packU32, unpackU32);
	  var Float32Array = makeConstructor(4, packF32, unpackF32);
	  var Float64Array = makeConstructor(8, packF64, unpackF64);

	  exports.Int8Array = exports.Int8Array || Int8Array;
	  exports.Uint8Array = exports.Uint8Array || Uint8Array;
	  exports.Uint8ClampedArray = exports.Uint8ClampedArray || Uint8ClampedArray;
	  exports.Int16Array = exports.Int16Array || Int16Array;
	  exports.Uint16Array = exports.Uint16Array || Uint16Array;
	  exports.Int32Array = exports.Int32Array || Int32Array;
	  exports.Uint32Array = exports.Uint32Array || Uint32Array;
	  exports.Float32Array = exports.Float32Array || Float32Array;
	  exports.Float64Array = exports.Float64Array || Float64Array;
	}());

	//
	// 6 The DataView View Type
	//

	(function() {
	  function r(array, index) {
	    return ECMAScript.IsCallable(array.get) ? array.get(index) : array[index];
	  }

	  var IS_BIG_ENDIAN = (function() {
	    var u16array = new(exports.Uint16Array)([0x1234]),
	        u8array = new(exports.Uint8Array)(u16array.buffer);
	    return r(u8array, 0) === 0x12;
	  }());

	  // Constructor(ArrayBuffer buffer,
	  //             optional unsigned long byteOffset,
	  //             optional unsigned long byteLength)
	  /** @constructor */
	  var DataView = function DataView(buffer, byteOffset, byteLength) {
	    if (arguments.length === 0) {
	      buffer = new exports.ArrayBuffer(0);
	    } else if (!(buffer instanceof exports.ArrayBuffer || ECMAScript.Class(buffer) === 'ArrayBuffer')) {
	      throw new TypeError("TypeError");
	    }

	    this.buffer = buffer || new exports.ArrayBuffer(0);

	    this.byteOffset = ECMAScript.ToUint32(byteOffset);
	    if (this.byteOffset > this.buffer.byteLength) {
	      throw new RangeError("byteOffset out of range");
	    }

	    if (arguments.length < 3) {
	      this.byteLength = this.buffer.byteLength - this.byteOffset;
	    } else {
	      this.byteLength = ECMAScript.ToUint32(byteLength);
	    }

	    if ((this.byteOffset + this.byteLength) > this.buffer.byteLength) {
	      throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
	    }

	    configureProperties(this);
	  };

	  function makeGetter(arrayType) {
	    return function(byteOffset, littleEndian) {

	      byteOffset = ECMAScript.ToUint32(byteOffset);

	      if (byteOffset + arrayType.BYTES_PER_ELEMENT > this.byteLength) {
	        throw new RangeError("Array index out of range");
	      }
	      byteOffset += this.byteOffset;

	      var uint8Array = new exports.Uint8Array(this.buffer, byteOffset, arrayType.BYTES_PER_ELEMENT),
	          bytes = [], i;
	      for (i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1) {
	        bytes.push(r(uint8Array, i));
	      }

	      if (Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN)) {
	        bytes.reverse();
	      }

	      return r(new arrayType(new exports.Uint8Array(bytes).buffer), 0);
	    };
	  }

	  DataView.prototype.getUint8 = makeGetter(exports.Uint8Array);
	  DataView.prototype.getInt8 = makeGetter(exports.Int8Array);
	  DataView.prototype.getUint16 = makeGetter(exports.Uint16Array);
	  DataView.prototype.getInt16 = makeGetter(exports.Int16Array);
	  DataView.prototype.getUint32 = makeGetter(exports.Uint32Array);
	  DataView.prototype.getInt32 = makeGetter(exports.Int32Array);
	  DataView.prototype.getFloat32 = makeGetter(exports.Float32Array);
	  DataView.prototype.getFloat64 = makeGetter(exports.Float64Array);

	  function makeSetter(arrayType) {
	    return function(byteOffset, value, littleEndian) {

	      byteOffset = ECMAScript.ToUint32(byteOffset);
	      if (byteOffset + arrayType.BYTES_PER_ELEMENT > this.byteLength) {
	        throw new RangeError("Array index out of range");
	      }

	      // Get bytes
	      var typeArray = new arrayType([value]),
	          byteArray = new exports.Uint8Array(typeArray.buffer),
	          bytes = [], i, byteView;

	      for (i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1) {
	        bytes.push(r(byteArray, i));
	      }

	      // Flip if necessary
	      if (Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN)) {
	        bytes.reverse();
	      }

	      // Write them
	      byteView = new exports.Uint8Array(this.buffer, byteOffset, arrayType.BYTES_PER_ELEMENT);
	      byteView.set(bytes);
	    };
	  }

	  DataView.prototype.setUint8 = makeSetter(exports.Uint8Array);
	  DataView.prototype.setInt8 = makeSetter(exports.Int8Array);
	  DataView.prototype.setUint16 = makeSetter(exports.Uint16Array);
	  DataView.prototype.setInt16 = makeSetter(exports.Int16Array);
	  DataView.prototype.setUint32 = makeSetter(exports.Uint32Array);
	  DataView.prototype.setInt32 = makeSetter(exports.Int32Array);
	  DataView.prototype.setFloat32 = makeSetter(exports.Float32Array);
	  DataView.prototype.setFloat64 = makeSetter(exports.Float64Array);

	  exports.DataView = exports.DataView || DataView;

	}());
	});
	var typedarray_1 = typedarray.ArrayBuffer;
	var typedarray_2 = typedarray.Int8Array;
	var typedarray_3 = typedarray.Uint8Array;
	var typedarray_4 = typedarray.Uint8ClampedArray;
	var typedarray_5 = typedarray.Int16Array;
	var typedarray_6 = typedarray.Uint16Array;
	var typedarray_7 = typedarray.Int32Array;
	var typedarray_8 = typedarray.Uint32Array;
	var typedarray_9 = typedarray.Float32Array;
	var typedarray_10 = typedarray.Float64Array;
	var typedarray_11 = typedarray.DataView;

	var Writable$6 = readable$4.Writable;



	if (typeof Uint8Array === 'undefined') {
	  var U8 = typedarray.Uint8Array;
	} else {
	  var U8 = Uint8Array;
	}

	function ConcatStream(opts, cb) {
	  if (!(this instanceof ConcatStream)) return new ConcatStream(opts, cb)

	  if (typeof opts === 'function') {
	    cb = opts;
	    opts = {};
	  }
	  if (!opts) opts = {};

	  var encoding = opts.encoding;
	  var shouldInferEncoding = false;

	  if (!encoding) {
	    shouldInferEncoding = true;
	  } else {
	    encoding =  String(encoding).toLowerCase();
	    if (encoding === 'u8' || encoding === 'uint8') {
	      encoding = 'uint8array';
	    }
	  }

	  Writable$6.call(this, { objectMode: true });

	  this.encoding = encoding;
	  this.shouldInferEncoding = shouldInferEncoding;

	  if (cb) this.on('finish', function () { cb(this.getBody()); });
	  this.body = [];
	}

	var concatStream = ConcatStream;
	inherits$2(ConcatStream, Writable$6);

	ConcatStream.prototype._write = function(chunk, enc, next) {
	  this.body.push(chunk);
	  next();
	};

	ConcatStream.prototype.inferEncoding = function (buff) {
	  var firstBuffer = buff === undefined ? this.body[0] : buff;
	  if (Buffer.isBuffer(firstBuffer)) return 'buffer'
	  if (typeof Uint8Array !== 'undefined' && firstBuffer instanceof Uint8Array) return 'uint8array'
	  if (Array.isArray(firstBuffer)) return 'array'
	  if (typeof firstBuffer === 'string') return 'string'
	  if (Object.prototype.toString.call(firstBuffer) === "[object Object]") return 'object'
	  return 'buffer'
	};

	ConcatStream.prototype.getBody = function () {
	  if (!this.encoding && this.body.length === 0) return []
	  if (this.shouldInferEncoding) this.encoding = this.inferEncoding();
	  if (this.encoding === 'array') return arrayConcat(this.body)
	  if (this.encoding === 'string') return stringConcat(this.body)
	  if (this.encoding === 'buffer') return bufferConcat(this.body)
	  if (this.encoding === 'uint8array') return u8Concat(this.body)
	  return this.body
	};

	function isArrayish (arr) {
	  return /Array\]$/.test(Object.prototype.toString.call(arr))
	}

	function isBufferish (p) {
	  return typeof p === 'string' || isArrayish(p) || (p && typeof p.subarray === 'function')
	}

	function stringConcat (parts) {
	  var strings = [];
	  for (var i = 0; i < parts.length; i++) {
	    var p = parts[i];
	    if (typeof p === 'string') {
	      strings.push(p);
	    } else if (Buffer.isBuffer(p)) {
	      strings.push(p);
	    } else if (isBufferish(p)) {
	      strings.push(bufferFrom_1(p));
	    } else {
	      strings.push(bufferFrom_1(String(p)));
	    }
	  }
	  if (Buffer.isBuffer(parts[0])) {
	    strings = Buffer.concat(strings);
	    strings = strings.toString('utf8');
	  } else {
	    strings = strings.join('');
	  }
	  return strings
	}

	function bufferConcat (parts) {
	  var bufs = [];
	  for (var i = 0; i < parts.length; i++) {
	    var p = parts[i];
	    if (Buffer.isBuffer(p)) {
	      bufs.push(p);
	    } else if (isBufferish(p)) {
	      bufs.push(bufferFrom_1(p));
	    } else {
	      bufs.push(bufferFrom_1(String(p)));
	    }
	  }
	  return Buffer.concat(bufs)
	}

	function arrayConcat (parts) {
	  var res = [];
	  for (var i = 0; i < parts.length; i++) {
	    res.push.apply(res, parts[i]);
	  }
	  return res
	}

	function u8Concat (parts) {
	  var len = 0;
	  for (var i = 0; i < parts.length; i++) {
	    if (typeof parts[i] === 'string') {
	      parts[i] = bufferFrom_1(parts[i]);
	    }
	    len += parts[i].length;
	  }
	  var u8 = new U8(len);
	  for (var i = 0, offset = 0; i < parts.length; i++) {
	    var part = parts[i];
	    for (var j = 0; j < part.length; j++) {
	      u8[offset++] = part[j];
	    }
	  }
	  return u8
	}

	var toDate = function(date) {
		if (!date) return new Date();
		if (typeof date === 'string') return new Date(date);
		return date;
	};

	var Stat = function(opts) {
		this.uid = opts.uid || 0;
		this.gid = opts.gid || 0;
		this.mode = opts.mode || 0;
		this.size = opts.size || 0;
		this.mtime = toDate(opts.mtime);
		this.atime = toDate(opts.atime);
		this.ctime = toDate(opts.ctime);
		this.type = opts.type;
		this.target = opts.target;
		this.link = opts.link;
		this.blob = opts.blob;
	};

	Stat.prototype.isDirectory = function() {
		return this.type === 'directory';
	};

	Stat.prototype.isFile = function() {
		return this.type === 'file';
	};

	Stat.prototype.isBlockDevice = function() {
		return false;
	};

	Stat.prototype.isCharacterDevice = function() {
		return false;
	};

	Stat.prototype.isSymbolicLink = function() {
		return this.type === 'symlink';
	};

	Stat.prototype.isFIFO = function() {
		return false;
	};

	Stat.prototype.isSocket = function() {
		return false;
	};

	var stat = function(opts) {
		return new Stat(opts);
	};

	var hasKeys_1$2 = hasKeys$2;

	function hasKeys$2(source) {
	    return source !== null &&
	        (typeof source === "object" ||
	        typeof source === "function")
	}

	var xtend$5 = extend$6;

	function extend$6() {
	    var target = {};

	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i];

	        if (!hasKeys_1$2(source)) {
	            continue
	        }

	        for (var key in source) {
	            if (source.hasOwnProperty(key)) {
	                target[key] = source[key];
	            }
	        }
	    }

	    return target
	}

	var ROOT = stat({
		type: 'directory',
		mode: octal(777),
		size: 4096
	});

	var normalize$1 = function(key) {
		key = key[0] === '/' ? key : '/' + key;
		key = path.normalize(key);
		if (key === '/') return key;
		return key[key.length-1] === '/' ? key.slice(0, -1) : key;
	};

	var prefix = function(key) {
		var depth = key.split('/').length.toString(36);
		return '0000000000'.slice(depth.length)+depth+key;
	};

	var paths = function(db) {
		var that = {};

		that.normalize = normalize$1;

		that.get = function(key, cb) {
			key = normalize$1(key);
			if (key === '/') return process.nextTick(cb.bind(null, null, ROOT, '/'));
			db.get(prefix(key), {valueEncoding:'json'}, function(err, doc) {
				if (err && err.notFound) return cb(errno_1$1.ENOENT(key), null, key);
				if (err) return cb(err, null, key);
				cb(null, stat(doc), key);
			});
		};

		that.writable = function(key, cb) {
			key = normalize$1(key);
			if (key === '/') return process.nextTick(cb.bind(null, errno_1$1.EPERM(key)));
			that.follow(path.dirname(key), function(err, parent) {
				if (err) return cb(err);
				if (!parent.isDirectory()) return cb(errno_1$1.ENOTDIR(key));
				cb(null, key);
			});
		};

		that.list = function(key, cb) {
			key = normalize$1(key);

			var start = prefix(key === '/' ? key : key + '/');
			var keys = db.createKeyStream({start: start, end: start+'\xff'});

			cb = once_1(cb);

			keys.on('error', cb);
			keys.pipe(concatStream({encoding:'object'}, function(files) {
				files = files.map(function(file) {
					return file.split('/').pop();
				});

				cb(null, files);
			}));
		};

		var resolve = function(dir, cb) {
			var root = '/';
			var parts = dir.split('/').slice(1);

			var loop = function() {
				that.get(path.join(root, parts.shift()), function(err, doc, key) {
					if (err) return cb(err, doc, dir);
					root = doc.target || key;
					if (!parts.length) return cb(null, doc, key);
					loop();
				});
			};

			loop();
		};

		that.follow = function(key, cb) {
			resolve(normalize$1(key), function loop(err, doc, key) {
				if (err) return cb(err, null, key);
				if (doc.target) return that.get(doc.target, loop);
				cb(null, stat(doc), key);
			});
		};

		that.update = function(key, opts, cb) {
			that.get(key, function(err, doc, key) {
				if (err) return cb(err);
				if (key === '/') return cb(errno_1$1.EPERM(key));
				that.put(key, xtend$5(doc, opts), cb);
			});
		};

		that.put = function(key, opts, cb) {
			that.writable(key, function(err, key) {
				if (err) return cb(err);
				db.put(prefix(key), stat(opts), {valueEncoding:'json'}, cb);
			});
		};

		that.del = function(key, cb) {
			key = normalize$1(key);
			if (key === '/') return process.nextTick(cb.bind(null, errno_1$1.EPERM(key)));
			db.del(prefix(key), cb);
		};

		return that;
	};

	var watchers = function() {
		var listeners = {};
		var that = new events$1.EventEmitter();

		that.watch = function(key, cb) {
			if (!listeners[key]) {
				listeners[key] = new events$1.EventEmitter();
				listeners[key].setMaxListeners(0);
			}

			if (cb) listeners[key].on('change', cb);
			return listeners[key];
		};

		that.watcher = function(key, cb) {
			var watcher = new events$1.EventEmitter();
			var onchange = function() {
				watcher.emit('change', 'change', key);
			};

			that.watch(key, onchange);
			if (cb) watcher.on('change', cb);
			watcher.close = function() {
				that.unwatch(key, onchange);
			};

			return watcher;
		};

		that.unwatch = function(key, cb) {
			if (!listeners[key]) return;
			if (cb) listeners[key].removeListener('change', cb);
			else listeners[key].removeAllListeners('change');
			if (!listeners[key].listeners('change').length) delete listeners[key];	};

		that.change = function(key) {
			if (listeners[key]) listeners[key].emit('change');
			that.emit('change', key);
		};

		that.cb = function(key, cb) {
			return function(err, val) {
				if (key) that.change(key);
				if (cb) cb(err, val);
			};
		};

		return that;
	};

	var nextTick$1 = function(cb, err, val) {
		process.nextTick(function() {
			cb(err, val);
		});
	};

	var noop$1 = function() {};

	var levelFilesystem = function(db, opts) {
		var fs = {};

		db = levelSublevel(db);

		var bl = levelBlobs(db.sublevel('blobs'), opts);
		var ps = paths(db.sublevel('stats'));
		var links = db.sublevel('links');

		var listeners = watchers();
		var fds = [];

		var now = Date.now();
		var inc = function() {
			return ++now;
		};

		fs.mkdir = function(key, mode, cb) {
			if (typeof mode === 'function') return fs.mkdir(key, null, mode);
			if (!mode) mode = octal(777);
			if (!cb) cb = noop$1;

			ps.follow(key, function(err, stat, key) {
				if (err && err.code !== 'ENOENT') return cb(err);
				if (stat) return cb(errno_1$1.EEXIST(key));

				ps.put(key, {
					type:'directory',
					mode: mode,
					size: 4096
				}, listeners.cb(key, cb));
			});
		};

		fs.rmdir = function(key, cb) {
			if (!cb) cb = noop$1;
			ps.follow(key, function(err, stat, key) {
				if (err) return cb(err);
				fs.readdir(key, function(err, files) {
					if (err) return cb(err);
					if (files.length) return cb(errno_1$1.ENOTEMPTY(key));
					ps.del(key, listeners.cb(key, cb));
				});
			});

		};

		fs.readdir = function(key, cb) {
			ps.follow(key, function(err, stat, key) {
				if (err) return cb(err);
				if (!stat) return cb(errno_1$1.ENOENT(key));
				if (!stat.isDirectory()) return cb(errno_1$1.ENOTDIR(key));
				ps.list(key, cb);
			});
		};

		var stat = function(key, lookup, cb) {
			lookup(key, function(err, stat, key) {
				if (err) return cb(err);
				if (!stat.isFile()) return cb(null, stat);
				var blob = stat && stat.blob || key;
				bl.size(blob, function(err, size) {
					if (err) return cb(err);
					stat.size = size;
					cb(null, stat);
				});
			});
		};

		fs.stat = function(key, cb) {
			stat(key, ps.follow, cb);
		};

		fs.lstat = function(key, cb) {
			stat(key, ps.get, cb);
		};

		fs.exists = function(key, cb) {
			ps.follow(key, function(err) {
				cb(!err);
			});
		};

		var chmod = function(key, lookup, mode, cb) {
			if (!cb) cb = noop$1;
			lookup(key, function(err, stat, key) {
				if (err) return cb(err);
				ps.update(key, {mode:mode}, listeners.cb(key, cb));
			});
		};

		fs.chmod = function(key, mode, cb) {
			chmod(key, ps.follow, mode, cb);
		};

		fs.lchmod = function(key, mode, cb) {
			chmod(key, ps.get, mode, cb);
		};

		var chown = function(key, lookup, uid, gid, cb) {
			if (!cb) cb = noop$1;
			lookup(key, function(err, stat, key) {
				if (err) return cb(err);
				ps.update(key, {uid:uid, gid:gid}, listeners.cb(key, cb));
			});
		};

		fs.chown = function(key, uid, gid, cb) {
			chown(key, ps.follow, uid, gid, cb);
		};

		fs.lchown = function(key, uid, gid, cb) {
			chown(key, ps.get, uid, gid, cb);
		};

		fs.utimes = function(key, atime, mtime, cb) {
			if (!cb) cb = noop$1;
			ps.follow(key, function(err, stat, key) {
				if (err) return cb(err);
				var upd = {};
				if (atime) upd.atime = atime;
				if (mtime) upd.mtime = mtime;
				ps.update(key, upd, listeners.cb(key, cb));
			});
		};

		fs.rename = function(from, to, cb) {
			if (!cb) cb = noop$1;

			ps.follow(from, function(err, statFrom, from) {
				if (err) return cb(err);

				var rename = function() {
					cb = listeners.cb(to, listeners.cb(from, cb));
					ps.put(to, statFrom, function(err) {
						if (err) return cb(err);
						ps.del(from, cb);
					});
				};

				ps.follow(to, function(err, statTo, to) {
					if (err && err.code !== 'ENOENT') return cb(err);
					if (!statTo) return rename();
					if (statFrom.isDirectory() !== statTo.isDirectory()) return cb(errno_1$1.EISDIR(from));

					if (statTo.isDirectory()) {
						fs.readdir(to, function(err, list) {
							if (err) return cb(err);
							if (list.length) return cb(errno_1$1.ENOTEMPTY(from));
							rename();
						});
						return;
					}

					rename();
				});
			});
		};

		fs.realpath = function(key, cache, cb) {
			if (typeof cache === 'function') return fs.realpath(key, null, cache);
			ps.follow(key, function(err, stat, key) {
				if (err) return cb(err);
				cb(null, key);
			});
		};

		fs.writeFile = function(key, data, opts, cb) {
			if (typeof opts === 'function') return fs.writeFile(key, data, null, opts);
			if (typeof opts === 'string') opts = {encoding:opts};
			if (!opts) opts = {};
			if (!cb) cb = noop$1;

			if (!Buffer.isBuffer(data)) data = new Buffer(data, opts.encoding || 'utf-8');

			var flags = opts.flags || 'w';
			opts.append = flags[0] !== 'w';

			ps.follow(key, function(err, stat, key) {
				if (err && err.code !== 'ENOENT') return cb(err);
				if (stat && stat.isDirectory()) return cb(errno_1$1.EISDIR(key));
				if (stat && flags[1] === 'x') return cb(errno_1$1.EEXIST(key));

				var blob = stat && stat.blob || key;
				ps.writable(key, function(err) {
					if (err) return cb(err);

					bl.write(blob, data, opts, function(err) {
						if (err) return cb(err);

						ps.put(key, {
							ctime: stat && stat.ctime,
							mtime: new Date(),
							mode: opts.mode || octal(666),
							type:'file'
						}, listeners.cb(key, cb));
					});
				});
			});
		};

		fs.appendFile = function(key, data, opts, cb) {
			if (typeof opts === 'function') return fs.appendFile(key, data, null, opts);
			if (typeof opts === 'string') opts = {encoding:opts};
			if (!opts) opts = {};

			opts.flags = 'a';
			fs.writeFile(key, data, opts, cb);
		};

		fs.unlink = function(key, cb) {
			if (!cb) cb = noop$1;

			ps.get(key, function(err, stat, key) {
				if (err) return cb(err);
				if (stat.isDirectory()) return cb(errno_1$1.EISDIR(key));

				var clean = function(target) {
					levelPeek(links, {start:target+'\xff', end:target+'\xff\xff'}, function(err) {
						if (err) return bl.remove(target, cb); // no more links
						cb();
					});
				};

				var onlink = function() {
					var target = stat.link.slice(0, stat.link.indexOf('\xff'));
					links.del(stat.link, function(err) {
						if (err) return cb(err);
						clean(target);
					});
				};

				ps.del(key, listeners.cb(key, function(err) {
					if (err) return cb(err);
					if (stat.link) return onlink();
					links.del(key+'\xff', function(err) {
						if (err) return cb(err);
						clean(key);
					});
				}));
			});
		};

		fs.readFile = function(key, opts, cb) {
			if (typeof opts === 'function') return fs.readFile(key, null, opts);
			if (typeof opts === 'string') opts = {encoding:opts};
			if (!opts) opts = {};

			var encoding = opts.encoding || 'binary';
			var flag = opts.flag || 'r';

			ps.follow(key, function(err, stat, key) {
				if (err) return cb(err);
				if (stat.isDirectory()) return cb(errno_1$1.EISDIR(key));

				var blob = stat && stat.blob || key;
				bl.read(blob, function(err, data) {
					if (err) return cb(err);
					cb(null, opts.encoding ? data.toString(opts.encoding) : data);
				});
			});
		};

		fs.createReadStream = function(key, opts) {
			if (!opts) opts = {};

			var closed = false;
			var rs = fwdStream.readable(function(cb) {
				ps.follow(key, function(err, stat, key) {
					if (err) return cb(err);
					if (stat.isDirectory()) return cb(errno_1$1.EISDIR(key));

					var blob = stat && stat.blob || key;
					var r = bl.createReadStream(blob, opts);

					rs.emit('open');
					r.on('end', function() {
						process.nextTick(function() {
							if (!closed) rs.emit('close');
						});
					});

					cb(null, r);
				});
			});

			rs.on('close', function() {
				closed = true;
			});

			return rs;
		};

		fs.createWriteStream = function(key, opts) {
			if (!opts) opts = {};

			var flags = opts.flags || 'w';
			var closed = false;
			var mode = opts.mode || octal(666);

			opts.append = flags[0] === 'a';

			var ws = fwdStream.writable(function(cb) {
				ps.follow(key, function(err, stat, key) {
					if (err && err.code !== 'ENOENT') return cb(err);
					if (stat && stat.isDirectory()) return cb(errno_1$1.EISDIR(key));
					if (stat && flags[1] === 'x') return cb(errno_1$1.EEXIST(key));

					var blob = stat && stat.blob || key;
					ps.writable(blob, function(err) {
						if (err) return cb(err);

						var ctime = stat ? stat.ctime : new Date();
						var s = {
							ctime: ctime,
							mtime: new Date(),
							mode: mode,
							type:'file'
						};

						ps.put(key, s, function(err) {
							if (err) return cb(err);

							var w = bl.createWriteStream(blob, opts);

							ws.emit('open');
							w.on('finish', function() {
								s.mtime = new Date();
								ps.put(key, s, function() {
									listeners.change(key);
									if (!closed) ws.emit('close');
								});
							});

							cb(null, w);
						});
					});
				});
			});

			ws.on('close', function() {
				closed = true;
			});

			return ws;
		};

		fs.truncate = function(key, len, cb) {
			ps.follow(key, function(err, stat, key) {
				if (err) return cb(err);

				var blob = stat && stat.blob || key;
				bl.size(blob, function(err, size) {
					if (err) return cb(err);

					ps.writable(key, function(err) {
						if (err) return cb(err);

						cb = once_1(listeners.cb(key, cb));
						if (!len) return bl.remove(blob, cb);

						var ws = bl.createWriteStream(blob, {
							start:size < len ? len-1 : len
						});

						ws.on('error', cb);
						ws.on('finish', cb);

						if (size < len) ws.write(new Buffer([0]));
						ws.end();
					});
				});
			});
		};

		fs.watchFile = function(key, opts, cb) {
			if (typeof opts === 'function') return fs.watchFile(key, null, opts);
			return listeners.watch(ps.normalize(key), cb);
		};

		fs.unwatchFile = function(key, cb) {
			listeners.unwatch(ps.normalize(key), cb);
		};

		fs.watch = function(key, opts, cb) {
			if (typeof opts === 'function') return fs.watch(key, null, opts)
			return listeners.watcher(ps.normalize(key), cb);
		};

		fs.notify = function(cb) {
			listeners.on('change', cb);
		};

		fs.open = function(key, flags, mode, cb) {
			if (typeof mode === 'function') return fs.open(key, flags, null, mode);

			ps.follow(key, function(err, stat, key) {
				if (err && err.code !== 'ENOENT') return cb(err);

				var fl = flags[0];
				var plus = flags[1] === '+' || flags[2] === '+';
				var blob = stat && stat.blob || key;

				var f = {
					key: key,
					blob: blob,
					mode: mode || octal(666),
					readable: fl === 'r' || ((fl === 'w' || fl === 'a') && plus),
					writable: fl === 'w' || fl === 'a' || (fl === 'r' && plus),
					append: fl === 'a'
				};

				if (fl === 'r' && err) return cb(err);
				if (flags[1] === 'x' && stat) return cb(errno_1$1.EEXIST(key));
				if (stat && stat.isDirectory()) return cb(errno_1$1.EISDIR(key));

				bl.size(blob, function(err, size) {
					if (err) return cb(err);

					if (f.append) f.writePos = size;

					ps.writable(key, function(err) {
						if (err) return cb(err);

						var onready = function(err) {
							if (err) return cb(err);

							var i = fds.indexOf(null);
							if (i === -1) i = 10+fds.push(fds.length+10)-1;

							f.fd = i;
							fds[i] = f;
							listeners.change(key);

							cb(null, f.fd);
						};

						var ontruncate = function(err) {
							if (err) return cb(err);
							if (stat) return onready();
							ps.put(blob, {ctime:stat && stat.ctime, type:'file'}, onready);
						};

						if (!f.append && f.writable) return bl.remove(blob, ontruncate);
						ontruncate();
					});
				});
			});
		};

		fs.close = function(fd, cb) {
			var f = fds[fd];
			if (!f) return nextTick$1(cb, errno_1$1.EBADF());

			fds[fd] = null;
			nextTick$1(listeners.cb(f.key, cb));
		};

		fs.write = function(fd, buf, off, len, pos, cb) {
			var f = fds[fd];
			if (!cb) cb = noop$1;
			if (!f || !f.writable) return nextTick$1(cb, errno_1$1.EBADF());

			if (pos === null) pos = f.writePos || 0;

			var slice = buf.slice(off, off+len);
			f.writePos = pos + slice.length;

			bl.write(f.blob, slice, {start:pos, append:true}, function(err) {
				if (err) return cb(err);
				cb(null, len, buf);
			});
		};

		fs.read = function(fd, buf, off, len, pos, cb) {
			var f = fds[fd];
			if (!cb) cb = noop$1;
			if (!f || !f.readable) return nextTick$1(cb, errno_1$1.EBADF());

			if (pos === null) pos = fs.readPos || 0;

			bl.read(f.blob, {start:pos, end:pos+len-1}, function(err, read) {
				if (err) return cb(err);
				var slice = read.slice(0, len);
				slice.copy(buf, off);
				fs.readPos = pos+slice.length;
				cb(null, slice.length, buf);
			});
		};

		fs.fsync = function(fd, cb) {
			var f = fds[fd];
			if (!cb) cb = noop$1;
			if (!f || !f.writable) return nextTick$1(cb, errno_1$1.EBADF());

			nextTick$1(cb);
		};

		fs.ftruncate = function(fd, len, cb) {
			var f = fds[fd];
			if (!cb) cb = noop$1;
			if (!f) return nextTick$1(cb, errno_1$1.EBADF());

			fs.truncate(f.blob, len, cb);
		};

		fs.fchown = function(fd, uid, gid, cb) {
			var f = fds[fd];
			if (!cb) cb = noop$1;
			if (!f) return nextTick$1(cb, errno_1$1.EBADF());

			fs.chown(f.key, uid, gid, cb);
		};

		fs.fchmod = function(fd, mode, cb) {
			var f = fds[fd];
			if (!cb) cb = noop$1;
			if (!f) return nextTick$1(cb, errno_1$1.EBADF());

			fs.chmod(f.key, mode, cb);
		};

		fs.futimes = function(fd, atime, mtime, cb) {
			var f = fds[fd];
			if (!cb) cb = noop$1;
			if (!f) return nextTick$1(cb, errno_1$1.EBADF());

			fs.utimes(f.key, atime, mtime, cb);
		};

		fs.fstat = function(fd, cb) {
			var f = fds[fd];
			if (!f) return nextTick$1(cb, errno_1$1.EBADF());

			fs.stat(f.key, cb);
		};

		fs.symlink = function(target, name, cb) {
			if (!cb) cb = noop$1;
			ps.follow(target, function(err, stat, target) {
				if (err) return cb(err);
				ps.get(name, function(err, stat) {
					if (err && err.code !== 'ENOENT') return cb(err);
					if (stat) return cb(errno_1$1.EEXIST(name));
					ps.put(name, {type:'symlink', target:target, mode:octal(777)}, cb);
				});
			});
		};

		fs.readlink = function(key, cb) {
			ps.get(key, function(err, stat) {
				if (err) return cb(err);
				if (!stat.target) return cb(errno_1$1.EINVAL(key));
				cb(null, stat.target);
			});
		};

		fs.link = function(target, name, cb) {
			if (!cb) cb = noop$1;
			ps.follow(target, function(err, stat, target) {
				if (err) return cb(err);
				if (!stat.isFile()) return cb(errno_1$1.EINVAL(target));
				ps.get(name, function(err, st) {
					if (err && err.code !== 'ENOENT') return cb(err);
					if (st) return cb(errno_1$1.EEXIST(name));
					var link = target+'\xff'+inc();
					links.put(target+'\xff', target, function(err) {
						if (err) return cb(err);
						links.put(link, target, function(err) {
							if (err) return cb(err);
							ps.put(name, {type:'file', link:link, blob:target, mode:stat.mode}, cb);
						});
					});
				});
			});
		};

		return fs;
	};

	var db$1 = levelup('level-filesystem', {db:levelJs});
	var browserifyFs = levelFilesystem(db$1);

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/cores/arrays/isArray
	 * @desc Export function to validate if a value is an array or not
	 * @example
	 *
	 * import { isArray } from 'itee-validators'
	 *
	 * if( isArray( value ) ) {
	 *     //...
	 * } else {
	 *     //...
	 * }
	 *
	 */

	/**
	 * Check if given data is an array
	 *
	 * @param data {*} The data to check against the array type
	 * @returns {boolean} true if data is array, false otherwise
	 */
	function isArray$3 ( data ) {
	    return Array.isArray( data )
	}



	////////////////////

	/**
	 * Check if given data is not an array
	 *
	 * @param data {*} The data to check against the array type
	 * @returns {boolean} true if data is not array, false otherwise
	 */
	function isNotArray ( data ) {
	    return !Array.isArray( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/cores/arrays/isEmptyArray
	 * @desc Export function to validate if a value is an array of array or not
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is an empty array
	 *
	 * @param data {*} The data to check against the empty array
	 * @returns {boolean} true if data is an empty array, false otherwise
	 */
	function isEmptyArray ( data ) {

	    if ( isNotArray( data ) ) { return false }

	    return ( data.length === 0 )

	}

	/////

	/**
	 * Check if given data is null or undefined
	 *
	 * @param data {*} The data to check against the existence
	 * @returns {boolean} true if data is null or undefined, false otherwise.
	 */
	function isNotDefined ( data ) {
	    return ( ( data === null ) || ( typeof data === 'undefined' ) )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/cores/objects/isObject
	 * @desc Export function to validate if a value is an object
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is an object
	 *
	 * @param data {*} The data to check against the object type
	 * @returns {boolean} true if data is object, false otherwise
	 */
	function isObject$2 ( data ) {

	    if ( isNotDefined( data ) ) { return false }

	    return ( data.constructor === Object )
	}

	////

	/**
	 * Check if given data is not an object
	 *
	 * @param data {*} The data to check against the object type
	 * @returns {boolean} true if data is not an object, false otherwise
	 */
	function isNotObject ( data ) {
	    return !isObject$2( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/cores/strings/isString
	 * @desc Export function to validate if a value is a string
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is a string
	 *
	 * @param data {*} The data to check against the string type
	 * @returns {boolean} true if data is a string, false otherwise.
	 */
	function isString$2 ( data ) {
	    return ( typeof data === 'string' || data instanceof String )
	}



	//////

	/**
	 * Check if given data is not a string
	 *
	 * @param data {*} The data to check against the string type
	 * @returns {boolean} true if data is not a string, false otherwise.
	 */
	function isNotString ( data ) {
	    return !isString$2( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/cores/numbers/isNumber
	 * @desc Export function to validate if a value is a finite number
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is a number
	 *
	 * @param data {*} The data to check against the maximum safe integer state
	 * @returns {boolean} true if data is a number, false otherwise.
	 */
	function isNumber$2 ( data ) {

	    if ( isNotDefined( data ) ) { return false }

	    return ( data.constructor === Number )

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/cores/objects/isEmptyObject
	 * @desc Export function to validate if a value is an object
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is an empty object
	 *
	 * @param data {*} The data to check against the emptiness of the object
	 * @returns {boolean} true if data is an empty object, false otherwise
	 */
	function isEmptyObject ( data ) {

	    if ( isNotObject( data ) ) { return false }

	    if ( data.length === 0 ) {
	        return true
	    }

	    // Otherwise, does it have any properties of its own?
	    for ( let key in data ) {
	        if ( Object.prototype.hasOwnProperty.call( data, key ) ) {
	            return false
	        }
	    }

	    return true

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/cores/strings/isEmptyString
	 * @desc Export function to validate if a value is a empty string
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is an empty string
	 *
	 * @param data {*} The data to check against the emptiness of the string
	 * @returns {boolean} true if data is an empty string, false otherwise.
	 */
	function isEmptyString ( data ) {

	    if ( isNotString( data ) ) {
	        return false
	    }

	    return ( data.length === 0 )

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/cores/voids/isEmpty
	 * @desc Export function to validate if a value is a void
	 * @example todo
	 *
	 */

	/**
	 * Check emptiness of given data
	 *
	 * See: https://stackoverflow.com/questions/4346186/how-to-determine-if-a-function-is-empty
	 *
	 * @param data {*} The data to check against the emptiness
	 * @returns {boolean} true if data is considered as empty, false otherwise.
	 */
	function isEmpty ( data ) {

	    if ( isNotDefined( data ) ) { return false }
	    if ( isEmptyString( data ) ) { return true}
	    if ( isEmptyArray( data ) ) { return true }
	    if ( isEmptyObject( data ) ) { return true }

	    return false

	}

	///

	/**
	 * Check fullness of given data
	 *
	 * @param data {*} The data to check against the emptiness
	 * @returns {boolean} true if data is considered as not empty, false otherwise.
	 */
	function isNotEmpty ( data ) {
	    return !isEmpty( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/file-system/paths/isValidPath
	 * @description Export function to validate if a value is a valid path
	 *
	 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
	 *
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is a valid file path
	 *
	 * @param data {*} The data to check against the path type
	 * @returns {boolean} true if data is a valid path, false otherwise
	 */
	function isValidPath ( data ) {
	    return browserifyFs.existsSync( data )
	}

	/**
	 * Check if given data is not a valid file path
	 *
	 * @param data {*} The data to check against the path type
	 * @returns {boolean} true if data is a valid path, false otherwise
	 */
	function isInvalidPath ( data ) {
	    return !isValidPath( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/physics/constants
	 * @desc Export constants about temperatures
	 *
	 */

	/**
	 * @const
	 * @type {number}
	 * @default 0.00000000045
	 * @desc This value corresponding to the absolute zero kelvin value
	 */
	const ABSOLUTE_ZERO_KELVIN = 0.00000000045;

	/**
	 * @const
	 * @type {number}
	 * @default -273.14999999955
	 * @desc This value corresponding to the absolute zero celsius value
	 */
	const ABSOLUTE_ZERO_CELSIUS = -273.14999999955;

	/**
	 * @const
	 * @type {number}
	 * @default -459.67
	 * @desc This value corresponding to the absolute zero fahrenheit value
	 */
	const ABSOLUTE_ZERO_FAHRENHEIT = -459.67;

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/physics/temperatues
	 * @desc Export function to validate if a value is a temperature
	 * @example todo
	 *
	 */

	/**
	 *
	 * @param data
	 * @return {boolean|*|boolean}
	 */
	function isCelsius ( data ) {
	    return ( isNumber$2( data ) && data >= ABSOLUTE_ZERO_CELSIUS )
	}

	///

	/**
	 *
	 * @param data
	 * @return {boolean}
	 */
	function isNotCelsius ( data ) {
	    return !isCelsius( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/physics/temperatues
	 * @desc Export function to validate if a value is a temperature
	 * @example todo
	 *
	 */

	/**
	 *
	 * @param data
	 * @return {boolean|*|boolean}
	 */
	function isFahrenheit ( data ) {
	    return ( isNumber$2( data ) && data >= ABSOLUTE_ZERO_FAHRENHEIT )
	}

	///

	/**
	 *
	 * @param data
	 * @return {boolean}
	 */
	function isNotFahrenheit ( data ) {
	    return !isFahrenheit( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/physics/temperatues
	 * @desc Export function to validate if a value is a temperature
	 * @example todo
	 *
	 */

	/**
	 *
	 * @param data
	 * @return {boolean|*|boolean}
	 */
	function isKelvin ( data ) {
	    return ( isNumber$2( data ) && data >= ABSOLUTE_ZERO_KELVIN )
	}

	///

	/**
	 *
	 * @param data
	 * @return {boolean}
	 */
	function isNotKelvin ( data ) {
	    return !isKelvin( data )
	}

	///

	/**
	 *
	 * @param data {*}
	 * @return {boolean}
	 */
	function isNotTemperature ( data ) {
	    return ( isNotKelvin( data ) && isNotCelsius( data ) && isNotFahrenheit( data ) )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/cores/objects
	 * @description Export the utilities methods about objects
	 */

	function uniq ( a ) {

	    const seen = {};
	    return a.filter( item => Object.prototype.hasOwnProperty.call( seen, item ) ? false : ( seen[ item ] = true ) )

	}

	/**
	 *
	 * @param target
	 * @param source
	 * @return {*}
	 */
	function extend$7 ( target, source ) {

	    let output = undefined;

	    if ( isObject$2( target ) && isNotDefined( source ) ) {

	        output = Object.assign( {}, target );

	    } else if ( isNotDefined( target ) && isObject$2( source ) ) {

	        output = Object.assign( {}, source );

	    } else if ( isObject$2( target ) && isObject$2( source ) ) {

	        output = Object.assign( {}, target );

	        const keys = Object.keys( source );

	        for ( let i = 0, n = keys.length ; i < n ; ++i ) {

	            let key = keys[ i ];

	            if ( isObject$2( source[ key ] ) ) {

	                if ( key in target ) {

	                    output[ key ] = extend$7( target[ key ], source[ key ] );

	                } else {

	                    Object.assign( output, { [ key ]: source[ key ] } );

	                }

	            } else {

	                Object.assign( output, { [ key ]: source[ key ] } );

	            }

	        }

	    } else {

	        output = null;

	    }

	    return output

	}

	/**
	 * Remove old inheritance stuff due to es6 class !
	 */
	function serializeObject () {

	    //    var object = {}
	    //    var a = this.serializeArray()
	    //
	    //    $.each( a, function () {
	    //        if ( object[ this.name ] !== undefined ) {
	    //            if ( !object[ this.name ].push ) {
	    //                object[ this.name ] = [ object[ this.name ] ]
	    //            }
	    //            object[ this.name ].push( this.value || '' )
	    //        } else {
	    //            object[ this.name ] = this.value || ''
	    //        }
	    //    } )
	    //
	    //    return object

	}

	/**
	 *
	 * @param ChildClass
	 * @param ParentClassOrObject
	 * @return {*}
	 */
	function extendObject ( ChildClass, ParentClassOrObject ) {

	    if ( ChildClass.constructor === Function && ParentClassOrObject.constructor === Function ) {

	        // Normal Inheritance
	        ChildClass.prototype             = new ParentClassOrObject();
	        ChildClass.prototype.parent      = ParentClassOrObject.prototype;
	        ChildClass.prototype.constructor = ChildClass;

	    } else if ( ChildClass.constructor === Function && ParentClassOrObject.constructor === Object ) {

	        // Pure Virtual Inheritance
	        ChildClass.prototype             = ParentClassOrObject;
	        ChildClass.prototype.parent      = ParentClassOrObject;
	        ChildClass.prototype.constructor = ChildClass;

	    } else if ( ChildClass.constructor === Object && ParentClassOrObject.constructor === Object ) {

	        //Object Concatenation Inheritance
	        for ( let attribute in ParentClassOrObject ) {

	            if ( Object.prototype.hasOwnProperty.call( ChildClass, attribute ) ) { // We are sure that obj[key] belongs to the object and was not inherited.

	                if ( ParentClassOrObject[ attribute ].constructor === Object || ParentClassOrObject[ attribute ].constructor === Array ) {

	                    ChildClass[ attribute ] = extendObject( ChildClass[ attribute ], ParentClassOrObject[ attribute ] );

	                } else {

	                    ChildClass[ attribute ] = ParentClassOrObject[ attribute ];

	                }

	            } else {

	                ChildClass[ attribute ] = ParentClassOrObject[ attribute ];

	            }

	        }

	    } else if ( ChildClass.constructor === Array && ParentClassOrObject.constructor === Array ) {

	        ChildClass = ChildClass.concat( ParentClassOrObject );

	    } else if ( ChildClass.constructor === Object && ParentClassOrObject.constructor === Array ||
	        ChildClass.constructor === Array && ParentClassOrObject.constructor === Object ) {

	        throw new Error( 'Cannot perform extend of object with an array' )

	    } else {

	        throw new Error( 'Cannot perform extend given parameters...' )

	    }

	    return ChildClass

	}

	/**
	 *
	 * @param particles
	 * @param path
	 * @param interval
	 */
	function createInterval ( particles, path, interval ) {

	    var globalOffset = 0;

	    setInterval( function () {

	        var moveOffset             = 0.1;
	        var DELTA_BETWEEN_PARTICLE = 1; // meter

	        if ( globalOffset >= DELTA_BETWEEN_PARTICLE ) {
	            globalOffset = 0;
	        } else if ( globalOffset + moveOffset > DELTA_BETWEEN_PARTICLE ) { // Avoid final gap jump before new "loop"
	            globalOffset = DELTA_BETWEEN_PARTICLE;
	        } else {
	            globalOffset += moveOffset;
	        }

	        var pathLength       = path.getLength();
	        var localOffset      = globalOffset;
	        var normalizedOffset = undefined;
	        var particle         = undefined;
	        var newPosition      = undefined;

	        for ( var i = 0, numberOfParticles = particles.children.length ; i < numberOfParticles ; i++ ) {

	            particle         = particles.children[ i ];
	            normalizedOffset = localOffset / pathLength;

	            // End of path ( last particle could go to void, but got an error with getPointAt)
	            if ( normalizedOffset > 1 ) {
	                normalizedOffset = 0;
	            }

	            newPosition = path.getPointAt( normalizedOffset );
	            newPosition.y += 0.1;

	            particle.position.copy( newPosition );

	            localOffset += DELTA_BETWEEN_PARTICLE;

	        }

	    }, interval );

	}

	function toEnum ( enumValues ) {

	    return Object.freeze( Object.defineProperties( enumValues, {
	        toString: {
	            configurable: false,
	            enumerable:   false,
	            writable:     false,
	            value:        function _toString () {

	                const keys = Object.keys( this );
	                let result = '';
	                for ( let index = 0, numberOfValues = keys.length ; index < numberOfValues ; index++ ) {
	                    result += `${keys[ index ]}, `;
	                }
	                result = result.slice( 0, -2 );
	                return result

	            }
	        },
	        includes: {
	            configurable: false,
	            enumerable:   false,
	            writable:     false,
	            value:        function _includes ( key ) {
	                return Object.values( this ).includes( key )
	            }
	        },
	        types: {
	            configurable: false,
	            enumerable:   false,
	            writable:     false,
	            value:        function _types () {
	                return Object.keys( this )
	            }
	        }
	    } ) )

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/cores/strings
	 * @description Export the utilities methods about strings
	 *
	 */

	/**
	 * Set the first char to upper case like a classname
	 * @param word
	 * @returns {string}
	 */
	function classNameify ( word ) {
	    return word.charAt( 0 ).toUpperCase() + word.slice( 1 )
	}

	/**
	 * @static
	 * @public
	 * @memberOf TApplication
	 */
	let diacriticsMap = ( () => {

	    /*
	     Licensed under the Apache License, Version 2.0 (the "License");
	     you may not use this file except in compliance with the License.
	     You may obtain a copy of the License at

	     http://www.apache.org/licenses/LICENSE-2.0

	     Unless required by applicable law or agreed to in writing, software
	     distributed under the License is distributed on an "AS IS" BASIS,
	     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	     See the License for the specific language governing permissions and
	     limitations under the License.
	     */

	    const defaultDiacriticsRemovalMap = [
	        {
	            'base':    'A',
	            'letters': '\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F'
	        },
	        {
	            'base':    'AA',
	            'letters': '\uA732'
	        },
	        {
	            'base':    'AE',
	            'letters': '\u00C6\u01FC\u01E2'
	        },
	        {
	            'base':    'AO',
	            'letters': '\uA734'
	        },
	        {
	            'base':    'AU',
	            'letters': '\uA736'
	        },
	        {
	            'base':    'AV',
	            'letters': '\uA738\uA73A'
	        },
	        {
	            'base':    'AY',
	            'letters': '\uA73C'
	        },
	        {
	            'base':    'B',
	            'letters': '\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181'
	        },
	        {
	            'base':    'C',
	            'letters': '\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E'
	        },
	        {
	            'base':    'D',
	            'letters': '\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0'
	        },
	        {
	            'base':    'DZ',
	            'letters': '\u01F1\u01C4'
	        },
	        {
	            'base':    'Dz',
	            'letters': '\u01F2\u01C5'
	        },
	        {
	            'base':    'E',
	            'letters': '\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E'
	        },
	        {
	            'base':    'F',
	            'letters': '\u0046\u24BB\uFF26\u1E1E\u0191\uA77B'
	        },
	        {
	            'base':    'G',
	            'letters': '\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E'
	        },
	        {
	            'base':    'H',
	            'letters': '\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D'
	        },
	        {
	            'base':    'I',
	            'letters': '\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197'
	        },
	        {
	            'base':    'J',
	            'letters': '\u004A\u24BF\uFF2A\u0134\u0248'
	        },
	        {
	            'base':    'K',
	            'letters': '\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2'
	        },
	        {
	            'base':    'L',
	            'letters': '\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780'
	        },
	        {
	            'base':    'LJ',
	            'letters': '\u01C7'
	        },
	        {
	            'base':    'Lj',
	            'letters': '\u01C8'
	        },
	        {
	            'base':    'M',
	            'letters': '\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C'
	        },
	        {
	            'base':    'N',
	            'letters': '\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4'
	        },
	        {
	            'base':    'NJ',
	            'letters': '\u01CA'
	        },
	        {
	            'base':    'Nj',
	            'letters': '\u01CB'
	        },
	        {
	            'base':    'O',
	            'letters': '\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C'
	        },
	        {
	            'base':    'OI',
	            'letters': '\u01A2'
	        },
	        {
	            'base':    'OO',
	            'letters': '\uA74E'
	        },
	        {
	            'base':    'OU',
	            'letters': '\u0222'
	        },
	        {
	            'base':    'OE',
	            'letters': '\u008C\u0152'
	        },
	        {
	            'base':    'oe',
	            'letters': '\u009C\u0153'
	        },
	        {
	            'base':    'P',
	            'letters': '\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754'
	        },
	        {
	            'base':    'Q',
	            'letters': '\u0051\u24C6\uFF31\uA756\uA758\u024A'
	        },
	        {
	            'base':    'R',
	            'letters': '\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782'
	        },
	        {
	            'base':    'S',
	            'letters': '\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784'
	        },
	        {
	            'base':    'T',
	            'letters': '\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786'
	        },
	        {
	            'base':    'TZ',
	            'letters': '\uA728'
	        },
	        {
	            'base':    'U',
	            'letters': '\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244'
	        },
	        {
	            'base':    'V',
	            'letters': '\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245'
	        },
	        {
	            'base':    'VY',
	            'letters': '\uA760'
	        },
	        {
	            'base':    'W',
	            'letters': '\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72'
	        },
	        {
	            'base':    'X',
	            'letters': '\u0058\u24CD\uFF38\u1E8A\u1E8C'
	        },
	        {
	            'base':    'Y',
	            'letters': '\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE'
	        },
	        {
	            'base':    'Z',
	            'letters': '\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762'
	        },
	        {
	            'base':    'a',
	            'letters': '\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250'
	        },
	        {
	            'base':    'aa',
	            'letters': '\uA733'
	        },
	        {
	            'base':    'ae',
	            'letters': '\u00E6\u01FD\u01E3'
	        },
	        {
	            'base':    'ao',
	            'letters': '\uA735'
	        },
	        {
	            'base':    'au',
	            'letters': '\uA737'
	        },
	        {
	            'base':    'av',
	            'letters': '\uA739\uA73B'
	        },
	        {
	            'base':    'ay',
	            'letters': '\uA73D'
	        },
	        {
	            'base':    'b',
	            'letters': '\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253'
	        },
	        {
	            'base':    'c',
	            'letters': '\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184'
	        },
	        {
	            'base':    'd',
	            'letters': '\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A'
	        },
	        {
	            'base':    'dz',
	            'letters': '\u01F3\u01C6'
	        },
	        {
	            'base':    'e',
	            'letters': '\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD'
	        },
	        {
	            'base':    'f',
	            'letters': '\u0066\u24D5\uFF46\u1E1F\u0192\uA77C'
	        },
	        {
	            'base':    'g',
	            'letters': '\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F'
	        },
	        {
	            'base':    'h',
	            'letters': '\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265'
	        },
	        {
	            'base':    'hv',
	            'letters': '\u0195'
	        },
	        {
	            'base':    'i',
	            'letters': '\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131'
	        },
	        {
	            'base':    'j',
	            'letters': '\u006A\u24D9\uFF4A\u0135\u01F0\u0249'
	        },
	        {
	            'base':    'k',
	            'letters': '\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3'
	        },
	        {
	            'base':    'l',
	            'letters': '\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747'
	        },
	        {
	            'base':    'lj',
	            'letters': '\u01C9'
	        },
	        {
	            'base':    'm',
	            'letters': '\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F'
	        },
	        {
	            'base':    'n',
	            'letters': '\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5'
	        },
	        {
	            'base':    'nj',
	            'letters': '\u01CC'
	        },
	        {
	            'base':    'o',
	            'letters': '\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275'
	        },
	        {
	            'base':    'oi',
	            'letters': '\u01A3'
	        },
	        {
	            'base':    'ou',
	            'letters': '\u0223'
	        },
	        {
	            'base':    'oo',
	            'letters': '\uA74F'
	        },
	        {
	            'base':    'p',
	            'letters': '\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755'
	        },
	        {
	            'base':    'q',
	            'letters': '\u0071\u24E0\uFF51\u024B\uA757\uA759'
	        },
	        {
	            'base':    'r',
	            'letters': '\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783'
	        },
	        {
	            'base':    's',
	            'letters': '\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B'
	        },
	        {
	            'base':    't',
	            'letters': '\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787'
	        },
	        {
	            'base':    'tz',
	            'letters': '\uA729'
	        },
	        {
	            'base':    'u',
	            'letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289'
	        },
	        {
	            'base':    'v',
	            'letters': '\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C'
	        },
	        {
	            'base':    'vy',
	            'letters': '\uA761'
	        },
	        {
	            'base':    'w',
	            'letters': '\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73'
	        },
	        {
	            'base':    'x',
	            'letters': '\u0078\u24E7\uFF58\u1E8B\u1E8D'
	        },
	        {
	            'base':    'y',
	            'letters': '\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF'
	        },
	        {
	            'base':    'z',
	            'letters': '\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763'
	        }
	    ];

	    let map = {};

	    for ( let i = 0 ; i < defaultDiacriticsRemovalMap.length ; i++ ) {

	        const letters = defaultDiacriticsRemovalMap [ i ].letters;

	        for ( let j = 0 ; j < letters.length ; j++ ) {

	            map[ letters[ j ] ] = defaultDiacriticsRemovalMap[ i ].base;

	        }

	    }

	    return map

	} )();

	/**
	 * @static
	 * @public
	 * @memberOf TApplication
	 *
	 * @param string
	 */
	function removeDiacritics ( string ) {

	    // eslint-disable-next-line
	    return string.replace( /[^\u0000-\u007E]/g, function ( a ) {
	        return diacriticsMap[ a ] || a
	    } )

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/file-system/files
	 * @description This is the files main export entry point.
	 * It expose all exports of the files validators.
	 *
	 */

	function getPathsUnder ( directoryPath ) {
	    return browserifyFs.readdirSync( directoryPath )
	}

	/**
	 * Allow to search all files under filePaths in a recursive way
	 *
	 * @param {Array.<string>|string} filePaths - The files paths where search files
	 * @returns {Array} - The paths of finded files
	 * @private
	 */
	function getFilesPathsUnder ( paths ) {

	    const _paths = ( isArray$3( paths ) ) ? paths : [ paths ];
	    let files    = [];

	    for ( let pathIndex = 0, numberOfPaths = _paths.length ; pathIndex < numberOfPaths ; pathIndex++ ) {

	        const localPath = _paths[ pathIndex ];

	        if ( isInvalidPath( localPath ) ) {
	            console.error( `The path "${localPath}" is not valid !` );
	            continue
	        }

	        const stats = browserifyFs.statSync( localPath );
	        if ( stats.isFile() ) {

	            files.push( localPath );

	        } else if ( stats.isDirectory() ) {

	            const subPaths      = getPathsUnder( localPath );
	            const subFilesPaths = subPaths.forEach( ( name ) => { getFilesPathsUnder( path.resolve( localPath, name ) ); } );
	            Array.prototype.push.apply( files, subFilesPaths );

	        }

	    }

	    return files

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/geomathics/trigonometries
	 */

	const PI   = Math.PI;
	const PI_2 = Math.PI / 2;
	const PI_4 = Math.PI / 4;

	const DEG_TO_RAD = ( PI / 180 );
	const RAD_TO_DEG = ( 180 / PI );

	/**
	 *
	 * @param degrees
	 * @return {number}
	 */
	function degreesToRadians ( degrees ) {
	    return degrees * DEG_TO_RAD
	}

	/**
	 *
	 * @param radians
	 * @return {number}
	 */
	function degreesFromRadians ( radians ) {
	    return radians * RAD_TO_DEG
	}

	/**
	 *
	 * @param radians
	 * @return {number}
	 */
	function radiansToDegrees ( radians ) {
	    return radians * RAD_TO_DEG
	}

	/**
	 *
	 * @param degrees
	 * @return {number}
	 */
	function radiansFromDegrees ( degrees ) {
	    return degrees * DEG_TO_RAD
	}

	// PROJECTION 2D/3D
	/**
	 *
	 * @param vector
	 * @return {number}
	 */
	function getYaw ( vector ) {
	    return -Math.atan2( vector.x, vector.z )
	}

	/**
	 *
	 * @param vector
	 * @return {number}
	 */
	function getPitch ( vector ) {
	    return Math.asin( vector.y )
	}

	/**
	 *
	 * @param vectorDir
	 * @return {{yaw: number, pitch: number}}
	 */
	function convertWebGLRotationToTopogicalYawPitch ( vectorDir ) {

	    function getYaw ( vector ) {
	        return Math.atan2( vector.y, vector.x )
	    }

	    function getPitch ( vector ) {
	        return Math.asin( vector.z )
	    }

	    const topoVectorDir = vectorDir; //convertWebglVectorToTopologicVector( vectorDir )

	    return {
	        yaw:   -( radiansToDegrees( getYaw( topoVectorDir ) ) - 90 ),
	        pitch: radiansToDegrees( getPitch( topoVectorDir ) )
	    }

	}

	///**
	// * TRIGONOMETRIC CIRCLE CONCEPT WITH INTEGRATED TIMER
	// *
	// * Provide position on any given referential (starting position)
	// * this position is updated every tick on a trigonometric circle of rayon (radius)
	// * and give new position in px about this point in current referential.
	// *
	// * @param settings
	// * @constructor
	// */
	//function TTrigonometricCircle ( settings ) {
	//
	//    var _ = this;
	//
	//    _.options = $.extend( {}, TTrigonometricCircle.DEFAULT_SETTINGS, settings );
	//
	//}
	//
	//Object.assign( TTrigonometricCircle, {
	//
	//    /**
	//     *
	//     */
	//    DEFAULT_SETTINGS: {
	//        angle:       0,
	//        radius:      10
	//    }
	//
	//} )
	//
	//Object.assign( TTrigonometricCircle.prototype, {
	//
	//    /**
	//     *
	//     * @param increment
	//     */
	//    increment ( increment ) {
	//        var _   = this;
	//        _.angle = (increment ? _.angle + increment : _.angle + 1);
	//        if ( _.angle >= 360 ) {
	//            _.angle = 0;
	//        }
	//    },
	//
	//    /**
	//     *
	//     */
	//    getRadius () {
	//        var _ = this;
	//        return _.radius;
	//    },
	//
	//    /**
	//     *
	//     * @return {number}
	//     */
	//    getCosinus () {
	//        var _ = this;
	//        return Math.cos( degreesToRadians( _.angle ) ) * _.radius;
	//    },
	//
	//    /**
	//     *
	//     * @return {number}
	//     */
	//    getSinus () {
	//        var _ = this;
	//        return Math.sin( degreesToRadians( _.angle ) ) * _.radius;
	//    }
	//
	//} )
	//
	///////////
	//
	///**
	// *
	// * @param settings
	// * @constructor
	// */
	//function TTrigonometricCone ( settings ) {
	//
	//    var _ = this;
	//
	//    _.model = $.extend( {}, TTrigonometricCone.DEFAULT_SETTINGS, settings );
	//}
	//
	//Object.assign( TTrigonometricCone, {
	//
	//    /**
	//     *
	//     */
	//    DEFAULT_SETTINGS: {
	//        angle:       0,
	//        height:      10,
	//        radius:      10
	//    }
	//
	//} )
	//
	//Object.assign( TTrigonometricCone.prototype, {
	//
	//    /**
	//     *
	//     * @param increment
	//     */
	//    increment ( increment ) {
	//        var _         = this;
	//        _.model.angle = (increment ? _.model.angle + increment : _.model.angle + 1);
	//        if ( _.model.angle >= 360 ) {
	//            _.model.angle = 0;
	//        }
	//    },
	//
	//    /**
	//     *
	//     */
	//    getRadius () {
	//        var _ = this;
	//        return _.model.radius;
	//    },
	//
	//    /**
	//     *
	//     * @return {number}
	//     */
	//    getCosinus () {
	//        var _ = this;
	//        return Math.cos( degreesToRadians( _.model.angle ) ) * _.model.radius;
	//    },
	//
	//    /**
	//     *
	//     * @return {number}
	//     */
	//    getSinus () {
	//        var _ = this;
	//        return Math.sin( degreesToRadians( _.model.angle ) ) * _.model.radius;
	//    },
	//
	//    /**
	//     *
	//     * @param height
	//     * @return {number}
	//     */
	//    getCosinusForHeight ( height ) {
	//        var _ = this;
	//        return Math.cos( degreesToRadians( _.model.angle ) ) * ((_.model.radius / _.model.height) * Math.abs( height ) );
	//    },
	//
	//    /**
	//     *
	//     * @param height
	//     * @return {number}
	//     */
	//    getSinusForHeight ( height ) {
	//        var _ = this;
	//        return Math.sin( degreesToRadians( _.model.angle ) ) * ((_.model.radius / _.model.height) * Math.abs( height ));
	//    }
	//
	//} )

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/physics/temperatures
	 * @description Export the utilities methods about temperatures
	 * @requires {@link module:sources/cores/numbers}
	 */

	const FAHRENHEIT_CELSIUS_COEFFICIENT = 1.8;
	const FAHRENHEIT_CELSIUS_CONSTANTE   = 32.0;
	const KELVIN_CELSIUS_CONSTANTE       = 273.14999999955;

	/**
	 *
	 * @param celsius
	 * @param precisionPointAt
	 * @return {string}
	 */
	function celsiusToKelvin ( celsius, precisionPointAt ) {

	    //Check if required parameter is valid
	    if ( isNotTemperature( celsius ) ) { throw new Error( 'Require first operand as an temperature in celsius !' ) }

	    //Check optional parameter precisionPointAt and set it to 2 by default
	    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber$2( precisionPointAt ) ? precisionPointAt : 2 );

	    // Sets the decimal point for the temperature conversion equation
	    return ( celsius + KELVIN_CELSIUS_CONSTANTE ).toFixed( _precisionPointAt )

	}

	/**
	 *
	 * @param celsius
	 * @param precisionPointAt
	 * @return {string}
	 */
	function celsiusToFahrenheit ( celsius, precisionPointAt ) {

	    //Check if required parameter is valid
	    if ( isNotTemperature( celsius ) ) { throw new Error( 'Require first operand as an temperature in celsius !' ) }

	    //Check optional parameter precisionPointAt and set it to 2 by default
	    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber$2( precisionPointAt ) ? precisionPointAt : 2 );

	    // Sets the decimal point for the temperature conversion equation
	    return ( celsius * FAHRENHEIT_CELSIUS_COEFFICIENT + FAHRENHEIT_CELSIUS_CONSTANTE ).toFixed( _precisionPointAt )

	}

	/**
	 *
	 * @param fahrenheit
	 * @param precisionPointAt
	 * @return {string}
	 */
	function fahrenheitToCelsius ( fahrenheit, precisionPointAt ) {

	    //Check if required parameter is valid
	    if ( isNotTemperature( fahrenheit ) ) { throw new Error( 'Require first operand as an temperature in fahrenheit !' ) }

	    //Check optional parameter precisionPointAt and set it to 2 by default
	    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber$2( precisionPointAt ) ? precisionPointAt : 2 );

	    // Sets the decimal point for the temperature conversion equation
	    return ( ( fahrenheit - FAHRENHEIT_CELSIUS_CONSTANTE ) / FAHRENHEIT_CELSIUS_COEFFICIENT ).toFixed( _precisionPointAt )

	}

	/**
	 *
	 * @param fahrenheit
	 * @param precisionPointAt
	 * @return {string}
	 */
	function fahrenheitToKelvin ( fahrenheit, precisionPointAt ) {

	    //Check if required parameter is valid
	    if ( isNotTemperature( fahrenheit ) ) { throw new Error( 'Require first operand as an temperature in fahrenheit !' ) }

	    //Check optional parameter precisionPointAt and set it to 2 by default
	    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber$2( precisionPointAt ) ? precisionPointAt : 2 );

	    // Sets the decimal point for the temperature conversion equation
	    return ( ( ( fahrenheit - FAHRENHEIT_CELSIUS_CONSTANTE ) / FAHRENHEIT_CELSIUS_COEFFICIENT ) + KELVIN_CELSIUS_CONSTANTE ).toFixed( _precisionPointAt )

	}

	/**
	 *
	 * @param kelvin
	 * @param precisionPointAt
	 * @return {string}
	 */
	function kelvinToCelsius ( kelvin, precisionPointAt ) {

	    //Check if required parameter is valid
	    if ( isNotTemperature( kelvin ) ) { throw new Error( 'Require first operand as an temperature in kelvin !' ) }

	    //Check optional parameter precisionPointAt and set it to 2 by default
	    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber$2( precisionPointAt ) ? precisionPointAt : 2 );

	    // Sets the decimal point for the temperature conversion equation
	    return ( kelvin - KELVIN_CELSIUS_CONSTANTE ).toFixed( _precisionPointAt )

	}

	/**
	 *
	 * @param kelvin
	 * @param precisionPointAt
	 * @return {string}
	 */
	function kelvinToFahrenheit ( kelvin, precisionPointAt ) {

	    //Check if required parameter is valid
	    if ( isNotTemperature( kelvin ) ) { throw new Error( 'Require first operand as an temperature in kelvin !' ) }

	    //Check optional parameter precisionPointAt and set it to 2 by default
	    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber$2( precisionPointAt ) ? precisionPointAt : 2 );

	    // Sets the decimal point for the temperature conversion equation
	    return ( ( kelvin - KELVIN_CELSIUS_CONSTANTE ) * FAHRENHEIT_CELSIUS_COEFFICIENT + FAHRENHEIT_CELSIUS_CONSTANTE ).toFixed( _precisionPointAt )

	}

	exports.DEG_TO_RAD = DEG_TO_RAD;
	exports.FAHRENHEIT_CELSIUS_COEFFICIENT = FAHRENHEIT_CELSIUS_COEFFICIENT;
	exports.FAHRENHEIT_CELSIUS_CONSTANTE = FAHRENHEIT_CELSIUS_CONSTANTE;
	exports.KELVIN_CELSIUS_CONSTANTE = KELVIN_CELSIUS_CONSTANTE;
	exports.PI = PI;
	exports.PI_2 = PI_2;
	exports.PI_4 = PI_4;
	exports.RAD_TO_DEG = RAD_TO_DEG;
	exports.celsiusToFahrenheit = celsiusToFahrenheit;
	exports.celsiusToKelvin = celsiusToKelvin;
	exports.classNameify = classNameify;
	exports.convertWebGLRotationToTopogicalYawPitch = convertWebGLRotationToTopogicalYawPitch;
	exports.createInterval = createInterval;
	exports.degreesFromRadians = degreesFromRadians;
	exports.degreesToRadians = degreesToRadians;
	exports.diacriticsMap = diacriticsMap;
	exports.extend = extend$7;
	exports.extendObject = extendObject;
	exports.fahrenheitToCelsius = fahrenheitToCelsius;
	exports.fahrenheitToKelvin = fahrenheitToKelvin;
	exports.getFilesPathsUnder = getFilesPathsUnder;
	exports.getPitch = getPitch;
	exports.getRandomArbitrary = getRandomArbitrary;
	exports.getRandomInt = getRandomInt;
	exports.getYaw = getYaw;
	exports.kelvinToCelsius = kelvinToCelsius;
	exports.kelvinToFahrenheit = kelvinToFahrenheit;
	exports.radiansFromDegrees = radiansFromDegrees;
	exports.radiansToDegrees = radiansToDegrees;
	exports.removeDiacritics = removeDiacritics;
	exports.serializeObject = serializeObject;
	exports.sortBy = sortBy;
	exports.toEnum = toEnum;
	exports.uniq = uniq;

	return exports;

}({}));
//# sourceMappingURL=itee-utils.iife.js.map
