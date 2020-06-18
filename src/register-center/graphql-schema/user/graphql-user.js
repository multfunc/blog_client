import gql from 'graphql-tag'

export const QUERY_AUTHORIZATION_USER_LOGIN=gql`
    query AuthorizationUserLogin($account:String!,$en_password:String!){
        authorizationUserLogin(account:$account,en_password:$en_password){
            id
            account
            password
            updated_at
            created_at
        }
    }
`

