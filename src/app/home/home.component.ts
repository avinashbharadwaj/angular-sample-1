import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public modalHeader = "Add";
  public tableData = {
    headerContent: ['Name', 'CGPA', 'City', "YOP"],
    bodyContent: [
      {
        Name: 'Avinash',
        CGPA: 8.8,
        City: 'Adoni',
        YOP: 2013
      },
      {
        Name: 'Kiran',
        CGPA: 9.2,
        City: 'Adoni',
        YOP: 2013
      }, {
        Name: 'Krishna',
        CGPA: 10,
        City: 'Banglore',
        YOP: 2013
      }, {
        Name: 'Raghava',
        CGPA: 10,
        City: 'Banglore',
        YOP: 2011
      }
    ]
  }
  public modelData = {
    Name: null,
    CGPA: null,
    City: null,
    YOP: null
  }
  public modal;
  public editIndex;
  constructor() { }

  ngOnInit(): void {
    this.closeModal();
  }
  modifyData(action, index?) {
    this.modalHeader = action;
    if (action === 'Add') {
      this.modelData = {
        Name: null,
        CGPA: null,
        City: null,
        YOP: null
      };
    } else {
      this.modelData = this.tableData.bodyContent[index];
      this.editIndex = index;
    }
    this.openModal();
  }
  deleteStudent(index) {
    this.tableData.bodyContent.splice(index, 1);
  }
  save(action) {
    if (action === 'Add') {
      this.tableData.bodyContent.push(this.modelData);
    } else if (action === 'Edit') {
      this.tableData.bodyContent[this.editIndex] = this.modelData;
    }
    this.closeModal();
  }
  openModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
}
