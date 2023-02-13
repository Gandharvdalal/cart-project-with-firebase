
import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
    constructor(){
      super(); //this will call the constructor of the component class
      this.state={
          products:[
              {
                  price:99,
                  title:'Watch',
                  qty:1,
                  img:'https://media.istockphoto.com/id/577316956/es/vector/vector-de-mano-del-reloj-de-pulsera.jpg?s=612x612&w=0&k=20&c=RjJ-_xJdWJMg_R8V83sRcqvf-mNe4iZgnU-GPxKhlOc=',
                  id:1
              },
              {
                  price:999,
                  title:'Mobile Phone',
                  qty:1,
                  img:'https://media.istockphoto.com/id/1223365194/es/vector/manos-con-tel%C3%A9fonos-inteligentes.jpg?s=612x612&w=0&k=20&c=Xcn-5CVEQ4L1ef1OdsrAERKnxh4i5tY5f40ONBxRyyU=',
                  id:2,
              },
              {
                  price:69,
                  title:'Tablet',
                  qty:1,
                  img:'https://media.istockphoto.com/id/1266388738/es/foto/pantalla-en-blanco-ordenador-sobre-la-mesa-con-la-oficina-en-segundo-plano.jpg?s=612x612&w=0&k=20&c=7hcD6axxAXR8rEZhFkh8zPvSmP8Vnrpk2hbCeMMZfC0=',
                  id:4
              }
          ]
      }
      //this.increaseQuantity=this.increaseQuantity.bind(this);
  }

  handleIncreaseQuantity=(product)=>{
      const {products}=this.state;
      const index=products.indexOf(product);
      products[index].qty+=1;
      this.setState({
          products:products
      })

  }
  handleDecreaseQuantity=(product)=>{
    
      const {products}=this.state;
      const index=products.indexOf(product);
      if(products[index].qty==0){
          return ;
      }
      products[index].qty-=1;
      this.setState({
          products:products
      })
  }
  handleDeleteProduct=(id)=>{
      const {products}=this.state;
      const items=products.filter((item)=>item.id!==id);
      this.setState(
          {
              products:items
          }
      )
  }
  getCount=()=>{
    const {products}=this.state;
    let count=0;
    {
      products.map((product)=>{
        count+=product.qty;
      })
    }
    return count;
  }
  getCartTotal=()=>{
    const {products}=this.state;
    let total=0;
    {
      products.map((product)=>{
        total+=product.qty*product.price;
      })
    }
    return total;
  }
  render(){
    const {products}=this.state;
    return (
      <div className="App">
        
          <Navbar count={this.getCount()}/>
          <Cart
            products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
          />
          <div>TOTAL:{this.getCartTotal()}</div>
        
      </div>
    );
  }
}

export default App;
