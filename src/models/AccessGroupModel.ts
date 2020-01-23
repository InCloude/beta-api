import * as Sequelize from 'sequelize';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface AccessGroupAttributes {
    id?: number;
    name?: string;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface AccessGroupInstance extends Sequelize.Instance<AccessGroupAttributes>, AccessGroupAttributes {
}

export interface AccessGroupModel extends BaseModelInterface, Sequelize.Model<AccessGroupInstance, AccessGroupAttributes> {}

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): AccessGroupModel => {

    const AccessGroup: AccessGroupModel = 
        sequelize.define('AccessGroup', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(128),
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        }, {
            tableName: 'access_groups'
        });

        AccessGroup.associate = (models: ModelsInterface): void => {};
        
    return AccessGroup;

};