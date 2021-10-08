import { NgModule } from '@angular/core';
import { SharedLibsModule } from './shared-libs.module';
import { SharedCommonModule } from './shared-common.module';

@NgModule({
    declarations: [],
    imports: [
        SharedCommonModule,
        SharedLibsModule
    ],
    exports: [ SharedCommonModule ]
})
export class SharedModule {
    static forRoot() {
        return { ngModule: SharedModule };
    }
}
