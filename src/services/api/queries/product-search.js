const query = `{
  productSearch(query: "Lamb Roasting Joints", first: 100) {
    nodes {
      name
      producer {
        name
      }
      measurement {
        displayName
      }
      tags(type: "marketing") {
        name
      }
      pricePerUnit
      media {
        type
        url
        position
      }
      variants {
        pricePerUnit
        measurement {
          displayName
        }
      }
      saleText
      price {
        pence
      }
      salePrice {
        pence
      }
    }
  }
}`;

export default query;