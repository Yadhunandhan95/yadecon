import { Title } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { RouterModule, Routes,TitleStrategy,RouterStateSnapshot} from '@angular/router';
import { HeadphonesComponent } from './headphones/headphones.component';
import { SunglassesComponent } from './sunglasses/sunglasses.component';
import { WatchComponent } from './watch/watch.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from "./products/products.component";
  // {
  //   path:'**', component:NotFoundComponent
  //   },
  
  // {
  // path:'http://localhost:4200/headphones',redirectTo:'headphones', pathMatch: 'full'
  // }

// @Injectable()
// export class TemplatePageTitleStrategy extends TitleStrategy {
//   constructor(private readonly title: Title) {
//     super();
//   }

//   override updateTitle(routerState: RouterStateSnapshot) {
//     const title = this.buildTitle(routerState);
//     if (title !== undefined) {
//       this.title.setTitle(`yadnew | ${title}`);
//     }
//   }
// }
@NgModule({
  imports: [RouterModule.forRoot( [
    // { path: "", redirectTo: "/headphones", pathMatch: "full" },
    {path:'home', component:AppComponent},
    {
      path:'products', component:ProductsComponent
    },
    {
    path:'headphones', component:HeadphonesComponent
    },
    
    {
    path:'sunglasses', component:SunglassesComponent
    },
    {
    path:'watch', component:WatchComponent
    },
  ],)
],
  exports: [RouterModule],
})
export class AppRoutingModule { }