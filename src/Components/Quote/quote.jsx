export default function Quote({arrayChars}) {
  return (
    <div className="quote text-4xl text-center">
      <div className="card w-8/12 mx-auto bg-secondary shadow-xl text-primary-content">
        <div className="card-body">
          <h2>      
            {
              arrayChars.map((quote, key)=> <span key={key}>{quote}</span>)
            }
          </h2>
        </div>
      </div>
    </div>
  )
}