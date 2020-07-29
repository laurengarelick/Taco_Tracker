module.exports = (sequelize, DataTypes) =>{
  const Tacos = sequelize.define("Taco", {
    name: DataTypes.STRING,
    cal: DataTypes.STRING,
    hasGuac: DataTypes.BOOLEAN,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Tacos
}