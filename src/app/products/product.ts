export class Product{

    productname : String;
    weight : Number;
    rate : Number;
    taxableamount : Number;

   constructor( productname: string ,  weight: number, rate: number, taxableamount: number){
        this.productname = productname;
        this.weight = weight;
        this.rate = rate;
        this.taxableamount = taxableamount; }

}