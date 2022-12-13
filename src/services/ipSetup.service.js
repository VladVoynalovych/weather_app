import { getCurrentUserIp } from "@/services/http/getCurrentUserIp.service";

export async function getCoords() {
  const uploadedJson = await getCurrentUserIp();

  const coords = {
    lat: uploadedJson.data.latitude,
    lon: uploadedJson.data.longitude
  }

  return coords;
}
