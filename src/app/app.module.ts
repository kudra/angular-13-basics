import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { CommonModule } from '@angular/common';
import { ApiInterceptor } from './api.interceptor';
import { FilterPipe } from './filter.pipe';
import { TextDirective } from './text.directive';
import { GoCompComponent } from './go-comp/go-comp.component';
import { RouteGuard } from './route.guard';
import { RouteResolver } from './route.resolve';
const route: Routes = [
  { path: '', component: TodoComponent },
  { path: 'todo', component: TodoComponent },
  {
    path: 'gocomp/:id',
    component: GoCompComponent,
    canActivate: [RouteGuard],
    resolve: { message: RouteResolver },
  },
  { path: '**', component: TodoComponent },
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    GoCompComponent,
    TodoComponent,
    FilterPipe,
    TextDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(route),
  ],
  providers: [
    RouteGuard,
    RouteResolver,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
