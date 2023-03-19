import Button from "../components/Button"
import { GoCloudDownload , GoDatabase , GoDashboard  } from "react-icons/go";

function ButtonPage(){
    return <div>
        <div>
            <Button primary outline rounded>
                <GoCloudDownload/>
                click Me!
                </Button>
        </div>
        <div>
            <Button secondary rounded>
                <GoDatabase/>
                Buy Now!
                </Button>
        </div>
        <div>
            <Button success >
                <GoDashboard/>
                See Deal!
                </Button>
        </div>
        <div>
            <Button danger outline >Hide Ads!</Button>
        </div>
        <div>
            <Button warning rounded >Something</Button>
        </div>
        
             </div>
}
export default ButtonPage
