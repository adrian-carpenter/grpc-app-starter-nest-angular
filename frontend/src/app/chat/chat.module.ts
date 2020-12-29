import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatComponent} from './chat.component';
import {StoreModule} from "@ngrx/store";
import {chatReducer} from "./store/chat.store";
import {EffectsModule} from "@ngrx/effects";
import {ChatEffects} from "./store/chat.effects";


@NgModule({
  declarations: [ChatComponent],
  exports: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('chat', chatReducer),
    EffectsModule.forFeature([ChatEffects])
  ]
})
export class ChatModule {
}
