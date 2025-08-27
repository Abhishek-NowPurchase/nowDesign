import React, { useState } from 'react';
import MinMax from './MinMax';

const MinMaxShowcase = () => {
  const [range1, setRange1] = useState({ min: '', max: '' });
  const [range2, setRange2] = useState({ min: 10, max: 25 });
  const [range3, setRange3] = useState({ min: 1500, max: 1540 });
  const [range4, setRange4] = useState({ min: 20, max: 80 });

  return (
    <div style={{ padding: 16 }}>
      <h2>MinMax Molecule</h2>

      <div style={{ display: 'grid', gap: 16 }}>
        <div>
          <h4>Basic</h4>
          <MinMax id="mm-1" label="Range" value={range1} onChange={setRange1} helperText="Enter any range" />
        </div>
        <div>
          <h4>Numeric with domain and unit</h4>
          <MinMax id="mm-2" label="Temperature" value={range2} onChange={setRange2}
            domain={{ min: -50, max: 150 }} step={0.5} precision={1} unit="°C"
            helperText="Allowed operating temperature" />
        </div>
        <div>
          <h4>Fixed equal widths (fieldWidth)</h4>
          <MinMax id="mm-3" label="Tapping Temperature Range (°C)" value={range3} onChange={setRange3}
            fieldWidth={220} unit="°C" />
        </div>
        <div>
          <h4>Per-field widths (widths)</h4>
          <MinMax id="mm-4" label="Pressure (bar)" value={range4} onChange={setRange4}
            widths={{ min: 180, max: 260 }} unit="bar" />
        </div>
        <div>
          <h4>Full width (responsive)</h4>
          <div style={{ width: 640 }}>
            <MinMax id="mm-5" label="Length (mm)" value={range4} onChange={setRange4}
              fullWidth unit="mm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinMaxShowcase;


