import Image from "next/image";
import Link from "next/link";

interface InDevProps {
  className?: string;
}

const InDev: React.FC<InDevProps> = ({ className = "" }) => {
  return (
    <div
      className={`${className} bg-yellow-300 text-gunmetal p-3 rounded-xl flex items-center gap-4`}
    >
      <Image src="/alert-triangle.svg" width={20} height={20} alt="" />
      <div>
        <h1 className="font-medium text-sm uppercase mb-2">
          Under construction
        </h1>
        <p className="text-sm">
          Follow development{" "}
          <Link
            href={"https://github.com/jessej-samuel/portfolio"}
            className="hover:underline hover:text-blue-600"
          >
            here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default InDev;
