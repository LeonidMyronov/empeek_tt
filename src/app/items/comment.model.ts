export class Comment {
    public name: string;
    public color: string;
    public comment: string;

    constructor(comment: string ) {
        this.name = this.getRandomName();
        this.color = this.getRandomColor();
        this.comment = comment;
    }

    getRandomName() {
        return 'user' + (Math.random() * 1000 ^ 0);
    }

    getRandomColor() {
        return ['red', 'blue', 'gray', 'green', 'yellow', 'orange', 'black', 'brown'][(Math.random() * 8 ^ 0)];
    }
}