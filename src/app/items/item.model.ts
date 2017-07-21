import {Comment} from "./comment.model";
export class Item {
    public name: string;
    public comments: Comment [];

    constructor(name: string, comments?: Comment[]) {
        this.name = name;
        this.comments = comments || [];
    }
}