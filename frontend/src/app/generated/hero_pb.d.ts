// package: hero
// file: hero.proto

import * as jspb from "google-protobuf";

export class GetHeroRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHeroRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHeroRequest): GetHeroRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHeroRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHeroRequest;
  static deserializeBinaryFromReader(message: GetHeroRequest, reader: jspb.BinaryReader): GetHeroRequest;
}

export namespace GetHeroRequest {
  export type AsObject = {
    id: number,
  }
}

export class Hero extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Hero.AsObject;
  static toObject(includeInstance: boolean, msg: Hero): Hero.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Hero, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Hero;
  static deserializeBinaryFromReader(message: Hero, reader: jspb.BinaryReader): Hero;
}

export namespace Hero {
  export type AsObject = {
    id: number,
    name: string,
  }
}

