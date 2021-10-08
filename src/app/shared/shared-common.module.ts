import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

// import * as componentsFrom from 'shared/components';
// import * as directivesFrom from 'shared/directives';
// import * as pipesFrom from 'shared/pipes';

import { SharedLibsModule } from './shared-libs.module';
import { SharedMaterializeModule } from './shared-materialize.module';
import { CampoWrapperComponent } from './components/campos/campo-wrapper/campo-wrapper.component';
import { CampoInputComponent } from './components/campos/campo-input/campo-input.component';
import { CampoTextareaComponent } from './components/campos/campo-textarea/campo-textarea.component';


@NgModule({
    imports: [ SharedMaterializeModule, SharedLibsModule ],
    declarations: [
        CampoWrapperComponent,
        CampoInputComponent,
        CampoTextareaComponent,
    //     ...componentsFrom.components,
    //     ...directivesFrom.directives,
    //     ...pipesFrom.pipes
    ],
    exports: [
        SharedLibsModule,
        SharedMaterializeModule,
        CampoWrapperComponent,
        CampoInputComponent,
        CampoTextareaComponent,
        // ...componentsFrom.components, ...directivesFrom.directives, ...pipesFrom.pipes
    ],
    providers: [ FormGroupDirective ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class SharedCommonModule {}
