import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ManagerComponent } from './manager/manager.component';
import { AgentComponent } from './agent/agent.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModelComponent } from './model/model.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { SharedService } from './shared.service';
import { OrderService } from './order.service';
const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'customer', component: CustomerComponent},
  {path:'manager', component: ManagerComponent},
  {path:'agent', component: AgentComponent},
  {path: 'cart', component:CartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ManagerComponent,
    AgentComponent,
    HomeComponent,
    ModelComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration(),
    ProductService,
    SharedService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
