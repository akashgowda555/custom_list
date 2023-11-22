import React from "react";
import {
  LayoutProvider,
  DataProvider,
  RecyclerListView
} from "recyclerlistview";
import { View, Text, Image } from "react-native";


const layout =  require('./layouts.json'); 
const { contentStrip4x3 } = layout
const {header, slots, strip} = contentStrip4x3
const {text, secondaryText, poster} = slots



export const Strip = () => {
    
    const Header = () => {
        return (
            <View style={{height: header.height, width: "100%", marginBottom: header.marginBottom}}><Text style={{height: header.height, fontSize: header.fontSize, color:"white"}}>STRIP HEADER</Text></View>
        )
    }


    const dataa = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 }
    ];
    const dpp = new DataProvider((r1, r2) => r1.id !== r2.id).cloneWithRows(
      dataa
    );
    const lpp = new LayoutProvider(
      (index) => {
        const item = dpp.getDataForIndex(index);
        return item.id;
      },
      (_type, dim) => {
        dim.width = strip.width;
        dim.height = strip.height;
      }
    );
    const renderRow = () => {
      return (
        <View
          style={{
            width: strip.width,
            height: strip.height,
            // borderColor: "red",
            // borderWidth: 1,
            paddingHorizontal: 20,
          }}
        >
          <View
            testID={"hello"}
            style={{
              width: poster.width,
              height: poster.height,
            //   borderColor: "blue",
            //   borderWidth: 2,
              marginBottom: poster.marginBottom
            }}
          >
            <Image
              source={{
                uri: "https://random.imagecdn.app/200/300"
              }}
              style={{ width: poster.width, height: poster.height}}
            />
            <View style={{height: text.height, width:"100%", marginBottom: text.marginBottom}}><Text style={{width:"100%", fontSize: text.fontSize, justifyContent:"center", alignItems: "center", display:"flex", color:"white"}}>PRIMARY</Text></View>
            <View style={{height: secondaryText.height, width:"100%"}}><Text style={{ width:"100%", fontSize: secondaryText.fontSize, justifyContent:"center", alignItems: "center", display:"flex", color:"white"}}>secondary</Text></View>
          </View>
        </View>
      );
    };

    return (
      <View
        style={{
          height: strip.height,
          width: "100%",
        //   borderColor: "green",
        //   borderWidth: 3
        }}
      >
        <Header />
        <RecyclerListView
          dataProvider={dpp}
          isHorizontal={true}
          layoutProvider={lpp}
          rowRenderer={renderRow}
        />
      </View>
    );
  };