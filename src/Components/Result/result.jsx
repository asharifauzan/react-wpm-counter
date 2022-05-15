export default function Result({wpm}) {
  return (
    <div className="result mt-10">
      <div className="stats bg-primary text-primary-content mx-auto block w-max">
        <div className="stat">
          <div className="stat-title">WPM (Word Per Minute)</div>
          <div className="stat-value">{wpm}</div>
          <div className="stat-desc">You suck :)</div>
        </div>      
      </div>
    </div>
  )
}