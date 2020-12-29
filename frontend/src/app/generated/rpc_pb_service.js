// package: rpc
// file: rpc.proto

var rpc_pb = require("./rpc_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var RpcService = (function () {
  function RpcService() {}
  RpcService.serviceName = "rpc.RpcService";
  return RpcService;
}());

RpcService.GetHealth = {
  methodName: "GetHealth",
  service: RpcService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: rpc_pb.HealthResponse
};

exports.RpcService = RpcService;

function RpcServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

RpcServiceClient.prototype.getHealth = function getHealth(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RpcService.GetHealth, {
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

exports.RpcServiceClient = RpcServiceClient;

