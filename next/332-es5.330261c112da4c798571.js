(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{No2f:function(n,e,t){"use strict";t.r(e),e.default='<tui-primitive-textfield\n    [invalid]="computedInvalid"\n    [focusable]="focusable"\n    [tuiTextfieldType]="inputType"\n    [disabled]="disabled"\n    [readOnly]="readOnly"\n    [iconContent]="iconContent"\n    [value]="value"\n    (valueChange)="onValueChange($event)"\n    (focusedChange)="onFocused($event)"\n>\n    <ng-content></ng-content>\n</tui-primitive-textfield>\n\n<ng-template #iconContent>\n    <tui-svg\n        tuiHintId="not_required"\n        class="icon"\n        [tuiHint]="hintContent"\n        [src]="icon"\n        (click)="togglePasswordVisibility()"\n    ></tui-svg>\n</ng-template>\n\n<ng-template #hintContent>{{hint}}</ng-template>\n'}}]);