import { ChangeDetectionStrategy, Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CampoValueAccessor, CUSTOM_CONTROL_CONTAINER } from '../campo-value-accessor/campo-value-accessor.component';

@Component({
    selector: 'app-campo-textarea',
    templateUrl: './campo-textarea.component.html',
    viewProviders: [CUSTOM_CONTROL_CONTAINER],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => CampoTextareaComponent),
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class CampoTextareaComponent extends CampoValueAccessor {
    @Input() rows: number = 5;
}
