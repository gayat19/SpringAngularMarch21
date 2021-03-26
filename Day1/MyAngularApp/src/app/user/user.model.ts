import { Url } from "url";

export class User{
    username:string;
    password:string;
    imgURL:Url;
    constructor(username="",password?,img?){
        this.username=username;
        this.password = password;
        this.imgURL = img;
    }
}