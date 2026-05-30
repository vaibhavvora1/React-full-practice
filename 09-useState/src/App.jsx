import { useState,  useRef } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #0a0a0a;
    font-family: 'DM Sans', sans-serif;
  }

  .counter-wrapper {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0a0a0a;
    position: relative;
    overflow: hidden;
  }

  .ambient {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(120,100,255,0.06) 0%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .card {
    position: relative;
    background: #111;
    border: 0.5px solid rgba(255,255,255,0.08);
    border-radius: 32px;
    padding: 56px 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    min-width: 320px;
  }

  .label {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
    margin-bottom: 20px;
  }

  .number-container {
    position: relative;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    margin-bottom: 8px;
  }

  .number {
    font-family: 'DM Serif Display', serif;
    font-size: 108px;
    font-weight: 400;
    color: #fff;
    line-height: 1;
    transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: absolute;
    user-select: none;
  }

  .number.pop {
    transform: scale(1.08);
  }

  .range-track {
    width: 100%;
    height: 2px;
    background: rgba(255,255,255,0.07);
    border-radius: 999px;
    margin: 28px 0 36px;
    position: relative;
    overflow: hidden;
  }

  .range-fill {
    height: 100%;
    background: linear-gradient(90deg, rgba(140,120,255,0.6), rgba(180,160,255,0.9));
    border-radius: 999px;
    transition: width 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .controls {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .btn {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 0.5px solid rgba(255,255,255,0.12);
    background: rgba(255,255,255,0.04);
    color: rgba(255,255,255,0.8);
    font-size: 22px;
    font-weight: 300;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.18s ease;
    line-height: 1;
    padding-bottom: 1px;
    font-family: 'DM Sans', sans-serif;
  }

  .btn:hover {
    background: rgba(255,255,255,0.09);
    border-color: rgba(255,255,255,0.22);
    color: #fff;
    transform: scale(1.06);
  }

  .btn:active {
    transform: scale(0.95);
  }

  .btn:disabled {
    opacity: 0.2;
    cursor: not-allowed;
    transform: none;
  }

  .range-labels {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: -24px;
    margin-bottom: 28px;
  }

  .range-label {
    font-size: 10px;
    color: rgba(255,255,255,0.18);
    letter-spacing: 0.05em;
    font-family: 'DM Sans', sans-serif;
  }

  .reset-btn {
    margin-top: 32px;
    background: none;
    border: none;
    color: rgba(255,255,255,0.18);
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    transition: color 0.2s;
    padding: 4px 8px;
  }

  .reset-btn:hover {
    color: rgba(255,255,255,0.45);
  }
`;

export default function App() {
  const [count, setCount] = useState(0);
  const [pop, setPop] = useState(false);
  const timerRef = useRef(null);

  function triggerPop() {
    setPop(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setPop(false), 200);
  }

  function increase() {
    setCount(prev => {
      const next = Math.min(prev + 1, 10);
      if (next !== prev) triggerPop();
      return next;
    });
  }

  function decrease() {
    setCount(prev => {
      const next = Math.max(prev - 1, 0);
      if (next !== prev) triggerPop();
      return next;
    });
  }

  function reset() {
    setCount(0);
    triggerPop();
  }

  return (
    <>
      <style>{styles}</style>
      <div className="counter-wrapper">
        <div className="ambient" />
        <div className="card">
          <span className="label">Counter</span>

          <div className="number-container">
            <span className={`number${pop ? " pop" : ""}`}>{count}</span>
          </div>

          <div className="range-track">
            <div
              className="range-fill"
              style={{ width: `${(count / 10) * 100}%` }}
            />
          </div>
          <div className="range-labels">
            <span className="range-label">0</span>
            <span className="range-label">10</span>
          </div>

          <div className="controls">
            <button
              className="btn"
              onClick={decrease}
              disabled={count === 0}
              aria-label="Decrease"
            >
              −
            </button>
            <button
              className="btn"
              onClick={increase}
              disabled={count === 10}
              aria-label="Increase"
            >
              +
            </button>
          </div>

          <button className="reset-btn" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

