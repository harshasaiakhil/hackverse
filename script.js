// script.js
document.addEventListener("DOMContentLoaded", () => {
    const connectWallet = document.getElementById("connectWallet");
  
    // Connect Wallet Button Click
    connectWallet.addEventListener("click", async () => {
      if (window.ethereum) {
        try {
          // Request account access
          const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          const userAddress = accounts[0];
  
          // Update UI
          connectWallet.innerText = "Wallet Connected";
          connectWallet.disabled = true; // Disable the button after connection
        } catch (error) {
          console.error("Error connecting to MetaMask:", error);
        }
      } 
    });
  });