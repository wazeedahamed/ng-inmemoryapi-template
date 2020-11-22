import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryUsersService } from './in-memory-users.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    environment.production ? [] : [
      HttpClientInMemoryWebApiModule.forRoot(InMemoryUsersService, { delay: 100 })
    ]
  ]
})
export class InMemoryApiModule { }
