import gql from 'graphql-tag'

export const CREATE_USER=gql`
    mutation CreateUser($account:String!,$password:String!){
        createUser(account:$account,password:$password){
            id
            account
            password
            updated_at
            created_at
        }
        
    }
`
