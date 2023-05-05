import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  pacientes = ['Paciente 1', 'Paciente 2', 'Paciente 3', 'Paciente 4', 'Paciente 5', 'Paciente 6'];
}
