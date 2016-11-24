import {Component, ElementRef} from '@angular/core';
import { Artrium } from './artrium.model';

@Component({
    selector: 'as-home',
    templateUrl: 'app/artrium/artrium.html',
    styleUrls: [
        'app/artrium/artrium.css'
    ]
})
export class ArtriumComponent {
    file_srcs: Artrium[] = [];
    public artrium: Artrium;
    constructor(private element: ElementRef) {}

    changeListner(event) {
        let reader = new FileReader();
    let self = this;
        reader.onload = function(e) {
            let src = reader.result;
    self.artrium = new Artrium(event.target.files[0].name, src);
    self.file_srcs.push(self.artrium);
        };

        reader.readAsDataURL(event.target.files[0]);
    }
}
