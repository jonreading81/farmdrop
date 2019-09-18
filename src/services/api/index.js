import { GraphQLClient } from 'graphql-request';
import productSearch from './queries/product-search';

const apiFactory = endpoint => {
  const graphQlClient = new GraphQLClient(endpoint, { headers: {} });
  return {
    getProducts: () => {
      return graphQlClient.request(productSearch);
    }
  }
};

export default apiFactory;

