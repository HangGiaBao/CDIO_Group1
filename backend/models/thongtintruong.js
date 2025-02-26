const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const thongtintruonghoc = sequelize.define("thongtintruonghoc", {
    name: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    logo: { type: DataTypes.STRING }
}, { timestamps: true });

module.exports = thongtintruonghoc;
