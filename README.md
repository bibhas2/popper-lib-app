# Introduction
Popper is a collection of Angular components:

- Popup menu such as tooltip
- Modal dialog
- Progress indicator

These components are created with only a few lines of code and meant to be as useful and lightweight as possible.

# Using Popper Library

Install Popper in your Angular project

```
npm install @bibhas/popper-lib --save
```

Import ``PopperLibModule`` from your ``AppModule``.

```javascript
import { PopperLibModule } from 'popper-lib';

@NgModule({
  imports: [
    PopperLibModule,
    ...
  ],
  ...
})
export class AppModule { }
```

## The Popup Menu

Selector: ``popper-menu``
Class: ``MenuComponent``

You can use this component to create a tooltip or popup menu. First define the content of the popup in your component's template.

```html
<popper-menu #menu>
Hello, this is a tooltip.
</popper-menu>
```

The ``open()`` method of ``MenuComponent`` takes a ``MouseEvent`` object. This is used to position the menu in a relevant area. Here is an example:

```html
<button (mouseenter)="menu.open($event)" (mouseleave)="menu.close()">Show Tooltip</button>
```

## Modal Dialog

Selector: ``popper-modal``
Class: ``ModalComponent``

Use this to easily create a modal dialog. You can control the width of the dialog using the ``width`` property.

```html
<popper-modal #modal width="300px">
    <p>Full name:<br/>
    <input type="text"/></p>
    <p>E-mail:<br/>
    <input type="email"/></p>
    <button (click)="modal.close()">OK</button>
</popper-modal>

<button (click)="modal.open()">Open Modal</button>
```

## Progress Indicator

Selector: ``popper-progress-indicator``
Class: ``ProgressIndicatorComponent``

Use this to show a loading indicator. All you have to do is supply your own animated GIF or SVG using the ``image`` property.

```html
<popper-progress-indicator image="/assets/loading.svg" *ngIf="showProgress"></popper-progress-indicator>
```