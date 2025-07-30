import React, { useEffect } from 'react';
import { Canvas, Circle, Oval, Group } from '@shopify/react-native-skia';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { View, StyleSheet, Dimensions } from 'react-native';
import {
  useSharedValue,
  useDerivedValue,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const ReactLogo = () => {
  const size = 300;
  const center = size / 2;
  const strokeWidth = 7;
  const color = '#61DAFB';

  const centerX = width / 2 - center;
  const centerY = height / 2 - center;

  const offsetX = useSharedValue(centerX);
  const offsetY = useSharedValue(centerY);

  // Gesto de arrasto com efeito magnético ao soltar
  const panGesture = Gesture.Pan()
    .onUpdate(e => {
      offsetX.value = e.absoluteX - center;
      offsetY.value = e.absoluteY - center;
    })
    .onEnd(() => {
      offsetX.value = withTiming(centerX, {
        duration: 800,
        easing: Easing.out(Easing.exp),
      });
      offsetY.value = withTiming(centerY, {
        duration: 800,
        easing: Easing.out(Easing.exp),
      });
    });

  // Animação de brilho
  const glow = useSharedValue(0.3);
  useEffect(() => {
    glow.value = withRepeat(
      withTiming(0.6, {
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true,
    );
  }, [glow]);

  const animatedGlowColor = useDerivedValue(() => {
    const alpha = Math.round(glow.value * 255)
      .toString(16)
      .padStart(2, '0');
    return `${color}${alpha}`;
  });

  const translate = useDerivedValue(() => {
    return [{ translateX: offsetX.value }, { translateY: offsetY.value }];
  });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <Canvas style={StyleSheet.absoluteFill}>
          <Group transform={translate}>
            <Circle cx={center} cy={center} r={90} color={animatedGlowColor} />
            {[0, Math.PI / 3, -Math.PI / 3].map((angle, index) => (
              <Group
                key={index}
                origin={{ x: center, y: center }}
                transform={[{ rotate: angle }]}
              >
                <Oval
                  width={180}
                  height={60}
                  x={center - 90}
                  y={center - 30}
                  color={color}
                  style="stroke"
                  strokeWidth={strokeWidth}
                />
              </Group>
            ))}
            <Circle cx={center} cy={center} r={15} color={color} />
          </Group>
        </Canvas>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default ReactLogo;
