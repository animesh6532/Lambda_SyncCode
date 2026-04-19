export default function Footer() {
  return (
    <div className="w-full h-10 bg-white border-t flex items-center justify-center text-xs text-gray-500">
      © {new Date().getFullYear()} LambdaSyncCode — Built with Serverless ⚡
    </div>
  );
}