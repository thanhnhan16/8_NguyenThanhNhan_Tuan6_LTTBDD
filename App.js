import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Screen_1({ navigation, route }) {
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={route.params?.image ?? require("./assets/vs_blue.png")}
          style={{ width: "301px", height: "361px" }}
        />
        <Text style={{ fontSize: "15px", marginTop: 10 }}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Image
          source={require("./assets/star.png")}
          style={{ width: 30, height: 30, marginLeft: 20 }}
        />
        <Image
          source={require("./assets/star.png")}
          style={{ width: 30, height: 30 }}
        />
        <Image
          source={require("./assets/star.png")}
          style={{ width: 30, height: 30 }}
        />
        <Image
          source={require("./assets/star.png")}
          style={{ width: 30, height: 30 }}
        />
        <Image
          source={require("./assets/star.png")}
          style={{ width: 30, height: 30 }}
        />
        <Text
          style={{
            fontSize: "15px",

            marginTop: 5,
            marginLeft: 50,
          }}
        >
          (Xem 828 đánh giá)
        </Text>
      </View>

      <Text
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginLeft: 20,
          marginTop: 10,
        }}
      >
        1.790.000 đ
      </Text>
      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
        <Text style={{ color: "red", fontSize: "15px", fontWeight: "bold" }}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <Image
          source={require("./assets/dauhoi.png")}
          style={{ width: 25, height: 25, marginLeft: 8 }}
        />
      </View>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Pressable
          style={{
            width: "326px",
            height: "36px",
            backgroundColor: "white",
            borderRadius: "10px",
            marginTop: 15,
            border: "1px solid black",
          }}
          onPress={() => navigation.navigate("Screen_2")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: "17px",
              marginTop: "2px",
            }}
          >
            4 MÀU-CHỌN MÀU
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: "326px",
            height: "36px",
            backgroundColor: "red",
            borderRadius: "10px",
            marginTop: 13,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
              marginTop: 7,
            }}
          >
            CHỌN MUA
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function Screen_2({ navigation }) {
  const [image, setImage] = React.useState(require("./assets/vs_blue.png"));
  return (
    <View style={styles.container}>
      <View style={{ flex: 3, flexDirection: "row", margin: "3px" }}>
        <Image source={image} style={{ width: "112px", height: "132px" }} />
        <Text
          style={{
            marginTop: "17px",
            marginLeft: "17px",
            fontSize: "15px",
            fontWeight: "Roboto",
          }}
        >
          Điện Thoại Vsmart Joy 3<br />
          Hàng chính hãng
        </Text>
      </View>
      <StatusBar style="auto" />

      <View style={{ flex: 9, backgroundColor: "#C4C4C4", height: 5000 }}>
        <Text style={{ fontWeight: "bold", fontSize: "18px" }}>
          Chọn một màu bên dưới:
        </Text>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Pressable
            style={{
              marginTop: "10px",
              width: "85px",
              height: "80px",
              backgroundColor: "#C5F1FB",
            }}
            onPress={() => setImage(require("./assets/vs_silver.png"))}
          ></Pressable>
          <Pressable
            style={{
              marginTop: "10px",
              width: "85px",
              height: "80px",
              backgroundColor: "#F30D0D",
            }}
            onPress={() => setImage(require("./assets/vs_red.png"))}
          ></Pressable>
          <Pressable
            style={{
              marginTop: "10px",
              width: "85px",
              height: "80px",
              backgroundColor: "#000000",
            }}
            onPress={() => setImage(require("./assets/vs_black.png"))}
          ></Pressable>
          <Pressable
            style={{
              marginTop: "10px",
              width: "85px",
              height: "80px",
              backgroundColor: "#234896",
            }}
            onPress={() => setImage(require("./assets/vs_blue.png"))}
          ></Pressable>
          <Pressable
            style={{
              width: "326px",
              height: "44px",
              backgroundColor: "#1952E2",
              borderRadius: "10px",
              marginTop: 15,
            }}
            onPress={() => {
              navigation.navigate("Screen_1", { image: image });
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: "20px",
                color: "white",
                fontWeight: "bold",
                marginTop: 7,
              }}
            >
              XONG
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen_1">
        <Stack.Screen name="Screen_1" component={Screen_1} />
        <Stack.Screen name="Screen_2" component={Screen_2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
