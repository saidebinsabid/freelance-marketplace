import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../Loading";
import DashboardHome from "../DashboardHome";

const DashboardHomeWrapper = () => {
 const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://freelance-marketplace-server-xi.vercel.app/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  const myTasks = tasks.filter((task) => task.email === user?.email);
  const totalBudget = myTasks.reduce((sum, task) => sum + Number(task.budget), 0);
  const latestDeadline = myTasks.length
    ? new Date(Math.min(...myTasks.map((task) => new Date(task.deadline))))

    : null;

  return (
     <DashboardHome
      tasks={tasks}
      myTasks={myTasks}
      totalBudget={totalBudget}
      latestDeadline={latestDeadline}
    />
  );
};

export default DashboardHomeWrapper;
