import Avatar from "../common/Avatar";

export default function UserList({ users = [] }) {
  return (
    <div className="flex flex-col gap-2">
      {users.length === 0 ? (
        <p className="text-gray-400 text-sm">No users online</p>
      ) : (
        users.map((user, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-gray-100 transition"
          >
            <Avatar name={user} />
            <span className="text-sm text-gray-700">{user}</span>
          </div>
        ))
      )}
    </div>
  );
}