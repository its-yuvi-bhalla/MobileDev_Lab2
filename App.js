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
import Icon from 'react-native-vector-icons/FontAwesome'

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
          <Text style={{}}>France, Paris</Text>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 30, marginLeft: 150,  }}>
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
        <Text style={{ fontSize: 15, marginTop: 10 }}>
          Liked by amanlotey and 69 others
        </Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.descriptionContainer}>
      <Text style={styles.idName}>ootd_everyday</Text>  
      <Text style={styles.postDescription}>A day well-spent at the park! 🌿✨</Text> 
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
  idName: {
    marginRight: 10,
    marginLeft: 10,
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    display:"inline",
  },  
  post: {
    width: "100%",
    height: "50%",
    borderWidth: 1,
  },
  descriptionContainer: {
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
    backgroundColor: "white",
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
  postDescription: {
    fontSize: 16,
    color: "black",
  },  
  bookmark: {
    marginLeft: 190,
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


});
