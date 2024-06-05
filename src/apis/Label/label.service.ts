import { fetchData } from "@/helper/fetch.helper";
import { ILabelService } from "./label.interface";

class LabelService implements ILabelService {
  async getLabel() {
    try {
      const result = await fetchData("/label", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      const parsedData = await result.json();

      return parsedData?.content?.value;
    } catch (error) {
      console.error(error);
    }
  }
  async updateLabel(value: string) {
    try {
      const result = await fetchData("/label", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value }),
      });

      const parsedData = await result.json();

      return parsedData;
    } catch (error) {
      console.error(error);
    }
  }
}

const labelService = new LabelService();

export { labelService };
