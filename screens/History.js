import { Colors } from '@/constants/Colors';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Image, Text } from 'react-native';
import { auth, database } from "@/FirebaseConfig";
import { ref, onValue } from 'firebase/database';

const History = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            const userRef = ref(database, "users/" + user.uid);
            onValue(userRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    setUserInfo({
                        firstName: data.firstName,   // Use firstName and lastName directly
                        lastName: data.lastName,
                        email: user.email,
                    });
                }
            });

            // Fetching history data
            const historyRef = ref(database, "users/" + user.uid + "/pestHistory");
            onValue(historyRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const historyArray = Object.values(data).sort((a, b) =>
                        new Date(b.uploadedAt) - new Date(a.uploadedAt)
                    );
                    setHistory(historyArray);
                }
            });
        }
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.historyItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.label}>Diagnosis:</Text>
                <Text style={styles.value}>{item.diagnosis}</Text>
                <Text style={styles.label}>Date:</Text>
                <Text style={styles.value}>
                    {new Date(item.uploadedAt).toLocaleDateString()}
                </Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.container}>
                {userInfo && (
                    <View style={styles.profileSection}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>
                                {userInfo.lastName.charAt(0).toUpperCase()} {/* Show first letter of the last name */}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.name}>Hi, {userInfo.lastName}</Text> {/* Display last name */}
                            <Text style={styles.email}>{userInfo.email}</Text>
                        </View>
                    </View>
                )}
                <Text style={styles.sectionTitle}>Detection History</Text>
                <FlatList
                    data={history}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    container: {
        padding: 20,
    },
    profileSection: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    avatar: {
        backgroundColor: Colors.primary,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
    },
    avatarText: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: "bold",
    },
    name: {
        fontSize: 18,
        fontWeight: "600",
    },
    email: {
        fontSize: 14,
        color: "gray",
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    historyItem: {
        borderWidth: 1,
        borderColor: Colors.ash2,
        borderRadius: 10,
        marginBottom: 15,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 180,
    },
    details: {
        padding: 10,
    },
    label: {
        fontWeight: "bold",
    },
    value: {
        marginBottom: 5,
    },
});

export default History;
