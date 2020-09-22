import { WFMComponent } from '../framework/index'

class AppComponent extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const appComponent = new AppComponent ({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        
        <div class="row">
            <div class="col s-6 offset-s3" style="margin-top: 40px;">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                <span class="card-title">Main page</span>
                <p>Not functionality in this page</p>
                </div>
                <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
                </div>
            </div>
            </div>
        </div>
    `
})
