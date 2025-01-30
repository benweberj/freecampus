import { Button, StyleSheet, Text, View } from "react-native"

export default function Home() {


  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
