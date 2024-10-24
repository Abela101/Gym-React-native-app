import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Title at the top */}
      <Text style={styles.title}>Abela Gym App</Text>

      {/* Description below the title */}
      <Text style={styles.description}>
        Welcome to Abela Gym! Track your workout routines and stay motivated. 
        Select your training day to start your journey toward fitness.
      </Text>

      {/* Buttons for workout days with images */}
      <View style={styles.buttonContainer}>
        <WorkoutButton 
          title="Chest Day" 
          image={require('./assets/chest day.jpg')} 
          onPress={() => Alert.alert('Chest Day Exercises',
      `Barbell Bench Press\nIncline Dumbbell Press\nChest Flys (Cable or Machine)\nWeighted Dips\nPush-ups (Flat or Decline)\nCable Crossovers\nDumbbell Pullovers\n*These exercises target the different areas of the chest, helping build overall mass and definition by activating both upper and lower pectoral muscles`)} 
        />
        <WorkoutButton 
          title="Leg Day" 
          image={require('./assets/leg day.jpg')} 
          onPress={() => Alert.alert('Leg Day Exercises',
      `Barbell Squats\nRomanian Deadlifts\nWalking Lunges\nLeg Press\nBulgarian Split Squats\nCalf Raises (Standing or Seated)\nHamstring Curls (Machine)\n* A mix of compound lifts like squats and deadlifts with isolation exercises ensures both strength and muscle endurance`)} 
        />
        <WorkoutButton 
          title="Back Day" 
          image={require('./assets/back day.jpg')} 
          onPress={() => Alert.alert('Back Day Exercises',
      `Deadlifts\nPull-ups / Chin-ups\nBarbell Rows\nLat Pulldowns\nSeated Cable Rows\nT-Bar Rows\nFace Pulls\n*These movements engage your lats, rhomboids, and lower back for both thickness and width`)} 
        />
        <WorkoutButton 
          title="Arm Day" 
          image={require('./assets/arm day.jpg')} 
          onPress={() => Alert.alert('Arm Day Exercises',
      `Barbell Bicep Curls\nDumbbell Hammer Curls\nTricep Dips\nCable Tricep Pushdowns\nPreacher Curls\nSkull Crushers\nConcentration Curls\n*A combination of biceps and triceps exercises ensures complete arm development`)} 
        />
        <WorkoutButton 
          title="full body workout" 
          image={require('./assets/full body workout.jpg')} 
          onPress={() => Alert.alert('Full Body Day Exercises',
      `Deadlifts\nClean and Press\nFront Squats\nPush Press\nPull-ups\nKettlebell Swings\nBurpees\n*These compound movements work multiple muscle groups simultaneously, improving strength and coordination`)} 
        />
        <WorkoutButton 
          title="aerobic exersies" 
          image={require('./assets/aerobic exercises.jpg')} 
          onPress={() => Alert.alert('Aerobic Exercises',
      `Treadmill Running / Jogging\nRowing Machine\nCycling (Stationary or Road)\nJump Rope\nSwimming\nHigh-Intensity Interval Training (HIIT)\nStair Climber\n*These exercises help improve cardiovascular endurance and burn calories effectively`)} 
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Abela Gym. All Rights Reserved.</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// Reusable component for workout buttons with images
function WorkoutButton({ title, image, onPress }) {
  return (
    <TouchableOpacity style={styles.workoutButton} onPress={onPress}>
      <Image source={image} style={styles.buttonImage} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4A235A', // Correct hex color applied
    textAlign: 'center',
    marginBottom: -10,
  },
  description: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    alignItems: 'flex-start',
    gap: 15,
  },
  workoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#000',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
});
