import { useState } from "react";

export default function usePresence() {
  const [users, setUsers] = useState([]);
  const [typingUser, setTypingUser] = useState(null);

  const addUser = (user) => {
    setUsers((prev) => [...new Set([...prev, user])]);
  };

  const removeUser = (user) => {
    setUsers((prev) => prev.filter((u) => u !== user));
  };

  const setTyping = (user) => {
    setTypingUser(user);
    setTimeout(() => setTypingUser(null), 1500);
  };

  return {
    users,
    typingUser,
    addUser,
    removeUser,
    setTyping,
  };
}