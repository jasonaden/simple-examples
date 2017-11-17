import { Component, OnInit, OnDestroy, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit, DoCheck, OnChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html'
})
export class LifecycleHooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  logs: {hook: string, description: string}[] = [];

  constructor() { }

  clearLog() {
    this.logs.length = 0;
    console.clear();
  }
  checkValues() {
    // this doesn't need to do anything. Just here to get Angular to think we did something
  }
  log(hook: string, description: string) {
    console.log(hook, description);
    this.logs.push({hook, description});
  }
  ngOnChanges() {
    this.log('ngOnChanges', 'Respond when Angular (re)sets data-bound input properties.');
  }
  ngOnInit() {
    this.log('ngOnInit', 'Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component\'s input properties. Called only once.');
  }
  ngDoCheck() {
    this.log('ngDoCheck', `Detect and act upon changes that Angular can't or won't detect on its own.`);
  }
  ngAfterContentInit() {
    this.log('ngAfterContentInit', `Respond after Angular projects external content into the component's view.`);
  }
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked', `Respond after Angular checks the content projected into the component.`);
  }
  ngAfterViewInit() {
    this.log('ngAfterViewInit', `Respond after Angular initializes the component's views and child views.`);
  }
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked', `Respond after Angular checks the component's views and child views.`);
  }
  ngOnDestroy() {
    this.log('ngOnDestroy', `Cleanup just before Angular destroys the directive/component.`);
  }

}
