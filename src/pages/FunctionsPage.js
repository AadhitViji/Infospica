import React, { useEffect, useMemo, useState } from 'react';
import BackButton from '../components/BackButton';

const FunctionsPage = () => {
  // Function Declaration: add two numbers
  const [addA, setAddA] = useState('');
  const [addB, setAddB] = useState('');

  // Arrow Function: multiply two numbers
  const [mulA, setMulA] = useState('');
  const [mulB, setMulB] = useState('');

  // Default Parameters: greeting
  const [name, setName] = useState('');

  // Arguments demo (using arguments object)
  const [argsList, setArgsList] = useState('');

  // Functions as variables
  const [varOp, setVarOp] = useState('add');
  const [varA, setVarA] = useState('');
  const [varB, setVarB] = useState('');

  useEffect(() => {
    console.log('FunctionsPage loaded');
  }, []);

  // Handlers with logging
  const handleAddA = (e) => { setAddA(e.target.value); console.log('Add A:', e.target.value); };
  const handleAddB = (e) => { setAddB(e.target.value); console.log('Add B:', e.target.value); };
  const handleMulA = (e) => { setMulA(e.target.value); console.log('Mul A:', e.target.value); };
  const handleMulB = (e) => { setMulB(e.target.value); console.log('Mul B:', e.target.value); };
  const handleName = (e) => { setName(e.target.value); console.log('Name:', e.target.value); };
  const handleArgsList = (e) => { setArgsList(e.target.value); console.log('Args list:', e.target.value); };
  const handleVarOp = (e) => { setVarOp(e.target.value); console.log('Var op:', e.target.value); };
  const handleVarA = (e) => { setVarA(e.target.value); console.log('Var A:', e.target.value); };
  const handleVarB = (e) => { setVarB(e.target.value); console.log('Var B:', e.target.value); };

  // Function Declaration
  function add(x = 0, y = 0) {
    return x + y;
  }

  // Arrow Function
  const multiply = (x = 0, y = 0) => x * y;

  // Default Parameter function
  function greet(person = 'Guest') {
    return `Hello, ${person}!`;
  }

  // Arguments object demo
  function sum() {
    // use the arguments object
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += Number(arguments[i]) || 0;
    }
    console.log('sum() arguments.length =', arguments.length, 'total =', total);
    return { total, count: arguments.length };
  }

  const sumResult = useMemo(() => {
    if (!argsList) return 'Enter comma separated numbers';
    const arr = argsList.split(',').map(s => Number(s.trim()));
    if (arr.some(n => Number.isNaN(n))) return 'List contains invalid number(s)';
    const { total, count } = sum(...arr);
    return `args: ${count}, total: ${total}`;
  }, [argsList]);

  // Functions as variables demo
  const variableOpResult = useMemo(() => {
    const a = Number(varA);
    const b = Number(varB);
    if (varA === '' || varB === '') return 'Enter A and B';
    if (Number.isNaN(a) || Number.isNaN(b)) return 'Invalid numbers';
    let op = add;
    if (varOp === 'multiply') op = multiply;
    const res = op(a, b);
    console.log('Functions as variables result:', res);
    return String(res);
  }, [varOp, varA, varB]);

  return (
    <div className="conditions-container">
      <h1>Functions Demo</h1>

      <div className="conditions-section">
        <h2>Function Declaration (add)</h2>
        <label htmlFor="addA" className="conditions-label">A</label>
        <input id="addA" className="conditions-input" type="number" value={addA} onChange={handleAddA} placeholder="Enter number" />
        <label htmlFor="addB" className="conditions-label">B</label>
        <input id="addB" className="conditions-input" type="number" value={addB} onChange={handleAddB} placeholder="Enter number" />
        <div className="conditions-helper">add(a, b)</div>
        <p className="conditions-badge">Result: {add(Number(addA), Number(addB))}</p>
      </div>

      <div className="conditions-section">
        <h2>Arrow Function (multiply)</h2>
        <label htmlFor="mulA" className="conditions-label">A</label>
        <input id="mulA" className="conditions-input" type="number" value={mulA} onChange={handleMulA} placeholder="Enter number" />
        <label htmlFor="mulB" className="conditions-label">B</label>
        <input id="mulB" className="conditions-input" type="number" value={mulB} onChange={handleMulB} placeholder="Enter number" />
        <div className="conditions-helper">(a, b) =&gt; a * b</div>
        <p className="conditions-badge">Result: {multiply(Number(mulA), Number(mulB))}</p>
      </div>

      <div className="conditions-section">
        <h2>Default Parameters</h2>
        <label htmlFor="nameInput" className="conditions-label">Name</label>
        <input id="nameInput" className="conditions-input" type="text" value={name} onChange={handleName} placeholder="Enter name (optional)" />
        <div className="conditions-helper">greet(name = 'Guest')</div>
        <p className="conditions-badge">{greet(name || undefined)}</p>
      </div>

      <div className="conditions-section">
        <h2>Arguments</h2>
        <label htmlFor="argsList" className="conditions-label">Comma-separated numbers</label>
        <input id="argsList" className="conditions-input" type="text" value={argsList} onChange={handleArgsList} placeholder="e.g. 1, 2, 3" />
        <div className="conditions-helper"><code>function sum() {'{'} /* uses arguments */ {'}'}</code></div>
        <p className="conditions-badge">{sumResult}</p>
      </div>

      <div className="conditions-section">
        <h2>Functions used as Variables</h2>
        <label htmlFor="opSelect" className="conditions-label">Operation</label>
        <select id="opSelect" className="conditions-select" value={varOp} onChange={handleVarOp}>
          <option value="add">add</option>
          <option value="multiply">multiply</option>
        </select>
        <label htmlFor="varA" className="conditions-label">A</label>
        <input id="varA" className="conditions-input" type="number" value={varA} onChange={handleVarA} placeholder="Enter number" />
        <label htmlFor="varB" className="conditions-label">B</label>
        <input id="varB" className="conditions-input" type="number" value={varB} onChange={handleVarB} placeholder="Enter number" />
        <div className="conditions-helper">let op = add; op(a, b)</div>
        <p className="conditions-badge">Result: {variableOpResult}</p>
      </div>

      <BackButton />
    </div>
  );
};

export default FunctionsPage;
