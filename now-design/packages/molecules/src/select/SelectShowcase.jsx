import React, { useState } from 'react';
import Select from './Select';

const materials = [
  { value: 'pig-iron', label: 'Pig Iron', badge: <span className="pill">Furnace</span> },
  { value: 'steel-scrap', label: 'Steel Scrap', badge: <span className="pill">Furnace</span> },
  { value: 'ferro-silicon', label: 'Ferro Silicon', badge: <span className="pill">Additives</span> },
];

const grades = [
  { value: 'di', label: 'DI - Ductile Iron', description: 'Spheroidal graphite iron with enhanced mechanical properties' },
  { value: 'ci', label: 'CI - Cast Iron', description: 'Traditional gray iron compositions' },
];

const SelectShowcase = () => {
  const [mat, setMat] = useState(null);
  const [grade, setGrade] = useState('di');
  const [element, setElement] = useState('Mn');
  const [noSearch, setNoSearch] = useState('ci');

  const elements = [ 'Mn','P','S','Cr','Ni','Mo','Cu','Al','Ti' ].map((e) => ({ value: e, label: e }));

  return (
    <div style={{ padding: 16 }}>
      <h2>Select (Combobox)</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(280px, 1fr))',
        gap: 24
      }}>
        {/* Variant: badge list (materials) */}
        <div>
          <Select
            id="sel-1"
            label="Select raw material…"
            value={mat}
            onChange={setMat}
            options={materials}
            placeholder="Search materials…"
            helperText="Single-select with badges"
          />
        </div>

        {/* Variant: plain list (elements) */}
        <div>
          <Select
            id="sel-2"
            label="Element"
            value={element}
            onChange={setElement}
            options={elements}
            placeholder="Search elements…"
            helperText="Plain list variant"
          />
        </div>

        {/* Variant: description rows (grades) */}
        <div>
          <Select
            id="sel-3"
            label="Grade"
            value={grade}
            onChange={setGrade}
            options={grades}
            placeholder="DI - Ductile Iron…"
            helperText="Label + description rows"
          />
        </div>

        {/* Variant: no search (plain select) */}
        <div>
          <Select
            id="sel-4"
            label="No-search select"
            value={noSearch}
            onChange={setNoSearch}
            options={grades}
            searchable={false}
            helperText="Dropdown without search"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectShowcase;


