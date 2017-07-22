import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ItemsListComponent} from "./items/items-list/items-list.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'items-list', pathMatch: 'full' },
    { path: 'items-list', component: ItemsListComponent },
    { path: '**', redirectTo: 'items-list'}
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingComponent{

}