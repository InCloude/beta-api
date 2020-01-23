const userTypes = `

    # User definition type
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        photo: String
        createdAt: String!
        updatedAt: String!
        accessgroup: AccessGroup
        active: Boolean
    }

    input UserCreateInput {
        name: String!
        email: String!
        password: String!
        accessgroup: Int
    }

    input UserUpdateInput {
        name: String!
        email: String!
        photo: String
        accessgroup: Int
        active: Boolean!
    }

    input UserUpdatePasswordInput {
        password: String!
    }

`;

const userQueries = `
    users(first: Int, offset: Int): [ User! ]!
    user(id: ID!): User
    currentUser: User
`;

const userMutations = `
    createUser(input: UserCreateInput!): User
    updateUser(input: UserUpdateInput!): User
    updateUserPassword(input: UserUpdatePasswordInput!): Boolean
    deleteUser: Boolean
`;

export {
    userTypes,
    userQueries,
    userMutations
}