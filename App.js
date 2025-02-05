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
          <Icon name="heart" size={30} color="red" style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="comment-o"
            size={30}
            color="black"
            style={styles.actionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="paper-plane"
            size={30}
            color="black"
            style={styles.actionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="bookmark-o"
            size={30}
            color="black"
            style={styles.bookmark}
          />
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
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 10,
    backgroundColor: "white",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "white",
    marginRight: 10,
    marginLeft: 10,
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
    backgroundColor: "black",
    marginTop: 10,
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
  postActions: {
    flexDirection: "row",
    paddingTop: 13,
    padding: 5,
    backgroundColor: "white",
    width: "100%",
  },
  actionIcon: {
    marginHorizontal: 10,
  },
  bookmark: {
    marginLeft: 190,
  },
});
