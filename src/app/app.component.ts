import { HomeComponent } from './home/home.component';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pp';
  @ViewChild('h') h!: ElementRef;
  @ViewChild('a') a!: ElementRef;
  @ViewChild('p') p!: ElementRef;
  @ViewChild('s') s!: ElementRef;
  @ViewChild('c') c!: ElementRef;
  @ViewChild('H') HH!: ElementRef;
  @ViewChild('A') AA!: ElementRef;
  @ViewChild('P') PP!: ElementRef;
  @ViewChild('S') SS!: ElementRef;
  @ViewChild('C') CC!: ElementRef;
  static A: HTMLElement;
  static H: HTMLElement;
static P :HTMLElement;
static S :HTMLElement;
static C:HTMLElement
static AAA: HTMLElement;
static HHH: HTMLElement;
static PPP :HTMLElement;
static SSS :HTMLElement;
static CCC:HTMLElement
ngAfterViewInit(): void {
    AppComponent.A = this.a.nativeElement;
    AppComponent.H = this.h.nativeElement;
    AppComponent.P=this.p.nativeElement;
    AppComponent.S=this.s.nativeElement
    AppComponent.C=this.c.nativeElement
    AppComponent.AAA = this.AA.nativeElement;
    AppComponent.HHH = this.HH.nativeElement;
    AppComponent.PPP=this.PP.nativeElement;
    AppComponent.SSS=this.SS.nativeElement
    AppComponent.CCC=this.CC.nativeElement
  }
  appComponent=AppComponent
  static selected(authorElements:HTMLAnchorElement[],element1 ?: HTMLAnchorElement,element2?:HTMLAnchorElement){
    window.scrollTo(0,0)
    element1!.classList.add('selected')
    element2!.classList.add("selected")
   for(let i =0 ; i<authorElements.length;i++){
    authorElements[i].classList.remove('selected')
   }
 }
 

static slected(name:string){
  AppComponent.A.classList.remove('selected')
  AppComponent.H.classList.remove('selected')
  AppComponent.P.classList.remove('selected')
  AppComponent.S.classList.remove('selected')
  AppComponent.C.classList.remove('selected')
  AppComponent.AAA.classList.remove('selected')
  AppComponent.HHH.classList.remove('selected')
  AppComponent.PPP.classList.remove('selected')
  AppComponent.SSS.classList.remove('selected')
  AppComponent.CCC.classList.remove('selected')

console.log(name)
  if(name=='H'){
    AppComponent.H.classList.add('selected')
    AppComponent.HHH.classList.add('selected')

    AppComponent.AAA.classList.remove("selected")
AppComponent.PPP.classList.remove('selected')
AppComponent.SSS.classList.remove('selected')
AppComponent.CCC.classList.remove('selected')
AppComponent.A.classList.remove("selected")
AppComponent.P.classList.remove('selected')
AppComponent.S.classList.remove('selected')
AppComponent.C.classList.remove('selected')

  }
  else if(name=='A'){

    AppComponent.A.classList.add('selected')
    AppComponent.AAA.classList.add('selected')

    AppComponent.HHH.classList.remove("selected")
AppComponent.PPP.classList.remove('selected')
AppComponent.SSS.classList.remove('selected')
AppComponent.CCC.classList.remove('selected')
AppComponent.H.classList.remove("selected")
AppComponent.P.classList.remove('selected')
AppComponent.S.classList.remove('selected')
AppComponent.C.classList.remove('selected')
  }
 else if(name=='P'){
  AppComponent.P.classList.add('selected')
  AppComponent.PPP.classList.add('selected')

  AppComponent.AAA.classList.remove("selected")
AppComponent.HHH.classList.remove('selected')
AppComponent.SSS.classList.remove('selected')
AppComponent.CCC.classList.remove('selected')
AppComponent.A.classList.remove("selected")
AppComponent.H.classList.remove('selected')
AppComponent.S.classList.remove('selected')
AppComponent.C.classList.remove('selected')

  }
 else if(name=='C'){
  AppComponent.C.classList.add('selected')
  AppComponent.CCC.classList.add('selected')

  AppComponent.AAA.classList.remove("selected")
AppComponent.PPP.classList.remove('selected')
AppComponent.SSS.classList.remove('selected')
AppComponent.HHH.classList.remove('selected')
AppComponent.A.classList.remove("selected")
AppComponent.P.classList.remove('selected')
AppComponent.S.classList.remove('selected')
AppComponent.H.classList.remove('selected')
  }
  else if(name=='S'){
    AppComponent.S.classList.add('selected')
    AppComponent.SSS.classList.add('selected')

    AppComponent.AAA.classList.remove("selected")
AppComponent.PPP.classList.remove('selected')
AppComponent.HHH.classList.remove('selected')
AppComponent.CCC.classList.remove('selected')
AppComponent.A.classList.remove("selected")
AppComponent.P.classList.remove('selected')
AppComponent.H.classList.remove('selected')
AppComponent.C.classList.remove('selected')
    }
    
  else{

  }
}
 toggleMenu() {
  const navMenu = document.querySelector('.nav-menu');
  if (navMenu) {
    navMenu.classList.toggle('active');
  }
}


isMenuOpen = false;

  openMenu() {
    this.isMenuOpen = true;
    document.querySelector('.side-menu')?.classList.add('open');
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.querySelector('.side-menu')?.classList.remove('open');
  }

}


