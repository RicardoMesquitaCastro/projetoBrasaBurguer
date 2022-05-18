import React, { Component} from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions,ScrollView,TextInput} from 'react-native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { CheckBox } from 'react-native-elements';
import { css } from '../constants/Css';

var { width } = Dimensions.get("window")
// import icons
import Icon from 'react-native-vector-icons/Ionicons';



export default class Cart extends Component {

  state = {
    checked: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      dataCart:[],
    };
 }
 

 componentDidMount()
  {
    
   
    AsyncStorage.getItem('cart').then((cart)=>{
      const cartfood = JSON.parse(cart)
      if (cart !== null) {
        // We have data!!
         this.setState({dataCart:cartfood})
       
      }
      AsyncStorage.removeItem('cart').then((cart)=>{
        if (cart === false && cantd <=0) {
          //object removed
          this.setState({dataCart:cartfood})         
        }        
      })  
   })
    
    .catch((err)=>{
      alert(err)
    })
            
  }
    
  render() {
    const { setCebola } = this.state;
    const { setBacon } = this.state;
    const { setCreme} = this.state;
    const { setGeleia } = this.state;
    const { setMolhob} = this.state;
    const { setHamburguer } = this.state;
    const { setMolhop} = this.state;
    const { setOvo} = this.state;
    const { setMolhok} = this.state;
    
    return (

      <ScrollView>
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
        <Image style={{height:100,width:width/2,margin:10 }} resizeMode="contain" source={require("../assets/images/brasalogo.png")}  />
         <View style={{height:10}} />
         <Text style={{fontSize:30,fontWeight:"bold",color:"#ff7200"}}>Carrinho de compras</Text>
         <View style={{height:30}} />

         <View style={{flex:1}}>

           

             {
               this.state.dataCart.map((item,i)=>{
                 return(
                   <View style={{width:width-20,margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10}}>
                     <Image resizeMode={"contain"} style={{width:width/3,height:width/3}} source={{uri: item.food.image}} />
                     <View style={{flex:1, backgroundColor:'trangraysparent', padding:10, justifyContent:"space-between"}}>
                       <View>
                          <Text style={{fontWeight:"bold", fontSize:20}}>{item.food.name}</Text>
                         <Text style={{ fontSize:15}}>{item.food.description}</Text>
                       </View>
                       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text style={{fontWeight:'bold',color:"#ff7200",fontSize:20}}>R${item.price*item.quantity},00</Text>
                         <View style={{flexDirection:'row', alignItems:'center'}}>
                           <TouchableOpacity onPress={()=>this.onChangeQual(i,false)}>
                             <Icon name="ios-remove-circle" size={35} color={"#ff7200"} />
                           </TouchableOpacity>
                           
                           <Text style={{paddingHorizontal:8, fontWeight:'bold', fontSize:18}}>{item.quantity}</Text>
                           <TouchableOpacity onPress={()=>this.onChangeQual(i,true)}>
                             <Icon name="ios-add-circle" size={35} color={"#ff7200"} />
                           </TouchableOpacity>
                           
                             </View>
                                                   
                       </View>
                      
               
                             
                       </View>
                       
                   </View>
                   
                 )
               })
             }
             <View >
       
       <Text style={{fontSize:30,color:"#ff7200"}}>Adicionais</Text>
       
       
       <View >
       
         <CheckBox 
            title="Cebola caramelizada                                            +4,00"
            checked={setCebola } 
            onPress={() => { this.setState({ setCebola : !setCebola  }); }}
             checkedColor="#ff7200"              
          />
          <CheckBox 
            title="Bacon crocante                                                        +4,00"
            checked={setBacon } 
            onPress={() => { this.setState({ setBacon : !setBacon }); }}
             checkedColor="#ff7200"              
          />
          <CheckBox 
              title="Creme cheddar                                                          +3,00"
              checked={setCreme } 
            onPress={() => { this.setState({ setCreme : !setCreme }); }}
             checkedColor="#ff7200"              
          />
          <CheckBox 
                title="Geleia de abacaxi com pimenta                           +3,00"
                checked={setGeleia  } 
            onPress={() => { this.setState({ setGeleia  : !setGeleia  }); }}
             checkedColor="#ff7200"              
          />
          <CheckBox 
               title="Molho barbecue                                                          +1,00"
               checked={setMolhob  } 
            onPress={() => { this.setState({ setMolhob  : !setMolhob  }); }}
             checkedColor="#ff7200"              
          />
          <CheckBox 
                title="Hambúrguer bovino 180 gr                                     +8,00"
                checked={setHamburguer } 
            onPress={() => { this.setState({ setHamburguer : !setHamburguer }); }}
             checkedColor="#ff7200"              
          />
          <CheckBox 
               title="Molho picante                                                              +3,00"
               checked={setMolhop } 
            onPress={() => { this.setState({ setMolhop : !setMolhop }); }}
             checkedColor="#ff7200"              
          />
          <CheckBox 
               title="Ovo                                                                                    +2,00"
               checked={setOvo } 
            onPress={() => { this.setState({ setOvo : !setOvo }); }}
             checkedColor="#ff7200"              
          />
          <CheckBox 
               title="Molho ketchup                                                              +1,00"
               checked={setMolhok } 
            onPress={() => { this.setState({ setMolhok : !setMolhok }); }}
             checkedColor="#ff7200"              
          />
        
       
        <View  >
       <Text style={{fontSize:18,color:"#ff7200",padding:8}}>  Observações </Text>        
       <TextInput
          style={css.input1}
          placeholder="Tem observações a fazer? Informe aqui"
        //  onChangeText={(text)=>setUser(text)}
         />
         </View>
         {
               this.state.dataCart.map((item,i)=>{
                 return(
         <TouchableOpacity
          //* onPress={() => this.setModalVisible(props)}
           onPress={()=>this.onClickAddCart(item)}
           style={{
            
            backgroundColor:'#ff7200',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:"center",
            borderRadius:5,
            padding:1
          }}>
            <Text style={{fontSize:18, color:"white", fontWeight:"bold"}}>Adicionar</Text>
            <View style={{width:50}} />
            <Icon name="ios-add-circle" size={30} color={"white"} />
             </TouchableOpacity> 
               )
              })
            }
               
              
             
       </View>
       
       
       </View>

             <View style={{height:20}} />
             
             

             <TouchableOpacity style={{
                 backgroundColor:"#ff7200",
                 width:width-35,
                 height:50,
                 alignItems:'center',
                 padding:10,
                 borderRadius:5,
                 margin:20
               }}>
               <Text style={{
                   fontSize:24,
                   fontWeight:"bold",
                   color:'white'
                 }}>
                 CHECKOUT
               </Text>
             </TouchableOpacity>

             <View style={{height:20}} />
           

         </View>

      </View>
      </ScrollView>
    );
  }
///////botão adicionar pedido
  onClickAddCart(data){

    const itemcart = {
      food: data,
      quantity: 1,
      price: data.price
    }
  
    AsyncStorage.getItem('cart').then((datacart)=>{
        if (datacart !== null) {
          // We have data!!
          const cart = JSON.parse(datacart)
          cart.push(itemcart)
          AsyncStorage.setItem('cart',JSON.stringify(cart));
        }
        
      
            //  this.setState({dataCart:cartfood})}
        else {
          const cart  = []
          cart.push(itemcart)
          AsyncStorage.setItem('cart',JSON.stringify(cart));
        }
        alert("Pedido adicionado")
      })
      .catch((err)=>{
        alert(err)
      })
  }  
  ////////////////////////////////////////////////////////////////////////botão selecionar quantidade

  onChangeQual(i,type)
  {
    const dataCar = this.state.dataCart
    let cantd = dataCar[i].quantity;

    if (type) {
     cantd = cantd + 1
     dataCar[i].quantity = cantd
     this.setState({dataCart:dataCar})
    }
    else if (type==false&&cantd>=2){
     cantd = cantd - 1
     dataCar[i].quantity = cantd
      this.setState({dataCart:dataCar})
    }
    else if (type==false&&cantd==1){
     dataCar.splice(i,1)
     this.setState({dataCart:dataCar})
    } 
  }



}

