import {Injectable} from "@angular/core";
import {ChatService} from "../chat.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs/operators";
import {FetchConnections, FetchConnectionsFailure, FetchConnectionsSuccess} from "./chat.store";
import {of} from "rxjs";
import {ConnectionsResponse} from "../../generated/chat_pb";

@Injectable()
export class ChatEffects {

  constructor(
    private actions$: Actions,
    private chatService: ChatService
  ) {}

  fetchConnections$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FetchConnections),
      mergeMap((action) => this.chatService.getConnections(action.payload)
        .pipe(
          map((data: ConnectionsResponse.AsObject) => FetchConnectionsSuccess({ payload: data })),
          catchError(() => of(FetchConnectionsFailure()))
        )
      )
    )
  })

}
