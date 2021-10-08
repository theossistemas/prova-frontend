import { ComponentFactoryResolver, ComponentRef, Injectable, Injector, Type, ViewContainerRef } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LazyComponentService {
    constructor(private factoryResolver: ComponentFactoryResolver, private injector: Injector) {}

    carregaComponente<Componente>(
        componente: Type<Componente>,
        container: ViewContainerRef,
        limparContainerAoCriarView = true
    ): ComponentRef<Componente> {
        if (limparContainerAoCriarView) {
            container.clear();
        }
        const factory = this.factoryResolver.resolveComponentFactory(componente);
        return container.createComponent(factory, null, this.injector);
    }
}
