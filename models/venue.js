module.exports = function(sequelize, DataTypes) {
    var venue = sequelize.define("venue", {
        venue_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        latitude: {
            type:DataTypes.DECIMAL(10,8),
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        longitude: {
            type:DataTypes.DECIMAL(10,8),
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        sections: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rows: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        seats: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                venue.hasMany(models.vendor, {
                    onDelete: "cascade"
                });
            }
        }
    });
    return venue;
};