import { distanceInWords } from "date-fns";

export default function formatItemDate(date) {
  return distanceInWords(date, new Date());
}
