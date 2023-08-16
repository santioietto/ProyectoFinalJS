class Stock{
    constructor (id, producto, precio, img, cantidad){
        this.producto = producto;
        this.precio = precio;
        this.id = id;
        this.img = img;
       

        // realice un mathround para redondear y un match ramdon que lo multiple por 100 por si en algun momento necesito el codigo exacto del producto que compro o elimino
        this.codigoproducto = Math.round(Math.random()*100);
    }


    datosproducto(){
        return "- " + this.id + " " + this.producto +  "$" + this.precio + "\n";
    }

    getPrecio(){
        return this.precio;
    }
}

// Creo array vacio para utulizarlo como carrito
let carrito = new Array();

// Creo array vacio y pusheo los datos de los productos en stock
let stock = new Array();

stock.push(new Stock(stock.length + 1, "Semillas ", 5000, "https://agroverdad.com.ar/wp-content/uploads/2022/07/ley-de-semillas-ultimo-debate.jpg"));
stock.push(new Stock(stock.length + 1, "Insecticidas ", 6000, "https://argentina.agrofystatic.com/media/catalog/product/cache/1/image/850x600/0dc2d03fe217f8c83829496872af24a0/i/n/insecticida-m-i-r-agrofy-0-20210902152444.jpg?usewebp=true"));
stock.push(new Stock(stock.length + 1, "Herbicida ", 5000, "https://www.argentinaforestal.com/wp-content/uploads/2023/06/Agrosustentable-Bioinsumos-680x450.jpg?x52833"));
stock.push(new Stock(stock.length + 1, "Deposito ", 4000, "https://www.folhadecandelaria.com.br/arquivos/noticias/full/aeb81fa85e48851dcb6f32bb827e4c2702032018150836.JPG"));
stock.push(new Stock(stock.length + 1, "Tratamiento ", 2000, "https://i0.wp.com/www.hablemosdelcampo.com/wp-content/uploads/2019/06/40814080_l.jpg?resize=1024%2C683&ssl=1"));