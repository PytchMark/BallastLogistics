const options = ['Business', 'Home Add-on', 'Storage', 'Office', 'Rental/Airbnb'];

type Props = {
  onChoose: (useCase: string) => void;
};

function WhatToBuildTiles({ onChoose }: Props) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {options.map((option) => (
        <button
          key={option}
          className="group rounded-xl border border-white/10 bg-white/5 p-4 text-left transition hover:-translate-y-1 hover:border-ballast-300/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ballast-300/60"
          onClick={() => onChoose(option)}
        >
          <p className="text-sm text-slate-300">Build concept</p>
          <p className="mt-1 text-base font-semibold text-white">{option}</p>
          <p className="mt-2 text-xs text-ballast-300 opacity-0 transition group-hover:opacity-100">Explore pricing</p>
        </button>
      ))}
    </div>
  );
}

export default WhatToBuildTiles;
