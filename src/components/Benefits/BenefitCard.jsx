function BenefitCard({ icon, title, text }) {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="w-28 h-28 rounded-full border-8 border-amber-400 flex justify-center items-center">
        {icon}
      </div>
      <h1 className="font-bold text-2xl">{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default BenefitCard;
