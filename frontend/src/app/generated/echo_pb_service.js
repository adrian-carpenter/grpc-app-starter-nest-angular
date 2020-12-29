// package: echo
// file: echo.proto

var echo_pb = require("./echo_pb");
var api_pb = require("./api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EchoService = (function () {
  function EchoService() {}
  EchoService.serviceName = "echo.EchoService";
  return EchoService;
}());

EchoService.Health = {
  methodName: "Health",
  service: EchoService,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.Empty,
  responseType: echo_pb.EchoResponse
};

EchoService.GetEcho = {
  methodName: "GetEcho",
  service: EchoService,
  requestStream: false,
  responseStream: false,
  requestType: echo_pb.EchoRequest,
  responseType: echo_pb.EchoResponse
};

EchoService.GetEchoStream = {
  methodName: "GetEchoStream",
  service: EchoService,
  requestStream: true,
  responseStream: true,
  requestType: echo_pb.EchoRequest,
  responseType: echo_pb.EchoResponse
};

exports.EchoService = EchoService;

function EchoServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EchoServiceClient.prototype.health = function health(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EchoService.Health, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EchoServiceClient.prototype.getEcho = function getEcho(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EchoService.GetEcho, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EchoServiceClient.prototype.getEchoStream = function getEchoStream(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(EchoService.GetEchoStream, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.EchoServiceClient = EchoServiceClient;

