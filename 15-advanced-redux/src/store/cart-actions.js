import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return (dispatch) => {
    const fetchData = async () => {
      try {
        const response = fetch(
          "https://react-http-c0588-default-rtdb.firebaseio.com/cart04.json"
        );

        if (!response.ok) {
          throw new Error("cart data not fetched");
        }

        const data = await response.json();

        return data;
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed!",
          })
        );
      }
    };
    const cartData = fetchData();
    dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
    }));
  };
};

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-c0588-default-rtdb.firebaseio.com/cart04.json",
        {
          method: "PUT",
          body: JSON.stringify(cartData),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Sending cart data failed. Status code: " + response.status
        );
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
