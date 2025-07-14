import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useAppTheme } from '../contexts/ThemeContext';

export default function ProfileScreen({ navigation }) {
  const { isDark, toggleTheme } = useAppTheme();

  return (
    <LinearGradient
      colors={isDark ? ['#212121', '#424242', '#616161'] : ['#D1C4E9', '#BBDEFB', '#C8E6C9']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <BlurView intensity={80} tint={isDark ? 'dark' : 'light'} style={styles.card}>
          <View style={styles.imageWrapper}>
            <LinearGradient colors={['#FF80AB', '#82B1FF']} style={styles.imageBorder}>
              <Image source={require('../assets/profile.jpg')} style={styles.profileImage} />
            </LinearGradient>
          </View>

          <Text style={[styles.name, { color: isDark ? '#ffffff' : '#333333' }]}>นางสาวศานต์ฤทัย สายบุตร</Text>
          <Text style={[styles.detail, { color: isDark ? '#e0e0e0' : '#444444' }]}>รหัสนักศึกษา: 653450104-1</Text>
          <Text style={[styles.detail, { color: isDark ? '#e0e0e0' : '#444444' }]}>สาขา: วิทยาการคอมพิวเตอร์และสารสนเทศ</Text>
          <Text style={[styles.detail, { color: isDark ? '#e0e0e0' : '#444444' }]}>หลักสูตร: วิทยาศาสตรบัณฑิต</Text>
          <Text style={[styles.detail, { color: isDark ? '#e0e0e0' : '#444444' }]}>มหาวิทยาลัย: มหาวิทยาลัยขอนแก่น</Text>

          <Text style={[styles.sectionTitle, { color: isDark ? '#f5f5f5' : '#333333' }]}>ความสามารถ / สกิล</Text>
          <View style={styles.skillsContainer}>
            {['HTML & CSS', 'Python', 'UX/UI Design', 'Communication'].map((skill, index) => (
              <LinearGradient key={index} colors={['#AED581', '#81C784']} style={styles.skillBadge}>
                <Text style={styles.skillText}>{skill}</Text>
              </LinearGradient>
            ))}
          </View>

          <Button mode="contained" onPress={() => navigation.navigate('About')} style={{ marginTop: 20 }}>
            ไปหน้ารายวิชา
          </Button>

          <Button mode="outlined" onPress={toggleTheme} style={{ marginTop: 10 }}>
            เปลี่ยนเป็นธีม {isDark ? 'สว่าง' : 'มืด'}
          </Button>
        </BlurView>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  card: {
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  imageWrapper: { borderRadius: 80, padding: 4 },
  imageBorder: { borderRadius: 80, padding: 4 },
  profileImage: { width: 140, height: 140, borderRadius: 70 },
  name: { fontSize: 24, fontWeight: '700', marginTop: 16, marginBottom: 8, textAlign: 'center' },
  detail: { fontSize: 16, marginBottom: 4, textAlign: 'center' },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginTop: 20, marginBottom: 10, alignSelf: 'flex-start' },
  skillsContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' },
  skillBadge: { borderRadius: 20, paddingVertical: 6, paddingHorizontal: 12, margin: 4 },
  skillText: { fontSize: 14, color: '#333' },
});
