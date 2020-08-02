import { Pipe, PipeTransform, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'especialidade'
})
export class EspecialidadePipe implements PipeTransform {
  constructor(private renderer: Renderer2, private domSanitizer: DomSanitizer) {}

  transform(value: string, ...args: unknown[]): unknown {
    let html: string = '';
    const especialidades: Array<string> = value.split(',').map((item) => item.trim());

    especialidades.forEach((especialidade) => {
      const span: HTMLSpanElement = this.renderer.createElement('span');
      const text = this.renderer.createText(especialidade);
      this.renderer.appendChild(span, text);
      this.renderer.addClass(span, 'item');

      html += span.outerHTML;
    });

    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }
}
