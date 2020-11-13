import gql from "graphql-tag";

export const QUERY_DIMENSION_READINGS = gql`
        query DimensionReadings($pageAfter:Int,$pageSize:Int,$orderBy:String,$sortBy:String,$keyword:String){
        dimensionReadings(pageAfter:$pageAfter,pageSize:$pageSize,orderBy:$orderBy,sortBy:$sortBy,keyword:$keyword){
            id
            name
            author
            location
            content
            category
            updated_at
            created_at
        }
    }
`
