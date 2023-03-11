import React from 'react';
import { View, Text } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
const Razorpay = () => {
    const payment = () => {
        var options = {
            description: 'BusApp payment',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_AHMQcxkRqC6Spu',
            amount: '50',
            name: 'foo',
            prefill: {
              email: 'void@razorpay.com',
              contact: '8667075377',
              name: 'Razorpay Software'
            },
            theme: {color: '#0672CF'}
          }
          RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
          }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
          });
    }
   return (
    <View>
      {payment}
    </View>
  );
};

export default Razorpay;
