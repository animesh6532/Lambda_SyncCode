export default function Avatar({ name = "U" }) {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-yellow-500",
  ];

  const color = colors[name.charCodeAt(0) % colors.length];

  return (
    <div
      className={`${color} w-8 h-8 rounded-full flex items-center justify-center text-white font-bold`}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}