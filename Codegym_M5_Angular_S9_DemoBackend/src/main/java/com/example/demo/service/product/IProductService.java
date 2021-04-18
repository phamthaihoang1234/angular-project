package com.example.demo.service.product;

import com.example.demo.model.Product;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    Iterable<Product> findAll();
    Optional<Product> findById(Long id);
    Product save (Product product);
    void remove (Long id);

    List<Product> findAll(int page, int size);
}
