import MainGoal from "../components/MainGoal.js"
import SecondaryGoals from "../components/SecondaryGoals"
import MainFeatures from "../components/MainFeatures.js"
import Ussage from "../components/Ussage.js"
import Examples from "../components/Examples"
import StayConnected from "../components/StayConnected"
import CommingSoon from "../components/CommingSoon"

const LandingPage = () => {
    return(
        <div className="landing-page">
            <MainGoal />
            <SecondaryGoals />
            <MainFeatures />
            <Ussage />
            {/* <StayConnected /> */}
            <CommingSoon />
        </div>
    )
}

export default LandingPage