# Directives

Directives are instructions in the DOM.

Components are directives with a template.

## Structural Directives

Structural directives are directives that change the DOM.

The star before a directive indicates that it is structural.

### ngIf

Changes the DOM if it evaluates to true.

```HTML
<p *ngIf="buttonClicked">
```

### ngFor

Iterates through an array, creating an element in the DOM for each item.

```HTML
<to-do *ngFor="let item of toDoList">
```

In the example above, `toDoList` refers to a component variable.

## Attribute Directives

Directives that modify the element which they are placed on.

### ngStyle

Modifies an element's style.

```HTML
<p [ngStyle]="{color: blue}">
``` 

### ngClass

Adds a CSS class to an element if a condition or expression evaluates to true.

```HTML
<p [ngClass]="{online: isOnline()}">
<p [ngClass]="{emphasis: status === 'important'}">
```

In the examples above, the first item in the object refers to the CSS class, and the expression or condition is what gets checked to see if it evaluates to true.

## Custom Directives

Special directives with custom behaviour can be written for use cases that are more specific than what is available in Angular by default. Both attribute and structural directives can be created.

To make a directive, use the CLI:

`ng g c <directive name>`

### Creating an Attribute Directive

To create a directive that can modify an element's style, import and inject the Renderer2 library.

```Typescript
// product-highlight.directive.ts
@Directive({
    selector: "[appProductHighlight]"; // <-- Square brackets let us use the directive as an attribute in a HTML tag
})

// ...
```

```HTML
<!-- product.component.html -->
<p appProductHighlight>Featured Product</p>
```

It is recommended to always use a library such as Renderer2 over directly manipulating elements in the DOM (e.g. using `nativeElement.value` or similar) because the directives won't work in environments without any access to the DOM (service workers). Renderer2 provides an abstraction that will work in 'headless' environments.

### HostListener
A decorator that can listen and respond to DOM events on a HTML tag that a directive is attached to.

For example, a host listener can be used to modify the style of an element:

```Typescript
// product-highlight.directive.ts
export class ProductHighlightDirective {
    // ...

    @HostListener('mouseenter') mouseOverProduct(eventData: Event) {
        this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
    }
}
```

The `@HostListener` decorator takes a DOM event as an argument. A method is provided afterwards as an action to happen in response to the event. In the above example, the element the directive is bound to will become red when the mouse is moved over it.

### HostBinding
A decorator that allows the directive to bind to any property of its host HTML element.

Using a host binding, the example above can be shortened:

```Typescript
// product-highlight.directive.ts
export class ProductHighlightDirective {
    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

    // ...

    @HostListener('mouseenter') mouseOverProduct(eventData: event) {
        this.backgroundColor = red;
    }
}
```

Host binding is useful because it allows a property of a HTML element to be accessed and manipulated as a variable. 