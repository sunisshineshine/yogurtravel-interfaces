interface FirebaseDocumentObject extends UserBased {
  docId: string;
  createTime: number;
}

interface TimeBased {
  startTime: number | null;
  endTime: number | null;
}

interface PlaceBased {
  placeId: string | null;
  address: string | null;
  lat: number | null;
  lng: number | null;
}

interface UserBased {
  uid: string;
}
