# Components
Components are **discrete pieces of a UI** in Angular. They all have their own:
- Template (HTML)
- Styling (CSS)
- Business Logic (Typescript)

## Structure of a Component

```Typescript
// example.component.ts
// --------------------

// Import Statements
import { Component } from '@angular/core'; // allows use of Angular's functionality

// Decorator
// Marks class as Angular component and provides metadata
@Component({
    selector: 'app-exmaple', // the name used in HTML tags to refer to the component
    templateUrl: './example.component.html', // the template used by the component
    styleUrl: './example.component.css' // the stylesheet used by the component
})

// Component class - angular components are regular TS classes
export class ExampleComponent { // Classes need to be exported to be used elsewhere by Angular
    serverId = 10;
    serverStatus = 'offline';

    constructor() {
        this.determineInitialState();
    }

    private determineInitialState(): void {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
}
```

**Angular does not scan for components by default. Any created components must be added to the declarations array in `app.module.ts`.**

## Creating a New Component
`ng g c <component name>` will create a new folder with the following contents:

```
name.component.ts
name.component.css
name.component.html
name.component.spec.ts
```

## Component Decorators

Inline styles can be used by changing the `styleURL` property within a component's decorator. Change it to `style` then type the CSS into the decorator inline using backticks.

The same can be done for a template by changing `templateURL` to `template`.

### Selectors

By default, the `selector` decorator corresponds to the HTML tag used to reference the component within the project's HTML files. For example, the component above could be inserted into a page by using:

```HTML 
<app-example>
    hello!
</app-example>
```

This behaviour can be changed to correspond to a HTML attribute of a different tag (e.g. `<div app-example>`) by enclosing the selector name around square brackets:

```Typescript
// example.component.ts
// --------------------

@Component({
    selector: '[app-exmaple]', // <--- changed here
    templateUrl: './example.component.html',
    styleUrl: './example.component.css'
})
```

Furthermore, this behaviour can be changed to correspond to a class as well:

```Typescript
// example.component.ts
// --------------------

@Component({
    selector: '.app-exmaple', // <--- changed here
    templateUrl: './example.component.html',
    styleUrl: './example.component.css'
})
```

**Selection by ID is not supported by Angular.**
