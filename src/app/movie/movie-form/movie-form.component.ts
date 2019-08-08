import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  @Output() update= new EventEmitter();

  constructor(private controlContainer: ControlContainer) { }

  get control() {
    return this.controlContainer.control;
  }

  ngOnInit() {
  }

}
