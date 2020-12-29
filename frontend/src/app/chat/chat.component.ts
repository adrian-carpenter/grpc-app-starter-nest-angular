import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppStore} from "../store/app.store";
import {FetchConnections} from "./store/chat.store";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private _store: Store<AppStore>) {
  }

  ngOnInit(): void {
  }

  fetchConnections() {
    this._store.dispatch(FetchConnections({ payload: "1"}))
  }


}
