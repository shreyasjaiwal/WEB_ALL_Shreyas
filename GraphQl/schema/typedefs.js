const { gql } = require('apollo-server')
const typeDefs = gql`
type User{
id:ID!
name:String!
username:String!
age:Int!
nationality:Nationality!
friends:[User]
favouriteMovie:[Movie]

}
type Movie{
id:ID!
name:String!
yearOfPublication:Int!
isInTheaters:Boolean!
}
   type Query {
     users:[User!]!
     user(id:ID!):User!
     movies:[Movie!]!
     movie(name:String!):Movie!
}
input createUserInput{
name:String!
username:String!
age:Int!
nationality:Nationality=BRAZIL
}
type Mutation{
createUser(input:createUserInput!):User!

}
enum Nationality{
CANADA
BRAZIL
INDIA
GERMANY
CHILE
}
`
module.exports = { typeDefs }