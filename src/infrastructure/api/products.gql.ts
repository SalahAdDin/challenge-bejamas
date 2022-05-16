const TileProductContent = `
fragment TileProductContent on Product {
    id
    name
    category
    bestseller
    price
    image{
       src
       alt 
    }
}
`;

const ProductContent = `
fragment ProductContent on Product {
    id
    name
    category
    bestseller
    featured
    price
    image{
       src
       alt 
    }
    details{
        dimensions {
            width
            height
        }
        size
        description
        recommendations{
            src
            alt
        }

    }
}
`;

const ProductsQuery = `
${TileProductContent}
${ProductContent}
query GetProducts(
    $limit: Int!,
    $start: Int!, 
    $category: String, 
    $priceRange: String
    ){
        totalCount, 
        feature {
            ...ProductContent
        }
        products(
            limit: $limit, 
            start: $start, 
            category: $category,
            priceRange: $priceRange
        ) {
            ...TileProductContent
        }
}
`;

export { TileProductContent, ProductContent, ProductsQuery };
