import AsyncStorage from "@react-native-community/async-storage";

export const getAccessToken = async () => {
  try {
    const value = await AsyncStorage.getItem("accessToken")
    if(value !== null) {
      console.log(value);
      return value;
    } else {
      console.log("Token not found");
      return undefined;
    }
  } catch(e) {
    console.log("Error getting access token");
  }
};

export const storeAccessToken = async (value) => {
  try {
    await AsyncStorage.setItem("accessToken", value)
  } catch (e) {
    console.log("Error storing access token")
  }
}
