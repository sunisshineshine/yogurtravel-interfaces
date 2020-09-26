interface UidRequest {
  uid: string;
}

interface DocIdRequest extends UidRequest {
  docId: string;
}

interface CreatePlanRequest {
  uid: string;
  title: string;
}

interface CreatePlanItemRequest {
  planDocId: string;
  uid: string;
  title: string;
  placeId: string;
}
