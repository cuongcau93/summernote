import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { sharedConfig } from './app.module.shared';

import { DomSanitizer } from '@angular/platform-browser'


@Pipe({ name: 'escapeHtml', pure: false })
export class EscapeHtmlPipe implements PipeTransform {
    constructor(private sanitized: DomSanitizer) { }
    transform(value: any, args: any[] = []) {
        // simple JS inj cleanup that should be done on server side primarly
        if (value.indexOf('<script>') != -1) {
            console.log('JS injection. . . html purified');
            return value.replace('<script>', '').replace('<\/script>', '');
        }
        return this.sanitized.bypassSecurityTrustHtml(value); // so ng2 does not remove CSS
    }
}


@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        ...sharedConfig.imports
    ],
    providers: [
        { provide: 'ORIGIN_URL', useValue: location.origin }
    ]
})
export class AppModule {

}
