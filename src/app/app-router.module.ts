import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { HorsesComponent } from './horses/horses.component';
import { HorsesEdit } from './horses/edit/edit.component';
import { HorsesEmpty } from './horses/empty/empty.component';
import { HorsesView } from './horses/view/view.component';

const appRoutes: Routes = [
	{
		path: '',
		component: WelcomeComponent
	},
	{
		path: 'horses',
		component: HorsesComponent,
		children: [
			{
				path: '',
				component: HorsesEmpty
			},
			{
				path: 'new',
				component: HorsesEdit
			},
			{
				path: 'edit',
				component: HorsesEmpty
			},
			{
				path: ':id',
				component: HorsesView
			},
			{
				path: 'edit/:id',
				component: HorsesEdit
			},
			{
				path: '**',
				redirectTo: '/horses',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [
    	RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRouterModule {}