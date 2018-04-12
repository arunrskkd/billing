export class Units{
    _id?:string;
    name:String;
    description:String;
    constructor(id,name,description){
        this._id = id;
        this.name = name;
        this.description = description;
    }
}