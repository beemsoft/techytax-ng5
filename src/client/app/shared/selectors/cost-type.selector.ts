import {Component, Output, EventEmitter, Pipe, PipeTransform, Input} from '@angular/core'
import {CostType} from "../services/import-list.service";
import {LabelService} from "../services/label.service";
import {Cost} from "../services/cost.service";

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  constructor(private labelService: LabelService) {}

  transform(value, args:string[]) : any {
    let keys = [];
    for (var enumMember in value) {
      var isValueProperty = parseInt(enumMember, 10) >= 0;
      if (isValueProperty) {
        keys.push({key: enumMember, value: this.labelService.get(value[enumMember])});
      }
    }
    return keys;
  }
}

@Component({
  selector: 'cost-type-selector',
  pipes: [KeysPipe],
  providers: [LabelService],
  template: `<div>
    <select #sel (change)="select.emit(sel.value)">
      <option *ngFor="let item of costTypes | keys" [value]="item.key" [selected]="selectedCost.costTypeId == item.key">{{item.value}}
      </option>
    </select>
  </div>`
})
export class CostTypeSelector {
  costTypes = CostType;
  @Input() selectedCost = new Cost();
  @Output() select = new EventEmitter();
}
