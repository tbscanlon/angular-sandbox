# Lifecycle Hooks

Certain events within a component's 'lifecycle' can be hooked into by using the following method names:

| Method Name | Description
| ----------- | -----------
| `ngOnChanges` | Called whenever an `@Input` is changed.
| `ngOnInit` | Called when the component is initialised.
| `ngDoCheck` | Called during every change detection.
| `ngAfterContentInit` | Called after `<ng-content>` is rendered.
| `ngAfterContentChecked` | Called whenever change detection checks `<ng-content>`
| `ngAfterViewInit` | Called after component view is initialised.
| `ngAfterViewChecked` | Called whenever change detection checks the component's view.
| `ngOnDestroy` | Called just before the component is destroyed.

Angular's change detection is efficient; it only runs when there are changes made to the page, rather than constantly in the background. Despite this, it's best to avoid hooking in large pieces of logic to hooks such as `ngOnChanges` because it may deteriorate app performance.