import {MyLinkedList } from "../implementationList"

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if(index < 0 || !this.head || index >= this.size){
    return;
  }else if( index === 0){
    this.head = this.head.next;
  }else {
    let current = this.head;

    for(let i =0 ; i< index-1; i++){
      current = current.next;
    }
    current.next = current.next?.next;
  }
  this.size--;
}