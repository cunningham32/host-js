console.log("yay it worked")

            console.log('1')
      const { ethereum } = window;
      const connect = async () => {
        console.log('connect')
      	try {
          await ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
          console.error(error);
        }
      }

//       const listAccounts = async () => {
//         console.log('list accounts')
//         try {
//           const accounts = await ethereum.request({"method": "personal_listAccounts", "params": []})
//           console.log(accounts)
//         } catch (error) {
//           console.error(error);
//         }
//       }

      const sign = async () => {
          console.log('sign')
          try {
          const signature = await ethereum.request({"method": "personal_sign", "params": ["hello", ethereum.selectedAddress, ""]})
          console.log(signature)
        } catch (error) {
          console.error(error);
        }
      }

      const run = async () => {
        console.log('run')
        await connect()
        console.log(ethereum.selectedAddress)
        await sign()
      }

      console.log('start')
      run()
