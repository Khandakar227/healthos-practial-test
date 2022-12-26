type AdminBasicInfo = {
  username?: string;
  email?: string;
};

function AdminProfileButton({ username, email }: AdminBasicInfo) {
  return (
    <button className="flex gap-4 items-start justify-center">
      <img
        src={`https://avatars.dicebear.com/api/identicon/${username}.svg`}
        alt="Admin user"
        className="w-9 h-9 rounded-full"
      />
      <div className="text-left">
        <h2 className="font-bold text-xs"> {username} </h2>
        <p className=" text-xs"> {email} </p>
      </div>
    </button>
  );
}

export default AdminProfileButton;
