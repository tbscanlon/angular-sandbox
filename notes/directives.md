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
