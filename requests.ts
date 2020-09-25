interface UidRequest {
  uid: string;
}

interface DocIdRequest {
  id: string;
}

interface CreatePlanItemRequest {
  planDocId: string;
  uid: string;
  title: string;
  placeId: string;
}
