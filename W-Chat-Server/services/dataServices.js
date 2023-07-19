//import db
const db= require('./db')

//register
 const register= (name,number,age,gender,password)=>{
    // return db.Newuser.findOne({num}).then(
        return db.Newuser.findOne({number}).then( 
        user=>{
            if(user){
                return{
                    status:false,
                    statusCode:401,
                    message:"User already registered..."
                }
            }
            else{
                const newRegister= new db.Newuser({
                    name:name,
                    number:number,
                    age:age,
                    gender:gender,
                    password:password
                })
                newRegister.save()
                return{
                    status:true,
                    statusCode:200,
                    message:"register success"
                  }
            }
        }
    )
}


//login

const login= (number,password)=>{
    return db.Newuser.findOne({number,password}).then(
        (user)=>{
            if(user){
                currentUser=user.name;
                currentNum=number;
                userAge=user.age;
                userGender=user.gender
                userPassword=user.password


                return{
                    status:true,
                    statusCode:200,
                    message:"Login Success",
                    currentUser:user.name,
                    currentNum:number,
                    userAge:user.age,
                userGender:user.gender,
                userPassword:user.password
                }

            }
            else{
                return {
                  status:false,
                  statusCode:400,
                  message:"invalid userdetails"
              }
              
              } 
        }
    )
}

const addcontact=(name,number,city)=>{
    return db.Contact.findOne({number}).then(
        user=>{
            if(user){
                return{
                    status:false,
                    statusCode:401,
                    message:"Contact is already added"
                }
            }
            else{
                
                    const newContact = new db.Contact({
                        name:name,
                        number:number,
                        city:city,
                        lastMsg:'',
                        lastMsgRead:false,
                        messages:[
                            // {id:1, body:'Hii Macha', me:true},
                            // {id:2, body:'Parayada Mwone', time:'10:44',me:false},
                            // {id:3, body:'Onnullada PoKKOoo', time:'10:45',me:true},
                            // {id:4, body:'Oke Bri', time:'10:46',me:false},
                          ]
                    })
                    newContact.save()
                    return{
                        status:true,
                        statusCode:200,
                        message:"Contact Added Successfully"
                }
            }
        }
    )
}



//////////////////


const getcontact = ()=>{
    return db.Contact.find().then(
        (user) => {
            if (user) {
                return {
                    status: true,
                    statusCode: 200,
                    contacts : user
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 402,
                    message: 'contact already added'
                }
            }
        }
    )
}
/////////////////
const deletecont = (name)=>{
    return db.Contact.findOneAndDelete({name}).then(
        user=>{
            if(user){
                return{
                    status:true,
                    statusCode:200,
                    message:'User Deleted'
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:"User not found"
                }
            }
        }
    )
}

const editcontact=(name,number,city)=>{
    return db.Contact.findOne({number}).then(
        (user)=>{
            if(user){
                user.name = name;
                user.city = city
                user.save();
                return{
                    status:true,
                    statusCode:200,
                    message:'User updated'

                }

            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:"User not found"
                }
            }
        }
    )
}






module.exports={
    register,
    login,
    addcontact,
    getcontact,
    deletecont,
    editcontact
}