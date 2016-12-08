import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DragulaModule} from "ng2-dragula/ng2-dragula";
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";

const routes: Routes = [

];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        DragulaModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [

    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
