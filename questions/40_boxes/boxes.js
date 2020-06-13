//YOUR CODE HERE

class Box {
    constructor(color, capacity) {
        this.color = color;
        this.capacity = capacity;
        this.contents = [];
    }

    pack(color, cap) {

        if( this.contents.length + 1 > this.capacity) {
            throw new Error;
        }

            let box = new Box(color, cap);

            this.contents.push(box);
        
    }

    unpack() {
        let colors = [];

        for (let i = 0 ; i < this.contents.length; i++) {
            let box = this.contents[i];

            if(box.contents.length == 0) {
                colors.push(box.color);
            }
            else {
                colors.push(box.color);
                for (let i = 0; i < box.contents.length; ++i) {
                    colors.push(...box.unpack())
                }
            }
        }

        return colors;
    }
}

module.exports = { Box };
