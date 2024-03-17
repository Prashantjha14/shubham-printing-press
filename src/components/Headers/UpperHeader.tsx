const UpperHeader = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center bg-iceberg text-xs p-2 font-semibold text-charcoal md:text-sm md:p-3 dark:bg-charcoal dark:text-iceberg">
      <h4>{text}</h4>
    </div>
  );
};

export default UpperHeader;
