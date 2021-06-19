import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    AuthoriZation: "Client-ID 3vUhERyeHjLTfcl7sn0jlCNa6B5OUfVGaB1ztAsnvlY",
  },
});
