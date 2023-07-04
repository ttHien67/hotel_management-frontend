import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LayoutsComponent } from "./layouts.component";

@NgModule({
    declarations: [
        FooterComponent, 
        HeaderComponent, 
        LayoutsComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
    ],
    exports:[
        FooterComponent, 
        HeaderComponent
    ]
  })
  export class LayoutsModule { }