type Props = {
  currentValue: number;
  maxValue: number;
};

export const ProgressBar = ({ currentValue, maxValue }: Props) => {
  const percentage = (currentValue / (maxValue - 1)) * 100;

  return (
    <div className="w-full bg-gray-200 h-2 md:h-3">
      <div
        className="bg-sky-300 h-2 md:h-3"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};
