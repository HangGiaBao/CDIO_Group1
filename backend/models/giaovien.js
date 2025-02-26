const mongoose = require("mongoose");


const giaovien = sequelize.define("giaovien", {
    full_name: { type: DataTypes.STRING, allowNull: false },
    subject: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    photo: { type: DataTypes.STRING },
}, { timestamps: true });

module.exports = giaovien;
