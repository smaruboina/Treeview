export class TreeDirectory{
  expandList = false;
  constructor(public name:string,
              public treeviewlist:Array<TreeDirectory>,
              public treeFiles:Array<string>) {
  }

  recursiveView(){
    this.expandList = !this.expandList;
  }

  getIcon(){
    if(this.expandList){
      return '-';
    }
    return '+';
  }

}
