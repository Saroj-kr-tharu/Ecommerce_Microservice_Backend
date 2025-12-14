'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Cart.belongsTo(models.User, {
        foreignKey: 'userId', 
        as: 'user',
        onDelete: "CASCADE",
         onUpdate: 'CASCADE'
    });

    Cart.hasMany(models.CartItem, {
      foreignKey: "cartId",
      as: "items",
      onDelete: "CASCADE",
    });


    }
  }
  Cart.init({


      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
         references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      

  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};