import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ContextMenuItem } from '../models/context-menu.model';

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {

  private showContextMenuSubject = new Subject<{
    items: ContextMenuItem[];
    event: MouseEvent;
  }>();
  private closeContextMenuSubject = new Subject<void>();

  showContextMenu$ = this.showContextMenuSubject.asObservable();
  closeContextMenu$ = this.closeContextMenuSubject.asObservable();

  showContextMenu(items: ContextMenuItem[], event: MouseEvent) {
    event.preventDefault();
    this.showContextMenuSubject.next({ items, event });
  }

  closeContextMenu() {
    this.closeContextMenuSubject.next();
  }
} 
