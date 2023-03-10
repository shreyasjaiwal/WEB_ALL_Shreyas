const {UserList,MovieList}=require('./FakeData');
const _=require('lodash');
const resolvers={
    Query:{
        users:()=>{
            return UserList; 
        
        },
        user:(parent,args)=>{
              const id=args.id;
              const user=_.find(UserList,{id:Number(id)});
              return user;

        },
        movies:()=>{
            return MovieList

        },
        movie:(parent,args)=>{
            const name=args.name;
            const movie=_.find(MovieList,{name});
            return user;
        }
    },
    User:{
        favouriteMovie:()=>{
            return _.filter(MovieList,(movie)=>movie.yearOfPublication>=2000 && movie.yearOfPublication<=2010)
        }
        
    },
    Mutation:{
        createUser:(parent,args)=>{
        const user=args.input;
        const lastId=UserList[UserList.length-1].id;
        user.id=lastId+1;
        UserList.push(user)
        return user;
        },
        updateUser:(parent,args)=>{
            const id=args.input.id;
            const newUsername=args.input.newUsername;
            let userUpdated;
            UserList.forEach((user)=>{
                if(user.id==id){
                    user.username=newUsername;
                    userUpdated=user
                }
            });
            return userUpdated
            }
    },
    _
}
module.exports={resolvers};