// src/RewardsPage.js
import { useReward } from "react-rewards";
// import TaskList from "./TaskList";
import "./RewardsPage.css";

function RewardsPage() {
  const { reward, isAnimating } = useReward("rewardId", "confetti");

  return (
    <div className="RewardsPage">
      <center>
        <h1>Rewards Page</h1>
      </center>
      <button disabled={isAnimating} onClick={reward}>
        <span id="rewardId" />
        My Balance : <img src="/eco.png" alt="ecoCoin" />
        100
      </button>
      <center>
        <h1>Reward History:</h1>
      </center>
      <center>
         Bonus for SignUp:   <span className="points">+100</span>
        <p>
          You have no rewards yet . <br />
          sell your Wastes to get rewards !
        </p>
      </center>
    </div>
  );
}

export default RewardsPage;
