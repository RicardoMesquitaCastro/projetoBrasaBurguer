import React, { Component } from 'react';
import { Text, Dimensions,  View, TextInput, TouchableOpacity, Image } from 'react-native';
var { width } = Dimensions.get("window")
import { css } from '../constants/Css';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next'


export default class Profile extends Component {

  constructor(props) {
     super(props);
     this.state = {
       id_facebook:null,
       picture:null,
       name:null,
       email:null,
       token:null
     };
  }

  render() {
    return (
      
      
      <View style={css.container}>
<Image style={{height:100,width:width/2,margin:10 }} resizeMode="contain" source={require("../assets/images/brasalogo.png")}  />
                
                <View style={css.footer}>
                    
                    <TextInput
                            style={css.input}
                            placeholder="Digite seu nome"
                            onChangeText={(text)=>setUser(text)}
                    />

                    <TextInput
                            style={css.input}
                            placeholder="Digite a senha:"
                            secureTextEntry={true} 
                            onChangeText={(text)=>setPassword(text)}// em TouchableOpacity quando o botao enviar for acionado o onPress recebe a função
                    />
                    <TextInput
                            style={css.input}
                            placeholder="Digite o email:"
                            secureTextEntry={true} 
                            onChangeText={(text)=>setPassword(text)}// em TouchableOpacity quando o botao enviar for acionado o onPress recebe a função
                    />

                    
                    <TouchableOpacity  style={{
               backgroundColor:"#ff7200",
               width:width-150,
               alignItems:'center',
               padding:10,
               borderRadius:5,
               
             }}> 
                        <Text style={css.button__text}>Enviar</Text>
                    </TouchableOpacity>
                  
                </View>
            

         {
           this.state.id_facebook?
           <View style={{justifyContent:'center'}}>
             <Image source={{uri: this.state.picture.data.url}} style={{width:200,height:200}} />
             <View style={{height:20}} />
             <Text style={{fontSize:20,fontWeight:"bold"}}>{this.state.name}</Text>
             <Text style={{fontSize:20}}>{this.state.email}</Text>
             <View style={{height:20}} />
             <Text >facebook ID</Text>
             <Text >{this.state.id_facebook}</Text>
           </View>
           :
           <TouchableOpacity 
             onPress={()=>this._authFB()}
             style={{
               backgroundColor:"#3b5998",
               width:width-40,
           alignItems:'center',
           padding:10,
           borderRadius:5
               
             }}>
             <Text style={{
                 fontSize:24,
                 fontWeight:"bold",
                 color:'white'
               }}>
               Login facebook
             </Text>
           </TouchableOpacity>
         }



      </View>
    );
  }

  _AuthFB()
  {
    const dhis = this
    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithPermissions(["public_profile","email"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );
          dhis._setDataFB()
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  }
  async _setDataFB()
  {
    // get token from facebook
    const tokenData = await AccessToken.getCurrentAccessToken().then(
      (data) => {
        return  data.accessToken.toString()
      }
    )
    // get data about profile from api graph
    const datajson = await this.apiGraphFace(tokenData)

    if (datajson.success) {
        console.log(datajson.data);
       // variable para enviar post
        const data_fb =  {
          id_facebook: datajson.data.id,
          email : datajson.data.email,
          name  : datajson.data.name,
          picture: datajson.data.picture
        }
        this.setState(data_fb);
    }
    else {
      console.log("Error get data");
    }
  }

  async apiGraphFace (token)  {

    const resface = await fetch('https://graph.facebook.com/v2.10/me?fields=id,name,email,picture.width(500)&access_token='+token)
   .then((response) => response.json())
   .then((json) => {
     const data = {
       data: json,
       success: true
     }
     return data ;
   })
   .catch((error) => {
     const data = {
       message: error,
       success: false
     }
     return data;
   })

   return resface;
 }
}
