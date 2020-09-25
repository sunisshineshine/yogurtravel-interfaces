interface UidRequest {
  uid: string;
}

interface DocIdRequest {
  id: string;
}

interface CreatePlanItemRequest {
  // internal : uid is require. external : uid will be provied with context
  uid?: string;
  title: string;
  placeId: string;
}
