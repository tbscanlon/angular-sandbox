import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    constructor(private elRef: ElementRef) {}

    @HostListener('click') toggleDropdown(eventData: Event) {
        this.isOpen = !this.isOpen;
    }
}
