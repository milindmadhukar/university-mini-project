import { Dispatch, SetStateAction } from "react";
import User from "../../types/User";

interface UsersProps {
  users: User[];
  currentUser: User;
  setUsers: Dispatch<SetStateAction<User[]>>;
}

const Users: React.FC<UsersProps> = ({ users, setUsers, currentUser }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {users.map((user) => (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
            <img src={user.avatar} alt={user.username} className="rounded" />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {user.username}
            </h4>
          </div>
          <div className="flex justify-center">
            {user.id !== currentUser.id ? (
              <button
                type="button"
                onClick={() => {
                  if (user.followers.includes(currentUser.id)) {
                    setUsers((usrs) =>
                      usrs.map((u) => ({
                        ...u,
                        followers:
                          u.id === user.id
                            ? u.followers.filter((f) => f !== currentUser.id)
                            : u.followers,
                        following:
                          u.id === currentUser.id
                            ? currentUser.following.filter((f) => f !== user.id)
                            : u.following,
                      })),
                    );
                  } else {
                    setUsers((usrs) =>
                      usrs.map((u) => ({
                        ...u,
                        followers:
                          u.id === user.id
                            ? u.followers.concat(currentUser.id)
                            : u.followers,
                        following:
                          u.id === currentUser.id
                            ? currentUser.following.concat(user.id)
                            : u.following,
                      })),
                    );
                  }
                }}
                className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                {user.followers.includes(currentUser.id)
                  ? "Following"
                  : "Follow"}
              </button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
