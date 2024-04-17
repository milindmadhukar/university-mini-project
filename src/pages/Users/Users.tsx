import { milind } from "../../assets/initalUsers";
import User from "../../types/User";

interface UsersProps {
  users: User[];
  setUsers: (users: User[]) => void;
}

const Users: React.FC<UsersProps> = ({ users, setUsers }) => {
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
            {user.id !== milind.id ? (
              milind.following.includes(user.id) ? (
                <button
                  onClick={() => {
                    console.log("milind unfollows", user.username);
                    const milindFollowing = milind.following.filter(
                      (id) => id !== user.id,
                    );

                    const userFollowers = user.followers.filter(
                      (id) => id !== milind.id,
                    );

                    const newUsers = users.map((u) => {
                      if (u.id === milind.id) {
                        return {
                          ...u,
                          following: milindFollowing,
                        };
                      }

                      if (u.id === user.id) {
                        return {
                          ...u,
                          followers: userFollowers,
                        };
                      }

                      return u;
                    });

                    setUsers([...newUsers]);
                  }}
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Following
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      const milindFollowers = milind.followers.concat(user.id);
                      const userFollowing = user.following.concat(milind.id);
                      const newUsers = users.map((u) => {
                        if (u.id === milind.id) {
                          return {
                            ...u,
                            followers: milindFollowers,
                          };
                        }

                        if (u.id === user.id) {
                          return {
                            ...u,
                            following: userFollowing,
                          };
                        }

                        return u;
                      });

                      setUsers([...newUsers]);
                    }}
                    className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Follow
                  </button>
                </>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
