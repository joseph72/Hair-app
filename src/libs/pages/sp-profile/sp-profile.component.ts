import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sp-profile',
  templateUrl: './sp-profile.component.html',
  styleUrls: ['./sp-profile.component.scss']
})
export class SpProfileComponent implements OnInit {

  isVisible = false;
  confirm= false;
  constructor() { }

  options = 0;
  ngOnInit(): void {
  }
  switchOption(value: number) {
    this.options = value;
  }

  showModal(): void {
    this.isVisible = true;
  }
  showConfirm(): void {
    this.confirm = true;
    this.isVisible = false;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    this.confirm= false
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }



}
