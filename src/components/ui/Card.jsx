function Card({ children, className = '' }) {
  return (
    <div className={`brand-card ${className}`}>
      {children}
    </div>
  )
}

export default Card