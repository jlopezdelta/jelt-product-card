# jelt-product-card

Este es un paquete de pruebas de despliegue en NPM

### Jose Lopez

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons } from jelt-product-card
```

```
<ProductCard 
    product={ product } 
    initialValues={{
        count: 0,
        maxCount: 10
    }}
>
    {( { count, isMaxCountReached, maxCount, inCreaseBy, reset} )=>(
            <>
            <ProductImage/>
            <ProductTitle/>
            <ProductButtons/>
            </>
    )}
</ProductCard> 
```