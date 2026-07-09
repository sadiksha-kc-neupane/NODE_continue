function Blog(connection,DataTypes){
    const blog = connection.define('blog',{

        title : {
            type:DataTypes.STRING,
            unique: true
        },
        
        description : {
            type : DataTypes.STRING
        }, 

        subtitle: {
            type : DataTypes.STRING
        },

        category:{
            type : DataTypes.ENUM("politics","science","coding"),
            defaultValue : "coding"
        }
    })
    return blog
}

export default Blog

