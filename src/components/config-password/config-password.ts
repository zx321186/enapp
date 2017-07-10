import { Directive } from '@angular/core';

/*
  Generated class for the ConfigPassword directive.

  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[config-password]' // Attribute selector
})
export class ConfigPassword {

  constructor() {
    console.log('Hello ConfigPassword Directive');
  }

}
