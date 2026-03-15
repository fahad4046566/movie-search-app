
  const StatItem = ({ label, value, isGreen }) => (
  <div className="flex justify-between items-center border-b border-white/5 pb-3">
    <span className="text-sm font-semibold text-base-content/50 uppercase tracking-widest">{label}</span>
    <span className={`font-mono text-lg ${isGreen ? 'text-green-400' : 'text-base-content'}`}>{value}</span>
  </div>
);


export default StatItem
