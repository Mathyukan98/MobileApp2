// ProductListScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  // Add other properties of the product
}

interface ProductSortProps {
  route: {
    params: {
      sortOrder: string;
    };
  };
}

export default function ProductSort({ route }: ProductSortProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const { sortOrder } = route.params;

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products?sort=${sortOrder}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [sortOrder]);

  return (
    <View>
     
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => navigateToProductDetail(item)} />
        )}
      />
    </View>
  );
}