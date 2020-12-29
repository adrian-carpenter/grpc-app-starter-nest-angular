// package: hero
// file: hero.proto

var hero_pb = require("./hero_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var HeroService = (function () {
  function HeroService() {}
  HeroService.serviceName = "hero.HeroService";
  return HeroService;
}());

HeroService.GetHero = {
  methodName: "GetHero",
  service: HeroService,
  requestStream: false,
  responseStream: false,
  requestType: hero_pb.GetHeroRequest,
  responseType: hero_pb.Hero
};

exports.HeroService = HeroService;

function HeroServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

HeroServiceClient.prototype.getHero = function getHero(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HeroService.GetHero, {
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

exports.HeroServiceClient = HeroServiceClient;

