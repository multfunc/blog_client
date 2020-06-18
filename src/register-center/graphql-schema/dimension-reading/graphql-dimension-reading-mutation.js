import gql from 'graphql-tag'

export const CREATE_DIMENSION_READING = gql`
    mutation CreateDimensionReading($name:String!,$author:String!,$content:String!,$location:String!,$category:String!){
        createDimensionReading(name:$name,author:$author,content:$content,location:$location,category:$category){
            id
            name
            author
            content
            location
            category
            created_at
            updated_at
        }
    }
`
