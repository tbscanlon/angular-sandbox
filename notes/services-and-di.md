# Services and Dependency Injection

A service is a centralised store for re-usable pieces of functionality. For example, a service could be created for logging data to the browser console, or making generic API requests. These could then be used by any component that needs to output data or make API calls without having to duplicate code.

Services are useful for:
- Avoiding duplicate code
- Implementing functionality that could be used by many components
- Anticipating change

## Injceting a Service as a Dependency

Services can be injected into components for use. There are three necessary steps:
1. Import the service
2. Add the name of the service to the `providers` property of the `@Component` decorator.
3. Declare the service in the constructor's arguments.

```Typescript
// gallery.component.ts

@Component({
    selector: 'app-gallery',
    templateUrl: './app.gallery.html',
    styleurl: ['./app.gallery.css'],
    providers: [ImageApiService]
})

export class GalleryComponent {

    constructor(imageApiService: ImageApiService) {}

    // ...

    private fetchImages() {
        this.imageApiService.fetch()
    }
}
```

Services can be manually created and initialised within a component, but it is considered bad practice to do so.

## Hierarchical Injector

Services injected into Angular module or component have a hierarchy. Single instances of a service are available to a component and *all of its children*. Depending on where a service is injected its scope can vary:

| Location | Scope
| --------- | -----
| `AppModule` | Same instance of a service is available **application-wide**
| `AppComponent` | Same instance of a service is available for all components (but not for other services)
| Any other Component | Same instance of a service is available for the component and its children

The hierarchy can be overwritten by declaring the service in the child component's `provider` property. If a service is to be shared (e.g. for data storage) then make sure that it is declared as a provider only in the highest level component.

## Injecting a Service into Another Service

Servuces can also be injected into each other, but the process is different compared to components. There is no `@Component` to add an entry to the `providers` to, so instead another decorator is used.

In the service you want to inject into, add the `@Injectable` decorator. Then, in app.module.ts, `import` the service and add it as a provider.

```Typescript
// image-api.service.ts
import { LoggingService } from './logging.service';

@Injectable()
export class ImageApiService {
    
    constructor(private loggingService: LoggingService) {}
}
```

```Typescript
// app.module.ts
import { LoggingService } from './logging.service';
import { ImageApiService } from './image-api.service';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ImageApiService, LoggingService],
  bootstrap: [AppComponent]
})
```
