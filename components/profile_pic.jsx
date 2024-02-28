import Image from "next/image";

const ProfilePic = () => {
  return (
    <Image
      src="/avatar-jessica.jpeg"
      width={88}
      height={88}
      alt="profile picture"
      className="rounded-full"
    />
  );
};

export default ProfilePic;
