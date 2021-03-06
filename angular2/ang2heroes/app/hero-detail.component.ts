import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
	selector: 'my-hero-detail',
	template: `<div *ngIf="hero">
		<h2>details {{hero.name}}</h2>
		<div><label>ID: </label> {{hero.id}}</div>
		<div><label>Name: </label>
		<input [(ngModel)]="hero.name" placeholder="name">
		</div>
		</div>`,
	inputs: ['hero'],
})

export class HeroDetailComponent { 
	public hero: Hero;
}