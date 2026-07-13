import { features } from "../product";

function ChooseCard({ icon, title, description }) {
  return (
    <div
      className="border border-gray-200 rounded-2xl p-8 bg-white
                transition-all duration-300 ease-in-out
                hover:-translate-y-3
                hover:shadow-2xl
                hover:border-blue-300"
    >
      <img src={icon} alt={title} className="w-12 h-12 mb-6" />

      <h3 className="text-2xl font-semibold mb-3">{title}</h3>

      <p className="text-gray-500 leading-7">{description}</p>
    </div>
  );
}

export default ChooseCard;
