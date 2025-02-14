"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@smithy/types/dist-cjs/index.js
var require_dist_cjs = __commonJS({
  "node_modules/@smithy/types/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      AlgorithmId: () => AlgorithmId,
      EndpointURLScheme: () => EndpointURLScheme,
      FieldPosition: () => FieldPosition,
      HttpApiKeyAuthLocation: () => HttpApiKeyAuthLocation,
      HttpAuthLocation: () => HttpAuthLocation,
      IniSectionType: () => IniSectionType,
      RequestHandlerProtocol: () => RequestHandlerProtocol,
      SMITHY_CONTEXT_KEY: () => SMITHY_CONTEXT_KEY,
      getDefaultClientConfiguration: () => getDefaultClientConfiguration,
      resolveDefaultRuntimeConfig: () => resolveDefaultRuntimeConfig
    });
    module2.exports = __toCommonJS2(src_exports);
    var HttpAuthLocation = /* @__PURE__ */ ((HttpAuthLocation2) => {
      HttpAuthLocation2["HEADER"] = "header";
      HttpAuthLocation2["QUERY"] = "query";
      return HttpAuthLocation2;
    })(HttpAuthLocation || {});
    var HttpApiKeyAuthLocation = /* @__PURE__ */ ((HttpApiKeyAuthLocation2) => {
      HttpApiKeyAuthLocation2["HEADER"] = "header";
      HttpApiKeyAuthLocation2["QUERY"] = "query";
      return HttpApiKeyAuthLocation2;
    })(HttpApiKeyAuthLocation || {});
    var EndpointURLScheme = /* @__PURE__ */ ((EndpointURLScheme2) => {
      EndpointURLScheme2["HTTP"] = "http";
      EndpointURLScheme2["HTTPS"] = "https";
      return EndpointURLScheme2;
    })(EndpointURLScheme || {});
    var AlgorithmId = /* @__PURE__ */ ((AlgorithmId2) => {
      AlgorithmId2["MD5"] = "md5";
      AlgorithmId2["CRC32"] = "crc32";
      AlgorithmId2["CRC32C"] = "crc32c";
      AlgorithmId2["SHA1"] = "sha1";
      AlgorithmId2["SHA256"] = "sha256";
      return AlgorithmId2;
    })(AlgorithmId || {});
    var getChecksumConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      const checksumAlgorithms = [];
      if (runtimeConfig.sha256 !== void 0) {
        checksumAlgorithms.push({
          algorithmId: () => "sha256",
          checksumConstructor: () => runtimeConfig.sha256
        });
      }
      if (runtimeConfig.md5 != void 0) {
        checksumAlgorithms.push({
          algorithmId: () => "md5",
          checksumConstructor: () => runtimeConfig.md5
        });
      }
      return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
          this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return this._checksumAlgorithms;
        }
      };
    }, "getChecksumConfiguration");
    var resolveChecksumRuntimeConfig = /* @__PURE__ */ __name((clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
      });
      return runtimeConfig;
    }, "resolveChecksumRuntimeConfig");
    var getDefaultClientConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      return {
        ...getChecksumConfiguration(runtimeConfig)
      };
    }, "getDefaultClientConfiguration");
    var resolveDefaultRuntimeConfig = /* @__PURE__ */ __name((config) => {
      return {
        ...resolveChecksumRuntimeConfig(config)
      };
    }, "resolveDefaultRuntimeConfig");
    var FieldPosition = /* @__PURE__ */ ((FieldPosition2) => {
      FieldPosition2[FieldPosition2["HEADER"] = 0] = "HEADER";
      FieldPosition2[FieldPosition2["TRAILER"] = 1] = "TRAILER";
      return FieldPosition2;
    })(FieldPosition || {});
    var SMITHY_CONTEXT_KEY = "__smithy_context";
    var IniSectionType = /* @__PURE__ */ ((IniSectionType2) => {
      IniSectionType2["PROFILE"] = "profile";
      IniSectionType2["SSO_SESSION"] = "sso-session";
      IniSectionType2["SERVICES"] = "services";
      return IniSectionType2;
    })(IniSectionType || {});
    var RequestHandlerProtocol = /* @__PURE__ */ ((RequestHandlerProtocol2) => {
      RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
      RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
      RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
      return RequestHandlerProtocol2;
    })(RequestHandlerProtocol || {});
  }
});

// node_modules/@smithy/protocol-http/dist-cjs/index.js
var require_dist_cjs2 = __commonJS({
  "node_modules/@smithy/protocol-http/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      Field: () => Field,
      Fields: () => Fields,
      HttpRequest: () => HttpRequest,
      HttpResponse: () => HttpResponse,
      getHttpHandlerExtensionConfiguration: () => getHttpHandlerExtensionConfiguration,
      isValidHostname: () => isValidHostname,
      resolveHttpHandlerRuntimeConfig: () => resolveHttpHandlerRuntimeConfig
    });
    module2.exports = __toCommonJS2(src_exports);
    var getHttpHandlerExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      let httpHandler = runtimeConfig.httpHandler;
      return {
        setHttpHandler(handler) {
          httpHandler = handler;
        },
        httpHandler() {
          return httpHandler;
        },
        updateHttpClientConfig(key, value) {
          httpHandler.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
          return httpHandler.httpHandlerConfigs();
        }
      };
    }, "getHttpHandlerExtensionConfiguration");
    var resolveHttpHandlerRuntimeConfig = /* @__PURE__ */ __name((httpHandlerExtensionConfiguration) => {
      return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler()
      };
    }, "resolveHttpHandlerRuntimeConfig");
    var import_types = require_dist_cjs();
    var _Field = class _Field {
      constructor({ name, kind = import_types.FieldPosition.HEADER, values = [] }) {
        this.name = name;
        this.kind = kind;
        this.values = values;
      }
      /**
       * Appends a value to the field.
       *
       * @param value The value to append.
       */
      add(value) {
        this.values.push(value);
      }
      /**
       * Overwrite existing field values.
       *
       * @param values The new field values.
       */
      set(values) {
        this.values = values;
      }
      /**
       * Remove all matching entries from list.
       *
       * @param value Value to remove.
       */
      remove(value) {
        this.values = this.values.filter((v) => v !== value);
      }
      /**
       * Get comma-delimited string.
       *
       * @returns String representation of {@link Field}.
       */
      toString() {
        return this.values.map((v) => v.includes(",") || v.includes(" ") ? `"${v}"` : v).join(", ");
      }
      /**
       * Get string values as a list
       *
       * @returns Values in {@link Field} as a list.
       */
      get() {
        return this.values;
      }
    };
    __name(_Field, "Field");
    var Field = _Field;
    var _Fields = class _Fields {
      constructor({ fields = [], encoding = "utf-8" }) {
        this.entries = {};
        fields.forEach(this.setField.bind(this));
        this.encoding = encoding;
      }
      /**
       * Set entry for a {@link Field} name. The `name`
       * attribute will be used to key the collection.
       *
       * @param field The {@link Field} to set.
       */
      setField(field) {
        this.entries[field.name.toLowerCase()] = field;
      }
      /**
       *  Retrieve {@link Field} entry by name.
       *
       * @param name The name of the {@link Field} entry
       *  to retrieve
       * @returns The {@link Field} if it exists.
       */
      getField(name) {
        return this.entries[name.toLowerCase()];
      }
      /**
       * Delete entry from collection.
       *
       * @param name Name of the entry to delete.
       */
      removeField(name) {
        delete this.entries[name.toLowerCase()];
      }
      /**
       * Helper function for retrieving specific types of fields.
       * Used to grab all headers or all trailers.
       *
       * @param kind {@link FieldPosition} of entries to retrieve.
       * @returns The {@link Field} entries with the specified
       *  {@link FieldPosition}.
       */
      getByType(kind) {
        return Object.values(this.entries).filter((field) => field.kind === kind);
      }
    };
    __name(_Fields, "Fields");
    var Fields = _Fields;
    var _HttpRequest = class _HttpRequest2 {
      constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
        this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
      }
      static isInstance(request) {
        if (!request)
          return false;
        const req = request;
        return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
      }
      clone() {
        const cloned = new _HttpRequest2({
          ...this,
          headers: { ...this.headers }
        });
        if (cloned.query)
          cloned.query = cloneQuery(cloned.query);
        return cloned;
      }
    };
    __name(_HttpRequest, "HttpRequest");
    var HttpRequest = _HttpRequest;
    function cloneQuery(query) {
      return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
          ...carry,
          [paramName]: Array.isArray(param) ? [...param] : param
        };
      }, {});
    }
    __name(cloneQuery, "cloneQuery");
    var _HttpResponse = class _HttpResponse {
      constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
      }
      static isInstance(response) {
        if (!response)
          return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
      }
    };
    __name(_HttpResponse, "HttpResponse");
    var HttpResponse = _HttpResponse;
    function isValidHostname(hostname) {
      const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
      return hostPattern.test(hostname);
    }
    __name(isValidHostname, "isValidHostname");
  }
});

// node_modules/@aws-sdk/middleware-host-header/dist-cjs/index.js
var require_dist_cjs3 = __commonJS({
  "node_modules/@aws-sdk/middleware-host-header/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      getHostHeaderPlugin: () => getHostHeaderPlugin,
      hostHeaderMiddleware: () => hostHeaderMiddleware,
      hostHeaderMiddlewareOptions: () => hostHeaderMiddlewareOptions,
      resolveHostHeaderConfig: () => resolveHostHeaderConfig
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_protocol_http = require_dist_cjs2();
    function resolveHostHeaderConfig(input) {
      return input;
    }
    __name(resolveHostHeaderConfig, "resolveHostHeaderConfig");
    var hostHeaderMiddleware = /* @__PURE__ */ __name((options) => (next) => async (args) => {
      if (!import_protocol_http.HttpRequest.isInstance(args.request))
        return next(args);
      const { request } = args;
      const { handlerProtocol = "" } = options.requestHandler.metadata || {};
      if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
        delete request.headers["host"];
        request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
      } else if (!request.headers["host"]) {
        let host = request.hostname;
        if (request.port != null)
          host += `:${request.port}`;
        request.headers["host"] = host;
      }
      return next(args);
    }, "hostHeaderMiddleware");
    var hostHeaderMiddlewareOptions = {
      name: "hostHeaderMiddleware",
      step: "build",
      priority: "low",
      tags: ["HOST"],
      override: true
    };
    var getHostHeaderPlugin = /* @__PURE__ */ __name((options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
      }
    }), "getHostHeaderPlugin");
  }
});

// node_modules/@aws-sdk/middleware-logger/dist-cjs/index.js
var require_dist_cjs4 = __commonJS({
  "node_modules/@aws-sdk/middleware-logger/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      getLoggerPlugin: () => getLoggerPlugin,
      loggerMiddleware: () => loggerMiddleware,
      loggerMiddlewareOptions: () => loggerMiddlewareOptions
    });
    module2.exports = __toCommonJS2(src_exports);
    var loggerMiddleware = /* @__PURE__ */ __name(() => (next, context) => async (args) => {
      var _a, _b;
      try {
        const response = await next(args);
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
        const { $metadata, ...outputWithoutMetadata } = response.output;
        (_a = logger == null ? void 0 : logger.info) == null ? void 0 : _a.call(logger, {
          clientName,
          commandName,
          input: inputFilterSensitiveLog(args.input),
          output: outputFilterSensitiveLog(outputWithoutMetadata),
          metadata: $metadata
        });
        return response;
      } catch (error) {
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        (_b = logger == null ? void 0 : logger.error) == null ? void 0 : _b.call(logger, {
          clientName,
          commandName,
          input: inputFilterSensitiveLog(args.input),
          error,
          metadata: error.$metadata
        });
        throw error;
      }
    }, "loggerMiddleware");
    var loggerMiddlewareOptions = {
      name: "loggerMiddleware",
      tags: ["LOGGER"],
      step: "initialize",
      override: true
    };
    var getLoggerPlugin = /* @__PURE__ */ __name((options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
      }
    }), "getLoggerPlugin");
  }
});

// node_modules/@aws-sdk/middleware-recursion-detection/dist-cjs/index.js
var require_dist_cjs5 = __commonJS({
  "node_modules/@aws-sdk/middleware-recursion-detection/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      addRecursionDetectionMiddlewareOptions: () => addRecursionDetectionMiddlewareOptions,
      getRecursionDetectionPlugin: () => getRecursionDetectionPlugin,
      recursionDetectionMiddleware: () => recursionDetectionMiddleware
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_protocol_http = require_dist_cjs2();
    var TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
    var ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
    var ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
    var recursionDetectionMiddleware = /* @__PURE__ */ __name((options) => (next) => async (args) => {
      const { request } = args;
      if (!import_protocol_http.HttpRequest.isInstance(request) || options.runtime !== "node" || request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
        return next(args);
      }
      const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
      const traceId = process.env[ENV_TRACE_ID];
      const nonEmptyString = /* @__PURE__ */ __name((str) => typeof str === "string" && str.length > 0, "nonEmptyString");
      if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
        request.headers[TRACE_ID_HEADER_NAME] = traceId;
      }
      return next({
        ...args,
        request
      });
    }, "recursionDetectionMiddleware");
    var addRecursionDetectionMiddlewareOptions = {
      step: "build",
      tags: ["RECURSION_DETECTION"],
      name: "recursionDetectionMiddleware",
      override: true,
      priority: "low"
    };
    var getRecursionDetectionPlugin = /* @__PURE__ */ __name((options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
      }
    }), "getRecursionDetectionPlugin");
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/index.js
var require_dist_cjs6 = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      EndpointError: () => EndpointError2,
      customEndpointFunctions: () => customEndpointFunctions,
      isIpAddress: () => isIpAddress2,
      isValidHostLabel: () => isValidHostLabel,
      resolveEndpoint: () => resolveEndpoint2
    });
    module2.exports = __toCommonJS2(src_exports);
    var IP_V4_REGEX = new RegExp(
      `^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`
    );
    var isIpAddress2 = /* @__PURE__ */ __name((value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]"), "isIpAddress");
    var VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
    var isValidHostLabel = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
      if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
      }
      const labels = value.split(".");
      for (const label of labels) {
        if (!isValidHostLabel(label)) {
          return false;
        }
      }
      return true;
    }, "isValidHostLabel");
    var customEndpointFunctions = {};
    var debugId = "endpoints";
    function toDebugString(input) {
      if (typeof input !== "object" || input == null) {
        return input;
      }
      if ("ref" in input) {
        return `$${toDebugString(input.ref)}`;
      }
      if ("fn" in input) {
        return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
      }
      return JSON.stringify(input, null, 2);
    }
    __name(toDebugString, "toDebugString");
    var _EndpointError = class _EndpointError extends Error {
      constructor(message) {
        super(message);
        this.name = "EndpointError";
      }
    };
    __name(_EndpointError, "EndpointError");
    var EndpointError2 = _EndpointError;
    var booleanEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "booleanEquals");
    var getAttrPathList = /* @__PURE__ */ __name((path) => {
      const parts = path.split(".");
      const pathList = [];
      for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
          if (part.indexOf("]") !== part.length - 1) {
            throw new EndpointError2(`Path: '${path}' does not end with ']'`);
          }
          const arrayIndex = part.slice(squareBracketIndex + 1, -1);
          if (Number.isNaN(parseInt(arrayIndex))) {
            throw new EndpointError2(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
          }
          if (squareBracketIndex !== 0) {
            pathList.push(part.slice(0, squareBracketIndex));
          }
          pathList.push(arrayIndex);
        } else {
          pathList.push(part);
        }
      }
      return pathList;
    }, "getAttrPathList");
    var getAttr = /* @__PURE__ */ __name((value, path) => getAttrPathList(path).reduce((acc, index) => {
      if (typeof acc !== "object") {
        throw new EndpointError2(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
      } else if (Array.isArray(acc)) {
        return acc[parseInt(index)];
      }
      return acc[index];
    }, value), "getAttr");
    var isSet = /* @__PURE__ */ __name((value) => value != null, "isSet");
    var not = /* @__PURE__ */ __name((value) => !value, "not");
    var import_types3 = require_dist_cjs();
    var DEFAULT_PORTS = {
      [import_types3.EndpointURLScheme.HTTP]: 80,
      [import_types3.EndpointURLScheme.HTTPS]: 443
    };
    var parseURL = /* @__PURE__ */ __name((value) => {
      const whatwgURL = (() => {
        try {
          if (value instanceof URL) {
            return value;
          }
          if (typeof value === "object" && "hostname" in value) {
            const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
            const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
            url.search = Object.entries(query).map(([k, v]) => `${k}=${v}`).join("&");
            return url;
          }
          return new URL(value);
        } catch (error) {
          return null;
        }
      })();
      if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
      }
      const urlString = whatwgURL.href;
      const { host, hostname, pathname, protocol, search } = whatwgURL;
      if (search) {
        return null;
      }
      const scheme = protocol.slice(0, -1);
      if (!Object.values(import_types3.EndpointURLScheme).includes(scheme)) {
        return null;
      }
      const isIp = isIpAddress2(hostname);
      const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
      const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
      return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp
      };
    }, "parseURL");
    var stringEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "stringEquals");
    var substring = /* @__PURE__ */ __name((input, start, stop, reverse) => {
      if (start >= stop || input.length < stop) {
        return null;
      }
      if (!reverse) {
        return input.substring(start, stop);
      }
      return input.substring(input.length - stop, input.length - start);
    }, "substring");
    var uriEncode = /* @__PURE__ */ __name((value) => encodeURIComponent(value).replace(/[!*'()]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`), "uriEncode");
    var endpointFunctions = {
      booleanEquals,
      getAttr,
      isSet,
      isValidHostLabel,
      not,
      parseURL,
      stringEquals,
      substring,
      uriEncode
    };
    var evaluateTemplate = /* @__PURE__ */ __name((template, options) => {
      const evaluatedTemplateArr = [];
      const templateContext = {
        ...options.endpointParams,
        ...options.referenceRecord
      };
      let currentIndex = 0;
      while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(currentIndex));
          break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex));
          break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
          currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
          const [refName, attrName] = parameterName.split("#");
          evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
        } else {
          evaluatedTemplateArr.push(templateContext[parameterName]);
        }
        currentIndex = closingBraceIndex + 1;
      }
      return evaluatedTemplateArr.join("");
    }, "evaluateTemplate");
    var getReferenceValue = /* @__PURE__ */ __name(({ ref }, options) => {
      const referenceRecord = {
        ...options.endpointParams,
        ...options.referenceRecord
      };
      return referenceRecord[ref];
    }, "getReferenceValue");
    var evaluateExpression = /* @__PURE__ */ __name((obj, keyName, options) => {
      if (typeof obj === "string") {
        return evaluateTemplate(obj, options);
      } else if (obj["fn"]) {
        return callFunction(obj, options);
      } else if (obj["ref"]) {
        return getReferenceValue(obj, options);
      }
      throw new EndpointError2(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
    }, "evaluateExpression");
    var callFunction = /* @__PURE__ */ __name(({ fn, argv }, options) => {
      const evaluatedArgs = argv.map(
        (arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options)
      );
      const fnSegments = fn.split(".");
      if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) {
        return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
      }
      return endpointFunctions[fn](...evaluatedArgs);
    }, "callFunction");
    var evaluateCondition = /* @__PURE__ */ __name(({ assign, ...fnArgs }, options) => {
      var _a, _b;
      if (assign && assign in options.referenceRecord) {
        throw new EndpointError2(`'${assign}' is already defined in Reference Record.`);
      }
      const value = callFunction(fnArgs, options);
      (_b = (_a = options.logger) == null ? void 0 : _a.debug) == null ? void 0 : _b.call(_a, `${debugId} evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
      return {
        result: value === "" ? true : !!value,
        ...assign != null && { toAssign: { name: assign, value } }
      };
    }, "evaluateCondition");
    var evaluateConditions = /* @__PURE__ */ __name((conditions = [], options) => {
      var _a, _b;
      const conditionsReferenceRecord = {};
      for (const condition of conditions) {
        const { result, toAssign } = evaluateCondition(condition, {
          ...options,
          referenceRecord: {
            ...options.referenceRecord,
            ...conditionsReferenceRecord
          }
        });
        if (!result) {
          return { result };
        }
        if (toAssign) {
          conditionsReferenceRecord[toAssign.name] = toAssign.value;
          (_b = (_a = options.logger) == null ? void 0 : _a.debug) == null ? void 0 : _b.call(_a, `${debugId} assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
        }
      }
      return { result: true, referenceRecord: conditionsReferenceRecord };
    }, "evaluateConditions");
    var getEndpointHeaders = /* @__PURE__ */ __name((headers, options) => Object.entries(headers).reduce(
      (acc, [headerKey, headerVal]) => ({
        ...acc,
        [headerKey]: headerVal.map((headerValEntry) => {
          const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
          if (typeof processedExpr !== "string") {
            throw new EndpointError2(`Header '${headerKey}' value '${processedExpr}' is not a string`);
          }
          return processedExpr;
        })
      }),
      {}
    ), "getEndpointHeaders");
    var getEndpointProperty = /* @__PURE__ */ __name((property, options) => {
      if (Array.isArray(property)) {
        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
      }
      switch (typeof property) {
        case "string":
          return evaluateTemplate(property, options);
        case "object":
          if (property === null) {
            throw new EndpointError2(`Unexpected endpoint property: ${property}`);
          }
          return getEndpointProperties(property, options);
        case "boolean":
          return property;
        default:
          throw new EndpointError2(`Unexpected endpoint property type: ${typeof property}`);
      }
    }, "getEndpointProperty");
    var getEndpointProperties = /* @__PURE__ */ __name((properties, options) => Object.entries(properties).reduce(
      (acc, [propertyKey, propertyVal]) => ({
        ...acc,
        [propertyKey]: getEndpointProperty(propertyVal, options)
      }),
      {}
    ), "getEndpointProperties");
    var getEndpointUrl = /* @__PURE__ */ __name((endpointUrl, options) => {
      const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
      if (typeof expression === "string") {
        try {
          return new URL(expression);
        } catch (error) {
          console.error(`Failed to construct URL with ${expression}`, error);
          throw error;
        }
      }
      throw new EndpointError2(`Endpoint URL must be a string, got ${typeof expression}`);
    }, "getEndpointUrl");
    var evaluateEndpointRule = /* @__PURE__ */ __name((endpointRule, options) => {
      var _a, _b;
      const { conditions, endpoint } = endpointRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      const endpointRuleOptions = {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      };
      const { url, properties, headers } = endpoint;
      (_b = (_a = options.logger) == null ? void 0 : _a.debug) == null ? void 0 : _b.call(_a, `${debugId} Resolving endpoint from template: ${toDebugString(endpoint)}`);
      return {
        ...headers != void 0 && {
          headers: getEndpointHeaders(headers, endpointRuleOptions)
        },
        ...properties != void 0 && {
          properties: getEndpointProperties(properties, endpointRuleOptions)
        },
        url: getEndpointUrl(url, endpointRuleOptions)
      };
    }, "evaluateEndpointRule");
    var evaluateErrorRule = /* @__PURE__ */ __name((errorRule, options) => {
      const { conditions, error } = errorRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      throw new EndpointError2(
        evaluateExpression(error, "Error", {
          ...options,
          referenceRecord: { ...options.referenceRecord, ...referenceRecord }
        })
      );
    }, "evaluateErrorRule");
    var evaluateTreeRule = /* @__PURE__ */ __name((treeRule, options) => {
      const { conditions, rules } = treeRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      return evaluateRules(rules, {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      });
    }, "evaluateTreeRule");
    var evaluateRules = /* @__PURE__ */ __name((rules, options) => {
      for (const rule of rules) {
        if (rule.type === "endpoint") {
          const endpointOrUndefined = evaluateEndpointRule(rule, options);
          if (endpointOrUndefined) {
            return endpointOrUndefined;
          }
        } else if (rule.type === "error") {
          evaluateErrorRule(rule, options);
        } else if (rule.type === "tree") {
          const endpointOrUndefined = evaluateTreeRule(rule, options);
          if (endpointOrUndefined) {
            return endpointOrUndefined;
          }
        } else {
          throw new EndpointError2(`Unknown endpoint rule: ${rule}`);
        }
      }
      throw new EndpointError2(`Rules evaluation failed`);
    }, "evaluateRules");
    var resolveEndpoint2 = /* @__PURE__ */ __name((ruleSetObject, options) => {
      var _a, _b, _c, _d, _e;
      const { endpointParams, logger } = options;
      const { parameters, rules } = ruleSetObject;
      (_b = (_a = options.logger) == null ? void 0 : _a.debug) == null ? void 0 : _b.call(_a, `${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
      const paramsWithDefault = Object.entries(parameters).filter(([, v]) => v.default != null).map(([k, v]) => [k, v.default]);
      if (paramsWithDefault.length > 0) {
        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
          endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
        }
      }
      const requiredParams = Object.entries(parameters).filter(([, v]) => v.required).map(([k]) => k);
      for (const requiredParam of requiredParams) {
        if (endpointParams[requiredParam] == null) {
          throw new EndpointError2(`Missing required parameter: '${requiredParam}'`);
        }
      }
      const endpoint = evaluateRules(rules, { endpointParams, logger, referenceRecord: {} });
      if ((_c = options.endpointParams) == null ? void 0 : _c.Endpoint) {
        try {
          const givenEndpoint = new URL(options.endpointParams.Endpoint);
          const { protocol, port } = givenEndpoint;
          endpoint.url.protocol = protocol;
          endpoint.url.port = port;
        } catch (e) {
        }
      }
      (_e = (_d = options.logger) == null ? void 0 : _d.debug) == null ? void 0 : _e.call(_d, `${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
      return endpoint;
    }, "resolveEndpoint");
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-cjs/index.js
var require_dist_cjs7 = __commonJS({
  "node_modules/@aws-sdk/util-endpoints/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      ConditionObject: () => import_util_endpoints.ConditionObject,
      DeprecatedObject: () => import_util_endpoints.DeprecatedObject,
      EndpointError: () => import_util_endpoints.EndpointError,
      EndpointObject: () => import_util_endpoints.EndpointObject,
      EndpointObjectHeaders: () => import_util_endpoints.EndpointObjectHeaders,
      EndpointObjectProperties: () => import_util_endpoints.EndpointObjectProperties,
      EndpointParams: () => import_util_endpoints.EndpointParams,
      EndpointResolverOptions: () => import_util_endpoints.EndpointResolverOptions,
      EndpointRuleObject: () => import_util_endpoints.EndpointRuleObject,
      ErrorRuleObject: () => import_util_endpoints.ErrorRuleObject,
      EvaluateOptions: () => import_util_endpoints.EvaluateOptions,
      Expression: () => import_util_endpoints.Expression,
      FunctionArgv: () => import_util_endpoints.FunctionArgv,
      FunctionObject: () => import_util_endpoints.FunctionObject,
      FunctionReturn: () => import_util_endpoints.FunctionReturn,
      ParameterObject: () => import_util_endpoints.ParameterObject,
      ReferenceObject: () => import_util_endpoints.ReferenceObject,
      ReferenceRecord: () => import_util_endpoints.ReferenceRecord,
      RuleSetObject: () => import_util_endpoints.RuleSetObject,
      RuleSetRules: () => import_util_endpoints.RuleSetRules,
      TreeRuleObject: () => import_util_endpoints.TreeRuleObject,
      awsEndpointFunctions: () => awsEndpointFunctions,
      getUserAgentPrefix: () => getUserAgentPrefix,
      isIpAddress: () => import_util_endpoints.isIpAddress,
      partition: () => partition,
      resolveEndpoint: () => import_util_endpoints.resolveEndpoint,
      setPartitionInfo: () => setPartitionInfo,
      useDefaultPartitionInfo: () => useDefaultPartitionInfo
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_endpoints = require_dist_cjs6();
    var isVirtualHostableS3Bucket = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
      if (allowSubDomains) {
        for (const label of value.split(".")) {
          if (!isVirtualHostableS3Bucket(label)) {
            return false;
          }
        }
        return true;
      }
      if (!(0, import_util_endpoints.isValidHostLabel)(value)) {
        return false;
      }
      if (value.length < 3 || value.length > 63) {
        return false;
      }
      if (value !== value.toLowerCase()) {
        return false;
      }
      if ((0, import_util_endpoints.isIpAddress)(value)) {
        return false;
      }
      return true;
    }, "isVirtualHostableS3Bucket");
    var parseArn = /* @__PURE__ */ __name((value) => {
      const segments = value.split(":");
      if (segments.length < 6)
        return null;
      const [arn, partition2, service, region, accountId, ...resourceId] = segments;
      if (arn !== "arn" || partition2 === "" || service === "" || resourceId[0] === "")
        return null;
      return {
        partition: partition2,
        service,
        region,
        accountId,
        resourceId: resourceId[0].includes("/") ? resourceId[0].split("/") : resourceId
      };
    }, "parseArn");
    var partitions_default = {
      partitions: [{
        id: "aws",
        outputs: {
          dnsSuffix: "amazonaws.com",
          dualStackDnsSuffix: "api.aws",
          implicitGlobalRegion: "us-east-1",
          name: "aws",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^(us|eu|ap|sa|ca|me|af|il)\\-\\w+\\-\\d+$",
        regions: {
          "af-south-1": {
            description: "Africa (Cape Town)"
          },
          "ap-east-1": {
            description: "Asia Pacific (Hong Kong)"
          },
          "ap-northeast-1": {
            description: "Asia Pacific (Tokyo)"
          },
          "ap-northeast-2": {
            description: "Asia Pacific (Seoul)"
          },
          "ap-northeast-3": {
            description: "Asia Pacific (Osaka)"
          },
          "ap-south-1": {
            description: "Asia Pacific (Mumbai)"
          },
          "ap-south-2": {
            description: "Asia Pacific (Hyderabad)"
          },
          "ap-southeast-1": {
            description: "Asia Pacific (Singapore)"
          },
          "ap-southeast-2": {
            description: "Asia Pacific (Sydney)"
          },
          "ap-southeast-3": {
            description: "Asia Pacific (Jakarta)"
          },
          "ap-southeast-4": {
            description: "Asia Pacific (Melbourne)"
          },
          "aws-global": {
            description: "AWS Standard global region"
          },
          "ca-central-1": {
            description: "Canada (Central)"
          },
          "ca-west-1": {
            description: "Canada West (Calgary)"
          },
          "eu-central-1": {
            description: "Europe (Frankfurt)"
          },
          "eu-central-2": {
            description: "Europe (Zurich)"
          },
          "eu-north-1": {
            description: "Europe (Stockholm)"
          },
          "eu-south-1": {
            description: "Europe (Milan)"
          },
          "eu-south-2": {
            description: "Europe (Spain)"
          },
          "eu-west-1": {
            description: "Europe (Ireland)"
          },
          "eu-west-2": {
            description: "Europe (London)"
          },
          "eu-west-3": {
            description: "Europe (Paris)"
          },
          "il-central-1": {
            description: "Israel (Tel Aviv)"
          },
          "me-central-1": {
            description: "Middle East (UAE)"
          },
          "me-south-1": {
            description: "Middle East (Bahrain)"
          },
          "sa-east-1": {
            description: "South America (Sao Paulo)"
          },
          "us-east-1": {
            description: "US East (N. Virginia)"
          },
          "us-east-2": {
            description: "US East (Ohio)"
          },
          "us-west-1": {
            description: "US West (N. California)"
          },
          "us-west-2": {
            description: "US West (Oregon)"
          }
        }
      }, {
        id: "aws-cn",
        outputs: {
          dnsSuffix: "amazonaws.com.cn",
          dualStackDnsSuffix: "api.amazonwebservices.com.cn",
          implicitGlobalRegion: "cn-northwest-1",
          name: "aws-cn",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^cn\\-\\w+\\-\\d+$",
        regions: {
          "aws-cn-global": {
            description: "AWS China global region"
          },
          "cn-north-1": {
            description: "China (Beijing)"
          },
          "cn-northwest-1": {
            description: "China (Ningxia)"
          }
        }
      }, {
        id: "aws-us-gov",
        outputs: {
          dnsSuffix: "amazonaws.com",
          dualStackDnsSuffix: "api.aws",
          implicitGlobalRegion: "us-gov-west-1",
          name: "aws-us-gov",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
        regions: {
          "aws-us-gov-global": {
            description: "AWS GovCloud (US) global region"
          },
          "us-gov-east-1": {
            description: "AWS GovCloud (US-East)"
          },
          "us-gov-west-1": {
            description: "AWS GovCloud (US-West)"
          }
        }
      }, {
        id: "aws-iso",
        outputs: {
          dnsSuffix: "c2s.ic.gov",
          dualStackDnsSuffix: "c2s.ic.gov",
          implicitGlobalRegion: "us-iso-east-1",
          name: "aws-iso",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-global": {
            description: "AWS ISO (US) global region"
          },
          "us-iso-east-1": {
            description: "US ISO East"
          },
          "us-iso-west-1": {
            description: "US ISO WEST"
          }
        }
      }, {
        id: "aws-iso-b",
        outputs: {
          dnsSuffix: "sc2s.sgov.gov",
          dualStackDnsSuffix: "sc2s.sgov.gov",
          implicitGlobalRegion: "us-isob-east-1",
          name: "aws-iso-b",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-b-global": {
            description: "AWS ISOB (US) global region"
          },
          "us-isob-east-1": {
            description: "US ISOB East (Ohio)"
          }
        }
      }, {
        id: "aws-iso-e",
        outputs: {
          dnsSuffix: "cloud.adc-e.uk",
          dualStackDnsSuffix: "cloud.adc-e.uk",
          implicitGlobalRegion: "eu-isoe-west-1",
          name: "aws-iso-e",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
        regions: {
          "eu-isoe-west-1": {
            description: "EU ISOE West"
          }
        }
      }, {
        id: "aws-iso-f",
        outputs: {
          dnsSuffix: "csp.hci.ic.gov",
          dualStackDnsSuffix: "csp.hci.ic.gov",
          implicitGlobalRegion: "us-isof-south-1",
          name: "aws-iso-f",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
        regions: {}
      }],
      version: "1.1"
    };
    var selectedPartitionsInfo = partitions_default;
    var selectedUserAgentPrefix = "";
    var partition = /* @__PURE__ */ __name((value) => {
      const { partitions } = selectedPartitionsInfo;
      for (const partition2 of partitions) {
        const { regions, outputs } = partition2;
        for (const [region, regionData] of Object.entries(regions)) {
          if (region === value) {
            return {
              ...outputs,
              ...regionData
            };
          }
        }
      }
      for (const partition2 of partitions) {
        const { regionRegex, outputs } = partition2;
        if (new RegExp(regionRegex).test(value)) {
          return {
            ...outputs
          };
        }
      }
      const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
      if (!DEFAULT_PARTITION) {
        throw new Error(
          "Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist."
        );
      }
      return {
        ...DEFAULT_PARTITION.outputs
      };
    }, "partition");
    var setPartitionInfo = /* @__PURE__ */ __name((partitionsInfo, userAgentPrefix = "") => {
      selectedPartitionsInfo = partitionsInfo;
      selectedUserAgentPrefix = userAgentPrefix;
    }, "setPartitionInfo");
    var useDefaultPartitionInfo = /* @__PURE__ */ __name(() => {
      setPartitionInfo(partitions_default, "");
    }, "useDefaultPartitionInfo");
    var getUserAgentPrefix = /* @__PURE__ */ __name(() => selectedUserAgentPrefix, "getUserAgentPrefix");
    var awsEndpointFunctions = {
      isVirtualHostableS3Bucket,
      parseArn,
      partition
    };
    import_util_endpoints.customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-cjs/index.js
var require_dist_cjs8 = __commonJS({
  "node_modules/@aws-sdk/middleware-user-agent/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      getUserAgentMiddlewareOptions: () => getUserAgentMiddlewareOptions,
      getUserAgentPlugin: () => getUserAgentPlugin,
      resolveUserAgentConfig: () => resolveUserAgentConfig,
      userAgentMiddleware: () => userAgentMiddleware
    });
    module2.exports = __toCommonJS2(src_exports);
    function resolveUserAgentConfig(input) {
      return {
        ...input,
        customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent
      };
    }
    __name(resolveUserAgentConfig, "resolveUserAgentConfig");
    var import_util_endpoints = require_dist_cjs7();
    var import_protocol_http = require_dist_cjs2();
    var USER_AGENT = "user-agent";
    var X_AMZ_USER_AGENT = "x-amz-user-agent";
    var SPACE = " ";
    var UA_NAME_SEPARATOR = "/";
    var UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
    var UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
    var UA_ESCAPE_CHAR = "-";
    var userAgentMiddleware = /* @__PURE__ */ __name((options) => (next, context) => async (args) => {
      var _a, _b;
      const { request } = args;
      if (!import_protocol_http.HttpRequest.isInstance(request))
        return next(args);
      const { headers } = request;
      const userAgent = ((_a = context == null ? void 0 : context.userAgent) == null ? void 0 : _a.map(escapeUserAgent)) || [];
      const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
      const customUserAgent = ((_b = options == null ? void 0 : options.customUserAgent) == null ? void 0 : _b.map(escapeUserAgent)) || [];
      const prefix = (0, import_util_endpoints.getUserAgentPrefix)();
      const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent, ...userAgent, ...customUserAgent]).join(SPACE);
      const normalUAValue = [
        ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent
      ].join(SPACE);
      if (options.runtime !== "browser") {
        if (normalUAValue) {
          headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
        }
        headers[USER_AGENT] = sdkUserAgentValue;
      } else {
        headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
      }
      return next({
        ...args,
        request
      });
    }, "userAgentMiddleware");
    var escapeUserAgent = /* @__PURE__ */ __name((userAgentPair) => {
      var _a;
      const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
      const version2 = (_a = userAgentPair[1]) == null ? void 0 : _a.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
      const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
      const prefix = name.substring(0, prefixSeparatorIndex);
      let uaName = name.substring(prefixSeparatorIndex + 1);
      if (prefix === "api") {
        uaName = uaName.toLowerCase();
      }
      return [prefix, uaName, version2].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
        switch (index) {
          case 0:
            return item;
          case 1:
            return `${acc}/${item}`;
          default:
            return `${acc}#${item}`;
        }
      }, "");
    }, "escapeUserAgent");
    var getUserAgentMiddlewareOptions = {
      name: "getUserAgentMiddleware",
      step: "build",
      priority: "low",
      tags: ["SET_USER_AGENT", "USER_AGENT"],
      override: true
    };
    var getUserAgentPlugin = /* @__PURE__ */ __name((config) => ({
      applyToStack: (clientStack) => {
        clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
      }
    }), "getUserAgentPlugin");
  }
});

// node_modules/@smithy/util-config-provider/dist-cjs/index.js
var require_dist_cjs9 = __commonJS({
  "node_modules/@smithy/util-config-provider/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      SelectorType: () => SelectorType,
      booleanSelector: () => booleanSelector,
      numberSelector: () => numberSelector
    });
    module2.exports = __toCommonJS2(src_exports);
    var booleanSelector = /* @__PURE__ */ __name((obj, key, type) => {
      if (!(key in obj))
        return void 0;
      if (obj[key] === "true")
        return true;
      if (obj[key] === "false")
        return false;
      throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
    }, "booleanSelector");
    var numberSelector = /* @__PURE__ */ __name((obj, key, type) => {
      if (!(key in obj))
        return void 0;
      const numberValue = parseInt(obj[key], 10);
      if (Number.isNaN(numberValue)) {
        throw new TypeError(`Cannot load ${type} '${key}'. Expected number, got '${obj[key]}'.`);
      }
      return numberValue;
    }, "numberSelector");
    var SelectorType = /* @__PURE__ */ ((SelectorType2) => {
      SelectorType2["ENV"] = "env";
      SelectorType2["CONFIG"] = "shared config entry";
      return SelectorType2;
    })(SelectorType || {});
  }
});

// node_modules/@smithy/util-middleware/dist-cjs/index.js
var require_dist_cjs10 = __commonJS({
  "node_modules/@smithy/util-middleware/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      getSmithyContext: () => getSmithyContext2,
      normalizeProvider: () => normalizeProvider
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_types = require_dist_cjs();
    var getSmithyContext2 = /* @__PURE__ */ __name((context) => context[import_types.SMITHY_CONTEXT_KEY] || (context[import_types.SMITHY_CONTEXT_KEY] = {}), "getSmithyContext");
    var normalizeProvider = /* @__PURE__ */ __name((input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    }, "normalizeProvider");
  }
});

// node_modules/@smithy/config-resolver/dist-cjs/index.js
var require_dist_cjs11 = __commonJS({
  "node_modules/@smithy/config-resolver/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      CONFIG_USE_DUALSTACK_ENDPOINT: () => CONFIG_USE_DUALSTACK_ENDPOINT,
      CONFIG_USE_FIPS_ENDPOINT: () => CONFIG_USE_FIPS_ENDPOINT,
      DEFAULT_USE_DUALSTACK_ENDPOINT: () => DEFAULT_USE_DUALSTACK_ENDPOINT,
      DEFAULT_USE_FIPS_ENDPOINT: () => DEFAULT_USE_FIPS_ENDPOINT,
      ENV_USE_DUALSTACK_ENDPOINT: () => ENV_USE_DUALSTACK_ENDPOINT,
      ENV_USE_FIPS_ENDPOINT: () => ENV_USE_FIPS_ENDPOINT,
      NODE_REGION_CONFIG_FILE_OPTIONS: () => NODE_REGION_CONFIG_FILE_OPTIONS,
      NODE_REGION_CONFIG_OPTIONS: () => NODE_REGION_CONFIG_OPTIONS,
      NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: () => NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS,
      NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: () => NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS,
      REGION_ENV_NAME: () => REGION_ENV_NAME,
      REGION_INI_NAME: () => REGION_INI_NAME,
      getRegionInfo: () => getRegionInfo,
      resolveCustomEndpointsConfig: () => resolveCustomEndpointsConfig,
      resolveEndpointsConfig: () => resolveEndpointsConfig,
      resolveRegionConfig: () => resolveRegionConfig
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_config_provider = require_dist_cjs9();
    var ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
    var CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
    var DEFAULT_USE_DUALSTACK_ENDPOINT = false;
    var NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => (0, import_util_config_provider.booleanSelector)(env, ENV_USE_DUALSTACK_ENDPOINT, import_util_config_provider.SelectorType.ENV),
      configFileSelector: (profile) => (0, import_util_config_provider.booleanSelector)(profile, CONFIG_USE_DUALSTACK_ENDPOINT, import_util_config_provider.SelectorType.CONFIG),
      default: false
    };
    var ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
    var CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
    var DEFAULT_USE_FIPS_ENDPOINT = false;
    var NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => (0, import_util_config_provider.booleanSelector)(env, ENV_USE_FIPS_ENDPOINT, import_util_config_provider.SelectorType.ENV),
      configFileSelector: (profile) => (0, import_util_config_provider.booleanSelector)(profile, CONFIG_USE_FIPS_ENDPOINT, import_util_config_provider.SelectorType.CONFIG),
      default: false
    };
    var import_util_middleware = require_dist_cjs10();
    var resolveCustomEndpointsConfig = /* @__PURE__ */ __name((input) => {
      const { endpoint, urlParser } = input;
      return {
        ...input,
        tls: input.tls ?? true,
        endpoint: (0, import_util_middleware.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint),
        isCustomEndpoint: true,
        useDualstackEndpoint: (0, import_util_middleware.normalizeProvider)(input.useDualstackEndpoint ?? false)
      };
    }, "resolveCustomEndpointsConfig");
    var getEndpointFromRegion = /* @__PURE__ */ __name(async (input) => {
      const { tls = true } = input;
      const region = await input.region();
      const dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
      if (!dnsHostRegex.test(region)) {
        throw new Error("Invalid region in client config");
      }
      const useDualstackEndpoint = await input.useDualstackEndpoint();
      const useFipsEndpoint = await input.useFipsEndpoint();
      const { hostname } = await input.regionInfoProvider(region, { useDualstackEndpoint, useFipsEndpoint }) ?? {};
      if (!hostname) {
        throw new Error("Cannot resolve hostname from client config");
      }
      return input.urlParser(`${tls ? "https:" : "http:"}//${hostname}`);
    }, "getEndpointFromRegion");
    var resolveEndpointsConfig = /* @__PURE__ */ __name((input) => {
      const useDualstackEndpoint = (0, import_util_middleware.normalizeProvider)(input.useDualstackEndpoint ?? false);
      const { endpoint, useFipsEndpoint, urlParser } = input;
      return {
        ...input,
        tls: input.tls ?? true,
        endpoint: endpoint ? (0, import_util_middleware.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint) : () => getEndpointFromRegion({ ...input, useDualstackEndpoint, useFipsEndpoint }),
        isCustomEndpoint: !!endpoint,
        useDualstackEndpoint
      };
    }, "resolveEndpointsConfig");
    var REGION_ENV_NAME = "AWS_REGION";
    var REGION_INI_NAME = "region";
    var NODE_REGION_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[REGION_ENV_NAME],
      configFileSelector: (profile) => profile[REGION_INI_NAME],
      default: () => {
        throw new Error("Region is missing");
      }
    };
    var NODE_REGION_CONFIG_FILE_OPTIONS = {
      preferredFile: "credentials"
    };
    var isFipsRegion = /* @__PURE__ */ __name((region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips")), "isFipsRegion");
    var getRealRegion = /* @__PURE__ */ __name((region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region, "getRealRegion");
    var resolveRegionConfig = /* @__PURE__ */ __name((input) => {
      const { region, useFipsEndpoint } = input;
      if (!region) {
        throw new Error("Region is missing");
      }
      return {
        ...input,
        region: async () => {
          if (typeof region === "string") {
            return getRealRegion(region);
          }
          const providedRegion = await region();
          return getRealRegion(providedRegion);
        },
        useFipsEndpoint: async () => {
          const providedRegion = typeof region === "string" ? region : await region();
          if (isFipsRegion(providedRegion)) {
            return true;
          }
          return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        }
      };
    }, "resolveRegionConfig");
    var getHostnameFromVariants = /* @__PURE__ */ __name((variants = [], { useFipsEndpoint, useDualstackEndpoint }) => {
      var _a;
      return (_a = variants.find(
        ({ tags }) => useFipsEndpoint === tags.includes("fips") && useDualstackEndpoint === tags.includes("dualstack")
      )) == null ? void 0 : _a.hostname;
    }, "getHostnameFromVariants");
    var getResolvedHostname = /* @__PURE__ */ __name((resolvedRegion, { regionHostname, partitionHostname }) => regionHostname ? regionHostname : partitionHostname ? partitionHostname.replace("{region}", resolvedRegion) : void 0, "getResolvedHostname");
    var getResolvedPartition = /* @__PURE__ */ __name((region, { partitionHash }) => Object.keys(partitionHash || {}).find((key) => partitionHash[key].regions.includes(region)) ?? "aws", "getResolvedPartition");
    var getResolvedSigningRegion = /* @__PURE__ */ __name((hostname, { signingRegion, regionRegex, useFipsEndpoint }) => {
      if (signingRegion) {
        return signingRegion;
      } else if (useFipsEndpoint) {
        const regionRegexJs = regionRegex.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\.");
        const regionRegexmatchArray = hostname.match(regionRegexJs);
        if (regionRegexmatchArray) {
          return regionRegexmatchArray[0].slice(1, -1);
        }
      }
    }, "getResolvedSigningRegion");
    var getRegionInfo = /* @__PURE__ */ __name((region, {
      useFipsEndpoint = false,
      useDualstackEndpoint = false,
      signingService,
      regionHash,
      partitionHash
    }) => {
      var _a, _b, _c, _d, _e;
      const partition = getResolvedPartition(region, { partitionHash });
      const resolvedRegion = region in regionHash ? region : ((_a = partitionHash[partition]) == null ? void 0 : _a.endpoint) ?? region;
      const hostnameOptions = { useFipsEndpoint, useDualstackEndpoint };
      const regionHostname = getHostnameFromVariants((_b = regionHash[resolvedRegion]) == null ? void 0 : _b.variants, hostnameOptions);
      const partitionHostname = getHostnameFromVariants((_c = partitionHash[partition]) == null ? void 0 : _c.variants, hostnameOptions);
      const hostname = getResolvedHostname(resolvedRegion, { regionHostname, partitionHostname });
      if (hostname === void 0) {
        throw new Error(`Endpoint resolution failed for: ${{ resolvedRegion, useFipsEndpoint, useDualstackEndpoint }}`);
      }
      const signingRegion = getResolvedSigningRegion(hostname, {
        signingRegion: (_d = regionHash[resolvedRegion]) == null ? void 0 : _d.signingRegion,
        regionRegex: partitionHash[partition].regionRegex,
        useFipsEndpoint
      });
      return {
        partition,
        signingService,
        hostname,
        ...signingRegion && { signingRegion },
        ...((_e = regionHash[resolvedRegion]) == null ? void 0 : _e.signingService) && {
          signingService: regionHash[resolvedRegion].signingService
        }
      };
    }, "getRegionInfo");
  }
});

// node_modules/@smithy/property-provider/dist-cjs/index.js
var require_dist_cjs12 = __commonJS({
  "node_modules/@smithy/property-provider/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      CredentialsProviderError: () => CredentialsProviderError,
      ProviderError: () => ProviderError,
      TokenProviderError: () => TokenProviderError,
      chain: () => chain,
      fromStatic: () => fromStatic,
      memoize: () => memoize
    });
    module2.exports = __toCommonJS2(src_exports);
    var _ProviderError = class _ProviderError2 extends Error {
      constructor(message, tryNextLink = true) {
        super(message);
        this.tryNextLink = tryNextLink;
        this.name = "ProviderError";
        Object.setPrototypeOf(this, _ProviderError2.prototype);
      }
      static from(error, tryNextLink = true) {
        return Object.assign(new this(error.message, tryNextLink), error);
      }
    };
    __name(_ProviderError, "ProviderError");
    var ProviderError = _ProviderError;
    var _CredentialsProviderError = class _CredentialsProviderError2 extends ProviderError {
      constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "CredentialsProviderError";
        Object.setPrototypeOf(this, _CredentialsProviderError2.prototype);
      }
    };
    __name(_CredentialsProviderError, "CredentialsProviderError");
    var CredentialsProviderError = _CredentialsProviderError;
    var _TokenProviderError = class _TokenProviderError2 extends ProviderError {
      constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "TokenProviderError";
        Object.setPrototypeOf(this, _TokenProviderError2.prototype);
      }
    };
    __name(_TokenProviderError, "TokenProviderError");
    var TokenProviderError = _TokenProviderError;
    var chain = /* @__PURE__ */ __name((...providers) => async () => {
      if (providers.length === 0) {
        throw new ProviderError("No providers in chain");
      }
      let lastProviderError;
      for (const provider of providers) {
        try {
          const credentials = await provider();
          return credentials;
        } catch (err) {
          lastProviderError = err;
          if (err == null ? void 0 : err.tryNextLink) {
            continue;
          }
          throw err;
        }
      }
      throw lastProviderError;
    }, "chain");
    var fromStatic = /* @__PURE__ */ __name((staticValue) => () => Promise.resolve(staticValue), "fromStatic");
    var memoize = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = /* @__PURE__ */ __name(async () => {
        if (!pending) {
          pending = provider();
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      }, "coalesceProvider");
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || (options == null ? void 0 : options.forceRefresh)) {
            resolved = await coalesceProvider();
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || (options == null ? void 0 : options.forceRefresh)) {
          resolved = await coalesceProvider();
        }
        if (isConstant) {
          return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider();
          return resolved;
        }
        return resolved;
      };
    }, "memoize");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/getHomeDir.js
var require_getHomeDir = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/getHomeDir.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getHomeDir = void 0;
    var os_1 = require("os");
    var path_1 = require("path");
    var homeDirCache = {};
    var getHomeDirCacheKey = () => {
      if (process && process.geteuid) {
        return `${process.geteuid()}`;
      }
      return "DEFAULT";
    };
    var getHomeDir2 = () => {
      const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${path_1.sep}` } = process.env;
      if (HOME)
        return HOME;
      if (USERPROFILE)
        return USERPROFILE;
      if (HOMEPATH)
        return `${HOMEDRIVE}${HOMEPATH}`;
      const homeDirCacheKey = getHomeDirCacheKey();
      if (!homeDirCache[homeDirCacheKey])
        homeDirCache[homeDirCacheKey] = (0, os_1.homedir)();
      return homeDirCache[homeDirCacheKey];
    };
    exports2.getHomeDir = getHomeDir2;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFilepath.js
var require_getSSOTokenFilepath = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFilepath.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getSSOTokenFilepath = void 0;
    var crypto_1 = require("crypto");
    var path_1 = require("path");
    var getHomeDir_1 = require_getHomeDir();
    var getSSOTokenFilepath2 = (id) => {
      const hasher = (0, crypto_1.createHash)("sha1");
      const cacheName = hasher.update(id).digest("hex");
      return (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "sso", "cache", `${cacheName}.json`);
    };
    exports2.getSSOTokenFilepath = getSSOTokenFilepath2;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFromFile.js
var require_getSSOTokenFromFile = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFromFile.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getSSOTokenFromFile = void 0;
    var fs_1 = require("fs");
    var getSSOTokenFilepath_1 = require_getSSOTokenFilepath();
    var { readFile } = fs_1.promises;
    var getSSOTokenFromFile2 = async (id) => {
      const ssoTokenFilepath = (0, getSSOTokenFilepath_1.getSSOTokenFilepath)(id);
      const ssoTokenText = await readFile(ssoTokenFilepath, "utf8");
      return JSON.parse(ssoTokenText);
    };
    exports2.getSSOTokenFromFile = getSSOTokenFromFile2;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/slurpFile.js
var require_slurpFile = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/slurpFile.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.slurpFile = void 0;
    var fs_1 = require("fs");
    var { readFile } = fs_1.promises;
    var filePromisesHash = {};
    var slurpFile = (path, options) => {
      if (!filePromisesHash[path] || (options === null || options === void 0 ? void 0 : options.ignoreCache)) {
        filePromisesHash[path] = readFile(path, "utf8");
      }
      return filePromisesHash[path];
    };
    exports2.slurpFile = slurpFile;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-cjs/index.js
var require_dist_cjs13 = __commonJS({
  "node_modules/@smithy/shared-ini-file-loader/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default"));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      CONFIG_PREFIX_SEPARATOR: () => CONFIG_PREFIX_SEPARATOR,
      DEFAULT_PROFILE: () => DEFAULT_PROFILE,
      ENV_PROFILE: () => ENV_PROFILE,
      getProfileName: () => getProfileName,
      loadSharedConfigFiles: () => loadSharedConfigFiles,
      loadSsoSessionData: () => loadSsoSessionData,
      parseKnownFiles: () => parseKnownFiles
    });
    module2.exports = __toCommonJS2(src_exports);
    __reExport(src_exports, require_getHomeDir(), module2.exports);
    var ENV_PROFILE = "AWS_PROFILE";
    var DEFAULT_PROFILE = "default";
    var getProfileName = /* @__PURE__ */ __name((init) => init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE, "getProfileName");
    __reExport(src_exports, require_getSSOTokenFilepath(), module2.exports);
    __reExport(src_exports, require_getSSOTokenFromFile(), module2.exports);
    var import_types = require_dist_cjs();
    var getConfigData = /* @__PURE__ */ __name((data) => Object.entries(data).filter(([key]) => {
      const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
      if (indexOfSeparator === -1) {
        return false;
      }
      return Object.values(import_types.IniSectionType).includes(key.substring(0, indexOfSeparator));
    }).reduce(
      (acc, [key, value]) => {
        const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
        const updatedKey = key.substring(0, indexOfSeparator) === import_types.IniSectionType.PROFILE ? key.substring(indexOfSeparator + 1) : key;
        acc[updatedKey] = value;
        return acc;
      },
      {
        // Populate default profile, if present.
        ...data.default && { default: data.default }
      }
    ), "getConfigData");
    var import_path = require("path");
    var import_getHomeDir = require_getHomeDir();
    var ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
    var getConfigFilepath = /* @__PURE__ */ __name(() => process.env[ENV_CONFIG_PATH] || (0, import_path.join)((0, import_getHomeDir.getHomeDir)(), ".aws", "config"), "getConfigFilepath");
    var import_getHomeDir2 = require_getHomeDir();
    var ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
    var getCredentialsFilepath = /* @__PURE__ */ __name(() => process.env[ENV_CREDENTIALS_PATH] || (0, import_path.join)((0, import_getHomeDir2.getHomeDir)(), ".aws", "credentials"), "getCredentialsFilepath");
    var prefixKeyRegex = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/;
    var profileNameBlockList = ["__proto__", "profile __proto__"];
    var parseIni = /* @__PURE__ */ __name((iniData) => {
      const map = {};
      let currentSection;
      let currentSubSection;
      for (const iniLine of iniData.split(/\r?\n/)) {
        const trimmedLine = iniLine.split(/(^|\s)[;#]/)[0].trim();
        const isSection = trimmedLine[0] === "[" && trimmedLine[trimmedLine.length - 1] === "]";
        if (isSection) {
          currentSection = void 0;
          currentSubSection = void 0;
          const sectionName = trimmedLine.substring(1, trimmedLine.length - 1);
          const matches = prefixKeyRegex.exec(sectionName);
          if (matches) {
            const [, prefix, , name] = matches;
            if (Object.values(import_types.IniSectionType).includes(prefix)) {
              currentSection = [prefix, name].join(CONFIG_PREFIX_SEPARATOR);
            }
          } else {
            currentSection = sectionName;
          }
          if (profileNameBlockList.includes(sectionName)) {
            throw new Error(`Found invalid profile name "${sectionName}"`);
          }
        } else if (currentSection) {
          const indexOfEqualsSign = trimmedLine.indexOf("=");
          if (![0, -1].includes(indexOfEqualsSign)) {
            const [name, value] = [
              trimmedLine.substring(0, indexOfEqualsSign).trim(),
              trimmedLine.substring(indexOfEqualsSign + 1).trim()
            ];
            if (value === "") {
              currentSubSection = name;
            } else {
              if (currentSubSection && iniLine.trimStart() === iniLine) {
                currentSubSection = void 0;
              }
              map[currentSection] = map[currentSection] || {};
              const key = currentSubSection ? [currentSubSection, name].join(CONFIG_PREFIX_SEPARATOR) : name;
              map[currentSection][key] = value;
            }
          }
        }
      }
      return map;
    }, "parseIni");
    var import_slurpFile = require_slurpFile();
    var swallowError = /* @__PURE__ */ __name(() => ({}), "swallowError");
    var CONFIG_PREFIX_SEPARATOR = ".";
    var loadSharedConfigFiles = /* @__PURE__ */ __name(async (init = {}) => {
      const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
      const parsedFiles = await Promise.all([
        (0, import_slurpFile.slurpFile)(configFilepath, {
          ignoreCache: init.ignoreCache
        }).then(parseIni).then(getConfigData).catch(swallowError),
        (0, import_slurpFile.slurpFile)(filepath, {
          ignoreCache: init.ignoreCache
        }).then(parseIni).catch(swallowError)
      ]);
      return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1]
      };
    }, "loadSharedConfigFiles");
    var getSsoSessionData = /* @__PURE__ */ __name((data) => Object.entries(data).filter(([key]) => key.startsWith(import_types.IniSectionType.SSO_SESSION + CONFIG_PREFIX_SEPARATOR)).reduce((acc, [key, value]) => ({ ...acc, [key.substring(key.indexOf(CONFIG_PREFIX_SEPARATOR) + 1)]: value }), {}), "getSsoSessionData");
    var import_slurpFile2 = require_slurpFile();
    var swallowError2 = /* @__PURE__ */ __name(() => ({}), "swallowError");
    var loadSsoSessionData = /* @__PURE__ */ __name(async (init = {}) => (0, import_slurpFile2.slurpFile)(init.configFilepath ?? getConfigFilepath()).then(parseIni).then(getSsoSessionData).catch(swallowError2), "loadSsoSessionData");
    var mergeConfigFiles = /* @__PURE__ */ __name((...files) => {
      const merged = {};
      for (const file of files) {
        for (const [key, values] of Object.entries(file)) {
          if (merged[key] !== void 0) {
            Object.assign(merged[key], values);
          } else {
            merged[key] = values;
          }
        }
      }
      return merged;
    }, "mergeConfigFiles");
    var parseKnownFiles = /* @__PURE__ */ __name(async (init) => {
      const parsedFiles = await loadSharedConfigFiles(init);
      return mergeConfigFiles(parsedFiles.configFile, parsedFiles.credentialsFile);
    }, "parseKnownFiles");
  }
});

// node_modules/@smithy/node-config-provider/dist-cjs/index.js
var require_dist_cjs14 = __commonJS({
  "node_modules/@smithy/node-config-provider/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      loadConfig: () => loadConfig
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_property_provider = require_dist_cjs12();
    var fromEnv = /* @__PURE__ */ __name((envVarSelector) => async () => {
      try {
        const config = envVarSelector(process.env);
        if (config === void 0) {
          throw new Error();
        }
        return config;
      } catch (e) {
        throw new import_property_provider.CredentialsProviderError(
          e.message || `Cannot load config from environment variables with getter: ${envVarSelector}`
        );
      }
    }, "fromEnv");
    var import_shared_ini_file_loader = require_dist_cjs13();
    var fromSharedConfigFiles = /* @__PURE__ */ __name((configSelector, { preferredFile = "config", ...init } = {}) => async () => {
      const profile = (0, import_shared_ini_file_loader.getProfileName)(init);
      const { configFile, credentialsFile } = await (0, import_shared_ini_file_loader.loadSharedConfigFiles)(init);
      const profileFromCredentials = credentialsFile[profile] || {};
      const profileFromConfig = configFile[profile] || {};
      const mergedProfile = preferredFile === "config" ? { ...profileFromCredentials, ...profileFromConfig } : { ...profileFromConfig, ...profileFromCredentials };
      try {
        const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
        const configValue = configSelector(mergedProfile, cfgFile);
        if (configValue === void 0) {
          throw new Error();
        }
        return configValue;
      } catch (e) {
        throw new import_property_provider.CredentialsProviderError(
          e.message || `Cannot load config for profile ${profile} in SDK configuration files with getter: ${configSelector}`
        );
      }
    }, "fromSharedConfigFiles");
    var isFunction = /* @__PURE__ */ __name((func) => typeof func === "function", "isFunction");
    var fromStatic = /* @__PURE__ */ __name((defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : (0, import_property_provider.fromStatic)(defaultValue), "fromStatic");
    var loadConfig = /* @__PURE__ */ __name(({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => (0, import_property_provider.memoize)(
      (0, import_property_provider.chain)(
        fromEnv(environmentVariableSelector),
        fromSharedConfigFiles(configFileSelector, configuration),
        fromStatic(defaultValue)
      )
    ), "loadConfig");
  }
});

// node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointUrlConfig.js
var require_getEndpointUrlConfig = __commonJS({
  "node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointUrlConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getEndpointUrlConfig = void 0;
    var shared_ini_file_loader_1 = require_dist_cjs13();
    var ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
    var CONFIG_ENDPOINT_URL = "endpoint_url";
    var getEndpointUrlConfig = (serviceId) => ({
      environmentVariableSelector: (env) => {
        const serviceSuffixParts = serviceId.split(" ").map((w) => w.toUpperCase());
        const serviceEndpointUrl = env[[ENV_ENDPOINT_URL, ...serviceSuffixParts].join("_")];
        if (serviceEndpointUrl)
          return serviceEndpointUrl;
        const endpointUrl = env[ENV_ENDPOINT_URL];
        if (endpointUrl)
          return endpointUrl;
        return void 0;
      },
      configFileSelector: (profile, config) => {
        if (config && profile.services) {
          const servicesSection = config[["services", profile.services].join(shared_ini_file_loader_1.CONFIG_PREFIX_SEPARATOR)];
          if (servicesSection) {
            const servicePrefixParts = serviceId.split(" ").map((w) => w.toLowerCase());
            const endpointUrl2 = servicesSection[[servicePrefixParts.join("_"), CONFIG_ENDPOINT_URL].join(shared_ini_file_loader_1.CONFIG_PREFIX_SEPARATOR)];
            if (endpointUrl2)
              return endpointUrl2;
          }
        }
        const endpointUrl = profile[CONFIG_ENDPOINT_URL];
        if (endpointUrl)
          return endpointUrl;
        return void 0;
      },
      default: void 0
    });
    exports2.getEndpointUrlConfig = getEndpointUrlConfig;
  }
});

// node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointFromConfig.js
var require_getEndpointFromConfig = __commonJS({
  "node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointFromConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getEndpointFromConfig = void 0;
    var node_config_provider_1 = require_dist_cjs14();
    var getEndpointUrlConfig_1 = require_getEndpointUrlConfig();
    var getEndpointFromConfig = async (serviceId) => (0, node_config_provider_1.loadConfig)((0, getEndpointUrlConfig_1.getEndpointUrlConfig)(serviceId))();
    exports2.getEndpointFromConfig = getEndpointFromConfig;
  }
});

// node_modules/@smithy/querystring-parser/dist-cjs/index.js
var require_dist_cjs15 = __commonJS({
  "node_modules/@smithy/querystring-parser/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      parseQueryString: () => parseQueryString
    });
    module2.exports = __toCommonJS2(src_exports);
    function parseQueryString(querystring) {
      const query = {};
      querystring = querystring.replace(/^\?/, "");
      if (querystring) {
        for (const pair of querystring.split("&")) {
          let [key, value = null] = pair.split("=");
          key = decodeURIComponent(key);
          if (value) {
            value = decodeURIComponent(value);
          }
          if (!(key in query)) {
            query[key] = value;
          } else if (Array.isArray(query[key])) {
            query[key].push(value);
          } else {
            query[key] = [query[key], value];
          }
        }
      }
      return query;
    }
    __name(parseQueryString, "parseQueryString");
  }
});

// node_modules/@smithy/url-parser/dist-cjs/index.js
var require_dist_cjs16 = __commonJS({
  "node_modules/@smithy/url-parser/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      parseUrl: () => parseUrl
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_querystring_parser = require_dist_cjs15();
    var parseUrl = /* @__PURE__ */ __name((url) => {
      if (typeof url === "string") {
        return parseUrl(new URL(url));
      }
      const { hostname, pathname, port, protocol, search } = url;
      let query;
      if (search) {
        query = (0, import_querystring_parser.parseQueryString)(search);
      }
      return {
        hostname,
        port: port ? parseInt(port) : void 0,
        protocol,
        path: pathname,
        query
      };
    }, "parseUrl");
  }
});

// node_modules/@smithy/middleware-serde/dist-cjs/index.js
var require_dist_cjs17 = __commonJS({
  "node_modules/@smithy/middleware-serde/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      deserializerMiddleware: () => deserializerMiddleware,
      deserializerMiddlewareOption: () => deserializerMiddlewareOption,
      getSerdePlugin: () => getSerdePlugin,
      serializerMiddleware: () => serializerMiddleware,
      serializerMiddlewareOption: () => serializerMiddlewareOption
    });
    module2.exports = __toCommonJS2(src_exports);
    var deserializerMiddleware = /* @__PURE__ */ __name((options, deserializer) => (next) => async (args) => {
      const { response } = await next(args);
      try {
        const parsed = await deserializer(response, options);
        return {
          response,
          output: parsed
        };
      } catch (error) {
        Object.defineProperty(error, "$response", {
          value: response
        });
        if (!("$metadata" in error)) {
          const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
          error.message += "\n  " + hint;
          if (typeof error.$responseBodyText !== "undefined") {
            if (error.$response) {
              error.$response.body = error.$responseBodyText;
            }
          }
        }
        throw error;
      }
    }, "deserializerMiddleware");
    var serializerMiddleware = /* @__PURE__ */ __name((options, serializer) => (next, context) => async (args) => {
      var _a;
      const endpoint = ((_a = context.endpointV2) == null ? void 0 : _a.url) && options.urlParser ? async () => options.urlParser(context.endpointV2.url) : options.endpoint;
      if (!endpoint) {
        throw new Error("No valid endpoint provider available.");
      }
      const request = await serializer(args.input, { ...options, endpoint });
      return next({
        ...args,
        request
      });
    }, "serializerMiddleware");
    var deserializerMiddlewareOption = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: true
    };
    var serializerMiddlewareOption = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: true
    };
    function getSerdePlugin(config, serializer, deserializer) {
      return {
        applyToStack: (commandStack) => {
          commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
          commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
        }
      };
    }
    __name(getSerdePlugin, "getSerdePlugin");
  }
});

// node_modules/@smithy/middleware-endpoint/dist-cjs/index.js
var require_dist_cjs18 = __commonJS({
  "node_modules/@smithy/middleware-endpoint/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      endpointMiddleware: () => endpointMiddleware,
      endpointMiddlewareOptions: () => endpointMiddlewareOptions,
      getEndpointFromInstructions: () => getEndpointFromInstructions,
      getEndpointPlugin: () => getEndpointPlugin,
      resolveEndpointConfig: () => resolveEndpointConfig,
      resolveParams: () => resolveParams,
      toEndpointV1: () => toEndpointV1
    });
    module2.exports = __toCommonJS2(src_exports);
    var resolveParamsForS3 = /* @__PURE__ */ __name(async (endpointParams) => {
      const bucket = (endpointParams == null ? void 0 : endpointParams.Bucket) || "";
      if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
      }
      if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
          throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
      } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
      }
      if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
      }
      return endpointParams;
    }, "resolveParamsForS3");
    var DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
    var IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
    var DOTS_PATTERN = /\.\./;
    var isDnsCompatibleBucketName = /* @__PURE__ */ __name((bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName), "isDnsCompatibleBucketName");
    var isArnBucketName = /* @__PURE__ */ __name((bucketName) => {
      const [arn, partition, service, , , bucket] = bucketName.split(":");
      const isArn = arn === "arn" && bucketName.split(":").length >= 6;
      const isValidArn = Boolean(isArn && partition && service && bucket);
      if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
      }
      return isValidArn;
    }, "isArnBucketName");
    var createConfigValueProvider = /* @__PURE__ */ __name((configKey, canonicalEndpointParamKey, config) => {
      const configProvider = /* @__PURE__ */ __name(async () => {
        const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
        if (typeof configValue === "function") {
          return configValue();
        }
        return configValue;
      }, "configProvider");
      if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
        return async () => {
          const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
          const configValue = (credentials == null ? void 0 : credentials.credentialScope) ?? (credentials == null ? void 0 : credentials.CredentialScope);
          return configValue;
        };
      }
      if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
          const endpoint = await configProvider();
          if (endpoint && typeof endpoint === "object") {
            if ("url" in endpoint) {
              return endpoint.url.href;
            }
            if ("hostname" in endpoint) {
              const { protocol, hostname, port, path } = endpoint;
              return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
            }
          }
          return endpoint;
        };
      }
      return configProvider;
    }, "createConfigValueProvider");
    var import_getEndpointFromConfig = require_getEndpointFromConfig();
    var import_url_parser = require_dist_cjs16();
    var toEndpointV1 = /* @__PURE__ */ __name((endpoint) => {
      if (typeof endpoint === "object") {
        if ("url" in endpoint) {
          return (0, import_url_parser.parseUrl)(endpoint.url);
        }
        return endpoint;
      }
      return (0, import_url_parser.parseUrl)(endpoint);
    }, "toEndpointV1");
    var getEndpointFromInstructions = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig, context) => {
      if (!clientConfig.endpoint) {
        const endpointFromConfig = await (0, import_getEndpointFromConfig.getEndpointFromConfig)(clientConfig.serviceId || "");
        if (endpointFromConfig) {
          clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
        }
      }
      const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
      if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
      }
      const endpoint = clientConfig.endpointProvider(endpointParams, context);
      return endpoint;
    }, "getEndpointFromInstructions");
    var resolveParams = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig) => {
      var _a;
      const endpointParams = {};
      const instructions = ((_a = instructionsSupplier == null ? void 0 : instructionsSupplier.getEndpointParameterInstructions) == null ? void 0 : _a.call(instructionsSupplier)) || {};
      for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
          case "staticContextParams":
            endpointParams[name] = instruction.value;
            break;
          case "contextParams":
            endpointParams[name] = commandInput[instruction.name];
            break;
          case "clientContextParams":
          case "builtInParams":
            endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
            break;
          default:
            throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
      }
      if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
      }
      if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await resolveParamsForS3(endpointParams);
      }
      return endpointParams;
    }, "resolveParams");
    var import_util_middleware = require_dist_cjs10();
    var endpointMiddleware = /* @__PURE__ */ __name(({
      config,
      instructions
    }) => {
      return (next, context) => async (args) => {
        var _a, _b, _c;
        const endpoint = await getEndpointFromInstructions(
          args.input,
          {
            getEndpointParameterInstructions() {
              return instructions;
            }
          },
          { ...config },
          context
        );
        context.endpointV2 = endpoint;
        context.authSchemes = (_a = endpoint.properties) == null ? void 0 : _a.authSchemes;
        const authScheme = (_b = context.authSchemes) == null ? void 0 : _b[0];
        if (authScheme) {
          context["signing_region"] = authScheme.signingRegion;
          context["signing_service"] = authScheme.signingName;
          const smithyContext = (0, import_util_middleware.getSmithyContext)(context);
          const httpAuthOption = (_c = smithyContext == null ? void 0 : smithyContext.selectedHttpAuthScheme) == null ? void 0 : _c.httpAuthOption;
          if (httpAuthOption) {
            httpAuthOption.signingProperties = Object.assign(
              httpAuthOption.signingProperties || {},
              {
                signing_region: authScheme.signingRegion,
                signingRegion: authScheme.signingRegion,
                signing_service: authScheme.signingName,
                signingName: authScheme.signingName,
                signingRegionSet: authScheme.signingRegionSet
              },
              authScheme.properties
            );
          }
        }
        return next({
          ...args
        });
      };
    }, "endpointMiddleware");
    var import_middleware_serde = require_dist_cjs17();
    var endpointMiddlewareOptions = {
      step: "serialize",
      tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
      name: "endpointV2Middleware",
      override: true,
      relation: "before",
      toMiddleware: import_middleware_serde.serializerMiddlewareOption.name
    };
    var getEndpointPlugin = /* @__PURE__ */ __name((config, instructions) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(
          endpointMiddleware({
            config,
            instructions
          }),
          endpointMiddlewareOptions
        );
      }
    }), "getEndpointPlugin");
    var resolveEndpointConfig = /* @__PURE__ */ __name((input) => {
      const tls = input.tls ?? true;
      const { endpoint } = input;
      const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await (0, import_util_middleware.normalizeProvider)(endpoint)()) : void 0;
      const isCustomEndpoint = !!endpoint;
      return {
        ...input,
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: (0, import_util_middleware.normalizeProvider)(input.useDualstackEndpoint ?? false),
        useFipsEndpoint: (0, import_util_middleware.normalizeProvider)(input.useFipsEndpoint ?? false)
      };
    }, "resolveEndpointConfig");
  }
});

// node_modules/uuid/dist/esm-node/rng.js
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    import_crypto.default.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }
  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
var import_crypto, rnds8Pool, poolPtr;
var init_rng = __esm({
  "node_modules/uuid/dist/esm-node/rng.js"() {
    import_crypto = __toESM(require("crypto"));
    rnds8Pool = new Uint8Array(256);
    poolPtr = rnds8Pool.length;
  }
});

// node_modules/uuid/dist/esm-node/regex.js
var regex_default;
var init_regex = __esm({
  "node_modules/uuid/dist/esm-node/regex.js"() {
    regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  }
});

// node_modules/uuid/dist/esm-node/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default;
var init_validate = __esm({
  "node_modules/uuid/dist/esm-node/validate.js"() {
    init_regex();
    validate_default = validate;
  }
});

// node_modules/uuid/dist/esm-node/stringify.js
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset);
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var byteToHex, stringify_default;
var init_stringify = __esm({
  "node_modules/uuid/dist/esm-node/stringify.js"() {
    init_validate();
    byteToHex = [];
    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).slice(1));
    }
    stringify_default = stringify;
  }
});

// node_modules/uuid/dist/esm-node/v1.js
function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || rng)();
    if (node == null) {
      node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }
    if (clockseq == null) {
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
    }
  }
  let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
  let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
  if (dt < 0 && options.clockseq === void 0) {
    clockseq = clockseq + 1 & 16383;
  }
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
    nsecs = 0;
  }
  if (nsecs >= 1e4) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }
  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;
  msecs += 122192928e5;
  const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
  b[i++] = tl >>> 24 & 255;
  b[i++] = tl >>> 16 & 255;
  b[i++] = tl >>> 8 & 255;
  b[i++] = tl & 255;
  const tmh = msecs / 4294967296 * 1e4 & 268435455;
  b[i++] = tmh >>> 8 & 255;
  b[i++] = tmh & 255;
  b[i++] = tmh >>> 24 & 15 | 16;
  b[i++] = tmh >>> 16 & 255;
  b[i++] = clockseq >>> 8 | 128;
  b[i++] = clockseq & 255;
  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }
  return buf || unsafeStringify(b);
}
var _nodeId, _clockseq, _lastMSecs, _lastNSecs, v1_default;
var init_v1 = __esm({
  "node_modules/uuid/dist/esm-node/v1.js"() {
    init_rng();
    init_stringify();
    _lastMSecs = 0;
    _lastNSecs = 0;
    v1_default = v1;
  }
});

// node_modules/uuid/dist/esm-node/parse.js
function parse(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  let v;
  const arr = new Uint8Array(16);
  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 255;
  arr[2] = v >>> 8 & 255;
  arr[3] = v & 255;
  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 255;
  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 255;
  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 255;
  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
  arr[11] = v / 4294967296 & 255;
  arr[12] = v >>> 24 & 255;
  arr[13] = v >>> 16 & 255;
  arr[14] = v >>> 8 & 255;
  arr[15] = v & 255;
  return arr;
}
var parse_default;
var init_parse = __esm({
  "node_modules/uuid/dist/esm-node/parse.js"() {
    init_validate();
    parse_default = parse;
  }
});

// node_modules/uuid/dist/esm-node/v35.js
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str));
  const bytes = [];
  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
function v35(name, version2, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;
    if (typeof value === "string") {
      value = stringToBytes(value);
    }
    if (typeof namespace === "string") {
      namespace = parse_default(namespace);
    }
    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 15 | version2;
    bytes[8] = bytes[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return unsafeStringify(bytes);
  }
  try {
    generateUUID.name = name;
  } catch (err) {
  }
  generateUUID.DNS = DNS;
  generateUUID.URL = URL2;
  return generateUUID;
}
var DNS, URL2;
var init_v35 = __esm({
  "node_modules/uuid/dist/esm-node/v35.js"() {
    init_stringify();
    init_parse();
    DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  }
});

// node_modules/uuid/dist/esm-node/md5.js
function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === "string") {
    bytes = Buffer.from(bytes, "utf8");
  }
  return import_crypto2.default.createHash("md5").update(bytes).digest();
}
var import_crypto2, md5_default;
var init_md5 = __esm({
  "node_modules/uuid/dist/esm-node/md5.js"() {
    import_crypto2 = __toESM(require("crypto"));
    md5_default = md5;
  }
});

// node_modules/uuid/dist/esm-node/v3.js
var v3, v3_default;
var init_v3 = __esm({
  "node_modules/uuid/dist/esm-node/v3.js"() {
    init_v35();
    init_md5();
    v3 = v35("v3", 48, md5_default);
    v3_default = v3;
  }
});

// node_modules/uuid/dist/esm-node/native.js
var import_crypto3, native_default;
var init_native = __esm({
  "node_modules/uuid/dist/esm-node/native.js"() {
    import_crypto3 = __toESM(require("crypto"));
    native_default = {
      randomUUID: import_crypto3.default.randomUUID
    };
  }
});

// node_modules/uuid/dist/esm-node/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default;
var init_v4 = __esm({
  "node_modules/uuid/dist/esm-node/v4.js"() {
    init_native();
    init_rng();
    init_stringify();
    v4_default = v4;
  }
});

// node_modules/uuid/dist/esm-node/sha1.js
function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === "string") {
    bytes = Buffer.from(bytes, "utf8");
  }
  return import_crypto4.default.createHash("sha1").update(bytes).digest();
}
var import_crypto4, sha1_default;
var init_sha1 = __esm({
  "node_modules/uuid/dist/esm-node/sha1.js"() {
    import_crypto4 = __toESM(require("crypto"));
    sha1_default = sha1;
  }
});

// node_modules/uuid/dist/esm-node/v5.js
var v5, v5_default;
var init_v5 = __esm({
  "node_modules/uuid/dist/esm-node/v5.js"() {
    init_v35();
    init_sha1();
    v5 = v35("v5", 80, sha1_default);
    v5_default = v5;
  }
});

// node_modules/uuid/dist/esm-node/nil.js
var nil_default;
var init_nil = __esm({
  "node_modules/uuid/dist/esm-node/nil.js"() {
    nil_default = "00000000-0000-0000-0000-000000000000";
  }
});

// node_modules/uuid/dist/esm-node/version.js
function version(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  return parseInt(uuid.slice(14, 15), 16);
}
var version_default;
var init_version = __esm({
  "node_modules/uuid/dist/esm-node/version.js"() {
    init_validate();
    version_default = version;
  }
});

// node_modules/uuid/dist/esm-node/index.js
var esm_node_exports = {};
__export(esm_node_exports, {
  NIL: () => nil_default,
  parse: () => parse_default,
  stringify: () => stringify_default,
  v1: () => v1_default,
  v3: () => v3_default,
  v4: () => v4_default,
  v5: () => v5_default,
  validate: () => validate_default,
  version: () => version_default
});
var init_esm_node = __esm({
  "node_modules/uuid/dist/esm-node/index.js"() {
    init_v1();
    init_v3();
    init_v4();
    init_v5();
    init_nil();
    init_version();
    init_validate();
    init_stringify();
    init_parse();
  }
});

// node_modules/@smithy/service-error-classification/dist-cjs/index.js
var require_dist_cjs19 = __commonJS({
  "node_modules/@smithy/service-error-classification/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      isClockSkewCorrectedError: () => isClockSkewCorrectedError,
      isClockSkewError: () => isClockSkewError,
      isRetryableByTrait: () => isRetryableByTrait,
      isServerError: () => isServerError,
      isThrottlingError: () => isThrottlingError,
      isTransientError: () => isTransientError
    });
    module2.exports = __toCommonJS2(src_exports);
    var CLOCK_SKEW_ERROR_CODES = [
      "AuthFailure",
      "InvalidSignatureException",
      "RequestExpired",
      "RequestInTheFuture",
      "RequestTimeTooSkewed",
      "SignatureDoesNotMatch"
    ];
    var THROTTLING_ERROR_CODES = [
      "BandwidthLimitExceeded",
      "EC2ThrottledException",
      "LimitExceededException",
      "PriorRequestNotComplete",
      "ProvisionedThroughputExceededException",
      "RequestLimitExceeded",
      "RequestThrottled",
      "RequestThrottledException",
      "SlowDown",
      "ThrottledException",
      "Throttling",
      "ThrottlingException",
      "TooManyRequestsException",
      "TransactionInProgressException"
      // DynamoDB
    ];
    var TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
    var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
    var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
    var isRetryableByTrait = /* @__PURE__ */ __name((error) => error.$retryable !== void 0, "isRetryableByTrait");
    var isClockSkewError = /* @__PURE__ */ __name((error) => CLOCK_SKEW_ERROR_CODES.includes(error.name), "isClockSkewError");
    var isClockSkewCorrectedError = /* @__PURE__ */ __name((error) => {
      var _a;
      return (_a = error.$metadata) == null ? void 0 : _a.clockSkewCorrected;
    }, "isClockSkewCorrectedError");
    var isThrottlingError = /* @__PURE__ */ __name((error) => {
      var _a, _b;
      return ((_a = error.$metadata) == null ? void 0 : _a.httpStatusCode) === 429 || THROTTLING_ERROR_CODES.includes(error.name) || ((_b = error.$retryable) == null ? void 0 : _b.throttling) == true;
    }, "isThrottlingError");
    var isTransientError = /* @__PURE__ */ __name((error) => {
      var _a;
      return isClockSkewCorrectedError(error) || TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES.includes((error == null ? void 0 : error.code) || "") || TRANSIENT_ERROR_STATUS_CODES.includes(((_a = error.$metadata) == null ? void 0 : _a.httpStatusCode) || 0);
    }, "isTransientError");
    var isServerError = /* @__PURE__ */ __name((error) => {
      var _a;
      if (((_a = error.$metadata) == null ? void 0 : _a.httpStatusCode) !== void 0) {
        const statusCode = error.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
          return true;
        }
        return false;
      }
      return false;
    }, "isServerError");
  }
});

// node_modules/@smithy/util-retry/dist-cjs/index.js
var require_dist_cjs20 = __commonJS({
  "node_modules/@smithy/util-retry/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      AdaptiveRetryStrategy: () => AdaptiveRetryStrategy,
      ConfiguredRetryStrategy: () => ConfiguredRetryStrategy,
      DEFAULT_MAX_ATTEMPTS: () => DEFAULT_MAX_ATTEMPTS,
      DEFAULT_RETRY_DELAY_BASE: () => DEFAULT_RETRY_DELAY_BASE,
      DEFAULT_RETRY_MODE: () => DEFAULT_RETRY_MODE,
      DefaultRateLimiter: () => DefaultRateLimiter,
      INITIAL_RETRY_TOKENS: () => INITIAL_RETRY_TOKENS,
      INVOCATION_ID_HEADER: () => INVOCATION_ID_HEADER,
      MAXIMUM_RETRY_DELAY: () => MAXIMUM_RETRY_DELAY,
      NO_RETRY_INCREMENT: () => NO_RETRY_INCREMENT,
      REQUEST_HEADER: () => REQUEST_HEADER,
      RETRY_COST: () => RETRY_COST,
      RETRY_MODES: () => RETRY_MODES,
      StandardRetryStrategy: () => StandardRetryStrategy,
      THROTTLING_RETRY_DELAY_BASE: () => THROTTLING_RETRY_DELAY_BASE,
      TIMEOUT_RETRY_COST: () => TIMEOUT_RETRY_COST
    });
    module2.exports = __toCommonJS2(src_exports);
    var RETRY_MODES = /* @__PURE__ */ ((RETRY_MODES2) => {
      RETRY_MODES2["STANDARD"] = "standard";
      RETRY_MODES2["ADAPTIVE"] = "adaptive";
      return RETRY_MODES2;
    })(RETRY_MODES || {});
    var DEFAULT_MAX_ATTEMPTS = 3;
    var DEFAULT_RETRY_MODE = "standard";
    var import_service_error_classification = require_dist_cjs19();
    var _DefaultRateLimiter = class _DefaultRateLimiter {
      constructor(options) {
        this.currentCapacity = 0;
        this.enabled = false;
        this.lastMaxRate = 0;
        this.measuredTxRate = 0;
        this.requestCount = 0;
        this.lastTimestamp = 0;
        this.timeWindow = 0;
        this.beta = (options == null ? void 0 : options.beta) ?? 0.7;
        this.minCapacity = (options == null ? void 0 : options.minCapacity) ?? 1;
        this.minFillRate = (options == null ? void 0 : options.minFillRate) ?? 0.5;
        this.scaleConstant = (options == null ? void 0 : options.scaleConstant) ?? 0.4;
        this.smooth = (options == null ? void 0 : options.smooth) ?? 0.8;
        const currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
      }
      getCurrentTimeInSeconds() {
        return Date.now() / 1e3;
      }
      async getSendToken() {
        return this.acquireTokenBucket(1);
      }
      async acquireTokenBucket(amount) {
        if (!this.enabled) {
          return;
        }
        this.refillTokenBucket();
        if (amount > this.currentCapacity) {
          const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
        this.currentCapacity = this.currentCapacity - amount;
      }
      refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
          this.lastTimestamp = timestamp;
          return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
      }
      updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        if ((0, import_service_error_classification.isThrottlingError)(response)) {
          const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
          this.lastMaxRate = rateToUse;
          this.calculateTimeWindow();
          this.lastThrottleTime = this.getCurrentTimeInSeconds();
          calculatedRate = this.cubicThrottle(rateToUse);
          this.enableTokenBucket();
        } else {
          this.calculateTimeWindow();
          calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
      }
      calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
      }
      cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
      }
      cubicSuccess(timestamp) {
        return this.getPrecise(
          this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate
        );
      }
      enableTokenBucket() {
        this.enabled = true;
      }
      updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
      }
      updateMeasuredRate() {
        const t = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
          const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
          this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
          this.requestCount = 0;
          this.lastTxRateBucket = timeBucket;
        }
      }
      getPrecise(num) {
        return parseFloat(num.toFixed(8));
      }
    };
    __name(_DefaultRateLimiter, "DefaultRateLimiter");
    var DefaultRateLimiter = _DefaultRateLimiter;
    var DEFAULT_RETRY_DELAY_BASE = 100;
    var MAXIMUM_RETRY_DELAY = 20 * 1e3;
    var THROTTLING_RETRY_DELAY_BASE = 500;
    var INITIAL_RETRY_TOKENS = 500;
    var RETRY_COST = 5;
    var TIMEOUT_RETRY_COST = 10;
    var NO_RETRY_INCREMENT = 1;
    var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
    var REQUEST_HEADER = "amz-sdk-request";
    var getDefaultRetryBackoffStrategy = /* @__PURE__ */ __name(() => {
      let delayBase = DEFAULT_RETRY_DELAY_BASE;
      const computeNextBackoffDelay = /* @__PURE__ */ __name((attempts) => {
        return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
      }, "computeNextBackoffDelay");
      const setDelayBase = /* @__PURE__ */ __name((delay) => {
        delayBase = delay;
      }, "setDelayBase");
      return {
        computeNextBackoffDelay,
        setDelayBase
      };
    }, "getDefaultRetryBackoffStrategy");
    var createDefaultRetryToken = /* @__PURE__ */ __name(({
      retryDelay,
      retryCount,
      retryCost
    }) => {
      const getRetryCount = /* @__PURE__ */ __name(() => retryCount, "getRetryCount");
      const getRetryDelay = /* @__PURE__ */ __name(() => Math.min(MAXIMUM_RETRY_DELAY, retryDelay), "getRetryDelay");
      const getRetryCost = /* @__PURE__ */ __name(() => retryCost, "getRetryCost");
      return {
        getRetryCount,
        getRetryDelay,
        getRetryCost
      };
    }, "createDefaultRetryToken");
    var _StandardRetryStrategy = class _StandardRetryStrategy {
      constructor(maxAttempts) {
        this.maxAttempts = maxAttempts;
        this.mode = "standard";
        this.capacity = INITIAL_RETRY_TOKENS;
        this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
        this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async acquireInitialRetryToken(retryTokenScope) {
        return createDefaultRetryToken({
          retryDelay: DEFAULT_RETRY_DELAY_BASE,
          retryCount: 0
        });
      }
      async refreshRetryTokenForRetry(token, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        if (this.shouldRetry(token, errorInfo, maxAttempts)) {
          const errorType = errorInfo.errorType;
          this.retryBackoffStrategy.setDelayBase(
            errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE
          );
          const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
          const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
          const capacityCost = this.getCapacityCost(errorType);
          this.capacity -= capacityCost;
          return createDefaultRetryToken({
            retryDelay,
            retryCount: token.getRetryCount() + 1,
            retryCost: capacityCost
          });
        }
        throw new Error("No retry token available");
      }
      recordSuccess(token) {
        this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
      }
      /**
       * @returns the current available retry capacity.
       *
       * This number decreases when retries are executed and refills when requests or retries succeed.
       */
      getCapacity() {
        return this.capacity;
      }
      async getMaxAttempts() {
        try {
          return await this.maxAttemptsProvider();
        } catch (error) {
          console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
          return DEFAULT_MAX_ATTEMPTS;
        }
      }
      shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount() + 1;
        return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
      }
      getCapacityCost(errorType) {
        return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
      }
      isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
      }
    };
    __name(_StandardRetryStrategy, "StandardRetryStrategy");
    var StandardRetryStrategy = _StandardRetryStrategy;
    var _AdaptiveRetryStrategy = class _AdaptiveRetryStrategy {
      constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = "adaptive";
        const { rateLimiter } = options ?? {};
        this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
        this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
      }
      async acquireInitialRetryToken(retryTokenScope) {
        await this.rateLimiter.getSendToken();
        return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
      }
      async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        this.rateLimiter.updateClientSendingRate(errorInfo);
        return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
      }
      recordSuccess(token) {
        this.rateLimiter.updateClientSendingRate({});
        this.standardRetryStrategy.recordSuccess(token);
      }
    };
    __name(_AdaptiveRetryStrategy, "AdaptiveRetryStrategy");
    var AdaptiveRetryStrategy = _AdaptiveRetryStrategy;
    var _ConfiguredRetryStrategy = class _ConfiguredRetryStrategy extends StandardRetryStrategy {
      /**
       * @param maxAttempts - the maximum number of retry attempts allowed.
       *                      e.g., if set to 3, then 4 total requests are possible.
       * @param computeNextBackoffDelay - a millisecond delay for each retry or a function that takes the retry attempt
       *                                  and returns the delay.
       *
       * @example exponential backoff.
       * ```js
       * new Client({
       *   retryStrategy: new ConfiguredRetryStrategy(3, (attempt) => attempt ** 2)
       * });
       * ```
       * @example constant delay.
       * ```js
       * new Client({
       *   retryStrategy: new ConfiguredRetryStrategy(3, 2000)
       * });
       * ```
       */
      constructor(maxAttempts, computeNextBackoffDelay = DEFAULT_RETRY_DELAY_BASE) {
        super(typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts);
        if (typeof computeNextBackoffDelay === "number") {
          this.computeNextBackoffDelay = () => computeNextBackoffDelay;
        } else {
          this.computeNextBackoffDelay = computeNextBackoffDelay;
        }
      }
      async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        const token = await super.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
        token.getRetryDelay = () => this.computeNextBackoffDelay(token.getRetryCount());
        return token;
      }
    };
    __name(_ConfiguredRetryStrategy, "ConfiguredRetryStrategy");
    var ConfiguredRetryStrategy = _ConfiguredRetryStrategy;
  }
});

// node_modules/@smithy/middleware-stack/dist-cjs/index.js
var require_dist_cjs21 = __commonJS({
  "node_modules/@smithy/middleware-stack/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      constructStack: () => constructStack
    });
    module2.exports = __toCommonJS2(src_exports);
    var getAllAliases = /* @__PURE__ */ __name((name, aliases) => {
      const _aliases = [];
      if (name) {
        _aliases.push(name);
      }
      if (aliases) {
        for (const alias of aliases) {
          _aliases.push(alias);
        }
      }
      return _aliases;
    }, "getAllAliases");
    var getMiddlewareNameWithAliases = /* @__PURE__ */ __name((name, aliases) => {
      return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
    }, "getMiddlewareNameWithAliases");
    var constructStack = /* @__PURE__ */ __name(() => {
      let absoluteEntries = [];
      let relativeEntries = [];
      let identifyOnResolve = false;
      const entriesNameSet = /* @__PURE__ */ new Set();
      const sort = /* @__PURE__ */ __name((entries) => entries.sort(
        (a, b) => stepWeights[b.step] - stepWeights[a.step] || priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]
      ), "sort");
      const removeByName = /* @__PURE__ */ __name((toRemove) => {
        let isRemoved = false;
        const filterCb = /* @__PURE__ */ __name((entry) => {
          const aliases = getAllAliases(entry.name, entry.aliases);
          if (aliases.includes(toRemove)) {
            isRemoved = true;
            for (const alias of aliases) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        }, "filterCb");
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      }, "removeByName");
      const removeByReference = /* @__PURE__ */ __name((toRemove) => {
        let isRemoved = false;
        const filterCb = /* @__PURE__ */ __name((entry) => {
          if (entry.middleware === toRemove) {
            isRemoved = true;
            for (const alias of getAllAliases(entry.name, entry.aliases)) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        }, "filterCb");
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      }, "removeByReference");
      const cloneTo = /* @__PURE__ */ __name((toStack) => {
        var _a;
        absoluteEntries.forEach((entry) => {
          toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
          toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        (_a = toStack.identifyOnResolve) == null ? void 0 : _a.call(toStack, stack.identifyOnResolve());
        return toStack;
      }, "cloneTo");
      const expandRelativeMiddlewareList = /* @__PURE__ */ __name((from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        return expandedMiddlewareList;
      }, "expandRelativeMiddlewareList");
      const getMiddlewareList = /* @__PURE__ */ __name((debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
          if (entry.toMiddleware) {
            const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
            if (toMiddleware === void 0) {
              if (debug) {
                return;
              }
              throw new Error(
                `${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`
              );
            }
            if (entry.relation === "after") {
              toMiddleware.after.push(entry);
            }
            if (entry.relation === "before") {
              toMiddleware.before.push(entry);
            }
          }
        });
        const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce(
          (wholeList, expandedMiddlewareList) => {
            wholeList.push(...expandedMiddlewareList);
            return wholeList;
          },
          []
        );
        return mainChain;
      }, "getMiddlewareList");
      const stack = {
        add: (middleware, options = {}) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            step: "initialize",
            priority: "normal",
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = absoluteEntries.findIndex(
                  (entry2) => {
                    var _a;
                    return entry2.name === alias || ((_a = entry2.aliases) == null ? void 0 : _a.some((a) => a === alias));
                  }
                );
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = absoluteEntries[toOverrideIndex];
                if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                  throw new Error(
                    `"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`
                  );
                }
                absoluteEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = relativeEntries.findIndex(
                  (entry2) => {
                    var _a;
                    return entry2.name === alias || ((_a = entry2.aliases) == null ? void 0 : _a.some((a) => a === alias));
                  }
                );
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = relativeEntries[toOverrideIndex];
                if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                  throw new Error(
                    `"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`
                  );
                }
                relativeEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          relativeEntries.push(entry);
        },
        clone: () => cloneTo(constructStack()),
        use: (plugin) => {
          plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
          if (typeof toRemove === "string")
            return removeByName(toRemove);
          else
            return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
          let isRemoved = false;
          const filterCb = /* @__PURE__ */ __name((entry) => {
            const { tags, name, aliases: _aliases } = entry;
            if (tags && tags.includes(toRemove)) {
              const aliases = getAllAliases(name, _aliases);
              for (const alias of aliases) {
                entriesNameSet.delete(alias);
              }
              isRemoved = true;
              return false;
            }
            return true;
          }, "filterCb");
          absoluteEntries = absoluteEntries.filter(filterCb);
          relativeEntries = relativeEntries.filter(filterCb);
          return isRemoved;
        },
        concat: (from) => {
          var _a;
          const cloned = cloneTo(constructStack());
          cloned.use(from);
          cloned.identifyOnResolve(
            identifyOnResolve || cloned.identifyOnResolve() || (((_a = from.identifyOnResolve) == null ? void 0 : _a.call(from)) ?? false)
          );
          return cloned;
        },
        applyToStack: cloneTo,
        identify: () => {
          return getMiddlewareList(true).map((mw) => {
            const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
            return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
          });
        },
        identifyOnResolve(toggle) {
          if (typeof toggle === "boolean")
            identifyOnResolve = toggle;
          return identifyOnResolve;
        },
        resolve: (handler, context) => {
          for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
            handler = middleware(handler, context);
          }
          if (identifyOnResolve) {
            console.log(stack.identify());
          }
          return handler;
        }
      };
      return stack;
    }, "constructStack");
    var stepWeights = {
      initialize: 5,
      serialize: 4,
      build: 3,
      finalizeRequest: 2,
      deserialize: 1
    };
    var priorityWeights = {
      high: 3,
      normal: 2,
      low: 1
    };
  }
});

// node_modules/@smithy/is-array-buffer/dist-cjs/index.js
var require_dist_cjs22 = __commonJS({
  "node_modules/@smithy/is-array-buffer/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      isArrayBuffer: () => isArrayBuffer
    });
    module2.exports = __toCommonJS2(src_exports);
    var isArrayBuffer = /* @__PURE__ */ __name((arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]", "isArrayBuffer");
  }
});

// node_modules/@smithy/util-buffer-from/dist-cjs/index.js
var require_dist_cjs23 = __commonJS({
  "node_modules/@smithy/util-buffer-from/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      fromArrayBuffer: () => fromArrayBuffer,
      fromString: () => fromString
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_is_array_buffer = require_dist_cjs22();
    var import_buffer = require("buffer");
    var fromArrayBuffer = /* @__PURE__ */ __name((input, offset = 0, length = input.byteLength - offset) => {
      if (!(0, import_is_array_buffer.isArrayBuffer)(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
      }
      return import_buffer.Buffer.from(input, offset, length);
    }, "fromArrayBuffer");
    var fromString = /* @__PURE__ */ __name((input, encoding) => {
      if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
      }
      return encoding ? import_buffer.Buffer.from(input, encoding) : import_buffer.Buffer.from(input);
    }, "fromString");
  }
});

// node_modules/@smithy/util-base64/dist-cjs/fromBase64.js
var require_fromBase64 = __commonJS({
  "node_modules/@smithy/util-base64/dist-cjs/fromBase64.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromBase64 = void 0;
    var util_buffer_from_1 = require_dist_cjs23();
    var BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
    var fromBase642 = (input) => {
      if (input.length * 3 % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
      }
      if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
      }
      const buffer = (0, util_buffer_from_1.fromString)(input, "base64");
      return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    };
    exports2.fromBase64 = fromBase642;
  }
});

// node_modules/@smithy/util-utf8/dist-cjs/index.js
var require_dist_cjs24 = __commonJS({
  "node_modules/@smithy/util-utf8/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      fromUtf8: () => fromUtf8,
      toUint8Array: () => toUint8Array,
      toUtf8: () => toUtf8
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_buffer_from = require_dist_cjs23();
    var fromUtf8 = /* @__PURE__ */ __name((input) => {
      const buf = (0, import_util_buffer_from.fromString)(input, "utf8");
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }, "fromUtf8");
    var toUint8Array = /* @__PURE__ */ __name((data) => {
      if (typeof data === "string") {
        return fromUtf8(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }, "toUint8Array");
    var toUtf8 = /* @__PURE__ */ __name((input) => {
      if (typeof input === "string") {
        return input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      }
      return (0, import_util_buffer_from.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
    }, "toUtf8");
  }
});

// node_modules/@smithy/util-base64/dist-cjs/toBase64.js
var require_toBase64 = __commonJS({
  "node_modules/@smithy/util-base64/dist-cjs/toBase64.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.toBase64 = void 0;
    var util_buffer_from_1 = require_dist_cjs23();
    var util_utf8_1 = require_dist_cjs24();
    var toBase642 = (_input) => {
      let input;
      if (typeof _input === "string") {
        input = (0, util_utf8_1.fromUtf8)(_input);
      } else {
        input = _input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      }
      return (0, util_buffer_from_1.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("base64");
    };
    exports2.toBase64 = toBase642;
  }
});

// node_modules/@smithy/util-base64/dist-cjs/index.js
var require_dist_cjs25 = __commonJS({
  "node_modules/@smithy/util-base64/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default"));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport(src_exports, require_fromBase64(), module2.exports);
    __reExport(src_exports, require_toBase64(), module2.exports);
  }
});

// node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.js
var require_getAwsChunkedEncodingStream = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getAwsChunkedEncodingStream = void 0;
    var stream_1 = require("stream");
    var getAwsChunkedEncodingStream2 = (readableStream, options) => {
      const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
      const checksumRequired = base64Encoder !== void 0 && checksumAlgorithmFn !== void 0 && checksumLocationName !== void 0 && streamHasher !== void 0;
      const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : void 0;
      const awsChunkedEncodingStream = new stream_1.Readable({ read: () => {
      } });
      readableStream.on("data", (data) => {
        const length = bodyLengthChecker(data) || 0;
        awsChunkedEncodingStream.push(`${length.toString(16)}\r
`);
        awsChunkedEncodingStream.push(data);
        awsChunkedEncodingStream.push("\r\n");
      });
      readableStream.on("end", async () => {
        awsChunkedEncodingStream.push(`0\r
`);
        if (checksumRequired) {
          const checksum = base64Encoder(await digest);
          awsChunkedEncodingStream.push(`${checksumLocationName}:${checksum}\r
`);
          awsChunkedEncodingStream.push(`\r
`);
        }
        awsChunkedEncodingStream.push(null);
      });
      return awsChunkedEncodingStream;
    };
    exports2.getAwsChunkedEncodingStream = getAwsChunkedEncodingStream2;
  }
});

// node_modules/@smithy/util-uri-escape/dist-cjs/index.js
var require_dist_cjs26 = __commonJS({
  "node_modules/@smithy/util-uri-escape/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      escapeUri: () => escapeUri,
      escapeUriPath: () => escapeUriPath
    });
    module2.exports = __toCommonJS2(src_exports);
    var escapeUri = /* @__PURE__ */ __name((uri) => (
      // AWS percent-encodes some extra non-standard characters in a URI
      encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode)
    ), "escapeUri");
    var hexEncode = /* @__PURE__ */ __name((c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode");
    var escapeUriPath = /* @__PURE__ */ __name((uri) => uri.split("/").map(escapeUri).join("/"), "escapeUriPath");
  }
});

// node_modules/@smithy/querystring-builder/dist-cjs/index.js
var require_dist_cjs27 = __commonJS({
  "node_modules/@smithy/querystring-builder/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      buildQueryString: () => buildQueryString
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_uri_escape = require_dist_cjs26();
    function buildQueryString(query) {
      const parts = [];
      for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = (0, import_util_uri_escape.escapeUri)(key);
        if (Array.isArray(value)) {
          for (let i = 0, iLen = value.length; i < iLen; i++) {
            parts.push(`${key}=${(0, import_util_uri_escape.escapeUri)(value[i])}`);
          }
        } else {
          let qsEntry = key;
          if (value || typeof value === "string") {
            qsEntry += `=${(0, import_util_uri_escape.escapeUri)(value)}`;
          }
          parts.push(qsEntry);
        }
      }
      return parts.join("&");
    }
    __name(buildQueryString, "buildQueryString");
  }
});

// node_modules/@smithy/node-http-handler/dist-cjs/index.js
var require_dist_cjs28 = __commonJS({
  "node_modules/@smithy/node-http-handler/dist-cjs/index.js"(exports2, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      DEFAULT_REQUEST_TIMEOUT: () => DEFAULT_REQUEST_TIMEOUT,
      NodeHttp2Handler: () => NodeHttp2Handler,
      NodeHttpHandler: () => NodeHttpHandler,
      streamCollector: () => streamCollector
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_protocol_http = require_dist_cjs2();
    var import_querystring_builder = require_dist_cjs27();
    var import_http = require("http");
    var import_https = require("https");
    var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
    var getTransformedHeaders = /* @__PURE__ */ __name((headers) => {
      const transformedHeaders = {};
      for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
      }
      return transformedHeaders;
    }, "getTransformedHeaders");
    var setConnectionTimeout = /* @__PURE__ */ __name((request, reject, timeoutInMs = 0) => {
      if (!timeoutInMs) {
        return;
      }
      const timeoutId = setTimeout(() => {
        request.destroy();
        reject(
          Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
            name: "TimeoutError"
          })
        );
      }, timeoutInMs);
      request.on("socket", (socket) => {
        if (socket.connecting) {
          socket.on("connect", () => {
            clearTimeout(timeoutId);
          });
        } else {
          clearTimeout(timeoutId);
        }
      });
    }, "setConnectionTimeout");
    var setSocketKeepAlive = /* @__PURE__ */ __name((request, { keepAlive, keepAliveMsecs }) => {
      if (keepAlive !== true) {
        return;
      }
      request.on("socket", (socket) => {
        socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
      });
    }, "setSocketKeepAlive");
    var setSocketTimeout = /* @__PURE__ */ __name((request, reject, timeoutInMs = 0) => {
      request.setTimeout(timeoutInMs, () => {
        request.destroy();
        reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
      });
    }, "setSocketTimeout");
    var import_stream = require("stream");
    var MIN_WAIT_TIME = 1e3;
    async function writeRequestBody(httpRequest, request, maxContinueTimeoutMs = MIN_WAIT_TIME) {
      const headers = request.headers ?? {};
      const expect = headers["Expect"] || headers["expect"];
      let timeoutId = -1;
      let hasError = false;
      if (expect === "100-continue") {
        await Promise.race([
          new Promise((resolve) => {
            timeoutId = Number(setTimeout(resolve, Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
          }),
          new Promise((resolve) => {
            httpRequest.on("continue", () => {
              clearTimeout(timeoutId);
              resolve();
            });
            httpRequest.on("error", () => {
              hasError = true;
              clearTimeout(timeoutId);
              resolve();
            });
          })
        ]);
      }
      if (!hasError) {
        writeBody(httpRequest, request.body);
      }
    }
    __name(writeRequestBody, "writeRequestBody");
    function writeBody(httpRequest, body) {
      if (body instanceof import_stream.Readable) {
        body.pipe(httpRequest);
        return;
      }
      if (body) {
        if (Buffer.isBuffer(body) || typeof body === "string") {
          httpRequest.end(body);
          return;
        }
        const uint8 = body;
        if (typeof uint8 === "object" && uint8.buffer && typeof uint8.byteOffset === "number" && typeof uint8.byteLength === "number") {
          httpRequest.end(Buffer.from(uint8.buffer, uint8.byteOffset, uint8.byteLength));
          return;
        }
        httpRequest.end(Buffer.from(body));
        return;
      }
      httpRequest.end();
    }
    __name(writeBody, "writeBody");
    var DEFAULT_REQUEST_TIMEOUT = 0;
    var _NodeHttpHandler = class _NodeHttpHandler2 {
      constructor(options) {
        this.socketWarningTimestamp = 0;
        this.metadata = { handlerProtocol: "http/1.1" };
        this.configProvider = new Promise((resolve, reject) => {
          if (typeof options === "function") {
            options().then((_options) => {
              resolve(this.resolveDefaultConfig(_options));
            }).catch(reject);
          } else {
            resolve(this.resolveDefaultConfig(options));
          }
        });
      }
      /**
       * @returns the input if it is an HttpHandler of any class,
       * or instantiates a new instance of this handler.
       */
      static create(instanceOrOptions) {
        if (typeof (instanceOrOptions == null ? void 0 : instanceOrOptions.handle) === "function") {
          return instanceOrOptions;
        }
        return new _NodeHttpHandler2(instanceOrOptions);
      }
      /**
       * @internal
       *
       * @param agent - http(s) agent in use by the NodeHttpHandler instance.
       * @returns timestamp of last emitted warning.
       */
      static checkSocketUsage(agent, socketWarningTimestamp) {
        var _a, _b;
        const { sockets, requests, maxSockets } = agent;
        if (typeof maxSockets !== "number" || maxSockets === Infinity) {
          return socketWarningTimestamp;
        }
        const interval = 15e3;
        if (Date.now() - interval < socketWarningTimestamp) {
          return socketWarningTimestamp;
        }
        if (sockets && requests) {
          for (const origin in sockets) {
            const socketsInUse = ((_a = sockets[origin]) == null ? void 0 : _a.length) ?? 0;
            const requestsEnqueued = ((_b = requests[origin]) == null ? void 0 : _b.length) ?? 0;
            if (socketsInUse >= maxSockets && requestsEnqueued >= 2 * maxSockets) {
              console.warn(
                "@smithy/node-http-handler:WARN",
                `socket usage at capacity=${socketsInUse} and ${requestsEnqueued} additional requests are enqueued.`,
                "See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html",
                "or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config."
              );
              return Date.now();
            }
          }
        }
        return socketWarningTimestamp;
      }
      resolveDefaultConfig(options) {
        const { requestTimeout, connectionTimeout, socketTimeout, httpAgent, httpsAgent } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
          connectionTimeout,
          requestTimeout: requestTimeout ?? socketTimeout,
          httpAgent: (() => {
            if (httpAgent instanceof import_http.Agent || typeof (httpAgent == null ? void 0 : httpAgent.destroy) === "function") {
              return httpAgent;
            }
            return new import_http.Agent({ keepAlive, maxSockets, ...httpAgent });
          })(),
          httpsAgent: (() => {
            if (httpsAgent instanceof import_https.Agent || typeof (httpsAgent == null ? void 0 : httpsAgent.destroy) === "function") {
              return httpsAgent;
            }
            return new import_https.Agent({ keepAlive, maxSockets, ...httpsAgent });
          })()
        };
      }
      destroy() {
        var _a, _b, _c, _d;
        (_b = (_a = this.config) == null ? void 0 : _a.httpAgent) == null ? void 0 : _b.destroy();
        (_d = (_c = this.config) == null ? void 0 : _c.httpsAgent) == null ? void 0 : _d.destroy();
      }
      async handle(request, { abortSignal } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
        }
        let socketCheckTimeoutId;
        return new Promise((_resolve, _reject) => {
          let writeRequestBodyPromise = void 0;
          const resolve = /* @__PURE__ */ __name(async (arg) => {
            await writeRequestBodyPromise;
            clearTimeout(socketCheckTimeoutId);
            _resolve(arg);
          }, "resolve");
          const reject = /* @__PURE__ */ __name(async (arg) => {
            await writeRequestBodyPromise;
            _reject(arg);
          }, "reject");
          if (!this.config) {
            throw new Error("Node HTTP request handler config is not resolved");
          }
          if (abortSignal == null ? void 0 : abortSignal.aborted) {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
            return;
          }
          const isSSL = request.protocol === "https:";
          const agent = isSSL ? this.config.httpsAgent : this.config.httpAgent;
          socketCheckTimeoutId = setTimeout(
            () => {
              this.socketWarningTimestamp = _NodeHttpHandler2.checkSocketUsage(agent, this.socketWarningTimestamp);
            },
            this.config.socketAcquisitionWarningTimeout ?? (this.config.requestTimeout ?? 2e3) + (this.config.connectionTimeout ?? 1e3)
          );
          const queryString = (0, import_querystring_builder.buildQueryString)(request.query || {});
          let auth = void 0;
          if (request.username != null || request.password != null) {
            const username = request.username ?? "";
            const password = request.password ?? "";
            auth = `${username}:${password}`;
          }
          let path = request.path;
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request.fragment) {
            path += `#${request.fragment}`;
          }
          const nodeHttpsOptions = {
            headers: request.headers,
            host: request.hostname,
            method: request.method,
            path,
            port: request.port,
            agent,
            auth
          };
          const requestFunc = isSSL ? import_https.request : import_http.request;
          const req = requestFunc(nodeHttpsOptions, (res) => {
            const httpResponse = new import_protocol_http.HttpResponse({
              statusCode: res.statusCode || -1,
              reason: res.statusMessage,
              headers: getTransformedHeaders(res.headers),
              body: res
            });
            resolve({ response: httpResponse });
          });
          req.on("error", (err) => {
            if (NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
              reject(Object.assign(err, { name: "TimeoutError" }));
            } else {
              reject(err);
            }
          });
          setConnectionTimeout(req, reject, this.config.connectionTimeout);
          setSocketTimeout(req, reject, this.config.requestTimeout);
          if (abortSignal) {
            abortSignal.onabort = () => {
              req.abort();
              const abortError = new Error("Request aborted");
              abortError.name = "AbortError";
              reject(abortError);
            };
          }
          const httpAgent = nodeHttpsOptions.agent;
          if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
            setSocketKeepAlive(req, {
              // @ts-expect-error keepAlive is not public on httpAgent.
              keepAlive: httpAgent.keepAlive,
              // @ts-expect-error keepAliveMsecs is not public on httpAgent.
              keepAliveMsecs: httpAgent.keepAliveMsecs
            });
          }
          writeRequestBodyPromise = writeRequestBody(req, request, this.config.requestTimeout).catch(_reject);
        });
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          return {
            ...config,
            [key]: value
          };
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
    };
    __name(_NodeHttpHandler, "NodeHttpHandler");
    var NodeHttpHandler = _NodeHttpHandler;
    var import_http22 = require("http2");
    var import_http2 = __toESM2(require("http2"));
    var _NodeHttp2ConnectionPool = class _NodeHttp2ConnectionPool {
      constructor(sessions) {
        this.sessions = [];
        this.sessions = sessions ?? [];
      }
      poll() {
        if (this.sessions.length > 0) {
          return this.sessions.shift();
        }
      }
      offerLast(session) {
        this.sessions.push(session);
      }
      contains(session) {
        return this.sessions.includes(session);
      }
      remove(session) {
        this.sessions = this.sessions.filter((s) => s !== session);
      }
      [Symbol.iterator]() {
        return this.sessions[Symbol.iterator]();
      }
      destroy(connection) {
        for (const session of this.sessions) {
          if (session === connection) {
            if (!session.destroyed) {
              session.destroy();
            }
          }
        }
      }
    };
    __name(_NodeHttp2ConnectionPool, "NodeHttp2ConnectionPool");
    var NodeHttp2ConnectionPool = _NodeHttp2ConnectionPool;
    var _NodeHttp2ConnectionManager = class _NodeHttp2ConnectionManager {
      constructor(config) {
        this.sessionCache = /* @__PURE__ */ new Map();
        this.config = config;
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
          throw new RangeError("maxConcurrency must be greater than zero.");
        }
      }
      lease(requestContext, connectionConfiguration) {
        const url = this.getUrlString(requestContext);
        const existingPool = this.sessionCache.get(url);
        if (existingPool) {
          const existingSession = existingPool.poll();
          if (existingSession && !this.config.disableConcurrency) {
            return existingSession;
          }
        }
        const session = import_http2.default.connect(url);
        if (this.config.maxConcurrency) {
          session.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (err) => {
            if (err) {
              throw new Error(
                "Fail to set maxConcurrentStreams to " + this.config.maxConcurrency + "when creating new session for " + requestContext.destination.toString()
              );
            }
          });
        }
        session.unref();
        const destroySessionCb = /* @__PURE__ */ __name(() => {
          session.destroy();
          this.deleteSession(url, session);
        }, "destroySessionCb");
        session.on("goaway", destroySessionCb);
        session.on("error", destroySessionCb);
        session.on("frameError", destroySessionCb);
        session.on("close", () => this.deleteSession(url, session));
        if (connectionConfiguration.requestTimeout) {
          session.setTimeout(connectionConfiguration.requestTimeout, destroySessionCb);
        }
        const connectionPool = this.sessionCache.get(url) || new NodeHttp2ConnectionPool();
        connectionPool.offerLast(session);
        this.sessionCache.set(url, connectionPool);
        return session;
      }
      /**
       * Delete a session from the connection pool.
       * @param authority The authority of the session to delete.
       * @param session The session to delete.
       */
      deleteSession(authority, session) {
        const existingConnectionPool = this.sessionCache.get(authority);
        if (!existingConnectionPool) {
          return;
        }
        if (!existingConnectionPool.contains(session)) {
          return;
        }
        existingConnectionPool.remove(session);
        this.sessionCache.set(authority, existingConnectionPool);
      }
      release(requestContext, session) {
        var _a;
        const cacheKey = this.getUrlString(requestContext);
        (_a = this.sessionCache.get(cacheKey)) == null ? void 0 : _a.offerLast(session);
      }
      destroy() {
        for (const [key, connectionPool] of this.sessionCache) {
          for (const session of connectionPool) {
            if (!session.destroyed) {
              session.destroy();
            }
            connectionPool.remove(session);
          }
          this.sessionCache.delete(key);
        }
      }
      setMaxConcurrentStreams(maxConcurrentStreams) {
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
          throw new RangeError("maxConcurrentStreams must be greater than zero.");
        }
        this.config.maxConcurrency = maxConcurrentStreams;
      }
      setDisableConcurrentStreams(disableConcurrentStreams) {
        this.config.disableConcurrency = disableConcurrentStreams;
      }
      getUrlString(request) {
        return request.destination.toString();
      }
    };
    __name(_NodeHttp2ConnectionManager, "NodeHttp2ConnectionManager");
    var NodeHttp2ConnectionManager = _NodeHttp2ConnectionManager;
    var _NodeHttp2Handler = class _NodeHttp2Handler2 {
      constructor(options) {
        this.metadata = { handlerProtocol: "h2" };
        this.connectionManager = new NodeHttp2ConnectionManager({});
        this.configProvider = new Promise((resolve, reject) => {
          if (typeof options === "function") {
            options().then((opts) => {
              resolve(opts || {});
            }).catch(reject);
          } else {
            resolve(options || {});
          }
        });
      }
      /**
       * @returns the input if it is an HttpHandler of any class,
       * or instantiates a new instance of this handler.
       */
      static create(instanceOrOptions) {
        if (typeof (instanceOrOptions == null ? void 0 : instanceOrOptions.handle) === "function") {
          return instanceOrOptions;
        }
        return new _NodeHttp2Handler2(instanceOrOptions);
      }
      destroy() {
        this.connectionManager.destroy();
      }
      async handle(request, { abortSignal } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
          this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || false);
          if (this.config.maxConcurrentStreams) {
            this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams);
          }
        }
        const { requestTimeout, disableConcurrentStreams } = this.config;
        return new Promise((_resolve, _reject) => {
          var _a;
          let fulfilled = false;
          let writeRequestBodyPromise = void 0;
          const resolve = /* @__PURE__ */ __name(async (arg) => {
            await writeRequestBodyPromise;
            _resolve(arg);
          }, "resolve");
          const reject = /* @__PURE__ */ __name(async (arg) => {
            await writeRequestBodyPromise;
            _reject(arg);
          }, "reject");
          if (abortSignal == null ? void 0 : abortSignal.aborted) {
            fulfilled = true;
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
            return;
          }
          const { hostname, method, port, protocol, query } = request;
          let auth = "";
          if (request.username != null || request.password != null) {
            const username = request.username ?? "";
            const password = request.password ?? "";
            auth = `${username}:${password}@`;
          }
          const authority = `${protocol}//${auth}${hostname}${port ? `:${port}` : ""}`;
          const requestContext = { destination: new URL(authority) };
          const session = this.connectionManager.lease(requestContext, {
            requestTimeout: (_a = this.config) == null ? void 0 : _a.sessionTimeout,
            disableConcurrentStreams: disableConcurrentStreams || false
          });
          const rejectWithDestroy = /* @__PURE__ */ __name((err) => {
            if (disableConcurrentStreams) {
              this.destroySession(session);
            }
            fulfilled = true;
            reject(err);
          }, "rejectWithDestroy");
          const queryString = (0, import_querystring_builder.buildQueryString)(query || {});
          let path = request.path;
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request.fragment) {
            path += `#${request.fragment}`;
          }
          const req = session.request({
            ...request.headers,
            [import_http22.constants.HTTP2_HEADER_PATH]: path,
            [import_http22.constants.HTTP2_HEADER_METHOD]: method
          });
          session.ref();
          req.on("response", (headers) => {
            const httpResponse = new import_protocol_http.HttpResponse({
              statusCode: headers[":status"] || -1,
              headers: getTransformedHeaders(headers),
              body: req
            });
            fulfilled = true;
            resolve({ response: httpResponse });
            if (disableConcurrentStreams) {
              session.close();
              this.connectionManager.deleteSession(authority, session);
            }
          });
          if (requestTimeout) {
            req.setTimeout(requestTimeout, () => {
              req.close();
              const timeoutError = new Error(`Stream timed out because of no activity for ${requestTimeout} ms`);
              timeoutError.name = "TimeoutError";
              rejectWithDestroy(timeoutError);
            });
          }
          if (abortSignal) {
            abortSignal.onabort = () => {
              req.close();
              const abortError = new Error("Request aborted");
              abortError.name = "AbortError";
              rejectWithDestroy(abortError);
            };
          }
          req.on("frameError", (type, code, id) => {
            rejectWithDestroy(new Error(`Frame type id ${type} in stream id ${id} has failed with code ${code}.`));
          });
          req.on("error", rejectWithDestroy);
          req.on("aborted", () => {
            rejectWithDestroy(
              new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${req.rstCode}.`)
            );
          });
          req.on("close", () => {
            session.unref();
            if (disableConcurrentStreams) {
              session.destroy();
            }
            if (!fulfilled) {
              rejectWithDestroy(new Error("Unexpected error: http2 request did not get a response"));
            }
          });
          writeRequestBodyPromise = writeRequestBody(req, request, requestTimeout);
        });
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          return {
            ...config,
            [key]: value
          };
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
      /**
       * Destroys a session.
       * @param session The session to destroy.
       */
      destroySession(session) {
        if (!session.destroyed) {
          session.destroy();
        }
      }
    };
    __name(_NodeHttp2Handler, "NodeHttp2Handler");
    var NodeHttp2Handler = _NodeHttp2Handler;
    var _Collector = class _Collector extends import_stream.Writable {
      constructor() {
        super(...arguments);
        this.bufferedBytes = [];
      }
      _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
      }
    };
    __name(_Collector, "Collector");
    var Collector = _Collector;
    var streamCollector = /* @__PURE__ */ __name((stream) => {
      if (isReadableStreamInstance(stream)) {
        return collectReadableStream(stream);
      }
      return new Promise((resolve, reject) => {
        const collector = new Collector();
        stream.pipe(collector);
        stream.on("error", (err) => {
          collector.end();
          reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function() {
          const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
          resolve(bytes);
        });
      });
    }, "streamCollector");
    var isReadableStreamInstance = /* @__PURE__ */ __name((stream) => typeof ReadableStream === "function" && stream instanceof ReadableStream, "isReadableStreamInstance");
    async function collectReadableStream(stream) {
      const chunks = [];
      const reader = stream.getReader();
      let isDone = false;
      let length = 0;
      while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
          chunks.push(value);
          length += value.length;
        }
        isDone = done;
      }
      const collected = new Uint8Array(length);
      let offset = 0;
      for (const chunk of chunks) {
        collected.set(chunk, offset);
        offset += chunk.length;
      }
      return collected;
    }
    __name(collectReadableStream, "collectReadableStream");
  }
});

// node_modules/@smithy/fetch-http-handler/dist-cjs/index.js
var require_dist_cjs29 = __commonJS({
  "node_modules/@smithy/fetch-http-handler/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      FetchHttpHandler: () => FetchHttpHandler,
      keepAliveSupport: () => keepAliveSupport,
      streamCollector: () => streamCollector
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_protocol_http = require_dist_cjs2();
    var import_querystring_builder = require_dist_cjs27();
    function requestTimeout(timeoutInMs = 0) {
      return new Promise((resolve, reject) => {
        if (timeoutInMs) {
          setTimeout(() => {
            const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
            timeoutError.name = "TimeoutError";
            reject(timeoutError);
          }, timeoutInMs);
        }
      });
    }
    __name(requestTimeout, "requestTimeout");
    var keepAliveSupport = {
      supported: Boolean(typeof Request !== "undefined" && "keepalive" in new Request("https://[::1]"))
    };
    var _FetchHttpHandler = class _FetchHttpHandler2 {
      /**
       * @returns the input if it is an HttpHandler of any class,
       * or instantiates a new instance of this handler.
       */
      static create(instanceOrOptions) {
        if (typeof (instanceOrOptions == null ? void 0 : instanceOrOptions.handle) === "function") {
          return instanceOrOptions;
        }
        return new _FetchHttpHandler2(instanceOrOptions);
      }
      constructor(options) {
        if (typeof options === "function") {
          this.configProvider = options().then((opts) => opts || {});
        } else {
          this.config = options ?? {};
          this.configProvider = Promise.resolve(this.config);
        }
      }
      destroy() {
      }
      async handle(request, { abortSignal } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
        }
        const requestTimeoutInMs = this.config.requestTimeout;
        const keepAlive = this.config.keepAlive === true;
        if (abortSignal == null ? void 0 : abortSignal.aborted) {
          const abortError = new Error("Request aborted");
          abortError.name = "AbortError";
          return Promise.reject(abortError);
        }
        let path = request.path;
        const queryString = (0, import_querystring_builder.buildQueryString)(request.query || {});
        if (queryString) {
          path += `?${queryString}`;
        }
        if (request.fragment) {
          path += `#${request.fragment}`;
        }
        let auth = "";
        if (request.username != null || request.password != null) {
          const username = request.username ?? "";
          const password = request.password ?? "";
          auth = `${username}:${password}@`;
        }
        const { port, method } = request;
        const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
        const body = method === "GET" || method === "HEAD" ? void 0 : request.body;
        const requestOptions = {
          body,
          headers: new Headers(request.headers),
          method
        };
        if (body) {
          requestOptions.duplex = "half";
        }
        if (typeof AbortController !== "undefined") {
          requestOptions.signal = abortSignal;
        }
        if (keepAliveSupport.supported) {
          requestOptions.keepalive = keepAlive;
        }
        const fetchRequest = new Request(url, requestOptions);
        const raceOfPromises = [
          fetch(fetchRequest).then((response) => {
            const fetchHeaders = response.headers;
            const transformedHeaders = {};
            for (const pair of fetchHeaders.entries()) {
              transformedHeaders[pair[0]] = pair[1];
            }
            const hasReadableStream = response.body != void 0;
            if (!hasReadableStream) {
              return response.blob().then((body2) => ({
                response: new import_protocol_http.HttpResponse({
                  headers: transformedHeaders,
                  reason: response.statusText,
                  statusCode: response.status,
                  body: body2
                })
              }));
            }
            return {
              response: new import_protocol_http.HttpResponse({
                headers: transformedHeaders,
                reason: response.statusText,
                statusCode: response.status,
                body: response.body
              })
            };
          }),
          requestTimeout(requestTimeoutInMs)
        ];
        if (abortSignal) {
          raceOfPromises.push(
            new Promise((resolve, reject) => {
              abortSignal.onabort = () => {
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
              };
            })
          );
        }
        return Promise.race(raceOfPromises);
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          config[key] = value;
          return config;
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
    };
    __name(_FetchHttpHandler, "FetchHttpHandler");
    var FetchHttpHandler = _FetchHttpHandler;
    var import_util_base64 = require_dist_cjs25();
    var streamCollector = /* @__PURE__ */ __name((stream) => {
      if (typeof Blob === "function" && stream instanceof Blob) {
        return collectBlob(stream);
      }
      return collectStream(stream);
    }, "streamCollector");
    async function collectBlob(blob) {
      const base64 = await readToBase64(blob);
      const arrayBuffer = (0, import_util_base64.fromBase64)(base64);
      return new Uint8Array(arrayBuffer);
    }
    __name(collectBlob, "collectBlob");
    async function collectStream(stream) {
      const chunks = [];
      const reader = stream.getReader();
      let isDone = false;
      let length = 0;
      while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
          chunks.push(value);
          length += value.length;
        }
        isDone = done;
      }
      const collected = new Uint8Array(length);
      let offset = 0;
      for (const chunk of chunks) {
        collected.set(chunk, offset);
        offset += chunk.length;
      }
      return collected;
    }
    __name(collectStream, "collectStream");
    function readToBase64(blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.readyState !== 2) {
            return reject(new Error("Reader aborted too early"));
          }
          const result = reader.result ?? "";
          const commaIndex = result.indexOf(",");
          const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
          resolve(result.substring(dataOffset));
        };
        reader.onabort = () => reject(new Error("Read aborted"));
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
      });
    }
    __name(readToBase64, "readToBase64");
  }
});

// node_modules/@smithy/util-hex-encoding/dist-cjs/index.js
var require_dist_cjs30 = __commonJS({
  "node_modules/@smithy/util-hex-encoding/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      fromHex: () => fromHex,
      toHex: () => toHex
    });
    module2.exports = __toCommonJS2(src_exports);
    var SHORT_TO_HEX = {};
    var HEX_TO_SHORT = {};
    for (let i = 0; i < 256; i++) {
      let encodedByte = i.toString(16).toLowerCase();
      if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
      }
      SHORT_TO_HEX[i] = encodedByte;
      HEX_TO_SHORT[encodedByte] = i;
    }
    function fromHex(encoded) {
      if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
      }
      const out = new Uint8Array(encoded.length / 2);
      for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
          out[i / 2] = HEX_TO_SHORT[encodedByte];
        } else {
          throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
      }
      return out;
    }
    __name(fromHex, "fromHex");
    function toHex(bytes) {
      let out = "";
      for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
      }
      return out;
    }
    __name(toHex, "toHex");
  }
});

// node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.browser.js
var require_sdk_stream_mixin_browser = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.browser.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sdkStreamMixin = void 0;
    var fetch_http_handler_1 = require_dist_cjs29();
    var util_base64_1 = require_dist_cjs25();
    var util_hex_encoding_1 = require_dist_cjs30();
    var util_utf8_1 = require_dist_cjs24();
    var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
    var sdkStreamMixin2 = (stream) => {
      var _a, _b;
      if (!isBlobInstance(stream) && !isReadableStreamInstance(stream)) {
        const name = ((_b = (_a = stream === null || stream === void 0 ? void 0 : stream.__proto__) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) || stream;
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
      }
      let transformed = false;
      const transformToByteArray = async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await (0, fetch_http_handler_1.streamCollector)(stream);
      };
      const blobToWebStream = (blob) => {
        if (typeof blob.stream !== "function") {
          throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
        }
        return blob.stream();
      };
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === "base64") {
            return (0, util_base64_1.toBase64)(buf);
          } else if (encoding === "hex") {
            return (0, util_hex_encoding_1.toHex)(buf);
          } else if (encoding === void 0 || encoding === "utf8" || encoding === "utf-8") {
            return (0, util_utf8_1.toUtf8)(buf);
          } else if (typeof TextDecoder === "function") {
            return new TextDecoder(encoding).decode(buf);
          } else {
            throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
          }
        },
        transformToWebStream: () => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
          }
          transformed = true;
          if (isBlobInstance(stream)) {
            return blobToWebStream(stream);
          } else if (isReadableStreamInstance(stream)) {
            return stream;
          } else {
            throw new Error(`Cannot transform payload to web stream, got ${stream}`);
          }
        }
      });
    };
    exports2.sdkStreamMixin = sdkStreamMixin2;
    var isBlobInstance = (stream) => typeof Blob === "function" && stream instanceof Blob;
    var isReadableStreamInstance = (stream) => typeof ReadableStream === "function" && stream instanceof ReadableStream;
  }
});

// node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.js
var require_sdk_stream_mixin = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sdkStreamMixin = void 0;
    var node_http_handler_1 = require_dist_cjs28();
    var util_buffer_from_1 = require_dist_cjs23();
    var stream_1 = require("stream");
    var util_1 = require("util");
    var sdk_stream_mixin_browser_1 = require_sdk_stream_mixin_browser();
    var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
    var sdkStreamMixin2 = (stream) => {
      var _a, _b;
      if (!(stream instanceof stream_1.Readable)) {
        try {
          return (0, sdk_stream_mixin_browser_1.sdkStreamMixin)(stream);
        } catch (e) {
          const name = ((_b = (_a = stream === null || stream === void 0 ? void 0 : stream.__proto__) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) || stream;
          throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
        }
      }
      let transformed = false;
      const transformToByteArray = async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await (0, node_http_handler_1.streamCollector)(stream);
      };
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === void 0 || Buffer.isEncoding(encoding)) {
            return (0, util_buffer_from_1.fromArrayBuffer)(buf.buffer, buf.byteOffset, buf.byteLength).toString(encoding);
          } else {
            const decoder = new util_1.TextDecoder(encoding);
            return decoder.decode(buf);
          }
        },
        transformToWebStream: () => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
          }
          if (stream.readableFlowing !== null) {
            throw new Error("The stream has been consumed by other callbacks.");
          }
          if (typeof stream_1.Readable.toWeb !== "function") {
            throw new Error("Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available.");
          }
          transformed = true;
          return stream_1.Readable.toWeb(stream);
        }
      });
    };
    exports2.sdkStreamMixin = sdkStreamMixin2;
  }
});

// node_modules/@smithy/util-stream/dist-cjs/index.js
var require_dist_cjs31 = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default"));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      Uint8ArrayBlobAdapter: () => Uint8ArrayBlobAdapter
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_base64 = require_dist_cjs25();
    var import_util_utf8 = require_dist_cjs24();
    function transformToString(payload, encoding = "utf-8") {
      if (encoding === "base64") {
        return (0, import_util_base64.toBase64)(payload);
      }
      return (0, import_util_utf8.toUtf8)(payload);
    }
    __name(transformToString, "transformToString");
    function transformFromString(str, encoding) {
      if (encoding === "base64") {
        return Uint8ArrayBlobAdapter.mutate((0, import_util_base64.fromBase64)(str));
      }
      return Uint8ArrayBlobAdapter.mutate((0, import_util_utf8.fromUtf8)(str));
    }
    __name(transformFromString, "transformFromString");
    var _Uint8ArrayBlobAdapter = class _Uint8ArrayBlobAdapter2 extends Uint8Array {
      /**
       * @param source - such as a string or Stream.
       * @returns a new Uint8ArrayBlobAdapter extending Uint8Array.
       */
      static fromString(source, encoding = "utf-8") {
        switch (typeof source) {
          case "string":
            return transformFromString(source, encoding);
          default:
            throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
        }
      }
      /**
       * @param source - Uint8Array to be mutated.
       * @returns the same Uint8Array but with prototype switched to Uint8ArrayBlobAdapter.
       */
      static mutate(source) {
        Object.setPrototypeOf(source, _Uint8ArrayBlobAdapter2.prototype);
        return source;
      }
      /**
       * @param encoding - default 'utf-8'.
       * @returns the blob as string.
       */
      transformToString(encoding = "utf-8") {
        return transformToString(this, encoding);
      }
    };
    __name(_Uint8ArrayBlobAdapter, "Uint8ArrayBlobAdapter");
    var Uint8ArrayBlobAdapter = _Uint8ArrayBlobAdapter;
    __reExport(src_exports, require_getAwsChunkedEncodingStream(), module2.exports);
    __reExport(src_exports, require_sdk_stream_mixin(), module2.exports);
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/index.js
var require_dist_cjs32 = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      Client: () => Client,
      Command: () => Command,
      LazyJsonString: () => LazyJsonString,
      NoOpLogger: () => NoOpLogger,
      SENSITIVE_STRING: () => SENSITIVE_STRING,
      ServiceException: () => ServiceException,
      StringWrapper: () => StringWrapper,
      _json: () => _json,
      collectBody: () => collectBody,
      convertMap: () => convertMap,
      createAggregatedClient: () => createAggregatedClient,
      dateToUtcString: () => dateToUtcString,
      decorateServiceException: () => decorateServiceException,
      emitWarningIfUnsupportedVersion: () => emitWarningIfUnsupportedVersion,
      expectBoolean: () => expectBoolean,
      expectByte: () => expectByte,
      expectFloat32: () => expectFloat32,
      expectInt: () => expectInt,
      expectInt32: () => expectInt32,
      expectLong: () => expectLong,
      expectNonNull: () => expectNonNull,
      expectNumber: () => expectNumber,
      expectObject: () => expectObject,
      expectShort: () => expectShort,
      expectString: () => expectString,
      expectUnion: () => expectUnion,
      extendedEncodeURIComponent: () => extendedEncodeURIComponent,
      getArrayIfSingleItem: () => getArrayIfSingleItem,
      getDefaultClientConfiguration: () => getDefaultClientConfiguration,
      getDefaultExtensionConfiguration: () => getDefaultExtensionConfiguration,
      getValueFromTextNode: () => getValueFromTextNode,
      handleFloat: () => handleFloat,
      limitedParseDouble: () => limitedParseDouble,
      limitedParseFloat: () => limitedParseFloat,
      limitedParseFloat32: () => limitedParseFloat32,
      loadConfigsForDefaultMode: () => loadConfigsForDefaultMode,
      logger: () => logger,
      map: () => map,
      parseBoolean: () => parseBoolean,
      parseEpochTimestamp: () => parseEpochTimestamp,
      parseRfc3339DateTime: () => parseRfc3339DateTime,
      parseRfc3339DateTimeWithOffset: () => parseRfc3339DateTimeWithOffset,
      parseRfc7231DateTime: () => parseRfc7231DateTime,
      resolveDefaultRuntimeConfig: () => resolveDefaultRuntimeConfig,
      resolvedPath: () => resolvedPath,
      serializeFloat: () => serializeFloat,
      splitEvery: () => splitEvery,
      strictParseByte: () => strictParseByte,
      strictParseDouble: () => strictParseDouble,
      strictParseFloat: () => strictParseFloat,
      strictParseFloat32: () => strictParseFloat32,
      strictParseInt: () => strictParseInt,
      strictParseInt32: () => strictParseInt32,
      strictParseLong: () => strictParseLong,
      strictParseShort: () => strictParseShort,
      take: () => take,
      throwDefaultError: () => throwDefaultError,
      withBaseException: () => withBaseException
    });
    module2.exports = __toCommonJS2(src_exports);
    var _NoOpLogger = class _NoOpLogger {
      trace() {
      }
      debug() {
      }
      info() {
      }
      warn() {
      }
      error() {
      }
    };
    __name(_NoOpLogger, "NoOpLogger");
    var NoOpLogger = _NoOpLogger;
    var import_middleware_stack = require_dist_cjs21();
    var _Client = class _Client {
      constructor(config) {
        this.middlewareStack = (0, import_middleware_stack.constructStack)();
        this.config = config;
      }
      send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        if (callback) {
          handler(command).then(
            (result) => callback(null, result.output),
            (err) => callback(err)
          ).catch(
            // prevent any errors thrown in the callback from triggering an
            // unhandled promise rejection
            () => {
            }
          );
        } else {
          return handler(command).then((result) => result.output);
        }
      }
      destroy() {
        if (this.config.requestHandler.destroy)
          this.config.requestHandler.destroy();
      }
    };
    __name(_Client, "Client");
    var Client = _Client;
    var import_util_stream = require_dist_cjs31();
    var collectBody = /* @__PURE__ */ __name(async (streamBody = new Uint8Array(), context) => {
      if (streamBody instanceof Uint8Array) {
        return import_util_stream.Uint8ArrayBlobAdapter.mutate(streamBody);
      }
      if (!streamBody) {
        return import_util_stream.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
      }
      const fromContext = context.streamCollector(streamBody);
      return import_util_stream.Uint8ArrayBlobAdapter.mutate(await fromContext);
    }, "collectBody");
    var import_types = require_dist_cjs();
    var _Command = class _Command {
      constructor() {
        this.middlewareStack = (0, import_middleware_stack.constructStack)();
      }
      /**
       * Factory for Command ClassBuilder.
       * @internal
       */
      static classBuilder() {
        return new ClassBuilder();
      }
      /**
       * @internal
       */
      resolveMiddlewareWithContext(clientStack, configuration, options, {
        middlewareFn,
        clientName,
        commandName,
        inputFilterSensitiveLog,
        outputFilterSensitiveLog,
        smithyContext,
        additionalContext,
        CommandCtor
      }) {
        for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
          this.middlewareStack.use(mw);
        }
        const stack = clientStack.concat(this.middlewareStack);
        const { logger: logger2 } = configuration;
        const handlerExecutionContext = {
          logger: logger2,
          clientName,
          commandName,
          inputFilterSensitiveLog,
          outputFilterSensitiveLog,
          [import_types.SMITHY_CONTEXT_KEY]: {
            ...smithyContext
          },
          ...additionalContext
        };
        const { requestHandler } = configuration;
        return stack.resolve(
          (request) => requestHandler.handle(request.request, options || {}),
          handlerExecutionContext
        );
      }
    };
    __name(_Command, "Command");
    var Command = _Command;
    var _ClassBuilder = class _ClassBuilder {
      constructor() {
        this._init = () => {
        };
        this._ep = {};
        this._middlewareFn = () => [];
        this._commandName = "";
        this._clientName = "";
        this._additionalContext = {};
        this._smithyContext = {};
        this._inputFilterSensitiveLog = (_) => _;
        this._outputFilterSensitiveLog = (_) => _;
        this._serializer = null;
        this._deserializer = null;
      }
      /**
       * Optional init callback.
       */
      init(cb) {
        this._init = cb;
      }
      /**
       * Set the endpoint parameter instructions.
       */
      ep(endpointParameterInstructions) {
        this._ep = endpointParameterInstructions;
        return this;
      }
      /**
       * Add any number of middleware.
       */
      m(middlewareSupplier) {
        this._middlewareFn = middlewareSupplier;
        return this;
      }
      /**
       * Set the initial handler execution context Smithy field.
       */
      s(service, operation, smithyContext = {}) {
        this._smithyContext = {
          service,
          operation,
          ...smithyContext
        };
        return this;
      }
      /**
       * Set the initial handler execution context.
       */
      c(additionalContext = {}) {
        this._additionalContext = additionalContext;
        return this;
      }
      /**
       * Set constant string identifiers for the operation.
       */
      n(clientName, commandName) {
        this._clientName = clientName;
        this._commandName = commandName;
        return this;
      }
      /**
       * Set the input and output sensistive log filters.
       */
      f(inputFilter = (_) => _, outputFilter = (_) => _) {
        this._inputFilterSensitiveLog = inputFilter;
        this._outputFilterSensitiveLog = outputFilter;
        return this;
      }
      /**
       * Sets the serializer.
       */
      ser(serializer) {
        this._serializer = serializer;
        return this;
      }
      /**
       * Sets the deserializer.
       */
      de(deserializer) {
        this._deserializer = deserializer;
        return this;
      }
      /**
       * @returns a Command class with the classBuilder properties.
       */
      build() {
        var _a;
        const closure = this;
        let CommandRef;
        return CommandRef = (_a = class extends Command {
          /**
           * @public
           */
          constructor(...[input]) {
            super();
            this.serialize = closure._serializer;
            this.deserialize = closure._deserializer;
            this.input = input ?? {};
            closure._init(this);
          }
          /**
           * @public
           */
          static getEndpointParameterInstructions() {
            return closure._ep;
          }
          /**
           * @internal
           */
          resolveMiddleware(stack, configuration, options) {
            return this.resolveMiddlewareWithContext(stack, configuration, options, {
              CommandCtor: CommandRef,
              middlewareFn: closure._middlewareFn,
              clientName: closure._clientName,
              commandName: closure._commandName,
              inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
              outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
              smithyContext: closure._smithyContext,
              additionalContext: closure._additionalContext
            });
          }
        }, __name(_a, "CommandRef"), _a);
      }
    };
    __name(_ClassBuilder, "ClassBuilder");
    var ClassBuilder = _ClassBuilder;
    var SENSITIVE_STRING = "***SensitiveInformation***";
    var createAggregatedClient = /* @__PURE__ */ __name((commands, Client2) => {
      for (const command of Object.keys(commands)) {
        const CommandCtor = commands[command];
        const methodImpl = /* @__PURE__ */ __name(async function(args, optionsOrCb, cb) {
          const command2 = new CommandCtor(args);
          if (typeof optionsOrCb === "function") {
            this.send(command2, optionsOrCb);
          } else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
              throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
            this.send(command2, optionsOrCb || {}, cb);
          } else {
            return this.send(command2, optionsOrCb);
          }
        }, "methodImpl");
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client2.prototype[methodName] = methodImpl;
      }
    }, "createAggregatedClient");
    var parseBoolean = /* @__PURE__ */ __name((value) => {
      switch (value) {
        case "true":
          return true;
        case "false":
          return false;
        default:
          throw new Error(`Unable to parse boolean value "${value}"`);
      }
    }, "parseBoolean");
    var expectBoolean = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "number") {
        if (value === 0 || value === 1) {
          logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (value === 0) {
          return false;
        }
        if (value === 1) {
          return true;
        }
      }
      if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (lower === "false" || lower === "true") {
          logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (lower === "false") {
          return false;
        }
        if (lower === "true") {
          return true;
        }
      }
      if (typeof value === "boolean") {
        return value;
      }
      throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
    }, "expectBoolean");
    var expectNumber = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
          if (String(parsed) !== String(value)) {
            logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
          }
          return parsed;
        }
      }
      if (typeof value === "number") {
        return value;
      }
      throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
    }, "expectNumber");
    var MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
    var expectFloat32 = /* @__PURE__ */ __name((value) => {
      const expected = expectNumber(value);
      if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
          throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
      }
      return expected;
    }, "expectFloat32");
    var expectLong = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
      }
      throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
    }, "expectLong");
    var expectInt = expectLong;
    var expectInt32 = /* @__PURE__ */ __name((value) => expectSizedInt(value, 32), "expectInt32");
    var expectShort = /* @__PURE__ */ __name((value) => expectSizedInt(value, 16), "expectShort");
    var expectByte = /* @__PURE__ */ __name((value) => expectSizedInt(value, 8), "expectByte");
    var expectSizedInt = /* @__PURE__ */ __name((value, size) => {
      const expected = expectLong(value);
      if (expected !== void 0 && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
      }
      return expected;
    }, "expectSizedInt");
    var castInt = /* @__PURE__ */ __name((value, size) => {
      switch (size) {
        case 32:
          return Int32Array.of(value)[0];
        case 16:
          return Int16Array.of(value)[0];
        case 8:
          return Int8Array.of(value)[0];
      }
    }, "castInt");
    var expectNonNull = /* @__PURE__ */ __name((value, location) => {
      if (value === null || value === void 0) {
        if (location) {
          throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
      }
      return value;
    }, "expectNonNull");
    var expectObject = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "object" && !Array.isArray(value)) {
        return value;
      }
      const receivedType = Array.isArray(value) ? "array" : typeof value;
      throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
    }, "expectObject");
    var expectString = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        return value;
      }
      if (["boolean", "number", "bigint"].includes(typeof value)) {
        logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
      }
      throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
    }, "expectString");
    var expectUnion = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      const asObject = expectObject(value);
      const setKeys = Object.entries(asObject).filter(([, v]) => v != null).map(([k]) => k);
      if (setKeys.length === 0) {
        throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
      }
      if (setKeys.length > 1) {
        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
      }
      return asObject;
    }, "expectUnion");
    var strictParseDouble = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return expectNumber(parseNumber(value));
      }
      return expectNumber(value);
    }, "strictParseDouble");
    var strictParseFloat = strictParseDouble;
    var strictParseFloat32 = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return expectFloat32(parseNumber(value));
      }
      return expectFloat32(value);
    }, "strictParseFloat32");
    var NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
    var parseNumber = /* @__PURE__ */ __name((value) => {
      const matches = value.match(NUMBER_REGEX);
      if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
      }
      return parseFloat(value);
    }, "parseNumber");
    var limitedParseDouble = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return parseFloatString(value);
      }
      return expectNumber(value);
    }, "limitedParseDouble");
    var handleFloat = limitedParseDouble;
    var limitedParseFloat = limitedParseDouble;
    var limitedParseFloat32 = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return parseFloatString(value);
      }
      return expectFloat32(value);
    }, "limitedParseFloat32");
    var parseFloatString = /* @__PURE__ */ __name((value) => {
      switch (value) {
        case "NaN":
          return NaN;
        case "Infinity":
          return Infinity;
        case "-Infinity":
          return -Infinity;
        default:
          throw new Error(`Unable to parse float value: ${value}`);
      }
    }, "parseFloatString");
    var strictParseLong = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectLong(parseNumber(value));
      }
      return expectLong(value);
    }, "strictParseLong");
    var strictParseInt = strictParseLong;
    var strictParseInt32 = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectInt32(parseNumber(value));
      }
      return expectInt32(value);
    }, "strictParseInt32");
    var strictParseShort = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectShort(parseNumber(value));
      }
      return expectShort(value);
    }, "strictParseShort");
    var strictParseByte = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectByte(parseNumber(value));
      }
      return expectByte(value);
    }, "strictParseByte");
    var stackTraceWarning = /* @__PURE__ */ __name((message) => {
      return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s) => !s.includes("stackTraceWarning")).join("\n");
    }, "stackTraceWarning");
    var logger = {
      warn: console.warn
    };
    var DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    function dateToUtcString(date) {
      const year = date.getUTCFullYear();
      const month = date.getUTCMonth();
      const dayOfWeek = date.getUTCDay();
      const dayOfMonthInt = date.getUTCDate();
      const hoursInt = date.getUTCHours();
      const minutesInt = date.getUTCMinutes();
      const secondsInt = date.getUTCSeconds();
      const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
      const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
      const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
      const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
      return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
    }
    __name(dateToUtcString, "dateToUtcString");
    var RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
    var parseRfc3339DateTime = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
      const year = strictParseShort(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    }, "parseRfc3339DateTime");
    var RFC3339_WITH_OFFSET = new RegExp(
      /^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/
    );
    var parseRfc3339DateTimeWithOffset = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339_WITH_OFFSET.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
      const year = strictParseShort(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
      if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
      }
      return date;
    }, "parseRfc3339DateTimeWithOffset");
    var IMF_FIXDATE = new RegExp(
      /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/
    );
    var RFC_850_DATE = new RegExp(
      /^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/
    );
    var ASC_TIME = new RegExp(
      /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/
    );
    var parseRfc7231DateTime = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
      }
      let match = IMF_FIXDATE.exec(value);
      if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate(
          strictParseShort(stripLeadingZeroes(yearStr)),
          parseMonthByShortName(monthStr),
          parseDateValue(dayStr, "day", 1, 31),
          { hours, minutes, seconds, fractionalMilliseconds }
        );
      }
      match = RFC_850_DATE.exec(value);
      if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(
          buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds
          })
        );
      }
      match = ASC_TIME.exec(value);
      if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate(
          strictParseShort(stripLeadingZeroes(yearStr)),
          parseMonthByShortName(monthStr),
          parseDateValue(dayStr.trimLeft(), "day", 1, 31),
          { hours, minutes, seconds, fractionalMilliseconds }
        );
      }
      throw new TypeError("Invalid RFC-7231 date-time value");
    }, "parseRfc7231DateTime");
    var parseEpochTimestamp = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      let valueAsDouble;
      if (typeof value === "number") {
        valueAsDouble = value;
      } else if (typeof value === "string") {
        valueAsDouble = strictParseDouble(value);
      } else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
      }
      if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
      }
      return new Date(Math.round(valueAsDouble * 1e3));
    }, "parseEpochTimestamp");
    var buildDate = /* @__PURE__ */ __name((year, month, day, time) => {
      const adjustedMonth = month - 1;
      validateDayOfMonth(year, adjustedMonth, day);
      return new Date(
        Date.UTC(
          year,
          adjustedMonth,
          day,
          parseDateValue(time.hours, "hour", 0, 23),
          parseDateValue(time.minutes, "minute", 0, 59),
          // seconds can go up to 60 for leap seconds
          parseDateValue(time.seconds, "seconds", 0, 60),
          parseMilliseconds(time.fractionalMilliseconds)
        )
      );
    }, "buildDate");
    var parseTwoDigitYear = /* @__PURE__ */ __name((value) => {
      const thisYear = (/* @__PURE__ */ new Date()).getUTCFullYear();
      const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value));
      if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
      }
      return valueInThisCentury;
    }, "parseTwoDigitYear");
    var FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
    var adjustRfc850Year = /* @__PURE__ */ __name((input) => {
      if (input.getTime() - (/* @__PURE__ */ new Date()).getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(
          Date.UTC(
            input.getUTCFullYear() - 100,
            input.getUTCMonth(),
            input.getUTCDate(),
            input.getUTCHours(),
            input.getUTCMinutes(),
            input.getUTCSeconds(),
            input.getUTCMilliseconds()
          )
        );
      }
      return input;
    }, "adjustRfc850Year");
    var parseMonthByShortName = /* @__PURE__ */ __name((value) => {
      const monthIdx = MONTHS.indexOf(value);
      if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
      }
      return monthIdx + 1;
    }, "parseMonthByShortName");
    var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var validateDayOfMonth = /* @__PURE__ */ __name((year, month, day) => {
      let maxDays = DAYS_IN_MONTH[month];
      if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
      }
      if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
      }
    }, "validateDayOfMonth");
    var isLeapYear = /* @__PURE__ */ __name((year) => {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }, "isLeapYear");
    var parseDateValue = /* @__PURE__ */ __name((value, type, lower, upper) => {
      const dateVal = strictParseByte(stripLeadingZeroes(value));
      if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
      }
      return dateVal;
    }, "parseDateValue");
    var parseMilliseconds = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return 0;
      }
      return strictParseFloat32("0." + value) * 1e3;
    }, "parseMilliseconds");
    var parseOffsetToMilliseconds = /* @__PURE__ */ __name((value) => {
      const directionStr = value[0];
      let direction = 1;
      if (directionStr == "+") {
        direction = 1;
      } else if (directionStr == "-") {
        direction = -1;
      } else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
      }
      const hour = Number(value.substring(1, 3));
      const minute = Number(value.substring(4, 6));
      return direction * (hour * 60 + minute) * 60 * 1e3;
    }, "parseOffsetToMilliseconds");
    var stripLeadingZeroes = /* @__PURE__ */ __name((value) => {
      let idx = 0;
      while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
      }
      if (idx === 0) {
        return value;
      }
      return value.slice(idx);
    }, "stripLeadingZeroes");
    var _ServiceException = class _ServiceException2 extends Error {
      constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, _ServiceException2.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
      }
    };
    __name(_ServiceException, "ServiceException");
    var ServiceException = _ServiceException;
    var decorateServiceException = /* @__PURE__ */ __name((exception, additions = {}) => {
      Object.entries(additions).filter(([, v]) => v !== void 0).forEach(([k, v]) => {
        if (exception[k] == void 0 || exception[k] === "") {
          exception[k] = v;
        }
      });
      const message = exception.message || exception.Message || "UnknownError";
      exception.message = message;
      delete exception.Message;
      return exception;
    }, "decorateServiceException");
    var throwDefaultError = /* @__PURE__ */ __name(({ output, parsedBody, exceptionCtor, errorCode }) => {
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
      const response = new exceptionCtor({
        name: (parsedBody == null ? void 0 : parsedBody.code) || (parsedBody == null ? void 0 : parsedBody.Code) || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata
      });
      throw decorateServiceException(response, parsedBody);
    }, "throwDefaultError");
    var withBaseException = /* @__PURE__ */ __name((ExceptionCtor) => {
      return ({ output, parsedBody, errorCode }) => {
        throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
      };
    }, "withBaseException");
    var deserializeMetadata = /* @__PURE__ */ __name((output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    }), "deserializeMetadata");
    var loadConfigsForDefaultMode = /* @__PURE__ */ __name((mode) => {
      switch (mode) {
        case "standard":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "in-region":
          return {
            retryMode: "standard",
            connectionTimeout: 1100
          };
        case "cross-region":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "mobile":
          return {
            retryMode: "standard",
            connectionTimeout: 3e4
          };
        default:
          return {};
      }
    }, "loadConfigsForDefaultMode");
    var warningEmitted = false;
    var emitWarningIfUnsupportedVersion = /* @__PURE__ */ __name((version2) => {
      if (version2 && !warningEmitted && parseInt(version2.substring(1, version2.indexOf("."))) < 16) {
        warningEmitted = true;
      }
    }, "emitWarningIfUnsupportedVersion");
    var getChecksumConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      const checksumAlgorithms = [];
      for (const id in import_types.AlgorithmId) {
        const algorithmId = import_types.AlgorithmId[id];
        if (runtimeConfig[algorithmId] === void 0) {
          continue;
        }
        checksumAlgorithms.push({
          algorithmId: () => algorithmId,
          checksumConstructor: () => runtimeConfig[algorithmId]
        });
      }
      return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
          this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return this._checksumAlgorithms;
        }
      };
    }, "getChecksumConfiguration");
    var resolveChecksumRuntimeConfig = /* @__PURE__ */ __name((clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
      });
      return runtimeConfig;
    }, "resolveChecksumRuntimeConfig");
    var getRetryConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      let _retryStrategy = runtimeConfig.retryStrategy;
      return {
        setRetryStrategy(retryStrategy) {
          _retryStrategy = retryStrategy;
        },
        retryStrategy() {
          return _retryStrategy;
        }
      };
    }, "getRetryConfiguration");
    var resolveRetryRuntimeConfig = /* @__PURE__ */ __name((retryStrategyConfiguration) => {
      const runtimeConfig = {};
      runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
      return runtimeConfig;
    }, "resolveRetryRuntimeConfig");
    var getDefaultExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      return {
        ...getChecksumConfiguration(runtimeConfig),
        ...getRetryConfiguration(runtimeConfig)
      };
    }, "getDefaultExtensionConfiguration");
    var getDefaultClientConfiguration = getDefaultExtensionConfiguration;
    var resolveDefaultRuntimeConfig = /* @__PURE__ */ __name((config) => {
      return {
        ...resolveChecksumRuntimeConfig(config),
        ...resolveRetryRuntimeConfig(config)
      };
    }, "resolveDefaultRuntimeConfig");
    function extendedEncodeURIComponent(str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    __name(extendedEncodeURIComponent, "extendedEncodeURIComponent");
    var getArrayIfSingleItem = /* @__PURE__ */ __name((mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray], "getArrayIfSingleItem");
    var getValueFromTextNode = /* @__PURE__ */ __name((obj) => {
      const textNodeName = "#text";
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
          obj[key] = obj[key][textNodeName];
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
          obj[key] = getValueFromTextNode(obj[key]);
        }
      }
      return obj;
    }, "getValueFromTextNode");
    var StringWrapper = /* @__PURE__ */ __name(function() {
      const Class = Object.getPrototypeOf(this).constructor;
      const Constructor = Function.bind.apply(String, [null, ...arguments]);
      const instance = new Constructor();
      Object.setPrototypeOf(instance, Class.prototype);
      return instance;
    }, "StringWrapper");
    StringWrapper.prototype = Object.create(String.prototype, {
      constructor: {
        value: StringWrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    Object.setPrototypeOf(StringWrapper, String);
    var _LazyJsonString = class _LazyJsonString2 extends StringWrapper {
      deserializeJSON() {
        return JSON.parse(super.toString());
      }
      toJSON() {
        return super.toString();
      }
      static fromObject(object) {
        if (object instanceof _LazyJsonString2) {
          return object;
        } else if (object instanceof String || typeof object === "string") {
          return new _LazyJsonString2(object);
        }
        return new _LazyJsonString2(JSON.stringify(object));
      }
    };
    __name(_LazyJsonString, "LazyJsonString");
    var LazyJsonString = _LazyJsonString;
    function map(arg0, arg1, arg2) {
      let target;
      let filter;
      let instructions;
      if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
        target = {};
        instructions = arg0;
      } else {
        target = arg0;
        if (typeof arg1 === "function") {
          filter = arg1;
          instructions = arg2;
          return mapWithFilter(target, filter, instructions);
        } else {
          instructions = arg1;
        }
      }
      for (const key of Object.keys(instructions)) {
        if (!Array.isArray(instructions[key])) {
          target[key] = instructions[key];
          continue;
        }
        applyInstruction(target, null, instructions, key);
      }
      return target;
    }
    __name(map, "map");
    var convertMap = /* @__PURE__ */ __name((target) => {
      const output = {};
      for (const [k, v] of Object.entries(target || {})) {
        output[k] = [, v];
      }
      return output;
    }, "convertMap");
    var take = /* @__PURE__ */ __name((source, instructions) => {
      const out = {};
      for (const key in instructions) {
        applyInstruction(out, source, instructions, key);
      }
      return out;
    }, "take");
    var mapWithFilter = /* @__PURE__ */ __name((target, filter, instructions) => {
      return map(
        target,
        Object.entries(instructions).reduce(
          (_instructions, [key, value]) => {
            if (Array.isArray(value)) {
              _instructions[key] = value;
            } else {
              if (typeof value === "function") {
                _instructions[key] = [filter, value()];
              } else {
                _instructions[key] = [filter, value];
              }
            }
            return _instructions;
          },
          {}
        )
      );
    }, "mapWithFilter");
    var applyInstruction = /* @__PURE__ */ __name((target, source, instructions, targetKey) => {
      if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
          instruction = [, instruction];
        }
        const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
          target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
      }
      let [filter, value] = instructions[targetKey];
      if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
        const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed) {
          target[targetKey] = _value;
        } else if (customFilterPassed) {
          target[targetKey] = value();
        }
      } else {
        const defaultFilterPassed = filter === void 0 && value != null;
        const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed || customFilterPassed) {
          target[targetKey] = value;
        }
      }
    }, "applyInstruction");
    var nonNullish = /* @__PURE__ */ __name((_) => _ != null, "nonNullish");
    var pass = /* @__PURE__ */ __name((_) => _, "pass");
    var resolvedPath = /* @__PURE__ */ __name((resolvedPath2, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
      if (input != null && input[memberName] !== void 0) {
        const labelValue = labelValueProvider();
        if (labelValue.length <= 0) {
          throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath2 = resolvedPath2.replace(
          uriLabel,
          isGreedyLabel ? labelValue.split("/").map((segment) => extendedEncodeURIComponent(segment)).join("/") : extendedEncodeURIComponent(labelValue)
        );
      } else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
      }
      return resolvedPath2;
    }, "resolvedPath");
    var serializeFloat = /* @__PURE__ */ __name((value) => {
      if (value !== value) {
        return "NaN";
      }
      switch (value) {
        case Infinity:
          return "Infinity";
        case -Infinity:
          return "-Infinity";
        default:
          return value;
      }
    }, "serializeFloat");
    var _json = /* @__PURE__ */ __name((obj) => {
      if (obj == null) {
        return {};
      }
      if (Array.isArray(obj)) {
        return obj.filter((_) => _ != null).map(_json);
      }
      if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
          if (obj[key] == null) {
            continue;
          }
          target[key] = _json(obj[key]);
        }
        return target;
      }
      return obj;
    }, "_json");
    function splitEvery(value, delimiter, numDelimiters) {
      if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
        throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
      }
      const segments = value.split(delimiter);
      if (numDelimiters === 1) {
        return segments;
      }
      const compoundSegments = [];
      let currentSegment = "";
      for (let i = 0; i < segments.length; i++) {
        if (currentSegment === "") {
          currentSegment = segments[i];
        } else {
          currentSegment += delimiter + segments[i];
        }
        if ((i + 1) % numDelimiters === 0) {
          compoundSegments.push(currentSegment);
          currentSegment = "";
        }
      }
      if (currentSegment !== "") {
        compoundSegments.push(currentSegment);
      }
      return compoundSegments;
    }
    __name(splitEvery, "splitEvery");
  }
});

// node_modules/@smithy/middleware-retry/dist-cjs/isStreamingPayload/isStreamingPayload.js
var require_isStreamingPayload = __commonJS({
  "node_modules/@smithy/middleware-retry/dist-cjs/isStreamingPayload/isStreamingPayload.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isStreamingPayload = void 0;
    var stream_1 = require("stream");
    var isStreamingPayload = (request) => (request === null || request === void 0 ? void 0 : request.body) instanceof stream_1.Readable || typeof ReadableStream !== "undefined" && (request === null || request === void 0 ? void 0 : request.body) instanceof ReadableStream;
    exports2.isStreamingPayload = isStreamingPayload;
  }
});

// node_modules/@smithy/middleware-retry/dist-cjs/index.js
var require_dist_cjs33 = __commonJS({
  "node_modules/@smithy/middleware-retry/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      AdaptiveRetryStrategy: () => AdaptiveRetryStrategy,
      CONFIG_MAX_ATTEMPTS: () => CONFIG_MAX_ATTEMPTS,
      CONFIG_RETRY_MODE: () => CONFIG_RETRY_MODE,
      ENV_MAX_ATTEMPTS: () => ENV_MAX_ATTEMPTS,
      ENV_RETRY_MODE: () => ENV_RETRY_MODE,
      NODE_MAX_ATTEMPT_CONFIG_OPTIONS: () => NODE_MAX_ATTEMPT_CONFIG_OPTIONS,
      NODE_RETRY_MODE_CONFIG_OPTIONS: () => NODE_RETRY_MODE_CONFIG_OPTIONS,
      StandardRetryStrategy: () => StandardRetryStrategy,
      defaultDelayDecider: () => defaultDelayDecider,
      defaultRetryDecider: () => defaultRetryDecider,
      getOmitRetryHeadersPlugin: () => getOmitRetryHeadersPlugin,
      getRetryAfterHint: () => getRetryAfterHint,
      getRetryPlugin: () => getRetryPlugin,
      omitRetryHeadersMiddleware: () => omitRetryHeadersMiddleware,
      omitRetryHeadersMiddlewareOptions: () => omitRetryHeadersMiddlewareOptions,
      resolveRetryConfig: () => resolveRetryConfig,
      retryMiddleware: () => retryMiddleware,
      retryMiddlewareOptions: () => retryMiddlewareOptions
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_protocol_http = require_dist_cjs2();
    var import_uuid = (init_esm_node(), __toCommonJS(esm_node_exports));
    var import_util_retry = require_dist_cjs20();
    var getDefaultRetryQuota = /* @__PURE__ */ __name((initialRetryTokens, options) => {
      const MAX_CAPACITY = initialRetryTokens;
      const noRetryIncrement = (options == null ? void 0 : options.noRetryIncrement) ?? import_util_retry.NO_RETRY_INCREMENT;
      const retryCost = (options == null ? void 0 : options.retryCost) ?? import_util_retry.RETRY_COST;
      const timeoutRetryCost = (options == null ? void 0 : options.timeoutRetryCost) ?? import_util_retry.TIMEOUT_RETRY_COST;
      let availableCapacity = initialRetryTokens;
      const getCapacityAmount = /* @__PURE__ */ __name((error) => error.name === "TimeoutError" ? timeoutRetryCost : retryCost, "getCapacityAmount");
      const hasRetryTokens = /* @__PURE__ */ __name((error) => getCapacityAmount(error) <= availableCapacity, "hasRetryTokens");
      const retrieveRetryTokens = /* @__PURE__ */ __name((error) => {
        if (!hasRetryTokens(error)) {
          throw new Error("No retry token available");
        }
        const capacityAmount = getCapacityAmount(error);
        availableCapacity -= capacityAmount;
        return capacityAmount;
      }, "retrieveRetryTokens");
      const releaseRetryTokens = /* @__PURE__ */ __name((capacityReleaseAmount) => {
        availableCapacity += capacityReleaseAmount ?? noRetryIncrement;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
      }, "releaseRetryTokens");
      return Object.freeze({
        hasRetryTokens,
        retrieveRetryTokens,
        releaseRetryTokens
      });
    }, "getDefaultRetryQuota");
    var defaultDelayDecider = /* @__PURE__ */ __name((delayBase, attempts) => Math.floor(Math.min(import_util_retry.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase)), "defaultDelayDecider");
    var import_service_error_classification = require_dist_cjs19();
    var defaultRetryDecider = /* @__PURE__ */ __name((error) => {
      if (!error) {
        return false;
      }
      return (0, import_service_error_classification.isRetryableByTrait)(error) || (0, import_service_error_classification.isClockSkewError)(error) || (0, import_service_error_classification.isThrottlingError)(error) || (0, import_service_error_classification.isTransientError)(error);
    }, "defaultRetryDecider");
    var asSdkError = /* @__PURE__ */ __name((error) => {
      if (error instanceof Error)
        return error;
      if (error instanceof Object)
        return Object.assign(new Error(), error);
      if (typeof error === "string")
        return new Error(error);
      return new Error(`AWS SDK error wrapper for ${error}`);
    }, "asSdkError");
    var _StandardRetryStrategy = class _StandardRetryStrategy {
      constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = import_util_retry.RETRY_MODES.STANDARD;
        this.retryDecider = (options == null ? void 0 : options.retryDecider) ?? defaultRetryDecider;
        this.delayDecider = (options == null ? void 0 : options.delayDecider) ?? defaultDelayDecider;
        this.retryQuota = (options == null ? void 0 : options.retryQuota) ?? getDefaultRetryQuota(import_util_retry.INITIAL_RETRY_TOKENS);
      }
      shouldRetry(error, attempts, maxAttempts) {
        return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
      }
      async getMaxAttempts() {
        let maxAttempts;
        try {
          maxAttempts = await this.maxAttemptsProvider();
        } catch (error) {
          maxAttempts = import_util_retry.DEFAULT_MAX_ATTEMPTS;
        }
        return maxAttempts;
      }
      async retry(next, args, options) {
        let retryTokenAmount;
        let attempts = 0;
        let totalDelay = 0;
        const maxAttempts = await this.getMaxAttempts();
        const { request } = args;
        if (import_protocol_http.HttpRequest.isInstance(request)) {
          request.headers[import_util_retry.INVOCATION_ID_HEADER] = (0, import_uuid.v4)();
        }
        while (true) {
          try {
            if (import_protocol_http.HttpRequest.isInstance(request)) {
              request.headers[import_util_retry.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
            }
            if (options == null ? void 0 : options.beforeRequest) {
              await options.beforeRequest();
            }
            const { response, output } = await next(args);
            if (options == null ? void 0 : options.afterRequest) {
              options.afterRequest(response);
            }
            this.retryQuota.releaseRetryTokens(retryTokenAmount);
            output.$metadata.attempts = attempts + 1;
            output.$metadata.totalRetryDelay = totalDelay;
            return { response, output };
          } catch (e) {
            const err = asSdkError(e);
            attempts++;
            if (this.shouldRetry(err, attempts, maxAttempts)) {
              retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);
              const delayFromDecider = this.delayDecider(
                (0, import_service_error_classification.isThrottlingError)(err) ? import_util_retry.THROTTLING_RETRY_DELAY_BASE : import_util_retry.DEFAULT_RETRY_DELAY_BASE,
                attempts
              );
              const delayFromResponse = getDelayFromRetryAfterHeader(err.$response);
              const delay = Math.max(delayFromResponse || 0, delayFromDecider);
              totalDelay += delay;
              await new Promise((resolve) => setTimeout(resolve, delay));
              continue;
            }
            if (!err.$metadata) {
              err.$metadata = {};
            }
            err.$metadata.attempts = attempts;
            err.$metadata.totalRetryDelay = totalDelay;
            throw err;
          }
        }
      }
    };
    __name(_StandardRetryStrategy, "StandardRetryStrategy");
    var StandardRetryStrategy = _StandardRetryStrategy;
    var getDelayFromRetryAfterHeader = /* @__PURE__ */ __name((response) => {
      if (!import_protocol_http.HttpResponse.isInstance(response))
        return;
      const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
      if (!retryAfterHeaderName)
        return;
      const retryAfter = response.headers[retryAfterHeaderName];
      const retryAfterSeconds = Number(retryAfter);
      if (!Number.isNaN(retryAfterSeconds))
        return retryAfterSeconds * 1e3;
      const retryAfterDate = new Date(retryAfter);
      return retryAfterDate.getTime() - Date.now();
    }, "getDelayFromRetryAfterHeader");
    var _AdaptiveRetryStrategy = class _AdaptiveRetryStrategy extends StandardRetryStrategy {
      constructor(maxAttemptsProvider, options) {
        const { rateLimiter, ...superOptions } = options ?? {};
        super(maxAttemptsProvider, superOptions);
        this.rateLimiter = rateLimiter ?? new import_util_retry.DefaultRateLimiter();
        this.mode = import_util_retry.RETRY_MODES.ADAPTIVE;
      }
      async retry(next, args) {
        return super.retry(next, args, {
          beforeRequest: async () => {
            return this.rateLimiter.getSendToken();
          },
          afterRequest: (response) => {
            this.rateLimiter.updateClientSendingRate(response);
          }
        });
      }
    };
    __name(_AdaptiveRetryStrategy, "AdaptiveRetryStrategy");
    var AdaptiveRetryStrategy = _AdaptiveRetryStrategy;
    var import_util_middleware = require_dist_cjs10();
    var ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
    var CONFIG_MAX_ATTEMPTS = "max_attempts";
    var NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => {
        const value = env[ENV_MAX_ATTEMPTS];
        if (!value)
          return void 0;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
          throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
      },
      configFileSelector: (profile) => {
        const value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value)
          return void 0;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
          throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
      },
      default: import_util_retry.DEFAULT_MAX_ATTEMPTS
    };
    var resolveRetryConfig = /* @__PURE__ */ __name((input) => {
      const { retryStrategy } = input;
      const maxAttempts = (0, import_util_middleware.normalizeProvider)(input.maxAttempts ?? import_util_retry.DEFAULT_MAX_ATTEMPTS);
      return {
        ...input,
        maxAttempts,
        retryStrategy: async () => {
          if (retryStrategy) {
            return retryStrategy;
          }
          const retryMode = await (0, import_util_middleware.normalizeProvider)(input.retryMode)();
          if (retryMode === import_util_retry.RETRY_MODES.ADAPTIVE) {
            return new import_util_retry.AdaptiveRetryStrategy(maxAttempts);
          }
          return new import_util_retry.StandardRetryStrategy(maxAttempts);
        }
      };
    }, "resolveRetryConfig");
    var ENV_RETRY_MODE = "AWS_RETRY_MODE";
    var CONFIG_RETRY_MODE = "retry_mode";
    var NODE_RETRY_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[ENV_RETRY_MODE],
      configFileSelector: (profile) => profile[CONFIG_RETRY_MODE],
      default: import_util_retry.DEFAULT_RETRY_MODE
    };
    var omitRetryHeadersMiddleware = /* @__PURE__ */ __name(() => (next) => async (args) => {
      const { request } = args;
      if (import_protocol_http.HttpRequest.isInstance(request)) {
        delete request.headers[import_util_retry.INVOCATION_ID_HEADER];
        delete request.headers[import_util_retry.REQUEST_HEADER];
      }
      return next(args);
    }, "omitRetryHeadersMiddleware");
    var omitRetryHeadersMiddlewareOptions = {
      name: "omitRetryHeadersMiddleware",
      tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
      relation: "before",
      toMiddleware: "awsAuthMiddleware",
      override: true
    };
    var getOmitRetryHeadersPlugin = /* @__PURE__ */ __name((options) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(omitRetryHeadersMiddleware(), omitRetryHeadersMiddlewareOptions);
      }
    }), "getOmitRetryHeadersPlugin");
    var import_smithy_client = require_dist_cjs32();
    var import_isStreamingPayload = require_isStreamingPayload();
    var retryMiddleware = /* @__PURE__ */ __name((options) => (next, context) => async (args) => {
      var _a;
      let retryStrategy = await options.retryStrategy();
      const maxAttempts = await options.maxAttempts();
      if (isRetryStrategyV2(retryStrategy)) {
        retryStrategy = retryStrategy;
        let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
        let lastError = new Error();
        let attempts = 0;
        let totalRetryDelay = 0;
        const { request } = args;
        const isRequest = import_protocol_http.HttpRequest.isInstance(request);
        if (isRequest) {
          request.headers[import_util_retry.INVOCATION_ID_HEADER] = (0, import_uuid.v4)();
        }
        while (true) {
          try {
            if (isRequest) {
              request.headers[import_util_retry.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
            }
            const { response, output } = await next(args);
            retryStrategy.recordSuccess(retryToken);
            output.$metadata.attempts = attempts + 1;
            output.$metadata.totalRetryDelay = totalRetryDelay;
            return { response, output };
          } catch (e) {
            const retryErrorInfo = getRetryErrorInfo(e);
            lastError = asSdkError(e);
            if (isRequest && (0, import_isStreamingPayload.isStreamingPayload)(request)) {
              (_a = context.logger instanceof import_smithy_client.NoOpLogger ? console : context.logger) == null ? void 0 : _a.warn(
                "An error was encountered in a non-retryable streaming request."
              );
              throw lastError;
            }
            try {
              retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
            } catch (refreshError) {
              if (!lastError.$metadata) {
                lastError.$metadata = {};
              }
              lastError.$metadata.attempts = attempts + 1;
              lastError.$metadata.totalRetryDelay = totalRetryDelay;
              throw lastError;
            }
            attempts = retryToken.getRetryCount();
            const delay = retryToken.getRetryDelay();
            totalRetryDelay += delay;
            await new Promise((resolve) => setTimeout(resolve, delay));
          }
        }
      } else {
        retryStrategy = retryStrategy;
        if (retryStrategy == null ? void 0 : retryStrategy.mode)
          context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
        return retryStrategy.retry(next, args);
      }
    }, "retryMiddleware");
    var isRetryStrategyV2 = /* @__PURE__ */ __name((retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined", "isRetryStrategyV2");
    var getRetryErrorInfo = /* @__PURE__ */ __name((error) => {
      const errorInfo = {
        error,
        errorType: getRetryErrorType(error)
      };
      const retryAfterHint = getRetryAfterHint(error.$response);
      if (retryAfterHint) {
        errorInfo.retryAfterHint = retryAfterHint;
      }
      return errorInfo;
    }, "getRetryErrorInfo");
    var getRetryErrorType = /* @__PURE__ */ __name((error) => {
      if ((0, import_service_error_classification.isThrottlingError)(error))
        return "THROTTLING";
      if ((0, import_service_error_classification.isTransientError)(error))
        return "TRANSIENT";
      if ((0, import_service_error_classification.isServerError)(error))
        return "SERVER_ERROR";
      return "CLIENT_ERROR";
    }, "getRetryErrorType");
    var retryMiddlewareOptions = {
      name: "retryMiddleware",
      tags: ["RETRY"],
      step: "finalizeRequest",
      priority: "high",
      override: true
    };
    var getRetryPlugin = /* @__PURE__ */ __name((options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
      }
    }), "getRetryPlugin");
    var getRetryAfterHint = /* @__PURE__ */ __name((response) => {
      if (!import_protocol_http.HttpResponse.isInstance(response))
        return;
      const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
      if (!retryAfterHeaderName)
        return;
      const retryAfter = response.headers[retryAfterHeaderName];
      const retryAfterSeconds = Number(retryAfter);
      if (!Number.isNaN(retryAfterSeconds))
        return new Date(retryAfterSeconds * 1e3);
      const retryAfterDate = new Date(retryAfter);
      return retryAfterDate;
    }, "getRetryAfterHint");
  }
});

// node_modules/@smithy/core/dist-cjs/index.js
var require_dist_cjs34 = __commonJS({
  "node_modules/@smithy/core/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      DefaultIdentityProviderConfig: () => DefaultIdentityProviderConfig,
      EXPIRATION_MS: () => EXPIRATION_MS,
      HttpApiKeyAuthSigner: () => HttpApiKeyAuthSigner,
      HttpBearerAuthSigner: () => HttpBearerAuthSigner,
      NoAuthSigner: () => NoAuthSigner,
      RequestBuilder: () => RequestBuilder,
      createIsIdentityExpiredFunction: () => createIsIdentityExpiredFunction,
      createPaginator: () => createPaginator,
      doesIdentityRequireRefresh: () => doesIdentityRequireRefresh,
      getHttpAuthSchemeEndpointRuleSetPlugin: () => getHttpAuthSchemeEndpointRuleSetPlugin,
      getHttpAuthSchemePlugin: () => getHttpAuthSchemePlugin,
      getHttpSigningPlugin: () => getHttpSigningPlugin,
      getSmithyContext: () => getSmithyContext3,
      httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => httpAuthSchemeEndpointRuleSetMiddlewareOptions,
      httpAuthSchemeMiddleware: () => httpAuthSchemeMiddleware,
      httpAuthSchemeMiddlewareOptions: () => httpAuthSchemeMiddlewareOptions,
      httpSigningMiddleware: () => httpSigningMiddleware,
      httpSigningMiddlewareOptions: () => httpSigningMiddlewareOptions,
      isIdentityExpired: () => isIdentityExpired,
      memoizeIdentityProvider: () => memoizeIdentityProvider,
      normalizeProvider: () => normalizeProvider,
      requestBuilder: () => requestBuilder
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_middleware = require_dist_cjs10();
    function convertHttpAuthSchemesToMap(httpAuthSchemes) {
      const map = /* @__PURE__ */ new Map();
      for (const scheme of httpAuthSchemes) {
        map.set(scheme.schemeId, scheme);
      }
      return map;
    }
    __name(convertHttpAuthSchemesToMap, "convertHttpAuthSchemesToMap");
    var httpAuthSchemeMiddleware = /* @__PURE__ */ __name((config, mwOptions) => (next, context) => async (args) => {
      var _a;
      const options = config.httpAuthSchemeProvider(
        await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input)
      );
      const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
      const smithyContext = (0, import_util_middleware.getSmithyContext)(context);
      const failureReasons = [];
      for (const option of options) {
        const scheme = authSchemes.get(option.schemeId);
        if (!scheme) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
          continue;
        }
        const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
        if (!identityProvider) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
          continue;
        }
        const { identityProperties = {}, signingProperties = {} } = ((_a = option.propertiesExtractor) == null ? void 0 : _a.call(option, config, context)) || {};
        option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
        option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
        smithyContext.selectedHttpAuthScheme = {
          httpAuthOption: option,
          identity: await identityProvider(option.identityProperties),
          signer: scheme.signer
        };
        break;
      }
      if (!smithyContext.selectedHttpAuthScheme) {
        throw new Error(failureReasons.join("\n"));
      }
      return next(args);
    }, "httpAuthSchemeMiddleware");
    var import_middleware_endpoint = require_dist_cjs18();
    var httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: import_middleware_endpoint.endpointMiddlewareOptions.name
    };
    var getHttpAuthSchemeEndpointRuleSetPlugin = /* @__PURE__ */ __name((config, {
      httpAuthSchemeParametersProvider,
      identityProviderConfigProvider
    }) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(
          httpAuthSchemeMiddleware(config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider
          }),
          httpAuthSchemeEndpointRuleSetMiddlewareOptions
        );
      }
    }), "getHttpAuthSchemeEndpointRuleSetPlugin");
    var import_middleware_serde = require_dist_cjs17();
    var httpAuthSchemeMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: import_middleware_serde.serializerMiddlewareOption.name
    };
    var getHttpAuthSchemePlugin = /* @__PURE__ */ __name((config, {
      httpAuthSchemeParametersProvider,
      identityProviderConfigProvider
    }) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(
          httpAuthSchemeMiddleware(config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider
          }),
          httpAuthSchemeMiddlewareOptions
        );
      }
    }), "getHttpAuthSchemePlugin");
    var import_protocol_http = require_dist_cjs2();
    var defaultErrorHandler = /* @__PURE__ */ __name((signingProperties) => (error) => {
      throw error;
    }, "defaultErrorHandler");
    var defaultSuccessHandler = /* @__PURE__ */ __name((httpResponse, signingProperties) => {
    }, "defaultSuccessHandler");
    var httpSigningMiddleware = /* @__PURE__ */ __name((config) => (next, context) => async (args) => {
      if (!import_protocol_http.HttpRequest.isInstance(args.request)) {
        return next(args);
      }
      const smithyContext = (0, import_util_middleware.getSmithyContext)(context);
      const scheme = smithyContext.selectedHttpAuthScheme;
      if (!scheme) {
        throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
      }
      const {
        httpAuthOption: { signingProperties = {} },
        identity,
        signer
      } = scheme;
      const output = await next({
        ...args,
        request: await signer.sign(args.request, identity, signingProperties)
      }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
      (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
      return output;
    }, "httpSigningMiddleware");
    var import_middleware_retry = require_dist_cjs33();
    var httpSigningMiddlewareOptions = {
      step: "finalizeRequest",
      tags: ["HTTP_SIGNING"],
      name: "httpSigningMiddleware",
      aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
      override: true,
      relation: "after",
      toMiddleware: import_middleware_retry.retryMiddlewareOptions.name
    };
    var getHttpSigningPlugin = /* @__PURE__ */ __name((config) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
      }
    }), "getHttpSigningPlugin");
    var _DefaultIdentityProviderConfig = class _DefaultIdentityProviderConfig {
      /**
       * Creates an IdentityProviderConfig with a record of scheme IDs to identity providers.
       *
       * @param config scheme IDs and identity providers to configure
       */
      constructor(config) {
        this.authSchemes = /* @__PURE__ */ new Map();
        for (const [key, value] of Object.entries(config)) {
          if (value !== void 0) {
            this.authSchemes.set(key, value);
          }
        }
      }
      getIdentityProvider(schemeId) {
        return this.authSchemes.get(schemeId);
      }
    };
    __name(_DefaultIdentityProviderConfig, "DefaultIdentityProviderConfig");
    var DefaultIdentityProviderConfig = _DefaultIdentityProviderConfig;
    var import_types = require_dist_cjs();
    var _HttpApiKeyAuthSigner = class _HttpApiKeyAuthSigner {
      async sign(httpRequest, identity, signingProperties) {
        if (!signingProperties) {
          throw new Error(
            "request could not be signed with `apiKey` since the `name` and `in` signer properties are missing"
          );
        }
        if (!signingProperties.name) {
          throw new Error("request could not be signed with `apiKey` since the `name` signer property is missing");
        }
        if (!signingProperties.in) {
          throw new Error("request could not be signed with `apiKey` since the `in` signer property is missing");
        }
        if (!identity.apiKey) {
          throw new Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
        }
        const clonedRequest = httpRequest.clone();
        if (signingProperties.in === import_types.HttpApiKeyAuthLocation.QUERY) {
          clonedRequest.query[signingProperties.name] = identity.apiKey;
        } else if (signingProperties.in === import_types.HttpApiKeyAuthLocation.HEADER) {
          clonedRequest.headers[signingProperties.name] = signingProperties.scheme ? `${signingProperties.scheme} ${identity.apiKey}` : identity.apiKey;
        } else {
          throw new Error(
            "request can only be signed with `apiKey` locations `query` or `header`, but found: `" + signingProperties.in + "`"
          );
        }
        return clonedRequest;
      }
    };
    __name(_HttpApiKeyAuthSigner, "HttpApiKeyAuthSigner");
    var HttpApiKeyAuthSigner = _HttpApiKeyAuthSigner;
    var _HttpBearerAuthSigner = class _HttpBearerAuthSigner {
      async sign(httpRequest, identity, signingProperties) {
        const clonedRequest = httpRequest.clone();
        if (!identity.token) {
          throw new Error("request could not be signed with `token` since the `token` is not defined");
        }
        clonedRequest.headers["Authorization"] = `Bearer ${identity.token}`;
        return clonedRequest;
      }
    };
    __name(_HttpBearerAuthSigner, "HttpBearerAuthSigner");
    var HttpBearerAuthSigner = _HttpBearerAuthSigner;
    var _NoAuthSigner = class _NoAuthSigner {
      async sign(httpRequest, identity, signingProperties) {
        return httpRequest;
      }
    };
    __name(_NoAuthSigner, "NoAuthSigner");
    var NoAuthSigner = _NoAuthSigner;
    var createIsIdentityExpiredFunction = /* @__PURE__ */ __name((expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs, "createIsIdentityExpiredFunction");
    var EXPIRATION_MS = 3e5;
    var isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
    var doesIdentityRequireRefresh = /* @__PURE__ */ __name((identity) => identity.expiration !== void 0, "doesIdentityRequireRefresh");
    var memoizeIdentityProvider = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
      if (provider === void 0) {
        return void 0;
      }
      const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = /* @__PURE__ */ __name(async (options) => {
        if (!pending) {
          pending = normalizedProvider(options);
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      }, "coalesceProvider");
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || (options == null ? void 0 : options.forceRefresh)) {
            resolved = await coalesceProvider(options);
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || (options == null ? void 0 : options.forceRefresh)) {
          resolved = await coalesceProvider(options);
        }
        if (isConstant) {
          return resolved;
        }
        if (!requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider(options);
          return resolved;
        }
        return resolved;
      };
    }, "memoizeIdentityProvider");
    var getSmithyContext3 = /* @__PURE__ */ __name((context) => context[import_types.SMITHY_CONTEXT_KEY] || (context[import_types.SMITHY_CONTEXT_KEY] = {}), "getSmithyContext");
    var normalizeProvider = /* @__PURE__ */ __name((input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    }, "normalizeProvider");
    var import_smithy_client = require_dist_cjs32();
    function requestBuilder(input, context) {
      return new RequestBuilder(input, context);
    }
    __name(requestBuilder, "requestBuilder");
    var _RequestBuilder = class _RequestBuilder {
      constructor(input, context) {
        this.input = input;
        this.context = context;
        this.query = {};
        this.method = "";
        this.headers = {};
        this.path = "";
        this.body = null;
        this.hostname = "";
        this.resolvePathStack = [];
      }
      async build() {
        const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
        this.path = basePath;
        for (const resolvePath of this.resolvePathStack) {
          resolvePath(this.path);
        }
        return new import_protocol_http.HttpRequest({
          protocol,
          hostname: this.hostname || hostname,
          port,
          method: this.method,
          path: this.path,
          query: this.query,
          body: this.body,
          headers: this.headers
        });
      }
      /**
       * Brevity setter for "hostname".
       */
      hn(hostname) {
        this.hostname = hostname;
        return this;
      }
      /**
       * Brevity initial builder for "basepath".
       */
      bp(uriLabel) {
        this.resolvePathStack.push((basePath) => {
          this.path = `${(basePath == null ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
        });
        return this;
      }
      /**
       * Brevity incremental builder for "path".
       */
      p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
        this.resolvePathStack.push((path) => {
          this.path = (0, import_smithy_client.resolvedPath)(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
        });
        return this;
      }
      /**
       * Brevity setter for "headers".
       */
      h(headers) {
        this.headers = headers;
        return this;
      }
      /**
       * Brevity setter for "query".
       */
      q(query) {
        this.query = query;
        return this;
      }
      /**
       * Brevity setter for "body".
       */
      b(body) {
        this.body = body;
        return this;
      }
      /**
       * Brevity setter for "method".
       */
      m(method) {
        this.method = method;
        return this;
      }
    };
    __name(_RequestBuilder, "RequestBuilder");
    var RequestBuilder = _RequestBuilder;
    var makePagedClientRequest = /* @__PURE__ */ __name(async (CommandCtor, client, input, ...args) => {
      return await client.send(new CommandCtor(input), ...args);
    }, "makePagedClientRequest");
    function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
      return /* @__PURE__ */ __name(async function* paginateOperation(config, input, ...additionalArguments) {
        let token = config.startingToken || void 0;
        let hasNext = true;
        let page;
        while (hasNext) {
          input[inputTokenName] = token;
          if (pageSizeTokenName) {
            input[pageSizeTokenName] = input[pageSizeTokenName] ?? config.pageSize;
          }
          if (config.client instanceof ClientCtor) {
            page = await makePagedClientRequest(CommandCtor, config.client, input, ...additionalArguments);
          } else {
            throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
          }
          yield page;
          const prevToken = token;
          token = get(page, outputTokenName);
          hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
        }
        return void 0;
      }, "paginateOperation");
    }
    __name(createPaginator, "createPaginator");
    var get = /* @__PURE__ */ __name((fromObject, path) => {
      let cursor = fromObject;
      const pathComponents = path.split(".");
      for (const step of pathComponents) {
        if (!cursor || typeof cursor !== "object") {
          return void 0;
        }
        cursor = cursor[step];
      }
      return cursor;
    }, "get");
  }
});

// node_modules/@smithy/middleware-compression/dist-cjs/index.js
var require_dist_cjs35 = __commonJS({
  "node_modules/@smithy/middleware-compression/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      DEFAULT_DISABLE_REQUEST_COMPRESSION: () => DEFAULT_DISABLE_REQUEST_COMPRESSION,
      DEFAULT_NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES: () => DEFAULT_NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES,
      NODE_DISABLE_REQUEST_COMPRESSION_CONFIG_OPTIONS: () => NODE_DISABLE_REQUEST_COMPRESSION_CONFIG_OPTIONS,
      NODE_DISABLE_REQUEST_COMPRESSION_ENV_NAME: () => NODE_DISABLE_REQUEST_COMPRESSION_ENV_NAME,
      NODE_DISABLE_REQUEST_COMPRESSION_INI_NAME: () => NODE_DISABLE_REQUEST_COMPRESSION_INI_NAME,
      NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_CONFIG_OPTIONS: () => NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_CONFIG_OPTIONS,
      NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_ENV_NAME: () => NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_ENV_NAME,
      NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_INI_NAME: () => NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_INI_NAME,
      compressionMiddleware: () => compressionMiddleware,
      compressionMiddlewareOptions: () => compressionMiddlewareOptions,
      getCompressionPlugin: () => getCompressionPlugin,
      resolveCompressionConfig: () => resolveCompressionConfig
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_config_provider = require_dist_cjs9();
    var NODE_DISABLE_REQUEST_COMPRESSION_ENV_NAME = "AWS_DISABLE_REQUEST_COMPRESSION";
    var NODE_DISABLE_REQUEST_COMPRESSION_INI_NAME = "disable_request_compression";
    var DEFAULT_DISABLE_REQUEST_COMPRESSION = false;
    var NODE_DISABLE_REQUEST_COMPRESSION_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => (0, import_util_config_provider.booleanSelector)(env, NODE_DISABLE_REQUEST_COMPRESSION_ENV_NAME, import_util_config_provider.SelectorType.ENV),
      configFileSelector: (profile) => (0, import_util_config_provider.booleanSelector)(profile, NODE_DISABLE_REQUEST_COMPRESSION_INI_NAME, import_util_config_provider.SelectorType.CONFIG),
      default: DEFAULT_DISABLE_REQUEST_COMPRESSION
    };
    var NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_ENV_NAME = "AWS_REQUEST_MIN_COMPRESSION_SIZE_BYTES";
    var NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_INI_NAME = "request_min_compression_size_bytes";
    var DEFAULT_NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES = 10240;
    var NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => (0, import_util_config_provider.numberSelector)(env, NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_ENV_NAME, import_util_config_provider.SelectorType.ENV),
      configFileSelector: (profile) => (0, import_util_config_provider.numberSelector)(profile, NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_INI_NAME, import_util_config_provider.SelectorType.CONFIG),
      default: DEFAULT_NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES
    };
    var import_protocol_http = require_dist_cjs2();
    var import_zlib = require("zlib");
    var compressStream = /* @__PURE__ */ __name(async (body) => body.pipe((0, import_zlib.createGzip)()), "compressStream");
    var import_util_utf8 = require_dist_cjs24();
    var import_util = require("util");
    var gzipAsync = (0, import_util.promisify)(import_zlib.gzip);
    var compressString = /* @__PURE__ */ __name(async (body) => {
      try {
        const compressedBuffer = await gzipAsync((0, import_util_utf8.toUint8Array)(body || ""));
        return (0, import_util_utf8.toUint8Array)(compressedBuffer);
      } catch (err) {
        throw new Error("Failure during compression: " + err.message);
      }
    }, "compressString");
    var CLIENT_SUPPORTED_ALGORITHMS = [
      "gzip"
      /* GZIP */
    ];
    var import_is_array_buffer = require_dist_cjs22();
    var isStreaming = /* @__PURE__ */ __name((body) => body !== void 0 && typeof body !== "string" && !ArrayBuffer.isView(body) && !(0, import_is_array_buffer.isArrayBuffer)(body), "isStreaming");
    var compressionMiddleware = /* @__PURE__ */ __name((config, middlewareConfig) => (next) => async (args) => {
      if (!import_protocol_http.HttpRequest.isInstance(args.request)) {
        return next(args);
      }
      const disableRequestCompression = await config.disableRequestCompression();
      if (disableRequestCompression) {
        return next(args);
      }
      const { request } = args;
      const { body, headers } = request;
      const { encodings, streamRequiresLength } = middlewareConfig;
      let updatedBody = body;
      let updatedHeaders = headers;
      for (const algorithm of encodings) {
        if (CLIENT_SUPPORTED_ALGORITHMS.includes(algorithm)) {
          let isRequestCompressed = false;
          if (isStreaming(body)) {
            if (!streamRequiresLength) {
              updatedBody = await compressStream(body);
              isRequestCompressed = true;
            } else {
              throw new Error("Compression is not supported for streaming blobs that require a length.");
            }
          } else {
            const bodyLength = config.bodyLengthChecker(body);
            const requestMinCompressionSizeBytes = await config.requestMinCompressionSizeBytes();
            if (bodyLength && bodyLength >= requestMinCompressionSizeBytes) {
              updatedBody = await compressString(body);
              isRequestCompressed = true;
            }
          }
          if (isRequestCompressed) {
            if (headers["Content-Encoding"]) {
              updatedHeaders = {
                ...headers,
                "Content-Encoding": `${headers["Content-Encoding"]},${algorithm}`
              };
            } else {
              updatedHeaders = { ...headers, "Content-Encoding": algorithm };
            }
            break;
          }
        }
      }
      return next({
        ...args,
        request: {
          ...request,
          body: updatedBody,
          headers: updatedHeaders
        }
      });
    }, "compressionMiddleware");
    var compressionMiddlewareOptions = {
      name: "compressionMiddleware",
      step: "build",
      tags: ["REQUEST_BODY_COMPRESSION", "GZIP"],
      override: true,
      priority: "high"
    };
    var getCompressionPlugin = /* @__PURE__ */ __name((config, middlewareConfig) => ({
      applyToStack: (clientStack) => {
        clientStack.add(compressionMiddleware(config, middlewareConfig), compressionMiddlewareOptions);
      }
    }), "getCompressionPlugin");
    var import_util_middleware = require_dist_cjs10();
    var resolveCompressionConfig = /* @__PURE__ */ __name((input) => ({
      ...input,
      disableRequestCompression: (0, import_util_middleware.normalizeProvider)(input.disableRequestCompression),
      requestMinCompressionSizeBytes: async () => {
        const requestMinCompressionSizeBytes = await (0, import_util_middleware.normalizeProvider)(input.requestMinCompressionSizeBytes)();
        if (requestMinCompressionSizeBytes < 0 || requestMinCompressionSizeBytes > 10485760) {
          throw new RangeError(
            `The value for requestMinCompressionSizeBytes must be between 0 and 10485760 inclusive. The provided value ${requestMinCompressionSizeBytes} is outside this range."`
          );
        }
        return requestMinCompressionSizeBytes;
      }
    }), "resolveCompressionConfig");
  }
});

// node_modules/@smithy/middleware-content-length/dist-cjs/index.js
var require_dist_cjs36 = __commonJS({
  "node_modules/@smithy/middleware-content-length/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      contentLengthMiddleware: () => contentLengthMiddleware,
      contentLengthMiddlewareOptions: () => contentLengthMiddlewareOptions,
      getContentLengthPlugin: () => getContentLengthPlugin
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_protocol_http = require_dist_cjs2();
    var CONTENT_LENGTH_HEADER = "content-length";
    function contentLengthMiddleware(bodyLengthChecker) {
      return (next) => async (args) => {
        const request = args.request;
        if (import_protocol_http.HttpRequest.isInstance(request)) {
          const { body, headers } = request;
          if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) {
            try {
              const length = bodyLengthChecker(body);
              request.headers = {
                ...request.headers,
                [CONTENT_LENGTH_HEADER]: String(length)
              };
            } catch (error) {
            }
          }
        }
        return next({
          ...args,
          request
        });
      };
    }
    __name(contentLengthMiddleware, "contentLengthMiddleware");
    var contentLengthMiddlewareOptions = {
      step: "build",
      tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
      name: "contentLengthMiddleware",
      override: true
    };
    var getContentLengthPlugin = /* @__PURE__ */ __name((options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
      }
    }), "getContentLengthPlugin");
  }
});

// node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function(v) {
      return new Promise(function(a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) {
          fail(e);
          return next();
        });
      } catch (e) {
        fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}
var extendStatics, __assign, __createBinding, __setModuleDefault, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    };
    __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources
    };
  }
});

// node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js
var require_client = __commonJS({
  "node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var client_exports = {};
    __export2(client_exports, {
      emitWarningIfUnsupportedVersion: () => emitWarningIfUnsupportedVersion
    });
    module2.exports = __toCommonJS2(client_exports);
    var warningEmitted = false;
    var emitWarningIfUnsupportedVersion = /* @__PURE__ */ __name((version2) => {
      if (version2 && !warningEmitted && parseInt(version2.substring(1, version2.indexOf("."))) < 16) {
        warningEmitted = true;
      }
    }, "emitWarningIfUnsupportedVersion");
  }
});

// node_modules/@smithy/signature-v4/dist-cjs/index.js
var require_dist_cjs37 = __commonJS({
  "node_modules/@smithy/signature-v4/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      SignatureV4: () => SignatureV4,
      clearCredentialCache: () => clearCredentialCache,
      createScope: () => createScope,
      getCanonicalHeaders: () => getCanonicalHeaders,
      getCanonicalQuery: () => getCanonicalQuery,
      getPayloadHash: () => getPayloadHash,
      getSigningKey: () => getSigningKey,
      moveHeadersToQuery: () => moveHeadersToQuery,
      prepareRequest: () => prepareRequest
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_middleware = require_dist_cjs10();
    var import_util_utf84 = require_dist_cjs24();
    var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
    var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
    var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
    var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
    var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
    var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
    var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
    var AUTH_HEADER = "authorization";
    var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
    var DATE_HEADER = "date";
    var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
    var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
    var SHA256_HEADER = "x-amz-content-sha256";
    var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
    var ALWAYS_UNSIGNABLE_HEADERS = {
      authorization: true,
      "cache-control": true,
      connection: true,
      expect: true,
      from: true,
      "keep-alive": true,
      "max-forwards": true,
      pragma: true,
      referer: true,
      te: true,
      trailer: true,
      "transfer-encoding": true,
      upgrade: true,
      "user-agent": true,
      "x-amzn-trace-id": true
    };
    var PROXY_HEADER_PATTERN = /^proxy-/;
    var SEC_HEADER_PATTERN = /^sec-/;
    var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
    var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
    var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
    var MAX_CACHE_SIZE = 50;
    var KEY_TYPE_IDENTIFIER = "aws4_request";
    var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
    var import_util_hex_encoding = require_dist_cjs30();
    var import_util_utf8 = require_dist_cjs24();
    var signingKeyCache = {};
    var cacheQueue = [];
    var createScope = /* @__PURE__ */ __name((shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`, "createScope");
    var getSigningKey = /* @__PURE__ */ __name(async (sha256Constructor, credentials, shortDate, region, service) => {
      const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
      const cacheKey = `${shortDate}:${region}:${service}:${(0, import_util_hex_encoding.toHex)(credsHash)}:${credentials.sessionToken}`;
      if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
      }
      cacheQueue.push(cacheKey);
      while (cacheQueue.length > MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
      }
      let key = `AWS4${credentials.secretAccessKey}`;
      for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
      }
      return signingKeyCache[cacheKey] = key;
    }, "getSigningKey");
    var clearCredentialCache = /* @__PURE__ */ __name(() => {
      cacheQueue.length = 0;
      Object.keys(signingKeyCache).forEach((cacheKey) => {
        delete signingKeyCache[cacheKey];
      });
    }, "clearCredentialCache");
    var hmac = /* @__PURE__ */ __name((ctor, secret, data) => {
      const hash = new ctor(secret);
      hash.update((0, import_util_utf8.toUint8Array)(data));
      return hash.digest();
    }, "hmac");
    var getCanonicalHeaders = /* @__PURE__ */ __name(({ headers }, unsignableHeaders, signableHeaders) => {
      const canonical = {};
      for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == void 0) {
          continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || (unsignableHeaders == null ? void 0 : unsignableHeaders.has(canonicalHeaderName)) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
          if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
            continue;
          }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
      }
      return canonical;
    }, "getCanonicalHeaders");
    var import_util_uri_escape = require_dist_cjs26();
    var getCanonicalQuery = /* @__PURE__ */ __name(({ query = {} }) => {
      const keys = [];
      const serialized = {};
      for (const key of Object.keys(query).sort()) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
          continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
          serialized[key] = `${(0, import_util_uri_escape.escapeUri)(key)}=${(0, import_util_uri_escape.escapeUri)(value)}`;
        } else if (Array.isArray(value)) {
          serialized[key] = value.slice(0).reduce(
            (encoded, value2) => encoded.concat([`${(0, import_util_uri_escape.escapeUri)(key)}=${(0, import_util_uri_escape.escapeUri)(value2)}`]),
            []
          ).sort().join("&");
        }
      }
      return keys.map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
    }, "getCanonicalQuery");
    var import_is_array_buffer = require_dist_cjs22();
    var import_util_utf82 = require_dist_cjs24();
    var getPayloadHash = /* @__PURE__ */ __name(async ({ headers, body }, hashConstructor) => {
      for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === SHA256_HEADER) {
          return headers[headerName];
        }
      }
      if (body == void 0) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      } else if (typeof body === "string" || ArrayBuffer.isView(body) || (0, import_is_array_buffer.isArrayBuffer)(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update((0, import_util_utf82.toUint8Array)(body));
        return (0, import_util_hex_encoding.toHex)(await hashCtor.digest());
      }
      return UNSIGNED_PAYLOAD;
    }, "getPayloadHash");
    var import_util_utf83 = require_dist_cjs24();
    var _HeaderFormatter = class _HeaderFormatter {
      format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
          const bytes = (0, import_util_utf83.fromUtf8)(headerName);
          chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
          out.set(chunk, position);
          position += chunk.byteLength;
        }
        return out;
      }
      formatHeaderValue(header) {
        switch (header.type) {
          case "boolean":
            return Uint8Array.from([
              header.value ? 0 : 1
              /* boolFalse */
            ]);
          case "byte":
            return Uint8Array.from([2, header.value]);
          case "short":
            const shortView = new DataView(new ArrayBuffer(3));
            shortView.setUint8(
              0,
              3
              /* short */
            );
            shortView.setInt16(1, header.value, false);
            return new Uint8Array(shortView.buffer);
          case "integer":
            const intView = new DataView(new ArrayBuffer(5));
            intView.setUint8(
              0,
              4
              /* integer */
            );
            intView.setInt32(1, header.value, false);
            return new Uint8Array(intView.buffer);
          case "long":
            const longBytes = new Uint8Array(9);
            longBytes[0] = 5;
            longBytes.set(header.value.bytes, 1);
            return longBytes;
          case "binary":
            const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
            binView.setUint8(
              0,
              6
              /* byteArray */
            );
            binView.setUint16(1, header.value.byteLength, false);
            const binBytes = new Uint8Array(binView.buffer);
            binBytes.set(header.value, 3);
            return binBytes;
          case "string":
            const utf8Bytes = (0, import_util_utf83.fromUtf8)(header.value);
            const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
            strView.setUint8(
              0,
              7
              /* string */
            );
            strView.setUint16(1, utf8Bytes.byteLength, false);
            const strBytes = new Uint8Array(strView.buffer);
            strBytes.set(utf8Bytes, 3);
            return strBytes;
          case "timestamp":
            const tsBytes = new Uint8Array(9);
            tsBytes[0] = 8;
            tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
            return tsBytes;
          case "uuid":
            if (!UUID_PATTERN.test(header.value)) {
              throw new Error(`Invalid UUID received: ${header.value}`);
            }
            const uuidBytes = new Uint8Array(17);
            uuidBytes[0] = 9;
            uuidBytes.set((0, import_util_hex_encoding.fromHex)(header.value.replace(/\-/g, "")), 1);
            return uuidBytes;
        }
      }
    };
    __name(_HeaderFormatter, "HeaderFormatter");
    var HeaderFormatter = _HeaderFormatter;
    var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
    var _Int64 = class _Int642 {
      constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
          throw new Error("Int64 buffers must be exactly 8 bytes");
        }
      }
      static fromNumber(number) {
        if (number > 9223372036854776e3 || number < -9223372036854776e3) {
          throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
          bytes[i] = remaining;
        }
        if (number < 0) {
          negate(bytes);
        }
        return new _Int642(bytes);
      }
      /**
       * Called implicitly by infix arithmetic operators.
       */
      valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 128;
        if (negative) {
          negate(bytes);
        }
        return parseInt((0, import_util_hex_encoding.toHex)(bytes), 16) * (negative ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    };
    __name(_Int64, "Int64");
    var Int64 = _Int64;
    function negate(bytes) {
      for (let i = 0; i < 8; i++) {
        bytes[i] ^= 255;
      }
      for (let i = 7; i > -1; i--) {
        bytes[i]++;
        if (bytes[i] !== 0)
          break;
      }
    }
    __name(negate, "negate");
    var hasHeader = /* @__PURE__ */ __name((soughtHeader, headers) => {
      soughtHeader = soughtHeader.toLowerCase();
      for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
          return true;
        }
      }
      return false;
    }, "hasHeader");
    var cloneRequest = /* @__PURE__ */ __name(({ headers, query, ...rest }) => ({
      ...rest,
      headers: { ...headers },
      query: query ? cloneQuery(query) : void 0
    }), "cloneRequest");
    var cloneQuery = /* @__PURE__ */ __name((query) => Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param
      };
    }, {}), "cloneQuery");
    var moveHeadersToQuery = /* @__PURE__ */ __name((request, options = {}) => {
      var _a;
      const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
      for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !((_a = options.unhoistableHeaders) == null ? void 0 : _a.has(lname))) {
          query[name] = headers[name];
          delete headers[name];
        }
      }
      return {
        ...request,
        headers,
        query
      };
    }, "moveHeadersToQuery");
    var prepareRequest = /* @__PURE__ */ __name((request) => {
      request = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
      for (const headerName of Object.keys(request.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
          delete request.headers[headerName];
        }
      }
      return request;
    }, "prepareRequest");
    var iso8601 = /* @__PURE__ */ __name((time) => toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601");
    var toDate = /* @__PURE__ */ __name((time) => {
      if (typeof time === "number") {
        return new Date(time * 1e3);
      }
      if (typeof time === "string") {
        if (Number(time)) {
          return new Date(Number(time) * 1e3);
        }
        return new Date(time);
      }
      return time;
    }, "toDate");
    var _SignatureV4 = class _SignatureV4 {
      constructor({
        applyChecksum,
        credentials,
        region,
        service,
        sha256,
        uriEscapePath = true
      }) {
        this.headerFormatter = new HeaderFormatter();
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = (0, import_util_middleware.normalizeProvider)(region);
        this.credentialProvider = (0, import_util_middleware.normalizeProvider)(credentials);
      }
      async presign(originalRequest, options = {}) {
        const {
          signingDate = /* @__PURE__ */ new Date(),
          expiresIn = 3600,
          unsignableHeaders,
          unhoistableHeaders,
          signableHeaders,
          signingRegion,
          signingService
        } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > MAX_PRESIGNED_TTL) {
          return Promise.reject(
            "Signature version 4 presigned URLs must have an expiration date less than one week in the future"
          );
        }
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders });
        if (credentials.sessionToken) {
          request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        request.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(
          longDate,
          scope,
          this.getSigningKey(credentials, region, shortDate, signingService),
          this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256))
        );
        return request;
      }
      async sign(toSign, options) {
        if (typeof toSign === "string") {
          return this.signString(toSign, options);
        } else if (toSign.headers && toSign.payload) {
          return this.signEvent(toSign, options);
        } else if (toSign.message) {
          return this.signMessage(toSign, options);
        } else {
          return this.signRequest(toSign, options);
        }
      }
      async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = (0, import_util_hex_encoding.toHex)(await hash.digest());
        const stringToSign = [
          EVENT_ALGORITHM_IDENTIFIER,
          longDate,
          scope,
          priorSignature,
          hashedHeaders,
          hashedPayload
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
      }
      async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService }) {
        const promise = this.signEvent(
          {
            headers: this.headerFormatter.format(signableMessage.message.headers),
            payload: signableMessage.message.body
          },
          {
            signingDate,
            signingRegion,
            signingService,
            priorSignature: signableMessage.priorSignature
          }
        );
        return promise.then((signature) => {
          return { message: signableMessage.message, signature };
        });
      }
      async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update((0, import_util_utf84.toUint8Array)(stringToSign));
        return (0, import_util_hex_encoding.toHex)(await hash.digest());
      }
      async signRequest(requestToSign, {
        signingDate = /* @__PURE__ */ new Date(),
        signableHeaders,
        unsignableHeaders,
        signingRegion,
        signingService
      } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const request = prepareRequest(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        request.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
          request.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await getPayloadHash(request, this.sha256);
        if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
          request.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(
          longDate,
          scope,
          this.getSigningKey(credentials, region, shortDate, signingService),
          this.createCanonicalRequest(request, canonicalHeaders, payloadHash)
        );
        request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
        return request;
      }
      createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
      }
      async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update((0, import_util_utf84.toUint8Array)(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${(0, import_util_hex_encoding.toHex)(hashedRequest)}`;
      }
      getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
          const normalizedPathSegments = [];
          for (const pathSegment of path.split("/")) {
            if ((pathSegment == null ? void 0 : pathSegment.length) === 0)
              continue;
            if (pathSegment === ".")
              continue;
            if (pathSegment === "..") {
              normalizedPathSegments.pop();
            } else {
              normalizedPathSegments.push(pathSegment);
            }
          }
          const normalizedPath = `${(path == null ? void 0 : path.startsWith("/")) ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && (path == null ? void 0 : path.endsWith("/")) ? "/" : ""}`;
          const doubleEncoded = (0, import_util_uri_escape.escapeUri)(normalizedPath);
          return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
      }
      async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update((0, import_util_utf84.toUint8Array)(stringToSign));
        return (0, import_util_hex_encoding.toHex)(await hash.digest());
      }
      getSigningKey(credentials, region, shortDate, service) {
        return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
      }
      validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" || // @ts-expect-error: Property 'accessKeyId' does not exist on type 'object'.ts(2339)
        typeof credentials.accessKeyId !== "string" || // @ts-expect-error: Property 'secretAccessKey' does not exist on type 'object'.ts(2339)
        typeof credentials.secretAccessKey !== "string") {
          throw new Error("Resolved credential object is not valid");
        }
      }
    };
    __name(_SignatureV4, "SignatureV4");
    var SignatureV4 = _SignatureV4;
    var formatDate = /* @__PURE__ */ __name((now) => {
      const longDate = iso8601(now).replace(/[\-:]/g, "");
      return {
        longDate,
        shortDate: longDate.slice(0, 8)
      };
    }, "formatDate");
    var getCanonicalHeaderList = /* @__PURE__ */ __name((headers) => Object.keys(headers).sort().join(";"), "getCanonicalHeaderList");
  }
});

// node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js
var require_httpAuthSchemes = __commonJS({
  "node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var httpAuthSchemes_exports = {};
    __export2(httpAuthSchemes_exports, {
      AWSSDKSigV4Signer: () => AWSSDKSigV4Signer,
      AwsSdkSigV4Signer: () => AwsSdkSigV4Signer,
      resolveAWSSDKSigV4Config: () => resolveAWSSDKSigV4Config,
      resolveAwsSdkSigV4Config: () => resolveAwsSdkSigV4Config
    });
    module2.exports = __toCommonJS2(httpAuthSchemes_exports);
    var import_protocol_http2 = require_dist_cjs2();
    var import_protocol_http = require_dist_cjs2();
    var getDateHeader = /* @__PURE__ */ __name((response) => {
      var _a, _b;
      return import_protocol_http.HttpResponse.isInstance(response) ? ((_a = response.headers) == null ? void 0 : _a.date) ?? ((_b = response.headers) == null ? void 0 : _b.Date) : void 0;
    }, "getDateHeader");
    var getSkewCorrectedDate = /* @__PURE__ */ __name((systemClockOffset) => new Date(Date.now() + systemClockOffset), "getSkewCorrectedDate");
    var isClockSkewed = /* @__PURE__ */ __name((clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5, "isClockSkewed");
    var getUpdatedSystemClockOffset = /* @__PURE__ */ __name((clockTime, currentSystemClockOffset) => {
      const clockTimeInMs = Date.parse(clockTime);
      if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
      }
      return currentSystemClockOffset;
    }, "getUpdatedSystemClockOffset");
    var throwSigningPropertyError = /* @__PURE__ */ __name((name, property) => {
      if (!property) {
        throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
      }
      return property;
    }, "throwSigningPropertyError");
    var validateSigningProperties = /* @__PURE__ */ __name(async (signingProperties) => {
      var _a, _b, _c;
      const context = throwSigningPropertyError(
        "context",
        signingProperties.context
      );
      const config = throwSigningPropertyError("config", signingProperties.config);
      const authScheme = (_c = (_b = (_a = context.endpointV2) == null ? void 0 : _a.properties) == null ? void 0 : _b.authSchemes) == null ? void 0 : _c[0];
      const signerFunction = throwSigningPropertyError(
        "signer",
        config.signer
      );
      const signer = await signerFunction(authScheme);
      const signingRegion = signingProperties == null ? void 0 : signingProperties.signingRegion;
      const signingName = signingProperties == null ? void 0 : signingProperties.signingName;
      return {
        config,
        signer,
        signingRegion,
        signingName
      };
    }, "validateSigningProperties");
    var _AwsSdkSigV4Signer = class _AwsSdkSigV4Signer {
      async sign(httpRequest, identity, signingProperties) {
        if (!import_protocol_http2.HttpRequest.isInstance(httpRequest)) {
          throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const { config, signer, signingRegion, signingName } = await validateSigningProperties(signingProperties);
        const signedRequest = await signer.sign(httpRequest, {
          signingDate: getSkewCorrectedDate(config.systemClockOffset),
          signingRegion,
          signingService: signingName
        });
        return signedRequest;
      }
      errorHandler(signingProperties) {
        return (error) => {
          const serverTime = error.ServerTime ?? getDateHeader(error.$response);
          if (serverTime) {
            const config = throwSigningPropertyError("config", signingProperties.config);
            const initialSystemClockOffset = config.systemClockOffset;
            config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
            const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
            if (clockSkewCorrected && error.$metadata) {
              error.$metadata.clockSkewCorrected = true;
            }
          }
          throw error;
        };
      }
      successHandler(httpResponse, signingProperties) {
        const dateHeader = getDateHeader(httpResponse);
        if (dateHeader) {
          const config = throwSigningPropertyError("config", signingProperties.config);
          config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
        }
      }
    };
    __name(_AwsSdkSigV4Signer, "AwsSdkSigV4Signer");
    var AwsSdkSigV4Signer = _AwsSdkSigV4Signer;
    var AWSSDKSigV4Signer = AwsSdkSigV4Signer;
    var import_core = require_dist_cjs34();
    var import_signature_v4 = require_dist_cjs37();
    var resolveAwsSdkSigV4Config = /* @__PURE__ */ __name((config) => {
      let normalizedCreds;
      if (config.credentials) {
        normalizedCreds = (0, import_core.memoizeIdentityProvider)(config.credentials, import_core.isIdentityExpired, import_core.doesIdentityRequireRefresh);
      }
      if (!normalizedCreds) {
        if (config.credentialDefaultProvider) {
          normalizedCreds = (0, import_core.normalizeProvider)(
            config.credentialDefaultProvider(
              Object.assign({}, config, {
                parentClientConfig: config
              })
            )
          );
        } else {
          normalizedCreds = /* @__PURE__ */ __name(async () => {
            throw new Error("`credentials` is missing");
          }, "normalizedCreds");
        }
      }
      const {
        // Default for signingEscapePath
        signingEscapePath = true,
        // Default for systemClockOffset
        systemClockOffset = config.systemClockOffset || 0,
        // No default for sha256 since it is platform dependent
        sha256
      } = config;
      let signer;
      if (config.signer) {
        signer = (0, import_core.normalizeProvider)(config.signer);
      } else if (config.regionInfoProvider) {
        signer = /* @__PURE__ */ __name(() => (0, import_core.normalizeProvider)(config.region)().then(
          async (region) => [
            await config.regionInfoProvider(region, {
              useFipsEndpoint: await config.useFipsEndpoint(),
              useDualstackEndpoint: await config.useDualstackEndpoint()
            }) || {},
            region
          ]
        ).then(([regionInfo, region]) => {
          const { signingRegion, signingService } = regionInfo;
          config.signingRegion = config.signingRegion || signingRegion || region;
          config.signingName = config.signingName || signingService || config.serviceId;
          const params = {
            ...config,
            credentials: normalizedCreds,
            region: config.signingRegion,
            service: config.signingName,
            sha256,
            uriEscapePath: signingEscapePath
          };
          const SignerCtor = config.signerConstructor || import_signature_v4.SignatureV4;
          return new SignerCtor(params);
        }), "signer");
      } else {
        signer = /* @__PURE__ */ __name(async (authScheme) => {
          authScheme = Object.assign(
            {},
            {
              name: "sigv4",
              signingName: config.signingName || config.defaultSigningName,
              signingRegion: await (0, import_core.normalizeProvider)(config.region)(),
              properties: {}
            },
            authScheme
          );
          const signingRegion = authScheme.signingRegion;
          const signingService = authScheme.signingName;
          config.signingRegion = config.signingRegion || signingRegion;
          config.signingName = config.signingName || signingService || config.serviceId;
          const params = {
            ...config,
            credentials: normalizedCreds,
            region: config.signingRegion,
            service: config.signingName,
            sha256,
            uriEscapePath: signingEscapePath
          };
          const SignerCtor = config.signerConstructor || import_signature_v4.SignatureV4;
          return new SignerCtor(params);
        }, "signer");
      }
      return {
        ...config,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer
      };
    }, "resolveAwsSdkSigV4Config");
    var resolveAWSSDKSigV4Config = resolveAwsSdkSigV4Config;
  }
});

// node_modules/fast-xml-parser/src/util.js
var require_util = __commonJS({
  "node_modules/fast-xml-parser/src/util.js"(exports2) {
    "use strict";
    var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
    var regexName = new RegExp("^" + nameRegexp + "$");
    var getAllMatches = function(string, regex) {
      const matches = [];
      let match = regex.exec(string);
      while (match) {
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for (let index = 0; index < len; index++) {
          allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
      }
      return matches;
    };
    var isName = function(string) {
      const match = regexName.exec(string);
      return !(match === null || typeof match === "undefined");
    };
    exports2.isExist = function(v) {
      return typeof v !== "undefined";
    };
    exports2.isEmptyObject = function(obj) {
      return Object.keys(obj).length === 0;
    };
    exports2.merge = function(target, a, arrayMode) {
      if (a) {
        const keys = Object.keys(a);
        const len = keys.length;
        for (let i = 0; i < len; i++) {
          if (arrayMode === "strict") {
            target[keys[i]] = [a[keys[i]]];
          } else {
            target[keys[i]] = a[keys[i]];
          }
        }
      }
    };
    exports2.getValue = function(v) {
      if (exports2.isExist(v)) {
        return v;
      } else {
        return "";
      }
    };
    exports2.isName = isName;
    exports2.getAllMatches = getAllMatches;
    exports2.nameRegexp = nameRegexp;
  }
});

// node_modules/fast-xml-parser/src/validator.js
var require_validator = __commonJS({
  "node_modules/fast-xml-parser/src/validator.js"(exports2) {
    "use strict";
    var util = require_util();
    var defaultOptions = {
      allowBooleanAttributes: false,
      //A tag can have attributes without any value
      unpairedTags: []
    };
    exports2.validate = function(xmlData, options) {
      options = Object.assign({}, defaultOptions, options);
      const tags = [];
      let tagFound = false;
      let reachedRoot = false;
      if (xmlData[0] === "\uFEFF") {
        xmlData = xmlData.substr(1);
      }
      for (let i = 0; i < xmlData.length; i++) {
        if (xmlData[i] === "<" && xmlData[i + 1] === "?") {
          i += 2;
          i = readPI(xmlData, i);
          if (i.err) return i;
        } else if (xmlData[i] === "<") {
          let tagStartPos = i;
          i++;
          if (xmlData[i] === "!") {
            i = readCommentAndCDATA(xmlData, i);
            continue;
          } else {
            let closingTag = false;
            if (xmlData[i] === "/") {
              closingTag = true;
              i++;
            }
            let tagName = "";
            for (; i < xmlData.length && xmlData[i] !== ">" && xmlData[i] !== " " && xmlData[i] !== "	" && xmlData[i] !== "\n" && xmlData[i] !== "\r"; i++) {
              tagName += xmlData[i];
            }
            tagName = tagName.trim();
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substring(0, tagName.length - 1);
              i--;
            }
            if (!validateTagName(tagName)) {
              let msg;
              if (tagName.trim().length === 0) {
                msg = "Invalid space after '<'.";
              } else {
                msg = "Tag '" + tagName + "' is an invalid name.";
              }
              return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i));
            }
            const result = readAttributeStr(xmlData, i);
            if (result === false) {
              return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
            }
            let attrStr = result.value;
            i = result.index;
            if (attrStr[attrStr.length - 1] === "/") {
              const attrStrStart = i - attrStr.length;
              attrStr = attrStr.substring(0, attrStr.length - 1);
              const isValid = validateAttributeString(attrStr, options);
              if (isValid === true) {
                tagFound = true;
              } else {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
              }
            } else if (closingTag) {
              if (!result.tagClosed) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
              } else if (attrStr.trim().length > 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
              } else {
                const otg = tags.pop();
                if (tagName !== otg.tagName) {
                  let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                  return getErrorObject(
                    "InvalidTag",
                    "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                    getLineNumberForPosition(xmlData, tagStartPos)
                  );
                }
                if (tags.length == 0) {
                  reachedRoot = true;
                }
              }
            } else {
              const isValid = validateAttributeString(attrStr, options);
              if (isValid !== true) {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
              }
              if (reachedRoot === true) {
                return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i));
              } else if (options.unpairedTags.indexOf(tagName) !== -1) {
              } else {
                tags.push({ tagName, tagStartPos });
              }
              tagFound = true;
            }
            for (i++; i < xmlData.length; i++) {
              if (xmlData[i] === "<") {
                if (xmlData[i + 1] === "!") {
                  i++;
                  i = readCommentAndCDATA(xmlData, i);
                  continue;
                } else if (xmlData[i + 1] === "?") {
                  i = readPI(xmlData, ++i);
                  if (i.err) return i;
                } else {
                  break;
                }
              } else if (xmlData[i] === "&") {
                const afterAmp = validateAmpersand(xmlData, i);
                if (afterAmp == -1)
                  return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
                i = afterAmp;
              } else {
                if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
                  return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i));
                }
              }
            }
            if (xmlData[i] === "<") {
              i--;
            }
          }
        } else {
          if (isWhiteSpace(xmlData[i])) {
            continue;
          }
          return getErrorObject("InvalidChar", "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
        }
      }
      if (!tagFound) {
        return getErrorObject("InvalidXml", "Start tag expected.", 1);
      } else if (tags.length == 1) {
        return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
      } else if (tags.length > 0) {
        return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t) => t.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
      }
      return true;
    };
    function isWhiteSpace(char) {
      return char === " " || char === "	" || char === "\n" || char === "\r";
    }
    function readPI(xmlData, i) {
      const start = i;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] == "?" || xmlData[i] == " ") {
          const tagname = xmlData.substr(start, i - start);
          if (i > 5 && tagname === "xml") {
            return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i));
          } else if (xmlData[i] == "?" && xmlData[i + 1] == ">") {
            i++;
            break;
          } else {
            continue;
          }
        }
      }
      return i;
    }
    function readCommentAndCDATA(xmlData, i) {
      if (xmlData.length > i + 5 && xmlData[i + 1] === "-" && xmlData[i + 2] === "-") {
        for (i += 3; i < xmlData.length; i++) {
          if (xmlData[i] === "-" && xmlData[i + 1] === "-" && xmlData[i + 2] === ">") {
            i += 2;
            break;
          }
        }
      } else if (xmlData.length > i + 8 && xmlData[i + 1] === "D" && xmlData[i + 2] === "O" && xmlData[i + 3] === "C" && xmlData[i + 4] === "T" && xmlData[i + 5] === "Y" && xmlData[i + 6] === "P" && xmlData[i + 7] === "E") {
        let angleBracketsCount = 1;
        for (i += 8; i < xmlData.length; i++) {
          if (xmlData[i] === "<") {
            angleBracketsCount++;
          } else if (xmlData[i] === ">") {
            angleBracketsCount--;
            if (angleBracketsCount === 0) {
              break;
            }
          }
        }
      } else if (xmlData.length > i + 9 && xmlData[i + 1] === "[" && xmlData[i + 2] === "C" && xmlData[i + 3] === "D" && xmlData[i + 4] === "A" && xmlData[i + 5] === "T" && xmlData[i + 6] === "A" && xmlData[i + 7] === "[") {
        for (i += 8; i < xmlData.length; i++) {
          if (xmlData[i] === "]" && xmlData[i + 1] === "]" && xmlData[i + 2] === ">") {
            i += 2;
            break;
          }
        }
      }
      return i;
    }
    var doubleQuote = '"';
    var singleQuote = "'";
    function readAttributeStr(xmlData, i) {
      let attrStr = "";
      let startChar = "";
      let tagClosed = false;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
          if (startChar === "") {
            startChar = xmlData[i];
          } else if (startChar !== xmlData[i]) {
          } else {
            startChar = "";
          }
        } else if (xmlData[i] === ">") {
          if (startChar === "") {
            tagClosed = true;
            break;
          }
        }
        attrStr += xmlData[i];
      }
      if (startChar !== "") {
        return false;
      }
      return {
        value: attrStr,
        index: i,
        tagClosed
      };
    }
    var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function validateAttributeString(attrStr, options) {
      const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
      const attrNames = {};
      for (let i = 0; i < matches.length; i++) {
        if (matches[i][1].length === 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
        } else if (matches[i][3] !== void 0 && matches[i][4] === void 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
        } else if (matches[i][3] === void 0 && !options.allowBooleanAttributes) {
          return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
        }
        const attrName = matches[i][2];
        if (!validateAttrName(attrName)) {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
        }
        if (!attrNames.hasOwnProperty(attrName)) {
          attrNames[attrName] = 1;
        } else {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
        }
      }
      return true;
    }
    function validateNumberAmpersand(xmlData, i) {
      let re = /\d/;
      if (xmlData[i] === "x") {
        i++;
        re = /[\da-fA-F]/;
      }
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === ";")
          return i;
        if (!xmlData[i].match(re))
          break;
      }
      return -1;
    }
    function validateAmpersand(xmlData, i) {
      i++;
      if (xmlData[i] === ";")
        return -1;
      if (xmlData[i] === "#") {
        i++;
        return validateNumberAmpersand(xmlData, i);
      }
      let count = 0;
      for (; i < xmlData.length; i++, count++) {
        if (xmlData[i].match(/\w/) && count < 20)
          continue;
        if (xmlData[i] === ";")
          break;
        return -1;
      }
      return i;
    }
    function getErrorObject(code, message, lineNumber) {
      return {
        err: {
          code,
          msg: message,
          line: lineNumber.line || lineNumber,
          col: lineNumber.col
        }
      };
    }
    function validateAttrName(attrName) {
      return util.isName(attrName);
    }
    function validateTagName(tagname) {
      return util.isName(tagname);
    }
    function getLineNumberForPosition(xmlData, index) {
      const lines = xmlData.substring(0, index).split(/\r?\n/);
      return {
        line: lines.length,
        // column number is last line's length + 1, because column numbering starts at 1:
        col: lines[lines.length - 1].length + 1
      };
    }
    function getPositionFromMatch(match) {
      return match.startIndex + match[1].length;
    }
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var require_OptionsBuilder = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports2) {
    var defaultOptions = {
      preserveOrder: false,
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      removeNSPrefix: false,
      // remove NS from tag name or attribute name if true
      allowBooleanAttributes: false,
      //a tag can have attributes without any value
      //ignoreRootElement : false,
      parseTagValue: true,
      parseAttributeValue: false,
      trimValues: true,
      //Trim string values of tag and attributes
      cdataPropName: false,
      numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true
      },
      tagValueProcessor: function(tagName, val2) {
        return val2;
      },
      attributeValueProcessor: function(attrName, val2) {
        return val2;
      },
      stopNodes: [],
      //nested tags will not be parsed even for errors
      alwaysCreateTextNode: false,
      isArray: () => false,
      commentPropName: false,
      unpairedTags: [],
      processEntities: true,
      htmlEntities: false,
      ignoreDeclaration: false,
      ignorePiTags: false,
      transformTagName: false,
      transformAttributeName: false,
      updateTag: function(tagName, jPath, attrs) {
        return tagName;
      }
      // skipEmptyListItem: false
    };
    var buildOptions = function(options) {
      return Object.assign({}, defaultOptions, options);
    };
    exports2.buildOptions = buildOptions;
    exports2.defaultOptions = defaultOptions;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var require_xmlNode = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports2, module2) {
    "use strict";
    var XmlNode = class {
      constructor(tagname) {
        this.tagname = tagname;
        this.child = [];
        this[":@"] = {};
      }
      add(key, val2) {
        if (key === "__proto__") key = "#__proto__";
        this.child.push({ [key]: val2 });
      }
      addChild(node) {
        if (node.tagname === "__proto__") node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
          this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
        } else {
          this.child.push({ [node.tagname]: node.child });
        }
      }
    };
    module2.exports = XmlNode;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
var require_DocTypeReader = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports2, module2) {
    var util = require_util();
    function readDocType(xmlData, i) {
      const entities = {};
      if (xmlData[i + 3] === "O" && xmlData[i + 4] === "C" && xmlData[i + 5] === "T" && xmlData[i + 6] === "Y" && xmlData[i + 7] === "P" && xmlData[i + 8] === "E") {
        i = i + 9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for (; i < xmlData.length; i++) {
          if (xmlData[i] === "<" && !comment) {
            if (hasBody && isEntity(xmlData, i)) {
              i += 7;
              [entityName, val, i] = readEntityExp(xmlData, i + 1);
              if (val.indexOf("&") === -1)
                entities[validateEntityName(entityName)] = {
                  regx: RegExp(`&${entityName};`, "g"),
                  val
                };
            } else if (hasBody && isElement(xmlData, i)) i += 8;
            else if (hasBody && isAttlist(xmlData, i)) i += 8;
            else if (hasBody && isNotation(xmlData, i)) i += 9;
            else if (isComment) comment = true;
            else throw new Error("Invalid DOCTYPE");
            angleBracketsCount++;
            exp = "";
          } else if (xmlData[i] === ">") {
            if (comment) {
              if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
                comment = false;
                angleBracketsCount--;
              }
            } else {
              angleBracketsCount--;
            }
            if (angleBracketsCount === 0) {
              break;
            }
          } else if (xmlData[i] === "[") {
            hasBody = true;
          } else {
            exp += xmlData[i];
          }
        }
        if (angleBracketsCount !== 0) {
          throw new Error(`Unclosed DOCTYPE`);
        }
      } else {
        throw new Error(`Invalid Tag instead of DOCTYPE`);
      }
      return { entities, i };
    }
    function readEntityExp(xmlData, i) {
      let entityName2 = "";
      for (; i < xmlData.length && (xmlData[i] !== "'" && xmlData[i] !== '"'); i++) {
        entityName2 += xmlData[i];
      }
      entityName2 = entityName2.trim();
      if (entityName2.indexOf(" ") !== -1) throw new Error("External entites are not supported");
      const startChar = xmlData[i++];
      let val2 = "";
      for (; i < xmlData.length && xmlData[i] !== startChar; i++) {
        val2 += xmlData[i];
      }
      return [entityName2, val2, i];
    }
    function isComment(xmlData, i) {
      if (xmlData[i + 1] === "!" && xmlData[i + 2] === "-" && xmlData[i + 3] === "-") return true;
      return false;
    }
    function isEntity(xmlData, i) {
      if (xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "N" && xmlData[i + 4] === "T" && xmlData[i + 5] === "I" && xmlData[i + 6] === "T" && xmlData[i + 7] === "Y") return true;
      return false;
    }
    function isElement(xmlData, i) {
      if (xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "L" && xmlData[i + 4] === "E" && xmlData[i + 5] === "M" && xmlData[i + 6] === "E" && xmlData[i + 7] === "N" && xmlData[i + 8] === "T") return true;
      return false;
    }
    function isAttlist(xmlData, i) {
      if (xmlData[i + 1] === "!" && xmlData[i + 2] === "A" && xmlData[i + 3] === "T" && xmlData[i + 4] === "T" && xmlData[i + 5] === "L" && xmlData[i + 6] === "I" && xmlData[i + 7] === "S" && xmlData[i + 8] === "T") return true;
      return false;
    }
    function isNotation(xmlData, i) {
      if (xmlData[i + 1] === "!" && xmlData[i + 2] === "N" && xmlData[i + 3] === "O" && xmlData[i + 4] === "T" && xmlData[i + 5] === "A" && xmlData[i + 6] === "T" && xmlData[i + 7] === "I" && xmlData[i + 8] === "O" && xmlData[i + 9] === "N") return true;
      return false;
    }
    function validateEntityName(name) {
      if (util.isName(name))
        return name;
      else
        throw new Error(`Invalid entity name ${name}`);
    }
    module2.exports = readDocType;
  }
});

// node_modules/strnum/strnum.js
var require_strnum = __commonJS({
  "node_modules/strnum/strnum.js"(exports2, module2) {
    var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
    var numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
    if (!Number.parseInt && window.parseInt) {
      Number.parseInt = window.parseInt;
    }
    if (!Number.parseFloat && window.parseFloat) {
      Number.parseFloat = window.parseFloat;
    }
    var consider = {
      hex: true,
      leadingZeros: true,
      decimalPoint: ".",
      eNotation: true
      //skipLike: /regex/
    };
    function toNumber(str, options = {}) {
      options = Object.assign({}, consider, options);
      if (!str || typeof str !== "string") return str;
      let trimmedStr = str.trim();
      if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr)) return str;
      else if (options.hex && hexRegex.test(trimmedStr)) {
        return Number.parseInt(trimmedStr, 16);
      } else {
        const match = numRegex.exec(trimmedStr);
        if (match) {
          const sign = match[1];
          const leadingZeros = match[2];
          let numTrimmedByZeros = trimZeros(match[3]);
          const eNotation = match[4] || match[6];
          if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".") return str;
          else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".") return str;
          else {
            const num = Number(trimmedStr);
            const numStr = "" + num;
            if (numStr.search(/[eE]/) !== -1) {
              if (options.eNotation) return num;
              else return str;
            } else if (eNotation) {
              if (options.eNotation) return num;
              else return str;
            } else if (trimmedStr.indexOf(".") !== -1) {
              if (numStr === "0" && numTrimmedByZeros === "") return num;
              else if (numStr === numTrimmedByZeros) return num;
              else if (sign && numStr === "-" + numTrimmedByZeros) return num;
              else return str;
            }
            if (leadingZeros) {
              if (numTrimmedByZeros === numStr) return num;
              else if (sign + numTrimmedByZeros === numStr) return num;
              else return str;
            }
            if (trimmedStr === numStr) return num;
            else if (trimmedStr === sign + numStr) return num;
            return str;
          }
        } else {
          return str;
        }
      }
    }
    function trimZeros(numStr) {
      if (numStr && numStr.indexOf(".") !== -1) {
        numStr = numStr.replace(/0+$/, "");
        if (numStr === ".") numStr = "0";
        else if (numStr[0] === ".") numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".") numStr = numStr.substr(0, numStr.length - 1);
        return numStr;
      }
      return numStr;
    }
    module2.exports = toNumber;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
var require_OrderedObjParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports2, module2) {
    "use strict";
    var util = require_util();
    var xmlNode = require_xmlNode();
    var readDocType = require_DocTypeReader();
    var toNumber = require_strnum();
    var regx = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, util.nameRegexp);
    var OrderedObjParser = class {
      constructor(options) {
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.docTypeEntities = {};
        this.lastEntities = {
          "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
          "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
          "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
          "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
        };
        this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
        this.htmlEntities = {
          "space": { regex: /&(nbsp|#160);/g, val: " " },
          // "lt" : { regex: /&(lt|#60);/g, val: "<" },
          // "gt" : { regex: /&(gt|#62);/g, val: ">" },
          // "amp" : { regex: /&(amp|#38);/g, val: "&" },
          // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
          // "apos" : { regex: /&(apos|#39);/g, val: "'" },
          "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
          "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
          "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
          "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
          "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
          "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
          "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" }
        };
        this.addExternalEntities = addExternalEntities;
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
        this.addChild = addChild;
      }
    };
    function addExternalEntities(externalEntities) {
      const entKeys = Object.keys(externalEntities);
      for (let i = 0; i < entKeys.length; i++) {
        const ent = entKeys[i];
        this.lastEntities[ent] = {
          regex: new RegExp("&" + ent + ";", "g"),
          val: externalEntities[ent]
        };
      }
    }
    function parseTextData(val2, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
      if (val2 !== void 0) {
        if (this.options.trimValues && !dontTrim) {
          val2 = val2.trim();
        }
        if (val2.length > 0) {
          if (!escapeEntities) val2 = this.replaceEntitiesValue(val2);
          const newval = this.options.tagValueProcessor(tagName, val2, jPath, hasAttributes, isLeafNode);
          if (newval === null || newval === void 0) {
            return val2;
          } else if (typeof newval !== typeof val2 || newval !== val2) {
            return newval;
          } else if (this.options.trimValues) {
            return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
          } else {
            const trimmedVal = val2.trim();
            if (trimmedVal === val2) {
              return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
            } else {
              return val2;
            }
          }
        }
      }
    }
    function resolveNameSpace(tagname) {
      if (this.options.removeNSPrefix) {
        const tags = tagname.split(":");
        const prefix = tagname.charAt(0) === "/" ? "/" : "";
        if (tags[0] === "xmlns") {
          return "";
        }
        if (tags.length === 2) {
          tagname = prefix + tags[1];
        }
      }
      return tagname;
    }
    var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    function buildAttributesMap(attrStr, jPath, tagName) {
      if (!this.options.ignoreAttributes && typeof attrStr === "string") {
        const matches = util.getAllMatches(attrStr, attrsRegx);
        const len = matches.length;
        const attrs = {};
        for (let i = 0; i < len; i++) {
          const attrName = this.resolveNameSpace(matches[i][1]);
          let oldVal = matches[i][4];
          let aName = this.options.attributeNamePrefix + attrName;
          if (attrName.length) {
            if (this.options.transformAttributeName) {
              aName = this.options.transformAttributeName(aName);
            }
            if (aName === "__proto__") aName = "#__proto__";
            if (oldVal !== void 0) {
              if (this.options.trimValues) {
                oldVal = oldVal.trim();
              }
              oldVal = this.replaceEntitiesValue(oldVal);
              const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
              if (newVal === null || newVal === void 0) {
                attrs[aName] = oldVal;
              } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                attrs[aName] = newVal;
              } else {
                attrs[aName] = parseValue(
                  oldVal,
                  this.options.parseAttributeValue,
                  this.options.numberParseOptions
                );
              }
            } else if (this.options.allowBooleanAttributes) {
              attrs[aName] = true;
            }
          }
        }
        if (!Object.keys(attrs).length) {
          return;
        }
        if (this.options.attributesGroupName) {
          const attrCollection = {};
          attrCollection[this.options.attributesGroupName] = attrs;
          return attrCollection;
        }
        return attrs;
      }
    }
    var parseXml = function(xmlData) {
      xmlData = xmlData.replace(/\r\n?/g, "\n");
      const xmlObj = new xmlNode("!xml");
      let currentNode = xmlObj;
      let textData = "";
      let jPath = "";
      for (let i = 0; i < xmlData.length; i++) {
        const ch = xmlData[i];
        if (ch === "<") {
          if (xmlData[i + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
            let tagName = xmlData.substring(i + 2, closeIndex).trim();
            if (this.options.removeNSPrefix) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
              }
            }
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode) {
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
            }
            const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
            if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
              throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
            }
            let propIndex = 0;
            if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
              propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
              this.tagsNodeStack.pop();
            } else {
              propIndex = jPath.lastIndexOf(".");
            }
            jPath = jPath.substring(0, propIndex);
            currentNode = this.tagsNodeStack.pop();
            textData = "";
            i = closeIndex;
          } else if (xmlData[i + 1] === "?") {
            let tagData = readTagExp(xmlData, i, false, "?>");
            if (!tagData) throw new Error("Pi Tag is not closed.");
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
            } else {
              const childNode = new xmlNode(tagData.tagName);
              childNode.add(this.options.textNodeName, "");
              if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
              }
              this.addChild(currentNode, childNode, jPath);
            }
            i = tagData.closeIndex + 1;
          } else if (xmlData.substr(i + 1, 3) === "!--") {
            const endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              const comment = xmlData.substring(i + 4, endIndex - 2);
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
            }
            i = endIndex;
          } else if (xmlData.substr(i + 1, 2) === "!D") {
            const result = readDocType(xmlData, i);
            this.docTypeEntities = result.entities;
            i = result.i;
          } else if (xmlData.substr(i + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
            const tagExp = xmlData.substring(i + 9, closeIndex);
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.cdataPropName) {
              currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
            } else {
              let val2 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
              if (val2 == void 0) val2 = "";
              currentNode.add(this.options.textNodeName, val2);
            }
            i = closeIndex + 2;
          } else {
            let result = readTagExp(xmlData, i, this.options.removeNSPrefix);
            let tagName = result.tagName;
            let tagExp = result.tagExp;
            let attrExpPresent = result.attrExpPresent;
            let closeIndex = result.closeIndex;
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode && textData) {
              if (currentNode.tagname !== "!xml") {
                textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
              }
            }
            const lastTag = currentNode;
            if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
              currentNode = this.tagsNodeStack.pop();
              jPath = jPath.substring(0, jPath.lastIndexOf("."));
            }
            if (tagName !== xmlObj.tagname) {
              jPath += jPath ? "." + tagName : tagName;
            }
            if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
              let tagContent = "";
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                i = result.closeIndex;
              } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                i = result.closeIndex;
              } else {
                const result2 = this.readStopNodeData(xmlData, tagName, closeIndex + 1);
                if (!result2) throw new Error(`Unexpected end of ${tagName}`);
                i = result2.i;
                tagContent = result2.tagContent;
              }
              const childNode = new xmlNode(tagName);
              if (tagName !== tagExp && attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
              }
              if (tagContent) {
                tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
              }
              jPath = jPath.substr(0, jPath.lastIndexOf("."));
              childNode.add(this.options.textNodeName, tagContent);
              this.addChild(currentNode, childNode, jPath);
            } else {
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                if (this.options.transformTagName) {
                  tagName = this.options.transformTagName(tagName);
                }
                const childNode = new xmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
              } else {
                const childNode = new xmlNode(tagName);
                this.tagsNodeStack.push(currentNode);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                currentNode = childNode;
              }
              textData = "";
              i = closeIndex;
            }
          }
        } else {
          textData += xmlData[i];
        }
      }
      return xmlObj.child;
    };
    function addChild(currentNode, childNode, jPath) {
      const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
      if (result === false) {
      } else if (typeof result === "string") {
        childNode.tagname = result;
        currentNode.addChild(childNode);
      } else {
        currentNode.addChild(childNode);
      }
    }
    var replaceEntitiesValue = function(val2) {
      if (this.options.processEntities) {
        for (let entityName2 in this.docTypeEntities) {
          const entity = this.docTypeEntities[entityName2];
          val2 = val2.replace(entity.regx, entity.val);
        }
        for (let entityName2 in this.lastEntities) {
          const entity = this.lastEntities[entityName2];
          val2 = val2.replace(entity.regex, entity.val);
        }
        if (this.options.htmlEntities) {
          for (let entityName2 in this.htmlEntities) {
            const entity = this.htmlEntities[entityName2];
            val2 = val2.replace(entity.regex, entity.val);
          }
        }
        val2 = val2.replace(this.ampEntity.regex, this.ampEntity.val);
      }
      return val2;
    };
    function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
      if (textData) {
        if (isLeafNode === void 0) isLeafNode = Object.keys(currentNode.child).length === 0;
        textData = this.parseTextData(
          textData,
          currentNode.tagname,
          jPath,
          false,
          currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
          isLeafNode
        );
        if (textData !== void 0 && textData !== "")
          currentNode.add(this.options.textNodeName, textData);
        textData = "";
      }
      return textData;
    }
    function isItStopNode(stopNodes, jPath, currentTagName) {
      const allNodesExp = "*." + currentTagName;
      for (const stopNodePath in stopNodes) {
        const stopNodeExp = stopNodes[stopNodePath];
        if (allNodesExp === stopNodeExp || jPath === stopNodeExp) return true;
      }
      return false;
    }
    function tagExpWithClosingIndex(xmlData, i, closingChar = ">") {
      let attrBoundary;
      let tagExp = "";
      for (let index = i; index < xmlData.length; index++) {
        let ch = xmlData[index];
        if (attrBoundary) {
          if (ch === attrBoundary) attrBoundary = "";
        } else if (ch === '"' || ch === "'") {
          attrBoundary = ch;
        } else if (ch === closingChar[0]) {
          if (closingChar[1]) {
            if (xmlData[index + 1] === closingChar[1]) {
              return {
                data: tagExp,
                index
              };
            }
          } else {
            return {
              data: tagExp,
              index
            };
          }
        } else if (ch === "	") {
          ch = " ";
        }
        tagExp += ch;
      }
    }
    function findClosingIndex(xmlData, str, i, errMsg) {
      const closingIndex = xmlData.indexOf(str, i);
      if (closingIndex === -1) {
        throw new Error(errMsg);
      } else {
        return closingIndex + str.length - 1;
      }
    }
    function readTagExp(xmlData, i, removeNSPrefix, closingChar = ">") {
      const result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
      if (!result) return;
      let tagExp = result.data;
      const closeIndex = result.index;
      const separatorIndex = tagExp.search(/\s/);
      let tagName = tagExp;
      let attrExpPresent = true;
      if (separatorIndex !== -1) {
        tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, "");
        tagExp = tagExp.substr(separatorIndex + 1);
      }
      if (removeNSPrefix) {
        const colonIndex = tagName.indexOf(":");
        if (colonIndex !== -1) {
          tagName = tagName.substr(colonIndex + 1);
          attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
        }
      }
      return {
        tagName,
        tagExp,
        closeIndex,
        attrExpPresent
      };
    }
    function readStopNodeData(xmlData, tagName, i) {
      const startIndex = i;
      let openTagCount = 1;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === "<") {
          if (xmlData[i + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
            let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
            if (closeTagName === tagName) {
              openTagCount--;
              if (openTagCount === 0) {
                return {
                  tagContent: xmlData.substring(startIndex, i),
                  i: closeIndex
                };
              }
            }
            i = closeIndex;
          } else if (xmlData[i + 1] === "?") {
            const closeIndex = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
            i = closeIndex;
          } else if (xmlData.substr(i + 1, 3) === "!--") {
            const closeIndex = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
            i = closeIndex;
          } else if (xmlData.substr(i + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
            i = closeIndex;
          } else {
            const tagData = readTagExp(xmlData, i, ">");
            if (tagData) {
              const openTagName = tagData && tagData.tagName;
              if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                openTagCount++;
              }
              i = tagData.closeIndex;
            }
          }
        }
      }
    }
    function parseValue(val2, shouldParse, options) {
      if (shouldParse && typeof val2 === "string") {
        const newval = val2.trim();
        if (newval === "true") return true;
        else if (newval === "false") return false;
        else return toNumber(val2, options);
      } else {
        if (util.isExist(val2)) {
          return val2;
        } else {
          return "";
        }
      }
    }
    module2.exports = OrderedObjParser;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/node2json.js
var require_node2json = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports2) {
    "use strict";
    function prettify(node, options) {
      return compress(node, options);
    }
    function compress(arr, options, jPath) {
      let text;
      const compressedObj = {};
      for (let i = 0; i < arr.length; i++) {
        const tagObj = arr[i];
        const property = propName(tagObj);
        let newJpath = "";
        if (jPath === void 0) newJpath = property;
        else newJpath = jPath + "." + property;
        if (property === options.textNodeName) {
          if (text === void 0) text = tagObj[property];
          else text += "" + tagObj[property];
        } else if (property === void 0) {
          continue;
        } else if (tagObj[property]) {
          let val2 = compress(tagObj[property], options, newJpath);
          const isLeaf = isLeafTag(val2, options);
          if (tagObj[":@"]) {
            assignAttributes(val2, tagObj[":@"], newJpath, options);
          } else if (Object.keys(val2).length === 1 && val2[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
            val2 = val2[options.textNodeName];
          } else if (Object.keys(val2).length === 0) {
            if (options.alwaysCreateTextNode) val2[options.textNodeName] = "";
            else val2 = "";
          }
          if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
            if (!Array.isArray(compressedObj[property])) {
              compressedObj[property] = [compressedObj[property]];
            }
            compressedObj[property].push(val2);
          } else {
            if (options.isArray(property, newJpath, isLeaf)) {
              compressedObj[property] = [val2];
            } else {
              compressedObj[property] = val2;
            }
          }
        }
      }
      if (typeof text === "string") {
        if (text.length > 0) compressedObj[options.textNodeName] = text;
      } else if (text !== void 0) compressedObj[options.textNodeName] = text;
      return compressedObj;
    }
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key !== ":@") return key;
      }
    }
    function assignAttributes(obj, attrMap, jpath, options) {
      if (attrMap) {
        const keys = Object.keys(attrMap);
        const len = keys.length;
        for (let i = 0; i < len; i++) {
          const atrrName = keys[i];
          if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
            obj[atrrName] = [attrMap[atrrName]];
          } else {
            obj[atrrName] = attrMap[atrrName];
          }
        }
      }
    }
    function isLeafTag(obj, options) {
      const { textNodeName } = options;
      const propCount = Object.keys(obj).length;
      if (propCount === 0) {
        return true;
      }
      if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
        return true;
      }
      return false;
    }
    exports2.prettify = prettify;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var require_XMLParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports2, module2) {
    var { buildOptions } = require_OptionsBuilder();
    var OrderedObjParser = require_OrderedObjParser();
    var { prettify } = require_node2json();
    var validator = require_validator();
    var XMLParser = class {
      constructor(options) {
        this.externalEntities = {};
        this.options = buildOptions(options);
      }
      /**
       * Parse XML dats to JS object 
       * @param {string|Buffer} xmlData 
       * @param {boolean|Object} validationOption 
       */
      parse(xmlData, validationOption) {
        if (typeof xmlData === "string") {
        } else if (xmlData.toString) {
          xmlData = xmlData.toString();
        } else {
          throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
          if (validationOption === true) validationOption = {};
          const result = validator.validate(xmlData, validationOption);
          if (result !== true) {
            throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
          }
        }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === void 0) return orderedResult;
        else return prettify(orderedResult, this.options);
      }
      /**
       * Add Entity which is not by default supported by this library
       * @param {string} key 
       * @param {string} value 
       */
      addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
          throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
          throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
          throw new Error("An entity with value '&' is not permitted");
        } else {
          this.externalEntities[key] = value;
        }
      }
    };
    module2.exports = XMLParser;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
var require_orderedJs2Xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports2, module2) {
    var EOL = "\n";
    function toXml(jArray, options) {
      let indentation = "";
      if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
      }
      return arrToStr(jArray, options, "", indentation);
    }
    function arrToStr(arr, options, jPath, indentation) {
      let xmlStr = "";
      let isPreviousElementTag = false;
      for (let i = 0; i < arr.length; i++) {
        const tagObj = arr[i];
        const tagName = propName(tagObj);
        let newJPath = "";
        if (jPath.length === 0) newJPath = tagName;
        else newJPath = `${jPath}.${tagName}`;
        if (tagName === options.textNodeName) {
          let tagText = tagObj[tagName];
          if (!isStopNode(newJPath, options)) {
            tagText = options.tagValueProcessor(tagName, tagText);
            tagText = replaceEntitiesValue(tagText, options);
          }
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += tagText;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.cdataPropName) {
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.commentPropName) {
          xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
          isPreviousElementTag = true;
          continue;
        } else if (tagName[0] === "?") {
          const attStr2 = attr_to_str(tagObj[":@"], options);
          const tempInd = tagName === "?xml" ? "" : indentation;
          let piTextNodeName = tagObj[tagName][0][options.textNodeName];
          piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
          xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
          isPreviousElementTag = true;
          continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
          newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
          if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
          else xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
          xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
          xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
          xmlStr += tagStart + ">";
          if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
            xmlStr += indentation + options.indentBy + tagValue + indentation;
          } else {
            xmlStr += tagValue;
          }
          xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
      }
      return xmlStr;
    }
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key !== ":@") return key;
      }
    }
    function attr_to_str(attrMap, options) {
      let attrStr = "";
      if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
          let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
          attrVal = replaceEntitiesValue(attrVal, options);
          if (attrVal === true && options.suppressBooleanAttributes) {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
          } else {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
          }
        }
      }
      return attrStr;
    }
    function isStopNode(jPath, options) {
      jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
      let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
      for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
      }
      return false;
    }
    function replaceEntitiesValue(textValue, options) {
      if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i = 0; i < options.entities.length; i++) {
          const entity = options.entities[i];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    }
    module2.exports = toXml;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js
var require_json2xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports2, module2) {
    "use strict";
    var buildFromOrderedJs = require_orderedJs2Xml();
    var defaultOptions = {
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      cdataPropName: false,
      format: false,
      indentBy: "  ",
      suppressEmptyNode: false,
      suppressUnpairedNode: true,
      suppressBooleanAttributes: true,
      tagValueProcessor: function(key, a) {
        return a;
      },
      attributeValueProcessor: function(attrName, a) {
        return a;
      },
      preserveOrder: false,
      commentPropName: false,
      unpairedTags: [],
      entities: [
        { regex: new RegExp("&", "g"), val: "&amp;" },
        //it must be on top
        { regex: new RegExp(">", "g"), val: "&gt;" },
        { regex: new RegExp("<", "g"), val: "&lt;" },
        { regex: new RegExp("'", "g"), val: "&apos;" },
        { regex: new RegExp('"', "g"), val: "&quot;" }
      ],
      processEntities: true,
      stopNodes: [],
      // transformTagName: false,
      // transformAttributeName: false,
      oneListGroup: false
    };
    function Builder(options) {
      this.options = Object.assign({}, defaultOptions, options);
      if (this.options.ignoreAttributes || this.options.attributesGroupName) {
        this.isAttribute = function() {
          return false;
        };
      } else {
        this.attrPrefixLen = this.options.attributeNamePrefix.length;
        this.isAttribute = isAttribute;
      }
      this.processTextOrObjNode = processTextOrObjNode;
      if (this.options.format) {
        this.indentate = indentate;
        this.tagEndChar = ">\n";
        this.newLine = "\n";
      } else {
        this.indentate = function() {
          return "";
        };
        this.tagEndChar = ">";
        this.newLine = "";
      }
    }
    Builder.prototype.build = function(jObj) {
      if (this.options.preserveOrder) {
        return buildFromOrderedJs(jObj, this.options);
      } else {
        if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
          jObj = {
            [this.options.arrayNodeName]: jObj
          };
        }
        return this.j2x(jObj, 0).val;
      }
    };
    Builder.prototype.j2x = function(jObj, level) {
      let attrStr = "";
      let val2 = "";
      for (let key in jObj) {
        if (typeof jObj[key] === "undefined") {
        } else if (jObj[key] === null) {
          if (key[0] === "?") val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
          else val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
        } else if (jObj[key] instanceof Date) {
          val2 += this.buildTextValNode(jObj[key], key, "", level);
        } else if (typeof jObj[key] !== "object") {
          const attr = this.isAttribute(key);
          if (attr) {
            attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
          } else {
            if (key === this.options.textNodeName) {
              let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
              val2 += this.replaceEntitiesValue(newval);
            } else {
              val2 += this.buildTextValNode(jObj[key], key, "", level);
            }
          }
        } else if (Array.isArray(jObj[key])) {
          const arrLen = jObj[key].length;
          let listTagVal = "";
          for (let j = 0; j < arrLen; j++) {
            const item = jObj[key][j];
            if (typeof item === "undefined") {
            } else if (item === null) {
              if (key[0] === "?") val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
              else val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
            } else if (typeof item === "object") {
              if (this.options.oneListGroup) {
                listTagVal += this.j2x(item, level + 1).val;
              } else {
                listTagVal += this.processTextOrObjNode(item, key, level);
              }
            } else {
              listTagVal += this.buildTextValNode(item, key, "", level);
            }
          }
          if (this.options.oneListGroup) {
            listTagVal = this.buildObjectNode(listTagVal, key, "", level);
          }
          val2 += listTagVal;
        } else {
          if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
            const Ks = Object.keys(jObj[key]);
            const L = Ks.length;
            for (let j = 0; j < L; j++) {
              attrStr += this.buildAttrPairStr(Ks[j], "" + jObj[key][Ks[j]]);
            }
          } else {
            val2 += this.processTextOrObjNode(jObj[key], key, level);
          }
        }
      }
      return { attrStr, val: val2 };
    };
    Builder.prototype.buildAttrPairStr = function(attrName, val2) {
      val2 = this.options.attributeValueProcessor(attrName, "" + val2);
      val2 = this.replaceEntitiesValue(val2);
      if (this.options.suppressBooleanAttributes && val2 === "true") {
        return " " + attrName;
      } else return " " + attrName + '="' + val2 + '"';
    };
    function processTextOrObjNode(object, key, level) {
      const result = this.j2x(object, level + 1);
      if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
        return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
      } else {
        return this.buildObjectNode(result.val, key, result.attrStr, level);
      }
    }
    Builder.prototype.buildObjectNode = function(val2, key, attrStr, level) {
      if (val2 === "") {
        if (key[0] === "?") return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        else {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        }
      } else {
        let tagEndExp = "</" + key + this.tagEndChar;
        let piClosingChar = "";
        if (key[0] === "?") {
          piClosingChar = "?";
          tagEndExp = "";
        }
        if (attrStr && val2.indexOf("<") === -1) {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val2 + tagEndExp;
        } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
          return this.indentate(level) + `<!--${val2}-->` + this.newLine;
        } else {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val2 + this.indentate(level) + tagEndExp;
        }
      }
    };
    Builder.prototype.closeTag = function(key) {
      let closeTag = "";
      if (this.options.unpairedTags.indexOf(key) !== -1) {
        if (!this.options.suppressUnpairedNode) closeTag = "/";
      } else if (this.options.suppressEmptyNode) {
        closeTag = "/";
      } else {
        closeTag = `></${key}`;
      }
      return closeTag;
    };
    Builder.prototype.buildTextValNode = function(val2, key, attrStr, level) {
      if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
        return this.indentate(level) + `<![CDATA[${val2}]]>` + this.newLine;
      } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
        return this.indentate(level) + `<!--${val2}-->` + this.newLine;
      } else if (key[0] === "?") {
        return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
      } else {
        let textValue = this.options.tagValueProcessor(key, val2);
        textValue = this.replaceEntitiesValue(textValue);
        if (textValue === "") {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        } else {
          return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
        }
      }
    };
    Builder.prototype.replaceEntitiesValue = function(textValue) {
      if (textValue && textValue.length > 0 && this.options.processEntities) {
        for (let i = 0; i < this.options.entities.length; i++) {
          const entity = this.options.entities[i];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    };
    function indentate(level) {
      return this.options.indentBy.repeat(level);
    }
    function isAttribute(name) {
      if (name.startsWith(this.options.attributeNamePrefix)) {
        return name.substr(this.attrPrefixLen);
      } else {
        return false;
      }
    }
    module2.exports = Builder;
  }
});

// node_modules/fast-xml-parser/src/fxp.js
var require_fxp = __commonJS({
  "node_modules/fast-xml-parser/src/fxp.js"(exports2, module2) {
    "use strict";
    var validator = require_validator();
    var XMLParser = require_XMLParser();
    var XMLBuilder = require_json2xml();
    module2.exports = {
      XMLParser,
      XMLValidator: validator,
      XMLBuilder
    };
  }
});

// node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js
var require_protocols = __commonJS({
  "node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var protocols_exports = {};
    __export2(protocols_exports, {
      _toBool: () => _toBool,
      _toNum: () => _toNum,
      _toStr: () => _toStr,
      awsExpectUnion: () => awsExpectUnion,
      loadRestJsonErrorCode: () => loadRestJsonErrorCode,
      loadRestXmlErrorCode: () => loadRestXmlErrorCode,
      parseJsonBody: () => parseJsonBody,
      parseJsonErrorBody: () => parseJsonErrorBody,
      parseXmlBody: () => parseXmlBody,
      parseXmlErrorBody: () => parseXmlErrorBody
    });
    module2.exports = __toCommonJS2(protocols_exports);
    var _toStr = /* @__PURE__ */ __name((val2) => {
      if (val2 == null) {
        return val2;
      }
      if (typeof val2 === "number" || typeof val2 === "bigint") {
        const warning = new Error(`Received number ${val2} where a string was expected.`);
        warning.name = "Warning";
        console.warn(warning);
        return String(val2);
      }
      if (typeof val2 === "boolean") {
        const warning = new Error(`Received boolean ${val2} where a string was expected.`);
        warning.name = "Warning";
        console.warn(warning);
        return String(val2);
      }
      return val2;
    }, "_toStr");
    var _toBool = /* @__PURE__ */ __name((val2) => {
      if (val2 == null) {
        return val2;
      }
      if (typeof val2 === "number") {
      }
      if (typeof val2 === "string") {
        const lowercase = val2.toLowerCase();
        if (val2 !== "" && lowercase !== "false" && lowercase !== "true") {
          const warning = new Error(`Received string "${val2}" where a boolean was expected.`);
          warning.name = "Warning";
          console.warn(warning);
        }
        return val2 !== "" && lowercase !== "false";
      }
      return val2;
    }, "_toBool");
    var _toNum = /* @__PURE__ */ __name((val2) => {
      if (val2 == null) {
        return val2;
      }
      if (typeof val2 === "boolean") {
      }
      if (typeof val2 === "string") {
        const num = Number(val2);
        if (num.toString() !== val2) {
          const warning = new Error(`Received string "${val2}" where a number was expected.`);
          warning.name = "Warning";
          console.warn(warning);
          return val2;
        }
        return num;
      }
      return val2;
    }, "_toNum");
    var import_smithy_client = require_dist_cjs32();
    var awsExpectUnion = /* @__PURE__ */ __name((value) => {
      if (value == null) {
        return void 0;
      }
      if (typeof value === "object" && "__type" in value) {
        delete value.__type;
      }
      return (0, import_smithy_client.expectUnion)(value);
    }, "awsExpectUnion");
    var import_smithy_client2 = require_dist_cjs32();
    var collectBodyString = /* @__PURE__ */ __name((streamBody, context) => (0, import_smithy_client2.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body)), "collectBodyString");
    var parseJsonBody = /* @__PURE__ */ __name((streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        try {
          return JSON.parse(encoded);
        } catch (e) {
          if ((e == null ? void 0 : e.name) === "SyntaxError") {
            Object.defineProperty(e, "$responseBodyText", {
              value: encoded
            });
          }
          throw e;
        }
      }
      return {};
    }), "parseJsonBody");
    var parseJsonErrorBody = /* @__PURE__ */ __name(async (errorBody, context) => {
      const value = await parseJsonBody(errorBody, context);
      value.message = value.message ?? value.Message;
      return value;
    }, "parseJsonErrorBody");
    var loadRestJsonErrorCode = /* @__PURE__ */ __name((output, data) => {
      const findKey = /* @__PURE__ */ __name((object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase()), "findKey");
      const sanitizeErrorCode = /* @__PURE__ */ __name((rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
          cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
          cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
          cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
          cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
      }, "sanitizeErrorCode");
      const headerKey = findKey(output.headers, "x-amzn-errortype");
      if (headerKey !== void 0) {
        return sanitizeErrorCode(output.headers[headerKey]);
      }
      if (data.code !== void 0) {
        return sanitizeErrorCode(data.code);
      }
      if (data["__type"] !== void 0) {
        return sanitizeErrorCode(data["__type"]);
      }
    }, "loadRestJsonErrorCode");
    var import_smithy_client3 = require_dist_cjs32();
    var import_fast_xml_parser = require_fxp();
    var parseXmlBody = /* @__PURE__ */ __name((streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        const parser = new import_fast_xml_parser.XMLParser({
          attributeNamePrefix: "",
          htmlEntities: true,
          ignoreAttributes: false,
          ignoreDeclaration: true,
          parseTagValue: false,
          trimValues: false,
          tagValueProcessor: (_, val2) => val2.trim() === "" && val2.includes("\n") ? "" : void 0
        });
        parser.addEntity("#xD", "\r");
        parser.addEntity("#10", "\n");
        let parsedObj;
        try {
          parsedObj = parser.parse(encoded, true);
        } catch (e) {
          if (e && typeof e === "object") {
            Object.defineProperty(e, "$responseBodyText", {
              value: encoded
            });
          }
          throw e;
        }
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
          parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
          delete parsedObjToReturn[textNodeName];
        }
        return (0, import_smithy_client3.getValueFromTextNode)(parsedObjToReturn);
      }
      return {};
    }), "parseXmlBody");
    var parseXmlErrorBody = /* @__PURE__ */ __name(async (errorBody, context) => {
      const value = await parseXmlBody(errorBody, context);
      if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
      }
      return value;
    }, "parseXmlErrorBody");
    var loadRestXmlErrorCode = /* @__PURE__ */ __name((output, data) => {
      var _a;
      if (((_a = data == null ? void 0 : data.Error) == null ? void 0 : _a.Code) !== void 0) {
        return data.Error.Code;
      }
      if ((data == null ? void 0 : data.Code) !== void 0) {
        return data.Code;
      }
      if (output.statusCode == 404) {
        return "NotFound";
      }
    }, "loadRestXmlErrorCode");
  }
});

// node_modules/@aws-sdk/core/dist-cjs/index.js
var require_dist_cjs38 = __commonJS({
  "node_modules/@aws-sdk/core/dist-cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_client(), exports2);
    tslib_1.__exportStar(require_httpAuthSchemes(), exports2);
    tslib_1.__exportStar(require_protocols(), exports2);
  }
});

// node_modules/@aws-sdk/client-cloudwatch/dist-cjs/auth/httpAuthSchemeProvider.js
var require_httpAuthSchemeProvider = __commonJS({
  "node_modules/@aws-sdk/client-cloudwatch/dist-cjs/auth/httpAuthSchemeProvider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.resolveHttpAuthSchemeConfig = exports2.defaultCloudWatchHttpAuthSchemeProvider = exports2.defaultCloudWatchHttpAuthSchemeParametersProvider = void 0;
    var core_1 = require_dist_cjs38();
    var util_middleware_1 = require_dist_cjs10();
    var defaultCloudWatchHttpAuthSchemeParametersProvider = async (config, context, input) => {
      return {
        operation: (0, util_middleware_1.getSmithyContext)(context).operation,
        region: await (0, util_middleware_1.normalizeProvider)(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    exports2.defaultCloudWatchHttpAuthSchemeParametersProvider = defaultCloudWatchHttpAuthSchemeParametersProvider;
    function createAwsAuthSigv4HttpAuthOption(authParameters) {
      return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
          name: "monitoring",
          region: authParameters.region
        },
        propertiesExtractor: (config, context) => ({
          signingProperties: {
            config,
            context
          }
        })
      };
    }
    var defaultCloudWatchHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
      }
      return options;
    };
    exports2.defaultCloudWatchHttpAuthSchemeProvider = defaultCloudWatchHttpAuthSchemeProvider;
    var resolveHttpAuthSchemeConfig = (config) => {
      const config_0 = (0, core_1.resolveAwsSdkSigV4Config)(config);
      return {
        ...config_0
      };
    };
    exports2.resolveHttpAuthSchemeConfig = resolveHttpAuthSchemeConfig;
  }
});

// node_modules/@aws-sdk/client-cloudwatch/package.json
var require_package = __commonJS({
  "node_modules/@aws-sdk/client-cloudwatch/package.json"(exports2, module2) {
    module2.exports = {
      name: "@aws-sdk/client-cloudwatch",
      description: "AWS SDK for JavaScript Cloudwatch Client for Node.js, Browser and React Native",
      version: "3.583.0",
      scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-cloudwatch",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo cloudwatch"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "3.0.0",
        "@aws-crypto/sha256-js": "3.0.0",
        "@aws-sdk/client-sso-oidc": "3.583.0",
        "@aws-sdk/client-sts": "3.583.0",
        "@aws-sdk/core": "3.582.0",
        "@aws-sdk/credential-provider-node": "3.583.0",
        "@aws-sdk/middleware-host-header": "3.577.0",
        "@aws-sdk/middleware-logger": "3.577.0",
        "@aws-sdk/middleware-recursion-detection": "3.577.0",
        "@aws-sdk/middleware-user-agent": "3.583.0",
        "@aws-sdk/region-config-resolver": "3.577.0",
        "@aws-sdk/types": "3.577.0",
        "@aws-sdk/util-endpoints": "3.583.0",
        "@aws-sdk/util-user-agent-browser": "3.577.0",
        "@aws-sdk/util-user-agent-node": "3.577.0",
        "@smithy/config-resolver": "^3.0.0",
        "@smithy/core": "^2.0.1",
        "@smithy/fetch-http-handler": "^3.0.1",
        "@smithy/hash-node": "^3.0.0",
        "@smithy/invalid-dependency": "^3.0.0",
        "@smithy/middleware-compression": "^3.0.0",
        "@smithy/middleware-content-length": "^3.0.0",
        "@smithy/middleware-endpoint": "^3.0.0",
        "@smithy/middleware-retry": "^3.0.1",
        "@smithy/middleware-serde": "^3.0.0",
        "@smithy/middleware-stack": "^3.0.0",
        "@smithy/node-config-provider": "^3.0.0",
        "@smithy/node-http-handler": "^3.0.0",
        "@smithy/protocol-http": "^4.0.0",
        "@smithy/smithy-client": "^3.0.1",
        "@smithy/types": "^3.0.0",
        "@smithy/url-parser": "^3.0.0",
        "@smithy/util-base64": "^3.0.0",
        "@smithy/util-body-length-browser": "^3.0.0",
        "@smithy/util-body-length-node": "^3.0.0",
        "@smithy/util-defaults-mode-browser": "^3.0.1",
        "@smithy/util-defaults-mode-node": "^3.0.1",
        "@smithy/util-endpoints": "^2.0.0",
        "@smithy/util-middleware": "^3.0.0",
        "@smithy/util-retry": "^3.0.0",
        "@smithy/util-utf8": "^3.0.0",
        "@smithy/util-waiter": "^3.0.0",
        tslib: "^2.6.2"
      },
      devDependencies: {
        "@tsconfig/node16": "16.1.3",
        "@types/node": "^16.18.96",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~4.9.5"
      },
      engines: {
        node: ">=16.0.0"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cloudwatch",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-cloudwatch"
      }
    };
  }
});

// node_modules/@aws-sdk/credential-provider-env/dist-cjs/index.js
var require_dist_cjs39 = __commonJS({
  "node_modules/@aws-sdk/credential-provider-env/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      ENV_CREDENTIAL_SCOPE: () => ENV_CREDENTIAL_SCOPE,
      ENV_EXPIRATION: () => ENV_EXPIRATION,
      ENV_KEY: () => ENV_KEY,
      ENV_SECRET: () => ENV_SECRET,
      ENV_SESSION: () => ENV_SESSION,
      fromEnv: () => fromEnv
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_property_provider = require_dist_cjs12();
    var ENV_KEY = "AWS_ACCESS_KEY_ID";
    var ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
    var ENV_SESSION = "AWS_SESSION_TOKEN";
    var ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
    var ENV_CREDENTIAL_SCOPE = "AWS_CREDENTIAL_SCOPE";
    var fromEnv = /* @__PURE__ */ __name((init) => async () => {
      var _a;
      (_a = init == null ? void 0 : init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-env", "fromEnv");
      const accessKeyId = process.env[ENV_KEY];
      const secretAccessKey = process.env[ENV_SECRET];
      const sessionToken = process.env[ENV_SESSION];
      const expiry = process.env[ENV_EXPIRATION];
      const credentialScope = process.env[ENV_CREDENTIAL_SCOPE];
      if (accessKeyId && secretAccessKey) {
        return {
          accessKeyId,
          secretAccessKey,
          ...sessionToken && { sessionToken },
          ...expiry && { expiration: new Date(expiry) },
          ...credentialScope && { credentialScope }
        };
      }
      throw new import_property_provider.CredentialsProviderError("Unable to find environment variable credentials.");
    }, "fromEnv");
  }
});

// node_modules/@smithy/credential-provider-imds/dist-cjs/index.js
var require_dist_cjs40 = __commonJS({
  "node_modules/@smithy/credential-provider-imds/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      DEFAULT_MAX_RETRIES: () => DEFAULT_MAX_RETRIES,
      DEFAULT_TIMEOUT: () => DEFAULT_TIMEOUT,
      ENV_CMDS_AUTH_TOKEN: () => ENV_CMDS_AUTH_TOKEN,
      ENV_CMDS_FULL_URI: () => ENV_CMDS_FULL_URI,
      ENV_CMDS_RELATIVE_URI: () => ENV_CMDS_RELATIVE_URI,
      Endpoint: () => Endpoint,
      fromContainerMetadata: () => fromContainerMetadata,
      fromInstanceMetadata: () => fromInstanceMetadata,
      getInstanceMetadataEndpoint: () => getInstanceMetadataEndpoint,
      httpRequest: () => httpRequest,
      providerConfigFromInit: () => providerConfigFromInit
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_url = require("url");
    var import_property_provider = require_dist_cjs12();
    var import_buffer = require("buffer");
    var import_http = require("http");
    function httpRequest(options) {
      return new Promise((resolve, reject) => {
        var _a;
        const req = (0, import_http.request)({
          method: "GET",
          ...options,
          // Node.js http module doesn't accept hostname with square brackets
          // Refs: https://github.com/nodejs/node/issues/39738
          hostname: (_a = options.hostname) == null ? void 0 : _a.replace(/^\[(.+)\]$/, "$1")
        });
        req.on("error", (err) => {
          reject(Object.assign(new import_property_provider.ProviderError("Unable to connect to instance metadata service"), err));
          req.destroy();
        });
        req.on("timeout", () => {
          reject(new import_property_provider.ProviderError("TimeoutError from instance metadata service"));
          req.destroy();
        });
        req.on("response", (res) => {
          const { statusCode = 400 } = res;
          if (statusCode < 200 || 300 <= statusCode) {
            reject(
              Object.assign(new import_property_provider.ProviderError("Error response received from instance metadata service"), { statusCode })
            );
            req.destroy();
          }
          const chunks = [];
          res.on("data", (chunk) => {
            chunks.push(chunk);
          });
          res.on("end", () => {
            resolve(import_buffer.Buffer.concat(chunks));
            req.destroy();
          });
        });
        req.end();
      });
    }
    __name(httpRequest, "httpRequest");
    var isImdsCredentials = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.AccessKeyId === "string" && typeof arg.SecretAccessKey === "string" && typeof arg.Token === "string" && typeof arg.Expiration === "string", "isImdsCredentials");
    var fromImdsCredentials = /* @__PURE__ */ __name((creds) => ({
      accessKeyId: creds.AccessKeyId,
      secretAccessKey: creds.SecretAccessKey,
      sessionToken: creds.Token,
      expiration: new Date(creds.Expiration)
    }), "fromImdsCredentials");
    var DEFAULT_TIMEOUT = 1e3;
    var DEFAULT_MAX_RETRIES = 0;
    var providerConfigFromInit = /* @__PURE__ */ __name(({
      maxRetries = DEFAULT_MAX_RETRIES,
      timeout = DEFAULT_TIMEOUT
    }) => ({ maxRetries, timeout }), "providerConfigFromInit");
    var retry = /* @__PURE__ */ __name((toRetry, maxRetries) => {
      let promise = toRetry();
      for (let i = 0; i < maxRetries; i++) {
        promise = promise.catch(toRetry);
      }
      return promise;
    }, "retry");
    var ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
    var ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
    var ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
    var fromContainerMetadata = /* @__PURE__ */ __name((init = {}) => {
      const { timeout, maxRetries } = providerConfigFromInit(init);
      return () => retry(async () => {
        const requestOptions = await getCmdsUri();
        const credsResponse = JSON.parse(await requestFromEcsImds(timeout, requestOptions));
        if (!isImdsCredentials(credsResponse)) {
          throw new import_property_provider.CredentialsProviderError("Invalid response received from instance metadata service.");
        }
        return fromImdsCredentials(credsResponse);
      }, maxRetries);
    }, "fromContainerMetadata");
    var requestFromEcsImds = /* @__PURE__ */ __name(async (timeout, options) => {
      if (process.env[ENV_CMDS_AUTH_TOKEN]) {
        options.headers = {
          ...options.headers,
          Authorization: process.env[ENV_CMDS_AUTH_TOKEN]
        };
      }
      const buffer = await httpRequest({
        ...options,
        timeout
      });
      return buffer.toString();
    }, "requestFromEcsImds");
    var CMDS_IP = "169.254.170.2";
    var GREENGRASS_HOSTS = {
      localhost: true,
      "127.0.0.1": true
    };
    var GREENGRASS_PROTOCOLS = {
      "http:": true,
      "https:": true
    };
    var getCmdsUri = /* @__PURE__ */ __name(async () => {
      if (process.env[ENV_CMDS_RELATIVE_URI]) {
        return {
          hostname: CMDS_IP,
          path: process.env[ENV_CMDS_RELATIVE_URI]
        };
      }
      if (process.env[ENV_CMDS_FULL_URI]) {
        const parsed = (0, import_url.parse)(process.env[ENV_CMDS_FULL_URI]);
        if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
          throw new import_property_provider.CredentialsProviderError(
            `${parsed.hostname} is not a valid container metadata service hostname`,
            false
          );
        }
        if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
          throw new import_property_provider.CredentialsProviderError(
            `${parsed.protocol} is not a valid container metadata service protocol`,
            false
          );
        }
        return {
          ...parsed,
          port: parsed.port ? parseInt(parsed.port, 10) : void 0
        };
      }
      throw new import_property_provider.CredentialsProviderError(
        `The container metadata credential provider cannot be used unless the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment variable is set`,
        false
      );
    }, "getCmdsUri");
    var _InstanceMetadataV1FallbackError = class _InstanceMetadataV1FallbackError2 extends import_property_provider.CredentialsProviderError {
      constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "InstanceMetadataV1FallbackError";
        Object.setPrototypeOf(this, _InstanceMetadataV1FallbackError2.prototype);
      }
    };
    __name(_InstanceMetadataV1FallbackError, "InstanceMetadataV1FallbackError");
    var InstanceMetadataV1FallbackError = _InstanceMetadataV1FallbackError;
    var import_node_config_provider = require_dist_cjs14();
    var import_url_parser = require_dist_cjs16();
    var Endpoint = /* @__PURE__ */ ((Endpoint2) => {
      Endpoint2["IPv4"] = "http://169.254.169.254";
      Endpoint2["IPv6"] = "http://[fd00:ec2::254]";
      return Endpoint2;
    })(Endpoint || {});
    var ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
    var CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
    var ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[ENV_ENDPOINT_NAME],
      configFileSelector: (profile) => profile[CONFIG_ENDPOINT_NAME],
      default: void 0
    };
    var EndpointMode = /* @__PURE__ */ ((EndpointMode2) => {
      EndpointMode2["IPv4"] = "IPv4";
      EndpointMode2["IPv6"] = "IPv6";
      return EndpointMode2;
    })(EndpointMode || {});
    var ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
    var CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
    var ENDPOINT_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[ENV_ENDPOINT_MODE_NAME],
      configFileSelector: (profile) => profile[CONFIG_ENDPOINT_MODE_NAME],
      default: "IPv4"
      /* IPv4 */
    };
    var getInstanceMetadataEndpoint = /* @__PURE__ */ __name(async () => (0, import_url_parser.parseUrl)(await getFromEndpointConfig() || await getFromEndpointModeConfig()), "getInstanceMetadataEndpoint");
    var getFromEndpointConfig = /* @__PURE__ */ __name(async () => (0, import_node_config_provider.loadConfig)(ENDPOINT_CONFIG_OPTIONS)(), "getFromEndpointConfig");
    var getFromEndpointModeConfig = /* @__PURE__ */ __name(async () => {
      const endpointMode = await (0, import_node_config_provider.loadConfig)(ENDPOINT_MODE_CONFIG_OPTIONS)();
      switch (endpointMode) {
        case "IPv4":
          return "http://169.254.169.254";
        case "IPv6":
          return "http://[fd00:ec2::254]";
        default:
          throw new Error(`Unsupported endpoint mode: ${endpointMode}. Select from ${Object.values(EndpointMode)}`);
      }
    }, "getFromEndpointModeConfig");
    var STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 5 * 60;
    var STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
    var STATIC_STABILITY_DOC_URL = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html";
    var getExtendedInstanceMetadataCredentials = /* @__PURE__ */ __name((credentials, logger) => {
      const refreshInterval = STATIC_STABILITY_REFRESH_INTERVAL_SECONDS + Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
      const newExpiration = new Date(Date.now() + refreshInterval * 1e3);
      logger.warn(
        `Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(newExpiration)}.
For more information, please visit: ` + STATIC_STABILITY_DOC_URL
      );
      const originalExpiration = credentials.originalExpiration ?? credentials.expiration;
      return {
        ...credentials,
        ...originalExpiration ? { originalExpiration } : {},
        expiration: newExpiration
      };
    }, "getExtendedInstanceMetadataCredentials");
    var staticStabilityProvider = /* @__PURE__ */ __name((provider, options = {}) => {
      const logger = (options == null ? void 0 : options.logger) || console;
      let pastCredentials;
      return async () => {
        let credentials;
        try {
          credentials = await provider();
          if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
            credentials = getExtendedInstanceMetadataCredentials(credentials, logger);
          }
        } catch (e) {
          if (pastCredentials) {
            logger.warn("Credential renew failed: ", e);
            credentials = getExtendedInstanceMetadataCredentials(pastCredentials, logger);
          } else {
            throw e;
          }
        }
        pastCredentials = credentials;
        return credentials;
      };
    }, "staticStabilityProvider");
    var IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
    var IMDS_TOKEN_PATH = "/latest/api/token";
    var AWS_EC2_METADATA_V1_DISABLED = "AWS_EC2_METADATA_V1_DISABLED";
    var PROFILE_AWS_EC2_METADATA_V1_DISABLED = "ec2_metadata_v1_disabled";
    var X_AWS_EC2_METADATA_TOKEN = "x-aws-ec2-metadata-token";
    var fromInstanceMetadata = /* @__PURE__ */ __name((init = {}) => staticStabilityProvider(getInstanceImdsProvider(init), { logger: init.logger }), "fromInstanceMetadata");
    var getInstanceImdsProvider = /* @__PURE__ */ __name((init) => {
      let disableFetchToken = false;
      const { logger, profile } = init;
      const { timeout, maxRetries } = providerConfigFromInit(init);
      const getCredentials = /* @__PURE__ */ __name(async (maxRetries2, options) => {
        var _a;
        const isImdsV1Fallback = disableFetchToken || ((_a = options.headers) == null ? void 0 : _a[X_AWS_EC2_METADATA_TOKEN]) == null;
        if (isImdsV1Fallback) {
          let fallbackBlockedFromProfile = false;
          let fallbackBlockedFromProcessEnv = false;
          const configValue = await (0, import_node_config_provider.loadConfig)(
            {
              environmentVariableSelector: (env) => {
                const envValue = env[AWS_EC2_METADATA_V1_DISABLED];
                fallbackBlockedFromProcessEnv = !!envValue && envValue !== "false";
                if (envValue === void 0) {
                  throw new import_property_provider.CredentialsProviderError(
                    `${AWS_EC2_METADATA_V1_DISABLED} not set in env, checking config file next.`
                  );
                }
                return fallbackBlockedFromProcessEnv;
              },
              configFileSelector: (profile2) => {
                const profileValue = profile2[PROFILE_AWS_EC2_METADATA_V1_DISABLED];
                fallbackBlockedFromProfile = !!profileValue && profileValue !== "false";
                return fallbackBlockedFromProfile;
              },
              default: false
            },
            {
              profile
            }
          )();
          if (init.ec2MetadataV1Disabled || configValue) {
            const causes = [];
            if (init.ec2MetadataV1Disabled)
              causes.push("credential provider initialization (runtime option ec2MetadataV1Disabled)");
            if (fallbackBlockedFromProfile)
              causes.push(`config file profile (${PROFILE_AWS_EC2_METADATA_V1_DISABLED})`);
            if (fallbackBlockedFromProcessEnv)
              causes.push(`process environment variable (${AWS_EC2_METADATA_V1_DISABLED})`);
            throw new InstanceMetadataV1FallbackError(
              `AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${causes.join(
                ", "
              )}].`
            );
          }
        }
        const imdsProfile = (await retry(async () => {
          let profile2;
          try {
            profile2 = await getProfile(options);
          } catch (err) {
            if (err.statusCode === 401) {
              disableFetchToken = false;
            }
            throw err;
          }
          return profile2;
        }, maxRetries2)).trim();
        return retry(async () => {
          let creds;
          try {
            creds = await getCredentialsFromProfile(imdsProfile, options);
          } catch (err) {
            if (err.statusCode === 401) {
              disableFetchToken = false;
            }
            throw err;
          }
          return creds;
        }, maxRetries2);
      }, "getCredentials");
      return async () => {
        const endpoint = await getInstanceMetadataEndpoint();
        if (disableFetchToken) {
          logger == null ? void 0 : logger.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)");
          return getCredentials(maxRetries, { ...endpoint, timeout });
        } else {
          let token;
          try {
            token = (await getMetadataToken({ ...endpoint, timeout })).toString();
          } catch (error) {
            if ((error == null ? void 0 : error.statusCode) === 400) {
              throw Object.assign(error, {
                message: "EC2 Metadata token request returned error"
              });
            } else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
              disableFetchToken = true;
            }
            logger == null ? void 0 : logger.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)");
            return getCredentials(maxRetries, { ...endpoint, timeout });
          }
          return getCredentials(maxRetries, {
            ...endpoint,
            headers: {
              [X_AWS_EC2_METADATA_TOKEN]: token
            },
            timeout
          });
        }
      };
    }, "getInstanceImdsProvider");
    var getMetadataToken = /* @__PURE__ */ __name(async (options) => httpRequest({
      ...options,
      path: IMDS_TOKEN_PATH,
      method: "PUT",
      headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600"
      }
    }), "getMetadataToken");
    var getProfile = /* @__PURE__ */ __name(async (options) => (await httpRequest({ ...options, path: IMDS_PATH })).toString(), "getProfile");
    var getCredentialsFromProfile = /* @__PURE__ */ __name(async (profile, options) => {
      const credsResponse = JSON.parse(
        (await httpRequest({
          ...options,
          path: IMDS_PATH + profile
        })).toString()
      );
      if (!isImdsCredentials(credsResponse)) {
        throw new import_property_provider.CredentialsProviderError("Invalid response received from instance metadata service.");
      }
      return fromImdsCredentials(credsResponse);
    }, "getCredentialsFromProfile");
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/checkUrl.js
var require_checkUrl = __commonJS({
  "node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/checkUrl.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.checkUrl = void 0;
    var property_provider_1 = require_dist_cjs12();
    var ECS_CONTAINER_HOST = "169.254.170.2";
    var EKS_CONTAINER_HOST_IPv4 = "169.254.170.23";
    var EKS_CONTAINER_HOST_IPv6 = "[fd00:ec2::23]";
    var checkUrl = (url) => {
      if (url.protocol === "https:") {
        return;
      }
      if (url.hostname === ECS_CONTAINER_HOST || url.hostname === EKS_CONTAINER_HOST_IPv4 || url.hostname === EKS_CONTAINER_HOST_IPv6) {
        return;
      }
      if (url.hostname.includes("[")) {
        if (url.hostname === "[::1]" || url.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") {
          return;
        }
      } else {
        if (url.hostname === "localhost") {
          return;
        }
        const ipComponents = url.hostname.split(".");
        const inRange = (component) => {
          const num = parseInt(component, 10);
          return 0 <= num && num <= 255;
        };
        if (ipComponents[0] === "127" && inRange(ipComponents[1]) && inRange(ipComponents[2]) && inRange(ipComponents[3]) && ipComponents.length === 4) {
          return;
        }
      }
      throw new property_provider_1.CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`);
    };
    exports2.checkUrl = checkUrl;
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/requestHelpers.js
var require_requestHelpers = __commonJS({
  "node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/requestHelpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getCredentials = exports2.createGetRequest = void 0;
    var property_provider_1 = require_dist_cjs12();
    var protocol_http_1 = require_dist_cjs2();
    var smithy_client_1 = require_dist_cjs32();
    var util_stream_1 = require_dist_cjs31();
    function createGetRequest(url) {
      return new protocol_http_1.HttpRequest({
        protocol: url.protocol,
        hostname: url.hostname,
        port: Number(url.port),
        path: url.pathname,
        query: Array.from(url.searchParams.entries()).reduce((acc, [k, v]) => {
          acc[k] = v;
          return acc;
        }, {}),
        fragment: url.hash
      });
    }
    exports2.createGetRequest = createGetRequest;
    async function getCredentials(response) {
      const contentType = response?.headers["content-type"] ?? response?.headers["Content-Type"] ?? "";
      if (!contentType.includes("json")) {
        console.warn("HTTP credential provider response header content-type was not application/json. Observed: " + contentType + ".");
      }
      const stream = (0, util_stream_1.sdkStreamMixin)(response.body);
      const str = await stream.transformToString();
      if (response.statusCode === 200) {
        const parsed = JSON.parse(str);
        if (typeof parsed.AccessKeyId !== "string" || typeof parsed.SecretAccessKey !== "string" || typeof parsed.Token !== "string" || typeof parsed.Expiration !== "string") {
          throw new property_provider_1.CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }");
        }
        return {
          accessKeyId: parsed.AccessKeyId,
          secretAccessKey: parsed.SecretAccessKey,
          sessionToken: parsed.Token,
          expiration: (0, smithy_client_1.parseRfc3339DateTime)(parsed.Expiration)
        };
      }
      if (response.statusCode >= 400 && response.statusCode < 500) {
        let parsedBody = {};
        try {
          parsedBody = JSON.parse(str);
        } catch (e) {
        }
        throw Object.assign(new property_provider_1.CredentialsProviderError(`Server responded with status: ${response.statusCode}`), {
          Code: parsedBody.Code,
          Message: parsedBody.Message
        });
      }
      throw new property_provider_1.CredentialsProviderError(`Server responded with status: ${response.statusCode}`);
    }
    exports2.getCredentials = getCredentials;
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/retry-wrapper.js
var require_retry_wrapper = __commonJS({
  "node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/retry-wrapper.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.retryWrapper = void 0;
    var retryWrapper = (toRetry, maxRetries, delayMs) => {
      return async () => {
        for (let i = 0; i < maxRetries; ++i) {
          try {
            return await toRetry();
          } catch (e) {
            await new Promise((resolve) => setTimeout(resolve, delayMs));
          }
        }
        return await toRetry();
      };
    };
    exports2.retryWrapper = retryWrapper;
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/fromHttp.js
var require_fromHttp = __commonJS({
  "node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/fromHttp.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromHttp = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var node_http_handler_1 = require_dist_cjs28();
    var property_provider_1 = require_dist_cjs12();
    var promises_1 = tslib_1.__importDefault(require("fs/promises"));
    var checkUrl_1 = require_checkUrl();
    var requestHelpers_1 = require_requestHelpers();
    var retry_wrapper_1 = require_retry_wrapper();
    var AWS_CONTAINER_CREDENTIALS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
    var DEFAULT_LINK_LOCAL_HOST = "http://169.254.170.2";
    var AWS_CONTAINER_CREDENTIALS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
    var AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE";
    var AWS_CONTAINER_AUTHORIZATION_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
    var fromHttp = (options) => {
      options.logger?.debug("@aws-sdk/credential-provider-http", "fromHttp");
      let host;
      const relative = options.awsContainerCredentialsRelativeUri ?? process.env[AWS_CONTAINER_CREDENTIALS_RELATIVE_URI];
      const full = options.awsContainerCredentialsFullUri ?? process.env[AWS_CONTAINER_CREDENTIALS_FULL_URI];
      const token = options.awsContainerAuthorizationToken ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN];
      const tokenFile = options.awsContainerAuthorizationTokenFile ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE];
      if (relative && full) {
        console.warn("AWS SDK HTTP credentials provider:", "you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.");
        console.warn("awsContainerCredentialsFullUri will take precedence.");
      }
      if (token && tokenFile) {
        console.warn("AWS SDK HTTP credentials provider:", "you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.");
        console.warn("awsContainerAuthorizationToken will take precedence.");
      }
      if (full) {
        host = full;
      } else if (relative) {
        host = `${DEFAULT_LINK_LOCAL_HOST}${relative}`;
      } else {
        throw new property_provider_1.CredentialsProviderError(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`);
      }
      const url = new URL(host);
      (0, checkUrl_1.checkUrl)(url);
      const requestHandler = new node_http_handler_1.NodeHttpHandler({
        requestTimeout: options.timeout ?? 1e3,
        connectionTimeout: options.timeout ?? 1e3
      });
      return (0, retry_wrapper_1.retryWrapper)(async () => {
        const request = (0, requestHelpers_1.createGetRequest)(url);
        if (token) {
          request.headers.Authorization = token;
        } else if (tokenFile) {
          request.headers.Authorization = (await promises_1.default.readFile(tokenFile)).toString();
        }
        try {
          const result = await requestHandler.handle(request);
          return (0, requestHelpers_1.getCredentials)(result.response);
        } catch (e) {
          throw new property_provider_1.CredentialsProviderError(String(e));
        }
      }, options.maxRetries ?? 3, options.timeout ?? 1e3);
    };
    exports2.fromHttp = fromHttp;
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-cjs/index.js
var require_dist_cjs41 = __commonJS({
  "node_modules/@aws-sdk/credential-provider-http/dist-cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromHttp = void 0;
    var fromHttp_1 = require_fromHttp();
    Object.defineProperty(exports2, "fromHttp", { enumerable: true, get: function() {
      return fromHttp_1.fromHttp;
    } });
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/auth/httpAuthSchemeProvider.js
var require_httpAuthSchemeProvider2 = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/auth/httpAuthSchemeProvider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.resolveHttpAuthSchemeConfig = exports2.defaultSSOHttpAuthSchemeProvider = exports2.defaultSSOHttpAuthSchemeParametersProvider = void 0;
    var core_1 = require_dist_cjs38();
    var util_middleware_1 = require_dist_cjs10();
    var defaultSSOHttpAuthSchemeParametersProvider = async (config, context, input) => {
      return {
        operation: (0, util_middleware_1.getSmithyContext)(context).operation,
        region: await (0, util_middleware_1.normalizeProvider)(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    exports2.defaultSSOHttpAuthSchemeParametersProvider = defaultSSOHttpAuthSchemeParametersProvider;
    function createAwsAuthSigv4HttpAuthOption(authParameters) {
      return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
          name: "awsssoportal",
          region: authParameters.region
        },
        propertiesExtractor: (config, context) => ({
          signingProperties: {
            config,
            context
          }
        })
      };
    }
    function createSmithyApiNoAuthHttpAuthOption(authParameters) {
      return {
        schemeId: "smithy.api#noAuth"
      };
    }
    var defaultSSOHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "GetRoleCredentials": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        case "ListAccountRoles": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        case "ListAccounts": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        case "Logout": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
      }
      return options;
    };
    exports2.defaultSSOHttpAuthSchemeProvider = defaultSSOHttpAuthSchemeProvider;
    var resolveHttpAuthSchemeConfig = (config) => {
      const config_0 = (0, core_1.resolveAwsSdkSigV4Config)(config);
      return {
        ...config_0
      };
    };
    exports2.resolveHttpAuthSchemeConfig = resolveHttpAuthSchemeConfig;
  }
});

// node_modules/@aws-sdk/client-sso/package.json
var require_package2 = __commonJS({
  "node_modules/@aws-sdk/client-sso/package.json"(exports2, module2) {
    module2.exports = {
      name: "@aws-sdk/client-sso",
      description: "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native",
      version: "3.583.0",
      scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-sso",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo sso"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "3.0.0",
        "@aws-crypto/sha256-js": "3.0.0",
        "@aws-sdk/core": "3.582.0",
        "@aws-sdk/middleware-host-header": "3.577.0",
        "@aws-sdk/middleware-logger": "3.577.0",
        "@aws-sdk/middleware-recursion-detection": "3.577.0",
        "@aws-sdk/middleware-user-agent": "3.583.0",
        "@aws-sdk/region-config-resolver": "3.577.0",
        "@aws-sdk/types": "3.577.0",
        "@aws-sdk/util-endpoints": "3.583.0",
        "@aws-sdk/util-user-agent-browser": "3.577.0",
        "@aws-sdk/util-user-agent-node": "3.577.0",
        "@smithy/config-resolver": "^3.0.0",
        "@smithy/core": "^2.0.1",
        "@smithy/fetch-http-handler": "^3.0.1",
        "@smithy/hash-node": "^3.0.0",
        "@smithy/invalid-dependency": "^3.0.0",
        "@smithy/middleware-content-length": "^3.0.0",
        "@smithy/middleware-endpoint": "^3.0.0",
        "@smithy/middleware-retry": "^3.0.1",
        "@smithy/middleware-serde": "^3.0.0",
        "@smithy/middleware-stack": "^3.0.0",
        "@smithy/node-config-provider": "^3.0.0",
        "@smithy/node-http-handler": "^3.0.0",
        "@smithy/protocol-http": "^4.0.0",
        "@smithy/smithy-client": "^3.0.1",
        "@smithy/types": "^3.0.0",
        "@smithy/url-parser": "^3.0.0",
        "@smithy/util-base64": "^3.0.0",
        "@smithy/util-body-length-browser": "^3.0.0",
        "@smithy/util-body-length-node": "^3.0.0",
        "@smithy/util-defaults-mode-browser": "^3.0.1",
        "@smithy/util-defaults-mode-node": "^3.0.1",
        "@smithy/util-endpoints": "^2.0.0",
        "@smithy/util-middleware": "^3.0.0",
        "@smithy/util-retry": "^3.0.0",
        "@smithy/util-utf8": "^3.0.0",
        tslib: "^2.6.2"
      },
      devDependencies: {
        "@tsconfig/node16": "16.1.3",
        "@types/node": "^16.18.96",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~4.9.5"
      },
      engines: {
        node: ">=16.0.0"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-sso"
      }
    };
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-cjs/index.js
var require_dist_cjs42 = __commonJS({
  "node_modules/@aws-sdk/util-user-agent-node/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      UA_APP_ID_ENV_NAME: () => UA_APP_ID_ENV_NAME,
      UA_APP_ID_INI_NAME: () => UA_APP_ID_INI_NAME,
      crtAvailability: () => crtAvailability,
      defaultUserAgent: () => defaultUserAgent
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_node_config_provider = require_dist_cjs14();
    var import_os = require("os");
    var import_process = require("process");
    var crtAvailability = {
      isCrtAvailable: false
    };
    var isCrtAvailable = /* @__PURE__ */ __name(() => {
      if (crtAvailability.isCrtAvailable) {
        return ["md/crt-avail"];
      }
      return null;
    }, "isCrtAvailable");
    var UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
    var UA_APP_ID_INI_NAME = "sdk-ua-app-id";
    var defaultUserAgent = /* @__PURE__ */ __name(({ serviceId, clientVersion }) => {
      const sections = [
        // sdk-metadata
        ["aws-sdk-js", clientVersion],
        // ua-metadata
        ["ua", "2.0"],
        // os-metadata
        [`os/${(0, import_os.platform)()}`, (0, import_os.release)()],
        // language-metadata
        // ECMAScript edition doesn't matter in JS, so no version needed.
        ["lang/js"],
        ["md/nodejs", `${import_process.versions.node}`]
      ];
      const crtAvailable = isCrtAvailable();
      if (crtAvailable) {
        sections.push(crtAvailable);
      }
      if (serviceId) {
        sections.push([`api/${serviceId}`, clientVersion]);
      }
      if (import_process.env.AWS_EXECUTION_ENV) {
        sections.push([`exec-env/${import_process.env.AWS_EXECUTION_ENV}`]);
      }
      const appIdPromise = (0, import_node_config_provider.loadConfig)({
        environmentVariableSelector: (env2) => env2[UA_APP_ID_ENV_NAME],
        configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME],
        default: void 0
      })();
      let resolvedUserAgent = void 0;
      return async () => {
        if (!resolvedUserAgent) {
          const appId = await appIdPromise;
          resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        }
        return resolvedUserAgent;
      };
    }, "defaultUserAgent");
  }
});

// node_modules/@smithy/hash-node/dist-cjs/index.js
var require_dist_cjs43 = __commonJS({
  "node_modules/@smithy/hash-node/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      Hash: () => Hash
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_buffer_from = require_dist_cjs23();
    var import_util_utf8 = require_dist_cjs24();
    var import_buffer = require("buffer");
    var import_crypto5 = require("crypto");
    var _Hash = class _Hash {
      constructor(algorithmIdentifier, secret) {
        this.algorithmIdentifier = algorithmIdentifier;
        this.secret = secret;
        this.reset();
      }
      update(toHash, encoding) {
        this.hash.update((0, import_util_utf8.toUint8Array)(castSourceData(toHash, encoding)));
      }
      digest() {
        return Promise.resolve(this.hash.digest());
      }
      reset() {
        this.hash = this.secret ? (0, import_crypto5.createHmac)(this.algorithmIdentifier, castSourceData(this.secret)) : (0, import_crypto5.createHash)(this.algorithmIdentifier);
      }
    };
    __name(_Hash, "Hash");
    var Hash = _Hash;
    function castSourceData(toCast, encoding) {
      if (import_buffer.Buffer.isBuffer(toCast)) {
        return toCast;
      }
      if (typeof toCast === "string") {
        return (0, import_util_buffer_from.fromString)(toCast, encoding);
      }
      if (ArrayBuffer.isView(toCast)) {
        return (0, import_util_buffer_from.fromArrayBuffer)(toCast.buffer, toCast.byteOffset, toCast.byteLength);
      }
      return (0, import_util_buffer_from.fromArrayBuffer)(toCast);
    }
    __name(castSourceData, "castSourceData");
  }
});

// node_modules/@smithy/util-body-length-node/dist-cjs/index.js
var require_dist_cjs44 = __commonJS({
  "node_modules/@smithy/util-body-length-node/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      calculateBodyLength: () => calculateBodyLength
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_fs = require("fs");
    var calculateBodyLength = /* @__PURE__ */ __name((body) => {
      if (!body) {
        return 0;
      }
      if (typeof body === "string") {
        return Buffer.byteLength(body);
      } else if (typeof body.byteLength === "number") {
        return body.byteLength;
      } else if (typeof body.size === "number") {
        return body.size;
      } else if (typeof body.start === "number" && typeof body.end === "number") {
        return body.end + 1 - body.start;
      } else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
        return (0, import_fs.lstatSync)(body.path).size;
      } else if (typeof body.fd === "number") {
        return (0, import_fs.fstatSync)(body.fd).size;
      }
      throw new Error(`Body Length computation failed for ${body}`);
    }, "calculateBodyLength");
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/endpoint/ruleset.js
var require_ruleset = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/endpoint/ruleset.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ruleSet = void 0;
    var u = "required";
    var v = "fn";
    var w = "argv";
    var x = "ref";
    var a = true;
    var b = "isSet";
    var c = "booleanEquals";
    var d = "error";
    var e = "endpoint";
    var f = "tree";
    var g = "PartitionResult";
    var h = "getAttr";
    var i = { [u]: false, "type": "String" };
    var j = { [u]: true, "default": false, "type": "Boolean" };
    var k = { [x]: "Endpoint" };
    var l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] };
    var m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] };
    var n = {};
    var o = { [v]: h, [w]: [{ [x]: g }, "supportsFIPS"] };
    var p = { [x]: g };
    var q = { [v]: c, [w]: [true, { [v]: h, [w]: [p, "supportsDualStack"] }] };
    var r = [l];
    var s = [m];
    var t = [{ [x]: "Region" }];
    var _data = { version: "1.0", parameters: { Region: i, UseDualStack: j, UseFIPS: j, Endpoint: i }, rules: [{ conditions: [{ [v]: b, [w]: [k] }], rules: [{ conditions: r, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: s, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: k, properties: n, headers: n }, type: e }], type: f }, { conditions: [{ [v]: b, [w]: t }], rules: [{ conditions: [{ [v]: "aws.partition", [w]: t, assign: g }], rules: [{ conditions: [l, m], rules: [{ conditions: [{ [v]: c, [w]: [a, o] }, q], rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: r, rules: [{ conditions: [{ [v]: c, [w]: [o, a] }], rules: [{ conditions: [{ [v]: "stringEquals", [w]: [{ [v]: h, [w]: [p, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://portal.sso.{Region}.amazonaws.com", properties: n, headers: n }, type: e }, { endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: s, rules: [{ conditions: [q], rules: [{ endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
    exports2.ruleSet = _data;
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/endpoint/endpointResolver.js
var require_endpointResolver = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/endpoint/endpointResolver.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.defaultEndpointResolver = void 0;
    var util_endpoints_1 = require_dist_cjs7();
    var util_endpoints_2 = require_dist_cjs6();
    var ruleset_1 = require_ruleset();
    var defaultEndpointResolver = (endpointParams, context = {}) => {
      return (0, util_endpoints_2.resolveEndpoint)(ruleset_1.ruleSet, {
        endpointParams,
        logger: context.logger
      });
    };
    exports2.defaultEndpointResolver = defaultEndpointResolver;
    util_endpoints_2.customEndpointFunctions.aws = util_endpoints_1.awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/runtimeConfig.shared.js
var require_runtimeConfig_shared = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/runtimeConfig.shared.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getRuntimeConfig = void 0;
    var core_1 = require_dist_cjs38();
    var core_2 = require_dist_cjs34();
    var smithy_client_1 = require_dist_cjs32();
    var url_parser_1 = require_dist_cjs16();
    var util_base64_1 = require_dist_cjs25();
    var util_utf8_1 = require_dist_cjs24();
    var httpAuthSchemeProvider_1 = require_httpAuthSchemeProvider2();
    var endpointResolver_1 = require_endpointResolver();
    var getRuntimeConfig = (config) => {
      return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? util_base64_1.fromBase64,
        base64Encoder: config?.base64Encoder ?? util_base64_1.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? endpointResolver_1.defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? httpAuthSchemeProvider_1.defaultSSOHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
            signer: new core_1.AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new core_2.NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new smithy_client_1.NoOpLogger(),
        serviceId: config?.serviceId ?? "SSO",
        urlParser: config?.urlParser ?? url_parser_1.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? util_utf8_1.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? util_utf8_1.toUtf8
      };
    };
    exports2.getRuntimeConfig = getRuntimeConfig;
  }
});

// node_modules/@smithy/util-defaults-mode-node/dist-cjs/index.js
var require_dist_cjs45 = __commonJS({
  "node_modules/@smithy/util-defaults-mode-node/dist-cjs/index.js"(exports2, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      resolveDefaultsModeConfig: () => resolveDefaultsModeConfig
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_config_resolver = require_dist_cjs11();
    var import_node_config_provider = require_dist_cjs14();
    var import_property_provider = require_dist_cjs12();
    var AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
    var AWS_REGION_ENV = "AWS_REGION";
    var AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
    var ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
    var DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
    var IMDS_REGION_PATH = "/latest/meta-data/placement/region";
    var AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
    var AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
    var NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => {
        return env[AWS_DEFAULTS_MODE_ENV];
      },
      configFileSelector: (profile) => {
        return profile[AWS_DEFAULTS_MODE_CONFIG];
      },
      default: "legacy"
    };
    var resolveDefaultsModeConfig = /* @__PURE__ */ __name(({
      region = (0, import_node_config_provider.loadConfig)(import_config_resolver.NODE_REGION_CONFIG_OPTIONS),
      defaultsMode = (0, import_node_config_provider.loadConfig)(NODE_DEFAULTS_MODE_CONFIG_OPTIONS)
    } = {}) => (0, import_property_provider.memoize)(async () => {
      const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
      switch (mode == null ? void 0 : mode.toLowerCase()) {
        case "auto":
          return resolveNodeDefaultsModeAuto(region);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
          return Promise.resolve(mode == null ? void 0 : mode.toLocaleLowerCase());
        case void 0:
          return Promise.resolve("legacy");
        default:
          throw new Error(
            `Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`
          );
      }
    }), "resolveDefaultsModeConfig");
    var resolveNodeDefaultsModeAuto = /* @__PURE__ */ __name(async (clientRegion) => {
      if (clientRegion) {
        const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
        const inferredRegion = await inferPhysicalRegion();
        if (!inferredRegion) {
          return "standard";
        }
        if (resolvedRegion === inferredRegion) {
          return "in-region";
        } else {
          return "cross-region";
        }
      }
      return "standard";
    }, "resolveNodeDefaultsModeAuto");
    var inferPhysicalRegion = /* @__PURE__ */ __name(async () => {
      if (process.env[AWS_EXECUTION_ENV] && (process.env[AWS_REGION_ENV] || process.env[AWS_DEFAULT_REGION_ENV])) {
        return process.env[AWS_REGION_ENV] ?? process.env[AWS_DEFAULT_REGION_ENV];
      }
      if (!process.env[ENV_IMDS_DISABLED]) {
        try {
          const { getInstanceMetadataEndpoint, httpRequest } = await Promise.resolve().then(() => __toESM2(require_dist_cjs40()));
          const endpoint = await getInstanceMetadataEndpoint();
          return (await httpRequest({ ...endpoint, path: IMDS_REGION_PATH })).toString();
        } catch (e) {
        }
      }
    }, "inferPhysicalRegion");
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/runtimeConfig.js
var require_runtimeConfig = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/runtimeConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getRuntimeConfig = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var package_json_1 = tslib_1.__importDefault(require_package2());
    var core_1 = require_dist_cjs38();
    var util_user_agent_node_1 = require_dist_cjs42();
    var config_resolver_1 = require_dist_cjs11();
    var hash_node_1 = require_dist_cjs43();
    var middleware_retry_1 = require_dist_cjs33();
    var node_config_provider_1 = require_dist_cjs14();
    var node_http_handler_1 = require_dist_cjs28();
    var util_body_length_node_1 = require_dist_cjs44();
    var util_retry_1 = require_dist_cjs20();
    var runtimeConfig_shared_1 = require_runtimeConfig_shared();
    var smithy_client_1 = require_dist_cjs32();
    var util_defaults_mode_node_1 = require_dist_cjs45();
    var smithy_client_2 = require_dist_cjs32();
    var getRuntimeConfig = (config) => {
      (0, smithy_client_2.emitWarningIfUnsupportedVersion)(process.version);
      const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
      const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
      const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
      (0, core_1.emitWarningIfUnsupportedVersion)(process.version);
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? util_body_length_node_1.calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, util_user_agent_node_1.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        maxAttempts: config?.maxAttempts ?? (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: node_http_handler_1.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? (0, node_config_provider_1.loadConfig)({
          ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || util_retry_1.DEFAULT_RETRY_MODE
        }),
        sha256: config?.sha256 ?? hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? node_http_handler_1.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      };
    };
    exports2.getRuntimeConfig = getRuntimeConfig;
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-cjs/index.js
var require_dist_cjs46 = __commonJS({
  "node_modules/@aws-sdk/region-config-resolver/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      NODE_REGION_CONFIG_FILE_OPTIONS: () => NODE_REGION_CONFIG_FILE_OPTIONS,
      NODE_REGION_CONFIG_OPTIONS: () => NODE_REGION_CONFIG_OPTIONS,
      REGION_ENV_NAME: () => REGION_ENV_NAME,
      REGION_INI_NAME: () => REGION_INI_NAME,
      getAwsRegionExtensionConfiguration: () => getAwsRegionExtensionConfiguration,
      resolveAwsRegionExtensionConfiguration: () => resolveAwsRegionExtensionConfiguration,
      resolveRegionConfig: () => resolveRegionConfig
    });
    module2.exports = __toCommonJS2(src_exports);
    var getAwsRegionExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      let runtimeConfigRegion = /* @__PURE__ */ __name(async () => {
        if (runtimeConfig.region === void 0) {
          throw new Error("Region is missing from runtimeConfig");
        }
        const region = runtimeConfig.region;
        if (typeof region === "string") {
          return region;
        }
        return region();
      }, "runtimeConfigRegion");
      return {
        setRegion(region) {
          runtimeConfigRegion = region;
        },
        region() {
          return runtimeConfigRegion;
        }
      };
    }, "getAwsRegionExtensionConfiguration");
    var resolveAwsRegionExtensionConfiguration = /* @__PURE__ */ __name((awsRegionExtensionConfiguration) => {
      return {
        region: awsRegionExtensionConfiguration.region()
      };
    }, "resolveAwsRegionExtensionConfiguration");
    var REGION_ENV_NAME = "AWS_REGION";
    var REGION_INI_NAME = "region";
    var NODE_REGION_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[REGION_ENV_NAME],
      configFileSelector: (profile) => profile[REGION_INI_NAME],
      default: () => {
        throw new Error("Region is missing");
      }
    };
    var NODE_REGION_CONFIG_FILE_OPTIONS = {
      preferredFile: "credentials"
    };
    var isFipsRegion = /* @__PURE__ */ __name((region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips")), "isFipsRegion");
    var getRealRegion = /* @__PURE__ */ __name((region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region, "getRealRegion");
    var resolveRegionConfig = /* @__PURE__ */ __name((input) => {
      const { region, useFipsEndpoint } = input;
      if (!region) {
        throw new Error("Region is missing");
      }
      return {
        ...input,
        region: async () => {
          if (typeof region === "string") {
            return getRealRegion(region);
          }
          const providedRegion = await region();
          return getRealRegion(providedRegion);
        },
        useFipsEndpoint: async () => {
          const providedRegion = typeof region === "string" ? region : await region();
          if (isFipsRegion(providedRegion)) {
            return true;
          }
          return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        }
      };
    }, "resolveRegionConfig");
  }
});

// node_modules/@aws-sdk/client-sso/dist-cjs/index.js
var require_dist_cjs47 = __commonJS({
  "node_modules/@aws-sdk/client-sso/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      GetRoleCredentialsCommand: () => GetRoleCredentialsCommand,
      GetRoleCredentialsRequestFilterSensitiveLog: () => GetRoleCredentialsRequestFilterSensitiveLog,
      GetRoleCredentialsResponseFilterSensitiveLog: () => GetRoleCredentialsResponseFilterSensitiveLog,
      InvalidRequestException: () => InvalidRequestException,
      ListAccountRolesCommand: () => ListAccountRolesCommand,
      ListAccountRolesRequestFilterSensitiveLog: () => ListAccountRolesRequestFilterSensitiveLog,
      ListAccountsCommand: () => ListAccountsCommand,
      ListAccountsRequestFilterSensitiveLog: () => ListAccountsRequestFilterSensitiveLog,
      LogoutCommand: () => LogoutCommand,
      LogoutRequestFilterSensitiveLog: () => LogoutRequestFilterSensitiveLog,
      ResourceNotFoundException: () => ResourceNotFoundException,
      RoleCredentialsFilterSensitiveLog: () => RoleCredentialsFilterSensitiveLog,
      SSO: () => SSO,
      SSOClient: () => SSOClient,
      SSOServiceException: () => SSOServiceException,
      TooManyRequestsException: () => TooManyRequestsException,
      UnauthorizedException: () => UnauthorizedException,
      __Client: () => import_smithy_client.Client,
      paginateListAccountRoles: () => paginateListAccountRoles,
      paginateListAccounts: () => paginateListAccounts
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_middleware_host_header = require_dist_cjs3();
    var import_middleware_logger = require_dist_cjs4();
    var import_middleware_recursion_detection = require_dist_cjs5();
    var import_middleware_user_agent = require_dist_cjs8();
    var import_config_resolver = require_dist_cjs11();
    var import_core = require_dist_cjs34();
    var import_middleware_content_length = require_dist_cjs36();
    var import_middleware_endpoint = require_dist_cjs18();
    var import_middleware_retry = require_dist_cjs33();
    var import_httpAuthSchemeProvider = require_httpAuthSchemeProvider2();
    var resolveClientEndpointParameters = /* @__PURE__ */ __name((options) => {
      return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "awsssoportal"
      };
    }, "resolveClientEndpointParameters");
    var commonParams = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
    var import_runtimeConfig = require_runtimeConfig();
    var import_region_config_resolver = require_dist_cjs46();
    var import_protocol_http = require_dist_cjs2();
    var import_smithy_client = require_dist_cjs32();
    var getHttpAuthExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    }, "getHttpAuthExtensionConfiguration");
    var resolveHttpAuthRuntimeConfig = /* @__PURE__ */ __name((config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    }, "resolveHttpAuthRuntimeConfig");
    var asPartial = /* @__PURE__ */ __name((t) => t, "asPartial");
    var resolveRuntimeExtensions = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
      const extensionConfiguration = {
        ...asPartial((0, import_region_config_resolver.getAwsRegionExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, import_smithy_client.getDefaultExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, import_protocol_http.getHttpHandlerExtensionConfiguration)(runtimeConfig)),
        ...asPartial(getHttpAuthExtensionConfiguration(runtimeConfig))
      };
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return {
        ...runtimeConfig,
        ...(0, import_region_config_resolver.resolveAwsRegionExtensionConfiguration)(extensionConfiguration),
        ...(0, import_smithy_client.resolveDefaultRuntimeConfig)(extensionConfiguration),
        ...(0, import_protocol_http.resolveHttpHandlerRuntimeConfig)(extensionConfiguration),
        ...resolveHttpAuthRuntimeConfig(extensionConfiguration)
      };
    }, "resolveRuntimeExtensions");
    var _SSOClient = class _SSOClient extends import_smithy_client.Client {
      constructor(...[configuration]) {
        const _config_0 = (0, import_runtimeConfig.getRuntimeConfig)(configuration || {});
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = (0, import_config_resolver.resolveRegionConfig)(_config_1);
        const _config_3 = (0, import_middleware_endpoint.resolveEndpointConfig)(_config_2);
        const _config_4 = (0, import_middleware_retry.resolveRetryConfig)(_config_3);
        const _config_5 = (0, import_middleware_host_header.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0, import_middleware_user_agent.resolveUserAgentConfig)(_config_5);
        const _config_7 = (0, import_httpAuthSchemeProvider.resolveHttpAuthSchemeConfig)(_config_6);
        const _config_8 = resolveRuntimeExtensions(_config_7, (configuration == null ? void 0 : configuration.extensions) || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use((0, import_middleware_retry.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_content_length.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_host_header.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_logger.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_recursion_detection.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_user_agent.getUserAgentPlugin)(this.config));
        this.middlewareStack.use(
          (0, import_core.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
            httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
            identityProviderConfigProvider: this.getIdentityProviderConfigProvider()
          })
        );
        this.middlewareStack.use((0, import_core.getHttpSigningPlugin)(this.config));
      }
      /**
       * Destroy underlying resources, like sockets. It's usually not necessary to do this.
       * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
       * Otherwise, sockets might stay open for quite a long time before the server terminates them.
       */
      destroy() {
        super.destroy();
      }
      getDefaultHttpAuthSchemeParametersProvider() {
        return import_httpAuthSchemeProvider.defaultSSOHttpAuthSchemeParametersProvider;
      }
      getIdentityProviderConfigProvider() {
        return async (config) => new import_core.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config.credentials
        });
      }
    };
    __name(_SSOClient, "SSOClient");
    var SSOClient = _SSOClient;
    var import_middleware_serde = require_dist_cjs17();
    var import_types = require_dist_cjs();
    var _SSOServiceException = class _SSOServiceException2 extends import_smithy_client.ServiceException {
      /**
       * @internal
       */
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SSOServiceException2.prototype);
      }
    };
    __name(_SSOServiceException, "SSOServiceException");
    var SSOServiceException = _SSOServiceException;
    var _InvalidRequestException = class _InvalidRequestException2 extends SSOServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidRequestException2.prototype);
      }
    };
    __name(_InvalidRequestException, "InvalidRequestException");
    var InvalidRequestException = _InvalidRequestException;
    var _ResourceNotFoundException = class _ResourceNotFoundException2 extends SSOServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "ResourceNotFoundException",
          $fault: "client",
          ...opts
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _ResourceNotFoundException2.prototype);
      }
    };
    __name(_ResourceNotFoundException, "ResourceNotFoundException");
    var ResourceNotFoundException = _ResourceNotFoundException;
    var _TooManyRequestsException = class _TooManyRequestsException2 extends SSOServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "TooManyRequestsException",
          $fault: "client",
          ...opts
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _TooManyRequestsException2.prototype);
      }
    };
    __name(_TooManyRequestsException, "TooManyRequestsException");
    var TooManyRequestsException = _TooManyRequestsException;
    var _UnauthorizedException = class _UnauthorizedException2 extends SSOServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "UnauthorizedException",
          $fault: "client",
          ...opts
        });
        this.name = "UnauthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _UnauthorizedException2.prototype);
      }
    };
    __name(_UnauthorizedException, "UnauthorizedException");
    var UnauthorizedException = _UnauthorizedException;
    var GetRoleCredentialsRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: import_smithy_client.SENSITIVE_STRING }
    }), "GetRoleCredentialsRequestFilterSensitiveLog");
    var RoleCredentialsFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.secretAccessKey && { secretAccessKey: import_smithy_client.SENSITIVE_STRING },
      ...obj.sessionToken && { sessionToken: import_smithy_client.SENSITIVE_STRING }
    }), "RoleCredentialsFilterSensitiveLog");
    var GetRoleCredentialsResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.roleCredentials && { roleCredentials: RoleCredentialsFilterSensitiveLog(obj.roleCredentials) }
    }), "GetRoleCredentialsResponseFilterSensitiveLog");
    var ListAccountRolesRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: import_smithy_client.SENSITIVE_STRING }
    }), "ListAccountRolesRequestFilterSensitiveLog");
    var ListAccountsRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: import_smithy_client.SENSITIVE_STRING }
    }), "ListAccountsRequestFilterSensitiveLog");
    var LogoutRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: import_smithy_client.SENSITIVE_STRING }
    }), "LogoutRequestFilterSensitiveLog");
    var import_core2 = require_dist_cjs38();
    var se_GetRoleCredentialsCommand = /* @__PURE__ */ __name(async (input, context) => {
      const b = (0, import_core.requestBuilder)(input, context);
      const headers = (0, import_smithy_client.map)({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b.bp("/federation/credentials");
      const query = (0, import_smithy_client.map)({
        [_rn]: [, (0, import_smithy_client.expectNonNull)(input[_rN], `roleName`)],
        [_ai]: [, (0, import_smithy_client.expectNonNull)(input[_aI], `accountId`)]
      });
      let body;
      b.m("GET").h(headers).q(query).b(body);
      return b.build();
    }, "se_GetRoleCredentialsCommand");
    var se_ListAccountRolesCommand = /* @__PURE__ */ __name(async (input, context) => {
      const b = (0, import_core.requestBuilder)(input, context);
      const headers = (0, import_smithy_client.map)({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b.bp("/assignment/roles");
      const query = (0, import_smithy_client.map)({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()],
        [_ai]: [, (0, import_smithy_client.expectNonNull)(input[_aI], `accountId`)]
      });
      let body;
      b.m("GET").h(headers).q(query).b(body);
      return b.build();
    }, "se_ListAccountRolesCommand");
    var se_ListAccountsCommand = /* @__PURE__ */ __name(async (input, context) => {
      const b = (0, import_core.requestBuilder)(input, context);
      const headers = (0, import_smithy_client.map)({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b.bp("/assignment/accounts");
      const query = (0, import_smithy_client.map)({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()]
      });
      let body;
      b.m("GET").h(headers).q(query).b(body);
      return b.build();
    }, "se_ListAccountsCommand");
    var se_LogoutCommand = /* @__PURE__ */ __name(async (input, context) => {
      const b = (0, import_core.requestBuilder)(input, context);
      const headers = (0, import_smithy_client.map)({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b.bp("/logout");
      let body;
      b.m("POST").h(headers).b(body);
      return b.build();
    }, "se_LogoutCommand");
    var de_GetRoleCredentialsCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const contents = (0, import_smithy_client.map)({
        $metadata: deserializeMetadata(output)
      });
      const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await (0, import_core2.parseJsonBody)(output.body, context)), "body");
      const doc = (0, import_smithy_client.take)(data, {
        roleCredentials: import_smithy_client._json
      });
      Object.assign(contents, doc);
      return contents;
    }, "de_GetRoleCredentialsCommand");
    var de_ListAccountRolesCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const contents = (0, import_smithy_client.map)({
        $metadata: deserializeMetadata(output)
      });
      const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await (0, import_core2.parseJsonBody)(output.body, context)), "body");
      const doc = (0, import_smithy_client.take)(data, {
        nextToken: import_smithy_client.expectString,
        roleList: import_smithy_client._json
      });
      Object.assign(contents, doc);
      return contents;
    }, "de_ListAccountRolesCommand");
    var de_ListAccountsCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const contents = (0, import_smithy_client.map)({
        $metadata: deserializeMetadata(output)
      });
      const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await (0, import_core2.parseJsonBody)(output.body, context)), "body");
      const doc = (0, import_smithy_client.take)(data, {
        accountList: import_smithy_client._json,
        nextToken: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      return contents;
    }, "de_ListAccountsCommand");
    var de_LogoutCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const contents = (0, import_smithy_client.map)({
        $metadata: deserializeMetadata(output)
      });
      await (0, import_smithy_client.collectBody)(output.body, context);
      return contents;
    }, "de_LogoutCommand");
    var de_CommandError = /* @__PURE__ */ __name(async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await (0, import_core2.parseJsonErrorBody)(output.body, context)
      };
      const errorCode = (0, import_core2.loadRestJsonErrorCode)(output, parsedOutput.body);
      switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
          throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
          throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
          throw await de_UnauthorizedExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody,
            errorCode
          });
      }
    }, "de_CommandError");
    var throwDefaultError = (0, import_smithy_client.withBaseException)(SSOServiceException);
    var de_InvalidRequestExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        message: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    }, "de_InvalidRequestExceptionRes");
    var de_ResourceNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        message: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    }, "de_ResourceNotFoundExceptionRes");
    var de_TooManyRequestsExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        message: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new TooManyRequestsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    }, "de_TooManyRequestsExceptionRes");
    var de_UnauthorizedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        message: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new UnauthorizedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    }, "de_UnauthorizedExceptionRes");
    var deserializeMetadata = /* @__PURE__ */ __name((output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    }), "deserializeMetadata");
    var isSerializableHeaderValue = /* @__PURE__ */ __name((value) => value !== void 0 && value !== null && value !== "" && (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) && (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0), "isSerializableHeaderValue");
    var _aI = "accountId";
    var _aT = "accessToken";
    var _ai = "account_id";
    var _mR = "maxResults";
    var _mr = "max_result";
    var _nT = "nextToken";
    var _nt = "next_token";
    var _rN = "roleName";
    var _rn = "role_name";
    var _xasbt = "x-amz-sso_bearer_token";
    var _GetRoleCredentialsCommand = class _GetRoleCredentialsCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").f(GetRoleCredentialsRequestFilterSensitiveLog, GetRoleCredentialsResponseFilterSensitiveLog).ser(se_GetRoleCredentialsCommand).de(de_GetRoleCredentialsCommand).build() {
    };
    __name(_GetRoleCredentialsCommand, "GetRoleCredentialsCommand");
    var GetRoleCredentialsCommand = _GetRoleCredentialsCommand;
    var _ListAccountRolesCommand = class _ListAccountRolesCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "ListAccountRoles", {}).n("SSOClient", "ListAccountRolesCommand").f(ListAccountRolesRequestFilterSensitiveLog, void 0).ser(se_ListAccountRolesCommand).de(de_ListAccountRolesCommand).build() {
    };
    __name(_ListAccountRolesCommand, "ListAccountRolesCommand");
    var ListAccountRolesCommand = _ListAccountRolesCommand;
    var _ListAccountsCommand = class _ListAccountsCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "ListAccounts", {}).n("SSOClient", "ListAccountsCommand").f(ListAccountsRequestFilterSensitiveLog, void 0).ser(se_ListAccountsCommand).de(de_ListAccountsCommand).build() {
    };
    __name(_ListAccountsCommand, "ListAccountsCommand");
    var ListAccountsCommand = _ListAccountsCommand;
    var _LogoutCommand = class _LogoutCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "Logout", {}).n("SSOClient", "LogoutCommand").f(LogoutRequestFilterSensitiveLog, void 0).ser(se_LogoutCommand).de(de_LogoutCommand).build() {
    };
    __name(_LogoutCommand, "LogoutCommand");
    var LogoutCommand = _LogoutCommand;
    var commands = {
      GetRoleCredentialsCommand,
      ListAccountRolesCommand,
      ListAccountsCommand,
      LogoutCommand
    };
    var _SSO = class _SSO extends SSOClient {
    };
    __name(_SSO, "SSO");
    var SSO = _SSO;
    (0, import_smithy_client.createAggregatedClient)(commands, SSO);
    var paginateListAccountRoles = (0, import_core.createPaginator)(SSOClient, ListAccountRolesCommand, "nextToken", "nextToken", "maxResults");
    var paginateListAccounts = (0, import_core.createPaginator)(SSOClient, ListAccountsCommand, "nextToken", "nextToken", "maxResults");
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-cjs/auth/httpAuthSchemeProvider.js
var require_httpAuthSchemeProvider3 = __commonJS({
  "node_modules/@aws-sdk/client-sso-oidc/dist-cjs/auth/httpAuthSchemeProvider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.resolveHttpAuthSchemeConfig = exports2.defaultSSOOIDCHttpAuthSchemeProvider = exports2.defaultSSOOIDCHttpAuthSchemeParametersProvider = void 0;
    var core_1 = require_dist_cjs38();
    var util_middleware_1 = require_dist_cjs10();
    var defaultSSOOIDCHttpAuthSchemeParametersProvider = async (config, context, input) => {
      return {
        operation: (0, util_middleware_1.getSmithyContext)(context).operation,
        region: await (0, util_middleware_1.normalizeProvider)(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    exports2.defaultSSOOIDCHttpAuthSchemeParametersProvider = defaultSSOOIDCHttpAuthSchemeParametersProvider;
    function createAwsAuthSigv4HttpAuthOption(authParameters) {
      return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
          name: "sso-oauth",
          region: authParameters.region
        },
        propertiesExtractor: (config, context) => ({
          signingProperties: {
            config,
            context
          }
        })
      };
    }
    function createSmithyApiNoAuthHttpAuthOption(authParameters) {
      return {
        schemeId: "smithy.api#noAuth"
      };
    }
    var defaultSSOOIDCHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "CreateToken": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        case "RegisterClient": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        case "StartDeviceAuthorization": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
      }
      return options;
    };
    exports2.defaultSSOOIDCHttpAuthSchemeProvider = defaultSSOOIDCHttpAuthSchemeProvider;
    var resolveHttpAuthSchemeConfig = (config) => {
      const config_0 = (0, core_1.resolveAwsSdkSigV4Config)(config);
      return {
        ...config_0
      };
    };
    exports2.resolveHttpAuthSchemeConfig = resolveHttpAuthSchemeConfig;
  }
});

// node_modules/@aws-sdk/client-sso-oidc/package.json
var require_package3 = __commonJS({
  "node_modules/@aws-sdk/client-sso-oidc/package.json"(exports2, module2) {
    module2.exports = {
      name: "@aws-sdk/client-sso-oidc",
      description: "AWS SDK for JavaScript Sso Oidc Client for Node.js, Browser and React Native",
      version: "3.583.0",
      scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-sso-oidc",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo sso-oidc"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "3.0.0",
        "@aws-crypto/sha256-js": "3.0.0",
        "@aws-sdk/client-sts": "3.583.0",
        "@aws-sdk/core": "3.582.0",
        "@aws-sdk/credential-provider-node": "3.583.0",
        "@aws-sdk/middleware-host-header": "3.577.0",
        "@aws-sdk/middleware-logger": "3.577.0",
        "@aws-sdk/middleware-recursion-detection": "3.577.0",
        "@aws-sdk/middleware-user-agent": "3.583.0",
        "@aws-sdk/region-config-resolver": "3.577.0",
        "@aws-sdk/types": "3.577.0",
        "@aws-sdk/util-endpoints": "3.583.0",
        "@aws-sdk/util-user-agent-browser": "3.577.0",
        "@aws-sdk/util-user-agent-node": "3.577.0",
        "@smithy/config-resolver": "^3.0.0",
        "@smithy/core": "^2.0.1",
        "@smithy/fetch-http-handler": "^3.0.1",
        "@smithy/hash-node": "^3.0.0",
        "@smithy/invalid-dependency": "^3.0.0",
        "@smithy/middleware-content-length": "^3.0.0",
        "@smithy/middleware-endpoint": "^3.0.0",
        "@smithy/middleware-retry": "^3.0.1",
        "@smithy/middleware-serde": "^3.0.0",
        "@smithy/middleware-stack": "^3.0.0",
        "@smithy/node-config-provider": "^3.0.0",
        "@smithy/node-http-handler": "^3.0.0",
        "@smithy/protocol-http": "^4.0.0",
        "@smithy/smithy-client": "^3.0.1",
        "@smithy/types": "^3.0.0",
        "@smithy/url-parser": "^3.0.0",
        "@smithy/util-base64": "^3.0.0",
        "@smithy/util-body-length-browser": "^3.0.0",
        "@smithy/util-body-length-node": "^3.0.0",
        "@smithy/util-defaults-mode-browser": "^3.0.1",
        "@smithy/util-defaults-mode-node": "^3.0.1",
        "@smithy/util-endpoints": "^2.0.0",
        "@smithy/util-middleware": "^3.0.0",
        "@smithy/util-retry": "^3.0.0",
        "@smithy/util-utf8": "^3.0.0",
        tslib: "^2.6.2"
      },
      devDependencies: {
        "@tsconfig/node16": "16.1.3",
        "@types/node": "^16.18.96",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~4.9.5"
      },
      engines: {
        node: ">=16.0.0"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso-oidc",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-sso-oidc"
      }
    };
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-cjs/endpoint/ruleset.js
var require_ruleset2 = __commonJS({
  "node_modules/@aws-sdk/client-sso-oidc/dist-cjs/endpoint/ruleset.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ruleSet = void 0;
    var u = "required";
    var v = "fn";
    var w = "argv";
    var x = "ref";
    var a = true;
    var b = "isSet";
    var c = "booleanEquals";
    var d = "error";
    var e = "endpoint";
    var f = "tree";
    var g = "PartitionResult";
    var h = "getAttr";
    var i = { [u]: false, "type": "String" };
    var j = { [u]: true, "default": false, "type": "Boolean" };
    var k = { [x]: "Endpoint" };
    var l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] };
    var m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] };
    var n = {};
    var o = { [v]: h, [w]: [{ [x]: g }, "supportsFIPS"] };
    var p = { [x]: g };
    var q = { [v]: c, [w]: [true, { [v]: h, [w]: [p, "supportsDualStack"] }] };
    var r = [l];
    var s = [m];
    var t = [{ [x]: "Region" }];
    var _data = { version: "1.0", parameters: { Region: i, UseDualStack: j, UseFIPS: j, Endpoint: i }, rules: [{ conditions: [{ [v]: b, [w]: [k] }], rules: [{ conditions: r, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: s, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: k, properties: n, headers: n }, type: e }], type: f }, { conditions: [{ [v]: b, [w]: t }], rules: [{ conditions: [{ [v]: "aws.partition", [w]: t, assign: g }], rules: [{ conditions: [l, m], rules: [{ conditions: [{ [v]: c, [w]: [a, o] }, q], rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: r, rules: [{ conditions: [{ [v]: c, [w]: [o, a] }], rules: [{ conditions: [{ [v]: "stringEquals", [w]: [{ [v]: h, [w]: [p, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://oidc.{Region}.amazonaws.com", properties: n, headers: n }, type: e }, { endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: s, rules: [{ conditions: [q], rules: [{ endpoint: { url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
    exports2.ruleSet = _data;
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-cjs/endpoint/endpointResolver.js
var require_endpointResolver2 = __commonJS({
  "node_modules/@aws-sdk/client-sso-oidc/dist-cjs/endpoint/endpointResolver.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.defaultEndpointResolver = void 0;
    var util_endpoints_1 = require_dist_cjs7();
    var util_endpoints_2 = require_dist_cjs6();
    var ruleset_1 = require_ruleset2();
    var defaultEndpointResolver = (endpointParams, context = {}) => {
      return (0, util_endpoints_2.resolveEndpoint)(ruleset_1.ruleSet, {
        endpointParams,
        logger: context.logger
      });
    };
    exports2.defaultEndpointResolver = defaultEndpointResolver;
    util_endpoints_2.customEndpointFunctions.aws = util_endpoints_1.awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-cjs/runtimeConfig.shared.js
var require_runtimeConfig_shared2 = __commonJS({
  "node_modules/@aws-sdk/client-sso-oidc/dist-cjs/runtimeConfig.shared.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getRuntimeConfig = void 0;
    var core_1 = require_dist_cjs38();
    var core_2 = require_dist_cjs34();
    var smithy_client_1 = require_dist_cjs32();
    var url_parser_1 = require_dist_cjs16();
    var util_base64_1 = require_dist_cjs25();
    var util_utf8_1 = require_dist_cjs24();
    var httpAuthSchemeProvider_1 = require_httpAuthSchemeProvider3();
    var endpointResolver_1 = require_endpointResolver2();
    var getRuntimeConfig = (config) => {
      return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? util_base64_1.fromBase64,
        base64Encoder: config?.base64Encoder ?? util_base64_1.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? endpointResolver_1.defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? httpAuthSchemeProvider_1.defaultSSOOIDCHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
            signer: new core_1.AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new core_2.NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new smithy_client_1.NoOpLogger(),
        serviceId: config?.serviceId ?? "SSO OIDC",
        urlParser: config?.urlParser ?? url_parser_1.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? util_utf8_1.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? util_utf8_1.toUtf8
      };
    };
    exports2.getRuntimeConfig = getRuntimeConfig;
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-cjs/runtimeConfig.js
var require_runtimeConfig2 = __commonJS({
  "node_modules/@aws-sdk/client-sso-oidc/dist-cjs/runtimeConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getRuntimeConfig = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var package_json_1 = tslib_1.__importDefault(require_package3());
    var core_1 = require_dist_cjs38();
    var credential_provider_node_1 = require_dist_cjs55();
    var util_user_agent_node_1 = require_dist_cjs42();
    var config_resolver_1 = require_dist_cjs11();
    var hash_node_1 = require_dist_cjs43();
    var middleware_retry_1 = require_dist_cjs33();
    var node_config_provider_1 = require_dist_cjs14();
    var node_http_handler_1 = require_dist_cjs28();
    var util_body_length_node_1 = require_dist_cjs44();
    var util_retry_1 = require_dist_cjs20();
    var runtimeConfig_shared_1 = require_runtimeConfig_shared2();
    var smithy_client_1 = require_dist_cjs32();
    var util_defaults_mode_node_1 = require_dist_cjs45();
    var smithy_client_2 = require_dist_cjs32();
    var getRuntimeConfig = (config) => {
      (0, smithy_client_2.emitWarningIfUnsupportedVersion)(process.version);
      const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
      const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
      const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
      (0, core_1.emitWarningIfUnsupportedVersion)(process.version);
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? util_body_length_node_1.calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? credential_provider_node_1.defaultProvider,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, util_user_agent_node_1.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        maxAttempts: config?.maxAttempts ?? (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: node_http_handler_1.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? (0, node_config_provider_1.loadConfig)({
          ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || util_retry_1.DEFAULT_RETRY_MODE
        }),
        sha256: config?.sha256 ?? hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? node_http_handler_1.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      };
    };
    exports2.getRuntimeConfig = getRuntimeConfig;
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-cjs/index.js
var require_dist_cjs48 = __commonJS({
  "node_modules/@aws-sdk/client-sso-oidc/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      AccessDeniedException: () => AccessDeniedException,
      AuthorizationPendingException: () => AuthorizationPendingException,
      CreateTokenCommand: () => CreateTokenCommand,
      CreateTokenRequestFilterSensitiveLog: () => CreateTokenRequestFilterSensitiveLog,
      CreateTokenResponseFilterSensitiveLog: () => CreateTokenResponseFilterSensitiveLog,
      CreateTokenWithIAMCommand: () => CreateTokenWithIAMCommand,
      CreateTokenWithIAMRequestFilterSensitiveLog: () => CreateTokenWithIAMRequestFilterSensitiveLog,
      CreateTokenWithIAMResponseFilterSensitiveLog: () => CreateTokenWithIAMResponseFilterSensitiveLog,
      ExpiredTokenException: () => ExpiredTokenException,
      InternalServerException: () => InternalServerException,
      InvalidClientException: () => InvalidClientException,
      InvalidClientMetadataException: () => InvalidClientMetadataException,
      InvalidGrantException: () => InvalidGrantException,
      InvalidRedirectUriException: () => InvalidRedirectUriException,
      InvalidRequestException: () => InvalidRequestException,
      InvalidRequestRegionException: () => InvalidRequestRegionException,
      InvalidScopeException: () => InvalidScopeException,
      RegisterClientCommand: () => RegisterClientCommand,
      RegisterClientResponseFilterSensitiveLog: () => RegisterClientResponseFilterSensitiveLog,
      SSOOIDC: () => SSOOIDC,
      SSOOIDCClient: () => SSOOIDCClient,
      SSOOIDCServiceException: () => SSOOIDCServiceException,
      SlowDownException: () => SlowDownException,
      StartDeviceAuthorizationCommand: () => StartDeviceAuthorizationCommand,
      StartDeviceAuthorizationRequestFilterSensitiveLog: () => StartDeviceAuthorizationRequestFilterSensitiveLog,
      UnauthorizedClientException: () => UnauthorizedClientException,
      UnsupportedGrantTypeException: () => UnsupportedGrantTypeException,
      __Client: () => import_smithy_client.Client
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_middleware_host_header = require_dist_cjs3();
    var import_middleware_logger = require_dist_cjs4();
    var import_middleware_recursion_detection = require_dist_cjs5();
    var import_middleware_user_agent = require_dist_cjs8();
    var import_config_resolver = require_dist_cjs11();
    var import_core = require_dist_cjs34();
    var import_middleware_content_length = require_dist_cjs36();
    var import_middleware_endpoint = require_dist_cjs18();
    var import_middleware_retry = require_dist_cjs33();
    var import_httpAuthSchemeProvider = require_httpAuthSchemeProvider3();
    var resolveClientEndpointParameters = /* @__PURE__ */ __name((options) => {
      return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "sso-oauth"
      };
    }, "resolveClientEndpointParameters");
    var commonParams = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
    var import_runtimeConfig = require_runtimeConfig2();
    var import_region_config_resolver = require_dist_cjs46();
    var import_protocol_http = require_dist_cjs2();
    var import_smithy_client = require_dist_cjs32();
    var getHttpAuthExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    }, "getHttpAuthExtensionConfiguration");
    var resolveHttpAuthRuntimeConfig = /* @__PURE__ */ __name((config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    }, "resolveHttpAuthRuntimeConfig");
    var asPartial = /* @__PURE__ */ __name((t) => t, "asPartial");
    var resolveRuntimeExtensions = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
      const extensionConfiguration = {
        ...asPartial((0, import_region_config_resolver.getAwsRegionExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, import_smithy_client.getDefaultExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, import_protocol_http.getHttpHandlerExtensionConfiguration)(runtimeConfig)),
        ...asPartial(getHttpAuthExtensionConfiguration(runtimeConfig))
      };
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return {
        ...runtimeConfig,
        ...(0, import_region_config_resolver.resolveAwsRegionExtensionConfiguration)(extensionConfiguration),
        ...(0, import_smithy_client.resolveDefaultRuntimeConfig)(extensionConfiguration),
        ...(0, import_protocol_http.resolveHttpHandlerRuntimeConfig)(extensionConfiguration),
        ...resolveHttpAuthRuntimeConfig(extensionConfiguration)
      };
    }, "resolveRuntimeExtensions");
    var _SSOOIDCClient = class _SSOOIDCClient extends import_smithy_client.Client {
      constructor(...[configuration]) {
        const _config_0 = (0, import_runtimeConfig.getRuntimeConfig)(configuration || {});
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = (0, import_config_resolver.resolveRegionConfig)(_config_1);
        const _config_3 = (0, import_middleware_endpoint.resolveEndpointConfig)(_config_2);
        const _config_4 = (0, import_middleware_retry.resolveRetryConfig)(_config_3);
        const _config_5 = (0, import_middleware_host_header.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0, import_middleware_user_agent.resolveUserAgentConfig)(_config_5);
        const _config_7 = (0, import_httpAuthSchemeProvider.resolveHttpAuthSchemeConfig)(_config_6);
        const _config_8 = resolveRuntimeExtensions(_config_7, (configuration == null ? void 0 : configuration.extensions) || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use((0, import_middleware_retry.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_content_length.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_host_header.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_logger.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_recursion_detection.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_user_agent.getUserAgentPlugin)(this.config));
        this.middlewareStack.use(
          (0, import_core.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
            httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
            identityProviderConfigProvider: this.getIdentityProviderConfigProvider()
          })
        );
        this.middlewareStack.use((0, import_core.getHttpSigningPlugin)(this.config));
      }
      /**
       * Destroy underlying resources, like sockets. It's usually not necessary to do this.
       * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
       * Otherwise, sockets might stay open for quite a long time before the server terminates them.
       */
      destroy() {
        super.destroy();
      }
      getDefaultHttpAuthSchemeParametersProvider() {
        return import_httpAuthSchemeProvider.defaultSSOOIDCHttpAuthSchemeParametersProvider;
      }
      getIdentityProviderConfigProvider() {
        return async (config) => new import_core.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config.credentials
        });
      }
    };
    __name(_SSOOIDCClient, "SSOOIDCClient");
    var SSOOIDCClient = _SSOOIDCClient;
    var import_middleware_serde = require_dist_cjs17();
    var import_types = require_dist_cjs();
    var _SSOOIDCServiceException = class _SSOOIDCServiceException2 extends import_smithy_client.ServiceException {
      /**
       * @internal
       */
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SSOOIDCServiceException2.prototype);
      }
    };
    __name(_SSOOIDCServiceException, "SSOOIDCServiceException");
    var SSOOIDCServiceException = _SSOOIDCServiceException;
    var _AccessDeniedException = class _AccessDeniedException2 extends SSOOIDCServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "AccessDeniedException",
          $fault: "client",
          ...opts
        });
        this.name = "AccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _AccessDeniedException2.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    __name(_AccessDeniedException, "AccessDeniedException");
    var AccessDeniedException = _AccessDeniedException;
    var _AuthorizationPendingException = class _AuthorizationPendingException2 extends SSOOIDCServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "AuthorizationPendingException",
          $fault: "client",
          ...opts
        });
        this.name = "AuthorizationPendingException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _AuthorizationPendingException2.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    __name(_AuthorizationPendingException, "AuthorizationPendingException");
    var AuthorizationPendingException = _AuthorizationPendingException;
    var _ExpiredTokenException = class _ExpiredTokenException2 extends SSOOIDCServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...opts
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _ExpiredTokenException2.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    __name(_ExpiredTokenException, "ExpiredTokenException");
    var ExpiredTokenException = _ExpiredTokenException;
    var _InternalServerException = class _InternalServerException2 extends SSOOIDCServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InternalServerException",
          $fault: "server",
          ...opts
        });
        this.name = "InternalServerException";
        this.$fault = "server";
        Object.setPrototypeOf(this, _InternalServerException2.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    __name(_InternalServerException, "InternalServerException");
    var InternalServerException = _InternalServerException;
    var _InvalidClientException = class _InvalidClientException2 extends SSOOIDCServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidClientException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidClientException2.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    __name(_InvalidClientException, "InvalidClientException");
    var InvalidClientException = _InvalidClientException;
    var _InvalidGrantException = class _InvalidGrantException2 extends SSOOIDCServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidGrantException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidGrantException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidGrantException2.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    __name(_InvalidGrantException, "InvalidGrantException");
    var InvalidGrantException = _InvalidGrantException;
    var _InvalidRequestException = class _InvalidRequestException2 extends SSOOIDCServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidRequestException2.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    __name(_InvalidRequestException, "InvalidRequestException");
    var InvalidRequestException = _InvalidRequestException;
    var _InvalidScopeException = class _InvalidScopeException2 extends SSOOIDCServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidScopeException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidScopeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidScopeException2.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    __name(_InvalidScopeException, "InvalidScopeException");
    var InvalidScopeException = _InvalidScopeException;
    var _SlowDownException = class _SlowDownException2 extends SSOOIDCServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "SlowDownException",
          $fault: "client",
          ...opts
        });
        this.name = "SlowDownException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _SlowDownException2.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    __name(_SlowDownException, "SlowDownException");
    var SlowDownException = _SlowDownException;
    var _UnauthorizedClientException = class _UnauthorizedClientException2 extends SSOOIDCServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "UnauthorizedClientException",
          $fault: "client",
          ...opts
        });
        this.name = "UnauthorizedClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _UnauthorizedClientException2.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    __name(_UnauthorizedClientException, "UnauthorizedClientException");
    var UnauthorizedClientException = _UnauthorizedClientException;
    var _UnsupportedGrantTypeException = class _UnsupportedGrantTypeException2 extends SSOOIDCServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "UnsupportedGrantTypeException",
          $fault: "client",
          ...opts
        });
        this.name = "UnsupportedGrantTypeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _UnsupportedGrantTypeException2.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    __name(_UnsupportedGrantTypeException, "UnsupportedGrantTypeException");
    var UnsupportedGrantTypeException = _UnsupportedGrantTypeException;
    var _InvalidRequestRegionException = class _InvalidRequestRegionException2 extends SSOOIDCServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidRequestRegionException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidRequestRegionException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidRequestRegionException2.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
        this.endpoint = opts.endpoint;
        this.region = opts.region;
      }
    };
    __name(_InvalidRequestRegionException, "InvalidRequestRegionException");
    var InvalidRequestRegionException = _InvalidRequestRegionException;
    var _InvalidClientMetadataException = class _InvalidClientMetadataException2 extends SSOOIDCServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidClientMetadataException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidClientMetadataException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidClientMetadataException2.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    __name(_InvalidClientMetadataException, "InvalidClientMetadataException");
    var InvalidClientMetadataException = _InvalidClientMetadataException;
    var _InvalidRedirectUriException = class _InvalidRedirectUriException2 extends SSOOIDCServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidRedirectUriException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidRedirectUriException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidRedirectUriException2.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    __name(_InvalidRedirectUriException, "InvalidRedirectUriException");
    var InvalidRedirectUriException = _InvalidRedirectUriException;
    var CreateTokenRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.clientSecret && { clientSecret: import_smithy_client.SENSITIVE_STRING },
      ...obj.refreshToken && { refreshToken: import_smithy_client.SENSITIVE_STRING },
      ...obj.codeVerifier && { codeVerifier: import_smithy_client.SENSITIVE_STRING }
    }), "CreateTokenRequestFilterSensitiveLog");
    var CreateTokenResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: import_smithy_client.SENSITIVE_STRING },
      ...obj.refreshToken && { refreshToken: import_smithy_client.SENSITIVE_STRING },
      ...obj.idToken && { idToken: import_smithy_client.SENSITIVE_STRING }
    }), "CreateTokenResponseFilterSensitiveLog");
    var CreateTokenWithIAMRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.refreshToken && { refreshToken: import_smithy_client.SENSITIVE_STRING },
      ...obj.assertion && { assertion: import_smithy_client.SENSITIVE_STRING },
      ...obj.subjectToken && { subjectToken: import_smithy_client.SENSITIVE_STRING },
      ...obj.codeVerifier && { codeVerifier: import_smithy_client.SENSITIVE_STRING }
    }), "CreateTokenWithIAMRequestFilterSensitiveLog");
    var CreateTokenWithIAMResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: import_smithy_client.SENSITIVE_STRING },
      ...obj.refreshToken && { refreshToken: import_smithy_client.SENSITIVE_STRING },
      ...obj.idToken && { idToken: import_smithy_client.SENSITIVE_STRING }
    }), "CreateTokenWithIAMResponseFilterSensitiveLog");
    var RegisterClientResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.clientSecret && { clientSecret: import_smithy_client.SENSITIVE_STRING }
    }), "RegisterClientResponseFilterSensitiveLog");
    var StartDeviceAuthorizationRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.clientSecret && { clientSecret: import_smithy_client.SENSITIVE_STRING }
    }), "StartDeviceAuthorizationRequestFilterSensitiveLog");
    var import_core2 = require_dist_cjs38();
    var se_CreateTokenCommand = /* @__PURE__ */ __name(async (input, context) => {
      const b = (0, import_core.requestBuilder)(input, context);
      const headers = {
        "content-type": "application/json"
      };
      b.bp("/token");
      let body;
      body = JSON.stringify(
        (0, import_smithy_client.take)(input, {
          clientId: [],
          clientSecret: [],
          code: [],
          codeVerifier: [],
          deviceCode: [],
          grantType: [],
          redirectUri: [],
          refreshToken: [],
          scope: (_) => (0, import_smithy_client._json)(_)
        })
      );
      b.m("POST").h(headers).b(body);
      return b.build();
    }, "se_CreateTokenCommand");
    var se_CreateTokenWithIAMCommand = /* @__PURE__ */ __name(async (input, context) => {
      const b = (0, import_core.requestBuilder)(input, context);
      const headers = {
        "content-type": "application/json"
      };
      b.bp("/token");
      const query = (0, import_smithy_client.map)({
        [_ai]: [, "t"]
      });
      let body;
      body = JSON.stringify(
        (0, import_smithy_client.take)(input, {
          assertion: [],
          clientId: [],
          code: [],
          codeVerifier: [],
          grantType: [],
          redirectUri: [],
          refreshToken: [],
          requestedTokenType: [],
          scope: (_) => (0, import_smithy_client._json)(_),
          subjectToken: [],
          subjectTokenType: []
        })
      );
      b.m("POST").h(headers).q(query).b(body);
      return b.build();
    }, "se_CreateTokenWithIAMCommand");
    var se_RegisterClientCommand = /* @__PURE__ */ __name(async (input, context) => {
      const b = (0, import_core.requestBuilder)(input, context);
      const headers = {
        "content-type": "application/json"
      };
      b.bp("/client/register");
      let body;
      body = JSON.stringify(
        (0, import_smithy_client.take)(input, {
          clientName: [],
          clientType: [],
          entitledApplicationArn: [],
          grantTypes: (_) => (0, import_smithy_client._json)(_),
          issuerUrl: [],
          redirectUris: (_) => (0, import_smithy_client._json)(_),
          scopes: (_) => (0, import_smithy_client._json)(_)
        })
      );
      b.m("POST").h(headers).b(body);
      return b.build();
    }, "se_RegisterClientCommand");
    var se_StartDeviceAuthorizationCommand = /* @__PURE__ */ __name(async (input, context) => {
      const b = (0, import_core.requestBuilder)(input, context);
      const headers = {
        "content-type": "application/json"
      };
      b.bp("/device_authorization");
      let body;
      body = JSON.stringify(
        (0, import_smithy_client.take)(input, {
          clientId: [],
          clientSecret: [],
          startUrl: []
        })
      );
      b.m("POST").h(headers).b(body);
      return b.build();
    }, "se_StartDeviceAuthorizationCommand");
    var de_CreateTokenCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const contents = (0, import_smithy_client.map)({
        $metadata: deserializeMetadata(output)
      });
      const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await (0, import_core2.parseJsonBody)(output.body, context)), "body");
      const doc = (0, import_smithy_client.take)(data, {
        accessToken: import_smithy_client.expectString,
        expiresIn: import_smithy_client.expectInt32,
        idToken: import_smithy_client.expectString,
        refreshToken: import_smithy_client.expectString,
        tokenType: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      return contents;
    }, "de_CreateTokenCommand");
    var de_CreateTokenWithIAMCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const contents = (0, import_smithy_client.map)({
        $metadata: deserializeMetadata(output)
      });
      const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await (0, import_core2.parseJsonBody)(output.body, context)), "body");
      const doc = (0, import_smithy_client.take)(data, {
        accessToken: import_smithy_client.expectString,
        expiresIn: import_smithy_client.expectInt32,
        idToken: import_smithy_client.expectString,
        issuedTokenType: import_smithy_client.expectString,
        refreshToken: import_smithy_client.expectString,
        scope: import_smithy_client._json,
        tokenType: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      return contents;
    }, "de_CreateTokenWithIAMCommand");
    var de_RegisterClientCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const contents = (0, import_smithy_client.map)({
        $metadata: deserializeMetadata(output)
      });
      const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await (0, import_core2.parseJsonBody)(output.body, context)), "body");
      const doc = (0, import_smithy_client.take)(data, {
        authorizationEndpoint: import_smithy_client.expectString,
        clientId: import_smithy_client.expectString,
        clientIdIssuedAt: import_smithy_client.expectLong,
        clientSecret: import_smithy_client.expectString,
        clientSecretExpiresAt: import_smithy_client.expectLong,
        tokenEndpoint: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      return contents;
    }, "de_RegisterClientCommand");
    var de_StartDeviceAuthorizationCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const contents = (0, import_smithy_client.map)({
        $metadata: deserializeMetadata(output)
      });
      const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await (0, import_core2.parseJsonBody)(output.body, context)), "body");
      const doc = (0, import_smithy_client.take)(data, {
        deviceCode: import_smithy_client.expectString,
        expiresIn: import_smithy_client.expectInt32,
        interval: import_smithy_client.expectInt32,
        userCode: import_smithy_client.expectString,
        verificationUri: import_smithy_client.expectString,
        verificationUriComplete: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      return contents;
    }, "de_StartDeviceAuthorizationCommand");
    var de_CommandError = /* @__PURE__ */ __name(async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await (0, import_core2.parseJsonErrorBody)(output.body, context)
      };
      const errorCode = (0, import_core2.loadRestJsonErrorCode)(output, parsedOutput.body);
      switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssooidc#AccessDeniedException":
          throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "AuthorizationPendingException":
        case "com.amazonaws.ssooidc#AuthorizationPendingException":
          throw await de_AuthorizationPendingExceptionRes(parsedOutput, context);
        case "ExpiredTokenException":
        case "com.amazonaws.ssooidc#ExpiredTokenException":
          throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
          throw await de_InternalServerExceptionRes(parsedOutput, context);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
          throw await de_InvalidClientExceptionRes(parsedOutput, context);
        case "InvalidGrantException":
        case "com.amazonaws.ssooidc#InvalidGrantException":
          throw await de_InvalidGrantExceptionRes(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
          throw await de_InvalidScopeExceptionRes(parsedOutput, context);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
          throw await de_SlowDownExceptionRes(parsedOutput, context);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
          throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
        case "UnsupportedGrantTypeException":
        case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
          throw await de_UnsupportedGrantTypeExceptionRes(parsedOutput, context);
        case "InvalidRequestRegionException":
        case "com.amazonaws.ssooidc#InvalidRequestRegionException":
          throw await de_InvalidRequestRegionExceptionRes(parsedOutput, context);
        case "InvalidClientMetadataException":
        case "com.amazonaws.ssooidc#InvalidClientMetadataException":
          throw await de_InvalidClientMetadataExceptionRes(parsedOutput, context);
        case "InvalidRedirectUriException":
        case "com.amazonaws.ssooidc#InvalidRedirectUriException":
          throw await de_InvalidRedirectUriExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody,
            errorCode
          });
      }
    }, "de_CommandError");
    var throwDefaultError = (0, import_smithy_client.withBaseException)(SSOOIDCServiceException);
    var de_AccessDeniedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        error: import_smithy_client.expectString,
        error_description: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new AccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    }, "de_AccessDeniedExceptionRes");
    var de_AuthorizationPendingExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        error: import_smithy_client.expectString,
        error_description: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new AuthorizationPendingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    }, "de_AuthorizationPendingExceptionRes");
    var de_ExpiredTokenExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        error: import_smithy_client.expectString,
        error_description: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new ExpiredTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    }, "de_ExpiredTokenExceptionRes");
    var de_InternalServerExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        error: import_smithy_client.expectString,
        error_description: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new InternalServerException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    }, "de_InternalServerExceptionRes");
    var de_InvalidClientExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        error: import_smithy_client.expectString,
        error_description: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    }, "de_InvalidClientExceptionRes");
    var de_InvalidClientMetadataExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        error: import_smithy_client.expectString,
        error_description: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidClientMetadataException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    }, "de_InvalidClientMetadataExceptionRes");
    var de_InvalidGrantExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        error: import_smithy_client.expectString,
        error_description: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidGrantException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    }, "de_InvalidGrantExceptionRes");
    var de_InvalidRedirectUriExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        error: import_smithy_client.expectString,
        error_description: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRedirectUriException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    }, "de_InvalidRedirectUriExceptionRes");
    var de_InvalidRequestExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        error: import_smithy_client.expectString,
        error_description: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    }, "de_InvalidRequestExceptionRes");
    var de_InvalidRequestRegionExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        endpoint: import_smithy_client.expectString,
        error: import_smithy_client.expectString,
        error_description: import_smithy_client.expectString,
        region: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRequestRegionException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    }, "de_InvalidRequestRegionExceptionRes");
    var de_InvalidScopeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        error: import_smithy_client.expectString,
        error_description: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidScopeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    }, "de_InvalidScopeExceptionRes");
    var de_SlowDownExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        error: import_smithy_client.expectString,
        error_description: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new SlowDownException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    }, "de_SlowDownExceptionRes");
    var de_UnauthorizedClientExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        error: import_smithy_client.expectString,
        error_description: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new UnauthorizedClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    }, "de_UnauthorizedClientExceptionRes");
    var de_UnsupportedGrantTypeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        error: import_smithy_client.expectString,
        error_description: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new UnsupportedGrantTypeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    }, "de_UnsupportedGrantTypeExceptionRes");
    var deserializeMetadata = /* @__PURE__ */ __name((output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    }), "deserializeMetadata");
    var _ai = "aws_iam";
    var _CreateTokenCommand = class _CreateTokenCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").f(CreateTokenRequestFilterSensitiveLog, CreateTokenResponseFilterSensitiveLog).ser(se_CreateTokenCommand).de(de_CreateTokenCommand).build() {
    };
    __name(_CreateTokenCommand, "CreateTokenCommand");
    var CreateTokenCommand = _CreateTokenCommand;
    var _CreateTokenWithIAMCommand = class _CreateTokenWithIAMCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AWSSSOOIDCService", "CreateTokenWithIAM", {}).n("SSOOIDCClient", "CreateTokenWithIAMCommand").f(CreateTokenWithIAMRequestFilterSensitiveLog, CreateTokenWithIAMResponseFilterSensitiveLog).ser(se_CreateTokenWithIAMCommand).de(de_CreateTokenWithIAMCommand).build() {
    };
    __name(_CreateTokenWithIAMCommand, "CreateTokenWithIAMCommand");
    var CreateTokenWithIAMCommand = _CreateTokenWithIAMCommand;
    var _RegisterClientCommand = class _RegisterClientCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AWSSSOOIDCService", "RegisterClient", {}).n("SSOOIDCClient", "RegisterClientCommand").f(void 0, RegisterClientResponseFilterSensitiveLog).ser(se_RegisterClientCommand).de(de_RegisterClientCommand).build() {
    };
    __name(_RegisterClientCommand, "RegisterClientCommand");
    var RegisterClientCommand = _RegisterClientCommand;
    var _StartDeviceAuthorizationCommand = class _StartDeviceAuthorizationCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AWSSSOOIDCService", "StartDeviceAuthorization", {}).n("SSOOIDCClient", "StartDeviceAuthorizationCommand").f(StartDeviceAuthorizationRequestFilterSensitiveLog, void 0).ser(se_StartDeviceAuthorizationCommand).de(de_StartDeviceAuthorizationCommand).build() {
    };
    __name(_StartDeviceAuthorizationCommand, "StartDeviceAuthorizationCommand");
    var StartDeviceAuthorizationCommand = _StartDeviceAuthorizationCommand;
    var commands = {
      CreateTokenCommand,
      CreateTokenWithIAMCommand,
      RegisterClientCommand,
      StartDeviceAuthorizationCommand
    };
    var _SSOOIDC = class _SSOOIDC extends SSOOIDCClient {
    };
    __name(_SSOOIDC, "SSOOIDC");
    var SSOOIDC = _SSOOIDC;
    (0, import_smithy_client.createAggregatedClient)(commands, SSOOIDC);
  }
});

// node_modules/@aws-sdk/token-providers/dist-cjs/index.js
var require_dist_cjs49 = __commonJS({
  "node_modules/@aws-sdk/token-providers/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      fromSso: () => fromSso,
      fromStatic: () => fromStatic,
      nodeProvider: () => nodeProvider
    });
    module2.exports = __toCommonJS2(src_exports);
    var EXPIRE_WINDOW_MS = 5 * 60 * 1e3;
    var REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;
    var ssoOidcClientsHash = {};
    var getSsoOidcClient = /* @__PURE__ */ __name(async (ssoRegion) => {
      const { SSOOIDCClient } = await Promise.resolve().then(() => __toESM2(require_dist_cjs48()));
      if (ssoOidcClientsHash[ssoRegion]) {
        return ssoOidcClientsHash[ssoRegion];
      }
      const ssoOidcClient = new SSOOIDCClient({ region: ssoRegion });
      ssoOidcClientsHash[ssoRegion] = ssoOidcClient;
      return ssoOidcClient;
    }, "getSsoOidcClient");
    var getNewSsoOidcToken = /* @__PURE__ */ __name(async (ssoToken, ssoRegion) => {
      const { CreateTokenCommand } = await Promise.resolve().then(() => __toESM2(require_dist_cjs48()));
      const ssoOidcClient = await getSsoOidcClient(ssoRegion);
      return ssoOidcClient.send(
        new CreateTokenCommand({
          clientId: ssoToken.clientId,
          clientSecret: ssoToken.clientSecret,
          refreshToken: ssoToken.refreshToken,
          grantType: "refresh_token"
        })
      );
    }, "getNewSsoOidcToken");
    var import_property_provider = require_dist_cjs12();
    var validateTokenExpiry = /* @__PURE__ */ __name((token) => {
      if (token.expiration && token.expiration.getTime() < Date.now()) {
        throw new import_property_provider.TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false);
      }
    }, "validateTokenExpiry");
    var validateTokenKey = /* @__PURE__ */ __name((key, value, forRefresh = false) => {
      if (typeof value === "undefined") {
        throw new import_property_provider.TokenProviderError(
          `Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${REFRESH_MESSAGE}`,
          false
        );
      }
    }, "validateTokenKey");
    var import_shared_ini_file_loader = require_dist_cjs13();
    var import_fs = require("fs");
    var { writeFile } = import_fs.promises;
    var writeSSOTokenToFile = /* @__PURE__ */ __name((id, ssoToken) => {
      const tokenFilepath = (0, import_shared_ini_file_loader.getSSOTokenFilepath)(id);
      const tokenString = JSON.stringify(ssoToken, null, 2);
      return writeFile(tokenFilepath, tokenString);
    }, "writeSSOTokenToFile");
    var lastRefreshAttemptTime = /* @__PURE__ */ new Date(0);
    var fromSso = /* @__PURE__ */ __name((init = {}) => async () => {
      var _a;
      (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/token-providers", "fromSso");
      const profiles = await (0, import_shared_ini_file_loader.parseKnownFiles)(init);
      const profileName = (0, import_shared_ini_file_loader.getProfileName)(init);
      const profile = profiles[profileName];
      if (!profile) {
        throw new import_property_provider.TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
      } else if (!profile["sso_session"]) {
        throw new import_property_provider.TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
      }
      const ssoSessionName = profile["sso_session"];
      const ssoSessions = await (0, import_shared_ini_file_loader.loadSsoSessionData)(init);
      const ssoSession = ssoSessions[ssoSessionName];
      if (!ssoSession) {
        throw new import_property_provider.TokenProviderError(
          `Sso session '${ssoSessionName}' could not be found in shared credentials file.`,
          false
        );
      }
      for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
        if (!ssoSession[ssoSessionRequiredKey]) {
          throw new import_property_provider.TokenProviderError(
            `Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`,
            false
          );
        }
      }
      const ssoStartUrl = ssoSession["sso_start_url"];
      const ssoRegion = ssoSession["sso_region"];
      let ssoToken;
      try {
        ssoToken = await (0, import_shared_ini_file_loader.getSSOTokenFromFile)(ssoSessionName);
      } catch (e) {
        throw new import_property_provider.TokenProviderError(
          `The SSO session token associated with profile=${profileName} was not found or is invalid. ${REFRESH_MESSAGE}`,
          false
        );
      }
      validateTokenKey("accessToken", ssoToken.accessToken);
      validateTokenKey("expiresAt", ssoToken.expiresAt);
      const { accessToken, expiresAt } = ssoToken;
      const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
      if (existingToken.expiration.getTime() - Date.now() > EXPIRE_WINDOW_MS) {
        return existingToken;
      }
      if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1e3) {
        validateTokenExpiry(existingToken);
        return existingToken;
      }
      validateTokenKey("clientId", ssoToken.clientId, true);
      validateTokenKey("clientSecret", ssoToken.clientSecret, true);
      validateTokenKey("refreshToken", ssoToken.refreshToken, true);
      try {
        lastRefreshAttemptTime.setTime(Date.now());
        const newSsoOidcToken = await getNewSsoOidcToken(ssoToken, ssoRegion);
        validateTokenKey("accessToken", newSsoOidcToken.accessToken);
        validateTokenKey("expiresIn", newSsoOidcToken.expiresIn);
        const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1e3);
        try {
          await writeSSOTokenToFile(ssoSessionName, {
            ...ssoToken,
            accessToken: newSsoOidcToken.accessToken,
            expiresAt: newTokenExpiration.toISOString(),
            refreshToken: newSsoOidcToken.refreshToken
          });
        } catch (error) {
        }
        return {
          token: newSsoOidcToken.accessToken,
          expiration: newTokenExpiration
        };
      } catch (error) {
        validateTokenExpiry(existingToken);
        return existingToken;
      }
    }, "fromSso");
    var fromStatic = /* @__PURE__ */ __name(({ token, logger }) => async () => {
      logger == null ? void 0 : logger.debug("@aws-sdk/token-providers", "fromStatic");
      if (!token || !token.token) {
        throw new import_property_provider.TokenProviderError(`Please pass a valid token to fromStatic`, false);
      }
      return token;
    }, "fromStatic");
    var nodeProvider = /* @__PURE__ */ __name((init = {}) => (0, import_property_provider.memoize)(
      (0, import_property_provider.chain)(fromSso(init), async () => {
        throw new import_property_provider.TokenProviderError("Could not load token from any providers", false);
      }),
      (token) => token.expiration !== void 0 && token.expiration.getTime() - Date.now() < 3e5,
      (token) => token.expiration !== void 0
    ), "nodeProvider");
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-cjs/index.js
var require_dist_cjs50 = __commonJS({
  "node_modules/@aws-sdk/credential-provider-sso/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __esm2 = (fn, res) => function __init() {
      return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
    };
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var loadSso_exports = {};
    __export2(loadSso_exports, {
      GetRoleCredentialsCommand: () => import_client_sso.GetRoleCredentialsCommand,
      SSOClient: () => import_client_sso.SSOClient
    });
    var import_client_sso;
    var init_loadSso = __esm2({
      "src/loadSso.ts"() {
        "use strict";
        import_client_sso = require_dist_cjs47();
      }
    });
    var src_exports = {};
    __export2(src_exports, {
      fromSSO: () => fromSSO,
      isSsoProfile: () => isSsoProfile,
      validateSsoProfile: () => validateSsoProfile
    });
    module2.exports = __toCommonJS2(src_exports);
    var isSsoProfile = /* @__PURE__ */ __name((arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string"), "isSsoProfile");
    var import_token_providers = require_dist_cjs49();
    var import_property_provider = require_dist_cjs12();
    var import_shared_ini_file_loader = require_dist_cjs13();
    var SHOULD_FAIL_CREDENTIAL_CHAIN = false;
    var resolveSSOCredentials = /* @__PURE__ */ __name(async ({
      ssoStartUrl,
      ssoSession,
      ssoAccountId,
      ssoRegion,
      ssoRoleName,
      ssoClient,
      clientConfig,
      profile
    }) => {
      let token;
      const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
      if (ssoSession) {
        try {
          const _token = await (0, import_token_providers.fromSso)({ profile })();
          token = {
            accessToken: _token.token,
            expiresAt: new Date(_token.expiration).toISOString()
          };
        } catch (e) {
          throw new import_property_provider.CredentialsProviderError(e.message, SHOULD_FAIL_CREDENTIAL_CHAIN);
        }
      } else {
        try {
          token = await (0, import_shared_ini_file_loader.getSSOTokenFromFile)(ssoStartUrl);
        } catch (e) {
          throw new import_property_provider.CredentialsProviderError(
            `The SSO session associated with this profile is invalid. ${refreshMessage}`,
            SHOULD_FAIL_CREDENTIAL_CHAIN
          );
        }
      }
      if (new Date(token.expiresAt).getTime() - Date.now() <= 0) {
        throw new import_property_provider.CredentialsProviderError(
          `The SSO session associated with this profile has expired. ${refreshMessage}`,
          SHOULD_FAIL_CREDENTIAL_CHAIN
        );
      }
      const { accessToken } = token;
      const { SSOClient: SSOClient2, GetRoleCredentialsCommand: GetRoleCredentialsCommand2 } = await Promise.resolve().then(() => (init_loadSso(), loadSso_exports));
      const sso = ssoClient || new SSOClient2(
        Object.assign({}, clientConfig ?? {}, {
          region: (clientConfig == null ? void 0 : clientConfig.region) ?? ssoRegion
        })
      );
      let ssoResp;
      try {
        ssoResp = await sso.send(
          new GetRoleCredentialsCommand2({
            accountId: ssoAccountId,
            roleName: ssoRoleName,
            accessToken
          })
        );
      } catch (e) {
        throw import_property_provider.CredentialsProviderError.from(e, SHOULD_FAIL_CREDENTIAL_CHAIN);
      }
      const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration, credentialScope } = {} } = ssoResp;
      if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
        throw new import_property_provider.CredentialsProviderError("SSO returns an invalid temporary credential.", SHOULD_FAIL_CREDENTIAL_CHAIN);
      }
      return { accessKeyId, secretAccessKey, sessionToken, expiration: new Date(expiration), credentialScope };
    }, "resolveSSOCredentials");
    var validateSsoProfile = /* @__PURE__ */ __name((profile) => {
      const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
      if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new import_property_provider.CredentialsProviderError(
          `Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(
            ", "
          )}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`,
          false
        );
      }
      return profile;
    }, "validateSsoProfile");
    var fromSSO = /* @__PURE__ */ __name((init = {}) => async () => {
      var _a;
      (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-sso", "fromSSO");
      const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
      const { ssoClient } = init;
      const profileName = (0, import_shared_ini_file_loader.getProfileName)(init);
      if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        const profiles = await (0, import_shared_ini_file_loader.parseKnownFiles)(init);
        const profile = profiles[profileName];
        if (!profile) {
          throw new import_property_provider.CredentialsProviderError(`Profile ${profileName} was not found.`);
        }
        if (!isSsoProfile(profile)) {
          throw new import_property_provider.CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`);
        }
        if (profile == null ? void 0 : profile.sso_session) {
          const ssoSessions = await (0, import_shared_ini_file_loader.loadSsoSessionData)(init);
          const session = ssoSessions[profile.sso_session];
          const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
          if (ssoRegion && ssoRegion !== session.sso_region) {
            throw new import_property_provider.CredentialsProviderError(`Conflicting SSO region` + conflictMsg, false);
          }
          if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
            throw new import_property_provider.CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, false);
          }
          profile.sso_region = session.sso_region;
          profile.sso_start_url = session.sso_start_url;
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(profile);
        return resolveSSOCredentials({
          ssoStartUrl: sso_start_url,
          ssoSession: sso_session,
          ssoAccountId: sso_account_id,
          ssoRegion: sso_region,
          ssoRoleName: sso_role_name,
          ssoClient,
          clientConfig: init.clientConfig,
          profile: profileName
        });
      } else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new import_property_provider.CredentialsProviderError(
          'Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"'
        );
      } else {
        return resolveSSOCredentials({
          ssoStartUrl,
          ssoSession,
          ssoAccountId,
          ssoRegion,
          ssoRoleName,
          ssoClient,
          clientConfig: init.clientConfig,
          profile: profileName
        });
      }
    }, "fromSSO");
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/auth/httpAuthSchemeProvider.js
var require_httpAuthSchemeProvider4 = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/auth/httpAuthSchemeProvider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.resolveHttpAuthSchemeConfig = exports2.resolveStsAuthConfig = exports2.defaultSTSHttpAuthSchemeProvider = exports2.defaultSTSHttpAuthSchemeParametersProvider = void 0;
    var core_1 = require_dist_cjs38();
    var util_middleware_1 = require_dist_cjs10();
    var STSClient_1 = require_STSClient();
    var defaultSTSHttpAuthSchemeParametersProvider = async (config, context, input) => {
      return {
        operation: (0, util_middleware_1.getSmithyContext)(context).operation,
        region: await (0, util_middleware_1.normalizeProvider)(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    exports2.defaultSTSHttpAuthSchemeParametersProvider = defaultSTSHttpAuthSchemeParametersProvider;
    function createAwsAuthSigv4HttpAuthOption(authParameters) {
      return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
          name: "sts",
          region: authParameters.region
        },
        propertiesExtractor: (config, context) => ({
          signingProperties: {
            config,
            context
          }
        })
      };
    }
    function createSmithyApiNoAuthHttpAuthOption(authParameters) {
      return {
        schemeId: "smithy.api#noAuth"
      };
    }
    var defaultSTSHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "AssumeRoleWithSAML": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        case "AssumeRoleWithWebIdentity": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
      }
      return options;
    };
    exports2.defaultSTSHttpAuthSchemeProvider = defaultSTSHttpAuthSchemeProvider;
    var resolveStsAuthConfig = (input) => ({
      ...input,
      stsClientCtor: STSClient_1.STSClient
    });
    exports2.resolveStsAuthConfig = resolveStsAuthConfig;
    var resolveHttpAuthSchemeConfig = (config) => {
      const config_0 = (0, exports2.resolveStsAuthConfig)(config);
      const config_1 = (0, core_1.resolveAwsSdkSigV4Config)(config_0);
      return {
        ...config_1
      };
    };
    exports2.resolveHttpAuthSchemeConfig = resolveHttpAuthSchemeConfig;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/endpoint/EndpointParameters.js
var require_EndpointParameters = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/endpoint/EndpointParameters.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.commonParams = exports2.resolveClientEndpointParameters = void 0;
    var resolveClientEndpointParameters = (options) => {
      return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        useGlobalEndpoint: options.useGlobalEndpoint ?? false,
        defaultSigningName: "sts"
      };
    };
    exports2.resolveClientEndpointParameters = resolveClientEndpointParameters;
    exports2.commonParams = {
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// node_modules/@aws-sdk/client-sts/package.json
var require_package4 = __commonJS({
  "node_modules/@aws-sdk/client-sts/package.json"(exports2, module2) {
    module2.exports = {
      name: "@aws-sdk/client-sts",
      description: "AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native",
      version: "3.583.0",
      scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-sts",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "rimraf ./dist-types tsconfig.types.tsbuildinfo && tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo sts",
        test: "yarn test:unit",
        "test:unit": "jest"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "3.0.0",
        "@aws-crypto/sha256-js": "3.0.0",
        "@aws-sdk/client-sso-oidc": "3.583.0",
        "@aws-sdk/core": "3.582.0",
        "@aws-sdk/credential-provider-node": "3.583.0",
        "@aws-sdk/middleware-host-header": "3.577.0",
        "@aws-sdk/middleware-logger": "3.577.0",
        "@aws-sdk/middleware-recursion-detection": "3.577.0",
        "@aws-sdk/middleware-user-agent": "3.583.0",
        "@aws-sdk/region-config-resolver": "3.577.0",
        "@aws-sdk/types": "3.577.0",
        "@aws-sdk/util-endpoints": "3.583.0",
        "@aws-sdk/util-user-agent-browser": "3.577.0",
        "@aws-sdk/util-user-agent-node": "3.577.0",
        "@smithy/config-resolver": "^3.0.0",
        "@smithy/core": "^2.0.1",
        "@smithy/fetch-http-handler": "^3.0.1",
        "@smithy/hash-node": "^3.0.0",
        "@smithy/invalid-dependency": "^3.0.0",
        "@smithy/middleware-content-length": "^3.0.0",
        "@smithy/middleware-endpoint": "^3.0.0",
        "@smithy/middleware-retry": "^3.0.1",
        "@smithy/middleware-serde": "^3.0.0",
        "@smithy/middleware-stack": "^3.0.0",
        "@smithy/node-config-provider": "^3.0.0",
        "@smithy/node-http-handler": "^3.0.0",
        "@smithy/protocol-http": "^4.0.0",
        "@smithy/smithy-client": "^3.0.1",
        "@smithy/types": "^3.0.0",
        "@smithy/url-parser": "^3.0.0",
        "@smithy/util-base64": "^3.0.0",
        "@smithy/util-body-length-browser": "^3.0.0",
        "@smithy/util-body-length-node": "^3.0.0",
        "@smithy/util-defaults-mode-browser": "^3.0.1",
        "@smithy/util-defaults-mode-node": "^3.0.1",
        "@smithy/util-endpoints": "^2.0.0",
        "@smithy/util-middleware": "^3.0.0",
        "@smithy/util-retry": "^3.0.0",
        "@smithy/util-utf8": "^3.0.0",
        tslib: "^2.6.2"
      },
      devDependencies: {
        "@tsconfig/node16": "16.1.3",
        "@types/node": "^16.18.96",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~4.9.5"
      },
      engines: {
        node: ">=16.0.0"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-sts"
      }
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/endpoint/ruleset.js
var require_ruleset3 = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/endpoint/ruleset.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ruleSet = void 0;
    var F = "required";
    var G = "type";
    var H = "fn";
    var I = "argv";
    var J = "ref";
    var a = false;
    var b = true;
    var c = "booleanEquals";
    var d = "stringEquals";
    var e = "sigv4";
    var f = "sts";
    var g = "us-east-1";
    var h = "endpoint";
    var i = "https://sts.{Region}.{PartitionResult#dnsSuffix}";
    var j = "tree";
    var k = "error";
    var l = "getAttr";
    var m = { [F]: false, [G]: "String" };
    var n = { [F]: true, "default": false, [G]: "Boolean" };
    var o = { [J]: "Endpoint" };
    var p = { [H]: "isSet", [I]: [{ [J]: "Region" }] };
    var q = { [J]: "Region" };
    var r = { [H]: "aws.partition", [I]: [q], "assign": "PartitionResult" };
    var s = { [J]: "UseFIPS" };
    var t = { [J]: "UseDualStack" };
    var u = { "url": "https://sts.amazonaws.com", "properties": { "authSchemes": [{ "name": e, "signingName": f, "signingRegion": g }] }, "headers": {} };
    var v = {};
    var w = { "conditions": [{ [H]: d, [I]: [q, "aws-global"] }], [h]: u, [G]: h };
    var x = { [H]: c, [I]: [s, true] };
    var y = { [H]: c, [I]: [t, true] };
    var z = { [H]: l, [I]: [{ [J]: "PartitionResult" }, "supportsFIPS"] };
    var A = { [J]: "PartitionResult" };
    var B = { [H]: c, [I]: [true, { [H]: l, [I]: [A, "supportsDualStack"] }] };
    var C = [{ [H]: "isSet", [I]: [o] }];
    var D = [x];
    var E = [y];
    var _data = { version: "1.0", parameters: { Region: m, UseDualStack: n, UseFIPS: n, Endpoint: m, UseGlobalEndpoint: n }, rules: [{ conditions: [{ [H]: c, [I]: [{ [J]: "UseGlobalEndpoint" }, b] }, { [H]: "not", [I]: C }, p, r, { [H]: c, [I]: [s, a] }, { [H]: c, [I]: [t, a] }], rules: [{ conditions: [{ [H]: d, [I]: [q, "ap-northeast-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "ap-south-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "ap-southeast-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "ap-southeast-2"] }], endpoint: u, [G]: h }, w, { conditions: [{ [H]: d, [I]: [q, "ca-central-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-central-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-north-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-west-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-west-2"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-west-3"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "sa-east-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, g] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "us-east-2"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "us-west-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "us-west-2"] }], endpoint: u, [G]: h }, { endpoint: { url: i, properties: { authSchemes: [{ name: e, signingName: f, signingRegion: "{Region}" }] }, headers: v }, [G]: h }], [G]: j }, { conditions: C, rules: [{ conditions: D, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [G]: k }, { conditions: E, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [G]: k }, { endpoint: { url: o, properties: v, headers: v }, [G]: h }], [G]: j }, { conditions: [p], rules: [{ conditions: [r], rules: [{ conditions: [x, y], rules: [{ conditions: [{ [H]: c, [I]: [b, z] }, B], rules: [{ endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v, headers: v }, [G]: h }], [G]: j }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [G]: k }], [G]: j }, { conditions: D, rules: [{ conditions: [{ [H]: c, [I]: [z, b] }], rules: [{ conditions: [{ [H]: d, [I]: [{ [H]: l, [I]: [A, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: v, headers: v }, [G]: h }, { endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", properties: v, headers: v }, [G]: h }], [G]: j }, { error: "FIPS is enabled but this partition does not support FIPS", [G]: k }], [G]: j }, { conditions: E, rules: [{ conditions: [B], rules: [{ endpoint: { url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v, headers: v }, [G]: h }], [G]: j }, { error: "DualStack is enabled but this partition does not support DualStack", [G]: k }], [G]: j }, w, { endpoint: { url: i, properties: v, headers: v }, [G]: h }], [G]: j }], [G]: j }, { error: "Invalid Configuration: Missing Region", [G]: k }] };
    exports2.ruleSet = _data;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/endpoint/endpointResolver.js
var require_endpointResolver3 = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/endpoint/endpointResolver.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.defaultEndpointResolver = void 0;
    var util_endpoints_1 = require_dist_cjs7();
    var util_endpoints_2 = require_dist_cjs6();
    var ruleset_1 = require_ruleset3();
    var defaultEndpointResolver = (endpointParams, context = {}) => {
      return (0, util_endpoints_2.resolveEndpoint)(ruleset_1.ruleSet, {
        endpointParams,
        logger: context.logger
      });
    };
    exports2.defaultEndpointResolver = defaultEndpointResolver;
    util_endpoints_2.customEndpointFunctions.aws = util_endpoints_1.awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/runtimeConfig.shared.js
var require_runtimeConfig_shared3 = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/runtimeConfig.shared.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getRuntimeConfig = void 0;
    var core_1 = require_dist_cjs38();
    var core_2 = require_dist_cjs34();
    var smithy_client_1 = require_dist_cjs32();
    var url_parser_1 = require_dist_cjs16();
    var util_base64_1 = require_dist_cjs25();
    var util_utf8_1 = require_dist_cjs24();
    var httpAuthSchemeProvider_1 = require_httpAuthSchemeProvider4();
    var endpointResolver_1 = require_endpointResolver3();
    var getRuntimeConfig = (config) => {
      return {
        apiVersion: "2011-06-15",
        base64Decoder: config?.base64Decoder ?? util_base64_1.fromBase64,
        base64Encoder: config?.base64Encoder ?? util_base64_1.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? endpointResolver_1.defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? httpAuthSchemeProvider_1.defaultSTSHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
            signer: new core_1.AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new core_2.NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new smithy_client_1.NoOpLogger(),
        serviceId: config?.serviceId ?? "STS",
        urlParser: config?.urlParser ?? url_parser_1.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? util_utf8_1.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? util_utf8_1.toUtf8
      };
    };
    exports2.getRuntimeConfig = getRuntimeConfig;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/runtimeConfig.js
var require_runtimeConfig3 = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/runtimeConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getRuntimeConfig = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var package_json_1 = tslib_1.__importDefault(require_package4());
    var core_1 = require_dist_cjs38();
    var credential_provider_node_1 = require_dist_cjs55();
    var util_user_agent_node_1 = require_dist_cjs42();
    var config_resolver_1 = require_dist_cjs11();
    var core_2 = require_dist_cjs34();
    var hash_node_1 = require_dist_cjs43();
    var middleware_retry_1 = require_dist_cjs33();
    var node_config_provider_1 = require_dist_cjs14();
    var node_http_handler_1 = require_dist_cjs28();
    var util_body_length_node_1 = require_dist_cjs44();
    var util_retry_1 = require_dist_cjs20();
    var runtimeConfig_shared_1 = require_runtimeConfig_shared3();
    var smithy_client_1 = require_dist_cjs32();
    var util_defaults_mode_node_1 = require_dist_cjs45();
    var smithy_client_2 = require_dist_cjs32();
    var getRuntimeConfig = (config) => {
      (0, smithy_client_2.emitWarningIfUnsupportedVersion)(process.version);
      const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
      const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
      const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
      (0, core_1.emitWarningIfUnsupportedVersion)(process.version);
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? util_body_length_node_1.calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? credential_provider_node_1.defaultProvider,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, util_user_agent_node_1.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4") || (async (idProps) => await (0, credential_provider_node_1.defaultProvider)(idProps?.__config || {})()),
            signer: new core_1.AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new core_2.NoAuthSigner()
          }
        ],
        maxAttempts: config?.maxAttempts ?? (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: node_http_handler_1.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? (0, node_config_provider_1.loadConfig)({
          ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || util_retry_1.DEFAULT_RETRY_MODE
        }),
        sha256: config?.sha256 ?? hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? node_http_handler_1.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      };
    };
    exports2.getRuntimeConfig = getRuntimeConfig;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/auth/httpAuthExtensionConfiguration.js
var require_httpAuthExtensionConfiguration = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/auth/httpAuthExtensionConfiguration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.resolveHttpAuthRuntimeConfig = exports2.getHttpAuthExtensionConfiguration = void 0;
    var getHttpAuthExtensionConfiguration = (runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    };
    exports2.getHttpAuthExtensionConfiguration = getHttpAuthExtensionConfiguration;
    var resolveHttpAuthRuntimeConfig = (config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    };
    exports2.resolveHttpAuthRuntimeConfig = resolveHttpAuthRuntimeConfig;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/runtimeExtensions.js
var require_runtimeExtensions = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/runtimeExtensions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.resolveRuntimeExtensions = void 0;
    var region_config_resolver_1 = require_dist_cjs46();
    var protocol_http_1 = require_dist_cjs2();
    var smithy_client_1 = require_dist_cjs32();
    var httpAuthExtensionConfiguration_1 = require_httpAuthExtensionConfiguration();
    var asPartial = (t) => t;
    var resolveRuntimeExtensions = (runtimeConfig, extensions) => {
      const extensionConfiguration = {
        ...asPartial((0, region_config_resolver_1.getAwsRegionExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, smithy_client_1.getDefaultExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, protocol_http_1.getHttpHandlerExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, httpAuthExtensionConfiguration_1.getHttpAuthExtensionConfiguration)(runtimeConfig))
      };
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return {
        ...runtimeConfig,
        ...(0, region_config_resolver_1.resolveAwsRegionExtensionConfiguration)(extensionConfiguration),
        ...(0, smithy_client_1.resolveDefaultRuntimeConfig)(extensionConfiguration),
        ...(0, protocol_http_1.resolveHttpHandlerRuntimeConfig)(extensionConfiguration),
        ...(0, httpAuthExtensionConfiguration_1.resolveHttpAuthRuntimeConfig)(extensionConfiguration)
      };
    };
    exports2.resolveRuntimeExtensions = resolveRuntimeExtensions;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/STSClient.js
var require_STSClient = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/STSClient.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.STSClient = exports2.__Client = void 0;
    var middleware_host_header_1 = require_dist_cjs3();
    var middleware_logger_1 = require_dist_cjs4();
    var middleware_recursion_detection_1 = require_dist_cjs5();
    var middleware_user_agent_1 = require_dist_cjs8();
    var config_resolver_1 = require_dist_cjs11();
    var core_1 = require_dist_cjs34();
    var middleware_content_length_1 = require_dist_cjs36();
    var middleware_endpoint_1 = require_dist_cjs18();
    var middleware_retry_1 = require_dist_cjs33();
    var smithy_client_1 = require_dist_cjs32();
    Object.defineProperty(exports2, "__Client", { enumerable: true, get: function() {
      return smithy_client_1.Client;
    } });
    var httpAuthSchemeProvider_1 = require_httpAuthSchemeProvider4();
    var EndpointParameters_1 = require_EndpointParameters();
    var runtimeConfig_1 = require_runtimeConfig3();
    var runtimeExtensions_1 = require_runtimeExtensions();
    var STSClient2 = class extends smithy_client_1.Client {
      constructor(...[configuration]) {
        const _config_0 = (0, runtimeConfig_1.getRuntimeConfig)(configuration || {});
        const _config_1 = (0, EndpointParameters_1.resolveClientEndpointParameters)(_config_0);
        const _config_2 = (0, config_resolver_1.resolveRegionConfig)(_config_1);
        const _config_3 = (0, middleware_endpoint_1.resolveEndpointConfig)(_config_2);
        const _config_4 = (0, middleware_retry_1.resolveRetryConfig)(_config_3);
        const _config_5 = (0, middleware_host_header_1.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0, middleware_user_agent_1.resolveUserAgentConfig)(_config_5);
        const _config_7 = (0, httpAuthSchemeProvider_1.resolveHttpAuthSchemeConfig)(_config_6);
        const _config_8 = (0, runtimeExtensions_1.resolveRuntimeExtensions)(_config_7, configuration?.extensions || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use((0, middleware_retry_1.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, middleware_content_length_1.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, middleware_host_header_1.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, middleware_logger_1.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, middleware_recursion_detection_1.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, middleware_user_agent_1.getUserAgentPlugin)(this.config));
        this.middlewareStack.use((0, core_1.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
          httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
          identityProviderConfigProvider: this.getIdentityProviderConfigProvider()
        }));
        this.middlewareStack.use((0, core_1.getHttpSigningPlugin)(this.config));
      }
      destroy() {
        super.destroy();
      }
      getDefaultHttpAuthSchemeParametersProvider() {
        return httpAuthSchemeProvider_1.defaultSTSHttpAuthSchemeParametersProvider;
      }
      getIdentityProviderConfigProvider() {
        return async (config) => new core_1.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config.credentials
        });
      }
    };
    exports2.STSClient = STSClient2;
  }
});

// node_modules/@aws-sdk/client-sts/dist-cjs/index.js
var require_dist_cjs51 = __commonJS({
  "node_modules/@aws-sdk/client-sts/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default"));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      AssumeRoleCommand: () => AssumeRoleCommand,
      AssumeRoleResponseFilterSensitiveLog: () => AssumeRoleResponseFilterSensitiveLog,
      AssumeRoleWithSAMLCommand: () => AssumeRoleWithSAMLCommand,
      AssumeRoleWithSAMLRequestFilterSensitiveLog: () => AssumeRoleWithSAMLRequestFilterSensitiveLog,
      AssumeRoleWithSAMLResponseFilterSensitiveLog: () => AssumeRoleWithSAMLResponseFilterSensitiveLog,
      AssumeRoleWithWebIdentityCommand: () => AssumeRoleWithWebIdentityCommand,
      AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
      AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => AssumeRoleWithWebIdentityResponseFilterSensitiveLog,
      ClientInputEndpointParameters: () => import_EndpointParameters9.ClientInputEndpointParameters,
      CredentialsFilterSensitiveLog: () => CredentialsFilterSensitiveLog,
      DecodeAuthorizationMessageCommand: () => DecodeAuthorizationMessageCommand,
      ExpiredTokenException: () => ExpiredTokenException,
      GetAccessKeyInfoCommand: () => GetAccessKeyInfoCommand,
      GetCallerIdentityCommand: () => GetCallerIdentityCommand,
      GetFederationTokenCommand: () => GetFederationTokenCommand,
      GetFederationTokenResponseFilterSensitiveLog: () => GetFederationTokenResponseFilterSensitiveLog,
      GetSessionTokenCommand: () => GetSessionTokenCommand,
      GetSessionTokenResponseFilterSensitiveLog: () => GetSessionTokenResponseFilterSensitiveLog,
      IDPCommunicationErrorException: () => IDPCommunicationErrorException,
      IDPRejectedClaimException: () => IDPRejectedClaimException,
      InvalidAuthorizationMessageException: () => InvalidAuthorizationMessageException,
      InvalidIdentityTokenException: () => InvalidIdentityTokenException,
      MalformedPolicyDocumentException: () => MalformedPolicyDocumentException,
      PackedPolicyTooLargeException: () => PackedPolicyTooLargeException,
      RegionDisabledException: () => RegionDisabledException,
      RuntimeExtension: () => import_runtimeExtensions.RuntimeExtension,
      STS: () => STS,
      STSServiceException: () => STSServiceException,
      decorateDefaultCredentialProvider: () => decorateDefaultCredentialProvider,
      getDefaultRoleAssumer: () => getDefaultRoleAssumer2,
      getDefaultRoleAssumerWithWebIdentity: () => getDefaultRoleAssumerWithWebIdentity2
    });
    module2.exports = __toCommonJS2(src_exports);
    __reExport(src_exports, require_STSClient(), module2.exports);
    var import_middleware_endpoint = require_dist_cjs18();
    var import_middleware_serde = require_dist_cjs17();
    var import_types = require_dist_cjs();
    var import_EndpointParameters = require_EndpointParameters();
    var import_smithy_client = require_dist_cjs32();
    var _STSServiceException = class _STSServiceException2 extends import_smithy_client.ServiceException {
      /**
       * @internal
       */
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _STSServiceException2.prototype);
      }
    };
    __name(_STSServiceException, "STSServiceException");
    var STSServiceException = _STSServiceException;
    var _ExpiredTokenException = class _ExpiredTokenException2 extends STSServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...opts
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _ExpiredTokenException2.prototype);
      }
    };
    __name(_ExpiredTokenException, "ExpiredTokenException");
    var ExpiredTokenException = _ExpiredTokenException;
    var _MalformedPolicyDocumentException = class _MalformedPolicyDocumentException2 extends STSServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "MalformedPolicyDocumentException",
          $fault: "client",
          ...opts
        });
        this.name = "MalformedPolicyDocumentException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _MalformedPolicyDocumentException2.prototype);
      }
    };
    __name(_MalformedPolicyDocumentException, "MalformedPolicyDocumentException");
    var MalformedPolicyDocumentException = _MalformedPolicyDocumentException;
    var _PackedPolicyTooLargeException = class _PackedPolicyTooLargeException2 extends STSServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "PackedPolicyTooLargeException",
          $fault: "client",
          ...opts
        });
        this.name = "PackedPolicyTooLargeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _PackedPolicyTooLargeException2.prototype);
      }
    };
    __name(_PackedPolicyTooLargeException, "PackedPolicyTooLargeException");
    var PackedPolicyTooLargeException = _PackedPolicyTooLargeException;
    var _RegionDisabledException = class _RegionDisabledException2 extends STSServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "RegionDisabledException",
          $fault: "client",
          ...opts
        });
        this.name = "RegionDisabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _RegionDisabledException2.prototype);
      }
    };
    __name(_RegionDisabledException, "RegionDisabledException");
    var RegionDisabledException = _RegionDisabledException;
    var _IDPRejectedClaimException = class _IDPRejectedClaimException2 extends STSServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "IDPRejectedClaimException",
          $fault: "client",
          ...opts
        });
        this.name = "IDPRejectedClaimException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _IDPRejectedClaimException2.prototype);
      }
    };
    __name(_IDPRejectedClaimException, "IDPRejectedClaimException");
    var IDPRejectedClaimException = _IDPRejectedClaimException;
    var _InvalidIdentityTokenException = class _InvalidIdentityTokenException2 extends STSServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidIdentityTokenException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidIdentityTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidIdentityTokenException2.prototype);
      }
    };
    __name(_InvalidIdentityTokenException, "InvalidIdentityTokenException");
    var InvalidIdentityTokenException = _InvalidIdentityTokenException;
    var _IDPCommunicationErrorException = class _IDPCommunicationErrorException2 extends STSServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "IDPCommunicationErrorException",
          $fault: "client",
          ...opts
        });
        this.name = "IDPCommunicationErrorException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _IDPCommunicationErrorException2.prototype);
      }
    };
    __name(_IDPCommunicationErrorException, "IDPCommunicationErrorException");
    var IDPCommunicationErrorException = _IDPCommunicationErrorException;
    var _InvalidAuthorizationMessageException = class _InvalidAuthorizationMessageException2 extends STSServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidAuthorizationMessageException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidAuthorizationMessageException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidAuthorizationMessageException2.prototype);
      }
    };
    __name(_InvalidAuthorizationMessageException, "InvalidAuthorizationMessageException");
    var InvalidAuthorizationMessageException = _InvalidAuthorizationMessageException;
    var CredentialsFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.SecretAccessKey && { SecretAccessKey: import_smithy_client.SENSITIVE_STRING }
    }), "CredentialsFilterSensitiveLog");
    var AssumeRoleResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    }), "AssumeRoleResponseFilterSensitiveLog");
    var AssumeRoleWithSAMLRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.SAMLAssertion && { SAMLAssertion: import_smithy_client.SENSITIVE_STRING }
    }), "AssumeRoleWithSAMLRequestFilterSensitiveLog");
    var AssumeRoleWithSAMLResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    }), "AssumeRoleWithSAMLResponseFilterSensitiveLog");
    var AssumeRoleWithWebIdentityRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.WebIdentityToken && { WebIdentityToken: import_smithy_client.SENSITIVE_STRING }
    }), "AssumeRoleWithWebIdentityRequestFilterSensitiveLog");
    var AssumeRoleWithWebIdentityResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    }), "AssumeRoleWithWebIdentityResponseFilterSensitiveLog");
    var GetFederationTokenResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    }), "GetFederationTokenResponseFilterSensitiveLog");
    var GetSessionTokenResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    }), "GetSessionTokenResponseFilterSensitiveLog");
    var import_core = require_dist_cjs38();
    var import_protocol_http = require_dist_cjs2();
    var se_AssumeRoleCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_AssumeRoleRequest(input, context),
        [_A]: _AR,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_AssumeRoleCommand");
    var se_AssumeRoleWithSAMLCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_AssumeRoleWithSAMLRequest(input, context),
        [_A]: _ARWSAML,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_AssumeRoleWithSAMLCommand");
    var se_AssumeRoleWithWebIdentityCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_AssumeRoleWithWebIdentityRequest(input, context),
        [_A]: _ARWWI,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_AssumeRoleWithWebIdentityCommand");
    var se_DecodeAuthorizationMessageCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_DecodeAuthorizationMessageRequest(input, context),
        [_A]: _DAM,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_DecodeAuthorizationMessageCommand");
    var se_GetAccessKeyInfoCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetAccessKeyInfoRequest(input, context),
        [_A]: _GAKI,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_GetAccessKeyInfoCommand");
    var se_GetCallerIdentityCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetCallerIdentityRequest(input, context),
        [_A]: _GCI,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_GetCallerIdentityCommand");
    var se_GetFederationTokenCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetFederationTokenRequest(input, context),
        [_A]: _GFT,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_GetFederationTokenCommand");
    var se_GetSessionTokenCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetSessionTokenRequest(input, context),
        [_A]: _GST,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_GetSessionTokenCommand");
    var de_AssumeRoleCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_AssumeRoleResponse(data.AssumeRoleResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_AssumeRoleCommand");
    var de_AssumeRoleWithSAMLCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_AssumeRoleWithSAMLResponse(data.AssumeRoleWithSAMLResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_AssumeRoleWithSAMLCommand");
    var de_AssumeRoleWithWebIdentityCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_AssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_AssumeRoleWithWebIdentityCommand");
    var de_DecodeAuthorizationMessageCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_DecodeAuthorizationMessageResponse(data.DecodeAuthorizationMessageResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_DecodeAuthorizationMessageCommand");
    var de_GetAccessKeyInfoCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_GetAccessKeyInfoResponse(data.GetAccessKeyInfoResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_GetAccessKeyInfoCommand");
    var de_GetCallerIdentityCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_GetCallerIdentityResponse(data.GetCallerIdentityResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_GetCallerIdentityCommand");
    var de_GetFederationTokenCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_GetFederationTokenResponse(data.GetFederationTokenResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_GetFederationTokenCommand");
    var de_GetSessionTokenCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_GetSessionTokenResponse(data.GetSessionTokenResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_GetSessionTokenCommand");
    var de_CommandError = /* @__PURE__ */ __name(async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await (0, import_core.parseXmlErrorBody)(output.body, context)
      };
      const errorCode = loadQueryErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
          throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
          throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
          throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
          throw await de_RegionDisabledExceptionRes(parsedOutput, context);
        case "IDPRejectedClaim":
        case "com.amazonaws.sts#IDPRejectedClaimException":
          throw await de_IDPRejectedClaimExceptionRes(parsedOutput, context);
        case "InvalidIdentityToken":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
          throw await de_InvalidIdentityTokenExceptionRes(parsedOutput, context);
        case "IDPCommunicationError":
        case "com.amazonaws.sts#IDPCommunicationErrorException":
          throw await de_IDPCommunicationErrorExceptionRes(parsedOutput, context);
        case "InvalidAuthorizationMessageException":
        case "com.amazonaws.sts#InvalidAuthorizationMessageException":
          throw await de_InvalidAuthorizationMessageExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody: parsedBody.Error,
            errorCode
          });
      }
    }, "de_CommandError");
    var de_ExpiredTokenExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_ExpiredTokenException(body.Error, context);
      const exception = new ExpiredTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_ExpiredTokenExceptionRes");
    var de_IDPCommunicationErrorExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_IDPCommunicationErrorException(body.Error, context);
      const exception = new IDPCommunicationErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_IDPCommunicationErrorExceptionRes");
    var de_IDPRejectedClaimExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_IDPRejectedClaimException(body.Error, context);
      const exception = new IDPRejectedClaimException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_IDPRejectedClaimExceptionRes");
    var de_InvalidAuthorizationMessageExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_InvalidAuthorizationMessageException(body.Error, context);
      const exception = new InvalidAuthorizationMessageException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_InvalidAuthorizationMessageExceptionRes");
    var de_InvalidIdentityTokenExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_InvalidIdentityTokenException(body.Error, context);
      const exception = new InvalidIdentityTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_InvalidIdentityTokenExceptionRes");
    var de_MalformedPolicyDocumentExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_MalformedPolicyDocumentException(body.Error, context);
      const exception = new MalformedPolicyDocumentException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_MalformedPolicyDocumentExceptionRes");
    var de_PackedPolicyTooLargeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_PackedPolicyTooLargeException(body.Error, context);
      const exception = new PackedPolicyTooLargeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_PackedPolicyTooLargeExceptionRes");
    var de_RegionDisabledExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_RegionDisabledException(body.Error, context);
      const exception = new RegionDisabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_RegionDisabledExceptionRes");
    var se_AssumeRoleRequest = /* @__PURE__ */ __name((input, context) => {
      var _a2, _b, _c, _d;
      const entries = {};
      if (input[_RA] != null) {
        entries[_RA] = input[_RA];
      }
      if (input[_RSN] != null) {
        entries[_RSN] = input[_RSN];
      }
      if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (((_a2 = input[_PA]) == null ? void 0 : _a2.length) === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (((_b = input[_T]) == null ? void 0 : _b.length) === 0) {
          entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Tags.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_TTK] != null) {
        const memberEntries = se_tagKeyListType(input[_TTK], context);
        if (((_c = input[_TTK]) == null ? void 0 : _c.length) === 0) {
          entries.TransitiveTagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `TransitiveTagKeys.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_EI] != null) {
        entries[_EI] = input[_EI];
      }
      if (input[_SN] != null) {
        entries[_SN] = input[_SN];
      }
      if (input[_TC] != null) {
        entries[_TC] = input[_TC];
      }
      if (input[_SI] != null) {
        entries[_SI] = input[_SI];
      }
      if (input[_PC] != null) {
        const memberEntries = se_ProvidedContextsListType(input[_PC], context);
        if (((_d = input[_PC]) == null ? void 0 : _d.length) === 0) {
          entries.ProvidedContexts = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `ProvidedContexts.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_AssumeRoleRequest");
    var se_AssumeRoleWithSAMLRequest = /* @__PURE__ */ __name((input, context) => {
      var _a2;
      const entries = {};
      if (input[_RA] != null) {
        entries[_RA] = input[_RA];
      }
      if (input[_PAr] != null) {
        entries[_PAr] = input[_PAr];
      }
      if (input[_SAMLA] != null) {
        entries[_SAMLA] = input[_SAMLA];
      }
      if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (((_a2 = input[_PA]) == null ? void 0 : _a2.length) === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      return entries;
    }, "se_AssumeRoleWithSAMLRequest");
    var se_AssumeRoleWithWebIdentityRequest = /* @__PURE__ */ __name((input, context) => {
      var _a2;
      const entries = {};
      if (input[_RA] != null) {
        entries[_RA] = input[_RA];
      }
      if (input[_RSN] != null) {
        entries[_RSN] = input[_RSN];
      }
      if (input[_WIT] != null) {
        entries[_WIT] = input[_WIT];
      }
      if (input[_PI] != null) {
        entries[_PI] = input[_PI];
      }
      if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (((_a2 = input[_PA]) == null ? void 0 : _a2.length) === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      return entries;
    }, "se_AssumeRoleWithWebIdentityRequest");
    var se_DecodeAuthorizationMessageRequest = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_EM] != null) {
        entries[_EM] = input[_EM];
      }
      return entries;
    }, "se_DecodeAuthorizationMessageRequest");
    var se_GetAccessKeyInfoRequest = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_AKI] != null) {
        entries[_AKI] = input[_AKI];
      }
      return entries;
    }, "se_GetAccessKeyInfoRequest");
    var se_GetCallerIdentityRequest = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      return entries;
    }, "se_GetCallerIdentityRequest");
    var se_GetFederationTokenRequest = /* @__PURE__ */ __name((input, context) => {
      var _a2, _b;
      const entries = {};
      if (input[_N] != null) {
        entries[_N] = input[_N];
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (((_a2 = input[_PA]) == null ? void 0 : _a2.length) === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (((_b = input[_T]) == null ? void 0 : _b.length) === 0) {
          entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Tags.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_GetFederationTokenRequest");
    var se_GetSessionTokenRequest = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      if (input[_SN] != null) {
        entries[_SN] = input[_SN];
      }
      if (input[_TC] != null) {
        entries[_TC] = input[_TC];
      }
      return entries;
    }, "se_GetSessionTokenRequest");
    var se_policyDescriptorListType = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_PolicyDescriptorType(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_policyDescriptorListType");
    var se_PolicyDescriptorType = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_a] != null) {
        entries[_a] = input[_a];
      }
      return entries;
    }, "se_PolicyDescriptorType");
    var se_ProvidedContext = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_PAro] != null) {
        entries[_PAro] = input[_PAro];
      }
      if (input[_CA] != null) {
        entries[_CA] = input[_CA];
      }
      return entries;
    }, "se_ProvidedContext");
    var se_ProvidedContextsListType = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_ProvidedContext(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_ProvidedContextsListType");
    var se_Tag = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_K] != null) {
        entries[_K] = input[_K];
      }
      if (input[_Va] != null) {
        entries[_Va] = input[_Va];
      }
      return entries;
    }, "se_Tag");
    var se_tagKeyListType = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    }, "se_tagKeyListType");
    var se_tagListType = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_Tag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_tagListType");
    var de_AssumedRoleUser = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_ARI] != null) {
        contents[_ARI] = (0, import_smithy_client.expectString)(output[_ARI]);
      }
      if (output[_Ar] != null) {
        contents[_Ar] = (0, import_smithy_client.expectString)(output[_Ar]);
      }
      return contents;
    }, "de_AssumedRoleUser");
    var de_AssumeRoleResponse = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
      }
      if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
      }
      if (output[_PPS] != null) {
        contents[_PPS] = (0, import_smithy_client.strictParseInt32)(output[_PPS]);
      }
      if (output[_SI] != null) {
        contents[_SI] = (0, import_smithy_client.expectString)(output[_SI]);
      }
      return contents;
    }, "de_AssumeRoleResponse");
    var de_AssumeRoleWithSAMLResponse = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
      }
      if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
      }
      if (output[_PPS] != null) {
        contents[_PPS] = (0, import_smithy_client.strictParseInt32)(output[_PPS]);
      }
      if (output[_S] != null) {
        contents[_S] = (0, import_smithy_client.expectString)(output[_S]);
      }
      if (output[_ST] != null) {
        contents[_ST] = (0, import_smithy_client.expectString)(output[_ST]);
      }
      if (output[_I] != null) {
        contents[_I] = (0, import_smithy_client.expectString)(output[_I]);
      }
      if (output[_Au] != null) {
        contents[_Au] = (0, import_smithy_client.expectString)(output[_Au]);
      }
      if (output[_NQ] != null) {
        contents[_NQ] = (0, import_smithy_client.expectString)(output[_NQ]);
      }
      if (output[_SI] != null) {
        contents[_SI] = (0, import_smithy_client.expectString)(output[_SI]);
      }
      return contents;
    }, "de_AssumeRoleWithSAMLResponse");
    var de_AssumeRoleWithWebIdentityResponse = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
      }
      if (output[_SFWIT] != null) {
        contents[_SFWIT] = (0, import_smithy_client.expectString)(output[_SFWIT]);
      }
      if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
      }
      if (output[_PPS] != null) {
        contents[_PPS] = (0, import_smithy_client.strictParseInt32)(output[_PPS]);
      }
      if (output[_Pr] != null) {
        contents[_Pr] = (0, import_smithy_client.expectString)(output[_Pr]);
      }
      if (output[_Au] != null) {
        contents[_Au] = (0, import_smithy_client.expectString)(output[_Au]);
      }
      if (output[_SI] != null) {
        contents[_SI] = (0, import_smithy_client.expectString)(output[_SI]);
      }
      return contents;
    }, "de_AssumeRoleWithWebIdentityResponse");
    var de_Credentials = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_AKI] != null) {
        contents[_AKI] = (0, import_smithy_client.expectString)(output[_AKI]);
      }
      if (output[_SAK] != null) {
        contents[_SAK] = (0, import_smithy_client.expectString)(output[_SAK]);
      }
      if (output[_STe] != null) {
        contents[_STe] = (0, import_smithy_client.expectString)(output[_STe]);
      }
      if (output[_E] != null) {
        contents[_E] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_E]));
      }
      return contents;
    }, "de_Credentials");
    var de_DecodeAuthorizationMessageResponse = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_DM] != null) {
        contents[_DM] = (0, import_smithy_client.expectString)(output[_DM]);
      }
      return contents;
    }, "de_DecodeAuthorizationMessageResponse");
    var de_ExpiredTokenException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
      }
      return contents;
    }, "de_ExpiredTokenException");
    var de_FederatedUser = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_FUI] != null) {
        contents[_FUI] = (0, import_smithy_client.expectString)(output[_FUI]);
      }
      if (output[_Ar] != null) {
        contents[_Ar] = (0, import_smithy_client.expectString)(output[_Ar]);
      }
      return contents;
    }, "de_FederatedUser");
    var de_GetAccessKeyInfoResponse = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_Ac] != null) {
        contents[_Ac] = (0, import_smithy_client.expectString)(output[_Ac]);
      }
      return contents;
    }, "de_GetAccessKeyInfoResponse");
    var de_GetCallerIdentityResponse = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_UI] != null) {
        contents[_UI] = (0, import_smithy_client.expectString)(output[_UI]);
      }
      if (output[_Ac] != null) {
        contents[_Ac] = (0, import_smithy_client.expectString)(output[_Ac]);
      }
      if (output[_Ar] != null) {
        contents[_Ar] = (0, import_smithy_client.expectString)(output[_Ar]);
      }
      return contents;
    }, "de_GetCallerIdentityResponse");
    var de_GetFederationTokenResponse = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
      }
      if (output[_FU] != null) {
        contents[_FU] = de_FederatedUser(output[_FU], context);
      }
      if (output[_PPS] != null) {
        contents[_PPS] = (0, import_smithy_client.strictParseInt32)(output[_PPS]);
      }
      return contents;
    }, "de_GetFederationTokenResponse");
    var de_GetSessionTokenResponse = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
      }
      return contents;
    }, "de_GetSessionTokenResponse");
    var de_IDPCommunicationErrorException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
      }
      return contents;
    }, "de_IDPCommunicationErrorException");
    var de_IDPRejectedClaimException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
      }
      return contents;
    }, "de_IDPRejectedClaimException");
    var de_InvalidAuthorizationMessageException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
      }
      return contents;
    }, "de_InvalidAuthorizationMessageException");
    var de_InvalidIdentityTokenException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
      }
      return contents;
    }, "de_InvalidIdentityTokenException");
    var de_MalformedPolicyDocumentException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
      }
      return contents;
    }, "de_MalformedPolicyDocumentException");
    var de_PackedPolicyTooLargeException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
      }
      return contents;
    }, "de_PackedPolicyTooLargeException");
    var de_RegionDisabledException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
      }
      return contents;
    }, "de_RegionDisabledException");
    var deserializeMetadata = /* @__PURE__ */ __name((output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    }), "deserializeMetadata");
    var throwDefaultError = (0, import_smithy_client.withBaseException)(STSServiceException);
    var buildHttpRpcRequest = /* @__PURE__ */ __name(async (context, headers, path, resolvedHostname, body) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers
      };
      if (resolvedHostname !== void 0) {
        contents.hostname = resolvedHostname;
      }
      if (body !== void 0) {
        contents.body = body;
      }
      return new import_protocol_http.HttpRequest(contents);
    }, "buildHttpRpcRequest");
    var SHARED_HEADERS = {
      "content-type": "application/x-www-form-urlencoded"
    };
    var _ = "2011-06-15";
    var _A = "Action";
    var _AKI = "AccessKeyId";
    var _AR = "AssumeRole";
    var _ARI = "AssumedRoleId";
    var _ARU = "AssumedRoleUser";
    var _ARWSAML = "AssumeRoleWithSAML";
    var _ARWWI = "AssumeRoleWithWebIdentity";
    var _Ac = "Account";
    var _Ar = "Arn";
    var _Au = "Audience";
    var _C = "Credentials";
    var _CA = "ContextAssertion";
    var _DAM = "DecodeAuthorizationMessage";
    var _DM = "DecodedMessage";
    var _DS = "DurationSeconds";
    var _E = "Expiration";
    var _EI = "ExternalId";
    var _EM = "EncodedMessage";
    var _FU = "FederatedUser";
    var _FUI = "FederatedUserId";
    var _GAKI = "GetAccessKeyInfo";
    var _GCI = "GetCallerIdentity";
    var _GFT = "GetFederationToken";
    var _GST = "GetSessionToken";
    var _I = "Issuer";
    var _K = "Key";
    var _N = "Name";
    var _NQ = "NameQualifier";
    var _P = "Policy";
    var _PA = "PolicyArns";
    var _PAr = "PrincipalArn";
    var _PAro = "ProviderArn";
    var _PC = "ProvidedContexts";
    var _PI = "ProviderId";
    var _PPS = "PackedPolicySize";
    var _Pr = "Provider";
    var _RA = "RoleArn";
    var _RSN = "RoleSessionName";
    var _S = "Subject";
    var _SAK = "SecretAccessKey";
    var _SAMLA = "SAMLAssertion";
    var _SFWIT = "SubjectFromWebIdentityToken";
    var _SI = "SourceIdentity";
    var _SN = "SerialNumber";
    var _ST = "SubjectType";
    var _STe = "SessionToken";
    var _T = "Tags";
    var _TC = "TokenCode";
    var _TTK = "TransitiveTagKeys";
    var _UI = "UserId";
    var _V = "Version";
    var _Va = "Value";
    var _WIT = "WebIdentityToken";
    var _a = "arn";
    var _m = "message";
    var buildFormUrlencodedString = /* @__PURE__ */ __name((formEntries) => Object.entries(formEntries).map(([key, value]) => (0, import_smithy_client.extendedEncodeURIComponent)(key) + "=" + (0, import_smithy_client.extendedEncodeURIComponent)(value)).join("&"), "buildFormUrlencodedString");
    var loadQueryErrorCode = /* @__PURE__ */ __name((output, data) => {
      var _a2;
      if (((_a2 = data.Error) == null ? void 0 : _a2.Code) !== void 0) {
        return data.Error.Code;
      }
      if (output.statusCode == 404) {
        return "NotFound";
      }
    }, "loadQueryErrorCode");
    var _AssumeRoleCommand = class _AssumeRoleCommand extends import_smithy_client.Command.classBuilder().ep({
      ...import_EndpointParameters.commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").f(void 0, AssumeRoleResponseFilterSensitiveLog).ser(se_AssumeRoleCommand).de(de_AssumeRoleCommand).build() {
    };
    __name(_AssumeRoleCommand, "AssumeRoleCommand");
    var AssumeRoleCommand = _AssumeRoleCommand;
    var import_EndpointParameters2 = require_EndpointParameters();
    var _AssumeRoleWithSAMLCommand = class _AssumeRoleWithSAMLCommand extends import_smithy_client.Command.classBuilder().ep({
      ...import_EndpointParameters2.commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithSAML", {}).n("STSClient", "AssumeRoleWithSAMLCommand").f(AssumeRoleWithSAMLRequestFilterSensitiveLog, AssumeRoleWithSAMLResponseFilterSensitiveLog).ser(se_AssumeRoleWithSAMLCommand).de(de_AssumeRoleWithSAMLCommand).build() {
    };
    __name(_AssumeRoleWithSAMLCommand, "AssumeRoleWithSAMLCommand");
    var AssumeRoleWithSAMLCommand = _AssumeRoleWithSAMLCommand;
    var import_EndpointParameters3 = require_EndpointParameters();
    var _AssumeRoleWithWebIdentityCommand = class _AssumeRoleWithWebIdentityCommand extends import_smithy_client.Command.classBuilder().ep({
      ...import_EndpointParameters3.commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").f(AssumeRoleWithWebIdentityRequestFilterSensitiveLog, AssumeRoleWithWebIdentityResponseFilterSensitiveLog).ser(se_AssumeRoleWithWebIdentityCommand).de(de_AssumeRoleWithWebIdentityCommand).build() {
    };
    __name(_AssumeRoleWithWebIdentityCommand, "AssumeRoleWithWebIdentityCommand");
    var AssumeRoleWithWebIdentityCommand = _AssumeRoleWithWebIdentityCommand;
    var import_EndpointParameters4 = require_EndpointParameters();
    var _DecodeAuthorizationMessageCommand = class _DecodeAuthorizationMessageCommand extends import_smithy_client.Command.classBuilder().ep({
      ...import_EndpointParameters4.commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "DecodeAuthorizationMessage", {}).n("STSClient", "DecodeAuthorizationMessageCommand").f(void 0, void 0).ser(se_DecodeAuthorizationMessageCommand).de(de_DecodeAuthorizationMessageCommand).build() {
    };
    __name(_DecodeAuthorizationMessageCommand, "DecodeAuthorizationMessageCommand");
    var DecodeAuthorizationMessageCommand = _DecodeAuthorizationMessageCommand;
    var import_EndpointParameters5 = require_EndpointParameters();
    var _GetAccessKeyInfoCommand = class _GetAccessKeyInfoCommand extends import_smithy_client.Command.classBuilder().ep({
      ...import_EndpointParameters5.commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "GetAccessKeyInfo", {}).n("STSClient", "GetAccessKeyInfoCommand").f(void 0, void 0).ser(se_GetAccessKeyInfoCommand).de(de_GetAccessKeyInfoCommand).build() {
    };
    __name(_GetAccessKeyInfoCommand, "GetAccessKeyInfoCommand");
    var GetAccessKeyInfoCommand = _GetAccessKeyInfoCommand;
    var import_EndpointParameters6 = require_EndpointParameters();
    var _GetCallerIdentityCommand = class _GetCallerIdentityCommand extends import_smithy_client.Command.classBuilder().ep({
      ...import_EndpointParameters6.commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "GetCallerIdentity", {}).n("STSClient", "GetCallerIdentityCommand").f(void 0, void 0).ser(se_GetCallerIdentityCommand).de(de_GetCallerIdentityCommand).build() {
    };
    __name(_GetCallerIdentityCommand, "GetCallerIdentityCommand");
    var GetCallerIdentityCommand = _GetCallerIdentityCommand;
    var import_EndpointParameters7 = require_EndpointParameters();
    var _GetFederationTokenCommand = class _GetFederationTokenCommand extends import_smithy_client.Command.classBuilder().ep({
      ...import_EndpointParameters7.commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "GetFederationToken", {}).n("STSClient", "GetFederationTokenCommand").f(void 0, GetFederationTokenResponseFilterSensitiveLog).ser(se_GetFederationTokenCommand).de(de_GetFederationTokenCommand).build() {
    };
    __name(_GetFederationTokenCommand, "GetFederationTokenCommand");
    var GetFederationTokenCommand = _GetFederationTokenCommand;
    var import_EndpointParameters8 = require_EndpointParameters();
    var _GetSessionTokenCommand = class _GetSessionTokenCommand extends import_smithy_client.Command.classBuilder().ep({
      ...import_EndpointParameters8.commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "GetSessionToken", {}).n("STSClient", "GetSessionTokenCommand").f(void 0, GetSessionTokenResponseFilterSensitiveLog).ser(se_GetSessionTokenCommand).de(de_GetSessionTokenCommand).build() {
    };
    __name(_GetSessionTokenCommand, "GetSessionTokenCommand");
    var GetSessionTokenCommand = _GetSessionTokenCommand;
    var import_STSClient = require_STSClient();
    var commands = {
      AssumeRoleCommand,
      AssumeRoleWithSAMLCommand,
      AssumeRoleWithWebIdentityCommand,
      DecodeAuthorizationMessageCommand,
      GetAccessKeyInfoCommand,
      GetCallerIdentityCommand,
      GetFederationTokenCommand,
      GetSessionTokenCommand
    };
    var _STS = class _STS extends import_STSClient.STSClient {
    };
    __name(_STS, "STS");
    var STS = _STS;
    (0, import_smithy_client.createAggregatedClient)(commands, STS);
    var import_EndpointParameters9 = require_EndpointParameters();
    var import_runtimeExtensions = require_runtimeExtensions();
    var ASSUME_ROLE_DEFAULT_REGION = "us-east-1";
    var resolveRegion = /* @__PURE__ */ __name(async (_region, _parentRegion, credentialProviderLogger) => {
      var _a2;
      const region = typeof _region === "function" ? await _region() : _region;
      const parentRegion = typeof _parentRegion === "function" ? await _parentRegion() : _parentRegion;
      (_a2 = credentialProviderLogger == null ? void 0 : credentialProviderLogger.debug) == null ? void 0 : _a2.call(
        credentialProviderLogger,
        "@aws-sdk/client-sts::resolveRegion",
        "accepting first of:",
        `${region} (provider)`,
        `${parentRegion} (parent client)`,
        `${ASSUME_ROLE_DEFAULT_REGION} (STS default)`
      );
      return region ?? parentRegion ?? ASSUME_ROLE_DEFAULT_REGION;
    }, "resolveRegion");
    var getDefaultRoleAssumer = /* @__PURE__ */ __name((stsOptions, stsClientCtor) => {
      let stsClient;
      let closureSourceCreds;
      return async (sourceCreds, params) => {
        var _a2, _b, _c;
        closureSourceCreds = sourceCreds;
        if (!stsClient) {
          const {
            logger = (_a2 = stsOptions == null ? void 0 : stsOptions.parentClientConfig) == null ? void 0 : _a2.logger,
            region,
            requestHandler = (_b = stsOptions == null ? void 0 : stsOptions.parentClientConfig) == null ? void 0 : _b.requestHandler,
            credentialProviderLogger
          } = stsOptions;
          const resolvedRegion = await resolveRegion(
            region,
            (_c = stsOptions == null ? void 0 : stsOptions.parentClientConfig) == null ? void 0 : _c.region,
            credentialProviderLogger
          );
          stsClient = new stsClientCtor({
            // A hack to make sts client uses the credential in current closure.
            credentialDefaultProvider: () => async () => closureSourceCreds,
            region: resolvedRegion,
            requestHandler,
            logger
          });
        }
        const { Credentials: Credentials2 } = await stsClient.send(new AssumeRoleCommand(params));
        if (!Credentials2 || !Credentials2.AccessKeyId || !Credentials2.SecretAccessKey) {
          throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        return {
          accessKeyId: Credentials2.AccessKeyId,
          secretAccessKey: Credentials2.SecretAccessKey,
          sessionToken: Credentials2.SessionToken,
          expiration: Credentials2.Expiration,
          // TODO(credentialScope): access normally when shape is updated.
          credentialScope: Credentials2.CredentialScope
        };
      };
    }, "getDefaultRoleAssumer");
    var getDefaultRoleAssumerWithWebIdentity = /* @__PURE__ */ __name((stsOptions, stsClientCtor) => {
      let stsClient;
      return async (params) => {
        var _a2, _b, _c;
        if (!stsClient) {
          const {
            logger = (_a2 = stsOptions == null ? void 0 : stsOptions.parentClientConfig) == null ? void 0 : _a2.logger,
            region,
            requestHandler = (_b = stsOptions == null ? void 0 : stsOptions.parentClientConfig) == null ? void 0 : _b.requestHandler,
            credentialProviderLogger
          } = stsOptions;
          const resolvedRegion = await resolveRegion(
            region,
            (_c = stsOptions == null ? void 0 : stsOptions.parentClientConfig) == null ? void 0 : _c.region,
            credentialProviderLogger
          );
          stsClient = new stsClientCtor({
            region: resolvedRegion,
            requestHandler,
            logger
          });
        }
        const { Credentials: Credentials2 } = await stsClient.send(new AssumeRoleWithWebIdentityCommand(params));
        if (!Credentials2 || !Credentials2.AccessKeyId || !Credentials2.SecretAccessKey) {
          throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
        }
        return {
          accessKeyId: Credentials2.AccessKeyId,
          secretAccessKey: Credentials2.SecretAccessKey,
          sessionToken: Credentials2.SessionToken,
          expiration: Credentials2.Expiration,
          // TODO(credentialScope): access normally when shape is updated.
          credentialScope: Credentials2.CredentialScope
        };
      };
    }, "getDefaultRoleAssumerWithWebIdentity");
    var import_STSClient2 = require_STSClient();
    var getCustomizableStsClientCtor = /* @__PURE__ */ __name((baseCtor, customizations) => {
      var _a2;
      if (!customizations)
        return baseCtor;
      else
        return _a2 = class extends baseCtor {
          constructor(config) {
            super(config);
            for (const customization of customizations) {
              this.middlewareStack.use(customization);
            }
          }
        }, __name(_a2, "CustomizableSTSClient"), _a2;
    }, "getCustomizableStsClientCtor");
    var getDefaultRoleAssumer2 = /* @__PURE__ */ __name((stsOptions = {}, stsPlugins) => getDefaultRoleAssumer(stsOptions, getCustomizableStsClientCtor(import_STSClient2.STSClient, stsPlugins)), "getDefaultRoleAssumer");
    var getDefaultRoleAssumerWithWebIdentity2 = /* @__PURE__ */ __name((stsOptions = {}, stsPlugins) => getDefaultRoleAssumerWithWebIdentity(stsOptions, getCustomizableStsClientCtor(import_STSClient2.STSClient, stsPlugins)), "getDefaultRoleAssumerWithWebIdentity");
    var decorateDefaultCredentialProvider = /* @__PURE__ */ __name((provider) => (input) => provider({
      roleAssumer: getDefaultRoleAssumer2(input),
      roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity2(input),
      ...input
    }), "decorateDefaultCredentialProvider");
  }
});

// node_modules/@aws-sdk/credential-provider-process/dist-cjs/index.js
var require_dist_cjs52 = __commonJS({
  "node_modules/@aws-sdk/credential-provider-process/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      fromProcess: () => fromProcess
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_shared_ini_file_loader = require_dist_cjs13();
    var import_property_provider = require_dist_cjs12();
    var import_child_process = require("child_process");
    var import_util = require("util");
    var getValidatedProcessCredentials = /* @__PURE__ */ __name((profileName, data) => {
      if (data.Version !== 1) {
        throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
      }
      if (data.AccessKeyId === void 0 || data.SecretAccessKey === void 0) {
        throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
      }
      if (data.Expiration) {
        const currentTime = /* @__PURE__ */ new Date();
        const expireTime = new Date(data.Expiration);
        if (expireTime < currentTime) {
          throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
        }
      }
      return {
        accessKeyId: data.AccessKeyId,
        secretAccessKey: data.SecretAccessKey,
        ...data.SessionToken && { sessionToken: data.SessionToken },
        ...data.Expiration && { expiration: new Date(data.Expiration) },
        ...data.CredentialScope && { credentialScope: data.CredentialScope }
      };
    }, "getValidatedProcessCredentials");
    var resolveProcessCredentials = /* @__PURE__ */ __name(async (profileName, profiles) => {
      const profile = profiles[profileName];
      if (profiles[profileName]) {
        const credentialProcess = profile["credential_process"];
        if (credentialProcess !== void 0) {
          const execPromise = (0, import_util.promisify)(import_child_process.exec);
          try {
            const { stdout } = await execPromise(credentialProcess);
            let data;
            try {
              data = JSON.parse(stdout.trim());
            } catch {
              throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
            }
            return getValidatedProcessCredentials(profileName, data);
          } catch (error) {
            throw new import_property_provider.CredentialsProviderError(error.message);
          }
        } else {
          throw new import_property_provider.CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`);
        }
      } else {
        throw new import_property_provider.CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`);
      }
    }, "resolveProcessCredentials");
    var fromProcess = /* @__PURE__ */ __name((init = {}) => async () => {
      var _a;
      (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-process", "fromProcess");
      const profiles = await (0, import_shared_ini_file_loader.parseKnownFiles)(init);
      return resolveProcessCredentials((0, import_shared_ini_file_loader.getProfileName)(init), profiles);
    }, "fromProcess");
  }
});

// node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/fromWebToken.js
var require_fromWebToken = __commonJS({
  "node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/fromWebToken.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding2(result, mod, k);
      }
      __setModuleDefault2(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromWebToken = void 0;
    var fromWebToken2 = (init) => async () => {
      init.logger?.debug("@aws-sdk/credential-provider-web-identity", "fromWebToken");
      const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds } = init;
      let { roleAssumerWithWebIdentity } = init;
      if (!roleAssumerWithWebIdentity) {
        const { getDefaultRoleAssumerWithWebIdentity } = await Promise.resolve().then(() => __importStar2(require_dist_cjs51()));
        roleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity({
          ...init.clientConfig,
          credentialProviderLogger: init.logger,
          parentClientConfig: init.parentClientConfig
        }, init.clientPlugins);
      }
      return roleAssumerWithWebIdentity({
        RoleArn: roleArn,
        RoleSessionName: roleSessionName ?? `aws-sdk-js-session-${Date.now()}`,
        WebIdentityToken: webIdentityToken,
        ProviderId: providerId,
        PolicyArns: policyArns,
        Policy: policy,
        DurationSeconds: durationSeconds
      });
    };
    exports2.fromWebToken = fromWebToken2;
  }
});

// node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/fromTokenFile.js
var require_fromTokenFile = __commonJS({
  "node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/fromTokenFile.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromTokenFile = void 0;
    var property_provider_1 = require_dist_cjs12();
    var fs_1 = require("fs");
    var fromWebToken_1 = require_fromWebToken();
    var ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
    var ENV_ROLE_ARN = "AWS_ROLE_ARN";
    var ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
    var fromTokenFile2 = (init = {}) => async () => {
      init.logger?.debug("@aws-sdk/credential-provider-web-identity", "fromTokenFile");
      const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
      const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
      const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];
      if (!webIdentityTokenFile || !roleArn) {
        throw new property_provider_1.CredentialsProviderError("Web identity configuration not specified");
      }
      return (0, fromWebToken_1.fromWebToken)({
        ...init,
        webIdentityToken: (0, fs_1.readFileSync)(webIdentityTokenFile, { encoding: "ascii" }),
        roleArn,
        roleSessionName
      })();
    };
    exports2.fromTokenFile = fromTokenFile2;
  }
});

// node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/index.js
var require_dist_cjs53 = __commonJS({
  "node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default"));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport(src_exports, require_fromTokenFile(), module2.exports);
    __reExport(src_exports, require_fromWebToken(), module2.exports);
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js
var require_dist_cjs54 = __commonJS({
  "node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      fromIni: () => fromIni
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_shared_ini_file_loader = require_dist_cjs13();
    var import_property_provider = require_dist_cjs12();
    var resolveCredentialSource = /* @__PURE__ */ __name((credentialSource, profileName) => {
      const sourceProvidersMap = {
        EcsContainer: (options) => Promise.resolve().then(() => __toESM2(require_dist_cjs40())).then(({ fromContainerMetadata }) => fromContainerMetadata(options)),
        Ec2InstanceMetadata: (options) => Promise.resolve().then(() => __toESM2(require_dist_cjs40())).then(({ fromInstanceMetadata }) => fromInstanceMetadata(options)),
        Environment: (options) => Promise.resolve().then(() => __toESM2(require_dist_cjs39())).then(({ fromEnv }) => fromEnv(options))
      };
      if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource];
      } else {
        throw new import_property_provider.CredentialsProviderError(
          `Unsupported credential source in profile ${profileName}. Got ${credentialSource}, expected EcsContainer or Ec2InstanceMetadata or Environment.`
        );
      }
    }, "resolveCredentialSource");
    var isAssumeRoleProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof arg.external_id) > -1 && ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 && (isAssumeRoleWithSourceProfile(arg) || isAssumeRoleWithProviderProfile(arg)), "isAssumeRoleProfile");
    var isAssumeRoleWithSourceProfile = /* @__PURE__ */ __name((arg) => typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined", "isAssumeRoleWithSourceProfile");
    var isAssumeRoleWithProviderProfile = /* @__PURE__ */ __name((arg) => typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined", "isAssumeRoleWithProviderProfile");
    var resolveAssumeRoleCredentials = /* @__PURE__ */ __name(async (profileName, profiles, options, visitedProfiles = {}) => {
      var _a;
      (_a = options.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-ini", "resolveAssumeRoleCredentials (STS)");
      const data = profiles[profileName];
      if (!options.roleAssumer) {
        const { getDefaultRoleAssumer } = await Promise.resolve().then(() => __toESM2(require_dist_cjs51()));
        options.roleAssumer = getDefaultRoleAssumer(
          {
            ...options.clientConfig,
            credentialProviderLogger: options.logger,
            parentClientConfig: options == null ? void 0 : options.parentClientConfig
          },
          options.clientPlugins
        );
      }
      const { source_profile } = data;
      if (source_profile && source_profile in visitedProfiles) {
        throw new import_property_provider.CredentialsProviderError(
          `Detected a cycle attempting to resolve credentials for profile ${(0, import_shared_ini_file_loader.getProfileName)(options)}. Profiles visited: ` + Object.keys(visitedProfiles).join(", "),
          false
        );
      }
      const sourceCredsProvider = source_profile ? resolveProfileData(source_profile, profiles, options, {
        ...visitedProfiles,
        [source_profile]: true
      }) : (await resolveCredentialSource(data.credential_source, profileName)(options))();
      const params = {
        RoleArn: data.role_arn,
        RoleSessionName: data.role_session_name || `aws-sdk-js-${Date.now()}`,
        ExternalId: data.external_id,
        DurationSeconds: parseInt(data.duration_seconds || "3600", 10)
      };
      const { mfa_serial } = data;
      if (mfa_serial) {
        if (!options.mfaCodeProvider) {
          throw new import_property_provider.CredentialsProviderError(
            `Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`,
            false
          );
        }
        params.SerialNumber = mfa_serial;
        params.TokenCode = await options.mfaCodeProvider(mfa_serial);
      }
      const sourceCreds = await sourceCredsProvider;
      return options.roleAssumer(sourceCreds, params);
    }, "resolveAssumeRoleCredentials");
    var isProcessProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string", "isProcessProfile");
    var resolveProcessCredentials = /* @__PURE__ */ __name(async (options, profile) => Promise.resolve().then(() => __toESM2(require_dist_cjs52())).then(
      ({ fromProcess }) => fromProcess({
        ...options,
        profile
      })()
    ), "resolveProcessCredentials");
    var resolveSsoCredentials = /* @__PURE__ */ __name(async (profile, options = {}) => {
      const { fromSSO } = await Promise.resolve().then(() => __toESM2(require_dist_cjs50()));
      return fromSSO({
        profile,
        logger: options.logger
      })();
    }, "resolveSsoCredentials");
    var isSsoProfile = /* @__PURE__ */ __name((arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string"), "isSsoProfile");
    var isStaticCredsProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.aws_access_key_id === "string" && typeof arg.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1, "isStaticCredsProfile");
    var resolveStaticCredentials = /* @__PURE__ */ __name((profile, options) => {
      var _a;
      (_a = options == null ? void 0 : options.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-ini", "resolveStaticCredentials");
      return Promise.resolve({
        accessKeyId: profile.aws_access_key_id,
        secretAccessKey: profile.aws_secret_access_key,
        sessionToken: profile.aws_session_token,
        credentialScope: profile.aws_credential_scope
      });
    }, "resolveStaticCredentials");
    var isWebIdentityProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.web_identity_token_file === "string" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1, "isWebIdentityProfile");
    var resolveWebIdentityCredentials = /* @__PURE__ */ __name(async (profile, options) => Promise.resolve().then(() => __toESM2(require_dist_cjs53())).then(
      ({ fromTokenFile: fromTokenFile2 }) => fromTokenFile2({
        webIdentityTokenFile: profile.web_identity_token_file,
        roleArn: profile.role_arn,
        roleSessionName: profile.role_session_name,
        roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
        logger: options.logger,
        parentClientConfig: options.parentClientConfig
      })()
    ), "resolveWebIdentityCredentials");
    var resolveProfileData = /* @__PURE__ */ __name(async (profileName, profiles, options, visitedProfiles = {}) => {
      const data = profiles[profileName];
      if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
      }
      if (isAssumeRoleProfile(data)) {
        return resolveAssumeRoleCredentials(profileName, profiles, options, visitedProfiles);
      }
      if (isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
      }
      if (isWebIdentityProfile(data)) {
        return resolveWebIdentityCredentials(data, options);
      }
      if (isProcessProfile(data)) {
        return resolveProcessCredentials(options, profileName);
      }
      if (isSsoProfile(data)) {
        return await resolveSsoCredentials(profileName, options);
      }
      throw new import_property_provider.CredentialsProviderError(`Profile ${profileName} could not be found or parsed in shared credentials file.`);
    }, "resolveProfileData");
    var fromIni = /* @__PURE__ */ __name((init = {}) => async () => {
      var _a;
      (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-ini", "fromIni");
      const profiles = await (0, import_shared_ini_file_loader.parseKnownFiles)(init);
      return resolveProfileData((0, import_shared_ini_file_loader.getProfileName)(init), profiles, init);
    }, "fromIni");
  }
});

// node_modules/@aws-sdk/credential-provider-node/dist-cjs/index.js
var require_dist_cjs55 = __commonJS({
  "node_modules/@aws-sdk/credential-provider-node/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      credentialsTreatedAsExpired: () => credentialsTreatedAsExpired,
      credentialsWillNeedRefresh: () => credentialsWillNeedRefresh,
      defaultProvider: () => defaultProvider
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_credential_provider_env = require_dist_cjs39();
    var import_shared_ini_file_loader = require_dist_cjs13();
    var import_property_provider = require_dist_cjs12();
    var ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
    var remoteProvider = /* @__PURE__ */ __name(async (init) => {
      var _a, _b;
      const { ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, fromContainerMetadata, fromInstanceMetadata } = await Promise.resolve().then(() => __toESM2(require_dist_cjs40()));
      if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
        (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-node", "remoteProvider::fromHttp/fromContainerMetadata");
        const { fromHttp } = await Promise.resolve().then(() => __toESM2(require_dist_cjs41()));
        return (0, import_property_provider.chain)(fromHttp(init), fromContainerMetadata(init));
      }
      if (process.env[ENV_IMDS_DISABLED]) {
        return async () => {
          throw new import_property_provider.CredentialsProviderError("EC2 Instance Metadata Service access disabled");
        };
      }
      (_b = init.logger) == null ? void 0 : _b.debug("@aws-sdk/credential-provider-node", "remoteProvider::fromInstanceMetadata");
      return fromInstanceMetadata(init);
    }, "remoteProvider");
    var defaultProvider = /* @__PURE__ */ __name((init = {}) => (0, import_property_provider.memoize)(
      (0, import_property_provider.chain)(
        ...init.profile || process.env[import_shared_ini_file_loader.ENV_PROFILE] ? [] : [
          async () => {
            var _a;
            (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromEnv");
            return (0, import_credential_provider_env.fromEnv)(init)();
          }
        ],
        async () => {
          var _a;
          (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromSSO");
          const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
          if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
            throw new import_property_provider.CredentialsProviderError(
              "Skipping SSO provider in default chain (inputs do not include SSO fields)."
            );
          }
          const { fromSSO } = await Promise.resolve().then(() => __toESM2(require_dist_cjs50()));
          return fromSSO(init)();
        },
        async () => {
          var _a;
          (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromIni");
          const { fromIni } = await Promise.resolve().then(() => __toESM2(require_dist_cjs54()));
          return fromIni(init)();
        },
        async () => {
          var _a;
          (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromProcess");
          const { fromProcess } = await Promise.resolve().then(() => __toESM2(require_dist_cjs52()));
          return fromProcess(init)();
        },
        async () => {
          var _a;
          (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromTokenFile");
          const { fromTokenFile: fromTokenFile2 } = await Promise.resolve().then(() => __toESM2(require_dist_cjs53()));
          return fromTokenFile2(init)();
        },
        async () => {
          var _a;
          (_a = init.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-node", "defaultProvider::remoteProvider");
          return (await remoteProvider(init))();
        },
        async () => {
          throw new import_property_provider.CredentialsProviderError("Could not load credentials from any providers", false);
        }
      ),
      credentialsTreatedAsExpired,
      credentialsWillNeedRefresh
    ), "defaultProvider");
    var credentialsWillNeedRefresh = /* @__PURE__ */ __name((credentials) => (credentials == null ? void 0 : credentials.expiration) !== void 0, "credentialsWillNeedRefresh");
    var credentialsTreatedAsExpired = /* @__PURE__ */ __name((credentials) => (credentials == null ? void 0 : credentials.expiration) !== void 0 && credentials.expiration.getTime() - Date.now() < 3e5, "credentialsTreatedAsExpired");
  }
});

// node_modules/@aws-sdk/client-cloudwatch/dist-cjs/endpoint/ruleset.js
var require_ruleset4 = __commonJS({
  "node_modules/@aws-sdk/client-cloudwatch/dist-cjs/endpoint/ruleset.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ruleSet = void 0;
    var u = "required";
    var v = "fn";
    var w = "argv";
    var x = "ref";
    var a = true;
    var b = "isSet";
    var c = "booleanEquals";
    var d = "error";
    var e = "endpoint";
    var f = "tree";
    var g = "PartitionResult";
    var h = "getAttr";
    var i = { [u]: false, "type": "String" };
    var j = { [u]: true, "default": false, "type": "Boolean" };
    var k = { [x]: "Endpoint" };
    var l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] };
    var m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] };
    var n = {};
    var o = { [v]: h, [w]: [{ [x]: g }, "supportsFIPS"] };
    var p = { [x]: g };
    var q = { [v]: c, [w]: [true, { [v]: h, [w]: [p, "supportsDualStack"] }] };
    var r = [l];
    var s = [m];
    var t = [{ [x]: "Region" }];
    var _data = { version: "1.0", parameters: { Region: i, UseDualStack: j, UseFIPS: j, Endpoint: i }, rules: [{ conditions: [{ [v]: b, [w]: [k] }], rules: [{ conditions: r, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: s, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: k, properties: n, headers: n }, type: e }], type: f }, { conditions: [{ [v]: b, [w]: t }], rules: [{ conditions: [{ [v]: "aws.partition", [w]: t, assign: g }], rules: [{ conditions: [l, m], rules: [{ conditions: [{ [v]: c, [w]: [a, o] }, q], rules: [{ endpoint: { url: "https://monitoring-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: r, rules: [{ conditions: [{ [v]: c, [w]: [o, a] }], rules: [{ conditions: [{ [v]: "stringEquals", [w]: [{ [v]: h, [w]: [p, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://monitoring.{Region}.amazonaws.com", properties: n, headers: n }, type: e }, { endpoint: { url: "https://monitoring-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: s, rules: [{ conditions: [q], rules: [{ endpoint: { url: "https://monitoring.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://monitoring.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
    exports2.ruleSet = _data;
  }
});

// node_modules/@aws-sdk/client-cloudwatch/dist-cjs/endpoint/endpointResolver.js
var require_endpointResolver4 = __commonJS({
  "node_modules/@aws-sdk/client-cloudwatch/dist-cjs/endpoint/endpointResolver.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.defaultEndpointResolver = void 0;
    var util_endpoints_1 = require_dist_cjs7();
    var util_endpoints_2 = require_dist_cjs6();
    var ruleset_1 = require_ruleset4();
    var defaultEndpointResolver = (endpointParams, context = {}) => {
      return (0, util_endpoints_2.resolveEndpoint)(ruleset_1.ruleSet, {
        endpointParams,
        logger: context.logger
      });
    };
    exports2.defaultEndpointResolver = defaultEndpointResolver;
    util_endpoints_2.customEndpointFunctions.aws = util_endpoints_1.awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/client-cloudwatch/dist-cjs/runtimeConfig.shared.js
var require_runtimeConfig_shared4 = __commonJS({
  "node_modules/@aws-sdk/client-cloudwatch/dist-cjs/runtimeConfig.shared.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getRuntimeConfig = void 0;
    var core_1 = require_dist_cjs38();
    var smithy_client_1 = require_dist_cjs32();
    var url_parser_1 = require_dist_cjs16();
    var util_base64_1 = require_dist_cjs25();
    var util_utf8_1 = require_dist_cjs24();
    var httpAuthSchemeProvider_1 = require_httpAuthSchemeProvider();
    var endpointResolver_1 = require_endpointResolver4();
    var getRuntimeConfig = (config) => {
      return {
        apiVersion: "2010-08-01",
        base64Decoder: config?.base64Decoder ?? util_base64_1.fromBase64,
        base64Encoder: config?.base64Encoder ?? util_base64_1.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? endpointResolver_1.defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? httpAuthSchemeProvider_1.defaultCloudWatchHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
            signer: new core_1.AwsSdkSigV4Signer()
          }
        ],
        logger: config?.logger ?? new smithy_client_1.NoOpLogger(),
        serviceId: config?.serviceId ?? "CloudWatch",
        urlParser: config?.urlParser ?? url_parser_1.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? util_utf8_1.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? util_utf8_1.toUtf8
      };
    };
    exports2.getRuntimeConfig = getRuntimeConfig;
  }
});

// node_modules/@aws-sdk/client-cloudwatch/dist-cjs/runtimeConfig.js
var require_runtimeConfig4 = __commonJS({
  "node_modules/@aws-sdk/client-cloudwatch/dist-cjs/runtimeConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getRuntimeConfig = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var package_json_1 = tslib_1.__importDefault(require_package());
    var core_1 = require_dist_cjs38();
    var credential_provider_node_1 = require_dist_cjs55();
    var util_user_agent_node_1 = require_dist_cjs42();
    var config_resolver_1 = require_dist_cjs11();
    var hash_node_1 = require_dist_cjs43();
    var middleware_compression_1 = require_dist_cjs35();
    var middleware_retry_1 = require_dist_cjs33();
    var node_config_provider_1 = require_dist_cjs14();
    var node_http_handler_1 = require_dist_cjs28();
    var util_body_length_node_1 = require_dist_cjs44();
    var util_retry_1 = require_dist_cjs20();
    var runtimeConfig_shared_1 = require_runtimeConfig_shared4();
    var smithy_client_1 = require_dist_cjs32();
    var util_defaults_mode_node_1 = require_dist_cjs45();
    var smithy_client_2 = require_dist_cjs32();
    var getRuntimeConfig = (config) => {
      (0, smithy_client_2.emitWarningIfUnsupportedVersion)(process.version);
      const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
      const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
      const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
      (0, core_1.emitWarningIfUnsupportedVersion)(process.version);
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? util_body_length_node_1.calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? credential_provider_node_1.defaultProvider,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, util_user_agent_node_1.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        disableRequestCompression: config?.disableRequestCompression ?? (0, node_config_provider_1.loadConfig)(middleware_compression_1.NODE_DISABLE_REQUEST_COMPRESSION_CONFIG_OPTIONS),
        maxAttempts: config?.maxAttempts ?? (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: node_http_handler_1.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        requestMinCompressionSizeBytes: config?.requestMinCompressionSizeBytes ?? (0, node_config_provider_1.loadConfig)(middleware_compression_1.NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_CONFIG_OPTIONS),
        retryMode: config?.retryMode ?? (0, node_config_provider_1.loadConfig)({
          ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || util_retry_1.DEFAULT_RETRY_MODE
        }),
        sha256: config?.sha256 ?? hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? node_http_handler_1.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      };
    };
    exports2.getRuntimeConfig = getRuntimeConfig;
  }
});

// node_modules/@smithy/util-waiter/dist-cjs/index.js
var require_dist_cjs56 = __commonJS({
  "node_modules/@smithy/util-waiter/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      WaiterState: () => WaiterState,
      checkExceptions: () => checkExceptions,
      createWaiter: () => createWaiter,
      waiterServiceDefaults: () => waiterServiceDefaults
    });
    module2.exports = __toCommonJS2(src_exports);
    var sleep = /* @__PURE__ */ __name((seconds) => {
      return new Promise((resolve) => setTimeout(resolve, seconds * 1e3));
    }, "sleep");
    var waiterServiceDefaults = {
      minDelay: 2,
      maxDelay: 120
    };
    var WaiterState = /* @__PURE__ */ ((WaiterState2) => {
      WaiterState2["ABORTED"] = "ABORTED";
      WaiterState2["FAILURE"] = "FAILURE";
      WaiterState2["SUCCESS"] = "SUCCESS";
      WaiterState2["RETRY"] = "RETRY";
      WaiterState2["TIMEOUT"] = "TIMEOUT";
      return WaiterState2;
    })(WaiterState || {});
    var checkExceptions = /* @__PURE__ */ __name((result) => {
      if (result.state === "ABORTED") {
        const abortError = new Error(
          `${JSON.stringify({
            ...result,
            reason: "Request was aborted"
          })}`
        );
        abortError.name = "AbortError";
        throw abortError;
      } else if (result.state === "TIMEOUT") {
        const timeoutError = new Error(
          `${JSON.stringify({
            ...result,
            reason: "Waiter has timed out"
          })}`
        );
        timeoutError.name = "TimeoutError";
        throw timeoutError;
      } else if (result.state !== "SUCCESS") {
        throw new Error(`${JSON.stringify({ result })}`);
      }
      return result;
    }, "checkExceptions");
    var exponentialBackoffWithJitter = /* @__PURE__ */ __name((minDelay, maxDelay, attemptCeiling, attempt) => {
      if (attempt > attemptCeiling)
        return maxDelay;
      const delay = minDelay * 2 ** (attempt - 1);
      return randomInRange(minDelay, delay);
    }, "exponentialBackoffWithJitter");
    var randomInRange = /* @__PURE__ */ __name((min, max) => min + Math.random() * (max - min), "randomInRange");
    var runPolling = /* @__PURE__ */ __name(async ({ minDelay, maxDelay, maxWaitTime, abortController, client, abortSignal }, input, acceptorChecks) => {
      var _a;
      const { state, reason } = await acceptorChecks(client, input);
      if (state !== "RETRY") {
        return { state, reason };
      }
      let currentAttempt = 1;
      const waitUntil = Date.now() + maxWaitTime * 1e3;
      const attemptCeiling = Math.log(maxDelay / minDelay) / Math.log(2) + 1;
      while (true) {
        if (((_a = abortController == null ? void 0 : abortController.signal) == null ? void 0 : _a.aborted) || (abortSignal == null ? void 0 : abortSignal.aborted)) {
          return {
            state: "ABORTED"
            /* ABORTED */
          };
        }
        const delay = exponentialBackoffWithJitter(minDelay, maxDelay, attemptCeiling, currentAttempt);
        if (Date.now() + delay * 1e3 > waitUntil) {
          return {
            state: "TIMEOUT"
            /* TIMEOUT */
          };
        }
        await sleep(delay);
        const { state: state2, reason: reason2 } = await acceptorChecks(client, input);
        if (state2 !== "RETRY") {
          return { state: state2, reason: reason2 };
        }
        currentAttempt += 1;
      }
    }, "runPolling");
    var validateWaiterOptions = /* @__PURE__ */ __name((options) => {
      if (options.maxWaitTime < 1) {
        throw new Error(`WaiterConfiguration.maxWaitTime must be greater than 0`);
      } else if (options.minDelay < 1) {
        throw new Error(`WaiterConfiguration.minDelay must be greater than 0`);
      } else if (options.maxDelay < 1) {
        throw new Error(`WaiterConfiguration.maxDelay must be greater than 0`);
      } else if (options.maxWaitTime <= options.minDelay) {
        throw new Error(
          `WaiterConfiguration.maxWaitTime [${options.maxWaitTime}] must be greater than WaiterConfiguration.minDelay [${options.minDelay}] for this waiter`
        );
      } else if (options.maxDelay < options.minDelay) {
        throw new Error(
          `WaiterConfiguration.maxDelay [${options.maxDelay}] must be greater than WaiterConfiguration.minDelay [${options.minDelay}] for this waiter`
        );
      }
    }, "validateWaiterOptions");
    var abortTimeout = /* @__PURE__ */ __name(async (abortSignal) => {
      return new Promise((resolve) => {
        abortSignal.onabort = () => resolve({
          state: "ABORTED"
          /* ABORTED */
        });
      });
    }, "abortTimeout");
    var createWaiter = /* @__PURE__ */ __name(async (options, input, acceptorChecks) => {
      const params = {
        ...waiterServiceDefaults,
        ...options
      };
      validateWaiterOptions(params);
      const exitConditions = [runPolling(params, input, acceptorChecks)];
      if (options.abortController) {
        exitConditions.push(abortTimeout(options.abortController.signal));
      }
      if (options.abortSignal) {
        exitConditions.push(abortTimeout(options.abortSignal));
      }
      return Promise.race(exitConditions);
    }, "createWaiter");
  }
});

// node_modules/@aws-sdk/client-cloudwatch/dist-cjs/index.js
var require_dist_cjs57 = __commonJS({
  "node_modules/@aws-sdk/client-cloudwatch/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      ActionsSuppressedBy: () => ActionsSuppressedBy,
      AlarmType: () => AlarmType,
      AnomalyDetectorStateValue: () => AnomalyDetectorStateValue,
      AnomalyDetectorType: () => AnomalyDetectorType,
      CloudWatch: () => CloudWatch,
      CloudWatchClient: () => CloudWatchClient2,
      CloudWatchServiceException: () => CloudWatchServiceException,
      ComparisonOperator: () => ComparisonOperator,
      ConcurrentModificationException: () => ConcurrentModificationException,
      DashboardInvalidInputError: () => DashboardInvalidInputError,
      DashboardNotFoundError: () => DashboardNotFoundError,
      DeleteAlarmsCommand: () => DeleteAlarmsCommand,
      DeleteAnomalyDetectorCommand: () => DeleteAnomalyDetectorCommand,
      DeleteDashboardsCommand: () => DeleteDashboardsCommand,
      DeleteInsightRulesCommand: () => DeleteInsightRulesCommand,
      DeleteMetricStreamCommand: () => DeleteMetricStreamCommand,
      DescribeAlarmHistoryCommand: () => DescribeAlarmHistoryCommand,
      DescribeAlarmsCommand: () => DescribeAlarmsCommand,
      DescribeAlarmsForMetricCommand: () => DescribeAlarmsForMetricCommand,
      DescribeAnomalyDetectorsCommand: () => DescribeAnomalyDetectorsCommand,
      DescribeInsightRulesCommand: () => DescribeInsightRulesCommand,
      DisableAlarmActionsCommand: () => DisableAlarmActionsCommand,
      DisableInsightRulesCommand: () => DisableInsightRulesCommand,
      EnableAlarmActionsCommand: () => EnableAlarmActionsCommand,
      EnableInsightRulesCommand: () => EnableInsightRulesCommand,
      EvaluationState: () => EvaluationState,
      GetDashboardCommand: () => GetDashboardCommand,
      GetInsightRuleReportCommand: () => GetInsightRuleReportCommand,
      GetMetricDataCommand: () => GetMetricDataCommand2,
      GetMetricStatisticsCommand: () => GetMetricStatisticsCommand,
      GetMetricStreamCommand: () => GetMetricStreamCommand,
      GetMetricWidgetImageCommand: () => GetMetricWidgetImageCommand,
      HistoryItemType: () => HistoryItemType,
      InternalServiceFault: () => InternalServiceFault,
      InvalidFormatFault: () => InvalidFormatFault,
      InvalidNextToken: () => InvalidNextToken,
      InvalidParameterCombinationException: () => InvalidParameterCombinationException,
      InvalidParameterValueException: () => InvalidParameterValueException,
      LimitExceededException: () => LimitExceededException,
      LimitExceededFault: () => LimitExceededFault,
      ListDashboardsCommand: () => ListDashboardsCommand,
      ListManagedInsightRulesCommand: () => ListManagedInsightRulesCommand,
      ListMetricStreamsCommand: () => ListMetricStreamsCommand,
      ListMetricsCommand: () => ListMetricsCommand,
      ListTagsForResourceCommand: () => ListTagsForResourceCommand,
      MetricStreamOutputFormat: () => MetricStreamOutputFormat,
      MissingRequiredParameterException: () => MissingRequiredParameterException,
      PutAnomalyDetectorCommand: () => PutAnomalyDetectorCommand,
      PutCompositeAlarmCommand: () => PutCompositeAlarmCommand,
      PutDashboardCommand: () => PutDashboardCommand,
      PutInsightRuleCommand: () => PutInsightRuleCommand,
      PutManagedInsightRulesCommand: () => PutManagedInsightRulesCommand,
      PutMetricAlarmCommand: () => PutMetricAlarmCommand,
      PutMetricDataCommand: () => PutMetricDataCommand,
      PutMetricStreamCommand: () => PutMetricStreamCommand,
      RecentlyActive: () => RecentlyActive,
      ResourceNotFound: () => ResourceNotFound,
      ResourceNotFoundException: () => ResourceNotFoundException,
      ScanBy: () => ScanBy,
      SetAlarmStateCommand: () => SetAlarmStateCommand,
      StandardUnit: () => StandardUnit,
      StartMetricStreamsCommand: () => StartMetricStreamsCommand,
      StateValue: () => StateValue,
      Statistic: () => Statistic,
      StatusCode: () => StatusCode,
      StopMetricStreamsCommand: () => StopMetricStreamsCommand,
      TagResourceCommand: () => TagResourceCommand,
      UntagResourceCommand: () => UntagResourceCommand,
      __Client: () => import_smithy_client.Client,
      paginateDescribeAlarmHistory: () => paginateDescribeAlarmHistory,
      paginateDescribeAlarms: () => paginateDescribeAlarms,
      paginateDescribeAnomalyDetectors: () => paginateDescribeAnomalyDetectors,
      paginateDescribeInsightRules: () => paginateDescribeInsightRules,
      paginateGetMetricData: () => paginateGetMetricData,
      paginateListDashboards: () => paginateListDashboards,
      paginateListManagedInsightRules: () => paginateListManagedInsightRules,
      paginateListMetricStreams: () => paginateListMetricStreams,
      paginateListMetrics: () => paginateListMetrics,
      waitForAlarmExists: () => waitForAlarmExists,
      waitForCompositeAlarmExists: () => waitForCompositeAlarmExists,
      waitUntilAlarmExists: () => waitUntilAlarmExists,
      waitUntilCompositeAlarmExists: () => waitUntilCompositeAlarmExists
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_middleware_host_header = require_dist_cjs3();
    var import_middleware_logger = require_dist_cjs4();
    var import_middleware_recursion_detection = require_dist_cjs5();
    var import_middleware_user_agent = require_dist_cjs8();
    var import_config_resolver = require_dist_cjs11();
    var import_core = require_dist_cjs34();
    var import_middleware_compression = require_dist_cjs35();
    var import_middleware_content_length = require_dist_cjs36();
    var import_middleware_endpoint = require_dist_cjs18();
    var import_middleware_retry = require_dist_cjs33();
    var import_httpAuthSchemeProvider = require_httpAuthSchemeProvider();
    var resolveClientEndpointParameters = /* @__PURE__ */ __name((options) => {
      return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "monitoring"
      };
    }, "resolveClientEndpointParameters");
    var commonParams = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
    var import_runtimeConfig = require_runtimeConfig4();
    var import_region_config_resolver = require_dist_cjs46();
    var import_protocol_http = require_dist_cjs2();
    var import_smithy_client = require_dist_cjs32();
    var getHttpAuthExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    }, "getHttpAuthExtensionConfiguration");
    var resolveHttpAuthRuntimeConfig = /* @__PURE__ */ __name((config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    }, "resolveHttpAuthRuntimeConfig");
    var asPartial = /* @__PURE__ */ __name((t) => t, "asPartial");
    var resolveRuntimeExtensions = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
      const extensionConfiguration = {
        ...asPartial((0, import_region_config_resolver.getAwsRegionExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, import_smithy_client.getDefaultExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, import_protocol_http.getHttpHandlerExtensionConfiguration)(runtimeConfig)),
        ...asPartial(getHttpAuthExtensionConfiguration(runtimeConfig))
      };
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return {
        ...runtimeConfig,
        ...(0, import_region_config_resolver.resolveAwsRegionExtensionConfiguration)(extensionConfiguration),
        ...(0, import_smithy_client.resolveDefaultRuntimeConfig)(extensionConfiguration),
        ...(0, import_protocol_http.resolveHttpHandlerRuntimeConfig)(extensionConfiguration),
        ...resolveHttpAuthRuntimeConfig(extensionConfiguration)
      };
    }, "resolveRuntimeExtensions");
    var _CloudWatchClient = class _CloudWatchClient extends import_smithy_client.Client {
      constructor(...[configuration]) {
        const _config_0 = (0, import_runtimeConfig.getRuntimeConfig)(configuration || {});
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = (0, import_config_resolver.resolveRegionConfig)(_config_1);
        const _config_3 = (0, import_middleware_endpoint.resolveEndpointConfig)(_config_2);
        const _config_4 = (0, import_middleware_retry.resolveRetryConfig)(_config_3);
        const _config_5 = (0, import_middleware_host_header.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0, import_middleware_user_agent.resolveUserAgentConfig)(_config_5);
        const _config_7 = (0, import_httpAuthSchemeProvider.resolveHttpAuthSchemeConfig)(_config_6);
        const _config_8 = (0, import_middleware_compression.resolveCompressionConfig)(_config_7);
        const _config_9 = resolveRuntimeExtensions(_config_8, (configuration == null ? void 0 : configuration.extensions) || []);
        super(_config_9);
        this.config = _config_9;
        this.middlewareStack.use((0, import_middleware_retry.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_content_length.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_host_header.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_logger.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_recursion_detection.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_user_agent.getUserAgentPlugin)(this.config));
        this.middlewareStack.use(
          (0, import_core.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
            httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
            identityProviderConfigProvider: this.getIdentityProviderConfigProvider()
          })
        );
        this.middlewareStack.use((0, import_core.getHttpSigningPlugin)(this.config));
      }
      /**
       * Destroy underlying resources, like sockets. It's usually not necessary to do this.
       * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
       * Otherwise, sockets might stay open for quite a long time before the server terminates them.
       */
      destroy() {
        super.destroy();
      }
      getDefaultHttpAuthSchemeParametersProvider() {
        return import_httpAuthSchemeProvider.defaultCloudWatchHttpAuthSchemeParametersProvider;
      }
      getIdentityProviderConfigProvider() {
        return async (config) => new import_core.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config.credentials
        });
      }
    };
    __name(_CloudWatchClient, "CloudWatchClient");
    var CloudWatchClient2 = _CloudWatchClient;
    var import_middleware_serde = require_dist_cjs17();
    var import_types = require_dist_cjs();
    var import_core2 = require_dist_cjs38();
    var _CloudWatchServiceException = class _CloudWatchServiceException2 extends import_smithy_client.ServiceException {
      /**
       * @internal
       */
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _CloudWatchServiceException2.prototype);
      }
    };
    __name(_CloudWatchServiceException, "CloudWatchServiceException");
    var CloudWatchServiceException = _CloudWatchServiceException;
    var ActionsSuppressedBy = {
      Alarm: "Alarm",
      ExtensionPeriod: "ExtensionPeriod",
      WaitPeriod: "WaitPeriod"
    };
    var AlarmType = {
      CompositeAlarm: "CompositeAlarm",
      MetricAlarm: "MetricAlarm"
    };
    var HistoryItemType = {
      Action: "Action",
      ConfigurationUpdate: "ConfigurationUpdate",
      StateUpdate: "StateUpdate"
    };
    var StandardUnit = {
      Bits: "Bits",
      Bits_Second: "Bits/Second",
      Bytes: "Bytes",
      Bytes_Second: "Bytes/Second",
      Count: "Count",
      Count_Second: "Count/Second",
      Gigabits: "Gigabits",
      Gigabits_Second: "Gigabits/Second",
      Gigabytes: "Gigabytes",
      Gigabytes_Second: "Gigabytes/Second",
      Kilobits: "Kilobits",
      Kilobits_Second: "Kilobits/Second",
      Kilobytes: "Kilobytes",
      Kilobytes_Second: "Kilobytes/Second",
      Megabits: "Megabits",
      Megabits_Second: "Megabits/Second",
      Megabytes: "Megabytes",
      Megabytes_Second: "Megabytes/Second",
      Microseconds: "Microseconds",
      Milliseconds: "Milliseconds",
      None: "None",
      Percent: "Percent",
      Seconds: "Seconds",
      Terabits: "Terabits",
      Terabits_Second: "Terabits/Second",
      Terabytes: "Terabytes",
      Terabytes_Second: "Terabytes/Second"
    };
    var AnomalyDetectorStateValue = {
      PENDING_TRAINING: "PENDING_TRAINING",
      TRAINED: "TRAINED",
      TRAINED_INSUFFICIENT_DATA: "TRAINED_INSUFFICIENT_DATA"
    };
    var AnomalyDetectorType = {
      METRIC_MATH: "METRIC_MATH",
      SINGLE_METRIC: "SINGLE_METRIC"
    };
    var ComparisonOperator = {
      GreaterThanOrEqualToThreshold: "GreaterThanOrEqualToThreshold",
      GreaterThanThreshold: "GreaterThanThreshold",
      GreaterThanUpperThreshold: "GreaterThanUpperThreshold",
      LessThanLowerOrGreaterThanUpperThreshold: "LessThanLowerOrGreaterThanUpperThreshold",
      LessThanLowerThreshold: "LessThanLowerThreshold",
      LessThanOrEqualToThreshold: "LessThanOrEqualToThreshold",
      LessThanThreshold: "LessThanThreshold"
    };
    var StateValue = {
      ALARM: "ALARM",
      INSUFFICIENT_DATA: "INSUFFICIENT_DATA",
      OK: "OK"
    };
    var _ConcurrentModificationException = class _ConcurrentModificationException2 extends CloudWatchServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "ConcurrentModificationException",
          $fault: "client",
          ...opts
        });
        this.name = "ConcurrentModificationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _ConcurrentModificationException2.prototype);
        this.Message = opts.Message;
      }
    };
    __name(_ConcurrentModificationException, "ConcurrentModificationException");
    var ConcurrentModificationException = _ConcurrentModificationException;
    var _DashboardInvalidInputError = class _DashboardInvalidInputError2 extends CloudWatchServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "DashboardInvalidInputError",
          $fault: "client",
          ...opts
        });
        this.name = "DashboardInvalidInputError";
        this.$fault = "client";
        Object.setPrototypeOf(this, _DashboardInvalidInputError2.prototype);
        this.dashboardValidationMessages = opts.dashboardValidationMessages;
      }
    };
    __name(_DashboardInvalidInputError, "DashboardInvalidInputError");
    var DashboardInvalidInputError = _DashboardInvalidInputError;
    var _DashboardNotFoundError = class _DashboardNotFoundError2 extends CloudWatchServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "DashboardNotFoundError",
          $fault: "client",
          ...opts
        });
        this.name = "DashboardNotFoundError";
        this.$fault = "client";
        Object.setPrototypeOf(this, _DashboardNotFoundError2.prototype);
      }
    };
    __name(_DashboardNotFoundError, "DashboardNotFoundError");
    var DashboardNotFoundError = _DashboardNotFoundError;
    var _ResourceNotFound = class _ResourceNotFound2 extends CloudWatchServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "ResourceNotFound",
          $fault: "client",
          ...opts
        });
        this.name = "ResourceNotFound";
        this.$fault = "client";
        Object.setPrototypeOf(this, _ResourceNotFound2.prototype);
      }
    };
    __name(_ResourceNotFound, "ResourceNotFound");
    var ResourceNotFound = _ResourceNotFound;
    var _InternalServiceFault = class _InternalServiceFault2 extends CloudWatchServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InternalServiceFault",
          $fault: "server",
          ...opts
        });
        this.name = "InternalServiceFault";
        this.$fault = "server";
        Object.setPrototypeOf(this, _InternalServiceFault2.prototype);
        this.Message = opts.Message;
      }
    };
    __name(_InternalServiceFault, "InternalServiceFault");
    var InternalServiceFault = _InternalServiceFault;
    var _InvalidParameterCombinationException = class _InvalidParameterCombinationException2 extends CloudWatchServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidParameterCombinationException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidParameterCombinationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidParameterCombinationException2.prototype);
      }
    };
    __name(_InvalidParameterCombinationException, "InvalidParameterCombinationException");
    var InvalidParameterCombinationException = _InvalidParameterCombinationException;
    var _InvalidParameterValueException = class _InvalidParameterValueException2 extends CloudWatchServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidParameterValueException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidParameterValueException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidParameterValueException2.prototype);
      }
    };
    __name(_InvalidParameterValueException, "InvalidParameterValueException");
    var InvalidParameterValueException = _InvalidParameterValueException;
    var _MissingRequiredParameterException = class _MissingRequiredParameterException2 extends CloudWatchServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "MissingRequiredParameterException",
          $fault: "client",
          ...opts
        });
        this.name = "MissingRequiredParameterException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _MissingRequiredParameterException2.prototype);
      }
    };
    __name(_MissingRequiredParameterException, "MissingRequiredParameterException");
    var MissingRequiredParameterException = _MissingRequiredParameterException;
    var _ResourceNotFoundException = class _ResourceNotFoundException2 extends CloudWatchServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "ResourceNotFoundException",
          $fault: "client",
          ...opts
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _ResourceNotFoundException2.prototype);
        this.ResourceType = opts.ResourceType;
        this.ResourceId = opts.ResourceId;
        this.Message = opts.Message;
      }
    };
    __name(_ResourceNotFoundException, "ResourceNotFoundException");
    var ResourceNotFoundException = _ResourceNotFoundException;
    var ScanBy = {
      TIMESTAMP_ASCENDING: "TimestampAscending",
      TIMESTAMP_DESCENDING: "TimestampDescending"
    };
    var _InvalidNextToken = class _InvalidNextToken2 extends CloudWatchServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidNextToken",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidNextToken";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidNextToken2.prototype);
      }
    };
    __name(_InvalidNextToken, "InvalidNextToken");
    var InvalidNextToken = _InvalidNextToken;
    var EvaluationState = {
      PARTIAL_DATA: "PARTIAL_DATA"
    };
    var Statistic = {
      Average: "Average",
      Maximum: "Maximum",
      Minimum: "Minimum",
      SampleCount: "SampleCount",
      Sum: "Sum"
    };
    var _LimitExceededException = class _LimitExceededException2 extends CloudWatchServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "LimitExceededException",
          $fault: "client",
          ...opts
        });
        this.name = "LimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _LimitExceededException2.prototype);
        this.Message = opts.Message;
      }
    };
    __name(_LimitExceededException, "LimitExceededException");
    var LimitExceededException = _LimitExceededException;
    var StatusCode = {
      COMPLETE: "Complete",
      FORBIDDEN: "Forbidden",
      INTERNAL_ERROR: "InternalError",
      PARTIAL_DATA: "PartialData"
    };
    var MetricStreamOutputFormat = {
      JSON: "json",
      OPEN_TELEMETRY_0_7: "opentelemetry0.7",
      OPEN_TELEMETRY_1_0: "opentelemetry1.0"
    };
    var RecentlyActive = {
      PT3H: "PT3H"
    };
    var _LimitExceededFault = class _LimitExceededFault2 extends CloudWatchServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "LimitExceededFault",
          $fault: "client",
          ...opts
        });
        this.name = "LimitExceededFault";
        this.$fault = "client";
        Object.setPrototypeOf(this, _LimitExceededFault2.prototype);
      }
    };
    __name(_LimitExceededFault, "LimitExceededFault");
    var LimitExceededFault = _LimitExceededFault;
    var _InvalidFormatFault = class _InvalidFormatFault2 extends CloudWatchServiceException {
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidFormatFault",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidFormatFault";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidFormatFault2.prototype);
      }
    };
    __name(_InvalidFormatFault, "InvalidFormatFault");
    var InvalidFormatFault = _InvalidFormatFault;
    var se_DeleteAlarmsCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_DeleteAlarmsInput(input, context),
        [_A]: _DA,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_DeleteAlarmsCommand");
    var se_DeleteAnomalyDetectorCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_DeleteAnomalyDetectorInput(input, context),
        [_A]: _DAD,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_DeleteAnomalyDetectorCommand");
    var se_DeleteDashboardsCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_DeleteDashboardsInput(input, context),
        [_A]: _DD,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_DeleteDashboardsCommand");
    var se_DeleteInsightRulesCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_DeleteInsightRulesInput(input, context),
        [_A]: _DIR,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_DeleteInsightRulesCommand");
    var se_DeleteMetricStreamCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_DeleteMetricStreamInput(input, context),
        [_A]: _DMS,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_DeleteMetricStreamCommand");
    var se_DescribeAlarmHistoryCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_DescribeAlarmHistoryInput(input, context),
        [_A]: _DAH,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_DescribeAlarmHistoryCommand");
    var se_DescribeAlarmsCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_DescribeAlarmsInput(input, context),
        [_A]: _DAe,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_DescribeAlarmsCommand");
    var se_DescribeAlarmsForMetricCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_DescribeAlarmsForMetricInput(input, context),
        [_A]: _DAFM,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_DescribeAlarmsForMetricCommand");
    var se_DescribeAnomalyDetectorsCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_DescribeAnomalyDetectorsInput(input, context),
        [_A]: _DADe,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_DescribeAnomalyDetectorsCommand");
    var se_DescribeInsightRulesCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_DescribeInsightRulesInput(input, context),
        [_A]: _DIRe,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_DescribeInsightRulesCommand");
    var se_DisableAlarmActionsCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_DisableAlarmActionsInput(input, context),
        [_A]: _DAA,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_DisableAlarmActionsCommand");
    var se_DisableInsightRulesCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_DisableInsightRulesInput(input, context),
        [_A]: _DIRi,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_DisableInsightRulesCommand");
    var se_EnableAlarmActionsCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_EnableAlarmActionsInput(input, context),
        [_A]: _EAA,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_EnableAlarmActionsCommand");
    var se_EnableInsightRulesCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_EnableInsightRulesInput(input, context),
        [_A]: _EIR,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_EnableInsightRulesCommand");
    var se_GetDashboardCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetDashboardInput(input, context),
        [_A]: _GD,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_GetDashboardCommand");
    var se_GetInsightRuleReportCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetInsightRuleReportInput(input, context),
        [_A]: _GIRR,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_GetInsightRuleReportCommand");
    var se_GetMetricDataCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetMetricDataInput(input, context),
        [_A]: _GMD,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_GetMetricDataCommand");
    var se_GetMetricStatisticsCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetMetricStatisticsInput(input, context),
        [_A]: _GMS,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_GetMetricStatisticsCommand");
    var se_GetMetricStreamCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetMetricStreamInput(input, context),
        [_A]: _GMSe,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_GetMetricStreamCommand");
    var se_GetMetricWidgetImageCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetMetricWidgetImageInput(input, context),
        [_A]: _GMWI,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_GetMetricWidgetImageCommand");
    var se_ListDashboardsCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_ListDashboardsInput(input, context),
        [_A]: _LD,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_ListDashboardsCommand");
    var se_ListManagedInsightRulesCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_ListManagedInsightRulesInput(input, context),
        [_A]: _LMIR,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_ListManagedInsightRulesCommand");
    var se_ListMetricsCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_ListMetricsInput(input, context),
        [_A]: _LM,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_ListMetricsCommand");
    var se_ListMetricStreamsCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_ListMetricStreamsInput(input, context),
        [_A]: _LMS,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_ListMetricStreamsCommand");
    var se_ListTagsForResourceCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_ListTagsForResourceInput(input, context),
        [_A]: _LTFR,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_ListTagsForResourceCommand");
    var se_PutAnomalyDetectorCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_PutAnomalyDetectorInput(input, context),
        [_A]: _PAD,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_PutAnomalyDetectorCommand");
    var se_PutCompositeAlarmCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_PutCompositeAlarmInput(input, context),
        [_A]: _PCA,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_PutCompositeAlarmCommand");
    var se_PutDashboardCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_PutDashboardInput(input, context),
        [_A]: _PD,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_PutDashboardCommand");
    var se_PutInsightRuleCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_PutInsightRuleInput(input, context),
        [_A]: _PIR,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_PutInsightRuleCommand");
    var se_PutManagedInsightRulesCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_PutManagedInsightRulesInput(input, context),
        [_A]: _PMIR,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_PutManagedInsightRulesCommand");
    var se_PutMetricAlarmCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_PutMetricAlarmInput(input, context),
        [_A]: _PMA,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_PutMetricAlarmCommand");
    var se_PutMetricDataCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_PutMetricDataInput(input, context),
        [_A]: _PMD,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_PutMetricDataCommand");
    var se_PutMetricStreamCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_PutMetricStreamInput(input, context),
        [_A]: _PMS,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_PutMetricStreamCommand");
    var se_SetAlarmStateCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_SetAlarmStateInput(input, context),
        [_A]: _SAS,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_SetAlarmStateCommand");
    var se_StartMetricStreamsCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_StartMetricStreamsInput(input, context),
        [_A]: _SMS,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_StartMetricStreamsCommand");
    var se_StopMetricStreamsCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_StopMetricStreamsInput(input, context),
        [_A]: _SMSt,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_StopMetricStreamsCommand");
    var se_TagResourceCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_TagResourceInput(input, context),
        [_A]: _TR,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_TagResourceCommand");
    var se_UntagResourceCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_UntagResourceInput(input, context),
        [_A]: _UR,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_UntagResourceCommand");
    var de_DeleteAlarmsCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      await (0, import_smithy_client.collectBody)(output.body, context);
      const response = {
        $metadata: deserializeMetadata(output)
      };
      return response;
    }, "de_DeleteAlarmsCommand");
    var de_DeleteAnomalyDetectorCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_DeleteAnomalyDetectorOutput(data.DeleteAnomalyDetectorResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_DeleteAnomalyDetectorCommand");
    var de_DeleteDashboardsCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_DeleteDashboardsOutput(data.DeleteDashboardsResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_DeleteDashboardsCommand");
    var de_DeleteInsightRulesCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_DeleteInsightRulesOutput(data.DeleteInsightRulesResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_DeleteInsightRulesCommand");
    var de_DeleteMetricStreamCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_DeleteMetricStreamOutput(data.DeleteMetricStreamResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_DeleteMetricStreamCommand");
    var de_DescribeAlarmHistoryCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_DescribeAlarmHistoryOutput(data.DescribeAlarmHistoryResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_DescribeAlarmHistoryCommand");
    var de_DescribeAlarmsCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_DescribeAlarmsOutput(data.DescribeAlarmsResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_DescribeAlarmsCommand");
    var de_DescribeAlarmsForMetricCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_DescribeAlarmsForMetricOutput(data.DescribeAlarmsForMetricResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_DescribeAlarmsForMetricCommand");
    var de_DescribeAnomalyDetectorsCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_DescribeAnomalyDetectorsOutput(data.DescribeAnomalyDetectorsResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_DescribeAnomalyDetectorsCommand");
    var de_DescribeInsightRulesCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_DescribeInsightRulesOutput(data.DescribeInsightRulesResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_DescribeInsightRulesCommand");
    var de_DisableAlarmActionsCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      await (0, import_smithy_client.collectBody)(output.body, context);
      const response = {
        $metadata: deserializeMetadata(output)
      };
      return response;
    }, "de_DisableAlarmActionsCommand");
    var de_DisableInsightRulesCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_DisableInsightRulesOutput(data.DisableInsightRulesResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_DisableInsightRulesCommand");
    var de_EnableAlarmActionsCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      await (0, import_smithy_client.collectBody)(output.body, context);
      const response = {
        $metadata: deserializeMetadata(output)
      };
      return response;
    }, "de_EnableAlarmActionsCommand");
    var de_EnableInsightRulesCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_EnableInsightRulesOutput(data.EnableInsightRulesResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_EnableInsightRulesCommand");
    var de_GetDashboardCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_GetDashboardOutput(data.GetDashboardResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_GetDashboardCommand");
    var de_GetInsightRuleReportCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_GetInsightRuleReportOutput(data.GetInsightRuleReportResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_GetInsightRuleReportCommand");
    var de_GetMetricDataCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_GetMetricDataOutput(data.GetMetricDataResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_GetMetricDataCommand");
    var de_GetMetricStatisticsCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_GetMetricStatisticsOutput(data.GetMetricStatisticsResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_GetMetricStatisticsCommand");
    var de_GetMetricStreamCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_GetMetricStreamOutput(data.GetMetricStreamResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_GetMetricStreamCommand");
    var de_GetMetricWidgetImageCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_GetMetricWidgetImageOutput(data.GetMetricWidgetImageResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_GetMetricWidgetImageCommand");
    var de_ListDashboardsCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_ListDashboardsOutput(data.ListDashboardsResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_ListDashboardsCommand");
    var de_ListManagedInsightRulesCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_ListManagedInsightRulesOutput(data.ListManagedInsightRulesResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_ListManagedInsightRulesCommand");
    var de_ListMetricsCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_ListMetricsOutput(data.ListMetricsResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_ListMetricsCommand");
    var de_ListMetricStreamsCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_ListMetricStreamsOutput(data.ListMetricStreamsResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_ListMetricStreamsCommand");
    var de_ListTagsForResourceCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_ListTagsForResourceOutput(data.ListTagsForResourceResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_ListTagsForResourceCommand");
    var de_PutAnomalyDetectorCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_PutAnomalyDetectorOutput(data.PutAnomalyDetectorResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_PutAnomalyDetectorCommand");
    var de_PutCompositeAlarmCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      await (0, import_smithy_client.collectBody)(output.body, context);
      const response = {
        $metadata: deserializeMetadata(output)
      };
      return response;
    }, "de_PutCompositeAlarmCommand");
    var de_PutDashboardCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_PutDashboardOutput(data.PutDashboardResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_PutDashboardCommand");
    var de_PutInsightRuleCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_PutInsightRuleOutput(data.PutInsightRuleResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_PutInsightRuleCommand");
    var de_PutManagedInsightRulesCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_PutManagedInsightRulesOutput(data.PutManagedInsightRulesResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_PutManagedInsightRulesCommand");
    var de_PutMetricAlarmCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      await (0, import_smithy_client.collectBody)(output.body, context);
      const response = {
        $metadata: deserializeMetadata(output)
      };
      return response;
    }, "de_PutMetricAlarmCommand");
    var de_PutMetricDataCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      await (0, import_smithy_client.collectBody)(output.body, context);
      const response = {
        $metadata: deserializeMetadata(output)
      };
      return response;
    }, "de_PutMetricDataCommand");
    var de_PutMetricStreamCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_PutMetricStreamOutput(data.PutMetricStreamResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_PutMetricStreamCommand");
    var de_SetAlarmStateCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      await (0, import_smithy_client.collectBody)(output.body, context);
      const response = {
        $metadata: deserializeMetadata(output)
      };
      return response;
    }, "de_SetAlarmStateCommand");
    var de_StartMetricStreamsCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_StartMetricStreamsOutput(data.StartMetricStreamsResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_StartMetricStreamsCommand");
    var de_StopMetricStreamsCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_StopMetricStreamsOutput(data.StopMetricStreamsResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_StopMetricStreamsCommand");
    var de_TagResourceCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_TagResourceOutput(data.TagResourceResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_TagResourceCommand");
    var de_UntagResourceCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await (0, import_core2.parseXmlBody)(output.body, context);
      let contents = {};
      contents = de_UntagResourceOutput(data.UntagResourceResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    }, "de_UntagResourceCommand");
    var de_CommandError = /* @__PURE__ */ __name(async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await (0, import_core2.parseXmlErrorBody)(output.body, context)
      };
      const errorCode = loadQueryErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.cloudwatch#ResourceNotFound":
          throw await de_ResourceNotFoundRes(parsedOutput, context);
        case "InternalServiceError":
        case "com.amazonaws.cloudwatch#InternalServiceFault":
          throw await de_InternalServiceFaultRes(parsedOutput, context);
        case "InvalidParameterCombination":
        case "com.amazonaws.cloudwatch#InvalidParameterCombinationException":
          throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
        case "InvalidParameterValue":
        case "com.amazonaws.cloudwatch#InvalidParameterValueException":
          throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "MissingParameter":
        case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
          throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatch#ResourceNotFoundException":
          throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.cloudwatch#InvalidNextToken":
          throw await de_InvalidNextTokenRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cloudwatch#LimitExceededException":
          throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "LimitExceeded":
        case "com.amazonaws.cloudwatch#LimitExceededFault":
          throw await de_LimitExceededFaultRes(parsedOutput, context);
        case "InvalidParameterInput":
        case "com.amazonaws.cloudwatch#DashboardInvalidInputError":
          throw await de_DashboardInvalidInputErrorRes(parsedOutput, context);
        case "ConcurrentModificationException":
        case "com.amazonaws.cloudwatch#ConcurrentModificationException":
          throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InvalidFormat":
        case "com.amazonaws.cloudwatch#InvalidFormatFault":
          throw await de_InvalidFormatFaultRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody: parsedBody.Error,
            errorCode
          });
      }
    }, "de_CommandError");
    var de_ConcurrentModificationExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_ConcurrentModificationException(body.Error, context);
      const exception = new ConcurrentModificationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_ConcurrentModificationExceptionRes");
    var de_DashboardInvalidInputErrorRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_DashboardInvalidInputError(body.Error, context);
      const exception = new DashboardInvalidInputError({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_DashboardInvalidInputErrorRes");
    var de_InternalServiceFaultRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_InternalServiceFault(body.Error, context);
      const exception = new InternalServiceFault({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_InternalServiceFaultRes");
    var de_InvalidFormatFaultRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_InvalidFormatFault(body.Error, context);
      const exception = new InvalidFormatFault({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_InvalidFormatFaultRes");
    var de_InvalidNextTokenRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_InvalidNextToken(body.Error, context);
      const exception = new InvalidNextToken({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_InvalidNextTokenRes");
    var de_InvalidParameterCombinationExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_InvalidParameterCombinationException(body.Error, context);
      const exception = new InvalidParameterCombinationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_InvalidParameterCombinationExceptionRes");
    var de_InvalidParameterValueExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_InvalidParameterValueException(body.Error, context);
      const exception = new InvalidParameterValueException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_InvalidParameterValueExceptionRes");
    var de_LimitExceededExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_LimitExceededException(body.Error, context);
      const exception = new LimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_LimitExceededExceptionRes");
    var de_LimitExceededFaultRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_LimitExceededFault(body.Error, context);
      const exception = new LimitExceededFault({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_LimitExceededFaultRes");
    var de_MissingRequiredParameterExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_MissingRequiredParameterException(body.Error, context);
      const exception = new MissingRequiredParameterException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_MissingRequiredParameterExceptionRes");
    var de_ResourceNotFoundRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_ResourceNotFound(body.Error, context);
      const exception = new ResourceNotFound({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_ResourceNotFoundRes");
    var de_ResourceNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_ResourceNotFoundException(body.Error, context);
      const exception = new ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client.decorateServiceException)(exception, body);
    }, "de_ResourceNotFoundExceptionRes");
    var se_AlarmNames = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    }, "se_AlarmNames");
    var se_AlarmTypes = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    }, "se_AlarmTypes");
    var se_AnomalyDetectorConfiguration = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_ETR] != null) {
        const memberEntries = se_AnomalyDetectorExcludedTimeRanges(input[_ETR], context);
        if (((_a = input[_ETR]) == null ? void 0 : _a.length) === 0) {
          entries.ExcludedTimeRanges = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `ExcludedTimeRanges.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_MT] != null) {
        entries[_MT] = input[_MT];
      }
      return entries;
    }, "se_AnomalyDetectorConfiguration");
    var se_AnomalyDetectorExcludedTimeRanges = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_Range(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_AnomalyDetectorExcludedTimeRanges");
    var se_AnomalyDetectorTypes = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    }, "se_AnomalyDetectorTypes");
    var se_Counts = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = (0, import_smithy_client.serializeFloat)(entry);
        counter++;
      }
      return entries;
    }, "se_Counts");
    var se_DashboardNames = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    }, "se_DashboardNames");
    var se_DeleteAlarmsInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_AN] != null) {
        const memberEntries = se_AlarmNames(input[_AN], context);
        if (((_a = input[_AN]) == null ? void 0 : _a.length) === 0) {
          entries.AlarmNames = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `AlarmNames.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_DeleteAlarmsInput");
    var se_DeleteAnomalyDetectorInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_N] != null) {
        entries[_N] = input[_N];
      }
      if (input[_MN] != null) {
        entries[_MN] = input[_MN];
      }
      if (input[_D] != null) {
        const memberEntries = se_Dimensions(input[_D], context);
        if (((_a = input[_D]) == null ? void 0 : _a.length) === 0) {
          entries.Dimensions = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Dimensions.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_S] != null) {
        entries[_S] = input[_S];
      }
      if (input[_SMAD] != null) {
        const memberEntries = se_SingleMetricAnomalyDetector(input[_SMAD], context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `SingleMetricAnomalyDetector.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_MMAD] != null) {
        const memberEntries = se_MetricMathAnomalyDetector(input[_MMAD], context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `MetricMathAnomalyDetector.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_DeleteAnomalyDetectorInput");
    var se_DeleteDashboardsInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_DN] != null) {
        const memberEntries = se_DashboardNames(input[_DN], context);
        if (((_a = input[_DN]) == null ? void 0 : _a.length) === 0) {
          entries.DashboardNames = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `DashboardNames.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_DeleteDashboardsInput");
    var se_DeleteInsightRulesInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_RN] != null) {
        const memberEntries = se_InsightRuleNames(input[_RN], context);
        if (((_a = input[_RN]) == null ? void 0 : _a.length) === 0) {
          entries.RuleNames = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `RuleNames.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_DeleteInsightRulesInput");
    var se_DeleteMetricStreamInput = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_Na] != null) {
        entries[_Na] = input[_Na];
      }
      return entries;
    }, "se_DeleteMetricStreamInput");
    var se_DescribeAlarmHistoryInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_ANl] != null) {
        entries[_ANl] = input[_ANl];
      }
      if (input[_AT] != null) {
        const memberEntries = se_AlarmTypes(input[_AT], context);
        if (((_a = input[_AT]) == null ? void 0 : _a.length) === 0) {
          entries.AlarmTypes = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `AlarmTypes.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_HIT] != null) {
        entries[_HIT] = input[_HIT];
      }
      if (input[_SD] != null) {
        entries[_SD] = input[_SD].toISOString().split(".")[0] + "Z";
      }
      if (input[_ED] != null) {
        entries[_ED] = input[_ED].toISOString().split(".")[0] + "Z";
      }
      if (input[_MR] != null) {
        entries[_MR] = input[_MR];
      }
      if (input[_NT] != null) {
        entries[_NT] = input[_NT];
      }
      if (input[_SB] != null) {
        entries[_SB] = input[_SB];
      }
      return entries;
    }, "se_DescribeAlarmHistoryInput");
    var se_DescribeAlarmsForMetricInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_MN] != null) {
        entries[_MN] = input[_MN];
      }
      if (input[_N] != null) {
        entries[_N] = input[_N];
      }
      if (input[_St] != null) {
        entries[_St] = input[_St];
      }
      if (input[_ES] != null) {
        entries[_ES] = input[_ES];
      }
      if (input[_D] != null) {
        const memberEntries = se_Dimensions(input[_D], context);
        if (((_a = input[_D]) == null ? void 0 : _a.length) === 0) {
          entries.Dimensions = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Dimensions.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_U] != null) {
        entries[_U] = input[_U];
      }
      return entries;
    }, "se_DescribeAlarmsForMetricInput");
    var se_DescribeAlarmsInput = /* @__PURE__ */ __name((input, context) => {
      var _a, _b;
      const entries = {};
      if (input[_AN] != null) {
        const memberEntries = se_AlarmNames(input[_AN], context);
        if (((_a = input[_AN]) == null ? void 0 : _a.length) === 0) {
          entries.AlarmNames = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `AlarmNames.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_ANP] != null) {
        entries[_ANP] = input[_ANP];
      }
      if (input[_AT] != null) {
        const memberEntries = se_AlarmTypes(input[_AT], context);
        if (((_b = input[_AT]) == null ? void 0 : _b.length) === 0) {
          entries.AlarmTypes = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `AlarmTypes.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_COAN] != null) {
        entries[_COAN] = input[_COAN];
      }
      if (input[_POAN] != null) {
        entries[_POAN] = input[_POAN];
      }
      if (input[_SV] != null) {
        entries[_SV] = input[_SV];
      }
      if (input[_AP] != null) {
        entries[_AP] = input[_AP];
      }
      if (input[_MR] != null) {
        entries[_MR] = input[_MR];
      }
      if (input[_NT] != null) {
        entries[_NT] = input[_NT];
      }
      return entries;
    }, "se_DescribeAlarmsInput");
    var se_DescribeAnomalyDetectorsInput = /* @__PURE__ */ __name((input, context) => {
      var _a, _b;
      const entries = {};
      if (input[_NT] != null) {
        entries[_NT] = input[_NT];
      }
      if (input[_MRa] != null) {
        entries[_MRa] = input[_MRa];
      }
      if (input[_N] != null) {
        entries[_N] = input[_N];
      }
      if (input[_MN] != null) {
        entries[_MN] = input[_MN];
      }
      if (input[_D] != null) {
        const memberEntries = se_Dimensions(input[_D], context);
        if (((_a = input[_D]) == null ? void 0 : _a.length) === 0) {
          entries.Dimensions = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Dimensions.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_ADT] != null) {
        const memberEntries = se_AnomalyDetectorTypes(input[_ADT], context);
        if (((_b = input[_ADT]) == null ? void 0 : _b.length) === 0) {
          entries.AnomalyDetectorTypes = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `AnomalyDetectorTypes.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_DescribeAnomalyDetectorsInput");
    var se_DescribeInsightRulesInput = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_NT] != null) {
        entries[_NT] = input[_NT];
      }
      if (input[_MRa] != null) {
        entries[_MRa] = input[_MRa];
      }
      return entries;
    }, "se_DescribeInsightRulesInput");
    var se_Dimension = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_Na] != null) {
        entries[_Na] = input[_Na];
      }
      if (input[_Va] != null) {
        entries[_Va] = input[_Va];
      }
      return entries;
    }, "se_Dimension");
    var se_DimensionFilter = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_Na] != null) {
        entries[_Na] = input[_Na];
      }
      if (input[_Va] != null) {
        entries[_Va] = input[_Va];
      }
      return entries;
    }, "se_DimensionFilter");
    var se_DimensionFilters = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_DimensionFilter(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_DimensionFilters");
    var se_Dimensions = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_Dimension(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_Dimensions");
    var se_DisableAlarmActionsInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_AN] != null) {
        const memberEntries = se_AlarmNames(input[_AN], context);
        if (((_a = input[_AN]) == null ? void 0 : _a.length) === 0) {
          entries.AlarmNames = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `AlarmNames.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_DisableAlarmActionsInput");
    var se_DisableInsightRulesInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_RN] != null) {
        const memberEntries = se_InsightRuleNames(input[_RN], context);
        if (((_a = input[_RN]) == null ? void 0 : _a.length) === 0) {
          entries.RuleNames = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `RuleNames.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_DisableInsightRulesInput");
    var se_EnableAlarmActionsInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_AN] != null) {
        const memberEntries = se_AlarmNames(input[_AN], context);
        if (((_a = input[_AN]) == null ? void 0 : _a.length) === 0) {
          entries.AlarmNames = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `AlarmNames.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_EnableAlarmActionsInput");
    var se_EnableInsightRulesInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_RN] != null) {
        const memberEntries = se_InsightRuleNames(input[_RN], context);
        if (((_a = input[_RN]) == null ? void 0 : _a.length) === 0) {
          entries.RuleNames = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `RuleNames.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_EnableInsightRulesInput");
    var se_ExtendedStatistics = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    }, "se_ExtendedStatistics");
    var se_GetDashboardInput = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_DNa] != null) {
        entries[_DNa] = input[_DNa];
      }
      return entries;
    }, "se_GetDashboardInput");
    var se_GetInsightRuleReportInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_RNu] != null) {
        entries[_RNu] = input[_RNu];
      }
      if (input[_ST] != null) {
        entries[_ST] = input[_ST].toISOString().split(".")[0] + "Z";
      }
      if (input[_ET] != null) {
        entries[_ET] = input[_ET].toISOString().split(".")[0] + "Z";
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_MCC] != null) {
        entries[_MCC] = input[_MCC];
      }
      if (input[_M] != null) {
        const memberEntries = se_InsightRuleMetricList(input[_M], context);
        if (((_a = input[_M]) == null ? void 0 : _a.length) === 0) {
          entries.Metrics = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Metrics.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_OB] != null) {
        entries[_OB] = input[_OB];
      }
      return entries;
    }, "se_GetInsightRuleReportInput");
    var se_GetMetricDataInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_MDQ] != null) {
        const memberEntries = se_MetricDataQueries(input[_MDQ], context);
        if (((_a = input[_MDQ]) == null ? void 0 : _a.length) === 0) {
          entries.MetricDataQueries = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `MetricDataQueries.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_ST] != null) {
        entries[_ST] = input[_ST].toISOString().split(".")[0] + "Z";
      }
      if (input[_ET] != null) {
        entries[_ET] = input[_ET].toISOString().split(".")[0] + "Z";
      }
      if (input[_NT] != null) {
        entries[_NT] = input[_NT];
      }
      if (input[_SB] != null) {
        entries[_SB] = input[_SB];
      }
      if (input[_MD] != null) {
        entries[_MD] = input[_MD];
      }
      if (input[_LO] != null) {
        const memberEntries = se_LabelOptions(input[_LO], context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `LabelOptions.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_GetMetricDataInput");
    var se_GetMetricStatisticsInput = /* @__PURE__ */ __name((input, context) => {
      var _a, _b, _c;
      const entries = {};
      if (input[_N] != null) {
        entries[_N] = input[_N];
      }
      if (input[_MN] != null) {
        entries[_MN] = input[_MN];
      }
      if (input[_D] != null) {
        const memberEntries = se_Dimensions(input[_D], context);
        if (((_a = input[_D]) == null ? void 0 : _a.length) === 0) {
          entries.Dimensions = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Dimensions.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_ST] != null) {
        entries[_ST] = input[_ST].toISOString().split(".")[0] + "Z";
      }
      if (input[_ET] != null) {
        entries[_ET] = input[_ET].toISOString().split(".")[0] + "Z";
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_Sta] != null) {
        const memberEntries = se_Statistics(input[_Sta], context);
        if (((_b = input[_Sta]) == null ? void 0 : _b.length) === 0) {
          entries.Statistics = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Statistics.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_ESx] != null) {
        const memberEntries = se_ExtendedStatistics(input[_ESx], context);
        if (((_c = input[_ESx]) == null ? void 0 : _c.length) === 0) {
          entries.ExtendedStatistics = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `ExtendedStatistics.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_U] != null) {
        entries[_U] = input[_U];
      }
      return entries;
    }, "se_GetMetricStatisticsInput");
    var se_GetMetricStreamInput = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_Na] != null) {
        entries[_Na] = input[_Na];
      }
      return entries;
    }, "se_GetMetricStreamInput");
    var se_GetMetricWidgetImageInput = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_MW] != null) {
        entries[_MW] = input[_MW];
      }
      if (input[_OF] != null) {
        entries[_OF] = input[_OF];
      }
      return entries;
    }, "se_GetMetricWidgetImageInput");
    var se_InsightRuleMetricList = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    }, "se_InsightRuleMetricList");
    var se_InsightRuleNames = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    }, "se_InsightRuleNames");
    var se_LabelOptions = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_T] != null) {
        entries[_T] = input[_T];
      }
      return entries;
    }, "se_LabelOptions");
    var se_ListDashboardsInput = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_DNP] != null) {
        entries[_DNP] = input[_DNP];
      }
      if (input[_NT] != null) {
        entries[_NT] = input[_NT];
      }
      return entries;
    }, "se_ListDashboardsInput");
    var se_ListManagedInsightRulesInput = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_RARN] != null) {
        entries[_RARN] = input[_RARN];
      }
      if (input[_NT] != null) {
        entries[_NT] = input[_NT];
      }
      if (input[_MRa] != null) {
        entries[_MRa] = input[_MRa];
      }
      return entries;
    }, "se_ListManagedInsightRulesInput");
    var se_ListMetricsInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_N] != null) {
        entries[_N] = input[_N];
      }
      if (input[_MN] != null) {
        entries[_MN] = input[_MN];
      }
      if (input[_D] != null) {
        const memberEntries = se_DimensionFilters(input[_D], context);
        if (((_a = input[_D]) == null ? void 0 : _a.length) === 0) {
          entries.Dimensions = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Dimensions.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_NT] != null) {
        entries[_NT] = input[_NT];
      }
      if (input[_RA] != null) {
        entries[_RA] = input[_RA];
      }
      if (input[_ILA] != null) {
        entries[_ILA] = input[_ILA];
      }
      if (input[_OA] != null) {
        entries[_OA] = input[_OA];
      }
      return entries;
    }, "se_ListMetricsInput");
    var se_ListMetricStreamsInput = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_NT] != null) {
        entries[_NT] = input[_NT];
      }
      if (input[_MRa] != null) {
        entries[_MRa] = input[_MRa];
      }
      return entries;
    }, "se_ListMetricStreamsInput");
    var se_ListTagsForResourceInput = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_RARN] != null) {
        entries[_RARN] = input[_RARN];
      }
      return entries;
    }, "se_ListTagsForResourceInput");
    var se_ManagedRule = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_TN] != null) {
        entries[_TN] = input[_TN];
      }
      if (input[_RARN] != null) {
        entries[_RARN] = input[_RARN];
      }
      if (input[_Ta] != null) {
        const memberEntries = se_TagList(input[_Ta], context);
        if (((_a = input[_Ta]) == null ? void 0 : _a.length) === 0) {
          entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Tags.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_ManagedRule");
    var se_ManagedRules = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_ManagedRule(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_ManagedRules");
    var se_Metric = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_N] != null) {
        entries[_N] = input[_N];
      }
      if (input[_MN] != null) {
        entries[_MN] = input[_MN];
      }
      if (input[_D] != null) {
        const memberEntries = se_Dimensions(input[_D], context);
        if (((_a = input[_D]) == null ? void 0 : _a.length) === 0) {
          entries.Dimensions = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Dimensions.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_Metric");
    var se_MetricCharacteristics = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_PS] != null) {
        entries[_PS] = input[_PS];
      }
      return entries;
    }, "se_MetricCharacteristics");
    var se_MetricData = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_MetricDatum(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_MetricData");
    var se_MetricDataQueries = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_MetricDataQuery(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_MetricDataQueries");
    var se_MetricDataQuery = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_I] != null) {
        entries[_I] = input[_I];
      }
      if (input[_MS] != null) {
        const memberEntries = se_MetricStat(input[_MS], context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `MetricStat.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_E] != null) {
        entries[_E] = input[_E];
      }
      if (input[_L] != null) {
        entries[_L] = input[_L];
      }
      if (input[_RD] != null) {
        entries[_RD] = input[_RD];
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_AI] != null) {
        entries[_AI] = input[_AI];
      }
      return entries;
    }, "se_MetricDataQuery");
    var se_MetricDatum = /* @__PURE__ */ __name((input, context) => {
      var _a, _b, _c;
      const entries = {};
      if (input[_MN] != null) {
        entries[_MN] = input[_MN];
      }
      if (input[_D] != null) {
        const memberEntries = se_Dimensions(input[_D], context);
        if (((_a = input[_D]) == null ? void 0 : _a.length) === 0) {
          entries.Dimensions = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Dimensions.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_Ti] != null) {
        entries[_Ti] = input[_Ti].toISOString().split(".")[0] + "Z";
      }
      if (input[_Va] != null) {
        entries[_Va] = (0, import_smithy_client.serializeFloat)(input[_Va]);
      }
      if (input[_SVt] != null) {
        const memberEntries = se_StatisticSet(input[_SVt], context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `StatisticValues.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_Val] != null) {
        const memberEntries = se_Values(input[_Val], context);
        if (((_b = input[_Val]) == null ? void 0 : _b.length) === 0) {
          entries.Values = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Values.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_C] != null) {
        const memberEntries = se_Counts(input[_C], context);
        if (((_c = input[_C]) == null ? void 0 : _c.length) === 0) {
          entries.Counts = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Counts.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_U] != null) {
        entries[_U] = input[_U];
      }
      if (input[_SR] != null) {
        entries[_SR] = input[_SR];
      }
      return entries;
    }, "se_MetricDatum");
    var se_MetricMathAnomalyDetector = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_MDQ] != null) {
        const memberEntries = se_MetricDataQueries(input[_MDQ], context);
        if (((_a = input[_MDQ]) == null ? void 0 : _a.length) === 0) {
          entries.MetricDataQueries = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `MetricDataQueries.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_MetricMathAnomalyDetector");
    var se_MetricStat = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_Me] != null) {
        const memberEntries = se_Metric(input[_Me], context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Metric.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_S] != null) {
        entries[_S] = input[_S];
      }
      if (input[_U] != null) {
        entries[_U] = input[_U];
      }
      return entries;
    }, "se_MetricStat");
    var se_MetricStreamFilter = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_N] != null) {
        entries[_N] = input[_N];
      }
      if (input[_MNe] != null) {
        const memberEntries = se_MetricStreamFilterMetricNames(input[_MNe], context);
        if (((_a = input[_MNe]) == null ? void 0 : _a.length) === 0) {
          entries.MetricNames = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `MetricNames.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_MetricStreamFilter");
    var se_MetricStreamFilterMetricNames = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    }, "se_MetricStreamFilterMetricNames");
    var se_MetricStreamFilters = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_MetricStreamFilter(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_MetricStreamFilters");
    var se_MetricStreamNames = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    }, "se_MetricStreamNames");
    var se_MetricStreamStatisticsAdditionalStatistics = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    }, "se_MetricStreamStatisticsAdditionalStatistics");
    var se_MetricStreamStatisticsConfiguration = /* @__PURE__ */ __name((input, context) => {
      var _a, _b;
      const entries = {};
      if (input[_IM] != null) {
        const memberEntries = se_MetricStreamStatisticsIncludeMetrics(input[_IM], context);
        if (((_a = input[_IM]) == null ? void 0 : _a.length) === 0) {
          entries.IncludeMetrics = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `IncludeMetrics.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_AS] != null) {
        const memberEntries = se_MetricStreamStatisticsAdditionalStatistics(input[_AS], context);
        if (((_b = input[_AS]) == null ? void 0 : _b.length) === 0) {
          entries.AdditionalStatistics = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `AdditionalStatistics.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_MetricStreamStatisticsConfiguration");
    var se_MetricStreamStatisticsConfigurations = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_MetricStreamStatisticsConfiguration(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_MetricStreamStatisticsConfigurations");
    var se_MetricStreamStatisticsIncludeMetrics = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_MetricStreamStatisticsMetric(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_MetricStreamStatisticsIncludeMetrics");
    var se_MetricStreamStatisticsMetric = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_N] != null) {
        entries[_N] = input[_N];
      }
      if (input[_MN] != null) {
        entries[_MN] = input[_MN];
      }
      return entries;
    }, "se_MetricStreamStatisticsMetric");
    var se_PutAnomalyDetectorInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_N] != null) {
        entries[_N] = input[_N];
      }
      if (input[_MN] != null) {
        entries[_MN] = input[_MN];
      }
      if (input[_D] != null) {
        const memberEntries = se_Dimensions(input[_D], context);
        if (((_a = input[_D]) == null ? void 0 : _a.length) === 0) {
          entries.Dimensions = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Dimensions.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_S] != null) {
        entries[_S] = input[_S];
      }
      if (input[_Co] != null) {
        const memberEntries = se_AnomalyDetectorConfiguration(input[_Co], context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Configuration.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_MC] != null) {
        const memberEntries = se_MetricCharacteristics(input[_MC], context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `MetricCharacteristics.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_SMAD] != null) {
        const memberEntries = se_SingleMetricAnomalyDetector(input[_SMAD], context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `SingleMetricAnomalyDetector.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_MMAD] != null) {
        const memberEntries = se_MetricMathAnomalyDetector(input[_MMAD], context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `MetricMathAnomalyDetector.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_PutAnomalyDetectorInput");
    var se_PutCompositeAlarmInput = /* @__PURE__ */ __name((input, context) => {
      var _a, _b, _c, _d;
      const entries = {};
      if (input[_AE] != null) {
        entries[_AE] = input[_AE];
      }
      if (input[_AA] != null) {
        const memberEntries = se_ResourceList(input[_AA], context);
        if (((_a = input[_AA]) == null ? void 0 : _a.length) === 0) {
          entries.AlarmActions = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `AlarmActions.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_AD] != null) {
        entries[_AD] = input[_AD];
      }
      if (input[_ANl] != null) {
        entries[_ANl] = input[_ANl];
      }
      if (input[_AR] != null) {
        entries[_AR] = input[_AR];
      }
      if (input[_IDA] != null) {
        const memberEntries = se_ResourceList(input[_IDA], context);
        if (((_b = input[_IDA]) == null ? void 0 : _b.length) === 0) {
          entries.InsufficientDataActions = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `InsufficientDataActions.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_OKA] != null) {
        const memberEntries = se_ResourceList(input[_OKA], context);
        if (((_c = input[_OKA]) == null ? void 0 : _c.length) === 0) {
          entries.OKActions = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `OKActions.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_Ta] != null) {
        const memberEntries = se_TagList(input[_Ta], context);
        if (((_d = input[_Ta]) == null ? void 0 : _d.length) === 0) {
          entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Tags.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_ASc] != null) {
        entries[_ASc] = input[_ASc];
      }
      if (input[_ASWP] != null) {
        entries[_ASWP] = input[_ASWP];
      }
      if (input[_ASEP] != null) {
        entries[_ASEP] = input[_ASEP];
      }
      return entries;
    }, "se_PutCompositeAlarmInput");
    var se_PutDashboardInput = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_DNa] != null) {
        entries[_DNa] = input[_DNa];
      }
      if (input[_DB] != null) {
        entries[_DB] = input[_DB];
      }
      return entries;
    }, "se_PutDashboardInput");
    var se_PutInsightRuleInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_RNu] != null) {
        entries[_RNu] = input[_RNu];
      }
      if (input[_RS] != null) {
        entries[_RS] = input[_RS];
      }
      if (input[_RDu] != null) {
        entries[_RDu] = input[_RDu];
      }
      if (input[_Ta] != null) {
        const memberEntries = se_TagList(input[_Ta], context);
        if (((_a = input[_Ta]) == null ? void 0 : _a.length) === 0) {
          entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Tags.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_PutInsightRuleInput");
    var se_PutManagedInsightRulesInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_MRan] != null) {
        const memberEntries = se_ManagedRules(input[_MRan], context);
        if (((_a = input[_MRan]) == null ? void 0 : _a.length) === 0) {
          entries.ManagedRules = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `ManagedRules.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_PutManagedInsightRulesInput");
    var se_PutMetricAlarmInput = /* @__PURE__ */ __name((input, context) => {
      var _a, _b, _c, _d, _e2, _f;
      const entries = {};
      if (input[_ANl] != null) {
        entries[_ANl] = input[_ANl];
      }
      if (input[_AD] != null) {
        entries[_AD] = input[_AD];
      }
      if (input[_AE] != null) {
        entries[_AE] = input[_AE];
      }
      if (input[_OKA] != null) {
        const memberEntries = se_ResourceList(input[_OKA], context);
        if (((_a = input[_OKA]) == null ? void 0 : _a.length) === 0) {
          entries.OKActions = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `OKActions.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_AA] != null) {
        const memberEntries = se_ResourceList(input[_AA], context);
        if (((_b = input[_AA]) == null ? void 0 : _b.length) === 0) {
          entries.AlarmActions = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `AlarmActions.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_IDA] != null) {
        const memberEntries = se_ResourceList(input[_IDA], context);
        if (((_c = input[_IDA]) == null ? void 0 : _c.length) === 0) {
          entries.InsufficientDataActions = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `InsufficientDataActions.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_MN] != null) {
        entries[_MN] = input[_MN];
      }
      if (input[_N] != null) {
        entries[_N] = input[_N];
      }
      if (input[_St] != null) {
        entries[_St] = input[_St];
      }
      if (input[_ES] != null) {
        entries[_ES] = input[_ES];
      }
      if (input[_D] != null) {
        const memberEntries = se_Dimensions(input[_D], context);
        if (((_d = input[_D]) == null ? void 0 : _d.length) === 0) {
          entries.Dimensions = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Dimensions.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_U] != null) {
        entries[_U] = input[_U];
      }
      if (input[_EP] != null) {
        entries[_EP] = input[_EP];
      }
      if (input[_DTA] != null) {
        entries[_DTA] = input[_DTA];
      }
      if (input[_Th] != null) {
        entries[_Th] = (0, import_smithy_client.serializeFloat)(input[_Th]);
      }
      if (input[_CO] != null) {
        entries[_CO] = input[_CO];
      }
      if (input[_TMD] != null) {
        entries[_TMD] = input[_TMD];
      }
      if (input[_ELSCP] != null) {
        entries[_ELSCP] = input[_ELSCP];
      }
      if (input[_M] != null) {
        const memberEntries = se_MetricDataQueries(input[_M], context);
        if (((_e2 = input[_M]) == null ? void 0 : _e2.length) === 0) {
          entries.Metrics = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Metrics.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_Ta] != null) {
        const memberEntries = se_TagList(input[_Ta], context);
        if (((_f = input[_Ta]) == null ? void 0 : _f.length) === 0) {
          entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Tags.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_TMI] != null) {
        entries[_TMI] = input[_TMI];
      }
      return entries;
    }, "se_PutMetricAlarmInput");
    var se_PutMetricDataInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_N] != null) {
        entries[_N] = input[_N];
      }
      if (input[_MDe] != null) {
        const memberEntries = se_MetricData(input[_MDe], context);
        if (((_a = input[_MDe]) == null ? void 0 : _a.length) === 0) {
          entries.MetricData = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `MetricData.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_PutMetricDataInput");
    var se_PutMetricStreamInput = /* @__PURE__ */ __name((input, context) => {
      var _a, _b, _c, _d;
      const entries = {};
      if (input[_Na] != null) {
        entries[_Na] = input[_Na];
      }
      if (input[_IF] != null) {
        const memberEntries = se_MetricStreamFilters(input[_IF], context);
        if (((_a = input[_IF]) == null ? void 0 : _a.length) === 0) {
          entries.IncludeFilters = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `IncludeFilters.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_EF] != null) {
        const memberEntries = se_MetricStreamFilters(input[_EF], context);
        if (((_b = input[_EF]) == null ? void 0 : _b.length) === 0) {
          entries.ExcludeFilters = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `ExcludeFilters.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_FA] != null) {
        entries[_FA] = input[_FA];
      }
      if (input[_RAo] != null) {
        entries[_RAo] = input[_RAo];
      }
      if (input[_OF] != null) {
        entries[_OF] = input[_OF];
      }
      if (input[_Ta] != null) {
        const memberEntries = se_TagList(input[_Ta], context);
        if (((_c = input[_Ta]) == null ? void 0 : _c.length) === 0) {
          entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Tags.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_SC] != null) {
        const memberEntries = se_MetricStreamStatisticsConfigurations(input[_SC], context);
        if (((_d = input[_SC]) == null ? void 0 : _d.length) === 0) {
          entries.StatisticsConfigurations = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `StatisticsConfigurations.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_ILAM] != null) {
        entries[_ILAM] = input[_ILAM];
      }
      return entries;
    }, "se_PutMetricStreamInput");
    var se_Range = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_ST] != null) {
        entries[_ST] = input[_ST].toISOString().split(".")[0] + "Z";
      }
      if (input[_ET] != null) {
        entries[_ET] = input[_ET].toISOString().split(".")[0] + "Z";
      }
      return entries;
    }, "se_Range");
    var se_ResourceList = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    }, "se_ResourceList");
    var se_SetAlarmStateInput = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_ANl] != null) {
        entries[_ANl] = input[_ANl];
      }
      if (input[_SV] != null) {
        entries[_SV] = input[_SV];
      }
      if (input[_SRt] != null) {
        entries[_SRt] = input[_SRt];
      }
      if (input[_SRD] != null) {
        entries[_SRD] = input[_SRD];
      }
      return entries;
    }, "se_SetAlarmStateInput");
    var se_SingleMetricAnomalyDetector = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_AI] != null) {
        entries[_AI] = input[_AI];
      }
      if (input[_N] != null) {
        entries[_N] = input[_N];
      }
      if (input[_MN] != null) {
        entries[_MN] = input[_MN];
      }
      if (input[_D] != null) {
        const memberEntries = se_Dimensions(input[_D], context);
        if (((_a = input[_D]) == null ? void 0 : _a.length) === 0) {
          entries.Dimensions = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Dimensions.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_S] != null) {
        entries[_S] = input[_S];
      }
      return entries;
    }, "se_SingleMetricAnomalyDetector");
    var se_StartMetricStreamsInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_Nam] != null) {
        const memberEntries = se_MetricStreamNames(input[_Nam], context);
        if (((_a = input[_Nam]) == null ? void 0 : _a.length) === 0) {
          entries.Names = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Names.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_StartMetricStreamsInput");
    var se_Statistics = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    }, "se_Statistics");
    var se_StatisticSet = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_SCa] != null) {
        entries[_SCa] = (0, import_smithy_client.serializeFloat)(input[_SCa]);
      }
      if (input[_Su] != null) {
        entries[_Su] = (0, import_smithy_client.serializeFloat)(input[_Su]);
      }
      if (input[_Mi] != null) {
        entries[_Mi] = (0, import_smithy_client.serializeFloat)(input[_Mi]);
      }
      if (input[_Ma] != null) {
        entries[_Ma] = (0, import_smithy_client.serializeFloat)(input[_Ma]);
      }
      return entries;
    }, "se_StatisticSet");
    var se_StopMetricStreamsInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_Nam] != null) {
        const memberEntries = se_MetricStreamNames(input[_Nam], context);
        if (((_a = input[_Nam]) == null ? void 0 : _a.length) === 0) {
          entries.Names = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Names.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_StopMetricStreamsInput");
    var se_Tag = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_K] != null) {
        entries[_K] = input[_K];
      }
      if (input[_Va] != null) {
        entries[_Va] = input[_Va];
      }
      return entries;
    }, "se_Tag");
    var se_TagKeyList = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    }, "se_TagKeyList");
    var se_TagList = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_Tag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_TagList");
    var se_TagResourceInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_RARN] != null) {
        entries[_RARN] = input[_RARN];
      }
      if (input[_Ta] != null) {
        const memberEntries = se_TagList(input[_Ta], context);
        if (((_a = input[_Ta]) == null ? void 0 : _a.length) === 0) {
          entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Tags.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_TagResourceInput");
    var se_UntagResourceInput = /* @__PURE__ */ __name((input, context) => {
      var _a;
      const entries = {};
      if (input[_RARN] != null) {
        entries[_RARN] = input[_RARN];
      }
      if (input[_TK] != null) {
        const memberEntries = se_TagKeyList(input[_TK], context);
        if (((_a = input[_TK]) == null ? void 0 : _a.length) === 0) {
          entries.TagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `TagKeys.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_UntagResourceInput");
    var se_Values = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = (0, import_smithy_client.serializeFloat)(entry);
        counter++;
      }
      return entries;
    }, "se_Values");
    var de_AlarmHistoryItem = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_ANl] != null) {
        contents[_ANl] = (0, import_smithy_client.expectString)(output[_ANl]);
      }
      if (output[_ATl] != null) {
        contents[_ATl] = (0, import_smithy_client.expectString)(output[_ATl]);
      }
      if (output[_Ti] != null) {
        contents[_Ti] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_Ti]));
      }
      if (output[_HIT] != null) {
        contents[_HIT] = (0, import_smithy_client.expectString)(output[_HIT]);
      }
      if (output[_HS] != null) {
        contents[_HS] = (0, import_smithy_client.expectString)(output[_HS]);
      }
      if (output[_HD] != null) {
        contents[_HD] = (0, import_smithy_client.expectString)(output[_HD]);
      }
      return contents;
    }, "de_AlarmHistoryItem");
    var de_AlarmHistoryItems = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_AlarmHistoryItem(entry, context);
      });
    }, "de_AlarmHistoryItems");
    var de_AnomalyDetector = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_N] != null) {
        contents[_N] = (0, import_smithy_client.expectString)(output[_N]);
      }
      if (output[_MN] != null) {
        contents[_MN] = (0, import_smithy_client.expectString)(output[_MN]);
      }
      if (output.Dimensions === "") {
        contents[_D] = [];
      } else if (output[_D] != null && output[_D][_m] != null) {
        contents[_D] = de_Dimensions((0, import_smithy_client.getArrayIfSingleItem)(output[_D][_m]), context);
      }
      if (output[_S] != null) {
        contents[_S] = (0, import_smithy_client.expectString)(output[_S]);
      }
      if (output[_Co] != null) {
        contents[_Co] = de_AnomalyDetectorConfiguration(output[_Co], context);
      }
      if (output[_SV] != null) {
        contents[_SV] = (0, import_smithy_client.expectString)(output[_SV]);
      }
      if (output[_MC] != null) {
        contents[_MC] = de_MetricCharacteristics(output[_MC], context);
      }
      if (output[_SMAD] != null) {
        contents[_SMAD] = de_SingleMetricAnomalyDetector(output[_SMAD], context);
      }
      if (output[_MMAD] != null) {
        contents[_MMAD] = de_MetricMathAnomalyDetector(output[_MMAD], context);
      }
      return contents;
    }, "de_AnomalyDetector");
    var de_AnomalyDetectorConfiguration = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.ExcludedTimeRanges === "") {
        contents[_ETR] = [];
      } else if (output[_ETR] != null && output[_ETR][_m] != null) {
        contents[_ETR] = de_AnomalyDetectorExcludedTimeRanges((0, import_smithy_client.getArrayIfSingleItem)(output[_ETR][_m]), context);
      }
      if (output[_MT] != null) {
        contents[_MT] = (0, import_smithy_client.expectString)(output[_MT]);
      }
      return contents;
    }, "de_AnomalyDetectorConfiguration");
    var de_AnomalyDetectorExcludedTimeRanges = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_Range(entry, context);
      });
    }, "de_AnomalyDetectorExcludedTimeRanges");
    var de_AnomalyDetectors = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_AnomalyDetector(entry, context);
      });
    }, "de_AnomalyDetectors");
    var de_BatchFailures = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_PartialFailure(entry, context);
      });
    }, "de_BatchFailures");
    var de_CompositeAlarm = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_AE] != null) {
        contents[_AE] = (0, import_smithy_client.parseBoolean)(output[_AE]);
      }
      if (output.AlarmActions === "") {
        contents[_AA] = [];
      } else if (output[_AA] != null && output[_AA][_m] != null) {
        contents[_AA] = de_ResourceList((0, import_smithy_client.getArrayIfSingleItem)(output[_AA][_m]), context);
      }
      if (output[_AAl] != null) {
        contents[_AAl] = (0, import_smithy_client.expectString)(output[_AAl]);
      }
      if (output[_ACUT] != null) {
        contents[_ACUT] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_ACUT]));
      }
      if (output[_AD] != null) {
        contents[_AD] = (0, import_smithy_client.expectString)(output[_AD]);
      }
      if (output[_ANl] != null) {
        contents[_ANl] = (0, import_smithy_client.expectString)(output[_ANl]);
      }
      if (output[_AR] != null) {
        contents[_AR] = (0, import_smithy_client.expectString)(output[_AR]);
      }
      if (output.InsufficientDataActions === "") {
        contents[_IDA] = [];
      } else if (output[_IDA] != null && output[_IDA][_m] != null) {
        contents[_IDA] = de_ResourceList((0, import_smithy_client.getArrayIfSingleItem)(output[_IDA][_m]), context);
      }
      if (output.OKActions === "") {
        contents[_OKA] = [];
      } else if (output[_OKA] != null && output[_OKA][_m] != null) {
        contents[_OKA] = de_ResourceList((0, import_smithy_client.getArrayIfSingleItem)(output[_OKA][_m]), context);
      }
      if (output[_SRt] != null) {
        contents[_SRt] = (0, import_smithy_client.expectString)(output[_SRt]);
      }
      if (output[_SRD] != null) {
        contents[_SRD] = (0, import_smithy_client.expectString)(output[_SRD]);
      }
      if (output[_SUT] != null) {
        contents[_SUT] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_SUT]));
      }
      if (output[_SV] != null) {
        contents[_SV] = (0, import_smithy_client.expectString)(output[_SV]);
      }
      if (output[_STT] != null) {
        contents[_STT] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_STT]));
      }
      if (output[_ASB] != null) {
        contents[_ASB] = (0, import_smithy_client.expectString)(output[_ASB]);
      }
      if (output[_ASR] != null) {
        contents[_ASR] = (0, import_smithy_client.expectString)(output[_ASR]);
      }
      if (output[_ASc] != null) {
        contents[_ASc] = (0, import_smithy_client.expectString)(output[_ASc]);
      }
      if (output[_ASWP] != null) {
        contents[_ASWP] = (0, import_smithy_client.strictParseInt32)(output[_ASWP]);
      }
      if (output[_ASEP] != null) {
        contents[_ASEP] = (0, import_smithy_client.strictParseInt32)(output[_ASEP]);
      }
      return contents;
    }, "de_CompositeAlarm");
    var de_CompositeAlarms = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_CompositeAlarm(entry, context);
      });
    }, "de_CompositeAlarms");
    var de_ConcurrentModificationException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_Mes] != null) {
        contents[_Mes] = (0, import_smithy_client.expectString)(output[_Mes]);
      }
      return contents;
    }, "de_ConcurrentModificationException");
    var de_DashboardEntries = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_DashboardEntry(entry, context);
      });
    }, "de_DashboardEntries");
    var de_DashboardEntry = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_DNa] != null) {
        contents[_DNa] = (0, import_smithy_client.expectString)(output[_DNa]);
      }
      if (output[_DAa] != null) {
        contents[_DAa] = (0, import_smithy_client.expectString)(output[_DAa]);
      }
      if (output[_LMa] != null) {
        contents[_LMa] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_LMa]));
      }
      if (output[_Si] != null) {
        contents[_Si] = (0, import_smithy_client.strictParseLong)(output[_Si]);
      }
      return contents;
    }, "de_DashboardEntry");
    var de_DashboardInvalidInputError = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_me] != null) {
        contents[_me] = (0, import_smithy_client.expectString)(output[_me]);
      }
      if (output.dashboardValidationMessages === "") {
        contents[_dVM] = [];
      } else if (output[_dVM] != null && output[_dVM][_m] != null) {
        contents[_dVM] = de_DashboardValidationMessages((0, import_smithy_client.getArrayIfSingleItem)(output[_dVM][_m]), context);
      }
      return contents;
    }, "de_DashboardInvalidInputError");
    var de_DashboardValidationMessage = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_DP] != null) {
        contents[_DP] = (0, import_smithy_client.expectString)(output[_DP]);
      }
      if (output[_Mes] != null) {
        contents[_Mes] = (0, import_smithy_client.expectString)(output[_Mes]);
      }
      return contents;
    }, "de_DashboardValidationMessage");
    var de_DashboardValidationMessages = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_DashboardValidationMessage(entry, context);
      });
    }, "de_DashboardValidationMessages");
    var de_Datapoint = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_Ti] != null) {
        contents[_Ti] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_Ti]));
      }
      if (output[_SCa] != null) {
        contents[_SCa] = (0, import_smithy_client.strictParseFloat)(output[_SCa]);
      }
      if (output[_Av] != null) {
        contents[_Av] = (0, import_smithy_client.strictParseFloat)(output[_Av]);
      }
      if (output[_Su] != null) {
        contents[_Su] = (0, import_smithy_client.strictParseFloat)(output[_Su]);
      }
      if (output[_Mi] != null) {
        contents[_Mi] = (0, import_smithy_client.strictParseFloat)(output[_Mi]);
      }
      if (output[_Ma] != null) {
        contents[_Ma] = (0, import_smithy_client.strictParseFloat)(output[_Ma]);
      }
      if (output[_U] != null) {
        contents[_U] = (0, import_smithy_client.expectString)(output[_U]);
      }
      if (output.ExtendedStatistics === "") {
        contents[_ESx] = {};
      } else if (output[_ESx] != null && output[_ESx][_e] != null) {
        contents[_ESx] = de_DatapointValueMap((0, import_smithy_client.getArrayIfSingleItem)(output[_ESx][_e]), context);
      }
      return contents;
    }, "de_Datapoint");
    var de_Datapoints = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_Datapoint(entry, context);
      });
    }, "de_Datapoints");
    var de_DatapointValueMap = /* @__PURE__ */ __name((output, context) => {
      return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
          return acc;
        }
        acc[pair["key"]] = (0, import_smithy_client.strictParseFloat)(pair["value"]);
        return acc;
      }, {});
    }, "de_DatapointValueMap");
    var de_DatapointValues = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return (0, import_smithy_client.strictParseFloat)(entry);
      });
    }, "de_DatapointValues");
    var de_DeleteAnomalyDetectorOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      return contents;
    }, "de_DeleteAnomalyDetectorOutput");
    var de_DeleteDashboardsOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      return contents;
    }, "de_DeleteDashboardsOutput");
    var de_DeleteInsightRulesOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.Failures === "") {
        contents[_F] = [];
      } else if (output[_F] != null && output[_F][_m] != null) {
        contents[_F] = de_BatchFailures((0, import_smithy_client.getArrayIfSingleItem)(output[_F][_m]), context);
      }
      return contents;
    }, "de_DeleteInsightRulesOutput");
    var de_DeleteMetricStreamOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      return contents;
    }, "de_DeleteMetricStreamOutput");
    var de_DescribeAlarmHistoryOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.AlarmHistoryItems === "") {
        contents[_AHI] = [];
      } else if (output[_AHI] != null && output[_AHI][_m] != null) {
        contents[_AHI] = de_AlarmHistoryItems((0, import_smithy_client.getArrayIfSingleItem)(output[_AHI][_m]), context);
      }
      if (output[_NT] != null) {
        contents[_NT] = (0, import_smithy_client.expectString)(output[_NT]);
      }
      return contents;
    }, "de_DescribeAlarmHistoryOutput");
    var de_DescribeAlarmsForMetricOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.MetricAlarms === "") {
        contents[_MA] = [];
      } else if (output[_MA] != null && output[_MA][_m] != null) {
        contents[_MA] = de_MetricAlarms((0, import_smithy_client.getArrayIfSingleItem)(output[_MA][_m]), context);
      }
      return contents;
    }, "de_DescribeAlarmsForMetricOutput");
    var de_DescribeAlarmsOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.CompositeAlarms === "") {
        contents[_CA] = [];
      } else if (output[_CA] != null && output[_CA][_m] != null) {
        contents[_CA] = de_CompositeAlarms((0, import_smithy_client.getArrayIfSingleItem)(output[_CA][_m]), context);
      }
      if (output.MetricAlarms === "") {
        contents[_MA] = [];
      } else if (output[_MA] != null && output[_MA][_m] != null) {
        contents[_MA] = de_MetricAlarms((0, import_smithy_client.getArrayIfSingleItem)(output[_MA][_m]), context);
      }
      if (output[_NT] != null) {
        contents[_NT] = (0, import_smithy_client.expectString)(output[_NT]);
      }
      return contents;
    }, "de_DescribeAlarmsOutput");
    var de_DescribeAnomalyDetectorsOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.AnomalyDetectors === "") {
        contents[_ADn] = [];
      } else if (output[_ADn] != null && output[_ADn][_m] != null) {
        contents[_ADn] = de_AnomalyDetectors((0, import_smithy_client.getArrayIfSingleItem)(output[_ADn][_m]), context);
      }
      if (output[_NT] != null) {
        contents[_NT] = (0, import_smithy_client.expectString)(output[_NT]);
      }
      return contents;
    }, "de_DescribeAnomalyDetectorsOutput");
    var de_DescribeInsightRulesOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_NT] != null) {
        contents[_NT] = (0, import_smithy_client.expectString)(output[_NT]);
      }
      if (output.InsightRules === "") {
        contents[_IR] = [];
      } else if (output[_IR] != null && output[_IR][_m] != null) {
        contents[_IR] = de_InsightRules((0, import_smithy_client.getArrayIfSingleItem)(output[_IR][_m]), context);
      }
      return contents;
    }, "de_DescribeInsightRulesOutput");
    var de_Dimension = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_Na] != null) {
        contents[_Na] = (0, import_smithy_client.expectString)(output[_Na]);
      }
      if (output[_Va] != null) {
        contents[_Va] = (0, import_smithy_client.expectString)(output[_Va]);
      }
      return contents;
    }, "de_Dimension");
    var de_Dimensions = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_Dimension(entry, context);
      });
    }, "de_Dimensions");
    var de_DisableInsightRulesOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.Failures === "") {
        contents[_F] = [];
      } else if (output[_F] != null && output[_F][_m] != null) {
        contents[_F] = de_BatchFailures((0, import_smithy_client.getArrayIfSingleItem)(output[_F][_m]), context);
      }
      return contents;
    }, "de_DisableInsightRulesOutput");
    var de_EnableInsightRulesOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.Failures === "") {
        contents[_F] = [];
      } else if (output[_F] != null && output[_F][_m] != null) {
        contents[_F] = de_BatchFailures((0, import_smithy_client.getArrayIfSingleItem)(output[_F][_m]), context);
      }
      return contents;
    }, "de_EnableInsightRulesOutput");
    var de_GetDashboardOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_DAa] != null) {
        contents[_DAa] = (0, import_smithy_client.expectString)(output[_DAa]);
      }
      if (output[_DB] != null) {
        contents[_DB] = (0, import_smithy_client.expectString)(output[_DB]);
      }
      if (output[_DNa] != null) {
        contents[_DNa] = (0, import_smithy_client.expectString)(output[_DNa]);
      }
      return contents;
    }, "de_GetDashboardOutput");
    var de_GetInsightRuleReportOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.KeyLabels === "") {
        contents[_KL] = [];
      } else if (output[_KL] != null && output[_KL][_m] != null) {
        contents[_KL] = de_InsightRuleContributorKeyLabels((0, import_smithy_client.getArrayIfSingleItem)(output[_KL][_m]), context);
      }
      if (output[_ASg] != null) {
        contents[_ASg] = (0, import_smithy_client.expectString)(output[_ASg]);
      }
      if (output[_AV] != null) {
        contents[_AV] = (0, import_smithy_client.strictParseFloat)(output[_AV]);
      }
      if (output[_AUC] != null) {
        contents[_AUC] = (0, import_smithy_client.strictParseLong)(output[_AUC]);
      }
      if (output.Contributors === "") {
        contents[_Con] = [];
      } else if (output[_Con] != null && output[_Con][_m] != null) {
        contents[_Con] = de_InsightRuleContributors((0, import_smithy_client.getArrayIfSingleItem)(output[_Con][_m]), context);
      }
      if (output.MetricDatapoints === "") {
        contents[_MDet] = [];
      } else if (output[_MDet] != null && output[_MDet][_m] != null) {
        contents[_MDet] = de_InsightRuleMetricDatapoints((0, import_smithy_client.getArrayIfSingleItem)(output[_MDet][_m]), context);
      }
      return contents;
    }, "de_GetInsightRuleReportOutput");
    var de_GetMetricDataOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.MetricDataResults === "") {
        contents[_MDR] = [];
      } else if (output[_MDR] != null && output[_MDR][_m] != null) {
        contents[_MDR] = de_MetricDataResults((0, import_smithy_client.getArrayIfSingleItem)(output[_MDR][_m]), context);
      }
      if (output[_NT] != null) {
        contents[_NT] = (0, import_smithy_client.expectString)(output[_NT]);
      }
      if (output.Messages === "") {
        contents[_Mess] = [];
      } else if (output[_Mess] != null && output[_Mess][_m] != null) {
        contents[_Mess] = de_MetricDataResultMessages((0, import_smithy_client.getArrayIfSingleItem)(output[_Mess][_m]), context);
      }
      return contents;
    }, "de_GetMetricDataOutput");
    var de_GetMetricStatisticsOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_L] != null) {
        contents[_L] = (0, import_smithy_client.expectString)(output[_L]);
      }
      if (output.Datapoints === "") {
        contents[_Da] = [];
      } else if (output[_Da] != null && output[_Da][_m] != null) {
        contents[_Da] = de_Datapoints((0, import_smithy_client.getArrayIfSingleItem)(output[_Da][_m]), context);
      }
      return contents;
    }, "de_GetMetricStatisticsOutput");
    var de_GetMetricStreamOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_Ar] != null) {
        contents[_Ar] = (0, import_smithy_client.expectString)(output[_Ar]);
      }
      if (output[_Na] != null) {
        contents[_Na] = (0, import_smithy_client.expectString)(output[_Na]);
      }
      if (output.IncludeFilters === "") {
        contents[_IF] = [];
      } else if (output[_IF] != null && output[_IF][_m] != null) {
        contents[_IF] = de_MetricStreamFilters((0, import_smithy_client.getArrayIfSingleItem)(output[_IF][_m]), context);
      }
      if (output.ExcludeFilters === "") {
        contents[_EF] = [];
      } else if (output[_EF] != null && output[_EF][_m] != null) {
        contents[_EF] = de_MetricStreamFilters((0, import_smithy_client.getArrayIfSingleItem)(output[_EF][_m]), context);
      }
      if (output[_FA] != null) {
        contents[_FA] = (0, import_smithy_client.expectString)(output[_FA]);
      }
      if (output[_RAo] != null) {
        contents[_RAo] = (0, import_smithy_client.expectString)(output[_RAo]);
      }
      if (output[_Stat] != null) {
        contents[_Stat] = (0, import_smithy_client.expectString)(output[_Stat]);
      }
      if (output[_CD] != null) {
        contents[_CD] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_CD]));
      }
      if (output[_LUD] != null) {
        contents[_LUD] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_LUD]));
      }
      if (output[_OF] != null) {
        contents[_OF] = (0, import_smithy_client.expectString)(output[_OF]);
      }
      if (output.StatisticsConfigurations === "") {
        contents[_SC] = [];
      } else if (output[_SC] != null && output[_SC][_m] != null) {
        contents[_SC] = de_MetricStreamStatisticsConfigurations((0, import_smithy_client.getArrayIfSingleItem)(output[_SC][_m]), context);
      }
      if (output[_ILAM] != null) {
        contents[_ILAM] = (0, import_smithy_client.parseBoolean)(output[_ILAM]);
      }
      return contents;
    }, "de_GetMetricStreamOutput");
    var de_GetMetricWidgetImageOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_MWI] != null) {
        contents[_MWI] = context.base64Decoder(output[_MWI]);
      }
      return contents;
    }, "de_GetMetricWidgetImageOutput");
    var de_InsightRule = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_Na] != null) {
        contents[_Na] = (0, import_smithy_client.expectString)(output[_Na]);
      }
      if (output[_Stat] != null) {
        contents[_Stat] = (0, import_smithy_client.expectString)(output[_Stat]);
      }
      if (output[_Sc] != null) {
        contents[_Sc] = (0, import_smithy_client.expectString)(output[_Sc]);
      }
      if (output[_De] != null) {
        contents[_De] = (0, import_smithy_client.expectString)(output[_De]);
      }
      if (output[_MRana] != null) {
        contents[_MRana] = (0, import_smithy_client.parseBoolean)(output[_MRana]);
      }
      return contents;
    }, "de_InsightRule");
    var de_InsightRuleContributor = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.Keys === "") {
        contents[_Ke] = [];
      } else if (output[_Ke] != null && output[_Ke][_m] != null) {
        contents[_Ke] = de_InsightRuleContributorKeys((0, import_smithy_client.getArrayIfSingleItem)(output[_Ke][_m]), context);
      }
      if (output[_AAV] != null) {
        contents[_AAV] = (0, import_smithy_client.strictParseFloat)(output[_AAV]);
      }
      if (output.Datapoints === "") {
        contents[_Da] = [];
      } else if (output[_Da] != null && output[_Da][_m] != null) {
        contents[_Da] = de_InsightRuleContributorDatapoints((0, import_smithy_client.getArrayIfSingleItem)(output[_Da][_m]), context);
      }
      return contents;
    }, "de_InsightRuleContributor");
    var de_InsightRuleContributorDatapoint = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_Ti] != null) {
        contents[_Ti] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_Ti]));
      }
      if (output[_AVp] != null) {
        contents[_AVp] = (0, import_smithy_client.strictParseFloat)(output[_AVp]);
      }
      return contents;
    }, "de_InsightRuleContributorDatapoint");
    var de_InsightRuleContributorDatapoints = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_InsightRuleContributorDatapoint(entry, context);
      });
    }, "de_InsightRuleContributorDatapoints");
    var de_InsightRuleContributorKeyLabels = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return (0, import_smithy_client.expectString)(entry);
      });
    }, "de_InsightRuleContributorKeyLabels");
    var de_InsightRuleContributorKeys = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return (0, import_smithy_client.expectString)(entry);
      });
    }, "de_InsightRuleContributorKeys");
    var de_InsightRuleContributors = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_InsightRuleContributor(entry, context);
      });
    }, "de_InsightRuleContributors");
    var de_InsightRuleMetricDatapoint = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_Ti] != null) {
        contents[_Ti] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_Ti]));
      }
      if (output[_UC] != null) {
        contents[_UC] = (0, import_smithy_client.strictParseFloat)(output[_UC]);
      }
      if (output[_MCV] != null) {
        contents[_MCV] = (0, import_smithy_client.strictParseFloat)(output[_MCV]);
      }
      if (output[_SCa] != null) {
        contents[_SCa] = (0, import_smithy_client.strictParseFloat)(output[_SCa]);
      }
      if (output[_Av] != null) {
        contents[_Av] = (0, import_smithy_client.strictParseFloat)(output[_Av]);
      }
      if (output[_Su] != null) {
        contents[_Su] = (0, import_smithy_client.strictParseFloat)(output[_Su]);
      }
      if (output[_Mi] != null) {
        contents[_Mi] = (0, import_smithy_client.strictParseFloat)(output[_Mi]);
      }
      if (output[_Ma] != null) {
        contents[_Ma] = (0, import_smithy_client.strictParseFloat)(output[_Ma]);
      }
      return contents;
    }, "de_InsightRuleMetricDatapoint");
    var de_InsightRuleMetricDatapoints = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_InsightRuleMetricDatapoint(entry, context);
      });
    }, "de_InsightRuleMetricDatapoints");
    var de_InsightRules = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_InsightRule(entry, context);
      });
    }, "de_InsightRules");
    var de_InternalServiceFault = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_Mes] != null) {
        contents[_Mes] = (0, import_smithy_client.expectString)(output[_Mes]);
      }
      return contents;
    }, "de_InternalServiceFault");
    var de_InvalidFormatFault = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_me] != null) {
        contents[_me] = (0, import_smithy_client.expectString)(output[_me]);
      }
      return contents;
    }, "de_InvalidFormatFault");
    var de_InvalidNextToken = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_me] != null) {
        contents[_me] = (0, import_smithy_client.expectString)(output[_me]);
      }
      return contents;
    }, "de_InvalidNextToken");
    var de_InvalidParameterCombinationException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_me] != null) {
        contents[_me] = (0, import_smithy_client.expectString)(output[_me]);
      }
      return contents;
    }, "de_InvalidParameterCombinationException");
    var de_InvalidParameterValueException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_me] != null) {
        contents[_me] = (0, import_smithy_client.expectString)(output[_me]);
      }
      return contents;
    }, "de_InvalidParameterValueException");
    var de_LimitExceededException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_Mes] != null) {
        contents[_Mes] = (0, import_smithy_client.expectString)(output[_Mes]);
      }
      return contents;
    }, "de_LimitExceededException");
    var de_LimitExceededFault = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_me] != null) {
        contents[_me] = (0, import_smithy_client.expectString)(output[_me]);
      }
      return contents;
    }, "de_LimitExceededFault");
    var de_ListDashboardsOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.DashboardEntries === "") {
        contents[_DE] = [];
      } else if (output[_DE] != null && output[_DE][_m] != null) {
        contents[_DE] = de_DashboardEntries((0, import_smithy_client.getArrayIfSingleItem)(output[_DE][_m]), context);
      }
      if (output[_NT] != null) {
        contents[_NT] = (0, import_smithy_client.expectString)(output[_NT]);
      }
      return contents;
    }, "de_ListDashboardsOutput");
    var de_ListManagedInsightRulesOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.ManagedRules === "") {
        contents[_MRan] = [];
      } else if (output[_MRan] != null && output[_MRan][_m] != null) {
        contents[_MRan] = de_ManagedRuleDescriptions((0, import_smithy_client.getArrayIfSingleItem)(output[_MRan][_m]), context);
      }
      if (output[_NT] != null) {
        contents[_NT] = (0, import_smithy_client.expectString)(output[_NT]);
      }
      return contents;
    }, "de_ListManagedInsightRulesOutput");
    var de_ListMetricsOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.Metrics === "") {
        contents[_M] = [];
      } else if (output[_M] != null && output[_M][_m] != null) {
        contents[_M] = de_Metrics((0, import_smithy_client.getArrayIfSingleItem)(output[_M][_m]), context);
      }
      if (output[_NT] != null) {
        contents[_NT] = (0, import_smithy_client.expectString)(output[_NT]);
      }
      if (output.OwningAccounts === "") {
        contents[_OAw] = [];
      } else if (output[_OAw] != null && output[_OAw][_m] != null) {
        contents[_OAw] = de_OwningAccounts((0, import_smithy_client.getArrayIfSingleItem)(output[_OAw][_m]), context);
      }
      return contents;
    }, "de_ListMetricsOutput");
    var de_ListMetricStreamsOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_NT] != null) {
        contents[_NT] = (0, import_smithy_client.expectString)(output[_NT]);
      }
      if (output.Entries === "") {
        contents[_En] = [];
      } else if (output[_En] != null && output[_En][_m] != null) {
        contents[_En] = de_MetricStreamEntries((0, import_smithy_client.getArrayIfSingleItem)(output[_En][_m]), context);
      }
      return contents;
    }, "de_ListMetricStreamsOutput");
    var de_ListTagsForResourceOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.Tags === "") {
        contents[_Ta] = [];
      } else if (output[_Ta] != null && output[_Ta][_m] != null) {
        contents[_Ta] = de_TagList((0, import_smithy_client.getArrayIfSingleItem)(output[_Ta][_m]), context);
      }
      return contents;
    }, "de_ListTagsForResourceOutput");
    var de_ManagedRuleDescription = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_TN] != null) {
        contents[_TN] = (0, import_smithy_client.expectString)(output[_TN]);
      }
      if (output[_RARN] != null) {
        contents[_RARN] = (0, import_smithy_client.expectString)(output[_RARN]);
      }
      if (output[_RS] != null) {
        contents[_RS] = de_ManagedRuleState(output[_RS], context);
      }
      return contents;
    }, "de_ManagedRuleDescription");
    var de_ManagedRuleDescriptions = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_ManagedRuleDescription(entry, context);
      });
    }, "de_ManagedRuleDescriptions");
    var de_ManagedRuleState = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_RNu] != null) {
        contents[_RNu] = (0, import_smithy_client.expectString)(output[_RNu]);
      }
      if (output[_Stat] != null) {
        contents[_Stat] = (0, import_smithy_client.expectString)(output[_Stat]);
      }
      return contents;
    }, "de_ManagedRuleState");
    var de_MessageData = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_Cod] != null) {
        contents[_Cod] = (0, import_smithy_client.expectString)(output[_Cod]);
      }
      if (output[_Va] != null) {
        contents[_Va] = (0, import_smithy_client.expectString)(output[_Va]);
      }
      return contents;
    }, "de_MessageData");
    var de_Metric = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_N] != null) {
        contents[_N] = (0, import_smithy_client.expectString)(output[_N]);
      }
      if (output[_MN] != null) {
        contents[_MN] = (0, import_smithy_client.expectString)(output[_MN]);
      }
      if (output.Dimensions === "") {
        contents[_D] = [];
      } else if (output[_D] != null && output[_D][_m] != null) {
        contents[_D] = de_Dimensions((0, import_smithy_client.getArrayIfSingleItem)(output[_D][_m]), context);
      }
      return contents;
    }, "de_Metric");
    var de_MetricAlarm = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_ANl] != null) {
        contents[_ANl] = (0, import_smithy_client.expectString)(output[_ANl]);
      }
      if (output[_AAl] != null) {
        contents[_AAl] = (0, import_smithy_client.expectString)(output[_AAl]);
      }
      if (output[_AD] != null) {
        contents[_AD] = (0, import_smithy_client.expectString)(output[_AD]);
      }
      if (output[_ACUT] != null) {
        contents[_ACUT] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_ACUT]));
      }
      if (output[_AE] != null) {
        contents[_AE] = (0, import_smithy_client.parseBoolean)(output[_AE]);
      }
      if (output.OKActions === "") {
        contents[_OKA] = [];
      } else if (output[_OKA] != null && output[_OKA][_m] != null) {
        contents[_OKA] = de_ResourceList((0, import_smithy_client.getArrayIfSingleItem)(output[_OKA][_m]), context);
      }
      if (output.AlarmActions === "") {
        contents[_AA] = [];
      } else if (output[_AA] != null && output[_AA][_m] != null) {
        contents[_AA] = de_ResourceList((0, import_smithy_client.getArrayIfSingleItem)(output[_AA][_m]), context);
      }
      if (output.InsufficientDataActions === "") {
        contents[_IDA] = [];
      } else if (output[_IDA] != null && output[_IDA][_m] != null) {
        contents[_IDA] = de_ResourceList((0, import_smithy_client.getArrayIfSingleItem)(output[_IDA][_m]), context);
      }
      if (output[_SV] != null) {
        contents[_SV] = (0, import_smithy_client.expectString)(output[_SV]);
      }
      if (output[_SRt] != null) {
        contents[_SRt] = (0, import_smithy_client.expectString)(output[_SRt]);
      }
      if (output[_SRD] != null) {
        contents[_SRD] = (0, import_smithy_client.expectString)(output[_SRD]);
      }
      if (output[_SUT] != null) {
        contents[_SUT] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_SUT]));
      }
      if (output[_MN] != null) {
        contents[_MN] = (0, import_smithy_client.expectString)(output[_MN]);
      }
      if (output[_N] != null) {
        contents[_N] = (0, import_smithy_client.expectString)(output[_N]);
      }
      if (output[_St] != null) {
        contents[_St] = (0, import_smithy_client.expectString)(output[_St]);
      }
      if (output[_ES] != null) {
        contents[_ES] = (0, import_smithy_client.expectString)(output[_ES]);
      }
      if (output.Dimensions === "") {
        contents[_D] = [];
      } else if (output[_D] != null && output[_D][_m] != null) {
        contents[_D] = de_Dimensions((0, import_smithy_client.getArrayIfSingleItem)(output[_D][_m]), context);
      }
      if (output[_P] != null) {
        contents[_P] = (0, import_smithy_client.strictParseInt32)(output[_P]);
      }
      if (output[_U] != null) {
        contents[_U] = (0, import_smithy_client.expectString)(output[_U]);
      }
      if (output[_EP] != null) {
        contents[_EP] = (0, import_smithy_client.strictParseInt32)(output[_EP]);
      }
      if (output[_DTA] != null) {
        contents[_DTA] = (0, import_smithy_client.strictParseInt32)(output[_DTA]);
      }
      if (output[_Th] != null) {
        contents[_Th] = (0, import_smithy_client.strictParseFloat)(output[_Th]);
      }
      if (output[_CO] != null) {
        contents[_CO] = (0, import_smithy_client.expectString)(output[_CO]);
      }
      if (output[_TMD] != null) {
        contents[_TMD] = (0, import_smithy_client.expectString)(output[_TMD]);
      }
      if (output[_ELSCP] != null) {
        contents[_ELSCP] = (0, import_smithy_client.expectString)(output[_ELSCP]);
      }
      if (output.Metrics === "") {
        contents[_M] = [];
      } else if (output[_M] != null && output[_M][_m] != null) {
        contents[_M] = de_MetricDataQueries((0, import_smithy_client.getArrayIfSingleItem)(output[_M][_m]), context);
      }
      if (output[_TMI] != null) {
        contents[_TMI] = (0, import_smithy_client.expectString)(output[_TMI]);
      }
      if (output[_ESv] != null) {
        contents[_ESv] = (0, import_smithy_client.expectString)(output[_ESv]);
      }
      if (output[_STT] != null) {
        contents[_STT] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_STT]));
      }
      return contents;
    }, "de_MetricAlarm");
    var de_MetricAlarms = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_MetricAlarm(entry, context);
      });
    }, "de_MetricAlarms");
    var de_MetricCharacteristics = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_PS] != null) {
        contents[_PS] = (0, import_smithy_client.parseBoolean)(output[_PS]);
      }
      return contents;
    }, "de_MetricCharacteristics");
    var de_MetricDataQueries = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_MetricDataQuery(entry, context);
      });
    }, "de_MetricDataQueries");
    var de_MetricDataQuery = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_I] != null) {
        contents[_I] = (0, import_smithy_client.expectString)(output[_I]);
      }
      if (output[_MS] != null) {
        contents[_MS] = de_MetricStat(output[_MS], context);
      }
      if (output[_E] != null) {
        contents[_E] = (0, import_smithy_client.expectString)(output[_E]);
      }
      if (output[_L] != null) {
        contents[_L] = (0, import_smithy_client.expectString)(output[_L]);
      }
      if (output[_RD] != null) {
        contents[_RD] = (0, import_smithy_client.parseBoolean)(output[_RD]);
      }
      if (output[_P] != null) {
        contents[_P] = (0, import_smithy_client.strictParseInt32)(output[_P]);
      }
      if (output[_AI] != null) {
        contents[_AI] = (0, import_smithy_client.expectString)(output[_AI]);
      }
      return contents;
    }, "de_MetricDataQuery");
    var de_MetricDataResult = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_I] != null) {
        contents[_I] = (0, import_smithy_client.expectString)(output[_I]);
      }
      if (output[_L] != null) {
        contents[_L] = (0, import_smithy_client.expectString)(output[_L]);
      }
      if (output.Timestamps === "") {
        contents[_Tim] = [];
      } else if (output[_Tim] != null && output[_Tim][_m] != null) {
        contents[_Tim] = de_Timestamps((0, import_smithy_client.getArrayIfSingleItem)(output[_Tim][_m]), context);
      }
      if (output.Values === "") {
        contents[_Val] = [];
      } else if (output[_Val] != null && output[_Val][_m] != null) {
        contents[_Val] = de_DatapointValues((0, import_smithy_client.getArrayIfSingleItem)(output[_Val][_m]), context);
      }
      if (output[_SCt] != null) {
        contents[_SCt] = (0, import_smithy_client.expectString)(output[_SCt]);
      }
      if (output.Messages === "") {
        contents[_Mess] = [];
      } else if (output[_Mess] != null && output[_Mess][_m] != null) {
        contents[_Mess] = de_MetricDataResultMessages((0, import_smithy_client.getArrayIfSingleItem)(output[_Mess][_m]), context);
      }
      return contents;
    }, "de_MetricDataResult");
    var de_MetricDataResultMessages = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_MessageData(entry, context);
      });
    }, "de_MetricDataResultMessages");
    var de_MetricDataResults = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_MetricDataResult(entry, context);
      });
    }, "de_MetricDataResults");
    var de_MetricMathAnomalyDetector = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.MetricDataQueries === "") {
        contents[_MDQ] = [];
      } else if (output[_MDQ] != null && output[_MDQ][_m] != null) {
        contents[_MDQ] = de_MetricDataQueries((0, import_smithy_client.getArrayIfSingleItem)(output[_MDQ][_m]), context);
      }
      return contents;
    }, "de_MetricMathAnomalyDetector");
    var de_Metrics = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_Metric(entry, context);
      });
    }, "de_Metrics");
    var de_MetricStat = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_Me] != null) {
        contents[_Me] = de_Metric(output[_Me], context);
      }
      if (output[_P] != null) {
        contents[_P] = (0, import_smithy_client.strictParseInt32)(output[_P]);
      }
      if (output[_S] != null) {
        contents[_S] = (0, import_smithy_client.expectString)(output[_S]);
      }
      if (output[_U] != null) {
        contents[_U] = (0, import_smithy_client.expectString)(output[_U]);
      }
      return contents;
    }, "de_MetricStat");
    var de_MetricStreamEntries = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_MetricStreamEntry(entry, context);
      });
    }, "de_MetricStreamEntries");
    var de_MetricStreamEntry = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_Ar] != null) {
        contents[_Ar] = (0, import_smithy_client.expectString)(output[_Ar]);
      }
      if (output[_CD] != null) {
        contents[_CD] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_CD]));
      }
      if (output[_LUD] != null) {
        contents[_LUD] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_LUD]));
      }
      if (output[_Na] != null) {
        contents[_Na] = (0, import_smithy_client.expectString)(output[_Na]);
      }
      if (output[_FA] != null) {
        contents[_FA] = (0, import_smithy_client.expectString)(output[_FA]);
      }
      if (output[_Stat] != null) {
        contents[_Stat] = (0, import_smithy_client.expectString)(output[_Stat]);
      }
      if (output[_OF] != null) {
        contents[_OF] = (0, import_smithy_client.expectString)(output[_OF]);
      }
      return contents;
    }, "de_MetricStreamEntry");
    var de_MetricStreamFilter = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_N] != null) {
        contents[_N] = (0, import_smithy_client.expectString)(output[_N]);
      }
      if (output.MetricNames === "") {
        contents[_MNe] = [];
      } else if (output[_MNe] != null && output[_MNe][_m] != null) {
        contents[_MNe] = de_MetricStreamFilterMetricNames((0, import_smithy_client.getArrayIfSingleItem)(output[_MNe][_m]), context);
      }
      return contents;
    }, "de_MetricStreamFilter");
    var de_MetricStreamFilterMetricNames = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return (0, import_smithy_client.expectString)(entry);
      });
    }, "de_MetricStreamFilterMetricNames");
    var de_MetricStreamFilters = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_MetricStreamFilter(entry, context);
      });
    }, "de_MetricStreamFilters");
    var de_MetricStreamStatisticsAdditionalStatistics = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return (0, import_smithy_client.expectString)(entry);
      });
    }, "de_MetricStreamStatisticsAdditionalStatistics");
    var de_MetricStreamStatisticsConfiguration = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.IncludeMetrics === "") {
        contents[_IM] = [];
      } else if (output[_IM] != null && output[_IM][_m] != null) {
        contents[_IM] = de_MetricStreamStatisticsIncludeMetrics((0, import_smithy_client.getArrayIfSingleItem)(output[_IM][_m]), context);
      }
      if (output.AdditionalStatistics === "") {
        contents[_AS] = [];
      } else if (output[_AS] != null && output[_AS][_m] != null) {
        contents[_AS] = de_MetricStreamStatisticsAdditionalStatistics((0, import_smithy_client.getArrayIfSingleItem)(output[_AS][_m]), context);
      }
      return contents;
    }, "de_MetricStreamStatisticsConfiguration");
    var de_MetricStreamStatisticsConfigurations = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_MetricStreamStatisticsConfiguration(entry, context);
      });
    }, "de_MetricStreamStatisticsConfigurations");
    var de_MetricStreamStatisticsIncludeMetrics = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_MetricStreamStatisticsMetric(entry, context);
      });
    }, "de_MetricStreamStatisticsIncludeMetrics");
    var de_MetricStreamStatisticsMetric = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_N] != null) {
        contents[_N] = (0, import_smithy_client.expectString)(output[_N]);
      }
      if (output[_MN] != null) {
        contents[_MN] = (0, import_smithy_client.expectString)(output[_MN]);
      }
      return contents;
    }, "de_MetricStreamStatisticsMetric");
    var de_MissingRequiredParameterException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_me] != null) {
        contents[_me] = (0, import_smithy_client.expectString)(output[_me]);
      }
      return contents;
    }, "de_MissingRequiredParameterException");
    var de_OwningAccounts = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return (0, import_smithy_client.expectString)(entry);
      });
    }, "de_OwningAccounts");
    var de_PartialFailure = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_FR] != null) {
        contents[_FR] = (0, import_smithy_client.expectString)(output[_FR]);
      }
      if (output[_ETx] != null) {
        contents[_ETx] = (0, import_smithy_client.expectString)(output[_ETx]);
      }
      if (output[_FC] != null) {
        contents[_FC] = (0, import_smithy_client.expectString)(output[_FC]);
      }
      if (output[_FD] != null) {
        contents[_FD] = (0, import_smithy_client.expectString)(output[_FD]);
      }
      return contents;
    }, "de_PartialFailure");
    var de_PutAnomalyDetectorOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      return contents;
    }, "de_PutAnomalyDetectorOutput");
    var de_PutDashboardOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.DashboardValidationMessages === "") {
        contents[_DVM] = [];
      } else if (output[_DVM] != null && output[_DVM][_m] != null) {
        contents[_DVM] = de_DashboardValidationMessages((0, import_smithy_client.getArrayIfSingleItem)(output[_DVM][_m]), context);
      }
      return contents;
    }, "de_PutDashboardOutput");
    var de_PutInsightRuleOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      return contents;
    }, "de_PutInsightRuleOutput");
    var de_PutManagedInsightRulesOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output.Failures === "") {
        contents[_F] = [];
      } else if (output[_F] != null && output[_F][_m] != null) {
        contents[_F] = de_BatchFailures((0, import_smithy_client.getArrayIfSingleItem)(output[_F][_m]), context);
      }
      return contents;
    }, "de_PutManagedInsightRulesOutput");
    var de_PutMetricStreamOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_Ar] != null) {
        contents[_Ar] = (0, import_smithy_client.expectString)(output[_Ar]);
      }
      return contents;
    }, "de_PutMetricStreamOutput");
    var de_Range = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_ST] != null) {
        contents[_ST] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_ST]));
      }
      if (output[_ET] != null) {
        contents[_ET] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_ET]));
      }
      return contents;
    }, "de_Range");
    var de_ResourceList = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return (0, import_smithy_client.expectString)(entry);
      });
    }, "de_ResourceList");
    var de_ResourceNotFound = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_me] != null) {
        contents[_me] = (0, import_smithy_client.expectString)(output[_me]);
      }
      return contents;
    }, "de_ResourceNotFound");
    var de_ResourceNotFoundException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_RT] != null) {
        contents[_RT] = (0, import_smithy_client.expectString)(output[_RT]);
      }
      if (output[_RI] != null) {
        contents[_RI] = (0, import_smithy_client.expectString)(output[_RI]);
      }
      if (output[_Mes] != null) {
        contents[_Mes] = (0, import_smithy_client.expectString)(output[_Mes]);
      }
      return contents;
    }, "de_ResourceNotFoundException");
    var de_SingleMetricAnomalyDetector = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_AI] != null) {
        contents[_AI] = (0, import_smithy_client.expectString)(output[_AI]);
      }
      if (output[_N] != null) {
        contents[_N] = (0, import_smithy_client.expectString)(output[_N]);
      }
      if (output[_MN] != null) {
        contents[_MN] = (0, import_smithy_client.expectString)(output[_MN]);
      }
      if (output.Dimensions === "") {
        contents[_D] = [];
      } else if (output[_D] != null && output[_D][_m] != null) {
        contents[_D] = de_Dimensions((0, import_smithy_client.getArrayIfSingleItem)(output[_D][_m]), context);
      }
      if (output[_S] != null) {
        contents[_S] = (0, import_smithy_client.expectString)(output[_S]);
      }
      return contents;
    }, "de_SingleMetricAnomalyDetector");
    var de_StartMetricStreamsOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      return contents;
    }, "de_StartMetricStreamsOutput");
    var de_StopMetricStreamsOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      return contents;
    }, "de_StopMetricStreamsOutput");
    var de_Tag = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_K] != null) {
        contents[_K] = (0, import_smithy_client.expectString)(output[_K]);
      }
      if (output[_Va] != null) {
        contents[_Va] = (0, import_smithy_client.expectString)(output[_Va]);
      }
      return contents;
    }, "de_Tag");
    var de_TagList = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return de_Tag(entry, context);
      });
    }, "de_TagList");
    var de_TagResourceOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      return contents;
    }, "de_TagResourceOutput");
    var de_Timestamps = /* @__PURE__ */ __name((output, context) => {
      return (output || []).filter((e) => e != null).map((entry) => {
        return (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(entry));
      });
    }, "de_Timestamps");
    var de_UntagResourceOutput = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      return contents;
    }, "de_UntagResourceOutput");
    var deserializeMetadata = /* @__PURE__ */ __name((output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    }), "deserializeMetadata");
    var throwDefaultError = (0, import_smithy_client.withBaseException)(CloudWatchServiceException);
    var buildHttpRpcRequest = /* @__PURE__ */ __name(async (context, headers, path, resolvedHostname, body) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers
      };
      if (resolvedHostname !== void 0) {
        contents.hostname = resolvedHostname;
      }
      if (body !== void 0) {
        contents.body = body;
      }
      return new import_protocol_http.HttpRequest(contents);
    }, "buildHttpRpcRequest");
    var SHARED_HEADERS = {
      "content-type": "application/x-www-form-urlencoded"
    };
    var _ = "2010-08-01";
    var _A = "Action";
    var _AA = "AlarmActions";
    var _AAV = "ApproximateAggregateValue";
    var _AAl = "AlarmArn";
    var _ACUT = "AlarmConfigurationUpdatedTimestamp";
    var _AD = "AlarmDescription";
    var _ADT = "AnomalyDetectorTypes";
    var _ADn = "AnomalyDetectors";
    var _AE = "ActionsEnabled";
    var _AHI = "AlarmHistoryItems";
    var _AI = "AccountId";
    var _AN = "AlarmNames";
    var _ANP = "AlarmNamePrefix";
    var _ANl = "AlarmName";
    var _AP = "ActionPrefix";
    var _AR = "AlarmRule";
    var _AS = "AdditionalStatistics";
    var _ASB = "ActionsSuppressedBy";
    var _ASEP = "ActionsSuppressorExtensionPeriod";
    var _ASR = "ActionsSuppressedReason";
    var _ASWP = "ActionsSuppressorWaitPeriod";
    var _ASc = "ActionsSuppressor";
    var _ASg = "AggregationStatistic";
    var _AT = "AlarmTypes";
    var _ATl = "AlarmType";
    var _AUC = "ApproximateUniqueCount";
    var _AV = "AggregateValue";
    var _AVp = "ApproximateValue";
    var _Ar = "Arn";
    var _Av = "Average";
    var _C = "Counts";
    var _CA = "CompositeAlarms";
    var _CD = "CreationDate";
    var _CO = "ComparisonOperator";
    var _COAN = "ChildrenOfAlarmName";
    var _Co = "Configuration";
    var _Cod = "Code";
    var _Con = "Contributors";
    var _D = "Dimensions";
    var _DA = "DeleteAlarms";
    var _DAA = "DisableAlarmActions";
    var _DAD = "DeleteAnomalyDetector";
    var _DADe = "DescribeAnomalyDetectors";
    var _DAFM = "DescribeAlarmsForMetric";
    var _DAH = "DescribeAlarmHistory";
    var _DAa = "DashboardArn";
    var _DAe = "DescribeAlarms";
    var _DB = "DashboardBody";
    var _DD = "DeleteDashboards";
    var _DE = "DashboardEntries";
    var _DIR = "DeleteInsightRules";
    var _DIRe = "DescribeInsightRules";
    var _DIRi = "DisableInsightRules";
    var _DMS = "DeleteMetricStream";
    var _DN = "DashboardNames";
    var _DNP = "DashboardNamePrefix";
    var _DNa = "DashboardName";
    var _DP = "DataPath";
    var _DTA = "DatapointsToAlarm";
    var _DVM = "DashboardValidationMessages";
    var _Da = "Datapoints";
    var _De = "Definition";
    var _E = "Expression";
    var _EAA = "EnableAlarmActions";
    var _ED = "EndDate";
    var _EF = "ExcludeFilters";
    var _EIR = "EnableInsightRules";
    var _ELSCP = "EvaluateLowSampleCountPercentile";
    var _EP = "EvaluationPeriods";
    var _ES = "ExtendedStatistic";
    var _ESv = "EvaluationState";
    var _ESx = "ExtendedStatistics";
    var _ET = "EndTime";
    var _ETR = "ExcludedTimeRanges";
    var _ETx = "ExceptionType";
    var _En = "Entries";
    var _F = "Failures";
    var _FA = "FirehoseArn";
    var _FC = "FailureCode";
    var _FD = "FailureDescription";
    var _FR = "FailureResource";
    var _GD = "GetDashboard";
    var _GIRR = "GetInsightRuleReport";
    var _GMD = "GetMetricData";
    var _GMS = "GetMetricStatistics";
    var _GMSe = "GetMetricStream";
    var _GMWI = "GetMetricWidgetImage";
    var _HD = "HistoryData";
    var _HIT = "HistoryItemType";
    var _HS = "HistorySummary";
    var _I = "Id";
    var _IDA = "InsufficientDataActions";
    var _IF = "IncludeFilters";
    var _ILA = "IncludeLinkedAccounts";
    var _ILAM = "IncludeLinkedAccountsMetrics";
    var _IM = "IncludeMetrics";
    var _IR = "InsightRules";
    var _K = "Key";
    var _KL = "KeyLabels";
    var _Ke = "Keys";
    var _L = "Label";
    var _LD = "ListDashboards";
    var _LM = "ListMetrics";
    var _LMIR = "ListManagedInsightRules";
    var _LMS = "ListMetricStreams";
    var _LMa = "LastModified";
    var _LO = "LabelOptions";
    var _LTFR = "ListTagsForResource";
    var _LUD = "LastUpdateDate";
    var _M = "Metrics";
    var _MA = "MetricAlarms";
    var _MC = "MetricCharacteristics";
    var _MCC = "MaxContributorCount";
    var _MCV = "MaxContributorValue";
    var _MD = "MaxDatapoints";
    var _MDQ = "MetricDataQueries";
    var _MDR = "MetricDataResults";
    var _MDe = "MetricData";
    var _MDet = "MetricDatapoints";
    var _MMAD = "MetricMathAnomalyDetector";
    var _MN = "MetricName";
    var _MNe = "MetricNames";
    var _MR = "MaxRecords";
    var _MRa = "MaxResults";
    var _MRan = "ManagedRules";
    var _MRana = "ManagedRule";
    var _MS = "MetricStat";
    var _MT = "MetricTimezone";
    var _MW = "MetricWidget";
    var _MWI = "MetricWidgetImage";
    var _Ma = "Maximum";
    var _Me = "Metric";
    var _Mes = "Message";
    var _Mess = "Messages";
    var _Mi = "Minimum";
    var _N = "Namespace";
    var _NT = "NextToken";
    var _Na = "Name";
    var _Nam = "Names";
    var _OA = "OwningAccount";
    var _OAw = "OwningAccounts";
    var _OB = "OrderBy";
    var _OF = "OutputFormat";
    var _OKA = "OKActions";
    var _P = "Period";
    var _PAD = "PutAnomalyDetector";
    var _PCA = "PutCompositeAlarm";
    var _PD = "PutDashboard";
    var _PIR = "PutInsightRule";
    var _PMA = "PutMetricAlarm";
    var _PMD = "PutMetricData";
    var _PMIR = "PutManagedInsightRules";
    var _PMS = "PutMetricStream";
    var _POAN = "ParentsOfAlarmName";
    var _PS = "PeriodicSpikes";
    var _RA = "RecentlyActive";
    var _RARN = "ResourceARN";
    var _RAo = "RoleArn";
    var _RD = "ReturnData";
    var _RDu = "RuleDefinition";
    var _RI = "ResourceId";
    var _RN = "RuleNames";
    var _RNu = "RuleName";
    var _RS = "RuleState";
    var _RT = "ResourceType";
    var _S = "Stat";
    var _SAS = "SetAlarmState";
    var _SB = "ScanBy";
    var _SC = "StatisticsConfigurations";
    var _SCa = "SampleCount";
    var _SCt = "StatusCode";
    var _SD = "StartDate";
    var _SMAD = "SingleMetricAnomalyDetector";
    var _SMS = "StartMetricStreams";
    var _SMSt = "StopMetricStreams";
    var _SR = "StorageResolution";
    var _SRD = "StateReasonData";
    var _SRt = "StateReason";
    var _ST = "StartTime";
    var _STT = "StateTransitionedTimestamp";
    var _SUT = "StateUpdatedTimestamp";
    var _SV = "StateValue";
    var _SVt = "StatisticValues";
    var _Sc = "Schema";
    var _Si = "Size";
    var _St = "Statistic";
    var _Sta = "Statistics";
    var _Stat = "State";
    var _Su = "Sum";
    var _T = "Timezone";
    var _TK = "TagKeys";
    var _TMD = "TreatMissingData";
    var _TMI = "ThresholdMetricId";
    var _TN = "TemplateName";
    var _TR = "TagResource";
    var _Ta = "Tags";
    var _Th = "Threshold";
    var _Ti = "Timestamp";
    var _Tim = "Timestamps";
    var _U = "Unit";
    var _UC = "UniqueContributors";
    var _UR = "UntagResource";
    var _V = "Version";
    var _Va = "Value";
    var _Val = "Values";
    var _dVM = "dashboardValidationMessages";
    var _e = "entry";
    var _m = "member";
    var _me = "message";
    var buildFormUrlencodedString = /* @__PURE__ */ __name((formEntries) => Object.entries(formEntries).map(([key, value]) => (0, import_smithy_client.extendedEncodeURIComponent)(key) + "=" + (0, import_smithy_client.extendedEncodeURIComponent)(value)).join("&"), "buildFormUrlencodedString");
    var loadQueryErrorCode = /* @__PURE__ */ __name((output, data) => {
      var _a;
      if (((_a = data.Error) == null ? void 0 : _a.Code) !== void 0) {
        return data.Error.Code;
      }
      if (output.statusCode == 404) {
        return "NotFound";
      }
    }, "loadQueryErrorCode");
    var _DeleteAlarmsCommand = class _DeleteAlarmsCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "DeleteAlarms", {}).n("CloudWatchClient", "DeleteAlarmsCommand").f(void 0, void 0).ser(se_DeleteAlarmsCommand).de(de_DeleteAlarmsCommand).build() {
    };
    __name(_DeleteAlarmsCommand, "DeleteAlarmsCommand");
    var DeleteAlarmsCommand = _DeleteAlarmsCommand;
    var _DeleteAnomalyDetectorCommand = class _DeleteAnomalyDetectorCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "DeleteAnomalyDetector", {}).n("CloudWatchClient", "DeleteAnomalyDetectorCommand").f(void 0, void 0).ser(se_DeleteAnomalyDetectorCommand).de(de_DeleteAnomalyDetectorCommand).build() {
    };
    __name(_DeleteAnomalyDetectorCommand, "DeleteAnomalyDetectorCommand");
    var DeleteAnomalyDetectorCommand = _DeleteAnomalyDetectorCommand;
    var _DeleteDashboardsCommand = class _DeleteDashboardsCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "DeleteDashboards", {}).n("CloudWatchClient", "DeleteDashboardsCommand").f(void 0, void 0).ser(se_DeleteDashboardsCommand).de(de_DeleteDashboardsCommand).build() {
    };
    __name(_DeleteDashboardsCommand, "DeleteDashboardsCommand");
    var DeleteDashboardsCommand = _DeleteDashboardsCommand;
    var _DeleteInsightRulesCommand = class _DeleteInsightRulesCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "DeleteInsightRules", {}).n("CloudWatchClient", "DeleteInsightRulesCommand").f(void 0, void 0).ser(se_DeleteInsightRulesCommand).de(de_DeleteInsightRulesCommand).build() {
    };
    __name(_DeleteInsightRulesCommand, "DeleteInsightRulesCommand");
    var DeleteInsightRulesCommand = _DeleteInsightRulesCommand;
    var _DeleteMetricStreamCommand = class _DeleteMetricStreamCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "DeleteMetricStream", {}).n("CloudWatchClient", "DeleteMetricStreamCommand").f(void 0, void 0).ser(se_DeleteMetricStreamCommand).de(de_DeleteMetricStreamCommand).build() {
    };
    __name(_DeleteMetricStreamCommand, "DeleteMetricStreamCommand");
    var DeleteMetricStreamCommand = _DeleteMetricStreamCommand;
    var _DescribeAlarmHistoryCommand = class _DescribeAlarmHistoryCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "DescribeAlarmHistory", {}).n("CloudWatchClient", "DescribeAlarmHistoryCommand").f(void 0, void 0).ser(se_DescribeAlarmHistoryCommand).de(de_DescribeAlarmHistoryCommand).build() {
    };
    __name(_DescribeAlarmHistoryCommand, "DescribeAlarmHistoryCommand");
    var DescribeAlarmHistoryCommand = _DescribeAlarmHistoryCommand;
    var _DescribeAlarmsCommand = class _DescribeAlarmsCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "DescribeAlarms", {}).n("CloudWatchClient", "DescribeAlarmsCommand").f(void 0, void 0).ser(se_DescribeAlarmsCommand).de(de_DescribeAlarmsCommand).build() {
    };
    __name(_DescribeAlarmsCommand, "DescribeAlarmsCommand");
    var DescribeAlarmsCommand = _DescribeAlarmsCommand;
    var _DescribeAlarmsForMetricCommand = class _DescribeAlarmsForMetricCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "DescribeAlarmsForMetric", {}).n("CloudWatchClient", "DescribeAlarmsForMetricCommand").f(void 0, void 0).ser(se_DescribeAlarmsForMetricCommand).de(de_DescribeAlarmsForMetricCommand).build() {
    };
    __name(_DescribeAlarmsForMetricCommand, "DescribeAlarmsForMetricCommand");
    var DescribeAlarmsForMetricCommand = _DescribeAlarmsForMetricCommand;
    var _DescribeAnomalyDetectorsCommand = class _DescribeAnomalyDetectorsCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "DescribeAnomalyDetectors", {}).n("CloudWatchClient", "DescribeAnomalyDetectorsCommand").f(void 0, void 0).ser(se_DescribeAnomalyDetectorsCommand).de(de_DescribeAnomalyDetectorsCommand).build() {
    };
    __name(_DescribeAnomalyDetectorsCommand, "DescribeAnomalyDetectorsCommand");
    var DescribeAnomalyDetectorsCommand = _DescribeAnomalyDetectorsCommand;
    var _DescribeInsightRulesCommand = class _DescribeInsightRulesCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "DescribeInsightRules", {}).n("CloudWatchClient", "DescribeInsightRulesCommand").f(void 0, void 0).ser(se_DescribeInsightRulesCommand).de(de_DescribeInsightRulesCommand).build() {
    };
    __name(_DescribeInsightRulesCommand, "DescribeInsightRulesCommand");
    var DescribeInsightRulesCommand = _DescribeInsightRulesCommand;
    var _DisableAlarmActionsCommand = class _DisableAlarmActionsCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "DisableAlarmActions", {}).n("CloudWatchClient", "DisableAlarmActionsCommand").f(void 0, void 0).ser(se_DisableAlarmActionsCommand).de(de_DisableAlarmActionsCommand).build() {
    };
    __name(_DisableAlarmActionsCommand, "DisableAlarmActionsCommand");
    var DisableAlarmActionsCommand = _DisableAlarmActionsCommand;
    var _DisableInsightRulesCommand = class _DisableInsightRulesCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "DisableInsightRules", {}).n("CloudWatchClient", "DisableInsightRulesCommand").f(void 0, void 0).ser(se_DisableInsightRulesCommand).de(de_DisableInsightRulesCommand).build() {
    };
    __name(_DisableInsightRulesCommand, "DisableInsightRulesCommand");
    var DisableInsightRulesCommand = _DisableInsightRulesCommand;
    var _EnableAlarmActionsCommand = class _EnableAlarmActionsCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "EnableAlarmActions", {}).n("CloudWatchClient", "EnableAlarmActionsCommand").f(void 0, void 0).ser(se_EnableAlarmActionsCommand).de(de_EnableAlarmActionsCommand).build() {
    };
    __name(_EnableAlarmActionsCommand, "EnableAlarmActionsCommand");
    var EnableAlarmActionsCommand = _EnableAlarmActionsCommand;
    var _EnableInsightRulesCommand = class _EnableInsightRulesCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "EnableInsightRules", {}).n("CloudWatchClient", "EnableInsightRulesCommand").f(void 0, void 0).ser(se_EnableInsightRulesCommand).de(de_EnableInsightRulesCommand).build() {
    };
    __name(_EnableInsightRulesCommand, "EnableInsightRulesCommand");
    var EnableInsightRulesCommand = _EnableInsightRulesCommand;
    var _GetDashboardCommand = class _GetDashboardCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "GetDashboard", {}).n("CloudWatchClient", "GetDashboardCommand").f(void 0, void 0).ser(se_GetDashboardCommand).de(de_GetDashboardCommand).build() {
    };
    __name(_GetDashboardCommand, "GetDashboardCommand");
    var GetDashboardCommand = _GetDashboardCommand;
    var _GetInsightRuleReportCommand = class _GetInsightRuleReportCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "GetInsightRuleReport", {}).n("CloudWatchClient", "GetInsightRuleReportCommand").f(void 0, void 0).ser(se_GetInsightRuleReportCommand).de(de_GetInsightRuleReportCommand).build() {
    };
    __name(_GetInsightRuleReportCommand, "GetInsightRuleReportCommand");
    var GetInsightRuleReportCommand = _GetInsightRuleReportCommand;
    var _GetMetricDataCommand = class _GetMetricDataCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "GetMetricData", {}).n("CloudWatchClient", "GetMetricDataCommand").f(void 0, void 0).ser(se_GetMetricDataCommand).de(de_GetMetricDataCommand).build() {
    };
    __name(_GetMetricDataCommand, "GetMetricDataCommand");
    var GetMetricDataCommand2 = _GetMetricDataCommand;
    var _GetMetricStatisticsCommand = class _GetMetricStatisticsCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "GetMetricStatistics", {}).n("CloudWatchClient", "GetMetricStatisticsCommand").f(void 0, void 0).ser(se_GetMetricStatisticsCommand).de(de_GetMetricStatisticsCommand).build() {
    };
    __name(_GetMetricStatisticsCommand, "GetMetricStatisticsCommand");
    var GetMetricStatisticsCommand = _GetMetricStatisticsCommand;
    var _GetMetricStreamCommand = class _GetMetricStreamCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "GetMetricStream", {}).n("CloudWatchClient", "GetMetricStreamCommand").f(void 0, void 0).ser(se_GetMetricStreamCommand).de(de_GetMetricStreamCommand).build() {
    };
    __name(_GetMetricStreamCommand, "GetMetricStreamCommand");
    var GetMetricStreamCommand = _GetMetricStreamCommand;
    var _GetMetricWidgetImageCommand = class _GetMetricWidgetImageCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "GetMetricWidgetImage", {}).n("CloudWatchClient", "GetMetricWidgetImageCommand").f(void 0, void 0).ser(se_GetMetricWidgetImageCommand).de(de_GetMetricWidgetImageCommand).build() {
    };
    __name(_GetMetricWidgetImageCommand, "GetMetricWidgetImageCommand");
    var GetMetricWidgetImageCommand = _GetMetricWidgetImageCommand;
    var _ListDashboardsCommand = class _ListDashboardsCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "ListDashboards", {}).n("CloudWatchClient", "ListDashboardsCommand").f(void 0, void 0).ser(se_ListDashboardsCommand).de(de_ListDashboardsCommand).build() {
    };
    __name(_ListDashboardsCommand, "ListDashboardsCommand");
    var ListDashboardsCommand = _ListDashboardsCommand;
    var _ListManagedInsightRulesCommand = class _ListManagedInsightRulesCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "ListManagedInsightRules", {}).n("CloudWatchClient", "ListManagedInsightRulesCommand").f(void 0, void 0).ser(se_ListManagedInsightRulesCommand).de(de_ListManagedInsightRulesCommand).build() {
    };
    __name(_ListManagedInsightRulesCommand, "ListManagedInsightRulesCommand");
    var ListManagedInsightRulesCommand = _ListManagedInsightRulesCommand;
    var _ListMetricsCommand = class _ListMetricsCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "ListMetrics", {}).n("CloudWatchClient", "ListMetricsCommand").f(void 0, void 0).ser(se_ListMetricsCommand).de(de_ListMetricsCommand).build() {
    };
    __name(_ListMetricsCommand, "ListMetricsCommand");
    var ListMetricsCommand = _ListMetricsCommand;
    var _ListMetricStreamsCommand = class _ListMetricStreamsCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "ListMetricStreams", {}).n("CloudWatchClient", "ListMetricStreamsCommand").f(void 0, void 0).ser(se_ListMetricStreamsCommand).de(de_ListMetricStreamsCommand).build() {
    };
    __name(_ListMetricStreamsCommand, "ListMetricStreamsCommand");
    var ListMetricStreamsCommand = _ListMetricStreamsCommand;
    var _ListTagsForResourceCommand = class _ListTagsForResourceCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "ListTagsForResource", {}).n("CloudWatchClient", "ListTagsForResourceCommand").f(void 0, void 0).ser(se_ListTagsForResourceCommand).de(de_ListTagsForResourceCommand).build() {
    };
    __name(_ListTagsForResourceCommand, "ListTagsForResourceCommand");
    var ListTagsForResourceCommand = _ListTagsForResourceCommand;
    var _PutAnomalyDetectorCommand = class _PutAnomalyDetectorCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "PutAnomalyDetector", {}).n("CloudWatchClient", "PutAnomalyDetectorCommand").f(void 0, void 0).ser(se_PutAnomalyDetectorCommand).de(de_PutAnomalyDetectorCommand).build() {
    };
    __name(_PutAnomalyDetectorCommand, "PutAnomalyDetectorCommand");
    var PutAnomalyDetectorCommand = _PutAnomalyDetectorCommand;
    var _PutCompositeAlarmCommand = class _PutCompositeAlarmCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "PutCompositeAlarm", {}).n("CloudWatchClient", "PutCompositeAlarmCommand").f(void 0, void 0).ser(se_PutCompositeAlarmCommand).de(de_PutCompositeAlarmCommand).build() {
    };
    __name(_PutCompositeAlarmCommand, "PutCompositeAlarmCommand");
    var PutCompositeAlarmCommand = _PutCompositeAlarmCommand;
    var _PutDashboardCommand = class _PutDashboardCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "PutDashboard", {}).n("CloudWatchClient", "PutDashboardCommand").f(void 0, void 0).ser(se_PutDashboardCommand).de(de_PutDashboardCommand).build() {
    };
    __name(_PutDashboardCommand, "PutDashboardCommand");
    var PutDashboardCommand = _PutDashboardCommand;
    var _PutInsightRuleCommand = class _PutInsightRuleCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "PutInsightRule", {}).n("CloudWatchClient", "PutInsightRuleCommand").f(void 0, void 0).ser(se_PutInsightRuleCommand).de(de_PutInsightRuleCommand).build() {
    };
    __name(_PutInsightRuleCommand, "PutInsightRuleCommand");
    var PutInsightRuleCommand = _PutInsightRuleCommand;
    var _PutManagedInsightRulesCommand = class _PutManagedInsightRulesCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "PutManagedInsightRules", {}).n("CloudWatchClient", "PutManagedInsightRulesCommand").f(void 0, void 0).ser(se_PutManagedInsightRulesCommand).de(de_PutManagedInsightRulesCommand).build() {
    };
    __name(_PutManagedInsightRulesCommand, "PutManagedInsightRulesCommand");
    var PutManagedInsightRulesCommand = _PutManagedInsightRulesCommand;
    var _PutMetricAlarmCommand = class _PutMetricAlarmCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "PutMetricAlarm", {}).n("CloudWatchClient", "PutMetricAlarmCommand").f(void 0, void 0).ser(se_PutMetricAlarmCommand).de(de_PutMetricAlarmCommand).build() {
    };
    __name(_PutMetricAlarmCommand, "PutMetricAlarmCommand");
    var PutMetricAlarmCommand = _PutMetricAlarmCommand;
    var _PutMetricDataCommand = class _PutMetricDataCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions()),
        (0, import_middleware_compression.getCompressionPlugin)(config, { encodings: ["gzip"] })
      ];
    }).s("GraniteServiceVersion20100801", "PutMetricData", {}).n("CloudWatchClient", "PutMetricDataCommand").f(void 0, void 0).ser(se_PutMetricDataCommand).de(de_PutMetricDataCommand).build() {
    };
    __name(_PutMetricDataCommand, "PutMetricDataCommand");
    var PutMetricDataCommand = _PutMetricDataCommand;
    var _PutMetricStreamCommand = class _PutMetricStreamCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "PutMetricStream", {}).n("CloudWatchClient", "PutMetricStreamCommand").f(void 0, void 0).ser(se_PutMetricStreamCommand).de(de_PutMetricStreamCommand).build() {
    };
    __name(_PutMetricStreamCommand, "PutMetricStreamCommand");
    var PutMetricStreamCommand = _PutMetricStreamCommand;
    var _SetAlarmStateCommand = class _SetAlarmStateCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "SetAlarmState", {}).n("CloudWatchClient", "SetAlarmStateCommand").f(void 0, void 0).ser(se_SetAlarmStateCommand).de(de_SetAlarmStateCommand).build() {
    };
    __name(_SetAlarmStateCommand, "SetAlarmStateCommand");
    var SetAlarmStateCommand = _SetAlarmStateCommand;
    var _StartMetricStreamsCommand = class _StartMetricStreamsCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "StartMetricStreams", {}).n("CloudWatchClient", "StartMetricStreamsCommand").f(void 0, void 0).ser(se_StartMetricStreamsCommand).de(de_StartMetricStreamsCommand).build() {
    };
    __name(_StartMetricStreamsCommand, "StartMetricStreamsCommand");
    var StartMetricStreamsCommand = _StartMetricStreamsCommand;
    var _StopMetricStreamsCommand = class _StopMetricStreamsCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "StopMetricStreams", {}).n("CloudWatchClient", "StopMetricStreamsCommand").f(void 0, void 0).ser(se_StopMetricStreamsCommand).de(de_StopMetricStreamsCommand).build() {
    };
    __name(_StopMetricStreamsCommand, "StopMetricStreamsCommand");
    var StopMetricStreamsCommand = _StopMetricStreamsCommand;
    var _TagResourceCommand = class _TagResourceCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "TagResource", {}).n("CloudWatchClient", "TagResourceCommand").f(void 0, void 0).ser(se_TagResourceCommand).de(de_TagResourceCommand).build() {
    };
    __name(_TagResourceCommand, "TagResourceCommand");
    var TagResourceCommand = _TagResourceCommand;
    var _UntagResourceCommand = class _UntagResourceCommand extends import_smithy_client.Command.classBuilder().ep({
      ...commonParams
    }).m(function(Command, cs, config, o) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("GraniteServiceVersion20100801", "UntagResource", {}).n("CloudWatchClient", "UntagResourceCommand").f(void 0, void 0).ser(se_UntagResourceCommand).de(de_UntagResourceCommand).build() {
    };
    __name(_UntagResourceCommand, "UntagResourceCommand");
    var UntagResourceCommand = _UntagResourceCommand;
    var commands = {
      DeleteAlarmsCommand,
      DeleteAnomalyDetectorCommand,
      DeleteDashboardsCommand,
      DeleteInsightRulesCommand,
      DeleteMetricStreamCommand,
      DescribeAlarmHistoryCommand,
      DescribeAlarmsCommand,
      DescribeAlarmsForMetricCommand,
      DescribeAnomalyDetectorsCommand,
      DescribeInsightRulesCommand,
      DisableAlarmActionsCommand,
      DisableInsightRulesCommand,
      EnableAlarmActionsCommand,
      EnableInsightRulesCommand,
      GetDashboardCommand,
      GetInsightRuleReportCommand,
      GetMetricDataCommand: GetMetricDataCommand2,
      GetMetricStatisticsCommand,
      GetMetricStreamCommand,
      GetMetricWidgetImageCommand,
      ListDashboardsCommand,
      ListManagedInsightRulesCommand,
      ListMetricsCommand,
      ListMetricStreamsCommand,
      ListTagsForResourceCommand,
      PutAnomalyDetectorCommand,
      PutCompositeAlarmCommand,
      PutDashboardCommand,
      PutInsightRuleCommand,
      PutManagedInsightRulesCommand,
      PutMetricAlarmCommand,
      PutMetricDataCommand,
      PutMetricStreamCommand,
      SetAlarmStateCommand,
      StartMetricStreamsCommand,
      StopMetricStreamsCommand,
      TagResourceCommand,
      UntagResourceCommand
    };
    var _CloudWatch = class _CloudWatch extends CloudWatchClient2 {
    };
    __name(_CloudWatch, "CloudWatch");
    var CloudWatch = _CloudWatch;
    (0, import_smithy_client.createAggregatedClient)(commands, CloudWatch);
    var paginateDescribeAlarmHistory = (0, import_core.createPaginator)(CloudWatchClient2, DescribeAlarmHistoryCommand, "NextToken", "NextToken", "MaxRecords");
    var paginateDescribeAlarms = (0, import_core.createPaginator)(CloudWatchClient2, DescribeAlarmsCommand, "NextToken", "NextToken", "MaxRecords");
    var paginateDescribeAnomalyDetectors = (0, import_core.createPaginator)(CloudWatchClient2, DescribeAnomalyDetectorsCommand, "NextToken", "NextToken", "MaxResults");
    var paginateDescribeInsightRules = (0, import_core.createPaginator)(CloudWatchClient2, DescribeInsightRulesCommand, "NextToken", "NextToken", "MaxResults");
    var paginateGetMetricData = (0, import_core.createPaginator)(CloudWatchClient2, GetMetricDataCommand2, "NextToken", "NextToken", "MaxDatapoints");
    var paginateListDashboards = (0, import_core.createPaginator)(CloudWatchClient2, ListDashboardsCommand, "NextToken", "NextToken", "");
    var paginateListManagedInsightRules = (0, import_core.createPaginator)(CloudWatchClient2, ListManagedInsightRulesCommand, "NextToken", "NextToken", "MaxResults");
    var paginateListMetricStreams = (0, import_core.createPaginator)(CloudWatchClient2, ListMetricStreamsCommand, "NextToken", "NextToken", "MaxResults");
    var paginateListMetrics = (0, import_core.createPaginator)(CloudWatchClient2, ListMetricsCommand, "NextToken", "NextToken", "");
    var import_util_waiter = require_dist_cjs56();
    var checkState = /* @__PURE__ */ __name(async (client, input) => {
      let reason;
      try {
        const result = await client.send(new DescribeAlarmsCommand(input));
        reason = result;
        try {
          const returnComparator = /* @__PURE__ */ __name(() => {
            const flat_1 = [].concat(...result.MetricAlarms);
            return flat_1.length > 0;
          }, "returnComparator");
          if (returnComparator() == true) {
            return { state: import_util_waiter.WaiterState.SUCCESS, reason };
          }
        } catch (e) {
        }
      } catch (exception) {
        reason = exception;
      }
      return { state: import_util_waiter.WaiterState.RETRY, reason };
    }, "checkState");
    var waitForAlarmExists = /* @__PURE__ */ __name(async (params, input) => {
      const serviceDefaults = { minDelay: 5, maxDelay: 120 };
      return (0, import_util_waiter.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
    }, "waitForAlarmExists");
    var waitUntilAlarmExists = /* @__PURE__ */ __name(async (params, input) => {
      const serviceDefaults = { minDelay: 5, maxDelay: 120 };
      const result = await (0, import_util_waiter.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
      return (0, import_util_waiter.checkExceptions)(result);
    }, "waitUntilAlarmExists");
    var checkState2 = /* @__PURE__ */ __name(async (client, input) => {
      let reason;
      try {
        const result = await client.send(new DescribeAlarmsCommand(input));
        reason = result;
        try {
          const returnComparator = /* @__PURE__ */ __name(() => {
            const flat_1 = [].concat(...result.CompositeAlarms);
            return flat_1.length > 0;
          }, "returnComparator");
          if (returnComparator() == true) {
            return { state: import_util_waiter.WaiterState.SUCCESS, reason };
          }
        } catch (e) {
        }
      } catch (exception) {
        reason = exception;
      }
      return { state: import_util_waiter.WaiterState.RETRY, reason };
    }, "checkState");
    var waitForCompositeAlarmExists = /* @__PURE__ */ __name(async (params, input) => {
      const serviceDefaults = { minDelay: 5, maxDelay: 120 };
      return (0, import_util_waiter.createWaiter)({ ...serviceDefaults, ...params }, input, checkState2);
    }, "waitForCompositeAlarmExists");
    var waitUntilCompositeAlarmExists = /* @__PURE__ */ __name(async (params, input) => {
      const serviceDefaults = { minDelay: 5, maxDelay: 120 };
      const result = await (0, import_util_waiter.createWaiter)({ ...serviceDefaults, ...params }, input, checkState2);
      return (0, import_util_waiter.checkExceptions)(result);
    }, "waitUntilCompositeAlarmExists");
  }
});

// test/utils/get-service-quotas-metrics.ts
var import_client_cloudwatch = __toESM(require_dist_cjs57());
exports.handler = async () => {
  const client = new import_client_cloudwatch.CloudWatchClient();
  const currentTime = /* @__PURE__ */ new Date();
  const roundedEndTime = new Date(currentTime);
  roundedEndTime.setMinutes(Math.ceil(roundedEndTime.getMinutes() / 5) * 5);
  roundedEndTime.setSeconds(0);
  roundedEndTime.setMilliseconds(0);
  const fiveMinutesAgo = new Date(currentTime.getTime() - 5 * 60 * 1e3);
  const roundedStartTime = new Date(fiveMinutesAgo);
  roundedStartTime.setMinutes(Math.floor(roundedStartTime.getMinutes() / 5) * 5);
  roundedStartTime.setSeconds(0);
  roundedStartTime.setMilliseconds(0);
  const params = {
    StartTime: roundedStartTime,
    EndTime: roundedEndTime,
    MetricDataQueries: [
      {
        Id: "m1",
        Label: "Target Group per ALB service quotas limit",
        MetricStat: {
          Metric: {
            Namespace: "AWS/ServiceQuotaLimit",
            MetricName: "ServiceQuotasApplied",
            Dimensions: [
              { Name: "QuotaCode", Value: "L-7E6692B2" },
              { Name: "QuotaName", Value: "Targets per Application Load Balancer" },
              { Name: "ServiceCode", Value: "elasticloadbalancing" }
            ]
          },
          Period: 60,
          Stat: "Maximum"
        }
      }
    ]
  };
  const command = new import_client_cloudwatch.GetMetricDataCommand(params);
  try {
    const data = await client.send(command);
    console.log("Data: ", data);
    const numMetrics = data.MetricDataResults?.[0]?.Timestamps?.length ?? 0;
    if (numMetrics > 0) {
      return {
        statusCode: 200,
        body: { message: "Metrics found" }
      };
    }
    throw new Error("No metrics found");
  } catch (error) {
    return {
      statusCode: 500,
      body: { error: error.message }
    };
  }
};
