import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

// This values are the props in the UI
const amount = "30";
const currency = "USD";
const style = {"layout":"vertical"};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                    });
                }}
            />
        </>
    );
}

export default function Payment() {
	return (
        <div>
            <div style={{marginTop:'50px'}} className="col-md-10 col-10 mx-auto">
            <h1>You can mint this font exclusively to yourself</h1>
            <h2>The font TTF File Minting Costs 5$</h2>
            <h3>You can use this font for typing</h3>
            <h3>You Will Recieve an Email with the TTF File as well as a token that acts as the Font Ownership</h3>
        </div>
		<div style={{ maxWidth: "750px", minHeight: "200px", marginLeft: "auto", marginRight: "auto", marginTop: "100px"}}>
            <PayPalScriptProvider
                options={{
                    "client-id": "ARVp-RpkuBExWNZP39p3fF29HPqOT3MoMk2Oou9hoMcGjf43ylbo3cmRHNNSpQTvcKyc6bpcL3M7FAtn",
                    components: "buttons",
                    currency: "USD"
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			</PayPalScriptProvider>
		</div>
        </div>
	);
}