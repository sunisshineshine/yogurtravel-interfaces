interface UidRequest extends UserBased {}

interface DocIdRequest extends UserBased {
  docId: string;
}

interface CreatePlanRequest extends TimeBased, UserBased {
  title: string;
}

interface CreatePlanItemRequest extends UserBased, TimeBased, PlaceBased {
  planDocId: string;
  title: string;
}

interface CreateEventItemRequest extends UserBased, TimeBased {
  planItemDocId: string;
  title: string;
}

interface UpdateRequest<T> extends FirebaseDocumentObject {
  item: T;
}
