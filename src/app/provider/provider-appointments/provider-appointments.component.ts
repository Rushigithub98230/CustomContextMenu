import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/shared/models/appointment';
import { ContextMenuItem } from 'src/app/shared/models/context-menu.model';
import { ContextMenuService } from 'src/app/shared/services/context-menu.service';

@Component({
  selector: 'app-provider-appointments',
  templateUrl: './provider-appointments.component.html',
  styleUrls: ['./provider-appointments.component.css']
})
export class ProviderAppointmentsComponent implements OnInit {

  appointments: Appointment[] = [
    {
        id: 1,
        patientName: 'John Doe',
        patientDob: '1980-01-01',
        appointmentDate: '2023-05-15',
        appointmentType: 'Check-up',
        startTime: '09:00',
        endTime: '09:30',
        doctorName: 'Dr. Smith'
    },
    {
        id: 2,
        patientName: 'Jane Smith',
        patientDob: '1992-02-20',
        appointmentDate: '2023-05-16',
        appointmentType: 'Consultation',
        startTime: '10:00',
        endTime: '10:30',
        doctorName: 'Dr. Jones'
    },
    {
        id: 3,
        patientName: 'Michael Johnson',
        patientDob: '1975-06-15',
        appointmentDate: '2023-05-17',
        appointmentType: 'Follow-up',
        startTime: '11:00',
        endTime: '11:30',
        doctorName: 'Dr. Brown'
    },
    {
        id: 4,
        patientName: 'Emily Davis',
        patientDob: '1985-11-30',
        appointmentDate: '2023-05-18',
        appointmentType: 'Check-up',
        startTime: '12:00',
        endTime: '12:30',
        doctorName: 'Dr. Wilson'
    },
    {
        id: 5,
        patientName: 'David Lee',
        patientDob: '1990-03-22',
        appointmentDate: '2023-05-19',
        appointmentType: 'Consultation',
        startTime: '13:00',
        endTime: '13:30',
        doctorName: 'Dr. Taylor'
    },
    {
        id: 6,
        patientName: 'Sarah Wilson',
        patientDob: '1988-07-10',
        appointmentDate: '2023-05-20',
        appointmentType: 'Follow-up',
        startTime: '14:00',
        endTime: '14:30',
        doctorName: 'Dr. Martinez'
    },
    {
        id: 7,
        patientName: 'Chris Brown',
        patientDob: '1995-04-05',
        appointmentDate: '2023-05-21',
        appointmentType: 'Check-up',
        startTime: '15:00',
        endTime: '15:30',
        doctorName: 'Dr. Garcia'
    },
    {
        id: 8,
        patientName: 'Jessica Taylor',
        patientDob: '1982-09-17',
        appointmentDate: '2023-05-22',
        appointmentType: 'Consultation',
        startTime: '16:00',
        endTime: '16:30',
        doctorName: 'Dr. Anderson'
    },
    {
        id: 9,
        patientName: 'Matthew Harris',
        patientDob: '1978-12-01',
        appointmentDate: '2023-05-23',
        appointmentType: 'Follow-up',
        startTime: '17:00',
        endTime: '17:30',
        doctorName: 'Dr. Lee'
    },
    {
        id: 10,
        patientName: 'Samantha Clark',
        patientDob: '1993-10-15',
        appointmentDate: '2023-05-24',
        appointmentType: 'Check-up',
        startTime: '08:30',
        endTime: '09:00',
        doctorName: 'Dr. Taylor'
    }
];
  selectedAppointment!: Appointment;
  constructor(private contextMenuService: ContextMenuService) { }

  ngOnInit(): void {
  }

  private menuItems: ContextMenuItem[] = [
    { key: 'edit', label: 'Edit', icon: 'fas fa-edit' },
    { key: 'delete', label: 'Delete', icon: 'fas fa-trash' },
    { key: 'separator', separator: true },
    { key: 'share', label: 'Share', icon: 'fas fa-share', disabled: true }
  ];


  onContextMenu(event: MouseEvent,appointment:Appointment) {
    this.selectedAppointment= appointment;
    this.contextMenuService.showContextMenu(this.menuItems, event);
  }

  onMenuItemClick(key: string) {
   // console.log("clicked item: ", key);
    alert(key);
    switch (key) {
      case 'edit':
        console.log('Edit clicked');
        break;
      case 'delete':
        console.log('Delete clicked');
        break;
      case 'share':
        console.log('Share clicked');
        break;
    }
  }
}
