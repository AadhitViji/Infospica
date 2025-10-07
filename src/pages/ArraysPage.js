import React, { useEffect, useMemo, useState } from 'react';
import BackButton from '../components/BackButton';

const ArraysPage = () => {
  const [arr, setArr] = useState([1, 'two', true, { a: 3 }, [4, 5], null, undefined]);

  const [newType, setNewType] = useState('number');
  const [newValue, setNewValue] = useState('');
  const [includesQuery, setIncludesQuery] = useState('');

  useEffect(() => {
    console.log('ArraysPage loaded');
  }, []);

  const [sourceText, setSourceText] = useState('1, 2, 3, a, true');
  const [parseError, setParseError] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [indexValue, setIndexValue] = useState('');
  const [sliceStart, setSliceStart] = useState('');
  const [sliceEnd, setSliceEnd] = useState('');
  const [sortMode, setSortMode] = useState('none');

  const coercePrimitive = (s) => {
    if (s === 'true') return true;
    if (s === 'false') return false;
    if (s === 'null') return null;
    if (s === 'undefined') return undefined;
    const n = Number(s);
    return Number.isNaN(n) ? s : n;
  };

  const parsed = useMemo(() => {
    setParseError('');
    try {
      const val = JSON.parse(sourceText);
      if (Array.isArray(val)) return val;
      return [val];
    } catch {
      try {
        const tokens = sourceText
          .split(',')
          .map(t => t.trim())
          .filter(t => t.length > 0)
          .map(coercePrimitive);
        return tokens;
      } catch (e) {
        setParseError('Unable to parse input');
        return [];
      }
    }
  }, [sourceText]);

  const length = parsed.length;
  const types = useMemo(
    () => parsed.map(x => (Array.isArray(x) ? 'array' : typeof x)),
    [parsed]
  );

  const includesResult = useMemo(() => {
    if (searchValue === '') return 'Enter a value';
    const q = coercePrimitive(searchValue);
    const inc = parsed.includes(q);
    return `includes: ${inc}`;
  }, [parsed, searchValue]);

  const indexOfResult = useMemo(() => {
    if (indexValue === '') return 'Enter a value';
    const q = coercePrimitive(indexValue);
    const idx = parsed.indexOf(q);
    return `indexOf: ${idx}`;
  }, [parsed, indexValue]);

  const sliceResult = useMemo(() => {
    const s = sliceStart === '' ? undefined : Number(sliceStart);
    const e = sliceEnd === '' ? undefined : Number(sliceEnd);
    const out = parsed.slice(s, e);
    return JSON.stringify(out);
  }, [parsed, sliceStart, sliceEnd]);

  const sortResult = useMemo(() => {
    const a = [...parsed];
    switch (sortMode) {
      case 'numberAsc':
        return JSON.stringify(a.filter(x => typeof x === 'number').sort((x, y) => x - y));
      case 'numberDesc':
        return JSON.stringify(a.filter(x => typeof x === 'number').sort((x, y) => y - x));
      case 'stringAsc':
        return JSON.stringify(a.filter(x => typeof x === 'string').sort());
      case 'stringDesc':
        return JSON.stringify(a.filter(x => typeof x === 'string').sort().reverse());
      default:
        return 'Select a sort mode';
    }
  }, [parsed, sortMode]);

  return (
    <div className="conditions-container">
      <h1>Arrays Demo</h1>

      <div className="conditions-section">
        <h2>Input</h2>
        <label htmlFor="arrayInput" className="conditions-label">Array (comma-separated)</label>
        <input
          id="arrayInput"
          className="conditions-input"
          type="text"
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          placeholder='e.g. [1, "a", true] or 1, a, true'
        />
        {parseError ? (
          <div className="conditions-error">{parseError}</div>
        ) : (
          <div className="conditions-helper">Parsed: {JSON.stringify(parsed)}</div>
        )}
      </div>

      <div className="conditions-section">
        <h2>Properties</h2>
        <p className="conditions-badge">length: {length}</p>
        <p className="conditions-badge">types: {JSON.stringify(types)}</p>
      </div>

      <div className="conditions-section">
        <h2>Search</h2>
        <label htmlFor="includesVal" className="conditions-label">includes(value)</label>
        <input id="includesVal" className="conditions-input" type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="value to search" />
        <p className="conditions-badge">{includesResult}</p>

        <label htmlFor="indexVal" className="conditions-label">indexOf(value)</label>
        <input id="indexVal" className="conditions-input" type="text" value={indexValue} onChange={(e) => setIndexValue(e.target.value)} placeholder="value for indexOf" />
        <p className="conditions-badge">{indexOfResult}</p>
      </div>

      <div className="conditions-section">
        <h2>Slice</h2>
        <div className="checkbox-row">
          <div>
            <label htmlFor="sliceStart" className="conditions-label">start</label>
            <input id="sliceStart" className="conditions-input" type="number" value={sliceStart} onChange={(e) => setSliceStart(e.target.value)} placeholder="e.g. 0" />
          </div>
          <div>
            <label htmlFor="sliceEnd" className="conditions-label">end</label>
            <input id="sliceEnd" className="conditions-input" type="number" value={sliceEnd} onChange={(e) => setSliceEnd(e.target.value)} placeholder="e.g. 2" />
          </div>
        </div>
        <p className="conditions-badge">slice result: {sliceResult}</p>
      </div>

      <div className="conditions-section">
        <h2>Sort</h2>
        <label htmlFor="sortMode" className="conditions-label">Mode</label>
        <select id="sortMode" className="conditions-select" value={sortMode} onChange={(e) => setSortMode(e.target.value)}>
          <option value="none">none</option>
          <option value="numberAsc">numbers asc</option>
          <option value="numberDesc">numbers desc</option>
          <option value="stringAsc">strings asc</option>
          <option value="stringDesc">strings desc</option>
        </select>
        <p className="conditions-badge">{sortResult}</p>
      </div>

      <BackButton />
    </div>
  );
};

export default ArraysPage;
