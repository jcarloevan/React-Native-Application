npimport { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/task'

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Carlo's Tasks</Text>
        <StatusBar style="auto" />

        <View style={styles.items}>
        {/*--------TASKS---------- */}
        <Task text={'Place Holder 1'}></Task>
        <Task text={'Place Holder 2'}></Task>
        <Task text={'Place Holder 3'}></Task>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82b6ba',
    alignItems: 'center',
    paddingTop: 80
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  taskWrapper:{
    paddingTop: 20,
    paddingHorizontal: 'bold',
    marginBottom: 10,
  },
  items: {
    paddingTop: 20,
  }
});
