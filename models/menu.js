module.exports = function(sequelize, DataTypes) {
    var menu_item = sequelize.define("menu_item", {
        venue_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        vendor_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        item_name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 140]
            }
        },
        item_price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: true,
            validate: {
                isDecimal: true
            }
        },
    }, {
    timestamps: false
    });
    return menu_item;
};