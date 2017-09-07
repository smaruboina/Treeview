import { Component } from '@angular/core';
import { TreeDirectory } from "./utils/treeDirectory";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  treeviewlist: any;
  constructor() {
    let list1 = new TreeDirectory('Apple',[],['Tablets','iPhones','Macbook']);
    let list2 = new TreeDirectory('Samsung',[],['Laptops','Mobiles','Chargers']);
    let list3 = new TreeDirectory('Gadgets',[list1,list2],[]);
    let list4 = new TreeDirectory('Frameworks',[],['Angular2','Bootstrap','jQuery']);
    let list5 = new TreeDirectory('Courses',[list4],[]);
    this.treeviewlist = [list3,list5];
  }
}
