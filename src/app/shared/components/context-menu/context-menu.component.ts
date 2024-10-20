import { Component, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContextMenuItem } from '../../models/context-menu.model';
import { ContextMenuService } from '../../services/context-menu.service';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit ,OnDestroy {

  private subscriptions: Subscription[] = [];
  isVisible = false;
  items: ContextMenuItem[] = [];
  x = 0;
  y = 0;

  @Output() itemClick = new EventEmitter<string>();

  constructor(
    private elementRef: ElementRef,
    private contextMenuService: ContextMenuService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.contextMenuService.showContextMenu$.subscribe(({ items, event }) => {
        this.items = items;
        this.setPosition(event);
        this.isVisible = true;
      }),

      this.contextMenuService.closeContextMenu$.subscribe(() => {
        this.isVisible = false;
      })
    );
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isVisible = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = false;
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.isVisible = false;
  }

  onItemClick(item: ContextMenuItem) {
    if (item.disabled) return;
    //console.log("Item selected from contextmenu com:" ,item.key);
   // alert(item.key);
    this.itemClick.emit(item.key);
    this.isVisible = false;
  }

  private setPosition(event: MouseEvent) {
    const menuWidth = 150;  
    const menuHeight = this.items.length * 36;  
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    this.x = event.clientX + menuWidth > windowWidth
      ? event.clientX - menuWidth
      : event.clientX;

    this.y = event.clientY + menuHeight > windowHeight
      ? event.clientY - menuHeight
      : event.clientY;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
