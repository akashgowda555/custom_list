import React from "react";
import {
  LayoutProvider,
  DataProvider,
  RecyclerListView
} from "recyclerlistview";
import { Strip } from "./Strip";

const layout =  require('./layouts.json'); 
const { contentStrip4x3 } = layout


function App() {
  console.log("contentStrip4x3.strip.height", contentStrip4x3.strip.height)
  const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 4 }];
  const dp = new DataProvider((r1, r2) => r1.id !== r2.id).cloneWithRows(data);
  const lp = new LayoutProvider(
    (index) => {
      const item = dp.getDataForIndex(index);
      return item.id;
    },
    (_type, dim) => {
      dim.width = window.innerWidth;
      dim.height = contentStrip4x3.strip.height;
    }
  );

  const renderStrip = () => {
    return <Strip/>;
  };

  return (
    <RecyclerListView
      style={{
        flex: 1,
        backgroundColor:"black",
        // borderColor: "blue",
        // borderWidth: 1,
        paddingVertical: contentStrip4x3.strip.paddingVertical
      }}
      dataProvider={dp}
      layoutProvider={lp}
      rowRenderer={renderStrip}
      showsScrollIndicator={false}
    />
  );
}

export default App;
