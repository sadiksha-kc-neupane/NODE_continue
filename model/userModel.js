function Users(connection , DataTypes){
    const users = connection.define("users",{
        username : {
            type:DataTypes.STRING
        },
        
        email : {
            type : DataTypes.STRING
        }, 

        password : {
            type : DataTypes.STRING
        }

    })
    return  users
}

export default Users