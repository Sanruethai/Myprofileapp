import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme, Button } from 'react-native-paper';
import { useAppTheme } from '../contexts/ThemeContext';

export default function AboutScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.primary }]}>
        รายวิชา: การพัฒนาแอปบนอุปกรณ์เคลื่อนที่แบบข้ามแพลตฟอร์ม
      </Text>

      <Text style={[styles.sectionTitle, { color: colors.primary }]}>คำอธิบายรายวิชา</Text>

      <Text style={[styles.paragraph, { color: colors.onBackground }]}>
        สถาปัตยกรรมฮาร์ดแวร์ คุณลักษณะและข้อจำกัดของอุปกรณ์เคลื่อนที่ เครื่องมือและภาษาที่ใช้สำหรับพัฒนาโปรแกรมประยุกต์บนอุปกรณ์เคลื่อนที่หลากหลายแพลตฟอร์ม การพัฒนาโปรแกรมประยุกต์โดยใช้ภาษาหลากหลายแพลตฟอร์ม กระบวนการพัฒนา การใช้หน่วยความจำและส่วนเก็บบันทึกข้อมูล การขออนุญาตและการเข้าถึงส่วนฮาร์ดแวร์ ส่วนติดต่อกับผู้ใช้ การสื่อสารเครือข่ายกับภายนอก การเชื่อมโยงกับระบบเครื่องแม่ข่าย การทดสอบโปรแกรมโดยใช้ระบบคอมพิวเตอร์ ประเด็นด้านความมั่นคง และการฝึกปฏิบัติ
      </Text>

      <Text style={[styles.sectionTitle, { color: colors.primary }]}>หัวข้อหลัก</Text>

      {[
        '1. สถาปัตยกรรมฮาร์ดแวร์ของอุปกรณ์พกพา',
        '2. คุณลักษณะและข้อจำกัดของอุปกรณ์เคลื่อนที่',
        '3. เครื่องมือและภาษาสำหรับพัฒนาแอป (React Native, Flutter, ฯลฯ)',
        '4. การพัฒนาแอปแบบ Cross-platform',
        '5. การใช้หน่วยความจำและพื้นที่จัดเก็บ',
        '6. การขอ permission และเข้าถึง hardware เช่น กล้อง, GPS',
        '7. การออกแบบ UI/UX สำหรับมือถือ',
        '8. การสื่อสารกับเครือข่ายและระบบ backend',
        '9. การทดสอบแอปพลิเคชันบนอุปกรณ์จริงและ emulator',
        '10. ความมั่นคงปลอดภัยของข้อมูล',
        '11. ฝึกปฏิบัติพัฒนาแอปจริง'
      ].map((item, index) => (
        <Text key={index} style={[styles.bullet, { color: colors.onBackground }]}>
          {item}
        </Text>
      ))}

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        กลับหน้าโปรไฟล์
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
  bullet: {
    fontSize: 16,
    marginBottom: 6,
  },
  button: {
    marginTop: 30,
    alignSelf: 'center',
  },
});
