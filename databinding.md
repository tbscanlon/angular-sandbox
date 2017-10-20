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