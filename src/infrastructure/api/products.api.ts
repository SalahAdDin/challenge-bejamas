import { ProductsState } from '@domain/products.dto';
import { request, gql, RequestDocument, Variables } from 'graphql-request';
import { GetProductsQueryVariables } from '../../../server/handlers';
import { ProductsQuery } from './products.gql';

const API_URL = 'http://localhost:3000/';

const getProducts = async ({
  limit,
  start,
  category,
  priceRange,
}: GetProductsQueryVariables): Promise<ProductsState> => {
  const url: string = `${process.env.NEXT_PUBLIC_API_URL || API_URL}/graphql`;

  const document: RequestDocument = gql`
    ${ProductsQuery}
  `;

  const variables: Variables = {
    limit,
    start,
    category,
    priceRange,
  };

  const data = await request<ProductsState>({
    url,
    document,
    variables,
  });

  return data;
};

export default getProducts;
