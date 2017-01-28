import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule, Router} from '@angular/router';

import { ToolbarComponent } from './toolbar/index';
import { NavbarComponent } from './navbar/index';
import {CostMatchService} from "./services/cost-match.service";
import {LabelService} from "./services/label.service";
import {ImportListService} from "./services/import-list.service";
import {CsvParseService} from "./services/csv-parse.service";
import {CostTypeSelector, KeysPipe} from "./selectors/cost-type.selector";
import {CostCharacterSelector} from "./selectors/cost-character.selector";
import {VatTypeSelector} from "./selectors/vat-type.selector";
import {BookTypeSelector} from "./selectors/book-type.selector";
import {ActivumTypeSelector} from "./selectors/activum-type.selector";
import {DisplayUserComponent} from "./display-user/display-user.component";
import {LoginComponent} from "./toolbar/login.component";

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    LoginComponent,
    ToolbarComponent,
    DisplayUserComponent,
    NavbarComponent,
    CostTypeSelector,
    VatTypeSelector,
    CostCharacterSelector,
    BookTypeSelector,
    ActivumTypeSelector,
    KeysPipe
  ],
  exports: [
    ToolbarComponent,
    DisplayUserComponent,
    NavbarComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    CostTypeSelector,
    CostCharacterSelector,
    VatTypeSelector,
    BookTypeSelector,
    ActivumTypeSelector
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CostMatchService, LabelService, ImportListService, CsvParseService]
    };
  }
}
