import React, { useEffect } from 'react';
import { Canvas, Circle, Oval, Group } from '@shopify/react-native-skia';
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

  // Animação da opacidade da luz
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

  // Cor com alfa animado (hex RGBA)
  const animatedGlowColor = useDerivedValue(() => {
    const alpha = Math.round(glow.value * 255)
      .toString(16)
      .padStart(2, '0');
    return `${color}${alpha}`; // "#61DAFB" + alpha
  });

  return (
    <View style={styles.container}>
      <Canvas style={{ width: size, height: size }}>
        {/* Luz de fundo */}
        <Circle cx={center} cy={center} r={93} color={animatedGlowColor} />

        {/* Logo React */}
        <Group origin={{ x: center, y: center }} transform={[{ rotate: 0 }]}>
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

        <Circle cx={center} cy={center} r={15} color={color} />
      </Canvas>
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
