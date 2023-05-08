import axios from "axios";

export default async function getEID() {
    try {
      const response = await axios.get('http://localhost:9000/api/user/ep');
      const data = response.data;
      if (data.length > 0) {
        return (data[0].ad);
      }
    } catch (error) {
      console.error(error);
      return 0;
    }
}