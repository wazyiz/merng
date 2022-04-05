const { gql } = require('apollo-server');

module.exports = gql`
    type Post{
        id: ID!
        body: String!
        createAt: String!
        usrname: String!
    }
	type Query{
        getPosts: [Post]
	}
`;
