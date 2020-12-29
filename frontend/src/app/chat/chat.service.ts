import {Injectable} from '@angular/core';
import {ChatServiceClient} from "../generated/chat_pb_service";
import {environment} from "../../environments/environment";
import * as faker from 'faker'
import {ConnectionsResponse, ConnectRequest} from "../generated/chat_pb";
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private readonly _client: ChatServiceClient
  private readonly _userId = faker.random.number()
  constructor() {
    this._client = new ChatServiceClient(environment.grpcProxy)
  }

  getConnections(userId: string): Observable<ConnectionsResponse.AsObject> {
    return new Observable<ConnectionsResponse.AsObject>(obs => {
      console.log("Fetching Connections")
      const req = new ConnectRequest()
      req.setUserId(this._userId)
      req.setActive(true)
      this._client.getConnections(req, (err, res) => {
        if (err) {
          console.error(`[grpc.GetConnections() error]: ${err} `)
          throw new Error(`${err}`)
        } else {
          console.log('[grpc.GetConnections() response]:', res?.toObject())
          obs.next(res?.toObject())
        }
        obs.complete()
      })
    })
  }

}
