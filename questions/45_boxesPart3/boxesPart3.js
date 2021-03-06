class Box {
  //Solution code for Boxes and Boxes part 2
  constructor(color, capacity) {
    this.color = color;
    this.capacity = capacity;
    this.contents = [];
  }
  pack(col, cap) {
    if (this.contents.length !== this.capacity) {
      this.contents.push(new Box(col, cap));
    } else {
      throw new Error('Capacity Met!');
    }
  }
  unpack() {
    const result = [];
    if (!this.contents.length) {
      result.push(this.color);
    } else {
      result.push(this.color);
      for (let i = 0; i < this.contents.length; i++) {
        result.push(...this.contents[i].unpack());
      }
    }
    return result;
  }
  
  movingVan(dur) {
    if (typeof dur !== 'number') {
      throw new Error('Duration must be a number!')
    }
    setTimeout(() => {
      return this.unpack();
    }, dur)
  }
}

module.exports = { Box };
