# References

References provide a way to 'tag' particular HTML elements within a template. These tagged elements can then be manipulated by a component's business logic.

## View Encapsulation

In Angular, CSS is applied only to the specified component. Child components won't inherit styles specified by the parent, even if generic selectors are used.

View encapsulation can be turned off by setting the following in the component's metadata:

```Typescript
// app.component.ts
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css],
    encapsulation: ViewEncapsulation.None
})
```

**CSS will be applied globally across the application if view encapsulation is turned off anywhere.**

## Local References in Templates

References can be applied to a HTML template to label a specific element.

```HTML
<input type="text" #productNameInput>
```

`#productNameInput` can then be used elsewhere in the template to access the referenced element, but it can be used *only* within the template.

Data from local references can be handed to the component's business logic:

```HTML
<!-- product.component.html -->
<button (click)="onAddProduct(productNameInput)">Add Product</button>
```

```Typescript
// product.component.ts

// ...
onAddProduct(productNameInput: HTMLInputElement) {
    data.push(productNameInput.value);
}
```

## `@ViewChild`

By using the `@ViewChild` decorator, the template & DOM of a component can be directly accessed.

```HTML
<!-- product.component.html -->
<input type="text" #productNameinput>
<button (click)="onAddProduct(productNameInput)">Add Product</button>
```

```Typescript
// app.component.ts

// ...
@ViewChild('productNameInput') productNameInput: ElementRef;

onAddProduct(productNameInput) {
    data.push(productNameInput.nativeElement.value);
}
```

## Projection

Content can be projected from one component to another by using the `<ng-content>` directive.