import React, { useEffect } from 'react';
import { Canvas, Circle, Oval, Group } from '@shopify/react-native-skia';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import {
  useSharedValue,
  useDerivedValue,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const ReactLogo = () => {
  const size = 300;
  const center = size / 2;
  const strokeWidth = 7;
  const color = '#61DAFB';

  //Posição animada
  const offsetX = useSharedValue(150);
  const offsetY = useSharedValue(150);

  //Gesto de arrastar
  const pan = Gesture.Pan().onChange(event => {
    offsetX.value += event.changeX;
    offsetY.value += event.changeY;
  });

  //Animação de brilho do fundo
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

  //posição animada para Skia
  const translate = useDerivedValue(() => {
    return [{ translateX: offsetX.value }, { translateY: offsetY.value }];
  });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={pan}>
        <Canvas style={{ width: size * 2, height: size * 2 }}>
          <Group transform={translate}>
            {/* Luz de fundo */}
            <Circle cx={center} cy={center} r={90} color={animatedGlowColor} />
            
            <Group
              origin={{ x: center, y: center }}
              transform={[{ rotate: 0 }]}
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

            <Group
              origin={{ x: center, y: center }}
              transform={[{ rotate: Math.PI / 3 }]}
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

            <Group
              origin={{ x: center, y: center }}
              transform={[{ rotate: -Math.PI / 3 }]}
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

            {/* Círculo central */}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ReactLogo;
