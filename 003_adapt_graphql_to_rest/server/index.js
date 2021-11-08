const { ApolloServer, gql } = require("apollo-server");
const axios = require('axios')

const typeDefs = gql`
  type Ticker {
    product_code: String
    state: String
    timestamp: String
    tick_id: Int
    best_bid: Int
    best_ask: Int
    best_bid_size: Float
    best_ask_size: Float
    total_bid_depth: Float
    total_ask_depth: Float
    market_bid_size: Float
    market_ask_size: Float
    ltp:Int
    volume:Float
    volume_by_product:Float
  }

  type Query {
    ticker: Ticker
  }
`;

const resolvers = {
  Query: {
    ticker: async() => {const response = await axios({
        url: 'https://api.bitflyer.com/v1/ticker',
        method: 'get',
      })
      const data = response.data;
      return data;
    }
  }
};

// サーバーを起動する
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
