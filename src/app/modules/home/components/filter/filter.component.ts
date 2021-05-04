import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterOptions } from 'src/app/core/enum/filter-options.enum';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  options = Object.values(FilterOptions);
  selectedOption = FilterOptions.MaisVendidos;

  @Output() onSelectOption = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
