import {Action, createAction, createReducer, on, props} from "@ngrx/store";
import {User} from "../../generated/users_pb";
import {ConnectionsResponse} from "../../generated/chat_pb";

export const FetchConnections = createAction(`[Chat Component] Fetch Connections`, props<{ payload: string}>())
export const FetchConnectionsSuccess = createAction(`[Effects] Fetch Connections Success`, props<{ payload: ConnectionsResponse.AsObject }>())
export const FetchConnectionsFailure = createAction(`[Effects] Fetch Connections Failure`)

export interface ChatStore {
  users: User.AsObject[]
}

export const initialChatStore: ChatStore = {
  users: []
}

const _chatReducer = createReducer(
  initialChatStore,
  on(FetchConnectionsSuccess, (state, action) => {
    console.log("State")
    console.log(state)
    console.log("Action")
    console.log(action)
    return {...state, users: action.payload.usersList }
  })
)

export function chatReducer(state: ChatStore, action: Action) {
  return _chatReducer(state, action)
}
