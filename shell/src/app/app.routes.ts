import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
  startsWith,
} from '@angular-architects/module-federation-tools';
import { LocalComponent } from './local/local.component';

export const routes: Routes = [
  {
    path: 'local',
    component: LocalComponent,
  },
  // {
  //   path: 'angular',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:8082/remoteEntry.js',
  //       exposedModule: './Component',
  //     }).then((m: any) => m.AppModule),
  // },

  // {
  //   path: 'react',
  //   component: WebComponentWrapper,
  //   data: {
  //     type: 'script',
  //     remoteEntry: 'http://localhost:8081/remoteEntry.js',
  //     remoteName: 'react_mfe',
  //     exposedModule: './ReactComponent',
  //     elementName: 'ReactComponent',
  //   } as WebComponentWrapperOptions,
  //   // children: [
  //   //   {
  //   //     path: 'react/demo',
  //   //     component: WebComponentWrapper,
  //   //     data: {
  //   //       type: 'script',
  //   //       remoteEntry: 'http://localhost:8081/remoteEntry.js',
  //   //       remoteName: 'react_mfe',
  //   //       exposedModule: './Demo',
  //   //       elementName: 'demo',
  //   //     } as WebComponentWrapperOptions,
  //   //   },
  //   // ],
  // },
  {
    path: 'angular',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:8082/remoteEntry.js',
      remoteName: 'angularMfe',
      exposedModule: './Component',
      elementName: 'Component',
    } as WebComponentWrapperOptions,
  },
  {
    matcher: startsWith('react'),
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:8081/remoteEntry.js',
      remoteName: 'react_mfe',
      exposedModule: './ReactComponent',
      elementName: 'ReactComponent',
    },
  },
  // {
  //   path: 'angular',
  //   loadChildren: () => import('angularMfe/Component').then((m) => m.AppModule),
  // },
  //   {
  //    path: '**',
  //    component: NotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
export class AppRoutingModule {}
