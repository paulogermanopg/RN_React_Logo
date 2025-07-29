import React from 'react';
import { Canvas, Circle, Oval, Group } from '@shopify/react-native-skia';
import { View, StyleSheet } from 'react-native';

const ReactLogo = () => {
  const size = 300;
  const center = size / 2;
  const strokeWidth = 7;
  const color = '#61DAFB';

  return (
    <View style={styles.container}>
      <Canvas style={{ width: size, height: size }}>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ReactLogo;
