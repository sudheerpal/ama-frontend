import Image from "next/image";
import userAvatar from "@/assets/contact/user/user1.png";

const UserCard = () => {
  return (
    <div className="flex gap-4 ">
      <div className="max-w-32">
        <Image src={userAvatar} alt="avatar" />
      </div>
      <div className="space-y-1 text-sm">
        <div>
          <h4 className="text-base font-bold">Jhon Doe</h4>
          <p className="font-bold text-gray-600">Head of communications</p>
        </div>
        <p>Email: jhondoe@gmail.com</p>
        <p>Skype: jhondoe.consulting</p>
      </div>
    </div>
  );
};

export default UserCard;
