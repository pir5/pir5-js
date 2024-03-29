/**
 * PDNS-API
 * This is PDNS RESTful API Server.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PdnsApi);
  }
}(this, function(expect, PdnsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PdnsApi.DefaultApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DefaultApi', function() {
    describe('domainsGet', function() {
      it('should call domainsGet successfully', function(done) {
        //uncomment below and update the code to test domainsGet
        //instance.domainsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('domainsNameDelete', function() {
      it('should call domainsNameDelete successfully', function(done) {
        //uncomment below and update the code to test domainsNameDelete
        //instance.domainsNameDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('domainsNamePut', function() {
      it('should call domainsNamePut successfully', function(done) {
        //uncomment below and update the code to test domainsNamePut
        //instance.domainsNamePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('domainsPost', function() {
      it('should call domainsPost successfully', function(done) {
        //uncomment below and update the code to test domainsPost
        //instance.domainsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordsDisableIdPut', function() {
      it('should call recordsDisableIdPut successfully', function(done) {
        //uncomment below and update the code to test recordsDisableIdPut
        //instance.recordsDisableIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordsEnableIdPut', function() {
      it('should call recordsEnableIdPut successfully', function(done) {
        //uncomment below and update the code to test recordsEnableIdPut
        //instance.recordsEnableIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordsGet', function() {
      it('should call recordsGet successfully', function(done) {
        //uncomment below and update the code to test recordsGet
        //instance.recordsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordsIdDelete', function() {
      it('should call recordsIdDelete successfully', function(done) {
        //uncomment below and update the code to test recordsIdDelete
        //instance.recordsIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordsIdPut', function() {
      it('should call recordsIdPut successfully', function(done) {
        //uncomment below and update the code to test recordsIdPut
        //instance.recordsIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordsPost', function() {
      it('should call recordsPost successfully', function(done) {
        //uncomment below and update the code to test recordsPost
        //instance.recordsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
