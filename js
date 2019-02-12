function imageArraySlider(array, String){
    this.array = array;
    this.count = 0;
    this.next = function(){
        this.count++;
        this.count >= this.array.length ? this.count = 0 : this.count;
        document.getElementById(String).src = this.array[this.count];
    };
    this.previous = function(){
        this.count--;
        this.count < 0 ? this.count = (this.array.length - 1) : this.count;
        document.getElementById(String).src = this.array[this.count];
    };
    this.addEnd = function(item){
        this.array.push(item);
    };
    this.removeEnd = function(){
        this.array.pop();
    };
    this.addCurrent = function(item){
        this.array.splice(this.count, 0, item);
    };
    this.removeCurrent = function(){
        this.array.splice(this.count, 1);
        this.count > this.array.length ? this.count = (this.array.length - 1): this.count;
    };
}
