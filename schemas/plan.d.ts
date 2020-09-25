interface Plan extends FirebaseDocumentObject {
  uid: string;
  title: string;
  createTime: FirebaseFirestore.Timestamp;

  planItemIds: string[];
  // migration 20200925 : documentRef to string(id)
  planItems?: FirebaseFirestore.DocumentReference[];
  // migration 20200924 places => items(refs)
  places?: string[];
}

interface PlanItem extends FirebaseDocumentObject {
  uid: string;
  placeId: string;
  title: string;
}

interface CreatePlanRequest {
  uid: string;
  title: string;
}

interface CreatePlanItemRequest {
  // internal : uid is require. external : uid will be provied with context
  uid?: string;
  title: string;
  placeId: string;
}
