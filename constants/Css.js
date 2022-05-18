import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },

    container2: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonhome:{
      marginRight:40
    },

    textPage:{
        backgroundColor: 'orange',
        padding: 20
    },
    darkbg:{
      backgroundColor:"#333"
    },
    login__msg:(text='none')=>({
      fontWeight:"bold",
      fontSize:22,
      color:"red",
      marginTop:10,
      marginBottom:15,
      display: text
    }),
    login__form:{
      width:"80%"
    },
    login__input:{
      backgroundColor:"#fff",
      fontSize:19,
      padding:7,
      marginBottom:15,
      borderRadius:20
    },
    login__button:{
      padding:12,
      backgroundColor: "#747",
      alignSelf:"center",
      borderRadius: 20,
      width:"80%",
      alignItems:"center"
    },
    login__buttonText:{
      fontWeight:"bold",
      fontSize:22,
      color:"#333",
      
    },
    login__logomarca:{
      marginBottom: 30
    },
    imagem:{
      borderRadius:30
    },
    login_botaoCad: {  
      padding:12,
      backgroundColor: "red",
      borderRadius: 15,
      marginTop:10,
      alignItems:"center",
      width:"50%",
      
      
    },
    footer:{
      width: '100%',
      height: '78%',
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'#fff'
  },
  header:{
    backgroundColor:'#09204A',
    padding: 5,
    width: '100%',
    height: '22%',
    paddingTop: 0,
    marginTop:0
},
header__img:{
    marginLeft: 'auto',
    marginRight:'auto'


},
input:{
    borderRadius: 5,
    height: 50,
    padding: 10,
    backgroundColor: '#ffff',
    borderWidth:1,
    borderColor:'black',
    width: '80%',
    marginBottom: 20,
    fontSize: 14
},
texto:{
    fontSize: 20,
    textAlign:'center'
},
textoWidth:{
    width: '80%'
},
button:{
    borderRadius: 5,
    backgroundColor: '#ff7200',
    paddingTop: 15,
    paddingRight: 30,
    paddingBottom: 15,
    paddingLeft: 30,
    
},
button__text:{
    color:'#ffff',
    fontWeight:'bold',
    fontSize: 17
},
input1: {
  width:380,
  height:50,
  margin: 12,
  borderWidth: 1,
  padding: 10,
  
},

  });

  export {css};