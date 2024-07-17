import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  ngOnInit(): void {}
  footerText = 'Desenvolvido por Bruno Soares';
  showFooter = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    const maxScroll = document.documentElement.scrollHeight;

    if (scrollPosition >= maxScroll) {
      this.showFooter = true;
    } else {
      this.showFooter = false;
    }
  }

}




