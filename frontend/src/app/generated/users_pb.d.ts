// package: users
// file: users.proto

import * as jspb from "google-protobuf";

export class User extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  clearChannelIdsList(): void;
  getChannelIdsList(): Array<number>;
  setChannelIdsList(value: Array<number>): void;
  addChannelIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: number,
    firstName: string,
    lastName: string,
    active: boolean,
    deleted: boolean,
    channelIdsList: Array<number>,
  }
}

