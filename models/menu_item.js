module.exports = function(sequelize, DataTypes) {
    var menu_item = sequelize.define("menu_item", {
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        item_price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
    },
    {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                menu_item.belongsTo(models.vendor, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return menu_item;
};