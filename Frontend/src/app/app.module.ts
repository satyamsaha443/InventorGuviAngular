import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './general/dashboard/dashboard.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './general/login/login.component';
// import { EmployeeComponent } from './modules/employee/employee.component';
import { HttpClientModule } from '@angular/common/http';

import { ExpenseComponent } from './modules/expense/expense/expense.component';
import { IncomeComponent } from './modules/income/income/income.component';
import { ProductComponent } from './modules/product/product/product.component';
import { BuyComponent } from './modules/buy/buy/buy.component';
import { ModalBuyComponent } from './modules/buy/modal-buy/modal-buy.component';
import { AddBuyComponent } from './modules/buy/add-buy/add-buy.component';
import { EditBuyComponent } from './modules/buy/edit-buy/edit-buy.component';
import { ViewBuyComponent } from './modules/buy/view-buy/view-buy.component';
import { AddEmployeeComponent } from './modules/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './modules/employee/edit-employee/edit-employee.component';
import { ModalEmployeeComponent } from './modules/employee/modal-employee/modal-employee.component';
import { ViewEmployeeComponent } from './modules/employee/view-employee/view-employee.component';
import { AddExpenseComponent } from './modules/expense/add-expense/add-expense.component';
import { EditExpenseComponent } from './modules/expense/edit-expense/edit-expense.component';
import { ModalExpenseComponent } from './modules/expense/modal-expense/modal-expense.component';
import { ViewExpenseComponent } from './modules/expense/view-expense/view-expense.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { NavigationComponent } from './template/navigation/navigation.component';
import { SideNavigationComponent } from './template/side-navigation/side-navigation.component';
import { AddProductComponent } from './modules/product/add-product/add-product.component';
import { EditProductComponent } from './modules/product/edit-product/edit-product.component';
import { ModalProductComponent } from './modules/product/modal-product/modal-product.component';
import { ViewProductComponent } from './modules/product/view-product/view-product.component';
import { CategoryComponent } from './modules/category/category/category.component';
import { AddCategoryComponent } from './modules/category/add-category/add-category.component';
import { EditCategoryComponent } from './modules/category/edit-category/edit-category.component';
import { ModalCategoryComponent } from './modules/category/modal-category/modal-category.component';
import { ViewCategoryComponent } from './modules/category/view-category/view-category.component';
import { ClientComponent } from './modules/client/client/client.component';
import { AddClientComponent } from './modules/client/add-client/add-client.component';
import { EditClientComponent } from './modules/client/edit-client/edit-client.component';
import { ModalClientComponent } from './modules/client/modal-client/modal-client.component';
import { ViewClientComponent } from './modules/client/view-client/view-client.component';
import { RevenueComponent } from './modules/revenue/revenue/revenue.component';
import { AddRevenueComponent } from './modules/revenue/add-revenue/add-revenue.component';
import { EditRevenueComponent } from './modules/revenue/edit-revenue/edit-revenue.component';
import { ModalRevenueComponent } from './modules/revenue/modal-revenue/modal-revenue.component';
import { ViewRevenueComponent } from './modules/revenue/view-revenue/view-revenue.component';
import { AddSellComponent } from './modules/sell/add-sell/add-sell.component';
import { EditSellComponent } from './modules/sell/edit-sell/edit-sell.component';
import { ModalSellComponent } from './modules/sell/modal-sell/modal-sell.component';
import { SaleComponent } from './modules/sell/sale/sale.component';
import { ViewSellComponent } from './modules/sell/view-sell/view-sell.component';
import { EditStockComponent } from './modules/stock/edit-stock/edit-stock.component';
import { StockComponent } from './modules/stock/stock/stock.component';
import { ViewStockComponent } from './modules/stock/view-stock/view-stock.component';
import { AddSupplierComponent } from './modules/supplier/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './modules/supplier/edit-supplier/edit-supplier.component';
import { SupplierComponent } from './modules/supplier/supplier/supplier.component';
import { ModalSupplierComponent } from './modules/supplier/modal-supplier/modal-supplier.component';
import { ViewSupplierComponent } from './modules/supplier/view-supplier/view-supplier.component';
import { ConfigurationComponent } from './general/configuration/configuration.component';
import { EditprofileComponent } from './general/editprofile/editprofile.component';
import { ProfileComponent } from './general/profile/profile.component';
import { ToastrModule } from 'ngx-toastr';
import {MatFormFieldModule} from '@angular/material/form-field'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import {MatRadioModule} from '@angular/material/radio';
import { BarcodeScanComponent } from './modules/barcode-scan/barcode-scan.component'
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ProductComponent,
    ExpenseComponent,
    IncomeComponent,
    BuyComponent,
    ModalBuyComponent,
    AddBuyComponent,
    EditBuyComponent,
    ViewBuyComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ModalEmployeeComponent,
    ViewEmployeeComponent,
    AddExpenseComponent,
    EditExpenseComponent,
    ModalExpenseComponent,
    ViewExpenseComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    SideNavigationComponent,
    AddProductComponent,
    EditProductComponent,
    ModalProductComponent,
    ViewProductComponent,
    CategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ModalCategoryComponent,
    ViewCategoryComponent,
    ClientComponent,
    AddClientComponent,
    EditClientComponent,
    ModalClientComponent,
    ViewClientComponent,
    RevenueComponent,
    AddRevenueComponent,
    EditRevenueComponent,
    ModalRevenueComponent,
    ViewRevenueComponent,
    AddSellComponent,
    EditSellComponent,
    ModalSellComponent,
    SaleComponent,
    ViewSellComponent,
    EditStockComponent,
    StockComponent,
    ViewStockComponent,
    AddSupplierComponent,
    EditSupplierComponent,
    SupplierComponent,
    ModalSupplierComponent,
    ViewSupplierComponent,
    ConfigurationComponent,
    EditprofileComponent,
    ProfileComponent,
    BarcodeScanComponent,
    // EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    ZXingScannerModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    
  
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
