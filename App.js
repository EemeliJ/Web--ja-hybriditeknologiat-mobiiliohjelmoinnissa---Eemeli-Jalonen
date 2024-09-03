import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const App = () => {
  const [age, setAge] = useState("");

  const calculateHeartRateLimits = () => {
    if (!age || isNaN(Number(age))) {
      alert("Please enter a valid age");
      return;
    }

    const lowerLimit = Math.round((220 - Number(age)) * 0.65);
    const upperLimit = Math.round((220 - Number(age)) * 0.85);

    alert(
      `Heart rate limits for your age:\nLower limit: ${lowerLimit}\nUpper limit: ${upperLimit}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <Button title="Calculate" onPress={calculateHeartRateLimits} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
});

export default App;
