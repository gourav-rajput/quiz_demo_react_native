import { StyleSheet, Dimensions } from "react-native";
let { width, height } = Dimensions.get('window');



const styles = StyleSheet.create({
  app_container:{
    flex: 1,
    backgroundColor: "#fff"
  },
  head_text:{
    fontSize:width/10,
    lineHeight:width/9,
    color:'#3a3a3a',
    fontWeight:'800',
    paddingTop:10,
    paddingLeft:20
  },
  option_box:{
    width:width/2 - 20,
    height:width/2 - 50,
    marginTop:15,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4,
    borderColor:'#e5e5e5',
    borderWidth:2
  },
  selected:{
    opacity: 0.09
  },
  question_panel:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop:50,
    paddingBottom:50
  },
  question_text:{
    color:'#000',
    fontSize:width/20,
  },
  question_container: {
    backgroundColor: "#e5e5e5",
    paddingLeft:10,
    paddingRight:10,
    paddingTop:15,
    paddingBottom:20
  },
  options_container:{
    flexDirection:'row', 
    flexWrap:'wrap', 
    justifyContent:'space-between'
  },
  option_text_container:{
    position:'absolute', 
    bottom:0, 
    left:0, 
    width:'100%', 
    backgroundColor:'#fff', 
    justifyContent:'center', 
    alignItems:'center', 
    height:25, 
    zIndex:1,
  },
  option_text:{
    fontSize:width/26, 
    color:'#3a3a3a'
  },
  option_image:{
    width: '100%',
    height: '100%',
    backgroundColor:'transparent'
  },
  check_button_container:{
    position:'absolute', 
    bottom:0, 
    left:0, 
    width:'100%', 
    backgroundColor:'#000', 
    justifyContent:'center', 
    alignItems:'center', 
    height:80, 
    zIndex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  check_button_text:{
    fontSize:width/18,
    fontWeight:'800',
    lineHeight:width/7,
    color:'#fff'
  },
  reset_button_container:{
    backgroundColor:'#e5e5e5', 
    justifyContent:'center', 
    alignItems:'center', 
    height:80, 
    zIndex:1,
    justifyContent:'center',
    alignItems:'center',
    height: height-200
  },
  reset_button:{
    fontSize:width/12,
    fontWeight:'700',
    lineHeight:width/5,
    color:'#fff'
  }
})

export default styles;
