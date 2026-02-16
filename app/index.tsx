import Colors from "@/services/Colors";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/welcome.png")}
        style={{
          width: "100%",
          height: 250,
          marginTop: 120,
          marginBottom: 30,
        }}
      />
      <View>
        <Text style={styles.heading}>Welcome to our App</Text>
        <Text style={styles.heading}>LocalDex</Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.WHITE,
          margin: 20,
          padding: 25,
          borderRadius: 30,
        }}
      >
        <Text
          style={{
            fontFamily: "appFont",
            fontSize: 17,
            textAlign: "center",
          }}
        >
          Discover thousands of local Business all in one place
        </Text>
        <View
          style={[
            styles.button,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              gap: 10,
            },
          ]}
        >
          <Image
            source={require("../assets/images/google.png")}
            style={{
              width: 18,
              height: 18,
              // backgroundColor:'white'
            }}
          />
          <Text
            style={{
              fontFamily: "appFont",
              textAlign: "center",
              fontSize: 18,
              color: "white",
            }}
          >
            Sign in with Google
          </Text>
        </View>
        <View
          style={[
            styles.button,
            {
              backgroundColor: Colors.PRIMARY,
              borderColor: Colors.WHITE,
            },
          ]}
        >
          <Text
            style={{
              fontFamily: "appFont",
              textAlign: "center",
              fontSize: 18,
              color: "white",
            }}
          >
            Skip
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
    height: "100%",
  },
  heading: {
    fontFamily: "appFontBold",
    fontSize: 30,
    color: Colors.WHITE,
    // marginTop: 40,
    textAlign: "center",
  },
  button: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    marginTop: 10,
    backgroundColor: Colors.BLACK,
  },
});
