import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="ui  page grid"> 
            <div class="row">
                <div class="column">
                    <div class="ui massive message main">
                        <h1 class="ui header"> The App Works! </h1>
                        <p> 
                            Angular2 environment up and running.
                        </p>
                    </div>
                </div>   
            </div>
        </div>
    `
})
export class AppComponent{

}
