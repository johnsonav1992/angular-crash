import { Component, OnInit } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form = this.formBuilder.group({
    title: ['']
  })

  constructor(
    public tasksService: TasksService
    , private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.tasksService.getAllTasks()
  }

  submitForm(e: SubmitEvent) {
    e.preventDefault()
    const { value } = this.form;
    const text = value.title

    if (text) this.tasksService.addTask({ title: text })
    this.form.reset()
  }

}
