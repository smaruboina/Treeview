import {Component, OnInit, Input} from '@angular/core';
import {TreeDirectory} from "../utils/treeDirectory";

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {
  @Input() treeviewlist: Array<TreeDirectory>;

  constructor() { }

  ngOnInit() {
  }

}
