import styles from './UserLogOut.module.css';
import { logOut } from '../../utilities/users-service';

export default function UserLogOut({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  // Check if 'user' is available before accessing its properties
  if (!user) {
    return null; // Return null or an appropriate loading/placeholder component
  }

  return (
    <div className={styles.UserLogOut}>
      <div>{user.name}</div>
      <div className={styles.email}>{user.email}</div>
      <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
    </div>
  );
}
