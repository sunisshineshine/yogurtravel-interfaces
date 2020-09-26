interface UidRequest {
  uid: string;
}

interface DocIdRequest extends UidRequest {
  docId: string;
}

interface CreatePlanRequest extends TimeBased {
  uid: string;
  title: string;
}

interface CreatePlanItemRequest extends TimeBased {
  planDocId: string;
  uid: string;
  title: string;
  placeId: string;
}
