export default function AdSlot({ slot }) {
  return (
    <div className="w-full h-24 bg-primary-green/30 border border-dashed border-secondary-green/40 rounded-lg flex items-center justify-center">
      <span className="text-text-dark text-xs font-medium">Ad Slot: {slot}</span>
    </div>
  );
}