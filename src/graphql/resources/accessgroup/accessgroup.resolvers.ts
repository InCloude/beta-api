import { GraphQLResolveInfo } from "graphql";
import { Transaction } from "sequelize";

import { AuthUser } from "../../../interfaces/AuthUserInterface";
import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { AccessGroupInstance } from "../../../models/AccessGroupModel";
import { handleError, throwError } from "../../../utils/utils";
import { compose } from "../../composable/composable.resolver";
import { authResolvers } from "../../composable/auth.resolver";
import { RequestedFields } from "../../ast/RequestedFields";
import { ResolverContext } from "../../../interfaces/ResolverContextInterface";

export const accessgroupResolvers = {
    AccessGroup: {

        users: (accessgroup, { first = 10, offset = 0 }, {db, requestedFields}: {db: DbConnection, requestedFields: RequestedFields}, info: GraphQLResolveInfo) => {
            return db.User
                .findAll({
                    where: {accessgroup: accessgroup.get('id')},
                    limit: first,
                    offset: offset,
                    attributes: requestedFields.getFields(info, {keep: ['id'], exclude: ['']})
                }).catch(handleError);
        }

    },

    Query: {

        accessgroups: (parent, { first = 10, offset = 0 }, context: ResolverContext, info: GraphQLResolveInfo) => {
            return context.db.AccessGroup
                .findAll({
                    limit: first,
                    offset: offset,
                    attributes: context.requestedFields.getFields(info, { keep: ['id'], exclude: ['users'] })
                }).catch(handleError);
        },

        accessgroup: (parent, { id }, context: ResolverContext, info: GraphQLResolveInfo) => {
            id = parseInt(id);
            return context.db.AccessGroup
                .findById(id, {
                    attributes: context.requestedFields.getFields(info, { keep: ['id'], exclude: ['users'] })
                })
                .then((accessgroup: AccessGroupInstance) => {
                    throwError(!accessgroup, `Access Group with id ${id} not found!`);
                    return accessgroup;
                }).catch(handleError);
        },

    },

    Mutation: {

        createAccessGroup: (parent, { input }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            return db.sequelize.transaction((t: Transaction) => {
                return db.AccessGroup
                    .create(input, { transaction: t });
            }).catch(handleError);
        },

        updateAccessGroup: (parent, { id, input }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            id = parseInt(id);
            return db.sequelize.transaction((t: Transaction) => {
                return db.AccessGroup
                    .findById(id)
                    .then((accessgroup: AccessGroupInstance) => {
                        throwError(!accessgroup, `Access Group with id ${id} not found!`);
                        return accessgroup.update(input, { transaction: t });
                    });
            }).catch(handleError);
        },

        deleteAccessGroup: (parent, { id }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            id = parseInt(id);
            return db.sequelize.transaction((t: Transaction) => {
                return db.AccessGroup
                    .findById(id)
                    .then((accessgroup: AccessGroupInstance) => {
                        throwError(!accessgroup, `Access Group with id ${id} not found!`);
                        return accessgroup.destroy({ transaction: t })
                            .then(accessgroup => !!accessgroup);
                    });
            }).catch(handleError);
        }
    }

};