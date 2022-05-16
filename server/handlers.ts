import { graphql } from 'msw';
import { Product, ProductsState } from '@domain/products.dto';
import shuffleArray from './utils';
import products from './mocks';

const raw = shuffleArray<Product>([...products, ...products]).map(
  (product, index) => ({
    ...product,
    id: index,
  }),
);

type GetProductsQuery = ProductsState;

interface GetProductsQueryVariables {
  limit: number;
  start: number;
  category?: string[];
  priceRange?: string;
}

const handlers = [
  graphql.query<GetProductsQuery, GetProductsQueryVariables>(
    'GetProducts',
    (req, res, ctx) => {
      const { limit, start, category, priceRange } = req.variables;

      let data = raw;

      const featured = raw.find((product) => product.featured)!;

      if (category && category?.length > 0) {
        data = raw.filter((product) => category.includes(product.category));
      }

      if (priceRange) {
        // eslint-disable-next-line @typescript-eslint/no-implied-eval
        const filterCallback = new Function('price', `return ${priceRange}`);
        data = raw.filter(({ price }) => filterCallback(price));
      }

      return res(
        ctx.data({
          totalCount: data.length,
          featured,
          products: data.slice(start, start + limit),
        }),
      );
    },
  ),
];

export type { GetProductsQueryVariables };
export default handlers;
