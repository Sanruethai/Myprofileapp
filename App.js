import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

export default function App() {
  return (
    <LinearGradient
      colors={['#D1C4E9', '#BBDEFB', '#C8E6C9']} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <BlurView intensity={80} tint="light" style={styles.card}>
          <View style={styles.imageWrapper}>
            <LinearGradient
              colors={['#FF80AB', '#82B1FF']}
              style={styles.imageBorder}
            >
              <Image
                source={require('./assets/profile.jpg')}
                style={styles.profileImage}
              />
            </LinearGradient>
          </View>
          <Text style={styles.name}>นางสาวศานต์ฤทัย สายบุตร</Text>
          <Text style={styles.detail}>รหัสนักศึกษา: 653450104-1</Text>
          <Text style={styles.detail}>สาขา: วิทยาการคอมพิวเตอร์และสารสนเทศ</Text>
          <Text style={styles.detail}>หลักสูตร: วิทยาศาสตรบัณฑิต</Text>
          <Text style={styles.detail}>มหาวิทยาลัย: มหาวิทยาลัยขอนแก่น</Text>

          <Text style={styles.sectionTitle}>ความสามารถ / สกิล</Text>
          <View style={styles.skillsContainer}>
            <LinearGradient colors={['#B2EBF2', '#80DEEA']} style={styles.skillBadge}>
              <Text style={styles.skillText}>HTML & CSS</Text>
            </LinearGradient>
            <LinearGradient colors={['#C8E6C9', '#A5D6A7']} style={styles.skillBadge}>
              <Text style={styles.skillText}>Python</Text>
            </LinearGradient>
            <LinearGradient colors={['#F0F4C3', '#E6EE9C']} style={styles.skillBadge}>
              <Text style={styles.skillText}>UX/UI Design</Text>
            </LinearGradient>
            <LinearGradient colors={['#D1C4E9', '#B39DDB']} style={styles.skillBadge}>
              <Text style={styles.skillText}>Communication</Text>
            </LinearGradient>
          </View>
        </BlurView>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  imageWrapper: {
    borderRadius: 80,
    padding: 4,
  },
  imageBorder: {
    borderRadius: 80,
    padding: 4,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333333',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  detail: {
    fontSize: 16,
    color: '#444444',
    marginBottom: 4,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#333333',
    alignSelf: 'flex-start',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  skillBadge: {
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 4,
  },
  skillText: {
    fontSize: 14,
    color: '#333333',
  },
});
