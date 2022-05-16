import AppContext from '@application/app.context';
import { ProductsState } from '@domain/products.dto';
import { Container, Divider } from '@mui/material';
import Header from '@presentation/components/bars/Header';
import ErrorWidget from '@presentation/components/ErrorWidget';
import FeaturedProduct from '@presentation/components/FeaturedProduct';
import LoadingWidget from '@presentation/components/LoadingWidget';
import ProductsGallery from '@presentation/components/ProductsGallery';
import getProducts from 'infrastructure/api/products.api';
import Head from 'next/head';
import { useContext } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import type { GetStaticProps, NextPage } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('products', async () =>
    getProducts({ limit: 6, start: 0 }),
  );

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};

const Home: NextPage = () => {
  const { setProductsState, queryVariables } = useContext(AppContext);

  const { isSuccess, isLoading, isError, error } = useQuery<
    ProductsState,
    Error
  >(['products', queryVariables], async () => getProducts(queryVariables), {
    keepPreviousData: true,
    staleTime: 5000,
    onSuccess: (data) => setProductsState(data),
  });

  let content;

  if (isSuccess) {
    content = (
      <main>
        <FeaturedProduct />
        <Divider variant="middle" sx={{ border: '4px solid #E4E4E4' }} />
        <ProductsGallery />
      </main>
    );
  }

  if (isLoading) content = <LoadingWidget />;

  if (isError) content = <ErrorWidget message={error.message} />;

  return (
    <Container component="section" fixed>
      <Head>
        <title>Bejamas Test</title>
        <meta
          name="description"
          content="Bejama's e-commerce website example."
        />
      </Head>
      <Header />
      {content}
    </Container>
  );
};

export default Home;
