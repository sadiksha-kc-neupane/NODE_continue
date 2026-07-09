function Product(sequelize,DataTypes){
    const product = sequelize.define('product',{
        name :{
            type: DataTypes.STRING

        },
        price:{
            type:DataTypes.INTEGER

        },
        Qty:{
            type:DataTypes.INTEGER

        },
        description:{
            type:DataTypes.STRING

        }

    })
    return product
    

}
export default Product