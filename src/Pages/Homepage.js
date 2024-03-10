import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import "./Homepage.css";
import RecentTransferCard from "../Components/homepage/recentTransferCard";
import OrderCard from "../Components/homepage/orderCard";
import InsightCard from "../Components/homepage/insightCard";
import BalanceOverview from "../Components/homepage/balanceOverview";
import FinchCommand from "../Components/homepage/finchCommand";

const HomePage = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      <BalanceOverview />
      <div className="sect">
        <Hero />
        <RecentTransferCard />
        <OrderCard />
        <InsightCard />
        <FinchCommand />
      </div>
    </div>
  );
};

export default HomePage;
