import React from "react";
import { CardListProps } from "./CardList.types";

//const TodoList: React.FC = () => {
const CardList: React.FC<CardListProps> = ({ data }): JSX.Element => {
  //const AccountDashboard: React.FC<AccountDashboardProps> = ({ ...props }): JSX.Element => {
  return (
    <div>
      {data.map((item) => (
        <div className="card">
          {Object.entries(item).map(([key, value]) => (
            <p>
              {" "}
              <li key={key}>
                {key}: {String(value)}
              </li>{" "}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardList;
