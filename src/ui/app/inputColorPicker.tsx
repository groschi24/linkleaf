import { ColorInput, ColorPicker } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { useEffect, useState } from 'react';

interface IProps {
  label: string;
  initialColor: string;
  onChange: (value: string) => void;
}

export default function InputColorPicker(props: IProps) {
  const [color, setColor] = useState(props.initialColor);
  const [debouncedColor] = useDebouncedValue(color, 200);

  useEffect(() => {
    props.onChange(debouncedColor);
  }, [debouncedColor]);

  return (
    <div>
      <ColorInput
        label={props.label}
        format='hex'
        value={color}
        onChange={setColor}
      />
    </div>
  );
}
