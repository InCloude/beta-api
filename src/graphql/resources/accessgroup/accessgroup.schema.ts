const accessgroupTypes = `

    # AccessGroup definition type
    type AccessGroup {
        id: ID!
        name: String!
        description: String!
        createdAt: String!
        updatedAt: String!
        users(first: Int, offset: Int): [ User! ]!

    }

    input AccessGroupCreateInput {
        name: String!
        description: String!
    }

    input AccessGroupUpdateInput {
        name: String!
        description: String!
    }
`;

const accessgroupQueries = `
    accessgroups(first: Int, offset: Int): [ AccessGroup! ]!
    accessgroup(id: ID!): AccessGroup
    currentAccessGroup: AccessGroup
`;

const accessgroupMutations = `
    createAccessGroup(input: AccessGroupCreateInput!): AccessGroup
    updateAccessGroup(id: ID!, input: AccessGroupUpdateInput!): AccessGroup
    deleteAccessGroup(id: ID!): Boolean
`;

export {
    accessgroupTypes,
    accessgroupQueries,
    accessgroupMutations
}