import React, { useState } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Colors } from "@/constants/Colors";

const riceFertilizerData = {
  loamy: {
    seedling: "Use organic manure or Urea (46-0-0) lightly.",
    tillering: "Apply NPK 20-10-10 for shoot development.",
    panicle: "Use Phosphorus-rich fertilizers (10-20-20).",
    grain_filling: "Apply Potassium-based fertilizers (0-0-50).",
  },
  sandy: {
    seedling: "Increase organic compost before planting.",
    tillering: "Use slow-release NPK 15-15-15 fertilizer.",
    panicle: "Add Phosphorus (10-20-20) to improve root growth.",
    grain_filling: "Apply Potassium-based fertilizer (0-0-50).",
  },
  clay: {
    seedling: "Use compost or well-decomposed manure.",
    tillering: "Use balanced NPK 20-10-10 fertilizer.",
    panicle: "Add Phosphorus for flowering.",
    grain_filling: "Use Potassium-based fertilizer (0-0-50).",
  },
};

const Fertilizer = () => {
  const [soilType, setSoilType] = useState("loamy");
  const [cropStage, setCropStage] = useState("seedling");
  const [recommendation, setRecommendation] = useState("");

  const getFertilizerRecommendation = () => {
    const result = riceFertilizerData[soilType]?.[cropStage] || "No recommendation available.";
    setRecommendation(result);
  };

  return (
    // <SafeAreaView>
    <View style={styles.Container}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
        Select Soil Type:
      </Text>
      <Picker selectedValue={soilType} onValueChange={(itemValue) => setSoilType(itemValue)} style={styles.picker}>
        <Picker.Item label="Loamy Soil" value="loamy" />
        <Picker.Item label="Sandy Soil" value="sandy" />
        <Picker.Item label="Clay Soil" value="clay" />
      </Picker>

      <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 10 }}>
        Select Rice Growth Stage:
      </Text>
      <Picker selectedValue={cropStage} onValueChange={(itemValue) => setCropStage(itemValue)} style={styles.picker}>
        <Picker.Item label="Seedling Stage" value="seedling" />
        <Picker.Item label="Tillering Stage" value="tillering" />
        <Picker.Item label="Panicle Initiation" value="panicle" />
        <Picker.Item label="Grain Filling Stage" value="grain_filling" />
      </Picker>

      {/* <Button title="Get Recommendation" onPress={getFertilizerRecommendation} style={{backgroundColor: Colors.secondary, bors}} /> */}
      <TouchableOpacity onPress={getFertilizerRecommendation} style={styles.btn}>
        <Text style={{textAlign: "center", color: Colors.white, fontSize: 18}}>Get Recommendation</Text>
      </TouchableOpacity>

      {recommendation ? (
        <Text style={{ marginTop: 20, fontSize: 16, fontWeight: "bold", color: Colors.primary }}>
          {recommendation}
        </Text>
      ) : null}
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    Container: {
        justifyContent: "center",
        padding: 20,
        backgroundColor: Colors.white,
        height: "100%"
        
    },
    btn: {
        backgroundColor: Colors.secondary,
        padding: 10,
        borderRadius: 20,
        marginTop: 20,
    },
    picker: {
        fontSize: 16,
        padding: 10,

    }
});

export default Fertilizer;
