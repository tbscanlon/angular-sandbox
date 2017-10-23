# Databinding

Databinding allows for communication between the business logic and templates of components.

## String Interpolation

#### **Bind Direction:** `Code --> Template`

Sends data from the component's business logic to the template.

In the template, use two sets of curly braces, followed by a component variable or method.

Example:
```HTML
<p>Welcome {{ name }}</p> 
<p>Last Login: {{ getLastLogin() }}</p>
```

## Property Binding

#### **Bind Direction:** `Template --> Code`

Defines element attribute values through component classes.

Example:
```HTML
<!-- app.component.html -->
<img [src]="companyLogo">
```

```Typescript
// app.component.ts
export class AppComponent {
    // ...

    private companyLogo = "https://cdn.company.com/images/logo.jpg";

    // ...
}
```

## Event Binding

#### **Bind Direction:** `Template --> Code`

Interacts with the component when a specified DOM event occurs.

In the template, but brackets around a DOM event and supply business logic (a method)as the attribute value.

Example:
```HTML
<button (click)="incrementCounter()">
    <span>Total clicks: {{ counter }} </span>
</button>
```

## Two-way Binding

#### **Bind Direction:** `Template <--> Code`

Combines event binding and property binding.

In the template, add the ngModel attribute to a form element and put regular and square brackets around it.

Example:
```HTML
<input type="text" [(ngModel)]="username">
```

## Advanced Databinding

Properties and events can be bound to:

- HTML Elements: native properties and events
- Directives: Custom properties and events
- Components: Custom properties and events

### `@Input`

By default, all of a component's properties are only accessible from within the component, not from outside. To allow parent components to bind to a child component's properties, use the `@Input()` decorator:

```Typescript
// app.component.ts
export class AppComponent {
    @Input() product: { name: string, description: string };
}
```

```HTML
<!-- app.component.html -->
<p> {{ name }} </p>
```

The external name for a component's property can be changed by passing an argument to the input decorator. However, it's normally considered bad practice to change the external name of a property.

### EventEmitters

Data can be passed from child components up to parent components by using EventEmitters. Event bindings can be created on the parent component that respond to the emitted event from the child.

```HTML
<!-- product.component.html -->
<form #productCreationInput>
    <!-- form contents -->
</form>

<button (click)="onAddProduct(productCreationInput)">Create Product</button>
```

```Typescript
// product.component.ts

export class ProductComponent {
    @Output() productCreated = new EventEmitter<{ name: string, description: string, price: number }>();

    // ...

    onAddProduct(name: string, description: string, price: number) {
        this.productCreated.emit({
            name: name,
            description: description,
            price: price
        });
    }
}
```

```HTML
<!-- app.component.html -->
<app-product (productCreated)="onProductAdded($event)"></app-product>
```

```Typescript
// app.component.ts
export class AppComponent {
    onProductAdded(productData: { name: string, description: name, price: number }) {
        this.productList.push({
            name: productData.name,
            description: productData.description,
            price: productData.price
        });
    }
}
```