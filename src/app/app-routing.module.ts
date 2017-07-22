import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ItemsListComponent} from "./items/items-list/items-list.component";

const appRoutes: Routes = [
    { path: '', component: ItemsListComponent },
    { path: '**', redirectTo: ''}
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingComponent{

}