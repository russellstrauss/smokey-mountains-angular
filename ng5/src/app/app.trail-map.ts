import { Component, ngOnInit, AfterViewInit } from '@angular/core';

declare function bindUI();

@Component({
	selector: 'app-root',
	templateUrl: './app.trail-map.html',
	styleUrls: ['./app.trail-map.scss']
})

export class AppComponent implements AfterViewInit {
	title = 'Smokey Mountain Interactive Trail Map';
	
	ngOnInit {
	}
}
