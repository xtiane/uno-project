  //const Colors = require("./colors");
  //const Values = require("./values");
  /*
    108 cards
    76x numbers (0-9, all colors)
    8x draw two (2x each color)
    8x reverse (2x each color)
    8x skip (2x each color)
    4x wild
    4x wild draw four
  */
  module.exports = function(sequelize, DataTypes) {
    const Deck = sequelize.define("Deck", {
      card: {
        type: DataTypes.STRING,
        allowNull: false
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      color: {
        type: DataTypes.STRING,
        allowNull: true
      },
      colorValue: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    });

    return Deck;
  };