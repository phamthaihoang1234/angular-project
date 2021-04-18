package com.example.demo.controller;


import com.example.demo.model.Product;
import com.example.demo.model.Response;
import com.example.demo.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/products")
public class ProductController {

    private final Response response = new Response();

    @Autowired
    private IProductService iProductService;

//    @GetMapping
//    public Response getAllStudent(@RequestParam int page, @RequestParam int size) {
//        List<Product> students = iProductService.findAll(page, size);
//        response.setData(students);
//        if (students.isEmpty()) {
//            response.setStatus(1);
//            response.setMessage("Empty");
//        } else {
//            response.setStatus(1);
//            response.setMessage("Success");
//        }
//        return response;
//    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Iterable allProduct() {
        return iProductService.findAll();
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Product createProduct(@RequestBody Product product){
        return iProductService.save(product);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id){
        Optional<Product> product = iProductService.findById(id);
        if(product == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        }
        iProductService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);


    }

    @PutMapping(value = "/id" , produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Product edit(@PathVariable Long id , @RequestBody Product product){
        product.setId(id);
        return iProductService.save(product);
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Product productDetail(@PathVariable Long id){return iProductService.findById(id).get();}
}
