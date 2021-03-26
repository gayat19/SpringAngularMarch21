import { User } from "../user/user.model";

export class UserService{
    users:User[];
    constructor(){
        this.users =[];
        this.users = [
            new User("Ramu","1234","./assets/images/User1.jfif"),
            new User("Somu","4321","./assets/images/User2.jfif")
        ]
    }
    addUser(user:User){
        this.users.push(user);
    }
    updatePassword(user:User){
        var foundUser;
        // this.users.forEach(element => {
        //     if(element.username == user.username)
        //         foundUser = element;
        // });
        for (let index = 0; index < this.users.length; index++) {
            if(this.users[index].username==user.username)
                {
                    foundUser = this.users[index];
                    break;
                }
        }
        if(foundUser)//If it is not undefined
        {
            foundUser.password = user.password;
        }
    }
    deleteUser(username:string){
        let idx =-1;
        for (let index = 0; index < this.users.length; index++) {
            if(this.users[index].username==username)
                {
                    idx = index;
                    break;
                }
        }
        if(idx>=0)
            this.users.splice(idx);
    }
    getUser(username:string){
        var foundUser;

        for (let index = 0; index < this.users.length; index++) {
            if(this.users[index].username==username)
                {
                    foundUser = this.users[index];
                    break;
                }
        }
        return foundUser;
    }
    getAllUsers(){
        return this.users;
    }
    checkLogin(user:User):boolean
    {
        var myUser = this.getUser(user.username);
        if(myUser)
         {
             if(user.password == myUser.password)
                return true;
         }  
         return false; 
    }
}