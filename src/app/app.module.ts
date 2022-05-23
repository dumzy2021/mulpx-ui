import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PaymentCardsComponent } from './components/payment-cards/payment-cards.component';
import { QuickLinksComponent } from './components/quick-links/quick-links.component';
import { RecentActivitiesComponent } from './components/recent-activities/recent-activities.component';
import { OverviewMapComponent } from './components/overview-map/overview-map.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardLayoutComponent,
    DashboardComponent,
    PaymentCardsComponent,
    QuickLinksComponent,
    RecentActivitiesComponent,
    OverviewMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
