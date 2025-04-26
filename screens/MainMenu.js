import { Colors } from "@/constants/Colors";
import React, {useState} from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Iconify from "react-native-iconify";
import { Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get('window');
const MainMenu = ({ navigation }) => {
  const [image, setImage] = useState(null);
  
  // Function to open the camera
  const takePicture = async () => {
    // Request camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Required", "Camera access is needed to take a picture.");
      return;
    }
     // Launch the camera
     let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Save the captured image URI
    }
  };

  const pickImage = async () => {
    // Ask for permission to access media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Required", "Media library access is needed to upload an image.");
      return;
    }
  
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaType.IMAGE,
    allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      setImage(result.assets[0].uri); // Save the selected image URI
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, }}>
    <View style={{ flex: 1,backgroundColor: Colors.white }}>
      {/* Header Section */}
      <View style={styles.logoContainer}>
      <Image source={require("./../app/assets/logo.png")} style={{ width: 220, height: 40, marginBottom: 10 }} />

      </View>
      
      {/* Main Menu Buttons */}
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Pest")} >
            <TouchableOpacity style={styles.iconWrapper} >
              <Image source={require('../app/assets/Worm.png')}  />
            {/* <Iconify icon="mdi:worm" width={30} height={30} /> */}
            </TouchableOpacity>
          <Text style={styles.topText}>Pest & Disease</Text>
          </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Fertilizer")}
        >
          <TouchableOpacity style={styles.iconWrapper} >
          <Image source={require('../app/assets/Fert.png')}  />
          {/* <Ic icon="mdi:leaf" width={30} height={30} /> */}
            </TouchableOpacity>

          <Text style={styles.topText}>Optimal Fertilizer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("History")}
        >
            <TouchableOpacity style={styles.iconWrapper} >
            <Image source={require('../app/assets/History.png')}  />
          {/* <Icon icon="mdi:history" width={30} height={30} /> */}
            </TouchableOpacity>

          <Text style={styles.topText}>Track History</Text>
        </TouchableOpacity>
      </View>

      {/* Heal Your Crop Section */}
      <View style={{  marginTop: 20,padding: 15}} >
        <Text style={styles.healText}>Heal your Crop</Text>
        <View style={styles.healSection}>
          <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: 'center'}}>
          <View style={styles.iconBox}>
          <Image source={require('../app/assets/Image.png')}  />
            {/* <Icon icon="mdi:camera" width={30} height={30} /> */}
            <Text>Take a picture</Text>
          </View>
          <Image source={require('../app/assets/Arrow.png')}  />
          <View style={styles.iconBox}>
            {/* <Icon icon="mdi:clipboard-check" width={30} height={30} /> */}
            <Image source={require("../app/assets/Result.png")} />
            <Text>See diagnosis</Text>
          </View>
          <Image source={require('../app/assets/Arrow.png')}  />
          <View style={styles.iconBox}>
          <Image source={require('../app/assets/Bottle.png')}  />
            {/* <Icon icon="mdi:bottle-tonic" width={30} height={30} /> */}
            <Text>Get Solution</Text>

            
          </View>
          </View>
          <TouchableOpacity style={styles.takePictureButton} onPress={takePicture}>
          <Text style={{ color:Colors.white, fontSize: 16, fontWeight:"500"}}>Take a picture</Text>
          
        </TouchableOpacity>
        <Text  onPress={pickImage} style={{ color: Colors.primary,fontSize: 12, fontWeight:"500", textAlign: "center", marginTop: 5}}>Upload from gallery</Text>
        {/* Show the captured image */}
        {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
        {/* <Button title="Upload from Gallery" onPress={pickImage} /> */}
        </View>

       
      </View>

      {/* Carousel Section */}
      <View style={styles.container}>
      <Swiper
        autoplay
        showsPagination
        dotColor= {Colors.ash1}
        activeDotColor="#000"
        height={200}
      >
        <View style={styles.slide}>
          <Image source={require('../app/assets/rice1.jpg')} style={styles.image} />
          <Text style={{position: "absolute", bottom: 10, left: 10, color: Colors.white, fontSize: 20}}>Pest</Text>
        </View>
        <View style={styles.slide}>
          <Image source={require('../app/assets/rice2.jpg')} style={styles.image} />
          <Text style={{position: "absolute", bottom: 10, left: 10, color: Colors.white, fontSize: 20}}>Nutrient deficiency</Text>
        </View>
        <View style={styles.slide}>
          <Image source={require('../app/assets/rice4.jpg')} style={styles.image} />
          <Text style={{position: "absolute", bottom: 10, left: 10, color: Colors.white, fontSize: 20}}>Bacterial diseases</Text>
        </View>
        <View style={styles.slide}>
          <Image source={require('../app/assets/rice5.jpg')} style={styles.image} />
          <Text style={{position: "absolute", bottom: 10, left: 10, color: Colors.white, fontSize: 20}}>Fungal diseases</Text>
        </View>
        <View style={styles.slide}>
          <Image source={require('../app/assets/rice6.jpg')} style={styles.image} />
          <Text style={{position: "absolute", bottom: 10, left: 10, color: Colors.white, fontSize: 20}}>Pest</Text>
        </View>
        <View style={styles.slide}>
          <Image source={require('../app/assets/rice7.png')} style={styles.image} />
          <Text style={{position: "absolute", bottom: 10, left: 10, color: Colors.white, fontSize: 20}}>Viral diseases</Text>
        </View>
      </Swiper>
    </View>

    </View>
   </SafeAreaView>
  );
};

const styles= StyleSheet.create ({
  logoContainer: {
    paddingTop: 30,
    paddingLeft: 20,
  },
  topContainer:{
    flexDirection: "row", 
    justifyContent: "space-between", 
    backgroundColor: Colors.primary,
    padding: 15, 
    paddingVertical: 40,
    // height: 200, 
    borderTopEndRadius: 20, 
    borderTopStartRadius: 20 
  },
  topText: {
    fontSize: 16,
  },
  menuItem: {
    alignItems: "start",
    backgroundColor: Colors.ash2,
    padding: 10,
    borderRadius: 10,
    width: 100,
  },
  iconWrapper: {
    backgroundColor: Colors.ash1,
    padding: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: "50%",

  },
  healSection: {
    backgroundColor: Colors.ash2,
    borderRadius: 10,
    padding: 20,
  },
  healText: {
    fontSize: 16,
    // fontWeight: "bold",
    marginBottom: 10,
  },
  iconBox: {
    alignItems: "center",
    margin: 10,
  },
  takePictureButton: {
    marginTop: 10, 
    backgroundColor: Colors.secondary,
    padding: 10,
    borderRadius: 25,
    alignItems: "center",
  },
  imagePreview: {
    marginTop: 10,
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  container: {
    marginTop: 25,
    width: width,
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  image: {
    width: width,
    height: 200,
    resizeMode: 'cover',
  },
});

export default MainMenu;
