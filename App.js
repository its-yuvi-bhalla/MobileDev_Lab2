import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
        Posts
      </Text>
      <View style={styles.divider}></View>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={styles.profileImage}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.username}>ootd_everyday</Text>
          <Text style={{}}>via frenchie_fry39</Text>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 30, marginLeft: 150 }}>
          ...
        </Text>
      </View>
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={styles.post}
      />
      <View style={styles.postActions}>
        <TouchableOpacity>
          <Text style={styles.actionIcon}>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.actionIcon}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.actionIcon}>➤</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("./assets/bookmark.png")}
            style={styles.bookmark}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.comments}>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={styles.commentImage}
        ></Image>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={styles.commentImage}
        ></Image>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={styles.commentImage}
        ></Image>
        <Text style={{ fontSize: 15, marginTop: 10, marginLeft: 10 }}>
          Liked by amanlotey and 69 others
        </Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.captionSection}>
        <Text style={styles.captionText}>
          <Text style={styles.commentUsername}>ootd_everyday</Text>
          <Text> Looking fresh in the new fit! ✨🔥</Text>
        </Text>
      </View>

      <View style={styles.commentSection}>
        <Text style={styles.commentText}>
          <Text style={styles.commentUsername}>amanlotey</Text> Looks amazing!
          🔥
        </Text>
        <Text style={styles.commentText}>
          <Text style={styles.commentUsername}>dev_guy</Text> Love this fit! 😍
        </Text>
        <Text style={styles.viewAllComments}>View all 12 comments</Text>
      </View>
      <TouchableOpacity
        style={styles.alertButton}
        onPress={() => Alert.alert("Alert Button pressed")}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Alert</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    display: "flex",
  },
  header: {
    flexDirection: "row", // Align items in a row
    alignItems: "center", // Center items vertically
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 10,
    backgroundColor: "white", // Space between the image and text
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Half of the width/height for a perfect circle
    borderWidth: 3,
    borderColor: "white",
    marginRight: 10,
    marginLeft: 10, // Space between the image and text
  },
  commentImage: {
    width: 30,
    height: 30,
    borderRadius: 25, // Half of the width/height for a perfect circle
    marginRight: -8,
    borderWidth: 3,
    borderColor: "white", // Space between the image and text
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  post: {
    width: "100%",
    height: "50%",
    marginTop: 10,
    borderWidth: 1,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "darkgray",
    marginTop: 10,
  },
  postActions: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "white",
    width: "100%",
  },
  actionIcon: {
    fontSize: 30,
    marginHorizontal: 10,
  },
  bookmark: {
    width: 35,
    height: 35,
    marginLeft: 180,
  },
  comments: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 10,
    backgroundColor: "white",
    width: "100%",
  },
  commentSection: {
    width: "100%",
    marginTop: 5,
    backgroundColor: "white",
    paddingLeft: 10,
  },
  commentText: {
    fontSize: 14,
    marginVertical: 3,
  },
  commentUsername: {
    fontWeight: "bold",
  },
  viewAllComments: {
    color: "gray",
    fontSize: 14,
    marginTop: 5,
  },
  caption: {
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: "red",
  },
  captionText: {
    fontSize: 14,
  },
  alertButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 20,
    width: "90%",
    borderRadius: 15,
    marginTop: 20,
  },
});
