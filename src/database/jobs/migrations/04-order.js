module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('orders', {
			order_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
			farmer_id: {
				type: DataTypes.BIGINT,
				allowNull: false,
			},
			approved_id: {
				type: DataTypes.BIGINT,
				allowNull: true,
			},
			is_paid:{
				type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
			},
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('orders');
  },
};
