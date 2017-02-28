module.exports = function(sequelize, DataTypes) {
    var vendor = sequelize.define("vendor", {
        vendor_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        }
    },
    {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                vendor.belongsTo(models.venue, {
                    foreignKey: {
                        allowNull: false
                    }
                }),
                vendor.hasMany(models.menu_item, {
                    onDelete: "cascade"
                });
            }
        }
    });
    return vendor;
};