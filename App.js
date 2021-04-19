import React, {useState} from 'react';
import { View, Image,Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const screens=[
  {
    key:'1',
    title:'BEM VINDO AO MUSIC APP!',
    text:'Aproveite o maximo da música em qualquer lugar e em qualquer hora!',
    Image: require('./src/assets/1.png')
  },
  {
    key:'2',
    title:'A musica está no ar!',
    text:'Tenha acesso as musicas mesmo estando offline com nosso planos premium!',
    Image: require('./src/assets/2.png')
  },
]

export default function App() {
    const [home,setHome] = useState(false)
    function renderscreens({item}){
      return(
        <View style={{flex:1,backgroundColor:'#FF9330'}}>
          <Image
          source={item.Image}
          style={{width:'100%', height:'60%'}}
          />
          <Text style={{fontSize:24, color:'#fff',textAlign:'center',fontWeight:'bold'}}>{item.title}</Text>
          <Text style={{fontSize:18, color:'#fff',textAlign:'center'}}>{item.text}</Text>


        </View>
      )
    }

    if(home){
      return <Text>Home</Text>
    }else{
      return(
        <AppIntroSlider
        renderItem={renderscreens}
        data={screens}
        activeDotStyle={{backgroundColor:'#fff', width:25}}
        renderNextButton={() => <Text>Proximo</Text>}
        renderDoneButton={() => <Text>Pronto</Text>}
        onDone={()=> alert('Home')}
        />
      )
    }
}


/*
BEM VINDO AO MUSIC APP!

Aproveite o maximo da música em qualquer lugar e em qualquer hora!

A musica está no ar!

Tenha acesso as musicas mesmo estando offline com nosso planos premium!
*/