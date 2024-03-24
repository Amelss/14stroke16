import Image from "next/image"

export default function Footer() {
  return (
    <div className="mb-4 mt-20">
      <div className="flex justify-center align-center  ">
        <div>
          <Image
            src={"/instagram-logo.png"}
            width={35}
            height={35}
            alt="Instagram Logo"
          />
        </div>

        <Image
          src={"/logo_svg.svg"}
          width={220}
          height={220}
          alt="Instagram Logo"
          className="ml-5"
        />

        <div className="ml-4">
          <Image
            src={"/tiktok-logo.png"}
            width={32}
            height={32}
            alt="Tik Tok Logo"
          />
        </div>
      </div>
      <div>
        <p className="mt-2 text-center text-xs text-gray-400">
          &copy; 2024 14STROKE16{" "}
        </p>
      </div>
    </div>
  );
}
