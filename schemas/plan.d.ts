interface Plan extends FirebaseDocumentObject {
  uid: string;
  title: string;
  createTime: FirebaseFirestore.Timestamp;
  planItems: FirebaseFirestore.DocumentReference[];
  // old
  // places => items 20200924
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
