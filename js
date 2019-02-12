function imageArraySlider(array, String) {
            this.array = array;
            this.count = 0;
            this.next = () => {
                this.count++;
                this.count >= this.array.length ? this.count = 0 : this.count;
                document.getElementById(String).src = this.array[this.count];
            };
            this.previous = () => {
                this.count--;
                this.count < 0 ? this.count = (this.array.length - 1) : this.count;
                document.getElementById(String).src = this.array[this.count];
            };
            this.addEnd = (item) => {
                this.array.push(item);
            };
            this.removeEnd = () => {
                this.array.pop();
            };
            this.addCurrent = (item) => {
                this.array.splice(this.count, 0, item);
            };
            this.removeCurrent = () => {
                this.array.splice(this.count, 1);
            };
            this.cycle = setInterval(this.next, 3000);
        }
