import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SubjectModulesScreen = ({ route }) => {
  const { subjectId, subjectName } = route.params;

  // Placeholder download options
  const mockModules = [
    { id: "1", title: `${subjectName} Module 1` },
    { id: "2", title: `${subjectName} Module 2` },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Download Modules for {subjectName}</Text>

      {mockModules.map((module) => (
        <TouchableOpacity
          key={module.id}
          style={styles.downloadButton}
          onPress={() => {
            // Simulate download
            alert(`Downloading ${module.title}`);
          }}
        >
          <Text style={styles.downloadText}>{module.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  downloadButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  downloadText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SubjectModulesScreen;
