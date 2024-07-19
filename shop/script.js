// TODO Simulazione json ricevuto da woocommerce
// Identificare gli articoli comprati
// Stato del pagamento
// Metodo di spedizione

const payload = {
    "line_items": [
    {
      "id": 2593,
      "name": "Supporto bruciatore tripla corona venturo cucina gas Smeg",
      "product_id": 626,
      "variation_id": 0,
      "quantity": 1,
      "tax_class": "",
      "subtotal": "1590",
      "subtotal_tax": "0",
      "total": "1590",
      "total_tax": "0",
      "taxes": [],
      "meta_data": [],
      "sku": "5e519142e647469316de29c",
      "price": 1590,
      "stock_quantity": 0,
    },
    {
      "id": 2093,
      "name": "5 SACCHETTI ASPIRAPOLVERE BIDONE ASPIRATUTTO AQUAVAC - NS 264",
      "product_id": 621,
      "variation_id": 0,
      "quantity": 1,
      "tax_class": "",
      "subtotal": "625",
      "subtotal_tax": "0",
      "total": "625",
      "total_tax": "0",
      "taxes": [],
      "meta_data": [],
      "sku": "5e519da42e647439316de29c",
      "price": 625,
      "stock_quantity": 5,
    },
    {
      "id": 3093,
      "name": "5 SACCHETTI ASPIRAPOLVERE CARREFOUR BVC 2000 - NS 240",
      "product_id": 624,
      "variation_id": 0,
      "quantity": 2,
      "tax_class": "",
      "subtotal": "390",
      "subtotal_tax": "0",
      "total": "780",
      "total_tax": "0",
      "taxes": [],
      "meta_data": [],
      "sku": "5e519da42e647469346de29c",
      "price": 390,
      "stock_quantity": 4,
    },
    {
      "id": 6093,
      "name": "FOLLETTO SPAZZOLA HD35 PER ASPIRAPOLVERE VK135 VK136 VK140 VK150 - COMPATIBILE",
      "product_id": 694,
      "variation_id": 0,
      "quantity": 2,
      "tax_class": "",
      "subtotal": "3260",
      "subtotal_tax": "0",
      "total": "3260",
      "total_tax": "0",
      "taxes": [],
      "meta_data": [],
      "sku": "5e519da42e647469346de29c",
      "price": 3260,
      "stock_quantity": 1,
    }
  ],
  "order_key": "wc_order_Q6tuhq12KJOel",
  "status": "completed",
  "payment_method": "stripe",
  "shipping_lines": [
    {
      "method_id": "gls",
      "method_title": "GLS",
      "total": "10.00"
    }
  ],
  "coupon_lines": [
    {
      "code": "10off",
      "discount_type": "percent",
      "amount": "10",
      "individual_use": true,
      "exclude_sale_items": true,
      "minimum_amount": "100.00"
    }
  ]
}

const products = payload.line_items
// Controllo se l'articolo è esaurito e stampare un messagio
function checkQuantity (product) { 
    if (!product.stock_quantity) {
      //console.log(`L'articolo ${product.name} è esaurito`)
      return false
    } else if (product.quantity > product.stock_quantity) {
      //console.log(`Ci sono soltanto ${product.stock_quantity}`)
      return false
    }

    return true
}

function paymentGateway () {
  // Simulazione del pagamento stripe
  setTimeout(( ) => {
    console.log("Pagamento è avvenuto con successo")
  },
  3000
)

}

function mainService () {
    console.log("Avvio Programma")
    const paymentPayload = []
// TODO Stampare il numero totale degli articoli
    let articleTotal = 0
    
    products.forEach(product => {
       // articleTotal = articleTotal + product.quantity
        if (checkQuantity(product)) {
          articleTotal += product.quantity
          paymentPayload.push(product)
        } else {
          console.log(`L'articolo ${product.name} è esaurito`)
        }
    })
    console.log(`Articoli acquistati ${articleTotal}`)
    console.log(paymentPayload)

    
    //console.log(products[2].name)

// Sommare il totale da pagare (considerando il coupon)
// Identificare il metodo di pagamento
// Spedire gli articoli (se il pagamento è andato a buon fine)
}

mainService()