import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      
    }, 3000);
  }
  onToggle(event) {
    // debugger
    // $(event.currentTarget).dropdown('toggle');
    $('#sidebar').mCustomScrollbar({
      theme: 'minimal'
 });
     $('#sidebar').toggleClass('active');
     // close dropdowns
     $('.collapse.in').toggleClass('in');
     // and also adjust aria-expanded attributes we use for the open/closed arrows
     // in our CSS
     $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  }
}
